<template>
  <view class="page">
    <!-- 顶部用户信息 -->
    <view class="top-bar" :style="{paddingTop: statusBarHeight + 'px'}">
      <view class="user-info-wrapper">
        <image src="/static/images/img-15.jpg" class="avatar" mode="aspectFill" />
        <view class="user-info">
          <view class="user-row">
            <text class="name">张小明</text>
            <text class="level">LV 15</text>
          </view>
          <view class="stats">关注 <text class="bold">25</text> | 粉丝 <text class="bold">560</text></view>
          <view class="coins-row">
            <text class="coin-item">唤醒币: <text class="bold">200</text></text>
            <text class="coin-item">能量币: <text class="bold">35</text></text>
          </view>
        </view>
      </view>
    </view>

    <!-- 左侧聊天提示 -->
    <view class="chat-hint" :style="{top: (statusBarHeight + 80) + 'px'}" @tap="goToCall">
      <view class="friend-avatar-wrapper">
        <image src="/static/images/img_39.jpeg" class="friend-avatar" mode="aspectFill" />
        <text class="go-text">去找ta</text>
      </view>
      <view class="message-bubble">
        <view class="msg-header">
          <text class="msg-name">李浩然</text>
          <text class="msg-time">18:20</text>
        </view>
        <text class="msg-content">偷摘你的30能量</text>
      </view>
    </view>

    <!-- 主体区域 -->
    <view class="main-content">
      <!-- 右侧工具栏 -->
      <view class="right-tools">
        <view class="tool-item" @tap="showWallet">
          <view class="tool-icon">🏅</view>
          <text class="tool-text">365</text>
        </view>
        <view class="tool-item" @tap="showGifts">
          <view class="tool-icon">🎁</view>
          <text class="tool-text">1229</text>
        </view>
        <view class="tool-item" @tap="showPosts">
          <view class="tool-icon">✏️</view>
          <text class="tool-text">1229</text>
        </view>
      </view>

      <!-- 能量树 -->
      <view class="tree-container">
        <image src="/static/images/tree.png" class="tree-img" mode="widthFix" />
        
        <!-- 能量果实 -->
        <view class="fruits-layer">
          <view class="fruit-wrapper" style="left: 17%; top: 21%;" @tap="collectFruit('赏金')">
            <view class="fruit green">
              <text class="fruit-label">赏金</text>
              <text class="fruit-timer">03:25</text>
            </view>
          </view>
          
          <view class="fruit-wrapper" style="left: 40%; top: 13%;" @tap="collectFruit('登录')">
            <view class="fruit orange">
              <text class="fruit-label">登录</text>
            </view>
            <view class="minus-badge">-10%</view>
          </view>
          
          <view class="fruit-wrapper" style="left: 57%; top: 29%;" @tap="collectFruit('动态')">
            <view class="fruit purple">
              <text class="fruit-label">动态</text>
              <text class="fruit-timer">02:16</text>
            </view>
          </view>
          
          <view class="fruit-wrapper" style="left: 70%; top: 50%;" @tap="collectFruit('唤醒')">
            <view class="fruit red">
              <text class="fruit-label">唤醒</text>
            </view>
            <view class="minus-badge">-10%</view>
          </view>
          
          <view class="fruit-wrapper" style="left: 27%; top: 42%;" @tap="collectFruit('灵兽孵化')">
            <view class="fruit blue">
              <text class="fruit-label-small">灵兽孵化</text>
              <text class="fruit-timer">10-4#</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 右下消息图标 -->
      <view class="message-icon" @tap="goToMessages">
        <view class="msg-icon-bg">
          <text class="icon-text">✉️</text>
          <view class="badge">12</view>
        </view>
      </view>
    </view>

    <!-- 底部按钮组 -->
    <view class="bottom-btns">
      <view class="small-btn" @tap="showDailyTasks">
        <text class="btn-text">每日</text>
        <text class="btn-text">任务</text>
      </view>
      
      <view class="small-btn" @tap="showFriendRanking">
        <text class="btn-text">好友</text>
        <text class="btn-text">排行</text>
      </view>
      
      <view class="shake-btn" @tap="shakeTree">
        <text class="shake-label">摇一摇</text>
        <text class="shake-countdown">{{ formattedCountdown }}</text>
        <text class="shake-remain">剩余{{ remainingShakes }}次</text>
      </view>
      
      <view class="small-btn" @tap="showEnergyItems">
        <text class="btn-text">能量</text>
        <text class="btn-text">道具</text>
      </view>
      
      <view class="small-btn" @tap="showSpiritBeast">
        <text class="btn-text">灵兽</text>
        <text class="btn-text">宇宙</text>
      </view>
    </view>

    <!-- 奖励提示 -->
    <view v-if="showReward" class="reward-toast">
      <text class="reward-icon">✨</text>
      <text class="reward-text">+{{ rewardAmount }} 能量</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 44,
      seconds: 32,
      remainingShakes: 3,
      formattedCountdown: '0:32',
      showReward: false,
      rewardAmount: 0,
      timer: null,
      running: false
    }
  },
  
  onLoad() {
    const info = uni.getSystemInfoSync()
    this.statusBarHeight = info.statusBarHeight || 44
  },
  
  onUnload() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  
  methods: {
    formatTime(s) {
      const m = Math.floor(s / 60)
      const ss = s % 60
      return `${m}:${ss.toString().padStart(2, '0')}`
    },
    
    startCountdown() {
      if (this.running) return
      
      this.running = true
      this.timer = setInterval(() => {
        this.seconds--
        this.formattedCountdown = this.formatTime(this.seconds)
        
        if (this.seconds <= 0) {
          clearInterval(this.timer)
          this.running = false
          this.remainingShakes = 3
          this.seconds = 32
          this.formattedCountdown = this.formatTime(this.seconds)
        }
      }, 1000)
    },
    
    shakeTree() {
      if (this.remainingShakes > 0 && !this.running) {
        this.remainingShakes--
        if (this.remainingShakes === 0) {
          this.startCountdown()
        }
        
        const gained = Math.floor(Math.random() * 15) + 1
        this.rewardAmount = gained
        this.showReward = true
        
        setTimeout(() => {
          this.showReward = false
        }, 1400)
      }
    },
    
    collectFruit(fruitType) {
      const messages = {
        '赏金': 15,
        '登录': 10,
        '动态': 8,
        '唤醒': 12,
        '灵兽孵化': 0
      }
      
      if (fruitType === '灵兽孵化') {
        uni.showToast({ title: '灵兽孵化中，请耐心等待...', icon: 'none' })
        return
      }
      
      this.rewardAmount = messages[fruitType] || 5
      this.showReward = true
      
      setTimeout(() => {
        this.showReward = false
      }, 2000)
    },
    
    goToCall() {
      uni.navigateTo({ url: '/pages/call/index' })
    },
    
    goToMessages() {
      uni.switchTab({ url: '/pages/messages/index' })
    },
    
    showWallet() {
      uni.navigateTo({ url: '/pages/wallet/index' })
    },
    
    showGifts() {
      uni.showToast({ title: '礼物功能开发中', icon: 'none' })
    },
    
    showPosts() {
      uni.showToast({ title: '帖子功能开发中', icon: 'none' })
    },
    
    showDailyTasks() {
      uni.navigateTo({ url: '/pages/daily/index' })
    },
    
    showFriendRanking() {
      uni.navigateTo({ url: '/pages/friend-ranking/index' })
    },
    
    showEnergyItems() {
      uni.showToast({ title: '能量道具功能开发中', icon: 'none' })
    },
    
    showSpiritBeast() {
      uni.showToast({ title: '灵兽宇宙功能开发中', icon: 'none' })
    }
  }
}
</script>

