<template>
  <div class="store-tab">
    <!-- 筛选标签栏 -->
    <div class="flex items-center justify-between pb-3">
      <div class="flex">
        <button
          v-for="filter in filters"
          :key="filter.key"
          :class="['filter-btn', { active: sortBy === filter.key }]"
          @click="sortProducts(filter.key)"
        >
          {{ filter.label }}
        </button>
      </div>
      <div class="flex items-center gap-3">
        <i class="fa fa-search text-gray-400 text-sm"></i>
        <i class="fa fa-gift text-gray-400 text-sm"></i>
      </div>
    </div>

    <!-- 商品列表 -->
    <div class="grid grid-cols-2 gap-2 mt-3">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-lg overflow-hidden shadow-sm"
        @click="handleProductClick(product.id)"
      >
        <div class="relative">
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-40 object-cover"
          />
          <div
            v-if="product.isNew"
            class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded"
          >
            新品
          </div>
        </div>
        <div class="p-2">
          <h3 class="text-sm font-medium line-clamp-2 mb-1">
            {{ product.title }}
          </h3>
          <div class="flex items-center justify-between">
            <div class="text-red-500 font-bold text-sm">
              ¥{{ product.price }}
            </div>
            <div class="text-xs text-gray-500">已售 {{ product.sales }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreTab",
  data() {
    return {
      sortBy: "recommend",
      filters: [
        { key: "recommend", label: "综合" },
        { key: "sales", label: "销量" },
        { key: "new", label: "新品" },
        { key: "priceAsc", label: "价格升序" },
        { key: "priceDesc", label: "价格降序" },
      ],
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
          title: "儿童游泳培训课程",
          price: 2880,
          sales: 423,
          image: "https://picsum.photos/id/1068/300/300",
          isNew: true,
        },
        {
          id: "product5",
          title: "成人游泳进阶课程",
          price: 3200,
          sales: 256,
          image: "https://picsum.photos/id/1069/300/300",
          isNew: false,
        },
        {
          id: "product6",
          title: "专业游泳装备套装",
          price: 568,
          sales: 1200,
          image: "https://picsum.photos/id/1070/300/300",
          isNew: false,
        },
      ],
      products: [],
    };
  },
  created() {
    this.products = [...this.originalProducts];
  },
  methods: {
    sortProducts(sortType) {
      this.sortBy = sortType;
      const sorted = [...this.originalProducts];

      switch (sortType) {
        case "sales":
          sorted.sort((a, b) => b.sales - a.sales);
          break;
        case "new":
          sorted.sort((a, b) => b.isNew - a.isNew);
          break;
        case "priceAsc":
          sorted.sort((a, b) => a.price - b.price);
          break;
        case "priceDesc":
          sorted.sort((a, b) => b.price - a.price);
          break;
        default:
          // 综合推荐保持原序
          break;
      }

      this.products = sorted;
    },
    handleProductClick(productId) {
      this.$router.push(`/product-detail/${productId}`);
    },
  },
};
</script>

<style scoped>
.store-tab {
  min-height: 400px;
}

.filter-btn {
  padding: 4px 8px;
  font-size: 13px;
  color: #666;
  transition: all 0.3s;
}

.filter-btn.active {
  color: #1d4ed8;
  border-bottom: 2px solid #1d4ed8;
}
</style>
