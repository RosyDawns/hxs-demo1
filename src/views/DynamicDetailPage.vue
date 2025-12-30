<template>
  <div class="page min-h-screen bg-gray-50" id="page-dynamic-detail">
    <!-- 顶部导航 -->
    <header class="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div class="flex items-center justify-between p-4">
        <button
          class="flex items-center text-gray-700 nav-action"
          @click="$router.back()"
        >
          <i class="fa fa-chevron-left text-lg"></i>
        </button>
        <h1 class="text-base font-medium">动态详情</h1>
        <button class="text-gray-700 nav-action">
          <i class="fa fa-ellipsis-h text-lg"></i>
        </button>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="pt-16 pb-20">
      <!-- 用户信息 -->
      <div class="bg-white">
        <div class="p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <img
                :src="dynamic.avatar"
                :alt="dynamic.author"
                class="w-11 h-11 rounded-full object-cover mr-3 border-2 border-gray-100"
              />
              <div>
                <div class="font-medium text-black text-base">{{ dynamic.author }}</div>
                <div class="text-xs text-gray-400 mt-0.5">{{ dynamic.time || '刚刚' }}</div>
              </div>
            </div>
            <button class="px-5 py-1.5 bg-orange-500 text-white text-sm rounded-full hover:bg-orange-600 transition-colors">
              + 关注
            </button>
          </div>

          <!-- 动态内容 -->
          <div class="mb-4">
            <p class="text-base text-black leading-relaxed font-medium mb-2">{{ dynamic.title }}</p>
            <p v-if="dynamic.content" class="text-sm text-gray-600 leading-relaxed">
              {{ dynamic.content }}
            </p>
          </div>
        </div>

        <!-- 动态图片 -->
        <div class="w-full">
          <img
            :src="dynamic.image"
            :alt="dynamic.title"
            class="w-full object-cover"
            style="max-height: 500px;"
          />
        </div>

        <!-- 互动区域 -->
        <div class="flex items-center justify-around py-3 px-4 border-t border-gray-100">
          <button class="flex items-center text-gray-600 nav-action hover:text-red-500 transition-colors">
            <i class="fa-regular fa-heart text-xl mr-2"></i>
            <span class="text-sm font-medium">{{ dynamic.likes || 0 }}</span>
          </button>
          <button class="flex items-center text-gray-600 nav-action hover:text-blue-500 transition-colors">
            <i class="fa-regular fa-comment text-xl mr-2"></i>
            <span class="text-sm font-medium">{{ dynamic.comments || commentList.length }}</span>
          </button>
          <button class="flex items-center text-gray-600 nav-action hover:text-yellow-500 transition-colors">
            <i class="fa-regular fa-star text-xl mr-2"></i>
            <span class="text-sm font-medium">{{ dynamic.favorites || 0 }}</span>
          </button>
          <button class="flex items-center text-gray-600 nav-action hover:text-green-500 transition-colors">
            <i class="fa-solid fa-share-nodes text-xl"></i>
          </button>
        </div>
      </div>

      <!-- 评论区 -->
      <div class="bg-white mt-2 p-4">
        <div class="text-base font-semibold text-black mb-4 flex items-center">
          <span>评论</span>
          <span class="ml-2 text-sm text-gray-400 font-normal">{{ commentList.length }}</span>
        </div>
        
        <!-- 评论列表 -->
        <div v-if="commentList.length > 0" class="space-y-4">
          <div
            v-for="comment in commentList"
            :key="comment.id"
            class="flex items-start pb-4 border-b border-gray-50 last:border-0"
          >
            <img
              :src="comment.avatar"
              :alt="comment.author"
              class="w-9 h-9 rounded-full object-cover mr-3 flex-shrink-0"
            />
            <div class="flex-1 min-w-0">
              <div class="text-sm font-medium text-black">{{ comment.author }}</div>
              <div class="text-sm text-gray-700 mt-1.5 leading-relaxed">{{ comment.content }}</div>
              <div class="flex items-center mt-2 text-xs text-gray-400">
                <span>{{ comment.time }}</span>
                <button class="ml-4 nav-action hover:text-orange-500 transition-colors">回复</button>
              </div>
            </div>
            <button class="text-gray-400 nav-action hover:text-red-500 transition-colors ml-2">
              <i class="fa-regular fa-heart text-base"></i>
            </button>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-else class="text-center py-12">
          <i class="fa-regular fa-comment-dots text-4xl text-gray-300 mb-3"></i>
          <p class="text-gray-400 text-sm">暂无评论，快来抢沙发吧~</p>
        </div>
      </div>
    </main>

    <!-- 底部评论输入框 -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 shadow-lg">
      <div class="flex items-center space-x-3">
        <input
          type="text"
          placeholder="说点什么..."
          class="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:bg-gray-50 transition-colors"
          v-model="commentInput"
          @keyup.enter="submitComment"
        />
        <button
          class="px-6 py-2.5 bg-orange-500 text-white text-sm rounded-full nav-action hover:bg-orange-600 transition-colors font-medium"
          @click="submitComment"
        >
          发送
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// 导入本地图片
import img1 from "@/assets/images/img-1.jpg";
import img39 from "@/assets/images/img_39.jpg";
import img40 from "@/assets/images/img_40.jpg";

export default {
  name: "DynamicDetailPage",
  data() {
    return {
      commentInput: "",
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
          content: "太棒了！我也要坚持运动",
          time: "2小时前",
        },
        {
          id: "comment2",
          author: "健身达人",
          avatar: img40,
          content: "加油，坚持就是胜利！",
          time: "5小时前",
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
        `${title}。每天坚持运动让我感觉身心都得到了很好的锻炼，这种感觉真的太棒了！`,
        `今天的运动打卡完成！${title}。希望能一直保持这个好习惯。`,
        `${title}。运动不仅让我的身体更健康，也让我的心态变得更加积极向上。`,
        `分享一下今天的运动日常：${title}。坚持运动，遇见更好的自己！`,
      ];
      return contentTemplates[Math.floor(Math.random() * contentTemplates.length)];
    },
    
    // 获取默认动态数据（降级方案）
    getDefaultDynamic(id) {
      return {
        id: id,
        title: "运动让生活更美好",
        content: "坚持运动已经成为我生活中不可或缺的一部分，每天都能感受到身体的变化和进步。",
        image: img39,
        avatar: img1,
        author: "运动达人",
        time: "刚刚",
        likes: Math.floor(Math.random() * 500) + 50,
        comments: Math.floor(Math.random() * 50) + 5,
        favorites: Math.floor(Math.random() * 100) + 10,
      };
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
</style>
