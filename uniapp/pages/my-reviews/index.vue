<template>
  <view class="page">
    <view class="filter-bar">
      <view v-for="t in tabs" :key="t.key" :class="['tab', activeTab===t.key?'active':'']" @tap="activeTab=t.key">
        {{ t.label }}<text v-if="t.count">({{ t.count }})</text>
      </view>
    </view>

    <view class="review-list">
      <view v-for="item in filteredReviews" :key="item.id" class="review-item">
        <view class="head">
          <image class="avatar" :src="item.user.avatar" mode="aspectFill" />
          <view class="uinfo">
            <text class="uname">{{ item.user.name }}</text>
            <view class="stars">
              <text v-for="i in 5" :key="i" :class="['star', i<=item.rating?'on':'off']">★</text>
              <text class="date">{{ item.date }}</text>
            </view>
          </view>
        </view>
        <view class="content">{{ item.content }}</view>
        <view v-if="item.images && item.images.length" class="imgs">
          <image v-for="(img,idx) in item.images" :key="idx" :src="img" mode="aspectFill" class="img" @tap="preview(item.images, idx)" />
        </view>
        <view class="meta">
          <text class="sku" @tap="goProduct(item.productId)">关联商品：{{ item.productName }}</text>
          <view class="ops">
            <view class="like" @tap="toggleLike(item)">👍 {{ item.likes }}</view>
            <view class="reply" @tap="reply(item)">回复</view>
          </view>
        </view>
        <view v-if="item.reply" class="seller-reply">商家回复：{{ item.reply }}</view>
      </view>

      <view v-if="!filteredReviews.length" class="empty">暂无符合条件的评价</view>

      <button v-if="hasMore" class="load-more" @tap="loadMore">加载更多</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { key: 'all', label: '全部' },
        { key: 'good', label: '好评' },
        { key: 'medium', label: '中评' },
        { key: 'bad', label: '差评' },
        { key: 'img', label: '有图' },
      ],
      activeTab: 'all',
      page: 1,
      pageSize: 10,
      hasMore: true,
      list: [
        {
          id: 1,
          user: { name: '小狮子', avatar: 'https://dummyimage.com/100x100/eee/999.png&text=L' },
          rating: 5,
          date: '2025-10-01',
          content: '效果很好，服务也贴心，值得推荐！',
          images: ['https://dummyimage.com/300x300/f5f5f5/999.png&text=1'],
          productId: 10001,
          productName: '早起唤醒服务',
          likes: 12,
          reply: '感谢认可，我们会继续努力～'
        },
        {
          id: 2,
          user: { name: '晨曦', avatar: 'https://dummyimage.com/100x100/eee/999.png&text=M' },
          rating: 3,
          date: '2025-09-28',
          content: '整体还行，体验可以再优化。',
          images: [],
          productId: 10002,
          productName: '睡眠管理营',
          likes: 3,
          reply: ''
        }
      ]
    }
  },
  computed: {
    filteredReviews() {
      const tab = this.activeTab
      return this.list.filter(r => {
        if (tab === 'good') return r.rating >= 4
        if (tab === 'medium') return r.rating === 3
        if (tab === 'bad') return r.rating <= 2
        if (tab === 'img') return r.images && r.images.length > 0
        return true
      })
    }
  },
  methods: {
    preview(urls, index) {
      uni.previewImage({ urls, current: index })
    },
    goProduct(id) {
      uni.navigateTo({ url: `/pages/product-detail/index?id=${id}` })
    },
    toggleLike(item) {
      item.likes += 1
    },
    reply(item) {
      uni.showToast({ title: '暂未开通评论回复', icon: 'none' })
    },
    loadMore() {
      // mock 加载更多
      if (this.page >= 3) {
        this.hasMore = false
        return
      }
      const base = this.list.length
      const more = Array.from({ length: this.pageSize }).map((_, i) => ({
        id: base + i + 1,
        user: { name: '用户' + (base + i + 1), avatar: 'https://dummyimage.com/100x100/eee/999.png&text=U' },
        rating: Math.max(1, Math.min(5, (base + i) % 5 + 1)),
        date: '2025-09-20',
        content: '默认评价内容占位，实际应由后端返回。',
        images: (i % 2 === 0) ? ['https://dummyimage.com/300x300/f5f5f5/999.png&text=+' + i] : [],
        productId: 10000 + i,
        productName: '服务' + (i + 1),
        likes: (i % 5),
        reply: ''
      }))
      this.list = this.list.concat(more)
      this.page += 1
    }
  },
  onReachBottom() {
    if (this.hasMore) this.loadMore()
  }
}
</script>

<style scoped>
.page { min-height: 100vh; background: #f7f7f7; }
.filter-bar { display: flex; padding: 16rpx 24rpx; background: #fff; position: sticky; top: 0; z-index: 10; }
.tab { padding: 12rpx 20rpx; margin-right: 16rpx; border-radius: 32rpx; font-size: 26rpx; color: #666; background: #f3f4f6; }
.tab.active { background: #ffefec; color: #ff6b6b; }
.review-list { padding: 16rpx; }
.review-item { background: #fff; border-radius: 16rpx; padding: 24rpx; margin-bottom: 16rpx; }
.head { display: flex; align-items: center; margin-bottom: 12rpx; }
.avatar { width: 72rpx; height: 72rpx; border-radius: 50%; margin-right: 16rpx; }
.uinfo { flex: 1; }
.uname { font-size: 28rpx; color: #333; }
.stars { display: flex; align-items: center; gap: 8rpx; }
.star { font-size: 24rpx; }
.star.on { color: #f59e0b; }
.star.off { color: #e5e7eb; }
.date { margin-left: auto; font-size: 22rpx; color: #999; }
.content { font-size: 28rpx; color: #333; margin: 12rpx 0; }
.imgs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8rpx; }
.img { width: 100%; aspect-ratio: 1; border-radius: 8rpx; }
.meta { display: flex; justify-content: space-between; align-items: center; margin-top: 12rpx; font-size: 24rpx; color: #666; }
.sku { color: #2563eb; }
.ops { display: flex; gap: 24rpx; }
.seller-reply { background: #f9fafb; color: #555; padding: 12rpx; border-radius: 8rpx; font-size: 24rpx; margin-top: 12rpx; }
.empty { text-align: center; color: #999; padding: 60rpx 0; }
.load-more { width: 100%; background: linear-gradient(135deg, #ff9a56, #ff6b6b); color: #fff; border: none; border-radius: 48rpx; margin: 24rpx 0; padding: 24rpx; }
</style>
