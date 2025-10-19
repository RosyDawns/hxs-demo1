<template>
  <view class="page">
    <!-- 顶部导航栏 -->
    <view class="header" :style="{ backgroundColor: `rgba(255, 255, 255, ${headerOpacity})` }">
      <view class="header-left" @tap="showCityPicker = true">
        <text class="city-text">{{ selectedCity || '上海' }}</text>
        <text class="icon-down">▼</text>
      </view>
      
      <view class="search-wrapper">
        <view class="search-box" @tap="goToSearch">
          <text class="search-icon">🔍</text>
          <text class="search-placeholder">健身计划</text>
          <view class="match-btn" @tap.stop="goToAI">
            一键匹配
          </view>
        </view>
      </view>
    </view>

    <!-- Banner -->
    <view class="banner">
      <image src="/static/images/img_39.jpg" class="banner-img" mode="aspectFill" />
      <view class="banner-slogan">
        <text class="slogan-title">生活唤醒师频道</text>
        <view class="slogan-subtitle" @tap="goToTeacherList">
          <text>同城找人，找靠谱的人！</text>
          <text class="go-btn">GO></text>
        </view>
      </view>
    </view>

    <!-- 核心功能区 -->
    <view class="core-section">
      <view class="core-card">
        <view class="grid-3">
          <view class="func-item" @tap="goToChannel('主理人')">
            <image src="/static/images/user_1.png" class="func-img" mode="aspectFill" />
            <text class="func-text">主理人频道</text>
          </view>
          <view class="func-item" @tap="goToChannel('生活技能')">
            <image src="/static/images/user_2.png" class="func-img" mode="aspectFill" />
            <text class="func-text">技能唤醒狮</text>
          </view>
          <view class="func-item" @tap="goToChannel('生活搭子')">
            <image src="/static/images/user_3.png" class="func-img" mode="aspectFill" />
            <text class="func-text">搭子唤醒狮</text>
          </view>
        </view>
      </view>

      <!-- 快捷入口 -->
      <view class="quick-entry">
        <view class="entry-item entry-small" @tap="goToRanking">
          <text class="entry-title">城市大师</text>
          <text class="entry-desc">大师榜单</text>
          <text class="entry-icon">📍</text>
        </view>
        <view class="entry-item entry-small" @tap="goToCampRegister">
          <text class="entry-title">免费体验</text>
          <text class="entry-desc">试试就试试</text>
          <view class="entry-badge">0元</view>
        </view>
        <view class="entry-item entry-large" @tap="goToWeightCamp">
          <view class="entry-flex">
            <text class="entry-ball">⚽</text>
            <view class="entry-info">
              <text class="entry-title">体重管理唤醒营</text>
              <text class="entry-desc">唤醒瘦 · 科学瘦</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 分类标签栏 -->
    <view class="category-tabs">
      <view 
        v-for="tab in tabs" 
        :key="tab" 
        class="tab-item"
        :class="{ 'tab-active': selectedCategory === tab }"
        @tap="handleCategoryClick(tab)"
      >
        <text>{{ tab }}</text>
        <text v-if="tab !== '直播'" class="tab-icon">⇄</text>
      </view>
    </view>

    <!-- 教练列表 -->
    <view class="coach-list">
      <view class="coach-grid">
        <view 
          v-for="coach in coaches" 
          :key="coach.id"
          class="coach-card"
          @tap="goToCoachDetail(coach.id)"
        >
          <image :src="coach.avatar" class="coach-avatar" mode="aspectFill" />
          <view class="coach-info">
            <view class="coach-header">
              <image :src="coach.pic" class="coach-pic" mode="aspectFill" />
              <text class="coach-name">{{ coach.name }}</text>
            </view>
            <text class="coach-qualification">{{ coach.qualification }}</text>
            <text class="coach-skills">擅长: {{ coach.skills }}</text>
            <view class="coach-footer">
              <view class="coach-rating">
                <text class="rating-text">{{ coach.rating }}</text>
                <text class="star">⭐</text>
              </view>
              <view class="coach-label">{{ coach.label }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 城市选择弹窗 -->
    <view v-if="showCityPicker" class="city-modal" @tap="showCityPicker = false">
      <view class="city-content" @tap.stop>
        <view class="modal-header">
          <text class="modal-title">选择城市</text>
          <text class="modal-close" @tap="showCityPicker = false">✕</text>
        </view>
        <view class="hot-cities">
          <text class="section-title">热门城市</text>
          <view class="city-tags">
            <view 
              v-for="city in hotCities" 
              :key="city"
              class="city-tag"
              @tap="selectCity(city)"
            >
              {{ city }}
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
      headerOpacity: 0,
      showCityPicker: false,
      selectedCity: '',
      selectedCategory: '推荐',
      tabs: ['关注', '推荐', '附近', '筛选', '直播'],
      hotCities: ['上海', '北京', '广州', '深圳', '杭州', '南京'],
      coaches: [
        {
          id: 1,
          name: '李教练',
          avatar: '/static/images/img-18.jpg',
          pic: '/static/images/img-13.jpg',
          qualification: '国家一级游泳运动员',
          skills: '长泳/自由泳',
          rating: 4.8,
          label: '到店服务'
        },
        {
          id: 2,
          name: '赵教练',
          avatar: '/static/images/img-19.jpg',
          pic: '/static/images/img-14.jpg',
          qualification: '国家一级游泳运动员',
          skills: '仰泳/自由泳',
          rating: 4.9,
          label: '上门服务'
        }
      ]
    }
  },
  
  onPageScroll(e) {
    this.headerOpacity = Math.min(e.scrollTop / 300, 1)
  },
  
  methods: {
    goToSearch() {
      uni.navigateTo({ url: '/pages/search/index' })
    },
    
    goToAI() {
      uni.switchTab({ url: '/pages/ai-assistant/index' })
    },
    
    goToTeacherList() {
      uni.navigateTo({ url: '/pages/teacher-list/index' })
    },
    
    goToChannel(tab) {
      uni.navigateTo({ url: `/pages/teacher-list/index?tab=${tab}` })
    },
    
    goToRanking() {
      uni.navigateTo({ url: '/pages/ranking/index' })
    },
    
    goToCampRegister() {
      uni.navigateTo({ url: '/pages/camp-register/index' })
    },
    
    goToWeightCamp() {
      uni.navigateTo({ url: '/pages/weight-management-camp/index' })
    },
    
    goToCoachDetail(coachId) {
      uni.navigateTo({ url: `/pages/ouyang/index?id=${coachId}` })
    },
    
    handleCategoryClick(tab) {
      this.selectedCategory = tab
    },
    
    selectCity(city) {
      this.selectedCity = city
      this.showCityPicker = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/uni.scss";

.page {
  background-color: $uni-bg-color-grey;
  min-height: 100vh;
  padding-bottom: 120rpx;
}

/* 顶部导航 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: calc(var(--status-bar-height) + 20rpx) 30rpx 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  font-size: 28rpx;
}

.city-text {
  font-weight: 500;
}

.icon-down {
  margin-left: 10rpx;
  font-size: 24rpx;
}

.search-wrapper {
  flex: 1;
  margin: 0 20rpx;
}

.search-box {
  position: relative;
  background-color: $uni-bg-color-grey;
  border-radius: 50rpx;
  padding: 16rpx 180rpx 16rpx 60rpx;
  border: 2rpx solid $uni-color-primary;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 20rpx;
}

.search-placeholder {
  color: $uni-text-color-grey;
  font-size: 28rpx;
}

.match-btn {
  position: absolute;
  right: 8rpx;
  top: 8rpx;
  bottom: 8rpx;
  background-color: $uni-color-primary;
  color: white;
  border-radius: 50%;
  width: 120rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20rpx;
}

/* Banner */
.banner {
  position: relative;
  height: 400rpx;
  margin-top: calc(var(--status-bar-height) + 140rpx);
}

.banner-img {
  width: 100%;
  height: 100%;
}

.banner-slogan {
  position: absolute;
  top: 50%;
  left: 40rpx;
  transform: translateY(-50%);
  color: white;
}

.slogan-title {
  font-size: 48rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 20rpx;
  text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.3);
}

.slogan-subtitle {
  display: flex;
  align-items: center;
  padding: 16rpx 24rpx;
  border: 2rpx solid white;
  border-radius: 50rpx;
  font-size: 28rpx;
}

.go-btn {
  margin-left: 20rpx;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 4rpx 16rpx;
  border-radius: 50rpx;
}

/* 核心功能区 */
.core-section {
  padding: 30rpx;
  margin-top: -160rpx;
  position: relative;
  z-index: 10;
}

.core-card {
  background-color: white;
  border-radius: 24rpx;
  padding: 30rpx;
  box-shadow: $uni-shadow-base;
  margin-bottom: 20rpx;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20rpx;
}

.func-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 24rpx;
  overflow: hidden;
  box-shadow: $uni-shadow-sm;
}

