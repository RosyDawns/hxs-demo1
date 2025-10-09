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
          selectedCategory === '筛选'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('筛选')"
      >
        筛选
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
        :class="
          selectedCategory === '直播'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('直播')"
      >
        直播
      </button>
      <button class="ml-auto text-gray">
        <i class="fa-solid fa-search"></i>
      </button>
    </div>

    <!-- 教练列表 -->
    <div class="grid grid-cols-2 gap-3 px-3 pb-3 pt-1">
      <div
        v-for="coach in coaches"
        :key="coach.id"
        class="bg-white rounded-lg overflow-hidden card-shadow nav-action cursor-pointer"
        @click="$router.push('/ouyang')"
      >
        <!-- @click="$router.push('/product-detail/' + coach.id)" -->
        <img
          :src="coach.avatar"
          :alt="coach.name"
          class="w-full h-45 object-cover rounded-lt-full rounded-rt-full"
        />
        <div class="px-2 py-2">
          <div class="flex items-center mb-2">
            <img
              class="w-6 h-6 rounded-full object-cover mr-1"
              :src="coach.pic"
              alt=""
            />
            <span class="text-sm text-black">{{ coach.name }}</span>
          </div>
          <p class="text-xs text-black font-bold mb-1">
            {{ coach.qualification }}
          </p>
          <p class="text-xs text-gray-500 mb-1">擅长: {{ coach.skills }}</p>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <span class="text-xs text-gray-500 mr-1">{{ coach.rating }}</span>
              <div class="flex">
                <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                <i
                  class="fa-solid fa-star-half-stroke text-yellow-400 text-xs"
                ></i>
              </div>
            </div>
            <div
              class="bg-orange-100 text-orange text-xs px-1 py-0.5 rounded-full"
            >
              {{ coach.label }}
            </div>
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
import user1 from "@images/user_1.png";
import user2 from "@images/user_2.png";
import user3 from "@images/user_3.png";
import user4 from "@images/user_4.jpg";
import avatr1 from "@images/img-18.jpg";
import avatr2 from "@images/img-13.jpg";
import avatr3 from "@images/img_39.jpeg";
import avatr4 from "@images/img_38.jpeg";

export default {
  name: "IndexPage",
  components: {
    FooterNav,
  },
  setup() {
    // 当前选中的分类
    const selectedCategory = ref("推荐");
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

    // 教练数据
    const coaches = ref([
      {
        id: 1,
        name: "李1教练",
        avatar: user1,
        qualification: "国家二级游泳运动员",
        skills: "长泳/自由泳",
        rating: 4.8,
        level: "初级教练",
        price: 188,
        label: "到店服务",
        pic: avatr1,
      },
      {
        id: 2,
        name: "赵2教练",
        avatar: user2,
        qualification: "国家一级游泳运动员",
        skills: "仰泳/自由泳",
        rating: 4.9,
        level: "高级教练",
        price: 268,
        label: "上门服务",
        pic: avatr2,
      },
      {
        id: 3,
        name: "王3教练",
        avatar: user3,
        qualification: "游泳健将",
        skills: "蝶泳/混合泳",
        rating: 5.0,
        level: "专业教练",
        price: 388,
        label: "线上服务",
        pic: avatr3,
      },
      {
        id: 4,
        name: "孙4教练",
        avatar: user4,
        qualification: "国家二级游泳运动员",
        skills: "蛙泳/自由泳",
        rating: 4.7,
        level: "初级教练",
        price: 168,
        label: "到店服务",
        pic: avatr4,
      },
    ]);

    // 处理分类点击 - 修复页面回弹问题
    const handleCategoryClick = (category) => {
      // 添加一个小延迟，避免页面回弹
      setTimeout(() => {
        selectedCategory.value = category;
        console.log(`切换到${category}分类`);
      }, 50);
    };

    return {
      selectedCategory,
      coaches,
      handleCategoryClick,
      headerOpacity,
    };
  },
};
</script>
