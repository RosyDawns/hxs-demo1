<template>
  <view class="daily-home">
    <!-- 目标体重卡片 -->
    <view class="card">
      <view class="card-top">
        <view class="target">
          <text class="target-num">{{ targetWeight }}</text>
          <text class="target-unit">kg</text>
          <text class="target-label">目标体重</text>
        </view>
        <view class="user">
          <image src="/static/images/img-12.jpg" class="avatar" mode="aspectFill" />
          <view class="remain">
            <text class="remain-text">剩余唤醒周期：</text>
            <text class="remain-num">{{ remainingDays }}</text>
            <text class="remain-unit">天</text>
          </view>
        </view>
      </view>

      <!-- 体重记录 -->
      <view class="weights">
        <view class="weight-item">
          <view class="pill">
            <text class="pill-text">上次体重：{{ lastWeight }}kg</text>
          </view>
          <text class="date">{{ lastWeightDate }}</text>
        </view>
        <view class="weight-item">
          <view class="pill">
            <text class="pill-text">今日体重：____ kg</text>
          </view>
          <text class="date">&nbsp;</text>
        </view>
      </view>

      <!-- 操作按钮 -->
      <view class="actions">
        <view class="btn primary" @tap="showWeightChart">体重曲线图</view>
        <view class="btn ghost" @tap="manualRecord">手动记录</view>
      </view>
    </view>

    <!-- 减脂宣言 -->
    <view class="card">
      <view class="card-header">
        <text class="title">减脂宣言</text>
        <view class="link" @tap="showDeclarationHistory">
          <text>历史宣言</text>
          <text class="icon">›</text>
        </view>
      </view>
      <view class="declare">
        <view class="declare-tag">
          <text class="small">今日</text>
          <text class="small">宣言</text>
        </view>
        <view class="declare-input">
          <input v-model="todayDeclaration" placeholder="我要瘦10斤" />
        </view>
        <view class="declare-ok" @tap="submitDeclaration">OK</view>
      </view>
    </view>

    <!-- 唤醒任务（去打卡） -->
    <view class="card">
      <view class="card-header between">
        <text class="title">唤醒任务</text>
        <view class="score">
          <text class="score-label">今日唤醒分</text>
          <text class="score-num">{{ todayScore }}</text>
        </view>
        <view class="link" @tap="goCheckin">
          <text>去打卡</text>
          <text class="icon">›</text>
        </view>
      </view>
      <view class="chart">
        <image src="/static/images/img-11.jpg" mode="widthFix" class="chart-img" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'DailyHome',
  data() {
    return {
      targetWeight: 49.5,
      remainingDays: 14,
      lastWeight: 80,
      lastWeightDate: '2025-10-10',
      todayDeclaration: '',
      todayScore: 80
    }
  },
  methods: {
    showDeclarationHistory() {
      // 预留
    },
    showWeightChart() {},
    manualRecord() {},
    submitDeclaration() {
      if (!this.todayDeclaration.trim()) return
      // 预留：提交逻辑
    },
    goCheckin() {
      uni.navigateTo({ url: '/pages/checkin/index' })
    }
  }
}
</script>

<style lang="scss" scoped>
.daily-home {
  background: #f7f7f7;
}
.card {
  background: #fff;
  margin: 20rpx 0;
  padding: 30rpx;
  border-radius: 20rpx;
}
.card-top { display: flex; align-items: stretch; gap: 20rpx; }
.target { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.target-num { font-size: 60rpx; color: #ff6b6b; font-weight: 700; line-height: 1; }
.target-unit { font-size: 28rpx; color: #333; margin-left: 8rpx; }
.target-label { font-size: 26rpx; color: #333; margin-top: 10rpx; }
.user { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: space-around; }
.avatar { width: 80rpx; height: 80rpx; border-radius: 50%; margin-bottom: 10rpx; }
.remain { display: flex; align-items: baseline; }
.remain-text { color: #999; font-size: 24rpx; }
.remain-num { color: #ff6b6b; font-size: 40rpx; font-weight: 700; margin: 0 8rpx; }
.remain-unit { color: #999; font-size: 24rpx; }
.weights { display: flex; gap: 20rpx; margin-top: 20rpx; }
.weight-item { flex: 1; }
.pill { background: #f5f5f5; border-radius: 999rpx; padding: 18rpx 24rpx; }
.pill-text { font-size: 26rpx; color: #333; }
.date { font-size: 24rpx; color: #ff6b6b; text-align: center; margin-top: 10rpx; }
.actions { display: flex; gap: 20rpx; margin-top: 20rpx; }
.btn { flex: 1; text-align: center; border-radius: 999rpx; padding: 20rpx 0; font-size: 28rpx; }
.btn.primary { background: linear-gradient(90deg, #ff8a4c, #ff6b6b); color: #fff; }
.btn.ghost { background: #f5f5f5; color: #333; }
.card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20rpx; }
.card-header.between { gap: 20rpx; }
.title { font-size: 30rpx; font-weight: 700; color: #222; }
.link { display: flex; align-items: center; color: #ff6b6b; }
.link .icon { margin-left: 8rpx; }
.declare { display: flex; align-items: center; }
.declare-tag { width: 80rpx; height: 80rpx; border-radius: 50%; background: #f3f3f3; display: flex; flex-direction: column; justify-content: center; align-items: center; margin-right: 16rpx; }
.declare-tag .small { font-size: 20rpx; color: #999; line-height: 1.1; }
.declare-input { flex: 1; }
.declare-input input { width: 100%; height: 72rpx; background: #fff; border: 2rpx solid #f1f1f1; border-radius: 999rpx; padding: 0 24rpx; font-size: 26rpx; color: #666; }
.declare-ok { width: 80rpx; height: 80rpx; border-radius: 50%; background: linear-gradient(90deg, #ff8a4c, #ff6b6b); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-left: 16rpx; }
.score { display: flex; align-items: center; }
.score-label { color: #999; font-size: 24rpx; margin-right: 10rpx; }
.score-num { color: #ff6b6b; font-size: 44rpx; font-weight: 700; line-height: 1; }
.chart { margin-top: 20rpx; display: flex; align-items: center; justify-content: center; }
.chart-img { width: 100%; border-radius: 12rpx; }
</style>
