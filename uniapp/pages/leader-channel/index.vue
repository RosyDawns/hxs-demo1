<template>
  <view class="page">
    <view class="list-container">
      <view
        v-for="(leader, index) in recommendedLeaders"
        :key="index"
        class="coach-card"
        @tap="handleLeaderDetail(leader.id)"
      >
        <image :src="leader.image" class="coach-image" mode="aspectFill" />
        <view class="coach-info">
          <view class="coach-header">
            <text class="coach-name">{{ leader.name }}</text>
            <view class="coach-rating">
              <text class="rating-star">★</text>
              <text class="rating-text">{{ leader.rating }}</text>
            </view>
          </view>
          <text class="coach-type">{{ leader.type }}</text>
          <text class="coach-title">{{ leader.title }}</text>
          <view class="coach-footer">
            <text class="distance">距离{{ leader.distance }}km</text>
            <view class="price-section">
              <text class="price-label">体验课</text>
              <text class="price-value">¥{{ leader.prices.trial }}</text>
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
      recommendedLeaders: [
        {
          id: "leader1",
          name: "王主理",
          type: "生活方式主理人",
          title: "国际认证生活教练 | 5年经验",
          rating: 4.9,
          distance: 2.1,
          image: "https://picsum.photos/id/1025/100/100",
          prices: { trial: 128, single: 280, card10: 2480 },
        },
        {
          id: "leader2",
          name: "陈主理",
          type: "职场成长主理人",
          title: "知名企业高管 | 10年管理经验",
          rating: 4.8,
          distance: 3.2,
          image: "https://picsum.photos/id/1074/100/100",
          prices: { trial: 158, single: 320, card10: 2880 },
        },
        {
          id: "leader3",
          name: "李主理",
          type: "艺术鉴赏主理人",
          title: "艺术评论家 | 8年鉴赏经验",
          rating: 4.7,
          distance: 1.8,
          image: "https://picsum.photos/id/1062/100/100",
          prices: { trial: 138, single: 300, card10: 2680 },
        },
      ],
    };
  },
  methods: {
    handleLeaderDetail(leaderId) {
      uni.navigateTo({ url: "/pages/ouyang/index" });
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f8f8f8;
}

.list-container {
  padding: 24rpx;
}

.coach-card {
  background: white;
  border-radius: 24rpx;
  padding: 24rpx;
  margin-bottom: 24rpx;
  display: flex;
}

.coach-image {
  width: 200rpx;
  height: 200rpx;
  border-radius: 16rpx;
  flex-shrink: 0;
}

.coach-info {
  flex: 1;
  margin-left: 24rpx;
  display: flex;
  flex-direction: column;
}

.coach-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8rpx;
}

.coach-name {
  font-size: 32rpx;
  font-weight: bold;
}

.coach-rating {
  display: flex;
  align-items: center;
}

.rating-star {
  color: #ffa500;
  font-size: 28rpx;
  margin-right: 4rpx;
}

.rating-text {
  font-size: 24rpx;
  color: #666;
}

.coach-type {
  color: #ff6b6b;
  font-size: 24rpx;
  margin-bottom: 8rpx;
}

.coach-title {
  font-size: 24rpx;
  color: #666;
  margin-bottom: 16rpx;
}

.coach-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.distance {
  font-size: 24rpx;
  color: #999;
}

.price-section {
  display: flex;
  align-items: baseline;
}

.price-label {
  font-size: 20rpx;
  color: #999;
  margin-right: 8rpx;
}

.price-value {
  font-size: 32rpx;
  font-weight: bold;
  color: #ff6b6b;
}
</style>
