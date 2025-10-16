<template>
  <div class="page bg-gray-50 min-h-screen" id="page-search">
    <!-- 顶部导航栏 -->
    <header class="sticky top-0 z-50 bg-white px-4 border-b border-gray-200">
      <div class="flex items-center">
        <!-- 左侧返回按钮 -->
        <button @click="$router.back()" class="text-black mr-2">
          <i class="fa-solid fa-chevron-left text-lg"></i>
        </button>
        <!-- 中间标签和按钮 -->
        <div class="flex items-center">
          <button
            class="py-3 text-base relative text-black mr-6"
            @click="switchToAll"
          >
            搜全部
            <div
              v-if="searchMode === 'all'"
              class="absolute bottom-0 left-0 right-0 h-1 bg-[#ED743A]"
            ></div>
          </button>

          <button class="flex items-center" @click="switchToAI">
            <div class="relative">
              <div class="py-3 text-base text-black">AI大狮兄</div>
              <div
                v-if="searchMode === 'ai'"
                class="absolute bottom-0 left-0 right-0 h-1 bg-[#7473F6]"
              ></div>
            </div>
            <span
              class="bg-[#6366F1] text-white px-2 rounded-tl-full rounded-r-full ml-1"
              style="font-size: 10px"
            >
              一键匹配
            </span>
          </button>
        </div>
      </div>
    </header>

    <!-- 搜全部模式 -->
    <div v-if="searchMode === 'all'">
      <!-- 小型搜索框 -->
      <div class="px-4 pt-3 pb-2 bg-white">
        <div class="relative">
          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            placeholder="健身计划"
            class="w-full pl-4 pr-20 py-2.5 rounded-full bg-gray-50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#ED743A] text-sm transition-all"
            @keyup.enter="handleSearch"
          />
          <!-- 清空按钮 -->
          <button
            v-if="searchQuery"
            class="absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            @click="clearSearch"
          >
            <i class="fa-solid fa-circle-xmark text-lg"></i>
          </button>
          <button
            class="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#ED743A] text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-[#DC6330] transition-colors"
            @click="handleSearch"
          >
            搜索
          </button>
        </div>
      </div>

      <!-- 搜索结果区域 -->
      <div v-if="showSearchResults" class="px-4 py-4">
        <!-- 搜索中 -->
        <div
          v-if="isSearching"
          class="flex flex-col items-center justify-center py-12"
        >
          <div
            class="w-12 h-12 border-4 border-[#ED743A] border-t-transparent rounded-full animate-spin mb-4"
          ></div>
          <p class="text-gray-500 text-sm">搜索中...</p>
        </div>

        <!-- 搜索结果 -->
        <div v-else>
          <!-- 结果头部 -->
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-base font-medium text-gray-900">
              找到
              <span class="text-[#ED743A]">{{ searchResults.length }}</span>
              个相关结果
            </h3>
            <button
              class="text-sm text-gray-500 hover:text-gray-700"
              @click="clearSearchResults"
            >
              <i class="fa-solid fa-xmark mr-1"></i>清空
            </button>
          </div>

          <!-- 搜索无结果 -->
          <div
            v-if="searchResults.length === 0"
            class="flex flex-col items-center justify-center py-12"
          >
            <i
              class="fa-solid fa-magnifying-glass text-gray-300 text-5xl mb-4"
            ></i>
            <p class="text-gray-500 text-sm mb-2">没有找到相关结果</p>
            <p class="text-gray-400 text-xs">试试其他关键词</p>
          </div>

          <!-- 结果列表 -->
          <div v-else class="grid grid-cols-2 gap-3">
            <CoachListCard
              v-for="coach in searchResults"
              :key="coach.id"
              :coach="coach"
              @click="handleMasterClick(coach)"
            />
          </div>
        </div>
      </div>

      <!-- 默认内容 -->
      <div v-else class="px-4 py-4">
        <!-- 历史搜索 -->
        <template v-if="searchHistory.length > 0">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-base font-medium text-gray-900">历史搜索</h3>
            <button @click="clearHistory" class="text-gray-400">
              <i class="fa-solid fa-trash text-sm"></i>
            </button>
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="(item, index) in visibleHistory"
              :key="index"
              class="px-3 py-2 bg-gray-100 rounded-full text-[13px] text-gray-600 hover:bg-gray-200 transition-colors"
              @click="handleHistoryClick(item)"
            >
              {{ item }}
            </button>
            <button
              v-if="searchHistory.length > 6"
              class="px-3 py-2 bg-gray-100 rounded-full text-gray-400 hover:bg-gray-200 transition-colors"
              @click="toggleHistoryExpand"
            >
              <i
                class="fa-solid text-xs"
                :class="historyExpanded ? 'fa-chevron-up' : 'fa-chevron-down'"
              ></i>
            </button>
          </div>
        </template>

        <!-- 猜你喜欢 -->
        <div class="pt-6">
          <h3 class="text-base font-medium text-gray-900 mb-3">猜你喜欢</h3>
          <div class="grid grid-cols-2 gap-3">
            <button
              v-for="item in likeItems"
              :key="item"
              class="text-left pt-1 text-[15px] text-gray-700 hover:bg-gray-50 transition-colors"
              @click="handleLikeClick(item)"
            >
              {{ item }}
            </button>
          </div>
        </div>

        <!-- 城市大师 -->
        <div class="pt-6">
          <h3 class="text-base font-medium text-gray-900 mb-3">城市大师</h3>
          <div class="grid grid-cols-2 gap-3">
            <CoachListCard
              v-for="coach in cityMasters"
              :key="coach.id"
              :coach="coach"
              @click="handleMasterClick(coach)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- AI大狮兄模式 -->
    <div v-else>
      <!-- 大型搜索框 -->
      <div class="px-4 pt-3 pb-2 bg-white">
        <div
          class="relative rounded-2xl transition-all duration-200"
          :class="
            isFocused ? 'border border-[#6366F1]' : 'border border-gray-300'
          "
        >
          <textarea
            ref="aiSearchInput"
            v-model="searchQuery"
            placeholder="健身计划"
            class="w-full h-30 p-2 rounded-xl focus:outline-none text-base"
            @focus="isFocused = true"
            @blur="handleBlur"
            @keyup.enter="handleSearch"
          ></textarea>
          <div class="absolute right-3 bottom-3 flex items-center space-x-2">
            <button
              class="text-gray-400 hover:text-gray-600"
              @click="clearSearch"
            >
              <i class="fa-solid fa-circle-xmark text-lg"></i>
            </button>
            <button
              class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600"
            >
              <i class="fa-solid fa-microphone text-xl"></i>
            </button>
            <button
              class="bg-[#7473F6] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#DC6330] transition-colors"
              @click="handleSearch"
            >
              搜索
            </button>
          </div>
        </div>
      </div>

      <!-- AI搜索结果 -->
      <div v-if="showSearchResults" class="px-4 py-4">
        <!-- 搜索中 -->
        <div
          v-if="isSearching"
          class="flex flex-col items-center justify-center py-12"
        >
          <div
            class="w-12 h-12 border-4 border-[#6366F1] border-t-transparent rounded-full animate-spin mb-4"
          ></div>
          <p class="text-gray-500 text-sm">AI智能匹配中...</p>
        </div>

        <!-- 搜索结果 -->
        <div v-else>
          <!-- 结果头部 -->
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-base font-medium text-gray-900">
                <i class="fa-solid fa-robot text-[#6366F1] mr-2"></i>
                AI为你找到
                <span class="text-[#6366F1]">{{ searchResults.length }}</span>
                位合适的教练
              </h3>
              <p class="text-xs text-gray-500 mt-1">
                匹配度: {{ matchScore }}%
              </p>
            </div>
            <button
              class="text-sm text-gray-500 hover:text-gray-700"
              @click="clearSearchResults"
            >
              <i class="fa-solid fa-xmark mr-1"></i>清空
            </button>
          </div>

          <!-- 搜索无结果 -->
          <div
            v-if="searchResults.length === 0"
            class="flex flex-col items-center justify-center py-12"
          >
            <i class="fa-solid fa-robot text-gray-300 text-5xl mb-4"></i>
            <p class="text-gray-500 text-sm mb-2">暂无匹配结果</p>
            <p class="text-gray-400 text-xs">试试更换一下描述方式</p>
          </div>

          <!-- 结果列表 -->
          <div v-else class="grid grid-cols-2 gap-3">
            <CoachListCard
              v-for="coach in searchResults"
              :key="coach.id"
              :coach="coach"
              @click="handleMasterClick(coach)"
            />
          </div>
        </div>
      </div>

      <!-- AI建议列表 -->
      <div v-else class="px-4 py-4">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-base font-medium text-gray-900">试试这样问</h3>
          <button @click="clearHistory" class="text-gray-400">
            <i class="fa-solid fa-trash text-sm"></i>
          </button>
        </div>
        <div class="space-y-0 bg-gray-50 rounded-xl overflow-hidden">
          <button
            v-for="(suggestion, index) in aiSuggestions"
            :key="index"
            class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-100 transition-colors border-b border-gray-200 last:border-b-0"
            @click="handleSuggestionClick(suggestion)"
          >
            <span class="text-[14px] text-gray-800">{{ suggestion }}</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoachListCard from "../components/CoachListCard.vue";

