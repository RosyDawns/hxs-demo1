<template>
  <view class="coach-card" @tap="handleClick">
    <!-- 教练头像 -->
    <image
      :src="coach.avatar"
      :alt="coach.name"
      class="coach-avatar"
      mode="aspectFill"
      @error="handleImageError"
    />
    
    <!-- 教练信息 -->
    <view class="coach-info">
      <!-- 姓名和头像 -->
      <view class="coach-header">
        <image
          class="coach-pic"
          :src="coach.pic"
          :alt="coach.name"
          mode="aspectFill"
          @error="handleImageError"
        />
        <text class="coach-name">{{ coach.name }}</text>
      </view>
      
      <!-- 资质 -->
      <text class="coach-qualification">{{ coach.qualification }}</text>
      
      <!-- 擅长技能 -->
      <text class="coach-skills">擅长: {{ coach.skills }}</text>
      
      <!-- 评分和标签 -->
      <view class="coach-footer">
        <view class="rating-box">
          <text class="rating-text">{{ coach.rating }}</text>
          <view class="stars">
            <text
              v-for="star in 5"
              :key="star"
              :class="getStarClass(star)"
              class="star"
            >★</text>
          </view>
        </view>
        <view class="label">{{ coach.label }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'CoachListCard',
  props: {
    coach: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        name: '',
        avatar: '',
        pic: '',
        qualification: '',
        skills: '',
        rating: 0,
        label: ''
      })
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', this.coach.id);
    },
    
    getStarClass(star) {
      const rating = this.coach.rating;
      const fullStars = Math.floor(rating);
      
      if (star <= fullStars) {
        return 'star-full';
      } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
        return 'star-half';
      } else {
        return 'star-empty';
      }
    },
    
    handleImageError(event) {
      console.log('图片加载失败', event);
    }
  }
};
</script>

<style lang="scss" scoped>
.coach-card {
  background: #ffffff;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.coach-avatar {
  width: 100%;
  height: 360rpx;
  border-top-left-radius: 999rpx;
  border-top-right-radius: 999rpx;
}

.coach-info {
  padding: 8rpx 16rpx;
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
  margin-right: 8rpx;
}

.coach-name {
  font-size: 28rpx;
  color: #000000;
}

.coach-qualification {
  display: block;
  font-size: 24rpx;
  color: #000000;
  font-weight: bold;
  margin-bottom: 8rpx;
}

.coach-skills {
  display: block;
  font-size: 24rpx;
  color: #999999;
  margin-bottom: 8rpx;
}

.coach-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rating-box {
  display: flex;
  align-items: center;
}

.rating-text {
  font-size: 24rpx;
  color: #999999;
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
  color: #faad14;
}

.star-half {
  color: #faad14;
}

.star-empty {
  color: #d9d9d9;
}

.label {
  background: #ff9800;
  color: #ffffff;
  font-size: 24rpx;
  padding: 4rpx 16rpx;
  border-radius: 999rpx;
}
</style>
