<template>
  <view class="page">
    <view class="empty-container">
      <text class="empty-icon">📍</text>
      <text class="empty-text">暂无收货地址</text>
      <button class="add-btn" @tap="handleAdd">添加地址</button>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    handleAdd() {
      uni.showToast({ title: "功能开发中", icon: "none" });
    },
  },
};
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
  font-size: 28rpx;
  color: #999;
  margin-bottom: 32rpx;
}

.add-btn {
  background-color: #ff6b6b;
  color: white;
  border-radius: 50rpx;
  padding: 20rpx 48rpx;
  font-size: 28rpx;
}
</style>
