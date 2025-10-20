<template>
  <view class="page">
    <view class="prod" v-if="order.title">
      <image class="cover" src="https://dummyimage.com/200x200/eee/999.png&text=P" mode="aspectFill" />
      <view class="pinfo">
        <text class="ptitle">{{ order.title }}</text>
        <text class="pid">订单号：{{ order.orderId }}</text>
      </view>
    </view>

    <view class="section">
      <text class="label">评分</text>
      <view class="stars">
        <text v-for="i in 5" :key="i" :class="['star', i<=rating?'on':'off']" @tap="rating=i">★</text>
        <text class="hint">{{ rating }}/5</text>
      </view>
    </view>

    <view class="section">
      <text class="label">评价内容</text>
      <textarea class="textarea" v-model="content" :maxlength="500" placeholder="分享你的真实体验，帮助更多伙伴～" />
      <view class="count">{{ content.length }}/500</view>
    </view>

    <view class="section">
      <text class="label">图片</text>
      <view class="imgs">
        <view v-for="(img,idx) in images" :key="idx" class="img-box">
          <image :src="img" mode="aspectFill" class="img" @tap="preview(images, idx)" />
          <text class="del" @tap="removeImage(idx)">×</text>
        </view>
        <view v-if="images.length<6" class="uploader" @tap="chooseImages">+
          <text class="uploader-tip">最多6张</text>
        </view>
      </view>
    </view>

    <view class="section row">
      <text class="label">匿名评价</text>
      <switch :checked="anonymous" @change="anonymous=$event.detail.value" color="#ff6b6b" />
    </view>

    <button class="submit" @tap="submit">提交评价</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      order: { orderId: '', title: '' },
      rating: 5,
      content: '',
      images: [],
      anonymous: false
    }
  },
  onLoad(query) {
    if (query && query.payload) {
      try { this.order = JSON.parse(decodeURIComponent(query.payload)) } catch(e) {}
    }
  },
  methods: {
    chooseImages() {
      uni.chooseImage({ count: 6 - this.images.length, sizeType: ['compressed'], success: (res) => {
        this.images = this.images.concat(res.tempFilePaths)
      }})
    },
    removeImage(idx) { this.images.splice(idx,1) },
    preview(urls, current) { uni.previewImage({ urls, current }) },
    async submit() {
      if (!this.rating) return uni.showToast({ title: '请先评分', icon: 'none' })
      if (!this.content.trim()) return uni.showToast({ title: '请填写评价内容', icon: 'none' })
      // TODO: 上传图片与提交接口对接
      uni.showLoading({ title: '提交中' })
      setTimeout(() => {
        uni.hideLoading()
        uni.showToast({ title: '提交成功' })
        setTimeout(() => uni.navigateBack(), 500)
      }, 600)
    }
  }
}
</script>

<style scoped>
.page { min-height: 100vh; background: #f7f7f7; padding: 16rpx; }
.prod { background: #fff; border-radius: 16rpx; display: flex; overflow: hidden; margin-bottom: 16rpx; }
.cover { width: 180rpx; height: 180rpx; }
.pinfo { padding: 16rpx; display: flex; flex-direction: column; justify-content: center; }
.ptitle { font-size: 30rpx; color: #333; margin-bottom: 8rpx; }
.pid { font-size: 24rpx; color: #999; }
.section { background: #fff; border-radius: 16rpx; padding: 16rpx; margin-bottom: 16rpx; }
.row { display: flex; justify-content: space-between; align-items: center; }
.label { font-size: 28rpx; color: #333; margin-bottom: 12rpx; display: block; }
.stars { display: flex; align-items: center; gap: 8rpx; }
.star { font-size: 40rpx; }
.star.on { color: #f59e0b; }
.star.off { color: #e5e7eb; }
.hint { margin-left: 12rpx; font-size: 24rpx; color: #999; }
.textarea { width: 100%; min-height: 180rpx; border: 2rpx solid #eee; border-radius: 12rpx; padding: 16rpx; font-size: 28rpx; }
.count { text-align: right; font-size: 22rpx; color: #999; margin-top: 8rpx; }
.imgs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12rpx; }
.img-box { position: relative; }
.img { width: 100%; aspect-ratio: 1; border-radius: 12rpx; }
.del { position: absolute; top: -10rpx; right: -10rpx; background: #ff6b6b; color: #fff; width: 36rpx; height: 36rpx; border-radius: 50%; text-align: center; line-height: 36rpx; font-size: 24rpx; }
.uploader { background: #f9fafb; border: 2rpx dashed #e5e7eb; height: 160rpx; border-radius: 12rpx; display:flex; align-items:center; justify-content:center; color:#999; position: relative; }
.uploader-tip { position: absolute; bottom: 8rpx; font-size: 20rpx; color: #bbb; }
.submit { width: 100%; background: linear-gradient(135deg, #ff9a56, #ff6b6b); color: #fff; border: none; border-radius: 48rpx; padding: 24rpx; font-size: 30rpx; }
</style>
