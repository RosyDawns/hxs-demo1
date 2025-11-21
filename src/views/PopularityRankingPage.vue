<template>
  <div class="page flex flex-col h-screen bg-[#f5f5f0]">
    <!-- 顶部导航栏 -->
    <header class="bg-white px-4 py-3 flex items-center justify-between">
      <div class="flex items-center flex-1">
        <i
          class="fa-solid fa-chevron-left text-[#333] text-lg cursor-pointer"
          @click="goBack"
        ></i>
        <h1 class="flex-1 text-center text-base font-medium text-[#1a1a1a]">
          人气榜单
        </h1>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto px-4 pb-4">
      <!-- 我的榜单卡片 -->
      <div class="bg-white mt-3 rounded-2xl p-5 shadow-sm">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-base font-medium text-[#1a1a1a]">我的榜单</h2>
          <span class="text-xs text-[#999]">数据时间: {{ dataTime }}</span>
        </div>

        <div class="grid grid-cols-2 gap-8">
          <!-- 人气榜 -->
          <div class="text-center">
            <p class="text-sm text-[#666] mb-3">人气榜</p>
            <p class="text-[56px] font-bold text-[#1a1a1a] leading-none mb-2">
              {{ rankingData.popularity }}
            </p>
            <p class="text-xs text-[#999]">
              较前一天{{ rankingData.popularityChange >= 0 ? '+' : '' }}{{ rankingData.popularityChange }}
            </p>
          </div>

          <!-- 城市大师 -->
          <div class="text-center">
            <p class="text-sm text-[#666] mb-3">城市大师</p>
            <p class="text-[56px] font-bold text-[#1a1a1a] leading-none mb-2">
              {{ rankingData.cityMaster }}
            </p>
            <p class="text-xs text-[#999]">
              较前一天{{ rankingData.cityMasterChange >= 0 ? '+' : '' }}{{ rankingData.cityMasterChange }}
            </p>
          </div>
        </div>
      </div>

      <!-- 为我打Call卡片 -->
      <div class="bg-white mt-3 rounded-2xl p-5 shadow-sm">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-base font-medium text-[#1a1a1a]">为我打Call</h2>
          <span class="text-xs text-[#999]">人数</span>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <!-- 今日 -->
          <div class="text-center">
            <p class="text-sm text-[#666] mb-3">今日</p>
            <p class="text-[48px] font-bold text-[#1a1a1a] leading-none">{{ callData.today }}</p>
          </div>

          <!-- 7日内 -->
          <div class="text-center">
            <p class="text-sm text-[#666] mb-3">7日内</p>
            <p class="text-[48px] font-bold text-[#1a1a1a] leading-none">{{ callData.week }}</p>
          </div>

          <!-- 一个月内 -->
          <div class="text-center">
            <p class="text-sm text-[#666] mb-3">一个月内</p>
            <p class="text-[48px] font-bold text-[#1a1a1a] leading-none">{{ callData.month }}</p>
          </div>
        </div>
      </div>

      <!-- 暂未上榜提示 -->
      <div class="mt-6 text-center">
        <p class="text-sm text-[#666]">暂未上榜 多多努力</p>
      </div>
    </main>

    <!-- 客服悬浮按钮 -->
    <div class="fixed bottom-6 left-6 z-40">
      <button
        class="w-16 h-16 rounded-full bg-[#FF6B35] flex flex-col items-center justify-center shadow-xl"
      >
        <i class="fa-solid fa-headset text-white text-xl"></i>
        <span class="text-white text-xs mt-1">客服</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularityRankingPage",
  data() {
    return {
      dataTime: "2025/11/09",
      rankingData: {
        popularity: 0,
        popularityChange: 0,
        cityMaster: 0,
        cityMasterChange: 0,
      },
      callData: {
        today: 0,
        week: 0,
        month: 0,
      },
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    fetchRankingData() {
      // TODO: 调用API获取实际数据
    },
  },
  mounted() {
    this.fetchRankingData();
  },
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}
</style>
