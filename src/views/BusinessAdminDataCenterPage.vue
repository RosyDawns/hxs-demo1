<template>
  <div class="page flex flex-col h-screen" id="page-business-admin-data-center">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
    >
      <div class="flex items-center justify-between px-4 pt-3 pb-2">
        <div class="flex items-center">
          <div class="mr-3" @click="goBack">
            <i class="fa-solid fa-chevron-left text-gray-700"></i>
          </div>
          <nav class="flex items-center space-x-5 text-sm">
            <button class="relative pb-1 text-gray-900 font-medium">
              首页
              <span
                class="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-orange-500"
              ></span>
            </button>
            <button class="pb-1 text-gray-500">交易</button>
            <button class="pb-1 text-gray-500">商品</button>
            <button class="pb-1 text-gray-500">星推官</button>
          </nav>
        </div>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-16 pb-16">
      <!-- 今日实时数据卡片 -->
      <section class="px-4 mt-3">
        <div
          class="realtime-card rounded-2xl p-4 text-white relative overflow-hidden"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <span class="text-base font-semibold mr-1">今日实时数据</span>
              <i
                class="fa-regular fa-circle-question text-xs text-white/90"
              ></i>
            </div>
            <div class="flex items-center text-[11px] text-white/90">
              <i class="fa-solid fa-rotate-right mr-1"></i>
              <span>更新时间：21:31</span>
            </div>
          </div>

          <div class="flex items-end mb-5">
            <div class="mr-10">
              <p class="text-xs text-white/80 mb-1">成交金额</p>
              <p class="text-3xl font-semibold leading-none">0.00</p>
            </div>
            <div>
              <p class="text-xs text-white/80 mb-1">核销金额</p>
              <p class="text-3xl font-semibold leading-none">583.30</p>
            </div>
          </div>

          <div
            class="bg-white/10 rounded-xl px-3 py-3 text-[11px] leading-relaxed"
          >
            <div class="grid grid-cols-2 gap-y-1.5">
              <div class="flex items-center justify-between">
                <span>成交券数</span>
                <span>0</span>
              </div>
              <div class="flex items-center justify-between">
                <span>核销券数</span>
                <span>6</span>
              </div>
              <div class="flex items-center justify-between">
                <span>退款金额</span>
                <span>¥0.00</span>
              </div>
              <div class="flex items-center justify-between">
                <span>买单笔数</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 时间范围切换 + 交易及商品数据 -->
      <section class="px-4 mt-4">
        <!-- 时间范围切换 -->
        <div
          class="inline-flex items-center bg-[#f5f5f5] rounded-full p-1 text-xs text-gray-600"
        >
          <button
            class="px-3 py-1 rounded-full"
            :class="
              activeRange === 'yesterday'
                ? 'bg-white text-orange-500 shadow-sm font-medium'
                : ''
            "
            @click="setRange('yesterday')"
          >
            昨日
          </button>
          <button
            class="px-4 py-1 rounded-full"
            :class="
              activeRange === '7d'
                ? 'bg-white text-orange-500 shadow-sm font-medium'
                : ''
            "
            @click="setRange('7d')"
          >
            近7日
          </button>
          <button
            class="px-3 py-1 rounded-full"
            :class="
              activeRange === '30d'
                ? 'bg-white text-orange-500 shadow-sm font-medium'
                : ''
            "
            @click="setRange('30d')"
          >
            近30日
          </button>
          <button
            class="px-3 py-1 rounded-full"
            :class="
              activeRange === 'custom'
                ? 'bg-white text-orange-500 shadow-sm font-medium'
                : ''
            "
            @click="setRange('custom')"
          >
            自定义
          </button>
        </div>

        <!-- 交易及商品数据卡片 -->
        <div class="bg-white rounded-2xl p-4 mt-3">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <h2 class="text-sm font-semibold text-gray-900 mr-1">
                交易及商品
              </h2>
              <i
                class="fa-regular fa-circle-question text-[11px] text-gray-400"
              ></i>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-y-4 text-xs">
            <!-- 成交金额 -->
            <div>
              <p class="text-gray-500 mb-1">成交金额</p>
              <p class="text-xl font-semibold text-gray-900 mb-0.5">
                {{ currentRangeStats.tradeAmount }}
              </p>
              <p class="text-[11px] text-gray-400">
                {{ currentCompareText }} --
              </p>
            </div>
            <!-- 成交券数 -->
            <div>
              <p class="text-gray-500 mb-1">成交券数</p>
              <p class="text-xl font-semibold text-gray-900 mb-0.5">
                {{ currentRangeStats.tradeTicketCount }}
              </p>
              <p class="text-[11px] text-gray-400">
                {{ currentCompareText }} --
              </p>
            </div>
            <!-- 核销金额 -->
            <div>
              <p class="text-gray-500 mb-1">核销金额</p>
              <p class="text-xl font-semibold text-gray-900 mb-0.5">
                {{ currentRangeStats.writeoffAmount }}
              </p>
              <p class="text-[11px] text-gray-400 flex items-center">
                {{ currentCompareText }}
                <span
                  class="flex items-center ml-1"
                  :class="writeoffChangeClass"
                >
                  {{ currentRangeStats.writeoffChangeText }}
                  <i
                    v-if="currentRangeStats.writeoffChangeType !== 'flat'"
                    :class="[
                      'fa-solid text-[9px] ml-0.5',
                      currentRangeStats.writeoffChangeType === 'up'
                        ? 'fa-arrow-up'
                        : 'fa-arrow-down',
                    ]"
                  ></i>
                </span>
              </p>
            </div>
            <!-- 核销券数 -->
            <div>
              <p class="text-gray-500 mb-1">核销券数</p>
              <p class="text-xl font-semibold text-gray-900 mb-0.5">
                {{ currentRangeStats.writeoffTicketCount }}
              </p>
              <p class="text-[11px] text-gray-400 flex items-center">
                {{ currentCompareText }}
                <span
                  class="flex items-center ml-1"
                  :class="writeoffTicketChangeClass"
                >
                  {{ currentRangeStats.writeoffTicketChangeText }}
                  <i
                    v-if="currentRangeStats.writeoffTicketChangeType !== 'flat'"
                    :class="[
                      'fa-solid text-[9px] ml-0.5',
                      currentRangeStats.writeoffTicketChangeType === 'up'
                        ? 'fa-arrow-up'
                        : 'fa-arrow-down',
                    ]"
                  ></i>
                </span>
              </p>
            </div>
            <!-- 星推官成交 & 核销 -->
            <div>
              <p class="text-gray-500 mb-1">星推官成交</p>
              <p class="text-xl font-semibold text-gray-900 mb-0.5">
                {{ currentRangeStats.starTradeAmount }}
              </p>
              <p class="text-[11px] text-gray-400">
                {{ currentCompareText }} --
              </p>
            </div>
            <div>
              <p class="text-gray-500 mb-1">星推官核销</p>
              <p class="text-xl font-semibold text-gray-900 mb-0.5">
                {{ currentRangeStats.starWriteoffTicketCount }}
              </p>
              <p class="text-[11px] text-gray-400">
                {{ currentCompareText }} --
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 商品售卖榜单 -->
      <section class="px-4 mt-4">
        <div class="bg-white rounded-2xl pt-4 pb-2">
          <div class="flex items-center justify-between px-4 mb-3">
            <h2 class="text-sm font-semibold text-gray-900">商品售卖榜单</h2>
            <div
              class="flex items-center text-[11px] bg-[#f6f6f6] rounded-full p-1 text-gray-600"
            >
              <button
                class="px-2.5 py-0.5 rounded-full"
                :class="
                  activeRankTab === 'count'
                    ? 'bg-white text-orange-500 shadow-sm'
                    : ''
                "
                @click="setRankTab('count')"
              >
                按成交数
              </button>
              <button
                class="px-2.5 py-0.5 rounded-full"
                :class="
                  activeRankTab === 'amount'
                    ? 'bg-white text-orange-500 shadow-sm'
                    : ''
                "
                @click="setRankTab('amount')"
              >
                按成交额
              </button>
              <button
                class="px-2.5 py-0.5 rounded-full"
                :class="
                  activeRankTab === 'writeoff'
                    ? 'bg-white text-orange-500 shadow-sm'
                    : ''
                "
                @click="setRankTab('writeoff')"
              >
                按核销金额
              </button>
            </div>
          </div>

          <div v-for="(item, index) in sortedGoods" :key="item.id">
            <div class="px-4 py-3 flex items-center">
              <div
                class="w-20 h-16 rounded-lg overflow-hidden bg-photo flex-shrink-0 mr-3"
              >
                <div class="w-full h-full"></div>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-[13px] text-gray-900 truncate mb-1">
                  {{ item.title }}
                </p>
                <div class="flex items-center text-[11px] text-gray-500 mb-0.5">
                  <span class="text-orange-500 mr-1">{{ item.score }}分</span>
                  <span class="mr-2">
                    {{ metricLabel }}{{ item[metricKey] }}
                  </span>
                  <span>人均¥{{ item.avgPrice }}</span>
                </div>
                <div class="flex items-center text-[11px] text-gray-500">
                  <i class="fa-solid fa-fire text-orange-500 mr-1 text-xs"></i>
                  <span>{{ item.hotText }}</span>
                </div>
              </div>
            </div>
            <div
              v-if="index !== sortedGoods.length - 1"
              class="h-px bg-gray-100 mx-4"
            ></div>
          </div>
        </div>
      </section>

      <!-- 客服悬浮按钮 -->
      <div class="fixed bottom-24 left-4 z-40">
        <button
          class="w-14 h-14 rounded-full bg-orange-500 flex flex-col items-center justify-center shadow-lg text-white"
        >
          <i class="fa-solid fa-headset text-lg mb-0.5"></i>
          <span class="text-[11px] leading-none">客服</span>
        </button>
      </div>
    </main>

    <!-- 底部导航栏 -->
    <footer
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 px-6 flex justify-around"
    >
      <div class="flex flex-col items-center">
        <i class="fa-solid fa-compass text-gray-400 text-xl mb-1"></i>
        <span class="text-xs text-gray-400">推广</span>
      </div>
      <div class="flex flex-col items-center active-nav">
        <i class="fa-solid fa-chart-pie text-xl mb-1"></i>
        <span class="text-xs">数据</span>
      </div>
      <div class="flex flex-col items-center relative">
        <i class="fa-solid fa-bell text-gray-400 text-xl mb-1"></i>
        <span class="text-xs text-gray-400">消息</span>
        <span
          class="absolute -top-1 -right-1 min-w-[18px] px-1 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center"
        >
          99+
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BusinessAdminDataCenterPage",
  data() {
    return {
      activeRange: "7d",
      activeRankTab: "count",
      statsByRange: {
        yesterday: {
          tradeAmount: "0.00",
          tradeTicketCount: 0,
          writeoffAmount: "583.30",
          writeoffTicketCount: 6,
          starTradeAmount: "0.00",
          starWriteoffTicketCount: 0,
          writeoffChangeText: "--",
          writeoffChangeType: "flat",
          writeoffTicketChangeText: "--",
          writeoffTicketChangeType: "flat",
        },
        "7d": {
          tradeAmount: "0.00",
          tradeTicketCount: 0,
          writeoffAmount: "2,278.70",
          writeoffTicketCount: 34,
          starTradeAmount: "0.00",
          starWriteoffTicketCount: 0,
          writeoffChangeText: "+0.08%",
          writeoffChangeType: "up",
          writeoffTicketChangeText: "-2.86%",
          writeoffTicketChangeType: "down",
        },
        "30d": {
          tradeAmount: "0.00",
          tradeTicketCount: 0,
          writeoffAmount: "5,678.20",
          writeoffTicketCount: 80,
          starTradeAmount: "0.00",
          starWriteoffTicketCount: 0,
          writeoffChangeText: "+1.25%",
          writeoffChangeType: "up",
          writeoffTicketChangeText: "+0.65%",
          writeoffTicketChangeType: "up",
        },
        custom: {
          tradeAmount: "0.00",
          tradeTicketCount: 0,
          writeoffAmount: "2,278.70",
          writeoffTicketCount: 34,
          starTradeAmount: "0.00",
          starWriteoffTicketCount: 0,
          writeoffChangeText: "--",
          writeoffChangeType: "flat",
          writeoffTicketChangeText: "--",
          writeoffTicketChangeType: "flat",
        },
      },
      goods: [
        {
          id: 1,
          title: "蛙泳/自由泳（体验卡）一对一60分钟体验课",
          score: "4.8",
          count: 15087,
          amount: 15087 * 90,
          writeoffAmount: 210000,
          avgPrice: 90,
          hotText: "近30天860+人下单",
        },
        {
          id: 2,
          title: "自由泳（单次卡）一对一60分钟体验课",
          score: "4.7",
          count: 12986,
          amount: 12986 * 80,
          writeoffAmount: 180000,
          avgPrice: 80,
          hotText: "近30天810+人下单",
        },
      ],
    };
  },
  computed: {
    currentRangeStats() {
      return this.statsByRange[this.activeRange] || this.statsByRange["7d"];
    },
    currentCompareText() {
      const map = {
        yesterday: "较前日",
        "7d": "较前7日",
        "30d": "较前30日",
        custom: "较前周期",
      };
      return map[this.activeRange] || "较前7日";
    },
    writeoffChangeClass() {
      const type = this.currentRangeStats.writeoffChangeType;
      if (type === "up") return "text-emerald-500";
      if (type === "down") return "text-orange-500";
      return "text-gray-400";
    },
    writeoffTicketChangeClass() {
      const type = this.currentRangeStats.writeoffTicketChangeType;
      if (type === "up") return "text-emerald-500";
      if (type === "down") return "text-orange-500";
      return "text-gray-400";
    },
    metricKey() {
      if (this.activeRankTab === "amount") return "amount";
      if (this.activeRankTab === "writeoff") return "writeoffAmount";
      return "count";
    },
    metricLabel() {
      if (this.activeRankTab === "amount") return "成交额¥";
      if (this.activeRankTab === "writeoff") return "核销金额¥";
      return "月售";
    },
    sortedGoods() {
      const key = this.metricKey;
      return [...this.goods].sort((a, b) => (b[key] || 0) - (a[key] || 0));
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    setRange(range) {
      this.activeRange = range;
    },
    setRankTab(tab) {
      this.activeRankTab = tab;
    },
  },
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
  background-color: #f7f4f0;
}

.realtime-card {
  background: linear-gradient(135deg, #ff8a3c 0%, #ff6b00 60%, #ff9344 100%);
  box-shadow: 0 10px 22px rgba(255, 120, 30, 0.35);
}

main {
  -webkit-overflow-scrolling: touch;
}

.bg-photo > div {
  background-size: cover;
  background-position: center;
  /* 使用纯色占位避免外链图片 */
  background-color: #dde3ee;
}

.active-nav {
  color: #ff6b00;
}

.active-nav i {
  color: #ff6b00;
}
</style>
