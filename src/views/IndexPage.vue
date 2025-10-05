<template>
  <div class="page" id="page-index">
    <!-- 顶部导航栏 -->
    <header
      class="fixed w-full top-0 z-50 p-3 flex items-center justify-between transition-all duration-300"
      :style="{ backgroundColor: `rgba(255, 255, 255, ${headerOpacity})` }"
    >
      <div
        class="flex items-center"
        :style="{ color: headerOpacity > 0.5 ? '#000' : '#fff' }"
      >
        <div class="text-lg font-medium">上海</div>
        <i class="fa fa-angle-down ml-1"></i>
      </div>
      <div class="relative flex-1 max-w-[70%] mx-3">
        <div class="relative">
          <input
            type="text"
            placeholder="头疗"
            class="w-full bg-gray-100 rounded-full pl-10 pr-24 py-2 focus:outline-none text-sm border border-orange-400"
          />
          <i
            class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"
          ></i>
          <button
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white text-xs py-1.5 px-3 rounded-full nav-action"
            @click="$router.push('/matching')"
          >
            一键匹配
          </button>
        </div>
      </div>
      <div class="flex items-center">
        <button
          class="relative nav-action"
          :style="{ color: headerOpacity > 0.5 ? '#333' : '#fff' }"
          @click="$router.push('/daily-signin')"
        >
          <i class="fa-solid fa-building-circle-check text-lg"></i>
          <span
            class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px]"
          >
            1
          </span>
        </button>
      </div>
    </header>

    <div class="banner relative">
      <img src="@images/img_39.jpg" class="block w-full relative z-1" />
      <div
        class="slogn absolute top-1/2 -translate-y-1/2 left-[20px] z-10 text-white font-bold font-italic"
      >
        <p class="text-3xl mb-1 text-shadow-2xs">生活唤醒师频道</p>
        <p
          class="pl-2 text-xl border border-solid rounded-full flex items-center justify-between"
        >
          让你的热爱发光
          <span class="bg-amber-50 text-amber-700 rounded-full px-2">GO></span>
        </p>
      </div>
    </div>

    <!-- 核心功能区 -->
    <div class="px-3 pt-3 -mt-[80px]">
      <div
        class="relative overflow-hidden rounded-xl z-5 bg-white px-3 pt-3 pb-5"
      >
        <div class="grid grid-cols-3 gap-3">
          <div
            class="bg-white text-black shadow flex flex-col items-center justify-center rounded-xl nav-action cursor-pointer overflow-hidden"
            @click="$router.push('/leader-channel')"
          >
            <img src="@images/user_1.png" class="w-full object-contain" />
            <div class="text-base py-1">主理人频道</div>
          </div>
          <div
            class="bg-white text-black shadow flex flex-col items-center justify-center rounded-xl nav-action cursor-pointer overflow-hidden"
            @click="$router.push('/teacher-list')"
          >
            <img src="@images/user_2.png" class="w-full object-contain" />
            <div class="text-base py-1">技能唤醒狮</div>
          </div>
          <div
            class="bg-white text-black shadow flex flex-col items-center justify-center rounded-xl nav-action cursor-pointer overflow-hidden"
            @click="$router.push('/buddy-waker')"
            >
            <img src="@images/user_3.png" class="w-full object-contain" />
            <div class="text-base py-1">搭子唤醒狮</div>
          </div>
        </div>
      </div>

      <!-- 快捷入口 -->
      <div class="grid grid-cols-4 gap-2">
        <div
          class="bg-white rounded-lg p-3 shadow nav-action cursor-pointer"
          @click="$router.push('/ranking')"
        >
          <div class="font-bold text-sm text-black">城市大神</div>
          <div class="font-medium text-xs text-gray">老狮榜单</div>
          <div class="flex justify-end mt-1" style="color: orange">
            <i class="fa-solid fa-map-location-dot"></i>
          </div>
        </div>
        <div
          class="bg-white rounded-lg p-3 shadow nav-action cursor-pointer"
          @click="$router.push('/camp-register')"
        >
          <div class="font-bold text-sm text-black">免费试</div>
          <div class="font-medium text-xs text-gray">试试就试试</div>
          <div class="flex justify-end mt-1">
            <div class="bg-yellow-500 text-white text-xs p-0.5 rounded-full">
              0元
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded-lg p-3 shadow relative nav-action cursor-pointer col-span-2"
          @click="$router.push('/camp-detail')"
        >
          <div class="font-bold text-sm text-black">体重管理唤醒营</div>
          <div class="font-medium text-xs text-gray">
            唤醒瘦～科学瘦～坚持瘦
          </div>
          <div class="flex justify-end mt-1" style="color: orange">
            <i class="fa-solid fa-map-location-dot"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- 分类标签栏 -->
    <div class="flex space-x-2 p-3 overflow-x-auto scrollbar-hide">
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
        :class="
          selectedCategory === '关注'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('关注')"
      >
        关注
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
        :class="
          selectedCategory === '推荐'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('推荐')"
      >
        推荐
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
        :class="
          selectedCategory === '附近'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('附近')"
      >
        附近
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
        :class="
          selectedCategory === '运动'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('运动')"
      >
        运动
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
        :class="
          selectedCategory === '玩乐'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('玩乐')"
      >
        玩乐
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
        :class="
          selectedCategory === '户外'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('户外')"
      >
        户外
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
        :class="
          selectedCategory === '按摩'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('按摩')"
      >
        按摩
      </button>
    </div>

    <!-- 内容列表 -->
    <div class="grid grid-cols-2 gap-2 px-3 pb-3 pt-1">
      <div
        v-for="item in contentList"
        :key="item.id"
        class="bg-white rounded-lg overflow-hidden card-shadow nav-action cursor-pointer"
        @click="$router.push('/ouyang')"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-40 object-cover"
        />
        <div class="p-2">
          <div
            v-if="item.category"
            class="bg-blue-500/10 text-blue-500 text-xs px-1.5 py-0.5 rounded inline-block mb-1"
          >
            {{ item.category }}
          </div>
          <p class="text-sm">{{ item.title }}</p>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center">
              <img
                :src="item.user.avatar"
                :alt="item.user.name"
                class="w-6 h-6 rounded-full"
              />
              <span class="text-xs text-gray ml-1">{{ item.user.name }}</span>
            </div>
            <button class="text-gray">
              <i class="fa-solid fa-heart"></i>
              <span v-if="item.likes > 0" class="text-xs text-gray ml-1">{{
                item.likes
              }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <FooterNav activePage="index" />
  </div>
</template>

<script>
import { ref, computed, onUnmounted } from "vue";
import FooterNav from "../components/FooterNav.vue";

// 导入本地图片资源
import img39 from "@images/img_39.jpg";
import img40 from "@images/img_40.jpg";
import img41 from "@images/img_41.jpg";
import img42 from "@images/img_42.jpg";
import user1 from "@images/user_1.png";
import user2 from "@images/user_2.png";
import user3 from "@images/user_3.png";

export default {
  name: "IndexPage",
  components: {
    FooterNav,
  },
  setup() {
    // 当前选中的分类
    const selectedCategory = ref("关注");
    // 头部背景透明度
    const headerOpacity = ref(0);

    // 处理页面滚动事件
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // 计算透明度：滚动距离在0-300px之间时，透明度从0变到1，减慢变色速度
      headerOpacity.value = Math.min(scrollTop / 300, 1);
    };

    // 添加滚动事件监听器
    window.addEventListener("scroll", handleScroll);

    // 组件卸载时移除事件监听器
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    // 模拟不同分类的数据
    // 使用导入的图片变量引用图片
    const categoryData = ref({
      关注: [
        {
          id: 1,
          image: img39,
          title: "专业力量训练，器材齐全环境超棒的",
          user: { name: "小乖狼", avatar: user1 },
          likes: 0,
          category: "",
        },
        {
          id: 2,
          image: img40,
          title: "高蛋白低脂餐单推荐，帮你高效增肌减脂",
          user: { name: "黛嘻", avatar: user2 },
          likes: 36,
          category: "",
        },
        {
          id: 3,
          image: img41,
          title: "今天天气不错，约了朋友一起来打球，状态很好",
          user: { name: "阿峰", avatar: user3 },
          likes: 12,
          category: "运动",
        },
        {
          id: 4,
          image: img42,
          title: "周末爬山，看到这么美的风景，值得了",
          user: { name: "山野", avatar: user1 },
          likes: 58,
          category: "户外",
        },
        {
          id: 5,
          image: img42,
          title: "周末爬山，看到这么美的风景，值得了",
          user: { name: "山野", avatar: user1 },
          likes: 58,
          category: "户外",
        },
      ],
      推荐: [
        {
          id: 5,
          image: img41,
          title: "瑜伽冥想，让身心得到彻底放松",
          user: { name: "静思", avatar: user2 },
          likes: 128,
          category: "运动",
        },
        {
          id: 6,
          image: img42,
          title: "城市周边骑行路线推荐，风景优美路况好",
          user: { name: "追风", avatar: user3 },
          likes: 89,
          category: "户外",
        },
        {
          id: 7,
          image: img39,
          title: "新式按摩手法体验，缓解疲劳效果显著",
          user: { name: "舒适", avatar: user1 },
          likes: 67,
          category: "按摩",
        },
        {
          id: 8,
          image: img40,
          title: "桌游爱好者聚会，认识志同道合的朋友",
          user: { name: "游戏王", avatar: user2 },
          likes: 45,
          category: "玩乐",
        },
      ],
      附近: [
        {
          id: 9,
          image: img39,
          title: "小区附近新开的健身工作室，设施齐全",
          user: { name: "健身达人", avatar: user3 },
          likes: 32,
          category: "运动",
        },
        {
          id: 10,
          image: img40,
          title: "街角咖啡馆的新品推荐，味道很独特",
          user: { name: "咖啡控", avatar: user1 },
          likes: 28,
          category: "玩乐",
        },
        {
          id: 11,
          image: img41,
          title: "城市公园晨跑路线，空气清新环境好",
          user: { name: "晨跑者", avatar: user2 },
          likes: 56,
          category: "户外",
        },
        {
          id: 12,
          image: img42,
          title: "社区按摩店体验，性价比很高",
          user: { name: "放松达人", avatar: user3 },
          likes: 41,
          category: "按摩",
        },
      ],
      运动: [
        {
          id: 13,
          image: img39,
          title: "专业力量训练，器材齐全环境超棒的",
          user: { name: "小乖狼", avatar: user1 },
          likes: 156,
          category: "运动",
        },
        {
          id: 14,
          image: img41,
          title: "今天天气不错，约了朋友一起来打球，状态很好",
          user: { name: "阿峰", avatar: user2 },
          likes: 132,
          category: "运动",
        },
        {
          id: 15,
          image: img40,
          title: "游泳技巧分享，提高你的游泳效率",
          user: { name: "水精灵", avatar: user3 },
          likes: 98,
          category: "运动",
        },
        {
          id: 16,
          image: img42,
          title: "跑步姿势纠正，避免运动伤害",
          user: { name: "跑步教练", avatar: user1 },
          likes: 87,
          category: "运动",
        },
      ],
      玩乐: [
        {
          id: 17,
          image: img40,
          title: "桌游爱好者聚会，认识志同道合的朋友",
          user: { name: "游戏王", avatar: user2 },
          likes: 143,
          category: "玩乐",
        },
        {
          id: 18,
          image: img39,
          title: "KTV新歌推荐，周末嗨起来",
          user: { name: "麦霸", avatar: user3 },
          likes: 121,
          category: "玩乐",
        },
        {
          id: 19,
          image: img41,
          title: "主题密室逃脱体验，烧脑又刺激",
          user: { name: "解谜王", avatar: user1 },
          likes: 96,
          category: "玩乐",
        },
        {
          id: 20,
          image: img42,
          title: "创意手作工坊，制作独一无二的礼物",
          user: { name: "巧手", avatar: user2 },
          likes: 85,
          category: "玩乐",
        },
      ],
      户外: [
        {
          id: 21,
          image: img42,
          title: "周末爬山，看到这么美的风景，值得了",
          user: { name: "山野", avatar: user3 },
          likes: 234,
          category: "户外",
        },
        {
          id: 22,
          image: img41,
          title: "城市周边骑行路线推荐，风景优美路况好",
          user: { name: "追风", avatar: user1 },
          likes: 189,
          category: "户外",
        },
        {
          id: 23,
          image: img40,
          title: "露营装备清单，新手必备",
          user: { name: "露营达人", avatar: user2 },
          likes: 156,
          category: "户外",
        },
        {
          id: 24,
          image: img39,
          title: "钓鱼技巧分享，轻松钓大鱼",
          user: { name: "渔翁", avatar: user3 },
          likes: 123,
          category: "户外",
        },
      ],
      按摩: [
        {
          id: 25,
          image: img39,
          title: "新式按摩手法体验，缓解疲劳效果显著",
          user: { name: "舒适", avatar: user1 },
          likes: 178,
          category: "按摩",
        },
        {
          id: 26,
          image: img40,
          title: "社区按摩店体验，性价比很高",
          user: { name: "放松达人", avatar: user2 },
          likes: 145,
          category: "按摩",
        },
        {
          id: 27,
          image: img41,
          title: "头部按摩手法教学，缓解头痛和压力",
          user: { name: "头疗师", avatar: user3 },
          likes: 123,
          category: "按摩",
        },
        {
          id: 28,
          image: img42,
          title: "精油按摩功效介绍，选择适合自己的精油",
          user: { name: "芳香师", avatar: user1 },
          likes: 98,
          category: "按摩",
        },
      ],
    });

    // 根据当前选中的分类获取对应的内容列表
    const contentList = computed(() => {
      return categoryData.value[selectedCategory.value] || [];
    });

    // 处理分类点击 - 修复页面回弹问题
    const handleCategoryClick = (category) => {
      // 阻止事件冒泡和默认行为
      event.preventDefault();
      event.stopPropagation();

      // 添加一个小延迟，避免页面回弹
      setTimeout(() => {
        selectedCategory.value = category;
        console.log(`切换到${category}分类`);
      }, 50);
    };

    return {
      selectedCategory,
      contentList,
      handleCategoryClick,
      headerOpacity,
    };
  },
};
</script>
