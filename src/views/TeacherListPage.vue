<template>
  <div class="page pt-12" id="page-teacher-list">
    <!-- 顶部导航 -->
    <CommonHeader arrowColor="#000" bgColor="#fff" class="border-b border-gray-100">
      <template #center>
        <div class="w-full pr-10">
          <div class="flex-1 flex items-center justify-around">
            <button class="text-lg px-1" @click="topTab = 'discover'">
              <div
                class="flex items-center"
                :class="{ 'text-primary': topTab === 'discover' }"
              >
                发现<i
                  class="fa-solid fa-right-left ml-0.5"
                  style="font-size: 10px"
                ></i>
              </div>
            </button>
            <button class="text-lg mx-2 px-1" @click="topTab = 'city'">
              <span :class="{ 'text-primary': topTab === 'city' }">上海</span>
            </button>
            <button class="text-lg px-1" @click="topTab = 'follow'">
              <span :class="{ 'text-primary': topTab === 'follow' }">关注</span>
            </button>
          </div>
        </div>
      </template>
      <template #left>
        <button @click="$router.back()" class="text-black">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
      </template>
    </CommonHeader>

    <!-- 分类标签栏 -->
    <div class="flex space-x-2 p-3 overflow-x-auto scrollbar-hide">
      <!-- 发现标签下的分类 -->
      <template v-if="topTab === 'discover'">
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '推荐'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '推荐'"
        >
          推荐
        </button>
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '筛选'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '筛选'"
        >
          筛选 <i class="fa-solid fa-chevron-down" style="font-size: 10px"></i>
        </button>
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '主理人'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '主理人'"
        >
          主理人
        </button>
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '生活技能'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '生活技能'"
        >
          生活技能
        </button>
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '生活搭子'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '生活搭子'"
        >
          生活搭子
        </button>
      </template>

      <!-- 城市标签下的分类 -->
      <template v-else-if="topTab === 'city'">
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '附近'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '附近'"
        >
          附近
        </button>
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '全城'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '全城'"
        >
          全城
        </button>
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '主理人'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '主理人'"
        >
          主理人
        </button>
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '生活技能'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '生活技能'"
        >
          生活技能
        </button>
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '生活搭子'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '生活搭子'"
        >
          生活搭子
        </button>
      </template>

      <!-- 关注标签下的分类 -->
      <template v-else-if="topTab === 'follow'">
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '动态'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '动态'"
        >
          动态
        </button>
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '主理人'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '主理人'"
        >
          主理人
        </button>
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '生活技能'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '生活技能'"
        >
          生活技能
        </button>
        <button
          class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
          :class="
            selectedTab === '生活搭子'
              ? 'text-primary border-b-2 border-primary text-orange'
              : 'text-black'
          "
          @click="selectedTab = '生活搭子'"
        >
          生活搭子
        </button>
      </template>

      <!-- 搜索按钮 -->
      <button class="ml-auto text-gray">
        <i class="fa-solid fa-search"></i>
      </button>
    </div>

    <!-- 二级分类标签栏 - 仅在发现-筛选下显示 -->
    <div
      class="hidden md:flex space-x-2 p-2 px-3 overflow-x-auto scrollbar-hide"
      v-if="topTab === 'discover' && selectedTab === '筛选'"
    >
      <button
        class="px-2 py-1 whitespace-nowrap text-xs font-medium nav-action cursor-pointer"
        :class="
          selectedSubTab === '推荐'
            ? 'bg-orange-100 text-orange rounded-full'
            : 'text-gray'
        "
        @click="selectedSubTab = '推荐'"
      >
        推荐
      </button>
      <button
        class="px-2 py-1 whitespace-nowrap text-xs font-medium nav-action cursor-pointer"
        :class="
          selectedSubTab === '附近'
            ? 'bg-orange-100 text-orange rounded-full'
            : 'text-gray'
        "
        @click="selectedSubTab = '附近'"
      >
        附近
      </button>
      <button
        class="px-2 py-1 whitespace-nowrap text-xs font-medium nav-action cursor-pointer"
        :class="
          selectedSubTab === '全城'
            ? 'bg-orange-100 text-orange rounded-full'
            : 'text-gray'
        "
        @click="selectedSubTab = '全城'"
      >
        全城
      </button>
      <button
        class="px-2 py-1 whitespace-nowrap text-xs font-medium nav-action cursor-pointer"
        :class="
          selectedSubTab === '筛选'
            ? 'bg-orange-100 text-orange rounded-full'
            : 'text-gray'
        "
        @click="selectedSubTab = '筛选'"
      >
        筛选 <i class="fa-solid fa-chevron-down" style="font-size: 8px"></i>
      </button>
    </div>

    <!-- 内容区域 -->
    <div class="grid grid-cols-2 gap-3 px-3 pb-3 pt-1">
      <!-- 发现标签下的内容 -->
      <template v-if="topTab === 'discover'">
        <!-- 推荐内容 -->
        <template v-if="selectedTab === '推荐'">
          <CoachListItem
            v-for="coach in coaches"
            :key="coach.id"
            :coach="coach"
            @click="handleCoachClick"
          />
        </template>

        <!-- 筛选内容 -->
        <template v-else-if="selectedTab === '筛选'">
          <CoachListItem
            v-for="coach in coaches"
            :key="coach.id"
            :coach="coach"
            @click="handleCoachClick"
          />
        </template>

        <!-- 动态内容 -->
        <template v-else-if="selectedTab === '动态'">
          <DynamicListItem
            v-for="item in dynamicItems"
            :key="item.id"
            :item="item"
            @click="handleDynamicClick"
          />
        </template>

        <!-- 主理人/生活技能/生活搭子内容 -->
        <template
          v-else-if="
            selectedTab === '主理人' ||
            selectedTab === '生活技能' ||
            selectedTab === '生活搭子'
          "
        >
          <CoachListItem
            v-for="coach in coaches"
            :key="coach.id"
            :coach="coach"
            @click="handleCoachClick"
          />
        </template>
      </template>

      <!-- 城市标签下的内容 -->
      <template v-else-if="topTab === 'city'">
        <CoachListItem
          v-for="coach in locationCoaches"
          :key="coach.id"
          :coach="coach"
          @click="handleCoachClick"
        />
      </template>

      <!-- 关注标签下的内容 -->
      <template v-else-if="topTab === 'follow'">
        <!-- 动态内容 -->
        <template v-if="selectedTab === '动态'">
          <DynamicListItem
            v-for="item in followedDynamicItems"
            :key="item.id"
            :item="item"
            @click="handleDynamicClick"
          />
        </template>

        <!-- 主理人内容 -->
        <template v-else-if="selectedTab === '主理人'">
          <CoachListItem
            v-for="coach in followedCoaches"
            :key="coach.id"
            :coach="coach"
            @click="handleCoachClick"
          />
        </template>

        <!-- 生活技能/生活搭子内容 -->
        <template
          v-else-if="selectedTab === '生活技能' || selectedTab === '生活搭子'"
        >
          <CoachListItem
            v-for="coach in coaches"
            :key="coach.id"
            :coach="coach"
            @click="handleCoachClick"
          />
        </template>
      </template>
    </div>

    <!-- 底部导航 -->
    <FooterNav :activePage="activePage" />
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
import FooterNav from "../components/FooterNav.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CoachListItem from "../components/CoachListItem.vue";
import DynamicListItem from "../components/DynamicListItem.vue";

