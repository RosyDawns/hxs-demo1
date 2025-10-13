<template>
  <div class="page bg-gray-50 min-h-screen" id="page-search">
    <!-- 顶部搜索栏 -->
    <header
      class="sticky top-0 z-50 bg-white px-4 py-3 border-b border-gray-100"
    >
      <div class="flex items-center space-x-3">
        <button @click="$router.back()" class="text-black">
          <i class="fa-solid fa-chevron-left text-lg"></i>
        </button>
        <div class="flex-1 space-x-2">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="福苓湘食小馆"
              class="w-full bg-gray-100 rounded-full pl-4 pr-16 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-colors"
              @keyup.enter="handleSearch"
            />
            <button
              class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm"
              @click="handleSearch"
            >
              搜索
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="py-4">
      <!-- 历史搜索 -->
      <div v-if="searchHistory.length > 0" class="bg-white rounded-lg p-4">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-base font-medium text-gray-800">历史搜索</h3>
          <button @click="clearHistory" class="text-gray-400">
            <i class="fa-solid fa-trash text-sm"></i>
          </button>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(item, index) in searchHistory"
            :key="index"
            class="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 transition-colors"
            @click="
              searchQuery = item;
              handleSearch();
            "
          >
            {{ item }}
          </button>
        </div>
      </div>

      <!-- 搜索发现 -->
      <div class="bg-white rounded-lg p-4">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-base font-medium text-gray-800">搜索发现</h3>
          <button
            @click="refreshDiscovery"
            class="flex items-center text-gray-400 text-sm"
          >
            <i class="fa-solid fa-refresh mr-1"></i>
            换一换
          </button>
        </div>
        <div class="grid grid-cols-2 gap-y-3 gap-x-8">
          <div
            v-for="item in discoveryItems"
            :key="item.name"
            class="flex items-center justify-between cursor-pointer hover:bg-gray-50 py-1 rounded"
            @click="handleDiscoveryClick(item.name)"
          >
            <span class="text-gray-700 text-sm">{{ item.name }}</span>
            <span class="text-gray-400 text-sm">{{ item.type }}</span>
          </div>
        </div>
      </div>

      <!-- 点评热点 -->
      <div class="bg-white rounded-lg p-4">
        <div class="flex items-center mb-3">
          <div
            class="w-6 h-6 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center mr-2"
          >
            <i class="fa-solid fa-fire text-white text-xs"></i>
          </div>
          <h3 class="text-base font-medium text-gray-800">点评热点</h3>
        </div>
        <div class="space-y-3">
          <div
            v-for="(item, index) in hotTopics"
            :key="index"
            class="flex items-center justify-between cursor-pointer hover:bg-gray-50 py-2 rounded"
            @click="handleTopicClick(item.title)"
          >
            <div class="flex items-center flex-1">
              <div
                class="w-6 h-6 rounded flex items-center justify-center text-xs font-bold mr-3"
                :class="getTopicRankStyle(index)"
              >
                {{ index + 1 }}
              </div>
              <div class="flex-1">
                <div class="flex items-center">
                  <span class="text-gray-800 text-sm">{{ item.title }}</span>
                  <span
                    v-if="item.isHot"
                    class="ml-2 px-1.5 py-0.5 bg-red-500 text-white text-xs rounded"
                  >
                    热
                  </span>
                </div>
              </div>
            </div>
            <span class="text-orange-500 text-sm font-medium"
              >{{ item.views }}万</span
            >
          </div>
        </div>
      </div>

      <!-- 搜索建议 -->
      <div v-if="searchSuggestions.length > 0" class="bg-white rounded-lg p-4">
        <h3 class="text-base font-medium text-gray-800 mb-3">大家都在搜</h3>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="suggestion in searchSuggestions"
            :key="suggestion"
            class="px-3 py-1.5 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-orange-400 hover:text-orange-600 transition-colors"
            @click="
              searchQuery = suggestion;
              handleSearch();
            "
          >
            {{ suggestion }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      searchMode: "all", // 'all' 或 'ai'
      searchQuery: "",
      searchHistory: [
        "福苓湘食小馆",
        "福苓湘食",
        "夏都小镇",
        "交运绿地",
        "贵大厨炒肉",
        "南翔馒头殿融合菜",
      ],
      discoveryItems: [
        { name: "大米先生", type: "饮食" },
        { name: "华为", type: "电子产品" },
      ],
      hotTopics: [
        { title: "季贤李客村踏秋正当时", isHot: true, views: "194.8" },
        { title: "魔都闵菜拿捏秋日烟火气", isHot: true, views: "185.1" },
        { title: "暖茶浊霞终陈川茶", isHot: false, views: "162.3" },
        { title: "魔都精品茶馆推荐", isHot: false, views: "158.7" },
        { title: "秋季养生汤品大全", isHot: true, views: "145.2" },
      ],
      searchSuggestions: [
        "火锅",
        "日料",
        "川菜",
        "粤菜",
        "西餐",
        "烧烤",
        "甜品",
        "咖啡",
      ],
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        // 添加到搜索历史
        if (!this.searchHistory.includes(this.searchQuery.trim())) {
          this.searchHistory.unshift(this.searchQuery.trim());
          if (this.searchHistory.length > 10) {
            this.searchHistory.pop();
          }
        }

        // 这里可以进行实际的搜索逻辑
        console.log("搜索:", this.searchQuery, "模式:", this.searchMode);

        // 可以跳转到搜索结果页面
        this.$router.push({
          path: "/search-results",
          query: {
            q: this.searchQuery,
            mode: this.searchMode,
          },
        });
      }
    },

    handleDiscoveryClick(item) {
      this.searchQuery = item;
      this.handleSearch();
    },

    handleTopicClick(title) {
      // 处理热点话题点击
      console.log("点击热点话题:", title);
      this.searchQuery = title;
      this.handleSearch();
    },

    clearHistory() {
      this.searchHistory = [];
    },

    refreshDiscovery() {
      // 刷新搜索发现内容
      const newItems = [
        { name: "小杨生煎", type: "生煎包" },
        { name: "老娘舅", type: "卤肉饭" },
        { name: "喜茶", type: "奶茶" },
        { name: "海底捞", type: "火锅" },
      ];
      this.discoveryItems = newItems;
    },

    getTopicRankStyle(index) {
      if (index === 0) {
        return "bg-red-500 text-white";
      } else if (index === 1) {
        return "bg-orange-500 text-white";
      } else if (index === 2) {
        return "bg-yellow-500 text-white";
      } else {
        return "bg-gray-200 text-gray-600";
      }
    },
  },

  mounted() {
    // 从路由参数中获取初始搜索关键词
    const query = this.$route.query.q;
    if (query) {
      this.searchQuery = query;
    }
  },
};
</script>

<style scoped>
/* 自定义样式 */
.page-search .discovery-item:hover {
  background-color: #f9fafb;
}

.hot-topic-item:hover {
  background-color: #fef7f7;
}

/* 搜索框聚焦动画 */
input:focus {
  transform: scale(1.01);
  transition: transform 0.2s ease;
}

/* 热点话题渐变背景 */
.hot-gradient {
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
}
</style>
