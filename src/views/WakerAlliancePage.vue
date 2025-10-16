<template>
  <div
    class="page min-h-screen"
    id="page-waker-alliance"
    style="background-color: #f6f6f6"
  >
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 h-14 bg-white z-50">
      <div class="flex items-center justify-between p-3">
        <button class="nav-action" @click="$router.back()">
          <i class="fa fa-arrow-left text-xl text-black"></i>
        </button>
        <h1 class="text-lg font-medium text-black pr-10">唤醒联盟</h1>
        <div class="flex items-center space-x-3">
          <!-- <div class="flex items-center text-sm">
            <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
            <span class="font-medium">4.9</span>
          </div>
          <button
            class="w-8 h-8 rounded-full bg-black flex items-center justify-center nav-action"
          >
            <div class="w-2 h-2 rounded-full bg-white"></div>
          </button> -->
        </div>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="pt-14 pb-10">
      <!-- 搜索栏 -->
      <div class="bg-white px-3 py-3">
        <div class="flex items-center space-x-2">
          <div class="flex-1 relative">
            <input
              type="text"
              v-model="searchInput"
              placeholder="搜索商品标题/ID/链接"
              class="w-full bg-gray-50 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none"
            />
            <i
              class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            ></i>

            <button
              class="absolute right-1 px-5 bg-orange-500 text-white text-sm rounded-full nav-action"
              @click="handleSearch"
              style="height: calc(100% - 6px); top: 3px"
            >
              搜索
            </button>
          </div>
        </div>
      </div>

      <!-- 统计卡片 -->
      <div
        class="mx-3 mt-3 rounded-2xl p-4"
        style="
          background-image: linear-gradient(
            to right,
            #fff 0%,
            #fff 60%,
            #fbe4d8 100%
          );
        "
      >
        <div class="flex items-center">
          <div
            class="flex items-center space-x-4 mb-4 p-1 text-sm bg-gray-100 rounded-md"
          >
            <button
              :class="[
                'px-3 py-1  rounded-md',
                selectedPeriod === 'today'
                  ? 'bg-white text-primary'
                  : 'text-gray-600',
              ]"
              @click="selectedPeriod = 'today'"
            >
              今日收益
            </button>
            <button
              :class="[
                'px-3 py-1  rounded-md',
                selectedPeriod === 'yesterday'
                  ? 'bg-white text-primary'
                  : 'text-gray-600',
              ]"
              @click="selectedPeriod = 'yesterday'"
            >
              昨日
            </button>
            <button
              :class="[
                'px-3 py-1  rounded-md',
                selectedPeriod === 'week'
                  ? 'bg-white text-primary'
                  : 'text-gray-600',
              ]"
              @click="selectedPeriod = 'week'"
            >
              7日
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1">
            <div class="flex items-baseline">
              <span class="text-xs text-gray-600 mr-1">GMV ></span>
            </div>
            <div class="text-2xl font-bold text-black mt-1">
              {{ stats[selectedPeriod].gmv }}
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex items-baseline">
              <span class="text-xs text-gray-600 mr-1">总订单数 ></span>
            </div>
            <div class="text-2xl font-bold text-black mt-1">
              {{ stats[selectedPeriod].orders }}
              <span class="text-sm text-gray-500"
                >昨日此时{{ stats[selectedPeriod].ordersYesterday }}</span
              >
            </div>
          </div>
          <div class="col-span-1">
            <div class="text-xs text-gray-500">
              昨日此时<span class="text-orange-500">
                {{ stats[selectedPeriod].gmvYesterday }}
              </span>
            </div>
            <div class="text-xs text-gray-500 mt-3">
              环比<span
                :class="
                  stats[selectedPeriod].gmvGrowth >= 0
                    ? 'text-red-500'
                    : 'text-green-500'
                "
              >
                {{ stats[selectedPeriod].gmvGrowth > 0 ? "+" : "" }}
                {{ stats[selectedPeriod].gmvGrowth }}%
              </span>
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex items-baseline">
              <span class="text-xs text-gray-600 mr-1">预估佣金 ></span>
            </div>
            <div class="text-2xl font-bold text-black mt-1">
              {{ stats[selectedPeriod].commission }}
              <span class="text-sm text-gray-500 ml-2"
                >昨日此时{{ stats[selectedPeriod].commissionYesterday }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 星推官推荐 -->
      <div class="mt-4 px-3">
        <h2 class="text-base font-bold text-black mb-3">星推官推荐</h2>

        <!-- 分类标签 -->
        <div class="flex space-x-2 mb-3 overflow-x-auto scrollbar-hide">
          <button
            v-for="category in categories"
            :key="category.id"
            :class="[
              'px-4 py-1 rounded-md text-sm whitespace-nowrap',
              selectedCategory === category.id
                ? ' bg-orange-100 text-orange-500 border border-orange-500'
                : 'bg-white text-gray-600 border border-gray-200',
            ]"
            @click="selectedCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- 商品列表 -->
        <div class="space-y-3">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white rounded-2xl overflow-hidden shadow-sm"
          >
            <div class="flex p-3">
              <!-- 商品图片 -->
              <div
                class="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden"
              >
                <img
                  :src="product.image"
                  :alt="product.title"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute bottom-0 left-0 right-0 bg-orange-500 text-white text-center py-1"
                >
                  <div class="text-xs font-medium">
                    低至{{ product.minPrice }}元/节
                  </div>
                </div>
              </div>

              <!-- 商品信息 -->
              <div class="flex-1 ml-3 flex flex-col justify-between">
                <!-- 标题和价格信息 -->
                <div>
                  <h3 class="text-sm font-medium text-black line-clamp-2 mb-2">
                    {{ product.title }}
                  </h3>

                  <!-- 教练信息 -->
                  <div class="flex items-center mb-1 mt-2">
                    <img
                      :src="product.coach.avatar"
                      class="w-5 h-5 rounded-full object-cover"
                    />
                    <span class="text-xs text-gray-600 ml-1">
                      {{ product.coach.name }}
                    </span>
                    <span
                      class="text-xs text-gray-400 ml-2 px-2 py-0.5 bg-gray-50 rounded-full"
                    >
                      {{ product.coach.type }}
                    </span>
                    <span
                      class="text-xs text-gray-400 ml-2 px-2 py-0.5 bg-gray-50 rounded-full"
                    >
                      {{ product.coach.service }}
                    </span>
                  </div>
                </div>

                <!-- 价格和按钮 -->
                <div class="mt-2">
                  <div class="flex items-baseline mb-1">
                    <span class="text-base font-bold text-black">
                      ￥{{ product.price }}
                    </span>
                    <span class="text-xs text-gray-400 ml-2">
                      昨日售 {{ product.sales }}
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div
                      class="flex items-center space-x-2 pr-2 border border-orange-500 rounded-sm overflow-hidden"
                    >
                      <span
                        class="bg-orange-500 text-white px-1 py-0.5"
                        style="font-size: 10px"
                      >
                        唤醒高佣 {{ product.commission }}%
                      </span>
                      <span
                        class="text-orange-500 font-medium"
                        style="font-size: 10px"
                      >
                        赚￥{{ product.earn }}
                      </span>
                    </div>
                    <button
                      class="px-3 py-0.5 border border-orange-500 text-orange-500 rounded-full nav-action"
                      @click="handleAddToShowcase(product.id)"
                      style="font-size: 10px"
                    >
                      加橱窗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部导航 -->
    <!-- <FooterNav activePage="me" /> -->
  </div>