<style scoped>
/* 基础样式 */
.page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #1d7df0 0%, #79c6f9 100%);
  overflow: hidden;
  position: relative;
}

/* 顶部用户信息栏 */
.top-bar {
  position: absolute;
  top: 0;
  left: 32rpx;
  z-index: 10;
  padding: 16rpx;
  border-radius: 120rpx 0 0 120rpx;
  background: linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0));
  backdrop-filter: blur(12rpx);
}

.user-info-wrapper {
  display: flex;
  align-items: center;
  gap: 24rpx;
}

.avatar {
  width: 128rpx;
  height: 128rpx;
  border-radius: 50%;
  border: 4rpx solid rgba(255,255,255,0.5);
  box-shadow: 0 8rpx 24rpx rgba(0,0,0,0.15);
}

.user-info {
  flex: 1;
  min-width: 0;
  padding-right: 40rpx;
  color: #fff;
}

.user-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32rpx;
  margin-bottom: 8rpx;
}

.name {
  font-size: 36rpx;
  font-weight: bold;
}

.level {
  font-size: 32rpx;
  font-weight: bold;
  margin-left: 24rpx;
}

.stats {
  font-size: 24rpx;
  opacity: 0.95;
  margin-bottom: 8rpx;
}

.coins-row {
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}

