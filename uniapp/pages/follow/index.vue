<template>
  <view class="page">
    <view class="empty-container">
      <text class="empty-icon">➕</text>
      <text class="empty-text">新增关注</text>
      <text class="empty-hint">功能开发中</text>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200rpx;
}

.empty-icon {
  font-size: 120rpx;
  margin-bottom: 24rpx;
}

.empty-text {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 16rpx;
}

.empty-hint {
  font-size: 24rpx;
  color: #999;
}
</style>