.func-img {
  width: 100%;
  height: 150rpx;
}

.func-text {
  padding: 20rpx;
  font-size: 28rpx;
  text-align: center;
}

/* 快捷入口 */
.quick-entry {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 20rpx;
}

.entry-item {
  background-color: white;
  border-radius: 16rpx;
  padding: 30rpx 20rpx;
  box-shadow: $uni-shadow-sm;
  position: relative;
}

.entry-title {
  font-size: 28rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 8rpx;
}

.entry-desc {
  font-size: 24rpx;
  color: $uni-text-color-grey;
  display: block;
}

.entry-icon {
  position: absolute;
  bottom: 20rpx;
  right: 20rpx;
  font-size: 32rpx;
}

.entry-badge {
  position: absolute;
  bottom: 20rpx;
  right: 20rpx;
  background-color: #ffd700;
  color: white;
  font-size: 20rpx;
  padding: 4rpx 12rpx;
  border-radius: 20rpx;
}

.entry-flex {
  display: flex;
  align-items: center;
}

.entry-ball {
  font-size: 48rpx;
  margin-right: 16rpx;
}

.entry-info {
  flex: 1;
}

/* 分类标签 */
.category-tabs {
  display: flex;
  padding: 30rpx;
  overflow-x: auto;
}

.tab-item {
  padding: 16rpx 24rpx;
  white-space: nowrap;
  font-size: 28rpx;
  margin-right: 20rpx;
  
  &.tab-active {
    color: $uni-color-primary;
    border-bottom: 4rpx solid $uni-color-primary;
  }
}

