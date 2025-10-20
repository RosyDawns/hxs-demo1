<template>
  <div class="min-h-screen bg-gray-50 px-4">
    <!-- 顶部导航栏 -->
    <header class="py-2.5 flex items-center sticky top-0 z-50">
      <button @click="$router.back()" class="mr-3">
        <i class="fa-solid fa-chevron-left text-lg text-gray-800"></i>
      </button>
    </header>

    <div class="flex items-center mt-1 mb-4">
      <div class="flex-1 mr-2">
        <div class="bg-gray-100 rounded-full px-3 py-1.5 flex items-center">
          <i class="fa-solid fa-search text-xs text-gray-400"></i>
          <input
            type="text"
            placeholder="搜索我的订单"
            class="bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none ml-2 flex-1"
          />
        </div>
      </div>
      <button class="flex items-center text-xs text-gray-600">
        <span>全部分类</span>
        <i class="fa-solid fa-chevron-down ml-1"></i>
      </button>
    </div>

    <!-- 标签导航栏 -->
    <div class="border-b border-gray-100 relative mb-3">
      <div class="flex">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          class="mr-5 pb-2.5 text-sm relative"
          :class="
            activeTab === index ? 'text-gray-900 font-medium' : 'text-gray-600'
          "
        >
          {{ tab }}
          <div
            v-if="activeTab === index"
            class="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
          ></div>
        </button>
      </div>
    </div>

    <!-- 订单列表 -->
    <main class="pb-4">
      <!-- 订单项 -->
      <div
        v-for="order in orders"
        :key="order.id"
        class="bg-white mb-3 rounded-xl"
      >
        <!-- 订单头部 -->
        <div class="p-3 flex items-center">
          <div
            class="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0"
          >
            <i class="fa-solid fa-dumbbell text-xs text-orange-500"></i>
          </div>
          <span class="text-sm ml-2 flex-1 truncate">{{ order.title }}</span>
          <i
            class="fa-solid fa-chevron-right text-xs text-orange-500 mx-1.5"
          ></i>
          <span
            class="text-sm rounded flex-shrink-0"
            :class="order.statusClass"
          >
            {{ order.statusText }}
          </span>
        </div>

        <!-- 订单内容 -->
        <div class="px-4 pb-3">
          <!-- 商品信息 -->
          <div class="flex">
            <img
              :src="order.image"
              class="w-20 h-20 rounded-lg object-cover flex-shrink-0"
              alt="商品图"
            />
            <div class="flex-1 ml-3 min-w-0">
              <div class="flex items-center mb-1">
                <div class="text-xs text-gray-900">1张｜实付</div>
                <div class="text-base text-gray-900 font-bold mt-1">
                  ￥{{ order.price }}
                </div>
              </div>
              <div class="text-xs text-gray-400 mt-0.5">
                下单时间：{{ order.date }}
              </div>
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="mt-3 flex items-center justify-end">
            <div class="flex items-center space-x-2">
              <button
                class="px-3 py-1 text-xs text-gray-600 border border-gray-300 rounded-full"
              >
                删除
              </button>
              <button
                class="px-3 py-1 text-xs text-gray-600 border border-gray-300 rounded-full"
              >
                再来一单
              </button>
              <button
                class="px-3 py-1 text-xs text-gray-600 border border-gray-300 rounded-full"
              >
                加入橱窗
              </button>

              <i
                class="fa-solid fa-share-from-square text-base text-gray-600"
              ></i>
            </div>
          </div>

          <!-- 评价区域（仅已成交显示） -->
          <div
            v-if="order.showReview"
            class="mt-3 pt-3 border-t border-gray-100 flex items-center"
          >
            <i class="fa-solid fa-pen text-xs text-gray-400"></i>
            <span class="text-xs text-gray-500 ml-2">真实评价</span>
            <div class="flex space-x-1 ml-2">
              <i
                v-for="i in 5"
                :key="i"
                class="fa-solid fa-star text-sm text-gray-300"
              ></i>
            </div>
            <button
              class="ml-auto px-4 py-1.5 text-xs text-white bg-orange-500 rounded-full"
            >
              评价
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "MyOrdersPage",
  data() {
    return {
      activeTab: 0,
      tabs: ["全部订单", "待付款", "可使用", "退款/售后"],
      orders: [
        {
          id: 1,
          title: "1对1游泳零基础蛙泳/自由泳...",
          price: "38.0",
          date: "2025-10-18  21:32",
          image: "https://picsum.photos/id/1005/300/300",
          statusText: "可使用",
          statusClass: "text-primary",
          showReview: false,
        },
        {
          id: 2,
          title: "1对1蝶泳/自由泳单次卡...",
          price: "160.0",
          date: "2025-08-13  15:05",
          image: "https://picsum.photos/id/1010/300/300",
          statusText: "已成交",
          statusClass: "text-primary",
          showReview: true,
        },
        {
          id: 3,
          title: "1对160分钟线上瑜伽课...",
          price: "28.0",
          date: "2025-10-18  21:32",
          image: "https://picsum.photos/id/1011/300/300",
          statusText: "退款成功",
          statusClass: "text-primary",
          showReview: false,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
