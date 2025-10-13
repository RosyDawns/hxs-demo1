<template>
  <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
    <!-- 大师头像 -->
    <div class="relative w-full h-40 bg-gray-100">
      <img
        :src="master.avatar"
        :alt="master.name"
        class="w-full h-full object-cover"
        @error="handleImageError"
      />
    </div>

    <!-- 大师信息 -->
    <div class="p-2">
      <!-- 姓名和头像 -->
      <div class="flex items-center mb-3">
        <div class="w-5 h-5 rounded-full overflow-hidden bg-gray-100 mr-1">
          <img
            :src="master.avatar"
            :alt="master.name"
            class="w-full h-full object-cover"
            @error="handleImageError"
          />
        </div>
        <div class="flex-1 min-w-0 flex items-center justify-between">
          <h3 class="text-gray-800 flex-1" style="font-size: 11px">
            {{ master.name }}
          </h3>
          <button
            class="px-1 py-0.5 text-primary rounded-full border border-primary"
            @click="handleCall"
            style="font-size: 10px"
          >
            去打Call
          </button>
        </div>
      </div>

      <!-- 标题 -->
      <h4 class="text-sm font-bold text-gray-800 mb-1">
        {{ master.title }}
      </h4>

      <!-- 资质信息 -->
      <p class="text-xs text-gray-600 pb-2">擅长：{{ master.specialty }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChampionMasterCard",
  props: {
    master: {
      type: Object,
      required: true,
      default: () => ({
        id: "",
        name: "",
        title: "",
        specialty: "",
        avatar: "",
      }),
    },
  },
  methods: {
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
/* 卡片样式 */
</style>
