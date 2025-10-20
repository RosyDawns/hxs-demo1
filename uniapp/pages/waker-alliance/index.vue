<template>
  <view class="page">
    <view class="search-bar">
      <input
        v-model="searchInput"
        placeholder="搜索商品标题/ID/链接"
        class="search-input"
      />
      <button class="search-btn" @tap="handleSearch">搜索</button>
    </view>

    <view class="stats-card">
      <view class="period-tabs">
        <button
          v-for="period in periods"
          :key="period.value"
          :class="['period-btn', { active: selectedPeriod === period.value }]"
          @tap="selectedPeriod = period.value"
        >
          {{ period.label }}
        </button>
      </view>

      <view class="stats-grid">
        <view class="stat-item">
          <text class="stat-label">GMV ></text>
          <text class="stat-value">{{ stats[selectedPeriod].gmv }}</text>
          <text class="stat-sub">昨日此时 {{ stats[selectedPeriod].gmvYesterday }}</text>
        </view>
        <view class="stat-item">
          <text class="stat-label">总订单数 ></text>
          <text class="stat-value">{{ stats[selectedPeriod].orders }}</text>
          <text class="stat-sub">预估佣金 {{ stats[selectedPeriod].commission }}</text>
        </view>
      </view>
    </view>

    <view class="products-section">
      <text class="section-title">星推官推荐</text>

      <scroll-view scroll-x class="category-scroll">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="['category-btn', { active: selectedCategory === category.id }]"
          @tap="selectedCategory = category.id"
        >
          {{ category.name }}
        </button>
      </scroll-view>

      <view
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <image :src="product.image" class="product-image" mode="aspectFill" />
        <view class="product-info">
          <text class="product-title">{{ product.title }}</text>
          <view class="product-coach">
            <image :src="product.coach.avatar" class="coach-avatar" mode="aspectFill" />
            <text class="coach-name">{{ product.coach.name }}</text>
          </view>
          <view class="product-footer">
            <text class="product-price">¥{{ product.price }}</text>
            <view class="commission-tag">
              <text class="commission-label">唤醒高佣 {{ product.commission }}%</text>
              <text class="commission-value">赚¥{{ product.earn }}</text>
            </view>
            <button class="add-btn" @tap="handleAddToShowcase(product.id)">
              加橱窗
            </button>
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
      searchInput: "",
      selectedPeriod: "today",
      selectedCategory: "recommend",
      periods: [
        { value: "today", label: "今日收益" },
        { value: "yesterday", label: "昨日" },
        { value: "week", label: "7日" },
      ],
      stats: {
        today: { gmv: "0.00", gmvYesterday: "0.00", orders: 0, commission: "0.00" },
        yesterday: { gmv: "0.00", gmvYesterday: "0.00", orders: 0, commission: "0.00" },
        week: { gmv: "0.00", gmvYesterday: "0.00", orders: 0, commission: "0.00" },
      },
      categories: [
        { id: "recommend", name: "推荐" },
        { id: "hot", name: "热销榜" },
        { id: "potential", name: "潜力榜" },
      ],
      products: [
        {
          id: 1,
          title: "[10次卡]1对1游泳零基础蛙泳/自由泳",
          image: "https://picsum.photos/id/1065/300/300",
          price: 1680,
          commission: 20,
          earn: 336,
          coach: { name: "李教练", avatar: "https://picsum.photos/id/1005/100/100" },
        },
      ],
    };
  },
  methods: {
    handleSearch() {
      console.log("搜索:", this.searchInput);
    },
    handleAddToShowcase(productId) {
      uni.showToast({ title: "已添加到橱窗", icon: "success" });
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f6f6f6;
}

.search-bar {
  background: white;
  padding: 24rpx;
  display: flex;
  gap: 16rpx;
}

.search-input {
  flex: 1;
  background: #f5f5f5;
  border-radius: 50rpx;
  padding: 16rpx 32rpx;
  font-size: 28rpx;
}

.search-btn {
  background: #ff6b6b;
  color: white;
  border-radius: 50rpx;
  padding: 16rpx 32rpx;
  font-size: 28rpx;
}

.stats-card {
  margin: 24rpx;
  background: white;
  border-radius: 24rpx;
  padding: 32rpx;
}

.period-tabs {
  display: flex;
  gap: 16rpx;
  margin-bottom: 24rpx;
}

.period-btn {
  padding: 12rpx 24rpx;
  border-radius: 8rpx;
  background: #f5f5f5;
  font-size: 24rpx;
}

.period-btn.active {
  background: white;
  color: #ff6b6b;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24rpx;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-size: 24rpx;
  color: #999;
  margin-bottom: 8rpx;
}

.stat-value {
  font-size: 48rpx;
  font-weight: bold;
  color: #333;
}

.stat-sub {
  font-size: 20rpx;
  color: #999;
  margin-top: 4rpx;
}

.products-section {
  padding: 24rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 24rpx;
}

.category-scroll {
  white-space: nowrap;
  margin-bottom: 24rpx;
}

.category-btn {
  display: inline-block;
  padding: 12rpx 24rpx;
  margin-right: 16rpx;
  border-radius: 50rpx;
  border: 2rpx solid #e5e5e5;
  background: white;
  font-size: 24rpx;
}

.category-btn.active {
  border-color: #ff6b6b;
  color: #ff6b6b;
  background: #fff5f5;
}

.product-card {
  background: white;
  border-radius: 24rpx;
  padding: 24rpx;
  margin-bottom: 24rpx;
  display: flex;
}

.product-image {
  width: 200rpx;
  height: 200rpx;
  border-radius: 16rpx;
  flex-shrink: 0;
}

.product-info {
  flex: 1;
  margin-left: 24rpx;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 28rpx;
  font-weight: 500;
  margin-bottom: 16rpx;
}

.product-coach {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}

.coach-avatar {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  margin-right: 8rpx;
}

.coach-name {
  font-size: 22rpx;
  color: #666;
}

.product-footer {
  margin-top: auto;
}

.product-price {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 12rpx;
}

.commission-tag {
  display: flex;
  align-items: center;
  gap: 16rpx;
  margin-bottom: 12rpx;
}

.commission-label,
.commission-value {
  font-size: 20rpx;
  padding: 4rpx 12rpx;
  border-radius: 4rpx;
}

.commission-label {
  background: #ff6b6b;
  color: white;
}

.commission-value {
  color: #ff6b6b;
  border: 2rpx solid #ff6b6b;
}

.add-btn {
  background: white;
  color: #ff6b6b;
  border: 2rpx solid #ff6b6b;
  border-radius: 50rpx;
  padding: 8rpx 24rpx;
  font-size: 20rpx;
}
</style>
