<template>
  <div class="page flex flex-col h-screen bg-gradient-to-b from-orange-50 to-gray-50" id="page-write-review">
    <CommonHeader>
      <template #center>
        <h2 class="text-base font-bold text-black">发表评价</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-12 pb-4">
      <div class="px-4 mt-4">
        <!-- 评分卡片 -->
        <div class="bg-white rounded-3xl p-6 mb-4 shadow-sm">
          <div class="text-center mb-4">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-3">
              <i class="fa-solid fa-star text-2xl text-orange-500"></i>
            </div>
            <h3 class="text-lg font-bold mb-1">服务满意度</h3>
            <p class="text-xs text-gray-400">点击星星进行评分</p>
          </div>
          <div class="flex items-center justify-center py-3">
            <button
              v-for="i in 5"
              :key="i"
              @click="rating = i"
              class="mx-2 transition-transform hover:scale-110"
            >
              <i
                :class="i <= rating ? 'fa-solid' : 'fa-regular'"
                class="fa-star text-5xl text-yellow-400 drop-shadow-sm"
              ></i>
            </button>
          </div>
          <p class="text-center text-base font-medium mt-3" :class="rating >= 4 ? 'text-orange-500' : 'text-gray-500'">
            {{ ratingText }}
          </p>
        </div>

        <!-- 评价内容 -->
        <div class="bg-white rounded-3xl p-6 mb-4 shadow-sm">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <i class="fa-solid fa-pen text-orange-500"></i>
            </div>
            <div>
              <h3 class="text-sm font-bold">详细评价</h3>
              <p class="text-xs text-gray-400">至少10个字哦</p>
            </div>
          </div>
          <div class="relative">
            <textarea
              v-model="content"
              class="w-full h-36 p-4 border-2 border-gray-100 rounded-2xl resize-none text-sm focus:border-orange-300 focus:outline-none transition-colors"
              placeholder="说说你的真实感受吧，你的评价对其他人很重要~\n\n可以从以下几个方面评价：\n• 教练/服务质量如何\n• 环境设施怎么样\n• 性价比如何\n• 是否推荐给朋友"
              maxlength="500"
            ></textarea>
          </div>
          <div class="flex items-center justify-between mt-3">
            <span class="text-xs text-gray-400">{{ content.trim().length >= 10 ? '✓' : '' }} 还需 {{ Math.max(0, 10 - content.trim().length) }} 字</span>
            <span class="text-xs font-medium" :class="content.length > 450 ? 'text-orange-500' : 'text-gray-400'">{{ content.length }}/500</span>
          </div>
        </div>

        <!-- 上传图片 -->
        <div class="bg-white rounded-3xl p-6 mb-4 shadow-sm">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <i class="fa-solid fa-image text-orange-500"></i>
            </div>
            <div>
              <h3 class="text-sm font-bold">上传图片</h3>
              <p class="text-xs text-gray-400">最多9张，更有说服力</p>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-3">
            <div
              v-for="(img, index) in images"
              :key="index"
              class="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-sm"
            >
              <img :src="img" alt="" class="w-full h-full object-cover">
              <button
                class="absolute top-1.5 right-1.5 w-6 h-6 bg-black/60 text-white rounded-full flex items-center justify-center text-sm backdrop-blur-sm"
                @click="removeImage(index)"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <button
              v-if="images.length < 9"
              class="aspect-square rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-gray-400 nav-action hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500 transition-all"
              @click="handleUploadImage"
            >
              <i class="fa-solid fa-camera text-2xl mb-1"></i>
              <span class="text-xs">{{ images.length === 0 ? '添加' : '+' }}</span>
            </button>
          </div>
        </div>

        <!-- 匿名评价 -->
        <div class="bg-white rounded-3xl p-5 mb-4 shadow-sm">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <i class="fa-solid fa-user-secret text-purple-500"></i>
              </div>
              <div>
                <span class="text-sm font-medium">匿名评价</span>
                <p class="text-xs text-gray-400 mt-0.5">他人将看不到你的昵称</p>
              </div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="isAnonymous" class="sr-only peer">
              <div class="w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500 shadow-inner"></div>
            </label>
          </div>
        </div>

        <!-- 提交按钮 -->
        <div class="mt-6 mb-4">
          <button
            class="w-full py-4 rounded-full font-bold text-base shadow-lg transition-all"
            @click="handleSubmit"
            :disabled="!canSubmit"
            :class="canSubmit ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:shadow-xl hover:scale-[1.02]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
          >
            <i class="fa-solid fa-paper-plane mr-2"></i>
            {{ canSubmit ? '发布评价' : '请完善评价内容' }}
          </button>
          <p class="text-center text-xs text-gray-400 mt-3">
            <i class="fa-solid fa-shield-halved mr-1"></i>
            你的评价将帮助更多人做出选择
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "WriteReviewPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      rating: 5,
      content: "",
      images: [],
      isAnonymous: false,
    };
  },
  computed: {
    ratingText() {
      const texts = ["", "非常不满意", "不满意", "一般", "满意", "非常满意"];
      return texts[this.rating];
    },
    canSubmit() {
      return this.rating > 0 && this.content.trim().length >= 10;
    },
  },
  methods: {
    handleUploadImage() {
      // 模拟上传图片
      const demoImages = [
        "https://picsum.photos/id/1059/300/300",
        "https://picsum.photos/id/1060/300/300",
        "https://picsum.photos/id/1061/300/300",
      ];
      if (this.images.length < 9) {
        this.images.push(demoImages[this.images.length % 3]);
      }
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
    handleSubmit() {
      if (!this.canSubmit) {
        return;
      }
      
      // 提交评价
      alert("评价发布成功！");
      this.$router.back();
    },
  },
};
</script>
