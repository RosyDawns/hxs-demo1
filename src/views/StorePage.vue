<template>
  <div class="page" id="page-services">
    <!-- 顶部导航 -->
    <CommonHeader arrowColor="#fff">
      <template #center>
        <div class="relative flex-1 w-fu mx-3">
          <div class="relative">
            <input
              type="text"
              placeholder="搜索橱窗内的商品"
              class="w-full bg-gray-100 rounded-full pl-10 pr-24 py-1 focus:outline-none text-sm border"
            />
            <i
              class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"
            ></i>
          </div>
        </div>
      </template>
      <template #left>
        <button class="text-dark" @click="$router.back()">
          <i class="fa fa-arrow-left text-xl"></i>
        </button>
      </template>
      <template #right>
        <button class="text-white">
          <i class="fa fa-ellipsis-h text-xl"></i>
        </button>
      </template>
    </CommonHeader>

    <div class="pt-14 pb-16 relative">
      <div
        class="absolute w-full h-full left-0 top-0 blur-md"
        style="
          background-position: center top;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        "
        :style="{
          backgroundImage: `url(${BgImage})`,
        }"
      ></div>

      <div class="px-4 py-4 text-white relative z-1">
        <div class="flex items-center mb-5 relative">
          <img
            src="https://picsum.photos/id/1005/120/120"
            alt="李教练"
            class="w-20 h-20 rounded-full border-2 border-white"
          />
          <div class="ml-4">
            <div class="text-xl font-bold">李教练的橱窗</div>
            <p class="text-xs mt-3">
              <span class="text-white mr-1">2.1万</span>
              <span class="text-gray mr-1">粉丝</span>
              <span class="text-white mr-1">10.3w</span>
              <span class="text-gray">获赞与收藏</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="relative bg-white z-10 -mt-[70px] rounded-l-4xl rounded-r-4xl overflow-hidden"
    >
      <!-- 内容标签栏 -->
      <div class="mb-3">
        <div class="flex items-center justify-between pl-1 pt-3">
          <div class="flex">
            <button
              class="tab-button px-2 py-2 mr-0.5 text-center font-medium text-sm"
              :class="{
                'text-primary border-b-2 border-primary':
                  sortBy === 'recommend',
              }"
              @click="sortProducts('recommend')"
            >
              综合
            </button>
            <button
              class="tab-button px-2 py-2 mr-0.5 text-center font-medium text-sm"
              :class="{
                'text-primary border-b-2 border-primary': sortBy === 'sales',
              }"
              @click="sortProducts('sales')"
            >
              销量
            </button>
            <button
              class="tab-button px-2 py-2 mr-0.5 text-center font-medium text-sm"
              :class="{
                'text-primary border-b-2 border-primary': sortBy === 'new',
              }"
              @click="sortProducts('new')"
            >
              新品
            </button>
            <button
              class="tab-button px-2 py-2 mr-0.5 text-center font-medium text-sm"
              :class="{
                'text-primary border-b-2 border-primary': sortBy === 'priceAsc',
              }"
              @click="sortProducts('priceAsc')"
            >
              价格升序
            </button>
            <button
              class="tab-button px-2 py-2 mr-0.5 text-center font-medium text-sm"
              :class="{
                'text-primary border-b-2 border-primary':
                  sortBy === 'priceDesc',
              }"
              @click="sortProducts('priceDesc')"
            >
              价格降序
            </button>
          </div>
          <div class="flex items-center">
            <i class="mr-4 fa-solid fa-magnifying-glass text-gray-400"></i>
            <i class="mr-5 fa-solid fa-gift text-gray-400"></i>
          </div>
        </div>
      </div>

      <!-- 商品列表 -->
      <div class="px-4 pb-3 mt-4">
        <div class="grid grid-cols-2 gap-4 mt-3">
          <div 
            v-for="product in products" 
            :key="product.id" 
            class="bg-white rounded-lg overflow-hidden shadow-md"
            @click="handleProductClick(product.id)"
          >
            <div class="relative">
              <img 
                :src="product.image" 
                :alt="product.title"
                class="w-full h-48 object-cover"
              />
              <div v-if="product.isNew" class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                新品
              </div>
            </div>
            <div class="p-2">
              <h3 class="text-sm font-medium line-clamp-2 mb-1">{{ product.title }}</h3>
              <div class="flex items-center">
                <div class="text-red-500 font-bold mr-1">¥{{ product.price }}</div>
                <div class="text-xs text-gray-500">已售 {{ product.sales }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import HxsItem from "@/components/hxs-item.vue";

import BgImage from "@/assets/images/img_40.jpg";

export default {
  name: "ServicesPage",
  components: {
    CommonHeader,
    HxsItem,
  },
  data() {
    return {
      // 商品数据
      originalProducts: [
        {
          id: "product1",
          title: "蛙泳/自由泳（体验卡）",
          price: 38,
          sales: 5680,
          image: "https://picsum.photos/id/1065/300/300",
          isNew: false,
        },
        {
          id: "product2",
          title: "自由泳60分钟（单次卡）",
          price: 200,
          sales: 890,
          image: "https://picsum.photos/id/1066/300/300",
          isNew: true,
        },
        {
          id: "product3",
          title: "蛙泳/自由泳（10次卡）",
          price: 1680,
          sales: 538,
          image: "https://picsum.photos/id/1067/300/300",
          isNew: false,
        },
        {
          id: "product4",
          title: "蛙泳/自由泳（20次卡）",
          price: 2980,
          sales: 136,
          image: "https://picsum.photos/id/1068/300/300",
          isNew: true,
        },
      ],
      // 当前排序方式：'recommend', 'sales', 'new', 'priceAsc', 'priceDesc'
      sortBy: "recommend",
      // 用于展示的数据
      products: [],
    };
  },
  methods: {
    handleProductClick(productId) {
      // 处理点击商品的逻辑
      console.log(`查看商品ID: ${productId}的详情`);
      // 可以跳转到商品详情页
    },

    // 排序商品列表
    sortProducts(sortType) {
      this.sortBy = sortType;

      // 深拷贝原始数据，避免修改原始数据
      const sortedProducts = JSON.parse(JSON.stringify(this.originalProducts));

      switch (sortType) {
        case "recommend":
          // 推荐排序（保持原始顺序）
          this.products = sortedProducts;
          break;
        case "sales":
          // 按销量降序排序
          this.products = sortedProducts.sort((a, b) => b.sales - a.sales);
          break;
        case "new":
          // 新品优先排序
          this.products = sortedProducts.sort((a, b) => {
            if (a.isNew && !b.isNew) return -1;
            if (!a.isNew && b.isNew) return 1;
            return 0;
          });
          break;
        case "priceAsc":
          // 按价格升序排序
          this.products = sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case "priceDesc":
          // 按价格降序排序
          this.products = sortedProducts.sort((a, b) => b.price - a.price);
          break;
      }
    },
  },

  // 组件挂载时初始化数据
  mounted() {
    this.sortProducts("recommend");
  },
  setup() {
    return {
      BgImage,
    };
  },
};
</script>
