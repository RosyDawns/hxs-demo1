<template>
  <div class="page" id="page-energy-theater-video" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
    <!-- 顶部导航栏 -->
    <CommonHeader 
      :bgColor="'transparent'" 
      :arrowColor="'#fff'"
    >
      <template #center>
        <div class="title text-white text-lg font-bold">能量剧场</div>
      </template>
    </CommonHeader>

    <!-- 视频滑动容器 -->
    <div class="video-slider" ref="videoSlider">
      <!-- 当前视频 -->
      <div class="current-video">
        <!-- 视频播放区域 -->
        <div class="video-container">
          <video 
            class="video-player" 
            autoplay 
            loop 
            playsinline
            muted
            :src="currentVideo.videoUrl"
            ref="currentVideoRef"
            @loadeddata="currentVideo.isLoading = false"
            @error="currentVideo.isLoading = false"
            @canplay="handleVideoCanPlay"
          >
          </video>
          
          <!-- 视频加载动画 -->
          <div v-if="currentVideo.isLoading" class="video-loading">
            <div class="loading-spinner"></div>
            <div class="loading-text text-white text-sm">视频加载中...</div>
          </div>
          
          <!-- 视频信息和互动区 -->
          <div class="video-info-container">
            <!-- 左侧视频信息 -->
            <div class="video-info">
              <div class="brand-info flex items-center gap-2 mb-2">
                <img 
                  :src="currentVideo.brandLogo" 
                  :alt="currentVideo.brandName" 
                  class="brand-logo w-8 h-8 rounded-full object-cover"
                />
                <div class="brand-name text-white font-bold">{{ currentVideo.brandName }}</div>
                <button class="follow-btn bg-white text-black text-xs px-3 py-1 rounded-full font-medium">关注</button>
              </div>
              <div class="video-title text-white text-base font-medium mb-2">
                {{ currentVideo.title }}
              </div>
              <div class="video-desc text-white/80 text-sm mb-3">
                {{ currentVideo.description }}
              </div>
              <div class="video-tags flex gap-2">
                <span v-for="(tag, tagIndex) in currentVideo.tags" :key="tagIndex" class="tag bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                  {{ tag }}
                </span>
              </div>
            </div>
            
            <!-- 右侧互动按钮 -->
            <div class="interaction-buttons flex flex-col items-center gap-4">
              <div class="interaction-btn flex flex-col items-center">
                <div class="icon-wrapper bg-white/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <i class="fas fa-heart text-white text-xl"></i>
                </div>
                <div class="count text-white text-sm mt-1">{{ currentVideo.likes }}</div>
              </div>
              
              <div class="interaction-btn flex flex-col items-center">
                <div class="icon-wrapper bg-white/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <i class="fas fa-comment text-white text-xl"></i>
                </div>
                <div class="count text-white text-sm mt-1">{{ currentVideo.comments }}</div>
              </div>
              
              <div class="interaction-btn flex flex-col items-center">
                <div class="icon-wrapper bg-white/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <i class="fas fa-share text-white text-xl"></i>
                </div>
                <div class="count text-white text-sm mt-1">{{ currentVideo.shares }}</div>
              </div>
              
              <div class="interaction-btn flex flex-col items-center">
                <div class="icon-wrapper bg-white/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <i class="fas fa-bookmark text-white text-xl"></i>
                </div>
                <div class="count text-white text-sm mt-1">{{ currentVideo.bookmarks }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 相关推荐视频 -->
    <!-- <div class="related-videos">
      <div class="related-title text-white text-base font-bold mb-3 px-4">相关推荐</div>
      <div class="related-list flex gap-4 px-4 overflow-x-auto pb-6">
        <div 
          v-for="video in relatedVideos" 
          :key="video.id" 
          class="related-item flex-shrink-0 w-32"
          @click="goToVideoDetail(video.id)"
        >
          <div class="related-thumbnail relative rounded-lg overflow-hidden">
            <img 
              :src="video.thumbnail" 
              :alt="video.title" 
              class="w-full h-48 object-cover"
              onerror="this.src='https://via.placeholder.com/128x192?text=视频封面'"
            />
            <div class="play-count absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
              {{ video.playCount }}
            </div>
          </div>
          <div class="related-item-title text-white text-xs mt-2 line-clamp-2">
            {{ video.title }}
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
/* 页面基础样式 */
.page {
  min-height: 100vh;
  background-color: #000;
  color: white;
  overflow: hidden;
  position: relative;
}

/* 视频滑动容器 */
.video-slider {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* 当前视频 */
.current-video {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-out;
}

/* 视频加载动画 */
.video-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  font-size: 14px;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* 视频容器 */
.video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* 视频播放器 */
.video-player {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 视频信息和互动区 */
.video-info-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 16px 40px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

/* 左侧视频信息 */
.video-info {
  flex: 1;
  max-width: 75%;
}

.brand-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.brand-logo {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
}

.brand-name {
  font-weight: bold;
  font-size: 14px;
}

.follow-btn {
  background-color: white;
  color: black;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.follow-btn:active {
  background-color: #f0f0f0;
  transform: scale(0.95);
}

.video-title {
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0;
  line-height: 1.4;
}

.video-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
  line-height: 1.3;
}

.video-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
}

/* 右侧互动按钮 */
.interaction-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-left: 16px;
}

.interaction-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.icon-wrapper:active {
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(0.95);
}

.count {
  font-size: 14px;
  margin-top: 4px;
}

/* 相关推荐视频 */
.related-videos {
  position: relative;
  padding: 16px 0 20px;
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: -80px;
  z-index: 5;
}

.related-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  padding: 0 16px;
}

