<template>
  <div class="page bg-gray-50 min-h-screen" id="page-search-results">
    <!-- 顶部搜索栏 -->
    <header
      class="sticky top-0 z-50 bg-white px-4 py-3 border-b border-gray-100"
    >
      <div class="flex items-center space-x-3">
        <button @click="$router.back()" class="text-black">
          <i class="fa-solid fa-chevron-left text-lg"></i>
        </button>
        <div class="flex-1 relative">
          <input
            v-model="searchQuery"
            type="text"
            class="w-full bg-gray-100 rounded-full pl-4 pr-16 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-colors text-sm"
            @keyup.enter="handleSearch"
          />
          <button
            class="absolute right-1 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm"
            @click="handleSearch"
          >
            搜索
          </button>
        </div>
      </div>
    </header>

    <!-- 搜索结果 -->
    <div class="px-4 py-4">
      <div class="mb-4">
        <span class="text-gray-600 text-sm">
          为您找到
          <span class="text-orange-500 font-medium">{{ totalResults }}</span>
          条相关结果
          <span v-if="searchMode === 'ai'" class="text-blue-500 ml-2"
            >(AI智能搜索)</span
          >
        </span>
      </div>

      <!-- 搜索结果列表 -->
      <div class="space-y-4">
        <HxsItem
          v-for="result in searchResults"
          :key="result.id"
          :coach="result"
          class-name="bg-white"
          @view-profile="handleResultClick"
        />
      </div>

      <!-- 加载更多 -->
      <div v-if="hasMore" class="text-center mt-6">
        <button
          class="px-6 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
          @click="loadMore"
          :disabled="loading"
        >
          {{ loading ? "加载中..." : "加载更多" }}
        </button>
      </div>

      <!-- 无结果提示 -->
      <div
        v-if="searchResults.length === 0 && !loading"
        class="text-center py-8"
      >
        <div class="text-gray-400 mb-4">
          <i class="fa-solid fa-search text-4xl"></i>
        </div>
        <p class="text-gray-500 mb-2">未找到相关结果</p>
        <p class="text-sm text-gray-400">试试其他关键词吧</p>
      </div>
    </div>
  </div>
</template>

<script>
import HxsItem from "@/components/hxs-item.vue";

export default {
  name: "SearchResultsPage",
  components: {
    HxsItem,
  },
  data() {
    return {
      searchQuery: "",
      searchMode: "all",
      loading: false,
      hasMore: true,
      totalResults: 0,
      searchResults: [],
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        this.loading = true;
        this.mockSearch();
      }
    },

    handleResultClick(coachId) {
      // 跳转到教练详情页面（欧阳老师页面作为示例）
      this.$router.push("/ouyang");
    },

    loadMore() {
      if (this.hasMore && !this.loading) {
        this.loading = true;
        setTimeout(() => {
          // 模拟加载更多数据
          const moreResults = this.generateMockResults(
            5,
            this.searchResults.length
          );
          this.searchResults.push(...moreResults);
          this.loading = false;
          if (this.searchResults.length >= 20) {
            this.hasMore = false;
          }
        }, 1000);
      }
    },

    mockSearch() {
      setTimeout(() => {
        // 模拟搜索结果
        this.searchResults = this.generateMockResults(10);
        this.totalResults = Math.floor(Math.random() * 500) + 50;
        this.loading = false;
        this.hasMore = this.searchResults.length > 0;
      }, 1000);
    },

    generateMockResults(count, startId = 0) {
      const categories = [
        "游泳唤醒师",
        "健身判练",
        "瑜伽老师",
        "足浴按摩",
        "美发师",
        "书法老师",
        "烹饰师",
        "音乐老师",
      ];
      const locations = [
        "浦东新区",
        "黄浦区",
        "徐汇区",
        "长宁区",
        "静安区",
        "普陀区",
      ];
      const names = [
        "李老师",
        "王教练",
        "张师父",
        "赵导师",
        "陈老师",
        "刘教练",
        "郑师父",
        "马导师",
      ];
      const titles = [
        "专业游泳教练",
        "资深健身指导",
        "瑜伽认证教师",
        "中医按摩师",
        "高级美发师",
        "书法家",
        "中式烹饰大师",
        "钢琴演奏家",
      ];
      const results = [];

      for (let i = 0; i < count; i++) {
        const id = startId + i + 1;
        const category =
          categories[Math.floor(Math.random() * categories.length)];
        const name = names[Math.floor(Math.random() * names.length)];
        const title = titles[Math.floor(Math.random() * titles.length)];
        const rating = 4.0 + Math.random() * 1.0;

        results.push({
          id: id,
          name: `${name}`,
          title: title,
          category: category,
          location: locations[Math.floor(Math.random() * locations.length)],
          rating: parseFloat(rating.toFixed(1)),
          distance: (Math.random() * 10 + 0.5).toFixed(1),
          image: `https://picsum.photos/id/${1000 + i}/200/200`,
          qualification: category,
          prices: {
            trial: Math.floor(Math.random() * 100) + 50,
            single: Math.floor(Math.random() * 200) + 100,
            tenPack: Math.floor(Math.random() * 1500) + 800,
          },
        });
      }

      return results;
    },
  },

  mounted() {
    // 从路由参数中获取搜索关键词和搜索模式
    const query = this.$route.query.q;
    const mode = this.$route.query.mode || "all";

    if (query) {
      this.searchQuery = query;
      this.searchMode = mode;
      this.handleSearch();
    }
  },

  watch: {
    "$route.query": {
      handler(newQuery) {
        if (newQuery.q && newQuery.q !== this.searchQuery) {
          this.searchQuery = newQuery.q;
          this.searchMode = newQuery.mode || "all";
          this.handleSearch();
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
/* 加载动画 */
.loading-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
