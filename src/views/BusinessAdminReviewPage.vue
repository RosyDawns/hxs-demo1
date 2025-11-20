<template>
  <div class="page flex flex-col h-screen" id="page-business-admin-review">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 z-50 px-4 pt-3 pb-2 flex items-center justify-between page-header"
    >
      <div class="flex items-center">
        <div class="mr-3" @click="goBack">
          <i class="fa-solid fa-chevron-left text-gray-700"></i>
        </div>
        <div
          class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 overflow-hidden"
        >
          <i class="fa-solid fa-user text-gray-500 text-sm"></i>
        </div>
        <span class="text-sm font-medium text-gray-900">李教练</span>
      </div>
      <div class="flex items-center space-x-2 text-xs text-gray-700">
        <div
          class="flex items-center px-2 py-1 rounded-full bg-white shadow-sm"
        >
          <i class="fa-solid fa-star text-yellow-400 text-[11px] mr-1"></i>
          <span class="font-semibold text-sm leading-none mr-0.5">4.9</span>
        </div>
        <button
          class="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm"
        >
          <i class="fa-regular fa-dot-circle text-gray-700 text-sm"></i>
        </button>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-16 pb-16 px-4">
      <!-- 服务分与说明 -->
      <section class="mt-1 mb-3">
        <div class="flex items-end">
          <span class="text-5xl font-semibold text-gray-900 leading-none mr-1"
            >4.8</span
          >
          <span class="text-base text-gray-800 mb-1">服务分</span>
        </div>
        <p class="mt-1 text-xs text-gray-500">好的服务是长久发展的基础</p>
      </section>

      <!-- 评价数据 -->
      <section class="card p-4">
        <h2 class="text-xs text-gray-500 mb-3">评价数据</h2>
        <div class="grid grid-cols-3 gap-y-5 text-center">
          <!-- 新增评价数据 -->
          <div>
            <p class="text-lg font-semibold text-gray-900 leading-tight">0</p>
            <p class="mt-0.5 text-xs text-gray-500">昨日新增评价</p>
          </div>
          <div>
            <p class="text-lg font-semibold text-gray-900 leading-tight">2</p>
            <p class="mt-0.5 text-xs text-gray-500">近7日新增评价</p>
          </div>
          <div>
            <p class="text-lg font-semibold text-gray-900 leading-tight">7</p>
            <p class="mt-0.5 text-xs text-gray-500">一个月内新增评价</p>
          </div>
          <!-- 新增中差评数据 -->
          <div>
            <p class="text-lg font-semibold text-gray-900 leading-tight">0</p>
            <p class="mt-0.5 text-xs text-gray-500">昨日新增中差评</p>
          </div>
          <div>
            <p class="text-lg font-semibold text-gray-900 leading-tight">0</p>
            <p class="mt-0.5 text-xs text-gray-500">近7日新增中差评</p>
          </div>
          <div>
            <p class="text-lg font-semibold text-gray-900 leading-tight">0</p>
            <p class="mt-0.5 text-xs text-gray-500">一个月内新增中差评</p>
          </div>
        </div>
      </section>

      <!-- 评价列表 -->
      <section class="card mt-3 p-4 mb-4">
        <!-- 顶部标题和操作 -->
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-baseline">
            <span class="text-base font-semibold text-gray-900 mr-1">评价</span>
            <span class="text-xs text-gray-500">{{ totalReviews }}</span>
          </div>
          <div class="flex items-center">
            <button
              class="px-3 py-1.5 rounded-full border border-orange-400 text-xs text-orange-500 font-medium flex items-center"
            >
              <i class="fa fa-comment-dots mr-1 text-[11px]"></i>
              批量回复
            </button>
            <button
              class="flex items-center text-[11px] text-gray-500 ml-3 shrink-0"
              @click="toggleFilters"
            >
              <span class="mr-0.5">{{
                filtersExpanded ? "收起" : "展开"
              }}</span>
              <i
                :class="[
                  'fa-solid text-[9px]',
                  filtersExpanded ? 'fa-chevron-up' : 'fa-chevron-down',
                ]"
              ></i>
            </button>
          </div>
        </div>

        <!-- 筛选条件行 -->
        <div class="flex items-center text-[11px] text-gray-500 mb-2">
          <div
            class="flex items-center space-x-3 flex-1 min-w-0"
            v-show="filtersExpanded"
          >
            <button
              class="flex items-center"
              :class="
                activeFilter === 'latest' ? 'text-orange-500 font-medium' : ''
              "
              @click="setFilter('latest')"
            >
              <span>最新发布</span>
              <i class="fa-solid fa-chevron-down text-[9px] ml-1"></i>
            </button>
            <button
              class="flex items-center"
              :class="
                activeFilter === 'stars' ? 'text-orange-500 font-medium' : ''
              "
              @click="setFilter('stars')"
            >
              <span>评价星级</span>
              <i class="fa-solid fa-chevron-down text-[9px] ml-1"></i>
            </button>
            <button
              class="flex items-center"
              :class="
                activeFilter === 'reply' ? 'text-orange-500 font-medium' : ''
              "
              @click="setFilter('reply')"
            >
              <span>是否回复</span>
              <i class="fa-solid fa-chevron-down text-[9px] ml-1"></i>
            </button>
            <button
              class="flex items-center"
              :class="
                activeFilter === 'more' ? 'text-orange-500 font-medium' : ''
              "
              @click="setFilter('more')"
            >
              <span>其他筛选</span>
              <i class="fa-solid fa-chevron-down text-[9px] ml-1"></i>
            </button>
          </div>
        </div>

        <div class="h-px bg-gray-100 -mx-4 mb-3"></div>

        <!-- 单条评价示例列表 -->
        <div v-for="item in reviews" :key="item.id" class="pb-4 last:pb-0">
          <!-- 用户信息 -->
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center">
              <div
                class="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center mr-2 overflow-hidden"
              >
                <i class="fa-solid fa-user text-gray-500 text-sm"></i>
              </div>
              <div>
                <div class="flex items-center mb-0.5">
                  <span class="text-[13px] text-gray-900 mr-1">{{
                    item.user
                  }}</span>
                  <span
                    class="inline-flex items-center px-1.5 py-0.5 rounded-full bg-orange-50 text-[10px] text-orange-500 mr-1"
                    >Lv5</span
                  >
                  <span
                    class="inline-flex items-center px-1.5 py-0.5 rounded-full bg-yellow-50 text-[10px] text-yellow-500 mr-1"
                    >V</span
                  >
                  <span
                    class="inline-flex items-center px-1.5 py-0.5 rounded-full bg-green-50 text-[10px] text-green-500"
                    >老客户</span
                  >
                </div>
                <p class="text-[10px] text-gray-400">{{ item.date }}</p>
              </div>
            </div>
          </div>

          <!-- 评分信息 -->
          <div class="flex items-center mb-2">
            <span class="mr-1 text-lg leading-none">😊</span>
            <span class="text-xs text-orange-500 mr-2">还可以</span>
            <div class="flex items-center">
              <i
                v-for="n in 5"
                :key="n"
                class="fa-star text-[11px] mr-0.5"
                :class="
                  n <= item.stars
                    ? 'fa-solid text-orange-400'
                    : 'fa-regular text-gray-300'
                "
              ></i>
            </div>
          </div>

          <!-- 评价内容 -->
          <p class="text-[13px] leading-relaxed text-gray-800 mb-1">
            {{ item.expanded ? item.fullContent : item.briefContent }}
          </p>
          <div class="flex justify-end mb-1">
            <button
              class="text-[11px] text-orange-500 flex items-center"
              @click="toggleExpand(item)"
            >
              <span class="mr-0.5">{{
                item.expanded ? "收起" : "展开全文"
              }}</span>
              <i
                :class="[
                  'fa-solid text-[9px]',
                  item.expanded ? 'fa-chevron-up' : 'fa-chevron-down',
                ]"
              ></i>
            </button>
          </div>

          <!-- 图片区域：使用本地占位块，避免外链图片加载失败 -->
          <div class="flex gap-2 mb-3">
            <div
              v-for="n in 3"
              :key="n"
              class="flex-1 rounded-lg overflow-hidden bg-photo relative h-24"
            >
              <div class="w-full h-full"></div>
              <div
                v-if="n === 3 && item.moreImagesCount"
                class="absolute inset-0 bg-black/35 flex items-center justify-center"
              >
                <span class="text-xs text-white"
                  >+{{ item.moreImagesCount }}</span
                >
              </div>
            </div>
          </div>

          <!-- 商家回复 -->
          <div class="bg-gray-50 rounded-xl p-3 mb-2">
            <p class="text-[11px] text-gray-500 mb-1 flex items-center">
              <i class="fa-solid fa-store mr-1 text-[10px]"></i>
              商家回复
            </p>
            <p class="text-[12px] leading-relaxed text-gray-700">
              没有什么比亲的一句赞美、一句满意，来得更有力量！感谢亲的好评，期待您的下次光临！
            </p>
          </div>
          <div class="mb-3 text-[11px] text-gray-400">
            共1条回复
            <i class="fa-solid fa-chevron-right text-[9px] ml-0.5"></i>
          </div>

          <!-- 底部操作 -->
          <div
            class="flex items-center justify-between text-[11px] text-gray-400"
          >
            <button class="flex items-center">
              <i class="fa-regular fa-flag mr-1 text-[11px]"></i>
              投诉
            </button>
            <div class="flex items-center space-x-4">
              <button
                class="flex items-center cursor-pointer"
                @click="toggleLike(item)"
              >
                <i
                  :class="[
                    'mr-1 text-[11px]',
                    item.liked
                      ? 'fa-solid fa-thumbs-up text-orange-500'
                      : 'fa-regular fa-thumbs-up',
                  ]"
                ></i>
                {{ item.likes + (item.liked ? 1 : 0) }}
              </button>
            </div>
          </div>

          <div
            class="h-px bg-gray-100 mt-4"
            v-if="item.id !== reviews[reviews.length - 1].id"
          ></div>
        </div>
      </section>

      <!-- 客服悬浮按钮 -->
      <div class="fixed bottom-24 left-4 z-40">
        <button
          class="w-14 h-14 rounded-full bg-orange-500 flex flex-col items-center justify-center shadow-lg text-white"
        >
          <i class="fa-solid fa-headset text-lg mb-0.5"></i>
          <span class="text-[11px] leading-none">客服</span>
        </button>
      </div>
    </main>

    <!-- 底部安全区条 -->
    <footer
      class="fixed bottom-0 left-0 right-0 pb-2 flex items-center justify-center"
    >
      <div class="w-24 h-1.5 rounded-full bg-gray-300"></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BusinessAdminReviewPage",
  data() {
    return {
      totalReviews: 489,
      activeFilter: "latest",
      filtersExpanded: true,
      reviews: [
        {
          id: 1,
          user: "浪里小泳新",
          date: "9月5日",
          stars: 4,
          briefContent:
            "晚上下班驱车游泳，上海top级别游泳馆，成人单次价格55元一次，可以领10元体育消费券，一...",
          fullContent:
            "晚上下班驱车游泳，上海top级别游泳馆，成人单次价格55元一次，可以领10元体育消费券，一家人来玩也很合适，环境干净，停车方便，整体体验不错。",
          expanded: false,
          liked: false,
          moreImagesCount: 4,
          likes: 1,
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    setFilter(type) {
      this.activeFilter = type;
      // 这里暂时只做 UI 高亮，后续可以在此处接入接口或本地筛选逻辑
    },
    toggleFilters() {
      this.filtersExpanded = !this.filtersExpanded;
    },
    toggleExpand(item) {
      item.expanded = !item.expanded;
    },
    toggleLike(item) {
      item.liked = !item.liked;
    },
  },
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(180deg, #ffe7d4 0%, #fdf3ea 40%, #f7f4f0 100%);
}

.page-header {
  background: linear-gradient(
    180deg,
    #ffe7d4 0%,
    #fdf3ea 85%,
    rgba(253, 243, 234, 0.95) 100%
  );
}

main {
  -webkit-overflow-scrolling: touch;
}

.card {
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.04);
}

.bg-photo > div {
  background: #dde3ee;
}
</style>
