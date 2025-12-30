<template>
  <div class="page pt-12" id="page-teacher-list">
    <!-- 顶部导航 -->
    <CommonHeader
      arrowColor="#000"
      bgColor="#fff"
      class="border-b border-gray-100"
    >
      <template #center>
        <div class="w-full">
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
      <template #right>
        <!-- 视图类型切换按钮 -->
        <button
          class="text-gray mr-3"
          @click="toggleListViewType"
          :class="{ 'text-primary': listViewType === 'main' }"
        >
          <i
            class="fa-solid"
            :class="listViewType === 'main' ? 'fa-th-large' : 'fa-list'"
            style="font-size: 16px"
          ></i>
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
    <div
      class="grid gap-3 px-3 pb-3 pt-1"
      :class="{
        'grid-cols-2': listViewType != 'main' || selectedTab === '动态',
      }"
    >
      <!-- 发现标签下的内容 -->
      <template v-if="topTab === 'discover'">
        <!-- 推荐内容 -->
        <template v-if="selectedTab === '推荐'">
          <template v-if="listViewType == 'main'">
            <HxsItem
              v-for="(coach, index) in recommendedCoaches"
              :key="coach.id"
              :coach="coach"
              @view-profile="handleCoachDetail"
          /></template>
          <template v-else>
            <CoachListItem
              v-for="coach in coaches"
              :key="coach.id"
              :coach="coach"
              @click="handleCoachClick"
            />
          </template>
        </template>

        <!-- 筛选内容 -->
        <template v-else-if="selectedTab === '筛选'">
          <template v-if="listViewType == 'main'">
            <HxsItem
              v-for="(coach, index) in recommendedCoaches"
              :key="coach.id"
              :coach="coach"
              @view-profile="handleCoachDetail"
          /></template>
          <template v-else>
            <CoachListItem
              v-for="coach in coaches"
              :key="coach.id"
              :coach="coach"
              @click="handleCoachClick"
            />
          </template>
        </template>

        <!-- 动态内容 -->
        <template v-else-if="selectedTab === '动态'">
          <WaterfallLayout
            :items="dynamicItems"
            :columnCount="2"
            @click="handleDynamicClick"
          />
          
          <!-- 加载提示 -->
          <div v-if="loading" class="text-center py-4 text-gray-500">
            <i class="fa-solid fa-spinner fa-spin mr-2"></i>
            加载中...
          </div>
          
          <!-- 没有更多数据提示 -->
          <div v-if="noMore && dynamicItems.length > 0" class="text-center py-4 text-gray-400 text-sm pb-20">
            没有更多了
          </div>
        </template>

        <!-- 主理人/生活技能/生活搭子内容 -->
        <template
          v-else-if="
            selectedTab === '主理人' ||
            selectedTab === '生活技能' ||
            selectedTab === '生活搭子'
          "
        >
          <template v-if="listViewType == 'main'">
            <!-- 使用可复用组件渲染教练卡片 -->
            <HxsItem
              v-for="(coach, index) in recommendedCoaches"
              :key="coach.id"
              :coach="coach"
              @view-profile="handleCoachDetail"
            />
          </template>
          <template v-else>
            <CoachListItem
              v-for="coach in coaches"
              :key="coach.id"
              :coach="coach"
              @click="handleCoachClick"
            />
          </template>
        </template>
      </template>

      <!-- 城市标签下的内容 -->
      <template v-else-if="topTab === 'city'">
        <template v-if="listViewType == 'main'">
          <HxsItem
            v-for="(coach, index) in recommendedCoaches"
            :key="coach.id"
            :coach="coach"
            @view-profile="handleCoachDetail"
        /></template>
        <template v-else>
          <CoachListItem
            v-for="coach in locationCoaches"
            :key="coach.id"
            :coach="coach"
            @click="handleCoachClick"
          />
        </template>
      </template>

      <!-- 关注标签下的内容 -->
      <template v-else-if="topTab === 'follow'">
        <!-- 动态内容 -->
        <template v-if="selectedTab === '动态'">
          <WaterfallLayout
            :items="followedDynamicItems"
            :columnCount="2"
            @click="handleDynamicClick"
          />
          
          <!-- 加载提示 -->
          <div v-if="loading" class="text-center py-4 text-gray-500">
            <i class="fa-solid fa-spinner fa-spin mr-2"></i>
            加载中...
          </div>
          
          <!-- 没有更多数据提示 -->
          <div v-if="noMore && followedDynamicItems.length > 0" class="text-center py-4 text-gray-400 text-sm pb-20">
            没有更多了
          </div>
        </template>

        <!-- 主理人内容 -->
        <template v-else-if="selectedTab === '主理人'">
          <template v-if="listViewType == 'main'">
            <HxsItem
              v-for="(coach, index) in recommendedCoaches"
              :key="coach.id"
              :coach="coach"
              @view-profile="handleCoachDetail"
          /></template>
          <template v-else>
            <CoachListItem
              v-for="coach in followedCoaches"
              :key="coach.id"
              :coach="coach"
              @click="handleCoachClick"
            />
          </template>
        </template>

        <!-- 生活技能/生活搭子内容 -->
        <template
          v-else-if="selectedTab === '生活技能' || selectedTab === '生活搭子'"
        >
          <template v-if="listViewType == 'main'">
            <HxsItem
              v-for="(coach, index) in recommendedCoaches"
              :key="coach.id"
              :coach="coach"
              @view-profile="handleCoachDetail"
          /></template>
          <template v-else>
            <CoachListItem
              v-for="coach in coaches"
              :key="coach.id"
              :coach="coach"
              @click="handleCoachClick"
            />
          </template>
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
import WaterfallLayout from "../components/WaterfallLayout.vue";
import HxsItem from "@/components/hxs-item.vue";

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
import img2 from "/src/assets/images/img-23.jpg";
import img3 from "@images/img-5.jpg";
import img4 from "@images/img_40.jpg";

