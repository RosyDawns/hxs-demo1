<template>
  <div class="page" id="page-product-detail">
    <!-- 顶部导航 -->
    <CommonHeader arrowColor="#fff">
      <template #center>
        <!-- <h1 class="text-lg text-white font-medium">商品详情</h1> -->
      </template>
      <template #right>
        <div class="flex items-center text-white">
          <div
            class="w-6 h-6 mr-1 flex items-center justify-center rounded-full"
            style="background-color: rgba(0, 0, 0, 0.3)"
          >
            <i class="fa fa-search text-xs"></i>
          </div>
          <div
            class="w-6 h-6 mr-1 flex items-center justify-center rounded-full"
            style="background-color: rgba(0, 0, 0, 0.3)"
          >
            <i class="fa-solid fa-star text-xs"></i>
          </div>
          <div
            class="w-6 h-6 mr-1 flex items-center justify-center rounded-full"
            style="background-color: rgba(0, 0, 0, 0.3)"
          >
            <i class="fa-solid fa-share text-xs"></i>
          </div>
        </div>
      </template>
    </CommonHeader>

    <!-- 商品图片/视频 -->
    <div class="relative">
      <!-- 视频元素，使用v-show代替v-if以便预加载 -->
      <!-- 视频可播放时触发onVideoCanPlay事件，加载首帧数据时触发onVideoLoadedData事件 -->
      <video
        ref="productVideo"
        v-show="isVideoMode"
        :src="product.video || '@images/sample_video.mp4'"
        :alt="product.title"
        :poster="product.image"
        class="w-full h-130 object-cover"
        playsinline
        preload="auto"
        :autoplay="!videoEnded"
        :muted="isMuted"
        @pause="isPlaying = false"
        @playing="isPlaying = true"
        @canplay="onVideoCanPlay"
        @ended="onVideoEnded"
        @loadeddata="onVideoLoadedData"
      ></video>
      <!-- 视频加载状态指示器 -->
      <div
        v-if="isVideoMode && !videoLoaded"
        class="absolute inset-0 flex flex-col items-center justify-center bg-black/20"
      >
        <div class="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
        <div class="text-white font-medium">视频加载中...</div>
      </div>
      <!-- 视频播放/暂停按钮覆盖层 -->
      <div
        v-if="isVideoMode && videoLoaded"
        class="absolute inset-0 flex items-center justify-center"
        @click="togglePlayPause"
      >
        <div
          v-if="!isPlaying || videoEnded"
          class="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center text-white"
          style="cursor: pointer"
        >
          <i class="fa-solid fa-play text-xl"></i>
        </div>
      </div>
      <!-- 图片元素 -->
      <img
        v-else
        src="@images/img_39.jpg"
        :alt="product.title"
        class="w-full h-130 object-cover"
      />
      <div
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3"
      >
        <div class="flex items-center justify-between">
          <!-- 声音控制按钮只在视频模式下显示 -->
          <div v-if="isVideoMode" class="text-white text-sm">
            <i
              class="fa-solid"
              :class="isMuted ? 'fa-volume-xmark' : 'fa-volume-high'"
              @click="toggleMute"
              style="cursor: pointer"
            ></i>
          </div>
          <!-- 图片模式下显示空白占位，保持布局对齐 -->
          <div v-else class="w-5"></div>
          <div
            class="flex items-center text-white text-sm py-1 rounded-full"
            :class="{ 'pl-3 pr-1': !isVideoMode, 'pl-1 pr-3': isVideoMode }"
            style="background-color: rgba(0, 0, 0, 0.4)"
          >
            <span
              :class="{
                'font-bold': isVideoMode,
                'bg-white text-black px-2 rounded-full': isVideoMode,
              }"
              @click="toggleDisplayMode('video')"
              style="cursor: pointer; margin-right: 8px"
              >视频</span
            >
            <span
              :class="{
                'font-bold': !isVideoMode,
                'bg-white text-black px-2 rounded-full': !isVideoMode,
              }"
              @click="toggleDisplayMode('image')"
              style="cursor: pointer"
              >图片</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="p-3">
      <!-- 商品信息 -->
      <div class="bg-white rounded-2xl overflow-hidden">
        <div class="flex items-end px-3 py-2 bg-red-50 mb-3">
          <div class="flex-1 flex items-end">
            <div
              class="flex items-center bg-red-50 text-red-500 text-xs rounded mr-2"
            >
              <span>券后</span>
            </div>
            <div class="text-red-500 font-bold flex items-end">
              <span class="text-sm leading-none">¥</span>
              <span class="text-xl leading-none">{{ product.price }}</span>
            </div>
            <div
              class="ml-2 text-xs border border-red-500 text-red-500 px-1 py-0.5 rounded leading-none"
            >
              3.0折
            </div>
            <div class="text-gray-500 line-through text-xs ml-2 leading-none">
              ¥{{ Math.floor(product.price * 1.1) }}
            </div>
          </div>
          <div class="text-gray text-xs">已售 6000</div>
        </div>
        <div class="px-4 pb-2">
          <div class="flex items-center w-full">
            <div class="flex-1 min-w-0">
              <div
                class="text-black mb-2 font-bold overflow-hidden text-ellipsis whitespace-nowrap flex-shrink-0 w-full"
              >
                [体验卡]1对1游泳零基础蛙泳/自由泳（新人福利）hddd
              </div>
              <div class="flex items-center justify-between text-xs">
                <div class="flex-1 flex items-center">
                  <img
                    src="https://picsum.photos/id/1005/100/100"
                    class="w-5 h-5 rounded-full mr-1 object-contain"
                  />
                  <span>100%好评</span>
                  <span>“教练很专业，环境很不错</span>
                </div>
                <span>共183个消费评价</span>
              </div>
            </div>
            <i class="fa-solid fa-arrow-right text-gray-300"></i>
          </div>

          <div class="mt-3 flex items-center">
            <div class="flex-1">
              <div class="flex items-center text-sm">
                <div class="font-medium mb-1 mr-2">限制</div>
                <div class="text-gray-600 mb-1">每人限购1张</div>
              </div>
              <div class="flex items-center text-sm">
                <div class="font-medium mb-1 mr-2">须知</div>
                <div class="text-gray-600 mb-1">
                  需预约 · 周一至周日10:00-22:00可用
                </div>
              </div>
              <div class="flex items-center text-sm">
                <div class="font-medium mb-1 mr-2">保障</div>
                <div class="text-gray-600 mb-1">随时退 · 过期退</div>
              </div>
            </div>
            <i class="fa-solid fa-arrow-right text-black"></i>
          </div>
        </div>
      </div>

      <div class="mt-2 mb-5 flex border-b border-gray-200">
        <button
          class="py-3 mr-8 text-center text-sm font-medium"
          :class="{
            'text-primary border-b-2 border-primary': activeTab === 'details',
          }"
          @click="activeTab = 'details'"
        >
          团购详情
        </button>
        <button
          class="py-3 mr-8 text-center text-sm font-medium"
          :class="{
            'text-primary border-b-2 border-primary': activeTab === 'notices',
          }"
          @click="activeTab = 'notices'"
        >
          购买须知
        </button>
        <button
          class="py-3 text-center text-sm font-medium"
          :class="{
            'text-primary border-b-2 border-primary': activeTab === 'reviews',
          }"
          @click="activeTab = 'reviews'"
        >
          网友评价
        </button>
      </div>
      <div class="bg-white rounded-2xl overflow-hidden">
        <!-- 详情内容 -->

        <div v-if="activeTab === 'details'">
          <div class="text-sm mb-4">
            <div class="text-sm mb-2 bg-red-50 py-2.5 px-3 font-medium">
              游泳一对一体验课程
            </div>
            <div class="px-3">
              <div class="text-black mb-2 font-bold">
                [体验卡]1对1游泳零基础蛙泳/自由泳（新人福利）
              </div>

              <div class="flex items-center justify-between text-xs mb-2">
                <div class="flex-1 flex items-center">
                  <img
                    src="https://picsum.photos/id/1005/100/100"
                    class="w-5 h-5 rounded-full mr-1 object-contain"
                  />
                  <span>100%好评</span>
                  <span>“教练很专业，环境很不错</span>
                </div>
                <span>共183个消费评价</span>
              </div>

              <div class="text-gray-600 mb-1 text-xs">
                <span class="text-gray-400 mr-3">游泳种类</span>
                <span>可自选</span>
              </div>
              <div
                class="text-gray-600 mb-2 text-xs flex items-center justify-between"
              >
                <div class="flex-1">
                  <span class="text-gray-400 mr-3">课程时长</span>
                  <span>45分钟</span>
                </div>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4" v-else>
          <div v-if="activeTab === 'notices'">
            <div class="text-sm text-gray-600 leading-relaxed">
              <p class="mb-2">1. 请至少提前24小时预约课程。</p>
              <p class="mb-2">2. 课程需在购买后30天内使用，逾期作废。</p>
              <p class="mb-2">3. 请自带泳衣、泳帽、泳镜等个人物品。</p>
              <p class="mb-2">
                4. 如遇特殊情况无法参加，请提前12小时取消预约。
              </p>
              <p class="mb-2">5. 本课程仅限18岁以上学员使用。</p>
            </div>
          </div>

          <div v-if="activeTab === 'reviews'">
            <div class="text-sm mb-4">
              <div class="font-medium mb-2">
                评价详情 ({{ product.reviews }})
              </div>

              <!-- 评价列表 -->
              <div class="space-y-4">
                <div class="border-b border-gray-100 pb-3">
                  <div class="flex items-center mb-2">
                    <img
                      src="https://picsum.photos/id/1001/40/40"
                      alt="用户头像"
                      class="w-8 h-8 rounded-full mr-2"
                    />
                    <div class="text-xs text-gray-500">李***生</div>
                    <div class="ml-auto text-xs text-gray-400">2023-06-15</div>
                  </div>
                  <div class="flex text-yellow-400 mb-2">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="text-gray-600 text-sm">
                    教练很专业，耐心指导，第一节课就学会了基本动作，非常满意！
                  </div>
                </div>

                <div class="border-gray-100">
                  <div class="flex items-center mb-2">
                    <img
                      src="https://picsum.photos/id/1002/40/40"
                      alt="用户头像"
                      class="w-8 h-8 rounded-full mr-2"
                    />
                    <div class="text-xs text-gray-500">张***花</div>
                    <div class="ml-auto text-xs text-gray-400">2023-06-10</div>
                  </div>
                  <div class="flex text-yellow-400 mb-2">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                  </div>
                  <div class="text-gray-600 text-sm">
                    环境很不错，水质干净，教练讲解清晰，值得推荐！
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部购买栏 -->
    <div class="w-full py-3 px-4 flex items-center justify-between">
      <div class="flex items-center mr-4">
        <div
          class="w-10 h-10 flex flex-col items-center justify-center text-xs text-gray-500"
        >
          <i class="fa-solid fa-gift text-xl mb-1"></i>
          <span class="text-xs">橱窗</span>
        </div>
        <div
          class="w-10 h-10 flex flex-col items-center justify-center text-xs text-gray-500"
        >
          <i class="fa-solid fa-gift text-xl mb-1"></i>
          <span class="text-xs">私信</span>
        </div>
      </div>
      <button class="bg-red-500 text-white px-4 py-1 rounded-full text-sm">
        立即购买
      </button>
    </div>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "ProductDetailPage",
  components: {
    CommonHeader,
  },
  data() {
      return {
        activeTab: "details",
        product: {
          id: "",
          title: "",
          price: 0,
          sales: 0,
          image: "",
          reviews: 0,
          isNew: false,
          video: "",
          audio: "",
        },
        isMuted: true, // 声音默认关闭
        isVideoMode: false, // 默认显示图片模式
        isPlaying: true, // 默认视频处于播放状态
        videoEnded: false, // 视频是否播放结束
        videoLoaded: false, // 视频是否加载完成
        preloadVideoElement: null, // 预加载视频元素
      };
    },
    mounted() {
      // 从路由参数中获取商品ID
      const productId = this.$route.params.id;
      // 模拟获取商品详情数据
      this.loadProductDetail(productId);
      
      // 预加载视频元素，提升切换体验
      this.preloadVideo();
    },
    methods: {
      // 预加载视频
      preloadVideo() {
        // 创建隐藏的视频元素进行预加载
        if (!this.preloadVideoElement) {
          this.preloadVideoElement = document.createElement('video');
          this.preloadVideoElement.preload = 'metadata';
          
          // 当商品数据加载后设置视频源
          this.$watch('product.video', (newVideoUrl) => {
            if (newVideoUrl) {
              this.preloadVideoElement.src = newVideoUrl;
            }
          });
        }
      },
      
      // 视频可播放时触发
      onVideoCanPlay() {
        this.videoLoaded = true;
      },
      
      // 视频加载首帧数据时触发
      onVideoLoadedData() {
        this.videoLoaded = true;
      },
    loadProductDetail(productId) {
      // 这里应该是一个API调用，现在我们使用模拟数据
      // 模拟商品数据
      const products = [
        {
          id: "product1",
          title: "蛙泳/自由泳（体验卡）",
          price: 38,
          sales: 5680,
          image: "https://picsum.photos/id/1065/300/300",
          reviews: 183,
          isNew: false,
          video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
          audio: "",
        },
        {
          id: "product2",
          title: "自由泳60分钟（单次卡）",
          price: 200,
          sales: 890,
          image: "https://picsum.photos/id/1066/300/300",
          reviews: 120,
          isNew: true,
          video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
          audio: "",
        },
        {
          id: "product3",
          title: "蛙泳/自由泳（10次卡）",
          price: 1680,
          sales: 538,
          image: "https://picsum.photos/id/1067/300/300",
          reviews: 89,
          isNew: false,
          video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
          audio: "",
        },
        {
          id: "product4",
          title: "蛙泳/自由泳（20次卡）",
          price: 2980,
          sales: 136,
          image: "https://picsum.photos/id/1068/300/300",
          reviews: 45,
          isNew: true,
          video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
          audio: "",
        },
      ];

      // 查找对应ID的商品
      const foundProduct = products.find((p) => p.id === productId);
      if (foundProduct) {
        this.product = foundProduct;
      }
    },

    // 切换声音开关（只在视频模式下有效）
    toggleMute() {
      this.isMuted = !this.isMuted;
    },

    // 切换视频/图片模式
    toggleDisplayMode(mode) {
      if (mode === "video") {
        this.isVideoMode = true;
        this.isPlaying = true; // 切换到视频模式时自动播放
        this.videoEnded = false; // 重置视频结束状态
      } else {
        this.isVideoMode = false;
      }
    },

    // 控制视频播放/暂停
    togglePlayPause() {
      const video = this.$refs.productVideo;
      if (video) {
        if (this.videoEnded) {
          // 如果视频已经播放结束，重置到开始位置再播放
          video.currentTime = 0;
          video.play();
          this.isPlaying = true;
          this.videoEnded = false;
        } else if (this.isPlaying) {
          video.pause();
          this.isPlaying = false;
        } else {
          video.play();
          this.isPlaying = true;
        }
      }
    },

    // 视频播放结束时触发
    onVideoEnded() {
      this.isPlaying = false;
      this.videoEnded = true;
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.tab-button {
  transition: all 0.3s ease;
}

.tab-button.active {
  color: #1989fa;
  border-bottom: 2px solid #1989fa;
}

#page-product-detail {
  background-color: #f5f5f5;
}
</style>
