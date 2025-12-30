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
        <button @click="$router.go(-1)" class="text-black">
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
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import router from "@/router";
import FooterNav from "../components/FooterNav.vue";
import CommonHeader from "../components/CommonHeader.vue";
import WaterfallLayout from "../components/WaterfallLayout.vue";
import { generateRandomSportsItems, resetImageTracker } from "@/utils/sportsDataGenerator";

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
    const sportImages = [sport1, sport2, sport3, sport4, sport5, sport6, sport7, sport8, sport9, sport10, sport11, sport12, sport13];
    const avatars = [user1, user2, user3, user4];
    
    // 顶部标签页（关注/推荐/附近/上海）
    const topTab = ref("follow");
    const activePage = ref("teachers");
    const loading = ref(false);
    const noMore = ref(false);
    let currentId = 100;

    // 初始化各标签页的数据（使用随机生成）
    const followItems = ref(generateRandomSportsItems(6, 1, sportImages, avatars));
    const recommendItems = ref(generateRandomSportsItems(6, 7, sportImages, avatars));
    const nearbyItems = ref(generateRandomSportsItems(6, 13, sportImages, avatars));
    const cityItems = ref(generateRandomSportsItems(6, 19, sportImages, avatars));

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

    // 滚动监听（监听页面容器的滚动）
    const handleScroll = (e) => {
      const target = e.target;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight;
      const clientHeight = target.clientHeight;
      
      // 距离底部200px时触发加载
      if (scrollTop + clientHeight >= scrollHeight - 200) {
        loadMore();
      }
    };

    // 监听标签切换，重新生成数据
    watch(topTab, (newTab) => {
      // 重置图片追踪器，确保新标签页也能看到所有图片
      resetImageTracker();
      
      // 重置加载状态
      noMore.value = false;
      currentId = 100;
      
      // 重新生成当前标签页的数据
      switch (newTab) {
        case 'follow':
          followItems.value = generateRandomSportsItems(6, 1, sportImages, avatars);
          break;
        case 'recommend':
          recommendItems.value = generateRandomSportsItems(6, 7, sportImages, avatars);
          break;
        case 'nearby':
          nearbyItems.value = generateRandomSportsItems(6, 13, sportImages, avatars);
          break;
        case 'city':
          cityItems.value = generateRandomSportsItems(6, 19, sportImages, avatars);
          break;
      }
    });

    onMounted(() => {
      const pageElement = document.getElementById('page-teacher-list');
      if (pageElement) {
        pageElement.addEventListener('scroll', handleScroll);
      }
    });

    onUnmounted(() => {
      const pageElement = document.getElementById('page-teacher-list');
      if (pageElement) {
        pageElement.removeEventListener('scroll', handleScroll);
      }
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
