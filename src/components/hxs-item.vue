<template>
  <div class="rounded-2xl p-4 shadow-sm" :class="className">
    <div class="flex justify-between items-start mb-3 relative">
      <img
        :src="coach.image"
        :alt="coach.name"
        class="w-20 h-20 object-cover rounded"
      />
      <div class="flex-1 ml-3">
        <div class="text-sm mb-1 flex items-center">
          <span class="font-bold mr-2">{{ coach.name }}</span>
          <span class="bg-yellow-100 px-2 py-1 text-xs rounded text-yellow-600">游泳唤醒师</span>
        </div>
        <p class="text-xs text-gray">{{ coach.title }}</p>
        <p class="text-xs text-gray mt-0.5">擅长：仰泳/自由泳</p>
        <div class="flex items-center mt-0.5">
          <span class="text-xs text-gray mr-1">评分{{ coach.rating }}</span>
          <div class="flex text-xs text-warning">
            <i
              v-for="star in Math.floor(coach.rating)"
              :key="`full-${star}`"
              class="fa-solid fa-star"
            ></i>
            <i
              v-if="coach.rating % 1 >= 0.5"
              class="fa-solid fa-star-half-stroke"
            ></i>
          </div>
          <div class="text-xs text-gray ml-2">
            距离 <span class="text-primary">{{ coach.distance }}</span> 公里
          </div>
        </div>
      </div>
      <div
        class="text-white text-xs px-2 py-1 rounded absolute right-0"
        style="background-image: linear-gradient(to right, #faad14, #ff6b35)"
        @click="handleViewProfile"
      >
        查看主页
      </div>
    </div>
    <div class="grid grid-cols-3 gap-2">
      <div class="bg-gray-50 rounded-lg overflow-hidden relative text-center shadow">
        <img class="w-full h-22 object-cover" src="https://picsum.photos/id/1065/300/200" alt="体验课" />
        <p class="text-xs text-black bg-white py-1">体验课</p>
        <p class=" text-white w-full absolute top-0 left-0 py-1 text-xs" style="background-image: linear-gradient(to bottom, #000, rgba(255,255,255,0));">
          体验卡：¥{{ coach.prices.trial }}
        </p>
      </div>
      <div class="bg-gray-50 rounded-lg overflow-hidden relative text-center shadow">
        <img class="w-full h-22 object-cover" src="https://picsum.photos/id/1066/300/200" alt="单次课" />
        <p class="text-xs text-black bg-white py-1">单次课</p>
        <p class="text-xs text-white w-full absolute top-0 left-0 py-0.5 "  style="background-image: linear-gradient(to bottom, #000, rgba(255,255,255,0));">
          体验卡：¥{{ coach.prices.single }}
        </p>
      </div>
      <div class="bg-gray-50 rounded-lg overflow-hidden relative text-center shadow">
        <img class="w-full h-22 object-cover" src="https://picsum.photos/id/1067/300/200" alt="10次卡" />
        <p class="text-xs text-black bg-white py-1">10次卡</p>
        <p class="text-xs text-white w-full absolute top-0 left-0 py-0.5" style="background-image: linear-gradient(to bottom, #000, rgba(255,255,255,0));">
          体验卡：¥{{ coach.prices.tenPack }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HxsItem",
  props: {
    className: {
      type: String,
      default: "bg-gray-50",
    },
    coach: {
      type: Object,
      required: true,
      default: () => ({
        id: "",
        name: "",
        title: "",
        image: "",
        qualification: "",
        rating: 0,
        distance: "",
        prices: {
          trial: 0,
          single: 0,
          tenPack: 0,
        },
      }),
    },
  },
  methods: {
    handleViewProfile() {
      this.$emit("view-profile", this.coach.id);
    },
  },
};
</script>

<style scoped>
/* 组件样式已通过tailwind class实现，如需额外样式可在此添加 */
</style>
