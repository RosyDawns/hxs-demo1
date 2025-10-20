<template>
  <view class="page">
    <view class="success-card">
      <view class="card-header">
        <view class="header-left">
          <text class="title">签到成功！</text>
          <text class="subtitle">已连续签到 {{ consecutiveDays }} 天</text>
        </view>
        <view class="reward-badge">
          <text class="reward-icon">🎁</text>
          <text class="reward-text">今日奖励: +20能量</text>
        </view>
      </view>
      
      <view class="progress-bar">
        <view class="progress-fill" :style="{ width: progressPercentage + '%' }"></view>
      </view>
      <view class="progress-info">
        <text>进度: {{ consecutiveDays }}/30天</text>
        <text>距离大奖还剩: {{ 30 - consecutiveDays }}天</text>
      </view>
    </view>

    <view class="calendar-card">
      <view class="calendar-header">
        <text class="calendar-title">签到日历</text>
        <text class="calendar-date">{{ currentYear }}年{{ currentMonth }}月</text>
      </view>

      <view class="week-header">
        <text v-for="day in weekDays" :key="day">{{ day }}</text>
      </view>

      <view class="calendar-grid">
        <view
          v-for="(day, index) in prevMonthDays"
          :key="'prev-' + index"
          class="day-cell prev-month"
        >
          {{ day }}
        </view>
        <view
          v-for="day in daysInMonth"
          :key="day"
          :class="getDayClass(day)"
          class="day-cell"
        >
          {{ day }}
        </view>
        <view
          v-for="(day, index) in nextMonthDays"
          :key="'next-' + index"
          class="day-cell next-month"
        >
          {{ day }}
        </view>
      </view>
    </view>

    <view class="rewards-card">
      <text class="section-title">连续签到奖励</text>
      <scroll-view scroll-x class="rewards-scroll">
        <view class="reward-item" v-for="reward in rewards" :key="reward.day">
          <view :class="['reward-icon-box', reward.active ? 'active' : 'inactive']">
            <text class="reward-emoji">{{ reward.icon }}</text>
          </view>
          <text class="reward-label">{{ reward.label }}</text>
          <text class="reward-day">第{{ reward.day }}天</text>
        </view>
      </scroll-view>
    </view>

    <button class="signin-btn" :disabled="isSignedToday" @tap="handleSignin">
      {{ isSignedToday ? '今日已签到' : '立即签到' }}
    </button>
  </view>
</template>

<script>
export default {
  data() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();
    
    return {
      consecutiveDays: 7,
      isSignedToday: true,
      progressPercentage: 23,
      currentYear: year,
      currentMonth: month,
      currentDay: day,
      daysInMonth: daysInMonth,
      firstDayOfMonth: firstDay,
      weekDays: ['日', '一', '二', '三', '四', '五', '六'],
      rewards: [
        { day: 1, icon: '⚡', label: '+5能量', active: true },
        { day: 3, icon: '⚡', label: '+10能量', active: true },
        { day: 7, icon: '🎁', label: '小礼包', active: true },
        { day: 15, icon: '⚡', label: '+20能量', active: false },
        { day: 25, icon: '🎁', label: '中礼包', active: false },
        { day: 30, icon: '🏆', label: '大奖', active: false },
      ],
    };
  },
  computed: {
    prevMonthDays() {
      const days = [];
      const prevMonth = new Date(this.currentYear, this.currentMonth - 1, 0);
      const prevMonthLastDay = prevMonth.getDate();
      for (let i = this.firstDayOfMonth - 1; i >= 0; i--) {
        days.push(prevMonthLastDay - i);
      }
      return days;
    },
    nextMonthDays() {
      const days = [];
      const totalDays = this.prevMonthDays.length + this.daysInMonth;
      const remaining = 42 - totalDays;
      for (let i = 1; i <= remaining; i++) {
        days.push(i);
      }
      return days;
    },
  },
  methods: {
    getDayClass(day) {
      if (day === this.currentDay) {
        return 'current-day';
      } else if (day <= this.consecutiveDays) {
        return 'signed-day';
      }
      return 'normal-day';
    },
    handleSignin() {
      if (!this.isSignedToday) {
        this.isSignedToday = true;
        this.consecutiveDays++;
        uni.showToast({ title: '签到成功！', icon: 'success' });
      }
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #fef3c7 0%, #f5f5f5 100%);
  padding: 24rpx;
}

.success-card {
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
  border-radius: 24rpx;
  padding: 40rpx 32rpx;
  color: white;
  margin-bottom: 24rpx;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32rpx;
}

.header-left {
  flex: 1;
}

.title {
  font-size: 48rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 12rpx;
}

.subtitle {
  font-size: 26rpx;
  opacity: 0.9;
}

.reward-badge {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50rpx;
  padding: 16rpx 24rpx;
  display: flex;
  align-items: center;
  gap: 8rpx;
  backdrop-filter: blur(10rpx);
}

.reward-icon {
  font-size: 28rpx;
}

.reward-text {
  font-size: 24rpx;
}

.progress-bar {
  height: 8rpx;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4rpx;
  overflow: hidden;
  margin-bottom: 16rpx;
}

.progress-fill {
  height: 100%;
  background: white;
  border-radius: 4rpx;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: 22rpx;
  opacity: 0.9;
}

.calendar-card {
  background: white;
  border-radius: 24rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24rpx;
}

.calendar-title {
  font-size: 32rpx;
  font-weight: bold;
}

.calendar-date {
  font-size: 26rpx;
  color: #999;
}

.week-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 16rpx;
  font-size: 24rpx;
  color: #999;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8rpx;
}

.day-cell {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12rpx;
  font-size: 26rpx;
}

.prev-month,
.next-month {
  color: #d1d5db;
  background: #f9fafb;
}

.normal-day {
  border: 2rpx solid #e5e7eb;
}

.signed-day {
  background: #10b981;
  color: white;
}

.current-day {
  background: #ff6b6b;
  color: white;
  font-weight: bold;
}

.rewards-card {
  background: white;
  border-radius: 24rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 24rpx;
}

.rewards-scroll {
  white-space: nowrap;
}

.reward-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-right: 32rpx;
}

.reward-icon-box {
  width: 120rpx;
  height: 120rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12rpx;
}

.reward-icon-box.active {
  background: rgba(255, 107, 107, 0.1);
}

.reward-icon-box.inactive {
  background: #f3f4f6;
}

.reward-emoji {
  font-size: 48rpx;
}

.reward-label {
  font-size: 24rpx;
  color: #333;
  display: block;
  margin-bottom: 4rpx;
}

.reward-day {
  font-size: 20rpx;
  color: #999;
}

.signin-btn {
  width: 100%;
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
  color: white;
  border: none;
  border-radius: 50rpx;
  padding: 32rpx;
  font-size: 32rpx;
  font-weight: bold;
}

.signin-btn[disabled] {
  opacity: 0.5;
}
</style>
