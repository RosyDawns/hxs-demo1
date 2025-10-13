<template>
  <div class="bg-white rounded-2xl p-4 shadow-sm">
    <!-- 大师头像和基本信息 -->
    <div class="flex items-start justify-between mb-3">
      <div class="flex items-center">
        <img
          :src="master.avatar"
          :alt="master.name"
          class="w-12 h-12 rounded-full object-cover mr-3"
          @error="handleImageError"
        />
        <div>
          <div class="flex items-center">
            <span class="font-medium text-gray-800">{{ master.name }}</span>
            <button
              v-if="!master.isFollowed"
              class="ml-2 px-3 py-1 bg-orange-500 text-white text-xs rounded-full hover:bg-orange-600 transition-colors"
              @click="handleCall"
            >
              去打Call
            </button>
          </div>
          <p class="text-sm text-gray-600 mt-1">{{ master.title }}</p>
          <p class="text-xs text-gray-500 mt-0.5">擅长：{{ master.specialty }}</p>
        </div>
      </div>
    </div>

    <!-- 作品展示区域 -->
    <div class="grid grid-cols-2 gap-2">
      <div
        v-for="(work, index) in master.works.slice(0, 2)"
        :key="index"
        class="relative rounded-lg overflow-hidden bg-gray-100 cursor-pointer"
        style="aspect-ratio: 4/3;"
        @click="handleWorkClick(work)"
      >
        <img
          :src="work.image"
          :alt="work.title"
          class="w-full h-full object-cover"
          @error="handleImageError"
        />
        <!-- 渐变遮罩和文字 -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div class="p-2 text-white">
            <p class="text-xs font-medium line-clamp-2">{{ work.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MasterCard',
  props: {
    master: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        name: '',
        title: '',
        specialty: '',
        avatar: '',
        isFollowed: false,
        works: []
      })
    }
  },
  methods: {
    handleCall() {
      this.$emit('call', this.master.id)
    },
    
    handleWorkClick(work) {
      this.$emit('work-click', work)
    },
    
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/150x150?text=暂无图片'
    }
  }
}
</script>

<style scoped>
/* 文本行数限制 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 悬停效果 */
.cursor-pointer:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease;
}
</style>