.related-list {
  display: flex;
  gap: 16px;
  padding: 0 16px 16px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.related-list::-webkit-scrollbar {
  display: none;
}

.related-item {
  flex-shrink: 0;
  width: 128px;
  cursor: pointer;
}

.related-thumbnail {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.related-thumbnail img {
  width: 100%;
  height: 192px;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.related-item:active .related-thumbnail img {
  transform: scale(1.05);
}

.play-count {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  backdrop-filter: blur(2px);
}

.related-item-title {
  font-size: 12px;
  color: white;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  padding: 0 2px;
}
</style>

<script>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import CommonHeader from "../components/CommonHeader.vue";

export default {
  name: "EnergyTheaterVideoPage",
  components: {
    CommonHeader
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const videoId = parseInt(route.params.id) || 1;
    
    // 视频滑动容器引用
    const videoSlider = ref(null);
    const currentVideoRef = ref(null);
    
    // 视频列表数据
    const videoList = reactive([
      {
        id: 1,
        title: "耐克冬季跑鞋新品测评，保暖舒适，适合各种路况",
        description: "全新冬季跑鞋系列，采用最新科技，提供卓越的保暖性能和抓地力，让你在冬季也能享受跑步的乐趣。",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
        brandName: "耐克环球港店",
        tags: ["#耐克", "#冬季跑鞋", "#新品测评"],
        likes: "1.2w",
        comments: "328",
        shares: "156",
        bookmarks: "452",
        isLoading: true
      },
      {
        id: 2,
        title: "绿洲智谷铁馆开业 99/月会员卡",
        description: "全新健身馆开业，专业设备，资深教练，现在办理会员卡仅需99元/月，名额有限，先到先得！",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        brandLogo: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=20&h=20&fit=crop",
        brandName: "赵教练",
        tags: ["#健身", "#铁馆", "#优惠活动"],
        likes: "1.5w",
        comments: "456",
        shares: "234",
        bookmarks: "678",
        isLoading: true
      },
      {
        id: 3,
        title: "理想I6换新版测评 购置税抵扣",
        description: "理想I6换新版来袭，全新设计，强大性能，现在购买还可享受购置税抵扣优惠，机不可失！",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        brandLogo: "https://images.unsplash.com/photo-1617093351178-03b13d03a91b?w=20&h=20&fit=crop",
        brandName: "理想汽车",
        tags: ["#理想汽车", "#I6", "#购置税抵扣"],
        likes: "2.3w",
        comments: "892",
        shares: "567",
        bookmarks: "1234",
        isLoading: true
      },
      {
        id: 4,
        title: "十五全运会的运动员冠军系列",
        description: "十五全运会精彩瞬间，见证冠军诞生，感受运动魅力，为中国体育健儿加油！",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        brandLogo: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=20&h=20&fit=crop",
        brandName: "卡尔美体育",
        tags: ["#全运会", "#运动员", "#冠军"],
        likes: "3.1w",
        comments: "1234",
        shares: "890",
        bookmarks: "1567",
        isLoading: true
      }
    ]);
    
    // 当前视频索引
    const currentVideoIndex = ref(videoList.findIndex(video => video.id === videoId) || 0);
    
    // 当前视频（计算属性）
    const currentVideo = computed(() => videoList[currentVideoIndex.value]);
    
    // 滑动状态
    const touchStartY = ref(0);
    const touchEndY = ref(0);
    const isSliding = ref(false);
    
    // 相关推荐视频数据
    const relatedVideos = ref([
      {
        id: 5,
        thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
        title: "耐克冬季跑鞋新品测评",
        playCount: "1.8w"
      },
      {
        id: 6,
        thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
        title: "绿洲智谷铁馆开业",
        playCount: "1.5w"
      },
      {
        id: 7,
        thumbnail: "https://images.unsplash.com/photo-1617093351178-03b13d03a91b?w=300&h=200&fit=crop",
        title: "理想I6换新版测评",
        playCount: "2.3w"
      },
      {
        id: 8,
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=200&fit=crop",
        title: "十五全运会精彩瞬间",
        playCount: "3.1w"
      }
    ]);
    
    // 预加载视频
    const preloadVideo = (index) => {
      if (index >= 0 && index < videoList.length) {
        const video = document.createElement('video');
        video.src = videoList[index].videoUrl;
        video.preload = 'metadata';
        video.muted = true;
        video.playsinline = true;
        video.load();
      }
    };
    
    // 处理视频可以播放
    const handleVideoCanPlay = () => {
      currentVideo.value.isLoading = false;
      // 确保视频播放
      if (currentVideoRef.value) {
        currentVideoRef.value.play().catch(err => {
          console.log('视频自动播放失败:', err);
        });
      }
    };
    
    // 处理触摸开始
    const handleTouchStart = (e) => {
      touchStartY.value = e.touches[0].clientY;
      isSliding.value = true;
    };
    
    // 处理触摸移动
    const handleTouchMove = (e) => {
      if (!isSliding.value) return;
      touchEndY.value = e.touches[0].clientY;
    };
    
    // 切换到下一个视频
    const nextVideo = () => {
      if (currentVideoIndex.value < videoList.length - 1) {
        currentVideoIndex.value++;
        router.push(`/energy-theater/video/${currentVideo.value.id}`);
        // 预加载下下一个视频
        preloadVideo(currentVideoIndex.value + 1);
      }
    };
    
    // 切换到上一个视频
    const prevVideo = () => {
      if (currentVideoIndex.value > 0) {
        currentVideoIndex.value--;
        router.push(`/energy-theater/video/${currentVideo.value.id}`);
        // 预加载上上个视频
        preloadVideo(currentVideoIndex.value - 1);
      }
    };
    
    // 处理触摸结束
    const handleTouchEnd = () => {
      if (!isSliding.value) return;
      
      // 计算滑动距离
      const diff = touchEndY.value - touchStartY.value;
      const threshold = 50; // 滑动阈值
      
      // 向上滑动（下一个视频）
      if (diff < -threshold) {
        nextVideo();
      }
      // 向下滑动（上一个视频）
      else if (diff > threshold) {
        prevVideo();
      }
      
      // 重置滑动状态
      isSliding.value = false;
    };
    
    // 跳转到其他视频详情
    const goToVideoDetail = (id) => {
      router.push(`/energy-theater/video/${id}`);
    };
    
    // 组件挂载时
    onMounted(() => {
      // 预加载下一个视频
      preloadVideo(currentVideoIndex.value + 1);
    });
    
    // 组件卸载时清理资源
    onUnmounted(() => {
      // 暂停当前视频播放
      if (currentVideoRef.value) {
        currentVideoRef.value.pause();
      }
    });

    return {
      currentVideo,
      relatedVideos,
      goToVideoDetail,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      handleVideoCanPlay
    };
  }
};
</script>