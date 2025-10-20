<template>
  <view class="page">
    <view class="intro-section">
      <view class="intro-title">成为唤醒师</view>
      <text class="intro-desc">分享你的技能，帮助他人成长，开启你的副业之旅</text>
    </view>

    <view class="benefits-section">
      <text class="section-title">唤醒师权益</text>
      <view class="benefit-item">
        <text class="benefit-icon">✓</text>
        <view class="benefit-content">
          <text class="benefit-title">自由定价</text>
          <text class="benefit-desc">根据自己的技能和时间自由设定服务价格</text>
        </view>
      </view>
      <view class="benefit-item">
        <text class="benefit-icon">✓</text>
        <view class="benefit-content">
          <text class="benefit-title">平台流量扶持</text>
          <text class="benefit-desc">获得平台推荐和流量扶持，快速积累客户</text>
        </view>
      </view>
      <view class="benefit-item">
        <text class="benefit-icon">✓</text>
        <view class="benefit-content">
          <text class="benefit-title">收益保障</text>
          <text class="benefit-desc">平台担保交易，收益及时到账</text>
        </view>
      </view>
    </view>

    <view class="conditions-section">
      <text class="section-title">入驻条件</text>
      <text class="condition-text">• 年满18周岁，具有完全民事行为能力</text>
      <text class="condition-text">• 拥有某一领域的专业技能或特长</text>
      <text class="condition-text">• 能够提供真实有效的身份证明</text>
      <text class="condition-text">• 具备良好的服务意识和沟通能力</text>
    </view>

    <view class="apply-btn-container">
      <button class="apply-btn" @tap="handleApply">立即申请</button>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    handleApply() {
      uni.showToast({ title: "申请功能开发中", icon: "none" });
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 24rpx;
}

.intro-section {
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
  border-radius: 24rpx;
  padding: 48rpx 32rpx;
  color: white;
  margin-bottom: 24rpx;
}

.intro-title {
  font-size: 40rpx;
  font-weight: bold;
  margin-bottom: 16rpx;
}

.intro-desc {
  font-size: 26rpx;
  opacity: 0.9;
}

.benefits-section,
.conditions-section {
  background: white;
  border-radius: 24rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 24rpx;
  display: block;
}

.benefit-item {
  display: flex;
  margin-bottom: 24rpx;
}

.benefit-icon {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  background-color: #ff6b6b;
  color: white;
  text-align: center;
  line-height: 40rpx;
  margin-right: 16rpx;
  flex-shrink: 0;
}

.benefit-content {
  flex: 1;
}

.benefit-title {
  font-size: 28rpx;
  font-weight: 500;
  display: block;
  margin-bottom: 8rpx;
}

.benefit-desc {
  font-size: 24rpx;
  color: #666;
  display: block;
}

.condition-text {
  font-size: 26rpx;
  color: #333;
  display: block;
  margin-bottom: 16rpx;
  line-height: 1.6;
}

.apply-btn-container {
  padding: 32rpx 0;
}

.apply-btn {
  width: 100%;
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
  color: white;
  font-size: 32rpx;
  font-weight: bold;
  border-radius: 50rpx;
  padding: 24rpx;
  border: none;
}
</style>
