<template>
  <view class="page">
    <!-- 背景装饰 -->
    <view class="bg-gradient"></view>
    <view class="bg-blob blob-1"></view>
    <view class="bg-blob blob-2"></view>
    <view class="bg-blob blob-3"></view>

    <!-- 顶部导航栏 -->
    <view class="header" :style="{paddingTop: statusBarHeight + 'px'}">
      <view class="header-content">
        <view class="back-btn" @tap="goBack">
          <text>‹</text>
        </view>
        <view class="header-title">
          <text class="trophy">🏆</text>
          <text>好友排行榜</text>
        </view>
        <view class="placeholder"></view>
      </view>
    </view>

    <!-- 内容区域 -->
    <scroll-view scroll-y class="content">
      <!-- 前三名领奖台 -->
      <view class="podium">
        <view class="podium-row">
          <!-- 第二名 -->
          <view class="podium-item rank-2" v-if="friendList[1]">
            <view class="avatar-wrapper">
              <image :src="friendList[1].avatar" class="avatar-img" mode="aspectFill" />
              <view class="rank-badge silver">2</view>
            </view>
            <text class="friend-name">{{ friendList[1].name }}</text>
            <text class="friend-energy">{{ friendList[1].energy }}</text>
            <view class="podium-base base-silver">
              <text class="medal">🥈</text>
            </view>
          </view>

          <!-- 第一名 -->
          <view class="podium-item rank-1" v-if="friendList[0]">
            <view class="avatar-wrapper">
              <view class="crown-icon">👑</view>
              <image :src="friendList[0].avatar" class="avatar-img champion" mode="aspectFill" />
              <view class="rank-badge gold">1</view>
            </view>
            <text class="friend-name champion-name">{{ friendList[0].name }}</text>
            <text class="friend-energy champion-energy">{{ friendList[0].energy }}</text>
            <view class="podium-base base-gold">
              <text class="medal">🏆</text>
            </view>
          </view>

          <!-- 第三名 -->
          <view class="podium-item rank-3" v-if="friendList[2]">
            <view class="avatar-wrapper">
              <image :src="friendList[2].avatar" class="avatar-img" mode="aspectFill" />
              <view class="rank-badge bronze">3</view>
            </view>
            <text class="friend-name">{{ friendList[2].name }}</text>
            <text class="friend-energy">{{ friendList[2].energy }}</text>
            <view class="podium-base base-bronze">
              <text class="medal">🥉</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 完整排行榜 -->
      <view class="ranking-section">
        <view class="ranking-card">
          <view class="ranking-header">
            <view class="ranking-title">
              <text class="icon">📋</text>
              <text>完整排名</text>
            </view>
            <text class="ranking-count">共 {{ friendList.length }} 位好友</text>
          </view>

          <view class="ranking-list">
            <view 
              v-for="(friend, index) in friendList" 
              :key="friend.id"
              class="ranking-item"
              :class="{
                'rank-first': index === 0,
                'rank-second': index === 1,
                'rank-third': index === 2
              }"
              @tap="viewFriend(friend)"
            >
              <!-- 排名 -->
              <view class="rank-number" :class="getRankClass(index)">
                <text>{{ index + 1 }}</text>
              </view>

              <!-- 头像 -->
              <view class="friend-avatar">
                <image :src="friend.avatar" class="avatar" mode="aspectFill" />
                <text v-if="index < 3" class="star">⭐</text>
              </view>

              <!-- 用户信息 -->
              <view class="friend-info">
                <view class="info-row">
                  <text class="name">{{ friend.name }}</text>
                  <text v-if="index === 0" class="medal-icon">👑</text>
                  <text v-else-if="index === 1" class="medal-icon">🥈</text>
                  <text v-else-if="index === 2" class="medal-icon">🥉</text>
                </view>
                <view class="energy-row">
                  <text class="energy-icon">⚡</text>
                  <text class="energy-value">{{ friend.energy }}</text>
                </view>
              </view>

              <!-- 查看按钮 -->
              <view class="view-btn" :class="{
                'btn-gold': index === 0,
                'btn-silver': index === 1,
                'btn-bronze': index === 2
              }">
                <text>👁️ 查看</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 44,
      friendList: [
        { id: 1, name: '李浩然', avatar: '/static/images/img_38.jpeg', energy: 980 },
        { id: 2, name: '王小花', avatar: '/static/images/img_39.jpeg', energy: 860 },
        { id: 3, name: '张大山', avatar: '/static/images/img_38.jpeg', energy: 750 },
        { id: 4, name: '你', avatar: '/static/images/img_39.jpeg', energy: 520 },
        { id: 5, name: '赵小红', avatar: '/static/images/img_38.jpeg', energy: 480 },
        { id: 6, name: '刘明', avatar: '/static/images/img_39.jpeg', energy: 420 },
        { id: 7, name: '陈思思', avatar: '/static/images/img_39.jpeg', energy: 380 },
        { id: 8, name: '周杰', avatar: '/static/images/img_39.jpeg', energy: 320 }
      ]
    }
  },
  
  onLoad() {
    const info = uni.getSystemInfoSync()
    this.statusBarHeight = info.statusBarHeight || 44
  },
  
  methods: {
    goBack() {
      uni.navigateBack()
    },
    
    getRankClass(index) {
      if (index === 0) return 'gold'
      if (index === 1) return 'silver'
      if (index === 2) return 'bronze'
      return 'normal'
    },
    
    viewFriend(friend) {
      uni.navigateTo({ url: '/pages/call/index' })
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #f0f4f8;
  position: relative;
  overflow: hidden;
}

/* 背景装饰 */
.bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #e0f2fe 0%, #fce7f3 100%);
}

