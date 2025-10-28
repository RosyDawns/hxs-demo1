<template>
  <div class="page flex flex-col h-screen bg-white" id="page-my-reviews">
    <!-- 顶部导航栏 -->
    <header
      class="flex items-center justify-between pl-2 pr-10 py-3 bg-white border-b border-gray-100"
    >
      <button class="text-xl text-gray-800 nav-action" @click="$router.back()">
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <h1 class="text-lg font-medium text-gray-800">真实评价</h1>
      <div class="flex items-center gap-2">
        <!-- <div class="flex items-center gap-1">
          <i class="fa-solid fa-star text-gray-800 text-sm"></i>
          <span class="text-sm font-medium text-gray-800">4.9</span>
        </div>
        <button class="w-6 h-6 rounded-full bg-gray-800"></button> -->
      </div>
    </header>

    <!-- 主内容区 -->
    <main class="flex-1 overflow-y-auto">
      <div
        v-if="reviews.length === 0"
        class="flex flex-col items-center justify-center py-20"
      >
        <p class="text-base font-medium text-gray-600">暂无评价记录</p>
      </div>

      <div v-else class="space-y-0">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="bg-white border-b-8 border-gray-50 px-4 pb-4"
        >
          <!-- 左侧日期标签 -->
          <div class="flex gap-4">
            <div class="flex flex-col items-center justify-center">
              <div class="text-2xl font-medium text-gray-800">
                {{ review.day }}日
              </div>
              <div class="text-xs text-gray-400 mt-0.5">
                {{ review.month }}月
              </div>
            </div>

            <!-- 右侧内容区 -->
            <div class="flex-1 pt-4">
              <!-- 服务评分 -->
              <div class="flex items-center gap-2 mb-3">
                <span class="text-orange-500 font-medium text-sm"
                  >服务评分</span
                >
                <div class="flex gap-1">
                  <i
                    v-for="i in 5"
                    :key="i"
                    class="fa-solid fa-star text-orange-400 text-base"
                  ></i>
                </div>
              </div>

              <!-- 评价内容 -->
              <p class="text-sm text-gray-800 leading-relaxed mb-3">
                {{ review.content }}
              </p>

              <!-- 评价图片 -->
              <div
                v-if="review.images && review.images.length > 0"
                class="grid grid-cols-3 gap-2 mb-3"
              >
                <img
                  src="@images/img-24.jpg"
                  class="w-full h-24 object-cover rounded-lg"
                />
                <img
                  src="@images/img-24.jpg"
                  class="w-full h-24 object-cover rounded-lg"
                />
                <img
                  src="@images/img-24.jpg"
                  class="w-full h-24 object-cover rounded-lg"
                />
                <img
                  src="@images/img-24.jpg"
                  class="w-full h-24 object-cover rounded-lg"
                />
              </div>

              <!-- 教练信息 -->
              <div class="flex items-center gap-2 mb-3">
                <img
                  :src="review.teacherAvatar"
                  alt=""
                  class="w-8 h-8 rounded-full object-cover"
                />
                <span class="text-sm text-gray-800">{{
                  review.teacherName
                }}</span>
                <span
                  class="px-2 py-0.5 bg-orange-50 text-orange-500 text-xs rounded"
                  >{{ review.skill }}</span
                >
                <span class="ml-auto text-sm text-gray-800"
                  >服务分 {{ review.rating }}</span
                >
              </div>

              <!-- 浏览和评论 -->
              <div
                class="flex items-center justify-between text-xs text-gray-400"
              >
                <span>浏览 {{ review.views }}</span>
                <button class="flex items-center gap-1 nav-action">
                  <i class="fa-regular fa-message"></i>
                  <span>评论</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "MyReviewsPage",
  data() {
    return {
      reviews: [
        {
          id: 1,
          day: "18",
          month: "10",
          teacherName: "李教练",
          teacherAvatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
          skill: "游泳馆唤醒师",
          rating: 4.8,
          content:
            "教练特别有耐心，教学方法科学有效，在他指导下，我的泳姿标准了很多。",
          images: [
            "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=300&h=300&fit=crop",
          ],
          views: 248,
        },
        {
          id: 2,
          day: "16",
          month: "09",
          teacherName: "咖啡师Echo",
          teacherAvatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
          skill: "咖啡馆唤醒师",
          rating: 4.7,
          content:
            "咖啡店环境很好，老师严谨又不失风趣。对奶泡厚度，融合手法等细节把控精准。",
          images: [
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=300&h=300&fit=crop",
          ],
          views: 352,
        },
        {
          id: 3,
          day: "02",
          month: "09",
          teacherName: "设计师Alex",
          teacherAvatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
          skill: "品牌设计师",
          rating: 4.9,
          content:
            "创意非凡，能赋予品牌独特灵魂。作品不仅好看，更具市场价值，合作非常愉快！",
          images: [
            "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
          ],
          views: 521,
        },
      ],
    };
  },
};
</script>
