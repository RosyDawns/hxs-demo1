<template>
  <div class="add-friends-page">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="nav-bar">
        <button class="back-btn" @click="goBack">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="#333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <h1 class="title">添加好友</h1>
      </div>
    </header>

    <!-- 功能按钮区 -->
    <div class="action-buttons">
      <button class="action-btn">
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
          <rect
            x="4"
            y="4"
            width="10"
            height="10"
            stroke="#333"
            stroke-width="2"
            fill="none"
          />
          <rect
            x="18"
            y="4"
            width="10"
            height="10"
            stroke="#333"
            stroke-width="2"
            fill="none"
          />
          <rect
            x="4"
            y="18"
            width="10"
            height="10"
            stroke="#333"
            stroke-width="2"
            fill="none"
          />
          <rect x="20" y="20" width="6" height="6" fill="#333" />
        </svg>
        <span>扫一扫</span>
      </button>
      <button class="action-btn">
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="8" width="4" height="16" fill="#333" />
          <rect x="14" y="8" width="4" height="16" fill="#333" />
          <rect x="22" y="8" width="4" height="16" fill="#333" />
        </svg>
        <span>我的名片</span>
      </button>
    </div>

    <!-- 发现好友 -->
    <div class="main-content">
      <h3 class="section-title">发现好友</h3>
      <div class="friends-list">
        <div
          v-for="item in friendsList"
          :key="item.id"
          @click="$router.push('ouyang')"
          class="friend-item"
        >
          <img
            :src="getImageUrl(item.avatar)"
            :alt="item.name"
            class="user-avatar"
          />
          <div class="user-info">
            <h3 class="user-name">{{ item.name }}</h3>
            <p class="user-desc">{{ item.description }}</p>
            <div class="user-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
          <button class="follow-btn" @click.stop="toggleFollow(item)">
            {{ item.isFollowed ? "已关注" : "关注" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import FooterNav from "../components/FooterNav.vue";

export default {
  name: "AddFriendsPage",
  components: {
    FooterNav,
  },
  setup() {
    const router = useRouter();

    const friendsList = ref([
      {
        id: 1,
        name: "提你学咖啡的Joy",
        avatar: "img-20.jpg",
        description: "SCAA中级咖啡师，排行当地前15名",
        tags: ["已签约", "主理人", "到店服务"],
        isFollowed: false,
      },
      {
        id: 2,
        name: "咖啡拉花Crazy",
        avatar: "img-21.jpg",
        description: "SCA精品咖啡协会签约导师",
        tags: ["已签约", "技能派", "到店服务"],
        isFollowed: false,
      },
      {
        id: 3,
        name: "猫豆爱健身",
        avatar: "img-22.jpg",
        description: "产后宝妈，减脂塑形，排行当地前256名",
        tags: ["已签约", "搭子人", "上门服务"],
        isFollowed: false,
      },
      {
        id: 4,
        name: "健身教练Iris",
        avatar: "img-23.jpg",
        description: "10年私人教练，，排行当地前38名",
        tags: ["已签约", "技能派", "上门服务"],
        isFollowed: false,
      },
      {
        id: 5,
        name: "Michael教游泳",
        avatar: "img-24.jpg",
        description: "8年游泳爱好者，现任自由教练",
        tags: ["已签约", "技能派", "上门服务"],
        isFollowed: false,
      },
      {
        id: 6,
        name: "游泳的烧烧",
        avatar: "img-25.jpg",
        description: "大学游泳教师，排行当地前78名",
        tags: ["已签约", "技能派", "到店服务"],
        isFollowed: false,
      },
    ]);

    const goBack = () => {
      router.go(-1);
    };

    const toggleFollow = (item) => {
      item.isFollowed = !item.isFollowed;
    };

    const getImageUrl = (imageName) => {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href;
    };

    return {
      friendsList,
      goBack,
      toggleFollow,
      getImageUrl,
    };
  },
};
</script>

<style scoped>
.add-friends-page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

/* 顶部导航 */
.header {
  background-color: white;
  border-bottom: 1px solid #e8e8e8;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 56px;
}

.back-btn {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.title {
  font-size: 17px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.rating-text {
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
}

.circle-btn {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* 功能按钮区 */
.action-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 16px;
  background: white;
}

.action-btn {
  background: #f5f5f5;
  border: none;
  border-radius: 12px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:active {
  transform: scale(0.98);
  background: #ebebeb;
}

.action-btn span {
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
}

/* 主要内容区 */
.main-content {
  padding: 0;
  background: white;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  padding: 16px 16px 12px;
}

.friends-list {
  background: white;
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
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.user-info {
  flex: 1;
  min-width: 0;
}

.user-name {
  padding-top: 2px;
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 4px 0;
}

.user-desc {
  font-size: 11px;
  color: #8a8a8a;
  margin: 0 0 4px 0;
  line-height: 1.4;
}

.user-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 4px 8px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 11px;
  color: #666;
  white-space: nowrap;
}

.follow-btn {
  padding: 4px 20px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #ff6b35;
  background: white;
  color: #ff6b35;
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 4px;
}

.follow-btn:active {
  transform: scale(0.96);
}
</style>
