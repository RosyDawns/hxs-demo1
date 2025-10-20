<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header" :style="{paddingTop: statusBarHeight + 'px'}">
      <view class="nav-bar">
        <view class="back-btn" @tap="goBack">
          <text>‹</text>
        </view>
        <text class="title">我的钱包</text>
        <view class="placeholder"></view>
      </view>
    </view>

    <!-- 内容区域 -->
    <scroll-view scroll-y class="content">
      <!-- 钱包卡片 -->
      <view class="wallet-card">
        <view class="card-bg">
          <view class="balance-section">
            <text class="balance-label">总资产（元）</text>
            <text class="balance-value">{{ totalBalance }}</text>
          </view>
          <view class="coins-section">
            <view class="coin-item">
              <text class="coin-label">唤醒币</text>
              <text class="coin-value">{{ coins }}</text>
            </view>
            <view class="divider"></view>
            <view class="coin-item">
              <text class="coin-label">能量币</text>
              <text class="coin-value">{{ energyCoins }}</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 快捷操作 -->
      <view class="quick-actions">
        <view class="action-item" @tap="handleRecharge">
          <view class="action-icon recharge">
            <text>💰</text>
          </view>
          <text class="action-label">充值</text>
        </view>
        <view class="action-item" @tap="handleWithdraw">
          <view class="action-icon withdraw">
            <text>💸</text>
          </view>
          <text class="action-label">提现</text>
        </view>
        <view class="action-item" @tap="handleTransfer">
          <view class="action-icon transfer">
            <text>🔄</text>
          </view>
          <text class="action-label">转账</text>
        </view>
        <view class="action-item" @tap="handleExchange">
          <view class="action-icon exchange">
            <text>💱</text>
          </view>
          <text class="action-label">兑换</text>
        </view>
      </view>

      <!-- 交易记录 -->
      <view class="transactions-section">
        <view class="section-header">
          <text class="section-title">交易记录</text>
          <view class="filter-tabs">
            <text 
              v-for="tab in filterTabs" 
              :key="tab.key"
              :class="['filter-tab', activeFilter === tab.key ? 'active' : '']"
              @tap="activeFilter = tab.key"
            >
              {{ tab.label }}
            </text>
          </view>
        </view>

        <view class="transactions-list">
          <view 
            v-for="transaction in filteredTransactions" 
            :key="transaction.id"
            class="transaction-item"
          >
            <view class="transaction-icon" :class="transaction.type">
              <text>{{ transaction.icon }}</text>
            </view>
            <view class="transaction-info">
              <text class="transaction-title">{{ transaction.title }}</text>
              <text class="transaction-time">{{ transaction.time }}</text>
            </view>
            <view class="transaction-amount" :class="transaction.type">
              <text>{{ transaction.type === 'income' ? '+' : '-' }}{{ transaction.amount }}</text>
            </view>
          </view>
        </view>

        <!-- 空状态 -->
        <view v-if="filteredTransactions.length === 0" class="empty-state">
          <text class="empty-icon">📝</text>
          <text class="empty-text">暂无交易记录</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 44,
      totalBalance: 1280.50,
      coins: 200,
      energyCoins: 890,
      activeFilter: 'all',
      filterTabs: [
        { key: 'all', label: '全部' },
        { key: 'income', label: '收入' },
        { key: 'expense', label: '支出' }
      ],
      transactions: [
        {
          id: 1,
          type: 'income',
          icon: '✅',
          title: '每日签到奖励',
          time: '2025-01-20 09:30',
          amount: '10'
        },
        {
          id: 2,
          type: 'income',
          icon: '🎁',
          title: '完成任务奖励',
          time: '2025-01-20 10:15',
          amount: '20'
        },
        {
          id: 3,
          type: 'expense',
          icon: '🛒',
          title: '购买能量道具',
          time: '2025-01-19 16:20',
          amount: '50'
        },
        {
          id: 4,
          type: 'income',
          icon: '👥',
          title: '好友邀请奖励',
          time: '2025-01-19 14:30',
          amount: '30'
        },
        {
          id: 5,
          type: 'expense',
          icon: '🎯',
          title: '参加活动费用',
          time: '2025-01-18 11:00',
          amount: '100'
        },
        {
          id: 6,
          type: 'income',
          icon: '⚡',
          title: '能量树收获',
          time: '2025-01-18 08:20',
          amount: '15'
        }
      ]
    }
  },
  
  computed: {
    filteredTransactions() {
      if (this.activeFilter === 'all') {
        return this.transactions
      }
      return this.transactions.filter(t => t.type === this.activeFilter)
    }
  },
  
  onLoad() {
    const info = uni.getSystemInfoSync()
    this.statusBarHeight = info.statusBarHeight || 44
  },
  
  methods: {
    goBack() {
      uni.navigateBack()
    },
    
    handleRecharge() {
      uni.showToast({
        title: '充值功能开发中',
        icon: 'none'
      })
    },
    
    handleWithdraw() {
      uni.showToast({
        title: '提现功能开发中',
        icon: 'none'
      })
    },
    
    handleTransfer() {
      uni.showToast({
        title: '转账功能开发中',
        icon: 'none'
      })
    },
    
    handleExchange() {
      uni.showToast({
        title: '兑换功能开发中',
        icon: 'none'
      })
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 30%, #f5f5f5 30%);
}

/* 顶部导航 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

.nav-bar {
  display: flex;
  align-items: center;
  padding: 16rpx 32rpx;
}

.back-btn {
  width: 72rpx;
  height: 72rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 56rpx;
  color: #fff;
}

.title {
  flex: 1;
  text-align: center;
  font-size: 36rpx;
  font-weight: bold;
  color: #fff;
}

.placeholder {
  width: 72rpx;
}

/* 内容区域 */
.content {
  padding-top: 140rpx;
  height: 100vh;
}

/* 钱包卡片 */
.wallet-card {
  margin: 32rpx;
  padding: 48rpx;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 32rpx;
  box-shadow: 0 16rpx 48rpx rgba(102, 126, 234, 0.4);
}

.card-bg {
  position: relative;
}

.balance-section {
  margin-bottom: 48rpx;
}

.balance-label {
  display: block;
  font-size: 28rpx;
  color: rgba(255,255,255,0.8);
  margin-bottom: 16rpx;
}

.balance-value {
  display: block;
  font-size: 72rpx;
  font-weight: bold;
  color: #fff;
}

.coins-section {
  display: flex;
  align-items: center;
  padding-top: 32rpx;
  border-top: 2rpx solid rgba(255,255,255,0.2);
}

.coin-item {
  flex: 1;
  text-align: center;
}

.coin-label {
  display: block;
  font-size: 24rpx;
  color: rgba(255,255,255,0.8);
  margin-bottom: 12rpx;
}

.coin-value {
  display: block;
  font-size: 48rpx;
  font-weight: bold;
  color: #fff;
}

.divider {
  width: 2rpx;
  height: 80rpx;
  background: rgba(255,255,255,0.2);
}

/* 快捷操作 */
.quick-actions {
  display: flex;
  padding: 0 32rpx 32rpx;
  gap: 24rpx;
}

.action-item {
  flex: 1;
  background: #fff;
  border-radius: 24rpx;
  padding: 32rpx 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
  box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.05);
}

