<template>
  <header
    class="fixed w-full top-0 z-50 p-3 flex items-center"
    :style="{ backgroundColor: bgColor }"
  >
    <!-- 返回按钮 -->
    <button
      v-if="showBackButton"
      class="nav-back mr-3 text-dark absolute left-2 top-1/2 transform -translate-y-1/2"
      @click="handleBack"
    >
      <i
        class="fa fa-circle-down text-xl relative rotate-z-90"
        :style="{ color: arrowColor }"
      ></i>
    </button>
    <!-- 中间自定义内容区域 -->
    <div
      class="flex-1 flex items-center justify-center min-w-0 pl-10 pr-4"
    >
      <slot name="center"></slot>
    </div>
    <!-- 右侧可操作按钮 -->
    <div class="flex items-center">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "CommonHeader",
  props: {
    showBackButton: {
      type: Boolean,
      default: true,
    },
    bgColor: {
      type: String,
      default: "bg-blur",
    },
    arrowColor: {
      type: String,
      default: "text-white",
    },
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
/* 自定义样式可在此添加 */
</style>
