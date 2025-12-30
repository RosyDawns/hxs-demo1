<template>
  <div class="page" id="page-index">
    <!-- 顶部导航栏 -->
    <header class="fixed w-full top-0 z-50 px-3 py-2 flex items-center justify-between transition-all duration-300"
      :style="{ backgroundColor: `rgba(255, 255, 255, ${headerOpacity})` }">
      <div class="flex items-center nav-action cursor-pointer" :style="{ color: headerOpacity > 0.5 ? '#000' : '#fff' }"
        @click="showCityPicker = true">
        <div class="text-sm font-medium">{{ selectedCity || "上海" }}</div>
        <i class="fa fa-angle-down text-sm ml-0.5"></i>
      </div>
      <div class="relative flex-4 mx-4">
        <div class="relative">
          <div
            class="w-full bg-gray-100 rounded-full pl-10 pr-24 h-10 text-sm border border-orange-400 flex items-center cursor-pointer nav-action"
            @click="$router.push('/search')">
            <span class="text-gray-500 flex-1 text-base">健身计划</span>
          </div>
          <i class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray pointer-events-none"></i>
          <!-- <button
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white h-8 w-8 rounded-full nav-action leading-none"
            style="font-size: 10px"
            @click="$router.push('/ai-assistant')"
          >
            一键<br />匹配
          </button> -->
        </div>
      </div>
      <div class="flex items-center">
        <!-- <button
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
        </button> -->
        <button class="relative font-bold nav-action text-white bg-orange-500 px-3 py-2 rounded-full"
          @click="$router.push('/map-demo')" style="font-size: 10px; margin-right: 0; line-height: 1.1">
          运动生活<br />数字地图
        </button>
      </div>
    </header>

    <!-- 省市区选择弹窗 -->
    <div v-if="showCityPicker" class="fixed inset-0 z-50 flex items-end"
      style="background-color: rgba(255, 255, 255, 0.5)">
      <div class="bg-white w-full rounded-t-xl p-4 max-h-[80vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-bold">选择城市</h3>
          <button @click="showCityPicker = false" class="text-gray-500">
            <i class="fa fa-times text-xl"></i>
          </button>
        </div>

        <!-- 已选城市 -->
        <div class="mb-4">
          <h4 class="text-sm text-gray-500 mb-2">当前定位城市</h4>
          <div class="flex items-center space-x-2">
            <div class="px-3 py-1.5 bg-gray-100 rounded-full text-sm flex items-center">
              <i class="fa fa-location-dot mr-1 text-orange-400"></i>
              上海
            </div>
          </div>
        </div>

        <!-- 热门城市 -->
        <div class="mb-4">
          <h4 class="text-sm text-gray-500 mb-2">热门城市</h4>
          <div class="flex flex-wrap gap-2">
            <div v-for="city in hotCities" :key="city" class="px-3 py-1.5 bg-gray-100 rounded-full text-sm"
              @click="selectCity(city)">
              {{ city }}
            </div>
          </div>
        </div>

        <!-- 省市区选择器 -->
        <div class="mb-4">
          <h4 class="text-sm text-gray-500 mb-2">按地区选择</h4>

          <!-- 省份选择 -->
          <div class="mb-3">
            <div class="text-sm font-medium mb-2">省份</div>
            <input type="text" placeholder="请输入省份" v-model="provinceInput"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2" />
            <div class="max-h-40 overflow-y-auto">
              <div class="flex flex-wrap gap-2">
                <div v-for="province in filteredProvinces" :key="province"
                  class="px-3 py-1.5 bg-gray-100 rounded-full text-sm" @click="selectProvince(province)">
                  {{ province }}
                </div>
              </div>
            </div>
          </div>

          <!-- 城市选择 -->
          <div class="mb-3">
            <div class="text-sm font-medium mb-2">城市</div>
            <input type="text" placeholder="请输入城市" v-model="cityInput"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2" :disabled="!selectedProvince" />
            <div class="max-h-40 overflow-y-auto">
              <div v-if="selectedProvince" class="flex flex-wrap gap-2">
                <div v-for="city in filteredCities" :key="city" class="px-3 py-1.5 bg-gray-100 rounded-full text-sm"
                  @click="selectCity(city)">
                  {{ city }}
                </div>
              </div>
              <div v-else class="text-center text-gray-400 text-sm py-4">
                请先选择省份
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="banner relative">
      <img src="@images/img_39.jpg" class="block w-full relative z-1" />
      <div class="slogn absolute top-1/2 -translate-y-2/3 left-[20px] z-10 text-white font-bold font-italic">
        <p class="text-3xl mb-1 text-shadow-2xs">爱运动，就到唤醒兽</p>
        <p class="pl-2 text-lg border border-solid rounded-full flex items-center justify-between"
          @click="$router.push({ path: '/ai-assistant' })">
          <!-- $router.push({ path: '/service-category', query: { top: 'city' } }) -->
          一键匹配，唤醒热爱
          <span class="bg-amber-50 text-amber-700 rounded-full px-2">GO></span>
        </p>
      </div>
    </div>

    <!-- 核心功能区 -->
    <div class="px-3 pt-3 -mt-[80px]">
      <div class="relative overflow-hidden rounded-xl z-5 bg-white px-3 pt-3 pb-5">
        <div class="grid grid-cols-3 gap-3">
          <div
            class="bg-white text-black shadow flex flex-col items-center justify-center rounded-xl nav-action cursor-pointer overflow-hidden"
            @click="
              $router.push({
                path: '/service-category',
                query: { tab: '主理人', top: 'discover', type: 'main' },
              })
              ">
            <!-- @click="$router.push('/leader-channel')" -->
            <img src="@images/user_1.png" class="w-full object-contain" />
            <div class="text-base py-1">生活主理人</div>
          </div>
          <div
            class="bg-white text-black shadow flex flex-col items-center justify-center rounded-xl nav-action cursor-pointer overflow-hidden"
            @click="
              $router.push({
                path: '/service-category',
                query: { tab: '生活技能', top: 'discover', type: 'main' },
              })
              ">
            <img src="@images/user_2.png" class="w-full object-contain" />
            <div class="text-base py-1">技能唤醒师</div>
          </div>
          <div
            class="bg-white text-black shadow flex flex-col items-center justify-center rounded-xl nav-action cursor-pointer overflow-hidden"
            @click="
              $router.push({
                path: '/service-category',
                query: { tab: '生活搭子', top: 'discover', type: 'main' },
              })
              ">
            <!-- @click="$router.push('/buddy-waker')" -->
            <img src="@images/user_3.png" class="w-full object-contain" />
            <div class="text-base py-1">同城好搭子</div>
          </div>
        </div>
      </div>

      <!-- 快捷入口 -->
      <div class="grid grid-cols-4 gap-2">
        <div class="bg-white rounded-lg py-2 px-2 shadow nav-action cursor-pointer" @click="$router.push('/ranking')">
          <div class="font-bold text-sm text-black">城市大师</div>
          <div class="font-medium text-xs text-gray">大师榜单</div>
          <div class="flex justify-end mt-1" style="color: orange">
            <i class="fa-solid fa-map-location-dot"></i>
          </div>
        </div>
        <div class="bg-white rounded-lg py-2 px-2 shadow nav-action cursor-pointer"
          @click="$router.push('/camp-register')">
          <div class="font-bold text-sm text-black">免费体验</div>
          <div class="font-medium text-xs text-gray">试试就试试</div>
          <div class="flex justify-end mt-1">
            <div class="bg-yellow-500 text-white text-xs p-0.5 rounded-full">
              0元
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg py-2 px-1 shadow relative nav-action cursor-pointer col-span-2"
          @click="$router.push('/weight-management-camp')">
          <div class="flex items-center">
            <div class="text-primary mr-1">
              <i class="fa-solid fa-volleyball text-2xl"></i>
            </div>
            <div class="flex-1">
              <div class="font-bold text-sm text-black">体重管理唤醒营</div>
              <div class="font-medium text-xs text-gray">
                唤醒瘦 · 科学瘦 · 坚持瘦
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-1" style="color: orange">
            <i class="fa-solid fa-map-location-dot"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- 分类标签栏 -->
    <div class="flex space-x-2 p-3 overflow-x-auto scrollbar-hide">
      <button class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer" :class="selectedCategory === '关注'
        ? 'text-primary border-b-2 border-primary text-orange'
        : 'text-black'
        " @click="selectedCategory = '关注'">
        关注
      </button>
      <button class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer" :class="selectedCategory === '推荐'
        ? 'text-primary border-b-2 border-primary text-orange'
        : 'text-black'
        " @click="selectedCategory = '推荐'">
        推荐
      </button>
      <button class="px-1 py-2 whitespace-nowrap text-sm font-me
      dium nav-action cursor-pointer" :class="selectedCategory === '附近'
        ? 'text-primary border-b-2 border-primary text-orange'
        : 'text-black'
        " @click="selectedCategory = '附近'">
        附近
      </button>
      <button class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer" :class="selectedCategory === '上海'
        ? 'text-primary border-b-2 border-primary text-orange'
        : 'text-black'
        " @click="selectedCategory = '上海'">
        上海
      </button>
      <button
        class="px-3 whitespace-nowrap text-sm font-medium nav-action cursor-pointer bg-orange-500 text-white rounded-full mr-2"
        :class="selectedCategory === '组团去玩'
          ? 'bg-orange-500 text-white'
          : 'bg-orange-500 text-white'" @click="$router.push('/service-category?tab=组团去玩&top=discover&type=main')">
        <!-- @click="$router.push('/group-play')" -->
        组团去玩
      </button>
      <button class="ml-auto text-gray">
        <i class="fa-solid fa-search"></i>
      </button>
    </div>

    <!-- 教练列表 -->
    <WaterfallLayout 
      :items="currentDynamicList" 
      :columnCount="2"
      @click="handleDynamicClick" 
    />
    
    <!-- 加载提示 -->
    <div v-if="loading" class="text-center py-4 text-gray-500">
      <i class="fa-solid fa-spinner fa-spin mr-2"></i>
      加载中...
    </div>
    
    <!-- 没有更多数据提示 -->
    <div v-if="noMore && currentDynamicList.length > 0" class="text-center py-4 text-gray-400 text-sm pb-20">
      没有更多了
    </div>

    <!-- 底部导航 -->
    <FooterNav activePage="index" />
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import FooterNav from "../components/FooterNav.vue";
import CoachListCard from "../components/CoachListCard.vue";
import CoachContentCard from "../components/CoachContentCard.vue";
import WaterfallLayout from "../components/WaterfallLayout.vue";

