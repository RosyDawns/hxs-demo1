<template>
  <view class="store-tab">
    <!-- 筛选标签栏 -->
    <view class="filter-bar">
      <view class="filter-left">
        <text
          v-for="filter in filters"
          :key="filter.key"
          :class="['filter-btn', { active: sortBy === filter.key }]"
          @tap="sortProducts(filter.key)"
        >{{ filter.label }}</text>
      </view>
      <view class="filter-right">
        <text class="icon">🔍</text>
        <text class="icon">🎁</text>
      </view>
    </view>

    <!-- 商品列表 -->
    <view class="product-grid">
      <view
        v-for="product in products"
        :key="product.id"
        class="product-item"
        @tap="handleProductClick(product.id)"
      >
        <view class="product-img-box">
          <image :src="product.image" class="product-img" mode="aspectFill" />
          <view v-if="product.isNew" class="new-badge">新品</view>
        </view>
        <view class="product-info">
          <text class="product-title">{{ product.title }}</text>
          <view class="product-footer">
            <text class="product-price">¥{{ product.price }}</text>
            <text class="product-sales">已售 {{ product.sales }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'StoreTab',
  data() {
    return {
      sortBy: 'recommend',
      filters: [
        { key: 'recommend', label: '综合' },
        { key: 'sales', label: '销量' },
        { key: 'new', label: '新品' },
        { key: 'priceAsc', label: '价格升序' },
        { key: 'priceDesc', label: '价格降序' }
      ],
      originalProducts: [
        {
          id: 'product1',
          title: '蛙泳/自由泳（体验卡）',
          price: 38,
          sales: 5680,
          image: 'https://picsum.photos/id/1065/300/300',
          isNew: false
        },
        {
          id: 'product2',
          title: '自由泳60分钟（单次卡）',
          price: 200,
          sales: 890,
          image: 'https://picsum.photos/id/1066/300/300',
          isNew: true
        },
        {
          id: 'product3',
          title: '蛙泳/自由泳（10次卡）',
          price: 1680,
          sales: 538,
          image: 'https://picsum.photos/id/1067/300/300',
          isNew: false
        },
        {
          id: 'product4',
          title: '儿童游泳培训课程',
          price: 2880,
          sales: 423,
          image: 'https://picsum.photos/id/1068/300/300',
          isNew: true
        },
        {
          id: 'product5',
          title: '成人游泳进阶课程',
          price: 3200,
          sales: 256,
          image: 'https://picsum.photos/id/1069/300/300',
          isNew: false
        },
        {
          id: 'product6',
          title: '专业游泳装备套装',
          price: 568,
          sales: 1200,
          image: 'https://picsum.photos/id/1070/300/300',
          isNew: false
        }
      ],
      products: []
    }
  },
  created() {
    this.products = [...this.originalProducts]
  },
  methods: {
    sortProducts(sortType) {
      this.sortBy = sortType
      const sorted = [...this.originalProducts]

      switch (sortType) {
        case 'sales':
          sorted.sort((a, b) => b.sales - a.sales)
          break
        case 'new':
          sorted.sort((a, b) => b.isNew - a.isNew)
          break
        case 'priceAsc':
          sorted.sort((a, b) => a.price - b.price)
          break
        case 'priceDesc':
          sorted.sort((a, b) => b.price - a.price)
          break
        default:
          break
      }

      this.products = sorted
    },
    handleProductClick(productId) {
      uni.navigateTo({ url: `/pages/product-detail/index?id=${productId}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.store-tab {
  min-height: 400rpx;
  padding: 16rpx;
}

.filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24rpx;
}

.filter-left {
  display: flex;
  gap: 16rpx;
}

.filter-btn {
  padding: 8rpx 16rpx;
  font-size: 26rpx;
  color: #666;
  transition: all 0.3s;
}

.filter-btn.active {
  color: #1d4ed8;
  border-bottom: 2rpx solid #1d4ed8;
}

.filter-right {
  display: flex;
  align-items: center;
  gap: 24rpx;
}

.icon {
  font-size: 32rpx;
  color: #999;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16rpx;
  margin-top: 24rpx;
}

.product-item {
  background: #fff;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
}

.product-img-box {
  position: relative;
}

.product-img {
  width: 100%;
  height: 320rpx;
}

.new-badge {
  position: absolute;
  top: 16rpx;
  left: 16rpx;
  background: #ff4757;
  color: #fff;
  font-size: 20rpx;
  padding: 4rpx 16rpx;
  border-radius: 8rpx;
}

.product-info {
  padding: 16rpx;
}

.product-title {
  font-size: 26rpx;
  font-weight: 500;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 8rpx;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-price {
  color: #ff4757;
  font-weight: bold;
  font-size: 28rpx;
}

.product-sales {
  font-size: 22rpx;
  color: #999;
}
</style>
