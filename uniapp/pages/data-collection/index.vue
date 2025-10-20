<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <view class="back-btn" @tap="goBack">
        <text class="back-icon">‹</text>
      </view>
      <text class="title">个人信息收集清单</text>
    </view>

    <!-- 主内容 -->
    <scroll-view scroll-y class="content">
      <view class="container">
        <view class="tip">
          根据《个人信息保护法》等相关法律法规，我们向您说明收集的个人信息类型及用途。
        </view>

        <view
          v-for="(item, index) in dataList"
          :key="index"
          class="card"
        >
          <view class="card-header">
            <view :class="['icon-box', item.iconBg]">
              <text :class="item.icon"></text>
            </view>
            <view class="header-text">
              <text class="card-title">{{ item.title }}</text>
              <view :class="['tag', item.required ? 'required' : 'optional']">
                {{ item.required ? '必需' : '可选' }}
              </view>
            </view>
          </view>
          <view class="card-body">
            <view class="info-item">
              <text class="label">收集内容：</text>
              <text class="value">{{ item.content }}</text>
            </view>
            <view class="info-item">
              <text class="label">使用目的：</text>
              <text class="value">{{ item.purpose }}</text>
            </view>
            <view class="info-item">
              <text class="label">使用场景：</text>
              <text class="value">{{ item.scenario }}</text>
            </view>
          </view>
        </view>

        <view class="notice">
          <view class="notice-title">
            <text class="notice-icon">ℹ️</text>
            <text class="notice-title-text">权限说明</text>
          </view>
          <text class="notice-text">
            您可以在设备的设置中随时关闭相关权限。关闭后，我们将无法为您提供与该权限相关的服务，但不影响您使用其他功能。
          </text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          title: '账号信息',
          content: '手机号码、昵称、头像、性别、生日',
          purpose: '创建和管理您的账号',
          scenario: '注册、登录、个人资料展示',
          required: true,
          icon: 'icon-user',
          iconBg: 'blue'
        },
        {
          title: '设备信息',
          content: '设备型号、操作系统版本、设备标识符',
          purpose: '保障服务稳定运行和安全',
          scenario: '应用启动、功能使用',
          required: true,
          icon: 'icon-device',
          iconBg: 'green'
        },
        {
          title: '位置信息',
          content: 'GPS位置、IP地址',
          purpose: '提供本地化服务和内容推荐',
          scenario: '查找附近训练营、位置相关服务',
          required: false,
          icon: 'icon-location',
          iconBg: 'red'
        },
        {
          title: '使用数据',
          content: '训练营参与记录、打卡数据、浏览历史',
          purpose: '提供个性化服务和分析优化',
          scenario: '数据分析、内容推荐',
          required: false,
          icon: 'icon-chart',
          iconBg: 'purple'
        },
        {
          title: '相机和相册',
          content: '照片、视频',
          purpose: '上传头像、分享内容',
          scenario: '个人资料编辑、发布动态',
          required: false,
          icon: 'icon-camera',
          iconBg: 'orange'
        },
        {
          title: '通知权限',
          content: '推送通知',
          purpose: '及时接收重要消息和提醒',
          scenario: '训练营通知、系统消息',
          required: false,
          icon: 'icon-bell',
          iconBg: 'cyan'
        }
      ]
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
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

.container {
  padding: 32rpx;
}

.tip {
  font-size: 24rpx;
  color: #999;
  line-height: 1.6;
  margin-bottom: 32rpx;
}

.card {
  background: #fff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.03);
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 24rpx;
  margin-bottom: 24rpx;
}

.icon-box {
  width: 80rpx;
  height: 80rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36rpx;
  flex-shrink: 0;
  
  &.blue {
    background: rgba(59, 130, 246, 0.1);
  }
  &.green {
    background: rgba(16, 185, 129, 0.1);
  }
  &.red {
    background: rgba(239, 68, 68, 0.1);
  }
  &.purple {
    background: rgba(168, 85, 247, 0.1);
  }
  &.orange {
    background: rgba(249, 115, 22, 0.1);
  }
  &.cyan {
    background: rgba(6, 182, 212, 0.1);
  }
}

.icon-user::before { content: '👤'; }
.icon-device::before { content: '📱'; }
.icon-location::before { content: '📍'; }
.icon-chart::before { content: '📊'; }
.icon-camera::before { content: '📷'; }
.icon-bell::before { content: '🔔'; }

.header-text {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-title {
  font-size: 30rpx;
  font-weight: 600;
  color: #333;
}

.tag {
  padding: 4rpx 16rpx;
  border-radius: 8rpx;
  font-size: 22rpx;
  
  &.required {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }
  &.optional {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
  }
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.info-item {
  display: flex;
  font-size: 26rpx;
  line-height: 1.6;
}

.label {
  color: #666;
  font-weight: 500;
  flex-shrink: 0;
}

.value {
  color: #999;
  flex: 1;
}

.notice {
  background: rgba(59, 130, 246, 0.05);
  border-radius: 16rpx;
  padding: 32rpx;
  margin-top: 16rpx;
}

.notice-title {
  display: flex;
  align-items: center;
  gap: 8rpx;
  margin-bottom: 16rpx;
}

.notice-icon {
  font-size: 28rpx;
}

.notice-title-text {
  font-size: 28rpx;
  font-weight: 600;
  color: #3b82f6;
}

.notice-text {
  font-size: 24rpx;
  color: #3b82f6;
  line-height: 1.6;
}
</style>
