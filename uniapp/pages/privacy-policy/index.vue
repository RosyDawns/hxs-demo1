<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <view class="back-btn" @tap="goBack">
        <text class="back-icon">‹</text>
      </view>
      <text class="title">隐私政策</text>
    </view>

    <!-- 主内容 -->
    <scroll-view scroll-y class="content">
      <view class="container">
        <view class="date-info">
          <text class="date">更新日期：2024年1月1日</text>
          <text class="date">生效日期：2024年1月1日</text>
        </view>

        <view class="section">
          <text class="section-title">引言</text>
          <text class="text">
            唤醒狮（以下简称"我们"）非常重视用户的隐私和个人信息保护。本隐私政策旨在向您说明我们如何收集、使用、存储、共享和保护您的个人信息，以及您享有的相关权利。
          </text>
        </view>

        <view class="section">
          <text class="section-title">1. 我们收集的信息</text>
          <text class="text">我们可能收集以下类型的信息：</text>
          <view class="list">
            <text class="list-item">• 账号信息：手机号码、昵称、头像等</text>
            <text class="list-item">• 使用信息：训练营参与记录、打卡数据等</text>
            <text class="list-item">• 设备信息：设备型号、操作系统版本等</text>
            <text class="list-item">• 位置信息：用于提供本地化服务</text>
          </view>
        </view>

        <view class="section">
          <text class="section-title">2. 信息的使用</text>
          <text class="text">我们收集的信息将用于：</text>
          <view class="list">
            <text class="list-item">• 提供和改进我们的服务</text>
            <text class="list-item">• 个性化用户体验</text>
            <text class="list-item">• 发送通知和更新</text>
            <text class="list-item">• 分析和优化应用性能</text>
            <text class="list-item">• 保障账号和服务安全</text>
          </view>
        </view>

        <view class="section">
          <text class="section-title">3. 信息的存储</text>
          <text class="text">
            我们采用业界标准的安全措施来保护您的个人信息，包括加密存储、访问控制等技术手段。您的信息将存储在中国境内的服务器上。
          </text>
        </view>

        <view class="section">
          <text class="section-title">4. 信息的共享</text>
          <text class="text">除以下情况外，我们不会与第三方共享您的个人信息：</text>
          <view class="list">
            <text class="list-item">• 获得您的明确同意</text>
            <text class="list-item">• 根据法律法规要求</text>
            <text class="list-item">• 与授权合作伙伴共享（详见第三方信息共享清单）</text>
          </view>
        </view>

        <view class="section">
          <text class="section-title">5. 您的权利</text>
          <text class="text">您对个人信息享有以下权利：</text>
          <view class="list">
            <text class="list-item">• 访问和查询您的个人信息</text>
            <text class="list-item">• 更正不准确的信息</text>
            <text class="list-item">• 删除您的个人信息</text>
            <text class="list-item">• 撤回授权同意</text>
            <text class="list-item">• 注销账号</text>
          </view>
        </view>

        <view class="section">
          <text class="section-title">6. 未成年人保护</text>
          <text class="text">
            我们重视未成年人的个人信息保护。如您为未成年人，请在监护人的陪同下阅读本政策，并在监护人同意后使用我们的服务。
          </text>
        </view>

        <view class="section">
          <text class="section-title">7. 政策更新</text>
          <text class="text">
            我们可能会不时更新本隐私政策。重大变更时，我们会通过应用内通知等方式告知您。
          </text>
        </view>

        <view class="section">
          <text class="section-title">8. 联系我们</text>
          <text class="text">
            如您对本隐私政策有任何疑问、意见或建议，可通过以下方式联系我们：
          </text>
          <text class="text">客服电话：400-888-8888</text>
          <text class="text">客服邮箱：privacy@huanxingshi.com</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
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
  background: #fff;
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

.date-info {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
  margin-bottom: 32rpx;
}

.date {
  font-size: 24rpx;
  color: #999;
}

.section {
  margin-bottom: 40rpx;
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 8rpx;
}

.text {
  font-size: 28rpx;
  color: #666;
  line-height: 1.8;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 12rpx;
  padding-left: 16rpx;
}

.list-item {
  font-size: 28rpx;
  color: #666;
  line-height: 1.8;
}
</style>
