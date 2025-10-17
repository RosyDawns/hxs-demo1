<template>
  <div class="page" id="page-index">
    <!-- 顶部导航栏 -->
    <header
      class="fixed w-full top-2 z-50 p-3 flex items-center justify-between transition-all duration-300"
      :style="{ backgroundColor: `rgba(255, 255, 255, ${headerOpacity})` }"
    >
      <div
        class="flex items-center nav-action cursor-pointer"
        :style="{ color: headerOpacity > 0.5 ? '#000' : '#fff' }"
        @click="showCityPicker = true"
      >
        <div class="text-sm font-medium">{{ selectedCity || "上海" }}</div>
        <i class="fa fa-angle-down text-sm ml-0.5"></i>
      </div>
      <div class="relative flex-4 mx-4">
        <div class="relative">
          <div
            class="w-full bg-gray-100 rounded-full pl-10 pr-24 py-3 text-sm border border-orange-400 flex items-center cursor-pointer nav-action"
            @click="$router.push('/search')"
          >
            <span class="text-gray-500 flex-1 text-base">头疗</span>
          </div>
          <i
            class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray pointer-events-none"
          ></i>
          <button
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white py-1.5 px-3 rounded-full nav-action"
            style="font-size: 10px"
            @click="$router.push('/ai-assistant')"
          >
            一键<br />匹配
          </button>
        </div>
      </div>
      <div class="flex items-center flex-1">
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
      </div>
    </header>

    <!-- 省市区选择弹窗 -->
    <div
      v-if="showCityPicker"
      class="fixed inset-0 z-50 flex items-end"
      style="background-color: rgba(255, 255, 255, 0.5)"
    >
      <div
        class="bg-white w-full rounded-t-xl p-4 max-h-[80vh] overflow-y-auto"
      >
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
            <div
              class="px-3 py-1.5 bg-gray-100 rounded-full text-sm flex items-center"
            >
              <i class="fa fa-location-dot mr-1 text-orange-400"></i>
              上海
            </div>
          </div>
        </div>

        <!-- 热门城市 -->
        <div class="mb-4">
          <h4 class="text-sm text-gray-500 mb-2">热门城市</h4>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="city in hotCities"
              :key="city"
              class="px-3 py-1.5 bg-gray-100 rounded-full text-sm"
              @click="selectCity(city)"
            >
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
            <input
              type="text"
              placeholder="请输入省份"
              v-model="provinceInput"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2"
            />
            <div class="max-h-40 overflow-y-auto">
              <div class="flex flex-wrap gap-2">
                <div
                  v-for="province in filteredProvinces"
                  :key="province"
                  class="px-3 py-1.5 bg-gray-100 rounded-full text-sm"
                  @click="selectProvince(province)"
                >
                  {{ province }}
                </div>
              </div>
            </div>
          </div>

          <!-- 城市选择 -->
          <div class="mb-3">
            <div class="text-sm font-medium mb-2">城市</div>
            <input
              type="text"
              placeholder="请输入城市"
              v-model="cityInput"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2"
              :disabled="!selectedProvince"
            />
            <div class="max-h-40 overflow-y-auto">
              <div v-if="selectedProvince" class="flex flex-wrap gap-2">
                <div
                  v-for="city in filteredCities"
                  :key="city"
                  class="px-3 py-1.5 bg-gray-100 rounded-full text-sm"
                  @click="selectCity(city)"
                >
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
      <div
        class="slogn absolute top-1/2 -translate-y-1/2 left-[20px] z-10 text-white font-bold font-italic"
      >
        <p class="text-3xl mb-1 text-shadow-2xs">生活唤醒师频道</p>
        <p
          class="pl-2 text-lg border border-solid rounded-full flex items-center justify-between"
          @click="
            $router.push({ path: '/teacher-list', query: { top: 'city' } })
          "
        >
          同城找人，找靠谱的人！
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
            @click="
              $router.push({
                path: '/teacher-list',
                query: { tab: '主理人', top: 'discover' },
              })
            "
          >
            <!-- @click="$router.push('/leader-channel')" -->
            <img src="@images/user_1.png" class="w-full object-contain" />
            <div class="text-base py-1">主理人频道</div>
          </div>
          <div
            class="bg-white text-black shadow flex flex-col items-center justify-center rounded-xl nav-action cursor-pointer overflow-hidden"
            @click="
              $router.push({
                path: '/teacher-list',
                query: { tab: '生活技能', top: 'discover' },
              })
            "
          >
            <img src="@images/user_2.png" class="w-full object-contain" />
            <div class="text-base py-1">技能唤醒狮</div>
          </div>
          <div
            class="bg-white text-black shadow flex flex-col items-center justify-center rounded-xl nav-action cursor-pointer overflow-hidden"
            @click="
              $router.push({
                path: '/teacher-list',
                query: { tab: '生活搭子', top: 'discover' },
              })
            "
          >
            <!-- @click="$router.push('/buddy-waker')" -->
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
          <div class="font-bold text-sm text-black">城市大师</div>
          <div class="font-medium text-xs text-gray">大师榜单</div>
          <div class="flex justify-end mt-1" style="color: orange">
            <i class="fa-solid fa-map-location-dot"></i>
          </div>
        </div>
        <div
          class="bg-white rounded-lg p-3 shadow nav-action cursor-pointer"
          @click="$router.push('/camp-register')"
        >
          <div class="font-bold text-sm text-black">免费体验</div>
          <div class="font-medium text-xs text-gray">试试就试试</div>
          <div class="flex justify-end mt-1">
            <div class="bg-yellow-500 text-white text-xs p-0.5 rounded-full">
              0元
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded-lg py-3 px-2 shadow relative nav-action cursor-pointer col-span-2"
          @click="$router.push('/weight-management-camp')"
        >
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
      <button
        class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
        :class="
          selectedCategory === '关注'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('关注')"
      >
        关注 <i class="fa-solid fa-right-left" style="font-size: 10px"></i>
      </button>
      <button
        class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
        :class="
          selectedCategory === '推荐'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('推荐')"
      >
        推荐 <i class="fa-solid fa-right-left" style="font-size: 10px"></i>
      </button>
      <button
        class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
        :class="
          selectedCategory === '附近'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('附近')"
      >
        附近 <i class="fa-solid fa-right-left" style="font-size: 10px"></i>
      </button>
      <button
        class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
        :class="
          selectedCategory === '筛选'
            ? 'text-primary border-b-2 border-primary text-orange'
            : 'text-black'
        "
        @click="handleCategoryClick('筛选')"
      >
        筛选 <i class="fa-solid fa-caret-down" style="font-size: 10px"></i>
      </button>
      <button
        class="px-1 py-2 whitespace-nowrap text-sm font-medium nav-action cursor-pointer"
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
    <div class="px-3 pb-3 pt-1">
      <!-- 模式1：列表模式（默认） -->
      <template v-if="viewMode === 'mode1'">
        <div class="grid grid-cols-2 gap-3">
          <CoachListCard
            v-for="coach in coaches"
            :key="coach.id"
            :coach="coach"
            @click="$router.push('/ouyang')"
          />
        </div>
      </template>

      <!-- 模式2：动态卡片模式 -->
      <template v-else>
        <div class="grid grid-cols-2 gap-3">
          <DynamicListItem
            v-for="item in dynamicList"
            :key="item.id"
            :item="item"
            @click="handleDynamicClick"
          />
        </div>
      </template>
    </div>

    <!-- 底部导航 -->
    <FooterNav activePage="index" />
  </div>
