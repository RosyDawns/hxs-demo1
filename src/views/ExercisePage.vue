<template>
  <div class="page bg-gradient-to-b from-orange-50 to-white min-h-screen pb-6">
    <!-- 顶部Tab切换 -->
    <div class="sticky top-0 z-50 bg-[#FFF8F2]/95 backdrop-blur-sm pt-2 pb-2 px-4 flex items-center gap-2">
      <button @click="router.push('/ai-assistant')" class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-sm border border-orange-100 text-gray-600 active:scale-95 transition-transform">
        <i class="fa-solid fa-chevron-left text-lg"></i>
      </button>
      <div class="flex-1 flex justify-between items-center bg-white rounded-full p-1 shadow-sm border border-orange-100 overflow-x-auto">
        <button 
          v-for="tab in tabs" 
          :key="tab.key"
          @click="navigateTab(tab.key)"
          class="flex-1 min-w-[60px] py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap"
          :class="tab.key === 'exercise' ? 'bg-[#FF7D40] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>

    <!-- 唤醒每一次热爱 -->
    <div class="mx-4 mt-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-5 shadow-lg text-white relative overflow-hidden">
      <div class="relative z-10">
        <h2 class="text-2xl font-bold mb-1">唤醒每一次热爱</h2>
        <p class="text-white/80 text-sm mb-6">行动才是答案</p>

        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs text-white/80 mb-1">今日运动打卡</p>
            <p class="text-xl font-bold">{{ hasExercised ? '已打卡' : '未打卡' }}</p>
          </div>
          <div class="flex gap-2">
            <button @click="toggleExerciseStatus" class="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-4 py-3 flex flex-col items-center justify-center min-w-[70px]">
              <div class="w-6 h-6 bg-[#22C55E] rounded flex items-center justify-center mb-1">
                <i class="fa-solid fa-check text-white text-xs"></i>
              </div>
              <span class="text-xs font-medium">已练不欠</span>
            </button>
            <button @click="setRestStatus" class="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-4 py-3 flex flex-col items-center justify-center min-w-[70px]">
              <div class="w-6 h-6 bg-red-500 rounded flex items-center justify-center mb-1">
                <i class="fa-solid fa-xmark text-white text-xs"></i>
              </div>
              <span class="text-xs font-medium">今日没练</span>
            </button>
          </div>
        </div>
      </div>
      <!-- 装饰背景 -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-8 -mt-8 blur-2xl"></div>
      <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-8 -mb-8 blur-xl"></div>
    </div>

    <!-- 选择运动需求 -->
    <div class="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm">
      <div class="flex items-center mb-4">
        <span class="text-red-500 mr-2 text-xl">🎯</span>
        <span class="font-bold text-gray-800">选择运动需求</span>
      </div>

      <div class="flex gap-2">
        <button 
          v-for="goal in exerciseGoals" 
          :key="goal.key"
          @click="selectedGoal = goal.key"
          class="flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-1"
          :class="selectedGoal === goal.key ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-orange-200 shadow-md' : 'bg-white border border-gray-100 text-gray-500'"
        >
          {{ goal.icon }} {{ goal.name }}
        </button>
      </div>
    </div>

    <!-- 反向定制运动盲盒 -->
    <div class="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm border border-orange-100/50">
      <div class="flex items-center mb-2">
        <span class="text-gray-800 mr-2 text-xl">🎲</span>
        <span class="font-bold text-gray-800">反向定制运动盲盒</span>
      </div>
      <p class="text-xs text-gray-400 mb-4">最有趣最有社交属性的运动计划生成器</p>

      <!-- 计划名称输入 -->
      <div class="bg-gray-50 rounded-xl p-4 mb-4">
        <input 
          type="text" 
          v-model="planName"
          class="w-full bg-transparent focus:outline-none text-sm text-gray-600 font-bold"
          placeholder="给你的运动计划取个名字（模板有机会上热门）"
        />
      </div>

      <!-- 运动项目选择 -->
      <p class="text-sm font-bold text-gray-800 mb-3">选择你能坚持的运动项目</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <button 
          v-for="sport in sports" 
          :key="sport.key"
          @click="toggleSport(sport.key)"
          class="px-4 py-2 rounded-full text-xs font-medium transition-all border"
          :class="selectedSports.includes(sport.key) ? 'bg-orange-100 text-orange-600 border-orange-200' : 'bg-white text-gray-500 border-gray-100'"
        >
          {{ sport.icon }} {{ sport.name }}
        </button>
      </div>

      <!-- 时间选择 -->
      <div class="flex gap-2 mb-4">
        <button @click="timePeriod = 'day'" class="flex-1 rounded-full px-4 py-2 text-sm text-center shadow-sm transition-all" :class="timePeriod === 'day' ? 'bg-orange-100 text-orange-600 border border-orange-200' : 'bg-white border border-gray-100 text-gray-600'">
          天
        </button>
        <button @click="timePeriod = 'week'" class="flex-1 rounded-full px-4 py-2 text-sm text-center shadow-sm transition-all" :class="timePeriod === 'week' ? 'bg-orange-100 text-orange-600 border border-orange-200' : 'bg-white border border-gray-100 text-gray-600'">
          周
        </button>
        <button @click="timePeriod = 'month'" class="flex-1 rounded-full px-4 py-2 text-sm text-center shadow-sm transition-all" :class="timePeriod === 'month' ? 'bg-orange-100 text-orange-600 border border-orange-200' : 'bg-white border border-gray-100 text-gray-600'">
          月
        </button>
        <button @click="timePeriod = 'quarter'" class="flex-1 rounded-full px-4 py-2 text-sm text-center shadow-sm transition-all" :class="timePeriod === 'quarter' ? 'bg-orange-100 text-orange-600 border border-orange-200' : 'bg-white border border-gray-100 text-gray-600'">
          季度
        </button>
      </div>

      <div class="bg-gray-50 rounded-xl p-4 mb-4">
        <input 
          type="text" 
          v-model="details"
          class="w-full bg-transparent focus:outline-none text-sm text-gray-600"
          placeholder="如果你想更精准一点，可以输入详细需求"
        />
      </div>

      <!-- 生成按钮 -->
      <button 
        @click="generatePlan"
        class="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4 rounded-full font-bold shadow-lg shadow-orange-200 flex items-center justify-center gap-2 text-lg"
      >
        ✨ 生成运动盲盒
      </button>
    </div>

    <!-- 我的专属减脂计划 (生成后显示) -->
    <div v-if="showPlan" class="mx-4 mt-4 bg-[#E8F5E9] rounded-2xl p-4 shadow-sm border border-green-100">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-bold text-gray-800">我的专属减脂计划</h3>
        <span class="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded">已生成</span>
      </div>

      <div class="flex gap-2 mb-4">
        <span class="text-xs bg-white px-2 py-1 rounded text-green-600 border border-green-100">减脂</span>
        <span class="text-xs bg-white px-2 py-1 rounded text-green-600 border border-green-100">45分钟</span>
        <span class="text-xs bg-white px-2 py-1 rounded text-green-600 border border-green-100">280千卡</span>
      </div>

      <div class="space-y-3 bg-white rounded-xl p-3 mb-4">
        <div class="flex justify-between items-center py-2 border-b border-gray-50">
          <div class="flex items-center gap-2">
            <span class="text-orange-400">🧘</span>
            <span class="text-sm font-medium text-gray-700">热身拉伸</span>
          </div>
          <span class="text-xs text-gray-400">5分钟</span>
        </div>
        <div class="flex justify-between items-center py-2 border-b border-gray-50">
          <div class="flex items-center gap-2">
            <span class="text-orange-400">🏃</span>
            <span class="text-sm font-medium text-gray-700">快速燃脂</span>
          </div>
          <span class="text-xs text-gray-400">30分钟</span>
        </div>
        <div class="flex justify-between items-center py-2">
          <div class="flex items-center gap-2">
            <span class="text-orange-400">💪</span>
            <span class="text-sm font-medium text-gray-700">核心强化</span>
          </div>
          <span class="text-xs text-gray-400">10分钟</span>
        </div>
      </div>

      <div class="flex gap-2">
        <button @click="checkIn" class="flex-1 bg-[#22C55E] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-1 shadow-sm">
          <i class="fa-solid fa-check"></i> 已练不欠
        </button>
        <button @click="skipExercise" class="flex-1 bg-white text-red-500 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-1 shadow-sm border border-red-100">
          <i class="fa-solid fa-xmark"></i> 今日不练
        </button>
      </div>
    </div>

    <!-- 热门运动盲盒 -->
    <div class="mx-4 mt-4 mb-6">
      <div class="flex items-center mb-3">
        <span class="text-orange-500 mr-2">🔥</span>
        <span class="font-bold text-gray-800">热门运动盲盒</span>
      </div>

      <div class="space-y-3">
        <div v-for="item in hotExercises" :key="item.id" class="bg-white rounded-2xl p-4 shadow-sm border border-gray-50">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <p class="font-bold text-gray-800 mb-1">{{ item.title }}</p>
              <p class="text-orange-500 text-xs flex items-center gap-1">
                <i class="fa-solid fa-fire"></i> 热度值 {{ item.heat }}
              </p>
            </div>
            <span class="text-xs text-gray-400">{{ item.author }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'ExercisePage',
  setup() {
    const router = useRouter()
    const selectedGoal = ref('slim')
    const planName = ref('')
    const details = ref('')
    const selectedSports = ref([])
    const showPlan = ref(false)
    const timePeriod = ref('day')

    const tabs = [
      { key: 'datacabin', name: '数据舱' },
      { key: 'exercise', name: '练了么' },
      { key: 'diet', name: '吃了么' },
      { key: 'slim', name: '瘦了么' }
    ]

    const exerciseGoals = [
      { key: 'slim', name: '减脂', icon: '🔥' },
      { key: 'muscle', name: '增肌', icon: '💪' },
      { key: 'shape', name: '塑形', icon: '✨' }
    ]

    const sports = [
      { key: 'run', name: '跑步', icon: '🏃' },
      { key: 'strength', name: '力量训练', icon: '🏋️' },
      { key: 'yoga', name: '瑜伽', icon: '🧘' },
      { key: 'ride', name: '骑行', icon: '🚴' },
      { key: 'swim', name: '游泳', icon: '🏊' },
      { key: 'pilates', name: '普拉提', icon: '🤸' },
      { key: 'soccer', name: '足球', icon: '⚽' },
      { key: 'basketball', name: '篮球', icon: '🏀' },
      { key: 'tennis', name: '网球', icon: '🎾' },
      { key: 'hiit', name: '高效燃脂', icon: '🔥' },
      { key: 'knee', name: '膝盖友好', icon: '🦵' },
      { key: 'home', name: '居家运动', icon: '🏠' },
      { key: 'outdoor', name: '户外运动', icon: '🌳' },
      { key: 'upper', name: '上肢强化', icon: '💪' },
      { key: 'aerobic', name: '有氧燃脂', icon: '🏃‍♀️' },
      { key: 'stretch', name: '柔韧拉伸', icon: '🧘‍♀️' },
      { key: 'custom', name: '自定义运动', icon: '✏️' }
    ]

    const hotExercises = ref([
      { id: 1, title: '996牛马如何高效燃脂', heat: '9800', author: '@爱上班的大白' },
      { id: 2, title: '200斤大胖怎么月瘦30斤', heat: '34582', author: '@孙大壮72变' }
    ])

    const toggleSport = (key) => {
      const index = selectedSports.value.indexOf(key)
      if (index > -1) {
        selectedSports.value.splice(index, 1)
      } else {
        selectedSports.value.push(key)
      }
    }

    const navigateTab = (key) => {
      const routes = {
        datacabin: '/data-cabin',
        exercise: '/exercise',
        diet: '/diet',
        slim: '/slim'
      }
      if (routes[key] && key !== 'exercise') {
        router.replace(routes[key])
      }
    }

    const generatePlan = () => {
      showPlan.value = true
      // Scroll to plan
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        })
      }, 100)
    }

    const hasExercised = ref(false)
    const toggleExerciseStatus = () => {
      hasExercised.value = true
      alert('打卡成功！已记录今日运动')
    }
    
    const setRestStatus = () => {
       hasExercised.value = false
       alert('已标记今日休息')
    }

    const checkIn = () => {
      alert('打卡成功！已记录今日运动')
      hasExercised.value = true
    }

    const skipExercise = () => {
      alert('已标记今日休息')
      hasExercised.value = false
    }

    return {
      tabs,
      selectedGoal,
      exerciseGoals,
      planName,
      details,
      sports,
      selectedSports,
      hotExercises,
      showPlan,
      hasExercised,
      timePeriod,
      toggleSport,
      navigateTab,
      generatePlan,
      toggleExerciseStatus,
      setRestStatus,
      checkIn,
      skipExercise
    }
  }
}
</script>
