<template>
  <view class="mode2-card" @tap="handleClick">
    <!-- 大师头像 -->
    <image
      :src="item.avatar"
      :alt="item.name"
      class="card-avatar"
      mode="aspectFill"
      @error="handleImageError"
    />
    
    <!-- 大师信息 -->
    <view class="card-info">
      <!-- 姓名和头像 -->
      <view class="card-header">
        <image
          class="small-avatar"
          :src="item.pic || item.avatar"
          :alt="item.name"
          mode="aspectFill"
          @error="handleImageError"
        />
        <text class="name">{{ item.name }}</text>
      </view>
      
      <!-- 资质 -->
      <text class="qualification">{{ item.qualification || item.title }}</text>
      
      <!-- 擅长领域 -->
      <text class="skills">擅长: {{ item.skills || item.specialty }}</text>
      
      <!-- 评分和标签 -->
      <view class="card-footer">
        <view class="rating-box">
          <text class="rating-text">{{ item.rating || 5.0 }}</text>
          <view class="stars">
            <text
              v-for="star in 5"
              :key="star"
              :class="getStarClass(star, item.rating || 5.0)"
              class="star"
            >★</text>
          </view>
        </view>
        <view class="label">{{ item.label || '认证' }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Mode2Card',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        name: '',
        avatar: '',
        pic: '',
        qualification: '',
        title: '',
        skills: '',
        specialty: '',
        rating: 5.0,
        label: '认证'
      })
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', this.item.id);
    },
    
    getStarClass(star, rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;
      
      if (star <= fullStars) {
        return 'star-full';
      } else if (star === Math.ceil(rating) && hasHalfStar) {
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
.mode2-card {
  background: #ffffff;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
}

.card-avatar {
  width: 100%;
  height: 360rpx;
  border-top-left-radius: 999rpx;
  border-top-right-radius: 999rpx;
}

.card-info {
  padding: 16rpx;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}

.small-avatar {
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  margin-right: 8rpx;
}

.name {
  font-size: 28rpx;
  color: #000000;
}

.qualification {
  display: block;
  font-size: 24rpx;
  color: #000000;
  font-weight: bold;
  margin-bottom: 8rpx;
}

.skills {
  display: block;
  font-size: 24rpx;
  color: #999999;
  margin-bottom: 8rpx;
}

.card-footer {
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
