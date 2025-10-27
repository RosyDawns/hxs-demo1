<template>
  <div class="page flex flex-col h-screen bg-gray-50" id="page-wallet-detail">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 border-t border-gray-100 pl-2 pr-10 py-3 flex items-center"
    >
      <button
        class="w-8 h-8 flex items-center justify-center text-gray-600"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div class="flex-1 text-center">
        <h1 class="text-sm font-medium text-gray-600">唤醒兽支付·零钱</h1>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-14 px-4 pb-4 bg-[#f5f5f5]">
      <div class="pt-4">
        <!-- 安全保障提示 -->
        <div
          class="px-4 py-3 flex justify-center items-center bg-[#f1f1f1] rounded-t-2xl"
        >
          <div class="flex items-center justify-center text-gray-500 text-sm">
            <i class="fa-solid fa-shield-alt text-orange-500 mr-1"></i>
            <span>安全保障中</span>
          </div>
          <i class="fa-solid fa-angle-right text-gray-400 text-xs"></i>
        </div>
        <div class="bg-white px-4 pb-4 pt-2 rounded-2xl">
          <!-- 余额显示区域 -->
          <div class="bg-white mt-2 px-4 py-6 text-center">
            <p class="text-black text-base mb-3">可用余额(元)</p>
            <p class="text-5xl font-bold text-black">98.10</p>
          </div>

          <!-- 操作按钮 -->
          <div class="flex px-4 mt-4 space-x-4">
            <button
              class="flex-1 bg-gray-100 text-gray-700 font-medium py-2 rounded-lg"
            >
              提现
            </button>
            <button
              class="flex-1 bg-orange-500 text-white font-medium py-3 rounded-lg"
            >
              充值
            </button>
          </div>
        </div>
      </div>

      <div class="mt-4 pt-4 rounded-2xl bg-white">
        <!-- 零钱明细标题 -->
        <div class="flex justify-between items-center px-4">
          <h2 class="text-base font-bold text-gray-900">零钱明细</h2>
          <div class="flex items-center text-gray-500 text-sm">
            <span>查看全部</span>
            <i class="fa-solid fa-angle-right ml-1 text-xs"></i>
          </div>
        </div>
        <!-- 交易记录列表 -->
        <div class="mt-2">
          <!-- 交易记录项 -->
          <div
            class="px-4 py-4 border-t border-gray-100 flex justify-between items-center"
          >
            <div>
              <div class="text-sm font-medium text-gray-600">
                唤醒兽月付退还
              </div>
              <div class="text-xs text-gray-500 mt-1">2025-09-29 01:48:19</div>
            </div>
            <div class="flex items-center">
              <span class="text-orange-500 font-medium">+13.99</span>
              <i class="fa-solid fa-angle-right ml-3 text-gray-400 text-xs"></i>
            </div>
          </div>

          <div
            class="px-4 py-4 border-t border-gray-100 flex justify-between items-center"
          >
            <div>
              <div class="text-sm font-medium text-gray-600">
                零钱支付退款
              </div>
              <div class="text-xs text-gray-500 mt-1">2025-09-26 00:42:02</div>
            </div>
            <div class="flex items-center">
              <span class="text-orange-500 font-medium">+18.00</span>
              <i class="fa-solid fa-angle-right ml-3 text-gray-400 text-xs"></i>
            </div>
          </div>

          <div
            class="px-4 py-4 border-t border-gray-100 flex justify-between items-center"
          >
            <div>
              <div class="text-sm font-medium text-gray-600">
                零钱支付退款
              </div>
              <div class="text-xs text-gray-500 mt-1">2025-09-22 03:28:05</div>
            </div>
            <div class="flex items-center">
              <span class="text-orange-500 font-medium">+11.50</span>
              <i class="fa-solid fa-angle-right ml-3 text-gray-400 text-xs"></i>
            </div>
          </div>

          <div
            class="px-4 py-4 border-t border-gray-100 flex justify-between items-center"
          >
            <div>
              <div class="text-sm font-medium text-gray-600">
                零钱支付退款
              </div>
              <div class="text-xs text-gray-500 mt-1">2025-09-20 09:12:32</div>
            </div>
            <div class="flex items-center">
              <span class="text-orange-500 font-medium">+21.00</span>
              <i class="fa-solid fa-angle-right ml-3 text-gray-400 text-xs"></i>
            </div>
          </div>

          <div
            class="px-4 py-4 border-t border-gray-100 flex justify-between items-center"
          >
            <div>
              <div class="text-sm font-medium text-gray-600">
                零钱支付退款
              </div>
              <div class="text-xs text-gray-500 mt-1">2025-08-16 01:42:09</div>
            </div>
            <div class="flex items-center">
              <span class="text-orange-500 font-medium">+41.99</span>
              <i class="fa-solid fa-angle-right ml-3 text-gray-400 text-xs"></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "WalletDetailPage",
  data() {
    return {
      // 可以根据需要添加数据
    };
  },
  methods: {
    // 可以根据需要添加方法
  },
};
</script>

<style scoped>
/* 可以根据需要添加自定义样式 */
</style>
