<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 顶部导航栏 -->
    <div class="sticky top-0 z-10 bg-white border-b border-gray-100">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center">
          <i
            class="fa-solid fa-chevron-left text-gray-700 mr-4"
            @click="goBack"
          ></i>
          <h1 class="text-lg font-medium text-gray-900">核销明细</h1>
        </div>
      </div>
    </div>

    <!-- 标签页 -->
    <div class="bg-white overflow-x-auto">
      <div class="flex space-x-2 p-2 min-w-max">
        <div class="px-3 py-2 text-sm text-white bg-amber-500 rounded-full">
          全部
        </div>
        <div class="px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded-full">
          已核销
        </div>
        <div class="px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded-full">
          可撤销核销
        </div>
        <div class="px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded-full">
          核销已撤销
        </div>
        <div class="px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded-full">
          核销已退款
        </div>
      </div>
    </div>

    <!-- 日期选择器和数量 -->
    <div class="bg-white mt-2 p-3 flex items-center justify-between">
      <div class="flex items-center">
        <i class="fa-solid fa-calendar-alt text-gray-400 mr-2"></i>
        <span class="text-sm text-gray-600"
          >2025/9/28 00:00-2025/10/28 23:59</span
        >
      </div>
      <div class="flex items-center">
        <i class="fa-solid fa-search text-gray-400 mr-2"></i>
        <span class="text-sm text-gray-600">数量: 88</span>
      </div>
    </div>

    <!-- 订单项列表 -->
    <div class="mt-2 space-y-2">
      <!-- 订单项 1 -->
      <div class="bg-white p-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-gray-600">订单ID 108943566976550</span>
          <span class="text-sm text-orange-500 font-medium">已核销</span>
        </div>

        <div class="flex items-center mb-3">
          <img
            src="/src/assets/vue.svg"
            alt="商品图片"
            class="w-16 h-16 object-cover rounded-md mr-3"
          />
          <div class="flex-1">
            <div class="text-sm text-gray-900">蛙泳/自由泳（体验卡）</div>
            <div class="text-xs text-gray-500">一对一-60分钟</div>
          </div>
          <div class="text-sm text-gray-900">¥14.90</div>
        </div>

        <div class="flex justify-end mb-3">
          <div class="text-sm text-gray-600">
            订单实收 <span class="text-orange-500 font-medium">¥9.90</span>
          </div>
        </div>

        <div class="bg-gray-50 p-3 rounded-md">
          <div class="flex justify-between mb-2">
            <span class="text-xs text-gray-500">核销券码</span>
            <span class="text-xs text-gray-700">107256056811298</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-xs text-gray-500">核销时间</span>
            <span class="text-xs text-gray-700">2025/10/28 17:34:15</span>
          </div>
          <div class="flex justify-between">
            <span class="text-xs text-gray-500">核销人</span>
            <span class="text-xs text-gray-700">李教练</span>
          </div>
        </div>

        <div class="flex justify-between mt-4">
          <button
            class="px-6 py-2 text-sm text-gray-700 border border-gray-200 rounded-full"
          >
            联系顾客
          </button>
          <button
            class="px-6 py-2 text-sm text-orange-500 border border-orange-500 rounded-full"
          >
            协商退款
          </button>
        </div>
      </div>

      <!-- 订单项 2 -->
      <div class="bg-white p-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-gray-600">订单ID 108943566979572</span>
          <span class="text-sm text-orange-500 font-medium">已核销</span>
        </div>

        <div class="flex items-center mb-3">
          <img
            src="/src/assets/vue.svg"
            alt="商品图片"
            class="w-16 h-16 object-cover rounded-md mr-3"
          />
          <div class="flex-1">
            <div class="text-sm text-gray-900">蛙泳/自由泳（体验卡）</div>
            <div class="text-xs text-gray-500">一对一-60分钟</div>
          </div>
          <div class="text-sm text-gray-900">¥14.90</div>
        </div>

        <div class="flex justify-end mb-3">
          <div class="text-sm text-gray-600">
            订单实收 <span class="text-orange-500 font-medium">¥9.90</span>
          </div>
        </div>

        <div class="bg-gray-50 p-3 rounded-md">
          <div class="flex justify-between mb-2">
            <span class="text-xs text-gray-500">核销券码</span>
            <span class="text-xs text-gray-700">107233883927106</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-xs text-gray-500">核销时间</span>
            <span class="text-xs text-gray-700">2025/10/27 13:26:18</span>
          </div>
          <div class="flex justify-between">
            <span class="text-xs text-gray-500">核销人</span>
            <span class="text-xs text-gray-700">李教练</span>
          </div>
        </div>

        <div class="flex justify-between mt-4">
          <button
            class="px-6 py-2 text-sm text-gray-700 border border-gray-200 rounded-full"
          >
            联系顾客
          </button>
          <button
            class="px-6 py-2 text-sm text-orange-500 border border-orange-500 rounded-full"
          >
            协商退款
          </button>
        </div>
      </div>
    </div>

    <!-- 客服悬浮图标 -->
    <div class="fixed bottom-8 right-6">
      <div
        class="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
      >
        <i class="fa-solid fa-headset text-white text-xl"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerificationDetailPage",
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
/* 样式已通过Tailwind CSS实现 */
</style>
