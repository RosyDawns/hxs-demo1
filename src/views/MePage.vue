<template>
  <div
    class="page flex flex-col h-screen bg-gray-50"
    id="page-me"
    style="background-image: linear-gradient(to bottom, #fae9de, #fff)"
  >
    <!-- 顶部栏 -->
    <header class="p-3 flex items-center justify-between">
      <button
        class="flex items-center text-sm px-3 py-1.5 border border-gray-300 rounded-full nav-action bg-white"
        @click="$router.push('/add-friends')"
      >
        <i class="fa-solid fa-user-plus mr-1.5 text-black"></i>
        <span class="text-black">添加好友</span>
      </button>
      <div class="flex items-center space-x-3">
        <!-- <div class="flex items-center">
          <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
          <span class="text-sm font-bold">4.9</span>
        </div>
        <button class="w-9 h-9 rounded-full bg-black flex items-center justify-center" @click="$router.push('/settings')">
          <div class="w-2 h-2 rounded-full bg-white"></div>
        </button> -->
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="flex-1 overflow-y-auto p-4">
      <!-- 用户信息区 -->
      <div>
        <div class="flex items-start">
          <img
            src="https://picsum.photos/id/1005/120/120"
            alt="用户头像"
            class="w-20 h-20 rounded-full border-2 border-gray-200"
          />
          <div class="ml-3 flex-1">
            <div class="flex items-center">
              <h3 class="font-bold text-xl">张小明</h3>
              <i class="fa-solid fa-mars text-blue-400 ml-2"></i>
            </div>
            <p class="text-xs mt-2">唤醒兽ID: 123456789</p>
            <div class="flex items-center space-x-3 mt-2 text-xs">
              <span><span class="font-bold text-black">982</span> 粉丝</span>
              <span><span class="font-bold text-black">1780</span> 关注</span>
              <span>
                <span class="font-bold text-black">1563</span> 收藏 | 获赞
              </span>
            </div>
          </div>
          <button
            class="nav-action text-black"
            @click="$router.push('/settings')"
          >
            <i class="fa-solid fa-gear text-xl"></i>
          </button>
        </div>

        <!-- 标签 -->
        <div class="flex flex-wrap gap-2 mt-3">
          <span
            class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            上海
          </span>
          <span
            class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            实名认证
          </span>
          <span
            class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            技能派
          </span>
          <span
            class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            到店服务
          </span>
        </div>
      </div>

      <!-- 功能卡片区 -->
      <div class="bg-white mt-3 px-4 py-4 rounded-2xl shadow-sm">
        <div class="grid grid-cols-4 gap-4 text-center">
          <div class="nav-action" @click="$router.push('/my-orders')">
            <i class="fa-solid fa-file-invoice text-primary text-3xl"></i>
            <p class="text-sm text-black mt-1">订单</p>
          </div>
          <div class="nav-action" @click="$router.push('/favorites')">
            <i class="fa-solid fa-star text-primary text-3xl"></i>
            <p class="text-sm text-black mt-1">收藏</p>
          </div>
          <div class="nav-action" @click="$router.push('/pending-review')">
            <i class="fa-solid fa-comment-dots text-primary text-3xl"></i>
            <p class="text-sm text-black mt-1">待评价</p>
          </div>
          <div class="nav-action" @click="$router.push('/my-reviews')">
            <i class="fa-solid fa-check-circle text-primary text-3xl"></i>
            <p class="text-sm text-black mt-1">真实评价</p>
          </div>
        </div>
      </div>

      <!-- 全部功能 -->
      <div class="bg-white mt-3 px-4 py-3 rounded-2xl shadow-sm">
        <div class="flex items-center mb-3 text-sm">
          <h3 class="font-bold">全部功能</h3>
          <i class="fa-solid fa-angle-right text-gray-600 mr-2"></i>
        </div>
        <div class="grid grid-cols-4 gap-4 text-center">
          <div class="nav-action" @click="$router.push('/wallet')">
            <div class="flex justify-center mb-2">
              <i class="fa-solid fa-wallet text-3xl text-gray-600"></i>
            </div>
            <p class="text-xs text-black mt-1">我的钱包</p>
          </div>
          <div class="nav-action" @click="$router.push('/register-waker')">
            <div class="flex justify-center mb-2">
              <i class="fa-solid fa-user-check text-3xl text-gray-600"></i>
            </div>
            <p class="text-xs text-black mt-1">注册唤醒师</p>
          </div>
          <div class="nav-action" @click="$router.push('/waker-alliance')">
            <div class="flex justify-center mb-2">
              <i class="fa-solid fa-cube text-3xl text-gray-600"></i>
            </div>
            <p class="text-xs text-black mt-1">唤醒联盟</p>
          </div>
          <div class="nav-action" @click="$router.push('/team')">
            <div class="flex justify-center mb-2">
              <i class="fa-solid fa-users text-3xl text-gray-600"></i>
            </div>
            <p class="text-xs text-black mt-1">醒狮团队</p>
          </div>
        </div>
      </div>

      <!-- 标签切换 -->
      <div class="bg-white mt-3 rounded-2xl shadow-sm">
        <div class="flex items-center justify-between px-4 pt-3">
          <div class="flex space-x-6">
            <button
              :class="[
                'pb-2 text-sm font-medium transition-colors',
                activeTab === 'dynamics'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500',
              ]"
              @click="activeTab = 'dynamics'"
            >
              动态
            </button>
            <button
              :class="[
                'pb-2 text-sm font-medium transition-colors',
                activeTab === 'follow'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500',
              ]"
              @click="activeTab = 'follow'"
            >
              关注
            </button>
            <button
              :class="[
                'pb-2 text-sm font-medium transition-colors',
                activeTab === 'showcase'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500',
              ]"
              @click="activeTab = 'showcase'"
            >
              橱窗
            </button>
            <button
              :class="[
                'pb-2 text-sm font-medium transition-colors',
                activeTab === 'recommend'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500',
              ]"
              @click="activeTab = 'recommend'"
            >
              推荐橱窗
            </button>
          </div>
        </div>

        <!-- 动态内容区 -->
        <div class="px-3 py-3">
          <div class="grid grid-cols-2 gap-2">
            <DynamicListItem
              v-for="item in dynamicList"
              :key="item.id"
              :item="item"
              @click="handleDynamicClick"
            />
          </div>
        </div>
      </div>
    </main>

    <div
      class="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-16 text-xs bg-orange-500 font-medium z-30 rounded-full flex flex-col items-center justify-center text-white"
      @click="handlePublish"
    >
      <i class="fa-solid fa-paper-plane text-lg mb-1"></i>
      <span>发布</span>
    </div>
    <FooterNav activePage="me" />
  </div>
</template>

<script>
import FooterNav from "../components/FooterNav.vue";
import DynamicListItem from "../components/DynamicListItem.vue";

export default {
  name: "MePage",
  components: {
    FooterNav,
    DynamicListItem,
  },
  data() {
    return {
      activeTab: "dynamics",
      dynamicList: [
        {
          id: 1,
          title: "9月的仪式感, 从纵身跃入泳池开始",
          image: "https://picsum.photos/id/1059/400/300",
          avatar: "https://picsum.photos/id/1005/80/80",
          author: "张小明",
          likes: 128,
        },
        {
          id: 2,
          title: "始于兴趣, 终于坚持, 让游泳成为一种习惯",
          image: "https://picsum.photos/id/1060/400/300",
          avatar: "https://picsum.photos/id/1005/80/80",
          author: "张小明",
          likes: 256,
        },
      ],
    };
  },
  methods: {
    handleDynamicClick(id) {
      console.log("点击动态:", id);
    },
    handlePublish() {
      this.$router.push("/publish-activity");
    },
  },
};
</script>
