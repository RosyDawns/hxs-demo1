<template>
  <view class="content-card">
    <!-- 内容图片 -->
    <view class="image-box">
      <image
        :src="content.image"
        :alt="content.title"
        class="content-image"
        mode="aspectFill"
        @error="handleImageError"
      />
    </view>
    
    <!-- 内容信息 -->
    <view class="content-info">
      <text class="title">{{ content.title }}</text>
      
      <!-- 作者和点赞 -->
      <view class="footer">
        <view class="author-box">
          <image
            :src="content.author.avatar"
            :alt="content.author.name"
            class="author-avatar"
            mode="aspectFill"
            @error="handleImageError"
          />
          <text class="author-name">{{ content.author.name }}</text>
        </view>
        
        <view class="like-btn" @tap="handleLike">
          <text :class="['heart', isLiked ? 'liked' : '']">♥</text>
          <text class="like-count">{{ formatLikes(localLikes) }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        title: '',
        image: '',
        author: {
          name: '',
          avatar: ''
        },
        likes: 0
      })
    }
  },
  data() {
    return {
      isLiked: false,
      localLikes: this.content.likes || 0
    };
  },
  methods: {
    handleLike() {
      this.isLiked = !this.isLiked;
      this.localLikes = this.isLiked ? this.localLikes + 1 : this.localLikes - 1;
      this.$emit('like', this.content.id, this.isLiked);
    },
    
    formatLikes(count) {
      if (count >= 10000) {
        return (count / 10000).toFixed(1) + '万';
      }
      return count.toString();
    },
    
    handleImageError(event) {
      console.log('图片加载失败', event);
    }
  }
};
</script>

<style lang="scss" scoped>
.content-card {
  background: #ffffff;
  border-radius: 32rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
}

.image-box {
  width: 100%;
  padding-bottom: 100%; /* 1:1 aspect ratio */
  position: relative;
  background: #f5f5f5;
}

.content-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content-info {
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
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  margin-right: 16rpx;
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
  font-size: 28rpx;
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
