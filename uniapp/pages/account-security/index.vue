<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <view class="back-btn" @tap="goBack">
        <text class="back-icon">‹</text>
      </view>
      <text class="title">账号与安全</text>
    </view>

    <!-- 主内容 -->
    <scroll-view scroll-y class="content">
      <!-- 账号信息 -->
      <view class="section">
        <view class="card">
          <view class="item border" @tap="handleItemClick('phone')">
            <text class="label">手机号</text>
            <view class="value-box">
              <text class="value-text">+86 181****3973</text>
              <text class="arrow">›</text>
            </view>
          </view>
          <view class="item" @tap="handleItemClick('password')">
            <text class="label">登录密码</text>
            <view class="value-box">
              <text class="value-text placeholder">未设置</text>
              <text class="arrow">›</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 第三方绑定 -->
      <view class="section">
        <view class="card">
          <view class="item" @tap="handleItemClick('third-party')">
            <text class="label">第三方账号绑定</text>
            <view class="value-box">
              <text class="value-text placeholder">未绑定</text>
              <text class="arrow">›</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 认证 -->
      <view class="section">
        <view class="card">
          <view class="item border" @tap="handleItemClick('real-name')">
            <text class="label">实名认证</text>
            <view class="value-box">
              <text class="value-text placeholder">未认证</text>
              <text class="arrow">›</text>
            </view>
          </view>
          <view class="item-detail border" @tap="handleItemClick('official')">
            <view class="detail-top">
              <text class="label">官方认证</text>
              <view class="value-box">
                <text class="value-text placeholder">未认证</text>
                <text class="arrow">›</text>
              </view>
            </view>
            <text class="desc">个人职业资质、机构、企业认证</text>
          </view>
          <view class="item" @tap="handleItemClick('video')">
            <text class="label">视频认证</text>
            <view class="value-box">
              <text class="value-text placeholder">未认证</text>
              <text class="arrow">›</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 登录设置 -->
      <view class="section">
        <view class="card">
          <view class="item border">
            <text class="label">记住登录信息</text>
            <switch :checked="rememberLogin" @change="onSwitchChange" color="#FF3B30" />
          </view>
          <view class="item border" @tap="handleItemClick('device')">
            <text class="label">登录设备管理</text>
            <text class="arrow">›</text>
          </view>
          <view class="item" @tap="handleItemClick('auth')">
            <text class="label">账号授权管理</text>
            <text class="arrow">›</text>
          </view>
        </view>
      </view>

      <!-- 账号找回 -->
      <view class="section">
        <view class="card">
          <view class="item-detail" @tap="handleItemClick('recovery')">
            <view class="detail-top">
              <text class="label">账号找回</text>
              <text class="arrow">›</text>
            </view>
            <text class="desc">无法登录其他账号，通过该方式找回并登录</text>
          </view>
        </view>
      </view>

      <!-- 注销账号 -->
      <view class="section">
        <view class="card">
          <view class="item" @tap="handleItemClick('delete')">
            <text class="label">注销账号</text>
            <text class="arrow">›</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      rememberLogin: true
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    onSwitchChange(e) {
      this.rememberLogin = e.detail.value
    },
    handleItemClick(key) {
      console.log('点击', key)
      uni.showToast({ title: `${key}功能开发中`, icon: 'none' })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #f7f7f7;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 96rpx;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 24rpx;
  z-index: 50;
}

.back-btn {
  width: 80rpx;
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -16rpx;
}

.back-icon {
  font-size: 36rpx;
  color: #333;
}

.title {
  flex: 1;
  text-align: center;
  font-size: 28rpx;
  font-weight: 500;
  color: #333;
  margin-left: -64rpx;
}

.content {
  padding-top: 96rpx;
  padding-bottom: 32rpx;
}

.section {
  padding: 0 32rpx;
  margin-bottom: 20rpx;
}

.card {
  background: #fff;
  border-radius: 16rpx;
  overflow: hidden;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32rpx;
  height: 104rpx;
  
  &.border {
    border-bottom: 1rpx solid #f0f0f0;
  }
}

.item-detail {
  padding: 24rpx 32rpx;
  
  &.border {
    border-bottom: 1rpx solid #f0f0f0;
  }
}

.detail-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8rpx;
}

.label {
  font-size: 28rpx;
  color: #333;
}

.value-box {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.value-text {
  font-size: 26rpx;
  color: #333;
  
  &.placeholder {
    color: #c7c7c7;
  }
}

.arrow {
  font-size: 28rpx;
  color: #d8d8d8;
}

.desc {
  font-size: 24rpx;
  color: #c7c7c7;
  line-height: 1.5;
}
</style>
