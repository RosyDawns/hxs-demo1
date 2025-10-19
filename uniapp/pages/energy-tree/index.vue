<template>
  <view class="page">
    <!-- 顶部用户信息 -->
    <view class="user-info">
      <image src="/static/images/img-15.jpg" class="avatar" mode="aspectFill" />
      <view class="user-details">
        <view class="user-name">
          <text class="name">张小明</text>
          <text class="level">LV 15</text>
        </view>
        <view class="user-stats">
          <text>关注 25 | 粉丝 560</text>
        </view>
        <view class="user-coins">
          <text>唤醒币: 200 | 能量币: 35</text>
        </view>
      </view>
    </view>

    <!-- 能量树背景 -->
    <view class="tree-container">
      <image src="/static/images/tree.png" class="tree-img" mode="widthFix" />
      
      <!-- 能量果实 -->
      <view class="fruits">
        <view class="fruit fruit-green" style="left: 17%; top: 21%;" @tap="clickFruit('赏金')">
          <text class="fruit-title">赏金</text>
          <text class="fruit-time">03:25</text>
        </view>
        <view class="fruit fruit-orange" style="left: 40%; top: 13%;" @tap="clickFruit('登录')">
          <text class="fruit-title">登录</text>
        </view>
        <view class="fruit fruit-purple" style="left: 57%; top: 29%;" @tap="clickFruit('动态')">
          <text class="fruit-title">动态</text>
          <text class="fruit-time">02:16</text>
        </view>
        <view class="fruit fruit-red" style="left: 70%; top: 50%;" @tap="clickFruit('唤醒')">
          <text class="fruit-title">唤醒</text>
        </view>
      </view>
    </view>

    <!-- 底部按钮组 -->
    <view class="bottom-btns">
      <view class="small-btn" @tap="showDailyTasks">
        <text>每日</text>
        <text>任务</text>
      </view>
      <view class="small-btn" @tap="goToRanking">
        <text>好友</text>
        <text>排行</text>
      </view>
      
      <view class="shake-btn" @tap="shakeTree">
        <text class="shake-text">摇一摇</text>
        <text class="shake-countdown">{{ countdown }}</text>
        <text class="shake-count">剩余{{ remainingShakes }}次</text>
      </view>
      
      <view class="small-btn" @tap="showEnergyItems">
        <text>能量</text>
        <text>道具</text>
      </view>
      <view class="small-btn" @tap="showSpiritBeast">
        <text>灵兽</text>
        <text>宇宙</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      countdown: '0:32',
      remainingShakes: 3,
      seconds: 32
    }
  },
  
  methods: {
    clickFruit(type) {
      const messages = {
        '赏金': '恭喜你，获得 15 能量！',
        '登录': '登录每日奖励 +10 能量！',
        '动态': '发布动态获得 8 能量！',
        '唤醒': '唤醒好友获得 12 能量！'
      }
      uni.showToast({
        title: messages[type] || '点击果实',
        icon: 'none'
      })
    },
    
    shakeTree() {
      if (this.remainingShakes > 0) {
        this.remainingShakes--
        const energy = Math.floor(Math.random() * 15) + 1
        uni.showToast({
          title: `+${energy} 能量`,
          icon: 'success'
        })
      }
    },
    
    showDailyTasks() {
      uni.showModal({
        title: '每日任务',
        content: '完成3次唤醒 +10能量\n发布动态 +10能量\n邀请好友 +20能量',
        showCancel: false
      })
    },
    
    goToRanking() {
      uni.navigateTo({ url: '/pages/friend-ranking/index' })
    },
    
    showEnergyItems() {
      uni.showToast({ title: '能量道具', icon: 'none' })
    },
    
    showSpiritBeast() {
      uni.showToast({ title: '灵兽宇宙', icon: 'none' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/uni.scss";

.page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #1d4ed8 0%, #60a5fa 60%, #a9d0fe 100%);
  position: relative;
  overflow: hidden;
  padding-bottom: 120rpx;
}

/* 用户信息 */
.user-info {
  position: absolute;
  top: calc(var(--status-bar-height) + 20rpx);
  left: 30rpx;
  right: 30rpx;
  z-index: 100;
  display: flex;
  align-items: center;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.2), transparent);
  border-radius: 50rpx 0 0 50rpx;
  padding: 20rpx;
}

.avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  border: 4rpx solid rgba(255, 255, 255, 0.5);
}

.user-details {
  flex: 1;
  margin-left: 24rpx;
  color: white;
}

.user-name {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}

.name {
  font-size: 36rpx;
  font-weight: bold;
  margin-right: 20rpx;
}

.level {
  font-size: 28rpx;
  font-weight: bold;
}

.user-stats, .user-coins {
  font-size: 24rpx;
  opacity: 0.95;
  margin-bottom: 8rpx;
}

/* 能量树 */
.tree-container {
  position: absolute;
  bottom: 320rpx;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

.tree-img {
  width: 100%;
}

/* 果实 */
.fruits {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.fruit {
  position: absolute;
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24rpx;
  animation: float 3s ease-in-out infinite;
  
  &.fruit-green {
    background: radial-gradient(circle at 30% 30%, #98fb98, #228b22);
    box-shadow: 0 8rpx 30rpx rgba(34, 139, 34, 0.4);
  }
  
  &.fruit-orange {
    background: radial-gradient(circle at 30% 30%, #ffd700, #ff6b35);
    box-shadow: 0 8rpx 30rpx rgba(255, 107, 53, 0.4);
  }
  
  &.fruit-purple {
    background: radial-gradient(circle at 30% 30%, #dda0dd, #9370db);
    box-shadow: 0 8rpx 30rpx rgba(147, 112, 219, 0.4);
  }
  
  &.fruit-red {
    background: radial-gradient(circle at 30% 30%, #ffb6c1, #dc143c);
    box-shadow: 0 8rpx 30rpx rgba(220, 20, 60, 0.4);
  }
}

.fruit-title {
  font-size: 28rpx;
  font-weight: bold;
  display: block;
}

.fruit-time {
  font-size: 20rpx;
  display: block;
  margin-top: 8rpx;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20rpx); }
}

/* 底部按钮 */
.bottom-btns {
  position: fixed;
  bottom: calc(100rpx + env(safe-area-inset-bottom));
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20rpx;
  padding: 0 30rpx;
}

.small-btn {
  width: 124rpx;
  height: 124rpx;
  border-radius: 50%;
  background: linear-gradient(to bottom, #a1e9c5, #499f9b);
  border: 4rpx solid white;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  font-weight: bold;
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.15);
}

.shake-btn {
  width: 192rpx;
  height: 192rpx;
  border-radius: 50%;
  background: linear-gradient(to bottom, #a1e9c5, #499f9b);
  border: 5rpx solid white;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12rpx 40rpx rgba(0, 0, 0, 0.2);
}

.shake-text {
  font-size: 24rpx;
  margin-bottom: 8rpx;
}

.shake-countdown {
  font-size: 48rpx;
  font-weight: bold;
}

.shake-count {
  font-size: 20rpx;
  opacity: 0.9;
  margin-top: 8rpx;
}
</style>
