<template>
  <view class="page">
    <view class="search-header">
      <view class="search-bar">
        <text class="back-btn" @tap="goBack">›</text>
        <input
          v-model="searchQuery"
          class="search-input"
          placeholder="搜索"
          @confirm="handleSearch"
        />
        <button class="search-btn" @tap="handleSearch">搜索</button>
      </view>
    </view>

    <view class="result-info">
      <text class="result-count">
        为您找到 <text class="highlight">{{ totalResults }}</text> 条相关结果
      </text>
    </view>

    <view class="result-list" v-if="searchResults.length > 0">
      <view
        v-for="result in searchResults"
        :key="result.id"
        class="result-item"
        @tap="handleResultClick(result.id)"
      >
        <image :src="result.image" class="result-image" mode="aspectFill" />
        <view class="result-info-box">
          <view class="result-header">
            <text class="result-name">{{ result.name }}</text>
            <view class="rating">
              <text class="star">★</text>
              <text class="rating-text">{{ result.rating }}</text>
            </view>
          </view>
          <text class="result-title">{{ result.title }}</text>
          <text class="result-category">{{ result.category }}</text>
          <view class="result-footer">
            <text class="distance">距离 {{ result.distance }}km</text>
            <view class="price-box">
              <text class="price-label">体验课</text>
              <text class="price">￥{{ result.prices.trial }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="empty" v-else>
      <text class="empty-icon">🔍</text>
      <text class="empty-text">未找到相关结果</text>
      <text class="empty-hint">试试其他关键词吧</text>
    </view>

    <view class="load-more" v-if="hasMore && searchResults.length > 0">
      <button class="load-btn" @tap="loadMore" :disabled="loading">
        {{ loading ? "加载中..." : "加载更多" }}
      </button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      loading: false,
      hasMore: true,
      totalResults: 0,
      searchResults: [],
    };
  },
  onLoad(options) {
    if (options.q) {
      this.searchQuery = options.q;
      this.handleSearch();
    }
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    handleSearch() {
      if (this.searchQuery.trim()) {
        this.loading = true;
        this.mockSearch();
      }
    },
    handleResultClick(id) {
      uni.navigateTo({ url: "/pages/ouyang/index" });
    },
    loadMore() {
      if (this.hasMore && !this.loading) {
        this.loading = true;
        setTimeout(() => {
          const moreResults = this.generateMockResults(5, this.searchResults.length);
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
        this.searchResults = this.generateMockResults(10);
        this.totalResults = Math.floor(Math.random() * 500) + 50;
        this.loading = false;
        this.hasMore = this.searchResults.length > 0;
      }, 1000);
    },
    generateMockResults(count, startId = 0) {
      const categories = ["游泳教练", "健身教练", "瑜伽老师", "按摩师"];
      const names = ["李老师", "王教练", "张师父", "赵老师"];
      const results = [];

      for (let i = 0; i < count; i++) {
        const id = startId + i + 1;
        results.push({
          id: id,
          name: names[Math.floor(Math.random() * names.length)],
          title: "专业教练，经验丰富",
          category: categories[Math.floor(Math.random() * categories.length)],
          rating: (4.0 + Math.random() * 1.0).toFixed(1),
          distance: (Math.random() * 10 + 0.5).toFixed(1),
          image: `https://picsum.photos/id/${1000 + i}/100/100`,
          prices: { trial: Math.floor(Math.random() * 100) + 50 },
        });
      }
      return results;
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.search-header {
  background: white;
  padding: 24rpx;
  border-bottom: 2rpx solid #f0f0f0;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.back-btn {
  font-size: 48rpx;
  color: #333;
  padding: 0 8rpx;
  transform: rotate(180deg);
}

.search-input {
  flex: 1;
  background: #f5f5f5;
  border-radius: 50rpx;
  padding: 16rpx 32rpx;
  font-size: 28rpx;
}

.search-btn {
  background: #ff6b6b;
  color: white;
  border-radius: 50rpx;
  padding: 16rpx 32rpx;
  font-size: 26rpx;
  border: none;
}

.result-info {
  padding: 24rpx;
}

.result-count {
  font-size: 26rpx;
  color: #666;
}

.highlight {
  color: #ff6b6b;
  font-weight: bold;
}

.result-list {
  padding: 0 24rpx 24rpx;
}

.result-item {
  background: white;
  border-radius: 24rpx;
  padding: 24rpx;
  margin-bottom: 24rpx;
  display: flex;
  gap: 24rpx;
}

.result-image {
  width: 160rpx;
  height: 160rpx;
  border-radius: 16rpx;
  flex-shrink: 0;
}

.result-info-box {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8rpx;
}

.result-name {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4rpx;
}

.star {
  color: #ffa500;
  font-size: 28rpx;
}

.rating-text {
  font-size: 24rpx;
  color: #666;
}

.result-title {
  font-size: 26rpx;
  color: #666;
  margin-bottom: 8rpx;
}

.result-category {
  font-size: 24rpx;
  color: #ff6b6b;
  margin-bottom: 16rpx;
}

.result-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.distance {
  font-size: 24rpx;
  color: #999;
}

.price-box {
  display: flex;
  align-items: baseline;
  gap: 8rpx;
}

.price-label {
  font-size: 20rpx;
  color: #999;
}

.price {
  font-size: 32rpx;
  font-weight: bold;
  color: #ff6b6b;
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 200rpx 0;
}

.empty-icon {
  font-size: 120rpx;
  margin-bottom: 24rpx;
}

.empty-text {
  font-size: 32rpx;
  color: #666;
  margin-bottom: 16rpx;
}

.empty-hint {
  font-size: 26rpx;
  color: #999;
}

.load-more {
  padding: 24rpx;
  text-align: center;
}

.load-btn {
  background: #f5f5f5;
  color: #666;
  border-radius: 50rpx;
  padding: 20rpx 64rpx;
  font-size: 26rpx;
  border: none;
}
</style>
