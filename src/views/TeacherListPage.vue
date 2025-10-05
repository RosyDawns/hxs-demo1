<template>
  <div class="page" id="page-teacher-list">
    <!-- 顶部导航 -->
    <CommonHeader>
      <template #center>
        <h2 class="font-bold">技能唤醒狮</h2>
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
          羽毛球
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          瑜伽
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          健身
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          游泳
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          舞蹈
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          阅读
        </button>
        <button
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          冥想
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

    <!-- 唤醒狮列表 -->
    <div class="p-3 space-y-3 mb-20">
      <HxsItem
        v-for="(coach, index) in recommendedCoaches"
        :key="index"
        :coach="coach"
        @view-profile="handleCoachDetail"
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
  name: "TeacherListPage",
  components: {
    FooterNav,
    CommonHeader,
    HxsItem,
  },
  setup() {
    // 推荐教练数据
    const recommendedCoaches = ref([
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
          card10: 1680,
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
          card10: 1880,
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
          card10: 1580,
        },
      },
    ]);

    const handleCoachDetail = (coachId) => {
      console.log(`查看教练详情: ${coachId}`);
      router.push(`/ouyang`); // 使用现有的教练详情页路由
    };

    return {
      recommendedCoaches,
      handleCoachDetail,
    };
  },
};
</script>

<style lang="less" scoped>
#page-teacher-list {
  height: 100vh;
  overflow-y: auto;
}
</style>
