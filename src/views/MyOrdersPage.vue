<template>
  <div class="page flex flex-col h-screen bg-gradient-to-b from-blue-50 to-gray-50" id="page-my-orders">
    <CommonHeader bgColor="#fff">
      <template #center>
        <h2 class="text-base font-bold text-black">我的订单</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-12 pb-4">
      <!-- 订单状态筛选 -->
      <div class="bg-white px-4 py-3 sticky top-0 z-20 shadow-sm">
        <div class="flex space-x-2 overflow-x-auto" style="scrollbar-width: none; -ms-overflow-style: none;">
          <button 
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = index"
            class="px-4 py-2 whitespace-nowrap text-sm font-medium rounded-full nav-action transition-all flex-shrink-0"
            :class="activeTab === index 
              ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
          >
            <i :class="tab.icon + ' mr-1.5'"></i>
            {{ tab.label }}
            <span v-if="tab.count > 0" class="ml-1.5 text-xs px-1.5 rounded-full" :class="activeTab === index ? 'bg-white/30' : 'bg-orange-100 text-orange-500'">
              {{ tab.count }}
            </span>
          </button>
        </div>
      </div>

      <!-- 订单列表 -->
      <div v-if="filteredOrders.length === 0" class="flex flex-col items-center justify-center py-20">
        <div class="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mb-4">
          <i class="fa-solid fa-inbox text-4xl text-gray-300"></i>
        </div>
        <p class="text-base font-medium text-gray-600">暂无相关订单</p>
        <p class="text-xs text-gray-400 mt-2">{{ emptyText }}</p>
      </div>

      <div v-else class="px-4 space-y-4 mt-3">
        <!-- 订单列表 -->
        <div
          v-for="order in filteredOrders"
          :key="order.id"
          class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="p-4" :class="getOrderHeaderClass(order.status)">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <i class="fa-solid fa-store mr-2" :class="getOrderIconColor(order.status)"></i>
                <span class="text-sm font-bold text-gray-800">{{ order.storeName }}</span>
                <span class="ml-3 text-xs px-3 py-1 rounded-full font-medium shadow-sm" :class="getStatusBadgeClass(order.status)">
                  <i :class="getStatusIcon(order.status) + ' mr-1'"></i>{{ getStatusText(order.status) }}
                </span>
              </div>
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
            <p class="text-xs text-gray-500 mt-2">
              <i class="fa-solid fa-hashtag mr-1"></i>
              订单号：{{ order.orderNo }}
            </p>
          </div>
          
          <div class="p-4">
            <div class="flex items-center mb-4">
              <img :src="order.image" alt="服务图片" class="w-24 h-24 rounded-2xl object-cover shadow-sm mr-4">
              <div class="flex-1">
                <h4 class="font-bold text-sm mb-2">{{ order.serviceName }}</h4>
                <div class="space-y-1.5">
                  <p class="text-xs text-gray-500 flex items-center">
                    <i class="fa-regular fa-calendar mr-2" :class="getOrderIconColor(order.status)"></i>
                    {{ order.time }}
                  </p>
                  <p class="text-xs text-gray-500 flex items-center">
                    <i :class="[(order.coaches ? 'fa-solid fa-users' : 'fa-solid fa-user-tie'), 'mr-2', getOrderIconColor(order.status)]"></i>
                    {{ order.coach || order.coaches }}
                  </p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-lg font-bold text-orange-500">￥{{ order.price }}</p>
                <span class="text-xs text-gray-400">x1</span>
              </div>
            </div>
            
            <!-- 待付款倒计时提示 -->
            <div v-if="order.status === 'pending'" class="bg-red-50 border border-red-200 rounded-2xl p-3 mb-3">
              <p class="text-xs text-red-600 flex items-center">
                <i class="fa-solid fa-clock mr-2"></i>
                请在30分钟内完成支付，逾期订单将自动取消
              </p>
            </div>
            
            <div class="flex justify-between items-center pt-3 border-t border-gray-100">
              <div class="text-sm">
                <span class="text-gray-500">合计：</span>
                <span class="text-lg font-bold text-orange-500 ml-1">￥{{ order.price }}</span>
              </div>
              <div class="flex space-x-2">
                <template v-if="order.status === 'pending'">
                  <button class="text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full nav-action font-medium transition-colors">
                    <i class="fa-solid fa-times mr-1"></i>取消订单
                  </button>
                  <button class="text-xs text-white bg-gradient-to-r from-red-500 to-red-400 hover:shadow-lg px-4 py-2 rounded-full nav-action font-medium transition-all">
                    <i class="fa-solid fa-wallet mr-1"></i>去支付
                  </button>
                </template>
                <template v-else-if="order.status === 'processing'">
                  <button class="text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full nav-action font-medium transition-colors">
                    <i class="fa-solid fa-comment mr-1"></i>联系教练
                  </button>
                  <button class="text-xs text-white bg-gradient-to-r from-blue-500 to-blue-400 hover:shadow-lg px-4 py-2 rounded-full nav-action font-medium transition-all">
                    <i class="fa-solid fa-check mr-1"></i>确认完成
                  </button>
                </template>
                <template v-else-if="order.status === 'completed'">
                  <button class="text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full nav-action font-medium transition-colors">
                    <i class="fa-solid fa-redo mr-1"></i>再次预约
                  </button>
                  <button class="text-xs text-white bg-gradient-to-r from-yellow-500 to-yellow-400 hover:shadow-lg px-4 py-2 rounded-full nav-action font-medium transition-all" @click="$router.push('/pending-review')">
                    <i class="fa-solid fa-star mr-1"></i>评价
                  </button>
                </template>
                <template v-else-if="order.status === 'cancelled'">
                  <button class="text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full nav-action font-medium transition-colors">
                    <i class="fa-solid fa-trash mr-1"></i>删除订单
                  </button>
                  <button class="text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full nav-action font-medium transition-colors">
                    <i class="fa-solid fa-redo mr-1"></i>重新下单
                  </button>
                </template>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: 'MyOrdersPage',
  components: {
    CommonHeader,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        { label: '全部', icon: 'fa-solid fa-list', count: 3 },
        { label: '待付款', icon: 'fa-solid fa-wallet', count: 1 },
        { label: '进行中', icon: 'fa-solid fa-clock', count: 1 },
        { label: '已完成', icon: 'fa-solid fa-check-circle', count: 1 },
        { label: '已取消', icon: 'fa-solid fa-times-circle', count: 1 },
      ],
      orders: [
        {
          id: 1,
          storeName: '健体健身中心',
          orderNo: '20230701001',
          status: 'processing',
          serviceName: '羽毛球一对一私教',
          time: '2023-07-15 19:00-20:00',
          coach: '李教练（羽毛球）',
          price: 80,
          image: 'https://picsum.photos/id/1015/400/400',
        },
        {
          id: 2,
          storeName: '静心瑜伽馆',
          orderNo: '20230625002',
          status: 'completed',
          serviceName: '瑜伽初级课程',
          time: '2023-06-30 18:00-19:30',
          coach: '王教练（瑜伽）',
          price: 120,
          image: 'https://picsum.photos/id/1025/400/400',
        },
        {
          id: 3,
          storeName: '夏日减脂训练营',
          orderNo: '20230702003',
          status: 'pending',
          serviceName: '夏日减脂训练营',
          time: '2023-07-10 至 2023-07-20',
          coaches: '李教练、张教练',
          price: 1999,
          image: 'https://picsum.photos/id/1035/400/400',
        },
        {
          id: 4,
          storeName: '力量健身工作室',
          orderNo: '20230620004',
          status: 'cancelled',
          serviceName: '力量训练课程',
          time: '2023-06-25 14:00-15:00',
          coach: '赵教练（健身）',
          price: 150,
          image: 'https://picsum.photos/id/1045/400/400',
        },
      ],
    };
  },
  computed: {
    filteredOrders() {
      if (this.activeTab === 0) {
        return this.orders;
      }
      const statusMap = {
        1: 'pending',
        2: 'processing',
        3: 'completed',
        4: 'cancelled',
      };
      return this.orders.filter(order => order.status === statusMap[this.activeTab]);
    },
    emptyText() {
      const texts = {
        0: '还没有订单哦，快去体验服务吧',
        1: '暂无待付款订单',
        2: '暂无进行中的订单',
        3: '暂无已完成的订单',
        4: '暂无已取消的订单',
      };
      return texts[this.activeTab];
    },
  },
  methods: {
    getOrderHeaderClass(status) {
      const classMap = {
        pending: 'bg-gradient-to-r from-orange-50 to-orange-50/30 border-b border-orange-100',
        processing: 'bg-gradient-to-r from-blue-50 to-blue-50/30 border-b border-blue-100',
        completed: 'bg-gradient-to-r from-green-50 to-green-50/30 border-b border-green-100',
        cancelled: 'bg-gradient-to-r from-gray-50 to-gray-50/30 border-b border-gray-100',
      };
      return classMap[status];
    },
    getOrderIconColor(status) {
      const colorMap = {
        pending: 'text-orange-500',
        processing: 'text-blue-500',
        completed: 'text-green-500',
        cancelled: 'text-gray-500',
      };
      return colorMap[status];
    },
    getStatusBadgeClass(status) {
      const classMap = {
        pending: 'bg-gradient-to-r from-red-500 to-red-400 text-white animate-pulse',
        processing: 'bg-gradient-to-r from-blue-500 to-blue-400 text-white',
        completed: 'bg-gradient-to-r from-green-500 to-green-400 text-white',
        cancelled: 'bg-gray-400 text-white',
      };
      return classMap[status];
    },
    getStatusIcon(status) {
      const iconMap = {
        pending: 'fa-solid fa-exclamation-circle',
        processing: 'fa-solid fa-clock',
        completed: 'fa-solid fa-circle-check',
        cancelled: 'fa-solid fa-ban',
      };
      return iconMap[status];
    },
    getStatusText(status) {
      const textMap = {
        pending: '待付款',
        processing: '进行中',
        completed: '已完成',
        cancelled: '已取消',
      };
      return textMap[status];
    },
  },
};
</script>

<style scoped>
/* 隐藏滚动条 */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>
