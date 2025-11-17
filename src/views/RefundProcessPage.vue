<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- 顶部导航栏 -->
    <div class="sticky top-0 z-10 bg-white border-b border-gray-100">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center">
          <i class="fa-solid fa-chevron-left text-gray-700 mr-4" @click="goBack"></i>
          <h1 class="text-lg font-medium text-gray-900">处理售后</h1>
        </div>
      </div>
    </div>

    <!-- 标签页 -->
    <div class="bg-white mb-2">
      <div class="flex overflow-x-auto scrollbar-hide">
        <div 
          v-for="tab in tabs" 
          :key="tab.id"
          class="flex-shrink-0 px-4 py-3 text-center"
          :class="{
            'text-orange-500 border-b-2 border-orange-500': activeTab === tab.id,
            'text-gray-600': activeTab !== tab.id
          }"
          @click="activeTab = tab.id"
        >
          {{ tab.name }}
          <span v-if="tab.count" class="ml-1 text-xs bg-orange-100 text-orange-500 px-1.5 py-0.5 rounded-full">
            {{ tab.count }}
          </span>
        </div>
      </div>
    </div>

    <!-- 订单项列表 -->
    <div class="bg-white space-y-3 px-4 py-3">
      <!-- 订单项1 -->
      <div class="border-b border-gray-100 pb-3">
        <div class="flex justify-between items-center mb-2">
          <span class="text-xs text-gray-500">订单ID 1089434566976554</span>
          <span class="text-xs text-orange-500">已退款</span>
        </div>
        <div class="flex items-start mb-2">
          <div class="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
            <div class="w-full h-full bg-blue-50 flex items-center justify-center">
              <i class="fa-solid fa-user text-blue-300"></i>
            </div>
          </div>
          <div class="ml-3 flex-1">
            <h3 class="text-sm font-medium text-gray-900">蛙泳/自由泳 (体验卡)</h3>
            <p class="text-xs text-gray-500">一对一—60分钟</p>
            <div class="flex justify-between items-center mt-1">
              <div>
                <span class="text-xs text-gray-500">退1份</span>
                <span class="text-xs text-gray-500 ml-3">退款金额</span>
              </div>
              <span class="text-sm font-medium text-gray-900">¥14.90</span>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-3 py-2 rounded-md">
          <p class="text-xs text-gray-600">处理状态 <span class="text-gray-900">商家同意了买家的退款申请</span></p>
        </div>
      </div>

      <!-- 订单项2 -->
      <div class="border-b border-gray-100 pb-3">
        <div class="flex justify-between items-center mb-2">
          <span class="text-xs text-gray-500">订单ID 10894345669765290</span>
          <span class="text-xs text-gray-500">已取消</span>
        </div>
        <div class="flex items-start mb-2">
          <div class="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
            <div class="w-full h-full bg-blue-50 flex items-center justify-center">
              <i class="fa-solid fa-user text-blue-300"></i>
            </div>
          </div>
          <div class="ml-3 flex-1">
            <h3 class="text-sm font-medium text-gray-900">自由泳 (单次卡)</h3>
            <p class="text-xs text-gray-500">一对一—60分钟</p>
            <div class="flex justify-between items-center mt-1">
              <div>
                <span class="text-xs text-gray-500">退1份</span>
                <span class="text-xs text-gray-500 ml-3">退款金额</span>
              </div>
              <span class="text-sm font-medium text-gray-900">¥200</span>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-3 py-2 rounded-md">
          <p class="text-xs text-gray-600">处理状态 <span class="text-gray-900">商家同意了买家的退款申请</span></p>
        </div>
      </div>

      <!-- 订单项3 -->
      <div class="pb-3">
        <div class="flex justify-between items-center mb-2">
          <span class="text-xs text-gray-500">订单ID 10894345669765380</span>
          <span class="text-xs text-orange-500">已退款</span>
        </div>
        <div class="flex items-start mb-2">
          <div class="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
            <div class="w-full h-full bg-blue-50 flex items-center justify-center">
              <i class="fa-solid fa-user text-blue-300"></i>
            </div>
          </div>
          <div class="ml-3 flex-1">
            <h3 class="text-sm font-medium text-gray-900">蛙泳/自由泳 (10次卡)</h3>
            <p class="text-xs text-gray-500">一对一—60分钟</p>
            <div class="flex justify-between items-center mt-1">
              <div>
                <span class="text-xs text-gray-500">退1份</span>
                <span class="text-xs text-gray-500 ml-3">退款金额</span>
              </div>
              <span class="text-sm font-medium text-gray-900">¥1680</span>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-3 py-2 rounded-md">
          <p class="text-xs text-gray-600">处理状态 <span class="text-gray-900">由于商家超时未处理,系统已于2025-10-09 17:23 自动同意退款</span></p>
        </div>
      </div>
    </div>

    <!-- 悬浮客服图标 -->
    <div class="fixed bottom-20 right-4">
      <div class="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
        <i class="fa-solid fa-headset text-white text-lg"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RefundProcessPage',
  data() {
    return {
      activeTab: 'refunded', // 默认选中"已退款/取消"标签
      tabs: [
        { id: 'pending', name: '待处理', count: 0 },
        { id: 'arbitration', name: '仲裁中', count: 0 },
        { id: 'rejected', name: '已拒绝', count: 0 },
        { id: 'refunded', name: '已退款/取消', count: 5 }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>