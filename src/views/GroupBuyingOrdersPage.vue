<template>
  <div class="min-h-screen bg-[#F5F1E8]">
    <!-- 顶部导航栏 -->
    <header class="sticky top-0 z-10 bg-white">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-2">
          <i
            class="fa-solid fa-chevron-left text-gray-700 cursor-pointer"
            @click="goBack"
          ></i>
          <div class="flex items-center gap-1">
            <h1 class="text-base font-medium text-gray-900 mr-4">团购</h1>
          </div>
          <div class="text-base text-gray-400">买单</div>
        </div>
      
      </div>

      <!-- 标签页 -->
      <div class="flex border-b border-gray-200">
        <div
          v-for="tab in tabs"
          :key="tab.key"
          class="flex-1 text-center py-3 cursor-pointer relative"
          @click="activeTab = tab.key"
        >
          <span
            :class="[
              'text-sm',
              activeTab === tab.key
                ? 'text-gray-900 font-medium'
                : 'text-gray-500'
            ]"
          >
            {{ tab.label }}
          </span>
          <div
            v-if="activeTab === tab.key"
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-orange-500"
          ></div>
        </div>
      </div>
    </header>

    <!-- 筛选器区域 -->
    <div class="bg-white px-4 py-3">
      <div class="flex items-center gap-2">
        <!-- 时间筛选 -->
        <div
          class="flex items-center px-2.5 py-1.5 cursor-pointer"
          @click="showDatePicker = true"
        >
          <span class="text-xs text-gray-600">{{ dateRangeText }}</span>
          <i class="fa-solid fa-chevron-down text-gray-400 text-[10px] ml-1"></i>
        </div>

        <!-- 订单状态筛选 (仅成交明细显示) -->
        <div
          v-if="activeTab === 'transaction'"
          class="flex items-center px-2.5 py-1.5 cursor-pointer"
          @click="showStatusPicker = true"
        >
          <span class="text-xs text-gray-600">{{ orderStatusText }}</span>
          <i class="fa-solid fa-chevron-down text-gray-400 text-[10px] ml-1"></i>
        </div>

        <!-- 筛选按钮 -->
        <div
          class="flex items-center px-2.5 py-1.5 cursor-pointer"
          @click="showFilterModal = true"
        >
          <span class="text-xs text-gray-600">筛选</span>
          <i class="fa-solid fa-chevron-down text-gray-400 text-[10px] ml-1"></i>
        </div>

        <div class="flex-1"></div>

        <!-- 数量显示 -->
        <div class="text-xs text-gray-500">
          数量: {{ totalCount }}
        </div>
      </div>
    </div>

    <!-- 订单列表 -->
    <div class="px-4 pt-3 pb-20 space-y-2.5">
      <!-- 成交明细列表 -->
      <template v-if="activeTab === 'transaction'">
        <div
          v-for="order in transactionOrders"
          :key="order.id"
          class="bg-white rounded-2xl p-4"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs text-gray-400">下单于 {{ order.orderTime }}</span>
            <span class="text-xs text-gray-500">{{ order.status }}</span>
          </div>

          <div class="flex items-start gap-3 mb-2">
            <img
              :src="order.productImage"
              alt="商品图片"
              class="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div class="flex-1 min-w-0">
              <div class="text-sm text-gray-900 mb-0.5">
                {{ order.productName }}
              </div>
              <div class="text-xs text-gray-400">{{ order.productSpec }}</div>
            </div>
            <div class="text-right flex-shrink-0">
              <div class="text-sm text-gray-900 mb-0.5">{{ order.price }}</div>
              <div class="text-xs text-gray-400">{{ order.quantity }}</div>
            </div>
          </div>

          <div class="flex justify-end">
            <div class="text-sm text-gray-700">
              顾客实付 <span class="font-medium text-gray-900">{{ order.actualPayment }}</span>
            </div>
          </div>
        </div>
      </template>

      <!-- 核销明细列表 -->
      <template v-if="activeTab === 'verification'">
        <div
          v-for="order in verificationOrders"
          :key="order.id"
          class="bg-white rounded-2xl p-4"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs text-gray-400">订单ID {{ order.orderId }}</span>
            <span class="text-xs text-orange-500 font-medium">{{ order.status }}</span>
          </div>

          <div class="flex items-start gap-3 mb-2">
            <img
              :src="order.productImage"
              alt="商品图片"
              class="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div class="flex-1 min-w-0">
              <div class="text-sm text-gray-900 mb-0.5">
                {{ order.productName }}
              </div>
              <div class="text-xs text-gray-400">{{ order.productSpec }}</div>
            </div>
            <div class="text-sm text-gray-900 flex-shrink-0">{{ order.price }}</div>
          </div>

          <div class="flex justify-end mb-3">
            <div class="text-sm text-gray-700">
              订单实收 <span class="text-orange-500 font-medium">{{ order.actualRevenue }}</span>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-3 mb-3 space-y-1.5">
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-400">核销券码</span>
              <span class="text-xs text-gray-700">{{ order.verificationCode }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-400">核销时间</span>
              <span class="text-xs text-gray-700">{{ order.verificationTime }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-400">核销人</span>
              <span class="text-xs text-gray-700">{{ order.verifier }}</span>
            </div>
          </div>

          <div class="flex gap-2.5">
            <button
              class="flex-1 py-2 border border-gray-200 rounded-full text-sm text-gray-700"
              @click="contactCustomer(order)"
            >
              联系顾客
            </button>
            <button
              class="flex-1 py-2 border border-gray-200 rounded-full text-sm text-gray-700"
              @click="negotiateRefund(order)"
            >
              协商退款
            </button>
          </div>
        </div>
      </template>

      <!-- 售后明细列表 -->
      <template v-if="activeTab === 'afterSales'">
        <div
          v-for="order in afterSalesOrders"
          :key="order.id"
          class="bg-white rounded-2xl p-4"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs text-gray-400">订单ID {{ order.orderId }}</span>
            <span class="text-xs text-red-500 font-medium">{{ order.status }}</span>
          </div>

          <div class="flex items-start gap-3 mb-2">
            <img
              :src="order.productImage"
              alt="商品图片"
              class="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div class="flex-1 min-w-0">
              <div class="text-sm text-gray-900 mb-0.5">
                {{ order.productName }}
              </div>
              <div class="text-xs text-gray-400">{{ order.productSpec }}</div>
            </div>
            <div class="text-sm text-gray-900 flex-shrink-0">{{ order.price }}</div>
          </div>

          <div class="flex justify-end mb-3">
            <div class="text-sm text-gray-700">
              退款金额 <span class="text-red-500 font-medium">{{ order.refundAmount }}</span>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-3 mb-3 space-y-1.5">
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-400">退款原因</span>
              <span class="text-xs text-gray-700">{{ order.refundReason }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-400">申请时间</span>
              <span class="text-xs text-gray-700">{{ order.applyTime }}</span>
            </div>
          </div>

          <div class="flex gap-2.5">
            <button
              class="flex-1 py-2 border border-gray-200 rounded-full text-sm text-gray-700"
              @click="contactCustomer(order)"
            >
              联系顾客
            </button>
            <button
              class="flex-1 py-2 bg-orange-500 rounded-full text-sm text-white"
              @click="handleAfterSales(order)"
            >
              处理售后
            </button>
          </div>
        </div>
      </template>

      <!-- 空状态 -->
      <div v-if="currentOrders.length === 0" class="text-center py-20">
        <i class="fa-solid fa-inbox text-gray-300 text-5xl mb-4"></i>
        <div class="text-sm text-gray-400">暂无订单数据</div>
      </div>
    </div>

    <!-- 客服悬浮按钮 -->
    <div class="fixed bottom-6 left-4">
      <div
        class="w-14 h-14 bg-orange-500 rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer"
        @click="openCustomerService"
      >
        <i class="fa-solid fa-headset text-white text-base"></i>
        <span class="text-white text-[10px] mt-0.5">客服</span>
      </div>
    </div>

    <!-- 日期选择器弹窗 -->
    <div
      v-if="showDatePicker"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end"
      @click="showDatePicker = false"
    >
      <div class="bg-white w-full rounded-t-2xl p-4" @click.stop>
        <div class="text-center text-lg font-medium mb-4">选择时间范围</div>
        <div class="space-y-2">
          <div
            v-for="range in dateRanges"
            :key="range.value"
            class="py-3 px-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
            @click="selectDateRange(range)"
          >
            {{ range.label }}
          </div>
        </div>
        <button
          class="w-full mt-4 py-3 bg-gray-200 rounded-lg text-gray-700"
          @click="showDatePicker = false"
        >
          取消
        </button>
      </div>
    </div>

    <!-- 订单状态选择器弹窗 -->
    <div
      v-if="showStatusPicker"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end"
      @click="showStatusPicker = false"
    >
      <div class="bg-white w-full rounded-t-2xl p-4" @click.stop>
        <div class="text-center text-lg font-medium mb-4">订单状态</div>
        <div class="space-y-2">
          <div
            v-for="status in orderStatuses"
            :key="status.value"
            class="py-3 px-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
            @click="selectOrderStatus(status)"
          >
            {{ status.label }}
          </div>
        </div>
        <button
          class="w-full mt-4 py-3 bg-gray-200 rounded-lg text-gray-700"
          @click="showStatusPicker = false"
        >
          取消
        </button>
      </div>
    </div>

    <!-- 筛选弹窗 -->
    <div
      v-if="showFilterModal"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end"
      @click="showFilterModal = false"
    >
      <div class="bg-white w-full rounded-t-2xl p-4" @click.stop>
        <div class="text-center text-lg font-medium mb-4">筛选</div>
        <div class="space-y-4">
          <div>
            <div class="text-sm text-gray-700 mb-2">商品类型</div>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="type in productTypes"
                :key="type"
                class="px-4 py-2 bg-gray-50 rounded-full text-sm cursor-pointer hover:bg-orange-100"
              >
                {{ type }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex space-x-3 mt-6">
          <button
            class="flex-1 py-3 bg-gray-200 rounded-lg text-gray-700"
            @click="resetFilter"
          >
            重置
          </button>
          <button
            class="flex-1 py-3 bg-orange-500 rounded-lg text-white"
            @click="applyFilter"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroupBuyingOrdersPage',
  data() {
    return {
      activeTab: 'transaction',
      tabs: [
        { key: 'transaction', label: '成交明细' },
        { key: 'verification', label: '核销明细' },
        { key: 'afterSales', label: '售后明细' }
      ],
      showDatePicker: false,
      showStatusPicker: false,
      showFilterModal: false,
      selectedDateRange: 'recent30',
      selectedOrderStatus: 'all',
      dateRanges: [
        { label: '近7日', value: 'recent7' },
        { label: '近30日', value: 'recent30' },
        { label: '近90日', value: 'recent90' },
        { label: '自定义', value: 'custom' }
      ],
      orderStatuses: [
        { label: '全部', value: 'all' },
        { label: '待使用', value: 'pending' },
        { label: '已使用', value: 'used' },
        { label: '已退款', value: 'refunded' }
      ],
      productTypes: ['体验卡', '单次卡', '套餐卡', '会员卡'],
      // 成交明细数据
      transactionOrders: [
        {
          id: '1',
          orderTime: '2025/10/29 20:49:11',
          status: '待使用',
          productImage: '/src/assets/images/img-23.jpg',
          productName: '蛙泳/自由泳（体验卡）',
          productSpec: '一对一-60分钟',
          price: '¥14.90',
          quantity: '1份',
          actualPayment: '¥14.90'
        },
        {
          id: '2',
          orderTime: '2025/10/29 18:32:02',
          status: '待使用',
          productImage: '/src/assets/images/img-23.jpg',
          productName: '自由泳（单次卡）',
          productSpec: '一对一-60分钟',
          price: '¥200',
          quantity: '1份',
          actualPayment: '¥200'
        },
        {
          id: '3',
          orderTime: '2025/10/29 16:46:15',
          status: '待使用',
          productImage: '/src/assets/images/img-23.jpg',
          productName: '蛙泳/自由泳（体验卡）',
          productSpec: '一对一-60分钟',
          price: '¥14.90',
          quantity: '1份',
          actualPayment: '¥14.90'
        },
        {
          id: '4',
          orderTime: '2025/10/29 13:17:21',
          status: '待使用',
          productImage: '/src/assets/images/img-23.jpg',
          productName: '蛙泳/自由泳（体验卡）',
          productSpec: '一对一-60分钟',
          price: '¥14.90',
          quantity: '1份',
          actualPayment: '¥14.90'
        }
      ],
      // 核销明细数据
      verificationOrders: [
        {
          id: '1',
          orderId: '10894345669765550',
          status: '已核销',
          productImage: '/src/assets/images/img-23.jpg',
          productName: '蛙泳/自由泳（体验卡）',
          productSpec: '一对一-60分钟',
          price: '¥14.90',
          actualRevenue: '¥9.90',
          verificationCode: '107256056811298',
          verificationTime: '2025/10/28 17:34:15',
          verifier: '李教练'
        },
        {
          id: '2',
          orderId: '10894345669797572',
          status: '已核销',
          productImage: '/src/assets/images/img-23.jpg',
          productName: '蛙泳/自由泳（体验卡）',
          productSpec: '一对一-60分钟',
          price: '¥14.90',
          actualRevenue: '¥9.90',
          verificationCode: '107233883927106',
          verificationTime: '2025/10/27 13:26:18',
          verifier: '李教练'
        }
      ],
      // 售后明细数据
      afterSalesOrders: [
        {
          id: '1',
          orderId: '10894345669765550',
          status: '待处理',
          productImage: '/src/assets/images/img-23.jpg',
          productName: '蛙泳/自由泳（体验卡）',
          productSpec: '一对一-60分钟',
          price: '¥14.90',
          refundAmount: '¥14.90',
          refundReason: '不想要了',
          applyTime: '2025/10/28 17:34:15'
        }
      ]
    };
  },
  computed: {
    dateRangeText() {
      const range = this.dateRanges.find(r => r.value === this.selectedDateRange);
      return range ? range.label : '近30日';
    },
    orderStatusText() {
      const status = this.orderStatuses.find(s => s.value === this.selectedOrderStatus);
      return status ? status.label : '订单状态';
    },
    currentOrders() {
      if (this.activeTab === 'transaction') {
        return this.transactionOrders;
      } else if (this.activeTab === 'verification') {
        return this.verificationOrders;
      } else {
        return this.afterSalesOrders;
      }
    },
    totalCount() {
      return this.currentOrders.length;
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    selectDateRange(range) {
      this.selectedDateRange = range.value;
      this.showDatePicker = false;
      // 这里可以添加实际的数据筛选逻辑
    },
    selectOrderStatus(status) {
      this.selectedOrderStatus = status.value;
      this.showStatusPicker = false;
      // 这里可以添加实际的数据筛选逻辑
    },
    resetFilter() {
      this.showFilterModal = false;
      // 重置筛选条件
    },
    applyFilter() {
      this.showFilterModal = false;
      // 应用筛选条件
    },
    contactCustomer(order) {
      console.log('联系顾客:', order);
      // 实现联系顾客功能
    },
    negotiateRefund(order) {
      console.log('协商退款:', order);
      // 跳转到退款页面
      this.$router.push({ name: 'Refund', query: { orderId: order.orderId } });
    },
    handleAfterSales(order) {
      console.log('处理售后:', order);
      // 跳转到售后处理页面
      this.$router.push({ name: 'RefundProcess', query: { orderId: order.orderId } });
    },
    openCustomerService() {
      console.log('打开客服');
      // 实现客服功能
    }
  }
};
</script>

<style scoped>
/* 基础样式已通过Tailwind CSS实现 */
</style>
