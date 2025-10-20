<template>
  <view class="metabolism-checkin">
    <view class="content">
      <view class="title">肠胃通，减重才轻松</view>
      
      <!-- 代谢宣传卡 -->
      <view class="promo-card">
        <view class="icon-box">
          <text class="icon">🚽</text>
        </view>
        <view class="tips">
          <text class="tip-text">加强膳食纤维</text>
          <text class="tip-text">每日多喝水</text>
        </view>
      </view>
    </view>

    <view class="divider"></view>

    <!-- 代谢状态选项 -->
    <view class="status-options">
      <view
        v-for="status in metabolismStatuses"
        :key="status.value"
        :class="['status-item', selectedStatus === status.value ? 'active' : '']"
        @tap="selectStatus(status.value)"
      >
        <view :class="['status-icon', selectedStatus === status.value ? 'selected' : '']">
          <text class="emoji">{{ status.emoji }}</text>
        </view>
        <text class="status-label">{{ status.label }}</text>
      </view>
    </view>

    <view class="divider"></view>

    <!-- 动态按钮 -->
    <view class="actions">
      <view :class="['action-btn', 'primary', !canSubmit ? 'disabled' : '']" @tap="submitCheckIn('private')">
        私密保存
      </view>
      <view :class="['action-btn', 'secondary', !canSubmit ? 'disabled' : '']" @tap="submitCheckIn('public')">
        同步动态
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'MetabolismCheckIn',
  emits: ['submit'],
  data() {
    return {
      selectedStatus: 'smooth',
      metabolismStatuses: [
        { value: 'smooth', label: '顺畅', emoji: '💧' },
        { value: 'fair', label: '意犹未尽', emoji: '😐' },
        { value: 'difficult', label: '困难', emoji: '😣' }
      ]
    };
  },
  computed: {
    canSubmit() {
      return this.selectedStatus !== '';
    }
  },
  methods: {
    selectStatus(status) {
      this.selectedStatus = status;
    },
    
    submitCheckIn(visibility) {
      if (!this.canSubmit) return;
      
      const checkInData = {
        type: 'metabolism',
        status: this.selectedStatus,
        visibility,
        timestamp: new Date().toISOString()
      };
      
      this.$emit('submit', checkInData);
      this.resetForm();
    },
    
    resetForm() {
      this.selectedStatus = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.metabolism-checkin {
  padding-bottom: 32rpx;
}

.content {
  padding: 0 32rpx;
}

.title {
  font-size: 40rpx;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32rpx;
}

.promo-card {
  background: linear-gradient(90deg, #67e8f9 0%, #60a5fa 100%);
  border-radius: 24rpx;
  padding: 48rpx;
  color: #ffffff;
  margin-bottom: 32rpx;
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32rpx;
}

.icon {
  font-size: 96rpx;
}

.tips {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
}

.tip-text {
  font-size: 28rpx;
}

.divider {
  height: 2rpx;
  background: #f5f5f5;
  margin: 32rpx 0;
}

.status-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32rpx;
  padding: 24rpx 32rpx;
}

.status-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24rpx 0;
  opacity: 0.7;
  transition: all 0.3s;
}

.status-item.active {
  opacity: 1;
  transform: scale(1.05);
}

.status-icon {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16rpx;
  transition: background 0.3s;
}

.status-icon.selected {
  background: #fff3e0;
}

.emoji {
  font-size: 64rpx;
}

.status-label {
  font-size: 28rpx;
  color: #666666;
}

.status-item.active .status-label {
  color: #333333;
  font-weight: bold;
}

.actions {
  display: flex;
  gap: 24rpx;
  padding: 0 32rpx;
}

.action-btn {
  flex: 1;
  padding: 24rpx 0;
  border-radius: 999rpx;
  font-size: 32rpx;
  font-weight: bold;
  text-align: center;
}

.action-btn.primary {
  background: linear-gradient(90deg, #ff9800 0%, #ff5722 100%);
  color: #ffffff;
}

.action-btn.secondary {
  background: #f5f5f5;
  color: #666666;
}

.action-btn.disabled {
  background: #e0e0e0;
  color: #999999;
}
</style>
