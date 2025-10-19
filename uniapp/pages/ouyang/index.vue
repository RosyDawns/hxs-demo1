<template>
  <view class="coach-detail-page">
    <!-- 头部背景 -->
    <image :src="coachInfo.banner" class="banner" mode="aspectFill" />
    
    <!-- 返回按钮 -->
    <view class="back-btn" @tap="goBack">
      <text class="back-icon">‹</text>
    </view>

    <!-- 内容区域 -->
    <scroll-view scroll-y class="content">
      <!-- 教练信息卡片 -->
      <view class="coach-card">
        <view class="coach-header">
          <image :src="coachInfo.avatar" class="coach-avatar" mode="aspectFill" />
          <view class="coach-info">
            <text class="coach-name">{{ coachInfo.name }}</text>
            <view class="rating">
              <text class="rating-score">⭐ {{ coachInfo.rating }}</text>
              <text class="rating-count">({{ coachInfo.reviewCount }}条评价)</text>
            </view>
          </view>
        </view>
        
        <view class="coach-tags">
          <text v-for="tag in coachInfo.tags" :key="tag" class="tag">{{ tag }}</text>
        </view>
        
        <text class="coach-bio">{{ coachInfo.bio }}</text>
      </view>

      <!-- 服务项目 -->
      <view class="section">
        <text class="section-title">服务项目</text>
        <view 
          v-for="service in coachInfo.services" 
          :key="service.id"
          class="service-card"
          @tap="selectService(service)"
        >
          <view class="service-info">
            <text class="service-name">{{ service.name }}</text>
            <text class="service-desc">{{ service.desc }}</text>
            <view class="service-price">
              <text class="price">¥{{ service.price }}</text>
              <text class="price-unit">/{{ service.unit }}</text>
            </view>
          </view>
          <image :src="service.image" class="service-image" mode="aspectFill" />
        </view>
      </view>

      <!-- 学员评价 -->
      <view class="section">
        <text class="section-title">学员评价 ({{ coachInfo.reviewCount }})</text>
        <view 
          v-for="review in coachInfo.reviews" 
          :key="review.id"
          class="review-card"
        >
          <view class="review-header">
            <image :src="review.avatar" class="review-avatar" mode="aspectFill" />
            <view class="review-info">
              <text class="review-name">{{ review.name }}</text>
              <text class="review-rating">⭐⭐⭐⭐⭐</text>
            </view>
          </view>
          <text class="review-content">{{ review.content }}</text>
          <text class="review-time">{{ review.time }}</text>
        </view>
      </view>
    </scroll-view>

    <!-- 底部操作栏 -->
    <view class="bottom-bar">
      <button class="chat-btn" @tap="goToChat">💬 咨询</button>
      <button class="book-btn" @tap="bookNow">立即预约</button>
    </view>
  </view>
</template>

