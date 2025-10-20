<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <text class="back" @tap="goBack">‹</text>
      <text class="title">免费体验活动详情</text>
    </view>

    <!-- 主图 -->
    <image src="/static/img_41.jpg" class="banner" mode="aspectFill" />

    <!-- 内容区 -->
    <scroll-view scroll-y class="content">
      <!-- 基本信息 -->
      <view class="info-card">
        <text class="camp-title">蛙泳/自由泳(体验课)</text>
        <view class="price-row">
          <view class="price-left">
            <text class="price-current">￥0</text>
            <text class="price-original">￥280</text>
          </view>
          <text class="quota">🗺️ 50个中奖名额</text>
        </view>
        <view class="stats">
          <text class="stat">14671人已报名</text>
          <text class="stat">33936人感兴趣</text>
        </view>
      </view>

      <!-- 教练信息 -->
      <view class="section">
        <text class="section-title">适用教练师</text>
        <view class="coach-card">
          <image src="/static/img-13.jpg" class="coach-avatar" mode="aspectFill" />
          <view class="coach-info">
            <view class="coach-header">
              <text class="coach-name">李老师</text>
              <view class="coach-tags">
                <text class="tag">体育课</text>
                <text class="tag">游泳教学</text>
              </view>
            </view>
            <text class="rating">⭐⭐⭐⭐☆</text>
            <text class="location">📍 1km 市区附近</text>
          </view>
        </view>
      </view>

      <!-- 标签栏 -->
      <view class="tabs">
        <view v-for="(tab, idx) in tabs" :key="idx" :class="['tab', { active: activeTab === idx }]" @tap="activeTab = idx">
          {{ tab }}
        </view>
      </view>

      <!-- 活动流程 -->
      <view v-if="activeTab === 0" class="tab-content">
        <image src="/static/hd-steps-banner.png" class="flow-img" mode="widthFix" />
      </view>

      <!-- 活动内容 -->
      <view v-if="activeTab === 1" class="tab-content">
        <view class="item-row">
          <text class="label">课程内容：</text>
          <text class="value">蛙泳/自由泳体验</text>
        </view>
        <view class="item-row">
          <text class="label">容纳人数：</text>
          <text class="value">1人</text>
        </view>
        <view class="item-row">
          <text class="label">容纳时间：</text>
          <text class="value">40分钟</text>
        </view>
        <view class="item-row">
          <text class="label">体验次数：</text>
          <text class="value">仅限单次体验完毕</text>
        </view>
        <view class="item-row">
          <text class="label">适用年龄：</text>
          <text class="value">不限，小朋友适用</text>
        </view>
        <view class="notice">
          <text class="notice-icon">⚠️</text>
          <text class="notice-text">免费体验只限对年龄以上内容，其他课程请询问客服</text>
        </view>
      </view>

      <!-- 活动规则 -->
      <view v-if="activeTab === 2" class="tab-content">
        <view class="rule-section">
          <text class="rule-title">体验时间</text>
          <view class="rule-item">
            <text class="rule-label">体验日期：</text>
            <text class="rule-value">2025年10月11日 - 2025年11月30日</text>
          </view>
          <view class="rule-item">
            <text class="rule-label">使用时间：</text>
            <text class="rule-value">同网站正式上线后开始</text>
          </view>
        </view>
        <view class="rule-section">
          <text class="rule-title">预约规则</text>
          <text class="rule-desc">• 请在约定第一次时间前联系客服，若未能在约定时间内进行课程的体验，课程此次体验服务体验。</text>
          <text class="rule-desc">• 单次体验的课程网中意合法联系关系大此重的，时未能保障的客服联系。</text>
        </view>
        <view class="rule-section">
          <text class="rule-title">限告须知</text>
          <text class="rule-desc">• 免费体验课程不位于回家服务地点。</text>
          <text class="rule-desc">• 不得利用体验的机会进行其他商业活动，一经发现即可取消本次体验机会。</text>
        </view>
      </view>
    </scroll-view>

    <!-- 底部操作栏 -->
    <view class="footer">
      <view class="countdown">
        <text class="countdown-label">距报名截至时间：</text>
        <text class="countdown-text">{{ countdown }}</text>
      </view>
      <view class="btn-register" @tap="register">我要报名</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      campId: '',
      activeTab: 0,
      tabs: ['活动流程', '活动内容', '活动规则'],
      countdown: '',
      timer: null,
      endTime: null
    }
  },
  onLoad(options) {
    this.campId = options.id || '1'
    this.endTime = Date.now() + 10 * 24 * 60 * 60 * 1000 + 22 * 60 * 60 * 1000
    this.startCountdown()
  },
  onUnload() {
    if (this.timer) clearInterval(this.timer)
  },
  methods: {
    goBack() { uni.navigateBack() },
    startCountdown() {
      this.updateCountdown()
      this.timer = setInterval(() => { this.updateCountdown() }, 1000)
    },
    updateCountdown() {
      const now = Date.now()
      const distance = this.endTime - now
      if (distance < 0) {
        this.countdown = '已结束'
        clearInterval(this.timer)
        return
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      this.countdown = `${days}天${String(hours).padStart(2, '0')}小时${String(minutes).padStart(2, '0')}分${String(seconds).padStart(2, '0')}秒`
    },
    register() {
      uni.showModal({
        title: '报名成功',
        content: '我们将尽快与您联系',
        showCancel: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page { background: #f5f5f5; min-height: 100vh; display: flex; flex-direction: column; }
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 99; background: #fff; display: flex; align-items: center; padding: calc(var(--status-bar-height) + 20rpx) 30rpx 20rpx; border-bottom: 1rpx solid #f0f0f0; }
.back { width: 48rpx; height: 48rpx; display: flex; align-items: center; justify-content: center; font-size: 40rpx; color: #333; margin-right: 20rpx; }
.title { font-size: 32rpx; font-weight: 700; color: #222; flex: 1; }
.banner { width: 100%; height: 400rpx; margin-top: calc(var(--status-bar-height) + 100rpx); }
.content { flex: 1; padding-bottom: 180rpx; }
.info-card { background: #fff; padding: 30rpx; margin-bottom: 20rpx; }
.camp-title { display: block; font-size: 36rpx; font-weight: 700; color: #222; margin-bottom: 30rpx; }
.price-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20rpx; }
.price-left { display: flex; align-items: baseline; gap: 16rpx; }
.price-current { font-size: 48rpx; font-weight: 700; color: #ff6b35; }
.price-original { font-size: 28rpx; color: #999; text-decoration: line-through; }
.quota { background: #fff3cd; color: #856404; padding: 8rpx 16rpx; border-radius: 8rpx; font-size: 24rpx; }
.stats { display: flex; gap: 32rpx; padding-top: 20rpx; border-top: 1rpx solid #f5f5f5; }
.stat { font-size: 24rpx; color: #666; }
.section { background: #fff; padding: 30rpx; margin-bottom: 20rpx; }
.section-title { display: block; font-size: 30rpx; font-weight: 700; color: #222; margin-bottom: 30rpx; }
.coach-card { display: flex; gap: 24rpx; }
.coach-avatar { width: 120rpx; height: 120rpx; border-radius: 50%; }
.coach-info { flex: 1; }
.coach-header { display: flex; align-items: center; gap: 20rpx; margin-bottom: 16rpx; }
.coach-name { font-size: 28rpx; font-weight: 700; color: #222; }
.coach-tags { display: flex; gap: 12rpx; }
.tag { background: #fff3e0; color: #f57c00; padding: 4rpx 16rpx; border-radius: 16rpx; font-size: 20rpx; }
.rating { display: block; font-size: 24rpx; color: #ffc107; margin-bottom: 12rpx; }
.location { display: block; font-size: 20rpx; color: #999; }
.tabs { display: flex; background: #fff; border-bottom: 1rpx solid #f0f0f0; }
.tab { flex: 1; text-align: center; padding: 30rpx 0; font-size: 28rpx; color: #666; position: relative; &.active { color: #222; font-weight: 700; &::after { content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 48rpx; height: 4rpx; background: #ff6b35; border-radius: 2rpx; } } }
.tab-content { background: #fff; padding: 30rpx; margin-bottom: 20rpx; }
.flow-img { width: 100%; }
.item-row { display: flex; margin-bottom: 24rpx; }
.label { font-size: 26rpx; color: #666; min-width: 160rpx; }
.value { font-size: 26rpx; color: #333; flex: 1; }
.notice { display: flex; align-items: flex-start; gap: 16rpx; padding: 24rpx; background: #fff3cd; border-left: 4rpx solid #ffc107; border-radius: 8rpx; margin-top: 30rpx; }
.notice-icon { font-size: 32rpx; }
.notice-text { font-size: 24rpx; color: #856404; line-height: 1.6; flex: 1; }
.rule-section { margin-bottom: 40rpx; &:last-child { margin-bottom: 0; } }
.rule-title { display: block; font-size: 32rpx; font-weight: 700; color: #222; margin-bottom: 24rpx; }
.rule-item { display: flex; margin-bottom: 16rpx; }
.rule-label { font-size: 26rpx; color: #666; min-width: 160rpx; }
.rule-value { font-size: 26rpx; color: #333; flex: 1; }
.rule-desc { display: block; font-size: 26rpx; color: #666; line-height: 1.8; margin-bottom: 16rpx; }
.footer { position: fixed; bottom: 0; left: 0; right: 0; background: #fff; padding: 20rpx 30rpx; padding-bottom: calc(20rpx + env(safe-area-inset-bottom)); display: flex; align-items: center; gap: 20rpx; border-top: 1rpx solid #f0f0f0; }
.countdown { flex: 1; }
.countdown-label { display: block; font-size: 22rpx; color: #666; margin-bottom: 8rpx; }
.countdown-text { display: block; font-size: 26rpx; color: #333; font-weight: 700; }
.btn-register { background: linear-gradient(90deg, #ffa726, #ffb74d); color: #fff; padding: 24rpx 60rpx; border-radius: 48rpx; font-size: 28rpx; font-weight: 700; }
</style>
