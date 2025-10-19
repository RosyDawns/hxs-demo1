<template>
  <view class="chat-page">
    <!-- 导航栏 -->
    <view class="header">
      <text class="back-btn" @tap="goBack">‹</text>
      <view class="user-info">
        <image :src="avatarUrl" class="avatar" mode="aspectFill" />
        <text class="username">{{ chatUsername }}</text>
      </view>
      <view class="actions">
        <text class="action-btn">📹</text>
        <text class="action-btn">📞</text>
      </view>
    </view>

    <!-- 消息列表 -->
    <scroll-view scroll-y class="messages" :scroll-into-view="scrollToView">
      <!-- 时间标签 -->
      <view class="time-tag">
        <text class="time-text">今天 14:30</text>
      </view>

      <!-- 对方消息 -->
      <view class="message-item other">
        <image :src="avatarUrl" class="message-avatar" mode="aspectFill" />
        <view class="message-content">
          <view class="message-bubble other-bubble">
            <text class="message-text">你好，我看到你对我的课程感兴趣，有什么想了解的吗？</text>
          </view>
          <text class="message-time">14:30</text>
        </view>
      </view>

      <view class="message-item other">
        <image :src="avatarUrl" class="message-avatar" mode="aspectFill" />
        <view class="message-content">
          <view class="message-bubble other-bubble">
            <text class="message-text">我们的课程都是小班教学，注重个性化指导</text>
          </view>
          <text class="message-time">14:31</text>
        </view>
      </view>

      <view class="message-item other">
        <image :src="avatarUrl" class="message-avatar" mode="aspectFill" />
        <view class="message-content">
          <view class="message-bubble other-bubble">
            <text class="message-text">可以根据你的时间和需求来安排课程</text>
          </view>
          <text class="message-time">14:32</text>
        </view>
      </view>

      <!-- 我的消息 -->
      <view class="message-item mine">
        <view class="message-content">
          <view class="message-bubble mine-bubble">
            <text class="message-text">你好，我想了解一下课程的具体内容和价格</text>
          </view>
          <text class="message-time">14:33</text>
        </view>
        <image :src="myAvatar" class="message-avatar" mode="aspectFill" />
      </view>
    </scroll-view>

    <!-- 输入框 -->
    <view class="input-area">
      <input 
        type="text" 
        class="message-input" 
        placeholder="输入消息..."
        v-model="messageText"
        @confirm="sendMessage"
      />
      <button class="send-btn" @tap="sendMessage">📤</button>
    </view>
  </view>
</template>

<script>
export default {
  name: "ChatPage",
  data() {
    return {
      chatUsername: '',
      avatarUrl: '/static/images/img-37.jpg',
      myAvatar: '/static/images/img-12.jpg',
      messageText: '',
      scrollToView: ''
    }
  },
  onLoad() {
    const username = uni.getStorageSync('chatUsername')
    if (username) {
      this.chatUsername = username
      
      // 根据用户名设置头像
      if (username.includes('李教练')) {
        this.avatarUrl = '/static/images/img-20.jpg'
      } else if (username.includes('张')) {
        this.avatarUrl = '/static/images/img-21.jpg'
      } else if (username.includes('王')) {
        this.avatarUrl = '/static/images/img-22.jpg'
      }
    } else {
      this.chatUsername = '聊天'
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    sendMessage() {
      if (!this.messageText.trim()) return
      
      // 这里可以添加发送消息的逻辑
      console.log('发送消息:', this.messageText)
      this.messageText = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/uni.scss";

.chat-page {
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: calc(var(--status-bar-height) + 20rpx) 30rpx 20rpx;
  background-color: #fff;
  border-bottom: 1rpx solid #f0f0f0;
  display: flex;
  align-items: center;
  z-index: 100;
}

.back-btn {
  font-size: 48rpx;
  color: #333;
  margin-right: 20rpx;
}

.user-info {
  flex: 1;
  display: flex;
  align-items: center;
}

.avatar {
  width: 64rpx;
  height: 64rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}

.username {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
}

.actions {
  display: flex;
  gap: 32rpx;
}

.action-btn {
  font-size: 40rpx;
}

.messages {
  flex: 1;
  padding: calc(var(--status-bar-height) + 140rpx) 30rpx 180rpx;
}

.time-tag {
  display: flex;
  justify-content: center;
  margin: 40rpx 0;
}

.time-text {
  padding: 8rpx 24rpx;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20rpx;
  font-size: 24rpx;
  color: #999;
}

.message-item {
  display: flex;
  margin-bottom: 32rpx;
  
  &.other {
    justify-content: flex-start;
  }
  
  &.mine {
    justify-content: flex-end;
  }
}

.message-avatar {
  width: 72rpx;
  height: 72rpx;
  border-radius: 50%;
  flex-shrink: 0;
}

.message-content {
  max-width: 70%;
}

.other .message-avatar {
  margin-right: 20rpx;
}

.mine .message-avatar {
  margin-left: 20rpx;
}

.message-bubble {
  padding: 20rpx 28rpx;
  border-radius: 16rpx;
  margin-bottom: 8rpx;
}

.other-bubble {
  background-color: #fff;
  border-top-left-radius: 4rpx;
}

.mine-bubble {
  background-color: #ff6b6b;
  border-top-right-radius: 4rpx;
}

.message-text {
  font-size: 28rpx;
  line-height: 1.5;
}

.other-bubble .message-text {
  color: #333;
}

.mine-bubble .message-text {
  color: #fff;
}

.message-time {
  font-size: 22rpx;
  color: #999;
  display: block;
  padding: 0 8rpx;
}

.mine .message-time {
  text-align: right;
}

.input-area {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20rpx 30rpx;
  padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
  background-color: #fff;
  border-top: 1rpx solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.message-input {
  flex: 1;
  padding: 20rpx 32rpx;
  background-color: #f5f5f5;
  border-radius: 40rpx;
  font-size: 28rpx;
}

.send-btn {
  width: 72rpx;
  height: 72rpx;
  background-color: #ff6b6b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40rpx;
  border: none;
  padding: 0;
  margin: 0;
  line-height: 1;
}
</style>
