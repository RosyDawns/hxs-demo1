<template>
  <div class="page flex flex-col h-screen bg-gray-50" id="page-register-waker">
    <CommonHeader>
      <template #center>
        <h2 class="text-base font-bold text-black">注册唤醒师</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-12 pb-4">
      <!-- 顶部介绍 -->
      <div class="bg-gradient-to-r from-orange-400 to-orange-500 mx-4 mt-4 rounded-2xl p-6 text-white">
        <h3 class="text-xl font-bold mb-2">成为唤醒师</h3>
        <p class="text-sm opacity-90">分享你的技能，帮助他人成长，开启你的副业之旅</p>
      </div>

      <!-- 唤醒师权益 -->
      <div class="bg-white mx-4 mt-4 rounded-2xl p-4">
        <h4 class="text-sm font-bold mb-3">唤醒师权益</h4>
        <div class="space-y-3">
          <div class="flex items-start">
            <i class="fa-solid fa-check-circle text-orange-500 mt-1 mr-3"></i>
            <div>
              <p class="text-sm font-medium">自由定价</p>
              <p class="text-xs text-gray-500 mt-1">根据自己的技能和时间自由设定服务价格</p>
            </div>
          </div>
          <div class="flex items-start">
            <i class="fa-solid fa-check-circle text-orange-500 mt-1 mr-3"></i>
            <div>
              <p class="text-sm font-medium">平台流量扶持</p>
              <p class="text-xs text-gray-500 mt-1">获得平台推荐和流量扶持，快速积累客户</p>
            </div>
          </div>
          <div class="flex items-start">
            <i class="fa-solid fa-check-circle text-orange-500 mt-1 mr-3"></i>
            <div>
              <p class="text-sm font-medium">收益保障</p>
              <p class="text-xs text-gray-500 mt-1">平台担保交易，收益及时到账</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 入驻条件 -->
      <div class="bg-white mx-4 mt-4 rounded-2xl p-4">
        <h4 class="text-sm font-bold mb-3">入驻条件</h4>
        <div class="space-y-2 text-sm text-gray-700">
          <p>• 年满18周岁，具有完全民事行为能力</p>
          <p>• 拥有某一领域的专业技能或特长</p>
          <p>• 能够提供真实有效的身份证明</p>
          <p>• 具备良好的服务意识和沟通能力</p>
        </div>
      </div>

      <!-- 申请步骤 -->
      <div class="bg-white mx-4 mt-4 rounded-2xl p-4">
        <h4 class="text-sm font-bold mb-3">申请步骤</h4>
        <div class="space-y-4">
          <div class="flex items-start">
            <div class="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
              1
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium">填写申请表</p>
              <p class="text-xs text-gray-500 mt-1">提交个人信息和技能专长</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
              2
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium">资质审核</p>
              <p class="text-xs text-gray-500 mt-1">平台将在3个工作日内完成审核</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
              3
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium">开通服务</p>
              <p class="text-xs text-gray-500 mt-1">审核通过后即可发布服务，开始接单</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 立即申请按钮 -->
      <div class="px-4 mt-6 mb-4">
        <button class="w-full bg-orange-500 text-white py-3 rounded-full font-medium nav-action shadow-lg" @click="handleApply">
          立即申请
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "RegisterWakerPage",
  components: {
    CommonHeader,
  },
  methods: {
    handleApply() {
      alert("申请功能开发中");
    },
  },
};
</script>
