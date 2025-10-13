<template>
  <div class="page bg-gray-50" id="page-ranking">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs px-4 py-3 flex items-center justify-between"
    >
      <div class="flex-1 flex items-center">
        <button
          @click="$router.back()"
          class="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center"
        >
          <i class="fa-solid fa-chevron-left text-gray-800"></i>
        </button>
        <div class="flex items-center space-x-2 ml-3">
          <button
            class="px-3 py-1 bg-white rounded-full text-sm flex items-center shadow-sm"
          >
            <span>上海</span>
            <i class="fa-solid fa-chevron-down ml-1 text-xs"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- 主内容区域 -->
    <div class="">
      <!-- Banner区域 -->
      <div class="relative h-64 overflow-hidden">
        <img
          src="@images/img_39.jpg"
          alt="城市大师频道"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"
        ></div>
        <div
          class="absolute top-1/2 transform -translate-y-1/2 left-6 text-white"
        >
          <h1 class="text-3xl font-bold mb-2 text-shadow">城市大师频道</h1>

          <p
            class="pl-2 text-lg border border-solid rounded-full flex items-center justify-between"
          >
            为你的城市英雄打Call
            <span class="bg-amber-50 text-amber-700 rounded-full px-2 ml-2">
              GO&gt;
            </span>
          </p>
        </div>
      </div>

      <!-- 大师分类卡片 -->
      <div class="bg-white rounded-t-3xl -mt-6 relative z-10 px-4 pt-6">
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div
            v-for="(category, index) in masterCategories"
            :key="index"
            class="flex flex-col items-center cursor-pointer"
            :class="{
              'opacity-100': selectedCategory === category.id,
              'opacity-60': selectedCategory !== category.id,
            }"
            @click="selectCategory(category.id)"
          >
            <div class="w-24 h-24 rounded-2xl overflow-hidden mb-2 shadow-md">
              <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-full object-cover"
              />
            </div>
            <span class="text-sm font-medium">{{ category.name }}</span>
          </div>
        </div>
      </div>

      <!-- 当前大师信息和二级分类 -->
      <div class="bg-white px-4 pb-3">
        <div class="flex items-center justify-between mb-3">
          <div class="flex-1 flex items-center">
            <h2 class="text-lg font-bold mr-2">
              {{ getCurrentCategoryName() }}
            </h2>
            <div class="text-xs text-gray-500">10月05日已更新</div>
          </div>
          <button
            class="flex items-center text-sm text-gray-600 mb-3"
            @click="showRules = true"
          >
            评选规则
            <i class="fa-solid fa-chevron-right ml-1 text-xs"></i>
          </button>
        </div>

        <!-- 二级分类标签 -->
        <div
          class="flex items-center space-x-2 overflow-x-auto scrollbar-hide"
        >
          <button
            v-for="subCategory in subCategories"
            :key="subCategory.id"
            class="px-2 py-1 rounded-full text-sm whitespace-nowrap transition-colors"
            :class="
              selectedSubCategory === subCategory.id
                ? 'bg-orange-50 text-primary'
                : 'text-gray-600 '
            "
            @click="selectedSubCategory = subCategory.id"
          >
            {{ subCategory.name }}
          </button>
        </div>
      </div>

      <!-- 筛选标签栏 -->
      <div class="bg-white border-b border-gray-100 px-4">
        <div class="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
          <button
            class="py-3 text-xs font-medium whitespace-nowrap text-orange-500 relative"
          >
            全部主理人
            <i class="fa-solid fa-chevron-down text-xs"></i>
            <span
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
            ></span>
          </button>
          <button
            class="py-3 text-xs font-medium whitespace-nowrap text-gray-600"
          >
            行业
            <i class="fa-solid fa-chevron-down text-xs"></i>
          </button>
          <button class="py-3 text-xs text-gray-600 whitespace-nowrap">
            餐饮美食
          </button>
          <button class="py-3 text-xs text-gray-600 whitespace-nowrap">
            运动健康
          </button>
          <button class="py-3 text-xs text-gray-600 whitespace-nowrap">
            少儿培训
          </button>
          <button class="py-3 text-xs text-gray-600 whitespace-nowrap">
            艺术
          </button>
          <button class="py-3 text-xs text-gray-600 whitespace-nowrap">
            更多
            <i class="fa-solid fa-chevron-right text-xs"></i>
          </button>
        </div>
      </div>

      <!-- 排行榜列表区域 -->
      <div class="bg-gray-50 px-4 py-4">
        <RankingCard
          v-for="(master, index) in rankedMasters"
          :key="master.id"
          :master="master"
          :rank="index + 1"
          @view-profile="handleViewProfile"
          @call="handleCall"
        />

        <!-- 加载更多 -->
        <div class="text-center py-4">
          <button
            class="text-sm text-gray-500 hover:text-gray-700"
            @click="loadMore"
            :disabled="loading"
          >
            {{ loading ? "加载中..." : "加载更多" }}
            <i class="fa-solid fa-chevron-down ml-1"></i>
          </button>
        </div>
      </div>

      <!-- 评选规则弹窗 -->
      <div
        v-if="showRules"
        class="fixed inset-0 z-50 flex items-end"
        style="background-color: rgba(0, 0, 0, 0.5)"
        @click="showRules = false"
      >
        <div
          class="bg-white w-full rounded-t-3xl p-6 max-h-[70vh] overflow-y-auto"
          @click.stop
        >
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold">评选规则</h3>
            <button @click="showRules = false" class="text-gray-400">
              <i class="fa-solid fa-times text-xl"></i>
            </button>
          </div>
          <div class="text-sm text-gray-600 space-y-3">
            <p>1. 大师评选每月更新一次</p>
            <p>2. 根据用户评价、服务质量、专业水平等多维度进行综合评估</p>
            <p>3. 支持用户打Call，为您喜爱的大师加油</p>
            <p>4. 评选结果仅供参考，不代表官方排名</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MasterCard from "@/components/MasterCard.vue";
