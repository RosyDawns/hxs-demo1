<template>
  <div
    class="bg-white rounded-lg overflow-hidden card-shadow cursor-pointer"
    @click="$emit('click', coach.id)"
  >
    <!-- 教练头像 -->
    <img
      :src="coach.avatar"
      :alt="coach.name"
      class="w-full h-45 object-cover rounded-lt-full rounded-rt-full"
      @error="handleImageError"
    />
    
    <!-- 教练信息 -->
    <div class="px-1 py-2">
      <!-- 姓名和头像 -->
      <div class="flex items-center mb-2">
        <img
          class="w-6 h-6 rounded-full object-cover mr-1"
          :src="coach.pic"
          :alt="coach.name"
          @error="handleImageError"
        />
        <span class="text-sm text-black">{{ coach.name }}</span>
      </div>
      
      <!-- 资质 -->
      <p class="text-xs text-black font-bold mb-1">
        {{ coach.qualification }}
      </p>
      
      <!-- 擅长技能 -->
      <p class="text-xs text-gray-500 mb-1">
        擅长: {{ coach.skills }}
      </p>
      
      <!-- 评分和标签 -->
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="text-xs text-gray-500 mr-1">{{ coach.rating }}</span>
          <div class="flex">
            <i
              v-for="star in 5"
              :key="star"
              :class="getStarClass(star)"
              class="text-yellow-400 text-xs"
            ></i>
          </div>
        </div>
        <div class="bg-orange-400 text-white text-xs px-1 py-0.5 rounded-full">
          {{ coach.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoachListCard',
  props: {
    coach: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        name: '',
        avatar: '',
        pic: '',
        qualification: '',
        skills: '',
        rating: 0,
        label: ''
      })
    }
  },
  methods: {
    getStarClass(star) {
      const rating = this.coach.rating;
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
      console.log(1);
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
