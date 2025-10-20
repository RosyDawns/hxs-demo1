<template>
  <view class="daily-coach">
    <!-- 筛选标签 -->
    <view class="filters">
      <view v-for="f in filters" :key="f.id" class="filter" :class="{ active: activeFilter === f.id }" @tap="activeFilter = f.id">
        <text>{{ f.name }}</text>
        <text v-if="f.hasDropdown" class="arrow">▼</text>
      </view>
      <view class="search" @tap="handleSearch">🔍</view>
    </view>

    <!-- 唤醒师列表 -->
    <view class="grid">
      <view class="coach" v-for="c in coaches" :key="c.id" @tap="handleViewProfile(c.id)">
        <image :src="c.avatar" class="avatar" mode="aspectFill" />
        <view class="meta">
          <text class="name">{{ c.name }}</text>
          <text class="qual">{{ c.qualification }}</text>
          <text class="skills">擅长：{{ c.skills }}</text>
          <view class="footer">
            <text class="rating">{{ c.rating }}⭐</text>
            <text class="label">{{ c.label }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'DailyCoach',
  data() {
    return {
      activeFilter: 'recommend',
      filters: [
        { id: 'recommend', name: '推荐', hasDropdown: true },
        { id: 'filter', name: '筛选', hasDropdown: true },
        { id: 'store', name: '到店服务', hasDropdown: false },
        { id: 'home', name: '上门服务', hasDropdown: false },
        { id: 'online', name: '线上服务', hasDropdown: false }
      ],
      coaches: [
        { id: '1', name: '李教练', avatar: '/static/images/img-19.jpg', qualification: '国家二级游泳运动员', skills: '蛙泳/自由泳', rating: 4.8, label: '到店服务' },
        { id: '2', name: '赵教练', avatar: '/static/images/img-18.jpg', qualification: '国家一级游泳运动员', skills: '仰泳/自由泳', rating: 4.9, label: '线上服务' },
        { id: '3', name: '张设计', avatar: '/static/images/img-13.jpg', qualification: '国家一级平面设计师', skills: '平面/包装', rating: 4.8, label: '线上服务' },
        { id: '4', name: '王教练', avatar: '/static/images/img-14.jpg', qualification: '国家二级网球运动员', skills: '正手/单反/发球', rating: 4.7, label: '线下服务' }
      ]
    }
  },
  methods: {
    handleSearch() {},
    handleViewProfile(id) {
      uni.navigateTo({ url: `/pages/ouyang/index?id=${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.daily-coach { background: #fff; }
.filters { display: flex; align-items: center; padding: 20rpx; border-bottom: 1rpx solid #f0f0f0; overflow-x: auto; }
.filter { margin-right: 24rpx; color: #222; font-size: 26rpx; white-space: nowrap; display: flex; align-items: center; }
.filter .arrow { margin-left: 6rpx; font-size: 20rpx; color: #999; }
.filter.active { color: #ff6b6b; }
.search { margin-left: auto; font-size: 28rpx; color: #666; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20rpx; padding: 20rpx; }
.coach { background: #fff; border-radius: 16rpx; overflow: hidden; box-shadow: 0 4rpx 12rpx rgba(0,0,0,.04); }
.avatar { width: 100%; height: 280rpx; }
.meta { padding: 16rpx; }
.name { font-size: 28rpx; font-weight: 600; }
.qual { font-size: 24rpx; margin-top: 8rpx; }
.skills { font-size: 24rpx; color: #666; margin: 8rpx 0 12rpx; }
.footer { display: flex; align-items: center; justify-content: space-between; }
.rating { font-size: 24rpx; }
.label { background: #ff6b6b; color: #fff; font-size: 20rpx; padding: 4rpx 12rpx; border-radius: 24rpx; }
</style>
