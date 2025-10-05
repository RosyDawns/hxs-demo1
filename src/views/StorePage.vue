<template>
  <div class="page" id="page-store">
    <!-- 顶部导航 -->
    <CommonHeader>
      <template #center>
        <h2 class="font-bold">我的橱窗</h2>
      </template>
      <template #left>
        <button class="text-dark" @click="$router.back()">
          <i class="fa fa-arrow-left text-xl"></i>
        </button>
      </template>
      <template #right>
        <button class="text-dark">
          <i class="fa fa-ellipsis-h text-xl"></i>
        </button>
      </template>
    </CommonHeader>

    <!-- 橱窗内容 -->
    <div class="px-4 mt-4">
      <div class="bg-white rounded-lg p-3 card-shadow mb-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <i class="fa fa-shopping-bag text-gray-500 mr-2"></i>
            <p class="font-medium">我的橱窗</p>
          </div>
          <p class="text-gray-500 text-xs">营业时间: 10:00-22:00 | 快递: 满99元包邮</p>
        </div>

        <!-- 商品分类 -->
        <div class="flex overflow-x-auto scrollbar-hide border-b border-gray-100 py-2 mt-2">
          <button class="px-3 py-1 text-sm font-medium text-primary border-b-2 border-primary whitespace-nowrap">全部商品</button>
          <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">户外装备</button>
          <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">运动服饰</button>
          <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">登山鞋靴</button>
          <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">露营用品</button>
          <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">户外配件</button>
        </div>

        <!-- 商品列表 -->
        <div class="grid grid-cols-2 gap-3 mt-3">
          <!-- 商品1 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden">
            <div class="relative">
              <img src="https://picsum.photos/id/1025/300/300" alt="户外速干短裤" class="w-full h-40 object-cover">
              <span class="absolute top-1 right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">热销</span>
            </div>
            <div class="p-2">
              <p class="text-xs font-medium line-clamp-2">户外速干短裤女款 透气防泼水 多口袋设计</p>
              <div class="flex justify-between items-center mt-1">
                <div>
                  <span class="text-red-500 font-bold text-sm">¥171.9</span>
                  <span class="text-gray-400 text-xs line-through ml-1">¥239</span>
                </div>
                <button class="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  <i class="fa fa-shopping-cart"></i>
                </button>
              </div>
              <p class="text-gray-500 text-xs mt-1">已售 126件</p>
            </div>
          </div>

          <!-- 商品2 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden">
            <div class="relative">
              <img src="https://picsum.photos/id/1027/300/300" alt="户外防晒帽" class="w-full h-40 object-cover">
            </div>
            <div class="p-2">
              <p class="text-xs font-medium line-clamp-2">户外防晒帽 防紫外线 可折叠 男女通用</p>
              <div class="flex justify-between items-center mt-1">
                <div>
                  <span class="text-red-500 font-bold text-sm">¥29.9</span>
                  <span class="text-gray-400 text-xs line-through ml-1">¥59</span>
                </div>
                <button class="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  <i class="fa fa-shopping-cart"></i>
                </button>
              </div>
              <p class="text-gray-500 text-xs mt-1">已售 358件</p>
            </div>
          </div>

          <!-- 商品3 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden">
            <div class="relative">
              <img src="https://picsum.photos/id/1039/300/300" alt="户外冲锋衣" class="w-full h-40 object-cover">
              <span class="absolute top-1 right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">新品</span>
            </div>
            <div class="p-2">
              <p class="text-xs font-medium line-clamp-2">三合一冲锋衣 防风防水 保暖透气 登山必备</p>
              <div class="flex justify-between items-center mt-1">
                <div>
                  <span class="text-red-500 font-bold text-sm">¥699</span>
                  <span class="text-gray-400 text-xs line-through ml-1">¥899</span>
                </div>
                <button class="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  <i class="fa fa-shopping-cart"></i>
                </button>
              </div>
              <p class="text-gray-500 text-xs mt-1">已售 42件</p>
            </div>
          </div>

          <!-- 商品4 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden">
            <div class="relative">
              <img src="https://picsum.photos/id/1040/300/300" alt="登山背包" class="w-full h-40 object-cover">
            </div>
            <div class="p-2">
              <p class="text-xs font-medium line-clamp-2">40L登山背包 轻量防水 背负系统 徒步旅行</p>
              <div class="flex justify-between items-center mt-1">
                <div>
                  <span class="text-red-500 font-bold text-sm">¥359</span>
                  <span class="text-gray-400 text-xs line-through ml-1">¥499</span>
                </div>
                <button class="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  <i class="fa fa-shopping-cart"></i>
                </button>
              </div>
              <p class="text-gray-500 text-xs mt-1">已售 89件</p>
            </div>
          </div>
        </div>

        <!-- 查看更多按钮 -->
        <div class="text-center mt-4">
          <button class="border border-primary text-primary text-sm py-1 px-6 rounded-full">
            查看更多商品
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";

export default {
  name: "StorePage",
  components: {
    CommonHeader
  },
  data() {
    return {
      // 可以添加商品列表数据和分类数据
    }
  }
}
</script>