<template>
  <div class="follow-page">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="nav-bar">
        <button class="back-btn" @click="goBack">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <h1 class="title">新增关注</h1>
        <div class="header-right"></div>
      </div>
    </header>

    <!-- 内容区域 -->
    <div class="main-content">
      <div class="follow-list">
        <div v-for="item in followList" :key="item.id" class="follow-item">
          <img :src="getImageUrl(item.avatar)" :alt="item.name" class="user-avatar" />
          <div class="user-info">
            <h3 class="user-name">{{ item.name }}</h3>
            <p class="user-desc">{{ item.description }}</p>
            <span class="follow-time">{{ item.time }}</span>
          </div>
          <button 
            :class="['follow-btn', { following: item.isFollowing }]"
            @click="toggleFollow(item)"
          >
            {{ item.isFollowing ? '已关注' : '关注' }}
          </button>
        </div>
      </div>
    </div>
    
    <FooterNav activePage="messages" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FooterNav from '../components/FooterNav.vue'

export default {
  name: 'FollowPage',
  components: {
    FooterNav
  },
  setup() {
    const router = useRouter()
    
    const followList = ref([
      {
        id: 1,
        name: '健身达人Leo',
        avatar: 'img-20.jpg',
        description: '专业健身教练 · 10年经验',
        time: '刚刚关注了你',
        isFollowing: false
      },
      {
        id: 2,
        name: '瑜伽老师Emma',
        avatar: 'img-21.jpg',
        description: '瑜伽导师 · 身心平衡',
        time: '2小时前关注了你',
        isFollowing: false
      },
      {
        id: 3,
        name: '跑步爱好者Mike',
        avatar: 'img-22.jpg',
        description: '马拉松选手 · 长跑爱好者',
        time: '昨天关注了你',
        isFollowing: true
      },
      {
        id: 4,
        name: '营养师Linda',
        avatar: 'img-23.jpg',
        description: '注册营养师 · 健康饮食专家',
        time: '3天前关注了你',
        isFollowing: false
      }
    ])
    
    const goBack = () => {
      router.go(-1)
    }
    
    const toggleFollow = (item) => {
      item.isFollowing = !item.isFollowing
    }
    
    const getImageUrl = (imageName) => {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href
    }
    
    return {
      followList,
      goBack,
      toggleFollow,
      getImageUrl
    }
  }
}
</script>

<style scoped>
.follow-page {
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

.main-content {
  padding: 12px 0;
}

.follow-list {
  background: white;
}

.follow-item {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 50px;
  height: 50px;
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
  margin: 0 0 4px 0;
}

.follow-time {
  font-size: 12px;
  color: #999;
}

.follow-btn {
  padding: 6px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #007AFF;
  background: white;
  color: #007AFF;
}

.follow-btn.following {
  background: #f5f5f5;
  border-color: #e0e0e0;
  color: #999;
}

.follow-btn:hover {
  transform: scale(1.05);
}
</style>
