<template>
  <view class="page">
    <!-- 顶部 -->
    <view class="header" :style="{paddingTop: statusBarHeight + 'px'}">
      <view class="header-btn" @tap="showHistory = true">☰</view>
      <view class="header-btn" @tap="newChat">➕</view>
    </view>

    <!-- Logo -->
    <view class="logo-section">
      <image src="/static/images/logo.png" mode="widthFix" class="logo" />
    </view>

    <!-- 快捷卡片（未显示推荐时） -->
    <view v-if="!showRecommend" class="cards-section">
      <view class="swiper-wrapper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
        <view class="swiper-container" :style="{transform: `translateX(-${currentPage * 100}%)`}">
          <!-- 第1页 -->
          <view class="swiper-page">
            <view class="card card-pink" @tap="askQuestion('帮我推荐一位附近的健身唤醒师💪')">
              <text class="card-quote">"</text>
              <text class="card-text">帮我推荐一位附近的健身唤醒师💪</text>
              <view class="card-btn">💬 试试</view>
            </view>
            <view class="card card-blue" @tap="askQuestion('找瑜伽老师学习基础动作🧘')">
              <text class="card-quote">"</text>
              <text class="card-text">找瑜伽老师学习基础动作🧘</text>
              <view class="card-btn">💬 试试</view>
            </view>
          </view>

          <!-- 第2页 -->
          <view class="swiper-page">
            <view class="card card-green" @tap="askQuestion('想找一位游泳教练学习蛙泳🏊')">
              <text class="card-quote">"</text>
              <text class="card-text">想找一位游泳教练学习蛙泳🏊</text>
              <view class="card-btn">💬 试试</view>
            </view>
            <view class="card card-orange" @tap="askQuestion('找个篮球私教提升投篮技巧🏀')">
              <text class="card-quote">"</text>
              <text class="card-text">找个篮球私教提升投篮技巧🏀</text>
              <view class="card-btn">💬 试试</view>
            </view>
          </view>

          <!-- 第3页 -->
          <view class="swiper-page">
            <view class="card card-purple" @tap="askQuestion('想学习街舞找个专业老师💃')">
              <text class="card-quote">"</text>
              <text class="card-text">想学习街舞找个专业老师💃</text>
              <view class="card-btn">💬 试试</view>
            </view>
            <view class="card card-red" @tap="askQuestion('想提升羽毛球水平找教练🏸')">
              <text class="card-quote">"</text>
              <text class="card-text">想提升羽毛球水平找教练🏸</text>
              <view class="card-btn">💬 试试</view>
            </view>
          </view>
        </view>
      </view>

      <!-- 左右箭头 -->
      <view v-if="currentPage > 0" class="arrow arrow-left" @tap="prevPage">‹</view>
      <view v-if="currentPage < 2" class="arrow arrow-right" @tap="nextPage">›</view>

      <!-- 指示器 -->
      <view class="dots">
        <view v-for="i in 3" :key="i" :class="['dot', currentPage === i-1 ? 'active' : '']" @tap="goToPage(i-1)"></view>
      </view>
    </view>

    <!-- 对话区（显示推荐时） -->
    <view v-if="showRecommend" class="chat-section">
      <view class="user-msg">{{ question }}</view>
      <view class="ai-msg">
        <text class="ai-title">根据您的需求，我为您整理了以下推荐</text>
        <text class="ai-subtitle">游泳一对一教练推荐</text>
      </view>

      <!-- 推荐教练 -->
      <view class="coaches">
        <view v-for="coach in coaches" :key="coach.id" class="coach-item">
          <image :src="coach.image" mode="aspectFill" class="coach-img" />
          <view class="coach-info">
            <text class="coach-name">{{ coach.name }}</text>
            <text class="coach-desc">{{ coach.desc }}</text>
            <view class="coach-meta">
              <text>⭐ {{ coach.rating }}</text>
              <text>📍 {{ coach.distance }}km</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 操作按钮 -->
      <view class="actions">
        <button class="action-btn" @tap="changeCoaches">换一批</button>
        <button class="action-btn" @tap="goToSearch">去寻找</button>
      </view>
    </view>

    <!-- 输入区 -->
    <view class="input-section">
      <view class="input-toggle" @tap="toggleMode">
        <text>{{ isVoice ? '⌨️' : '🎤' }}</text>
      </view>
      <view class="input-box">
        <input 
          v-if="!isVoice" 
          v-model="inputText" 
          placeholder="请输入您的问题..." 
          @confirm="sendText"
          class="text-input"
        />
        <button 
          v-else 
          class="voice-btn"
          @touchstart="startRecord"
          @touchend="stopRecord"
        >
          {{ isRecording ? '正在录音...' : '按住说话' }}
        </button>
      </view>
      <view v-if="!isVoice" class="send-btn" @tap="sendText">OK</view>
    </view>

    <!-- 历史记录 -->
    <view v-if="showHistory" class="modal-mask" @tap="showHistory = false">
      <view class="history-modal" @tap.stop>
        <view class="modal-header">
          <text class="modal-title">历史对话</text>
          <text class="modal-close" @tap="showHistory = false">✕</text>
        </view>
        <view class="history-list">
          <view v-for="(item, idx) in history" :key="idx" class="history-item" @tap="selectHistory(item)">
            <text class="h-text">{{ item.query }}</text>
            <text class="h-time">{{ item.time }}</text>
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
      statusBarHeight: 44,
      currentPage: 0,
      touchStartX: 0,
      touchEndX: 0,
      showRecommend: false,
      question: '',
      isVoice: true,
      inputText: '',
      isRecording: false,
      showHistory: false,
      history: [
        { query: '帮我推荐一位附近的健身唤醒师', time: '今天 09:30' },
        { query: '找瑜伽老师学习基础动作', time: '今天 08:45' }
      ],
      coaches: [
        { id: 1, name: '李教练', desc: '国家二级运动员 | 8年教学经验', rating: 4.8, distance: 1.2, image: '/static/images/img-18.jpg' },
        { id: 2, name: '赵教练', desc: '国家一级运动员 | 10年教学经验', rating: 4.9, distance: 1.5, image: '/static/images/img-19.jpg' }
      ]
    }
  },
  
  onLoad() {
    const info = uni.getSystemInfoSync()
    this.statusBarHeight = info.statusBarHeight || 44
  },
  
  methods: {
    touchStart(e) {
      this.touchStartX = e.touches[0].clientX
    },
    
    touchMove(e) {
      this.touchEndX = e.touches[0].clientX
    },
    
    touchEnd() {
      const diff = this.touchStartX - this.touchEndX
      if (diff > 50 && this.currentPage < 2) this.currentPage++
      else if (diff < -50 && this.currentPage > 0) this.currentPage--
    },
    
    nextPage() {
      if (this.currentPage < 2) this.currentPage++
    },
    
    prevPage() {
      if (this.currentPage > 0) this.currentPage--
    },
    
    goToPage(page) {
      this.currentPage = page
    },
    
    askQuestion(q) {
      this.question = q
      this.showRecommend = true
    },
    
    toggleMode() {
      this.isVoice = !this.isVoice
    },
    
    sendText() {
      if (this.inputText.trim()) {
        this.question = this.inputText
        this.showRecommend = true
        this.inputText = ''
      }
    },
    
    startRecord() {
      this.isRecording = true
    },
    
    stopRecord() {
      this.isRecording = false
      this.showRecommend = true
      this.question = '我需要一位游泳教练'
    },
    
    newChat() {
      this.showRecommend = false
      this.question = ''
      this.inputText = ''
    },
    
    selectHistory(item) {
      this.question = item.query
      this.showRecommend = true
      this.showHistory = false
    },
    
    changeCoaches() {
      uni.showToast({ title: '换一批推荐', icon: 'none' })
    },
    
    goToSearch() {
      uni.navigateTo({ url: '/pages/teacher-list/index' })
    }
  }
}
</script>

