<template>
  <div class="page h-screen bg-[#f8f5f0]" id="page-financial-reconciliation">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 pl-4 pr-10 py-3.5 flex items-center justify-between"
    >
      <div class="flex items-center cursor-pointer" @click="goBack">
        <i class="fa-solid fa-chevron-left text-gray-900 text-lg"></i>
      </div>
      <h1 class="text-lg font-medium text-gray-900 absolute left-1/2 transform -translate-x-1/2">
        财务对账
      </h1>
      
    </header>

    <main class="pt-14 pb-4 px-4 overflow-y-auto h-full">
      <!-- 教练信息 -->
      <div class="py-4 flex items-center">
        <img
          src="@images/user_1.png"
          class="w-11 h-11 rounded-full object-cover mr-2.5"
          alt="教练头像"
        />
        <span class="text-gray-900 font-medium text-base">李教练</span>
        <i class="fa-solid fa-angle-down text-gray-500 text-sm ml-1.5"></i>
      </div>

      <!-- 今日预计收入 -->
      <div class="bg-white rounded-2xl p-5 mb-3 shadow-sm">
        <div class="flex items-center justify-between mb-5">
          <div class="flex items-center">
            <h2 class="text-base font-medium text-gray-900 mr-2">今日预计收入</h2>
            <span class="text-xs text-gray-400">更新于18:36</span>
          </div>
          <button
            class="px-3.5 py-1.5 bg-gray-50 rounded-full text-xs text-gray-600 font-medium"
            @click="$router.push('/wallet-detail')"
          >
            全部账单
          </button>
        </div>

        <!-- 总收入 -->
        <div class="mb-5">
          <div class="flex items-baseline">
            <span class="text-xl text-gray-900 mr-0.5 font-medium">¥</span>
            <span class="text-6xl font-bold text-gray-900 leading-none">509</span>
            <span class="text-3xl text-gray-900 font-bold">.14</span>
          </div>
        </div>

        <!-- 收入明细 -->
        <div class="flex items-center justify-around pt-5 border-t border-gray-100">
          <div class="text-center flex-1">
            <p class="text-xs text-gray-400 mb-1.5">团购收入</p>
            <p class="text-lg font-semibold text-gray-900">209.94</p>
          </div>
          <div class="w-px h-12 bg-gray-200"></div>
          <div class="text-center flex-1">
            <p class="text-xs text-gray-400 mb-1.5">优惠买单</p>
            <p class="text-lg font-semibold text-gray-900">299.20</p>
          </div>
        </div>
      </div>

      <!-- 我的账户 -->
      <div class="bg-white rounded-2xl p-5 mb-3 shadow-sm">
        <h2 class="text-base font-medium text-gray-900 mb-4">我的账户</h2>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs text-gray-400 mb-2.5">交易账户余额</p>
            <div class="flex items-baseline">
              <span class="text-lg text-gray-900 mr-0.5 font-medium">¥</span>
              <span class="text-4xl font-bold text-gray-900">0.00</span>
            </div>
          </div>
          <button
            class="text-sm text-gray-400 flex items-center cursor-pointer"
            @click="$router.push('/wallet-detail')"
          >
            详情
            <i class="fa-solid fa-angle-right text-xs ml-1"></i>
          </button>
        </div>
      </div>

      <!-- 更多功能 -->
      <div class="bg-white rounded-2xl p-5 shadow-sm">
        <h2 class="text-base font-medium text-gray-900 mb-5">更多功能</h2>
        <div class="grid grid-cols-4 gap-6">
          <!-- 提现记录 -->
          <div class="flex flex-col items-center cursor-pointer" @click="handleWithdrawRecord">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center mb-2.5 shadow-md"
            >
              <i class="fa-solid fa-folder-open text-white text-2xl"></i>
            </div>
            <span class="text-xs text-gray-700">提现记录</span>
          </div>

          <!-- 自助开票 -->
          <div class="flex flex-col items-center cursor-pointer" @click="handleInvoice">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center mb-2.5 shadow-md"
            >
              <i class="fa-solid fa-file-invoice text-white text-2xl"></i>
            </div>
            <span class="text-xs text-gray-700">自助开票</span>
          </div>

          <!-- 收款账户 -->
          <div class="flex flex-col items-center cursor-pointer" @click="handlePaymentAccount">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center mb-2.5 shadow-md"
            >
              <i class="fa-solid fa-user-check text-white text-2xl"></i>
            </div>
            <span class="text-xs text-gray-700">收款账户</span>
          </div>

          <!-- 我的钱包 -->
          <div class="flex flex-col items-center cursor-pointer" @click="$router.push('/wallet')">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 flex items-center justify-center mb-2.5 shadow-md"
            >
              <i class="fa-solid fa-wallet text-white text-2xl"></i>
            </div>
            <span class="text-xs text-gray-700">我的钱包</span>
          </div>
        </div>
      </div>
    </main>

    <!-- 客服悬浮按钮 -->
    <div class="fixed bottom-8 right-5 z-40">
      <button
        class="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex flex-col items-center justify-center shadow-xl cursor-pointer"
        @click="handleCustomerService"
      >
        <i class="fa-solid fa-headset text-white text-2xl mb-1"></i>
        <span class="text-white text-[10px] font-medium">客服</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FinancialReconciliationPage",
  data() {
    return {
      // 可以添加数据
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    handleWithdrawRecord() {
      console.log("提现记录");
      // TODO: 跳转到提现记录页面
    },
    handleInvoice() {
      console.log("自助开票");
      // TODO: 跳转到自助开票页面
    },
    handlePaymentAccount() {
      console.log("收款账户");
      // TODO: 跳转到收款账户页面
    },
    handleCustomerService() {
      console.log("联系客服");
      // TODO: 打开客服对话
    },
  },
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}
</style>
