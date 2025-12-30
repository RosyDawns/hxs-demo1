<template>
  <div class="page min-h-screen bg-white" id="page-dynamic-detail">
    <!-- 顶部导航 - 透明背景，悬浮在图片上 -->
    <header class="fixed top-0 left-0 right-0 z-50">
      <div class="flex items-center justify-between p-4">
        <button
          class="w-8 h-8 rounded-full bg-black bg-opacity-40 flex items-center justify-center text-white nav-action backdrop-blur-sm"
          @click="$router.back()"
        >
          <i class="fa fa-chevron-left text-sm"></i>
        </button>
        <button class="w-8 h-8 rounded-full bg-black bg-opacity-40 flex items-center justify-center text-white nav-action backdrop-blur-sm">
          <i class="fa fa-ellipsis-h text-sm"></i>
        </button>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="pb-20">
      <!-- 动态图片 - 全屏展示 -->
      <div class="w-full relative">
        <img
          :src="dynamic.image"
          :alt="dynamic.title"
          class="w-full object-cover"
          style="max-height: 70vh; min-height: 400px;"
        />
      </div>

      <!-- 内容区域 -->
      <div class="px-4 pt-4 pb-3">
        <!-- 标题 -->
        <h1 class="text-lg font-semibold text-gray-900 leading-relaxed mb-3">
          {{ dynamic.title }}
        </h1>

        <!-- 内容描述 -->
        <p v-if="dynamic.content" class="text-sm text-gray-700 leading-relaxed mb-4">
          {{ dynamic.content }}
        </p>

        <!-- 发布时间 -->
        <div class="text-xs text-gray-400 mb-4">
          {{ dynamic.time || '刚刚' }}
        </div>

        <!-- 用户信息和关注按钮 -->
        <div class="flex items-center justify-between py-3 border-t border-b border-gray-100">
          <div class="flex items-center flex-1 min-w-0">
            <img
              :src="dynamic.avatar"
              :alt="dynamic.author"
              class="w-10 h-10 rounded-full object-cover mr-3 flex-shrink-0"
            />
            <div class="flex-1 min-w-0">
              <div class="font-medium text-gray-900 text-sm truncate">{{ dynamic.author }}</div>
            </div>
          </div>
          <button class="px-5 py-1.5 bg-red-500 text-white text-sm rounded-full hover:bg-red-600 transition-colors flex-shrink-0 ml-3">
            + 关注
          </button>
        </div>

        <!-- 互动数据 -->
        <div class="flex items-center space-x-6 py-4 text-sm text-gray-600">
          <div class="flex items-center">
            <i class="fa-regular fa-heart mr-1.5"></i>
            <span>{{ dynamic.likes || 0 }}</span>
          </div>
          <div class="flex items-center">
            <i class="fa-regular fa-comment mr-1.5"></i>
            <span>{{ dynamic.comments || commentList.length }}</span>
          </div>
          <div class="flex items-center">
            <i class="fa-regular fa-star mr-1.5"></i>
            <span>{{ dynamic.favorites || 0 }}</span>
          </div>
        </div>
      </div>

      <!-- 评论区 -->
      <div class="px-4 pt-2">
        <div class="flex items-center justify-between mb-4">
          <div class="text-base font-semibold text-gray-900">
            评论 <span class="text-sm text-gray-400 font-normal ml-1">{{ commentList.length }}</span>
          </div>
        </div>
        
        <!-- 评论列表 -->
        <div v-if="commentList.length > 0" class="space-y-4">
          <div
            v-for="comment in commentList"
            :key="comment.id"
            class="flex items-start"
          >
            <img
              :src="comment.avatar"
              :alt="comment.author"
              class="w-8 h-8 rounded-full object-cover mr-3 flex-shrink-0"
            />
            <div class="flex-1 min-w-0">
              <div class="flex items-center mb-1">
                <span class="text-sm font-medium text-gray-900 mr-2">{{ comment.author }}</span>
                <span class="text-xs text-gray-400">{{ comment.time }}</span>
              </div>
              <div class="text-sm text-gray-700 leading-relaxed mb-2">{{ comment.content }}</div>
              <div class="flex items-center text-xs text-gray-400">
                <button class="nav-action hover:text-gray-600 transition-colors mr-4">回复</button>
                <button class="nav-action hover:text-red-500 transition-colors flex items-center">
                  <i class="fa-regular fa-heart mr-1"></i>
                  <span>{{ comment.likes || 0 }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-else class="text-center py-16">
          <i class="fa-regular fa-comment-dots text-5xl text-gray-200 mb-3"></i>
          <p class="text-gray-400 text-sm">还没有评论，快来抢沙发~</p>
        </div>
      </div>
    </main>

    <!-- 底部操作栏 -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-40 safe-area-bottom">
      <div class="flex items-center px-4 py-3">
        <!-- 评论输入框 -->
        <div class="flex-1 mr-3">
          <input
            type="text"
            placeholder="说点什么..."
            class="w-full bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:bg-gray-50 transition-colors"
            v-model="commentInput"
            @keyup.enter="submitComment"
          />
        </div>
        
        <!-- 操作按钮 -->
        <div class="flex items-center space-x-4">
          <button class="nav-action text-gray-600 hover:text-red-500 transition-colors" @click="toggleLike">
            <i :class="[isLiked ? 'fa-solid text-red-500' : 'fa-regular', 'fa-heart text-xl']"></i>
          </button>
          <button class="nav-action text-gray-600 hover:text-yellow-500 transition-colors" @click="toggleFavorite">
            <i :class="[isFavorited ? 'fa-solid text-yellow-500' : 'fa-regular', 'fa-star text-xl']"></i>
          </button>
          <button class="nav-action text-gray-600 hover:text-blue-500 transition-colors">
            <i class="fa-solid fa-share-nodes text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入本地图片
import img1 from "@/assets/images/img-1.jpg";
import img39 from "@/assets/images/img_39.jpg";
import img40 from "@/assets/images/img_40.jpg";

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
];

