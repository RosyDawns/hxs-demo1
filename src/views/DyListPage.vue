<template>
  <div class="page pt-12" id="page-teacher-list">
    <!-- 顶部导航 -->
    <CommonHeader arrowColor="#000" bgColor="#fff" class="border-b border-gray-100">
      <template #center>
        <div class="w-full">
          <div class="flex-1 flex items-center justify-around">
            <button class="text-lg px-1" @click="topTab = 'discover'">
              <div class="flex items-center" :class="{ 'text-primary': topTab === 'discover' }">
                发现<i class="fa-solid fa-right-left ml-0.5" style="font-size: 10px"></i>
              </div>
            </button>
            <button class="text-lg mx-2 px-1" @click="topTab = 'city'">
              <span :class="{ 'text-primary': topTab === 'city' }">上海</span>
            </button>
            <button class="text-lg px-1" @click="topTab = 'follow'">
              <span :class="{ 'text-primary': topTab === 'follow' }">关注</span>
            </button>
          </div>
        </div>
      </template>
      <template #left>
        <button @click="router.go(-1)" class="text-black">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
      </template>
    </CommonHeader>


    <!-- 内容区域 -->
    <div class="mt-4">
      <div class="grid gap-3 px-3 pb-3 pt-1 grid-cols-2">
        <DynamicListItem v-for="item in dynamicItems" :key="item.id" :item="item" @click="handleDynamicClick" />
      </div>
    </div>
    <!-- 底部导航 -->
    <FooterNav :activePage="activePage" />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import router from "@/router";
import FooterNav from "../components/FooterNav.vue";
import CommonHeader from "../components/CommonHeader.vue";
import DynamicListItem from "../components/DynamicListItem.vue";

// 导入本地图片资源
import user1 from "@images/user_1.png";
import user2 from "@images/user_2.png";
import user3 from "@images/user_3.png";
import user4 from "@images/user_4.jpg";
import img1 from "@images/img-12.jpg";
import img2 from "/src/assets/images/img-23.jpg";
import img3 from "@images/img-5.jpg";
import img4 from "@images/img_40.jpg";

export default {
  name: "DyListPage",
  components: {
    FooterNav,
    CommonHeader,
    DynamicListItem,
  },
  setup() {
    // 顶部标签页（发现/上海/关注）
    const topTab = ref("discover");

    // 底部导航活动页面
    const activePage = ref("teachers");

    // 发现页动态数据
    const discoverItems = [
      {
        id: 1,
        title: "好喜欢学员给我拍的工作照...",
        image: img1,
        author: "Boram",
        avatar: user1,
        likes: "赞",
      },
      {
        id: 2,
        title: "吃的干净真的会瘦呢！分享减脂餐",
        image: img2,
        author: "番薯小卷卷",
        avatar: user2,
        likes: "赞",
      },
      {
        id: 3,
        title: "40+保持'逆龄'好身材的秘诀！！",
        image: img3,
        author: "辣妈私教小南哥",
        avatar: user3,
        likes: "赞",
      },
      {
        id: 4,
        title: "咖啡课堂拉花原理解析 做好这两点...",
        image: img4,
        author: "捉你学咖啡的Joy",
        avatar: user4,
        likes: "赞",
      },
    ];

    // 上海（城市）动态数据
    const cityItems = [
      {
        id: 5,
        title: "上海外滩夜景太美了！",
        image: img3,
        author: "上海小资",
        avatar: user2,
        likes: "赞",
      },
      {
        id: 6,
        title: "魔都最新网红咖啡店打卡",
        image: img4,
        author: "探店达人",
        avatar: user3,
        likes: "赞",
      },
      {
        id: 7,
        title: "上海迪士尼周末游玩攻略",
        image: img1,
        author: "旅行家小王",
        avatar: user4,
        likes: "赞",
      },
      {
        id: 8,
        title: "静安寺附近的健身房推荐",
        image: img2,
        author: "健身教练Lisa",
        avatar: user1,
        likes: "赞",
      },
    ];

    // 关注页动态数据
    const followItems = [
      {
        id: 9,
        title: "今天的瑜伽课圆满结束，感谢学员们！",
        image: img2,
        author: "周教练",
        avatar: user1,
        likes: "赞",
      },
      {
        id: 10,
        title: "新到一批精品咖啡豆，欢迎来品尝！",
        image: img4,
        author: "吴老师",
        avatar: user2,
        likes: "赞",
      },
      {
        id: 11,
        title: "分享一下最近的健身成果",
        image: img3,
        author: "辣妈私教小南哥",
        avatar: user3,
        likes: "赞",
      },
      {
        id: 12,
        title: "今日拉花作品分享",
        image: img1,
        author: "捉你学咖啡的Joy",
        avatar: user4,
        likes: "赞",
      },
    ];

    // 根据 topTab 计算当前显示的动态列表
    const dynamicItems = computed(() => {
      switch (topTab.value) {
        case "city":
          return cityItems;
        case "follow":
          return followItems;
        case "discover":
        default:
          return discoverItems;
      }
    });

    const handleDynamicClick = (dynamicId) => {
      router.push(`/dynamic-detail/${dynamicId}`);
    };

    return {
      topTab,
      dynamicItems,
      handleDynamicClick,
      activePage,
      router,
    };
  },
};
</script>

<style lang="less" scoped>
#page-teacher-list {
  height: 100vh;
  overflow-y: auto;
}

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
