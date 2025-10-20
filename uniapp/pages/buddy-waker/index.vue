<template>
  <view class="page">
    <view class="list-container">
      <view
        v-for="(buddy, index) in recommendedBuddies"
        :key="index"
        class="coach-card"
        @tap="handleBuddyDetail(buddy.id)"
      >
        <image :src="buddy.image" class="coach-image" mode="aspectFill" />
        <view class="coach-info">
          <view class="coach-header">
            <text class="coach-name">{{ buddy.name }}</text>
            <view class="coach-rating">
              <text class="rating-star">★</text>
              <text class="rating-text">{{ buddy.rating }}</text>
            </view>
          </view>
          <text class="coach-type">{{ buddy.type }}</text>
          <text class="coach-title">{{ buddy.title }}</text>
          <view class="coach-footer">
            <text class="distance">距离{{ buddy.distance }}km</text>
            <text class="free-tag">免费搭子</text>
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
      recommendedBuddies: [
        {
          id: "buddy1",
          name: "小张",
          type: "晨跑搭子",
          title: "马拉松爱好者 | 5年跑步经验",
          rating: 4.7,
          distance: 1.2,
          image: "https://picsum.photos/id/1066/100/100",
        },
        {
          id: "buddy2",
          name: "小王",
          type: "健身搭子",
          title: "健身达人 | 3年健身经验",
          rating: 4.8,
          distance: 2.5,
          image: "https://picsum.photos/id/1027/100/100",
        },
        {
          id: "buddy3",
          name: "小李",
          type: "阅读搭子",
          title: "文学爱好者 | 每月阅读10+本书",
          rating: 4.6,
          distance: 1.8,
          image: "https://picsum.photos/id/1062/100/100",
        },
      ],
    };
  },
  methods: {
    handleBuddyDetail(buddyId) {
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

.free-tag {
  font-size: 24rpx;
  color: #52c41a;
  padding: 4rpx 16rpx;
  background-color: #f6ffed;
  border-radius: 8rpx;
}
</style>
