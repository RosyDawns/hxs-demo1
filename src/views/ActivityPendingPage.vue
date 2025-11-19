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
      <!-- 待出行标题和提示 -->
      <div class="bg-[#F5E9D9] px-4 pt-3 pb-4">
        <h1 class="text-2xl font-medium text-gray-900 mb-1">待出行</h1>
        <p class="text-sm text-gray-600">2025.11.04 20:00 前可取消报名，超时未取消不予退款</p>
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
        
        <div class="space-y-2 mb-4">
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

        <!-- 二维码 -->
        <div class="flex flex-col items-center py-6 border-t border-b border-gray-100 my-4">
          <div class="w-48 h-48 bg-white flex items-center justify-center">
            <img 
              src="/src/assets/vue.svg" 
              class="w-full h-full" 
              alt="活动二维码"
            />
          </div>
          <p class="text-sm text-gray-600 mt-4">该码为活动唯一凭证，请勿截图转发给陌生人</p>
          <div class="flex items-center gap-4 mt-3">
            <p class="text-xs text-red-400">活动结束后不可退款</p>
            <p class="text-xs text-red-400">核销后不可取消报名</p>
          </div>
        </div>

        <div class="flex items-center justify-end">
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
            <button class="text-orange-500 text-xs" @click="copyOrderId">复制</button>
          </div>
          <div class="flex">
            <span class="text-gray-600 w-20">订单状态</span>
            <span class="text-gray-900">已支付</span>
          </div>
          <div class="flex">
            <span class="text-gray-600 w-20">下单时间</span>
            <span class="text-gray-900">2025-11-02 11:56</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部操作栏 -->
    <footer class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
      <div class="flex items-center gap-3">
        <button 
          class="flex flex-col items-center justify-center p-2"
          @click="handleShare"
        >
          <i class="fa fa-share-alt text-gray-600 text-xl mb-1"></i>
          <span class="text-xs text-gray-600">分享</span>
        </button>
        <button 
          class="flex-1 border border-gray-300 text-gray-700 font-medium py-3 rounded-full text-center"
          @click="handleCancel"
        >
          取消参加
        </button>
        <button 
          class="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-3 rounded-full text-center"
          @click="handleJoinGroup"
        >
          活动群聊
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ActivityPendingPage",
  data() {
    return {
      orderId: null
    };
  },
  mounted() {
    this.orderId = this.$route.params.id;
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    copyOrderId() {
      const orderId = "7567599871021107243";
      navigator.clipboard.writeText(orderId).then(() => {
        alert("订单号已复制");
      }).catch(() => {
        alert("复制失败");
      });
    },
    handleShare() {
      console.log("分享活动");
      alert("分享功能");
    },
    handleCancel() {
      if (confirm("确定要取消参加吗？取消后将无法退款")) {
        console.log("取消参加");
        this.$router.back();
      }
    },
    handleJoinGroup() {
      console.log("加入活动群聊");
      alert("活动群聊功能");
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
