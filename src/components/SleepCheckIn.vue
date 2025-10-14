<template>
  <div class="p-4">
    <!-- 睡眠打卡宣传卡片 -->
    <div class="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl p-6 text-white text-center mb-4">
      <h3 class="text-2xl font-bold mb-4">深夜不睡，熬肉煮腱胖!</h3>
      <div class="flex justify-center gap-4">
        <div class="bg-white/20 rounded-lg p-4 backdrop-blur-sm flex-1">
          <div class="text-xs mb-2">睡眠时间</div>
          <div class="bg-gray-800 rounded-lg p-3 mb-2">
            <div class="text-gray-400 text-xs">{{ formatTime(sleepTime, -1) }}</div>
            <div class="text-3xl font-bold">{{ formatTime(sleepTime) }}</div>
            <div class="text-gray-400 text-xs">{{ formatTime(sleepTime, 1) }}</div>
          </div>
          <button 
            @click="showSleepTimePicker = true"
            class="bg-orange-400 text-white px-4 py-2 rounded-full text-sm w-full hover:bg-orange-500 transition-colors">
            {{ sleepStarted ? '已开始' : '睡眠开始' }}
          </button>
        </div>
        <div class="bg-white/20 rounded-lg p-4 backdrop-blur-sm flex-1">
          <div class="text-xs mb-2">起床时间</div>
          <div class="bg-gray-800 rounded-lg p-3 mb-2">
            <div class="text-gray-400 text-xs">{{ formatTime(wakeTime, -1) }}</div>
            <div class="text-3xl font-bold">{{ formatTime(wakeTime) }}</div>
            <div class="text-gray-400 text-xs">{{ formatTime(wakeTime, 1) }}</div>
          </div>
          <button 
            @click="showWakeTimePicker = true"
            class="bg-orange-400 text-white px-4 py-2 rounded-full text-sm w-full hover:bg-orange-500 transition-colors">
            {{ wakeEnded ? '已结束' : '睡眠结束' }}
          </button>
        </div>
      </div>
    </div>

    <!-- 时间选择器弹窗 -->
    <div v-if="showSleepTimePicker" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click="showSleepTimePicker = false">
      <div class="bg-white rounded-xl p-6 m-4 max-w-sm w-full" @click.stop>
        <h4 class="font-bold mb-4">选择睡眠时间</h4>
        <input 
          v-model="sleepTime" 
          type="time" 
          class="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:border-primary">
        <div class="flex gap-3 mt-4">
          <button @click="showSleepTimePicker = false" class="flex-1 px-4 py-2 bg-gray-100 rounded-lg">取消</button>
          <button @click="confirmSleepTime" class="flex-1 px-4 py-2 bg-primary text-white rounded-lg">确认</button>
        </div>
      </div>
    </div>

    <div v-if="showWakeTimePicker" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click="showWakeTimePicker = false">
      <div class="bg-white rounded-xl p-6 m-4 max-w-sm w-full" @click.stop>
        <h4 class="font-bold mb-4">选择起床时间</h4>
        <input 
          v-model="wakeTime" 
          type="time" 
          class="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:border-primary">
        <div class="flex gap-3 mt-4">
          <button @click="showWakeTimePicker = false" class="flex-1 px-4 py-2 bg-gray-100 rounded-lg">取消</button>
          <button @click="confirmWakeTime" class="flex-1 px-4 py-2 bg-primary text-white rounded-lg">确认</button>
        </div>
      </div>
    </div>

    <!-- 睡眠详情 -->
    <div v-if="sleepStarted && wakeEnded" class="bg-white rounded-xl p-4 mb-4 card-shadow">
      <h4 class="font-bold text-sm mb-3">睡眠详情</h4>
      <div class="space-y-3">
        <div class="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
          <span class="text-sm text-gray-600">睡眠时长</span>
          <span class="text-lg font-bold text-primary">{{ sleepDuration }} 小时</span>
        </div>

        <!-- 睡眠质量 -->
        <div>
          <label class="text-xs text-gray-500 mb-2 block">睡眠质量</label>
          <div class="flex gap-2">
            <button 
              v-for="quality in sleepQualities" 
              :key="quality.value"
              @click="sleepQuality = quality.value"
              :class="sleepQuality === quality.value ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'"
              class="flex-1 py-2 rounded-lg text-sm transition-colors">
              {{ quality.label }}
            </button>
          </div>
        </div>

        <!-- 睡眠备注 -->
        <div>
          <label class="text-xs text-gray-500 mb-1 block">睡眠备注</label>
          <textarea 
            v-model="sleepNote" 
            rows="2" 
            placeholder="记录睡眠情况..."
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"></textarea>
        </div>
      </div>
    </div>

    <!-- 睡眠统计 -->
    <div class="bg-white rounded-xl p-4 mb-4 card-shadow">
      <h4 class="font-bold text-sm mb-3">本周睡眠统计</h4>
      <div class="grid grid-cols-7 gap-2 text-center">
        <div v-for="day in weekSleepStats" :key="day.day" class="flex flex-col items-center">
          <div class="text-lg font-bold text-primary">{{ day.hours }}</div>
          <div class="text-xs text-gray-500">{{ day.day }}</div>
        </div>
      </div>
      <div class="mt-3 p-3 bg-gray-50 rounded-lg">
        <div class="text-xs text-gray-500 mb-1">平均睡眠时长</div>
        <div class="text-2xl font-bold text-primary">7.2 小时/天</div>
      </div>
    </div>

    <!-- 动态按钮 -->
    <div class="flex gap-3">
      <button 
        @click="submitCheckIn('public')"
        :disabled="!canSubmit"
        :class="canSubmit ? 'bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700' : 'bg-gray-300 cursor-not-allowed'"
        class="flex-1 text-white py-3 rounded-lg font-bold transition-all">
        公开动态
      </button>
      <button 
        @click="submitCheckIn('private')"
        :disabled="!canSubmit"
        :class="canSubmit ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'"
        class="flex-1 py-3 rounded-lg font-bold transition-all">
        私密动态
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'SleepCheckIn',
  emits: ['submit'],
  setup(props, { emit }) {
    const sleepQualities = [
      { value: 'poor', label: '差' },
      { value: 'fair', label: '一般' },
      { value: 'good', label: '好' },
      { value: 'excellent', label: '优秀' }
    ]

    const sleepTime = ref('22:00')
    const wakeTime = ref('08:00')
    const sleepQuality = ref('good')
    const sleepNote = ref('')
    const sleepStarted = ref(false)
    const wakeEnded = ref(false)
    const showSleepTimePicker = ref(false)
    const showWakeTimePicker = ref(false)

    // 模拟本周数据
    const weekSleepStats = ref([
      { day: '周一', hours: '7.5h' },
      { day: '周二', hours: '8h' },
      { day: '周三', hours: '6.5h' },
      { day: '周四', hours: '7h' },
      { day: '周五', hours: '7.5h' },
      { day: '周六', hours: '8h' },
      { day: '周日', hours: '6h' }
    ])

    const sleepDuration = computed(() => {
      const [sleepHour, sleepMin] = sleepTime.value.split(':').map(Number)
      const [wakeHour, wakeMin] = wakeTime.value.split(':').map(Number)
      
      let duration = (wakeHour * 60 + wakeMin) - (sleepHour * 60 + sleepMin)
      if (duration < 0) duration += 24 * 60
      
      return (duration / 60).toFixed(1)
    })

    const canSubmit = computed(() => {
      return sleepStarted.value && wakeEnded.value
    })

    const formatTime = (time, offset = 0) => {
      const [hour, min] = time.split(':').map(Number)
      let newHour = hour + offset
      if (newHour < 0) newHour += 24
      if (newHour >= 24) newHour -= 24
      return `${String(newHour).padStart(2, '0')}:${String(min).padStart(2, '0')}`
    }

    const confirmSleepTime = () => {
      sleepStarted.value = true
      showSleepTimePicker.value = false
    }

    const confirmWakeTime = () => {
      wakeEnded.value = true
      showWakeTimePicker.value = false
    }

    const submitCheckIn = (visibility) => {
      if (!canSubmit.value) return

      const checkInData = {
        type: 'sleep',
        sleepTime: sleepTime.value,
        wakeTime: wakeTime.value,
        duration: sleepDuration.value,
        quality: sleepQuality.value,
        note: sleepNote.value,
        visibility,
        timestamp: new Date().toISOString()
      }

      emit('submit', checkInData)

      // 重置表单
      resetForm()
    }

    const resetForm = () => {
      sleepStarted.value = false
      wakeEnded.value = false
      sleepQuality.value = 'good'
      sleepNote.value = ''
    }

    return {
      sleepQualities,
      sleepTime,
      wakeTime,
      sleepQuality,
      sleepNote,
      sleepStarted,
      wakeEnded,
      showSleepTimePicker,
      showWakeTimePicker,
      weekSleepStats,
      sleepDuration,
      canSubmit,
      formatTime,
      confirmSleepTime,
      confirmWakeTime,
      submitCheckIn
    }
  }
}
</script>
