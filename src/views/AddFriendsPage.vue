<template>
  <div class="add-friends-page">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="nav-bar">
        <button class="back-btn" @click="goBack">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <h1 class="title">添加好友</h1>
        <div class="header-right"></div>
      </div>
    </header>

    <!-- 搜索框 -->
    <div class="search-section">
      <div class="search-box">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="search-icon">
          <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16z" stroke="#999" stroke-width="1.5" fill="none"/>
          <path d="M19 19l-4.35-4.35" stroke="#999" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <input 
          type="text" 
          placeholder="搜索用户名/手机号" 
          class="search-input"
          v-model="searchQuery"
          @input="handleSearch"
        />
      </div>
    </div>

    <!-- 推荐好友列表 -->
    <div class="main-content">
      <h3 class="section-title">推荐好友</h3>
      <div class="friends-list">
        <div v-for="item in filteredFriends" :key="item.id" class="friend-item">
          <img :src="getImageUrl(item.avatar)" :alt="item.name" class="user-avatar" />
          <div class="user-info">
            <h3 class="user-name">{{ item.name }}</h3>
            <p class="user-desc">{{ item.description }}</p>
            <div class="user-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
          <button 
            :class="['add-btn', { added: item.isAdded }]"
            @click="toggleAdd(item)"
          >
            {{ item.isAdded ? '已添加' : '+ 添加' }}
          </button>
        </div>
      </div>
    </div>
    
    <FooterNav activePage="messages" />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import FooterNav from '../components/FooterNav.vue'

export default {
  name: 'AddFriendsPage',
  components: {
    FooterNav
  },
  setup() {
    const router = useRouter()
    const searchQuery = ref('')
    
    const friendsList = ref([
      {
        id: 1,
        name: '健身教练Alex',
        avatar: 'img-20.jpg',
        description: '专业健身教练 · AASFP认证',
        tags: ['健身', '减脂', '增肌'],
        isAdded: false
      },
      {
        id: 2,
        name: '瑜伽导师Sarah',
        avatar: 'img-21.jpg',
        description: '瑜伽导师 · RYT500认证',
        tags: ['瑜伽', '冥想', '理疗'],
        isAdded: false
      },
      {
        id: 3,
        name: '跑步教练David',
        avatar: 'img-22.jpg',
        description: '马拉松教练 · 国家二级运动员',
        tags: ['跑步', '马拉松', '耐力'],
        isAdded: true
      },
      {
        id: 4,
        name: '营养师Emily',
        avatar: 'img-23.jpg',
        description: '注册营养师 · 健康管理专家',
        tags: ['营养', '减肥', '健康'],
        isAdded: false
      },
      {
        id: 5,
        name: '私教Jack',
        avatar: 'img-24.jpg',
        description: '私人教练 · 5年经验',
        tags: ['私教', '塑形', '康复'],
        isAdded: false
      },
      {
        id: 6,
        name: '舞蹈老师Lily',
        avatar: 'img-25.jpg',
        description: '舞蹈教练 · 拉丁舞专业',
        tags: ['舞蹈', '拉丁', '形体'],
        isAdded: false
      }
    ])
    
    const filteredFriends = computed(() => {
      if (!searchQuery.value) {
        return friendsList.value
      }
      return friendsList.value.filter(friend => 
        friend.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        friend.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        friend.tags.some(tag => tag.includes(searchQuery.value))
      )
    })
    
    const goBack = () => {
      router.go(-1)
    }
    
    const toggleAdd = (item) => {
      item.isAdded = !item.isAdded
    }
    
    const handleSearch = () => {
      // 搜索逻辑已在computed中处理
    }
    
    const getImageUrl = (imageName) => {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href
    }
    
    return {
      searchQuery,
      friendsList,
      filteredFriends,
      goBack,
      toggleAdd,
      handleSearch,
      getImageUrl
    }
  }
}
</script>

<style scoped>
.add-friends-page {
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-bottom: 80px;
}

.header {
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  height: 44px;
}

.back-btn {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
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
  width: 40px;
}

.search-section {
  padding: 12px 16px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
}

.search-box {
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

.main-content {
  padding: 16px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
}

.friends-list {
  background: white;
  border-radius: 12px;
  overflow: hidden;
}

.friend-item {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
  align-items: flex-start;
  gap: 12px;
}

.friend-item:last-child {
  border-bottom: none;
}

.user-avatar {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
}

.user-desc {
  font-size: 13px;
  color: #666;
  margin: 0 0 8px 0;
}

.user-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag {
  padding: 2px 8px;
  background: #f0f0f0;
  border-radius: 10px;
  font-size: 11px;
  color: #666;
}

.add-btn {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #ff6b35;
  background: #ff6b35;
  color: white;
  white-space: nowrap;
}

.add-btn.added {
  background: white;
  border-color: #e0e0e0;
  color: #999;
}

.add-btn:hover {
  transform: scale(1.05);
}
</style>
