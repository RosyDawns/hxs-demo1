<template>
  <div class="page flex flex-col h-screen bg-[#f8f8f8]">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3 flex items-center justify-between"
    >
      <div class="flex items-center">
        <div class="mr-3" @click="goBack">
          <i class="fa-solid fa-chevron-left text-gray-800 text-lg"></i>
        </div>
        <span class="text-base font-medium text-gray-900">星推官带货</span>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-14 px-4 pb-6">
      <!-- 带货数据 -->
      <div class="bg-white rounded-2xl p-5 mt-4 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-base font-medium text-gray-900">带货数据</h2>
          <button class="flex items-center text-gray-400">
            <span class="text-xs mr-1">更多数据</span>
            <i class="fa-solid fa-chevron-right text-xs"></i>
          </button>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="text-center">
            <p class="text-xs text-gray-500 mb-2">7日带货人数</p>
            <p class="text-3xl font-bold text-gray-900">{{ userData.users }}</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-gray-500 mb-2">7日成交金额（元）</p>
            <p class="text-3xl font-bold text-gray-900">{{ userData.amount }}</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-gray-500 mb-2">7日结算佣金（元）</p>
            <p class="text-3xl font-bold text-gray-900">
              {{ userData.commission }}
            </p>
          </div>
        </div>
      </div>

      <!-- 带货商品 -->
      <div class="bg-white rounded-2xl p-5 mt-3 shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-base font-medium text-gray-900 mb-1">带货商品</h2>
            <p class="text-xs text-gray-400">
              {{ productData.count }}个商品已开通，正在带货中
            </p>
          </div>
          <i class="fa-solid fa-chevron-right text-gray-300"></i>
        </div>
      </div>

      <!-- 平台推荐计划 -->
      <div class="bg-white rounded-2xl p-5 mt-3 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-base font-medium text-gray-900">平台推荐计划</h2>
          <button class="flex items-center text-gray-400">
            <span class="text-xs mr-1">计划管理</span>
            <i class="fa-solid fa-chevron-right text-xs"></i>
          </button>
        </div>
        <div
          class="flex items-center cursor-pointer"
          @click="$router.push('/business-admin/star-promotion/plan')"
        >
          <div
            class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mr-3"
          >
            <i class="fa-solid fa-calendar-days text-orange-500 text-xl"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-900 mb-1">定向计划</p>
            <p class="text-xs text-gray-500">指定合作星推官</p>
          </div>
          <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
        </div>
      </div>

      <!-- 我的星推官 -->
      <div class="bg-white rounded-2xl p-5 mt-3 mb-4 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-base font-medium text-gray-900">我的星推官</h2>
          <button
            class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <i class="fa-solid fa-magnifying-glass text-gray-600 text-sm"></i>
          </button>
        </div>

        <!-- 星推官列表 -->
        <div class="space-y-5">
          <div
            v-for="promoter in promoters"
            :key="promoter.id"
            class="flex items-center"
          >
            <div class="relative mr-3">
              <img
                :src="promoter.avatar"
                :alt="promoter.name"
                class="w-14 h-14 rounded-full object-cover"
              />
              <div
                v-if="promoter.verified"
                class="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border-2 border-white"
              >
                <i class="fa-solid fa-check text-white text-[10px]"></i>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center mb-1.5">
                <span class="text-[15px] font-medium text-gray-900 mr-2">{{
                  promoter.name
                }}</span>
                <span class="text-xs text-gray-500">{{ promoter.location }}</span>
                <i
                  v-if="promoter.gender === 'female'"
                  class="fa-solid fa-venus text-pink-400 text-xs ml-1"
                ></i>
                <i
                  v-if="promoter.gender === 'male'"
                  class="fa-solid fa-mars text-blue-400 text-xs ml-1"
                ></i>
              </div>
              <div class="flex items-center text-xs text-gray-500">
                <span class="mr-4">{{ promoter.followers }}粉丝</span>
                <span>带货销售额{{ promoter.sales }}万</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "StarPromotionPage",
  data() {
    return {
      userData: {
        users: 0,
        amount: 0,
        commission: 7,
      },
      productData: {
        count: 0,
      },
      promoters: [
        {
          id: 1,
          name: "赵教练",
          location: "上海",
          gender: "female",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
          followers: "2.7万",
          sales: "1.02",
          verified: true,
        },
        {
          id: 2,
          name: "张教练",
          location: "上海",
          gender: "male",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
          followers: "10.4万",
          sales: "9.43",
          verified: true,
        },
        {
          id: 3,
          name: "王教练",
          location: "上海",
          gender: "female",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
          followers: "4.2万",
          sales: "2.15",
          verified: true,
        },
        {
          id: 4,
          name: "林设计",
          location: "上海",
          gender: "male",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
          followers: "5.1万",
          sales: "2.12",
          verified: true,
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}
</style>
