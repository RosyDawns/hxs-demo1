<template>
  <div class="page" id="page-index">
    <!-- 顶部导航栏 -->
    <header
      class="fixed w-full top-0 z-50 p-3 flex items-center justify-between"
    >
      <div class="flex items-center text-white">
        <div class="text-lg font-medium">上海</div>
        <i class="fa fa-angle-down ml-1"></i>
      </div>
      <div class="relative flex-1 max-w-[60%] mx-3">
        <input
          type="text"
          placeholder="头疗"
          class="w-full bg-gray-100 rounded-full pl-10 pr-4 py-2 focus:outline-none text-sm border"
        />
        <i
          class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"
        ></i>
      </div>
      <div class="flex items-center">
        <button
          class="bg-primary text-white text-xs py-1.5 px-3 rounded-full mr-2 nav-action"
          @click="$router.push('/matching')"
        >
          一键匹配
        </button>
        <button
          class="relative nav-action text-gray-700"
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
    <div class="p-3 -mt-[80px]">
      <div class="relative overflow-hidden rounded-xl mb-3 z-5 bg-white p-3">
        <div class="grid grid-cols-3 gap-3">
          <div
            class="bg-white text-black shadow flex flex-col items-center justify-center rounded-xl nav-action cursor-pointer overflow-hidden"
            @click="$router.push('/teacher-list')"
          >
            <img src="@images/user_1.png" class="w-full object-contain" />
            <div class="text-xl py-1">主理人频道</div>
          </div>
          <div
            class="bg-white text-black shadow flex flex-col items-center justify-center rounded-xl nav-action cursor-pointer overflow-hidden"
            @click="$router.push('/teacher-list')"
          >
            <img src="@images/user_2.png" class="w-full object-contain" />
            <div class="text-xl py-1">技能唤醒狮</div>
          </div>
          <div
            class="bg-white text-black shadow flex flex-col items-center justify-center rounded-xl nav-action cursor-pointer overflow-hidden"
            @click="$router.push('/partners')"
          >
            <img src="@images/user_3.png" class="w-full object-contain" />
            <div class="text-xl py-1">搭子唤醒狮</div>
          </div>
        </div>
      </div>

      <!-- 快捷入口 -->
      <div class="grid grid-cols-4 gap-2">
        <div
          class="bg-white rounded-lg p-3 card-shadow nav-action cursor-pointer"
          @click="$router.push('/ranking')"
        >
          <div class="font-bold text-sm text-black">城市大神</div>
          <div class="font-medium text-xs text-gray">老狮榜单</div>
          <div class="flex justify-end mt-1" style="color: orange">
            <i class="fa-solid fa-map-location-dot"></i>
          </div>
        </div>
        <div
          class="bg-white rounded-lg p-3 card-shadow nav-action cursor-pointer"
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
          class="bg-white rounded-lg p-3 card-shadow relative nav-action cursor-pointer col-span-2"
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
        class="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray nav-action text-primary border-b-2 border-primary"
      >
        关注
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray nav-action"
      >
        推荐
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray nav-action"
      >
        附近
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray nav-action"
      >
        运动
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray nav-action"
      >
        玩乐
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray nav-action"
      >
        户外
      </button>
      <button
        class="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray nav-action"
      >
        按摩
      </button>
    </div>

    <!-- 内容列表 -->
    <div class="grid grid-cols-2 gap-2 p-3">
      <!-- 内容项1 -->
      <div
        class="bg-white rounded-lg overflow-hidden card-shadow nav-action cursor-pointer"
        @click="$router.push('/ouyang')"
      >
        <img
          src="@images/img_39.jpg"
          alt="美食图片"
          class="w-full h-40 object-cover"
        />
        <div class="p-2">
          <p class="text-sm">专业力量训练，器材齐全环境超棒的</p>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center">
              <img
                src="@images/img-44.jpg"
                alt="用户头像"
                class="w-6 h-6 rounded-full"
              />
              <span class="text-xs text-gray ml-1">小乖狼</span>
            </div>
            <button class="text-gray">
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- 内容项2 -->
      <div
        class="bg-white rounded-lg overflow-hidden card-shadow nav-action cursor-pointer"
        @click="$router.push('/ouyang')"
      >
        <img
          src="@images/img_40.jpg"
          alt="美食图片"
          class="w-full h-40 object-cover"
        />
        <div class="p-2">
          <p class="text-sm">高蛋白低脂餐单推荐，帮你高效增肌减脂</p>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center">
              <img
                src="@images/img-44.jpg"
                alt="用户头像"
                class="w-6 h-6 rounded-full"
              />
              <span class="text-xs text-gray ml-1">黛嘻</span>
            </div>
            <button class="text-gray">
              <i class="fa-solid fa-heart"></i>
              <span class="text-xs text-gray ml-1">36</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 内容项3 -->
      <div
        class="bg-white rounded-lg overflow-hidden card-shadow nav-action cursor-pointer"
        @click="$router.push('/ouyang')"
      >
        <img
          src="@images/img_41.jpg"
          alt="运动图片"
          class="w-full h-40 object-cover"
        />
        <div class="p-2">
          <div
            class="bg-blue-500/10 text-blue-500 text-xs px-1.5 py-0.5 rounded inline-block mb-1"
          >
            运动
          </div>
          <p class="text-sm">今天天气不错，约了朋友一起来打球，状态很好</p>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center">
              <img
                src="@images/img-44.jpg"
                alt="用户头像"
                class="w-6 h-6 rounded-full"
              />
              <span class="text-xs text-gray ml-1">阿峰</span>
            </div>
            <button class="text-gray">
              <i class="fa-solid fa-heart"></i>
              <span class="text-xs text-gray ml-1">12</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 内容项4 -->
      <div
        class="bg-white rounded-lg overflow-hidden card-shadow nav-action cursor-pointer"
        @click="$router.push('/ouyang')"
      >
        <img
          src="@images/img_42.jpg"
          alt="户外图片"
          class="w-full h-40 object-cover"
        />
        <div class="p-2">
          <div
            class="bg-green-500/10 text-green-500 text-xs px-1.5 py-0.5 rounded inline-block mb-1"
          >
            户外
          </div>
          <p class="text-sm">周末爬山，看到这么美的风景，值得了</p>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center">
              <img
                src="@images/img-44.jpg"
                alt="用户头像"
                class="w-6 h-6 rounded-full"
              />
              <span class="text-xs text-gray ml-1">山野</span>
            </div>
            <button class="text-gray">
              <i class="fa-solid fa-heart"></i>
              <span class="text-xs text-gray ml-1">58</span>
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
import { ref } from "vue";
import FooterNav from "../components/FooterNav.vue";

export default {
  name: "IndexPage",
  components: {
    FooterNav,
  },
};
</script>
