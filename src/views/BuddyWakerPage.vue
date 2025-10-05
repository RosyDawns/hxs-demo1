<template>
  <div class="page pt-10" id="page-buddy-waker">
    <!-- 顶部导航 -->
    <CommonHeader arrowColor="#000">
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