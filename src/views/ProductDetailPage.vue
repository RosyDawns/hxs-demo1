<template>
  <div class="page" id="page-product-detail">
    <!-- 顶部导航 -->
    <CommonHeader arrowColor="#fff">
      <template #center>
        <!-- <h1 class="text-lg text-white font-medium">商品详情</h1> -->
      </template>
      <template #right>
        <div class="flex items-center text-white">
          <div
            class="w-6 h-6 mr-1 flex items-center justify-center rounded-full"
            style="background-color: rgba(0, 0, 0, 0.3)"
          >
            <i class="fa fa-search text-xs"></i>
          </div>
          <div
            class="w-6 h-6 mr-1 flex items-center justify-center rounded-full"
            style="background-color: rgba(0, 0, 0, 0.3)"
          >
            <i class="fa-solid fa-star text-xs"></i>
          </div>
          <div
            class="w-6 h-6 mr-1 flex items-center justify-center rounded-full"
            style="background-color: rgba(0, 0, 0, 0.3)"
          >
            <i class="fa-solid fa-share text-xs"></i>
          </div>
        </div>
      </template>
    </CommonHeader>

    <!-- 商品图片 -->
    <div class="relative">
      <img
        src="@images/img_39.jpg"
        :alt="product.title"
        class="w-full h-80 object-cover"
      />
      <div
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3"
      >
        <div class="flex items-center justify-between">
          <div class="text-white text-sm">{{ product.sales }} 人已购买</div>
          <div class="flex items-center text-white text-sm">
            <i class="fa fa-eye mr-1"></i> 浏览
          </div>
        </div>
      </div>
    </div>

    <div class="p-3">
      <!-- 商品信息 -->
      <div class="bg-white p-4 rounded-2xl overflow-hidden">
        <div class="flex items-center mb-3">
          <div
            class="flex items-center bg-red-50 text-red-500 text-xs px-2 py-1 rounded mr-2"
          >
            <span>券后</span>
          </div>
          <div class="text-red-500 font-bold text-xl">¥{{ product.price }}</div>
          <div class="text-gray-300 line-through text-sm ml-2">
            ¥{{ Math.floor(product.price * 1.1) }}
          </div>
          <div
            class="ml-3 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded"
          >
            3.0折
          </div>
        </div>
        <h2 class="text-lg font-medium mb-3">
          【体验卡】1对1游泳零基础蛙泳/自由泳（新人福利）
        </h2>
        <div class="flex items-center mb-4">
          <div class="flex items-center text-green-500 text-sm">
            <i class="fa fa-check-circle mr-1"></i>
            100%好评
          </div>
          <div class="text-gray-500 text-sm ml-3">
            "教练很专业，环境很不错" 共 {{ product.reviews }} 个消费评价
          </div>
        </div>

        <!-- 购买限制 -->
        <div class="border-l-4 border-red-500 bg-red-50 p-3 mb-4">
          <div class="text-sm">
            <div class="font-medium mb-1">限制</div>
            <div class="text-gray-600">每人限购1张</div>
          </div>
        </div>

        <!-- 使用须知 -->
        <div class="">
          <div class="text-sm mb-2">
            <div class="font-medium mb-1">须知</div>
            <div class="text-gray-600 mb-1">
              需预约 · 周一至周日10:00-22:00可用
            </div>
            <div class="text-gray-600 mb-1">须知 · 随时退 · 过期退</div>
          </div>
        </div>
      </div>
      <div class="mt-2 mb-5 flex border-b border-gray-200">
        <button
          class="py-3 mr-8 text-center text-sm font-medium"
          :class="{
            'text-primary border-b-2 border-primary': activeTab === 'details',
          }"
          @click="activeTab = 'details'"
        >
          团购详情
        </button>
        <button
          class="py-3 mr-8 text-center text-sm font-medium"
          :class="{
            'text-primary border-b-2 border-primary': activeTab === 'notices',
          }"
          @click="activeTab = 'notices'"
        >
          购买须知
        </button>
        <button
          class="py-3 text-center text-sm font-medium"
          :class="{
            'text-primary border-b-2 border-primary': activeTab === 'reviews',
          }"
          @click="activeTab = 'reviews'"
        >
          网友评价
        </button>
      </div>
      <div class="bg-white rounded-2xl overflow-hidden">
        <!-- 详情内容 -->
        <div class="p-4">
          <div v-if="activeTab === 'details'">
            <div class="text-sm mb-4">
              <div class="font-medium mb-2">游泳一对一体验课程</div>
              <div class="text-gray-600 mb-3">
                【体验卡】1对1游泳零基础蛙泳/自由泳（新人福利）
              </div>
              <div class="text-gray-600 mb-2">
                <span class="font-medium text-gray-500 mr-3">游泳种类</span>
                <span>可自选</span>
              </div>
              <div class="text-gray-600 mb-2">
                <span class="font-medium text-gray-500 mr-3">课程时长</span>
                <span>45分钟</span>
              </div>
            </div>

            <!-- 课程图片 -->
            <div class="grid grid-cols-2 gap-2 mb-4">
              <img
                src="https://picsum.photos/id/1065/200/200"
                alt="课程图片"
                class="w-full h-40 object-cover rounded-md"
              />
              <img
                src="https://picsum.photos/id/1066/200/200"
                alt="课程图片"
                class="w-full h-40 object-cover rounded-md"
              />
            </div>

            <!-- 课程介绍 -->
            <div class="text-sm mb-4">
              <div class="font-medium mb-2">课程介绍</div>
              <div class="text-gray-600 leading-relaxed">
                本课程专为游泳零基础学员设计，由专业教练一对一指导，帮助学员快速掌握蛙泳或自由泳的基本技巧。课程内容包括：呼吸技巧、划水动作、腿部动作、身体协调等。
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'notices'">
            <div class="text-sm text-gray-600 leading-relaxed">
              <p class="mb-2">1. 请至少提前24小时预约课程。</p>
              <p class="mb-2">2. 课程需在购买后30天内使用，逾期作废。</p>
              <p class="mb-2">3. 请自带泳衣、泳帽、泳镜等个人物品。</p>
              <p class="mb-2">
                4. 如遇特殊情况无法参加，请提前12小时取消预约。
              </p>
              <p class="mb-2">5. 本课程仅限18岁以上学员使用。</p>
            </div>
          </div>

          <div v-if="activeTab === 'reviews'">
            <div class="text-sm mb-4">
              <div class="font-medium mb-2">
                评价详情 ({{ product.reviews }})
              </div>

              <!-- 评价列表 -->
              <div class="space-y-4">
                <div class="border-b border-gray-100 pb-3">
                  <div class="flex items-center mb-2">
                    <img
                      src="https://picsum.photos/id/1001/40/40"
                      alt="用户头像"
                      class="w-8 h-8 rounded-full mr-2"
                    />
                    <div class="text-xs text-gray-500">李***生</div>
                    <div class="ml-auto text-xs text-gray-400">2023-06-15</div>
                  </div>
                  <div class="flex text-yellow-400 mb-2">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="text-gray-600 text-sm">
                    教练很专业，耐心指导，第一节课就学会了基本动作，非常满意！
                  </div>
                </div>

                <div class="border-b border-gray-100 pb-3">
                  <div class="flex items-center mb-2">
                    <img
                      src="https://picsum.photos/id/1002/40/40"
                      alt="用户头像"
                      class="w-8 h-8 rounded-full mr-2"
                    />
                    <div class="text-xs text-gray-500">张***花</div>
                    <div class="ml-auto text-xs text-gray-400">2023-06-10</div>
                  </div>
                  <div class="flex text-yellow-400 mb-2">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                  </div>
                  <div class="text-gray-600 text-sm">
                    环境很不错，水质干净，教练讲解清晰，值得推荐！
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部购买栏 -->
    <div class="w-full py-3 px-4 flex items-center justify-between">
      <div class="flex items-center mr-4">
        <div
          class="w-10 h-10 flex flex-col items-center justify-center text-xs text-gray-500"
        >
          <i class="fa-solid fa-gift text-xl mb-1"></i>
          <span class="text-xs">橱窗</span>
        </div>
        <div
          class="w-10 h-10 flex flex-col items-center justify-center text-xs text-gray-500"
        >
          <i class="fa-solid fa-gift text-xl mb-1"></i>
          <span class="text-xs">私信</span>
        </div>
      </div>
      <button class="bg-red-500 text-white px-4 py-1 rounded-full text-sm">
        立即购买
      </button>
    </div>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "ProductDetailPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      activeTab: "details",
      product: {
        id: "",
        title: "",
        price: 0,
        sales: 0,
        image: "",
        reviews: 0,
        isNew: false,
      },
    };
  },
  mounted() {
    // 从路由参数中获取商品ID
    const productId = this.$route.params.id;
    // 模拟获取商品详情数据
    this.loadProductDetail(productId);
  },
  methods: {
    loadProductDetail(productId) {
      // 这里应该是一个API调用，现在我们使用模拟数据
      // 模拟商品数据
      const products = [
        {
          id: "product1",
          title: "蛙泳/自由泳（体验卡）",
          price: 38,
          sales: 5680,
          image: "https://picsum.photos/id/1065/300/300",
          reviews: 183,
          isNew: false,
        },
        {
          id: "product2",
          title: "自由泳60分钟（单次卡）",
          price: 200,
          sales: 890,
          image: "https://picsum.photos/id/1066/300/300",
          reviews: 120,
          isNew: true,
        },
        {
          id: "product3",
          title: "蛙泳/自由泳（10次卡）",
          price: 1680,
          sales: 538,
          image: "https://picsum.photos/id/1067/300/300",
          reviews: 89,
          isNew: false,
        },
        {
          id: "product4",
          title: "蛙泳/自由泳（20次卡）",
          price: 2980,
          sales: 136,
          image: "https://picsum.photos/id/1068/300/300",
          reviews: 45,
          isNew: true,
        },
      ];

      // 查找对应ID的商品
      const foundProduct = products.find((p) => p.id === productId);
      if (foundProduct) {
        this.product = foundProduct;
      }
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.tab-button {
  transition: all 0.3s ease;
}

.tab-button.active {
  color: #1989fa;
  border-bottom: 2px solid #1989fa;
}

#page-product-detail {
  background-color: #f5f5f5;
}
</style>