import ContentCard from "@/components/ContentCard.vue";
import RankingCard from "@/components/RankingCard.vue";

export default {
  name: "RankingPage",
  components: {
    MasterCard,
    ContentCard,
    RankingCard,
  },
  data() {
    return {
      selectedCategory: "popular",
      selectedSubCategory: "leader",
      showRules: false,
      loading: false,
      masterCategories: [
        {
          id: "popular",
          name: "人气大师",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
          id: "champion",
          name: "冠军大师",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
          id: "heritage",
          name: "非遗大师",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
        },
      ],
      subCategories: [
        { id: "leader", name: "主理人频道" },
        { id: "skill", name: "技能唤醒师" },
        { id: "partner", name: "搭子唤醒师" },
      ],
      rankedMastersList: [
        {
          id: 1,
          name: "李教练",
          category: "游泳唤醒师",
          qualification: "国家二级运动员 | 8年教学经验",
          specialty: "蛙泳/自由泳",
          rating: 4.8,
          avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        },
        {
          id: 2,
          name: "赵教练",
          category: "游泳唤醒师",
          qualification: "国家一级运动员 | 10年教学经验",
          specialty: "仰泳/自由泳",
          rating: 4.9,
          avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        },
        {
          id: 3,
          name: "张教练",
          category: "游泳唤醒师",
          qualification: "国家二级运动员 | 6年教学经验",
          specialty: "自由泳/混合泳",
          rating: 4.7,
          avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        },
        {
          id: 4,
          name: "王教练",
          category: "健身判练",
          qualification: "国家级健身教练 | 5年教学经验",
          specialty: "力量训练/减脂塑形",
          rating: 4.8,
          avatar: "https://randomuser.me/api/portraits/men/13.jpg",
        },
        {
          id: 5,
          name: "刘教练",
          category: "瑜伽老师",
          qualification: "国际瑜伽认证教师 | 8年教学经验",
          specialty: "哈他瑜伽/阴瑜伽",
          rating: 4.9,
          avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        },
        {
          id: 6,
          name: "陈老师",
          category: "非遗大师",
          qualification: "非遗传承人 | 20年从业经验",
          specialty: "非遗剪纸/艺术创作",
          rating: 5.0,
          avatar: "https://randomuser.me/api/portraits/women/15.jpg",
        },
      ],
    };
  },
  computed: {
    rankedMasters() {
      // 返回排行榜大师列表
      return this.rankedMastersList;
    },
  },
  methods: {
    selectCategory(categoryId) {
      this.selectedCategory = categoryId;
      // 重新加载数据
      this.loadData();
    },

    getCurrentCategoryName() {
      const category = this.masterCategories.find(
        (c) => c.id === this.selectedCategory
      );
      return category ? category.name : "冠军大师";
    },

    handleCall(masterId) {
      console.log("打Call给大师:", masterId);
      // 可以在这里实现打Call功能
    },

    handleViewProfile(masterId) {
      console.log("查看大师主页:", masterId);
      this.$router.push("/ouyang");
    },

    loadData() {
      // 模拟加载数据
      console.log("加载数据:", this.selectedCategory, this.activeTab);
    },

    loadMore() {
      if (this.loading) return;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        console.log("加载更多");
      }, 1000);
    },
  },

  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
