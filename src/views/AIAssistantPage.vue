<template>
  <div
    class="page bg-gradient-to-b from-white to-blue-50 min-h-screen"
    id="page-ai-assistant"
  >
    <div class="pt-10 px-6 mb-6 flex justify-between items-center">
      <div class="flex items-center">
        <button
          class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <i class="fa fa-bars text-dark"></i>
        </button>
      </div>

      <div class="flex items-center space-x-3">
        <button
          class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <i class="fa-solid fa-clone"></i>
        </button>
      </div>
    </div>

    <!-- 主体内容区 -->
    <div class="flex flex-col items-center justify-between flex-1 px-4 py-8">
      <!-- AI形象 -->
      <div class="flex flex-col items-center mb-8">
        <div class="relative">
          <!-- 狮子形象 -->
          <div
            class="w-40 h-40 bg-yellow-100 rounded-full flex items-center justify-center relative"
          >
            <img
              src="https://picsum.photos/id/237/120/120"
              alt="大狮兄"
              class="w-32 h-32 object-cover rounded-full"
            />
            <!-- 发光效果 -->
            <div
              class="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-30 animate-pulse"
            ></div>
          </div>
        </div>

        <!-- 问候语 -->
        <div class="mt-6 px-6 py-3 rounded-2xl">
          <p class="text-lg font-medium text-center">"国庆快乐，主人！"</p>
        </div>
      </div>

      <!-- 推荐操作按钮 -->
      <div class="w-full max-w-sm space-y-4 mb-8">
        <div class="grid grid-cols-2 gap-4">
          <!-- 按钮1 -->
          <div
            class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 nav-action hover:shadow-md transition-shadow duration-300"
            @click="handleRecommendationClick('fitness')"
          >
            <div class="flex items-start space-x-3">
              <div class="bg-green-100 text-green-500 p-2 rounded-full">
                <i class="fa fa-dumbbell text-xl"></i>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-800">
                  帮我推荐一位附近的
                </p>
                <p class="text-sm font-medium text-gray-800">健身唤醒狮</p>
              </div>
            </div>
            <div class="flex justify-end">
              <div
                class="mt-3 text-xs text-white font-medium flex items-center px-2 py-1 bg-black rounded-full"
              >
                <i class="fa-solid fa-comment-dots"></i> 试试
              </div>
            </div>
          </div>

          <!-- 按钮2 -->
          <div
            class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 nav-action hover:shadow-md transition-shadow duration-300"
            @click="handleRecommendationClick('yoga')"
          >
            <div class="flex items-start space-x-3">
              <div class="bg-purple-100 text-purple-500 p-2 rounded-full">
                <i class="fa fa-leaf text-xl"></i>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-800">找瑜伽老师学习</p>
                <p class="text-sm font-medium text-gray-800">基础动作</p>
              </div>
            </div>
            <div class="flex justify-end">
              <div
                class="mt-3 text-xs text-white font-medium flex items-center px-2 py-1 bg-black rounded-full"
              >
                <i class="fa-solid fa-comment-dots"></i>试试
              </div>
            </div>
          </div>
        </div>

        <!-- 其他推荐操作 -->
        <div
          class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 nav-action hover:shadow-md transition-shadow duration-300"
          @click="handleRecommendationClick('other')"
        >
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
        <button
          class="w-full bg-primary text-white py-4 rounded-full font-medium flex items-center justify-center space-x-2 shadow-lg hover:bg-primary/90 transition-colors duration-300"
          @mousedown="startVoiceRecording"
          @mouseup="stopVoiceRecording"
          @touchstart="startVoiceRecording"
          @touchend="stopVoiceRecording"
        >
          <i class="fa fa-microphone text-xl"></i>
          <span :class="isRecording ? 'text-yellow-300 animate-pulse' : ''">{{
            isRecording ? "正在录音..." : "按住说话"
          }}</span>
        </button>
        <p class="text-xs text-gray-400 text-center mt-2">长按说话，松开结束</p>
      </div>
    </div>

    <FooterNav activePage="ai" />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import FooterNav from "../components/FooterNav.vue";

export default {
  name: "AIAssistantPage",
  components: {
    FooterNav,
  },
  setup() {
    const router = useRouter();
    const isRecording = ref(false);

    const startVoiceRecording = () => {
      isRecording.value = true;
      // 这里可以添加实际的录音逻辑
      console.log("开始录音");
    };

    const stopVoiceRecording = () => {
      isRecording.value = false;
      // 这里可以添加实际的停止录音逻辑
      console.log("停止录音");
      // 模拟处理录音结果，跳转到结果页
      setTimeout(() => {
        router.push("/ai-result");
      }, 500);
    };

    const handleRecommendationClick = (type) => {
      console.log(`用户点击了${type}推荐`);
      // 根据不同类型的推荐跳转到不同的结果页面
      // 这里简化处理，统一跳转到AI结果页
      router.push("/ai-result");
    };

    return {
      isRecording,
      startVoiceRecording,
      stopVoiceRecording,
      handleRecommendationClick,
    };
  },
};
</script>

<style scoped>
/* 自定义动画 */
@keyframes pulse {
  0%,
  100% {
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
