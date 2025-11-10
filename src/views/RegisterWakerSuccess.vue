<template>
  <div class="w-full min-h-screen bg-white overflow-x-hidden flex flex-col items-center justify-center p-6">
    <div class="w-full max-w-md text-center">
      <!-- 成功图标 -->
      <div class="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
        <i class="fa-solid fa-check text-green-500 text-3xl"></i>
      </div>

      <!-- 标题 -->
      <h1 class="text-2xl font-bold text-gray-800 mb-3">申请已提交成功！</h1>

      <!-- 提示信息 -->
      <p class="text-sm text-gray-500 mb-8">
        您的认证申请已成功提交，我们将在1-3个工作日内完成审核。
        审核结果将通过短信通知您，请保持手机畅通。
      </p>

      <!-- 审核进度说明 -->
      <div class="bg-gray-50 rounded-xl p-5 mb-8">
        <h2 class="text-base font-medium text-gray-700 mb-4 flex items-center">
          <i class="fa-solid fa-circle-info text-blue-500 mr-2"></i>审核进度说明
        </h2>
        <div class="space-y-4">
          <div class="flex">
            <div class="relative">
              <div class="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <div class="absolute top-6 left-1/2 w-0.5 h-8 bg-amber-200 -translate-x-1/2"></div>
            </div>
            <div class="ml-4 flex-1">
              <h3 class="text-sm font-medium text-gray-700">申请提交</h3>
              <p class="text-xs text-gray-500 mt-1">您的申请已成功提交至平台</p>
            </div>
            <div class="text-xs text-green-500 whitespace-nowrap">
              已完成
            </div>
          </div>

          <div class="flex">
            <div class="relative">
              <div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <div class="absolute top-6 left-1/2 w-0.5 h-8 bg-gray-200 -translate-x-1/2"></div>
            </div>
            <div class="ml-4 flex-1">
              <h3 class="text-sm font-medium text-gray-700">资质审核</h3>
              <p class="text-xs text-gray-500 mt-1">工作人员正在审核您的认证信息</p>
            </div>
            <div class="text-xs text-gray-400 whitespace-nowrap">
              进行中
            </div>
          </div>

          <div class="flex">
            <div class="relative">
              <div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
            </div>
            <div class="ml-4 flex-1">
              <h3 class="text-sm font-medium text-gray-700">审核完成</h3>
              <p class="text-xs text-gray-500 mt-1">审核结果将通过短信通知您</p>
            </div>
            <div class="text-xs text-gray-400 whitespace-nowrap">
              待开始
            </div>
          </div>
        </div>
      </div>

      <!-- 提示信息 -->
      <div class="text-xs text-gray-500 mb-8">
        <p class="mb-2">温馨提示：</p>
        <ul class="text-left space-y-1 ml-2 list-disc pl-4">
          <li>请保持注册手机号畅通，以便接收审核结果</li>
          <li>审核通过后，您将获得主理人认证标识</li>
          <li>如有疑问，请联系客服400-123-4567</li>
        </ul>
      </div>

      <!-- 按钮组 -->
      <div class="space-y-3">
        <button 
          class="w-full py-3 bg-amber-500 text-white font-medium rounded-full shadow-md transition-all duration-300 hover:bg-amber-600"
          @click="goToHome"
        >
          返回首页
        </button>
        <button 
          class="w-full py-3 border border-gray-300 text-gray-700 font-medium rounded-full transition-all duration-300 hover:bg-gray-50"
          @click="checkStatus"
        >
          查询审核进度
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterWakerSuccess",
  methods: {
    // 返回首页
    goToHome() {
      this.$router.push('/');
    },
    // 查询审核进度
    checkStatus() {
      // 跳转到审核进度页面
      this.$router.push('/register-waker/application-status');
    }
  }
};
</script>

<style scoped>
/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}
</style>