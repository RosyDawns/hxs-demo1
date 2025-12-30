<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 头部 -->
    <CommonHeader title="运动动态" :showBack="true" />

    <!-- 瀑布流内容 -->
    <div class="mt-14">
      <WaterfallLayout 
        :items="sportsItems" 
        :columnCount="2"
        @click="(itemId) => handleItemClick(itemId)" 
      />
      
      <!-- 加载提示 -->
      <div v-if="loading" class="text-center py-4 text-gray-500">
        <i class="fa-solid fa-spinner fa-spin mr-2"></i>
        加载中...
      </div>
      
      <!-- 没有更多数据提示 -->
      <div v-if="noMore && sportsItems.length > 0" class="text-center py-4 text-gray-400 text-sm">
        没有更多了
      </div>
    </div>

    <!-- 底部导航 -->
    <FooterNav activePage="index" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import WaterfallLayout from '../components/WaterfallLayout.vue';
import CommonHeader from '../components/CommonHeader.vue';
import FooterNav from '../components/FooterNav.vue';

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

// 导入头像图片
import user1 from '@/assets/images/user_1.png';
import user2 from '@/assets/images/user_2.png';
import user3 from '@/assets/images/user_3.png';
import user4 from '@/assets/images/user_4.jpg';

export default {
  name: 'SportsWaterfallPage',
  components: {
    WaterfallLayout,
    CommonHeader,
    FooterNav
  },
  setup() {
    const router = useRouter();
    
    // 运动图片数组
    const sportImages = [sport1, sport2, sport3, sport4, sport5, sport6, sport7, sport8, sport9, sport10, sport11, sport12, sport13];
    
    // 头像数组
    const avatars = [user1, user2, user3, user4];
    
    // 运动相关标题库
    const sportTitles = [
      '晨跑打卡！今天跑了10公里，感觉超棒',
      '瑜伽让我找到内心的平静，每天坚持30分钟',
      '健身房撸铁日常，今天练背，状态很好',
      '篮球场上挥洒汗水，这才是青春该有的样子',
      '游泳是最好的全身运动，坚持就是胜利',
      '骑行穿越城市，感受不一样的风景',
      '早起晨跑，迎接美好的一天，加油！',
      '瑜伽不仅塑形，更能修心养性',
      '力量训练第100天，见证自己的蜕变',
      '篮球让我结识了很多志同道合的朋友',
      '游泳后的放松时刻，身心都得到了释放',
      '周末骑行100公里，挑战自我极限',
      '今天的跑步训练完成，突破了个人最佳',
      '瑜伽课后的拉伸，整个人都轻松了',
      '健身打卡第365天，坚持改变了我',
      '篮球三分球命中率提升了，继续加油',
      '游泳1000米达成，下个目标2000米',
      '骑行去郊外，沿途风景美不胜收',
      '晨跑遇见日出，美好的一天开始了',
      '瑜伽冥想让我学会了与自己对话',
      '健身房新学了一套动作，效果不错',
      '篮球比赛赢了，团队配合太重要了',
      '游泳技术又进步了，教练夸我了',
      '骑行爱好者的周末日常分享',
      '跑步让我变得更自律更健康',
      '瑜伽改善了我的体态和气质',
      '力量训练让我更有力量感',
      '篮球是我最喜欢的运动方式',
      '游泳池里的快乐时光',
      '骑行探索城市的每个角落',
      '晨跑是我一天中最享受的时刻',
      '瑜伽让我身心合一',
      '健身房是我的第二个家',
      '篮球场上释放压力',
      '游泳让我感受水的力量',
      '骑行是最环保的运动方式',
      '跑步让我遇见更好的自己',
      '瑜伽教会我专注当下',
      '健身改变了我的生活方式',
      '篮球让我学会了团队协作',
      '游泳是夏天最好的运动',
      '骑行带我看遍城市美景',
      '晨跑让我精力充沛一整天',
      '瑜伽是我的减压方式',
      '健身房撸铁让我更自信',
      '篮球场上的热血青春',
      '游泳池里的自由自在',
      '骑行路上的风景独好'
    ];
    
    // 作者名字库
    const authors = [
      '跑步达人小李', '瑜伽教练Anna', '健身教练Mike', '篮球少年',
      '游泳健将', '骑行爱好者', '晨跑小队长', '瑜伽爱好者',
      '健身小白变大神', '球场老炮', '水中精灵', '骑行达人',
      '马拉松跑者', '瑜伽导师', '力量训练师', '篮球教练',
      '游泳教练', '骑行俱乐部', '跑步社群', '瑜伽工作室',
      '健身房老铁', '篮球爱好者', '游泳爱好者', '骑行队长'
    ];

    // 数据相关
    const sportsItems = ref([]);
    const loading = ref(false);
    const noMore = ref(false);
    let currentId = 1;
    const pageSize = 6; // 每次加载6条
    
    // 生成随机运动数据
    const generateRandomItems = (count) => {
      const items = [];
      for (let i = 0; i < count; i++) {
        const randomImage = sportImages[Math.floor(Math.random() * sportImages.length)];
        const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
        const randomTitle = sportTitles[Math.floor(Math.random() * sportTitles.length)];
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
        const randomLikes = Math.floor(Math.random() * 500) + 50;
        
        items.push({
          id: currentId++,
          title: randomTitle,
          image: randomImage,
          avatar: randomAvatar,
          author: randomAuthor,
          likes: randomLikes
        });
      }
      return items;
    };
    
    // 初始化数据
    const initData = () => {
      sportsItems.value = generateRandomItems(12);
    };
    
    // 加载更多数据
    const loadMore = () => {
      if (loading.value || noMore.value) return;
      
      loading.value = true;
      
      // 模拟网络请求延迟
      setTimeout(() => {
        const newItems = generateRandomItems(pageSize);
        sportsItems.value.push(...newItems);
        loading.value = false;
        
        // 模拟数据加载完毕（加载到50条后停止）
        if (sportsItems.value.length >= 50) {
          noMore.value = true;
        }
      }, 800);
    };
    
    // 滚动事件处理
    const handleScroll = () => {
      // 获取滚动位置
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // 距离底部200px时触发加载
      if (scrollTop + windowHeight >= documentHeight - 200) {
        loadMore();
      }
    };

    // 处理点击事件
    const handleItemClick = (itemId) => {
      console.log('点击了动态:', itemId);
      // 找到对应的动态数据
      const dynamicItem = sportsItems.value.find(item => item.id === itemId);
      
      if (!dynamicItem) {
        console.error('Dynamic item not found for ID:', itemId);
        return;
      }
      
      // 将数据存储到 sessionStorage
      sessionStorage.setItem(`dynamic_${itemId}`, JSON.stringify(dynamicItem));
      
      // 跳转到详情页
      router.push(`/dynamic-detail/${itemId}`);
    };
    
    // 生命周期
    onMounted(() => {
      initData();
      window.addEventListener('scroll', handleScroll);
    });
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      sportsItems,
      loading,
      noMore,
      handleItemClick
    };
  }
};
</script>

<style scoped>
/* 页面特定样式 */
</style>
