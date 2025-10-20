<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <view class="back" @tap="goBack">‹</view>
      <text class="title">体重管理唤醒营</text>
    </view>

    <!-- 内容图片 -->
    <image src="/static/images/img-32.jpg" class="img" mode="widthFix" />
    <image src="/static/images/img-33.jpg" class="img" mode="widthFix" />
    <image src="/static/images/img-34.jpg" class="img" mode="widthFix" />

    <!-- 底部价格栏 -->
    <view class="footer">
      <view class="actions-left">
        <view class="action">
          <text class="icon">✉</text>
          <text class="label">私信</text>
        </view>
        <view class="action">
          <text class="icon">↗</text>
          <text class="label">转发</text>
        </view>
      </view>
      <view class="buy-btn" @tap="handleRegister">
        <view class="price-box">
          <text class="main-price">¥498</text>
          <view class="sub-price">
            <text class="small">¥1299</text>
            <text class="tip">券后超值价</text>
          </view>
        </view>
        <text class="action-text">立即购买</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goBack() { uni.navigateBack() },
    handleRegister() { uni.navigateTo({ url: '/pages/daily/index' }) }
  }
}
</script>

<style lang="scss" scoped>
.page { background: #fff; min-height: 100vh; padding-bottom: 140rpx; }
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 99; background: #fff; display: flex; align-items: center; padding: 20rpx 30rpx; border-bottom: 1rpx solid #f0f0f0; }
.back { width: 48rpx; height: 48rpx; background: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36rpx; color: #333; margin-right: 20rpx; }
.title { font-size: 32rpx; font-weight: 700; }
.img { width: 100%; display: block; margin-top: 100rpx; }
.img:first-of-type { margin-top: 100rpx; }
.footer { position: fixed; bottom: 0; left: 0; right: 0; background: #fff; display: flex; align-items: center; padding: 20rpx 30rpx; padding-bottom: calc(20rpx + env(safe-area-inset-bottom)); box-shadow: 0 -2rpx 16rpx rgba(0,0,0,.08); }
.actions-left { display: flex; margin-right: 20rpx; }
.action { display: flex; flex-direction: column; align-items: center; margin-right: 30rpx; }
.action .icon { font-size: 36rpx; color: #333; }
.action .label { font-size: 20rpx; color: #333; margin-top: 6rpx; }
.buy-btn { flex: 1; background: #ff5a5f; border-radius: 999rpx; display: flex; align-items: center; justify-content: space-between; padding: 16rpx 32rpx; color: #fff; }
.price-box { display: flex; align-items: center; }
.main-price { font-size: 52rpx; font-weight: 700; margin-right: 16rpx; }
.sub-price { display: flex; flex-direction: column; align-items: flex-start; }
.sub-price .small { font-size: 20rpx; text-decoration: line-through; }
.sub-price .tip { font-size: 20rpx; }
.action-text { font-size: 32rpx; font-weight: 600; }
</style>
