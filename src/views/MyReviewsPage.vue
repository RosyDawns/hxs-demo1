<template>
  <div class="page flex flex-col h-screen bg-gradient-to-b from-yellow-50 to-gray-50" id="page-my-reviews">
    <CommonHeader>
      <template #center>
        <h2 class="text-base font-bold text-black">我的评价</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-12 pb-4">
      <div v-if="reviews.length === 0" class="flex flex-col items-center justify-center py-20">
        <div class="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center mb-4">
          <i class="fa-solid fa-star text-4xl text-yellow-400"></i>
        </div>
        <p class="text-base font-medium text-gray-600">暂无评价记录</p>
        <p class="text-xs text-gray-400 mt-2">去体验服务后再来评价吧</p>
      </div>

      <div v-else class="px-4 space-y-4 mt-4">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- 教练信息和评分 -->
          <div class="flex items-center mb-4">
            <img :src="review.teacherAvatar" alt="" class="w-12 h-12 rounded-full object-cover ring-2 ring-yellow-100">
            <div class="ml-3 flex-1">
              <p class="text-sm font-bold">{{ review.teacherName }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ review.skill }}</p>
            </div>
            <div class="flex items-center bg-yellow-50 px-3 py-2 rounded-full">
              <i class="fa-solid fa-star text-yellow-400 text-sm mr-1"></i>
              <span class="text-sm font-bold text-yellow-600">{{ review.rating }}.0</span>
            </div>
          </div>

          <!-- 评分星星 -->
          <div class="flex items-center mb-3">
            <i
              v-for="i in 5"
              :key="i"
              :class="i <= review.rating ? 'fa-solid' : 'fa-regular'"
              class="fa-star text-yellow-400 text-lg mr-1"
            ></i>
          </div>

          <!-- 评价内容 -->
          <div class="bg-gray-50 rounded-2xl p-4 mb-3">
            <p class="text-sm text-gray-700 leading-relaxed">{{ review.content }}</p>
          </div>

          <!-- 评价图片 -->
          <div v-if="review.images && review.images.length > 0" class="grid grid-cols-3 gap-2 mb-3">
            <img
              v-for="(img, index) in review.images"
              :key="index"
              :src="img"
              alt=""
              class="w-full h-24 object-cover rounded-xl shadow-sm"
            >
          </div>

          <!-- 服务信息和时间 -->
          <div class="flex items-center justify-between pt-3 border-t border-gray-100">
            <span class="text-xs text-gray-500">
              <i class="fa-solid fa-tag mr-1"></i>
              {{ review.serviceName }}
            </span>
            <span class="text-xs text-gray-400">
              <i class="fa-regular fa-clock mr-1"></i>
              {{ review.reviewTime }}
            </span>
          </div>

          <!-- 商家回复 -->
          <div v-if="review.reply" class="mt-3 bg-gradient-to-r from-orange-50 to-orange-50/50 rounded-2xl p-4 border-l-4 border-orange-400">
            <div class="flex items-center mb-2">
              <i class="fa-solid fa-reply text-orange-500 mr-2"></i>
              <p class="text-xs font-medium text-orange-600">商家回复</p>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed">{{ review.reply }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "MyReviewsPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      reviews: [
        {
          id: 1,
          teacherName: "李教练",
          teacherAvatar: "https://picsum.photos/id/1005/100/100",
          skill: "游泳教练",
          serviceName: "成人自由泳培训",
          rating: 5,
          content: "教练非常专业，教学方法很好，短时间内就掌握了自由泳的技巧。游泳池环境也很不错，推荐！",
          images: [
            "https://picsum.photos/id/1059/300/300",
            "https://picsum.photos/id/1060/300/300",
          ],
          reviewTime: "2024-01-10 14:30",
          reply: "感谢您的认可！期待下次继续为您服务~",
        },
        {
          id: 2,
          teacherName: "王老师",
          teacherAvatar: "https://picsum.photos/id/1027/100/100",
          skill: "瑜伽导师",
          serviceName: "私教瑜伽体验课",
          rating: 5,
          content: "老师很温柔，动作讲解得很细致，课程安排合理。上完课感觉身心都得到了放松。",
          images: [],
          reviewTime: "2024-01-08 16:20",
          reply: null,
        },
      ],
    };
  },
};
</script>
