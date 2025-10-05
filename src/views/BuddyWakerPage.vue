<template>
  <div class="page" id="page-buddy-waker">
    <!-- 顶部导航 -->
    <CommonHeader>
      <template #center>
        <h2 class="font-bold">搭子唤醒师</h2>
      </template>
      <template #right>
        <div class="flex-1 flex justify-end">
          <button class="nav-action text-gray" @click="$router.push('/filter')">
            <i class="fa fa-filter"></i>
          </button>
        </div>
      </template>
    </CommonHeader>

    <div class="sticky bg-white z-10" style="top: 50px">
      <!-- 筛选标签 -->
      <div class="p-3 flex space-x-2 overflow-x-auto scrollbar-hide">
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-primary bg-primary/10 rounded-full nav-action"
        >
          全部
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          晨跑搭子
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          健身搭子
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          阅读搭子
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          爬山搭子
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          学习搭子
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          电影搭子
        </button>
      </div>
      <!-- 排序选项 -->
      <div class="flex border-b border-gray-100 px-3">
        <button
          class="py-3 px-4 text-sm font-medium text-primary border-b-2 border-primary nav-action"
        >
          推荐
        </button>
        <button class="py-3 px-4 text-sm font-medium text-gray nav-action">
          距离最近
        </button>
        <button class="py-3 px-4 text-sm font-medium text-gray nav-action">
          活跃度高
        </button>
        <button class="py-3 px-4 text-sm font-medium text-gray nav-action">
          评分最高
        </button>
      </div>
    </div>

    <!-- 搭子唤醒师列表 -->
    <div class="p-3 space-y-3 mb-20">
      <HxsItem
        v-for="(buddy, index) in recommendedBuddies"
        :key="index"
        :coach="buddy"
        @view-profile="handleBuddyDetail"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "@/router";
import FooterNav from "../components/FooterNav.vue";
import CommonHeader from "../components/CommonHeader.vue";
import HxsItem from "../components/hxs-item.vue";
export default {
  name: "BuddyWakerPage",
  components: {
    FooterNav,
    CommonHeader,
    HxsItem,
  },
  setup() {
    // 推荐搭子数据
    const recommendedBuddies = ref([
      {
        id: "buddy1",
        name: "小张",
        type: "晨跑搭子",
        title: "马拉松爱好者 | 5年跑步经验",
        rating: 4.7,
        distance: 1.2,
        image: "https://picsum.photos/id/1066/100/100",
        prices: {
          trial: 0,
          single: 0,
          card10: 0,
        },
      },
      {
        id: "buddy2",
        name: "小王",
        type: "健身搭子",
        title: "健身达人 | 3年健身经验",
        rating: 4.8,
        distance: 2.5,
        image: "https://picsum.photos/id/1027/100/100",
        prices: {
          trial: 0,
          single: 0,
          card10: 0,
        },
      },
      {
        id: "buddy3",
        name: "小李",
        type: "阅读搭子",
        title: "文学爱好者 | 每月阅读10+本书",
        rating: 4.6,
        distance: 1.8,
        image: "https://picsum.photos/id/1062/100/100",
        prices: {
          trial: 0,
          single: 0,
          card10: 0,
        },
      },
    ]);

    const handleBuddyDetail = (buddyId) => {
      console.log(`查看搭子详情: ${buddyId}`);
      router.push(`/ouyang`); // 使用现有的详情页路由
    };

    return {
      recommendedBuddies,
      handleBuddyDetail,
    };
  },
};
</script>

<style lang="less" scoped>
#page-buddy-waker {
  height: 100vh;
  overflow-y: auto;
}
</style>