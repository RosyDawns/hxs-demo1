<template>
  <div class="messages-page bg-white">
    <!-- 顶部导航栏 -->
    <!-- <header class="header">
      <div class="nav-bar">
        <button class="back-btn" @click="goBack">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="#333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="title">消息</div>
        <button class="back-btn">&nbsp;&nbsp;</button>
      </div>
    </header> -->

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 功能分类图标 -->
      <div class="category-icons">
        <div class="category-item" @click="navigateToCategory('favorites')">
          <div class="category-icon" style="background: #ffe5e5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff4757">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          </div>
          <p class="category-text">赞和收藏</p>
        </div>

        <div class="category-item" @click="navigateToCategory('follow')">
          <div class="category-icon" style="background: #e3f2fd">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#2196f3">
              <path
                d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.1C14.7 7.8 13.1 9 11.3 9H12.7C14.5 9 16 10.5 16 12.3V21H18V12.3C18 11.5 17.5 10.9 16.8 10.7L21 9ZM9 12C7.3 12 6 13.3 6 15V21H8V15C8 14.4 8.4 14 9 14S10 14.4 10 15V21H12V15C12 13.3 10.7 12 9 12Z"
              />
            </svg>
          </div>
          <p class="category-text">新增关注</p>
        </div>

        <div class="category-item" @click="navigateToCategory('comments')">
          <div class="category-icon" style="background: #e8f5e8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#4caf50">
              <path
                d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z"
              />
            </svg>
          </div>
          <p class="category-text">评论和@</p>
        </div>

        <div class="category-item" @click="navigateToCategory('friends')">
          <div class="category-icon" style="background: #fff3e0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff9800">
              <path
                d="M15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4M15,5.9A2.1,2.1 0 0,1 17.1,8A2.1,2.1 0 0,1 15,10.1A2.1,2.1 0 0,1 12.9,8A2.1,2.1 0 0,1 15,5.9M4,7V10H1V12H4V15H6V12H9V10H6V7H4Z"
              />
            </svg>
          </div>
          <p class="category-text">添加好友</p>
        </div>
      </div>

      <!-- 搜索框 -->
      <div class="search-section">
        <div class="search-box">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            class="search-icon"
          >
            <path
              d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16z"
              stroke="#999"
              stroke-width="1.5"
              fill="none"
            />
            <path
              d="M19 19l-4.35-4.35"
              stroke="#999"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder="唤醒兽管家服务"
            class="search-input"
            v-model="searchQuery"
          />
        </div>
        <button class="search-btn">搜索</button>
      </div>

      <!-- 分类标签 Tabs -->
      <div class="tabs-section">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          :class="['tab-item', { 'active': activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- 好友消息列表 -->
      <div v-if="activeTab === 'friends'" class="messages-list">
        <div 
          v-for="message in filteredMessages" 
          :key="message.id"
          class="message-item" 
          @click="openChat(message.name)"
        >
          <div class="message-avatar">
            <div v-if="message.type === 'system'" class="avatar-icon system-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L13.09 8.26L22 9L14.5 14L17 22L12 18.5L7 22L9.5 14L2 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>
            <img v-else :src="getImageUrl(message.avatar)" :alt="message.name" class="avatar-img" />
          </div>
          <div class="message-content">
            <div class="message-header">
              <h3 class="sender-name">{{ message.name }}</h3>
              <span class="message-time">{{ message.time }}</span>
            </div>
            <p class="message-preview">{{ message.preview }}</p>
            <div v-if="message.unread > 0" class="unread-badge">{{ message.unread }}</div>
          </div>
        </div>
      </div>

      <!-- 通知掌柜模块 -->
      <div v-if="activeTab === 'notification'" class="notification-section">
        <!-- 子分类标签 -->
        <div class="sub-tabs">
          <button 
            v-for="subTab in notificationSubTabs" 
            :key="subTab.id"
            :class="['sub-tab-item', { 'active': activeNotificationTab === subTab.id }]"
            @click="activeNotificationTab = subTab.id"
          >
            {{ subTab.label }}
            <span v-if="subTab.count" class="tab-count">{{ subTab.count }}</span>
          </button>
        </div>

        <!-- 筛选操作栏 -->
        <div class="filter-bar">
          <button class="filter-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#999">
              <path d="M2 3h12M4 8h8M6 13h4"/>
            </svg>
            全部已读
          </button>
          <div class="filter-options">
            <button :class="['option-btn', { 'active': notificationFilter === 'important' }]" @click="notificationFilter = 'important'">
              <span class="radio"></span>
              重要
            </button>
            <button :class="['option-btn', { 'active': notificationFilter === 'unread' }]" @click="notificationFilter = 'unread'">
              <span class="radio"></span>
              未读
            </button>
          </div>
        </div>

        <!-- 通知列表 -->
        <div class="notification-list">
          <div v-for="item in notificationItems" :key="item.id" class="notification-item">
            <div class="notification-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF6B35">
                <rect x="4" y="4" width="16" height="16" rx="2"/>
              </svg>
            </div>
            <div class="notification-content">
              <div class="notification-header">
                <span class="notification-type">{{ item.type }}</span>
                <span class="notification-count">{{ item.count }}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none"/>
                </svg>
              </div>
              <h3 class="notification-title">
                {{ item.title }}
                <span v-if="item.unread" class="unread-dot"></span>
              </h3>
              <p class="notification-desc">{{ item.description }}</p>
              <div class="notification-footer">
                <span class="notification-time">{{ item.time }}</span>
                <button v-if="item.status === 'known'" class="status-btn known">我已知悉</button>
                <button v-else class="status-btn action">立即查看</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 接待消息模块 -->
      <div v-if="activeTab === 'reception'" class="reception-section">
        <!-- 统计信息 -->
        <div class="reception-stats">
          <div class="stat-item">
            <span class="stat-number">0</span>
            <span class="stat-label">排队人数</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">1</span>
            <span class="stat-label">今日接待人数</span>
          </div>
          <button class="data-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#999">
              <circle cx="8" cy="8" r="6" stroke="currentColor" fill="none"/>
            </svg>
            客服数据
          </button>
        </div>

        <!-- 筛选栏 -->
        <div class="reception-filter">
          <button class="status-filter">
            <span class="status-dot online"></span>
            在线
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#666">
              <path d="M3 5l3 3 3-3" stroke="currentColor" fill="none"/>
            </svg>
          </button>
          <div class="sort-filter">
            <span>排序</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#666">
              <path d="M3 5l3 3 3-3" stroke="currentColor" fill="none"/>
            </svg>
          </div>
          <label class="toggle-filter">
            <input type="checkbox" v-model="onlyShowReply" />
            <span class="toggle-switch"></span>
            <span class="toggle-label">只看未回复</span>
          </label>
        </div>

        <!-- 接待消息列表 -->
        <div class="reception-list">
          <div v-for="item in receptionItems" :key="item.id" class="reception-item">
            <img :src="getImageUrl(item.avatar)" :alt="item.name" class="reception-avatar" />
            <div class="reception-content">
              <div class="reception-header">
                <h3 class="reception-name">
                  {{ item.emoji }}
                  {{ item.name }}
                </h3>
                <span class="reception-time">{{ item.time }}</span>
              </div>
              <p class="reception-message">{{ item.message }}</p>
            </div>
            <div class="reception-badge">{{ item.unread }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 底部导航 -->
    <FooterNav activePage="messages" />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import FooterNav from '../components/FooterNav.vue'

export default {
  name: "MessagesPage",
  components: {
    FooterNav,
  },
  setup() {
    const router = useRouter()
    const searchQuery = ref('')
    const activeFilter = ref('all') // 当前活跃的过滤器
    const activeTab = ref('friends') // 当前活跃的标签
    const activeNotificationTab = ref('all') // 通知掌柜子标签
    const notificationFilter = ref('') // 通知筛选
    const onlyShowReply = ref(false) // 接待消息筛选
    
    // 标签数据
    const tabs = ref([
      { id: 'friends', label: '好友消息' },
      { id: 'notification', label: '通知掌柜' },
      { id: 'reception', label: '接待消息' }
    ])
    
    // 通知掌柜子标签
    const notificationSubTabs = ref([
      { id: 'all', label: '全部', count: 8 },
      { id: 'announcement', label: '公告', count: 0 },
      { id: 'shop', label: '店铺', count: 2 },
      { id: 'transaction', label: '交易', count: 3 },
      { id: 'violation', label: '违规', count: 0 },
      { id: 'marketing', label: '营销', count: 2 },
      { id: 'other', label: '其他', count: 1 }
    ])
    
    // 通知列表数据
    const notificationItems = ref([
      {
        id: 1,
        type: '评论',
        count: 2,
        title: '李教练新增1条中差评',
        description: '李教练新增用户中差评，请及时回复用户评价；如遇不实评价可进行申诉。',
        time: '16小时前',
        status: 'known',
        unread: true
      },
      {
        id: 2,
        type: '评价',
        count: 2,
        title: '李教练评分下降，请及时关注',
        description: '李教练评分下降0.5分，已诊断到问题，请及时关注',
        time: '19小时前',
        status: 'known',
        unread: true
      },
      {
        id: 3,
        type: '订单',
        count: 2,
        title: '您有退款需要审批',
        description: '订单编号108931017390754462用户已申请退款，请在40分钟内进行审批，超时系统将自动同意用户的退款',
        time: '23小时前',
        status: 'action',
        unread: true
      }
    ])
    
    // 接待消息数据
    const receptionItems = ref([
      {
        id: 1,
        emoji: '💖',
        name: '余生1唤随心',
        avatar: 'img-20.jpg',
        time: '6小时',
        message: '可以的话，我大概一点去取',
        unread: 3
      },
      {
        id: 2,
        emoji: '',
        name: '梓',
        avatar: 'img-21.jpg',
        time: '4小时',
        message: '【可配送1 8+6 英寸水果年华✨优质乳脂奶油🥛 双...',
        unread: 4
      },
      {
        id: 3,
        emoji: '🍓',
        name: '小璐～',
        avatar: 'img-22.jpg',
        time: '4小时',
        message: '当前商家较忙，建议打电话咨询',
        unread: 5
      },
      {
        id: 4,
        emoji: '',
        name: '吻痕爽',
        avatar: 'img-23.jpg',
        time: '4小时',
        message: '你好，怎么加你们的微信呵',
        unread: 2
      },
      {
        id: 5,
        emoji: '🦋',
        name: '天天开心果',
        avatar: 'img-24.jpg',
        time: '4小时',
        message: '这种类型的蛋糕可以做吗？',
        unread: 6
      },
      {
        id: 6,
        emoji: '',
        name: '眹眼看世界',
        avatar: 'img-25.jpg',
        time: '3小时',
        message: '当前商家较忙，建议打电话咨询',
        unread: 0
      },
      {
        id: 7,
        emoji: '',
        name: '家有二宝',
        avatar: 'img-13.jpg',
        time: '3小时',
        message: '当前蒙受较忙，建议打电话咨询',
        unread: 0
      }
    ])
    
    // 消息数据
    const allMessages = ref([
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
        avatar: 'img-13.jpg',
        time: '2025-10-18',
        preview: '最好的减脂餐是怎样的？截我了解详情吧~',
        unread: 0
      },
      {
        id: 3,
        type: 'group',
        name: '健身减脂打卡群',
        avatar: 'img-20.jpg',
        time: '昨天',
        preview: '“A.安远”加入群聊',
        unread: 6
      },
      {
        id: 4,
        type: 'group',
        name: '青浦徐沛羽毛球',
        avatar: 'img-21.jpg',
        time: '昨天',
        preview: '“是伬！！！”加入群聊',
        unread: 2
      },
      {
        id: 5,
        type: 'chat',
        name: '提你学咕啡的Joy',
        avatar: 'img-22.jpg',
        time: '2025-10-02',
        preview: '好的感谢您的咨询',
        unread: 1
      },
      {
        id: 6,
        type: 'chat',
        name: '薯薯小羊卷',
        avatar: 'img-23.jpg',
        time: '2025-10-01',
        preview: '谢谢你的赞',
        unread: 0
      },
      {
        id: 7,
        type: 'chat',
        name: '辣妈私教小南哥',
        avatar: 'img-24.jpg',
        time: '2025-9-28',
        preview: '好的，保持联系',
        unread: 0
      },
      {
        id: 8,
        type: 'chat',
        name: 'Boram',
        avatar: 'img-25.jpg',
        time: '2025-09-25',
        preview: '是一对一的定制服务呀',
        unread: 0
      }
    ])
    
    // 过滤后的消息列表
    const filteredMessages = computed(() => {
      if (activeFilter.value === 'all') {
        return allMessages.value
      } else if (activeFilter.value === 'chat') {
        return allMessages.value.filter(msg => msg.type === 'chat')
      } else if (activeFilter.value === 'group') {
        return allMessages.value.filter(msg => msg.type === 'group')
      } else if (activeFilter.value === 'system') {
        return allMessages.value.filter(msg => msg.type === 'system')
      }
      return allMessages.value
    })
    
    // 返回上一页
    const goBack = () => {
      router.go(-1)
    }
    
    // 打开聊天页面
    const openChat = (username) => {
      localStorage.setItem('chatUsername', username)
      router.push('/chat')
    }
    
    // 切换过滤器
    const setFilter = (filter) => {
      activeFilter.value = filter
    }
    
    // 获取图片URL
    const getImageUrl = (imageName) => {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href
    }
    
    // 导航到分类页面
    const navigateToCategory = (category) => {
      const routes = {
        'favorites': '/favorites',
        'follow': '/follow',
        'comments': '/comments',
        'friends': '/add-friends'
      }
      if (routes[category]) {
        router.push(routes[category])
      }
    }
    
    return {
      searchQuery,
      activeFilter,
      activeTab,
      activeNotificationTab,
      notificationFilter,
      onlyShowReply,
      tabs,
      notificationSubTabs,
      notificationItems,
      receptionItems,
      filteredMessages,
      goBack,
      openChat,
      setFilter,
      getImageUrl,
      navigateToCategory
    }
  }
};
</script>

