<template>
  <div 
    class="bg-white rounded-lg overflow-hidden card-shadow nav-action cursor-pointer"
    @click="handleClick"
  >
    <img
      :src="coach.avatar"
      :alt="coach.name"
      class="w-full h-45 object-cover rounded-lt-full rounded-rt-full"
    />
    <div class="px-2 py-2">
      <div class="flex items-center mb-2">
        <img
          class="w-6 h-6 rounded-full object-cover mr-1"
          :src="coach.pic || coach.avatar"
          alt=""
        />
        <span class="text-sm text-black">{{ coach.name }}</span>
      </div>
      <p class="text-xs text-black font-bold mb-1">
        {{ coach.qualification }}
      </p>
      <p class="text-xs text-gray-500 mb-1">擅长: {{ coach.skills }}</p>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="text-xs text-gray-500 mr-1">{{ coach.rating }}</span>
          <div class="flex">
            <!-- 动态生成星星 -->
            <i v-for="star in 5" :key="star" :class="[
              'text-yellow-400 text-xs',
              {
                'fa-solid fa-star': star <= Math.floor(coach.rating),
                'fa-solid fa-star-half-stroke': star === Math.ceil(coach.rating) && coach.rating % 1 !== 0,
                'fa-regular fa-star': star > Math.ceil(coach.rating)
              }
            ]"></i>
          </div>
        </div>
        <div
          class="bg-orange-100 text-orange text-xs px-1 py-0.5 rounded-full"
        >
          {{ coach.label || '可约课' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoachListItem",
  props: {
    coach: {
      type: Object,
      required: true,
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', this.coach.id);
    }
  }
};
</script>

<style scoped>
.card-shadow {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
</style>