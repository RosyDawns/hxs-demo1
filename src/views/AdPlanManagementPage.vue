<template>
  <div class="page h-screen bg-[#f8f5f0] flex flex-col" id="page-ad-plan-management">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3.5 flex items-center justify-between"
    >
      <div class="flex items-center cursor-pointer" @click="goBack">
        <i class="fa-solid fa-chevron-left text-gray-900 text-lg"></i>
      </div>
      <h1 class="text-lg font-medium text-gray-900 absolute left-1/2 transform -translate-x-1/2">
        新建广告计划
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

    <!-- 标签页切换 -->
    <div class="fixed top-14 left-0 right-0 bg-[#f8f5f0] z-40 px-4 pt-4 pb-4">
      <div class="flex items-center space-x-3">
        <button
          class="flex-1 py-2.5 rounded-xl text-sm font-medium transition-all"
          :class="activeTab === 'list' ? 'bg-orange-500 text-white shadow-sm' : 'bg-white text-gray-600'"
          @click="activeTab = 'list'"
        >
          投放列表
        </button>
        <button
          class="flex-1 py-2.5 rounded-xl text-sm font-medium transition-all"
          :class="activeTab === 'create' ? 'bg-orange-500 text-white shadow-sm' : 'bg-white text-gray-600'"
          @click="activeTab = 'create'"
        >
          新建计划
        </button>
      </div>
    </div>

    <main class="flex-1 overflow-y-auto pt-32 pb-20 px-4">
      <!-- 投放列表标签页 -->
      <div v-show="activeTab === 'list'" class="space-y-4">
        <!-- 广告计划卡片 -->
        <div
          v-for="plan in adPlans"
          :key="plan.id"
          class="bg-white rounded-2xl overflow-hidden"
        >
          <!-- 计划标题和状态 -->
          <div class="px-4 pt-4 pb-2">
            <h3 class="text-base font-medium text-gray-900 mb-2">{{ plan.name }}</h3>
            <div class="flex items-center justify-between">
              <span
                class="px-2.5 py-0.5 rounded-full text-xs font-medium"
                :class="getStatusClass(plan.status)"
              >
                {{ plan.statusText }}
              </span>
              <p class="text-xs text-gray-500">{{ plan.dateRange }}</p>
            </div>
          </div>

          <!-- 预算信息 -->
          <div class="px-4 py-3 bg-[#f8f5f0] grid grid-cols-2 gap-8">
            <div>
              <p class="text-xs text-gray-500 mb-1">总预算</p>
              <p class="text-xl font-bold text-gray-900">{{ plan.totalBudget.toLocaleString() }}<span class="text-xs font-normal ml-0.5">豆</span></p>
            </div>
            <div>
              <p class="text-xs text-gray-500 mb-1">日预算</p>
              <p class="text-xl font-bold text-gray-900">{{ plan.dailyBudget.toLocaleString() }}<span class="text-xs font-normal ml-0.5">豆</span></p>
            </div>
          </div>

          <!-- 定向和出价 -->
          <div class="px-4 py-3 grid grid-cols-2 gap-8">
            <div>
              <p class="text-xs text-gray-500 mb-1">定向</p>
              <p class="text-sm text-gray-900">{{ plan.targeting }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-500 mb-1">出价</p>
              <p class="text-sm text-gray-900">CPC {{ plan.cpc }}<span class="text-xs ml-0.5">豆</span></p>
            </div>
          </div>

          <!-- 数据统计 -->
          <div class="px-4 py-3 bg-[#f8f5f0] grid grid-cols-3 gap-2">
            <div>
              <p class="text-xs text-gray-500 mb-1">展示量</p>
              <p class="text-base font-semibold text-gray-900">{{ plan.impressions.toLocaleString() }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-500 mb-1">点击量</p>
              <p class="text-base font-semibold text-gray-900">{{ plan.clicks.toLocaleString() }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-500 mb-1">消耗</p>
              <p class="text-base font-semibold text-gray-900">{{ plan.spent.toLocaleString() }}<span class="text-xs font-normal ml-0.5">豆</span></p>
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="px-4 py-3 flex items-center justify-end space-x-3">
            <button
              v-if="plan.status === 'paused'"
              class="text-sm text-orange-500"
              @click="resumePlan(plan)"
            >
              启用
            </button>
            <button
              v-if="plan.status === 'running'"
              class="text-sm text-orange-500"
              @click="pausePlan(plan)"
            >
              暂停
            </button>
            <button class="text-sm text-gray-600" @click="editPlan(plan)">编辑</button>
            <button class="text-sm text-gray-600" @click="copyPlan(plan)">复制</button>
            <button class="text-sm text-gray-600" @click="deletePlan(plan)">删除</button>
          </div>
        </div>
      </div>

      <!-- 新建计划标签页 -->
      <div v-show="activeTab === 'create'">
        <div class="bg-white rounded-2xl p-4">
          <!-- 计划名称 -->
          <div class="mb-4">
            <label class="text-sm text-gray-900 mb-2 block">
              计划名称 <span class="text-red-500">*</span>
            </label>
            <input
              v-model="newPlan.name"
              type="text"
              placeholder="请输入广告计划名称"
              class="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <!-- 投放视频 -->
          <div class="mb-4">
            <label class="text-sm text-gray-900 mb-2 block">
              投放视频 <span class="text-red-500">*</span>
            </label>
            <div
              class="w-full px-4 py-12 bg-gray-50 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
              @click="selectVideo"
            >
              <i class="fa-solid fa-video text-3xl text-gray-400 mb-2"></i>
              <p class="text-sm text-gray-500">添加视频</p>
            </div>
          </div>

          <!-- 总预算 -->
          <div class="mb-4">
            <label class="text-sm text-gray-900 mb-2 block">
              总预算（豆）<span class="text-red-500">*</span>
            </label>
            <input
              v-model="newPlan.totalBudget"
              type="number"
              placeholder="请输入总预算"
              class="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <!-- 日预算 -->
          <div class="mb-4">
            <label class="text-sm text-gray-900 mb-2 block">
              日预算（豆）<span class="text-red-500">*</span>
            </label>
            <input
              v-model="newPlan.dailyBudget"
              type="number"
              placeholder="请输入日预算"
              class="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <!-- 开始日期 -->
          <div class="mb-4">
            <label class="text-sm text-gray-900 mb-2 block">
              开始日期 <span class="text-red-500">*</span>
            </label>
            <input
              v-model="newPlan.startDate"
              type="text"
              readonly
              placeholder="2025年11月1日"
              class="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-900 placeholder-gray-400 cursor-pointer"
              @click="selectStartDate"
            />
          </div>

          <!-- 结束日期 -->
          <div class="mb-4">
            <label class="text-sm text-gray-900 mb-2 block">
              结束日期 <span class="text-red-500">*</span>
            </label>
            <input
              v-model="newPlan.endDate"
              type="text"
              readonly
              placeholder="2025年11月30日"
              class="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-900 placeholder-gray-400 cursor-pointer"
              @click="selectEndDate"
            />
          </div>

          <!-- 年龄范围 -->
          <div class="mb-4">
            <label class="text-sm text-gray-900 mb-2 block">年龄范围</label>
            <div class="relative">
              <select
                v-model="newPlan.ageRange"
                class="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="18-35岁">18–35岁</option>
                <option value="24-40岁">24–40岁</option>
                <option value="30-45岁">30–45岁</option>
                <option value="18-50岁">全年龄</option>
              </select>
              <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
            </div>
          </div>

          <!-- 性别 -->
          <div class="mb-4">
            <label class="text-sm text-gray-900 mb-2 block">性别</label>
            <div class="relative">
              <select
                v-model="newPlan.gender"
                class="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="女性">女性</option>
                <option value="男性">男性</option>
                <option value="不限">不限</option>
              </select>
              <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
            </div>
          </div>

          <!-- 地域 -->
          <div class="mb-4">
            <label class="text-sm text-gray-900 mb-2 block">地域</label>
            <div class="relative">
              <select
                v-model="newPlan.region"
                class="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="一线城市">一线城市</option>
                <option value="二线城市">二线城市</option>
                <option value="三线城市">三线城市</option>
                <option value="全国">全国</option>
              </select>
              <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
            </div>
          </div>

          <!-- 出价策略 -->
          <div class="mb-4">
            <label class="text-sm text-gray-900 mb-2 block">出价策略</label>
            <div class="relative">
              <select
                v-model="newPlan.bidStrategy"
                class="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="点击出价 (CPC)">点击出价 (CPC)</option>
                <option value="展示出价 (CPM)">展示出价 (CPM)</option>
                <option value="转化出价 (CPA)">转化出价 (CPA)</option>
              </select>
              <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
            </div>
          </div>

          <!-- 点击出价 -->
          <div class="mb-6">
            <label class="text-sm text-gray-900 mb-2 block">
              点击出价 (CPC)（豆）<span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <input
                v-model="newPlan.cpc"
                type="number"
                step="0.1"
                placeholder="1.5"
                class="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
            </div>
          </div>

          <!-- 提交按钮 -->
          <button
            class="w-full bg-orange-500 text-white py-3.5 rounded-xl font-medium text-base hover:bg-orange-600 transition-colors"
            @click="submitPlan"
          >
            创建计划
          </button>
        </div>
      </div>
    </main>

    <!-- 底部导航 -->
    <footer
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 flex justify-around z-50"
    >
      <button class="flex flex-col items-center" @click="navigateTo('data')">
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
      <button class="flex flex-col items-center" @click="navigateTo('create')">
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
      <button class="flex flex-col items-center" @click="navigateTo('finance')">
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
  name: "AdPlanManagementPage",
  data() {
    return {
      activeTab: "list",
      activeNav: "create",
      newPlan: {
        name: "",
        video: null,
        totalBudget: "",
        dailyBudget: "",
        startDate: "2025年11月1日",
        endDate: "2025年11月30日",
        ageRange: "18-35岁",
        gender: "女性",
        region: "一线城市",
        bidStrategy: "点击出价 (CPC)",
        cpc: "1.5",
      },
      adPlans: [
        {
          id: 1,
          name: "冬季促销活动",
          status: "running",
          statusText: "运行中",
          dateRange: "2025-11-01 至 2025-11-30",
          totalBudget: 50000,
          dailyBudget: 5000,
          targeting: "18-35岁 女性 一线城市",
          cpc: 1.5,
          impressions: 56789,
          clicks: 8901,
          spent: 12345.67,
        },
        {
          id: 2,
          name: "秋季新品推广",
          status: "paused",
          statusText: "已暂停",
          dateRange: "2025-10-15 至 2025-11-15",
          totalBudget: 30000,
          dailyBudget: 3000,
          targeting: "24-40岁 男性 二线城市",
          cpc: 20,
          impressions: 34567,
          clicks: 6852,
          spent: 8901.23,
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    getStatusClass(status) {
      const classes = {
        running: "bg-orange-500 text-white",
        paused: "bg-gray-400 text-white",
        stopped: "bg-red-500 text-white",
      };
      return classes[status] || "bg-gray-400 text-white";
    },
    pausePlan(plan) {
      if (confirm(`确认要暂停"${plan.name}"吗?`)) {
        plan.status = "paused";
        plan.statusText = "已暂停";
      }
    },
    resumePlan(plan) {
      if (confirm(`确认要启用"${plan.name}"吗?`)) {
        plan.status = "running";
        plan.statusText = "运行中";
      }
    },
    editPlan(plan) {
      alert(`编辑计划: ${plan.name}`);
    },
    copyPlan(plan) {
      alert(`复制计划: ${plan.name}`);
    },
    deletePlan(plan) {
      if (confirm(`确认要删除"${plan.name}"吗?\n此操作不可恢复`)) {
        const index = this.adPlans.findIndex((p) => p.id === plan.id);
        if (index > -1) {
          this.adPlans.splice(index, 1);
          alert("已删除");
        }
      }
    },
    selectVideo() {
      alert("选择视频功能开发中...\n请从库中选择或上传新视频");
    },
    selectStartDate() {
      alert("选择开始日期");
      // 这里可以集成日期选择器
    },
    selectEndDate() {
      alert("选择结束日期");
      // 这里可以集成日期选择器
    },
    submitPlan() {
      // 验证必填字段
      if (!this.newPlan.name) {
        alert("请输入计划名称");
        return;
      }
      if (!this.newPlan.totalBudget) {
        alert("请输入总预算");
        return;
      }
      if (!this.newPlan.dailyBudget) {
        alert("请输入日预算");
        return;
      }
      if (!this.newPlan.cpc) {
        alert("请输入点击出价");
        return;
      }

      // 创建新计划
      const newPlanData = {
        id: this.adPlans.length + 1,
        name: this.newPlan.name,
        status: "running",
        statusText: "运行中",
        dateRange: `${this.newPlan.startDate} 至 ${this.newPlan.endDate}`,
        totalBudget: parseInt(this.newPlan.totalBudget),
        dailyBudget: parseInt(this.newPlan.dailyBudget),
        targeting: `${this.newPlan.ageRange} ${this.newPlan.gender} ${this.newPlan.region}`,
        cpc: parseFloat(this.newPlan.cpc),
        impressions: 0,
        clicks: 0,
        spent: 0,
      };

      this.adPlans.unshift(newPlanData);
      
      // 清空表单
      this.newPlan = {
        name: "",
        video: null,
        totalBudget: "",
        dailyBudget: "",
        startDate: "2025年11月1日",
        endDate: "2025年11月30日",
        ageRange: "18-35岁",
        gender: "女性",
        region: "一线城市",
        bidStrategy: "点击出价 (CPC)",
        cpc: "1.5",
      };

      // 切换到投放列表
      this.activeTab = "list";
      alert("计划创建成功！");
    },
    navigateTo(nav) {
      this.activeNav = nav;
      if (nav === "data") {
        this.$router.push("/energy-theater");
      } else if (nav === "finance") {
        this.$router.push("/finance-management");
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
</style>