// 运动图片数组
const sportImages = [sport1, sport2, sport3, sport4, sport5, sport6, sport7, sport8, sport9, sport10, sport11, sport12, sport13];

export default {
  name: "DynamicDetailPage",
  data() {
    return {
      commentInput: "",
      isLiked: false,
      isFavorited: false,
      isLoaded: false, // 添加加载标志
      // 动态详情数据
      dynamic: {
        id: "",
        title: "",
        content: "",
        image: "",
        avatar: "",
        author: "",
        time: "",
        likes: 0,
        comments: 0,
        favorites: 0,
      },
      // 评论列表
      commentList: [
        {
          id: "comment1",
          author: "运动爱好者",
          avatar: img1,
          content: "太棒了！我也要坚持运动💪",
          time: "2小时前",
          likes: 12,
        },
        {
          id: "comment2",
          author: "健身达人",
          avatar: img40,
          content: "加油，坚持就是胜利！",
          time: "5小时前",
          likes: 8,
        },
      ],
    };
  },
  mounted() {
    this.loadDynamicDetail();
  },
  methods: {
    loadDynamicDetail() {
      // 优先从路由状态获取数据
      const routeState = history.state?.dynamic;
      
      if (routeState) {
        // 使用路由传递的完整数据
        this.dynamic = {
          ...routeState,
          time: routeState.time || '刚刚',
          content: routeState.content || this.generateContent(routeState.title),
          comments: routeState.comments || Math.floor(Math.random() * 50) + 5,
          favorites: routeState.favorites || Math.floor(Math.random() * 100) + 10,
        };
      } else {
        // 降级方案：使用默认数据
        const dynamicId = this.$route.params.id;
        this.dynamic = this.getDefaultDynamic(dynamicId);
      }
    },
    
    // 根据标题生成内容
    generateContent(title) {
      const contentTemplates = [
        `${title}。每天坚持运动让我感觉身心都得到了很好的锻炼，这种感觉真的太棒了！分享给大家我的运动心得～`,
        `今天的运动打卡完成！${title}。希望能一直保持这个好习惯，一起加油吧！💪`,
        `${title}。运动不仅让我的身体更健康，也让我的心态变得更加积极向上。推荐给大家！`,
        `分享一下今天的运动日常：${title}。坚持运动，遇见更好的自己！✨`,
      ];
      return contentTemplates[Math.floor(Math.random() * contentTemplates.length)];
    },
    
    // 获取默认动态数据（降级方案）- 使用运动图片和标题
    getDefaultDynamic(id) {
      // 随机选择运动图片
      const randomImageIndex = Math.floor(Math.random() * sportImages.length);
      const randomImage = sportImages[randomImageIndex];
      
      // 随机选择运动标题
      const randomTitleIndex = Math.floor(Math.random() * sportTitles.length);
      const randomTitle = sportTitles[randomTitleIndex];
      
      // 随机选择头像
      const avatars = [img1, img39, img40];
      const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
      
      // 运动相关作者名字
      const authors = [
        '跑步达人小李', '瑜伽教练Anna', '健身教练Mike', '篮球少年',
        '游泳健将', '骑行爱好者', '晨跑小队长', '瑜伽爱好者',
        '健身小白变大神', '球场老炮', '水中精灵', '骑行达人'
      ];
      const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
      
      return {
        id: id,
        title: randomTitle,
        content: this.generateContent(randomTitle),
        image: randomImage,
        avatar: randomAvatar,
        author: randomAuthor,
        time: '刚刚',
        likes: Math.floor(Math.random() * 500) + 50,
        comments: Math.floor(Math.random() * 50) + 5,
        favorites: Math.floor(Math.random() * 100) + 10,
      };
    },
    
    // 切换点赞状态
    toggleLike() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        this.dynamic.likes += 1;
      } else {
        this.dynamic.likes -= 1;
      }
    },
    
    // 切换收藏状态
    toggleFavorite() {
      this.isFavorited = !this.isFavorited;
      if (this.isFavorited) {
        this.dynamic.favorites += 1;
      } else {
        this.dynamic.favorites -= 1;
      }
    },
    
    submitComment() {
      if (!this.commentInput.trim()) {
        return;
      }
      
      // 添加新评论到列表
      const newComment = {
        id: `comment${Date.now()}`,
        author: "我",
        avatar: img1,
        content: this.commentInput,
        time: "刚刚",
        likes: 0,
      };
      
      this.commentList.unshift(newComment);
      this.commentInput = "";
      this.dynamic.comments += 1;
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
}

/* 安全区域适配 */
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}

/* 毛玻璃效果 */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* 文本截断 */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 平滑滚动 */
#page-dynamic-detail {
  scroll-behavior: smooth;
}
</style>
