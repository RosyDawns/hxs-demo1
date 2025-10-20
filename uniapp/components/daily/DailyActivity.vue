<template>
  <view class="daily-activity">
    <!-- 发布动态入口 -->
    <view class="publish">
      <image src="/static/images/img-12.jpg" class="avatar" mode="aspectFill" />
      <text class="tip">唤醒瘦·记录你的蜕变！</text>
      <view class="btn" @tap="goPublish">去发布</view>
      <view class="close" @tap="closePublishBanner">×</view>
    </view>

    <!-- 动态网格 -->
    <view class="grid">
      <view class="card" v-for="item in activities" :key="item.id" @tap="viewActivity(item.id)">
        <image :src="item.image" class="cover" mode="aspectFill" />
        <view class="info">
          <text class="title">{{ item.title }}</text>
          <view class="actions">
            <view class="left" @tap.stop="handleComment(item.id)">点评<text class="plus">+1</text></view>
            <view class="like" @tap.stop="handleLike(item.id)">❤ 赞 {{ item.likes }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'DailyActivity',
  data() {
    return {
      showPublishBanner: true,
      activities: [
        { id: 1, image: '/static/images/img-11.jpg', title: '终于瘦了10斤，永远在减肥的路上', likes: 0 },
        { id: 2, image: '/static/images/img-11.jpg', title: '吃的干净真的会瘦吗！！自制减脂餐', likes: 0 },
        { id: 3, image: '/static/images/img-11.jpg', title: '健身房就是打工人的第二个家呀！', likes: 0 },
        { id: 4, image: '/static/images/img-11.jpg', title: '晨跑10km，与日出一起享受慢悠悠的快乐', likes: 0 }
      ]
    }
  },
  methods: {
    goPublish() { uni.navigateTo({ url: '/pages/publish-activity/index' }) },
    closePublishBanner() { this.showPublishBanner = false },
    viewActivity(id) { uni.navigateTo({ url: `/pages/dynamic-detail/index?id=${id}` }) },
    handleComment(id) { /* 预留：打开评论 */ },
    handleLike(id) {
      const a = this.activities.find(v => v.id === id)
      if (a) a.likes++
    }
  }
}
</script>

<style lang="scss" scoped>
.daily-activity { background: #fff; }
.publish { display: flex; align-items: center; padding: 20rpx; }
.avatar { width: 60rpx; height: 60rpx; border-radius: 50%; margin-right: 16rpx; }
.tip { flex: 1; color: #333; font-size: 26rpx; }
.btn { border: 2rpx solid #ff6b6b; color: #ff6b6b; padding: 10rpx 20rpx; border-radius: 999rpx; font-size: 24rpx; }
.close { margin-left: 16rpx; color: #999; font-size: 28rpx; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20rpx; padding: 20rpx; }
.card { background: #fff; border-radius: 16rpx; overflow: hidden; box-shadow: 0 4rpx 12rpx rgba(0,0,0,.04); }
.cover { width: 100%; height: 300rpx; }
.info { padding: 16rpx; }
.title { font-size: 26rpx; color: #222; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 12rpx; }
.actions { display: flex; align-items: center; justify-content: space-between; }
.left { color: #ff6b6b; font-size: 22rpx; }
.plus { margin-left: 6rpx; }
.like { color: #666; font-size: 22rpx; }
</style>
