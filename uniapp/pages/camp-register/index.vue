<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <view class="back" @tap="goBack">‹</view>
      <view class="title-box">
        <text class="title">免费试</text>
        <text class="subtitle">能给才是成交的关键!</text>
      </view>
    </view>

    <!-- Banner -->
    <view class="banner">
      <image src="/static/images/img-23.jpg" class="banner-img" mode="aspectFill" />
    </view>

    <!-- 筛选标签 -->
    <view class="filters-main">
      <view v-for="f in mainFilters" :key="f.id" class="filter" :class="{ active: f.active }" @tap="toggleFilter(f)">
        <text>{{ f.name }}</text>
        <text class="arrow">▼</text>
      </view>
    </view>

    <!-- 快捷标签 -->
    <view class="tags">
      <view v-for="tag in quickTags" :key="tag.id" class="tag" :class="{ active: tag.active }" @tap="toggleTag(tag)">{{ tag.name }}</view>
    </view>

    <!-- 课程列表 -->
    <view class="courses">
      <view class="course" v-for="c in courseList" :key="c.id" @tap="goToCourseDetail(c.id)">
        <image :src="c.image" class="cover" mode="aspectFill" />
        <view class="info">
          <view class="coach-row">
            <image :src="c.coach.avatar" class="avatar" mode="aspectFill" />
            <text class="coach-name">{{ c.coach.name }}</text>
            <text class="category">{{ c.tags }}</text>
          </view>
          <text class="course-title">{{ c.title }}</text>
          <text class="location">{{ c.location }}</text>
          <view class="price-row">
            <view class="left">
              <text class="value-text">价值</text>
              <text class="price">¥{{ c.price }}</text>
              <text class="lottery">{{ c.lottery }}个中奖名额</text>
            </view>
            <view class="btn" @tap.stop="handleFreeDraw(c.id)">免费抽</view>
          </view>
        </view>
      </view>
    </view>

    <!-- 加载更多 -->
    <view class="load-more" @tap="loadMore">
      <text>{{ loading ? '加载中...' : '加载更多' }}</text>
      <text class="icon">▼</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      mainFilters: [
        { id: 'area', name: '全部商区', active: false },
        { id: 'category', name: '全部分类', active: false },
        { id: 'sort', name: '智能排序', active: false },
        { id: 'more', name: '更多筛选', active: false }
      ],
      quickTags: [
        { id: 'lottery', name: '高中奖率', active: false },
        { id: 'nearby', name: '附近3km', active: false },
        { id: 'food', name: '吃喝', active: false },
        { id: 'sports', name: '运动', active: false },
        { id: 'art', name: '艺术', active: false },
        { id: 'interest', name: '兴趣', active: false }
      ],
      courseList: [
        { id: 1, title: '蛙泳/自由泳 (体验卡)', image: '/static/images/img-11.jpg', coach: { name: '李教练', avatar: '/static/images/img-12.jpg' }, tags: '技能类', location: '金地天御18号001 大楼体育 1km', price: 38, lottery: 50 },
        { id: 2, title: '蛙泳/自由泳 (5次卡)', image: '/static/images/img-11.jpg', coach: { name: '赵教练', avatar: '/static/images/img-12.jpg' }, tags: '上门服务', location: '静安区 | 黄浦区', price: 60, lottery: 30 },
        { id: 3, title: '瑜伽基础入门课', image: '/static/images/img-11.jpg', coach: { name: '王老师', avatar: '/static/images/img-12.jpg' }, tags: '技能类', location: '徐汇区 瑜伽馆 2km', price: 88, lottery: 40 },
        { id: 4, title: '健身私教体验课', image: '/static/images/img-11.jpg', coach: { name: '张教练', avatar: '/static/images/img-12.jpg' }, tags: '线上服务', location: '浦东新区 健身房 3km', price: 128, lottery: 20 }
      ]
    }
  },
  methods: {
    goBack() { uni.navigateBack() },
    toggleFilter(f) { f.active = !f.active },
    toggleTag(tag) { tag.active = !tag.active },
    handleFreeDraw(id) { uni.showToast({ title: '免费抽奖功能！', icon: 'none' }) },
    goToCourseDetail(id) { uni.navigateTo({ url: `/pages/camp-detail/index?id=${id}` }) },
    loadMore() {
      if (this.loading) return
      this.loading = true
      setTimeout(() => { this.loading = false }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.page { background: #f7f7f7; min-height: 100vh; }
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 99; background: rgba(255,255,255,0.95); backdrop-filter: blur(10rpx); display: flex; align-items: center; padding: 20rpx 30rpx; }
.back { width: 48rpx; height: 48rpx; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2rpx 8rpx rgba(0,0,0,.06); font-size: 36rpx; color: #333; }
.title-box { flex: 1; margin-left: 20rpx; }
.title { font-size: 30rpx; font-weight: 700; color: #222; }
.subtitle { font-size: 22rpx; color: #999; margin-left: 12rpx; }
.banner { margin-top: 100rpx; padding: 20rpx; }
.banner-img { width: 100%; height: 320rpx; border-radius: 16rpx; }
.filters-main { background: #fff; display: flex; padding: 24rpx 30rpx; justify-content: space-between; }
.filter { display: flex; align-items: center; font-size: 26rpx; color: #666; }
.filter .arrow { font-size: 20rpx; margin-left: 8rpx; }
.filter.active { color: #ff6b6b; }
.tags { background: #fff; padding: 0 30rpx 24rpx; border-bottom: 1rpx solid #f0f0f0; display: flex; overflow-x: auto; }
.tag { padding: 16rpx 24rpx; font-size: 24rpx; background: #f5f5f5; color: #666; border-radius: 999rpx; margin-right: 16rpx; white-space: nowrap; }
.tag.active { background: #fff4f0; color: #ff6b6b; }
.courses { padding: 20rpx; display: grid; grid-template-columns: 1fr 1fr; gap: 20rpx; }
.course { background: #fff; border-radius: 16rpx; overflow: hidden; box-shadow: 0 4rpx 12rpx rgba(0,0,0,.04); }
.cover { width: 100%; height: 280rpx; }
.info { padding: 20rpx; }
.coach-row { display: flex; align-items: center; margin-bottom: 16rpx; }
.avatar { width: 40rpx; height: 40rpx; border-radius: 50%; margin-right: 12rpx; }
.coach-name { font-size: 22rpx; color: #666; flex: 1; }
.category { font-size: 22rpx; color: #999; }
.course-title { font-size: 26rpx; font-weight: 600; color: #222; margin-bottom: 8rpx; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.location { font-size: 22rpx; color: #999; margin-bottom: 16rpx; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.price-row { display: flex; align-items: center; justify-content: space-between; }
.left { display: flex; align-items: baseline; }
.value-text { font-size: 20rpx; color: #999; }
.price { font-size: 26rpx; color: #ff6b6b; font-weight: 700; margin: 0 8rpx; }
.lottery { font-size: 20rpx; color: #999; }
.btn { background: linear-gradient(90deg, #ff8a4c, #ff6b6b); color: #fff; padding: 8rpx 20rpx; border-radius: 999rpx; font-size: 22rpx; }
.load-more { text-align: center; padding: 40rpx; color: #999; font-size: 26rpx; }
.load-more .icon { margin-left: 12rpx; }
</style>
