<template>
  <view class="checkin-page">
    <!-- 顶部导航 -->
    <view class="header" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="header-content">
        <view class="back-btn" @tap="goBack">
          <text class="back-icon">‹</text>
        </view>
        <view class="user-info">
          <image
            src="/static/images/img-15.jpg"
            class="avatar"
            mode="aspectFill"
          />
          <text class="username">张晓明</text>
        </view>
      </view>
    </view>

    <!-- 打卡类型标签页 -->
    <view class="tabs">
      <scroll-view class="tabs-scroll" scroll-x>
        <view
          v-for="tab in tabs"
          :key="tab.id"
          :class="['tab-item', activeTab === tab.id ? 'active' : '']"
          @tap="switchTab(tab.id)"
        >
          <text class="tab-text">{{ tab.name }}</text>
          <view v-if="activeTab === tab.id" class="tab-line"></view>
        </view>
      </scroll-view>
    </view>

    <!-- 主要内容区 -->
    <scroll-view class="content" scroll-y>
      <!-- 日历组件 -->
      <CheckInCalendar
        :checked-dates="checkedDates"
        @day-selected="onDaySelected"
        @month-changed="onMonthChanged"
      />

      <!-- 动态组件切换 -->
      <DietCheckIn v-if="activeTab === 'diet'" @submit="handleCheckInSubmit" />
      <ExerciseCheckIn v-else-if="activeTab === 'exercise'" @submit="handleCheckInSubmit" />
      <MoodCheckIn v-else-if="activeTab === 'mood'" @submit="handleCheckInSubmit" />
      <SleepCheckIn v-else-if="activeTab === 'sleep'" @submit="handleCheckInSubmit" />
      <MetabolismCheckIn v-else-if="activeTab === 'metabolism'" @submit="handleCheckInSubmit" />

      <!-- 底部提示 -->
      <view class="footer-tip">
        <text class="tip-text">
          为了您的隐私，唤醒兽的公开动态仅唤醒家可见，私密动态则仅您自己可见
        </text>
      </view>
    </scroll-view>

    <!-- 成功提示Toast -->
    <view v-if="showToast" class="toast">
      <text class="toast-icon">✓</text>
      <text class="toast-text">{{ toastMessage }}</text>
    </view>
  </view>
</template>

<script>
import CheckInCalendar from '@/components/CheckInCalendar.vue';
import DietCheckIn from '@/components/DietCheckIn.vue';
import ExerciseCheckIn from '@/components/ExerciseCheckIn.vue';
import MoodCheckIn from '@/components/MoodCheckIn.vue';
import SleepCheckIn from '@/components/SleepCheckIn.vue';
import MetabolismCheckIn from '@/components/MetabolismCheckIn.vue';

export default {
  name: 'CheckInPage',
  components: {
    CheckInCalendar,
    DietCheckIn,
    ExerciseCheckIn,
    MoodCheckIn,
    SleepCheckIn,
    MetabolismCheckIn
  },
  data() {
    return {
      statusBarHeight: 0,
      activeTab: 'diet',
      tabs: [
        { id: 'diet', name: '饮食打卡' },
        { id: 'exercise', name: '运动打卡' },
        { id: 'mood', name: '心情打卡' },
        { id: 'sleep', name: '睡眠打卡' },
        { id: 'metabolism', name: '代谢打卡' }
      ],
      checkedDates: ['2025-10-12', '2025-10-13'],
      showToast: false,
      toastMessage: ''
    };
  },
  computed: {
    activeTabName() {
      const tab = this.tabs.find(t => t.id === this.activeTab);
      return tab ? tab.name : '打卡';
    }
  },
  onLoad() {
    const systemInfo = uni.getSystemInfoSync();
    this.statusBarHeight = systemInfo.statusBarHeight;
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    
    switchTab(tabId) {
      this.activeTab = tabId;
    },
    
    onDaySelected(dateStr) {
      console.log('选择日期:', dateStr);
    },
    
    onMonthChanged({ year, month }) {
      console.log('切换月份:', year, month);
    },
    
    handleCheckInSubmit(checkInData) {
      console.log('打卡数据:', checkInData);
      
      // 添加今天到已打卡日期
      const today = new Date().toISOString().split('T')[0];
      if (!this.checkedDates.includes(today)) {
        this.checkedDates.push(today);
      }
      
      // 显示成功提示
      const visibilityText = checkInData.visibility === 'public' ? '公开' : '私密';
      this.toastMessage = `${visibilityText}打卡成功！`;
      this.showToast = true;
      
      // 3秒后隐藏提示
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
.checkin-page {
  min-height: 100vh;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #ffffff;
  border-bottom: 2rpx solid #f0f0f0;
}

.header-content {
  display: flex;
  align-items: center;
  padding: 24rpx;
}

.back-btn {
  width: 48rpx;
  height: 48rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24rpx;
}

.back-icon {
  font-size: 56rpx;
  color: #333333;
  font-weight: bold;
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 64rpx;
  height: 64rpx;
  border-radius: 50%;
  border: 4rpx solid #f0f0f0;
  margin-right: 16rpx;
}

.username {
  font-size: 24rpx;
  color: #333333;
}

.tabs {
  background: #ffffff;
  border-bottom: 2rpx solid #f0f0f0;
}

.tabs-scroll {
  white-space: nowrap;
}

.tab-item {
  display: inline-block;
  padding: 24rpx 0;
  margin: 0 24rpx;
  position: relative;
}

.tab-text {
  font-size: 28rpx;
  color: #666666;
}

.tab-item.active .tab-text {
  color: #ff5722;
  font-weight: bold;
}

.tab-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rpx;
  background: #ff5722;
  border-radius: 2rpx;
}

.content {
  flex: 1;
  background: #f8f8f8;
}

.footer-tip {
  padding: 32rpx;
}

.tip-text {
  display: block;
  text-align: center;
  color: #999999;
  font-size: 20rpx;
  line-height: 1.6;
}

.toast {
  position: fixed;
  top: 160rpx;
  left: 50%;
  transform: translateX(-50%);
  background: #67c23a;
  color: #ffffff;
  padding: 24rpx 48rpx;
  border-radius: 16rpx;
  box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.15);
  z-index: 100;
  display: flex;
  align-items: center;
  animation: fadeIn 0.3s;
}

.toast-icon {
  font-size: 32rpx;
  margin-right: 16rpx;
}

.toast-text {
  font-size: 28rpx;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-20rpx);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>
