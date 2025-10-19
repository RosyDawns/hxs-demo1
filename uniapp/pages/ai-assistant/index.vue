<template>
  <view class="page">
    <!-- 顶部栏 -->
    <view class="header">
      <view class="header-btn" @tap="showHistory = true">
        <text>☰</text>
      </view>
      <view class="header-btn" @tap="handleNewChat">
        <text>➕</text>
      </view>
    </view>

    <!-- AI 形象 -->
    <view class="ai-section">
      <image src="/static/images/logo.png" class="ai-logo" mode="widthFix" />
    </view>

    <!-- 快速查询卡片 -->
    <view v-if="!showRecommendations" class="quick-cards">
      <view class="card-row">
        <view class="quick-card card-pink" @tap="handleQuickQuery('帮我推荐一位附近的健身唤醒师💪')">
          <text class="card-quote">"</text>
          <text class="card-text">帮我推荐一位附近的健身唤醒师💪</text>
          <view class="card-btn">试试</view>
        </view>
        <view class="quick-card card-blue" @tap="handleQuickQuery('找瑜伽老师学习基础动作🧘')">
          <text class="card-quote">"</text>
          <text class="card-text">找瑜伽老师学习基础动作🧘</text>
          <view class="card-btn">试试</view>
        </view>
      </view>
    </view>

    <!-- 对话区 -->
    <view v-if="showRecommendations" class="chat-area">
      <!-- 用户问题 -->
      <view class="message user-message">
        <text>{{ currentQuery }}</text>
      </view>
      
      <!-- AI回答 -->
      <view class="message ai-message">
        <text class="message-title">根据您的需求，我为您整理了以下推荐</text>
        <text class="message-subtitle">游泳一对一教练推荐</text>
      </view>

      <!-- 推荐教练 -->
      <view class="coach-recommendations">
        <view v-for="coach in recommendedCoaches" :key="coach.id" class="coach-item">
          <image :src="coach.image" class="coach-image" mode="aspectFill" />
          <view class="coach-details">
            <text class="coach-name">{{ coach.name }}</text>
            <text class="coach-title">{{ coach.title }}</text>
            <view class="coach-meta">
              <text class="coach-rating">⭐ {{ coach.rating }}</text>
              <text class="coach-distance">{{ coach.distance }}km</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 操作按钮 -->
      <view class="action-btns">
        <button class="action-btn" @tap="changeRecommendations">换一批</button>
        <button class="action-btn" @tap="goToSearch">去寻找</button>
      </view>
    </view>

    <!-- 输入区 -->
    <view class="input-section">
      <view class="input-toggle" @tap="toggleInputMode">
        <text>{{ isVoiceMode ? '⌨️' : '🎤' }}</text>
      </view>
      
      <view class="input-wrapper">
        <!-- 文本输入 -->
        <input 
          v-if="!isVoiceMode" 
          class="text-input" 
          v-model="inputText"
          placeholder="请输入您的问题..."
          @confirm="handleTextConfirm"
        />
        <!-- 语音输入 -->
        <button v-else class="voice-btn" @touchstart="startRecording" @touchend="stopRecording">
          {{ isRecording ? '正在录音...' : '按住说话' }}
        </button>
        
        <view v-if="!isVoiceMode" class="send-btn" @tap="handleTextConfirm">
          <text>OK</text>
        </view>
      </view>
    </view>

    <!-- 历史对话弹窗 -->
    <view v-if="showHistory" class="history-modal" @tap="showHistory = false">
      <view class="history-content" @tap.stop>
        <view class="history-header">
          <text class="history-title">历史对话</text>
          <text class="history-close" @tap="showHistory = false">✕</text>
        </view>
        <view class="history-list">
          <view v-for="(item, index) in conversationHistory" :key="index" class="history-item" @tap="selectHistory(item)">
            <text class="history-query">{{ item.query }}</text>
            <text class="history-time">{{ item.time }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      showRecommendations: false,
      isVoiceMode: true,
      isRecording: false,
      inputText: '',
      currentQuery: '',
      showHistory: false,
      conversationHistory: [
        { query: '帮我推荐一位附近的健身唤醒师', time: '今天 09:30' },
        { query: '找瑜伽老师学习基础动作', time: '今天 08:45' }
      ],
      recommendedCoaches: [
        {
          id: 1,
          name: '李教练',
          title: '国家二级运动员 | 8年教学经验',
          rating: 4.8,
          distance: 1.2,
          image: '/static/images/img-18.jpg'
        },
        {
          id: 2,
          name: '赵教练',
          title: '国家一级运动员 | 10年教学经验',
          rating: 4.9,
          distance: 1.5,
          image: '/static/images/img-19.jpg'
        }
      ]
    }
  },
  
  methods: {
    handleQuickQuery(query) {
      this.currentQuery = query
      this.showRecommendations = true
    },
    
    toggleInputMode() {
      this.isVoiceMode = !this.isVoiceMode
    },
    
    startRecording() {
      this.isRecording = true
      // TODO: 实现语音录音
    },
    
    stopRecording() {
      this.isRecording = false
      // TODO: 处理录音结果
    },
    
    handleTextConfirm() {
      if (this.inputText.trim()) {
        this.currentQuery = this.inputText
        this.showRecommendations = true
        this.inputText = ''
      }
    },
    
    handleNewChat() {
      this.showRecommendations = false
      this.currentQuery = ''
      this.inputText = ''
    },
    
    selectHistory(item) {
      this.currentQuery = item.query
      this.showRecommendations = true
      this.showHistory = false
    },
    
    changeRecommendations() {
      uni.showToast({ title: '换一批推荐', icon: 'none' })
    },
    
    goToSearch() {
      uni.navigateTo({ url: '/pages/teacher-list/index' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/uni.scss";

.page {
  min-height: 100vh;
  background-color: $uni-bg-color;
  padding-bottom: 220rpx;
}

/* 顶部栏 */
.header {
  display: flex;
  justify-content: space-between;
  padding: calc(var(--status-bar-height) + 30rpx) 30rpx 30rpx;
}

.header-btn {
  width: 80rpx;
  height: 80rpx;
  background-color: $uni-bg-color-grey;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36rpx;
}

/* AI 形象 */
.ai-section {
  display: flex;
  justify-content: center;
  padding: 40rpx 0;
}

.ai-logo {
  width: 400rpx;
}

/* 快速查询卡片 */
.quick-cards {
  padding: 0 30rpx;
}

.card-row {
  display: flex;
  gap: 20rpx;
}

.quick-card {
  flex: 1;
  background-color: white;
  border-radius: 32rpx;
  padding: 30rpx;
  border: 6rpx solid;
  position: relative;
  min-height: 280rpx;
  
  &.card-pink {
    border-color: #FFE4E1;
  }
  
  &.card-blue {
    border-color: #E0F2FE;
  }
}

.card-quote {
  font-size: 80rpx;
  opacity: 0.3;
  display: block;
}

.card-text {
  font-size: 28rpx;
  display: block;
  margin: 20rpx 0;
}

.card-btn {
  background-color: $uni-text-color;
  color: white;
  font-size: 24rpx;
  padding: 8rpx 24rpx;
  border-radius: 50rpx;
  display: inline-block;
  margin-top: 20rpx;
}

/* 对话区 */
.chat-area {
  padding: 0 30rpx;
}

.message {
  padding: 30rpx;
  border-radius: 32rpx;
  margin-bottom: 30rpx;
}

.user-message {
  background: linear-gradient(to right, #FFDEA1, #FDE49B);
  margin-left: 80rpx;
}

.ai-message {
  background-color: white;
  margin-right: 80rpx;
}

.message-title {
  display: block;
  margin-bottom: 20rpx;
  font-size: 28rpx;
}

.message-subtitle {
  display: block;
  font-weight: bold;
  font-size: 32rpx;
}

/* 推荐教练 */
.coach-recommendations {
  margin: 30rpx 0;
}

.coach-item {
  display: flex;
  background-color: white;
  border-radius: 24rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  box-shadow: $uni-shadow-sm;
}

.coach-image {
  width: 120rpx;
  height: 120rpx;
  border-radius: 16rpx;
  margin-right: 24rpx;
}

.coach-details {
  flex: 1;
}

.coach-name {
  font-size: 32rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 12rpx;
}

.coach-title {
  font-size: 24rpx;
  color: $uni-text-color-grey;
  display: block;
  margin-bottom: 12rpx;
}

.coach-meta {
  display: flex;
  gap: 30rpx;
  font-size: 24rpx;
  color: $uni-text-color-grey;
}

/* 操作按钮 */
.action-btns {
  display: flex;
  gap: 20rpx;
  margin: 30rpx 0;
}

.action-btn {
  flex: 1;
  background-color: $uni-bg-color-grey;
  border-radius: 50rpx;
  padding: 24rpx;
  font-size: 28rpx;
}

/* 输入区 */
.input-section {
  position: fixed;
  bottom: calc(100rpx + env(safe-area-inset-bottom));
  left: 0;
  right: 0;
  padding: 20rpx 30rpx;
  display: flex;
  gap: 20rpx;
  background-color: $uni-bg-color;
}

.input-toggle {
  width: 88rpx;
  height: 88rpx;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36rpx;
  box-shadow: $uni-shadow-base;
}

.input-wrapper {
  flex: 1;
  display: flex;
  gap: 20rpx;
}

.text-input {
  flex: 1;
  background-color: white;
  border-radius: 50rpx;
  padding: 0 40rpx;
  font-size: 28rpx;
  box-shadow: $uni-shadow-base;
}

.voice-btn {
  flex: 1;
  background-color: white;
  border-radius: 50rpx;
  color: $uni-color-primary;
  font-size: 28rpx;
  box-shadow: $uni-shadow-base;
}

.send-btn {
  width: 88rpx;
  height: 88rpx;
  background-color: $uni-color-primary;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  box-shadow: $uni-shadow-base;
}

/* 历史对话弹窗 */
.history-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40rpx;
}

.history-content {
  background-color: white;
  border-radius: 32rpx;
  padding: 40rpx;
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
}

.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40rpx;
}

.history-title {
  font-size: 36rpx;
  font-weight: bold;
}

.history-close {
  font-size: 48rpx;
  color: $uni-text-color-grey;
}

.history-item {
  padding: 30rpx;
  background-color: $uni-bg-color-grey;
  border-radius: 24rpx;
  margin-bottom: 20rpx;
}

.history-query {
  font-size: 28rpx;
  display: block;
  margin-bottom: 12rpx;
}

.history-time {
  font-size: 24rpx;
  color: $uni-text-color-grey;
  display: block;
}
</style>
