<template>
  <view class="page">
    <!-- 商品图片 -->
    <image src="/static/images/img_39.jpg" class="cover" mode="aspectFill" />
    
    <!-- 商品信息 -->
    <view class="info-card">
      <view class="price-row">
        <view class="coupon-badge">券后</view>
        <text class="price">¥{{ product.price }}</text>
        <text class="discount">3.0折</text>
        <text class="original">¥{{ Math.floor(product.price * 1.1) }}</text>
        <text class="sold">已售 6000</text>
      </view>
      <text class="title">[体验卡]1对1游泳零基础蛙泳/自由泳（新人福利）</text>
      <view class="rating-row">
        <image src="/static/images/img-12.jpg" class="avatar" mode="aspectFill" />
        <text class="rate">100%好评</text>
        <text class="comment">"教练很专业，环境很不错</text>
        <text class="count">共183个消费评价</text>
      </view>
      <view class="rules">
        <view class="rule"><text class="key">限制</text><text class="val">每人限购1张</text></view>
        <view class="rule"><text class="key">须知</text><text class="val">需预约 · 周一至周日10:00-22:00可用</text></view>
        <view class="rule"><text class="key">保障</text><text class="val">随时退 · 过期退</text></view>
      </view>
    </view>

    <!-- Tab切换 -->
    <view class="tabs">
      <text v-for="tab in tabs" :key="tab.key" class="tab" :class="{ active: activeTab === tab.key }" @tap="activeTab = tab.key">{{ tab.label }}</text>
    </view>

    <!-- 内容区 -->
    <view class="content">
      <view v-if="activeTab === 'details'" class="section">
        <view class="section-title">游泳一对一体验课程</view>
        <text class="desc">[体验卡]1对1游泳零基础蛙泳/自由泳（新人福利）</text>
        <text class="item">游泳种类: 可自选</text>
        <text class="item">课程时长: 45分钟</text>
      </view>
      <view v-else-if="activeTab === 'notices'" class="section">
        <text class="notice">1. 请至少提前24小时预约课程。</text>
        <text class="notice">2. 课程需在购买后30天内使用，逾期作废。</text>
        <text class="notice">3. 请自带泳衣、泳帽、泳镜等个人物品。</text>
      </view>
      <view v-else class="section">
        <text class="review-title">评价详情 ({{ product.reviews }})</text>
        <view class="review-item" v-for="(r, i) in reviews" :key="i">
          <view class="review-header">
            <image :src="r.avatar" class="review-avatar" mode="aspectFill" />
            <text class="review-name">{{ r.name }}</text>
            <text class="review-date">{{ r.date }}</text>
          </view>
          <text class="review-stars">⭐⭐⭐⭐⭐</text>
          <text class="review-text">{{ r.text }}</text>
        </view>
      </view>
    </view>

    <!-- 底部购买栏 -->
    <view class="footer">
      <view class="icon-btn">💬</view>
      <view class="icon-btn">🛒</view>
      <view class="buy-btn" @tap="handleBuy">立即购买</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      product: { price: 38, reviews: 183 },
      tabs: [
        { key: 'details', label: '团购详情' },
        { key: 'notices', label: '购买须知' },
        { key: 'reviews', label: '网友评价' }
      ],
      activeTab: 'details',
      reviews: [
        { avatar: '/static/images/img-12.jpg', name: '李***生', date: '2023-06-15', text: '教练很专业，环境很不错，推荐！' },
        { avatar: '/static/images/img-12.jpg', name: '王***女', date: '2023-06-10', text: '非常满意，会继续购买。' }
      ]
    }
  },
  methods: {
    handleBuy() { uni.showToast({ title: '购买功能', icon: 'none' }) }
  }
}
</script>

