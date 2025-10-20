<template>
  <view class="coach-content-card" @tap="handleClick">
    <!-- 内容图片 -->
    <view class="image-box">
      <image
        :src="coach.avatar"
        :alt="coach.name"
        class="content-image"
        mode="aspectFill"
        @error="handleImageError"
      />
    </view>
    
    <!-- 内容信息 -->
    <view class="card-info">
      <!-- 标题 -->
      <text class="title">{{ coach.qualification }}</text>
      
      <!-- 作者和点赞 -->
      <view class="footer">
        <view class="author-box">
          <image
            :src="coach.pic"
            :alt="coach.name"
            class="author-avatar"
            mode="aspectFill"
            @error="handleImageError"
          />
          <text class="author-name">{{ coach.name }}</text>
        </view>
        
        <view class="like-btn" @tap.stop="handleLike">
          <text :class="['heart', isLiked ? 'liked' : '']">♥</text>
          <text class="like-count">{{ likes }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'CoachContentCard',
  props: {
    coach: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        name: '',
        avatar: '',
        pic: '',
        qualification: ''
      })
    }
  },
  data() {
    return {
      isLiked: false,
      likes: Math.floor(Math.random() * 100)
    };
  },
  methods: {
    handleClick() {
      this.$emit('click', this.coach.id);
    },
    
    handleLike() {
      this.isLiked = !this.isLiked;
      this.likes = this.isLiked ? this.likes + 1 : this.likes - 1;
      this.$emit('like', this.coach.id, this.isLiked);
    },
    
    handleImageError(event) {
      console.log('图片加载失败', event);
    }
  }
};
</script>

<style lang="scss" scoped>
.coach-content-card {
  background: #ffffff;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
}

.image-box {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background: #f5f5f5;
}

.content-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card-info {
  padding: 16rpx;
}

.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 28rpx;
  font-weight: 500;
  color: #333333;
  margin-bottom: 16rpx;
  line-height: 1.4;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.author-box {
  display: flex;
  align-items: center;
  flex: 1;
}

.author-avatar {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  margin-right: 8rpx;
}

.author-name {
  font-size: 24rpx;
  color: #666666;
}

.like-btn {
  display: flex;
  align-items: center;
}

.heart {
  font-size: 24rpx;
  color: #999999;
  margin-right: 8rpx;
}

.heart.liked {
  color: #ff4757;
}

.like-count {
  font-size: 24rpx;
  color: #999999;
}
</style>