.action-icon {
  width: 88rpx;
  height: 88rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40rpx;
}

.action-icon.recharge {
  background: linear-gradient(135deg, #ffd700, #ff6b35);
}

.action-icon.withdraw {
  background: linear-gradient(135deg, #10b981, #059669);
}

.action-icon.transfer {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
}

.action-icon.exchange {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

.action-label {
  font-size: 24rpx;
  color: #666;
}

/* 交易记录 */
.transactions-section {
  background: #fff;
  border-radius: 32rpx 32rpx 0 0;
  padding: 32rpx;
  min-height: 800rpx;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}

.filter-tabs {
  display: flex;
  background: #f5f5f5;
  border-radius: 48rpx;
  padding: 4rpx;
}

.filter-tab {
  padding: 8rpx 24rpx;
  font-size: 24rpx;
  color: #666;
  border-radius: 48rpx;
  transition: all 0.3s;
}

.filter-tab.active {
  background: #fff;
  color: #667eea;
  font-weight: 600;
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05);
}

.transactions-list {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.transaction-item {
  display: flex;
  align-items: center;
  padding: 24rpx;
  background: #f8f9fa;
  border-radius: 16rpx;
}

.transaction-icon {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36rpx;
  flex-shrink: 0;
  margin-right: 24rpx;
}

.transaction-icon.income {
  background: linear-gradient(135deg, #d1fae5, #a7f3d0);
}

.transaction-icon.expense {
  background: linear-gradient(135deg, #fee2e2, #fecaca);
}

.transaction-info {
  flex: 1;
  min-width: 0;
}

.transaction-title {
  display: block;
  font-size: 28rpx;
  font-weight: 600;
  color: #333;
  margin-bottom: 8rpx;
}

.transaction-time {
  display: block;
  font-size: 24rpx;
  color: #999;
}

.transaction-amount {
  font-size: 32rpx;
  font-weight: bold;
  flex-shrink: 0;
}

.transaction-amount.income {
  color: #10b981;
}

.transaction-amount.expense {
  color: #ef4444;
}

/* 空状态 */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 160rpx 0;
}

.empty-icon {
  font-size: 160rpx;
  margin-bottom: 32rpx;
  opacity: 0.3;
}

.empty-text {
  font-size: 28rpx;
  color: #999;
}
</style>
