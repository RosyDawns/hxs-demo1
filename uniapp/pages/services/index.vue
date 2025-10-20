<template>
  <view class="page">
    <view class="banner">本周精选服务</view>
    <view class="cards">
      <view v-for="s in services" :key="s.id" class="card">
        <image class="cover" :src="s.cover" mode="aspectFill" />
        <view class="body">
          <text class="title">{{ s.title }}</text>
          <view class="tags">
            <text class="tag" v-for="(t,idx) in s.tags" :key="idx">{{ t }}</text>
          </view>
          <view class="foot">
            <text class="price">¥{{ s.price }}</text>
            <view class="ops">
              <button class="btn gray" @tap="detail(s)">详情</button>
              <button class="btn" @tap="buy(s)">购买</button>
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
      services: [
        { id: 1, title: '早起唤醒·21天计划', price: 199, tags: ['早起','习惯养成','打卡监督'], cover: 'https://dummyimage.com/300x200/eee/999.png&text=21' },
        { id: 2, title: '睡眠管理·基础营', price: 299, tags: ['作息调整','指导'], cover: 'https://dummyimage.com/300x200/eee/999.png&text=Z' }
      ]
    }
  },
  methods: {
    detail(s) { uni.navigateTo({ url: `/pages/product-detail/index?id=${s.id}` }) },
    buy(s) { uni.navigateTo({ url: `/pages/my-orders/index?action=buy&id=${s.id}` }) }
  }
}
</script>

<style scoped>
.page { min-height: 100vh; background: #f7f7f7; }
.banner { margin: 16rpx; padding: 24rpx; border-radius: 16rpx; background: linear-gradient(135deg,#ffedd5,#fecaca); color: #b45309; font-size: 28rpx; }
.cards { padding: 16rpx; display: grid; grid-template-columns: 1fr; gap: 16rpx; }
.card { background: #fff; border-radius: 16rpx; overflow: hidden; }
.cover { width: 100%; height: 240rpx; }
.body { padding: 16rpx; }
.title { font-size: 30rpx; color: #333; margin-bottom: 8rpx; }
.tags { display: flex; flex-wrap: wrap; gap: 8rpx; margin-bottom: 12rpx; }
.tag { font-size: 22rpx; color: #666; background: #f9fafb; padding: 6rpx 10rpx; border-radius: 24rpx; }
.foot { display: flex; justify-content: space-between; align-items: center; }
.price { color: #ef4444; font-weight: bold; font-size: 32rpx; }
.ops { display: flex; gap: 12rpx; }
.btn { background: linear-gradient(135deg, #ff9a56, #ff6b6b); color: #fff; border: none; border-radius: 48rpx; padding: 16rpx 24rpx; }
.btn.gray { background: #f3f4f6; color: #333; }
</style>
