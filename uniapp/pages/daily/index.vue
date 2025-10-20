<template>
  <view class="page" id="page-daily">
    <!-- 顶部标签 -->
    <view class="tabs">
      <view class="tab" :class="{ active: activeTab === 'home' }" @tap="activeTab = 'home'">主页</view>
      <view class="tab" :class="{ active: activeTab === 'activity' }" @tap="activeTab = 'activity'">动态</view>
      <view class="tab" :class="{ active: activeTab === 'coach' }" @tap="activeTab = 'coach'">唤醒师</view>
    </view>

    <!-- 内容区 -->
    <view class="content">
      <DailyHome v-if="activeTab === 'home'" />
      <DailyActivity v-else-if="activeTab === 'activity'" />
      <DailyCoach v-else />
    </view>
  </view>
</template>

<script>
import DailyHome from '@/components/daily/DailyHome.vue'
import DailyActivity from '@/components/daily/DailyActivity.vue'
import DailyCoach from '@/components/daily/DailyCoach.vue'

export default {
  components: { DailyHome, DailyActivity, DailyCoach },
  data() {
    return {
      activeTab: 'home'
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #f7f7f7;
}
.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-bottom: 1rpx solid #f0f0f0;
}
.tab {
  padding: 24rpx 40rpx;
  font-size: 28rpx;
  color: #666;
}
.tab.active {
  color: #ff6b6b;
  font-weight: 600;
  border-bottom: 4rpx solid #ff6b6b;
}
.content {
  padding-bottom: 140rpx;
}
</style>
