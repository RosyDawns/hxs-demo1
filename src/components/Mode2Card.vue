<template>
  <div
    class="bg-white rounded-lg overflow-hidden card-shadow cursor-pointer"
    @click="$emit('click', item.id)"
  >
    <!-- 大师头像 -->
    <img
      :src="item.avatar"
      :alt="item.name"
      class="w-full h-45 object-cover rounded-lt-full rounded-rt-full"
      @error="handleImageError"
    />
    
    <!-- 大师信息 -->
    <div class="px-2 py-2">
      <!-- 姓名和头像 -->
      <div class="flex items-center mb-2">
        <img
          class="w-6 h-6 rounded-full object-cover mr-1"
          :src="item.pic || item.avatar"
          :alt="item.name"
          @error="handleImageError"
        />
        <span class="text-sm text-black">{{ item.name }}</span>
      </div>
      
      <!-- 资质 -->
      <p class="text-xs text-black font-bold mb-1">
        {{ item.qualification || item.title }}
      </p>
      
      <!-- 擅长领域 -->
      <p class="text-xs text-gray-500 mb-1">
        擅长: {{ item.skills || item.specialty }}
      </p>
      
      <!-- 评分和标签 -->
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="text-xs text-gray-500 mr-1">{{ item.rating || 5.0 }}</span>
          <div class="flex">
            <i
              v-for="star in 5"
              :key="star"
              :class="getStarClass(star, item.rating || 5.0)"
              class="text-yellow-400 text-xs"
            ></i>
          </div>
        </div>
        <div
          class="bg-orange-400 text-white text-xs px-1 py-0.5 rounded-full"
        >
          {{ item.label || '认证' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mode2Card',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        name: '',
        avatar: '',
        pic: '',
        qualification: '',
        title: '',
        skills: '',
        specialty: '',
        rating: 5.0,
        label: '认证'
      })
    }
  },
  methods: {
    getStarClass(star, rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;
      
      if (star <= fullStars) {
        return 'fa-solid fa-star';
      } else if (star === Math.ceil(rating) && hasHalfStar) {
        return 'fa-solid fa-star-half-stroke';
      } else {
        return 'fa-regular fa-star';
      }
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
</style>
