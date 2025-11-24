<template>
  <div
    class="bg-white rounded-2xl px-2 py-3 shadow-sm mb-3 relative border border-gray-50"
  >
    <!-- TOP标签 -->
    <div
      v-if="rank <= 3"
      class="absolute left-4 top-4 w-10 h-10 flex flex-col items-center justify-center text-white font-bold rounded-b-lg z-10"
      :class="getRankBgClass()"
    >
      <span style="font-size: 10px">TOP</span>
      <span class="text-xs leading-none">
        {{ String(rank).padStart(2, "0") }}
      </span>
    </div>

    <div class="flex items-start">
      <div
        class="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 mr-4 flex-shrink-0"
      >
        <img
          :src="master.avatar"
          :alt="master.name"
          class="w-full h-full object-cover"
          @error="handleImageError"
        />
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center">
            <h3 class="text-base font-bold text-gray-800 mr-2">
              {{ master.name }}
            </h3>
            <span
              class="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full"
            >
              {{ master.category }}
            </span>
          </div>
          <button
            class="px-4 py-1.5 text-white text-xs rounded-full whitespace-nowrap bg-orange-500"
            @click="handleViewProfile"
          >
            查看主页
          </button>
        </div>
        <p class="text-xs text-gray-600 mb-1">{{ master.qualification }}</p>
        <p class="text-xs text-gray-600">擅长：{{ master.specialty }}</p>
        <div class="flex items-end justify-between -mt-6">
          <div class="flex items-center">
            <span class="text-xs text-gray-600 mr-1">
              评分{{ master.rating }}
            </span>
            <div class="flex items-center">
              <i
                v-for="star in 5"
                :key="star"
                class="text-orange-400 text-xs"
                :class="getStarClass(star, master.rating)"
              ></i>
            </div>
          </div>
          <div class="flex flex-col items-center space-x-2">
            <div
              class="text-xs text-gray-500 bg-yellow-50 px-2 py-0.5 rounded-full mb-2"
            >
              人气票
            </div>
            <button
              class="px-3 py-0.5 text-orange-500 text-xs rounded-full border border-orange-500 hover:bg-orange-50 transition-colors"
              @click="handleCall"
            >
              打Call
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MasterRankingCard",
  props: {
    master: {
      type: Object,
      required: true,
      default: () => ({
        id: "",
        name: "",
        category: "",
        qualification: "",
        specialty: "",
        rating: 0,
        avatar: "",
      }),
    },
    rank: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  methods: {
    getRankBgClass() {
      if (this.rank === 1)
        return "bg-gradient-to-br from-orange-400 to-orange-500";
      if (this.rank === 2)
        return "bg-gradient-to-br from-orange-400 to-orange-500";
      if (this.rank === 3)
        return "bg-gradient-to-br from-orange-400 to-orange-500";
      return "bg-gray-400";
    },

    getStarClass(star, rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;

      if (star <= fullStars) {
        return "fa-solid fa-star";
      } else if (star === fullStars + 1 && hasHalfStar) {
        return "fa-solid fa-star-half-stroke";
      } else {
        return "fa-regular fa-star";
      }
    },

    handleViewProfile() {
      this.$emit("view-profile", this.master.id);
    },

    handleCall() {
      this.$emit("call", this.master.id);
    },

    handleImageError(event) {
      event.target.src = "https://via.placeholder.com/150x200?text=暂无图片";
    },
  },
};
</script>

<style scoped>
/* 确保卡片内容不会被TOP标签遮挡 */
.relative {
  position: relative;
}

/* TOP标签的渐变背景 */
.bg-gradient-to-br {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
