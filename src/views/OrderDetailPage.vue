<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 顶部导航栏 -->
    <header class="sticky top-0 z-10 bg-white border-b border-gray-100">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center">
          <div class="mr-2" @click="goBack">
            <i class="fa-solid fa-chevron-left text-gray-600"></i>
          </div>
          <h1 class="text-lg font-medium text-gray-900">买单明细</h1>
        </div>
      </div>
    </header>

    <!-- 主内容区域 -->
    <main class="p-4">
      <!-- 标签页 -->
      <div class="flex bg-white rounded-xl p-1 mb-4">
        <div 
          class="flex-1 text-center py-2 rounded-lg cursor-pointer"
          :class="activeTab === 'all' ? 'bg-orange-500 text-white' : 'text-gray-500'"
          @click="activeTab = 'all'"
        >
          全部
        </div>
        <div 
          class="flex-1 text-center py-2 rounded-lg cursor-pointer"
          :class="activeTab === 'refunded' ? 'bg-orange-500 text-white' : 'text-gray-500'"
          @click="activeTab = 'refunded'"
        >
          已退款
        </div>
      </div>

      <!-- 时间筛选器 -->
      <div class="flex items-center justify-between bg-white p-3 rounded-xl mb-4">
        <div class="flex items-center">
          <span class="text-sm text-gray-500">2025/9/28 0:00-2025/10/28 23:59</span>
          <i class="fa-solid fa-chevron-down text-gray-400 ml-2 text-xs"></i>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-search text-gray-400 text-xs mr-1"></i>
          <span class="text-sm text-gray-500">数量: 98</span>
        </div>
      </div>

      <!-- 订单列表 -->
      <div class="space-y-4">
        <!-- 订单项1 -->
        <div class="bg-white rounded-xl p-4">
          <div class="flex justify-between items-center mb-3">
            <span class="text-sm text-gray-500">订单ID 10894345669765550</span>
            <span class="text-xs text-orange-500">已买单</span>
          </div>
          
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <i class="fa-solid fa-user text-gray-500"></i>
              </div>
              <div>
                <div class="text-sm font-medium text-gray-900">造化先生</div>
                <div class="text-xs text-gray-500">使用50枚能量币抵扣5元</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm text-gray-900 font-medium">¥100</div>
            </div>
          </div>
          
          <div class="flex justify-end mb-4">
            <div class="text-sm text-gray-900 font-medium">订单实收 ¥95</div>
          </div>
          
          <div class="text-xs text-gray-500 mb-4">买单时间 2025/10/28 17:34:15</div>
          
          <div class="flex justify-between">
            <button class="px-4 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-700">
              联系顾客
            </button>
            <button class="px-4 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-700">
              协商退款
            </button>
          </div>
        </div>

        <!-- 订单项2 -->
        <div class="bg-white rounded-xl p-4">
          <div class="flex justify-between items-center mb-3">
            <span class="text-sm text-gray-500">订单ID 10894345669765814</span>
            <span class="text-xs text-orange-500">已买单</span>
          </div>
          
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <i class="fa-solid fa-user text-gray-500"></i>
              </div>
              <div>
                <div class="text-sm font-medium text-gray-900">造化先生</div>
                <div class="text-xs text-gray-500">使用50枚能量币抵扣5元</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm text-gray-900 font-medium">¥100</div>
            </div>
          </div>
          
          <div class="flex justify-end mb-4">
            <div class="text-sm text-gray-900 font-medium">订单实收 ¥95</div>
          </div>
          
          <div class="text-xs text-gray-500 mb-4">买单时间 2025/10/27 13:26:18</div>
          
          <div class="flex justify-between">
            <button class="px-4 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-700">
              联系顾客
            </button>
            <button class="px-4 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-700">
              协商退款
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'OrderDetailPage',
  data() {
    return {
      activeTab: 'all'
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
/* 基础样式已通过Tailwind CSS实现 */
</style>