// 导入本地图片资源
import user1 from "@images/user_1.png";
import user2 from "@images/user_2.png";
import user3 from "@images/user_3.png";
import user4 from "@images/user_4.jpg";
import avatr1 from "@images/img-18.jpg";
import avatr2 from "@images/img-13.jpg";
import avatr3 from "@images/img_39.jpeg";
import avatr4 from "@images/img_38.jpeg";
import img1 from "@images/img-12.jpg";
import img2 from "@images/img-23.jpg";
import img3 from "@images/img-5.jpg";
import img4 from "@images/img_40.jpg";

export default {
  name: "TeacherListPage",
  components: {
    FooterNav,
    CommonHeader,
    CoachListItem,
    DynamicListItem,
  },
  setup() {
    const route = useRoute();
    // 顶部标签页（发现/上海/关注）
    const topTab = ref("discover");

    // 二级标签页
    const selectedTab = ref("推荐");
    const selectedSubTab = ref("推荐");

    // 底部导航活动页面
    const activePage = ref("teachers");

    // 主理人/生活技能/生活搭子数据
    const coaches = ref([
      {
        id: 1,
        name: "李教练",
        avatar: user1,
        pic: avatr1,
        qualification: "国家二级游泳运动员",
        skills: "长泳/自由泳",
        rating: 4.8,
        label: "线上服务",
      },
      {
        id: 2,
        name: "赵教练",
        avatar: user2,
        pic: avatr2,
        qualification: "国家一级游泳运动员",
        skills: "仰泳/自由泳",
        rating: 4.9,
        label: "到店服务",
      },
      {
        id: 3,
        name: "张设计",
        avatar: user3,
        pic: avatr3,
        qualification: "国家一级平面设计师",
        skills: "平面设计/包装设计",
        rating: 4.8,
        label: "上门服务",
      },
      {
        id: 4,
        name: "王教练",
        avatar: user4,
        pic: avatr4,
        qualification: "国家一级网球运动员",
        skills: "西式方正手/单反/发球",
        rating: 4.7,
        label: "上门服务",
      },
    ]);

    // 城市标签下的数据
    const locationCoaches = ref([
      {
        id: 5,
        name: "陈教练",
        avatar: user1,
        pic: avatr1,
        qualification: "高级瑜伽教练",
        skills: "流瑜伽/高温瑜伽",
        rating: 4.9,
        label: "上门服务",
      },
      {
        id: 6,
        name: "林老师",
        avatar: user2,
        pic: avatr2,
        qualification: "专业茶艺师",
        skills: "茶道/花道",
        rating: 4.8,
        label: "到店服务",
      },
      {
        id: 7,
        name: "黄教练",
        avatar: user3,
        pic: avatr3,
        qualification: "健身教练",
        skills: "增肌/减脂/力量训练",
        rating: 4.7,
        label: "到店服务",
      },
      {
        id: 8,
        name: "郑老师",
        avatar: user4,
        pic: avatr4,
        qualification: "专业摄影师",
        skills: "人像/风景/商业摄影",
        rating: 4.9,
        label: "线上服务",
      },
    ]);

    // 关注的主理人数据
    const followedCoaches = ref([
      {
        id: 9,
        name: "周教练",
        avatar: user1,
        pic: avatr1,
        qualification: "专业舞蹈教练",
        skills: "街舞/爵士舞",
        rating: 4.9,
        label: "上门服务",
      },
      {
        id: 10,
        name: "吴老师",
        avatar: user2,
        pic: avatr2,
        qualification: "咖啡师",
        skills: "拉花/手冲咖啡",
        rating: 4.8,
        label: "到店服务",
      },
    ]);

    // 动态数据
    const dynamicItems = ref([
      {
        id: 1,
        title: "好喜欢学员给我拍的工作照...",
        image: img1,
        author: "Boram",
        avatar: user1,
        likes: "赞",
      },
      {
        id: 2,
        title: "吃的干净真的会瘦呢！分享减脂餐",
        image: img2,
        author: "番薯小卷卷",
        avatar: user2,
        likes: "赞",
      },
      {
        id: 3,
        title: "40+保持'逆龄'好身材的秘诀！！",
        image: img3,
        author: "辣妈私教小南哥",
        avatar: user3,
        likes: "赞",
      },
      {
        id: 4,
        title: "咖啡课堂拉花原理解析 做好这两点...",
        image: img4,
        author: "捉你学咖啡的Joy",
        avatar: user4,
        likes: "赞",
      },
    ]);

    // 关注的动态数据
    const followedDynamicItems = ref([
      {
        id: 5,
        title: "今天的瑜伽课圆满结束，感谢学员们的热情参与！",
        image: img1,
        author: "周教练",
        avatar: user1,
        likes: "赞",
      },
      {
        id: 6,
        title: "新到一批精品咖啡豆，欢迎来品尝！",
        image: img2,
        author: "吴老师",
        avatar: user2,
        likes: "赞",
      },
    ]);

    // 监听topTab变化，设置对应的默认selectedTab
    watch(topTab, (newTopTab) => {
      if (newTopTab === "discover") {
        selectedTab.value = "推荐";
        selectedSubTab.value = "推荐";
      } else if (newTopTab === "city") {
        selectedTab.value = "附近";
      } else if (newTopTab === "follow") {
        selectedTab.value = "动态";
      }
    });

    // 根据路由查询参数设置初始tab
    const applyRouteQuery = () => {
      const q = route.query || {};
      const top = typeof q.top === 'string' ? q.top : undefined;
      const tab = typeof q.tab === 'string' ? q.tab : undefined;
      if (top && ["discover", "city", "follow"].includes(top)) {
        topTab.value = top;
      }
      if (tab) {
        selectedTab.value = tab;
      }
    };

    onMounted(() => {
      applyRouteQuery();
    });

    watch(
      () => route.query,
      () => {
        applyRouteQuery();
      }
    );

    const handleCoachClick = (coachId) => {
      console.log(`查看教练详情: ${coachId}`);
      router.push(`/ouyang`); // 使用现有的教练详情页路由
    };

    const handleDynamicClick = (dynamicId) => {
      router.push(`/dynamic-detail/${dynamicId}`);
    };

    return {
      topTab,
      selectedTab,
      selectedSubTab,
      coaches,
      locationCoaches,
      followedCoaches,
      dynamicItems,
      followedDynamicItems,
      handleCoachClick,
      handleDynamicClick,
      activePage,
    };
  },
};
</script>

<style lang="less" scoped>
#page-teacher-list {
  height: 100vh;
  overflow-y: auto;
}

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
