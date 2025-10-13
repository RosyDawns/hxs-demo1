<template>
  <div class="page bg-gray-50" id="page-ranking">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs px-3 py-3 flex items-center justify-between"
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
    <div class="bg-white">
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

      <div class="bg-white">
        <!-- 大师分类卡片 -->
        <div class="px-2">
          <div
            class="rounded-t-xl -mt-6 relative z-10 px-2 pt-2 bg-white"
            style="margin-top: -50px"
          >
            <div class="grid grid-cols-3 gap-3 mb-4">
              <div
                v-for="(category, index) in masterCategories"
                :key="index"
                class="flex flex-col items-center cursor-pointer bg-white shadow rounded-xl overflow-hidden"
                :class="{
                  'opacity-100': selectedCategory === category.id,
                  'opacity-60': selectedCategory !== category.id,
                }"
                @click="selectCategory(category.id)"
              >
                <div class="w-full">
                  <img
                    class="w-full h-22 block"
                    :src="category.image"
                    :alt="category.name"
                  />
                </div>
                <span class="font-medium text-base py-1">{{
                  category.name
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 当前大师信息和二级分类 -->
        <div class="px-3 pb-1">
          <div class="flex items-center justify-between mb-2">
            <div class="flex-1 flex items-center">
              <h2 class="text-lg font-bold mr-2">
                {{ getCurrentCategoryName() }}
              </h2>
              <div class="text-xs text-gray-500">10月05日已更新</div>
            </div>
            <button
              class="flex items-center text-xs text-gray-600"
              @click="showRules = true"
            >
              评选规则
              <i class="fa-solid fa-chevron-right ml-1 text-xs"></i>
            </button>
          </div>

          <!-- 二级分类标签（仅人气大师显示） -->
          <div
            v-if="selectedCategory === 'popular'"
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
        <div class="border-b border-gray-100 px-3">
          <div class="flex items-center justify-between">
            <div
              class="flex-1 flex items-center space-x-4 overflow-x-auto scrollbar-hide"
            >
              <button
                v-for="(tab, index) in currentFilterTabs"
                :key="index"
                class="py-3 text-xs font-medium whitespace-nowrap relative transition-colors"
                :class="
                  selectedFilterTab === tab.id
                    ? 'text-orange-500'
                    : 'text-gray-600'
                "
                @click="selectFilterTab(tab.id)"
              >
                {{ tab.name }}
                <!-- 人气大师：下拉箭头 -->
                <i
                  v-if="tab.hasDropdown"
                  class="fa-solid fa-chevron-down text-xs ml-1"
                ></i>
                <!-- 更多按钮：右箭头 -->
                <i
                  v-if="tab.id === 'more'"
                  class="fa-solid fa-chevron-right text-xs ml-1"
                ></i>
                <!-- 冠军/非遗大师：排序图标 -->
                <i
                  v-if="tab.iconType === 'sort'"
                  class="fa-solid fa-right-left text-xs ml-1"
                ></i>
                <span
                  v-if="selectedFilterTab === tab.id"
                  class="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                ></span>
              </button>
            </div>
            <!-- 搜索图标（仅冠军大师和非遗大师显示） -->
            <button
              v-if="selectedCategory !== 'popular'"
              class="px-2 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
              @click="handleSearch"
            >
              <i class="fa-solid fa-magnifying-glass text-base"></i>
            </button>
          </div>
        </div>

        <!-- 排行榜列表区域 -->
        <div class="px-3 py-3">
          <!-- 人气大师：列表布局 -->
          <template v-if="selectedCategory === 'popular'">
            <RankingCard
              v-for="(master, index) in rankedMasters"
              :key="master.id"
              :master="master"
              :rank="index + 1"
              @view-profile="handleViewProfile"
              @call="handleCall"
            />
          </template>

          <!-- 冠军大师/非遗大师：卡片网格布局 -->
          <template v-else>
            <!-- 大师卡片模式 -->
            <template v-if="viewMode === 'master'">
              <div class="grid grid-cols-2 gap-3">
                <ChampionMasterCard
                  v-for="master in championMasters"
                  :key="master.id"
                  :master="master"
                  @call="handleCall"
                />
              </div>
            </template>
            
            <!-- 作品内容模式 -->
            <template v-else>
              <div class="grid grid-cols-2 gap-3">
                <ContentCard
                  v-for="content in contentList"
                  :key="content.id"
                  :content="content"
                  @like="handleLike"
                />
              </div>
            </template>
          </template>

          <!-- 加载更多 -->
          <div class="text-center py-3">
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
import ChampionMasterCard from "@/components/ChampionMasterCard.vue";
import User1 from "@images/user_1.png";
import User2 from "@images/user_2.png";
import User3 from "@images/user_3.png";

export default {
  name: "RankingPage",
  components: {
    MasterCard,
    ContentCard,
    RankingCard,
    ChampionMasterCard,
  },
  data() {
    return {
      selectedCategory: "popular",
      selectedSubCategory: "leader",
      selectedFilterTab: "all",
      showRules: false,
      loading: false,
      // 显示模式：'master' 大师卡片模式，'content' 作品内容模式
      viewMode: "master",
      // 人气大师的筛选标签
      popularFilterTabs: [
        { id: "all", name: "全部主理人", hasDropdown: true },
        { id: "industry", name: "行业", hasDropdown: true },
        { id: "food", name: "餐饮美食", hasDropdown: false },
        { id: "sports", name: "运动健康", hasDropdown: false },
        { id: "kids", name: "少儿培训", hasDropdown: false },
        { id: "art", name: "艺术", hasDropdown: false },
        { id: "more", name: "更多", hasDropdown: false },
      ],
      // 冠军大师/非遗大师的筛选标签
      championFilterTabs: [
        { id: "follow", name: "关注", iconType: "sort" },
        { id: "recommend", name: "推荐", iconType: "sort" },
        { id: "nearby", name: "附近", iconType: "sort" },
        { id: "screen", name: "筛选", hasDropdown: true },
        { id: "live", name: "直播", iconType: "none" },
      ],
      masterCategories: [
        {
          id: "popular",
          name: "人气大师",
          image: User1,
        },
        {
          id: "champion",
          name: "冠军大师",
          image: User2,
        },
        {
          id: "heritage",
          name: "非遗大师",
          image: User3,
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
      championMastersList: [
        {
          id: 1,
          name: "李教练",
          title: "世界游泳冠军",
          specialty: "蛙泳/自由泳",
          avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        },
        {
          id: 2,
          name: "赵教练",
          title: "奥运会游泳冠军",
          specialty: "仰泳/自由泳",
          avatar: "https://randomuser.me/api/portraits/women/21.jpg",
        },
        {
          id: 3,
          name: "张教练",
          title: "亚运会游泳冠军",
          specialty: "自由泳/混合泳",
          avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        },
        {
          id: 4,
          name: "王教练",
          title: "全国游泳冠军",
          specialty: "蝶泳/混合泳",
          avatar: "https://randomuser.me/api/portraits/men/23.jpg",
        },
        {
          id: 5,
          name: "刘教练",
          title: "世界游泳冠军",
          specialty: "自由泳/接力",
          avatar: "https://randomuser.me/api/portraits/women/24.jpg",
        },
        {
          id: 6,
          name: "陈教练",
          title: "奥运会游泳冠军",
          specialty: "仰泳/蝶泳",
          avatar: "https://randomuser.me/api/portraits/women/25.jpg",
        },
      ],
      heritageMastersList: [
        {
          id: 1,
          name: "非遗剪纸张颖莹",
          title: "非遗剪纸艺术家",
          specialty: "非遗剪纸/艺术创作",
          avatar: "https://randomuser.me/api/portraits/women/30.jpg",
        },
        {
          id: 2,
          name: "非遗年画霍庆有",
          title: "非遗木版年画艺术家",
          specialty: "非遗木版年画",
          avatar: "https://randomuser.me/api/portraits/men/31.jpg",
        },
        {
          id: 3,
          name: "京剧大师王佩瑜",
          title: "非遗京剧传承人",
          specialty: "京剧表演/传承",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        },
        {
          id: 4,
          name: "景泰蓝大师",
          title: "非遗景泰蓝工艺大师",
          specialty: "景泰蓝工艺/创作",
          avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        },
        {
          id: 5,
          name: "苏绣传承人",
          title: "非遗苏绣艺术家",
          specialty: "苏绣/刺绣艺术",
          avatar: "https://randomuser.me/api/portraits/women/34.jpg",
        },
        {
          id: 6,
          name: "紫砂壶大师",
          title: "非遗紫砂壶工艺大师",
          specialty: "紫砂壶制作",
          avatar: "https://randomuser.me/api/portraits/men/35.jpg",
        },
      ],
      contentList: [
        {
          id: 1,
          title: "非遗剪纸服装秀 | 白鹅谭艺术中心",
          author: {
            name: "非遗剪纸张颖莹",
            avatar: "https://randomuser.me/api/portraits/women/30.jpg",
          },
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
          likes: 0,
        },
        {
          id: 2,
          title: "当饰品遇到非遗-中国传统非遗纸鳖",
          author: {
            name: "灵境修猫",
            avatar: "https://randomuser.me/api/portraits/men/31.jpg",
          },
          image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400",
          likes: 0,
        },
        {
          id: 3,
          title: "京剧艺术传承精选表演",
          author: {
            name: "京剧大师王佩瑜",
            avatar: "https://randomuser.me/api/portraits/women/32.jpg",
          },
          image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=400",
          likes: 0,
        },
        {
          id: 4,
          title: "景泰蓝工艺品鉴赏",
          author: {
            name: "景泰蓝大师",
            avatar: "https://randomuser.me/api/portraits/men/33.jpg",
          },
          image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400",
          likes: 0,
        },
        {
          id: 5,
          title: "苏绣艺术展览",
          author: {
            name: "苏绣传承人",
            avatar: "https://randomuser.me/api/portraits/women/34.jpg",
          },
          image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400",
          likes: 0,
        },
        {
          id: 6,
          title: "紫砂壶制作工艺",
          author: {
            name: "紫砂壶大师",
            avatar: "https://randomuser.me/api/portraits/men/35.jpg",
          },
          image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400",
          likes: 0,
        },
      ],
    };
  },
  computed: {
    rankedMasters() {
      // 返回排行榜大师列表（人气大师）
      return this.rankedMastersList;
    },
    championMasters() {
      // 根据分类返回对应的大师列表
      if (this.selectedCategory === "champion") {
        return this.championMastersList;
      } else if (this.selectedCategory === "heritage") {
        return this.heritageMastersList;
      }
      return this.championMastersList;
    },
    // 根据当前选中的分类返回对应的筛选标签
    currentFilterTabs() {
      if (this.selectedCategory === "popular") {
        return this.popularFilterTabs;
      } else {
        return this.championFilterTabs;
      }
    },
  },
  methods: {
    selectCategory(categoryId) {
      this.selectedCategory = categoryId;
      // 切换分类时重置筛选标签到第一个
      if (categoryId === "popular") {
        this.selectedFilterTab = "all";
      } else {
        this.selectedFilterTab = "follow";
        this.viewMode = "master"; // 重置为大师模式
      }
      // 重新加载数据
      this.loadData();
    },

    selectFilterTab(tabId) {
      console.log("切换筛选标签:", tabId);
      
      // 在冠军/非遗大师页面，关注/推荐/附近 可以切换模式
      if (this.selectedCategory !== "popular") {
        // 如果点击的是当前已选中的标签，且是可切换标签，则切换模式
        const toggleableTabs = ["follow", "recommend", "nearby"];
        
        if (this.selectedFilterTab === tabId && toggleableTabs.includes(tabId)) {
          // 切换模式
          this.viewMode = this.viewMode === "master" ? "content" : "master";
        } else {
          // 切换到新标签，默认显示大师模式
          this.selectedFilterTab = tabId;
          if (toggleableTabs.includes(tabId)) {
            this.viewMode = "master";
          }
        }
      } else {
        this.selectedFilterTab = tabId;
      }
    },

    getCurrentCategoryName() {
      const category = this.masterCategories.find(
        (c) => c.id === this.selectedCategory
      );
      return category ? category.name : "冠军大师";
    },

    handleCall(masterId) {
      console.log("打Call给大师:", masterId);
      // 模拟打Call动画效果
      alert(`已为大师 ${masterId} 打Call！`);
    },

    handleViewProfile(masterId) {
      console.log("查看大师主页:", masterId);
      this.$router.push("/ouyang");
    },

    handleSearch() {
      console.log("打开搜索");
      // 跳转到搜索页面
      this.$router.push("/search");
    },

    handleLike(contentId) {
      console.log("点赞内容:", contentId);
      // 查找并更新点赞数
      const content = this.contentList.find((c) => c.id === contentId);
      if (content) {
        content.likes++;
      }
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
