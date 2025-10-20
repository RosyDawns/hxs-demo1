<template>
  <view
    class="page"
    :style="{ paddingTop: statusBarHeight + 'px' }"
  >
    <!-- 顶部导航栏 -->
    <view class="header">
      <view class="nav-bar">
        <view class="back-btn" @tap="goBack">
          <text class="back-icon">‹</text>
        </view>
        <!-- 中间导航标签 -->
        <view class="tabs">
          <text
            v-for="tab in tabs"
            :key="tab.key"
            :class="['tab', activeTab === tab.key ? 'active' : '']"
            @tap="activeTab = tab.key"
          >{{ tab.label }}</text>
        </view>
      </view>
    </view>

    <!-- 用户信息区域（仅在打Call tab显示） -->
    <view v-if="activeTab === '打Call'" class="user-info">
      <view class="info-card">
        <image
          src="/static/images/img_38.jpeg"
          class="user-avatar"
          mode="aspectFill"
        />
        <view class="info-wrapper">
          <view class="info-text">
            <view class="name-row">
              <text class="name">张小明</text>
              <text class="badge">唤醒师</text>
            </view>
            <text class="stats">关注 <text class="bold">25</text> | 粉丝 <text class="bold">560</text></text>
          </view>
          <view class="actions">
            <view class="action-btn">
              <text class="action-icon">📞</text>
              <text class="action-label">打Call</text>
            </view>
            <view class="action-btn">
              <text class="action-icon">🎁</text>
              <text class="action-label">送礼物</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 主体：能量树（仅在打Call tab显示） -->
    <view v-if="activeTab === '打Call'" class="tree-main">
      <!-- 能量树图片 -->
      <view class="tree-container">
        <image
          src="/static/images/tree_2.png"
          class="tree-img"
          mode="widthFix"
        />

        <view class="fruits-layer">
          <!-- 登入果实 -->
          <view class="fruit-wrapper" style="left: 18%; top: 25%;">
            <view class="fruit fruit-orange" @tap="clickFruit('登入')">
              <text class="fruit-label">登入</text>
              <view class="minus-badge">-10%</view>
            </view>
          </view>

          <!-- 动态果实 -->
          <view class="fruit-wrapper" style="left: 57%; top: 32%;">
            <view class="fruit fruit-purple" @tap="clickFruit('动态')">
              <text class="fruit-label">动态</text>
              <text class="fruit-timer">02:16</text>
            </view>
          </view>

          <!-- 唤醒果实 -->
          <view class="fruit-wrapper" style="left: 73%; top: 52%;">
            <view class="fruit fruit-red" @tap="clickFruit('唤醒')">
              <text class="fruit-label">唤醒</text>
              <view class="minus-badge">-10%</view>
            </view>
          </view>

          <!-- 灵兽孵化果实 -->
          <view class="fruit-wrapper" style="left: 26%; top: 48%;">
            <view class="fruit fruit-blue" @tap="clickFruit('灵兽孵化')">
              <text class="fruit-label-small">灵兽孵化</text>
              <text class="fruit-timer">10-4#</text>
            </view>
          </view>

          <!-- 赏金果实 -->
          <view class="fruit-wrapper" style="left: 42%; top: 62%;">
            <view class="fruit fruit-green" @tap="clickFruit('赏金')">
              <text class="fruit-label">赏金</text>
              <text class="fruit-timer">03:25</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 内容区域（当选中动态、橱窗、星推官tab时显示） -->
    <view
      v-if="activeTab !== '打Call'"
      class="content-tabs"
    >
      <scroll-view scroll-y class="tab-scroll">
        <!-- 动态Tab -->
        <DynamicTab v-if="activeTab === '动态'" />
        <!-- 橱窗Tab -->
        <StoreTab v-else-if="activeTab === '橱窗'" />
        <!-- 星推官Tab -->
        <StarTab v-else-if="activeTab === '星推官'" />
      </scroll-view>
    </view>

    <!-- 底部交互区域（仅在打Call tab显示） -->
    <view
      v-if="activeTab === '打Call'"
      class="input-area"
    >
      <view class="input-wrapper">
        <!-- 语音按钮 -->
        <view class="voice-btn">
          <text class="mic-icon">🎤</text>
        </view>

        <!-- 消息输入框 -->
        <input
          v-model="messageText"
          type="text"
          placeholder="发消息"
          placeholder-style="color: #999;"
          class="message-input"
        />

        <!-- OK按钮 -->
        <view class="send-btn" @tap="sendMessage">
          <text>OK</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import DynamicTab from '@/components/DynamicTab.vue'
import StoreTab from '@/components/StoreTab.vue'
import StarTab from '@/components/StarTab.vue'

