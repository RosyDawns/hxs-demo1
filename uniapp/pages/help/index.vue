<template>
  <view class="page">
    <view class="content">
      <view class="section">
        <view class="section-title">常见问题</view>
        <view class="question-list">
          <view
            v-for="(item, index) in commonQuestions"
            :key="index"
            class="question-item"
            @tap="handleQuestionClick(item)"
          >
            <text class="question-text">{{ item }}</text>
            <text class="arrow">›</text>
          </view>
        </view>
      </view>

      <view class="section">
        <view class="section-title">联系客服</view>
        <view class="contact-section">
          <button class="contact-btn" @tap="handleContact">
            <text class="icon">💬</text>
            <text class="btn-text">在线客服</text>
          </button>
        </view>
      </view>

      <view class="section">
        <view class="section-title">联系方式</view>
        <view class="contact-info">
          <view class="info-item">
            <text class="info-label">客服电话</text>
            <text class="info-value">400-888-8888</text>
          </view>
          <view class="info-item">
            <text class="info-label">工作时间</text>
            <text class="info-value">周一至周日 9:00-21:00</text>
          </view>
          <view class="info-item">
            <text class="info-label">客服邮箱</text>
            <text class="info-value">service@huanxingshi.com</text>
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
      commonQuestions: [
        "如何预约课程？",
        "如何使用优惠券？",
        "如何查看我的订单？",
        "如何申请退款？",
        "如何成为唤醒师？",
        "如何修改个人信息？",
      ],
    };
  },
  methods: {
    handleQuestionClick(question) {
      uni.showToast({ title: "查看帮助: " + question, icon: "none" });
    },
    handleContact() {
      uni.showToast({ title: "正在连接客服...", icon: "none" });
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.content {
  padding: 24rpx;
}

.section {
  background: white;
  border-radius: 24rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 24rpx;
}

.question-list {
  display: flex;
  flex-direction: column;
}

.question-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24rpx 0;
  border-bottom: 2rpx solid #f0f0f0;
}

.question-item:last-child {
  border-bottom: none;
}

.question-text {
  font-size: 28rpx;
  color: #333;
}

.arrow {
  font-size: 40rpx;
  color: #999;
}

.contact-section {
  display: flex;
  justify-content: center;
}

.contact-btn {
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
  color: white;
  border-radius: 50rpx;
  padding: 24rpx 64rpx;
  display: flex;
  align-items: center;
  gap: 16rpx;
  border: none;
}

.icon {
  font-size: 32rpx;
}

.btn-text {
  font-size: 28rpx;
  font-weight: 500;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16rpx 0;
}

.info-label {
  font-size: 28rpx;
  color: #666;
}

.info-value {
  font-size: 28rpx;
  color: #333;
  font-weight: 500;
}
</style>
