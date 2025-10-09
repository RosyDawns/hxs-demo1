<template>
  <div 
    class="bg-white rounded-lg overflow-hidden card-shadow nav-action cursor-pointer"
    @click="handleClick"
  >
    <img
      :src="item.image"
      :alt="item.title"
      class="w-full h-40 object-cover"
    />
    <div class="px-3 py-2">
      <p class="text-sm text-black mb-2 line-clamp-2">{{ item.title }}</p>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img
            class="w-6 h-6 rounded-full object-cover mr-2"
            :src="item.avatar"
            alt=""
          />
          <span class="text-xs text-gray-500">{{ item.author }}</span>
        </div>
        <div class="flex items-center text-gray-400 text-xs">
          <i class="fa-solid fa-heart mr-1"></i>
          <span>{{ item.likes || '赞' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicListItem",
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', this.item.id);
    }
  }
};
</script>

<style scoped>
.card-shadow {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
</style>