// 导入本地图片资源
import user1 from "@images/user_1.png";
import user2 from "@images/user_2.png";
import user3 from "@images/user_3.png";
import user4 from "@images/user_4.jpg";
import avatr1 from "@images/img-18.jpg";
import avatr2 from "@images/img-13.jpg";
import avatr3 from "@images/img_39.jpeg";
import avatr4 from "@images/img_38.jpeg";

import avatr39 from "@images/img_39.jpg";
import avatr40 from "@images/img_40.jpg";
import avatr41 from "@images/img_41.jpg";
import avatr42 from "@images/img_42.jpg";

// 导入运动图片（13张）
import sport1 from '@/assets/images/sports/sport1.webp';
import sport2 from '@/assets/images/sports/sport2.webp';
import sport3 from '@/assets/images/sports/sport3.webp';
import sport4 from '@/assets/images/sports/sport4.webp';
import sport5 from '@/assets/images/sports/sport5.webp';
import sport6 from '@/assets/images/sports/sport6.webp';
import sport7 from '@/assets/images/sports/sport7.webp';
import sport8 from '@/assets/images/sports/sport8.webp';
import sport9 from '@/assets/images/sports/sport9.webp';
import sport10 from '@/assets/images/sports/sport10.webp';
import sport11 from '@/assets/images/sports/sport11.webp';
import sport12 from '@/assets/images/sports/sport12.webp';
import sport13 from '@/assets/images/sports/sport13.webp';

