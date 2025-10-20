<template>
  <view class="orders-page">
    <!-- 顶部导航栏 -->
    <view class="header" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="header-content">
        <view class="back-btn" @tap="goBack">
          <text class="back-icon">‹</text>
        </view>
      </view>
    </view>

    <!-- 搜索和筛选 -->
    <view class="search-bar">
      <view class="search-input">
        <text class="search-icon">🔍</text>
        <input
          type="text"
          placeholder="搜索我的订单"
          placeholder-class="placeholder"
        />
      </view>
      <view class="filter-btn">
        <text>全部分类</text>
        <text class="arrow">▼</text>
      </view>
    </view>

    <!-- 标签导航栏 -->
    <view class="tabs">
      <view
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-item', activeTab === index ? 'active' : '']"
        @tap="activeTab = index"
      >
        <text class="tab-text">{{ tab }}</text>
        <view v-if="activeTab === index" class="tab-line"></view>
      </view>
    </view>

    <!-- 订单列表 -->
    <scroll-view class="order-list" scroll-y>
      <view
        v-for="order in orders"
        :key="order.id"
        class="order-card"
      >
        <!-- 订单头部 -->
        <view class="order-header">
          <view class="service-type">
            <view class="icon-box">
              <text class="icon">💪</text>
            </view>
            <text class="title">{{ order.title }}</text>
          </view>
          <text class="arrow">›</text>
          <text :class="['status', order.statusClass]">{{ order.statusText }}</text>
        </view>

        <!-- 订单内容 -->
        <view class="order-content">
          <!-- 商品信息 -->
          <view class="product-info">
            <image
              :src="order.image"
              class="product-image"
              mode="aspectFill"
            />
            <view class="product-details">
              <view class="price-info">
                <text class="quantity">1张｜实付</text>
                <text class="price">￥{{ order.price }}</text>
              </view>
              <text class="order-date">下单时间：{{ order.date }}</text>
            </view>
          </view>

          <!-- 操作按钮 -->
          <view class="action-buttons">
            <view class="btn-group">
              <view class="action-btn">删除</view>
              <view class="action-btn">再来一单</view>
              <view class="action-btn">加入橱窗</view>
              <text class="share-icon">📤</text>
            </view>
          </view>

          <!-- 评价区域（仅已成交显示） -->
          <view v-if="order.showReview" class="review-section">
            <text class="review-icon">✏️</text>
            <text class="review-text">真实评价</text>
            <view class="stars">
              <text v-for="i in 5" :key="i" class="star">☆</text>
            </view>
            <view class="review-btn">评价</view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'MyOrdersPage',
  data() {
    return {
      statusBarHeight: 0,
      activeTab: 0,
      tabs: ['全部订单', '待付款', '可使用', '退款/售后'],
      orders: [
        {
          id: 1,
          title: '1对1游泳零基础蛙泳/自由泳...',
          price: '38.0',
          date: '2025-10-18  21:32',
          image: 'https://picsum.photos/id/1005/300/300',
          statusText: '可使用',
          statusClass: 'status-active',
          showReview: false
        },
        {
          id: 2,
          title: '1对1蝶泳/自由泳单次卡...',
          price: '160.0',
          date: '2025-08-13  15:05',
          image: 'https://picsum.photos/id/1010/300/300',
          statusText: '已成交',
          statusClass: 'status-active',
          showReview: true
        },
        {
          id: 3,
          title: '1对160分钟线上瑜伽课...',
          price: '28.0',
          date: '2025-10-18  21:32',
          image: 'https://picsum.photos/id/1011/300/300',
          statusText: '退款成功',
          statusClass: 'status-active',
          showReview: false
        }
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
    }
  }
};
</script>

<style lang="scss" scoped>
.orders-page {
  min-height: 100vh;
  background: #f8f8f8;
  padding: 0 32rpx;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #f8f8f8;
}