</template>

<script>
import FooterNav from "@/components/FooterNav.vue";
import img1 from "@/assets/images/img-1.jpg";
import img2 from "@/assets/images/img-2.jpg";
import img3 from "@/assets/images/img-3.jpg";
import img4 from "@/assets/images/img-4.jpg";
import img5 from "@/assets/images/img-5.jpg";
import img6 from "@/assets/images/img-6.jpg";

export default {
  name: "WakerAlliancePage",
  components: {
    FooterNav,
  },
  data() {
    return {
      searchInput: "",
      selectedPeriod: "today",
      selectedCategory: "recommend",

      // 统计数据
      stats: {
        today: {
          gmv: "0.00",
          gmvYesterday: "0.00",
          gmvGrowth: 0,
          orders: 0,
          ordersYesterday: 0,
          commission: "0.00",
          commissionYesterday: "0.00",
        },
        yesterday: {
          gmv: "0.00",
          gmvYesterday: "0.00",
          gmvGrowth: 0,
          orders: 0,
          ordersYesterday: 0,
          commission: "0.00",
          commissionYesterday: "0.00",
        },
        week: {
          gmv: "0.00",
          gmvYesterday: "0.00",
          gmvGrowth: 0,
          orders: 0,
          ordersYesterday: 0,
          commission: "0.00",
          commissionYesterday: "0.00",
        },
      },

      // 分类标签
      categories: [
        { id: "recommend", name: "推荐" },
        { id: "hot", name: "热销榜" },
        { id: "potential", name: "潜力榜" },
        { id: "popular", name: "人气榜" },
        { id: "high-commission", name: "高佣榜" },
      ],

      // 商品列表
      products: [
        {
          id: 1,
          title: "[10次卡]1对1游泳零基础蛙泳/自由泳",
          image: img1,
          minPrice: 168,
          price: 1680,
          sales: "1.5~3W",
          commission: 20.0,
          earn: 336,
          coach: {
            name: "李教练",
            avatar: img4,
            type: "主理人",
            service: "到店服务",
          },
          categories: ["recommend", "hot", "popular"],
        },
        {
          id: 2,
          title: "[10次卡]1对1游泳零基础仰泳/自由泳",
          image: img2,
          minPrice: 188,
          price: 1880,
          sales: "1.1~2.8W",
          commission: 25.0,
          earn: 470,
          coach: {
            name: "赵教练",
            avatar: img5,
            type: "技能派",
            service: "上门服务",
          },
          categories: ["recommend", "high-commission", "potential"],
        },
        {
          id: 3,
          title: "[10次卡]1对1游泳零基础蛙泳/自由泳",
          image: img3,
          minPrice: 128,
          price: 1280,
          sales: "1.2~2.6W",
          commission: 30.0,
          earn: 384,
          coach: {
            name: "张教练",
            avatar: img6,
            type: "技能派",
            service: "上门服务",
          },
          categories: ["recommend", "high-commission", "hot"],
        },
        {
          id: 4,
          title: "[5次卡]1对1瑜伽私教课程",
          image: img4,
          minPrice: 176,
          price: 880,
          sales: "0.8~1.5W",
          commission: 18.0,
          earn: 158,
          coach: {
            name: "王老师",
            avatar: img1,
            type: "技能派",
            service: "上门服务",
          },
          categories: ["hot", "popular", "potential"],
        },
        {
          id: 5,
          title: "[10次卡]1对1健身私教课程",
          image: img5,
          minPrice: 220,
          price: 2200,
          sales: "2.0~4.5W",
          commission: 22.0,
          earn: 484,
          coach: {
            name: "刘教练",
            avatar: img2,
            type: "主理人",
            service: "到店服务",
          },
          categories: ["popular", "hot", "high-commission"],
        },
        {
          id: 6,
          title: "[8次卡]1对1普拉提私教课程",
          image: img6,
          minPrice: 197,
          price: 1580,
          sales: "0.5~1.2W",
          commission: 28.0,
          earn: 442,
          coach: {
            name: "陈教练",
            avatar: img3,
            type: "技能派",
            service: "上门服务",
          },
          categories: ["potential", "high-commission"],
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory === "recommend") {
        return this.products;
      }
      return this.products.filter((p) =>
        p.categories.includes(this.selectedCategory)
      );
    },
  },
  methods: {
    handleSearch() {
      console.log("搜索:", this.searchInput);
    },
    handleAddToShowcase(productId) {
      console.log("添加到橱窗:", productId);
      alert("已添加到橱窗");
    },
  },
};
</script>

<style scoped>
.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
