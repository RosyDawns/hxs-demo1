<template>
  <div class="page flex flex-col h-screen" id="page-refund">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100 px-4 py-3 flex items-center justify-between"
    >
      <div class="flex items-center">
        <button class="mr-2" @click="goBack">
          <i class="fa-solid fa-chevron-left text-gray-600"></i>
        </button>
        <span class="text-sm font-medium text-gray-900">发起退款</span>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-14 pb-16 px-4 bg-[#f3f3f3]">
      <!-- 页面内容 -->
      <div class="mt-6">
        <h1 class="text-xl font-bold text-gray-900 text-center mb-2">请查找需退款的订单</h1>
        <p class="text-xs text-gray-500 text-center mb-8">仅可对核销后的订单发起退款</p>
        
        <!-- 搜索框 -->
        <div class="mb-4">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="请输入订单编号、券码查询"
            class="w-full h-12 px-4 rounded-xl bg-[#ffffff] text-sm text-gray-900 focus:outline-none"
          />
        </div>
        
        <!-- 帮助链接 -->
        <div class="flex justify-end mb-8">
          <span class="text-xs text-gray-500">顾客找不到订单编号？</span>
          <span class="text-xs text-orange-500 ml-1">帮助</span>
        </div>
        
        <!-- 搜索按钮 -->
        <button
          @click="handleSearch"
          class="w-full h-12 bg-orange-500 text-white font-medium rounded-xl flex items-center justify-center"
        >
          搜索
        </button>
      </div>
    </main>

    <!-- 悬浮客服按钮 -->
    <div class="fixed bottom-20 left-4 z-40">
      <button class="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
        <i class="fa-solid fa-headset text-white text-xl"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RefundPage",
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    // 返回上一页
    goBack() {
      this.$router.back();
    },
    
    // 处理搜索
    handleSearch() {
      if (!this.searchQuery.trim()) {
        alert('请输入订单编号或券码');
        return;
      }
      // 这里可以添加搜索逻辑
      console.log('搜索内容:', this.searchQuery);
    }
  }
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
</style>