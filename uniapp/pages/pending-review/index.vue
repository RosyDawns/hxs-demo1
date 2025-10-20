<template>
  <view class="page">
    <view class="tips">以下订单等待你的评价</view>
    <view class="list">
      <view v-for="item in list" :key="item.id" class="card">
        <image class="cover" :src="item.cover" mode="aspectFill" />
        <view class="info">
          <text class="title">{{ item.title }}</text>
          <text class="sku">下单时间：{{ item.date }}</text>
          <view class="ops">
            <button class="btn gray" @tap="viewOrder(item.id)">查看订单</button>
            <button class="btn" @tap="goReview(item)">去评价</button>
          </view>
        </view>
      </view>
      <view v-if="!list.length" class="empty">暂无待评价订单</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 'A20250101', title: '唤醒服务·7天体验', date: '2025-09-22 10:20', cover: 'https://dummyimage.com/200x200/eee/999.png&text=S' },
        { id: 'A20250102', title: '睡眠管理营·基础版', date: '2025-09-18 08:30', cover: 'https://dummyimage.com/200x200/eee/999.png&text=C' }
      ]
    }
  },
  methods: {
    viewOrder(id) {
      uni.navigateTo({ url: `/pages/my-orders/index?focusId=${id}` })
    },
    goReview(item) {
      const payload = encodeURIComponent(JSON.stringify({ orderId: item.id, title: item.title }))
      uni.navigateTo({ url: `/pages/write-review/index?payload=${payload}` })
    }
  }
}
</script>

<style scoped>
.page { min-height: 100vh; background: #f7f7f7; }
.tips { padding: 16rpx 24rpx; color: #666; font-size: 24rpx; }
.list { padding: 16rpx; }
.card { background: #fff; border-radius: 16rpx; overflow: hidden; display: flex; margin-bottom: 16rpx; }
.cover { width: 180rpx; height: 180rpx; }
.info { flex: 1; padding: 16rpx; display: flex; flex-direction: column; }
.title { font-size: 30rpx; color: #333; margin-bottom: 8rpx; }
.sku { font-size: 24rpx; color: #999; margin-bottom: 16rpx; }
.ops { margin-top: auto; display: flex; gap: 16rpx; }
.btn { flex: 1; background: linear-gradient(135deg, #ff9a56, #ff6b6b); color: #fff; border-radius: 48rpx; padding: 20rpx 0; border: none; }
.btn.gray { background: #f3f4f6; color: #333; }
.empty { text-align: center; color: #999; padding: 80rpx 0; }
</style>
