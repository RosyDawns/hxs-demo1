<template>
  <view class="ranking-card">
    <!-- TOP标签 -->
    <view v-if="rank <= 3" :class="['top-badge', getRankClass()]">
      <text class="top-text">TOP</text>
      <text class="rank-num">{{ String(rank).padStart(2, '0') }}</text>
    </view>

    <view class="card-content">
      <view class="avatar-box">
        <image
          :src="master.avatar"
          :alt="master.name"
          class="avatar"
          mode="aspectFill"
          @error="handleImageError"
        />
      </view>
      
      <view class="info-box">
        <view class="header">
          <view class="name-category">
            <text class="name">{{ master.name }}</text>
            <view class="category">{{ master.category }}</view>
          </view>
          <view class="view-btn" @tap="handleViewProfile">查看主页</view>
        </view>
        
        <text class="qualification">{{ master.qualification }}</text>
        <text class="specialty">擅长：{{ master.specialty }}</text>
        
        <view class="footer">
          <view class="rating">
            <text class="rating-text">评分{{ master.rating }}</text>
            <view class="stars">
              <text
                v-for="star in 5"
                :key="star"
                :class="getStarClass(star, master.rating)"
                class="star"
              >★</text>
            </view>
          </view>
          
          <view class="call-btn" @tap="handleCall">
            <text class="call-text">去打Call</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'RankingCard',
  props: {
    master: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        name: '',
        category: '',
        qualification: '',
        specialty: '',
        rating: 0,
        avatar: ''
      })
    },
    rank: {
      type: Number,
      required: true,
      default: 1
    }
  },
  methods: {
    getRankClass() {
      if (this.rank === 1) return 'rank-1';
      if (this.rank === 2) return 'rank-2';
      if (this.rank === 3) return 'rank-3';
      return 'rank-other';
    },
    
    getStarClass(star, rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      
      if (star <= fullStars) {
        return 'star-full';
      } else if (star === fullStars + 1 && hasHalfStar) {
        return 'star-half';
      } else {
        return 'star-empty';
      }
    },
    
    handleViewProfile() {
      this.$emit('view-profile', this.master.id);
    },
    
    handleCall() {
      this.$emit('call', this.master.id);
    },
    
    handleImageError(event) {
      console.log('图片加载失败', event);
    }
  }
};
</script>

<style lang="scss" scoped>
.ranking-card {
  background: #ffffff;
  border-radius: 32rpx;
  padding: 32rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
  margin-bottom: 24rpx;
  position: relative;
}

.top-badge {
  position: absolute;
  left: 16rpx;
  top: 0;
  width: 80rpx;
  height: 80rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  border-bottom-left-radius: 16rpx;
  border-bottom-right-radius: 16rpx;
  z-index: 10;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.15);
}

.rank-1,
.rank-2,
.rank-3 {
  background: linear-gradient(135deg, #ff9800 0%, #f44336 100%);
}

.top-text {
  font-size: 20rpx;
}

.rank-num {
  font-size: 24rpx;
  line-height: 1;
}

.card-content {
  display: flex;
}

.avatar-box {
  width: 192rpx;
  height: 192rpx;
  border-radius: 32rpx;
  overflow: hidden;
  background: #f5f5f5;
  margin-right: 32rpx;
  flex-shrink: 0;
}

.avatar {
  width: 100%;
  height: 100%;
}

.info-box {
  flex: 1;
  min-width: 0;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16rpx;
}

.name-category {
  display: flex;
  align-items: center;
  flex: 1;
}

.name {
  font-size: 32rpx;
  font-weight: bold;
  color: #333333;
  margin-right: 16rpx;
}

.category {
  padding: 4rpx 16rpx;
  background: #e3f2fd;
  color: #2196f3;
  font-size: 24rpx;
  border-radius: 999rpx;
}

.view-btn {
  padding: 8rpx 24rpx;
  background: linear-gradient(90deg, #f97316 0%, #f53e2d 100%);
  color: #ffffff;
  font-size: 24rpx;
  border-radius: 999rpx;
  white-space: nowrap;
}

.qualification {
  display: block;
  font-size: 24rpx;
  color: #666666;
  margin-bottom: 8rpx;
}

.specialty {
  display: block;
  font-size: 24rpx;
  color: #666666;
  margin-bottom: 16rpx;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rating {
  display: flex;
  align-items: center;
}

.rating-text {
  font-size: 24rpx;
  color: #666666;
  margin-right: 8rpx;
}

.stars {
  display: flex;
}

.star {
  font-size: 24rpx;
  margin-right: 2rpx;
}

.star-full {
  color: #ff9800;
}

.star-half {
  color: #ff9800;
}

.star-empty {
  color: #d9d9d9;
}

.call-btn {
  padding: 4rpx 24rpx;
  border: 2rpx solid #ff5722;
  color: #ff5722;
  border-radius: 999rpx;
}

.call-text {
  font-size: 24rpx;
}
</style>