.coin-item {
  font-size: 28rpx;
  opacity: 0.95;
  white-space: nowrap;
}

.bold {
  font-weight: 600;
}

/* 左侧聊天提示 */
.chat-hint {
  position: absolute;
  left: 32rpx;
  z-index: 1;
  display: flex;
  align-items: center;
}

.friend-avatar-wrapper {
  position: relative;
  z-index: 1;
}

.friend-avatar {
  width: 112rpx;
  height: 112rpx;
  border-radius: 50%;
  border: 4rpx solid #91fc4d;
}

.go-text {
  position: absolute;
  bottom: -8rpx;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24rpx;
  color: #000;
  text-shadow: 
    -3rpx -3rpx 0 #91fc4d,
    3rpx -3rpx 0 #91fc4d,
    -3rpx 3rpx 0 #91fc4d,
    3rpx 3rpx 0 #91fc4d;
  white-space: nowrap;
}

.message-bubble {
  padding: 8rpx 16rpx 8rpx 32rpx;
  background: rgba(255,255,255,0.4);
  border-radius: 0 48rpx 48rpx 8rpx;
  margin-left: -16rpx;
  color: #fff;
}

.msg-header {
  display: flex;
  align-items: center;
  gap: 16rpx;
  margin-bottom: 4rpx;
}

.msg-name {
  font-size: 24rpx;
  font-weight: 600;
}

.msg-time {
  font-size: 20rpx;
  opacity: 0.8;
}

.msg-content {
  font-size: 24rpx;
}

/* 主体区域 */
.main-content {
  position: relative;
  height: calc(100vh - 120rpx);
}

/* 右侧工具栏 */
.right-tools {
  position: absolute;
  right: 8rpx;
  top: 150rpx;
  display: flex;
  flex-direction: column;
  gap: 48rpx;
  align-items: center;
}

.tool-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.tool-icon {
  width: 112rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32rpx;
  font-size: 48rpx;
}

.tool-text {
  font-size: 24rpx;
  margin-top: 12rpx;
  color: #fff;
  font-weight: bold;
  text-shadow: 0 2rpx 6rpx rgba(0,0,0,0.3);
}

