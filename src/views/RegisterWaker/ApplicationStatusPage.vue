<template>
  <div class="w-full min-h-screen bg-white overflow-x-hidden">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center bg-white border-b border-gray-200">
      <button
        class="text-gray-700 w-8 h-8 flex items-center justify-center"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left text-sm"></i>
      </button>
      <h1 class="text-lg font-bold text-gray-800 flex-1 text-center">审核进度</h1>
      <div class="w-8"></div> <!-- 占位，保持标题居中 -->
    </header>

    <!-- 主要内容区域 -->
    <div class="pt-20 px-6 pb-10">
      <!-- 审核状态卡片 -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h2 class="text-base font-bold text-gray-800 mb-1">{{ applicationTitle }}</h2>
            <p class="text-xs text-gray-500">申请时间：{{ applicationDate }}</p>
          </div>
          <div class="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">
            {{ currentStatus }}
          </div>
        </div>

        <!-- 进度条 -->
        <div class="relative mb-8">
          <!-- 进度轨道 -->
          <div class="h-1 bg-gray-200 rounded-full w-full">
            <!-- 进度条 -->
            <div class="h-1 bg-amber-500 rounded-full" :style="{ width: progressPercentage + '%' }"></div>
          </div>
          
          <!-- 进度节点 -->
          <div class="flex justify-between -mt-1.5">
            <div v-for="(step, index) in progressSteps" :key="index" class="flex flex-col items-center">
              <div 
                class="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mb-2"
                :class="{
                  'bg-amber-500': index < currentStep,
                  'bg-gray-300': index > currentStep,
                  'bg-amber-500 border-2 border-amber-500': index === currentStep
                }"
              >
                <i v-if="index < currentStep" class="fa-solid fa-check"></i>
                <span v-else>{{ step.number }}</span>
              </div>
              <span class="text-xs text-gray-500">{{ step.title }}</span>
            </div>
          </div>
        </div>

        <!-- 当前进度详情 -->
        <div class="bg-gray-50 rounded-lg p-4">
          <h3 class="text-sm font-medium text-gray-700 mb-3">当前进度详情</h3>
          <p class="text-xs text-gray-600 mb-2">{{ currentProgressDetails }}</p>
          <p class="text-xs text-gray-500" v-if="estimatedCompleteTime">
            预计完成时间：{{ estimatedCompleteTime }}
          </p>
        </div>
      </div>

      <!-- 审核流程图 -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
        <h2 class="text-base font-bold text-gray-800 mb-4">审核流程</h2>
        <div class="space-y-4">
          <div 
            v-for="(step, index) in allSteps" 
            :key="index"
            class="flex items-start"
          >
            <div class="relative">
              <div 
                class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                :class="{
                  'bg-green-500': index < currentStep,
                  'bg-amber-500': index === currentStep,
                  'bg-gray-300': index > currentStep
                }"
              >
                <i v-if="index < currentStep" class="fa-solid fa-check"></i>
                <span v-else>{{ step.number }}</span>
              </div>
              <div 
                v-if="index < allSteps.length - 1"
                class="absolute top-6 left-1/2 w-0.5 h-8 -translate-x-1/2"
                :class="{
                  'bg-green-200': index < currentStep - 1,
                  'bg-amber-200': index === currentStep - 1,
                  'bg-gray-200': index >= currentStep
                }"
              ></div>
            </div>
            <div class="ml-4 flex-1">
              <div class="flex justify-between items-center mb-1">
                <h3 
                  class="text-sm font-medium"
                  :class="{
                    'text-green-600': index < currentStep,
                    'text-gray-800': index === currentStep,
                    'text-gray-500': index > currentStep
                  }"
                >
                  {{ step.title }}
                </h3>
                <span v-if="index < currentStep" class="text-xs text-green-500">
                  已完成
                </span>
              </div>
              <p class="text-xs text-gray-600 mb-1">{{ step.description }}</p>
              <p 
                v-if="index < currentStep" 
                class="text-xs text-gray-500"
              >
                完成时间：{{ step.completedTime }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 温馨提示 -->
      <div class="bg-blue-50 rounded-xl p-4 mb-8">
        <h3 class="text-sm font-medium text-blue-700 mb-2 flex items-center">
          <i class="fa-solid fa-info-circle mr-2"></i>温馨提示
        </h3>
        <ul class="text-xs text-blue-600 space-y-1">
          <li class="flex">
            <span class="mr-2">•</span>
            <span>审核时间通常为1-3个工作日，请耐心等待</span>
          </li>
          <li class="flex">
            <span class="mr-2">•</span>
            <span>审核结果将通过短信通知您，请保持手机畅通</span>
          </li>
          <li class="flex">
            <span class="mr-2">•</span>
            <span>如有疑问，可联系客服热线 400-123-4567</span>
          </li>
        </ul>
      </div>

      <!-- 底部按钮 -->
      <div class="space-y-3">
        <button 
          class="w-full py-3 bg-amber-500 text-white font-medium rounded-lg shadow-md hover:bg-amber-600 transition-colors"
          @click="backToHome"
        >
          返回首页
        </button>
        <button 
          class="w-full py-3 bg-white text-amber-500 font-medium rounded-lg border border-amber-200 hover:bg-amber-50 transition-colors"
          @click="contactSupport"
        >
          联系客服
        </button>
      </div>
      
      <!-- 隐私协议链接 -->
      <div class="mt-8 text-center">
        <div class="text-xs text-gray-500 flex justify-center space-x-4">
          <a href="/privacy-policy" class="hover:text-amber-500 transition-colors">《隐私政策》</a>
          <a href="/user-agreement" class="hover:text-amber-500 transition-colors">《用户服务协议》</a>
          <a href="/user-agreement" class="hover:text-amber-500 transition-colors">《认证服务协议》</a>
        </div>
        <p class="text-xs text-gray-400 mt-2">© 2024 唤醒师平台 All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicationStatusPage",
  data() {
    return {
      // 应用信息
      applicationTitle: "生活主理人认证申请",
      applicationDate: "2024-01-15 14:30",
      
      // 当前状态
      currentStatus: "审核中",
      currentStep: 2, // 0-indexed, 当前在第几步
      
      // 进度条步骤
      progressSteps: [
        { number: 1, title: "申请提交" },
        { number: 2, title: "材料审核" },
        { number: 3, title: "结果通知" }
      ],
      
      // 所有步骤详情
      allSteps: [
        {
          number: 1,
          title: "申请提交",
          description: "您的认证申请已成功提交",
          completedTime: "2024-01-15 14:30"
        },
        {
          number: 2,
          title: "材料审核",
          description: "工作人员正在审核您提交的材料",
          completedTime: ""
        },
        {
          number: 3,
          title: "结果通知",
          description: "审核完成后，我们将通过短信通知您",
          completedTime: ""
        }
      ],
      
      // 预计完成时间
      estimatedCompleteTime: "2024-01-17 18:00"
    };
  },
  computed: {
    // 计算进度百分比
    progressPercentage() {
      const totalSteps = this.progressSteps.length;
      return (this.currentStep / totalSteps) * 100;
    },
    
    // 当前进度详情
    currentProgressDetails() {
      if (this.currentStep < this.allSteps.length) {
        return this.allSteps[this.currentStep].description;
      }
      return "您的申请已完成审核";
    }
  },
  methods: {
    // 返回首页
    backToHome() {
      this.$router.push('/');
    },
    
    // 联系客服
    contactSupport() {
      // 这里可以实现联系客服的逻辑
      alert('即将联系客服：400-123-4567');
    },
    
    // 在实际应用中，这里应该从API获取真实的审核状态
    fetchApplicationStatus() {
      // 模拟API请求
      // 在实际项目中，应该调用后端API获取真实的审核进度数据
      console.log('获取审核进度数据');
      
      // 这里可以根据实际需要更新状态
      // this.$axios.get('/api/application-status').then(response => {
      //   // 更新状态数据
      // });
    }
  },
  mounted() {
    // 组件挂载时获取审核状态
    this.fetchApplicationStatus();
  }
};
</script>

<style scoped>
/* 自定义样式 */

/* 进度条动画 */
@keyframes progressAnimation {
  from { width: 0%; }
  to { width: var(--progress-width); }
}
</style>