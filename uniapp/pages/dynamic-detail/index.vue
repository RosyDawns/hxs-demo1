<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <text class="back" @tap="goBack">‹</text>
      <text class="title">动态详情</text>
      <text class="more">⋯</text>
    </view>

    <!-- 主内容区 -->
    <scroll-view scroll-y class="main" :lower-threshold="50">
      <!-- 用户信息 -->
      <view class="user-section">
        <view class="user-info">
          <view class="user-left">
            <image :src="dynamic.avatar" class="avatar" mode="aspectFill" />
            <view class="user-detail">
              <text class="username">{{ dynamic.author }}</text>
              <text class="time">{{ dynamic.time || '刚刚' }}</text>
            </view>
          </view>
          <view class="follow-btn">+ 关注</view>
        </view>

        <!-- 动态内容 -->
        <view class="content">
          <text class="content-title">{{ dynamic.title }}</text>
          <text v-if="dynamic.content" class="content-text">{{ dynamic.content }}</text>
        </view>

        <!-- 动态图片 -->
        <view class="image-wrap">
          <image :src="dynamic.image" class="dynamic-img" mode="widthFix" />
        </view>

        <!-- 互动区 -->
        <view class="actions">
          <view class="action-item" @tap="toggleLike">
            <text :class="['icon', isLiked ? 'liked' : '']">♥</text>
            <text class="count">{{ dynamic.likes || 0 }}</text>
          </view>
          <view class="action-item">
            <text class="icon">💬</text>
            <text class="count">{{ commentList.length }}</text>
          </view>
          <view class="action-item" @tap="toggleFavorite">
            <text :class="['icon', isFavorited ? 'favorited' : '']">☆</text>
            <text class="count">{{ dynamic.favorites || 0 }}</text>
          </view>
          <view class="action-item" @tap="share">
            <text class="icon">➤</text>
          </view>
        </view>
      </view>

      <!-- 评论区 -->
      <view class="comment-section">
        <text class="comment-title">评论 {{ commentList.length }}</text>
        
        <!-- 评论列表 -->
        <view v-if="commentList.length > 0" class="comment-list">
          <view v-for="comment in commentList" :key="comment.id" class="comment-item">
            <image :src="comment.avatar" class="comment-avatar" mode="aspectFill" />
            <view class="comment-content">
              <text class="comment-author">{{ comment.author }}</text>
              <text class="comment-text">{{ comment.content }}</text>
              <view class="comment-meta">
                <text class="comment-time">{{ comment.time }}</text>
                <text class="comment-reply" @tap="replyComment(comment)">回复</text>
              </view>
            </view>
            <text class="comment-like">♡</text>
          </view>
        </view>

        <!-- 空状态 -->
        <view v-else class="empty">
          <text class="empty-text">暂无评论，快来抢沙发吧~</text>
        </view>
      </view>
    </scroll-view>

    <!-- 底部评论输入 -->
    <view class="footer">
      <input v-model="commentInput" placeholder="说点什么..." class="input" />
      <view class="send-btn" @tap="submitComment">发送</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dynamicId: '',
      commentInput: '',
      isLiked: false,
      isFavorited: false,
      dynamic: {
        id: '',
        title: '',
        content: '',
        image: '',
        avatar: '',
        author: '',
        time: '',
        likes: 0,
        comments: 0,
        favorites: 0
      },
      commentList: []
    }
  },
  onLoad(options) {
    this.dynamicId = options.id || '1'
    this.loadDynamicDetail()
  },
  methods: {
    goBack() { uni.navigateBack() },
    loadDynamicDetail() {
      // 模拟数据
      const mockData = {
        '1': {
          title: '9月的仪式感, 从纵身跃入泳池开始',
          content: '今天完成了人生第一个5公里长泳，从最开始的恐水到现在可以轻松完成长距离游泳，这一路走来真的不容易。',
          image: '/static/img_39.jpg',
          avatar: '/static/img-1.jpg',
          author: '张小明',
          time: '3小时前',
          likes: 128,
          comments: 23,
          favorites: 45
        }
      }
      this.dynamic = mockData[this.dynamicId] || mockData['1']
      this.commentList = [
        { id: 1, author: '张三', avatar: '/static/img-1.jpg', content: '太棒了！我也要坚持游泳', time: '2小时前' },
        { id: 2, author: '李四', avatar: '/static/img_40.jpg', content: '加油，坚持就是胜利！', time: '5小时前' }
      ]
    },
    toggleLike() {
      this.isLiked = !this.isLiked
      this.dynamic.likes += this.isLiked ? 1 : -1
    },
    toggleFavorite() {
      this.isFavorited = !this.isFavorited
      this.dynamic.favorites += this.isFavorited ? 1 : -1
    },
    share() { uni.showToast({ title: '分享功能', icon: 'none' }) },
    replyComment(comment) { this.commentInput = `@${comment.author} ` },
    submitComment() {
      if (!this.commentInput.trim()) return
      this.commentList.unshift({
        id: Date.now(),
        author: '我',
        avatar: '/static/img-1.jpg',
        content: this.commentInput,
        time: '刚刚'
      })
      this.dynamic.comments += 1
      this.commentInput = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.page { background: #f5f5f5; height: 100vh; display: flex; flex-direction: column; }
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 99; background: #fff; display: flex; align-items: center; justify-content: space-between; padding: calc(var(--status-bar-height) + 20rpx) 30rpx 20rpx; border-bottom: 1rpx solid #f0f0f0; }
.back, .more { width: 48rpx; height: 48rpx; display: flex; align-items: center; justify-content: center; font-size: 40rpx; color: #333; }
.title { font-size: 32rpx; font-weight: 700; color: #222; flex: 1; text-align: center; }
.main { flex: 1; margin-top: calc(var(--status-bar-height) + 100rpx); margin-bottom: 120rpx; }
.user-section { background: #fff; padding: 30rpx; margin-bottom: 20rpx; }
.user-info { display: flex; align-items: center; justify-content: space-between; margin-bottom: 30rpx; }
.user-left { display: flex; align-items: center; }
.avatar { width: 96rpx; height: 96rpx; border-radius: 50%; margin-right: 20rpx; }
.user-detail { display: flex; flex-direction: column; }
.username { font-size: 28rpx; font-weight: 700; color: #222; margin-bottom: 10rpx; }
.time { font-size: 22rpx; color: #999; }
.follow-btn { background: #ff8a4c; color: #fff; padding: 12rpx 32rpx; border-radius: 999rpx; font-size: 24rpx; }
.content { margin-bottom: 30rpx; }
.content-title { display: block; font-size: 30rpx; font-weight: 700; color: #222; line-height: 1.6; margin-bottom: 16rpx; }
.content-text { display: block; font-size: 26rpx; color: #666; line-height: 1.8; }
.image-wrap { margin-bottom: 30rpx; }
.dynamic-img { width: 100%; border-radius: 16rpx; }
.actions { display: flex; align-items: center; justify-content: space-between; padding-top: 30rpx; border-top: 1rpx solid #f0f0f0; }
.action-item { display: flex; align-items: center; gap: 12rpx; }
.icon { font-size: 36rpx; color: #999; &.liked { color: #ff6b6b; } &.favorited { color: #ffc107; } }
.count { font-size: 24rpx; color: #999; }
.comment-section { background: #fff; padding: 30rpx; }
.comment-title { display: block; font-size: 28rpx; font-weight: 700; color: #222; margin-bottom: 30rpx; }
.comment-list { display: flex; flex-direction: column; gap: 30rpx; }
.comment-item { display: flex; align-items: flex-start; }
.comment-avatar { width: 72rpx; height: 72rpx; border-radius: 50%; margin-right: 20rpx; }
.comment-content { flex: 1; }
.comment-author { display: block; font-size: 24rpx; font-weight: 700; color: #222; margin-bottom: 12rpx; }
.comment-text { display: block; font-size: 26rpx; color: #666; line-height: 1.6; margin-bottom: 12rpx; }
.comment-meta { display: flex; align-items: center; gap: 32rpx; }
.comment-time { font-size: 22rpx; color: #999; }
.comment-reply { font-size: 22rpx; color: #999; }
.comment-like { font-size: 28rpx; color: #999; }
.empty { text-align: center; padding: 80rpx 0; }
.empty-text { font-size: 24rpx; color: #999; }
.footer { position: fixed; bottom: 0; left: 0; right: 0; background: #fff; padding: 20rpx 30rpx; padding-bottom: calc(20rpx + env(safe-area-inset-bottom)); display: flex; align-items: center; gap: 20rpx; border-top: 1rpx solid #f0f0f0; }
.input { flex: 1; background: #f5f5f5; padding: 20rpx 30rpx; border-radius: 999rpx; font-size: 26rpx; }
.send-btn { background: linear-gradient(90deg, #ff8a4c, #ff6b6b); color: #fff; padding: 20rpx 40rpx; border-radius: 999rpx; font-size: 26rpx; }
</style>
