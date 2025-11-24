<template>
  <div class="page flex flex-col h-screen bg-[#F5F5F5]">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-[#FFF9F0] z-50 px-4 py-3 flex items-center justify-between"
      style="box-shadow: none;"
    >
      <div class="flex items-center flex-1">
        <div class="mr-4" @click="goBack">
          <i class="fa-solid fa-chevron-left text-gray-800 text-base"></i>
        </div>
        <h1 class="text-[17px] font-semibold text-gray-900">服务创建</h1>
      </div>
    
    </header>

    <!-- 主内容区域 -->
    <main class="flex-1 overflow-y-auto pt-[56px] pb-24 bg-[#F5F5F5]">
      <!-- 基础信息卡片 -->
      <div class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
        <h2 class="text-[15px] font-semibold text-gray-900 mb-1 pt-1">基础信息</h2>

        <!-- 服务品类 -->
        <div
          class="flex items-center justify-between py-3.5 border-b border-gray-100 cursor-pointer active:bg-gray-50"
          @click="selectCategory"
        >
          <div class="flex items-center">
            <span class="text-[15px] text-gray-900">服务品类</span>
            <span class="text-red-500 ml-0.5 text-[15px]">*</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[15px] text-gray-400">{{ categoryDisplay }}</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-[12px]"></i>
          </div>
        </div>

        <!-- 商品类型 -->
        <div
          class="flex items-center justify-between py-3.5 cursor-pointer active:bg-gray-50"
          @click="selectType"
        >
          <div class="flex items-center">
            <span class="text-[15px] text-gray-900">商品类型</span>
            <span class="text-red-500 ml-0.5 text-[15px]">*</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[15px] text-gray-400">{{
              selectedType
            }}</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-[12px]"></i>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部固定按钮 -->
    <footer
      class="fixed bottom-0 left-0 right-0 bg-transparent px-6 pb-6 pt-0"
    >
      <button
        class="w-full bg-[#FF6634] text-white rounded-full py-3.5 text-[16px] font-medium shadow-lg active:bg-[#FF5520]"
        @click="handleNext"
      >
        下一步
      </button>
    </footer>

    <!-- 客服悬浮按钮 -->
    <div class="fixed bottom-[100px] left-6 z-40">
      <button
        class="w-[52px] h-[52px] rounded-full bg-[#FF6634] flex flex-col items-center justify-center shadow-xl active:bg-[#FF5520]"
      >
        <i class="fa-solid fa-headset text-white text-[16px]"></i>
        <span class="text-white text-[11px] mt-0.5 font-medium">客服</span>
      </button>
    </div>

    <!-- 服务品类弹框 -->
    <div
      v-if="showCategoryModal"
      class="fixed inset-0 bg-black bg-opacity-10 z-50 flex items-end"
      @click="closeCategoryModal"
    >
      <div
        class="bg-white w-full rounded-t-3xl max-h-[80vh] flex flex-col"
        @click.stop
      >
        <!-- 搜索框区域 -->
        <div class="px-4 pt-6 pb-4">
          <div class="relative">
            <i
              class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"
            ></i>
            <input
              type="text"
              v-model="categorySearchText"
              placeholder="请输入商品名或类目关键词搜索"
              class="w-full bg-gray-50 rounded-full pl-11 pr-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <!-- 类别列表 -->
        <div class="flex-1 overflow-y-auto flex" style="max-height: calc(80vh - 180px);">
          <!-- 左侧一级品类 -->
          <div class="w-[120px] bg-[#F5F5F5] overflow-y-auto">
            <div
              v-for="category in filteredPrimaryCategories"
              :key="category.value"
              class="py-3.5 px-3 cursor-pointer relative active:bg-gray-100"
              :class="{
                'bg-white': activePrimaryCategory === category.value,
              }"
              @click="selectPrimaryCategory(category.value)"
            >
              <span
                class="text-[14px] block"
                :class="
                  activePrimaryCategory === category.value
                    ? 'text-orange-500 font-medium'
                    : 'text-gray-700'
                "
                >{{ category.label }}</span
              >
              <div
                v-if="activePrimaryCategory === category.value"
                class="absolute right-0 top-1/2 transform -translate-y-1/2 w-[3px] h-5 bg-orange-500 rounded-l"
              ></div>
            </div>
          </div>

          <!-- 右侧二级品类 -->
          <div class="flex-1 bg-white overflow-y-auto px-4 py-2">
            <div
              v-for="subCategory in currentSubCategories"
              :key="subCategory.value"
              class="flex items-center justify-between py-3.5 cursor-pointer active:bg-gray-50"
              @click="selectCategoryItem(subCategory)"
            >
              <span
                class="text-[15px]"
                :class="
                  selectedCategoryValue === subCategory.value
                    ? 'text-orange-500 font-medium'
                    : 'text-gray-700'
                "
                >{{ subCategory.label }}</span
              >
              <i
                v-if="selectedCategoryValue === subCategory.value"
                class="fa-solid fa-check text-orange-500 text-sm"
              ></i>
            </div>
          </div>
        </div>

        <!-- 确认按钮 -->
        <div class="px-6 pb-6 pt-2">
          <button
            class="w-full bg-[#FF6634] text-white rounded-full py-3.5 text-[16px] font-medium active:bg-[#FF5520]"
            @click="confirmCategory"
          >
            确认
          </button>
        </div>
      </div>
    </div>

    <!-- 商品类型弹框 -->
    <div
      v-if="showTypeModal"
      class="fixed inset-0 bg-black/80 z-50 flex items-end"
      @click="closeTypeModal"
    >
      <div
        class="bg-white w-full rounded-t-3xl max-h-[80vh] flex flex-col"
        @click.stop
      >
        <!-- 标题 -->
        <div class="relative py-5 border-b border-gray-100">
          <h3 class="text-center text-[17px] font-semibold text-gray-900">
            商品类型
          </h3>
          <button
            class="absolute right-4 top-1/2 transform -translate-y-1/2"
            @click="closeTypeModal"
          >
            <i class="fa-solid fa-xmark text-gray-900 text-xl"></i>
          </button>
        </div>

        <!-- 类型列表 -->
        <div class="flex-1 overflow-y-auto px-4 py-4">
          <div
            v-for="type in serviceTypes"
            :key="type.value"
            class="mb-3 p-4 bg-white rounded-xl border border-gray-100 cursor-pointer active:bg-gray-50"
            :class="{ 'border-orange-500': selectedType === type.label }"
            @click="selectTypeItem(type)"
          >
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h4
                  class="text-[16px] font-medium mb-1"
                  :class="
                    selectedType === type.label
                      ? 'text-gray-900'
                      : 'text-gray-700'
                  "
                >
                  {{ type.label }}
                </h4>
                <p class="text-[13px] text-gray-400">{{ type.description }}</p>
              </div>
              <div
                class="ml-3 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5"
                :class="
                  selectedType === type.label
                    ? 'border-orange-500'
                    : 'border-gray-300'
                "
              >
                <div
                  v-if="selectedType === type.label"
                  class="w-3 h-3 rounded-full bg-orange-500"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 确认按钮 -->
        <div class="px-6 pb-6 pt-2">
          <button
            class="w-full bg-[#FF6634] text-white rounded-full py-3.5 text-[16px] font-medium active:bg-[#FF5520]"
            @click="confirmType"
          >
            确认
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceManagementPage",
  data() {
    return {
      selectedCategory: "运动场馆·健身房",
      selectedCategoryValue: "gym",
      selectedType: "优惠买单",
      showCategoryModal: false,
      showTypeModal: false,
      categorySearchText: "",
      activePrimaryCategory: "sports",
      primaryCategories: [
        { value: "sports", label: "运动场馆" },
        { value: "training", label: "培训机构" },
        { value: "activity", label: "活动组织" },
        { value: "brand", label: "运动品牌" },
        { value: "leisure", label: "休闲娱乐" },
        { value: "trainer", label: "技能唤醒师" },
        { value: "tower_trainer", label: "塔子唤醒师" },
      ],
      subCategories: {
        sports: [
          { value: "gym", label: "健身房" },
          { value: "badminton", label: "羽毛球馆" },
          { value: "basketball", label: "篮球馆" },
          { value: "football", label: "足球馆（含五人制/七人制）" },
          { value: "tennis", label: "网球场" },
          { value: "swimming", label: "游泳馆（室内/室外）" },
          { value: "table_tennis", label: "乒乓球馆" },
          { value: "yoga", label: "瑜伽馆" },
          { value: "dance", label: "舞蹈室" },
          { value: "martial_arts", label: "武术馆" },
        ],
        training: [
          { value: "language", label: "语言培训" },
          { value: "art", label: "美术培训" },
          { value: "music", label: "音乐培训" },
          { value: "programming", label: "编程培训" },
          { value: "skills", label: "职业技能培训" },
          { value: "exam_prep", label: "考试辅导" },
        ],
        activity: [
          { value: "outdoor", label: "户外活动" },
          { value: "team_building", label: "团建活动" },
          { value: "parent_child", label: "亲子活动" },
          { value: "social", label: "社交聚会" },
          { value: "workshop", label: "工作坊" },
          { value: "competition", label: "赛事活动" },
        ],
        brand: [
          { value: "sportswear", label: "运动服装" },
          { value: "equipment", label: "运动器材" },
          { value: "shoes", label: "运动鞋店" },
          { value: "outdoor_gear", label: "户外装备" },
          { value: "nutrition", label: "运动营养" },
        ],
        leisure: [
          { value: "board_game", label: "桌游吧" },
          { value: "ktv", label: "KTV" },
          { value: "cinema", label: "影院" },
          { value: "escape_room", label: "密室逃脱" },
          { value: "spa", label: "SPA会所" },
          { value: "tea_house", label: "茶艺馆" },
          { value: "bookstore", label: "书店咖啡" },
        ],
        trainer: [
          { value: "fitness_trainer", label: "健身教练" },
          { value: "yoga_trainer", label: "瑜伽教练" },
          { value: "swimming_trainer", label: "游泳教练" },
          { value: "tennis_trainer", label: "网球教练" },
          { value: "basketball_trainer", label: "篮球教练" },
        ],
        tower_trainer: [
          { value: "life_coach", label: "生活导师" },
          { value: "career_coach", label: "职业导师" },
          { value: "mindfulness", label: "正念导师" },
          { value: "nutrition_coach", label: "营养导师" },
        ],
      },
      serviceTypes: [
        {
          value: "discount",
          label: "优惠买单",
          description: "买单可设置能量币抵扣额度",
        },
        {
          value: "voucher",
          label: "代金券",
          description: "现金抵扣券，用得多买得多",
        },
        {
          value: "group_buying",
          label: "团购套餐",
          description: "套餐商品，搭配自由，快速吸引顾客",
        },
        {
          value: "time_card",
          label: "次卡",
          description: "一次购买分次核销，增加用户粘性",
        },
        {
          value: "free_trial",
          label: "免费体验",
          description: "好的体验是长期服务的基础",
        },
        {
          value: "group_activity",
          label: "组团活动",
          description: "唤醒生活中的热爱",
        },
        {
          value: "period_card",
          label: "周期卡",
          description: "月度/季度/年度等长周期服务",
        },
        {
          value: "presale",
          label: "预售券",
          description: "新店开业/新品上市，先团后用",
        },
      ],
    };
  },
  computed: {
    categoryDisplay() {
      return this.selectedCategory;
    },
    filteredPrimaryCategories() {
      if (!this.categorySearchText) {
        return this.primaryCategories;
      }
      return this.primaryCategories.filter((category) =>
        category.label.includes(this.categorySearchText)
      );
    },
    currentSubCategories() {
      return this.subCategories[this.activePrimaryCategory] || [];
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    selectCategory() {
      // 根据当前选中的二级分类设置激活的一级分类
      for (const [primaryKey, subList] of Object.entries(this.subCategories)) {
        if (subList.find((sub) => sub.value === this.selectedCategoryValue)) {
          this.activePrimaryCategory = primaryKey;
          break;
        }
      }
      this.showCategoryModal = true;
    },
    selectType() {
      this.showTypeModal = true;
    },
    selectPrimaryCategory(categoryValue) {
      this.activePrimaryCategory = categoryValue;
    },
    closeCategoryModal() {
      this.showCategoryModal = false;
      this.categorySearchText = "";
    },
    closeTypeModal() {
      this.showTypeModal = false;
    },
    selectCategoryItem(subCategory) {
      this.selectedCategoryValue = subCategory.value;
      // 生成显示的完整分类名称
      const primaryLabel = this.primaryCategories.find(
        (c) => c.value === this.activePrimaryCategory
      )?.label;
      this.selectedCategory = `${primaryLabel}·${subCategory.label}`;
    },
    selectTypeItem(type) {
      this.selectedType = type.label;
    },
    confirmCategory() {
      this.closeCategoryModal();
    },
    confirmType() {
      this.closeTypeModal();
    },
    handleNext() {
      // 根据选择的服务类型跳转到不同的页面
      const routeMap = {
        "代金券": "/business-admin/voucher-create",
        "次卡": "/business-admin/times-card-create",
        "优惠买单": "/business-admin/discount-payment-create",
        "免费体验": "/business-admin/free-trial-create",
        "周期卡": "/business-admin/period-card-create",
        "预售券": "/business-admin/presale-voucher-create",
        "团购套餐": "/business-admin/group-buying-package-create",
        // 其他类型后续添加
      };

      const targetRoute = routeMap[this.selectedType];
      if (targetRoute) {
        this.$router.push({
          path: targetRoute,
          query: {
            category: this.selectedCategory,
            type: this.selectedType,
          },
        });
      } else {
        // 如果没有对应的页面，提示用户
        alert("该商品类型页面尚未开发");
      }
    },
  },
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}

/* 弹框动画 */
.fixed.inset-0 {
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 隐藏滚动条 */
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

.overflow-y-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
