<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <text class="title">唤醒营</text>
    </view>

    <!-- 轮播图 -->
    <view class="banner">
      <image src="/static/images/img-31.jpg" class="banner-img" mode="aspectFill" />
      <view class="banner-text">
        <text class="banner-title">唤醒营活动</text>
        <text class="banner-desc">探索更多精彩内容</text>
      </view>
    </view>

    <!-- 筛选标签 -->
    <scroll-view class="filter-tabs" scroll-x>
      <view 
        v-for="(tab, index) in tabs" 
        :key="index"
        class="tab-item"
        :class="{ 'tab-active': activeTab === index }"
        @tap="activeTab = index"
      >
        {{ tab }}
      </view>
    </scroll-view>

    <!-- 唤醒营列表 -->
    <scroll-view class="camp-list" scroll-y>
      <view 
        v-for="camp in camps" 
        :key="camp.id"
        class="camp-card"
        @tap="goToCampDetail(camp.id)"
      >
        <view class="camp-img-wrapper">
          <image :src="camp.image" class="camp-img" mode="aspectFill" />
          <view v-if="camp.badge" class="camp-badge" :class="`badge-${camp.badgeType}`">
            {{ camp.badge }}
          </view>
        </view>
        
        <view class="camp-info">
          <view class="camp-header">
            <text class="camp-name">{{ camp.name }}</text>
            <view class="camp-members">
              <text class="member-icon">👥</text>
              <text class="member-count">{{ camp.members }}人参加</text>
            </view>
          </view>
          
          <text class="camp-desc">{{ camp.desc }}</text>
          
          <view class="camp-coach">
            <image :src="camp.coachAvatar" class="coach-avatar" mode="aspectFill" />
            <text class="coach-name">{{ camp.coachName }}</text>
            <view class="camp-tags">
              <text v-for="tag in camp.tags" :key="tag" class="tag">{{ tag }}</text>
            </view>
          </view>
          
          <view class="camp-footer">
            <view class="price-section">
              <text class="price-current">¥{{ camp.price }}</text>
              <text class="price-original">¥{{ camp.originalPrice }}</text>
            </view>
            <button class="btn-register" @tap.stop="registerCamp(camp.id)">
              立即报名
            </button>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: ['全部', '健身', '减肥', '瑜伽', '舞蹈', '冥想'],
      camps: [
        {
          id: 1,
          name: '体重唤醒营',
          desc: '科学减脂，健康生活，专业教练一对一指导',
          image: '/static/images/img-32.jpg',
          badge: '限时5折',
          badgeType: 'red',
          members: 258,
          coachName: '李教练',
          coachAvatar: '/static/images/img-20.jpg',
          tags: ['科学', '高效', '健康'],
          price: 299,
          originalPrice: 599
        },
        {
          id: 2,
          name: '瑜伽唤醒营',
          desc: '身心平衡，放松压力，提升专注力和幸福感',
          image: '/static/images/img-33.jpg',
          badge: '新课上线',
          badgeType: 'green',
          members: 189,
          coachName: '张老师',
          coachAvatar: '/static/images/img-21.jpg',
          tags: ['减压', '专注', '平衡'],
          price: 199,
          originalPrice: 399
        }
      ]
    }
  },
  
  methods: {
    goToCampDetail(id) {
      uni.navigateTo({ url: `/pages/camp-detail/index?id=${id}` })
    },
    
    registerCamp(id) {
      uni.showToast({
        title: '报名成功',
        icon: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/uni.scss";

.page {
  min-height: 100vh;
  background-color: $uni-bg-color-grey;
  padding-bottom: 120rpx;
}

/* 顶部导航 */
.header {
  background-color: white;
  padding: calc(var(--status-bar-height) + 30rpx) 30rpx 30rpx;
  text-align: center;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
}

/* 轮播图 */
.banner {
  position: relative;
  height: 320rpx;
  margin-bottom: 30rpx;
}

.banner-img {
  width: 100%;
  height: 100%;
}

.banner-text {
  position: absolute;
  bottom: 30rpx;
  left: 30rpx;
  color: white;
}

.banner-title {
  font-size: 36rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 8rpx;
  text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.3);
}

.banner-desc {
  font-size: 24rpx;
  opacity: 0.8;
}

/* 筛选标签 */
.filter-tabs {
  display: flex;
  padding: 30rpx;
  white-space: nowrap;
}

.tab-item {
  padding: 16rpx 30rpx;
  margin-right: 20rpx;
  border-radius: 50rpx;
  font-size: 28rpx;
  background-color: $uni-bg-color;
  color: $uni-text-color-grey;
  
  &.tab-active {
    background-color: rgba($uni-color-primary, 0.1);
    color: $uni-color-primary;
  }
}

/* 唤醒营列表 */
.camp-list {
  height: calc(100vh - 580rpx);
  padding: 0 30rpx;
}

.camp-card {
  background-color: white;
  border-radius: 24rpx;
  overflow: hidden;
  margin-bottom: 30rpx;
  box-shadow: $uni-shadow-sm;
}

.camp-img-wrapper {
  position: relative;
  height: 320rpx;
}

.camp-img {
  width: 100%;
  height: 100%;
}

.camp-badge {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  font-size: 24rpx;
  padding: 8rpx 20rpx;
  
  &.badge-red {
    background-color: #ff4757;
  }
  
  &.badge-green {
    background-color: #26de81;
  }
}

.camp-info {
  padding: 30rpx;
}

.camp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16rpx;
}

.camp-name {
  font-size: 32rpx;
  font-weight: 500;
}

.camp-members {
  display: flex;
  align-items: center;
  font-size: 24rpx;
  color: $uni-text-color-grey;
}

.member-icon {
  margin-right: 8rpx;
}

.camp-desc {
  font-size: 24rpx;
  color: $uni-text-color-grey;
  display: block;
  margin-bottom: 24rpx;
}

.camp-coach {
  display: flex;
  align-items: center;
  margin-bottom: 30rpx;
}

.coach-avatar {
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  margin-right: 16rpx;
}

.coach-name {
  font-size: 24rpx;
  margin-right: 24rpx;
}

.camp-tags {
  display: flex;
  flex: 1;
}

.tag {
  background-color: $uni-bg-color-grey;
  color: $uni-text-color-grey;
  font-size: 20rpx;
  padding: 4rpx 16rpx;
  border-radius: 8rpx;
  margin-right: 12rpx;
}

.camp-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-section {
  display: flex;
  align-items: baseline;
}

.price-current {
  color: $uni-color-primary;
  font-size: 36rpx;
  font-weight: bold;
  margin-right: 16rpx;
}

.price-original {
  color: $uni-text-color-grey;
  font-size: 24rpx;
  text-decoration: line-through;
}

.btn-register {
  background-color: $uni-color-primary;
  color: white;
  font-size: 24rpx;
  padding: 12rpx 40rpx;
  border-radius: 50rpx;
  border: none;
}
</style>