.bg-blob {
  position: absolute;
  width: 576rpx;
  height: 576rpx;
  border-radius: 50%;
  filter: blur(160rpx);
  opacity: 0.3;
  animation: blob 14s infinite;
}

.blob-1 {
  top: 0;
  left: 0;
  background: #fef08a;
}

.blob-2 {
  top: 0;
  right: 0;
  background: #ddd6fe;
  animation-delay: 4s;
}

.blob-3 {
  bottom: 0;
  left: 160rpx;
  background: #fbcfe8;
  animation-delay: 8s;
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(40rpx, -100rpx) scale(1.1);
  }
  66% {
    transform: translate(-40rpx, 40rpx) scale(0.9);
  }
}

/* 顶部导航 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20rpx);
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05);
}

.header-content {
  display: flex;
  align-items: center;
  padding: 24rpx 32rpx;
}

.back-btn {
  width: 72rpx;
  height: 72rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 56rpx;
  color: #374151;
}

.header-title {
  flex: 1;
  text-align: center;
  font-size: 36rpx;
  font-weight: bold;
  color: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rpx;
}

.trophy {
  font-size: 40rpx;
}

.placeholder {
  width: 72rpx;
}

/* 内容区域 */
.content {
  position: relative;
  z-index: 10;
  padding-top: 160rpx;
  height: 100vh;
}

/* 领奖台 */
.podium {
  padding: 48rpx 32rpx;
}

.podium-row {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 16rpx;
}

.podium-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-wrapper {
  position: relative;
  margin-bottom: 16rpx;
}

.avatar-img {
  width: 128rpx;
  height: 128rpx;
  border-radius: 50%;
  border: 8rpx solid #d1d5db;
  box-shadow: 0 8rpx 24rpx rgba(0,0,0,0.15);
}

.avatar-img.champion {
  width: 160rpx;
  height: 160rpx;
  border-color: #fbbf24;
  box-shadow: 0 12rpx 32rpx rgba(251,191,36,0.4);
}

.crown-icon {
  position: absolute;
  top: -16rpx;
  left: 50%;
  transform: translateX(-50%);
  font-size: 40rpx;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-16rpx);
  }
}

.rank-badge {
  position: absolute;
  bottom: -16rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 56rpx;
  height: 56rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 28rpx;
  font-weight: bold;
  box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.2);
}

.rank-badge.gold {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
}