<style scoped>
.page { min-height: 100vh; background: #fff; display: flex; flex-direction: column; }

.header { display: flex; justify-content: space-between; padding: 16rpx 24rpx; background: #fff; }
.header-btn { width: 80rpx; height: 80rpx; background: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36rpx; }

.logo-section { text-align: center; padding: 60rpx 0 40rpx; }
.logo { width: 400rpx; }

.cards-section { position: relative; padding: 0 60rpx 40rpx; }
.swiper-wrapper { overflow: hidden; }
.swiper-container { display: flex; transition: transform 0.3s; }
.swiper-page { width: 100%; flex-shrink: 0; display: flex; gap: 16rpx; padding: 0 20rpx; }

.card { flex: 1; background: #fff; border-radius: 32rpx; padding: 32rpx 24rpx; border: 6rpx solid; min-height: 280rpx; position: relative; }
.card-pink { border-color: #FFE4E1; }
.card-blue { border-color: #E0F2FE; }
.card-green { border-color: #E8F5E8; }
.card-orange { border-color: #FFE0B2; }
.card-purple { border-color: #F3E5F5; }
.card-red { border-color: #FFEBEE; }
.card-quote { font-size: 80rpx; opacity: 0.3; display: block; line-height: 1; }
.card-text { font-size: 28rpx; display: block; margin: 20rpx 0; }
.card-btn { position: absolute; bottom: 20rpx; right: 20rpx; background: #000; color: #fff; padding: 8rpx 16rpx; border-radius: 20rpx; font-size: 24rpx; }

.arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 64rpx; height: 64rpx; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 48rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.1); z-index: 10; }
.arrow-left { left: 0; }
.arrow-right { right: 0; }

.dots { display: flex; justify-content: center; gap: 16rpx; margin-top: 32rpx; }
.dot { width: 16rpx; height: 16rpx; background: #ddd; border-radius: 50%; transition: all 0.3s; }
.dot.active { background: #ff6b6b; width: 48rpx; border-radius: 8rpx; }

.chat-section { flex: 1; padding: 0 24rpx 180rpx; }
.user-msg { background: linear-gradient(to right, #ffd89b, #ffcb7d); border-radius: 20rpx; padding: 24rpx; margin: 0 80rpx 20rpx 0; }
.ai-msg { background: #fff; border-radius: 20rpx; padding: 24rpx; margin: 0 0 20rpx 80rpx; box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05); }
.ai-title { font-size: 28rpx; display: block; margin-bottom: 12rpx; }
.ai-subtitle { font-size: 32rpx; font-weight: bold; display: block; }

.coaches { margin: 24rpx 0; }
.coach-item { display: flex; background: #fff; border-radius: 16rpx; padding: 20rpx; margin-bottom: 16rpx; box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05); }
.coach-img { width: 100rpx; height: 100rpx; border-radius: 12rpx; margin-right: 16rpx; }
.coach-info { flex: 1; }
.coach-name { font-size: 30rpx; font-weight: bold; display: block; margin-bottom: 8rpx; }
.coach-desc { font-size: 24rpx; color: #666; display: block; margin-bottom: 12rpx; }
.coach-meta { display: flex; gap: 24rpx; font-size: 22rpx; color: #999; }

.actions { display: flex; gap: 16rpx; margin: 24rpx 0; }
.action-btn { flex: 1; background: #f3f4f6; border: none; border-radius: 48rpx; padding: 24rpx; font-size: 28rpx; }

.input-section { position: fixed; bottom: calc(100rpx + env(safe-area-inset-bottom)); left: 0; right: 0; padding: 16rpx 24rpx; background: #fff; display: flex; gap: 16rpx; align-items: center; border-top: 1rpx solid #eee; }
.input-toggle { width: 88rpx; height: 88rpx; background: #fff; box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36rpx; }
.input-box { flex: 1; }
.text-input { width: 100%; background: #fff; box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.1); border-radius: 48rpx; padding: 16rpx 24rpx; font-size: 28rpx; border: none; }
.voice-btn { width: 100%; background: #fff; box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.1); color: #ff6b6b; border: none; border-radius: 48rpx; padding: 16rpx 24rpx; font-size: 28rpx; }
.send-btn { width: 88rpx; height: 88rpx; background: #ff6b6b; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28rpx; box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.1); }

.modal-mask { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 40rpx; }
.history-modal { background: #fff; border-radius: 24rpx; padding: 32rpx; width: 100%; max-height: 70vh; overflow-y: auto; }
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24rpx; }
.modal-title { font-size: 32rpx; font-weight: bold; }
.modal-close { font-size: 48rpx; color: #999; }
.history-list { display: flex; flex-direction: column; gap: 16rpx; }
.history-item { background: #f9fafb; border-radius: 12rpx; padding: 20rpx; }
.h-text { font-size: 28rpx; display: block; margin-bottom: 8rpx; }
.h-time { font-size: 22rpx; color: #999; }
</style>
