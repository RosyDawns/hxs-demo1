<template>
  <div class="page" id="page-energy-theater">
    <!-- 顶部导航栏 -->
    <CommonHeader bgColor="#fff">
      <template #center>
        <div class="title text-white text-lg font-bold">能量剧场</div>
      </template>
    </CommonHeader>

    <!-- 用户信息区 -->
    <div class="user-info-section px-4 py-3 bg-white">
      <div class="flex items-center gap-3">
        <img
          src="@images/img_38.jpeg"
          alt="avatar"
          class="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
        />
        <div class="flex-1 flex items-center">
          <div class="text-base font-bold">张小明</div>
          <div class="text-sm text-gray-500 flex items-center gap-1 ml-2">
            <i class="fas fa-bolt text-orange-500"></i>
            <span>能量币 200</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 视频卡片网格 -->
    <main class="main-content p-3">
      <div class="grid grid-cols-2 gap-3">
        <!-- 视频卡片 1 -->
        <div class="video-card" @click="showWatchVideoPopup(1)">
          <div class="thumbnail-wrapper relative">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop"
              alt="耐克冬季跑鞋新品测评"
              class="w-full h-36 object-cover rounded-lg"
            />
            <div
              class="play-btn absolute inset-0 flex items-center justify-center"
            >
              <div
                class="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center"
              >
                <i class="fas fa-play text-black"></i>
              </div>
            </div>
          </div>
          <div class="brand-tag mt-2 flex items-center gap-1 px-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
              alt="Nike"
              class="w-4 h-4 object-contain"
            />
            <span class="text-xs text-gray-500">耐克环球港店</span>
          </div>
          <div class="title text-sm font-medium mt-1 px-2 line-clamp-1">
            耐克冬季跑鞋新品测评
          </div>
          <p class="text-xs text-gray-500 px-2 pb-2">新品评测</p>
        </div>

        <!-- 视频卡片 2 -->
        <div class="video-card" @click="showWatchVideoPopup(2)">
          <div class="thumbnail-wrapper relative">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
              alt="绿洲智谷铁馆开业"
              class="w-full h-36 object-cover rounded-lg"
            />
            <div
              class="play-btn absolute inset-0 flex items-center justify-center"
            >
              <div
                class="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center"
              >
                <i class="fas fa-play text-black"></i>
              </div>
            </div>
          </div>
          <div class="brand-tag mt-2 flex items-center gap-1 px-2">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=20&h=20&fit=crop"
              alt="赵教练"
              class="w-4 h-4 rounded-full object-cover"
            />
            <span class="text-xs text-gray-500">赵教练</span>
          </div>
          <div class="title text-sm font-medium mt-1 px-2 line-clamp-1">
            绿洲智谷铁馆开业 99/月会员卡
          </div>
          <p class="text-xs text-gray-500 px-2 pb-2">新品评测</p>
        </div>

        <!-- 视频卡片 3 -->
        <div class="video-card" @click="showWatchVideoPopup(3)">
          <div class="thumbnail-wrapper relative">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop"
              alt="耐克冬季跑鞋新品测评"
              class="w-full h-36 object-cover rounded-lg"
            />
            <div
              class="play-btn absolute inset-0 flex items-center justify-center"
            >
              <div
                class="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center"
              >
                <i class="fas fa-play text-black"></i>
              </div>
            </div>
          </div>
          <div class="brand-tag mt-2 flex items-center gap-1 px-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
              alt="Nike"
              class="w-4 h-4 object-contain"
            />
            <span class="text-xs text-gray-500">耐克环球港店</span>
          </div>
          <div class="title text-sm font-medium mt-1 px-2 line-clamp-1">
            耐克冬季跑鞋新品测评
          </div>
          <p class="text-xs text-gray-500 px-2 pb-2">新品评测</p>
        </div>

        <!-- 视频卡片 4 -->
        <div class="video-card" @click="showWatchVideoPopup(4)">
          <div class="thumbnail-wrapper relative">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=200&fit=crop"
              alt="十五全运会的运动员冠军系列"
              class="w-full h-36 object-cover rounded-lg"
            />
            <div
              class="play-btn absolute inset-0 flex items-center justify-center"
            >
              <div
                class="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center"
              >
                <i class="fas fa-play text-black"></i>
              </div>
            </div>
          </div>
          <div class="brand-tag mt-2 flex items-center gap-1 px-2">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=20&h=20&fit=crop"
              alt="卡尔美体育"
              class="w-4 h-4 rounded-full object-cover"
            />
            <span class="text-xs text-gray-500">卡尔美体育</span>
          </div>
          <div class="title text-sm font-medium mt-1 px-2 line-clamp-1">
            十五全运会的运动员冠军系列
          </div>
          <p class="text-xs text-gray-500 px-2 pb-2">新品评测</p>
        </div>
      </div>
    </main>

    <!-- 看视频赚能量弹窗 -->
    <div v-if="showPopup" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <div class="popup-body flex flex-col items-center justify-center p-6">
          <div class="text-center text-2xl font-bold text-orange-500 mb-6">
            看视频 赚能量
          </div>
          <div
            class="energy-icon w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center mb-8"
          >
            <div
              class="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center"
            >
              <i class="fas fa-bolt text-white text-4xl"></i>
            </div>
          </div>
          <button class="confirm-btn" @click="closePopup">
            我知道啦
            <i class="fas fa-times text-white ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 页面基础样式 */
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-top: 55px;
}

/* 用户信息区 */
.user-info-section {
  background-color: white;
  border-top: 1px solid #ddd;
  padding: 12px 16px;
}

/* 主内容区 */
.main-content {
  padding-bottom: calc(60px + env(safe-area-inset-bottom));
}

/* 导航栏右侧操作区 */
.right-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 2px;
}

.notification-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.notification-btn:active {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 视频卡片 */
.video-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: 12px;
}

.video-card:active {
  transform: scale(0.98);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.thumbnail-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.thumbnail-wrapper img {
  width: 100%;
  height: 200px;
  object-cover: cover;
  transition: transform 0.3s ease;
}

.video-card:active .thumbnail-wrapper img {
  transform: scale(1.05);
}

.play-btn {
  opacity: 1;
  /* transition: opacity 0.2s ease; */
  background-color: rgba(0, 0, 0, 0.2);
}

/* .video-card:hover .play-btn,
.video-card:active .play-btn {
  opacity: 1;
} */

.brand-tag {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 8px 0;
}

.brand-tag img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.brand-tag span {
  font-size: 12px;
  color: #666;
}

.title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin: 4px 0 8px;
  padding: 0 8px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
}

/* 弹窗样式 */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.popup-content {
  width: 85%;
  max-width: 320px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: popupSlideIn 0.3s ease-out;
}

@keyframes popupSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.popup-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.energy-icon {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.confirm-btn {
  width: 100%;
  height: 48px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%);
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
}

.confirm-btn:active {
  background: linear-gradient(135deg, #e55a2a 0%, #ff6b35 100%);
  transform: scale(0.98);
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
}
</style>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import FooterNav from "../components/FooterNav.vue";
import CommonHeader from "../components/CommonHeader.vue";

export default {
  name: "EnergyTheaterPage",
  components: {
    FooterNav,
    CommonHeader,
  },
  setup() {
    const showPopup = ref(true);
    const router = useRouter();

    const showWatchVideoPopup = (videoId) => {
      router.push(`/energy-theater/video/${videoId}`);
    };

    // 关闭弹窗
    const closePopup = () => {
      showPopup.value = false;
    };

    return {
      showPopup,
      showWatchVideoPopup,
      closePopup,
    };
  },
};
</script>
