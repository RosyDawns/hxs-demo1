<template>
  <view class="page">
    <view class="header">
      <image src="https://picsum.photos/id/20/120/120" class="logo" mode="aspectFill" />
      <text class="app-name">唤醒狮</text>
      <text class="slogan">发现最好的自己</text>
      <view class="version">版本 1.0.0</view>
    </view>

    <view class="section">
      <view class="section-title">关于唤醒狮</view>
      <text class="description">
        唤醒狮是一款专注于个人成长和健康管理的应用，帮助用户养成良好习惯，提升生活品质。通过科学的训练计划和社区互动，让每个人都能发现并成就最好的自己。
      </text>
    </view>

    <view class="section">
      <view class="section-title">核心功能</view>
      <view class="feature-list">
        <view class="feature-item">
          <view class="icon-box blue">🏋️</view>
          <view class="feature-content">
            <text class="feature-title">训练营</text>
            <text class="feature-desc">专业的训练计划，科学的成长路径</text>
          </view>
        </view>
        <view class="feature-item">
          <view class="icon-box red">❤️</view>
          <view class="feature-content">
            <text class="feature-title">健康打卡</text>
            <text class="feature-desc">记录每日健康数据，养成好习惯</text>
          </view>
        </view>
        <view class="feature-item">
          <view class="icon-box green">👥</view>
          <view class="feature-content">
            <text class="feature-title">社区交流</text>
            <text class="feature-desc">与志同道合的伙伴一起进步</text>
          </view>
        </view>
      </view>
    </view>

    <view class="section">
      <view class="section-title">联系我们</view>
      <view class="contact-list">
        <view class="contact-item">
          <text class="contact-label">客服电话</text>
          <text class="contact-value">400-888-8888</text>
        </view>
        <view class="contact-item">
          <text class="contact-label">客服邮箱</text>
          <text class="contact-value">support@huanxingshi.com</text>
        </view>
        <view class="contact-item">
          <text class="contact-label">官方网站</text>
          <text class="contact-value">www.huanxingshi.com</text>
        </view>
      </view>
    </view>

    <view class="legal-links">
      <view class="legal-item" @tap="handleLegalClick('privacy-policy')">
        <text>隐私政策</text>
        <text class="arrow">›</text>
      </view>
      <view class="legal-item" @tap="handleLegalClick('data-collection')">
        <text>个人信息收集清单</text>
        <text class="arrow">›</text>
      </view>
    </view>

    <view class="copyright">
      <text>© 2024 唤醒狮科技有限公司</text>
      <text>All Rights Reserved</text>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    handleLegalClick(route) {
      uni.navigateTo({ url: `/pages/${route}/index` });
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f9fafb 0%, #f3f4f6 100%);
  padding-bottom: 48rpx;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64rpx 0;
}

.logo {
  width: 160rpx;
  height: 160rpx;
  border-radius: 32rpx;
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.1);
  margin-bottom: 24rpx;
}

.app-name {
  font-size: 40rpx;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 8rpx;
}

.slogan {
  font-size: 26rpx;
  color: #6b7280;
  margin-bottom: 24rpx;
}

.version {
  background: #fef3c7;
  color: #d97706;
  padding: 8rpx 24rpx;
  border-radius: 50rpx;
  font-size: 22rpx;
  font-weight: 500;
}

.section {
  background: white;
  margin: 24rpx;
  border-radius: 24rpx;
  padding: 32rpx;
}

.section-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 24rpx;
}

.description {
  font-size: 26rpx;
  color: #6b7280;
  line-height: 1.8;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 24rpx;
}

.icon-box {
  width: 80rpx;
  height: 80rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36rpx;
  flex-shrink: 0;
}

.icon-box.blue {
  background: #dbeafe;
}

.icon-box.red {
  background: #fee2e2;
}

.icon-box.green {
  background: #d1fae5;
}

.feature-content {
  flex: 1;
}

.feature-title {
  font-size: 28rpx;
  font-weight: 500;
  color: #1f2937;
  display: block;
  margin-bottom: 8rpx;
}

.feature-desc {
  font-size: 24rpx;
  color: #9ca3af;
  line-height: 1.6;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  padding: 12rpx 0;
}

.contact-label {
  font-size: 26rpx;
  color: #6b7280;
}

.contact-value {
  font-size: 26rpx;
  color: #1f2937;
  font-weight: 500;
}

.legal-links {
  background: white;
  margin: 0 24rpx;
  border-radius: 24rpx;
  overflow: hidden;
}

.legal-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32rpx;
  border-bottom: 2rpx solid #f3f4f6;
}

.legal-item:last-child {
  border-bottom: none;
}

.legal-item text:first-child {
  font-size: 28rpx;
  color: #1f2937;
}

.arrow {
  font-size: 40rpx;
  color: #9ca3af;
}

.copyright {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
  padding: 48rpx 24rpx;
  font-size: 22rpx;
  color: #9ca3af;
}
</style>