<style scoped>
.messages-page {
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica,
    Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
}

/* 头部样式 */
.header {
  background-color: white;
  padding-top: env(safe-area-inset-top, 44px);
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 5;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 12px 16px;
  height: 44px;
}

.back-btn {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
  flex: 1;
  text-align: center;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.rating-display {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fff;
  padding: 4px 8px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
}

.rating-text {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.menu-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #333;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.menu-dot {
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  position: relative;
}

.menu-dot::before,
.menu-dot::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
}

.menu-dot::before {
  top: -8px;
}

.menu-dot::after {
  top: 8px;
}

/* 主要内容区域 */
.main-content {
  padding: 0 16px 20px 16px;
}

/* 功能分类图标 */
.category-icons {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.category-item:hover {
  transform: translateY(-2px);
}

.category-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.category-text {
  font-size: 12px;
  color: #333;
  margin: 0;
  text-align: center;
  font-weight: 500;
}

/* 搜索框 */
.search-section {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 20px;
  padding: 0 16px;
  height: 40px;
}

.search-icon {
  margin-right: 8px;
}

.search-input {
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 14px;
  color: #333;
}

.search-input::placeholder {
  color: #999;
}

.search-btn {
  background: none;
  border: none;
  color: #007aff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px;
}

/* 分类标签 Tabs */
.tabs-section {
  display: flex;
  gap: 16px;
  padding: 4px 0;
}

.tab-item {
  background: none;
  border: none;
  font-size: 15px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  transition: all 0.3s;
  white-space: nowrap;
}

.tab-item.active {
  background: #FF6B35;
  color: white;
  font-weight: 600;
}

.tab-item:hover:not(.active) {
  background: #f5f5f5;
}

/* 消息列表 */
.messages-list {
  background: white;
  border-radius: 16px;
  overflow: hidden;
}

.message-item {
  display: flex;
  align-items: center;
  padding: 16px 0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.message-item:last-child {
  border-bottom: none;
}

.message-item:hover {
  background-color: #f8f9fa;
}

.message-avatar {
  margin-right: 12px;
}

.avatar-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.system-icon {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
}

.message-content {
  flex: 1;
  position: relative;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.sender-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.message-time {
  font-size: 12px;
  color: #999;
}

.message-preview {
  font-size: 14px;
  color: #666;
  margin: 0;
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
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
}

/* 通知掌柜样式 */
.notification-section {
  margin-top: 6px;
}

.sub-tabs {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 0;
  margin-bottom: 2px;
  -webkit-overflow-scrolling: touch;
  border-bottom: 1px solid #f0f0f0;
}

.sub-tabs::-webkit-scrollbar {
  display: none;
}

.sub-tab-item {
  background: none;
  border: none;
  font-size: 15px;
  color: #999;
  cursor: pointer;
  padding: 12px 0;
  white-space: nowrap;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.3s;
}

.sub-tab-item.active {
  color: #333;
  font-weight: 500;
}

.sub-tab-item.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background: #FF6B35;
  border-radius: 2px 2px 0 0;
}

.tab-count {
  font-size: 13px;
  color: inherit;
}

.filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 0;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f8f8f8;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 13px;
  color: #999;
  cursor: pointer;
}

.filter-options {
  display: flex;
  gap: 16px;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  font-size: 14px;
  color: #666;
  cursor: pointer;
}

.option-btn .radio {
  width: 16px;
  height: 16px;
  border: 1.5px solid #ddd;
  border-radius: 50%;
  position: relative;
}

.option-btn.active .radio::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: #FF6B35;
  border-radius: 50%;
}

