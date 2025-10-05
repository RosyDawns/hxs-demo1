<template>
  <div class="bg-white rounded-lg overflow-hidden card-shadow">
    <div class="relative">
      <img :src="item.imageUrl" :alt="item.title" class="w-full h-36 object-cover">
      <span v-if="item.isTop" class="absolute top-2 left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">置顶</span>
      <button v-if="item.isVideo" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center">
        <i class="fa fa-play"></i>
      </button>
    </div>
    <div class="p-2">
      <p class="text-xs font-medium line-clamp-2">{{ item.title }}</p>
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
      required: true
    }
  }
}
</script>