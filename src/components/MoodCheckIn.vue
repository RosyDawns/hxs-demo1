<template>
  <div class="p-4">
    <!-- 心情打卡宣传卡片 -->
    <div class="bg-gradient-to-r from-pink-300 to-yellow-200 rounded-xl p-6 text-center mb-4">
      <div class="bg-white/80 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
        <div class="text-6xl">🦁</div>
      </div>
      <h3 class="text-2xl font-bold text-gray-800 mb-2">好心情催生快乐素，别让坏情绪喂胖你!</h3>
      <p class="text-sm text-gray-600">唤醒兽 WAKEBEAST</p>
    </div>

    <!-- 心情选项 -->
    <div class="grid grid-cols-4 gap-4 mb-4">
      <div 
        v-for="mood in moodOptions" 
        :key="mood.value"
        @click="selectMood(mood.value)"
        :class="selectedMood === mood.value ? 'ring-2 ring-primary scale-105' : ''"
        class="flex flex-col items-center nav-action cursor-pointer transition-all">
        <div class="text-5xl mb-2">{{ mood.emoji }}</div>
        <span class="text-xs text-gray-800 font-bold">{{ mood.label }}</span>
        <span class="text-xs text-gray-400 text-center">{{ mood.desc }}</span>
      </div>
    </div>

    <!-- 心情详情记录 -->
    <div v-if="selectedMood" class="bg-white rounded-xl p-4 mb-4 card-shadow">
      <h4 class="font-bold text-sm mb-3">记录你的心情</h4>
      
      <div class="space-y-3">
        <div>
          <label class="text-xs text-gray-500 mb-1 block">今天发生了什么？</label>
          <textarea 
            v-model="moodNote" 
            rows="4" 
            placeholder="写下今天的心情故事..."
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"></textarea>
        </div>

        <!-- 情绪标签 -->
        <div>
          <label class="text-xs text-gray-500 mb-2 block">情绪标签</label>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="tag in emotionTags" 
              :key="tag"
              @click="toggleTag(tag)"
              :class="selectedTags.includes(tag) ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600'"
              class="px-3 py-1 rounded-full text-xs transition-colors">
              {{ tag }}
            </button>
          </div>
        </div>

        <!-- 心情等级 -->
        <div>
          <label class="text-xs text-gray-500 mb-2 block">心情指数: {{ moodLevel }}/10</label>
          <input 
            v-model.number="moodLevel" 
            type="range" 
            min="1" 
            max="10" 
            class="w-full">
          <div class="flex justify-between text-xs text-gray-400 mt-1">
            <span>😢 低落</span>
            <span>😐 一般</span>
            <span>😊 开心</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 心情统计 -->
    <div class="bg-white rounded-xl p-4 mb-4 card-shadow">
      <h4 class="font-bold text-sm mb-3">本周心情统计</h4>
      <div class="grid grid-cols-7 gap-2 text-center">
        <div v-for="day in weekMoodStats" :key="day.day" class="flex flex-col items-center">
          <div class="text-2xl mb-1">{{ day.emoji }}</div>
          <div class="text-xs text-gray-500">{{ day.day }}</div>
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
  name: 'MoodCheckIn',
  emits: ['submit'],
  setup(props, { emit }) {
    const moodOptions = [
      { value: 'happy', label: '愉快', emoji: '😆', desc: '今天真心情愉快的一天' },
      { value: 'good', label: '良好', emoji: '😊', desc: '今天真心情挺好' },
      { value: 'normal', label: '一般', emoji: '😐', desc: '今天真心情一般' },
      { value: 'bad', label: '糟糕', emoji: '😣', desc: '今天真心情糟糕' }
    ]

    const emotionTags = ['开心', '平静', '焦虑', '兴奋', '疲惫', '感恩', '孤独', '满足']

    const selectedMood = ref('')
    const moodNote = ref('')
    const moodLevel = ref(5)
    const selectedTags = ref([])

    // 模拟本周数据
    const weekMoodStats = ref([
      { day: '周一', emoji: '😊' },
      { day: '周二', emoji: '😆' },
      { day: '周三', emoji: '😐' },
      { day: '周四', emoji: '😊' },
      { day: '周五', emoji: '😆' },
      { day: '周六', emoji: '😊' },
      { day: '周日', emoji: '😐' }
    ])

    const canSubmit = computed(() => {
      return selectedMood.value && (moodNote.value || selectedTags.value.length > 0)
    })

    const selectMood = (mood) => {
      selectedMood.value = mood
    }

    const toggleTag = (tag) => {
      const index = selectedTags.value.indexOf(tag)
      if (index > -1) {
        selectedTags.value.splice(index, 1)
      } else {
        selectedTags.value.push(tag)
      }
    }

    const submitCheckIn = (visibility) => {
      if (!canSubmit.value) return

      const checkInData = {
        type: 'mood',
        mood: selectedMood.value,
        note: moodNote.value,
        level: moodLevel.value,
        tags: selectedTags.value,
        visibility,
        timestamp: new Date().toISOString()
      }

      emit('submit', checkInData)

      // 重置表单
      resetForm()
    }

    const resetForm = () => {
      selectedMood.value = ''
      moodNote.value = ''
      moodLevel.value = 5
      selectedTags.value = []
    }

    return {
      moodOptions,
      emotionTags,
      selectedMood,
      moodNote,
      moodLevel,
      selectedTags,
      weekMoodStats,
      canSubmit,
      selectMood,
      toggleTag,
      submitCheckIn
    }
  }
}
</script>
