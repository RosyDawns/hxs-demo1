<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header" :style="{paddingTop: statusBarHeight + 'px', backgroundColor: `rgba(255,255,255,${headerOpacity})`}">
      <view class="city-btn" :style="{color: headerOpacity > 0.5 ? '#000' : '#fff'}" @tap="showCityModal = true">
        <text>{{ selectedCity || '上海' }}</text>
        <text class="arrow">▼</text>
      </view>
      <view class="search-area">
        <view class="search-box" @tap="goToSearch">
          <text class="icon">🔍</text>
          <text class="placeholder">健身计划</text>
          <view class="match-btn" @tap.stop="goToAI">一键<text>匹配</text></view>
        </view>
      </view>
    </view>

    <!-- Banner -->
    <view class="banner">
      <image src="/static/images/img_39.jpg" mode="aspectFill" class="banner-img" />
      <view class="banner-text">
        <text class="title">生活唤醒师频道</text>
        <view class="subtitle" @tap="goToTeacherList">
          <text>同城找人，找靠谱的人！</text>
          <text class="go-tag">GO></text>
        </view>
      </view>
    </view>

    <!-- 核心功能 -->
    <view class="core-section">
      <view class="core-card">
        <view class="grid-3">
          <view class="item" @tap="goToChannel('主理人')">
            <image src="/static/images/user_1.png" mode="aspectFill" class="item-img" />
            <text class="item-text">主理人频道</text>
          </view>
          <view class="item" @tap="goToChannel('生活技能')">
            <image src="/static/images/user_2.png" mode="aspectFill" class="item-img" />
            <text class="item-text">技能唤醒狮</text>
          </view>
          <view class="item" @tap="goToChannel('生活搭子')">
            <image src="/static/images/user_3.png" mode="aspectFill" class="item-img" />
            <text class="item-text">搭子唤醒狮</text>
          </view>
        </view>
      </view>

      <!-- 快捷入口 -->
      <view class="quick-grid">
        <view class="quick-item" @tap="goToRanking">
          <text class="q-title">城市大师</text>
          <text class="q-desc">大师榜单</text>
          <text class="q-icon">📍</text>
        </view>
        <view class="quick-item" @tap="goToCamp">
          <text class="q-title">免费体验</text>
          <text class="q-desc">试试就试试</text>
          <view class="q-badge">0元</view>
        </view>
        <view class="quick-item wide" @tap="goToWeightCamp">
          <view class="q-flex">
            <text class="q-ball">⚽</text>
            <view class="q-info">
              <text class="q-title">体重管理唤醒营</text>
              <text class="q-desc">唤醒瘦 · 科学瘦 · 坚持瘦</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 分类标签 -->
    <scroll-view scroll-x class="tabs-scroll">
      <view 
        v-for="tab in tabs" 
        :key="tab" 
        :class="['tab', selectedTab === tab ? 'active' : '']"
        @tap="selectTab(tab)"
      >
        {{ tab }} <text v-if="tab !== '直播'" class="tab-arrow">⇄</text>
      </view>
    </scroll-view>

    <!-- 教练列表 -->
    <view class="coach-list">
      <view class="grid-2">
        <view 
          v-for="coach in coaches" 
          :key="coach.id"
          class="coach-card"
          @tap="goToDetail(coach.id)"
        >
          <image :src="coach.avatar" mode="aspectFill" class="coach-img" />
          <view class="coach-info">
            <view class="coach-header">
              <image :src="coach.pic" mode="aspectFill" class="coach-pic" />
              <text class="coach-name">{{ coach.name }}</text>
            </view>
            <text class="coach-title">{{ coach.qualification }}</text>
            <text class="coach-skill">擅长: {{ coach.skills }}</text>
            <view class="coach-footer">
              <view class="rating">
                <text>{{ coach.rating }}</text>
                <text class="star">⭐</text>
              </view>
              <view class="label">{{ coach.label }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 城市选择 -->
    <view v-if="showCityModal" class="modal-mask" @tap="showCityModal = false">
      <view class="city-content" @tap.stop>
        <view class="modal-header">
          <text class="modal-title">选择城市</text>
          <text class="modal-close" @tap="showCityModal = false">✕</text>
        </view>
        <view class="hot-cities">
          <text class="section-label">热门城市</text>
          <view class="cities-grid">
            <text 
              v-for="city in hotCities" 
              :key="city" 
              class="city-tag"
              @tap="selectCity(city)"
            >
              {{ city }}
            </text>
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
      statusBarHeight: 44,
      headerOpacity: 0,
      showCityModal: false,
      selectedCity: '',
      selectedTab: '推荐',
      tabs: ['关注', '推荐', '附近', '筛选', '直播'],
      hotCities: ['上海', '北京', '广州', '深圳', '杭州', '南京', '成都', '武汉'],
      coaches: [
        { id: 1, name: '李教练', avatar: '/static/images/img-18.jpg', pic: '/static/images/img-13.jpg', qualification: '国家一级游泳运动员', skills: '长泳/自由泳', rating: 4.8, label: '到店服务' },
        { id: 2, name: '赵教练', avatar: '/static/images/img-19.jpg', pic: '/static/images/img-14.jpg', qualification: '国家一级游泳运动员', skills: '仰泳/自由泳', rating: 4.9, label: '上门服务' }
      ]
    }
  },
  
  onLoad() {
    const info = uni.getSystemInfoSync()
    this.statusBarHeight = info.statusBarHeight || 44
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
    
    goToCamp() {
      uni.navigateTo({ url: '/pages/camp-register/index' })
    },
    
    goToWeightCamp() {
      uni.navigateTo({ url: '/pages/weight-management-camp/index' })
    },
    
    goToDetail(id) {
      uni.navigateTo({ url: `/pages/ouyang/index?id=${id}` })
    },
    
    selectTab(tab) {
      this.selectedTab = tab
    },
    
    selectCity(city) {
      this.selectedCity = city
      this.showCityModal = false
    }
  }
}
</script>