.tab-icon {
  font-size: 20rpx;
  margin-left: 8rpx;
}

/* 教练列表 */
.coach-list {
  padding: 0 30rpx 30rpx;
}

.coach-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
}

.coach-card {
  background-color: white;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: $uni-shadow-sm;
}

.coach-avatar {
  width: 100%;
  height: 360rpx;
}

.coach-info {
  padding: 20rpx;
}

.coach-header {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}

.coach-pic {
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  margin-right: 12rpx;
}

.coach-name {
  font-size: 28rpx;
  font-weight: 500;
}

.coach-qualification {
  font-size: 24rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 12rpx;
}

.coach-skills {
  font-size: 24rpx;
  color: $uni-text-color-grey;
  display: block;
  margin-bottom: 16rpx;
}

.coach-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.coach-rating {
  display: flex;
  align-items: center;
  font-size: 24rpx;
}

.rating-text {
  margin-right: 8rpx;
}

.star {
  font-size: 24rpx;
}

.coach-label {
  background-color: $uni-color-primary;
  color: white;
  font-size: 20rpx;
  padding: 4rpx 16rpx;
  border-radius: 20rpx;
}

/* 城市选择弹窗 */
.city-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: flex-end;
}

.city-content {
  background-color: white;
  width: 100%;
  border-radius: 32rpx 32rpx 0 0;
  padding: 40rpx;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40rpx;
}

.modal-title {
  font-size: 36rpx;
  font-weight: bold;
}

.modal-close {
  font-size: 48rpx;
  color: $uni-text-color-grey;
}

.section-title {
  font-size: 28rpx;
  color: $uni-text-color-grey;
  display: block;
  margin-bottom: 20rpx;
}

.city-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 20rpx;
}

.city-tag {
  padding: 16rpx 30rpx;
  background-color: $uni-bg-color-grey;
  border-radius: 50rpx;
  font-size: 28rpx;
}
</style>
