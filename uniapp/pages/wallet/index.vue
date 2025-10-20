<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <view class="back" @tap="goBack">‹</view>
      <text class="title">我的钱包</text>
    </view>

    <!-- 余额卡片 -->
    <view class="balance-card">
      <text class="label">账户余额</text>
      <text class="amount">¥{{ balance }}</text>
      <view class="actions">
        <view class="btn" @tap="handleRecharge">充值</view>
        <view class="btn" @tap="handleWithdraw">提现</view>
      </view>
    </view>

    <!-- 功能入口 -->
    <view class="grid">
      <view class="item">
        <view class="icon-box">💰</view>
        <text class="label">余额明细</text>
      </view>
      <view class="item">
        <view class="icon-box">💳</view>
        <text class="label">银行卡</text>
      </view>
      <view class="item">
        <view class="icon-box">🎫</view>
        <text class="label">优惠券</text>
      </view>
      <view class="item">
        <view class="icon-box">🎁</view>
        <text class="label">红包</text>
      </view>
    </view>

    <!-- 交易记录 -->
    <view class="records">
      <view class="header-row">
        <text class="section-title">交易记录</text>
        <text class="more">全部 ›</text>
      </view>

      <view v-if="transactions.length === 0" class="empty">
        <text class="icon">📭</text>
        <text class="tip">暂无交易记录</text>
      </view>

      <view v-else class="list">
        <view v-for="item in transactions" :key="item.id" class="record">
          <view class="left">
            <view class="icon-round">{{ item.icon }}</view>
            <view class="info">
              <text class="name">{{ item.title }}</text>
              <text class="time">{{ item.time }}</text>
            </view>
          </view>
          <text class="money" :class="{ plus: item.amount > 0 }">{{ item.amount > 0 ? '+' : '' }}¥{{ Math.abs(item.amount) }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      balance: 1288.0,
      transactions: [
        { id: 1, title: '充值', amount: 500, time: '2024-01-15 14:30', icon: '↓' },
        { id: 2, title: '购买课程', amount: -199, time: '2024-01-14 10:20', icon: '🛒' },
        { id: 3, title: '提现', amount: -300, time: '2024-01-13 16:45', icon: '↑' }
      ]
    }
  },
  methods: {
    goBack() { uni.navigateBack() },
    handleRecharge() { uni.showToast({ title: '充值功能', icon: 'none' }) },
    handleWithdraw() { uni.showToast({ title: '提现功能', icon: 'none' }) }
  }
}
</script>

<style lang="scss" scoped>
.page { background: #f7f7f7; min-height: 100vh; padding-top: 100rpx; }
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 99; background: #fff; display: flex; align-items: center; padding: 20rpx 30rpx; border-bottom: 1rpx solid #f0f0f0; }
.back { width: 48rpx; height: 48rpx; background: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36rpx; color: #333; margin-right: 20rpx; }
.title { font-size: 32rpx; font-weight: 700; color: #222; }
.balance-card { background: linear-gradient(135deg, #ff8a4c, #ff6b6b); margin: 30rpx; padding: 48rpx; border-radius: 32rpx; color: #fff; box-shadow: 0 8rpx 24rpx rgba(255,107,107,.3); }
.balance-card .label { font-size: 26rpx; opacity: 0.9; }
.balance-card .amount { font-size: 72rpx; font-weight: 700; display: block; margin: 20rpx 0 32rpx; }
.balance-card .actions { display: flex; gap: 20rpx; }
.balance-card .btn { flex: 1; background: rgba(255,255,255,.2); text-align: center; padding: 20rpx 0; border-radius: 16rpx; font-size: 28rpx; }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30rpx; padding: 40rpx 30rpx; }
.grid .item { display: flex; flex-direction: column; align-items: center; }
.grid .icon-box { width: 96rpx; height: 96rpx; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 44rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,.04); margin-bottom: 16rpx; }
.grid .label { font-size: 22rpx; color: #666; }
.records { background: #fff; margin: 0 30rpx 30rpx; border-radius: 24rpx; overflow: hidden; }
.header-row { display: flex; align-items: center; justify-content: space-between; padding: 30rpx; border-bottom: 1rpx solid #f0f0f0; }
.section-title { font-size: 28rpx; font-weight: 700; color: #222; }
.more { font-size: 24rpx; color: #999; }
.empty { text-align: center; padding: 80rpx 0; }
.empty .icon { font-size: 80rpx; display: block; margin-bottom: 20rpx; }
.empty .tip { font-size: 26rpx; color: #999; }
.list .record { display: flex; align-items: center; justify-content: space-between; padding: 30rpx; border-bottom: 1rpx solid #f0f0f0; }
.list .record:last-child { border: none; }
.list .left { display: flex; align-items: center; }
.list .icon-round { width: 80rpx; height: 80rpx; background: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32rpx; margin-right: 20rpx; }
.list .info { display: flex; flex-direction: column; }
.list .name { font-size: 28rpx; color: #222; margin-bottom: 8rpx; }
.list .time { font-size: 22rpx; color: #999; }
.list .money { font-size: 32rpx; font-weight: 700; color: #333; }
.list .money.plus { color: #52c41a; }
</style>
