<template>
  <div class="star-tab">
    <!-- 筛选标签栏 -->
    <div class="flex items-center justify-between pb-3">
      <div class="flex gap-2">
        <button
          v-for="filter in filters"
          :key="filter.key"
          :class="['filter-btn', { active: sortBy === filter.key }]"
          @click="sortCoaches(filter.key)"
        >
          {{ filter.label }}
        </button>
      </div>
      <div class="flex items-center gap-3">
        <i class="fa fa-search text-gray-400 text-sm"></i>
        <i class="fa fa-gift text-gray-400 text-sm"></i>
      </div>
    </div>

    <!-- 教练列表 -->
    <div class="space-y-3 mt-3">
      <hxs-item
        v-for="coach in coaches"
        :key="coach.id"
        :coach="coach"
        className="bg-white"
        @view-profile="handleViewProfile"
      />
    </div>
  </div>
</template>

<script>
import HxsItem from "./hxs-item.vue";

export default {
  name: "StarTab",
  components: {
    HxsItem,
  },
  data() {
    return {
      sortBy: "recommend",
      filters: [
        { key: "recommend", label: "推荐" },
        { key: "distance", label: "距离" },
        { key: "rating", label: "服务分" },
      ],
      originalCoaches: [
        {
          id: "coach1",
          name: "李教练",
          type: "游泳教练",
          title: "国家二级运动员 | 8年教学经验",
          rating: 4.8,
          distance: 1.2,
          image: "https://picsum.photos/id/1005/100/100",
          prices: {
            trial: 88,
            single: 200,
            tenPack: 1680,
          },
        },
        {
          id: "coach2",
          name: "赵教练",
          type: "游泳教练",
          title: "国家一级运动员 | 10年教学经验",
          rating: 4.9,
          distance: 1.5,
          image: "https://picsum.photos/id/1011/100/100",
          prices: {
            trial: 98,
            single: 220,
            tenPack: 1880,
          },
        },
        {
          id: "coach3",
          name: "张教练",
          type: "游泳教练",
          title: "国家二级运动员 | 6年教学经验",
          rating: 4.6,
          distance: 2.8,
          image: "https://picsum.photos/id/1012/100/100",
          prices: {
            trial: 80,
            single: 180,
            tenPack: 1580,
          },
        },
        {
          id: "coach4",
          name: "王教练",
          type: "游泳教练",
          title: "国家一级运动员 | 12年教学经验",
          rating: 4.7,
          distance: 3.2,
          image: "https://picsum.photos/id/1013/100/100",
          prices: {
            trial: 95,
            single: 210,
            tenPack: 1780,
          },
        },
      ],
      coaches: [],
    };
  },
  created() {
    this.coaches = [...this.originalCoaches];
  },
  methods: {
    sortCoaches(sortType) {
      this.sortBy = sortType;
      const sorted = [...this.originalCoaches];

      switch (sortType) {
        case "distance":
          sorted.sort((a, b) => a.distance - b.distance);
          break;
        case "rating":
          sorted.sort((a, b) => b.rating - a.rating);
          break;
        default:
          // 推荐排序保持原序
          break;
      }

      this.coaches = sorted;
    },
    handleViewProfile(coachId) {
      console.log(`查看教练ID: ${coachId}的主页`);
      this.$router.push({ path: "/ouyang", params: { id: coachId } });
    },
  },
};
</script>

<style scoped>
.star-tab {
  min-height: 400px;
}

.filter-btn {
  padding: 4px 12px;
  font-size: 13px;
  color: #666;
  transition: all 0.3s;
}

.filter-btn.active {
  color: #1d4ed8;
  border-bottom: 2px solid #1d4ed8;
}
</style>
