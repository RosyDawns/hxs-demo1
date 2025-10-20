<template>
  <view class="settings-page">
    <!-- 顶部导航 -->
    <view class="header" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="header-content">
        <view class="back-btn" @tap="goBack">
          <text class="back-icon">‹</text>
        </view>
        <text class="header-title">设置</text>
      </view>
    </view>

    <!-- 主要内容 -->
    <scroll-view class="content" scroll-y>
      <!-- 菜单列表 -->
      <view
        v-for="(item, index) in menuItems"
        :key="index"
        :class="['menu-item', { 'has-margin': item.margin }]"
        @tap="handleMenuClick(item)"
      >
        <text class="menu-label">{{ item.label }}</text>
        <view class="menu-right">
          <text v-if="item.value" class="menu-value">{{ item.value }}</text>
          <text class="menu-arrow">›</text>
        </view>
      </view>

      <!-- 退出登录按钮 -->
      <view class="logout-section">
        <view class="logout-btn" @tap="handleLogout">
          <text class="logout-text">退出登录</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      statusBarHeight: 0,
      menuItems: [
        { label: '个人资料', route: '/pages/profile/index', margin: true },
        { label: '账号与安全', route: '/pages/account-security/index' },
        {
          label: '消息通知设置',
          route: '/pages/notification-settings/index',
          margin: true
        },
        { label: '隐私管理', route: '/pages/privacy/index' },
        { label: '通用', route: '/pages/general/index' },
        { label: '隐私政策', route: '/pages/privacy-policy/index', margin: true },
        { label: '个人信息收集清单', route: '/pages/data-collection/index' },
        { label: '第三方信息数据共享', route: '/pages/data-sharing/index' },
        { label: '意见反馈', route: '/pages/feedback/index' },
        { label: '关于我们', route: '/pages/about/index' },
        { label: '热线电话', value: '10000100' }
      ]
    };
  },
  onLoad() {
    const systemInfo = uni.getSystemInfoSync();
    this.statusBarHeight = systemInfo.statusBarHeight;
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    
    handleMenuClick(item) {
      if (item.route) {
        uni.navigateTo({
          url: item.route
        });
      }
    },
    
    handleLogout() {
      uni.showModal({
        title: '提示',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            uni.reLaunch({
              url: '/pages/signin/index'
            });
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.settings-page {
  min-height: 100vh;
  background: #f5f5f5;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #ffffff;
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
}

.back-icon {
  font-size: 56rpx;
  color: #333333;
  font-weight: bold;
}

.header-title {
  font-size: 36rpx;
  font-weight: 500;
  color: #000000;
  margin-left: 24rpx;
}

.content {
  height: calc(100vh - 100rpx);
  padding-top: 26rpx;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28rpx 32rpx;
  background: #ffffff;
  border-bottom: 2rpx solid #f0f0f0;
}

.menu-item.has-margin {
  margin-top: 16rpx;
}

.menu-label {
  font-size: 30rpx;
  color: #333333;
}

.menu-right {
  display: flex;
  align-items: center;
}

.menu-value {
  font-size: 28rpx;
  color: #999999;
  margin-right: 16rpx;
}

.menu-arrow {
  font-size: 32rpx;
  color: #999999;
}

.logout-section {
  margin-top: 16rpx;
}

.logout-btn {
  width: 100%;
  background: #ffffff;
  padding: 28rpx 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logout-text {
  font-size: 30rpx;
  color: #333333;
}
</style>
