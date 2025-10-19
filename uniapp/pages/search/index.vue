<template>
  <view class="search-page">
    <!-- 导航栏 -->
    <view class="header">
      <text class="back-btn" @tap="goBack">‹</text>
      <view class="search-box">
        <text class="search-icon">🔍</text>
        <input 
          type="text" 
          class="search-input" 
          placeholder="健身计划"
          v-model="searchQuery"
          @confirm="handleSearch"
        />
        <text v-if="searchQuery" class="clear-btn" @tap="clearSearch">✕</text>
      </view>
      <button class="search-btn" @tap="handleSearch">搜索</button>
    </view>

    <!-- 内容区域 -->
    <scroll-view scroll-y class="content">
      <!-- 搜索结果 -->
      <view v-if="showResults" class="results">
        <text class="results-title">找到 <text class="count">{{ results.length }}</text> 个结果</text>
        <view class="coach-grid">
          <view 
            v-for="coach in results" 
            :key="coach.id"
            class="coach-card"
            @tap="goToDetail(coach.id)"
          >
            <image :src="coach.pic" class="coach-pic" mode="aspectFill" />
            <view class="coach-info">
              <text class="coach-name">{{ coach.name }}</text>
              <text class="coach-skills">{{ coach.skills }}</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 默认内容 -->
      <view v-else class="default-content">
        <!-- 历史搜索 -->
        <view v-if="history.length > 0" class="section">
          <view class="section-header">
            <text class="section-title">历史搜索</text>
            <text class="clear-text" @tap="clearHistory">🗑️</text>
          </view>
          <view class="tags">
            <text 
              v-for="(item, index) in history" 
              :key="index"
              class="tag"
              @tap="searchQuery = item"
            >
              {{ item }}
            </text>
          </view>
        </view>

        <!-- 猜你喜欢 -->
        <view class="section">
          <text class="section-title">猜你喜欢</text>
          <view class="like-items">
            <text 
              v-for="item in likeItems" 
              :key="item"
              class="like-item"
              @tap="searchQuery = item"
            >
              {{ item }}
            </text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      searchQuery: '',
      showResults: false,
      history: ['健身', '减肥', '瑜伽'],
      likeItems: ['健身计划', '减脂餐', '增肌训练', '瑜伽课程', '跑步指导', '游泳教学'],
      results: []
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    handleSearch() {
      if (!this.searchQuery.trim()) return
      
      // 添加到历史
      if (!this.history.includes(this.searchQuery)) {
        this.history.unshift(this.searchQuery)
        if (this.history.length > 10) this.history.pop()
      }
      
      // 模拟搜索结果
      this.results = [
        {
          id: 1,
          name: '李教练',
          pic: '/static/images/img-18.jpg',
          skills: '健身/减脂'
        },
        {
          id: 2,
          name: '张教练',
          pic: '/static/images/img-13.jpg',
          skills: '瑜伽/塑形'
        }
      ]
      this.showResults = true
    },
    clearSearch() {
      this.searchQuery = ''
      this.showResults = false
    },
    clearHistory() {
      this.history = []
    },
    goToDetail(id) {
      uni.navigateTo({ url: `/pages/ouyang/index?id=${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/uni.scss";

.search-page {
  min-height: 100vh;
  background-color: #f8f8f8;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: calc(var(--status-bar-height) + 20rpx) 30rpx 20rpx;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 20rpx;
  z-index: 100;
}

.back-btn {
  font-size: 48rpx;
  color: #333;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 40rpx;
  padding: 0 32rpx;
  height: 72rpx;
}

.search-icon {
  margin-right: 16rpx;
  font-size: 32rpx;
}

.search-input {
  flex: 1;
  font-size: 28rpx;
}

.clear-btn {
  margin-left: 16rpx;
  font-size: 32rpx;
  color: #999;
}

.search-btn {
  padding: 16rpx 32rpx;
  background-color: #ff6b6b;
  color: #fff;
  border-radius: 40rpx;
  font-size: 28rpx;
  border: none;
  line-height: 1;
}

.content {
  margin-top: calc(var(--status-bar-height) + 140rpx);
  height: calc(100vh - var(--status-bar-height) - 140rpx);
  padding: 30rpx;
}

.results {
  .results-title {
    font-size: 32rpx;
    color: #333;
    margin-bottom: 30rpx;
    
    .count {
      color: #ff6b6b;
    }
  }
}

.coach-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24rpx;
}

.coach-card {
  background-color: #fff;
  border-radius: 16rpx;
  overflow: hidden;
}

.coach-pic {
  width: 100%;
  height: 280rpx;
}

.coach-info {
  padding: 24rpx;
}

.coach-name {
  font-size: 28rpx;
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 8rpx;
}

.coach-skills {
  font-size: 24rpx;
  color: #999;
}

.default-content {
  .section {
    margin-bottom: 48rpx;
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24rpx;
  }
  
  .section-title {
    font-size: 32rpx;
    font-weight: 600;
    color: #333;
  }
  
  .clear-text {
    font-size: 28rpx;
    color: #999;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 16rpx;
  }
  
  .tag {
    padding: 16rpx 32rpx;
    background-color: #f5f5f5;
    border-radius: 40rpx;
    font-size: 26rpx;
    color: #666;
  }
  
  .like-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24rpx;
  }
  
  .like-item {
    padding: 24rpx;
    background-color: #fff;
    border-radius: 16rpx;
    font-size: 28rpx;
    color: #333;
  }
}
</style>