.rank-badge.silver {
  background: linear-gradient(135deg, #d1d5db, #9ca3af);
}

.rank-badge.bronze {
  background: linear-gradient(135deg, #fb923c, #f97316);
}

.friend-name {
  font-size: 24rpx;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8rpx;
}

.champion-name {
  font-size: 28rpx;
  color: #1f2937;
}

.friend-energy {
  font-size: 20rpx;
  color: #6b7280;
}

.champion-energy {
  font-size: 24rpx;
  color: #f59e0b;
  font-weight: 600;
}

.podium-base {
  width: 100%;
  border-radius: 16rpx 16rpx 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16rpx;
  box-shadow: 0 8rpx 24rpx rgba(0,0,0,0.1);
}

.base-gold {
  height: 224rpx;
  background: linear-gradient(to top, #f59e0b, #fbbf24);
}

.base-silver {
  height: 160rpx;
  background: linear-gradient(to top, #9ca3af, #d1d5db);
}

.base-bronze {
  height: 128rpx;
  background: linear-gradient(to top, #f97316, #fb923c);
}

.medal {
  font-size: 48rpx;
}

.base-gold .medal {
  font-size: 60rpx;
}

/* 排行榜列表 */
.ranking-section {
  padding: 0 32rpx 32rpx;
}

.ranking-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20rpx);
  border-radius: 32rpx;
  padding: 32rpx;
  box-shadow: 0 8rpx 24rpx rgba(0,0,0,0.08);
}

.ranking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24rpx;
}

.ranking-title {
  display: flex;
  align-items: center;
  gap: 12rpx;
  font-size: 32rpx;
  font-weight: bold;
  color: #1f2937;
}

.icon {
  font-size: 32rpx;
}

.ranking-count {
  font-size: 24rpx;
  color: #6b7280;
}

.ranking-list {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.ranking-item {
  display: flex;
  align-items: center;
  padding: 24rpx;
  background: #fff;
  border: 2rpx solid #e5e7eb;
  border-radius: 24rpx;
}

.ranking-item.rank-first {
  background: linear-gradient(to right, #fef9c3, #fef3c7);
  border-color: #fbbf24;
}

.ranking-item.rank-second {
  background: linear-gradient(to right, #f3f4f6, #e5e7eb);
  border-color: #9ca3af;
}

.ranking-item.rank-third {
  background: linear-gradient(to right, #fed7aa, #fdba74);
  border-color: #fb923c;
}

.rank-number {
  width: 72rpx;
  height: 72rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  margin-right: 24rpx;
  flex-shrink: 0;
}

.rank-number.gold {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  box-shadow: 0 4rpx 16rpx rgba(251,191,36,0.4);
}

.rank-number.silver {
  background: linear-gradient(135deg, #d1d5db, #9ca3af);
  box-shadow: 0 4rpx 16rpx rgba(156,163,175,0.4);
}

.rank-number.bronze {
  background: linear-gradient(135deg, #fb923c, #f97316);
  box-shadow: 0 4rpx 16rpx rgba(249,115,22,0.4);
}

.rank-number.normal {
  background: linear-gradient(135deg, #d1d5db, #9ca3af);
}

.friend-avatar {
  position: relative;
  margin-right: 24rpx;
  flex-shrink: 0;
}

.avatar {
  width: 96rpx;
  height: 96rpx;
  border-radius: 50%;
  border: 4rpx solid #e5e7eb;
}

.rank-first .avatar {
  border-color: #fbbf24;
}

.rank-second .avatar {
  border-color: #9ca3af;
}

.rank-third .avatar {
  border-color: #fb923c;
}

.star {
  position: absolute;
  top: -8rpx;
  right: -8rpx;
  font-size: 24rpx;
}

.friend-info {
  flex: 1;
  min-width: 0;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 12rpx;
  margin-bottom: 8rpx;
}

.name {
  font-size: 28rpx;
  font-weight: 600;
  color: #1f2937;
}

.medal-icon {
  font-size: 24rpx;
}

.energy-row {
  display: flex;
  align-items: center;
  gap: 8rpx;
  font-size: 24rpx;
  color: #6b7280;
}

.energy-icon {
  color: #fbbf24;
}

.energy-value {
  font-weight: 600;
}

.view-btn {
  padding: 16rpx 32rpx;
  border-radius: 48rpx;
  font-size: 24rpx;
  font-weight: 500;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  flex-shrink: 0;
}

.btn-gold {
  background: linear-gradient(to right, #fbbf24, #f59e0b);
  color: #fff;
  box-shadow: 0 4rpx 12rpx rgba(251,191,36,0.3);
}

.btn-silver {
  background: linear-gradient(to right, #d1d5db, #9ca3af);
  color: #fff;
  box-shadow: 0 4rpx 12rpx rgba(156,163,175,0.3);
}

.btn-bronze {
  background: linear-gradient(to right, #fb923c, #f97316);
  color: #fff;
  box-shadow: 0 4rpx 12rpx rgba(249,115,22,0.3);
}
</style>
