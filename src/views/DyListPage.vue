<template>
  <div class="page pt-12" id="page-teacher-list">
    <!-- 顶部导航 -->
    <CommonHeader arrowColor="#000" bgColor="#fff" class="border-b border-gray-100">
      <template #center>
        <div class="w-full">
          <div class="flex-1 flex items-center justify-around">
            <button class="text-base px-1" @click="topTab = 'follow'">
              <span :class="{ 'text-primary': topTab === 'follow' }">关注</span>
            </button>
            <button class="text-base px-1" @click="topTab = 'recommend'">
              <span :class="{ 'text-primary': topTab === 'recommend' }">推荐</span>
            </button>
            <button class="text-base px-1" @click="topTab = 'nearby'">
              <span :class="{ 'text-primary': topTab === 'nearby' }">附近</span>
            </button>
            <button class="text-base px-1" @click="topTab = 'city'">
              <span :class="{ 'text-primary': topTab === 'city' }">上海</span>
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

    <div
      class="fixed bottom-18 shadow-md left-1/2 transform -translate-x-1/2 w-12 h-12 text-xs bg-orange-500 z-30 rounded-full flex flex-col items-center justify-center text-white"
      @click="handlePublish"
    >
      <i class="fa-solid fa-paper-plane text-sm"></i>
    </div>

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
    // 顶部标签页（关注/推荐/附近/上海）
    const topTab = ref("follow");

    // 底部导航活动页面
    const activePage = ref("teachers");

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

    // 推荐页动态数据
    const recommendItems = [
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

    // 附近动态数据
    const nearbyItems = [
      {
        id: 13,
        title: "附近新开的健身房体验超棒！",
        image: img1,
        author: "健身达人小李",
        avatar: user2,
        likes: "赞",
      },
      {
        id: 14,
        title: "楼下咖啡店的拿铁真的绝了",
        image: img4,
        author: "咖啡爱好者",
        avatar: user3,
        likes: "赞",
      },
      {
        id: 15,
        title: "小区附近的瑜伽馆环境很好",
        image: img2,
        author: "瑜伽小白",
        avatar: user1,
        likes: "赞",
      },
      {
        id: 16,
        title: "周边美食探店分享",
        image: img3,
        author: "吃货小王",
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

    // 根据 topTab 计算当前显示的动态列表
    const dynamicItems = computed(() => {
      switch (topTab.value) {
        case "follow":
          return followItems;
        case "recommend":
          return recommendItems;
        case "nearby":
          return nearbyItems;
        case "city":
          return cityItems;
        default:
          return followItems;
      }
    });

    const handleDynamicClick = (dynamicId) => {
      router.push(`/dynamic-detail/${dynamicId}`);
    };

    const  handlePublish = () => {
      router.push("/publish-activity");
    }

    return {
      topTab,
      dynamicItems,
      handleDynamicClick,
      activePage,
      router,
      handlePublish
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