.header-content {
  padding: 20rpx 0;
  display: flex;
  align-items: center;
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

.search-bar {
  display: flex;
  align-items: center;
  margin: 8rpx 0 32rpx;
}

.search-input {
  flex: 1;
  background: #f0f0f0;
  border-radius: 999rpx;
  padding: 12rpx 24rpx;
  display: flex;
  align-items: center;
  margin-right: 16rpx;
}

.search-icon {
  font-size: 24rpx;
  margin-right: 16rpx;
}

input {
  flex: 1;
  font-size: 28rpx;
  color: #666666;
  background: transparent;
}

.placeholder {
  color: #999999;
}

.filter-btn {
  display: flex;
  align-items: center;
  font-size: 24rpx;
  color: #666666;
}

.arrow {
  font-size: 20rpx;
  margin-left: 8rpx;
}

.tabs {
  display: flex;
  border-bottom: 2rpx solid #f0f0f0;
  margin-bottom: 24rpx;
}

.tab-item {
  margin-right: 40rpx;
  padding-bottom: 20rpx;
  position: relative;
}

.tab-text {
  font-size: 28rpx;
  color: #666666;
}

.tab-item.active .tab-text {
  color: #333333;
  font-weight: 500;
}

.tab-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rpx;
  background: #ff5722;
}

.order-list {
  height: calc(100vh - 300rpx);
  padding-bottom: 32rpx;
}

.order-card {
  background: #ffffff;
  border-radius: 24rpx;
  margin-bottom: 24rpx;
}

.order-header {
  padding: 24rpx;
  display: flex;
  align-items: center;
}

.service-type {
  flex: 1;
  display: flex;
  align-items: center;
}

.icon-box {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  background: #fff3e0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon {
  font-size: 24rpx;
}

.title {
  font-size: 28rpx;
  margin-left: 16rpx;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.status {
  font-size: 28rpx;
  flex-shrink: 0;
  margin-left: 16rpx;
}

.status-active {
  color: #ff5722;
}

.order-content {
  padding: 0 32rpx 24rpx;
}

.product-info {
  display: flex;
}

.product-image {
  width: 160rpx;
  height: 160rpx;
  border-radius: 16rpx;
  flex-shrink: 0;
}

.product-details {
  flex: 1;
  margin-left: 24rpx;
  min-width: 0;
}

.price-info {
  display: flex;
  align-items: baseline;
  margin-bottom: 8rpx;
}

.quantity {
  font-size: 24rpx;
  color: #333333;
}

.price {
  font-size: 32rpx;
  font-weight: bold;
  color: #333333;
  margin-left: 8rpx;
}

.order-date {
  display: block;
  font-size: 24rpx;
  color: #999999;
  margin-top: 8rpx;
}

.action-buttons {
  margin-top: 24rpx;
}

.btn-group {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.action-btn {
  padding: 8rpx 24rpx;
  font-size: 24rpx;
  color: #666666;
  border: 2rpx solid #d9d9d9;
  border-radius: 999rpx;
  margin-left: 16rpx;
}

.share-icon {
  font-size: 32rpx;
  color: #666666;
  margin-left: 16rpx;
}

.review-section {
  margin-top: 24rpx;
  padding-top: 24rpx;
  border-top: 2rpx solid #f0f0f0;
  display: flex;
  align-items: center;
}

.review-icon {
  font-size: 24rpx;
  color: #999999;
}

.review-text {
  font-size: 24rpx;
  color: #666666;
  margin-left: 16rpx;
}

.stars {
  display: flex;
  margin-left: 16rpx;
}

.star {
  font-size: 28rpx;
  color: #d9d9d9;
  margin-right: 4rpx;
}

.review-btn {
  margin-left: auto;
  padding: 8rpx 32rpx;
  font-size: 24rpx;
  color: #ffffff;
  background: #ff5722;
  border-radius: 999rpx;
}
</style>
