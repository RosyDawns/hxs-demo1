<template>
  <div class="page pb-20">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 bg-[#F5E9D9] z-50 pl-4 pr-10 py-3 flex items-center justify-between">
      <button class="w-8 h-8 flex items-center justify-center" @click="goBack">
        <i class="fa fa-chevron-left text-xl text-gray-700"></i>
      </button>
      <div class="flex items-center justify-center flex-1 gap-2">
        <i class="fa fa-circle text-white text-xl"></i>
      </div>
      <div class="text-sm text-gray-700">
        <i class="fa fa-star text-gray-700 mr-1"></i>
        4.9
      </div>
    </header>

    <!-- 页面内容 -->
    <div class="pt-14 bg-gray-50 min-h-screen">
      <!-- 待付款标题和倒计时 -->
      <div class="bg-[#F5E9D9] px-4 pt-3 pb-4">
        <h1 class="text-2xl font-medium text-gray-900 mb-1">待付款</h1>
        <div class="flex items-center text-sm text-gray-600">
          <span class="mr-2">剩</span>
          <span class="text-red-500 font-bold">{{ countdown }}</span>
          <span class="ml-2">支付关闭</span>
        </div>
      </div>

      <!-- 分享横幅 -->
      <div class="bg-gradient-to-r from-orange-400 to-orange-500 mx-4 mt-4 rounded-lg p-3 flex items-center justify-between text-white">
        <span class="text-sm">分享给好友，一起组团去玩呀~</span>
        <button class="flex items-center gap-1 text-sm">
          <i class="fa fa-share-alt"></i>
          <span>分享活动</span>
        </button>
      </div>

      <!-- 活动信息卡片 -->
      <div class="bg-white mt-4 mx-4 rounded-lg p-4">
        <h2 class="text-base font-medium text-gray-900 mb-3">HOB Club周二篮球全场局</h2>
        
        <div class="space-y-2">
          <div class="flex items-start text-sm">
            <i class="fa fa-clock text-gray-400 mr-3 mt-0.5"></i>
            <div class="flex-1">
              <span class="text-gray-600">活动时间</span>
              <span class="ml-2 text-gray-900">11.04 周二 20:00-22:00</span>
            </div>
          </div>
          
          <div class="flex items-start text-sm">
            <i class="fa fa-map-marker-alt text-gray-400 mr-3 mt-0.5"></i>
            <div class="flex-1">
              <span class="text-gray-600">活动地点</span>
              <span class="ml-2 text-gray-900">FIBA篮球之家洛克公园SSR运动娱乐中心(光大会展中心店)</span>
            </div>
            <i class="fa fa-chevron-right text-gray-400 ml-2"></i>
          </div>
        </div>

        <div class="flex items-center justify-end mt-4 pt-4 border-t border-gray-100">
          <span class="text-xl font-bold text-red-500">¥80</span>
        </div>
      </div>

      <!-- 报名信息 -->
      <div class="bg-white mt-4 mx-4 rounded-lg p-4">
        <h3 class="text-base font-medium text-gray-900 mb-3">报名信息</h3>
        <div class="space-y-2">
          <div class="flex text-sm">
            <span class="text-gray-600 w-20">出行人</span>
            <div class="flex-1">
              <div class="text-gray-900">孙永胜</div>
              <div class="text-gray-500 mt-1">手机号：181****3973</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 订单信息 -->
      <div class="bg-white mt-4 mx-4 rounded-lg p-4">
        <h3 class="text-base font-medium text-gray-900 mb-3">订单信息</h3>
        <div class="space-y-2 text-sm">
          <div class="flex items-center">
            <span class="text-gray-600 w-20">订单编号</span>
            <span class="text-gray-900 flex-1">7567599871021107243</span>
            <button class="text-orange-500 text-xs">复制</button>
          </div>
          <div class="flex">
            <span class="text-gray-600 w-20">订单状态</span>
            <span class="text-gray-900">待支付</span>
          </div>
          <div class="flex">
            <span class="text-gray-600 w-20">下单时间</span>
            <span class="text-gray-900">2025-11-02 11:56</span>
          </div>
        </div>
      </div>

      <!-- 活动主理人 -->
      <div class="bg-white mt-4 mx-4 rounded-lg p-4">
        <h3 class="text-base font-medium text-gray-900 mb-3">活动主理人</h3>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img 
              src="/src/assets/images/img-23.jpg" 
              class="w-10 h-10 rounded-full object-cover" 
              alt="主理人头像"
            />
            <div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-medium text-gray-900">阿扁Effort🏀</span>
                <span class="text-xs text-gray-500">(前...</span>
              </div>
              <div class="flex items-center gap-3 mt-1">
                <span class="text-xs text-gray-500">活动 10</span>
                <span class="text-xs text-gray-500">报名 84</span>
              </div>
              <div class="flex items-center gap-1 mt-1">
                <i class="fa fa-check-circle text-blue-500 text-xs"></i>
                <span class="text-xs text-gray-600">HOB Club</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button class="flex flex-col items-center">
              <i class="fa fa-flag text-gray-400 text-lg"></i>
              <span class="text-xs text-gray-600 mt-1">Ta的活动</span>
            </button>
            <button class="flex flex-col items-center">
              <i class="fa fa-comment text-gray-400 text-lg"></i>
              <span class="text-xs text-gray-600 mt-1">私信</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部操作栏 -->
    <footer class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-3">
      <button 
        class="flex-1 border border-gray-300 text-gray-700 font-medium py-3 rounded-full text-center"
        @click="handleCancel"
      >
        取消订单
      </button>
      <button 
        class="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-3 rounded-full text-center flex items-center justify-center gap-2"
        @click="handlePay"
      >
        <span>去支付</span>
        <span class="text-sm">{{ countdown }}</span>
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ActivityPaymentPage",
  data() {
    return {
      orderId: null,
      countdown: "00:09:21",
      timer: null,
      remainingSeconds: 561 // 9分21秒
    };
  },
  mounted() {
    this.orderId = this.$route.params.id;
    this.startCountdown();
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    startCountdown() {
      this.timer = setInterval(() => {
        if (this.remainingSeconds > 0) {
          this.remainingSeconds--;
          const minutes = Math.floor(this.remainingSeconds / 60);
          const seconds = this.remainingSeconds % 60;
          this.countdown = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
          clearInterval(this.timer);
          alert("支付已超时");
          this.$router.back();
        }
      }, 1000);
    },
    handleCancel() {
      if (confirm("确定要取消订单吗？")) {
        console.log("取消订单");
        this.$router.back();
      }
    },
    handlePay() {
      console.log("去支付");
      // 支付成功后跳转到待出行页面
      this.$router.push(`/activity-pending/${this.orderId}`);
    }
  }
};
</script>

<style scoped>
.page {
  background-color: #f5f5f5;
  min-height: 100vh;
}
</style>
