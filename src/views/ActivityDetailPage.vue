<template>
  <div class="page pb-24" id="activity-detail-page">
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100"
    >
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center">
          <button @click="goBack" class="text-black mr-4">
            <i class="fa fa-angle-left text-xl"></i>
          </button>
        </div>
      </div>
    </header>
    <!-- 顶部图片轮播区 -->
    <div class="relative w-full">
      <div class="relative w-full h-[420px] bg-gray-200">
        <img
          src="@images/img_39.jpg"
          class="w-full h-full object-cover"
          alt="活动图片"
        />

        <!-- 图片上的文字 -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white"
        >
          <h1
            class="text-4xl font-bold mb-2"
            style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)"
          >
            森林徒步大花板
          </h1>
          <p
            class="text-2xl font-semibold italic"
            style="
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
              font-family: cursive;
            "
          >
            CampingDay
          </p>
        </div>

        <!-- 轮播指示点 -->
        <div
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
        >
          <div class="w-2 h-2 rounded-full bg-white"></div>
          <div class="w-2 h-2 rounded-full bg-white/50"></div>
          <div class="w-2 h-2 rounded-full bg-white/50"></div>
          <div class="w-2 h-2 rounded-full bg-white/50"></div>
          <div class="w-2 h-2 rounded-full bg-white/50"></div>
          <div class="w-2 h-2 rounded-full bg-white/50"></div>
          <div class="w-2 h-2 rounded-full bg-white/50"></div>
          <div class="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </div>

    <!-- 活动信息卡片 -->
    <div class="bg-white px-4 py-3">
      <div class="flex items-start justify-between mb-3">
        <h2 class="text-lg font-bold text-gray-900 flex-1 leading-tight">
          两天千岛湖骑行森林徒步
        </h2>
        <div class="text-2xl font-bold text-red-500 ml-3">¥699</div>
      </div>

      <!-- 标签行 -->
      <div class="flex items-center space-x-2 mb-3">
        <div class="flex items-center text-xs text-gray-600">
          <i class="fa-solid fa-coins text-orange-500 mr-1"></i>
          <span>能量市可使用</span>
        </div>
        <div class="text-xs text-gray-600">500枚抵扣50元</div>
      </div>

      <!-- 活动时间 -->
      <div class="flex items-center text-sm text-gray-700 mb-2">
        <i class="fa-regular fa-clock text-gray-400 mr-2 w-4"></i>
        <span class="flex-1">活动时间</span>
        <span>11.02 周日 07:00-08:30</span>
      </div>

      <!-- 活动地点 -->
      <div class="flex items-center text-sm text-gray-700 mb-2">
        <i class="fa-solid fa-location-dot text-gray-400 mr-2 w-4"></i>
        <span class="flex-1">活动地点</span>
        <span class="text-blue-600">上海·上海爱园园(大宁训练基地)</span>
        <i class="fa-solid fa-navigation text-blue-600 ml-2"></i>
      </div>

      <!-- 报名状态 -->
      <div class="mt-3">
        <div
          class="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded"
        >
          火热报名中 <span class="ml-2">11.02 周日 07:00 截止报名</span>
        </div>
      </div>
    </div>

    <!-- 活动主理人 -->
    <div class="bg-white mt-2 px-4 py-3">
      <div class="text-sm font-medium text-gray-900 mb-3">活动主理人</div>
      <div class="flex items-center justify-between">
        <div class="flex items-center flex-1">
          <img
            src="@images/img_39.jpg"
            class="w-12 h-12 rounded-full object-cover mr-3"
            alt="主理人头像"
          />
          <div class="flex-1">
            <div class="font-medium text-base text-gray-900">沪外趣野</div>
            <div class="flex items-center mt-1">
              <i
                class="fa-solid fa-certificate text-orange-400 text-xs mr-1"
              ></i>
              <span class="text-xs text-gray-500">趣玩活动主理人</span>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <button class="flex flex-col items-center">
            <i class="fa-regular fa-flag text-gray-400 text-lg mb-1"></i>
            <span class="text-xs text-gray-600">Ta的活动</span>
          </button>
          <button class="flex flex-col items-center">
            <i
              class="fa-regular fa-comment-dots text-gray-400 text-lg mb-1"
            ></i>
            <span class="text-xs text-gray-600">私信</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 你可能还喜欢 -->
    <div class="bg-white mt-2 px-4 py-3">
      <div class="text-base font-medium text-gray-900 mb-4">你可能还喜欢</div>

      <div class="space-y-3">
        <!-- 推荐活动1 -->
        <div class="flex items-start" @click="goToActivityDetail('1')">
          <div
            class="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
          >
            <img
              src="@images/img_39.jpg"
              class="w-full h-full object-cover"
              alt="活动图片"
            />
            <div
              class="absolute top-1 left-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded"
            >
              徒步
            </div>
          </div>
          <div class="flex-1 ml-3">
            <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
              环玉龙山超级越野跑之周六小有氧
            </h3>
            <div class="text-xs text-gray-500 mb-1">11.01周六06:00-19:00</div>
            <div class="text-xs text-gray-500 mb-2">波公德文化生态公园</div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-red-500">免费</span>
              <button
                class="bg-orange-500 text-white text-xs px-4 py-1 rounded-full"
              >
                详情
              </button>
            </div>
          </div>
        </div>

        <!-- 推荐活动2 -->
        <div class="flex items-start" @click="goToActivityDetail('2')">
          <div
            class="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
          >
            <img
              src="@images/img_39.jpg"
              class="w-full h-full object-cover"
              alt="活动图片"
            />
            <div
              class="absolute top-1 left-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded"
            >
              徒步
            </div>
          </div>
          <div class="flex-1 ml-3">
            <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
              强风小队周六一起超野
            </h3>
            <div class="text-xs text-gray-500 mb-1">11.01周六08:00-19:00</div>
            <div class="text-xs text-gray-500 mb-2">南北湖景区景区</div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-red-500">免费</span>
              <button
                class="bg-orange-500 text-white text-xs px-4 py-1 rounded-full"
              >
                详情
              </button>
            </div>
          </div>
        </div>

        <!-- 推荐活动3 -->
        <div class="flex items-start" @click="goToActivityDetail('3')">
          <div
            class="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
          >
            <img
              src="@images/img_39.jpg"
              class="w-full h-full object-cover"
              alt="活动图片"
            />
          </div>
          <div class="flex-1 ml-3">
            <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
              周日例跑丰十七彩稻田打卡
            </h3>
            <div class="text-xs text-gray-500 mb-1">11.02周日05:45-19:30</div>
            <div class="text-xs text-gray-500 mb-2">
              浙江省嘉兴市海宁市盐贯横镇...
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-red-500">免费</span>
              <span class="text-xs text-gray-400">已截止</span>
            </div>
          </div>
        </div>

        <!-- 推荐活动4 -->
        <div class="flex items-start" @click="goToActivityDetail('4')">
          <div
            class="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
          >
            <img
              src="@images/img_39.jpg"
              class="w-full h-full object-cover"
              alt="活动图片"
            />
          </div>
          <div class="flex-1 ml-3">
            <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
              嘉兴首届晴雨马拉松
            </h3>
            <div class="text-xs text-gray-500 mb-1">11.08周六13:00-17:30</div>
            <div class="text-xs text-gray-500 mb-2">万达广场(嘉兴南湖店)</div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-red-500">免费</span>
              <button
                class="bg-orange-500 text-white text-xs px-4 py-1 rounded-full"
              >
                详情
              </button>
            </div>
          </div>
        </div>

        <!-- 推荐活动5 -->
        <div class="flex items-start" @click="goToActivityDetail('5')">
          <div
            class="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
          >
            <img
              src="@images/img_39.jpg"
              class="w-full h-full object-cover"
              alt="活动图片"
            />
          </div>
          <div class="flex-1 ml-3">
            <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
              平湖银泰TP火元素年终狂欢
            </h3>
            <div class="text-xs text-gray-500 mb-1">12.31周三13:00-23:45</div>
            <div class="text-xs text-gray-500 mb-2">平湖银泰百货</div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-red-500">免费</span>
              <button
                class="bg-orange-500 text-white text-xs px-4 py-1 rounded-full"
              >
                详情
              </button>
            </div>
          </div>
        </div>

        <!-- 推荐活动6 -->
        <div class="flex items-start" @click="goToActivityDetail('6')">
          <div
            class="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
          >
            <img
              src="@images/img_39.jpg"
              class="w-full h-full object-cover"
              alt="活动图片"
            />
          </div>
          <div class="flex-1 ml-3">
            <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
              GOTUU | 一年一度家装派对（第三届）
            </h3>
            <div class="text-xs text-gray-500 mb-1">11.01周六18:00-22:00</div>
            <div class="text-xs text-gray-500 mb-2">嘉兴站</div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-red-500">¥69</span>
              <button
                class="bg-orange-500 text-white text-xs px-4 py-1 rounded-full"
              >
                详情
              </button>
            </div>
          </div>
        </div>

        <!-- 推荐活动7 -->
        <div class="flex items-start" @click="goToActivityDetail('7')">
          <div
            class="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
          >
            <img
              src="@images/img_39.jpg"
              class="w-full h-full object-cover"
              alt="活动图片"
            />
          </div>
          <div class="flex-1 ml-3">
            <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
              GOTUU | 一年一度家装派对（第三届）
            </h3>
            <div class="text-xs text-gray-500 mb-1">11.01周六18:00-22:00</div>
            <div class="text-xs text-gray-500 mb-2">嘉兴站</div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-red-500">¥69</span>
              <button
                class="bg-orange-500 text-white text-xs px-4 py-1 rounded-full"
              >
                详情
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部操作栏 -->
    <footer
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center space-x-3"
    >
      <button
        class="flex flex-col items-center justify-center"
        @click="handleShare"
      >
        <i class="fa-solid fa-share-nodes text-gray-600 text-xl mb-1"></i>
        <span class="text-xs text-gray-600">分享</span>
      </button>
      <button
        class="flex-1 bg-orange-500 text-white font-medium py-3 rounded-full text-center text-base"
        @click="handleSignUp"
      >
        立即报名
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ActivityDetailPage",
  data() {
    return {
      activityId: null,
    };
  },
  mounted() {
    this.activityId = this.$route.params.id;
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    goToActivityDetail(id) {
      this.$router.push(`/activity-detail/${id}`);
    },
    handleShare() {
      console.log("分享活动");
      // 实现分享功能
    },
    handleSignUp() {
      // 跳转到活动报名页面
      this.$router.push(`/activity-signup/${this.activityId}`);
    },
  },
};
</script>

<style scoped>
.page {
  background-color: #f5f5f5;
  min-height: 100vh;
}
</style>
