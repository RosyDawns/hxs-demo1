<template>
  <view class="page">
    <view class="custom-header" :style="{paddingTop: statusBarHeight + 'px'}">
      <text class="header-title">消息</text>
    </view>

    <view class="main-content">
      <view class="quick-nav">
        <view class="nav-item" @tap="goToPage('/pages/favorites/index')">
          <view class="nav-icon" style="background: #ffe5e5;">❤️</view>
          <text class="nav-label">赞和收藏</text>
        </view>
        <view class="nav-item" @tap="goToPage('/pages/follow/index')">
          <view class="nav-icon" style="background: #e3f2fd;">👥</view>
          <text class="nav-label">新增关注</text>
        </view>
        <view class="nav-item" @tap="goToPage('/pages/comments/index')">
          <view class="nav-icon" style="background: #e8f5e9;">💬</view>
          <text class="nav-label">评论和@</text>
        </view>
        <view class="nav-item" @tap="goToPage('/pages/add-friends/index')">
          <view class="nav-icon" style="background: #fff3e0;">👤</view>
          <text class="nav-label">添加好友</text>
        </view>
      </view>

      <view class="search-section">
        <view class="search-box">
          <text class="search-icon">🔍</text>
          <input 
            v-model="searchText" 
            placeholder="搜索消息" 
            class="search-input"
            @confirm="handleSearch"
          />
        </view>
      </view>

      <view class="messages-list">
        <view 
          v-for="msg in filteredMessages" 
          :key="msg.id"
          class="message-item"
          @tap="openChat(msg)"
        >
          <view class="msg-avatar">
            <image v-if="msg.avatar" :src="msg.avatar" mode="aspectFill" class="avatar-img" />
            <view v-else class="avatar-placeholder" :style="{background: msg.type === 'system' ? 'linear-gradient(135deg, #ff6b35, #f59e0b)' : '#e5e7eb'}">
              <text>{{ msg.type === 'system' ? '⭐' : '👤' }}</text>
            </view>
            <view v-if="msg.unread > 0" class="unread-dot">{{ msg.unread }}</view>
          </view>
          <view class="msg-content">
            <view class="msg-header">
              <text class="msg-name">{{ msg.name }}</text>
              <text class="msg-time">{{ msg.time }}</text>
            </view>
            <text class="msg-preview">{{ msg.preview }}</text>
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
      searchText: '',
      messages: [
        { id: 1, type: 'system', name: '系统消息', avatar: '', time: '2025-09-12', preview: '快来参与唤醒兽体验调查', unread: 0 },
        { id: 2, type: 'chat', name: '唤醒兽管家服务', avatar: '/static/images/img-13.jpg', time: '2025-10-18', preview: '最好的减脂餐是怎样的？截我了解详情吧~', unread: 0 },
        { id: 3, type: 'group', name: '健身减脂打卡群', avatar: '/static/images/img-20.jpg', time: '昨天', preview: '"A.安远"加入群聊', unread: 6 },
        { id: 4, type: 'group', name: '青浦徐沛羽毛球', avatar: '/static/images/img-21.jpg', time: '昨天', preview: '"是伬！！！"加入群聊', unread: 2 },
        { id: 5, type: 'chat', name: '提你学咕啡的Joy', avatar: '/static/images/img-22.jpg', time: '2025-10-02', preview: '好的感谢您的咨询', unread: 1 },
        { id: 6, type: 'chat', name: '薯薯小羊卷', avatar: '/static/images/img-23.jpg', time: '2025-10-01', preview: '谢谢你的赞', unread: 0 }
      ]
    }
  },
  
  computed: {
    filteredMessages() {
      if (!this.searchText) return this.messages
      return this.messages.filter(m => m.name.includes(this.searchText) || m.preview.includes(this.searchText))
    }
  },
  
  onLoad() {
    const info = uni.getSystemInfoSync()
    this.statusBarHeight = info.statusBarHeight || 44
  },
  
  methods: {
    goToPage(url) {
      uni.navigateTo({ url })
    },
    
    handleSearch() {
      console.log('搜索:', this.searchText)
    },
    
    openChat(msg) {
      uni.setStorageSync('chatUsername', msg.name)
      uni.navigateTo({ url: '/pages/chat/index' })
    }
  }
}
</script>

<style scoped>
.page { min-height: 100vh; background: #fff; }

.custom-header { background: #fff; border-bottom: 1rpx solid #f0f0f0; text-align: center; padding-bottom: 16rpx; }
.header-title { font-size: 36rpx; font-weight: bold; }

.main-content { padding: 24rpx; }

.quick-nav { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24rpx; margin-bottom: 32rpx; }
.nav-item { display: flex; flex-direction: column; align-items: center; gap: 12rpx; }
.nav-icon { width: 100rpx; height: 100rpx; border-radius: 24rpx; display: flex; align-items: center; justify-content: center; font-size: 48rpx; }
.nav-label { font-size: 24rpx; color: #666; text-align: center; }

.search-section { margin-bottom: 24rpx; }
.search-box { background: #f5f5f5; border-radius: 48rpx; padding: 16rpx 24rpx; display: flex; align-items: center; gap: 16rpx; }
.search-icon { font-size: 32rpx; }
.search-input { flex: 1; font-size: 28rpx; }

.messages-list { display: flex; flex-direction: column; }
.message-item { display: flex; padding: 24rpx 0; border-bottom: 1rpx solid #f5f5f5; }
.msg-avatar { position: relative; margin-right: 20rpx; }
.avatar-img, .avatar-placeholder { width: 96rpx; height: 96rpx; border-radius: 50%; }
.avatar-placeholder { display: flex; align-items: center; justify-content: center; font-size: 48rpx; }
.unread-dot { position: absolute; top: -4rpx; right: -4rpx; background: #ff4757; color: #fff; min-width: 32rpx; height: 32rpx; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20rpx; padding: 0 8rpx; }
.msg-content { flex: 1; }
.msg-header { display: flex; justify-content: space-between; margin-bottom: 8rpx; }
.msg-name { font-size: 30rpx; font-weight: 500; }
.msg-time { font-size: 24rpx; color: #999; }
.msg-preview { font-size: 26rpx; color: #666; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
</style>