<style lang="scss" scoped>
.page { background: #f7f7f7; min-height: 100vh; padding-bottom: 140rpx; }
.cover { width: 100%; height: 600rpx; }
.info-card { background: #fff; margin: 20rpx; padding: 30rpx; border-radius: 24rpx; }
.price-row { display: flex; align-items: center; margin-bottom: 20rpx; background: #fff4f0; padding: 16rpx; border-radius: 12rpx; }
.coupon-badge { background: #ff6b6b; color: #fff; font-size: 20rpx; padding: 4rpx 12rpx; border-radius: 8rpx; margin-right: 12rpx; }
.price { color: #ff6b6b; font-size: 40rpx; font-weight: 700; margin-right: 12rpx; }
.discount { border: 2rpx solid #ff6b6b; color: #ff6b6b; font-size: 20rpx; padding: 4rpx 8rpx; border-radius: 8rpx; margin-right: 12rpx; }
.original { color: #999; font-size: 24rpx; text-decoration: line-through; margin-right: auto; }
.sold { color: #999; font-size: 22rpx; }
.title { font-size: 30rpx; font-weight: 700; color: #222; margin-bottom: 20rpx; display: block; }
.rating-row { display: flex; align-items: center; margin-bottom: 24rpx; font-size: 22rpx; color: #666; }
.avatar { width: 40rpx; height: 40rpx; border-radius: 50%; margin-right: 12rpx; }
.rate, .comment { margin-right: 12rpx; }
.count { margin-left: auto; }
.rules .rule { display: flex; margin-bottom: 16rpx; font-size: 24rpx; }
.rule .key { color: #222; font-weight: 600; margin-right: 16rpx; width: 80rpx; }
.rule .val { color: #666; flex: 1; }
.tabs { background: #fff; display: flex; padding: 0 20rpx; border-bottom: 1rpx solid #f0f0f0; }
.tab { padding: 24rpx 30rpx; font-size: 26rpx; color: #666; }
.tab.active { color: #ff6b6b; border-bottom: 4rpx solid #ff6b6b; font-weight: 600; }
.content { background: #fff; padding: 30rpx; }
.section { }
.section-title { background: #fff4f0; padding: 20rpx 24rpx; font-size: 26rpx; color: #222; margin-bottom: 20rpx; border-radius: 12rpx; }
.desc { font-size: 28rpx; font-weight: 700; color: #222; margin-bottom: 16rpx; display: block; }
.item { font-size: 24rpx; color: #666; margin-bottom: 12rpx; display: block; }
.notice { font-size: 24rpx; color: #666; margin-bottom: 16rpx; display: block; line-height: 1.6; }
.review-title { font-size: 28rpx; font-weight: 700; color: #222; margin-bottom: 24rpx; display: block; }
.review-item { margin-bottom: 32rpx; padding-bottom: 32rpx; border-bottom: 1rpx solid #f0f0f0; }
.review-item:last-child { border: none; }
.review-header { display: flex; align-items: center; margin-bottom: 12rpx; }
.review-avatar { width: 60rpx; height: 60rpx; border-radius: 50%; margin-right: 16rpx; }
.review-name { flex: 1; font-size: 24rpx; color: #666; }
.review-date { font-size: 22rpx; color: #999; }
.review-stars { font-size: 24rpx; margin-bottom: 12rpx; display: block; }
.review-text { font-size: 26rpx; color: #333; line-height: 1.6; }
.footer { position: fixed; bottom: 0; left: 0; right: 0; background: #fff; display: flex; align-items: center; padding: 20rpx 30rpx; padding-bottom: calc(20rpx + env(safe-area-inset-bottom)); box-shadow: 0 -2rpx 16rpx rgba(0,0,0,.06); }
.icon-btn { width: 96rpx; height: 96rpx; background: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36rpx; margin-right: 20rpx; }
.buy-btn { flex: 1; background: linear-gradient(90deg, #ff8a4c, #ff6b6b); color: #fff; text-align: center; padding: 24rpx 0; border-radius: 999rpx; font-size: 32rpx; font-weight: 700; }
</style>
