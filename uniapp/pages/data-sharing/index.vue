<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <view class="back-btn" @tap="goBack">
        <text class="back-icon">‹</text>
      </view>
      <text class="title">第三方信息共享</text>
    </view>

    <!-- 主内容 -->
    <scroll-view scroll-y class="content">
      <view class="container">
        <view class="tip">
          为了向您提供更好的服务，我们会与以下第三方服务商共享必要的信息。我们会严格限制共享的信息类型和范围，并要求第三方按照本政策及相关法律法规处理个人信息。
        </view>

        <view
          v-for="(item, index) in thirdPartyList"
          :key="index"
          class="card"
        >
          <view class="card-header">
            <view :class="['icon-box', item.iconBg]">
              <text :class="item.icon"></text>
            </view>
            <text class="card-title">{{ item.name }}</text>
          </view>
          <view class="card-body">
            <view class="info-item">
              <text class="label">服务类型：</text>
              <text class="value">{{ item.type }}</text>
            </view>
            <view class="info-item">
              <text class="label">共享信息：</text>
              <text class="value">{{ item.data }}</text>
            </view>
            <view class="info-item">
              <text class="label">使用目的：</text>
              <text class="value">{{ item.purpose }}</text>
            </view>
            <view v-if="item.policy" class="policy-link" @tap="openPolicy(item.policy)">
              <text class="link-text">🔗 查看隐私政策</text>
            </view>
          </view>
        </view>

        <view class="notice-box orange">
          <view class="notice-title">
            <text class="notice-icon">🛡️</text>
            <text class="notice-title-text">安全承诺</text>
          </view>
          <text class="notice-text">
            我们会与第三方服务商签署严格的数据保护协议，要求他们按照本隐私政策及相关法律法规处理个人信息，采取安全措施保护您的信息安全。
          </text>
        </view>

        <view class="notice-box blue">
          <view class="notice-title">
            <text class="notice-icon">ℹ️</text>
            <text class="notice-title-text">您的权利</text>
          </view>
          <text class="notice-text">
            如您不同意我们向第三方共享您的信息，您可以通过客服联系我们。但这可能影响您使用相关功能或服务。
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
      thirdPartyList: [
        {
          name: '微信开放平台',
          type: '社交登录、分享',
          data: '昵称、头像、OpenID',
          purpose: '提供微信登录和分享功能',
          policy: 'https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy',
          icon: 'icon-wechat',
          iconBg: 'green'
        },
        {
          name: '支付宝',
          type: '支付服务',
          data: '订单信息、支付金额',
          purpose: '提供安全的支付服务',
          policy: 'https://opendocs.alipay.com/open/01g6qm',
          icon: 'icon-alipay',
          iconBg: 'blue'
        },
        {
          name: '阿里云',
          type: '云存储、CDN',
          data: '图片、视频等多媒体内容',
          purpose: '存储和分发用户上传的内容',
          policy: 'https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud202107161629.html',
          icon: 'icon-cloud',
          iconBg: 'orange'
        },
        {
          name: '高德地图',
          type: '地图定位',
          data: '位置信息',
          purpose: '提供位置相关服务',
          policy: 'https://lbs.amap.com/pages/privacy/',
          icon: 'icon-map',
          iconBg: 'red'
        },
        {
          name: '友盟统计',
          type: '数据统计分析',
          data: '设备信息、使用行为',
          purpose: '分析应用使用情况，优化产品体验',
          policy: 'https://www.umeng.com/page/policy',
          icon: 'icon-chart',
          iconBg: 'purple'
        },
        {
          name: '极光推送',
          type: '消息推送',
          data: '设备标识符',
          purpose: '向您发送通知消息',
          policy: 'https://www.jiguang.cn/license/privacy',
          icon: 'icon-bell',
          iconBg: 'cyan'
        }
      ]
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    openPolicy(url) {
      // 在小程序中打开外部链接需要配置业务域名
      // 这里简化处理，显示提示
      uni.showToast({
        title: '请在设置中查看',
        icon: 'none'
      })
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
  align-items: center;
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
  
  &.green {
    background: rgba(16, 185, 129, 0.1);
  }
  &.blue {
    background: rgba(59, 130, 246, 0.1);
  }
  &.orange {
    background: rgba(249, 115, 22, 0.1);
  }
  &.red {
    background: rgba(239, 68, 68, 0.1);
  }
  &.purple {
    background: rgba(168, 85, 247, 0.1);
  }
  &.cyan {
    background: rgba(6, 182, 212, 0.1);
  }
}

.icon-wechat::before { content: '💬'; }
.icon-alipay::before { content: '💰'; }
.icon-cloud::before { content: '☁️'; }
.icon-map::before { content: '🗺️'; }
.icon-chart::before { content: '📊'; }
.icon-bell::before { content: '🔔'; }

.card-title {
  flex: 1;
  font-size: 30rpx;
  font-weight: 600;
  color: #333;
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

.policy-link {
  margin-top: 8rpx;
}

.link-text {
  font-size: 24rpx;
  color: #FF6B6B;
}

.notice-box {
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  
  &.orange {
    background: rgba(249, 115, 22, 0.05);
  }
  &.blue {
    background: rgba(59, 130, 246, 0.05);
  }
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
}

.orange .notice-title-text {
  color: #f97316;
}

.blue .notice-title-text {
  color: #3b82f6;
}

.notice-text {
  font-size: 24rpx;
  line-height: 1.6;
}

.orange .notice-text {
  color: #f97316;
}

.blue .notice-text {
  color: #3b82f6;
}
</style>
