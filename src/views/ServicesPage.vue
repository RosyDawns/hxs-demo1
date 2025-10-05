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
              class="w-full bg-gray-100 rounded-full pl-10 pr-24 py-1 focus:outline-none text-sm border "
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
        <div class="flex items-center justify-between">
          <div class="flex pt-3">
            <button
              class="tab-button px-5 py-2 mr-2 text-center font-medium text-sm text-primary border-b-2 border-primary"
            >
              动态
            </button>
            <button
              class="tab-button px-5 py-2 mr-2 text-center font-medium text-sm"
              @click="$router.push('/store')"
            >
              橱窗
            </button>
            <button
              class="tab-button px-5 py-2 mr-2 text-center font-medium text-sm"
              @click="$router.push('/services')"
            >
              推荐服务
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
      coaches: [
        {
          id: "001",
          name: "赵教练",
          title: "国家一级运动员",
          qualification: "10年教学经验",
          image: "https://picsum.photos/id/64/200/200",
          rating: 4.9,
          distance: "1.5",
          prices: {
            trial: 48,
            single: 228,
            tenPack: 1880,
          },
        },
        {
          id: "002",
          name: "张教练",
          title: "国家二级运动员",
          qualification: "6年教学经验",
          image: "https://picsum.photos/id/91/200/200",
          rating: 4.6,
          distance: "1.8",
          prices: {
            trial: 28,
            single: 160,
            tenPack: 1280,
          },
        },
      ],
    };
  },
  methods: {
    handleViewProfile(coachId) {
      // 处理查看教练主页的逻辑
      console.log(`查看教练ID: ${coachId}的主页`);
      // 可以跳转到教练主页
    },
  },
  setup() {
    return {
      BgImage,
    };
  },
};
</script>
