<template>
  <div class="daily-activity bg-white">
    <!-- 发布动态入口 -->
    <div class="p-4">
      <div class="flex items-center">
        <img
          src="@/assets/images/img-12.jpg"
          alt="用户头像"
          class="w-10 h-10 rounded-full mr-3"
        />
        <div class="flex-1">
          <span class="text-black text-sm">唤醒瘦·记录你的蜕变！</span>
        </div>
        <button
          class="border border-orange text-primary px-3 py-1 rounded-full text-xs font-medium"
          @click="goPublish"
        >
          去发布
        </button>
        <button class="ml-3 text-gray" @click="closePublishBanner">
          <i class="fa-solid fa-xmark text-base"></i>
        </button>
      </div>
    </div>

    <!-- 动态卡片列表 - 两列网格布局 -->
    <div class="grid grid-cols-2 gap-3 px-3">
      <!-- 动态卡片01 -->
      <div
        class="bg-white rounded-lg overflow-hidden cursor-pointer shadow-sm"
        @click="viewActivity(1)"
      >
        <div class="relative">
          <img
            src="@/assets/images/img-11.jpg"
            alt="终于瘦10斤"
            class="w-full h-48 object-cover"
          />
        </div>
        <div class="p-3">
          <h3 class="font-bold text-sm mb-3 line-clamp-2">
            终于瘦了10斤，永远在减肥和减肥的路上
          </h3>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-1">
              <img
                src="@/assets/images/img-12.jpg"
                alt="用户"
                class="w-6 h-6 rounded-full border-2 border-primary"
              />
              <button
                class="text-primary text-xs flex items-center font-medium"
                @click.stop="handleComment(1)"
              >
                点评<span class="text-primary ml-0.5">+1</span>
              </button>
            </div>
            <button
              class="text-gray flex items-center"
              @click.stop="handleLike(1)"
            >
              <i class="fa-solid fa-heart text-sm"></i>
              <span class="text-xs ml-1">赞</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 动态卡片02 -->
      <div
        class="bg-white rounded-lg overflow-hidden cursor-pointer shadow-sm"
        @click="viewActivity(2)"
      >
        <div class="relative">
          <img
            src="@/assets/images/img-11.jpg"
            alt="吃的干净真的会瘦吗"
            class="w-full h-48 object-cover"
          />
        </div>
        <div class="p-3">
          <h3 class="font-bold text-sm mb-3 line-clamp-2">
            吃的干净真的会瘦吗！！自制减脂餐
          </h3>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-1">
              <img
                src="@/assets/images/img-12.jpg"
                alt="用户"
                class="w-6 h-6 rounded-full border-2 border-primary"
              />
              <button
                class="text-primary text-xs flex items-center font-medium"
              >
                点评<span class="text-primary ml-0.5">+1</span>
              </button>
            </div>
            <button class="text-gray flex items-center">
              <i class="fa-solid fa-heart text-sm"></i>
              <span class="text-xs ml-1">赞</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 动态卡片03 -->
      <div
        class="bg-white rounded-lg overflow-hidden cursor-pointer shadow-sm"
        @click="viewActivity(3)"
      >
        <div class="relative">
          <img
            src="@/assets/images/img-11.jpg"
            alt="健身房就是打工人的第二个家"
            class="w-full h-48 object-cover"
          />
        </div>
        <div class="p-3">
          <h3 class="font-bold text-sm mb-3 line-clamp-2">
            健身房就是打工人的第二个家呀！
          </h3>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-1">
              <img
                src="@/assets/images/img-12.jpg"
                alt="用户"
                class="w-6 h-6 rounded-full border-2 border-primary"
              />
              <button
                class="text-primary text-xs flex items-center font-medium"
              >
                点评<span class="text-primary ml-0.5">+1</span>
              </button>
            </div>
            <button class="text-gray flex items-center">
              <i class="fa-solid fa-heart text-sm"></i>
              <span class="text-xs ml-1">赞</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 动态卡片04 -->
      <div
        class="bg-white rounded-lg overflow-hidden cursor-pointer"
        @click="viewActivity(4)"
      >
        <div class="relative">
          <img
            src="@/assets/images/img-11.jpg"
            alt="晨跑10km"
            class="w-full h-48 object-cover"
          />
        </div>
        <div class="p-3">
          <h3 class="font-bold text-sm mb-3 line-clamp-2">
            晨跑10km，与日出一起享受慢悠悠的快乐
          </h3>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-1">
              <img
                src="@/assets/images/img-12.jpg"
                alt="用户"
                class="w-6 h-6 rounded-full border-2 border-primary"
              />
              <button
                class="text-primary text-xs flex items-center font-medium"
              >
                点评<span class="text-primary ml-0.5">+1</span>
              </button>
            </div>
            <button class="text-gray flex items-center">
              <i class="fa-solid fa-heart text-sm"></i>
              <span class="text-xs ml-1">赞</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DailyActivity",
  data() {
    return {
      showPublishBanner: true,
      activities: [
        {
          id: 1,
          image: "@/assets/images/img-11.jpg",
          title: "终于瘦10斤，永远在减肥和减肥的路上",
          comments: 1,
          likes: 0,
        },
        {
          id: 2,
          image: "@/assets/images/img-11.jpg",
          title: "吃的干净真的会瘪吗！！自制减脂餐",
          comments: 1,
          likes: 0,
        },
        {
          id: 3,
          image: "@/assets/images/img-11.jpg",
          title: "健身房就是打工人的第二个家呀！",
          comments: 1,
          likes: 0,
        },
        {
          id: 4,
          image: "@/assets/images/img-11.jpg",
          title: "晨跑10km，与日出一起享受慢悠悠的快乐",
          comments: 1,
          likes: 0,
        },
      ],
    };
  },
  methods: {
    goPublish() {
      console.log("跳转到发布页面");
      this.$router.push("/publish-activity");
    },
    closePublishBanner() {
      this.showPublishBanner = false;
      console.log("关闭发布入口");
    },
    viewActivity(activityId) {
      console.log("查看动态详情:", activityId);
      // TODO: 跳转到动态详情页面
      this.$router.push(`/dynamic-detail/${activityId}`);
    },
    handleComment(activityId) {
      console.log("点评动态:", activityId);
      // TODO: 打开评论页面或弹窗
      // this.$router.push(`/activity/${activityId}/comments`)
    },
    handleLike(activityId) {
      console.log("点赞动态:", activityId);
      // TODO: 调用API点赞
      const activity = this.activities.find((a) => a.id === activityId);
      if (activity) {
        activity.likes++;
      }
    },
  },
};
</script>
