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
          :class="tab.key === 'slim' ? 'bg-[#FF7D40] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>

    <!-- 当前体重 -->
    <div class="mx-3 mt-3 bg-white rounded-3xl p-5 shadow-sm">
      <div class="flex items-center mb-4 gap-2">
        <span class="text-xl">⚖️</span>
        <span class="font-bold text-gray-800 text-lg">当前体重</span>
      </div>

      <div class="flex items-end justify-between">
        <div>
          <p class="text-[56px] leading-none font-bold text-[#FF6B00]">85.5<span class="text-xl font-normal text-gray-400 ml-1">kg</span></p>
        </div>
        <div class="text-right pb-1">
          <p class="text-xs text-gray-400 mb-1">目标体重</p>
          <p class="text-2xl font-bold text-[#22C55E]">75.0 <span class="text-sm font-normal">kg</span></p>
        </div>
      </div>

      <p class="text-center text-xs text-gray-400 mt-6 border-t border-gray-100 pt-4">
        剩余 <span class="font-bold text-[#FF6B00]">10.5</span> kg · 预计 <span class="font-bold text-gray-600">68</span> 天达成
      </p>
    </div>

    <!-- 唤醒营陪跑服务 -->
    <div class="mx-3 mt-4">
      <div class="flex items-center mb-4 gap-2">
        <span class="text-xl text-blue-400">💎</span>
        <span class="font-bold text-gray-800 text-lg">唤醒营陪跑服务</span>
      </div>

      <!-- 套餐列表 -->
      <div class="space-y-4">
        <!-- 唤醒体验版 -->
        <div 
          class="bg-white rounded-3xl p-5 shadow-sm border-2 transition-all cursor-pointer relative overflow-hidden"
          :class="selectedPlan === 'trial' ? 'border-[#FF9F43] bg-orange-50' : 'border-transparent'"
          @click="selectedPlan = 'trial'"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xl text-[#FFD700]">⭐</span>
              <span class="font-bold text-gray-800 text-lg">唤醒体验价</span>
            </div>
            <span class="text-2xl font-bold text-[#FF6B00]">¥9.9</span>
          </div>
          <div class="space-y-2 pl-1">
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>单次唤醒指导体验</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>AI智能问答服务</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>基础运动饮食建议</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>了解自己的身体状况</span>
            </div>
          </div>
        </div>

        <!-- 基础体验版 -->
        <div 
          class="bg-white rounded-3xl p-5 shadow-sm border-2 transition-all cursor-pointer relative"
          :class="selectedPlan === 'basic' ? 'border-[#FF9F43] bg-orange-50' : 'border-transparent'"
          @click="selectedPlan = 'basic'"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xl text-[#FFD700]">⭐</span>
              <span class="font-bold text-gray-800 text-lg">基础体验版</span>
            </div>
            <span class="text-2xl font-bold text-[#FF6B00]">¥98</span>
          </div>
          <div class="space-y-2 pl-1">
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>7天基础减脂方案指导</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>AI智能问答服务</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>每日运动饮食打卡提醒</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>基础数据分析</span>
            </div>
          </div>
        </div>

        <!-- 进阶专业版 -->
        <div 
          class="bg-white rounded-3xl p-5 shadow-sm border-2 transition-all cursor-pointer relative"
          :class="selectedPlan === 'pro' ? 'border-[#FF9F43] bg-orange-50' : 'border-transparent'"
          @click="selectedPlan = 'pro'"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xl text-[#FFD700]">⭐</span>
              <span class="font-bold text-gray-800 text-lg">进阶专业版</span>
            </div>
            <span class="text-2xl font-bold text-[#FF6B00]">¥168</span>
          </div>
          <div class="space-y-2 pl-1">
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>14天专业减脂/增肌方案</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>1对1教练在线答疑</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>个性化方案实时调整</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>深度数据分析权限</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>平台期突破指导</span>
            </div>
          </div>
        </div>

        <!-- 豪华尊享版 -->
        <div 
          class="bg-white rounded-3xl p-5 shadow-sm border-2 transition-all cursor-pointer relative overflow-hidden"
          :class="selectedPlan === 'vip' ? 'border-[#FF9F43] bg-orange-50' : 'border-transparent'"
          @click="selectedPlan = 'vip'"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xl text-[#FFD700]">🏆</span>
              <span class="font-bold text-gray-800 text-lg">豪华尊享版</span>
            </div>
            <span class="text-2xl font-bold text-[#FF6B00]">¥498</span>
          </div>
          <div class="space-y-2 pl-1">
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>100天蜕变计划（3个周期）</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>专属教练全程陪伴</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>每周1次视频咨询</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>专属社群资源</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>饮食方案精细化定制</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>运动动作视频指导</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <i class="fa-solid fa-check text-[#22C55E] mr-3 text-xs"></i>
              <span>阶段性成果奖励</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部购买按钮 -->
    <div class="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 p-4 safe-area-pb">
      <button 
        class="w-full bg-gradient-to-r from-[#FF7D40] to-[#FF5500] text-white py-4 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-2 shadow-orange-200"
        @click="handlePurchase"
      >
        🔥 立即唤醒
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'SlimPage',
  setup() {
    const router = useRouter()
    const selectedPlan = ref('trial') // Default to trial plan based on image

    const tabs = [
      { key: 'datacabin', name: '数据舱' },
      { key: 'exercise', name: '练了么' },
      { key: 'diet', name: '吃了么' },
      { key: 'slim', name: '瘦了么' }
    ]

    const navigateTab = (key) => {
      const routes = {
        datacabin: '/data-cabin',
        exercise: '/exercise',
        diet: '/diet',
        slim: '/slim'
      }
      if (routes[key] && key !== 'slim') {
        router.replace(routes[key])
      }
    }

    const handlePurchase = () => {
      const planNames = {
        trial: '唤醒体验价 ¥9.9',
        basic: '基础体验版 ¥98',
        pro: '进阶专业版 ¥168',
        vip: '豪华尊享版 ¥498'
      }
      alert(`您选择了「${planNames[selectedPlan.value]}」，即将跳转支付页面...`)
    }

    return {
      tabs,
      selectedPlan,
      navigateTab,
      handlePurchase,
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
