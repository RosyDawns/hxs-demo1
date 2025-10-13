<template>
  <div class="page bg-gray-50" id="page-camp-register">
    <header
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs px-3 py-3 flex items-center justify-between"
    >
      <div class="flex-1 flex items-center">
        <button
          @click="$router.back()"
          class="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center"
        >
          <i class="fa-solid fa-chevron-left text-gray-800"></i>
        </button>
        <div class="flex items-center space-x-2 ml-3">
          <h2 class="font-bold text-base">免费试</h2>
          <span class="text-xs text-gray-500 ml-1">能给才是成交的关键!</span>
        </div>
      </div>
    </header>

    <div class="px-2 pt-0.5">
      <div class="relative mt-14 rounded-lg overflow-hidden">
        <img
          src="@images/img-23.jpg"
          alt="Daily Workout Tips"
          class="w-full h-48 object-cover"
        />
      </div>
    </div>

    <!-- 筛选标签栏 -->
    <div class="bg-white">
      <div class="flex items-center justify-between pt-3 px-3">
        <button
          v-for="(filter, index) in mainFilters"
          :key="index"
          class="flex items-center py-1.5 text-sm whitespace-nowrap rounded"
          :class="filter.active ? 'text-orange-500' : 'text-gray-700'"
          @click="toggleFilter(filter)"
        >
          <span>{{ filter.name }}</span>
          <i class="fa-solid fa-chevron-down text-xs ml-1"></i>
        </button>
      </div>
    </div>

    <!-- 快捷标签 -->
    <div class="bg-white px-3 pb-3 pt-1 border-b border-gray-100">
      <div class="flex items-center overflow-x-auto scrollbar-hide space-x-2">
        <button
          v-for="(tag, index) in quickTags"
          :key="index"
          class="px-3 py-1.5 text-xs whitespace-nowrap rounded-full"
          :class="
            tag.active
              ? 'bg-orange-50 text-orange-500 '
              : 'bg-gray-100 text-gray-600 '
          "
          @click="toggleTag(tag)"
        >
          {{ tag.name }}
        </button>
      </div>
    </div>

    <!-- 体验课列表 -->
    <div class="px-2 py-2">
      <div class="grid grid-cols-2 gap-2">
        <div
          v-for="course in courseList"
          :key="course.id"
          class="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer"
          @click="goToCourseDetail(course.id)"
        >
          <!-- 课程图片 -->
          <div class="relative w-full h-40">
            <img
              :src="course.image"
              :alt="course.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- 课程信息 -->
          <div class="p-2">
            <!-- 教练信息 -->
            <div class="flex items-center mb-2">
              <img
                :src="course.coach.avatar"
                :alt="course.coach.name"
                class="w-5 h-5 rounded-full object-cover"
              />
              <span class="text-xs text-gray-700 ml-1">
                {{ course.coach.name }}
              </span>
              <span class="text-xs text-gray-400 ml-auto">
                {{ course.tags }}
              </span>
            </div>
            <h3 class="text-sm font-medium text-gray-800 mb-1 line-clamp-1">
              {{ course.title }}
            </h3>
            <p class="text-xs text-gray-500 mb-2 line-clamp-1">
              {{ course.location }}
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-end">
                <span class="text-gray-400" style="font-size: 10px">
                  价值
                </span>
                <span
                  class="text-primary font-bold mr-0.5"
                  style="font-size: 13px"
                >
                  ¥{{ course.price }}
                </span>
                <span class="text-gray-400" style="font-size: 10px">
                  {{ course.lottery }}个中奖名额
                </span>
              </div>
              <button
                class="bg-gradient-to-r from-orange-400 to-red-500 text-white px-1 py-0.5 rounded-full hover:opacity-90"
                @click.stop="handleFreeDraw(course.id)"
                style="font-size: 11px"
              >
                免费抽
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 加载更多 -->
      <div class="text-center py-4">
        <button
          class="text-sm text-gray-500 hover:text-gray-700"
          @click="loadMore"
          :disabled="loading"
        >
          {{ loading ? "加载中..." : "加载更多" }}
          <i class="fa-solid fa-chevron-down ml-1 text-xs"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";
import FooterNav from "../components/FooterNav.vue";

export default {
  name: "CampRegisterPage",
  components: {
    CommonHeader,
    FooterNav,
  },
  data() {
    return {
      loading: false,
      mainFilters: [
        { id: "area", name: "全部商区", active: false },
        { id: "category", name: "全部分类", active: false },
        { id: "sort", name: "智能排序", active: false },
        { id: "more", name: "更多筛选", active: false },
      ],
      quickTags: [
        { id: "lottery", name: "高中奖率", active: false },
        { id: "nearby", name: "附近3km", active: false },
        { id: "food", name: "吃喝", active: false },
        { id: "sports", name: "运动", active: false },
        { id: "art", name: "艺术", active: false },
        { id: "interest", name: "兴趣", active: false },
      ],
      courseList: [
        {
          id: 1,
          title: "蛙泳/自由泳 (体验卡)",
          image:
            "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400",
          coach: {
            name: "李教练",
            avatar: "https://randomuser.me/api/portraits/men/10.jpg",
          },
          tags: "技能类",
          location: "金地天御18号001 大楼体育 1km",
          price: 38,
          lottery: 50,
          category: "运动",
        },
        {
          id: 2,
          title: "蛙泳/自由泳 (5次卡)",
          image:
            "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=400",
          coach: {
            name: "赵教练",
            avatar: "https://randomuser.me/api/portraits/women/11.jpg",
          },
          tags: "上门服务",
          location: "静安区 | 黄浦区",
          price: 60,
          lottery: 30,
          category: "运动",
        },
        {
          id: 3,
          title: "瑜伽基础入门课",
          image:
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
          coach: {
            name: "王老师",
            avatar: "https://randomuser.me/api/portraits/women/12.jpg",
          },
          tags: "技能类",
          location: "徐汇区 瑜伽馆 2km",
          price: 88,
          lottery: 40,
          category: "运动",
        },
        {
          id: 4,
          title: "健身私教体验课",
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
          coach: {
            name: "张教练",
            avatar: "https://randomuser.me/api/portraits/men/13.jpg",
          },
          tags: "线上服务",
          location: "浦东新区 健身房 3km",
          price: 128,
          lottery: 20,
          category: "运动",
        },
      ],
    };
  },
  methods: {
    toggleFilter(filter) {
      filter.active = !filter.active;
      console.log("筛选:", filter.name);
    },

    toggleTag(tag) {
      tag.active = !tag.active;
      console.log("标签:", tag.name);
    },

    handleFreeDraw(courseId) {
      console.log("免费抽奖:", courseId);
      // 这里可以跳转到抽奖页面或显示抽奖弹窗
      alert("免费抽奖功能！");
    },

    goToCourseDetail(courseId) {
      console.log("查看课程详情:", courseId);
      this.$router.push(`/camp-detail/${courseId}`);
    },

    loadMore() {
      if (this.loading) return;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        console.log("加载更多课程");
      }, 1000);
    },
  },
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
