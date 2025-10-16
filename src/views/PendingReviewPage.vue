<template>
  <div class="page flex flex-col h-screen bg-gradient-to-b from-orange-50 to-gray-50" id="page-pending-review">
    <CommonHeader>
      <template #center>
        <h2 class="text-base font-bold text-black">待评价</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-12 pb-4">
      <div v-if="pendingOrders.length === 0" class="flex flex-col items-center justify-center py-20">
        <div class="w-24 h-24 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center mb-4">
          <i class="fa-solid fa-comment-dots text-4xl text-orange-300"></i>
        </div>
        <p class="text-base font-medium text-gray-600">暂无待评价订单</p>
        <p class="text-xs text-gray-400 mt-2">完成服务后就可以来评价啦</p>
      </div>

      <div v-else class="px-4 space-y-4 mt-4">
        <div
          v-for="order in pendingOrders"
          :key="order.id"
          class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- 订单信息 -->
          <div class="p-5">
            <div class="flex items-center mb-4">
              <div class="relative">
                <img :src="order.teacherAvatar" alt="" class="w-14 h-14 rounded-full object-cover ring-2 ring-orange-100">
                <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                  <i class="fa-solid fa-check text-white text-xs"></i>
                </div>
              </div>
              <div class="ml-3 flex-1">
                <p class="text-sm font-bold">{{ order.teacherName }}</p>
                <p class="text-xs text-gray-500 mt-1 flex items-center">
                  <i class="fa-solid fa-certificate text-orange-400 mr-1"></i>
                  {{ order.skill }}
                </p>
              </div>
              <span class="text-xs px-3 py-1.5 bg-gradient-to-r from-green-100 to-green-50 text-green-600 rounded-full font-medium">
                <i class="fa-solid fa-circle-check mr-1"></i>已完成
              </span>
            </div>
            
            <div class="bg-gray-50 rounded-2xl p-4 mb-3">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-800 mb-2">{{ order.serviceName }}</p>
                  <p class="text-xs text-gray-400">
                    <i class="fa-regular fa-clock mr-1"></i>
                    完成于 {{ order.completedTime }}
                  </p>
                </div>
                <p class="text-base font-bold text-orange-500 ml-3">￥{{ order.price }}</p>
              </div>
            </div>

            <!-- 评价按钮 -->
            <button
              class="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 rounded-full text-sm font-bold nav-action shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
              @click="handleReview(order)"
            >
              <i class="fa-solid fa-pen-to-square mr-2"></i>
              立即评价
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "PendingReviewPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      pendingOrders: [
        {
          id: 1,
          teacherName: "李教练",
          teacherAvatar: "https://picsum.photos/id/1005/100/100",
          skill: "游泳教练",
          serviceName: "成人自由泳培训课程（10节）",
          price: 1999,
          completedTime: "2024-01-15 18:30",
        },
        {
          id: 2,
          teacherName: "王老师",
          teacherAvatar: "https://picsum.photos/id/1027/100/100",
          skill: "瑜伽导师",
          serviceName: "私教瑜伽体验课",
          price: 199,
          completedTime: "2024-01-14 10:00",
        },
      ],
    };
  },
  methods: {
    handleReview(order) {
      this.$router.push({
        name: 'WriteReview',
        params: { orderId: order.id },
        query: { teacherName: order.teacherName }
      });
    },
  },
};
</script>
