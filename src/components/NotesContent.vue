<template>
  <div
    class="bg-white rounded-lg overflow-hidden card-shadow nav-action cursor-pointer"
    @click="handleClick"
  >
    <img
      :src="item.image || item.imageUrl"
      :alt="item.title"
      class="w-full aspect-[3/4] object-cover"
    />
    <div class="px-2 py-2">
      <p class="text-sm text-black line-clamp-2">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotesContent",
  props: {
    // 接收单个内容项的数据
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("handleClick", this.item.id);
    },
  },
};
</script>

<style scoped>
.card-shadow {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