export default {
  name: "IndexPage",
  components: {
    FooterNav,
    CoachListCard,
    CoachContentCard,
    WaterfallLayout,
  },
  setup() {
    const router = useRouter();

    // 运动图片和标题数据
    const sportImages = [sport1, sport2, sport3, sport4, sport5, sport6, sport7, sport8, sport9, sport10, sport11, sport12, sport13];
    const avatars = [user1, user2, user3, user4];
    const sportTitles = [
      '晨跑打卡！今天跑了10公里，感觉超棒',
      '瑜伽让我找到内心的平静，每天坚持30分钟',
      '健身房撸铁日常，今天练背，状态很好',
      '篮球场上挥洒汗水，这才是青春该有的样子',
      '游泳是最好的全身运动，坚持就是胜利',
      '骑行穿越城市，感受不一样的风景',
      '早起晨跑，迎接美好的一天，加油！',
      '瑜伽不仅塑形，更能修心养性',
      '力量训练第100天，见证自己的蜕变',
      '篮球让我结识了很多志同道合的朋友',
      '游泳后的放松时刻，身心都得到了释放',
      '周末骑行100公里，挑战自我极限',
      '今天的跑步训练完成，突破了个人最佳',
      '瑜伽课后的拉伸，整个人都轻松了',
      '健身打卡第365天，坚持改变了我',
      '篮球三分球命中率提升了，继续加油',
      '游泳1000米达成，下个目标2000米',
      '骑行去郊外，沿途风景美不胜收'
    ];
    const authors = [
      '跑步达人小李', '瑜伽教练Anna', '健身教练Mike', '篮球少年',
      '游泳健将', '骑行爱好者', '晨跑小队长', '瑜伽爱好者',
      '健身小白变大神', '球场老炮', '水中精灵', '骑行达人'
    ];

    // 滚动加载相关
    const loading = ref(false);
    const noMore = ref(false);
    let currentId = 100; // 从100开始，避免与现有ID冲突

    // 生成随机运动数据
    const generateRandomItems = (count) => {
      const items = [];
      for (let i = 0; i < count; i++) {
        items.push({
          id: currentId++,
          title: sportTitles[Math.floor(Math.random() * sportTitles.length)],
          image: sportImages[Math.floor(Math.random() * sportImages.length)],
          avatar: avatars[Math.floor(Math.random() * avatars.length)],
          author: authors[Math.floor(Math.random() * authors.length)],
          likes: Math.floor(Math.random() * 500) + 50
        });
      }
      return items;
    };

    // 当前选中的分类
    const selectedCategory = ref("推荐");
    // 显示模式：'mode1' 列表模式（默认），'mode2' 内容卡片模式
    const viewMode = ref("mode1");
    // 头部背景透明度
    const headerOpacity = ref(0);
    // 城市选择相关
    const showCityPicker = ref(false);
    const selectedCity = ref("");
    const selectedProvince = ref("");
    const provinceInput = ref("");
    const cityInput = ref("");

    // 热门城市数据
    const hotCities = [
      "上海",
      "北京",
      "广州",
      "深圳",
      "杭州",
      "南京",
      "成都",
      "武汉",
    ];

    // 省份数据
    const provinces = [
      "北京市",
      "上海市",
      "广东省",
      "江苏省",
      "浙江省",
      "四川省",
      "湖北省",
      "湖南省",
      "山东省",
      "河南省",
    ];

    // 城市数据 (按省份分类)
    const citiesByProvince = {
      北京市: ["北京"],
      上海市: ["上海"],
      广东省: ["广州", "深圳", "东莞", "佛山", "珠海", "中山"],
      江苏省: ["南京", "苏州", "无锡", "常州", "扬州", "徐州"],
      浙江省: ["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴"],
      四川省: ["成都", "绵阳", "德阳", "自贡", "泸州", "内江"],
      湖北省: ["武汉", "襄阳", "宜昌", "荆州", "十堰", "黄石"],
      湖南省: ["长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳"],
      山东省: ["济南", "青岛", "烟台", "潍坊", "临沂", "淄博"],
      河南省: ["郑州", "洛阳", "开封", "安阳", "新乡", "焦作"],
    };

    // 过滤后的省份列表
    const filteredProvinces = computed(() => {
      if (!provinceInput.value) return provinces;
      return provinces.filter((province) =>
        province.includes(provinceInput.value)
      );
    });

    // 过滤后的城市列表
    const filteredCities = computed(() => {
      if (!selectedProvince.value) return [];
      const cities = citiesByProvince[selectedProvince.value] || [];
      if (!cityInput.value) return cities;
      return cities.filter((city) => city.includes(cityInput.value));
    });

    // 选择省份
    const selectProvince = (province) => {
      selectedProvince.value = province;
      provinceInput.value = "";
      cityInput.value = "";
    };

    // 选择城市
    const selectCity = (city) => {
      selectedCity.value = city;
      showCityPicker.value = false;
      selectedProvince.value = "";
      provinceInput.value = "";
      cityInput.value = "";
      console.log("选择的城市:", city);
    };

    // 处理页面滚动事件（合并头部透明度和滚动加载）
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // 计算头部透明度
      headerOpacity.value = Math.min(scrollTop / 300, 1);
      
      // 触发滚动加载
      if (scrollTop + windowHeight >= documentHeight - 200) {
        loadMore();
      }
    };

    // 添加滚动事件监听器
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

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
        qualification: "国家一级游泳运动员",
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

    const coaches1 = ref([
      {
        id: 1,
        name: "李1教练",
        avatar: avatr39,
        qualification: "专业力量训练，器材齐全环境超棒的小乖狼1",
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
        avatar: avatr40,
        qualification: "高蛋白低脂餐单推荐，帮你高效增肌减脂黑西",
        skills: "仰泳/自由泳",
        rating: 4.9,
        level: "高级教练",
        price: 268,
        label: "上门服务",
        pic: avatr2,
      },
      {
        id: 3,
        name: "珋3教练",
        avatar: avatr41,
        qualification: "专业力量训练，器材齐全环境超棒的32小乖狼",
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
        avatar: avatr42,
        qualification: "高蛋白低脂餐单推荐，帮你高效增肌减脂12321321黑西",
        skills: "蛙泳/自由泳",
        rating: 4.7,
        level: "初级教练",
        price: 168,
        label: "到店服务",
        pic: avatr4,
      },
    ]);

    // 动态列表数据 - 推荐（使用运动图片）
    const dynamicList = ref([
      {
        id: 1,
        title: "晨跑打卡！今天跑了10公里，感觉超棒",
        image: sport1,
        avatar: user1,
        author: "跑步达人小李",
        likes: 328,
      },
      {
        id: 2,
        title: "瑜伽让我找到内心的平静，每天坚持30分钟",
        image: sport2,
        avatar: user2,
        author: "瑜伽教练Anna",
        likes: 256,
      },
      {
        id: 3,
        title: "健身房撸铁日常，今天练背，状态很好",
        image: sport3,
        avatar: user3,
        author: "健身教练Mike",
        likes: 445,
      },
      {
        id: 4,
        title: "篮球场上挥洒汗水，这才是青春该有的样子",
        image: sport4,
        avatar: user4,
        author: "篮球少年",
        likes: 198,
      },
      {
        id: 5,
        title: "游泳是最好的全身运动，坚持就是胜利",
        image: sport5,
        avatar: user1,
        author: "游泳健将",
        likes: 367,
      },
      {
        id: 6,
        title: "骑行穿越城市，感受不一样的风景",
        image: sport6,
        avatar: user2,
        author: "骑行爱好者",
        likes: 289,
      },
    ]);

    // 关注列表数据（使用运动图片）
    const followList = ref([
      {
        id: 7,
        title: "早起晨跑，迎接美好的一天，加油！",
        image: sport1,
        avatar: user3,
        author: "晨跑小队长",
        likes: 156,
      },
      {
        id: 8,
        title: "瑜伽不仅塑形，更能修心养性",
        image: sport2,
        avatar: user4,
        author: "瑜伽爱好者",
        likes: 234,
      },
      {
        id: 9,
        title: "力量训练第100天，见证自己的蜕变",
        image: sport3,
        avatar: user1,
        author: "健身小白变大神",
        likes: 512,
      },
      {
        id: 10,
        title: "篮球让我结识了很多志同道合的朋友",
        image: sport4,
        avatar: user2,
        author: "球场老炮",
        likes: 178,
      },
    ]);

    // 附近列表数据（使用运动图片）
    const nearbyList = ref([
      {
        id: 11,
        title: "游泳后的放松时刻，身心都得到了释放",
        image: sport5,
        avatar: user3,
        author: "水中精灵",
        likes: 298,
      },
      {
        id: 12,
        title: "周末骑行100公里，挑战自我极限",
        image: sport6,
        avatar: user4,
        author: "骑行达人",
        likes: 423,
      },
      {
        id: 13,
        title: "今天的跑步训练完成，突破了个人最佳",
        image: sport1,
        avatar: user1,
        author: "马拉松跑者",
        likes: 267,
      },
      {
        id: 14,
        title: "瑜伽课后的拉伸，整个人都轻松了",
        image: sport2,
        avatar: user2,
        author: "瑜伽导师",
        likes: 189,
      },
    ]);

    // 上海列表数据（使用运动图片）
    const shanghaiList = ref([
      {
        id: 15,
        title: "健身打卡第365天，坚持改变了我",
        image: sport3,
        avatar: user3,
        author: "力量训练师",
        likes: 445,
      },
      {
        id: 16,
        title: "篮球三分球命中率提升了，继续加油",
        image: sport4,
        avatar: user4,
        author: "篮球教练",
        likes: 312,
      },
      {
        id: 17,
        title: "游泳1000米达成，下个目标2000米",
        image: sport5,
        avatar: user1,
        author: "游泳教练",
        likes: 356,
      },
      {
        id: 18,
        title: "骑行去郊外，沿途风景美不胜收",
        image: sport6,
        avatar: user2,
        author: "骑行俱乐部",
        likes: 278,
      },
    ]);

    // 根据选中的分类返回对应的动态列表
    const currentDynamicList = computed(() => {
      switch (selectedCategory.value) {
        case '关注':
          return followList.value;
        case '推荐':
          return dynamicList.value;
        case '附近':
          return nearbyList.value;
        case '上海':
          return shanghaiList.value;
        default:
          return dynamicList.value;
      }
    });

    // 加载更多数据
    const loadMore = () => {
      if (loading.value || noMore.value) return;
      
      loading.value = true;
      setTimeout(() => {
        const newItems = generateRandomItems(6);
        
        // 根据当前选中的分类添加到对应的列表
        switch (selectedCategory.value) {
          case '关注':
            followList.value.push(...newItems);
            break;
          case '推荐':
            dynamicList.value.push(...newItems);
            break;
          case '附近':
            nearbyList.value.push(...newItems);
            break;
          case '上海':
            shanghaiList.value.push(...newItems);
            break;
        }
        
        loading.value = false;
        
        // 每个列表最多50条
        if (currentDynamicList.value.length >= 50) {
          noMore.value = true;
        }
      }, 800);
    };

    // 处理教练点赞
    const handleCoachLike = (coachId, isLiked) => {
      console.log(`教练 ${coachId} 点赞状态:`, isLiked);
    };

    // 处理动态点击
    const handleDynamicClick = (dynamicId) => {
      router.push(`/dynamic-detail/${dynamicId}`);
    };

    return {
      selectedCategory,
      viewMode,
      coaches,
      coaches1,
      dynamicList,
      followList,
      nearbyList,
      shanghaiList,
      currentDynamicList,
      handleCoachLike,
      handleDynamicClick,
      headerOpacity,
      showCityPicker,
      selectedCity,
      selectedProvince,
      provinceInput,
      cityInput,
      hotCities,
      filteredProvinces,
      filteredCities,
      selectProvince,
      selectCity,
      loading,
      noMore,
    };
  },
};
</script>
