<template>
  <div class="page bg-gray-50 min-h-screen" id="page-search-results">
    <!-- 顶部搜索栏 -->
    <header class="sticky top-0 z-50 bg-white px-4 py-3 border-b border-gray-100">
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
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm"
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
          为您找到 <span class="text-orange-500 font-medium">{{ totalResults }}</span> 条相关结果
          <span v-if="searchMode === 'ai'" class="text-blue-500 ml-2">(AI智能搜索)</span>
        </span>
      </div>

      <!-- 搜索结果列表 -->
      <div class="space-y-4">
        <div
          v-for="result in searchResults"
          :key="result.id"
          class="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
          @click="handleResultClick(result)"
        >
          <div class="flex items-start space-x-3">
            <img
              :src="result.image"
              :alt="result.title"
              class="w-16 h-16 rounded-lg object-cover"
              @error="handleImageError"
            />
            <div class="flex-1">
              <h3 class="font-medium text-gray-800 mb-1">{{ result.title }}</h3>
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>{{ result.category }}</span>
                <span class="mx-2">·</span>
                <span>{{ result.location }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="flex items-center">
                    <i class="fa-solid fa-star text-yellow-400 text-sm"></i>
                    <span class="text-sm ml-1">{{ result.rating }}</span>
                  </div>
                  <span class="text-sm text-gray-400">({{ result.reviews }}条评价)</span>
                </div>
                <div v-if="result.price" class="text-orange-500 font-medium text-sm">
                  ¥{{ result.price }}起
                </div>
              </div>
              <div v-if="result.tags && result.tags.length" class="mt-2 flex flex-wrap gap-1">
                <span
                  v-for="tag in result.tags.slice(0, 3)"
                  :key="tag"
                  class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 加载更多 -->
      <div v-if="hasMore" class="text-center mt-6">
        <button
          class="px-6 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
          @click="loadMore"
          :disabled="loading"
        >
          {{ loading ? '加载中...' : '加载更多' }}
        </button>
      </div>

      <!-- 无结果提示 -->
      <div v-if="searchResults.length === 0 && !loading" class="text-center py-8">
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
export default {
  name: 'SearchResultsPage',
  data() {
    return {
      searchQuery: '',
      searchMode: 'all',
      loading: false,
      hasMore: true,
      totalResults: 0,
      searchResults: []
    }
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        this.loading = true
        this.mockSearch()
      }
    },
    
    handleResultClick(result) {
      // 根据结果类型跳转到不同页面
      if (result.type === 'teacher') {
        this.$router.push(`/teacher-detail/${result.id}`)
      } else if (result.type === 'service') {
        this.$router.push(`/service-detail/${result.id}`)
      } else {
        this.$router.push(`/product-detail/${result.id}`)
      }
    },
    
    handleImageError(event) {
      // 图片加载失败时显示默认图片
      event.target.src = '/images/default-placeholder.png'
    },
    
    loadMore() {
      if (this.hasMore && !this.loading) {
        this.loading = true
        setTimeout(() => {
          // 模拟加载更多数据
          const moreResults = this.generateMockResults(5, this.searchResults.length)
          this.searchResults.push(...moreResults)
          this.loading = false
          if (this.searchResults.length >= 20) {
            this.hasMore = false
          }
        }, 1000)
      }
    },
    
    mockSearch() {
      setTimeout(() => {
        // 模拟搜索结果
        this.searchResults = this.generateMockResults(10)
        this.totalResults = Math.floor(Math.random() * 500) + 50
        this.loading = false
        this.hasMore = this.searchResults.length > 0
      }, 1000)
    },
    
    generateMockResults(count, startId = 0) {
      const categories = ['餐厅', '按摩', '美发', '健身', '瑜伽', '足浴', '茶艺', '咖啡']
      const locations = ['浦东新区', '黄浦区', '徐汇区', '长宁区', '静安区', '普陀区']
      const results = []
      
      for (let i = 0; i < count; i++) {
        const id = startId + i + 1
        const category = categories[Math.floor(Math.random() * categories.length)]
        results.push({
          id: id,
          title: `${this.searchQuery || '搜索结果'}相关商家 ${id}`,
          category: category,
          location: locations[Math.floor(Math.random() * locations.length)],
          rating: (4.0 + Math.random() * 1.0).toFixed(1),
          reviews: Math.floor(Math.random() * 500) + 10,
          price: category === '餐厅' ? Math.floor(Math.random() * 200) + 50 : Math.floor(Math.random() * 300) + 100,
          image: `@images/placeholder-${(i % 5) + 1}.jpg`,
          tags: ['优质服务', '环境优雅', '价格实惠'].slice(0, Math.floor(Math.random() * 3) + 1),
          type: Math.random() > 0.5 ? 'teacher' : 'service'
        })
      }
      
      return results
    }
  },
  
  mounted() {
    // 从路由参数中获取搜索关键词和搜索模式
    const query = this.$route.query.q
    const mode = this.$route.query.mode || 'all'
    
    if (query) {
      this.searchQuery = query
      this.searchMode = mode
      this.handleSearch()
    }
  },
  
  watch: {
    '$route.query': {
      handler(newQuery) {
        if (newQuery.q && newQuery.q !== this.searchQuery) {
          this.searchQuery = newQuery.q
          this.searchMode = newQuery.mode || 'all'
          this.handleSearch()
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
/* 加载动画 */
.loading-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 结果项悬停效果 */
.search-result-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 图片占位符样式 */
.image-placeholder {
  background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
              linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
</style>