<script>
export default {
  name: "CoachDetailPage",
  data() {
    return {
      coachId: null,
      coachInfo: {
        name: '欧阳老师',
        avatar: '/static/images/user_1.png',
        banner: '/static/images/img-18.jpg',
        rating: 4.9,
        reviewCount: 128,
        tags: ['国家二级教练', '10年经验', '金牌导师'],
        bio: '从事健身教练行业10年，擅长减脂塑形、增肌训练，帮助上千名学员达成健身目标。',
        services: [
          {
            id: 1,
            name: '私人定制训练',
            desc: '一对一私教课程，针对性训练计划',
            price: 299,
            unit: '课时',
            image: '/static/images/img-12.jpg'
          },
          {
            id: 2,
            name: '减脂训练营',
            desc: '4周系统化减脂课程',
            price: 1999,
            unit: '月',
            image: '/static/images/img-23.jpg'
          }
        ],
        reviews: [
          {
            id: 1,
            name: '张**',
            avatar: '/static/images/img-15.jpg',
            content: '欧阳老师很专业，课程安排合理，两个月减了20斤！',
            time: '2025-10-10'
          },
          {
            id: 2,
            name: '李**',
            avatar: '/static/images/img-16.jpg',
            content: '态度很好，动作指导很到位，值得推荐！',
            time: '2025-10-05'
          }
        ]
      }
    }
  },
  onLoad(options) {
    if (options.id) {
      this.coachId = options.id
      // 这里可以根据 ID 加载不同的教练信息
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    goToChat() {
      uni.setStorageSync('chatUsername', this.coachInfo.name)
      uni.navigateTo({ url: '/pages/chat/index' })
    },
    selectService(service) {
      console.log('选择服务:', service)
    },
    bookNow() {
      uni.showToast({
        title: '预约功能开发中',
        icon: 'none'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/uni.scss";

.coach-detail-page {
  min-height: 100vh;
  background-color: #f8f8f8;
}

.banner {
  width: 100%;
  height: 500rpx;
}

.back-btn {
  position: fixed;
  top: calc(var(--status-bar-height) + 20rpx);
  left: 30rpx;
  width: 72rpx;
  height: 72rpx;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.back-icon {
  font-size: 48rpx;
  color: #fff;
}

.content {
  padding-bottom: 160rpx;
}

.coach-card {
  margin: -100rpx 30rpx 30rpx;
  padding: 40rpx;
  background-color: #fff;
  border-radius: 24rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
}

.coach-header {
  display: flex;
  align-items: center;
  margin-bottom: 24rpx;
}

.coach-avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  margin-right: 24rpx;
}

.coach-info {
  flex: 1;
}

.coach-name {
  font-size: 36rpx;
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 12rpx;
}

.rating {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.rating-score {
  font-size: 28rpx;
  color: #ff9500;
}

.rating-count {
  font-size: 24rpx;
  color: #999;
}

.coach-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
  margin-bottom: 24rpx;
}

.tag {
  padding: 12rpx 24rpx;
  background-color: #fff3e0;
  color: #ff6b6b;
  font-size: 24rpx;
  border-radius: 40rpx;
}

.coach-bio {
  font-size: 28rpx;
  line-height: 1.6;
  color: #666;
}

.section {
  margin: 30rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 24rpx;
}

.service-card {
  display: flex;
  padding: 30rpx;
  background-color: #fff;
  border-radius: 16rpx;
  margin-bottom: 24rpx;
}

.service-info {
  flex: 1;
}

.service-name {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 12rpx;
}

.service-desc {
  font-size: 24rpx;
  color: #999;
  display: block;
  margin-bottom: 20rpx;
}

.service-price {
  display: flex;
  align-items: baseline;
}

.price {
  font-size: 36rpx;
  font-weight: 600;
  color: #ff6b6b;
}

.price-unit {
  font-size: 24rpx;
  color: #999;
  margin-left: 8rpx;
}

.service-image {
  width: 200rpx;
  height: 150rpx;
  border-radius: 12rpx;
  margin-left: 24rpx;
}

.review-card {
  padding: 30rpx;
  background-color: #fff;
  border-radius: 16rpx;
  margin-bottom: 24rpx;
}

.review-header {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}

.review-avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}

.review-info {
  flex: 1;
}

.review-name {
  font-size: 28rpx;
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 8rpx;
}

.review-rating {
  font-size: 24rpx;
  color: #ff9500;
}

.review-content {
  font-size: 28rpx;
  line-height: 1.6;
  color: #666;
  display: block;
  margin-bottom: 16rpx;
}

.review-time {
  font-size: 24rpx;
  color: #999;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20rpx 30rpx;
  padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
  background-color: #fff;
  border-top: 1rpx solid #f0f0f0;
  display: flex;
  gap: 20rpx;
  z-index: 100;
}

.chat-btn {
  flex: 1;
  padding: 28rpx;
  background-color: #fff;
  border: 2rpx solid #ff6b6b;
  color: #ff6b6b;
  border-radius: 48rpx;
  font-size: 32rpx;
  font-weight: 600;
}

.book-btn {
  flex: 2;
  padding: 28rpx;
  background-color: #ff6b6b;
  color: #fff;
  border-radius: 48rpx;
  font-size: 32rpx;
  font-weight: 600;
  border: none;
}
</style>
