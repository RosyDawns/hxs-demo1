<template>
  <div class="page pb-6" id="service-category-page">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100"
    >
      <div class="pl-2 pr-4">
        <div class="flex items-center">
          <button @click="goBack" class="text-black mr-2">
            <i class="fa fa-angle-left text-xl"></i>
          </button>
          <div class="flex justify-around flex-1 py-2">
            <button
              class="flex flex-col items-center px-3 py-2 rounded-lg"
              :class="
                activeTab === 'master'
                  ? 'bg-orange-100 text-orange'
                  : 'text-gray-600'
              "
              @click="switchTab('master')"
            >
              <span class="text-sm">主理人</span>
            </button>
            <button
              class="flex flex-col items-center px-3 py-2 rounded-lg"
              :class="
                activeTab === 'dazi'
                  ? 'bg-orange-100 text-orange'
                  : 'text-gray-600'
              "
              @click="switchTab('dazi')"
            >
              <span class="text-sm">唤醒师</span>
            </button>
            <button
              class="flex flex-col items-center px-3 py-2 rounded-lg"
              :class="
                activeTab === 'skill'
                  ? 'bg-orange-100 text-orange'
                  : 'text-gray-600'
              "
              @click="switchTab('skill')"
            >
              <span class="text-sm">找搭子</span>
            </button>
            <button
              class="flex flex-col items-center px-3 py-2 rounded-lg"
              :class="
                activeTab === 'group'
                  ? 'bg-orange-100 text-orange'
                  : 'text-gray-600'
              "
              @click="switchTab('group')"
            >
              <span class="text-sm">组团去玩</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- 主内容区 -->
    <main class="pt-18 pb-16 px-4">
      <!-- 搜索框 -->
      <div class="relative mb-4">
        <input
          type="text"
          placeholder="搜索服务、技能或活动..."
          class="w-full bg-white rounded-full py-2 pl-10 pr-4 text-sm border-none focus:outline-none"
        />
        <i
          class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        ></i>
      </div>

      <!-- 筛选标签 -->
      <div
        class="flex items-center overflow-x-auto whitespace-nowrap mb-2 pb-2 -mx-4 px-4"
      >
        <button
          class="flex items-center bg-white rounded-full px-3 py-1.5 text-sm mr-2"
        >
          附近
          <i class="fa fa-angle-down ml-1 text-xs"></i>
        </button>
        <button
          class="flex items-center bg-white rounded-full px-3 py-1.5 text-sm mr-2"
          @click="showTypeFilterModal"
        >
          {{ selectedType }}
          <i class="fa fa-angle-down ml-1 text-xs"></i>
        </button>
        <button
          class="flex items-center bg-white rounded-full px-3 py-1.5 text-sm mr-2"
        >
          时间
          <i class="fa fa-angle-down ml-1 text-xs"></i>
        </button>
        <button
          class="flex items-center bg-white rounded-full px-3 py-1.5 text-sm"
          @click="showCostFilterModal"
        >
          {{ selectedCost }}
          <i class="fa fa-angle-down ml-1 text-xs"></i>
        </button>
      </div>

      <!-- 根据当前标签显示内容 -->
      <div class="space-y-4">
        <!-- 主理人内容 -->
        <template v-if="activeTab === 'master'">
          <div
            class="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
            @click="$router.push('/product-detail/product1')"
          >
            <div class="p-3">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <span
                    class="bg-green-50 text-green-500 text-xs px-2 py-0.5 rounded-full mr-2"
                    >健身房</span
                  >
                  <h3 class="font-medium">普陀新村路健身房</h3>
                </div>
              </div>
              <p class="text-xs text-gray-500 mb-2">
                <span>营业时间：06:00-10:30</span>
                <span>评分：4.8</span>
                <span>普陀新村路100号</span>
                <span>距离:2km</span>
              </p>
              <div class="flex flex-wrap gap-1 mb-3">
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-users mr-1"></i>
                  环境好
                </span>
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-camera mr-1"></i>
                  设新备齐
                </span>
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-heart mr-1"></i>
                  教练专业
                </span>
              </div>
            </div>

            <!-- 活动图片 -->
            <div class="flex gap-1 px-3 mb-3">
              <img
                src="@images/img_43.jpg"
                class="w-1/3 h-24 object-cover rounded"
              />
              <img
                src="@images/img_43.jpg"
                class="w-1/3 h-24 object-cover rounded"
              />
              <img
                src="@images/img_43.jpg"
                class="w-1/3 h-24 object-cover rounded"
              />
            </div>

            <div class="flex items-center justify-between px-3 pb-3">
              <div class="flex items-center">
                <span class="text-xs text-blue-500 mr-2">惠</span>
                <div class="flex -space-x-1">
                  <img
                    src="@images/img_39.jpg"
                    class="w-5 h-5 rounded-full border border-white"
                  />
                  <img
                    src="@images/img_39.jpg"
                    class="w-5 h-5 rounded-full border border-white"
                  />
                  <img
                    src="@images/img_39.jpg"
                    class="w-5 h-5 rounded-full border border-white"
                  />
                </div>
                <span class="text-xs text-gray-500 ml-1">28人已报名</span>
              </div>
              <button
                class="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full"
              >
                购买
              </button>
            </div>
          </div>

          <div
            class="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
            @click="$router.push('/product-detail/product1')"
          >
            <div class="p-3">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <span
                    class="bg-green-50 text-green-500 text-xs px-2 py-0.5 rounded-full mr-2"
                    >篮球馆</span
                  >
                  <h3 class="font-medium">普陀新村路篮球馆</h3>
                </div>
              </div>
              <p class="text-xs text-gray-500 mb-2">
                <span>营业时间：06:00-10:30</span>
                <span>评分：4.8</span>
                <span>普陀新村路200号</span>
                <span>距离:2.5km</span>
              </p>
              <div class="flex flex-wrap gap-1 mb-3">
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-users mr-1"></i>
                  环境好
                </span>
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-heart mr-1"></i>
                  场馆新
                </span>
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-camera mr-1"></i>
                  设新备齐
                </span>
              </div>
            </div>

            <!-- 活动图片 -->
            <div class="flex gap-1 px-3 mb-3">
              <img
                src="@images/img_43.jpg"
                class="w-1/3 h-24 object-cover rounded"
              />
              <img
                src="@images/img_43.jpg"
                class="w-1/3 h-24 object-cover rounded"
              />
              <img
                src="@images/img_43.jpg"
                class="w-1/3 h-24 object-cover rounded"
              />
            </div>

            <div class="flex items-center justify-between px-3 pb-3">
              <div class="flex items-center">
                <span class="text-xs text-blue-500 mr-2">惠</span>
                <div class="flex -space-x-1">
                  <img
                    src="@images/img_39.jpg"
                    class="w-5 h-5 rounded-full border border-white"
                  />
                  <img
                    src="@images/img_39.jpg"
                    class="w-5 h-5 rounded-full border border-white"
                  />
                  <img
                    src="@images/img_39.jpg"
                    class="w-5 h-5 rounded-full border border-white"
                  />
                </div>
                <span class="text-xs text-gray-500 ml-1">28人已报名</span>
              </div>
              <button
                class="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full"
              >
                购买
              </button>
            </div>
          </div>
        </template>

        <!-- 达子唤醒师内容 -->
        <template v-if="activeTab === 'dazi'">
          <HxsItem
            v-for="(coach, index) in recommendedCoaches"
            :key="coach.id"
            :coach="coach"
            @view-profile="handleCoachDetail"
          />
        </template>

        <!-- 技能唤醒师内容 -->
        <template v-if="activeTab === 'skill'">
          <HxsItem
            v-for="(coach, index) in recommendedCoaches"
            :key="coach.id"
            :coach="coach"
            @view-profile="handleCoachDetail"
          />
        </template>

        <!-- 组团内容 -->
        <template v-if="activeTab === 'group'">
          <!-- 活动项1 -->
          <div
            class="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
            @click="goToActivityDetail('1')"
          >
            <div class="p-3">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <span
                    class="bg-green-50 text-green-500 text-xs px-2 py-0.5 rounded-full mr-2"
                    >跑步</span
                  >
                  <h3 class="font-medium">大宁沪跑团冬训第1期</h3>
                </div>
                <span class="text-red-500 font-medium text-sm">免费</span>
              </div>
              <p class="text-xs text-gray-500 mb-2">
                11.01 周六 06:00-10:30 · 大宁公园
              </p>
              <div class="flex flex-wrap gap-1 mb-3">
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-users mr-1"></i>
                  大宁沪跑团
                </span>
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-camera mr-1"></i>
                  摄影跟拍
                </span>
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-heart mr-1"></i>
                  跑量积累
                </span>
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-truck mr-1"></i>
                  补给到位
                </span>
              </div>
            </div>

            <!-- 活动图片 -->
            <div class="flex gap-1 px-3 mb-3">
              <img
                src="@images/img_39.jpg"
                class="w-1/3 h-24 object-cover rounded"
              />
              <img
                src="@images/img_39.jpg"
                class="w-1/3 h-24 object-cover rounded"
              />
              <img
                src="@images/img_39.jpg"
                class="w-1/3 h-24 object-cover rounded"
              />
            </div>

            <div class="flex items-center justify-between px-3 pb-3">
              <div class="flex items-center">
                <span class="text-xs text-blue-500 mr-2">报名中</span>
                <div class="flex -space-x-1">
                  <img
                    src="@images/img_39.jpg"
                    class="w-5 h-5 rounded-full border border-white"
                  />
                  <img
                    src="@images/img_39.jpg"
                    class="w-5 h-5 rounded-full border border-white"
                  />
                  <img
                    src="@images/img_39.jpg"
                    class="w-5 h-5 rounded-full border border-white"
                  />
                </div>
                <span class="text-xs text-gray-500 ml-1">28人已报名</span>
              </div>
              <button
                class="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full"
              >
                报名
              </button>
            </div>
          </div>

          <!-- 活动项2 -->
          <div
            class="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
            @click="goToActivityDetail('2')"
          >
            <div class="p-3">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <span
                    class="bg-blue-50 text-blue-500 text-xs px-2 py-0.5 rounded-full mr-2"
                    >垂钓</span
                  >
                  <h3 class="font-medium">11.1海上游乐园，路亚钓鱼爆箱</h3>
                </div>
                <span class="text-gray-500 font-medium text-sm">AA制</span>
              </div>
              <p class="text-xs text-gray-500 mb-2">
                11.01 周六 06:00 - 11.02 周日 11:00 · 金沙江路[地铁站]
              </p>
              <div class="flex flex-wrap gap-1 mb-3">
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-user mr-1"></i>
                  理查
                </span>
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-bolt mr-1"></i>
                  狂口
                </span>
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-map-marker mr-1"></i>
                  绝佳钓点
                </span>
                <span class="text-xs text-gray-500 flex items-center">
                  <i class="fa fa-diamond mr-1"></i>
                  大神带钓
                </span>
              </div>
            </div>

            <!-- 活动图片 -->
            <div class="flex gap-1 px-3 mb-3">
              <img
                src="@images/img_39.jpg"
                class="w-1/3 h-24 object-cover rounded"
              />
              <img
                src="@images/img_39.jpg"
                class="w-1/3 h-24 object-cover rounded"
              />
              <img
                src="@images/img_39.jpg"
                class="w-1/3 h-24 object-cover rounded"
              />
            </div>

            <div class="flex items-center justify-between px-3 pb-3">
              <div class="flex items-center">
                <span class="text-xs text-blue-500 mr-2">报名中</span>
                <div class="flex -space-x-1">
                  <img
                    src="@images/img_39.jpg"
                    class="w-5 h-5 rounded-full border border-white"
                  />
                </div>
                <span class="text-xs text-gray-500 ml-1">1人已报名</span>
              </div>
              <button
                class="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full"
              >
                报名
              </button>
            </div>
          </div>
        </template>
      </div>
    </main>

    <!-- 类型筛选弹框 -->
    <div v-if="showTypeModal" class="filter-modal">
      <div class="modal-overlay" @click="closeTypeFilterModal"></div>
      <div class="filter-modal-content">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-bold text-gray-800">活动类型</h3>
          <button
            class="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100"
            @click="closeTypeFilterModal"
          >
            <i class="fa fa-times text-lg"></i>
          </button>
        </div>

        <!-- 一级分类 -->
        <div class="mb-4">
          <h4 class="text-sm font-semibold text-gray-600 mb-3">选择主分类</h4>
          <div class="flex overflow-x-auto pb-2 -mx-1">
            <button
              v-for="category in activityTypes"
              :key="category.category"
              class="flex-shrink-0 px-5 py-2.5 mx-1 rounded-full text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none"
              :class="
                selectedCategory === category.category
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              "
              @click="selectCategory(category.category)"
            >
              {{ category.category }}
            </button>
          </div>
        </div>

        <!-- 二级分类 -->
        <div class="mb-6">
          <h4 class="text-sm font-semibold text-gray-600 mb-3">选择子分类</h4>
          <div class="grid grid-cols-3 gap-2">
            <button
              v-for="item in currentSubCategories"
              :key="item"
              class="py-3 px-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none text-center"
              :class="
                selectedType === item
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              "
              @click="selectType(item)"
            >
              {{ item }}
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <button
            class="py-3.5 bg-gray-100 text-gray-700 rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-gray-200"
            @click="resetFilters"
          >
            重置
          </button>
          <button
            class="py-3.5 bg-orange-500 text-white rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-orange-600 shadow-md"
            @click="closeTypeFilterModal"
          >
            确定
          </button>
        </div>
      </div>
    </div>

    <!-- 费用筛选弹框 -->
    <div v-if="showCostModal" class="filter-modal">
      <div class="modal-overlay" @click="closeCostFilterModal"></div>
      <div class="filter-modal-content">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-bold text-gray-800">费用类型</h3>
          <button
            class="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100"
            @click="closeCostFilterModal"
          >
            <i class="fa fa-times text-lg"></i>
          </button>
        </div>

        <div class="space-y-3 mb-6">
          <button
            v-for="cost in costOptions"
            :key="cost"
            class="w-full py-4 px-4 rounded-lg text-base font-medium transition-all duration-200 ease-in-out focus:outline-none text-left"
            :class="
              selectedCost === cost
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            "
            @click="selectCost(cost)"
          >
            {{ cost }}
          </button>
        </div>

        <div class="flex flex-col gap-3">
          <button
            class="py-3.5 bg-gray-100 text-gray-700 rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-gray-200"
            @click="resetFilters"
          >
            重置
          </button>
          <button
            class="py-3.5 bg-orange-500 text-white rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-orange-600 shadow-md"
            @click="closeCostFilterModal"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HxsItem from "@/components/hxs-item.vue";