export default {
  name: 'CallPage',
  components: {
    DynamicTab,
    StoreTab,
    StarTab
  },
  data() {
    return {
      statusBarHeight: 44,
      activeTab: '打Call',
      messageText: '',
      tabs: [
        { key: '动态', label: '动态' },
        { key: '橱窗', label: '橱窗' },
        { key: '星推官', label: '星推官' },
        { key: '打Call', label: '打Call' }
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

    // 点击果实
    clickFruit(fruitType) {
      const messages = {
        '登入': '登入打Call获得 10 能量！',
        '动态': '分享动态获得 8 能量！',
        '唤醒': '唤醒好友获得 12 能量！',
        '灵兽孵化': '灵兽孵化中，请耐心等待...',
        '赏金': '恭喜你，获得 15 能量！'
      }

      uni.showToast({
        title: messages[fruitType] || '点击果实',
        icon: 'none',
        duration: 2000
      })
    },

    // 发送消息
    sendMessage() {
      if (this.messageText.trim()) {
        uni.showToast({
          title: '消息发送成功！',
          icon: 'success',
          duration: 2000
        })
        this.messageText = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* 页面基础样式 */
.page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, #1d7df0 0%, #79c6f9 100%);
}

/* 顶部导航栏 */
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  padding: 0 16rpx 32rpx;
}

.nav-bar {
  display: flex;
  align-items: center;
}

.back-btn {
  width: 72rpx;
  height: 72rpx;
  margin-right: 16rpx;
}

.back-icon {
  font-size: 64rpx;
  color: #fff;
}

.tabs {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.tab {
  padding: 16rpx 8rpx 16rpx 16rpx;
  margin-right: 16rpx;
  font-size: 32rpx;
  font-weight: 500;
  color: #fff;
}

.tab.active {
  color: #fff;
  border-bottom: 4rpx solid #fff;
}

/* 用户信息区域 */
.user-info {
  position: absolute;
  top: 176rpx;
  left: 32rpx;
  z-index: 20;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 24rpx;
  border-radius: 120rpx 0 0 120rpx;
  background: linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0));
}

.user-avatar {
  width: 128rpx;
  height: 128rpx;
  border-radius: 50%;
  object-fit: cover;
}

.info-wrapper {
  display: flex;
  align-items: center;
}

.info-text {
  margin-right: 16rpx;
}

.name-row {
  display: flex;
  align-items: center;
  gap: 16rpx;
  margin-bottom: 4rpx;
}

.name {
  font-size: 36rpx;
  font-weight: bold;
  color: #fff;
}

.badge {
  font-size: 24rpx;
  color: #fff;
  background: rgba(255,255,255,0.2);
  padding: 4rpx 16rpx;
  border-radius: 32rpx;
}

.stats {
  font-size: 24rpx;
  color: rgba(255,255,255,0.9);
}

.bold {
  font-weight: 600;
}

.actions {
  display: flex;
  align-items: center;
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40rpx;
}

.action-icon {
  font-size: 32rpx;
  margin-bottom: 4rpx;
}

.action-label {
  font-size: 20rpx;
  color: #fff;
  margin-top: 4rpx;
}

/* 主体：能量树 */
.tree-main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tree-container {
  position: relative;
  width: 100%;
}

.tree-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.fruits-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  inset: 0;
}

.fruit-wrapper {
  position: absolute;
}

/* 果实样式 */
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
  position: relative;
}

.fruit-orange {
  background: radial-gradient(circle at 30% 30%, #ffd700, #ff6b35);
  box-shadow: 0 8rpx 30rpx rgba(255, 107, 53, 0.4);
}

.fruit-purple {
  background: radial-gradient(circle at 30% 30%, #dda0dd, #9370db);
  box-shadow: 0 8rpx 30rpx rgba(147, 112, 219, 0.4);
}

.fruit-red {
  background: radial-gradient(circle at 30% 30%, #ffb6c1, #dc143c);
  box-shadow: 0 8rpx 30rpx rgba(220, 20, 60, 0.4);
}

.fruit-green {
  background: radial-gradient(circle at 30% 30%, #98fb98, #228b22);
  box-shadow: 0 8rpx 30rpx rgba(34, 139, 34, 0.4);
}

.fruit-blue {
  background: radial-gradient(circle at 30% 30%, #87ceeb, #4169e1);
  box-shadow: 0 8rpx 30rpx rgba(65, 105, 225, 0.4);
}

.fruit-label,
.fruit-label-small {
  font-size: 24rpx;
  font-weight: bold;
  color: #fff;
  text-align: center;
}

.fruit-label-small {
  font-size: 20rpx;
}

.fruit-timer {
  font-size: 18rpx;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 4rpx;
}

/* 负号标记 */
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
  font-size: 20rpx;
  font-weight: bold;
}

/* 浮动动画 */
@keyframes float {
  0% {
    transform: translateY(0rpx);
  }
  50% {
    transform: translateY(-20rpx);
  }
  100% {
    transform: translateY(0rpx);
  }
}

/* 果实点击效果 */
.fruit:active {
  transform: scale(0.88);
  transition: transform 0.1s ease;
}

/* 内容区域（当选中动态、橱窗、星推官tab时显示） */
.content-tabs {
  position: absolute;
  bottom: calc(320rpx + env(safe-area-inset-bottom));
  top: 320rpx;
  left: 0;
  right: 0;
  background: #fff;
  border-radius: 48rpx 48rpx 0 0;
  z-index: 30;
  overflow: hidden;
}

.tab-scroll {
  height: 100%;
}

/* 底部交互区域（仅在打Call tab显示） */
.input-area {
  position: absolute;
  bottom: calc(320rpx + env(safe-area-inset-bottom));
  left: 0;
  right: 0;
  z-index: 30;
  padding: 0 32rpx;
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 24rpx;
}

/* 语音按钮 */
.voice-btn {
  width: 96rpx;
  height: 96rpx;
  border-radius: 50%;
  background: #fff;
  backdrop-filter: blur(12rpx);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mic-icon {
  font-size: 40rpx;
}

/* 消息输入框 */
.message-input {
  flex: 1;
  background: #fff;
  backdrop-filter: blur(12rpx);
  border-radius: 96rpx;
  padding: 0 32rpx;
  height: 96rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
  font-size: 28rpx;
  color: #666;
}

/* OK按钮 */
.send-btn {
  width: 96rpx;
  height: 96rpx;
  border-radius: 50%;
  font-weight: bold;
  color: #fff;
  font-size: 28rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  background: linear-gradient(to right, #ff6500, #ff8534);
  box-shadow: 0 8rpx 24rpx rgba(255, 101, 0, 0.3);
}

</style>
