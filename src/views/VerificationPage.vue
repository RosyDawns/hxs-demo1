<template>
  <div class="page flex flex-col h-screen" id="page-verification">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100 px-4 py-3 flex items-center justify-between"
    >
      <div class="flex items-center" @click="goBack">
        <button class="mr-2">
          <i class="fa-solid fa-chevron-left text-gray-600"></i>
        </button>
        <span class="text-sm font-medium text-gray-900">验券及退款</span>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-14 pb-16 px-4 bg-[#f3f3f3]">
      <!-- 今日数据统计区域 -->
      <div class="bg-white mt-3 rounded-2xl p-4">
        <div class="flex justify-between items-center mb-3">
          <h2 class="text-base font-medium text-gray-900">今日数据:</h2>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="text-center">
            <p class="text-xl font-bold text-gray-900">5张</p>
            <p class="text-xs text-gray-500">销售券数</p>
          </div>
          <div class="text-center">
            <p class="text-xl font-bold text-gray-900">1200元</p>
            <p class="text-xs text-gray-500">销售金额</p>
          </div>
          <div class="text-center">
            <p class="text-xl font-bold text-gray-900">3张</p>
            <p class="text-xs text-gray-500">核销券数</p>
          </div>
          <div class="text-center">
            <p class="text-xl font-bold text-gray-900">800元</p>
            <p class="text-xs text-gray-500">核销金额</p>
          </div>
          <div class="text-center">
            <p class="text-xl font-bold text-gray-900">3笔</p>
            <p class="text-xs text-gray-500">优惠买单</p>
          </div>
          <div class="text-center">
            <p class="text-xl font-bold text-gray-900">1500元</p>
            <p class="text-xs text-gray-500">优惠后买单金额</p>
          </div>
        </div>
      </div>

      <!-- 验券功能区域 -->
      <div class="mt-3">
        <div class="grid grid-cols-2 gap-3">
          <!-- 扫码验券按钮 -->
          <div
            class="bg-blue-500 rounded-2xl p-5 text-white flex flex-col items-center justify-center"
          >
            <div
              class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2"
            >
              <i class="fa-solid fa-qrcode text-3xl"></i>
            </div>
            <span class="text-base font-medium">扫码验券</span>
          </div>

          <!-- 输码验券按钮 -->
          <div
            class="bg-green-500 rounded-2xl p-5 text-white flex flex-col items-center justify-center"
          >
            <div
              class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2"
            >
              <i class="fa-solid fa-keyboard text-3xl"></i>
            </div>
            <span class="text-base font-medium">输码验券</span>
          </div>
        </div>
      </div>

      <!-- 功能列表 -->
      <div class="bg-white mt-3 rounded-2xl overflow-hidden">
        <!-- 核销明细 -->
        <div
          class="flex items-center justify-between p-4 border-b border-gray-100 cursor-pointer"
          @click="$router.push('/order-detail')"
        >
          <div class="flex items-center">
            <div
              class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3"
            >
              <i class="fa-solid fa-list-check text-blue-500"></i>
            </div>
            <span class="text-sm text-gray-900">核销明细</span>
          </div>
          <i class="fa-solid fa-angle-right text-gray-400 text-xs"></i>
        </div>

        <!-- 买单明细 -->
        <div
          class="flex items-center justify-between p-4 border-b border-gray-100"
        >
          <div class="flex items-center">
            <div
              class="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center mr-3"
            >
              <i class="fa-solid fa-receipt text-green-500"></i>
            </div>
            <span class="text-sm text-gray-900">买单明细</span>
          </div>
          <i class="fa-solid fa-angle-right text-gray-400 text-xs"></i>
        </div>

        <!-- 处理售后 -->
        <div
          class="flex items-center justify-between p-4 border-b border-gray-100"
        >
          <div class="flex items-center">
            <div
              class="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mr-3"
            >
              <i class="fa-solid fa-headset text-amber-500"></i>
            </div>
            <span class="text-sm text-gray-900">处理售后</span>
          </div>
          <i class="fa-solid fa-angle-right text-gray-400 text-xs"></i>
        </div>

        <!-- 发起退款 -->
        <div
          class="flex items-center justify-between p-4"
          @click="$router.push('/refund')"
        >
          <div class="flex items-center cursor-pointer">
            <div
              class="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mr-3"
            >
              <i class="fa-solid fa-undo text-red-500"></i>
            </div>
            <span class="text-sm text-gray-900">发起退款</span>
          </div>
          <i class="fa-solid fa-angle-right text-gray-400 text-xs"></i>
        </div>
      </div>

      <!-- 客服悬浮按钮 -->
      <div class="fixed bottom-20 right-4 z-40">
        <button
          class="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg"
        >
          <i class="fa-solid fa-headset text-white text-xl"></i>
        </button>
      </div>
    </main>

    <!-- 底部导航栏 -->
    <footer
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 px-6 flex justify-around"
    >
      <div class="flex flex-col items-center">
        <div
          class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-1"
        >
          <i class="fa-solid fa-paw text-orange-500 text-xl"></i>
        </div>
        <span class="text-xs text-orange-500">首页</span>
      </div>
      <div class="flex flex-col items-center">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center mb-1 relative"
        >
          <i class="fa-solid fa-bell text-gray-400 text-xl"></i>
          <span
            class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center"
          >
            <span class="text-white text-xs">99+</span>
          </span>
        </div>
        <span class="text-xs text-gray-400">消息</span>
      </div>
      <div class="flex flex-col items-center">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center mb-1"
        >
          <i class="fa-solid fa-user text-gray-400 text-xl"></i>
        </div>
        <span class="text-xs text-gray-400">我的</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "VerificationPage",
  data() {
    return {
      // 可以根据需要添加数据
    };
  },
  methods: {
    // 返回上一页
    goBack() {
      this.$router.back();
    },
  },
  mounted() {
    // 页面加载时的初始化逻辑
  },
};
</script>

<style scoped>
/* 自定义样式 */
.page {
  padding-bottom: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}

/* 去除滚动条 */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
