<template>
  <div class="page h-screen flex flex-col bg-gradient-to-b from-yellow-50 to-white">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 px-4 py-3.5 flex items-center justify-between border-b border-gray-100">
      <div class="flex items-center cursor-pointer" @click="goBack">
        <i class="fa-solid fa-chevron-left text-gray-900 text-lg"></i>
      </div>
      <h1 class="text-lg font-medium text-gray-900 absolute left-1/2 transform -translate-x-1/2">
        随心推
      </h1>
      <div class="w-6"></div>
    </header>

    <main class="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-8">
      <!-- 插画图标 -->
      <div class="mb-8 relative">
        <div class="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center shadow-lg">
          <i class="fa-solid fa-rocket text-yellow-500 text-5xl"></i>
        </div>
        <!-- 装饰小图标 -->
        <div class="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center animate-bounce">
          <i class="fa-solid fa-star text-orange-400 text-lg"></i>
        </div>
        <div class="absolute -bottom-1 -left-1 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center animate-pulse">
          <i class="fa-solid fa-sparkles text-amber-400 text-sm"></i>
        </div>
      </div>

      <!-- 标题 -->
      <h2 class="text-2xl font-bold text-gray-900 mb-3">
        敬请期待
      </h2>

      <!-- 描述 -->
      <p class="text-base text-gray-600 text-center mb-2 leading-relaxed">
        随心推功能正在精心打磨中
      </p>
      <p class="text-sm text-gray-500 text-center mb-8 leading-relaxed">
        我们将为您带来更便捷、更智能的推广体验
      </p>

      <!-- 特性预告卡片 -->
      <div class="w-full max-w-sm space-y-3 mb-8">
        <div class="bg-white rounded-2xl p-4 shadow-sm flex items-center">
          <div class="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mr-3">
            <i class="fa-solid fa-wand-magic-sparkles text-purple-500 text-lg"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-sm font-medium text-gray-900">智能推广</h3>
            <p class="text-xs text-gray-500">AI精准匹配目标用户</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-4 shadow-sm flex items-center">
          <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3">
            <i class="fa-solid fa-chart-line text-blue-500 text-lg"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-sm font-medium text-gray-900">效果追踪</h3>
            <p class="text-xs text-gray-500">实时查看推广数据</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-4 shadow-sm flex items-center">
          <div class="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mr-3">
            <i class="fa-solid fa-coins text-green-500 text-lg"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-sm font-medium text-gray-900">灵活投放</h3>
            <p class="text-xs text-gray-500">按需调整推广策略</p>
          </div>
        </div>
      </div>

      <!-- 提示信息 -->
      <div class="bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-3 flex items-start max-w-sm w-full">
        <i class="fa-solid fa-bell text-yellow-500 text-sm mt-0.5 mr-2"></i>
        <p class="text-xs text-gray-600 leading-relaxed">
          功能即将上线，敬请关注公告通知
        </p>
      </div>
    </main>

    <!-- 底部按钮 -->
    <footer class="px-6 pb-8">
      <button 
        @click="goBack"
        class="w-full py-3.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-medium rounded-xl shadow-md active:scale-95 transition-transform"
      >
        返回
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CasualPromotionPage",
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
