<template>
  <div class="p-4">
    <!-- 代谢打卡宣传卡片 -->
    <div class="bg-gradient-to-r from-cyan-300 to-blue-400 rounded-xl p-6 text-white mb-4">
      <div class="flex items-center justify-center mb-4">
        <div class="text-6xl">🚽</div>
      </div>
      <h3 class="text-2xl font-bold text-center mb-2">肠胃通，减重才轻松</h3>
      <div class="mt-4 text-center">
        <p class="text-sm">加强膳食纤维</p>
        <p class="text-sm">每日多喝水</p>
      </div>
    </div>

    <!-- 代谢状态选项 -->
    <div class="grid grid-cols-3 gap-4 mb-4">
      <div 
        v-for="status in metabolismStatuses" 
        :key="status.value"
        @click="selectStatus(status.value)"
        :class="[
          selectedStatus === status.value ? 'ring-2 ring-primary scale-105' : 'opacity-70',
          selectedStatus === status.value ? '' : ''
        ]"
        class="flex flex-col items-center nav-action cursor-pointer transition-all">
        <div 
          :class="selectedStatus === status.value ? 'bg-orange-100' : 'bg-gray-100'"
          class="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-2 transition-colors">
          {{ status.emoji }}
        </div>
        <span :class="selectedStatus === status.value ? 'text-gray-800 font-bold' : 'text-gray-600'" class="text-sm">
          {{ status.label }}
        </span>
      </div>
    </div>

    <!-- 详细记录 -->
    <div v-if="selectedStatus" class="bg-white rounded-xl p-4 mb-4 card-shadow">
      <h4 class="font-bold text-sm mb-3">代谢详情</h4>
      
      <div class="space-y-3">
        <!-- 次数记录 -->
        <div>
          <label class="text-xs text-gray-500 mb-2 block">今日次数</label>
          <div class="flex items-center gap-3">
            <button @click="decrementCount" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              <i class="fa fa-minus text-gray-600"></i>
            </button>
            <span class="text-3xl font-bold text-primary flex-1 text-center">{{ metabolismCount }}</span>
            <button @click="incrementCount" class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark">
              <i class="fa fa-plus"></i>
            </button>
          </div>
        </div>

        <!-- 时间记录 -->
        <div>
          <label class="text-xs text-gray-500 mb-1 block">记录时间</label>
          <input 
            v-model="metabolismTime" 
            type="time" 
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
        </div>

        <!-- 感受记录 -->
        <div>
          <label class="text-xs text-gray-500 mb-1 block">其他说明</label>
          <textarea 
            v-model="notes" 
            rows="2" 
            placeholder="记录一下身体状况..."
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"></textarea>
        </div>

        <!-- 饮水提醒 -->
        <div class="p-3 bg-blue-50 rounded-lg">
          <div class="flex items-center gap-2 mb-2">
            <i class="fa fa-tint text-blue-500"></i>
            <span class="text-sm font-bold text-gray-700">今日饮水</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-blue-500">{{ waterIntake }}ml</span>
            <button @click="addWater" class="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs hover:bg-blue-600">
              +250ml
            </button>
          </div>
          <div class="mt-2 text-xs text-gray-500">建议每日饮水 2000ml</div>
        </div>
      </div>
    </div>

    <!-- 本周统计 -->
    <div class="bg-white rounded-xl p-4 mb-4 card-shadow">
      <h4 class="font-bold text-sm mb-3">本周代谢统计</h4>
      <div class="grid grid-cols-7 gap-2 text-center">
        <div v-for="day in weekMetabolismStats" :key="day.day" class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-1"
               :class="day.count > 0 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'">
            {{ day.count }}
          </div>
          <div class="text-xs text-gray-500">{{ day.day }}</div>
        </div>
      </div>
    </div>

    <!-- 健康提示 -->
    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
      <div class="flex items-start gap-2">
        <i class="fa fa-lightbulb text-yellow-500 mt-0.5"></i>
        <div class="flex-1">
          <div class="text-sm font-bold text-gray-700 mb-1">健康小贴士</div>
          <div class="text-xs text-gray-600">
            正常成年人每天应排便1-2次，如果连续2-3天没有排便或排便困难，建议多喝水、多吃蔬菜水果，必要时咨询医生。
          </div>
        </div>
      </div>
    </div>

    <!-- 动态按钮 -->
    <div class="flex gap-3">
      <button 
        @click="submitCheckIn('private')"
        :disabled="!canSubmit"
        :class="canSubmit ? 'bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700' : 'bg-gray-300 cursor-not-allowed'"
        class="flex-1 text-white py-3 rounded-lg font-bold transition-all">
        私密保存
      </button>
      <button 
        @click="submitCheckIn('public')"
        :disabled="!canSubmit"
        :class="canSubmit ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'"
        class="flex-1 py-3 rounded-lg font-bold transition-all">
        同步动态
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'MetabolismCheckIn',
  emits: ['submit'],
  setup(props, { emit }) {
    const metabolismStatuses = [
      { value: 'smooth', label: '顺畅', emoji: '💧' },
      { value: 'fair', label: '意犹未尽', emoji: '😐' },
      { value: 'difficult', label: '困难', emoji: '😣' }
    ]

    const selectedStatus = ref('')
    const metabolismCount = ref(1)
    const metabolismTime = ref(new Date().toTimeString().slice(0, 5))
    const notes = ref('')
    const waterIntake = ref(1500)

    // 模拟本周数据
    const weekMetabolismStats = ref([
      { day: '周一', count: 2 },
      { day: '周二', count: 1 },
      { day: '周三', count: 2 },
      { day: '周四', count: 1 },
      { day: '周五', count: 2 },
      { day: '周六', count: 1 },
      { day: '周日', count: 0 }
    ])

    const canSubmit = computed(() => {
      return selectedStatus.value && metabolismCount.value > 0
    })

    const selectStatus = (status) => {
      selectedStatus.value = status
    }

    const incrementCount = () => {
      if (metabolismCount.value < 10) {
        metabolismCount.value++
      }
    }

    const decrementCount = () => {
      if (metabolismCount.value > 0) {
        metabolismCount.value--
      }
    }

    const addWater = () => {
      waterIntake.value += 250
    }

    const submitCheckIn = (visibility) => {
      if (!canSubmit.value) return

      const checkInData = {
        type: 'metabolism',
        status: selectedStatus.value,
        count: metabolismCount.value,
        time: metabolismTime.value,
        waterIntake: waterIntake.value,
        notes: notes.value,
        visibility,
        timestamp: new Date().toISOString()
      }

      emit('submit', checkInData)

      // 重置表单
      resetForm()
    }

    const resetForm = () => {
      selectedStatus.value = ''
      metabolismCount.value = 1
      notes.value = ''
    }

    return {
      metabolismStatuses,
      selectedStatus,
      metabolismCount,
      metabolismTime,
      notes,
      waterIntake,
      weekMetabolismStats,
      canSubmit,
      selectStatus,
      incrementCount,
      decrementCount,
      addWater,
      submitCheckIn
    }
  }
}
</script>