/* 能量树 */
.tree-container {
  position: absolute;
  bottom: 320rpx;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.tree-img {
  width: 100%;
  display: block;
}

.fruits-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.fruit-wrapper {
  position: absolute;
  pointer-events: auto;
}

.fruit {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: float 3s ease-in-out infinite;
  cursor: pointer;
}

.fruit.green {
  background: radial-gradient(circle at 30% 30%, #98fb98, #228b22);
  box-shadow: 0 8rpx 30rpx rgba(34, 139, 34, 0.4);
}

.fruit.orange {
  background: radial-gradient(circle at 30% 30%, #ffd700, #ff6b35);
  box-shadow: 0 8rpx 30rpx rgba(255, 107, 53, 0.4);
}

.fruit.purple {
  background: radial-gradient(circle at 30% 30%, #dda0dd, #9370db);
  box-shadow: 0 8rpx 30rpx rgba(147, 112, 219, 0.4);
}

.fruit.red {
  background: radial-gradient(circle at 30% 30%, #ffb6c1, #dc143c);
  box-shadow: 0 8rpx 30rpx rgba(220, 20, 60, 0.4);
}

.fruit.blue {
  background: radial-gradient(circle at 30% 30%, #87ceeb, #4169e1);
  box-shadow: 0 8rpx 30rpx rgba(65, 105, 225, 0.4);
}

.fruit-label, .fruit-label-small {
  font-size: 28rpx;
  font-weight: bold;
  color: #fff;
  text-align: center;
}

.fruit-label-small {
  font-size: 24rpx;
}

.fruit-timer {
  font-size: 20rpx;
  color: #fff;
  margin-top: 8rpx;
}

.minus-badge {
  position: absolute;
  top: -10rpx;
  right: -10rpx;
  background: #ff6b35;
  color: #fff;
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  font-weight: bold;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20rpx);
  }
}

/* 右下消息图标 */
.message-icon {
  position: absolute;
  right: 0;
  bottom: 320rpx;
}

.msg-icon-bg {
  position: relative;
  width: 120rpx;
  height: 100rpx;
  border-radius: 50% 0 0 50%;
  background: linear-gradient(to right, #a1e9c5, #499f9b);
  border: 4rpx solid #fff;
  border-right: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-text {
  font-size: 48rpx;
}

.badge {
  position: absolute;
  top: 8rpx;
  right: 0;
  background: #ff0000;
  color: #fff;
  font-size: 20rpx;
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.3);
  border: 4rpx solid #fff;
}

/* 底部按钮组 */
.bottom-btns {
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc(160rpx + env(safe-area-inset-bottom));
  padding: 0 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rpx;
  z-index: 10;
}

.small-btn {
  width: 124rpx;
  height: 124rpx;
  border-radius: 50%;
  background: linear-gradient(to bottom, #a1e9c5, #499f9b);
  border: 4rpx solid #fff;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8rpx 24rpx rgba(0,0,0,0.15), 0 4rpx 12rpx rgba(0,0,0,0.1), inset 0 2rpx 0 rgba(255,255,255,0.3);
}

.shake-btn {
  width: 192rpx;
  height: 192rpx;
  border-radius: 50%;
  background: linear-gradient(to bottom, #a1e9c5, #499f9b);
  border: 5rpx solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12rpx 40rpx rgba(0,0,0,0.2), 0 6rpx 20rpx rgba(0,0,0,0.15), inset 0 4rpx 0 rgba(255,255,255,0.35);
}

.btn-text {
  font-size: 24rpx;
  font-weight: 600;
  line-height: 1.3;
}

.shake-label {
  font-size: 24rpx;
  color: #fff;
  font-weight: 500;
  margin-bottom: 4rpx;
}

.shake-countdown {
  font-size: 56rpx;
  color: #fff;
  font-weight: bold;
  line-height: 1;
}

.shake-remain {
  font-size: 20rpx;
  color: rgba(255,255,255,0.9);
  margin-top: 4rpx;
}

/* 奖励提示 */
.reward-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.8);
  color: #fff;
  padding: 40rpx 80rpx;
  border-radius: 24rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s, fadeOut 0.3s 1.1s;
}

.reward-icon {
  font-size: 96rpx;
  margin-bottom: 16rpx;
}

.reward-text {
  font-size: 44rpx;
  font-weight: bold;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
