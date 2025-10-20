<template>
  <view class="page">
    <view class="header-bg">
      <view class="profile-section">
        <image src="https://picsum.photos/id/1005/100/100" class="profile-avatar" mode="aspectFill" />
        <view class="profile-info">
          <text class="profile-name">李教练的橱窗</text>
          <text class="profile-stats">2.1万 粉丝 · 10.3w 获赞与收藏</text>
        </view>
      </view>
    </view>

    <view class="content-section">
      <view class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          :class="['tab-btn', { active: sortBy === tab.value }]"
          @tap="sortBy = tab.value"
        >
          {{ tab.label }}
        </button>
      </view>

      <view class="products-grid">
        <view
          v-for="product in products"
          :key="product.id"
          class="product-item"
          @tap="handleProductClick(product.id)"
        >
          <image :src="product.image" class="product-img" mode="aspectFill" />
          <view class="product-detail">
            <text class="product-title">{{ product.title }}</text>
            <view class="product-price-row">
              <text class="price">¥{{ product.price }}</text>
              <text class="sales">已售 {{ product.sales }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      sortBy: "recommend",
      tabs: [
        { value: "recommend", label: "综合" },
        { value: "sales", label: "销量" },
        { value: "new", label: "新品" },
      ],
      products: [
        {
          id: 1,
          title: "蛙泳/自由泳（体验卡）",
          price: 38,
          sales: 5680,
          image: "https://picsum.photos/id/1065/300/300",
        },
        {
          id: 2,
          title: "自由泳60分钟（单次卡）",
          price: 200,
          sales: 890,
          image: "https://picsum.photos/id/1066/300/300",
        },
        {
          id: 3,
          title: "蛙泳/自由泳（10次卡）",
          price: 1680,
          sales: 538,
          image: "https://picsum.photos/id/1067/300/300",
        },
      ],
    };
  },
  methods: {
    handleProductClick(productId) {
      uni.navigateTo({ url: "/pages/product-detail/index?id=" + productId });
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.header-bg {
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
  padding: 48rpx 32rpx;
}

.profile-section {
  display: flex;
  align-items: center;
}

.profile-avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  border: 4rpx solid white;
  margin-right: 24rpx;
}

.profile-info {
  flex: 1;
  color: white;
}

.profile-name {
  font-size: 36rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 8rpx;
}

.profile-stats {
  font-size: 22rpx;
  opacity: 0.9;
}

.content-section {
  background: white;
  border-radius: 32rpx 32rpx 0 0;
  margin-top: -40rpx;
  padding: 24rpx;
}

.tabs {
  display: flex;
  gap: 32rpx;
  border-bottom: 2rpx solid #f0f0f0;
  margin-bottom: 24rpx;
}

.tab-btn {
  padding: 16rpx 0;
  font-size: 28rpx;
  background: none;
  border: none;
  position: relative;
}

.tab-btn.active {
  color: #ff6b6b;
  font-weight: bold;
}

.tab-btn.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rpx;
  background: #ff6b6b;
  border-radius: 2rpx;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24rpx;
}

.product-item {
  background: white;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
}

.product-img {
  width: 100%;
  height: 300rpx;
}

.product-detail {
  padding: 16rpx;
}

.product-title {
  font-size: 26rpx;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 12rpx;
}

.product-price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-size: 32rpx;
  font-weight: bold;
  color: #ff6b6b;
}

.sales {
  font-size: 20rpx;
  color: #999;
}
</style>
