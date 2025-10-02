<template>
  <div class="page bg-gradient-to-b from-white to-blue-50 min-h-screen" id="page-ai-assistant">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 p-3 flex items-center">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center">
          <button class="nav-back mr-3 text-dark" @click="$router.push('/')">
            <i class="fa fa-angle-left text-xl"></i>
          </button>
          <h2 class="font-bold">大狮兄</h2>
        </div>
        <div class="flex items-center space-x-3">
          <button class="text-gray-500">
            <i class="fa fa-bell text-lg"></i>
            <span class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px]">
              1
            </span>
          </button>
          <button class="text-gray-500">
            <i class="fa fa-cog text-lg"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- 主体内容区 -->
    <div class="flex flex-col items-center justify-between flex-1 px-4 py-8">
      <!-- AI形象 -->
      <div class="flex flex-col items-center mb-8">
        <div class="relative">
          <!-- 狮子形象 -->
          <div class="w-40 h-40 bg-yellow-100 rounded-full flex items-center justify-center relative">
            <img src="https://picsum.photos/id/237/120/120" alt="大狮兄" class="w-32 h-32 object-cover rounded-full">
            <!-- 发光效果 -->
            <div class="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-30 animate-pulse"></div>
          </div>
        </div>
        
        <!-- 问候语 -->
        <div class="mt-6 bg-blue-50 px-6 py-3 rounded-2xl shadow-sm">
          <p class="text-lg font-medium text-center">"国庆快乐，主人！"</p>
        </div>
      </div>

      <!-- 推荐操作按钮 -->
      <div class="w-full max-w-sm space-y-4 mb-8">
        <div class="grid grid-cols-2 gap-4">
          <!-- 按钮1 -->
          <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 nav-action hover:shadow-md transition-shadow duration-300" @click="handleRecommendationClick('fitness')">
            <div class="flex items-start space-x-3">
              <div class="bg-green-100 text-green-500 p-2 rounded-full">
                <i class="fa fa-dumbbell text-xl"></i>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-800">帮我推荐一位附近的</p>
                <p class="text-sm font-medium text-gray-800">健身唤醒师</p>
              </div>
            </div>
            <div class="mt-3 text-xs text-green-500 font-medium flex items-center">
              试试 <i class="fa fa-angle-right ml-1"></i>
            </div>
          </div>

          <!-- 按钮2 -->
          <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 nav-action hover:shadow-md transition-shadow duration-300" @click="handleRecommendationClick('yoga')">
            <div class="flex items-start space-x-3">
              <div class="bg-purple-100 text-purple-500 p-2 rounded-full">
                <i class="fa fa-leaf text-xl"></i>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-800">找瑜伽老师学习</p>
                <p class="text-sm font-medium text-gray-800">基础动作</p>
              </div>
            </div>
            <div class="mt-3 text-xs text-purple-500 font-medium flex items-center">
              试试 <i class="fa fa-angle-right ml-1"></i>
            </div>
          </div>
        </div>

        <!-- 其他推荐操作 -->
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 nav-action hover:shadow-md transition-shadow duration-300" @click="handleRecommendationClick('other')">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <div class="bg-blue-100 text-blue-500 p-2 rounded-full">
                <i class="fa fa-lightbulb-o text-xl"></i>
              </div>
              <p class="text-sm font-medium text-gray-800">查看更多服务</p>
            </div>
            <i class="fa fa-angle-right text-gray-400"></i>
          </div>
        </div>
      </div>

      <!-- 语音输入按钮 -->
      <div class="w-full max-w-sm mb-6">
        <button class="w-full bg-primary text-white py-4 rounded-full font-medium flex items-center justify-center space-x-2 shadow-lg hover:bg-primary/90 transition-colors duration-300" @mousedown="startVoiceRecording" @mouseup="stopVoiceRecording" @touchstart="startVoiceRecording" @touchend="stopVoiceRecording">
          <i class="fa fa-microphone text-xl"></i>
          <span :class="isRecording ? 'text-yellow-300 animate-pulse' : ''">{{ isRecording ? '正在录音...' : '按住说话' }}</span>
        </button>
        <p class="text-xs text-gray-400 text-center mt-2">长按说话，松开结束</p>
      </div>
    </div>

    <FooterNav activePage="ai" />
  </div>
</template>

<script>
import { ref } from 'vue'
import FooterNav from '../components/FooterNav.vue'

export default {
  name: 'AIAssistantPage',
  components: {
    FooterNav
  },
  setup() {
    const isRecording = ref(false)

    const startVoiceRecording = () => {
      isRecording.value = true
      // 这里可以添加实际的录音逻辑
      console.log('开始录音')
    }

    const stopVoiceRecording = () => {
      isRecording.value = false
      // 这里可以添加实际的停止录音逻辑
      console.log('停止录音')
      // 模拟处理录音结果，跳转到结果页
      setTimeout(() => {
        window.location.href = '/ai-result'
      }, 500)
    }

    const handleRecommendationClick = (type) => {
      console.log(`用户点击了${type}推荐`)
      // 根据不同类型的推荐跳转到不同的结果页面
      // 这里简化处理，统一跳转到AI结果页
      window.location.href = '/ai-result'
    }

    return {
      isRecording,
      startVoiceRecording,
      stopVoiceRecording,
      handleRecommendationClick
    }
  }
}
</script>

<style scoped>
/* 自定义动画 */
@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>