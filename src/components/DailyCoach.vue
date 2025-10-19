<template>
  <div class="daily-coach bg-white">
    <!-- 筛选标签 -->
    <div
      class="bg-white px-4 py-4 flex items-center space-x-2 overflow-x-auto border-b border-b-gray-200"
    >
      <button
        v-for="filter in filters"
        :key="filter.id"
        :class="activeFilter === filter.id ? 'text-primary ' : ' text-black'"
        class="text-sm whitespace-nowrap flex items-center mr-3"
        @click="activeFilter = filter.id"
      >
        {{ filter.name }}
        <i
          v-if="filter.hasDropdown"
          class="fa-solid fa-angle-down ml-0.5 text-xs"
        ></i>
      </button>
      <button class="ml-auto text-gray" @click="handleSearch">
        <i class="fa-solid fa-search"></i>
      </button>
    </div>

    <!-- 唤醒师列表 -->
    <div class="grid grid-cols-2 gap-3 p-3">
      <CoachListCard
        v-for="coach in coaches"
        :key="coach.id"
        :coach="coach"
        @click="handleViewProfile(coach.id)"
      />
    </div>
  </div>
</template>

<script>
import CoachListCard from "./CoachListCard.vue";

export default {
  name: "DailyCoach",
  components: {
    CoachListCard,
  },
  data() {
    return {
      activeFilter: "recommend",
      filters: [
        { id: "recommend", name: "推荐", hasDropdown: true },
        { id: "filter", name: "筛选", hasDropdown: true },
        { id: "store", name: "到店服务", hasDropdown: false },
        { id: "home", name: "上门服务", hasDropdown: false },
        { id: "online", name: "线上服务", hasDropdown: false },
      ],
      coaches: this.getCoaches(),
    };
  },
  methods: {
    handleSearch() {
      console.log("打开搜索页面");
      // TODO: 跳转到搜索页面
      // this.$router.push('/coach/search')
    },
    getCoaches() {
      // 图片路径
      const avatar1 = "/src/assets/images/img-11.jpg";
      const pic1 = "/src/assets/images/img-12.jpg";

      return [
        {
          id: "1",
          name: "李教练",
          avatar: avatar1,
          pic: pic1,
          qualification: "国家二级游泳运动员",
          skills: "蛙泳/自由泳",
          rating: 4.8,
          label: "到店服务",
        },
        {
          id: "2",
          name: "赵教练",
          avatar: avatar1,
          pic: pic1,
          qualification: "国家一级游泳运动员",
          skills: "仰泳/自由泳",
          rating: 4.9,
          label: "线上服务",
        },
        {
          id: "3",
          name: "张设计",
          avatar: avatar1,
          pic: pic1,
          qualification: "国家一级平面设计师",
          skills: "平面设计/包装设计",
          rating: 4.8,
          label: "线上服务",
        },
        {
          id: "4",
          name: "王教练",
          avatar: avatar1,
          pic: pic1,
          qualification: "国家二级网球运动员",
          skills: "西方式正手/单反/发球",
          rating: 4.7,
          label: "线下服务",
        },
      ];
    },
    handleViewProfile(coachId) {
      console.log("查看唤醒师主页:", coachId);
      // TODO: 跳转到唤醒师详情页
      this.$router.push(`/ouyang`);
    },
  },
};
</script>
