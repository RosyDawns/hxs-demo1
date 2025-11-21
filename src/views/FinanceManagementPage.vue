<template>
  <div class="page h-screen bg-[#f8f5f0] flex flex-col" id="page-finance-management">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3.5 flex items-center justify-between"
    >
      <div class="flex items-center cursor-pointer" @click="goBack">
        <i class="fa-solid fa-chevron-left text-gray-900 text-lg"></i>
      </div>
      <h1 class="text-lg font-medium text-gray-900 absolute left-1/2 transform -translate-x-1/2">
        财务管理
      </h1>
     
    </header>

    <!-- 标签页导航 -->
    <div class="fixed top-14 left-0 right-0 bg-white z-40 flex border-b border-gray-100">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="flex-1 py-4 text-sm relative"
        :class="activeTab === tab.key ? 'text-gray-900 font-medium' : 'text-gray-500'"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
        <div
          v-if="activeTab === tab.key"
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500"
        ></div>
      </button>
    </div>

    <main class="flex-1 overflow-y-auto pt-32 pb-20 px-4">
      <!-- 预算管理标签页 -->
      <div v-show="activeTab === 'budget'">
        <!-- 唤醒豆余额 -->
        <div class="bg-[#f5ebe0] rounded-2xl p-4 mb-4 flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600 mb-1">唤醒豆余额</p>
            <p class="text-4xl font-bold text-gray-900">{{ balance }}</p>
          </div>
          <button
            class="bg-orange-500 text-white px-8 py-2.5 rounded-xl font-medium"
            @click="handleRecharge"
          >
            充值
          </button>
        </div>

        <!-- 总预算设置 -->
        <div class="mb-4">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-sm text-gray-900">总预算设置</h3>
            <button class="text-sm text-orange-500" @click="handleEditBudget">编辑</button>
          </div>
          <div class="bg-white rounded-2xl p-4">
            <p class="text-2xl font-bold text-gray-900 mb-1">{{ totalBudget.toLocaleString() }}豆</p>
            <p class="text-xs text-gray-500">用于所有广告计划的总预算</p>
          </div>
        </div>

        <!-- 预算使用情况 -->
        <div class="bg-white rounded-2xl p-4 mb-4">
          <h3 class="text-sm text-gray-900 mb-3">预算使用情况</h3>
          
          <!-- 进度条 -->
          <div class="relative h-2 bg-gray-100 rounded-full mb-3 overflow-hidden">
            <div
              class="absolute left-0 top-0 h-full bg-orange-500 rounded-full transition-all duration-300"
              :style="{ width: usagePercentage + '%' }"
            ></div>
          </div>

          <!-- 预算数据 -->
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center space-x-4">
              <span class="text-gray-600">已消耗: <span class="text-gray-900 font-medium">{{ consumed.toLocaleString() }}豆</span></span>
              <span class="text-orange-500">剩余: <span class="font-medium">{{ remaining.toLocaleString() }}豆</span></span>
            </div>
            <span class="text-orange-500 font-medium">使用比例: {{ usagePercentage }}%</span>
          </div>
        </div>

        <!-- 预算预警 -->
        <div class="bg-white rounded-2xl p-4 mb-4">
          <h3 class="text-sm text-gray-900 mb-4">预算预警</h3>
          
          <!-- 预警阈值滑块 -->
          <div class="mb-4">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-600">预警阈值</span>
              <span class="text-lg font-semibold text-orange-500">{{ alertThreshold }}%</span>
            </div>
            <input
              type="range"
              v-model="alertThreshold"
              min="0"
              max="100"
              class="w-full h-2 bg-gray-100 rounded-full appearance-none cursor-pointer slider"
              @input="handleThresholdChange"
            />
          </div>

          <!-- 通知选项 -->
          <div class="space-y-3">
            <label class="flex items-center cursor-pointer">
              <div
                class="w-5 h-5 rounded border-2 flex items-center justify-center mr-2"
                :class="smsNotification ? 'bg-orange-500 border-orange-500' : 'border-gray-300'"
                @click="smsNotification = !smsNotification"
              >
                <i v-if="smsNotification" class="fa-solid fa-check text-white text-xs"></i>
              </div>
              <span class="text-sm text-gray-900">短信通知</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <div
                class="w-5 h-5 rounded border-2 flex items-center justify-center mr-2"
                :class="inAppNotification ? 'bg-orange-500 border-orange-500' : 'border-gray-300'"
                @click="inAppNotification = !inAppNotification"
              >
                <i v-if="inAppNotification" class="fa-solid fa-check text-white text-xs"></i>
              </div>
              <span class="text-sm text-gray-900">站内信通知</span>
            </label>
          </div>
        </div>

        <!-- 账号余额提示 -->
        <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 shadow-lg">
          <h3 class="text-white text-base font-medium mb-1">账号余额</h3>
          <p class="text-white text-xs opacity-90 mb-4">及时充值以确保广告计划正常运行</p>
          <button
            class="w-full bg-white text-orange-500 py-3 rounded-xl font-medium"
            @click="handleRecharge"
          >
            立即充值
          </button>
        </div>
      </div>

      <!-- 费用明细标签页 -->
      <div v-show="activeTab === 'expense'">
        <!-- 日期筛选 -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-2">
            <button
              v-for="period in periods"
              :key="period.key"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              :class="selectedPeriod === period.key ? 'bg-orange-500 text-white' : 'bg-white text-gray-600'"
              @click="selectedPeriod = period.key"
            >
              {{ period.label }}
            </button>
          </div>
          <button class="text-orange-500 text-sm" @click="showDatePicker = true">
            <i class="fa-solid fa-calendar-days mr-1"></i>自定义
          </button>
        </div>

        <!-- 费用统计卡片 -->
        <div class="grid grid-cols-3 gap-3 mb-4">
          <div class="bg-white rounded-xl p-3 text-center">
            <p class="text-xs text-gray-500 mb-1">总消费</p>
            <p class="text-lg font-bold text-gray-900">{{ totalExpense.toLocaleString() }}</p>
            <p class="text-xs text-gray-400">豆</p>
          </div>
          <div class="bg-white rounded-xl p-3 text-center">
            <p class="text-xs text-gray-500 mb-1">展示消费</p>
            <p class="text-lg font-bold text-orange-500">{{ displayExpense.toLocaleString() }}</p>
            <p class="text-xs text-gray-400">豆</p>
          </div>
          <div class="bg-white rounded-xl p-3 text-center">
            <p class="text-xs text-gray-500 mb-1">点击消费</p>
            <p class="text-lg font-bold text-blue-500">{{ clickExpense.toLocaleString() }}</p>
            <p class="text-xs text-gray-400">豆</p>
          </div>
        </div>

        <!-- 费用列表 -->
        <div class="bg-white rounded-2xl overflow-hidden">
          <div class="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <h3 class="text-sm font-medium text-gray-900">消费记录</h3>
            <button class="text-xs text-orange-500" @click="exportExpense">
              <i class="fa-solid fa-download mr-1"></i>导出
            </button>
          </div>
          <div class="divide-y divide-gray-100">
            <div
              v-for="item in expenseList"
              :key="item.id"
              class="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
              @click="showExpenseDetail(item)"
            >
              <div class="flex items-center justify-between mb-1">
                <div class="flex items-center">
                  <div
                    class="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
                    :class="getExpenseIcon(item.type).bgClass"
                  >
                    <i :class="getExpenseIcon(item.type).iconClass"></i>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900">{{ item.name }}</p>
                    <p class="text-xs text-gray-500">{{ item.time }}</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm font-bold text-gray-900">-{{ item.amount }}</p>
                  <p class="text-xs text-gray-400">豆</p>
                </div>
              </div>
              <div class="flex items-center justify-between text-xs text-gray-500 ml-11">
                <span>{{ item.description }}</span>
                <span class="text-orange-500">{{ item.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 发票管理标签页 -->
      <div v-show="activeTab === 'invoice'">
        <!-- 发票申请入口 -->
        <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 mb-4 text-white">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-base font-medium mb-1">申请开具发票</h3>
              <p class="text-xs opacity-90">可开具增值税普通发票或专用发票</p>
            </div>
            <button
              class="bg-white text-orange-500 px-6 py-2 rounded-lg font-medium text-sm"
              @click="applyInvoice"
            >
              申请
            </button>
          </div>
        </div>

        <!-- 发票统计 -->
        <div class="grid grid-cols-3 gap-3 mb-4">
          <div class="bg-white rounded-xl p-3 text-center">
            <p class="text-xs text-gray-500 mb-1">可开票金额</p>
            <p class="text-lg font-bold text-orange-500">{{ availableInvoiceAmount.toLocaleString() }}</p>
            <p class="text-xs text-gray-400">元</p>
          </div>
          <div class="bg-white rounded-xl p-3 text-center">
            <p class="text-xs text-gray-500 mb-1">已开票</p>
            <p class="text-lg font-bold text-gray-900">{{ issuedInvoiceCount }}</p>
            <p class="text-xs text-gray-400">张</p>
          </div>
          <div class="bg-white rounded-xl p-3 text-center">
            <p class="text-xs text-gray-500 mb-1">待处理</p>
            <p class="text-lg font-bold text-blue-500">{{ pendingInvoiceCount }}</p>
            <p class="text-xs text-gray-400">张</p>
          </div>
        </div>

        <!-- 发票列表标签 -->
        <div class="flex items-center space-x-2 mb-4">
          <button
            v-for="status in invoiceStatuses"
            :key="status.key"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="selectedInvoiceStatus === status.key ? 'bg-orange-500 text-white' : 'bg-white text-gray-600'"
            @click="selectedInvoiceStatus = status.key"
          >
            {{ status.label }}
            <span
              v-if="status.count > 0"
              class="ml-1 px-1.5 py-0.5 rounded-full text-xs"
              :class="selectedInvoiceStatus === status.key ? 'bg-white bg-opacity-30' : 'bg-gray-100'"
            >
              {{ status.count }}
            </span>
          </button>
        </div>

        <!-- 发票列表 -->
        <div class="space-y-3">
          <div
            v-for="invoice in filteredInvoices"
            :key="invoice.id"
            class="bg-white rounded-2xl overflow-hidden"
          >
            <div class="p-4">
              <div class="flex items-start justify-between mb-3">
                <div class="flex-1">
                  <div class="flex items-center mb-2">
                    <h4 class="text-sm font-medium text-gray-900 mr-2">{{ invoice.title }}</h4>
                    <span
                      class="px-2 py-0.5 rounded-full text-xs"
                      :class="getInvoiceStatusClass(invoice.status)"
                    >
                      {{ invoice.statusText }}
                    </span>
                  </div>
                  <div class="space-y-1 text-xs text-gray-500">
                    <p>申请时间: {{ invoice.applyTime }}</p>
                    <p>发票金额: <span class="text-gray-900 font-medium">¥{{ invoice.amount.toLocaleString() }}</span></p>
                    <p v-if="invoice.invoiceNo">发票号码: {{ invoice.invoiceNo }}</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-lg font-bold text-orange-500">¥{{ invoice.amount.toLocaleString() }}</p>
                </div>
              </div>
              <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                <span class="text-xs text-gray-400">{{ invoice.type }}</span>
                <div class="flex items-center space-x-2">
                  <button
                    v-if="invoice.status === 'issued'"
                    class="text-xs text-orange-500 px-3 py-1 border border-orange-500 rounded-lg"
                    @click="downloadInvoice(invoice)"
                  >
                    <i class="fa-solid fa-download mr-1"></i>下载
                  </button>
                  <button
                    v-if="invoice.status === 'pending'"
                    class="text-xs text-gray-500 px-3 py-1 border border-gray-300 rounded-lg"
                    @click="cancelInvoice(invoice)"
                  >
                    取消申请
                  </button>
                  <button
                    class="text-xs text-gray-600 px-3 py-1 bg-gray-100 rounded-lg"
                    @click="viewInvoiceDetail(invoice)"
                  >
                    查看详情
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 空状态 -->
          <div
            v-if="filteredInvoices.length === 0"
            class="bg-white rounded-2xl p-8 text-center"
          >
            <i class="fa-solid fa-receipt text-4xl text-gray-300 mb-3"></i>
            <p class="text-gray-500">暂无发票记录</p>
          </div>
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
  name: "FinanceManagementPage",
  data() {
    return {
      tabs: [
        { key: "budget", label: "预算管理" },
        { key: "expense", label: "费用明细" },
        { key: "invoice", label: "发票管理" },
      ],
      activeTab: "budget",
      activeNav: "finance",
      balance: 500,
      totalBudget: 50000,
      consumed: 8300,
      alertThreshold: 80,
      smsNotification: true,
      inAppNotification: true,
      
      // 费用明细相关
      selectedPeriod: "today",
      periods: [
        { key: "today", label: "今日" },
        { key: "week", label: "本周" },
        { key: "month", label: "本月" },
      ],
      showDatePicker: false,
      totalExpense: 8300,
      displayExpense: 4950,
      clickExpense: 3350,
      expenseList: [
        {
          id: 1,
          name: "耐克宣传视频",
          type: "display",
          amount: 850,
          time: "2024-11-21 14:25",
          description: "展示消费 8,500次",
          status: "已完成",
        },
        {
          id: 2,
          name: "绿洲智谷铁馆",
          type: "click",
          amount: 620,
          time: "2024-11-21 13:48",
          description: "点击消费 1,240次",
          status: "已完成",
        },
        {
          id: 3,
          name: "理想宣传视频",
          type: "display",
          amount: 1280,
          time: "2024-11-21 12:15",
          description: "展示消费 12,800次",
          status: "已完成",
        },
        {
          id: 4,
          name: "Adidas宣传视频",
          type: "click",
          amount: 980,
          time: "2024-11-21 11:32",
          description: "点击消费 1,960次",
          status: "已完成",
        },
        {
          id: 5,
          name: "春节特别促销",
          type: "display",
          amount: 1450,
          time: "2024-11-21 10:20",
          description: "展示消费 14,500次",
          status: "已完成",
        },
        {
          id: 6,
          name: "健身房会员推广",
          type: "click",
          amount: 720,
          time: "2024-11-21 09:45",
          description: "点击消费 1,440次",
          status: "已完成",
        },
      ],
      
      // 发票管理相关
      selectedInvoiceStatus: "all",
      invoiceStatuses: [
        { key: "all", label: "全部", count: 0 },
        { key: "pending", label: "待处理", count: 2 },
        { key: "issued", label: "已开票", count: 3 },
        { key: "rejected", label: "已驳回", count: 1 },
      ],
      availableInvoiceAmount: 8300,
      issuedInvoiceCount: 3,
      pendingInvoiceCount: 2,
      invoices: [
        {
          id: 1,
          title: "增值税普通发票",
          type: "普通发票",
          amount: 5000,
          status: "issued",
          statusText: "已开票",
          applyTime: "2024-11-15 10:30",
          invoiceNo: "00001234567890",
        },
        {
          id: 2,
          title: "增值税专用发票",
          type: "专用发票",
          amount: 3200,
          status: "pending",
          statusText: "处理中",
          applyTime: "2024-11-20 14:20",
          invoiceNo: null,
        },
        {
          id: 3,
          title: "增值税普通发票",
          type: "普通发票",
          amount: 2800,
          status: "issued",
          statusText: "已开票",
          applyTime: "2024-11-10 09:15",
          invoiceNo: "00001234567891",
        },
        {
          id: 4,
          title: "增值税普通发票",
          type: "普通发票",
          amount: 1500,
          status: "pending",
          statusText: "处理中",
          applyTime: "2024-11-19 16:40",
          invoiceNo: null,
        },
        {
          id: 5,
          title: "增值税专用发票",
          type: "专用发票",
          amount: 4500,
          status: "issued",
          statusText: "已开票",
          applyTime: "2024-11-05 11:25",
          invoiceNo: "00001234567892",
        },
        {
          id: 6,
          title: "增值税普通发票",
          type: "普通发票",
          amount: 2000,
          status: "rejected",
          statusText: "已驳回",
          applyTime: "2024-11-18 13:50",
          invoiceNo: null,
        },
      ],
    };
  },
  computed: {
    remaining() {
      return this.totalBudget - this.consumed;
    },
    usagePercentage() {
      return Math.round((this.consumed / this.totalBudget) * 100);
    },
    filteredInvoices() {
      if (this.selectedInvoiceStatus === "all") {
        return this.invoices;
      }
      return this.invoices.filter(
        (invoice) => invoice.status === this.selectedInvoiceStatus
      );
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    handleRecharge() {
      alert("充值功能开发中...");
    },
    handleEditBudget() {
      const newBudget = prompt("请输入新的预算金额(豆):", this.totalBudget);
      if (newBudget && !isNaN(newBudget)) {
        this.totalBudget = parseInt(newBudget);
      }
    },
    handleThresholdChange() {
      // 预警阈值变化时的处理
    },
    navigateTo(nav) {
      this.activeNav = nav;
      if (nav === "data") {
        this.$router.push("/energy-theater");
      } else if (nav === "create") {
        this.$router.push("/ad-plan-management");
      }
    },
    
    // 费用明细相关方法
    getExpenseIcon(type) {
      if (type === "display") {
        return {
          bgClass: "bg-orange-100",
          iconClass: "fa-solid fa-eye text-orange-500 text-sm",
        };
      } else if (type === "click") {
        return {
          bgClass: "bg-blue-100",
          iconClass: "fa-solid fa-mouse-pointer text-blue-500 text-sm",
        };
      }
      return {
        bgClass: "bg-gray-100",
        iconClass: "fa-solid fa-circle text-gray-500 text-sm",
      };
    },
    showExpenseDetail(item) {
      alert(`费用详情\n\n名称: ${item.name}\n金额: ${item.amount}豆\n时间: ${item.time}\n描述: ${item.description}\n状态: ${item.status}`);
    },
    exportExpense() {
      alert("导出功能开发中...\n将导出 Excel 格式的费用明细表");
    },
    
    // 发票管理相关方法
    applyInvoice() {
      alert("发票申请功能开发中...\n请填写发票信息和收票地址");
    },
    getInvoiceStatusClass(status) {
      const classes = {
        issued: "bg-green-100 text-green-600",
        pending: "bg-blue-100 text-blue-600",
        rejected: "bg-red-100 text-red-600",
      };
      return classes[status] || "bg-gray-100 text-gray-600";
    },
    downloadInvoice(invoice) {
      alert(`下载发票\n\n发票号码: ${invoice.invoiceNo}\n发票金额: ¥${invoice.amount.toLocaleString()}\n\n正在下载 PDF 文件...`);
    },
    cancelInvoice(invoice) {
      if (confirm(`确认要取消申请吗？\n\n发票金额: ¥${invoice.amount.toLocaleString()}`)) {
        alert("已取消申请");
        // 这里可以添加实际的取消逻辑
      }
    },
    viewInvoiceDetail(invoice) {
      alert(`发票详情\n\n发票类型: ${invoice.type}\n发票金额: ¥${invoice.amount.toLocaleString()}\n申请时间: ${invoice.applyTime}\n状态: ${invoice.statusText}${
        invoice.invoiceNo ? `\n发票号码: ${invoice.invoiceNo}` : ""
      }`);
    },
  },
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}

/* 自定义滑块样式 */
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fb923c;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fb923c;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
