<template>
  <view class="page">
    <view class="container">
      <view class="card">
        <view class="card-title">反馈类型</view>
        <view class="type-buttons">
          <button
            v-for="type in feedbackTypes"
            :key="type"
            :class="['type-btn', { active: selectedType === type }]"
            @tap="selectedType = type"
          >
            {{ type }}
          </button>
        </view>
      </view>

      <view class="card">
        <view class="card-title">反馈内容</view>
        <textarea
          v-model="content"
          class="textarea"
          placeholder="请详细描述您的问题或建议..."
          maxlength="500"
        />
        <text class="char-count">{{ content.length }}/500</text>
      </view>

      <view class="card">
        <view class="card-title">图片（选填，最多3张）</view>
        <view class="image-grid">
          <view
            v-for="i in 3"
            :key="i"
            class="image-item"
            @tap="handleUpload"
          >
            <text class="add-icon">+</text>
          </view>
        </view>
      </view>

      <view class="card">
        <view class="card-title">联系方式（选填）</view>
        <input
          v-model="contact"
          class="input"
          placeholder="手机号或邮箱，以便我们联系您"
        />
      </view>

      <button class="submit-btn" @tap="submitFeedback">提交反馈</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      feedbackTypes: ["功能建议", "问题反馈", "体验优化", "其他"],
      selectedType: "功能建议",
      content: "",
      contact: "",
    };
  },
  methods: {
    handleUpload() {
      uni.showToast({ title: "上传功能开发中", icon: "none" });
    },
    submitFeedback() {
      if (!this.content.trim()) {
        uni.showToast({ title: "请输入反馈内容", icon: "none" });
        return;
      }
      uni.showToast({ title: "感谢您的反馈！", icon: "success" });
      setTimeout(() => {
        uni.navigateBack();
      }, 1500);
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f9fafb 0%, #f3f4f6 100%);
}

.container {
  padding: 24rpx;
}

.card {
  background: white;
  border-radius: 24rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.03);
}

.card-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 24rpx;
}

.type-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
}

.type-btn {
  padding: 16rpx 32rpx;
  border-radius: 16rpx;
  background: #f3f4f6;
  color: #666;
  font-size: 26rpx;
  border: none;
}

.type-btn.active {
  background: #ff6b6b;
  color: white;
}

.textarea {
  width: 100%;
  min-height: 240rpx;
  padding: 24rpx;
  border: 4rpx solid #f0f0f0;
  border-radius: 16rpx;
  font-size: 28rpx;
  line-height: 1.6;
}

.char-count {
  display: block;
  text-align: right;
  font-size: 22rpx;
  color: #999;
  margin-top: 12rpx;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16rpx;
}

.image-item {
  aspect-ratio: 1;
  border: 4rpx dashed #e5e7eb;
  border-radius: 16rpx;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-icon {
  font-size: 48rpx;
  color: #d1d5db;
}

.input {
  width: 100%;
  padding: 24rpx;
  border: 4rpx solid #f0f0f0;
  border-radius: 16rpx;
  font-size: 28rpx;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
  color: white;
  padding: 28rpx;
  border-radius: 50rpx;
  font-size: 32rpx;
  font-weight: bold;
  border: none;
  box-shadow: 0 8rpx 24rpx rgba(255, 107, 107, 0.3);
}
</style>
