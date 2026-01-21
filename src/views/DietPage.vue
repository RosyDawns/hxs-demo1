<template>
  <div class="page bg-[#FFF8F2] min-h-screen pb-24">
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
          :class="tab.key === 'diet' ? 'bg-[#FF7D40] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>

    <!-- 你的身体数据 -->
    <div class="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm">
      <div class="flex items-center mb-4">
        <div class="w-1 h-4 bg-green-500 rounded-full mr-2"></div>
        <span class="font-bold text-gray-800">你的身体数据</span>
      </div>

      <div class="flex gap-4 mb-4">
        <div class="flex-1 text-center bg-orange-50 rounded-xl p-3">
          <div class="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center mb-2 shadow-sm text-orange-500">
            <i class="fa-regular fa-sun"></i>
          </div>
          <p class="text-xs text-gray-400 mb-1">基础代谢</p>
          <p class="text-xl font-bold text-orange-500">1680<span class="text-xs font-normal text-gray-400">kcal</span></p>
        </div>
        <div class="flex-1 text-center bg-orange-50 rounded-xl p-3">
          <div class="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center mb-2 shadow-sm text-orange-500">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <p class="text-xs text-gray-400 mb-1">今日摄入</p>
          <p class="text-xl font-bold text-red-500">0<span class="text-xs font-normal text-gray-400">kcal</span></p>
        </div>
      </div>

      <div class="bg-orange-50 rounded-xl p-3 flex items-center justify-between">
        <span class="text-sm text-gray-500">今日热量适度</span>
        <span class="text-sm font-bold text-gray-700">0/1680 kcal</span>
      </div>
    </div>

    <!-- 选择饮食需求 -->
    <div class="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm">
      <div class="flex items-center mb-4">
        <span class="text-red-500 mr-2 text-xl">🎯</span>
        <span class="font-bold text-gray-800">选择饮食需求</span>
      </div>

      <div class="flex gap-2">
        <button 
          v-for="goal in dietGoals" 
          :key="goal.key"
          @click="selectedGoal = goal.key"
          class="flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-1"
          :class="selectedGoal === goal.key ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-orange-200 shadow-md' : 'bg-white border border-gray-100 text-gray-500'"
        >
          {{ goal.icon }} {{ goal.name }}
        </button>
      </div>
    </div>

    <!-- 忌口食物 -->
    <div class="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm">
      <div class="flex items-center mb-4">
        <span class="text-red-500 mr-2 text-xl">🚫</span>
        <span class="font-bold text-gray-800">忌口食物</span>
      </div>

      <div class="relative">
        <input 
          type="text" 
          v-model="tabooFood"
          class="w-full bg-gray-50 rounded-xl py-3 pl-4 pr-10 text-sm text-gray-600 focus:outline-none"
          placeholder="输入忌口食物（如：海鲜、花生等）"
        />
        <div class="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white text-xs">
          <i class="fa-solid fa-microphone"></i>
        </div>
      </div>
      <p class="text-xs text-gray-400 mt-2 pl-1">AI将在生成计划时自动避开忌口食物</p>
    </div>

    <!-- 定制饮食盲盒活动 -->
    <div class="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center">
          <span class="text-orange-500 mr-2 text-xl">🎁</span>
          <span class="font-bold text-gray-800">定制饮食盲盒活动</span>
        </div>
        <span class="text-xs text-orange-500">挑战玩法 ></span>
      </div>
      
      <p class="text-xs text-gray-400 mb-4">给你的饮食计划取个名字（有机会上热门）</p>

      <div class="bg-gray-50 rounded-xl p-4 mb-4">
        <input 
          type="text" 
          v-model="planName"
          class="w-full bg-transparent focus:outline-none text-sm text-gray-600 font-bold"
          placeholder="例如：996牛马健康饮食计划"
        />
      </div>

      <!-- 饮食风格标签 -->
      <p class="text-sm font-bold text-gray-800 mb-3">选择饮食类型标签</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <button 
          v-for="style in dietStyles" 
          :key="style.key"
          @click="toggleStyle(style.key)"
          class="px-4 py-2 rounded-full text-xs font-medium transition-all border"
          :class="selectedStyles.includes(style.key) ? 'bg-orange-100 text-orange-600 border-orange-200' : 'bg-white text-gray-500 border-gray-100'"
        >
          {{ style.icon }} {{ style.name }}
        </button>
      </div>

      <!-- 特殊饮食需求 -->
      <p class="text-sm font-bold text-gray-800 mb-3">特殊饮食需求（可选）</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <button 
          v-for="req in specialReqs" 
          :key="req.key"
          @click="toggleReq(req.key)"
          class="px-4 py-2 rounded-full text-xs font-medium transition-all border"
          :class="selectedReqs.includes(req.key) ? 'bg-orange-100 text-orange-600 border-orange-200' : 'bg-white text-gray-500 border-gray-100'"
        >
          {{ req.icon }} {{ req.name }}
        </button>
      </div>

      <!-- 补充描述 -->
      <p class="text-sm font-bold text-gray-800 mb-3">补充描述（让你的计划更吸引人）</p>
      <div class="bg-gray-50 rounded-xl p-3 mb-4">
        <textarea 
          v-model="description"
          rows="2"
          class="w-full bg-transparent focus:outline-none text-sm text-gray-600 resize-none"
          placeholder="例如：适合上班族快手减脂午餐，每天预算50元以内..."
        ></textarea>
      </div>

      <!-- 按钮组 -->
      <div class="flex gap-3 mb-4">
        <button class="flex-1 bg-[#FF7D40] text-white py-3 rounded-full font-medium shadow-md flex items-center justify-center gap-1 shadow-orange-100">
          🎁 创建话题
        </button>
        <button class="flex-1 bg-blue-50 text-blue-500 py-3 rounded-full font-medium flex items-center justify-center gap-1">
          🔥 热门话题
        </button>
      </div>
    </div>

    <!-- 生成饮食计划盲盒 -->
    <div class="mx-4 mt-4">
      <button 
        @click="generatePlan"
        class="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4 rounded-full font-bold shadow-lg shadow-orange-200 flex items-center justify-center gap-2 text-lg"
      >
        🎲 生成饮食计划盲盒
      </button>
    </div>

    <!-- 减脂营养指导 -->
    <div class="mx-4 mt-4 bg-[#E8F5E9] rounded-2xl p-4 shadow-sm border border-green-100">
      <div class="flex items-center mb-4">
        <span class="text-green-600 mr-2 text-lg">📊</span>
        <span class="font-bold text-green-800">减脂营养指导</span>
      </div>

      <p class="text-xs text-green-700 mb-4 leading-relaxed">
        <span class="font-bold">📢 中国居民膳食指南推荐：</span>
        减脂期间需控制碳水摄入，增加优质蛋白质比例。
      </p>

      <div class="space-y-3">
        <div>
          <div class="flex justify-between text-xs mb-1.5">
            <span class="text-gray-600 font-medium">碳水</span>
            <span class="text-gray-500">45%</span>
          </div>
          <div class="h-2 bg-white rounded-full overflow-hidden">
            <div class="h-full bg-orange-400 rounded-full" style="width: 45%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs mb-1.5">
            <span class="text-gray-600 font-medium">蛋白质</span>
            <span class="text-gray-500">35%</span>
          </div>
          <div class="h-2 bg-white rounded-full overflow-hidden">
            <div class="h-full bg-green-500 rounded-full" style="width: 35%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs mb-1.5">
            <span class="text-gray-600 font-medium">脂肪</span>
            <span class="text-gray-500">20%</span>
          </div>
          <div class="h-2 bg-white rounded-full overflow-hidden">
            <div class="h-full bg-blue-400 rounded-full" style="width: 20%"></div>
          </div>
        </div>
      </div>
      
      <!-- 今日饮水建议 -->
      <div class="mt-4 pt-4 border-t border-green-200/50">
        <div class="flex items-center mb-2">
          <span class="text-blue-500 mr-1 text-sm">💧</span>
          <span class="font-bold text-gray-800 text-sm">今日饮水建议</span>
        </div>
        <div class="flex items-end gap-2">
           <span class="text-2xl font-bold text-blue-600">2000 ml</span>
           <span class="text-xs text-gray-400 mb-1">约8杯水，保持身体代谢</span>
        </div>
      </div>
    </div>

    <!-- 我的专属饮食计划 (生成后显示) -->
    <div v-if="showPlan" class="mx-4 mt-4">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <span class="text-xl">🧾</span>
          <span class="font-bold text-gray-800 text-lg">我的专属饮食计划</span>
        </div>
        <span class="text-xs text-gray-400">2026-01-17</span>
      </div>

      <!-- 早餐 -->
      <div class="bg-white rounded-2xl p-4 shadow-sm mb-3">
        <div class="flex justify-between items-center mb-3">
          <div class="flex items-center gap-2">
            <span class="text-orange-400 text-lg">🌅</span>
            <span class="font-bold text-gray-800">早餐 (07:00-09:00)</span>
          </div>
          <span class="text-xs text-gray-400">380 kcal</span>
        </div>
        <div class="bg-orange-50 rounded-lg p-2 text-xs text-orange-600 mb-3 flex items-center gap-1">
          <i class="fa-regular fa-lightbulb"></i>
          <span>温馨提示：早餐要吃好，不要贪睡哦~</span>
        </div>
        
        <div class="space-y-3 mb-4">
          <div class="flex items-center gap-3">
             <div class="w-10 h-10 rounded-lg bg-gray-100 flex-shrink-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=100&h=100&fit=crop')"></div>
             <div class="flex-1">
                <p class="font-bold text-gray-800 text-sm">全麦面包三明治</p>
                <p class="text-xs text-gray-400">2片</p>
             </div>
          </div>
          <div class="flex items-center gap-3">
             <div class="w-10 h-10 rounded-lg bg-gray-100 flex-shrink-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1550583724-b2692b85b150?w=100&h=100&fit=crop')"></div>
             <div class="flex-1">
                <p class="font-bold text-gray-800 text-sm">低脂牛奶</p>
                <p class="text-xs text-gray-400">200ml</p>
             </div>
          </div>
          <div class="flex items-center gap-3">
             <div class="w-10 h-10 rounded-lg bg-gray-100 flex-shrink-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=100&h=100&fit=crop')"></div>
             <div class="flex-1">
                <p class="font-bold text-gray-800 text-sm">水煮蛋</p>
                <p class="text-xs text-gray-400">1个</p>
             </div>
          </div>
        </div>

        <div class="flex gap-3">
          <button @click="shufflePlan" class="flex-1 bg-orange-400 text-white py-2.5 rounded-full text-sm font-bold shadow-sm">
            🔄 换一换
          </button>
          <button @click="checkIn" class="flex-1 bg-white border border-gray-200 text-gray-500 py-2.5 rounded-full text-sm font-bold">
            📷 打卡
          </button>
        </div>
        <button @click="checkIn" class="w-full mt-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-full font-bold shadow-md">
           ✅ 按计划执行
        </button>
      </div>

      <!-- 午餐 -->
      <div class="bg-white rounded-2xl p-4 shadow-sm mb-3">
        <div class="flex justify-between items-center mb-3">
          <div class="flex items-center gap-2">
            <span class="text-yellow-400 text-lg">☀️</span>
            <span class="font-bold text-gray-800">午餐 (11:30-13:00)</span>
          </div>
          <span class="text-xs text-gray-400">520 kcal</span>
        </div>
        
        <div class="space-y-3 mb-4">
          <div class="flex items-center gap-3">
             <span class="text-xl">🍚</span>
             <div class="flex-1">
                <p class="font-bold text-gray-800 text-sm">杂粮饭</p>
                <p class="text-xs text-gray-400">100g</p>
             </div>
          </div>
          <div class="flex items-center gap-3">
             <span class="text-xl">🍗</span>
             <div class="flex-1">
                <p class="font-bold text-gray-800 text-sm">香煎鸡胸肉</p>
                <p class="text-xs text-gray-400">120g</p>
             </div>
          </div>
          <div class="flex items-center gap-3">
             <span class="text-xl">🥦</span>
             <div class="flex-1">
                <p class="font-bold text-gray-800 text-sm">清炒西兰花</p>
                <p class="text-xs text-gray-400">150g</p>
             </div>
          </div>
        </div>

        <div class="flex gap-3">
          <button @click="shufflePlan" class="flex-1 bg-orange-400 text-white py-2.5 rounded-full text-sm font-bold shadow-sm">
            🔄 换一换
          </button>
          <button @click="checkIn" class="flex-1 bg-white border border-gray-200 text-gray-500 py-2.5 rounded-full text-sm font-bold">
            📷 打卡
          </button>
        </div>
        <button @click="checkIn" class="w-full mt-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-full font-bold shadow-md">
           ✅ 按计划执行
        </button>
      </div>

      <!-- 晚餐 -->
      <div class="bg-white rounded-2xl p-4 shadow-sm mb-3">
        <div class="flex justify-between items-center mb-3">
          <div class="flex items-center gap-2">
            <span class="text-blue-400 text-lg">🌙</span>
            <span class="font-bold text-gray-800">晚餐 (17:30-19:00)</span>
          </div>
          <span class="text-xs text-gray-400">300 kcal</span>
        </div>
        
        <div class="space-y-3 mb-4">
          <div class="flex items-center gap-3">
             <span class="text-xl">🌽</span>
             <div class="flex-1">
                <p class="font-bold text-gray-800 text-sm">玉米半根</p>
                <p class="text-xs text-gray-400">150g</p>
             </div>
          </div>
          <div class="flex items-center gap-3">
             <span class="text-xl">🐟</span>
             <div class="flex-1">
                <p class="font-bold text-gray-800 text-sm">清蒸鱼</p>
                <p class="text-xs text-gray-400">100g</p>
             </div>
          </div>
           <div class="flex items-center gap-3">
             <span class="text-xl">🥒</span>
             <div class="flex-1">
                <p class="font-bold text-gray-800 text-sm">黄瓜一根</p>
                <p class="text-xs text-gray-400">200g</p>
             </div>
          </div>
        </div>

        <div class="flex gap-3">
          <button @click="shufflePlan" class="flex-1 bg-orange-400 text-white py-2.5 rounded-full text-sm font-bold shadow-sm">
            🔄 换一换
          </button>
          <button @click="checkIn" class="flex-1 bg-white border border-gray-200 text-gray-500 py-2.5 rounded-full text-sm font-bold">
            📷 打卡
          </button>
        </div>
        <button @click="checkIn" class="w-full mt-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-full font-bold shadow-md">
           ✅ 按计划执行
        </button>
      </div>
    </div>

    <!-- 底部饮水打卡条 -->
    <div class="fixed bottom-0 left-0 right-0 bg-blue-50/95 backdrop-blur-sm border-t border-blue-100 p-4 safe-area-pb z-50">
      <div class="flex items-center justify-between mb-2">
         <div class="flex items-center gap-2">
            <span class="text-blue-500">💧</span>
            <span class="font-bold text-gray-800 text-sm">今日喝水打卡</span>
         </div>
         <span class="text-blue-600 font-bold text-lg">{{ waterIntake }}/8 杯</span>
      </div>
      <div class="flex gap-2 justify-between" @click="addWater">
        <div v-for="i in 8" :key="i" class="w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer"
          :class="i <= waterIntake ? 'bg-blue-500 text-white shadow-sm' : 'bg-white border border-blue-200 text-blue-200'">
           <i class="fa-solid fa-droplet text-xs"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'DietPage',
  setup() {
    const router = useRouter()
    const selectedGoal = ref('slim')
    const tabooFood = ref('')
    const planName = ref('')
    const description = ref('')
    const selectedStyles = ref([])
    const selectedReqs = ref([])
    const showPlan = ref(false)

    const tabs = [
      { key: 'datacabin', name: '数据舱' },
      { key: 'exercise', name: '练了么' },
      { key: 'diet', name: '吃了么' },
      { key: 'slim', name: '瘦了么' }
    ]

    const dietGoals = [
      { key: 'slim', name: '减脂', icon: '🔥' },
      { key: 'gain', name: '增重', icon: '💪' },
      { key: 'maintain', name: '维持', icon: '✨' }
    ]

    const dietStyles = [
      { key: 'light', name: '清淡', icon: '🔥' },
      { key: 'spicy', name: '重口', icon: '💪' },
      { key: 'mild', name: '微辣', icon: '✨' },
      { key: 'home', name: '家常', icon: '🌱' },
      { key: 'lowcal', name: '低卡', icon: '🥗' }
    ]

    const specialReqs = [
      { key: 'vegan', name: '无肉', icon: '🚫' },
      { key: 'nolactose', name: '无乳糖', icon: '🥛' },
      { key: 'nogluten', name: '不耐麸质', icon: '🌾' },
      { key: 'lowgi', name: '低GI', icon: '🍞' },
      { key: 'highprotein', name: '高蛋白', icon: '🥩' }
    ]

    const toggleStyle = (key) => {
      const index = selectedStyles.value.indexOf(key)
      if (index > -1) {
        selectedStyles.value.splice(index, 1)
      } else {
        selectedStyles.value.push(key)
      }
    }

    const toggleReq = (key) => {
      const index = selectedReqs.value.indexOf(key)
      if (index > -1) {
        selectedReqs.value.splice(index, 1)
      } else {
        selectedReqs.value.push(key)
      }
    }

    const navigateTab = (key) => {
      const routes = {
        datacabin: '/data-cabin',
        exercise: '/exercise',
        diet: '/diet',
        slim: '/slim'
      }
      if (routes[key] && key !== 'diet') {
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

    const waterIntake = ref(6)
    const addWater = () => {
      if (waterIntake.value < 8) {
        waterIntake.value++
      }
    }

    const shufflePlan = () => {
      alert('正在为您更换推荐食谱...')
    }

    const checkIn = () => {
      alert('打卡成功！已记录今日饮食')
    }

    return {
      tabs,
      selectedGoal,
      dietGoals,
      tabooFood,
      planName,
      description,
      dietStyles,
      specialReqs,
      selectedStyles,
      selectedReqs,
      showPlan,
      waterIntake,
      toggleStyle,
      toggleReq,
      navigateTab,
      generatePlan,
      addWater,
      shufflePlan,
      checkIn,
      router
    }
  }
}
</script>

<style scoped>
.safe-area-pb {
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}
</style>
