<template>
  <view class="sleep-checkin">
    <view class="content">
      <view class="title">深夜不睡，熬肉煮腱胖!</view>
      
      <!-- 时间选择器 -->
      <view class="time-pickers">
        <view class="time-picker-item">
          <view class="time-display">
            <text class="time-label">{{ formatTime(sleepTime, -1) }}</text>
            <text class="time-main">{{ formatTime(sleepTime) }}</text>
            <text class="time-label">{{ formatTime(sleepTime, 1) }}</text>
          </view>
          <view :class="['btn', sleepStarted ? 'active' : '']" @tap="showSleepPicker">
            {{ sleepStarted ? '已开始' : '睡眠开始' }}
          </view>
        </view>
        
        <view class="time-picker-item">
          <view class="time-display">
            <text class="time-label">{{ formatTime(wakeTime, -1) }}</text>
            <text class="time-main">{{ formatTime(wakeTime) }}</text>
            <text class="time-label">{{ formatTime(wakeTime, 1) }}</text>
          </view>
          <view :class="['btn', wakeEnded ? 'active' : '']" @tap="showWakePicker">
            {{ wakeEnded ? '已结束' : '睡眠结束' }}
          </view>
        </view>
      </view>
    </view>

    <view class="divider"></view>

    <!-- 动态按钮 -->
    <view class="actions">
      <view :class="['action-btn', 'primary', !canSubmit ? 'disabled' : '']" @tap="submitCheckIn('public')">
        公开动态
      </view>
      <view :class="['action-btn', 'secondary', !canSubmit ? 'disabled' : '']" @tap="submitCheckIn('private')">
        私密动态
      </view>
    </view>

    <!-- 时间选择器 -->
    <picker
      v-if="showSleepTimePicker"
      mode="time"
      :value="sleepTime"
      @change="onSleepTimeChange"
      @cancel="showSleepTimePicker = false"
    >
      <view></view>
    </picker>

    <picker
      v-if="showWakeTimePicker"
      mode="time"
      :value="wakeTime"
      @change="onWakeTimeChange"
      @cancel="showWakeTimePicker = false"
    >
      <view></view>
    </picker>
  </view>
</template>

<script>
export default {
  name: 'SleepCheckIn',
  emits: ['submit'],
  data() {
    return {
      sleepTime: '22:00',
      wakeTime: '08:00',
      sleepStarted: true,
      wakeEnded: true,
      showSleepTimePicker: false,
      showWakeTimePicker: false
    };
  },
  computed: {
    canSubmit() {
      return this.sleepStarted && this.wakeEnded;
    },
    
    sleepDuration() {
      const [sleepHour, sleepMin] = this.sleepTime.split(':').map(Number);
      const [wakeHour, wakeMin] = this.wakeTime.split(':').map(Number);
      
      let duration = wakeHour * 60 + wakeMin - (sleepHour * 60 + sleepMin);
      if (duration < 0) duration += 24 * 60;
      
      return (duration / 60).toFixed(1);
    }
  },
  methods: {
    formatTime(time, offset = 0) {
      const [hour, min] = time.split(':').map(Number);
      let newHour = hour + offset;
      if (newHour < 0) newHour += 24;
      if (newHour >= 24) newHour -= 24;
      return `${String(newHour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
    },
    
    showSleepPicker() {
      this.showSleepTimePicker = true;
      uni.showPicker({
        mode: 'time',
        value: this.sleepTime,
        success: (res) => {
          this.sleepTime = res.value;
          this.sleepStarted = true;
        }
      });
    },
    
    showWakePicker() {
      this.showWakeTimePicker = true;
      uni.showPicker({
        mode: 'time',
        value: this.wakeTime,
        success: (res) => {
          this.wakeTime = res.value;
          this.wakeEnded = true;
        }
      });
    },
    
    onSleepTimeChange(e) {
      this.sleepTime = e.detail.value;
      this.sleepStarted = true;
      this.showSleepTimePicker = false;
    },
    
    onWakeTimeChange(e) {
      this.wakeTime = e.detail.value;
      this.wakeEnded = true;
      this.showWakeTimePicker = false;
    },
    
    submitCheckIn(visibility) {
      if (!this.canSubmit) return;
      
      const checkInData = {
        type: 'sleep',
        sleepTime: this.sleepTime,
        wakeTime: this.wakeTime,
        duration: this.sleepDuration,
        visibility,
        timestamp: new Date().toISOString()
      };
      
      this.$emit('submit', checkInData);
      this.resetForm();
    },
    
    resetForm() {
      this.sleepStarted = false;
      this.wakeEnded = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.sleep-checkin {
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

.time-pickers {
  display: flex;
  gap: 32rpx;
  margin-bottom: 32rpx;
}

.time-picker-item {
  flex: 1;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16rpx;
  backdrop-filter: blur(10rpx);
}

.time-display {
  background: #333333;
  border: 16rpx solid #ffeccf;
  border-radius: 32rpx;
  padding: 24rpx;
  margin-bottom: 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time-label {
  font-size: 56rpx;
  font-weight: bold;
  color: #999999;
}

.time-main {
  font-size: 56rpx;
  font-weight: bold;
  color: #ffffff;
}

.btn {
  width: 66%;
  margin: 0 auto 32rpx;
  background: #fff3e0;
  border: 2rpx solid #ff5722;
  color: #ff5722;
  padding: 16rpx 32rpx;
  border-radius: 999rpx;
  font-size: 28rpx;
  text-align: center;
}

.btn.active {
  background: #ff5722;
  color: #ffffff;
}

.divider {
  height: 2rpx;
  background: #f5f5f5;
  margin: 32rpx 0;
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
