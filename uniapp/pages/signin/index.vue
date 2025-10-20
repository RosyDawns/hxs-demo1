<template>
  <view class="page">
    <view class="bg-decorations">
      <view class="circle circle-1"></view>
      <view class="circle circle-2"></view>
      <view class="circle circle-3"></view>
    </view>

    <view class="login-card">
      <view class="header">
        <image src="https://picsum.photos/id/20/96/96" class="logo" mode="aspectFill" />
        <text class="title">唤醒狮</text>
        <text class="subtitle">发现最好的自己</text>
      </view>

      <view class="form">
        <view class="input-group">
          <text class="input-icon">📱</text>
          <input v-model="phone" type="number" placeholder="请输入手机号" class="input" maxlength="11" />
        </view>

        <view class="input-group code-group">
          <text class="input-icon">🛡️</text>
          <input v-model="code" type="text" placeholder="请输入验证码" class="input flex-input" maxlength="6" />
          <button class="code-btn" @tap="getCode" :disabled="countdown > 0">
            {{ countdown > 0 ? `${countdown}s` : '获取验证码' }}
          </button>
        </view>

        <button class="login-btn" @tap="handleLogin">登录</button>

        <view class="divider">
          <view class="line"></view>
          <text class="divider-text">其他登录方式</text>
          <view class="line"></view>
        </view>

        <view class="social-login">
          <view class="social-item" @tap="handleWechatLogin">
            <view class="social-icon wechat">💬</view>
            <text class="social-text">微信登录</text>
          </view>
          <view class="social-item" @tap="handleWeiboLogin">
            <view class="social-icon weibo">📱</view>
            <text class="social-text">微博登录</text>
          </view>
          <view class="social-item" @tap="handleQQLogin">
            <view class="social-icon qq">💙</view>
            <text class="social-text">QQ登录</text>
          </view>
        </view>

        <view class="agreement">
          <text class="agreement-text">登录即表示您同意我们的</text>
          <text class="link" @tap="handleAgreement('user')">《用户协议》</text>
          <text class="agreement-text">和</text>
          <text class="link" @tap="handleAgreement('privacy')">《隐私政策》</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      code: '',
      countdown: 0,
      timer: null,
    };
  },
  methods: {
    getCode() {
      if (!this.phone || this.phone.length !== 11) {
        uni.showToast({ title: '请输入正确的手机号', icon: 'none' });
        return;
      }
      
      this.countdown = 60;
      this.timer = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(this.timer);
        }
      }, 1000);
      
      uni.showToast({ title: '验证码已发送', icon: 'success' });
    },
    handleLogin() {
      if (!this.phone || !this.code) {
        uni.showToast({ title: '请输入手机号和验证码', icon: 'none' });
        return;
      }
      uni.showToast({ title: '登录成功', icon: 'success' });
      setTimeout(() => {
        uni.switchTab({ url: '/pages/index/index' });
      }, 1500);
    },
    handleWechatLogin() {
      uni.showToast({ title: '微信登录功能开发中', icon: 'none' });
    },
    handleWeiboLogin() {
      uni.showToast({ title: '微博登录功能开发中', icon: 'none' });
    },
    handleQQLogin() {
      uni.showToast({ title: 'QQ登录功能开发中', icon: 'none' });
    },
    handleAgreement(type) {
      const url = type === 'user' ? '/pages/user-agreement/index' : '/pages/privacy-policy/index';
      uni.navigateTo({ url });
    },
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.bg-decorations {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.08;
}

.circle-1 {
  width: 1200rpx;
  height: 1200rpx;
  background: #3b82f6;
  top: -400rpx;
  left: -200rpx;
}

.circle-2 {
  width: 1600rpx;
  height: 1600rpx;
  background: #ec4899;
  bottom: -600rpx;
  right: -400rpx;
}

.circle-3 {
  width: 800rpx;
  height: 800rpx;
  background: #f59e0b;
  top: 33%;
  right: 25%;
}

.login-card {
  position: relative;
  z-index: 1;
  max-width: 640rpx;
  margin: 240rpx auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20rpx);
  border-radius: 48rpx;
  padding: 80rpx 64rpx;
  box-shadow: 0 40rpx 120rpx rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80rpx;
}

.logo {
  width: 160rpx;
  height: 160rpx;
  border-radius: 32rpx;
  margin-bottom: 32rpx;
  box-shadow: 0 16rpx 48rpx rgba(0, 0, 0, 0.15);
}

.title {
  font-size: 56rpx;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 12rpx;
}

.subtitle {
  font-size: 26rpx;
  color: #9ca3af;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 32rpx;
}

.input-group {
  display: flex;
  align-items: center;
  background: white;
  border: 4rpx solid #f3f4f6;
  border-radius: 20rpx;
  padding: 28rpx 24rpx;
}

.input-icon {
  font-size: 40rpx;
  margin-right: 16rpx;
}

.input {
  flex: 1;
  font-size: 28rpx;
  border: none;
}

.code-group {
  padding-right: 16rpx;
}

.flex-input {
  flex: 1;
}

.code-btn {
  background: white;
  color: #ff6b6b;
  border: 2rpx solid #ff6b6b;
  border-radius: 16rpx;
  padding: 16rpx 28rpx;
  font-size: 24rpx;
  white-space: nowrap;
}

.code-btn[disabled] {
  opacity: 0.5;
}

.login-btn {
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
  color: white;
  border: none;
  border-radius: 20rpx;
  padding: 32rpx;
  font-size: 32rpx;
  font-weight: bold;
  box-shadow: 0 8rpx 24rpx rgba(255, 107, 107, 0.3);
}

.divider {
  display: flex;
  align-items: center;
  gap: 24rpx;
  margin: 32rpx 0;
}

.line {
  flex: 1;
  height: 2rpx;
  background: #e5e7eb;
}

.divider-text {
  font-size: 24rpx;
  color: #9ca3af;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 64rpx;
}

.social-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
}

.social-icon {
  width: 112rpx;
  height: 112rpx;
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48rpx;
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.08);
}

.social-icon.wechat {
  background: #d1fae5;
}

.social-icon.weibo {
  background: #fee2e2;
}

.social-icon.qq {
  background: #dbeafe;
}

.social-text {
  font-size: 22rpx;
  color: #6b7280;
}

.agreement {
  text-align: center;
  font-size: 22rpx;
  color: #9ca3af;
  line-height: 1.8;
  margin-top: 16rpx;
}

.agreement-text {
  color: #9ca3af;
}

.link {
  color: #ff6b6b;
}
</style>