.notification-list {
  /* margin-top: 6px; */
}

.notification-item {
  display: flex;
  gap: 12px;
  padding: 16px 0;
  background: white;
  border-bottom: 1px solid #f0f0f0;
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-content {
  flex: 1;
}

.notification-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.notification-type {
  font-size: 14px;
  color: #666;
}

.notification-count {
  font-size: 14px;
  color: #999;
}

.notification-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 0 0 6px 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.unread-dot {
  width: 6px;
  height: 6px;
  background: #FF4757;
  border-radius: 50%;
}

.notification-desc {
  font-size: 13px;
  color: #999;
  line-height: 1.6;
  margin: 0 0 12px 0;
}

.notification-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notification-time {
  font-size: 12px;
  color: #999;
}

.status-btn {
  padding: 5px 14px;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  font-weight: 400;
  white-space: nowrap;
}

.status-btn.known {
  background: white;
  color: #999;
  border-color: #e0e0e0;
}

.status-btn.action {
  background: white;
  color: #FF6B35;
  border-color: #FF6B35;
}

/* 接待消息样式 */
.reception-section {
  margin-top: 6px;
}

.reception-stats {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 6px 0;
  border-bottom: 1px solid #f0f0f0;
}

.stat-item {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.stat-number {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.stat-label {
  font-size: 13px;
  color: #666;
}

.data-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 13px;
  color: #666;
  cursor: pointer;
  margin-left: auto;
}

.reception-filter {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
}

.status-filter,
.sort-filter {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-dot.online {
  background: #4caf50;
}

.toggle-filter {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  cursor: pointer;
}

.toggle-filter input {
  display: none;
}

.toggle-switch {
  width: 40px;
  height: 24px;
  background: #e0e0e0;
  border-radius: 12px;
  position: relative;
  transition: background 0.3s;
}

.toggle-switch::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: transform 0.3s;
}

.toggle-filter input:checked + .toggle-switch {
  background: #FF6B35;
}

.toggle-filter input:checked + .toggle-switch::after {
  transform: translateX(16px);
}

.toggle-label {
  font-size: 14px;
  color: #666;
}

.reception-list {
  margin-top: 6px;
}

.reception-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
  cursor: pointer;
}

.reception-item:hover {
  background: #fafafa;
}

.reception-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.reception-content {
  flex: 1;
  min-width: 0;
}

.reception-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.reception-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
}

.reception-time {
  font-size: 12px;
  color: #999;
}

.reception-message {
  font-size: 14px;
  color: #666;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.reception-badge {
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  background: #FF6B35;
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  flex-shrink: 0;
}

/* 媒体查询 */
@media (max-width: 375px) {
  .category-icon {
    width: 52px;
    height: 52px;
  }

  .category-text {
    font-size: 11px;
  }

  .main-content {
    padding: 0 12px 0 12px;
  }
}
</style>
