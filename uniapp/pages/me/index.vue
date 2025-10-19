<template>
  <view class="page">
    <!-- 顶部栏 -->
    <view class="header">
      <button class="add-friends-btn" @tap="goToAddFriends">
        <text class="btn-icon">👤+</text>
        <text>添加好友</text>
      </button>
    </view>

    <!-- 用户信息区 -->
    <view class="user-section">
      <view class="user-profile">
        <image src="/static/images/img-15.jpg" class="avatar" mode="aspectFill" />
        <view class="user-info">
          <view class="user-name">
            <text class="name">张小明</text>
            <text class="gender">♂</text>
          </view>
          <text class="user-id">唤醒兽ID: 123456789</text>
          <view class="user-stats">
            <text><text class="stat-num">982</text> 粉丝</text>
            <text><text class="stat-num">1780</text> 关注</text>
            <text><text class="stat-num">1563</text> 收藏</text>
          </view>
        </view>
        <view class="settings-btn" @tap="goToSettings">
          <text>⚙️</text>
        </view>
      </view>

      <!-- 标签 -->
      <view class="tags">
        <text class="tag">上海</text>
        <text class="tag">实名认证</text>
        <text class="tag">技能派</text>
        <text class="tag">到店服务</text>
      </view>
    </view>

    <!-- 功能卡片区 -->
    <view class="func-card">
      <view class="func-grid">
        <view class="func-item" @tap="goToOrders">
          <text class="func-icon">📄</text>
          <text class="func-text">订单</text>
        </view>
        <view class="func-item" @tap="goToFavorites">
          <text class="func-icon">⭐</text>
          <text class="func-text">收藏</text>
        </view>
        <view class="func-item" @tap="goToPendingReview">
          <text class="func-icon">💬</text>
          <text class="func-text">待评价</text>
        </view>
        <view class="func-item" @tap="goToReviews">
          <text class="func-icon">✅</text>
          <text class="func-text">真实评价</text>
        </view>
      </view>
    </view>

    <!-- 全部功能 -->
    <view class="all-func-card">
      <view class="card-header">
        <text class="card-title">全部功能</text>
        <text class="more-icon">›</text>
      </view>
      <view class="func-grid">
        <view class="func-item" @tap="goToWallet">
          <text class="func-icon">💰</text>
          <text class="func-text">我的钱包</text>
        </view>
        <view class="func-item" @tap="goToRegisterWaker">
          <text class="func-icon">✓</text>
          <text class="func-text">注册唤醒师</text>
        </view>
        <view class="func-item" @tap="goToAlliance">
          <text class="func-icon">🔷</text>
          <text class="func-text">唤醒联盟</text>
        </view>
        <view class="func-item" @tap="goToTeam">
          <text class="func-icon">👥</text>
          <text class="func-text">醒狮团队</text>
        </view>
      </view>
    </view>

    <!-- Tab 切换 -->
    <view class="tabs-section">
      <view class="tabs">
        <view 
          v-for="(tab, index) in tabs" 
          :key="index"
          class="tab-item"
          :class="{ 'tab-active': activeTab === index }"
          @tap="activeTab = index"
        >
          {{ tab }}
        </view>
      </view>

      <!-- 内容区 -->
      <view class="content-area">
        <view class="empty-tip">
          <text>{{ tabs[activeTab] }}内容为空</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: ['动态', '关注', '橱窗', '推荐橱窗']
    }
  },
  
  methods: {
    goToAddFriends() {
      uni.navigateTo({ url: '/pages/add-friends/index' })
    },
    
    goToSettings() {
      uni.navigateTo({ url: '/pages/settings/index' })
    },
    
    goToOrders() {
      uni.navigateTo({ url: '/pages/my-orders/index' })
    },
    
    goToFavorites() {
      uni.navigateTo({ url: '/pages/favorites/index' })
    },
    
    goToPendingReview() {
      uni.navigateTo({ url: '/pages/pending-review/index' })
    },
    
    goToReviews() {
      uni.navigateTo({ url: '/pages/my-reviews/index' })
    },
    
    goToWallet() {
      uni.navigateTo({ url: '/pages/wallet/index' })
    },
    
    goToRegisterWaker() {
      uni.navigateTo({ url: '/pages/register-waker/index' })
    },
    
    goToAlliance() {
      uni.navigateTo({ url: '/pages/waker-alliance/index' })
    },
    
    goToTeam() {
      uni.navigateTo({ url: '/pages/team/index' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/uni.scss";

.page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #fae9de, #fff);
  padding-bottom: 120rpx;
}

/* 顶部栏 */
.header {
  padding: calc(var(--status-bar-height) + 30rpx) 30rpx 30rpx;
}

.add-friends-btn {
  display: flex;
  align-items: center;
  padding: 16rpx 30rpx;
  border: 2rpx solid $uni-border-color;
  border-radius: 50rpx;
  background-color: white;
  font-size: 28rpx;
  
  .btn-icon {
    margin-right: 12rpx;
  }
}

/* 用户信息 */
.user-section {
  padding: 0 30rpx 30rpx;
}

.user-profile {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30rpx;
}

.avatar {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  border: 4rpx solid $uni-border-color;
}

.user-info {
  flex: 1;
  margin-left: 24rpx;
}

.user-name {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}

.name {
  font-size: 40rpx;
  font-weight: bold;
  margin-right: 16rpx;
}

.gender {
  font-size: 32rpx;
  color: #4a9fff;
}

.user-id {
  font-size: 24rpx;
  color: $uni-text-color-grey;
  display: block;
  margin-bottom: 20rpx;
}

.user-stats {
  display: flex;
  gap: 40rpx;
  font-size: 24rpx;
  color: $uni-text-color-grey;
}

.stat-num {
  color: $uni-text-color;
  font-weight: bold;
  margin-right: 8rpx;
}

.settings-btn {
  font-size: 40rpx;
  padding: 8rpx;
}

/* 标签 */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 20rpx;
}

.tag {
  background-color: $uni-bg-color-grey;
  color: $uni-text-color-grey;
  font-size: 24rpx;
  padding: 12rpx 30rpx;
  border-radius: 50rpx;
}

/* 功能卡片 */
.func-card, .all-func-card {
  background-color: white;
  border-radius: 32rpx;
  padding: 40rpx;
  margin: 0 30rpx 30rpx;
  box-shadow: $uni-shadow-sm;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30rpx;
}

.card-title {
  font-size: 28rpx;
  font-weight: bold;
}

.more-icon {
  font-size: 40rpx;
  color: $uni-text-color-grey;
}

.func-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40rpx;
  text-align: center;
}

.func-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.func-icon {
  font-size: 48rpx;
  margin-bottom: 16rpx;
}

.func-text {
  font-size: 24rpx;
  color: $uni-text-color;
}

/* Tab 切换 */
.tabs-section {
  background-color: white;
  border-radius: 32rpx 32rpx 0 0;
  margin: 0 30rpx;
  padding: 30rpx;
}

.tabs {
  display: flex;
  border-bottom: 2rpx solid $uni-border-color;
}

.tab-item {
  padding: 24rpx 40rpx;
  font-size: 28rpx;
  color: $uni-text-color-grey;
  position: relative;
  
  &.tab-active {
    color: $uni-color-primary;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4rpx;
      background-color: $uni-color-primary;
    }
  }
}

.content-area {
  min-height: 400rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-tip {
  color: $uni-text-color-grey;
  font-size: 28rpx;
}
</style>
