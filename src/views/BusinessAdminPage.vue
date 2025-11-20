<template>
  <div class="page flex flex-col h-screen" id="page-business-admin">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100 px-4 py-3 flex items-center justify-between"
    >
      <div class="flex items-center">
        <div class="mr-2" @click="goBack">
          <i class="fa-solid fa-chevron-left text-gray-600"></i>
        </div>
        <div
          class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2"
        >
          <i class="fa-solid fa-user text-gray-500"></i>
        </div>
        <span class="text-sm font-medium text-gray-900">张小明</span>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-14 pb-16 px-4 bg-[#f3f3f3]">
      <!-- 服务分和统计数据 -->
      <div class="bg-white mt-3 rounded-2xl p-5">
        <div class="flex items-center justify-between">
          <div class="flex flex-col items-center mr-4">
            <div class="mb-2">
              <p class="text-xs text-gray-500">服务分</p>
            </div>
            <div class="relative">
              <div
                class="w-16 h-16 rounded-full flex items-center justify-center bg-orange-100"
              >
                <span class="text-xl font-bold text-orange-500">4.8</span>
              </div>
              <div
                class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center border-2 border-orange-500"
              >
                <span class="text-xs font-bold text-orange-500">S</span>
              </div>
            </div>
          </div>
          <div class="flex-1 grid grid-cols-3 gap-2">
            <div class="text-center">
              <p class="text-lg font-bold text-gray-900">272.2元</p>
              <p class="text-xs text-gray-500">核销金额</p>
              <p class="text-xs text-gray-400">昨日561.4元</p>
            </div>
            <div class="text-center">
              <p class="text-lg font-bold text-gray-900">3</p>
              <p class="text-xs text-gray-500">核销券数</p>
              <p class="text-xs text-gray-400">昨日9</p>
            </div>
            <div class="text-center">
              <p class="text-lg font-bold text-gray-900">0元</p>
              <p class="text-xs text-gray-500">成交金额</p>
              <p class="text-xs text-gray-400">昨日0元</p>
            </div>
          </div>
        </div>

        <!-- 服务优秀提示 -->
        <div
          class="mt-4 bg-orange-50 rounded-lg p-3 flex items-center justify-between"
        >
          <div class="flex items-center">
            <span class="text-xs text-orange-500 font-medium mr-2"
              >服务优秀</span
            >
            <p class="text-xs text-gray-600">好的服务是长久发展的基础</p>
          </div>
          <i class="fa-solid fa-angle-right text-xs text-gray-400"></i>
        </div>
      </div>

      <!-- 功能入口网格 -->
      <div class="bg-white mt-3 rounded-2xl p-4">
        <div class="grid grid-cols-5 gap-4">
          <!-- 第一行功能入口 -->
          <div
            class="flex flex-col items-center"
            @click="$router.push('/verification')"
          >
            <div
              class="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-1 cursor-pointer"
            >
              <i class="fa-solid fa-qrcode text-blue-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600 cursor-pointer">验券及退款</span>
          </div>
          <div class="flex flex-col items-center">
            <div
              class="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-1"
            >
              <i class="fa-solid fa-file-invoice text-green-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600">交易查询</span>
          </div>
          <div class="flex flex-col items-center">
            <div
              class="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center mb-1"
            >
              <i class="fa-solid fa-briefcase text-cyan-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600">服务管理</span>
          </div>
          <div class="flex flex-col items-center">
            <div
              class="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-1"
            >
              <i class="fa-solid fa-store text-purple-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600">主页信息</span>
          </div>
          <div
            class="flex flex-col items-center cursor-pointer"
            @click="$router.push('/business-admin/reviews')"
          >
            <div
              class="w-14 h-14 rounded-xl bg-pink-50 flex items-center justify-center mb-1"
            >
              <i class="fa-solid fa-comment text-pink-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600">评价管理</span>
          </div>

          <!-- 第二行功能入口 -->
          <div class="flex flex-col items-center">
            <div
              class="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-1"
            >
              <i class="fa-solid fa-shopping-bag text-red-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600">星推官带货</span>
          </div>
          <div class="flex flex-col items-center">
            <div
              class="w-14 h-14 rounded-xl bg-yellow-50 flex items-center justify-center mb-1"
            >
              <i class="fa-solid fa-thumbs-up text-yellow-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600">随心推</span>
          </div>
          <div
            class="flex flex-col items-center"
            @click="$router.push('/financial-reconciliation')"
          >
            <div
              class="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-1 cursor-pointer"
            >
              <i class="fa-solid fa-wallet text-indigo-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600 cursor-pointer">财务对账</span>
          </div>
          <div
            class="flex flex-col items-center cursor-pointer"
            @click="$router.push('/business-admin/data-center')"
          >
            <div
              class="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-1"
            >
              <i class="fa-solid fa-chart-line text-teal-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600 cursor-pointer">数据中心</span>
          </div>
          <div
            class="flex flex-col items-center cursor-pointer"
            @click="$router.push('/business-admin/free-trial')"
          >
            <div
              class="w-14 h-14 rounded-xl bg-lime-50 flex items-center justify-center mb-1"
            >
              <i class="fa-solid fa-gift text-lime-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600 cursor-pointer">免费体验</span>
          </div>

          <!-- 第三行功能入口 -->
          <div class="flex flex-col items-center">
            <div
              class="w-14 h-14 rounded-xl bg-rose-50 flex items-center justify-center mb-1"
            >
              <i class="fa-solid fa-paper-plane text-rose-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600">动态发布</span>
          </div>
          <div class="flex flex-col items-center">
            <div
              class="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-1"
            >
              <i class="fa-solid fa-ticket text-amber-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600">人气榜单</span>
          </div>
          <div class="flex flex-col items-center">
            <div
              class="w-14 h-14 rounded-xl bg-violet-50 flex items-center justify-center mb-1"
            >
              <i class="fa-solid fa-users text-violet-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600">子账户</span>
          </div>
          <div class="flex flex-col items-center">
            <div
              class="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-1"
            >
              <i class="fa-solid fa-circle-nodes text-sky-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600">组团活动</span>
          </div>
          <div
            class="flex flex-col items-center"
            @click="$router.push('/energy-theater')"
          >
            <div
              class="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-1 cursor-pointer"
            >
              <i class="fa-solid fa-theater-masks text-emerald-500 text-xl"></i>
            </div>
            <span class="text-xs text-gray-600 cursor-pointer">能量剧场</span>
          </div>
        </div>
      </div>

      <!-- 待服务区域 -->
      <div class="bg-white mt-3 rounded-2xl p-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-sm font-bold text-gray-900">待服务</h2>
          <div class="flex items-center space-x-3">
            <span class="text-xs text-orange-500 font-medium">已预约</span>
            <span class="text-xs text-gray-500">服务中</span>
            <span class="text-xs text-gray-500">待退款</span>
            <span class="text-xs text-gray-500">全部</span>
          </div>
        </div>

        <!-- 暂无订单提示 -->
        <div class="py-10 flex flex-col items-center justify-center">
          <div
            class="w-24 h-24 flex items-center justify-center text-gray-300 mb-3"
          >
            <i class="fa-solid fa-file-invoice text-4xl"></i>
          </div>
          <p class="text-sm text-gray-400">暂无订单</p>
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
        <i class="fa-solid fa-compass text-gray-400 text-xl mb-1"></i>
        <span class="text-xs text-gray-400">推广</span>
      </div>
      <div class="flex flex-col items-center">
        <i class="fa-solid fa-chart-pie text-gray-400 text-xl mb-1"></i>
        <span class="text-xs text-gray-400">数据</span>
      </div>
      <div class="flex flex-col items-center">
        <i class="fa-solid fa-bell text-gray-400 text-xl mb-1"></i>
        <span class="text-xs text-gray-400">消息</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BusinessAdminPage",
  data() {
    return {
      // 可以根据需要添加数据
    };
  },
  methods: {
    // 可以根据需要添加方法
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

/* 导航项激活状态 */
.active-nav {
  color: #ff6b00;
}
.active-nav i {
  color: #ff6b00;
}
</style>
