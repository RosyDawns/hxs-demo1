<template>
  <div class="page h-screen bg-[#f8f5f0] flex flex-col" id="page-energy-theater">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3.5 flex items-center justify-between"
    >
      <div class="flex items-center cursor-pointer" @click="goBack">
        <i class="fa-solid fa-chevron-left text-gray-900 text-lg"></i>
      </div>
      <h1 class="text-lg font-medium text-gray-900 absolute left-1/2 transform -translate-x-1/2">
        能量剧场
      </h1>
      <div class="flex items-center space-x-3">
        <div class="flex items-center">
          <i class="fa-solid fa-star text-yellow-400 text-base mr-1"></i>
          <span class="text-gray-900 font-semibold text-base">4.9</span>
        </div>
        <button class="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
          <div class="w-2 h-2 rounded-full bg-white"></div>
        </button>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-14 pb-20 px-4">
      <!-- 广告列表标题 -->
      <div class="py-3">
        <h2 class="text-base font-medium text-gray-900">广告列表</h2>
      </div>

      <!-- 广告列表 -->
      <div class="grid grid-cols-2 gap-3 mb-4">
        <!-- 广告卡片1 -->
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div class="relative">
            <img src="@images/img_39.jpg" class="w-full h-40 object-cover" alt="广告" />
            <div
              class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
            >
              <div
                class="w-10 h-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center"
              >
                <i class="fa-solid fa-play text-gray-800 text-sm ml-0.5"></i>
              </div>
            </div>
            <div
              class="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-1.5 py-0.5 rounded"
            >
              15s
            </div>
            <div
              class="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full"
            >
              已通过
            </div>
          </div>
          <div class="p-3">
            <h3 class="text-sm font-medium text-gray-900 mb-2 truncate">
              耐克宣传视频
            </h3>
            <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>规格: 1080P</span>
            </div>
            <div class="flex items-center justify-between text-xs mb-3">
              <span class="text-gray-600">点击率: <span class="font-medium">8.5%</span></span>
              <span class="text-gray-600">完播率: <span class="font-medium">78.2%</span></span>
            </div>
            <div class="flex items-center justify-between text-xs text-gray-600">
              <button class="flex-1 text-center py-1">编辑</button>
              <div class="w-px h-3 bg-gray-200"></div>
              <button class="flex-1 text-center py-1">下载</button>
              <div class="w-px h-3 bg-gray-200"></div>
              <button class="flex-1 text-center py-1">关联</button>
              <div class="w-px h-3 bg-gray-200"></div>
              <button class="flex-1 text-center py-1">删除</button>
            </div>
          </div>
        </div>

        <!-- 广告卡片2 -->
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div class="relative">
            <img src="@images/img_39.jpg" class="w-full h-40 object-cover" alt="广告" />
            <div
              class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
            >
              <div
                class="w-10 h-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center"
              >
                <i class="fa-solid fa-play text-gray-800 text-sm ml-0.5"></i>
              </div>
            </div>
            <div
              class="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-1.5 py-0.5 rounded"
            >
              18s
            </div>
            <div
              class="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full"
            >
              已通过
            </div>
          </div>
          <div class="p-3">
            <h3 class="text-sm font-medium text-gray-900 mb-2 truncate">
              绿洲智谷铁馆...
            </h3>
            <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>规格: 1080P</span>
            </div>
            <div class="flex items-center justify-between text-xs mb-3">
              <span class="text-gray-600">点击率: <span class="font-medium">9.3%</span></span>
              <span class="text-gray-600">完播率: <span class="font-medium">80.2%</span></span>
            </div>
            <div class="flex items-center justify-between text-xs text-gray-600">
              <button class="flex-1 text-center py-1">编辑</button>
              <div class="w-px h-3 bg-gray-200"></div>
              <button class="flex-1 text-center py-1">下载</button>
              <div class="w-px h-3 bg-gray-200"></div>
              <button class="flex-1 text-center py-1">关联</button>
              <div class="w-px h-3 bg-gray-200"></div>
              <button class="flex-1 text-center py-1">删除</button>
            </div>
          </div>
        </div>

        <!-- 广告卡片3 -->
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div class="relative">
            <img src="@images/img_39.jpg" class="w-full h-40 object-cover" alt="广告" />
            <div
              class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
            >
              <div
                class="w-10 h-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center"
              >
                <i class="fa-solid fa-play text-gray-800 text-sm ml-0.5"></i>
              </div>
            </div>
            <div
              class="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-1.5 py-0.5 rounded"
            >
              23s
            </div>
            <div
              class="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full"
            >
              已通过
            </div>
          </div>
          <div class="p-3">
            <h3 class="text-sm font-medium text-gray-900 mb-2 truncate">
              理想宣传视频
            </h3>
            <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>规格: 1080P</span>
            </div>
            <div class="flex items-center justify-between text-xs mb-3">
              <span class="text-gray-600">点击率: <span class="font-medium">12.2%</span></span>
              <span class="text-gray-600">完播率: <span class="font-medium">83.5%</span></span>
            </div>
            <div class="flex items-center justify-between text-xs text-gray-600">
              <button class="flex-1 text-center py-1">编辑</button>
              <div class="w-px h-3 bg-gray-200"></div>
              <button class="flex-1 text-center py-1">下载</button>
              <div class="w-px h-3 bg-gray-200"></div>
              <button class="flex-1 text-center py-1">关联</button>
              <div class="w-px h-3 bg-gray-200"></div>
              <button class="flex-1 text-center py-1">删除</button>
            </div>
          </div>
        </div>

        <!-- 广告卡片4 -->
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div class="relative">
            <img src="@images/img_39.jpg" class="w-full h-40 object-cover" alt="广告" />
            <div
              class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
            >
              <div
                class="w-10 h-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center"
              >
                <i class="fa-solid fa-play text-gray-800 text-sm ml-0.5"></i>
              </div>
            </div>
            <div
              class="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-1.5 py-0.5 rounded"
            >
              18s
            </div>
            <div
              class="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full"
            >
              已通过
            </div>
          </div>
          <div class="p-3">
            <h3 class="text-sm font-medium text-gray-900 mb-2 truncate">
              Adidas宣传视频
            </h3>
            <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>规格: 1080P</span>
            </div>
            <div class="flex items-center justify-between text-xs mb-3">
              <span class="text-gray-600">点击率: <span class="font-medium">13.8%</span></span>
              <span class="text-gray-600">完播率: <span class="font-medium">85.9%</span></span>
            </div>
            <div class="flex items-center justify-between text-xs text-gray-600">
              <button class="flex-1 text-center py-1">编辑</button>
              <div class="w-px h-3 bg-gray-200"></div>
              <button class="flex-1 text-center py-1">下载</button>
              <div class="w-px h-3 bg-gray-200"></div>
              <button class="flex-1 text-center py-1">关联</button>
              <div class="w-px h-3 bg-gray-200"></div>
              <button class="flex-1 text-center py-1">删除</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 统计数据 -->
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div class="bg-white rounded-2xl p-4 text-center shadow-sm">
          <p class="text-xs text-gray-500 mb-2">今日展示量</p>
          <p class="text-2xl font-bold text-gray-900">16,500</p>
        </div>
        <div class="bg-white rounded-2xl p-4 text-center shadow-sm">
          <p class="text-xs text-gray-500 mb-2">今日点击量</p>
          <p class="text-2xl font-bold text-gray-900">4,900</p>
        </div>
        <div class="bg-white rounded-2xl p-4 text-center shadow-sm">
          <p class="text-xs text-gray-500 mb-2">今日万播率</p>
          <p class="text-2xl font-bold text-gray-900">82%</p>
        </div>
        <div class="bg-white rounded-2xl p-4 text-center shadow-sm">
          <p class="text-xs text-gray-500 mb-2">今日消耗魔豆</p>
          <p class="text-2xl font-bold text-gray-900">2,250</p>
        </div>
      </div>

      <!-- 近7日核心数据趋势 -->
      <div class="bg-white rounded-2xl p-4 shadow-sm">
        <h3 class="text-base font-medium text-gray-900 mb-4">近7日核心数据趋势</h3>
        
        <!-- Tab 切换 -->
        <div class="flex items-center space-x-2 mb-4">
          <button
            class="px-4 py-1.5 rounded-full text-sm font-medium"
            :class="activeTab === 'display' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'"
            @click="activeTab = 'display'"
          >
            展示量
          </button>
          <button
            class="px-4 py-1.5 rounded-full text-sm font-medium"
            :class="activeTab === 'click' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'"
            @click="activeTab = 'click'"
          >
            点击率
          </button>
          <button
            class="px-4 py-1.5 rounded-full text-sm font-medium"
            :class="activeTab === 'complete' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'"
            @click="activeTab = 'complete'"
          >
            完播率
          </button>
          <button
            class="px-4 py-1.5 rounded-full text-sm font-medium"
            :class="activeTab === 'consume' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'"
            @click="activeTab = 'consume'"
          >
            消耗
          </button>
        </div>

        <!-- 图表区域 -->
        <div class="relative h-64">
          <!-- Y轴刻度 -->
          <div class="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400">
            <span>1800</span>
            <span>1350</span>
            <span>900</span>
            <span>450</span>
            <span>0</span>
          </div>

          <!-- 图表内容区 -->
          <div class="ml-12 h-full relative">
            <!-- 网格线 -->
            <div class="absolute inset-0 flex flex-col justify-between">
              <div class="border-t border-gray-100"></div>
              <div class="border-t border-gray-100"></div>
              <div class="border-t border-gray-100"></div>
              <div class="border-t border-gray-100"></div>
              <div class="border-t border-gray-100"></div>
            </div>

            <!-- 折线图（使用SVG模拟） -->
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
              <polyline
                points="20,150 60,130 100,110 140,100 180,120 220,90 260,80"
                fill="none"
                stroke="#fb923c"
                stroke-width="2"
              />
              <!-- 数据点 -->
              <circle cx="20" cy="150" r="4" fill="#fb923c" />
              <circle cx="60" cy="130" r="4" fill="#fb923c" />
              <circle cx="100" cy="110" r="4" fill="#fb923c" />
              <circle cx="140" cy="100" r="4" fill="#fb923c" />
              <circle cx="180" cy="120" r="4" fill="#fb923c" />
              <circle cx="220" cy="90" r="4" fill="#fb923c" />
              <circle cx="260" cy="80" r="4" fill="#fb923c" />
            </svg>

            <!-- 数据提示框 -->
            <div class="absolute" style="left: 50%; top: 40%">
              <div class="bg-white border border-gray-200 rounded px-2 py-1 text-xs shadow-sm">
                <div class="text-gray-500 mb-1">11/10</div>
                <div class="text-orange-500 font-medium">展示量: 1650</div>
              </div>
            </div>

            <!-- X轴日期 -->
            <div class="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
              <span>11/4</span>
              <span>11/5</span>
              <span>11/6</span>
              <span>11/7</span>
              <span>11/8</span>
              <span>11/10</span>
            </div>
          </div>
        </div>

        <!-- 图例 -->
        <div class="flex items-center justify-center mt-4">
          <div class="flex items-center">
            <div class="w-3 h-0.5 bg-orange-500 mr-1"></div>
            <span class="text-xs text-gray-600">展示量</span>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部导航 -->
    <footer
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 flex justify-around z-50"
    >
      <button class="flex flex-col items-center" @click="activeNav = 'data'">
        <i
          class="fa-solid fa-chart-line text-xl mb-1"
          :class="activeNav === 'data' ? 'text-orange-500' : 'text-gray-400'"
        ></i>
        <span
          class="text-xs"
          :class="activeNav === 'data' ? 'text-orange-500' : 'text-gray-400'"
        >
          数据看板
        </span>
      </button>
      <button class="flex flex-col items-center" @click="activeNav = 'create'">
        <i
          class="fa-solid fa-circle-plus text-2xl mb-1"
          :class="activeNav === 'create' ? 'text-orange-500' : 'text-gray-400'"
        ></i>
        <span
          class="text-xs"
          :class="activeNav === 'create' ? 'text-orange-500' : 'text-gray-400'"
        >
          新建计划
        </span>
      </button>
      <button class="flex flex-col items-center" @click="activeNav = 'finance'">
        <i
          class="fa-solid fa-file-invoice-dollar text-xl mb-1"
          :class="activeNav === 'finance' ? 'text-orange-500' : 'text-gray-400'"
        ></i>
        <span
          class="text-xs"
          :class="activeNav === 'finance' ? 'text-orange-500' : 'text-gray-400'"
        >
          财务管理
        </span>
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "EnergyTheaterPage",
  data() {
    return {
      activeTab: "display",
      activeNav: "data",
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}
</style>
