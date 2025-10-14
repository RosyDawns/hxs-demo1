<template>
  <div class="messages-page bg-white">
    <!-- 顶部导航栏 -->
    <header class="header">
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
    </header>

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

      <!-- 消息列表 -->
      <div class="messages-list">
        <!-- 系统消息 -->
        <div class="message-item" @click="openChat('系统消息')">
          <div class="message-avatar">
            <div class="avatar-icon system-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path
                  d="M12 2L13.09 8.26L22 9L14.5 14L17 22L12 18.5L7 22L9.5 14L2 9L10.91 8.26L12 2Z"
                />
              </svg>
            </div>
          </div>
          <div class="message-content">
            <div class="message-header">
              <h3 class="sender-name">系统消息</h3>
              <span class="message-time">2025-09-12</span>
            </div>
            <p class="message-preview">快来参与唤醒兽体验调查</p>
          </div>
        </div>

        <!-- 唤醒兽管家服务 -->
        <div class="message-item" @click="openChat('唤醒兽管家服务')">
          <div class="message-avatar">
            <img src="@images/img-13.jpg" alt="管家" class="avatar-img" />
          </div>
          <div class="message-content">
            <div class="message-header">
              <h3 class="sender-name">唤醒兽管家服务</h3>
              <span class="message-time">2025-10-18</span>
            </div>
            <p class="message-preview">最好的减脂餐是怎样的？截我了解详情吧~</p>
          </div>
        </div>

        <!-- 健身减脂打卡群 -->
        <div class="message-item" @click="openChat('健身减脂打卡群')">
          <div class="message-avatar">
            <img src="@images/img-20.jpg" alt="健身群" class="avatar-img" />
          </div>
          <div class="message-content">
            <div class="message-header">
              <h3 class="sender-name">健身减脂打卡群</h3>
              <span class="message-time">昨天</span>
            </div>
            <p class="message-preview">“A.安远”加入群聊</p>
            <div class="unread-badge">6</div>
          </div>
        </div>

        <!-- 青浦徐沛羽毛球 -->
        <div class="message-item" @click="openChat('青浦徐沛羽毛球')">
          <div class="message-avatar">
            <img src="@images/img-21.jpg" alt="羽毛球" class="avatar-img" />
          </div>
          <div class="message-content">
            <div class="message-header">
              <h3 class="sender-name">青浦徐沛羽毛球</h3>
              <span class="message-time">昨天</span>
            </div>
            <p class="message-preview">“是伬！！！”加入群聊</p>
            <div class="unread-badge">2</div>
          </div>
        </div>

        <!-- 提你学咕啡的Joy -->
        <div class="message-item" @click="openChat('提你学咕啡的Joy')">
          <div class="message-avatar">
            <img src="@images/img-22.jpg" alt="Joy" class="avatar-img" />
          </div>
          <div class="message-content">
            <div class="message-header">
              <h3 class="sender-name">提你学咕啡的Joy</h3>
              <span class="message-time">2025-10-02</span>
            </div>
            <p class="message-preview">好的感谢您的咨询</p>
            <div class="unread-badge">1</div>
          </div>
        </div>

        <!-- 薯薯小羊卷 -->
        <div class="message-item" @click="openChat('薯薯小羊卷')">
          <div class="message-avatar">
            <img src="@images/img-23.jpg" alt="小羊卷" class="avatar-img" />
          </div>
          <div class="message-content">
            <div class="message-header">
              <h3 class="sender-name">薯薯小羊卷</h3>
              <span class="message-time">2025-10-01</span>
            </div>
            <p class="message-preview">谢谢你的赞</p>
          </div>
        </div>

        <!-- 辣妈私教小南哥 -->
        <div class="message-item" @click="openChat('辣妈私教小南哥')">
          <div class="message-avatar">
            <img src="@images/img-24.jpg" alt="小南哥" class="avatar-img" />
          </div>
          <div class="message-content">
            <div class="message-header">
              <h3 class="sender-name">辣妈私教小南哥</h3>
              <span class="message-time">2025-9-28</span>
            </div>
            <p class="message-preview">好的，保持联系</p>
          </div>
        </div>

        <!-- Boram -->
        <div class="message-item" @click="openChat('Boram')">
          <div class="message-avatar">
            <img src="@images/img-25.jpg" alt="Boram" class="avatar-img" />
          </div>
          <div class="message-content">
            <div class="message-header">
              <h3 class="sender-name">Boram</h3>
              <span class="message-time">2025-09-25</span>
            </div>
            <p class="message-preview">是一对一的定制服务呀</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <FooterNav activePage="messages" />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import FooterNav from "../components/FooterNav.vue";

export default {
  name: "MessagesPage",
  components: {
    FooterNav,
  },
  setup() {
    const router = useRouter();
    const searchQuery = ref("");

    // 返回上一页
    const goBack = () => {
      router.go(-1);
    };

    // 打开聊天页面
    const openChat = (username) => {
      localStorage.setItem("chatUsername", username);
      router.push("/chat");
    };

    // 导航到分类页面
    const navigateToCategory = (category) => {
      console.log("导航到分类:", category);
      // 根据分类跳转到不同页面
    };

    return {
      searchQuery,
      goBack,
      openChat,
      navigateToCategory,
    };
  },
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
  padding: 12px 16px;
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