</template>

<script>
import { ref, computed, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import FooterNav from "../components/FooterNav.vue";
import CoachListCard from "../components/CoachListCard.vue";
import CoachContentCard from "../components/CoachContentCard.vue";
import DynamicListItem from "../components/DynamicListItem.vue";

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

export default {
  name: "IndexPage",
  components: {
    FooterNav,
    CoachListCard,
    CoachContentCard,
    DynamicListItem,
  },
  setup() {
    const router = useRouter();

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

    // 动态列表数据
    const dynamicList = ref([
      {
        id: 1,
        title: "9月的仪式感, 从纵身跃入泳池开始",
        image: avatr39,
        avatar: avatr1,
        author: "李教练",
        likes: 128,
      },
      {
        id: 2,
        title: "始于兴趣, 终于坚持, 让游泳成为一种习惯",
        image: avatr40,
        avatar: avatr2,
        author: "赵教练",
        likes: 256,
      },
      {
        id: 3,
        title: "健身路上没有捷径，只有坚持和努力",
        image: avatr41,
        avatar: avatr3,
        author: "王教练",
        likes: 203,
      },
      {
        id: 4,
        title: "早起晨跑，迎接美好的一天",
        image: avatr42,
        avatar: avatr4,
        author: "孙教练",
        likes: 95,
      },
    ]);

    // 处理分类点击 - 支持模式切换
    const handleCategoryClick = (category) => {
      // 可切换模式的分类
      const toggleableCategories = ["关注", "推荐", "附近"];

      // 如果点击的是当前已选中的分类，且是可切换分类，则切换模式
      if (
        selectedCategory.value === category &&
        toggleableCategories.includes(category)
      ) {
        // 在两种模式间切换
        viewMode.value = viewMode.value === "mode1" ? "mode2" : "mode1";
        console.log(`切换到${category}分类 - 模式${viewMode.value}`);
      } else {
        // 切换到新分类，重置为模式1
        selectedCategory.value = category;
        if (toggleableCategories.includes(category)) {
          viewMode.value = "mode1";
        }
        console.log(`切换到${category}分类`);
      }
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
      handleCategoryClick,
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
    };
  },
};
</script>