export default {
  name: "ServiceCategoryPage",
  data() {
    return {
      activeTab: "master", // 默认显示主理人标签
      showCreateModal: false,
      showVerificationPromptModal: false,
      showVerificationTypeSelect: false,
      showTypeModal: false,
      showCostModal: false,
      selectedType: "户外运动",
      selectedCost: "费用",
      selectedCategory: "户外运动",
      activityTypes: [
        {
          category: "户外运动",
          items: [
            "跑步",
            "骑行",
            "徒步",
            "露营",
            "飞盘",
            "轮滑",
            "钓鱼",
            "爬山",
            "溯溪",
          ],
        },
        { category: "户外休闲", items: ["野餐", "摄影", "采摘", "观星"] },
        { category: "室内娱乐", items: ["桌游", "密室逃脱", "剧本杀", "K歌"] },
        {
          category: "球类运动",
          items: ["篮球", "足球", "羽毛球", "乒乓球", "网球"],
        },
        { category: "综合体育", items: ["健身", "瑜伽", "舞蹈"] },
        { category: "二次元", items: ["漫展", "Cosplay", "同人创作"] },
        { category: "追星", items: ["演唱会", "粉丝见面会"] },
      ],
      costOptions: ["免费活动", "线下AA制", "付费活动"],

      recommendedCoaches: [
        {
          id: "coach1",
          name: "李教练",
          type: "游泳教练",
          title: "国家二级运动员 | 8年教学经验",
          rating: 4.8,
          distance: 1.2,
          image: "https://picsum.photos/id/1005/100/100",
          prices: {
            trial: 88,
            single: 200,
            card10: 1680,
          },
        },
        {
          id: "coach2",
          name: "赵教练",
          type: "游泳教练",
          title: "国家一级运动员 | 10年教学经验",
          rating: 4.9,
          distance: 1.5,
          image: "https://picsum.photos/id/1011/100/100",
          prices: {
            trial: 98,
            single: 220,
            card10: 1880,
          },
        },
        {
          id: "coach3",
          name: "张教练",
          type: "游泳教练",
          title: "国家二级运动员 | 6年教学经验",
          rating: 4.6,
          distance: 1.5,
          image: "https://picsum.photos/id/1012/100/100",
          prices: {
            trial: 80,
            single: 180,
            card10: 1580,
          },
        },
      ],
    };
  },
  components: {
    HxsItem,
  },
  computed: {
    // 计算当前选中分类的二级分类
    currentSubCategories() {
      // 确保activityTypes是数组且不为空
      if (
        !Array.isArray(this.activityTypes) ||
        this.activityTypes.length === 0
      ) {
        return [];
      }

      // 查找当前选中的一级分类
      const currentCategory = this.activityTypes.find((category) => {
        // 确保category存在且有category属性
        return category && category.category === this.selectedCategory;
      });

      // 确保currentCategory存在且有items属性
      return currentCategory && Array.isArray(currentCategory.items)
        ? currentCategory.items
        : [];
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    switchTab(tabName) {
      this.activeTab = tabName;
    },
    goToActivityDetail(id) {
      this.$router.push(`/activity-detail/${id}`);
    },
    goToCreateActivity() {
      this.showCreateModal = true;
    },
    closeCreateModal() {
      this.showCreateModal = false;
    },
    publishDynamic() {
      this.$router.push({ path: "/publish-activity" });
      this.showCreateModal = false;
    },
    createActivity() {
      this.$router.push({ path: "/create-activity" });
      this.showCreateModal = false;
    },
    // 显示认证提示弹框
    showVerificationPrompt() {
      this.showCreateModal = false;
      this.showVerificationPromptModal = true;
    },
    // 关闭认证提示弹框
    closeVerificationPrompt() {
      this.showVerificationPromptModal = false;
    },
    // 显示认证类型选择弹框
    showVerificationTypeModal() {
      this.showVerificationPromptModal = false;
      this.showVerificationTypeSelect = true;
    },
    // 关闭认证类型选择弹框
    closeVerificationTypeModal() {
      this.showVerificationTypeSelect = false;
    },
    // 跳转到机构认证页面
    goToOrgVerification() {
      this.$router.push({ path: "/organization-verification" });
    },
    // 跳转到个人认证页面
    goToPersonalVerification() {
      this.$router.push({ path: "/personal-verification" });
    },
    // 显示类型筛选弹框
    showTypeFilterModal() {
      this.showTypeModal = true;
    },
    // 关闭类型筛选弹框
    closeTypeFilterModal() {
      this.showTypeModal = false;
    },
    // 显示费用筛选弹框
    showCostFilterModal() {
      this.showCostModal = true;
    },
    // 关闭费用筛选弹框
    closeCostFilterModal() {
      this.showCostModal = false;
    },
    // 选择活动类型
    selectType(type) {
      this.selectedType = type;
      this.closeTypeFilterModal();
    },
    // 选择一级分类
    selectCategory(category) {
      this.selectedCategory = category;
    },
    // 选择费用类型
    selectCost(cost) {
      this.selectedCost = cost;
      this.closeCostFilterModal();
    },
    // 重置筛选条件
    resetFilters() {
      this.selectedType = "户外运动";
      this.selectedCost = "费用";
      this.selectedCategory = "户外运动";
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-thumb {
  background: transparent;
}

::-webkit-scrollbar-track {
  background: transparent;
}

/* 创建选择弹窗 */
.create-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  width: 100%;
  background: white;
  border-radius: 16px 16px 0 0;
  padding: 24px 20px;
  padding-bottom: calc(24px + env(safe-area-inset-bottom));
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
}

.modal-title {
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 4px;
}

.modal-subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
}

.create-options {
  display: flex;
  gap: 16px;
}

.option-card {
  flex: 1;
  padding: 24px 16px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}

.option-card:active {
  transform: scale(0.98);
}

.yellow-card {
  background: linear-gradient(135deg, #fff3b0, #ffd43b);
}

.orange-card {
  background: linear-gradient(135deg, #ffb88c, #ff6b35);
}

.option-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin-bottom: 8px;
}

.option-card p {
  font-size: 13px;
  color: #444;
}

/* 认证提示弹框 */
.verification-prompt-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
}

.prompt-dialog {
  position: relative;
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin: 0 32px;
  max-width: 320px;
  width: 100%;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.prompt-title {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  text-align: center;
  margin-bottom: 12px;
}

.prompt-message {
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 24px;
  line-height: 1.5;
}

.prompt-actions {
  display: flex;
  gap: 12px;
}

.btn-cancel,
.btn-verify {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 24px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-cancel {
  background: #f5f5f5;
  color: #666;
}

.btn-verify {
  background: #ff6b35;
  color: white;
}

.btn-cancel:active,
.btn-verify:active {
  opacity: 0.8;
}

/* 认证类型选择弹框 */
.verification-type-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1002;
  display: flex;
  align-items: flex-end;
}

.type-modal-content {
  position: relative;
  width: 100%;
  background: white;
  border-radius: 16px 16px 0 0;
  padding: 24px 20px;
  padding-bottom: calc(24px + env(safe-area-inset-bottom));
  animation: slideUp 0.3s ease;
  max-height: 80vh;
  overflow-y: auto;
}

.type-modal-title {
  font-size: 20px;
  font-weight: 600;
  color: #222;
  margin-bottom: 24px;
  text-align: center;
}

.verification-types {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.type-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
}

.type-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  font-size: 24px;
}

.org-icon {
  background: #e3f2ff;
  color: #1e88e5;
}

.personal-icon {
  background: #e8f5e9;
  color: #43a047;
}

.type-info {
  flex: 1;
  margin: 0 10px;
}

.type-title {
  font-size: 14px;
  font-weight: 600;
  color: #222;
  margin-bottom: 4px;
}

.type-desc {
  font-size: 11px;
  color: #666;
  line-height: 1.4;
}

.btn-go-verify {
  padding: 6px 14px;
  background: #ff6b35;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-go-verify:active {
  opacity: 0.8;
}

/* 筛选弹框样式 */
.filter-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
}

.filter-modal-content {
  position: relative;
  width: 100%;
  background: white;
  border-radius: 24px 24px 0 0;
  padding: 20px;
  padding-bottom: calc(20px + env(safe-area-inset-bottom));
  animation: slideUp 0.35s ease-out;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.1);
  transform-origin: bottom center;
}

.filter-modal-content::-webkit-scrollbar {
  width: 0;
}

/* 横向滚动条隐藏 */
.filter-modal-content ::-webkit-scrollbar {
  height: 0;
}

@keyframes slideUp {
  from {
    transform: translateY(100%) scale(0.95);
    opacity: 0;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.05);
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.1);
  }
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  animation: fadeIn 0.35s ease-out;
}
</style>
