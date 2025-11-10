<template>
  <div class="w-full min-h-screen bg-white overflow-x-hidden">
    <!-- 主要内容区域 -->
    <div class="pt-10 px-6 pb-10 flex flex-col items-center">
      <div class="mt-16 flex flex-col items-center mb-8">
        <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <i class="fa-solid fa-check text-3xl text-green-500"></i>
        </div>
        <h1 class="text-xl font-bold text-gray-900 mb-2">提交成功</h1>
        <p class="text-sm text-gray-500 text-center">您的认证申请已成功提交，我们将尽快审核</p>
      </div>

      <div class="w-full bg-gray-50 rounded-xl p-5 mb-8">
        <h2 class="text-base font-medium text-gray-800 mb-4">审核须知</h2>
        <ul class="text-sm text-gray-600 space-y-3">
          <li class="flex items-start">
            <span class="text-amber-500 mr-2">•</span>
            <span>审核时间通常为 1-3 个工作日，请耐心等待</span>
          </li>
          <li class="flex items-start">
            <span class="text-amber-500 mr-2">•</span>
            <span>审核结果将通过短信通知您，请保持手机畅通</span>
          </li>
          <li class="flex items-start">
            <span class="text-amber-500 mr-2">•</span>
            <span>若审核未通过，您可以根据提示修改并重新提交</span>
          </li>
          <li class="flex items-start">
            <span class="text-amber-500 mr-2">•</span>
            <span>如有疑问，可联系客服热线 400-123-4567</span>
          </li>
        </ul>
      </div>

      <div class="w-full space-y-4">
        <button 
          class="w-full py-3 bg-amber-500 text-white font-medium rounded-lg shadow-md hover:bg-amber-600 transition-colors"
          @click="backToHome"
        >
          返回首页
        </button>
        <button 
          class="w-full py-3 bg-white text-amber-500 font-medium rounded-lg border border-amber-200 hover:bg-amber-50 transition-colors"
          @click="viewApplicationStatus"
        >
          查看申请进度
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubmitSuccessPage",
  methods: {
    // 返回首页
    backToHome() {
      this.$router.push('/');
    },
    // 查看申请进度
    viewApplicationStatus() {
      // 这里可以跳转到申请进度页面
      this.$router.push('/register-waker/application-status');
    }
  }
};
</script>

<style scoped>
/* 自定义样式 */
</style>