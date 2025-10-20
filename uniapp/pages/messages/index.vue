<template>
  <view class="messages-page">
    <!-- 自定义导航栏 -->
    <view class="header">
      <view class="title">消息</view>
    </view>

    <!-- 主要内容区域 -->
    <view class="main-content">
      <!-- 功能分类图标 -->
      <view class="category-icons">
        <view class="category-item" @tap="navigateToCategory('favorites')">
          <view class="category-icon favorites-bg">
            <text class="icon-text">❤️</text>
          </view>
          <text class="category-text">赞和收藏</text>
        </view>

        <view class="category-item" @tap="navigateToCategory('follow')">
          <view class="category-icon follow-bg">
            <text class="icon-text">👥</text>
          </view>
          <text class="category-text">新增关注</text>
        </view>

        <view class="category-item" @tap="navigateToCategory('comments')">
          <view class="category-icon comments-bg">
            <text class="icon-text">💬</text>
          </view>
          <text class="category-text">评论和@</text>
        </view>

        <view class="category-item" @tap="navigateToCategory('friends')">
          <view class="category-icon friends-bg">
            <text class="icon-text">👤</text>
          </view>
          <text class="category-text">添加好友</text>
        </view>
      </view>

      <!-- 搜索框 -->
      <view class="search-section">
        <view class="search-box">
          <text class="search-icon">🔍</text>
          <input
            type="text"
            placeholder="唤醒兽管家服务"
            class="search-input"
            v-model="searchQuery"
          />
        </view>
        <button class="search-btn" @tap="handleSearch">搜索</button>
      </view>

      <!-- 消息列表 -->
      <view class="messages-list">
        <view 
          v-for="message in filteredMessages" 
          :key="message.id"
          class="message-item" 
          @tap="openChat(message.name)"
        >
          <view class="message-avatar">
            <view v-if="message.type === 'system'" class="avatar-icon system-icon">
              <text class="icon-text">⭐</text>
            </view>
            <image v-else :src="message.avatar" :alt="message.name" class="avatar-img" mode="aspectFill" />
          </view>
          <view class="message-content">
            <view class="message-header">
              <text class="sender-name">{{ message.name }}</text>
              <text class="message-time">{{ message.time }}</text>
            </view>
            <text class="message-preview">{{ message.preview }}</text>
            <view v-if="message.unread > 0" class="unread-badge">{{ message.unread }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "MessagesPage",
  data() {
    return {
      searchQuery: '',
      activeFilter: 'all',
      allMessages: [
        {
          id: 1,
          type: 'system',
          name: '系统消息',
          avatar: null,
          time: '2025-09-12',
          preview: '快来参与唤醒兽体验调查',
          unread: 0
        },
        {
          id: 2,
          type: 'chat',
          name: '唤醒兽管家服务',
          avatar: '/static/images/img-13.jpg',
          time: '2025-10-18',
          preview: '最好的减脂餐是怎样的？截我了解详情吧~',
          unread: 0
        },
        {
          id: 3,
          type: 'group',
          name: '健身减脂打卡群',
          avatar: '/static/images/img-20.jpg',
          time: '昨天',
          preview: '"A.安远"加入群聊',
          unread: 6
        },
        {
          id: 4,
          type: 'group',
          name: '青浦徐沛羽毛球',
          avatar: '/static/images/img-21.jpg',
          time: '昨天',
          preview: '"是伬！！！"加入群聊',
          unread: 2
        },
        {
          id: 5,
          type: 'chat',
          name: '提你学咕啡的Joy',
          avatar: '/static/images/img-22.jpg',
          time: '2025-10-02',
          preview: '好的感谢您的咨询',
          unread: 1
        },
        {
          id: 6,
          type: 'chat',
          name: '薯薯小羊卷',
          avatar: '/static/images/img-23.jpg',
          time: '2025-10-01',
          preview: '谢谢你的赞',
          unread: 0
        },
        {
          id: 7,
          type: 'chat',
          name: '辣妈私教小南哥',
          avatar: '/static/images/img-24.jpg',
          time: '2025-9-28',
          preview: '好的，保持联系',
          unread: 0
        },
        {
          id: 8,
          type: 'chat',
          name: 'Boram',
          avatar: '/static/images/img-25.jpg',
          time: '2025-09-25',
          preview: '是一对一的定制服务呀',
          unread: 0
        }
      ]
    }
  },
  computed: {
    filteredMessages() {
      if (this.activeFilter === 'all') {
        return this.allMessages
      } else if (this.activeFilter === 'chat') {
        return this.allMessages.filter(msg => msg.type === 'chat')
      } else if (this.activeFilter === 'group') {
        return this.allMessages.filter(msg => msg.type === 'group')
      } else if (this.activeFilter === 'system') {
        return this.allMessages.filter(msg => msg.type === 'system')
      }
      return this.allMessages
    }
  },
  methods: {
    handleSearch() {
      console.log('搜索:', this.searchQuery)
    },
    
    openChat(username) {
      uni.setStorageSync('chatUsername', username)
      uni.navigateTo({ url: '/pages/chat/index' })
    },
    
    setFilter(filter) {
      this.activeFilter = filter
    },
    
    navigateToCategory(category) {
      const routes = {
        'favorites': '/pages/favorites/index',
        'follow': '/pages/follow/index',
        'comments': '/pages/comments/index',
        'friends': '/pages/add-friends/index'
      }
      if (routes[category]) {
        uni.navigateTo({ url: routes[category] })
      }
      if (routes[category]) {
        uni.navigateTo({ url: routes[category] })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/uni.scss";

.messages-page {
  min-height: 100vh;
  background-color: #fff;
  padding-bottom: 120rpx;
}

/* 自定义导航栏 */
.header {
  padding: calc(var(--status-bar-height) + 20rpx) 30rpx 20rpx;
  background-color: #fff;
  border-bottom: 1rpx solid #f0f0f0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.title {
  font-size: 36rpx;
  font-weight: 600;
  color: #333;
  text-align: center;
}

/* 主要内容区域 */
.main-content {
  padding: calc(var(--status-bar-height) + 120rpx) 30rpx 40rpx;
}

/* 功能分类图标 */
.category-icons {
  display: flex;
  justify-content: space-between;
  padding: 40rpx 0;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
}

.category-icon {
  width: 120rpx;
  height: 120rpx;
  border-radius: 32rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16rpx;
}

.favorites-bg {
  background: #ffe5e5;
}

.follow-bg {
  background: #e3f2fd;
}

.comments-bg {
  background: #e8f5e8;
}

.friends-bg {
  background: #fff3e0;
}

.icon-text {
  font-size: 48rpx;
}

.category-text {
  font-size: 24rpx;
  color: #333;
  text-align: center;
  font-weight: 500;
}

/* 搜索框 */
.search-section {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 40rpx;
  padding: 0 32rpx;
  height: 80rpx;
  margin-right: 24rpx;
}

.search-icon {
  margin-right: 16rpx;
  font-size: 32rpx;
}

.search-input {
  flex: 1;
  font-size: 28rpx;
  color: #333;
}

.search-btn {
  background: none;
  border: none;
  color: #007aff;
  font-size: 28rpx;
  font-weight: 500;
  padding: 16rpx;
  line-height: 1;
  margin: 0;
}

/* 消息列表 */
.messages-list {
  background: white;
  border-radius: 32rpx;
  overflow: hidden;
}

.message-item {
  display: flex;
  align-items: center;
  padding: 32rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
  transition: background-color 0.2s;
}

.message-item:last-child {
  border-bottom: none;
}

.message-avatar {
  margin-right: 24rpx;
}

.avatar-img {
  width: 96rpx;
  height: 96rpx;
  border-radius: 50%;
}

.avatar-icon {
  width: 96rpx;
  height: 96rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.system-icon {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  
  .icon-text {
    font-size: 48rpx;
  }
}

.message-content {
  flex: 1;
  position: relative;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8rpx;
}

.sender-name {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
}

.message-time {
  font-size: 24rpx;
  color: #999;
}

.message-preview {
  font-size: 28rpx;
  color: #666;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.unread-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #ff4757;
  color: white;
  border-radius: 50%;
  width: 36rpx;
  height: 36rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  font-weight: 600;
}
</style>
