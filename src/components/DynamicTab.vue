<template>
  <div class="dynamic-tab">
    <div class="grid grid-cols-2 gap-2 p-1">
      <NotesContent v-for="item in dynamicList" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import NotesContent from './NotesContent.vue'

export default {
  name: 'DynamicTab',
  components: {
    NotesContent
  },
  data() {
    return {
      dynamicList: [
        {
          id: 1,
          title: "女生专属跑山包，终于不用将就男款啦",
          imageUrl: "https://picsum.photos/id/1059/300/200",
          isTop: true,
          isVideo: true,
        },
        {
          id: 2,
          title: "硬核装备分享 | 重装阿布吉措篇",
          imageUrl: "https://picsum.photos/id/1060/300/200",
          isTop: true,
          isVideo: true,
        },
        {
          id: 3,
          title: "云南滇西徒步路线分享，新手友好",
          imageUrl: "https://picsum.photos/id/1061/300/200",
          isTop: false,
          isVideo: false,
        },
        {
          id: 4,
          title: "雪山攀登必备装备清单，小白也能轻松准备",
          imageUrl: "https://picsum.photos/id/1062/300/200",
          isTop: false,
          isVideo: false,
        },
        {
          id: 5,
          title: "户外露营装备推荐，让你的旅程更舒适",
          imageUrl: "https://picsum.photos/id/1063/300/200",
          isTop: false,
          isVideo: true,
        },
        {
          id: 6,
          title: "川西秘境探索｜四姑娘山完整攻略",
          imageUrl: "https://picsum.photos/id/1064/300/200",
          isTop: false,
          isVideo: false,
        },
      ]
    }
  }
}
</script>

<style scoped>
.dynamic-tab {
  min-height: 400px;
}
</style>
