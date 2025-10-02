<template>
  <div class="page" id="page-index">
    <!-- 顶部导航栏 -->
    <header
      class="sticky top-0 z-50 bg-white/80 bg-blur border-b border-gray-100 p-3 flex items-center justify-between"
    >
      <div class="flex items-center">
        <div class="text-lg font-medium">上海</div>
        <i class="fa fa-angle-down ml-1 text-gray"></i>
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

    <!-- 核心功能区 -->
    <div class="p-3">
      <div class="relative overflow-hidden rounded-xl mb-3">
        <div class="grid grid-cols-3 gap-2">
          <div
            class="bg-gradient-to-br from-primary to-orange-600 text-white flex flex-col items-center justify-center p-6 rounded-xl nav-action cursor-pointer"
            @click="$router.push('/teacher-list')"
          >
            <div class="text-xl font-bold">主理人频道</div>
          </div>
          <div
            class="bg-gradient-to-br from-primary to-orange-600 text-white flex flex-col items-center justify-center p-6 rounded-xl nav-action cursor-pointer"
            @click="$router.push('/teacher-list')"
          >
            <div class="text-xl font-bold">技能唤醒狮</div>
          </div>
          <div
            class="bg-gradient-to-br from-primary to-orange-600 text-white flex flex-col items-center justify-center p-6 rounded-xl nav-action cursor-pointer"
            @click="$router.push('/partners')"
          >
            <div class="text-xl font-bold">搭子唤醒狮</div>
          </div>
        </div>
      </div>

      <!-- 快捷入口 -->
      <div class="grid grid-cols-4 gap-2 mb-3">
        <div
          class="bg-white rounded-lg p-3 card-shadow nav-action cursor-pointer"
          @click="$router.push('/ranking')"
        >
          <div class="font-medium text-sm">城市大神</div>
          <div class="font-medium text-sm">老狮榜单</div>
          <i class="fa fa-arrow-up text-primary mt-1 text-xs"></i>
        </div>
        <div
          class="bg-white rounded-lg p-3 card-shadow nav-action cursor-pointer"
          @click="$router.push('/camp-register')"
        >
          <div class="font-medium text-sm">免费试</div>
          <div class="font-medium text-sm">试试就试试</div>
          <div class="text-yellow-500 mt-1 text-xs">0元</div>
        </div>
        <div
          class="bg-white rounded-lg p-3 card-shadow relative nav-action cursor-pointer col-span-2"
          @click="$router.push('/camp-detail')"
        >
          <div class="font-medium text-sm">体重唤醒营</div>
          <div class="font-medium text-sm">唤醒瘦 科学瘦 坚持瘦</div>
          <div
            class="absolute top-0 right-0 bg-yellow-500 text-white text-xs py-0.5 px-1 rounded-bl-lg"
          >
            5折
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
          <p class="text-sm">比如紫苏、香茅、沙葱都是地域特色比较明显的</p>
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
          <p class="text-sm">味道确实比以前好吃很多啊，面饼也烤得很好</p>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center">
              <img
                src="https://picsum.photos/id/65/30/30"
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
                src="https://picsum.photos/id/91/30/30"
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
                src="https://picsum.photos/id/25/30/30"
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
