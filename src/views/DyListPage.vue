<template>
  <div class="page pt-12" id="page-teacher-list">
    <!-- 顶部导航 -->
    <CommonHeader arrowColor="#000" bgColor="#fff" class="border-b border-gray-100">
      <template #center>
        <div class="w-full">
          <div class="flex-1 flex items-center justify-around">
            <button class="text-base px-1" @click="topTab = 'follow'">
              <span :class="{ 'text-primary': topTab === 'follow' }">关注</span>
            </button>
            <button class="text-base px-1" @click="topTab = 'recommend'">
              <span :class="{ 'text-primary': topTab === 'recommend' }">推荐</span>
            </button>
            <button class="text-base px-1" @click="topTab = 'nearby'">
              <span :class="{ 'text-primary': topTab === 'nearby' }">附近</span>
            </button>
            <button class="text-base px-1" @click="topTab = 'city'">
              <span :class="{ 'text-primary': topTab === 'city' }">上海</span>
            </button>
          </div>
        </div>
      </template>
      <template #left>
        <button @click="router.go(-1)" class="text-black">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
      </template>
    </CommonHeader>


    <!-- 内容区域 -->
    <div class="mt-4">
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
    </div>

    <div
      class="fixed bottom-18 shadow-md left-1/2 transform -translate-x-1/2 w-12 h-12 text-xs bg-orange-500 z-30 rounded-full flex flex-col items-center justify-center text-white"
      @click="handlePublish"
    >
      <i class="fa-solid fa-paper-plane text-sm"></i>
    </div>

    <FooterNav :activePage="activePage" />
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import router from "@/router";
import FooterNav from "../components/FooterNav.vue";
import CommonHeader from "../components/CommonHeader.vue";
import WaterfallLayout from "../components/WaterfallLayout.vue";
import { generateRandomSportsItems, createScrollLoader } from "@/utils/sportsDataGenerator";

// 导入运动图片
import sport1 from '@/assets/images/sports/sport1.webp';
import sport2 from '@/assets/images/sports/sport2.webp';
import sport3 from '@/assets/images/sports/sport3.webp';
import sport4 from '@/assets/images/sports/sport4.webp';
import sport5 from '@/assets/images/sports/sport5.webp';
import sport6 from '@/assets/images/sports/sport6.webp';

// 导入头像
import user1 from "@images/user_1.png";
import user2 from "@images/user_2.png";
import user3 from "@images/user_3.png";
import user4 from "@images/user_4.jpg";

export default {
  name: "DyListPage",
  components: {
    FooterNav,
    CommonHeader,
    WaterfallLayout,
  },
  setup() {
    const sportImages = [sport1, sport2, sport3, sport4, sport5, sport6];
    const avatars = [user1, user2, user3, user4];
    
    // 顶部标签页（关注/推荐/附近/上海）
    const topTab = ref("follow");
    const activePage = ref("teachers");
    const loading = ref(false);
    const noMore = ref(false);
    let currentId = 100;

    // 关注页动态数据（使用运动图片）
    const followItems = ref([
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

    // 推荐页动态数据（使用运动图片）
    const recommendItems = ref([
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
      {
        id: 7,
        title: "早起晨跑，迎接美好的一天，加油！",
        image: sport1,
        avatar: user3,
        author: "晨跑小队长",
        likes: 156,
      },
      {
        id: 8,
        title: "瑜伽不仅塑形，更能修心养性",
        image: sport2,
        avatar: user4,
        author: "瑜伽爱好者",
        likes: 234,
      },
    ]);

    // 附近页动态数据（使用运动图片）
    const nearbyItems = ref([
      {
        id: 9,
        title: "力量训练第100天，见证自己的蜕变",
        image: sport3,
        avatar: user1,
        author: "健身小白变大神",
        likes: 512,
      },
      {
        id: 10,
        title: "篮球让我结识了很多志同道合的朋友",
        image: sport4,
        avatar: user2,
        author: "球场老炮",
        likes: 178,
      },
      {
        id: 11,
        title: "游泳后的放松时刻，身心都得到了释放",
        image: sport5,
        avatar: user3,
        author: "水中精灵",
        likes: 298,
      },
      {
        id: 12,
        title: "周末骑行100公里，挑战自我极限",
        image: sport6,
        avatar: user4,
        author: "骑行达人",
        likes: 423,
      },
    ]);

    // 上海页动态数据（使用运动图片）
    const cityItems = ref([
      {
        id: 13,
        title: "今天的跑步训练完成，突破了个人最佳",
        image: sport1,
        avatar: user1,
        author: "马拉松跑者",
        likes: 267,
      },
      {
        id: 14,
        title: "瑜伽课后的拉伸，整个人都轻松了",
        image: sport2,
        avatar: user2,
        author: "瑜伽导师",
        likes: 189,
      },
      {
        id: 15,
        title: "健身打卡第365天，坚持改变了我",
        image: sport3,
        avatar: user3,
        author: "力量训练师",
        likes: 445,
      },
      {
        id: 16,
        title: "篮球三分球命中率提升了，继续加油",
        image: sport4,
        avatar: user4,
        author: "篮球教练",
        likes: 312,
      },
    ]);

    // 根据选中的标签返回对应的动态列表
    const dynamicItems = computed(() => {
      switch (topTab.value) {
        case 'follow':
          return followItems.value;
        case 'recommend':
          return recommendItems.value;
        case 'nearby':
          return nearbyItems.value;
        case 'city':
          return cityItems.value;
        default:
          return followItems.value;
      }
    });

    // 加载更多数据
    const loadMore = () => {
      if (loading.value || noMore.value) return;
      
      loading.value = true;
      setTimeout(() => {
        const newItems = generateRandomSportsItems(6, currentId, sportImages, avatars);
        currentId += 6;
        
        // 根据当前选中的标签添加到对应的列表
        switch (topTab.value) {
          case 'follow':
            followItems.value.push(...newItems);
            break;
          case 'recommend':
            recommendItems.value.push(...newItems);
            break;
          case 'nearby':
            nearbyItems.value.push(...newItems);
            break;
          case 'city':
            cityItems.value.push(...newItems);
            break;
        }
        
        loading.value = false;
        
        if (dynamicItems.value.length >= 50) {
          noMore.value = true;
        }
      }, 800);
    };

    // 处理动态点击
    const handleDynamicClick = (dynamicId) => {
      router.push(`/dynamic-detail/${dynamicId}`);
    };

    // 处理发布按钮点击
    const handlePublish = () => {
      console.log("发布动态");
    };

    // 滚动监听
    const handleScroll = createScrollLoader(loadMore);

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      topTab,
      activePage,
      dynamicItems,
      handleDynamicClick,
      handlePublish,
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
