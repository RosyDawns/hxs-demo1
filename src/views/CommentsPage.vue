<template>
  <div class="comments-page">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="nav-bar">
        <button class="back-btn" @click="goBack">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <h1 class="title">评论和@</h1>
        <div class="header-right"></div>
      </div>
    </header>

    <!-- 标签切换 -->
    <div class="tabs">
      <button 
        :class="['tab', { active: activeTab === 'comments' }]"
        @click="activeTab = 'comments'"
      >
        评论 ({{ commentsCount }})
      </button>
      <button 
        :class="['tab', { active: activeTab === 'mentions' }]"
        @click="activeTab = 'mentions'"
      >
        @ ({{ mentionsCount }})
      </button>
    </div>

    <!-- 内容区域 -->
    <div class="main-content">
      <!-- 评论列表 -->
      <div v-show="activeTab === 'comments'" class="content-list">
        <div v-for="item in commentsList" :key="item.id" class="comment-item">
          <img :src="getImageUrl(item.avatar)" :alt="item.name" class="user-avatar" />
          <div class="comment-content">
            <h3 class="user-name">{{ item.name }}</h3>
            <p class="comment-text">{{ item.comment }}</p>
            <div class="comment-footer">
              <span class="comment-time">{{ item.time }}</span>
              <button class="reply-btn">回复</button>
            </div>
          </div>
        </div>
      </div>

      <!-- @ 列表 -->
      <div v-show="activeTab === 'mentions'" class="content-list">
        <div v-for="item in mentionsList" :key="item.id" class="mention-item">
          <img :src="getImageUrl(item.avatar)" :alt="item.name" class="user-avatar" />
          <div class="mention-content">
            <h3 class="user-name">{{ item.name }}</h3>
            <p class="mention-text">
              <span class="mention-at">@{{ item.mentionedBy }}</span> {{ item.content }}
            </p>
            <span class="mention-time">{{ item.time }}</span>
          </div>
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
  name: 'CommentsPage',
  components: {
    FooterNav
  },
  setup() {
    const router = useRouter()
    const activeTab = ref('comments')
    
    const commentsList = ref([
      {
        id: 1,
        name: '健身爱好者Tom',
        avatar: 'img-20.jpg',
        comment: '这个课程真的很不错！老师讲得很详细，收获满满',
        time: '1小时前'
      },
      {
        id: 2,
        name: '瑜伽小白',
        avatar: 'img-21.jpg',
        comment: '想问一下这个课程适合零基础的人吗？',
        time: '3小时前'
      },
      {
        id: 3,
        name: '跑步达人',
        avatar: 'img-22.jpg',
        comment: '期待更多类似的课程分享！',
        time: '昨天'
      }
    ])
    
    const mentionsList = ref([
      {
        id: 1,
        name: '营养师Linda',
        avatar: 'img-23.jpg',
        mentionedBy: '你',
        content: '在评论中提到了你：这个减脂餐计划看起来不错',
        time: '2小时前'
      },
      {
        id: 2,
        name: '教练Mike',
        avatar: 'img-24.jpg',
        mentionedBy: '你',
        content: '在动态中提到了你：感谢分享经验',
        time: '昨天'
      }
    ])
    
    const commentsCount = computed(() => commentsList.value.length)
    const mentionsCount = computed(() => mentionsList.value.length)
    
    const goBack = () => {
      router.go(-1)
    }
    
    const getImageUrl = (imageName) => {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href
    }
    
    return {
      activeTab,
      commentsList,
      mentionsList,
      commentsCount,
      mentionsCount,
      goBack,
      getImageUrl
    }
  }
}
</script>

<style scoped>
.comments-page {
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

.tabs {
  display: flex;
  background: white;
  border-bottom: 1px solid #f0f0f0;
}

.tab {
  flex: 1;
  padding: 14px;
  background: none;
  border: none;
  font-size: 15px;
  color: #666;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;
}

.tab.active {
  color: #333;
  font-weight: 600;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 2px;
  background: #ff6b35;
}

.main-content {
  padding: 12px 0;
}

.content-list {
  background: white;
}

.comment-item,
.mention-item {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
  gap: 12px;
}

.user-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.comment-content,
.mention-content {
  flex: 1;
}

.user-name {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 6px 0;
}

.comment-text,
.mention-text {
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  margin: 0 0 8px 0;
}

.mention-at {
  color: #007AFF;
  font-weight: 500;
}

.comment-footer {
  display: flex;
  align-items: center;
  gap: 16px;
}

.comment-time,
.mention-time {
  font-size: 12px;
  color: #999;
}

.reply-btn {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  background: #f5f5f5;
  border: none;
  color: #666;
  cursor: pointer;
}

.reply-btn:hover {
  background: #e8e8e8;
}
</style>
