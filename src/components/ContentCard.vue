<template>
  <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
    <!-- 内容图片 -->
    <div class="relative w-full bg-gray-100" style="aspect-ratio: 1/1;">
      <img
        :src="content.image"
        :alt="content.title"
        class="w-full h-full object-cover"
        @error="handleImageError"
      />
    </div>

    <!-- 内容信息 -->
    <div class="p-2">
      <h3 class="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
        {{ content.title }}
      </h3>
      
      <!-- 作者和点赞 -->
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img
            :src="content.author.avatar"
            :alt="content.author.name"
            class="w-6 h-6 rounded-full object-cover mr-2"
            @error="handleImageError"
          />
          <span class="text-xs text-gray-600">{{ content.author.name }}</span>
        </div>
        
        <button
          class="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition-colors"
          @click="handleLike"
        >
          <i 
            :class="isLiked ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart'"
          ></i>
          <span class="text-xs">{{ formatLikes(content.likes) }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        title: '',
        image: '',
        author: {
          name: '',
          avatar: ''
        },
        likes: 0
      })
    }
  },
  data() {
    return {
      isLiked: false
    }
  },
  methods: {
    handleLike() {
      this.isLiked = !this.isLiked
      this.$emit('like', this.content.id, this.isLiked)
    },
    
    formatLikes(count) {
      if (count >= 10000) {
        return (count / 10000).toFixed(1) + '万'
      }
      return count.toString()
    },
    
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/300x300?text=暂无图片'
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>