// 导入运动图片（13张）
import sport1 from '@/assets/images/sports/sport1.webp';
import sport2 from '@/assets/images/sports/sport2.webp';
import sport3 from '@/assets/images/sports/sport3.webp';
import sport4 from '@/assets/images/sports/sport4.webp';
import sport5 from '@/assets/images/sports/sport5.webp';
import sport6 from '@/assets/images/sports/sport6.webp';
import sport7 from '@/assets/images/sports/sport7.webp';
import sport8 from '@/assets/images/sports/sport8.webp';
import sport9 from '@/assets/images/sports/sport9.webp';
import sport10 from '@/assets/images/sports/sport10.webp';
import sport11 from '@/assets/images/sports/sport11.webp';
import sport12 from '@/assets/images/sports/sport12.webp';
import sport13 from '@/assets/images/sports/sport13.webp';

// 导入工具函数
import { generateRandomSportsItems, createScrollLoader } from "@/utils/sportsDataGenerator";

export default {
  name: "TeacherListPage",
  components: {
    FooterNav,
    CommonHeader,
    CoachListItem,
    WaterfallLayout,
    HxsItem,
  },
  setup() {
    const route = useRoute();
    
    // 运动数据相关
    const sportImages = [sport1, sport2, sport3, sport4, sport5, sport6, sport7, sport8, sport9, sport10, sport11, sport12, sport13];
    const avatars = [user1, user2, user3, user4];
    const loading = ref(false);
    const noMore = ref(false);
    let currentId = 100;
    
    // 顶部标签页（发现/上海/关注）
    const topTab = ref("discover");

    // 二级标签页
    const selectedTab = ref("推荐");
    const selectedSubTab = ref("推荐");
    const listViewType = ref("");

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

    // 动态数据（使用运动图片）
    const dynamicItems = ref([
      {
        id: 1,
        title: "晨跑打卡！今天跑了10公里，感觉超棒",
        image: sport1,
        avatar: user1,
        author: "跑步达人小李",
        likes: 328,
      },
      {
        id: 2,
        title: "瑜伽让我找到内心的平静，每天坚持30分钟",
        image: sport2,
        avatar: user2,
        author: "瑜伽教练Anna",
        likes: 256,
      },
      {
        id: 3,
        title: "健身房撸铁日常，今天练背，状态很好",
        image: sport3,
        avatar: user3,
        author: "健身教练Mike",
        likes: 445,
      },
      {
        id: 4,
        title: "篮球场上挥洒汗水，这才是青春该有的样子",
        image: sport4,
        avatar: user4,
        author: "篮球少年",
        likes: 198,
      },
    ]);

    // 关注的动态数据（使用运动图片）
    const followedDynamicItems = ref([
      {
        id: 5,
        title: "游泳是最好的全身运动，坚持就是胜利",
        image: sport5,
        avatar: user1,
        author: "游泳健将",
        likes: 367,
      },
      {
        id: 6,
        title: "骑行穿越城市，感受不一样的风景",
        image: sport6,
        avatar: user2,
        author: "骑行爱好者",
        likes: 289,
      },
    ]);

    const recommendedCoaches = ref([
      {
        id: "coach1",
        name: "李教练",
        type: "游泳教练",
        title: "国家二级运动员 | 8年教学经验",
        rating: 4.8,
        distance: 1.2,
        image: "https://picsum.photos/id/1005/100/100",
        prices: {
          trial: 88,
          single: 200,
          card10: 1680,
        },
      },
      {
        id: "coach2",
        name: "赵教练",
        type: "游泳教练",
        title: "国家一级运动员 | 10年教学经验",
        rating: 4.9,
        distance: 1.5,
        image: "https://picsum.photos/id/1011/100/100",
        prices: {
          trial: 98,
          single: 220,
          card10: 1880,
        },
      },
      {
        id: "coach3",
        name: "张教练",
        type: "游泳教练",
        title: "国家二级运动员 | 6年教学经验",
        rating: 4.6,
        distance: 1.5,
        image: "https://picsum.photos/id/1012/100/100",
        prices: {
          trial: 80,
          single: 180,
          card10: 1580,
        },
      },
    ]);

    const handleCoachDetail = (coachId) => {
      console.log(`查看教练详情: ${coachId}`);
      router.push(`/ouyang`); // 使用现有的教练详情页路由
    };

    const toggleListViewType = () => {
      listViewType.value = listViewType.value === "main" ? "" : "main";
    };

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
      const top = typeof q.top === "string" ? q.top : undefined;
      const tab = typeof q.tab === "string" ? q.tab : undefined;
      const type = typeof q.type === "string" ? q.type : undefined;
      if (top && ["discover", "city", "follow"].includes(top)) {
        topTab.value = top;
      }
      if (tab) {
        selectedTab.value = tab;
      }
      if (type) {
        listViewType.value = type;
      }
    };

    // 滚动监听
    const handleScroll = createScrollLoader(loadMore);

    onMounted(() => {
      applyRouteQuery();
      window.addEventListener('scroll', handleScroll);
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
      // 找到对应的动态数据
      const dynamicItem = dynamicItems.value.find(item => item.id === dynamicId);
      
      // 通过路由状态传递完整数据
      router.push({
        path: `/dynamic-detail/${dynamicId}`,
        state: { dynamic: dynamicItem }
      });
    };

    // 加载更多数据
    const loadMore = () => {
      if (loading.value || noMore.value) return;
      
      loading.value = true;
      setTimeout(() => {
        const newItems = generateRandomSportsItems(6, currentId, sportImages, avatars);
        currentId += 6;
        
        // 根据当前选中的标签添加到对应列表
        if (topTab.value === 'discover' && selectedTab.value === '动态') {
          dynamicItems.value.push(...newItems);
          if (dynamicItems.value.length >= 50) {
            noMore.value = true;
          }
        } else if (topTab.value === 'follow' && selectedTab.value === '动态') {
          followedDynamicItems.value.push(...newItems);
          if (followedDynamicItems.value.length >= 50) {
            noMore.value = true;
          }
        }
        
        loading.value = false;
      }, 800);
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
      listViewType,
      recommendedCoaches,
      handleCoachDetail,
      toggleListViewType,
      loading,
      noMore,
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