<style scoped>
.page { min-height: 100vh; background: #f5f5f5; }

.header { position: fixed; top: 0; left: 0; right: 0; z-index: 999; display: flex; align-items: center; padding: 16rpx 24rpx; }
.city-btn { display: flex; align-items: center; font-size: 28rpx; font-weight: 500; }
.arrow { margin-left: 8rpx; font-size: 20rpx; }
.search-area { flex: 1; margin: 0 16rpx; }
.search-box { position: relative; background: #f5f5f5; border-radius: 48rpx; border: 2rpx solid #ff6b6b; padding: 16rpx 180rpx 16rpx 60rpx; display: flex; align-items: center; }
.icon { position: absolute; left: 20rpx; font-size: 28rpx; }
.placeholder { font-size: 28rpx; color: #999; }
.match-btn { position: absolute; right: 8rpx; top: 8rpx; bottom: 8rpx; width: 120rpx; background: #ff6b6b; color: #fff; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 20rpx; line-height: 1.2; }

.banner { position: relative; height: 400rpx; margin-top: calc(var(--status-bar-height, 44px) + 140rpx); }
.banner-img { width: 100%; height: 100%; }
.banner-text { position: absolute; top: 50%; left: 40rpx; transform: translateY(-50%); color: #fff; }
.title { font-size: 48rpx; font-weight: bold; display: block; margin-bottom: 20rpx; text-shadow: 0 2rpx 8rpx rgba(0,0,0,0.3); }
.subtitle { display: flex; align-items: center; padding: 16rpx 24rpx; border: 2rpx solid #fff; border-radius: 48rpx; font-size: 28rpx; }
.go-tag { margin-left: 20rpx; background: rgba(255,255,255,0.3); padding: 4rpx 16rpx; border-radius: 20rpx; }

.core-section { padding: 24rpx; margin-top: -160rpx; position: relative; z-index: 10; }
.core-card { background: #fff; border-radius: 24rpx; padding: 24rpx; margin-bottom: 16rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05); }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16rpx; }
.item { background: #fff; border-radius: 16rpx; overflow: hidden; box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05); }
.item-img { width: 100%; height: 200rpx; }
.item-text { display: block; text-align: center; padding: 16rpx 0; font-size: 28rpx; }

.quick-grid { display: grid; grid-template-columns: 1fr 1fr 2fr; gap: 16rpx; }
.quick-item { background: #fff; border-radius: 16rpx; padding: 24rpx; position: relative; box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05); }
.q-title { font-size: 28rpx; font-weight: bold; display: block; margin-bottom: 8rpx; }
.q-desc { font-size: 24rpx; color: #999; display: block; }
.q-icon { position: absolute; bottom: 20rpx; right: 20rpx; font-size: 32rpx; color: #ff9500; }
.q-badge { position: absolute; bottom: 20rpx; right: 20rpx; background: #ffd700; color: #fff; font-size: 20rpx; padding: 4rpx 12rpx; border-radius: 20rpx; }
.q-flex { display: flex; align-items: center; }
.q-ball { font-size: 48rpx; margin-right: 16rpx; color: #ff6b6b; }
.q-info { flex: 1; }

.tabs-scroll { white-space: nowrap; padding: 24rpx; border-bottom: 1rpx solid #eee; }
.tab { display: inline-block; padding: 12rpx 20rpx; margin-right: 20rpx; font-size: 28rpx; color: #666; }
.tab.active { color: #ff6b6b; border-bottom: 4rpx solid #ff6b6b; }
.tab-arrow { font-size: 20rpx; margin-left: 8rpx; }

.coach-list { padding: 24rpx; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16rpx; }
.coach-card { background: #fff; border-radius: 16rpx; overflow: hidden; box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05); }
.coach-img { width: 100%; height: 360rpx; }
.coach-info { padding: 20rpx; }
.coach-header { display: flex; align-items: center; margin-bottom: 12rpx; }
.coach-pic { width: 48rpx; height: 48rpx; border-radius: 50%; margin-right: 12rpx; }
.coach-name { font-size: 28rpx; font-weight: 500; }
.coach-title { font-size: 24rpx; font-weight: bold; display: block; margin-bottom: 12rpx; }
.coach-skill { font-size: 24rpx; color: #999; display: block; margin-bottom: 16rpx; }
.coach-footer { display: flex; justify-content: space-between; align-items: center; }
.rating { display: flex; align-items: center; font-size: 24rpx; }
.star { margin-left: 8rpx; }
.label { background: #ff6b6b; color: #fff; font-size: 20rpx; padding: 4rpx 16rpx; border-radius: 20rpx; }

.modal-mask { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; align-items: flex-end; }
.city-content { background: #fff; width: 100%; border-radius: 32rpx 32rpx 0 0; padding: 40rpx; max-height: 80vh; }
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32rpx; }
.modal-title { font-size: 36rpx; font-weight: bold; }
.modal-close { font-size: 48rpx; color: #999; }
.section-label { font-size: 28rpx; color: #999; display: block; margin-bottom: 20rpx; }
.cities-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16rpx; }
.city-tag { padding: 16rpx; background: #f5f5f5; border-radius: 12rpx; text-align: center; font-size: 26rpx; }
</style>
