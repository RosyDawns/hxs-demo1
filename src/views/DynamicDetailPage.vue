<template>
  <div class="page min-h-screen bg-gray-50" id="page-dynamic-detail">
    <!-- 顶部导航 -->
    <header class="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div class="flex items-center justify-between p-3">
        <button
          class="flex items-center text-gray-700 nav-action"
          @click="$router.back()"
        >
          <i class="fa fa-arrow-left text-xl"></i>
        </button>
        <h1 class="text-lg font-medium">动态详情</h1>
        <button class="text-gray-700 nav-action">
          <i class="fa fa-ellipsis-h text-xl"></i>
        </button>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="pt-14 pb-20">
      <!-- 用户信息 -->
      <div class="bg-white p-4">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center">
            <img
              :src="dynamic.avatar"
              :alt="dynamic.author"
              class="w-12 h-12 rounded-full object-cover mr-3"
            />
            <div>
              <div class="font-medium text-black">{{ dynamic.author }}</div>
              <div class="text-xs text-gray-400 mt-1">{{ dynamic.time || '刚刚' }}</div>
            </div>
          </div>
          <button class="px-4 py-1.5 bg-orange-500 text-white text-sm rounded-full">
            + 关注
          </button>
        </div>

        <!-- 动态内容 -->
        <div class="mb-3">
          <p class="text-base text-black leading-relaxed">{{ dynamic.title }}</p>
          <p v-if="dynamic.content" class="text-sm text-gray-600 mt-2 leading-relaxed">
            {{ dynamic.content }}
          </p>
        </div>

        <!-- 动态图片 -->
        <div class="mb-3">
          <img
            :src="dynamic.image"
            :alt="dynamic.title"
            class="w-full rounded-lg object-cover"
          />
        </div>

        <!-- 互动区域 -->
        <div class="flex items-center justify-between pt-3 border-t border-gray-100">
          <button class="flex items-center text-gray-500 nav-action">
            <i class="fa-regular fa-heart text-lg mr-2"></i>
            <span class="text-sm">{{ dynamic.likes || 0 }}</span>
          </button>
          <button class="flex items-center text-gray-500 nav-action">
            <i class="fa-regular fa-comment text-lg mr-2"></i>
            <span class="text-sm">{{ dynamic.comments || 0 }}</span>
          </button>
          <button class="flex items-center text-gray-500 nav-action">
            <i class="fa-regular fa-star text-lg mr-2"></i>
            <span class="text-sm">{{ dynamic.favorites || 0 }}</span>
          </button>
          <button class="flex items-center text-gray-500 nav-action">
            <i class="fa-solid fa-share-nodes text-lg"></i>
          </button>
        </div>
      </div>

      <!-- 评论区 -->
      <div class="bg-white mt-3 p-4">
        <div class="text-base font-medium text-black mb-4">
          评论 {{ commentList.length }}
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
              class="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div class="flex-1">
              <div class="text-sm font-medium text-black">{{ comment.author }}</div>
              <div class="text-sm text-gray-600 mt-1">{{ comment.content }}</div>
              <div class="flex items-center mt-2 text-xs text-gray-400">
                <span>{{ comment.time }}</span>
                <button class="ml-4 nav-action">回复</button>
              </div>
            </div>
            <button class="text-gray-400 nav-action">
              <i class="fa-regular fa-heart text-sm"></i>
            </button>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-else class="text-center py-8 text-gray-400">
          暂无评论，快来抢沙发吧~
        </div>
      </div>
    </main>

    <!-- 底部评论输入框 -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40">
      <div class="flex items-center space-x-3">
        <input
          type="text"
          placeholder="说点什么..."
          class="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
          v-model="commentInput"
        />
        <button
          class="px-6 py-2 bg-orange-500 text-white text-sm rounded-full nav-action"
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
          author: "张三",
          avatar: img1,
          content: "太棒了！我也要坚持游泳",
          time: "2小时前",
        },
        {
          id: "comment2",
          author: "李四",
          avatar: img40,
          content: "加油，坚持就是胜利！",
          time: "5小时前",
        },
      ],
    };
  },
  mounted() {
    // 从路由参数获取动态ID
    const dynamicId = this.$route.params.id;
    this.loadDynamicDetail(dynamicId);
  },
  methods: {
    loadDynamicDetail(id) {
      // 模拟加载动态详情数据
      // 实际应用中应该从API获取
      const mockData = {
        1: {
          id: 1,
          title: "9月的仪式感, 从纵身跃入泳池开始",
          content:
            "今天完成了人生第一个5公里长泳，从最开始的恐水到现在可以轻松完成长距离游泳，这一路走来真的不容易。感谢教练的耐心指导，感谢自己的坚持。游泳不仅锻炼了身体，更重要的是让我学会了坚持和突破自己。",
          image: img39,
          avatar: img1,
          author: "张小明",
          time: "3小时前",
          likes: 128,
          comments: 23,
          favorites: 45,
        },
        2: {
          id: 2,
          title: "始于兴趣, 终于坚持, 让游泳成为一种习惯",
          content:
            "坚持游泳已经三个月了，从一开始的气喘吁吁到现在能轻松完成2000米，这种进步的感觉真好！每天下班后去游泳已经成为我生活中不可或缺的一部分。",
          image: img40,
          avatar: img1,
          author: "张小明",
          time: "1天前",
          likes: 256,
          comments: 42,
          favorites: 78,
        },
      };

      this.dynamic = mockData[id] || mockData[1];
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