export default {
  name: "SearchPage",
  components: {
    CoachListCard,
  },
  data() {
    return {
      searchMode: "all", // 'all' 或 'ai'
      searchQuery: "",
      isFocused: false,
      historyExpanded: false,
      showSearchResults: false, // 是否显示搜索结果
      isSearching: false, // 是否正在搜索
      searchResults: [], // 搜索结果
      matchScore: 95, // AI匹配度
      searchHistory: [
        "浦东最好的健身教练",
        "上门服务游泳教练",
        "游泳教练",
        "游泳搭子",
        "浦东游泳搭子",
        "到店服务健身教练",
      ],
      aiSuggestions: [
        "帮我找一个附近的瑜伽私教",
        "帮我找一个同城的考研专业课辅导老师",
        "帮我找一个附近能上门的家电维修师傅",
        "帮我找一个同城的手账素材创作者",
        "帮我找一个附近的少儿街舞教练",
        "帮我找一个同城的独立摄影师（擅长人像）",
        "帮我找一个附近的宠物美容师（可上门）",
        "帮我找一个同城的汉服同袍（有线下活动经验）",
        "帮我找一个附近的烘焙老师（可小班教学）",
        "帮我找一个同城的法律咨询顾问（擅长民事纠纷）",
        "帮我找一个附近的围棋启蒙老师（针对5-8岁儿童）",
      ],
      likeItems: [
        "游泳教练",
        "吐嘎健身厨房",
        "游泳",
        "ALEX健身频道",
        "游泳教练Tim Lee",
        "健身教练Iris",
        "健身搭子",
        "减脂热量研究",
      ],
      cityMasters: [
        {
          id: 1,
          name: "李教练",
          avatar: "https://randomuser.me/api/portraits/men/20.jpg",
          pic: "https://randomuser.me/api/portraits/men/20.jpg",
          qualification: "国家二级游泳运动员",
          skills: "蛙泳/自由泳",
          rating: 4.8,
          label: "到店服务",
        },
        {
          id: 2,
          name: "赵教练",
          avatar: "https://randomuser.me/api/portraits/women/21.jpg",
          pic: "https://randomuser.me/api/portraits/women/21.jpg",
          qualification: "国家一级游泳运动员",
          skills: "仰泳/自由泳",
          rating: 4.9,
          label: "上门服务",
        },
      ],
    };
  },
  computed: {
    visibleHistory() {
      if (this.historyExpanded) {
        return this.searchHistory;
      }
      return this.searchHistory.slice(0, 6);
    },
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        // 添加到搜索历史
        if (!this.searchHistory.includes(this.searchQuery.trim())) {
          this.searchHistory.unshift(this.searchQuery.trim());
          if (this.searchHistory.length > 20) {
            this.searchHistory.pop();
          }
        }

        this.isFocused = false;
        console.log("搜索:", this.searchQuery, "模式:", this.searchMode);

        // 显示搜索结果区域
        this.showSearchResults = true;
        this.isSearching = true;

        // 模拟搜索请求（延迟800ms）
        setTimeout(() => {
          this.performSearch();
          this.isSearching = false;
        }, 800);
      }
    },

    performSearch() {
      // 模拟搜索逻辑，这里返回所有教练作为结果
      // 实际项目中应该根据 searchQuery 和 searchMode 进行真实搜索
      const allCoaches = [
        {
          id: 1,
          name: "李教练",
          avatar: "https://randomuser.me/api/portraits/men/20.jpg",
          pic: "https://randomuser.me/api/portraits/men/20.jpg",
          qualification: "国家二级游泳运动员",
          skills: "蛙泳/自由泳",
          rating: 4.8,
          label: "到店服务",
        },
        {
          id: 2,
          name: "赵教练",
          avatar: "https://randomuser.me/api/portraits/women/21.jpg",
          pic: "https://randomuser.me/api/portraits/women/21.jpg",
          qualification: "国家一级游泳运动员",
          skills: "仰泳/自由泳",
          rating: 4.9,
          label: "上门服务",
        },
        {
          id: 3,
          name: "王教练",
          avatar: "https://randomuser.me/api/portraits/men/22.jpg",
          pic: "https://randomuser.me/api/portraits/men/22.jpg",
          qualification: "国家一级健身教练",
          skills: "私教/小班课",
          rating: 4.7,
          label: "到店服务",
        },
        {
          id: 4,
          name: "张教练",
          avatar: "https://randomuser.me/api/portraits/women/23.jpg",
          pic: "https://randomuser.me/api/portraits/women/23.jpg",
          qualification: "国际瑜伽认证教练",
          skills: "哈他瑜伽/流瑜伽",
          rating: 4.9,
          label: "上门服务",
        },
      ];

      // 简单的关键词匹配
      const query = this.searchQuery.toLowerCase();
      this.searchResults = allCoaches.filter((coach) => {
        return (
          coach.name.toLowerCase().includes(query) ||
          coach.qualification.toLowerCase().includes(query) ||
          coach.skills.toLowerCase().includes(query) ||
          coach.label.toLowerCase().includes(query)
        );
      });

      // 如果没有精确匹配，返回所有结果
      if (this.searchResults.length === 0) {
        this.searchResults = allCoaches;
      }

      // AI模式下计算匹配度
      if (this.searchMode === "ai") {
        this.matchScore = Math.floor(Math.random() * 15) + 85; // 85-100
      }
    },

    handleBlur() {
      // AI模式下才需要延迟关闭
      if (this.searchMode === "ai") {
        setTimeout(() => {
          this.isFocused = false;
        }, 200);
      }
    },

    handleSuggestionClick(suggestion) {
      this.searchQuery = suggestion;
      this.handleSearch();
    },

    handleHistoryClick(item) {
      this.searchQuery = item;
      this.handleSearch();
    },

    handleLikeClick(item) {
      this.searchQuery = item;
      this.handleSearch();
    },

    handleMasterClick(master) {
      console.log("点击大师:", master.name);
      this.$router.push("/ouyang");
    },

    toggleHistoryExpand() {
      this.historyExpanded = !this.historyExpanded;
    },

    switchToAll() {
      if (this.searchMode !== "all") {
        this.resetSearchData();
        this.searchMode = "all";
      }
    },

    switchToAI() {
      if (this.searchMode !== "ai") {
        this.resetSearchData();
        this.searchMode = "ai";
      }
    },

    resetSearchData() {
      // 重置搜索相关数据
      this.searchQuery = "";
      this.showSearchResults = false;
      this.isSearching = false;
      this.searchResults = [];
      this.isFocused = false;
      this.matchScore = 95;
    },

    clearHistory() {
      this.searchHistory = [];
    },

    clearSearch() {
      this.searchQuery = "";
      // 聚焦输入框
      this.$nextTick(() => {
        if (this.searchMode === "all" && this.$refs.searchInput) {
          this.$refs.searchInput.focus();
        } else if (this.searchMode === "ai" && this.$refs.aiSearchInput) {
          this.$refs.aiSearchInput.focus();
        }
      });
    },

    clearSearchResults() {
      this.showSearchResults = false;
      this.searchResults = [];
      this.searchQuery = "";
    },

    closeSuggestions() {
      this.isFocused = false;
    },

    handleImageError(event) {
      event.target.src = "https://via.placeholder.com/300x300?text=暂无图片";
    },
  },

  mounted() {
    // 从路由参数中获取初始搜索关键词
    const query = this.$route.query.q;
    if (query) {
      this.searchQuery = query;
    }
  },
};
</script>

<style scoped>
/* 行截断样式 */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 搜索框过渡动画 */
input {
  transition: all 0.2s ease;
}

/* 卡片悬停效果 */
.shadow-sm {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

/* 防止用户选择文本 */
.page {
  -webkit-user-select: none;
  user-select: none;
}

input {
  -webkit-user-select: text;
  user-select: text;
}
</style>
