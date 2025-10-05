<template>
  <div class="page" id="page-services">
    <!-- 顶部导航 -->
    <CommonHeader arrowColor="#fff">
      <template #center>
        <div class="relative flex-1 w-fu mx-3">
          <div class="relative">
            <input
              type="text"
              placeholder="搜索橱窗内的商品"
              class="w-full bg-gray-100 rounded-full pl-10 pr-24 py-1 focus:outline-none text-sm border"
            />
            <i
              class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"
            ></i>
          </div>
        </div>
      </template>
      <template #left>
        <button class="text-dark" @click="$router.back()">
          <i class="fa fa-arrow-left text-xl"></i>
        </button>
      </template>
      <template #right>
        <button class="text-white">
          <i class="fa fa-ellipsis-h text-xl"></i>
        </button>
      </template>
    </CommonHeader>

    <div class="pt-14 pb-16 relative">
      <div
        class="absolute w-full h-full left-0 top-0 blur-md"
        style="
          background-position: center top;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        "
        :style="{
          backgroundImage: `url(${BgImage})`,
        }"
      ></div>

      <div class="px-4 py-4 text-white relative z-1">
        <div class="flex items-center mb-5 relative">
          <img
            src="https://picsum.photos/id/1005/120/120"
            alt="李教练"
            class="w-20 h-20 rounded-full border-2 border-white"
          />
          <div class="ml-4">
            <div class="text-xl font-bold">李教练的星推官橱窗</div>
            <p class="text-xs mt-3">
              <span class="text-white mr-1">2.1万</span>
              <span class="text-gray mr-1">粉丝</span>
              <span class="text-white mr-1">10.3w</span>
              <span class="text-gray">获赞与收藏</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="relative bg-white z-10 -mt-[70px] rounded-l-4xl rounded-r-4xl overflow-hidden"
    >
      <!-- 内容标签栏 -->
      <div class="mb-3">
        <div class="flex items-center justify-between pl-1 pt-3">
          <div class="flex">
            <button
              class="tab-button  px-2 py-2 mr-0.5 text-center font-medium text-sm"
              :class="{ 'text-primary border-b-2 border-primary': sortBy === 'recommend' }"
              @click="sortCoaches('recommend')"
            >
              推荐
            </button>
            <button
              class="tab-button  px-2 py-2 mr-0.5 text-center font-medium text-sm"
              :class="{ 'text-primary border-b-2 border-primary': sortBy === 'distance' }"
              @click="sortCoaches('distance')"
            >
              距离排序
            </button>
            <button
              class="tab-button  px-2 py-2 mr-0.5 text-center font-medium text-sm"
              :class="{ 'text-primary border-b-2 border-primary': sortBy === 'rating' }"
              @click="sortCoaches('rating')"
            >
              服务分排序
            </button>
          </div>
          <div class="flex items-center">
            <i class="mr-4 fa-solid fa-magnifying-glass text-gray-400"></i>
            <i class="mr-5 fa-solid fa-gift text-gray-400"></i>
          </div>
        </div>
      </div>

      <!-- 服务内容 -->
      <div class="px-4 pb-3 mt-4">
        <div class="space-y-4 mt-3">
          <hxs-item
            v-for="coach in coaches"
            :key="coach.id"
            :coach="coach"
            className="bg-white"
            @view-profile="handleViewProfile"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import HxsItem from "@/components/hxs-item.vue";

import BgImage from "@/assets/images/img_40.jpg";

export default {
  name: "ServicesPage",
  components: {
    CommonHeader,
    HxsItem,
  },
  data() {
    return {
      // 教练列表数据
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
          distance: 1.5,
          image: "https://picsum.photos/id/1012/100/100",
          prices: {
            trial: 80,
            single: 180,
            tenPack: 1580,
          },
        },
      ],
      // 当前排序方式：'recommend', 'distance', 'rating'
      sortBy: 'recommend',
      // 用于展示的数据
      coaches: []
    };
  },
  methods: {
    handleViewProfile(coachId) {
      // 处理查看教练主页的逻辑
      console.log(`查看教练ID: ${coachId}的主页`);
      // 可以跳转到教练主页
      this.$router.push({ path: '/ouyang', params: { id: coachId } });
    },
    
    // 排序教练列表
    sortCoaches(sortType) {
      this.sortBy = sortType;
      
      // 深拷贝原始数据，避免修改原始数据
      const sortedCoaches = JSON.parse(JSON.stringify(this.originalCoaches));
      
      switch(sortType) {
        case 'recommend':
          // 推荐排序（保持原始顺序）
          this.coaches = sortedCoaches;
          break;
        case 'distance':
          // 按距离升序排序
          this.coaches = sortedCoaches.sort((a, b) => a.distance - b.distance);
          break;
        case 'rating':
          // 按评分降序排序
          this.coaches = sortedCoaches.sort((a, b) => b.rating - a.rating);
          break;
      }
    },
  },
  
  // 组件挂载时初始化数据
  mounted() {
    this.sortCoaches('recommend');
  },
  setup() {
    return {
      BgImage,
    };
  },
};
</script>
