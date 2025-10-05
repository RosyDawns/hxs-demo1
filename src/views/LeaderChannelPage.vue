<template>
  <div class="page" id="page-leader-channel">
    <!-- 顶部导航 -->
    <CommonHeader>
      <template #center>
        <h2 class="font-bold">主理人频道</h2>
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
          生活方式
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          职场成长
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          艺术鉴赏
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          创业指导
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          财务管理
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          领导力
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
          价格最低
        </button>
        <button class="py-3 px-4 text-sm font-medium text-gray nav-action">
          评分最高
        </button>
      </div>
    </div>

    <!-- 主理人列表 -->
    <div class="p-3 space-y-3 mb-20">
      <HxsItem
        v-for="(leader, index) in recommendedLeaders"
        :key="index"
        :coach="leader"
        @view-profile="handleLeaderDetail"
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
  name: "LeaderChannelPage",
  components: {
    FooterNav,
    CommonHeader,
    HxsItem,
  },
  setup() {
    // 推荐主理人数据
    const recommendedLeaders = ref([
      {
        id: "leader1",
        name: "王主理",
        type: "生活方式主理人",
        title: "国际认证生活教练 | 5年经验",
        rating: 4.9,
        distance: 2.1,
        image: "https://picsum.photos/id/1025/100/100",
        prices: {
          trial: 128,
          single: 280,
          card10: 2480,
        },
      },
      {
        id: "leader2",
        name: "陈主理",
        type: "职场成长主理人",
        title: "知名企业高管 | 10年管理经验",
        rating: 4.8,
        distance: 3.2,
        image: "https://picsum.photos/id/1074/100/100",
        prices: {
          trial: 158,
          single: 320,
          card10: 2880,
        },
      },
      {
        id: "leader3",
        name: "李主理",
        type: "艺术鉴赏主理人",
        title: "艺术评论家 | 8年鉴赏经验",
        rating: 4.7,
        distance: 1.8,
        image: "https://picsum.photos/id/1062/100/100",
        prices: {
          trial: 138,
          single: 300,
          card10: 2680,
        },
      },
    ]);

    const handleLeaderDetail = (leaderId) => {
      console.log(`查看主理人详情: ${leaderId}`);
      router.push(`/ouyang`); // 使用现有的详情页路由
    };

    return {
      recommendedLeaders,
      handleLeaderDetail,
    };
  },
};
</script>

<style lang="less" scoped>
#page-leader-channel {
  height: 100vh;
  overflow-y: auto;
}
</style>