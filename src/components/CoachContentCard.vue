<template>
  <div
    class="bg-white rounded-lg overflow-hidden card-shadow cursor-pointer"
    @click="$emit('click', coach.id)"
  >
    <!-- 内容图片 -->
    <div class="relative w-full bg-gray-100" style="aspect-ratio: 1/1;">
      <img
        :src="coach.avatar"
        :alt="coach.name"
        class="w-full h-full object-cover"
        @error="handleImageError"
      />
    </div>
    
    <!-- 内容信息 -->
    <div class="p-2">
      <!-- 标题 -->
      <p class="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
        {{ coach.qualification }}
      </p>
      
      <!-- 作者和点赞 -->
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img
            :src="coach.pic"
            :alt="coach.name"
            class="w-5 h-5 rounded-full object-cover mr-1"
            @error="handleImageError"
          />
          <span class="text-xs text-gray-600">{{ coach.name }}</span>
        </div>
        
        <button
          class="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition-colors"
          @click.stop="handleLike"
        >
          <i 
            :class="isLiked ? 'fa-solid fa-heart text-red-500' : 'fa-solid fa-heart'"
            class="text-xs"
          ></i>
          <span class="text-xs">{{ likes }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoachContentCard',
  props: {
    coach: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        name: '',
        avatar: '',
        pic: '',
        qualification: ''
      })
    }
  },
  data() {
    return {
      isLiked: false,
      likes: Math.floor(Math.random() * 100)
    };
  },
  methods: {
    handleLike() {
      this.isLiked = !this.isLiked;
      this.likes = this.isLiked ? this.likes + 1 : this.likes - 1;
      this.$emit('like', this.coach.id, this.isLiked);
    },
    
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/300x300?text=暂无图片';
    }
  }
};
</script>

<style scoped>
.card-shadow {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
