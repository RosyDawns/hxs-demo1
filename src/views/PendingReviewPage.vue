<template>
  <div class="page flex flex-col h-screen bg-gray-50" id="page-pending-review">
    <!-- 顶部导航栏 -->
    <header class="flex items-center justify-between pl-2 pr-10 py-3 bg-white">
      <button class="text-xl text-gray-800 nav-action" @click="$router.back()">
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <h1 class="text-lg font-medium text-gray-800">待评价</h1>
      <div></div>
    </header>

    <!-- 筛选标签 -->
    <div class="px-4 py-3 bg-white">
      <span
        class="inline-block px-4 py-1.5 bg-orange-50 text-orange-500 text-sm rounded-full"
      >
        全部
      </span>
    </div>

    <!-- 主内容区 -->
    <main class="flex-1 overflow-y-auto px-3 pt-3">
      <div
        v-if="pendingOrders.length === 0"
        class="flex flex-col items-center justify-center py-20"
      >
        <p class="text-base font-medium text-gray-600">暂无待评价订单</p>
      </div>

      <div v-else class="space-y-3">
        <div
          v-for="order in pendingOrders"
          :key="order.id"
          class="bg-white border border-gray-100 rounded-2xl px-3 pt-3"
        >
          <div class="flex gap-3">
            <!-- 左侧图片 -->
            <img
              src="@images/img-1.jpg"
              alt=""
              class="w-20 h-20 rounded-xl object-cover flex-shrink-0"
            />

            <!-- 中间内容区 -->
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h3
                  class="text-sm font-medium text-gray-800 mb-1.5 line-clamp-2"
                >
                  {{ order.title }}
                </h3>
                <p class="text-xs text-gray-400">
                  {{ order.location }} {{ order.category }}
                </p>
              </div>
            </div>

            <!-- 右侧操作区 -->
            <div class="flex flex-col items-end justify-between">
              <button
                class="px-2 py-1 bg-orange-500 text-white text-xs rounded-full nav-action whitespace-nowrap"
                @click="handleReview(order)"
              >
                写评价
              </button>
              <span class="text-xs text-orange-500 whitespace-nowrap"
                >写评价获取能量币</span
              >
            </div>
          </div>
          <div
            class="flex items-center justify-between border-t border-gray-100 mt-3 py-2"
          >
            <span class="text-xs text-gray-500">{{ order.date }} 消费</span>
            <button
              style="font-size: 10px"
              class="px-3 py-1 text-white bg-orange-500 rounded-full nav-action"
              @click="viewOrder(order.id)"
            >
              去主页
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "PendingReviewPage",
  data() {
    return {
      pendingOrders: [
        {
          id: 1,
          title: "1对1游泳零基础蛙泳/自由泳...",
          location: "青浦区/徐泾镇",
          category: "游泳健身",
          date: "2025-10-18",
          cover:
            "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=300&h=300&fit=crop",
        },
        {
          id: 2,
          title: "60分钟自由泳（单次卡）...",
          location: "青浦区/徐泾镇",
          category: "游泳健身",
          date: "2025-10-10",
          cover:
            "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=300&h=300&fit=crop",
        },
        {
          id: 3,
          title: "蛙泳/自由泳（10次卡）",
          location: "上门服务",
          category: "游泳健身",
          date: "2025-08-13",
          cover:
            "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=300&h=300&fit=crop",
        },
        {
          id: 4,
          title: "1对1咖啡拉花体验课...",
          location: "青浦区/徐泾镇",
          category: "培训课程",
          date: "2025-08-11",
          cover:
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=300&fit=crop",
        },
        {
          id: 5,
          title: "1对1游泳零基础蛙泳/自由泳...",
          location: "线上服务",
          category: "艺术设计",
          date: "2025-08-05",
          cover:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop",
        },
      ],
    };
  },
  methods: {
    viewOrder(id) {
      // 跳转到主页
      this.$router.push({ name: "Home" });
    },
    handleReview(order) {
      this.$router.push({
        name: "WriteReview",
        params: { orderId: order.id },
        query: { title: order.title },
      });
    },
  },
};
</script>
