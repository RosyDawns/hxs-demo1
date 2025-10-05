<template>
  <div class="page" id="page-camp-register">
    <!-- 顶部导航 -->
    <CommonHeader>
      <template #center>
        <h2 class="font-bold">训练营报名</h2>
      </template>
    </CommonHeader>

    <!-- 训练营信息 -->
    <div class="bg-light mt-3">
      <img src="@images/img-23.jpg" alt="训练营封面" class="w-full h-40 object-cover">
      <div class="p-3">
        <h3 class="font-bold text-lg">夏日减脂训练营</h3>
        <div class="flex items-center mt-2">
          <div class="flex space-x-0.5 text-warning text-xs">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
          </div>
          <span class="text-xs text-gray ml-1">4.8分</span>
          <span class="text-xs text-gray ml-3">32人已报名</span>
        </div>
        <div class="flex items-center mt-2 text-xs text-gray">
          <i class="fa fa-calendar-o mr-1"></i>
          <span>2023-07-10 至 2023-07-20</span>
          <i class="fa fa-map-marker ml-3 mr-1"></i>
          <span>健体健身中心</span>
        </div>
      </div>
    </div>

    <!-- 价格信息 -->
    <div class="bg-light p-3 mt-3">
      <div class="flex justify-between items-center">
        <div>
          <span class="text-xs text-gray line-through">¥2999</span>
          <span class="text-xl font-bold text-primary ml-1">¥1999</span>
          <span class="text-xs text-primary ml-1">/人</span>
        </div>
        <div class="text-xs text-gray">
          <i class="fa fa-clock-o mr-1"></i>
          <span>距离结束还剩 3天</span>
        </div>
      </div>
    </div>

    <!-- 报名表单 -->
    <div class="bg-light p-3 mt-3">
      <h3 class="font-medium mb-3">报名信息</h3>
      <div class="space-y-3">
        <!-- 姓名 -->
        <div class="relative">
          <input 
            type="text" 
            placeholder="请输入姓名"
            class="w-full px-4 py-3 border border-gray-100 rounded-lg text-sm"
          >
        </div>

        <!-- 手机号 -->
        <div class="relative">
          <input 
            type="tel" 
            placeholder="请输入手机号"
            class="w-full px-4 py-3 border border-gray-100 rounded-lg text-sm"
          >
        </div>

        <!-- 性别 -->
        <div class="flex items-center">
          <span class="text-sm mr-3">性别：</span>
          <div class="flex space-x-4">
            <label class="flex items-center cursor-pointer">
              <input type="radio" name="gender" value="male" class="hidden">
              <span class="w-5 h-5 border border-primary rounded-full flex items-center justify-center mr-2">
                <span class="w-3 h-3 bg-primary rounded-full"></span>
              </span>
              <span class="text-sm">男</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input type="radio" name="gender" value="female" class="hidden">
              <span class="w-5 h-5 border border-gray-100 rounded-full flex items-center justify-center mr-2">
                <span class="w-3 h-3 bg-white rounded-full"></span>
              </span>
              <span class="text-sm">女</span>
            </label>
          </div>
        </div>

        <!-- 年龄 -->
        <div class="relative">
          <input 
            type="number" 
            placeholder="请输入年龄"
            class="w-full px-4 py-3 border border-gray-100 rounded-lg text-sm"
          >
        </div>

        <!-- 备注 -->
        <div class="relative">
          <textarea 
            placeholder="特殊需求备注（选填）"
            class="w-full px-4 py-3 border border-gray-100 rounded-lg text-sm resize-none h-20"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- 服务协议 -->
    <div class="flex items-start p-3 mt-3 bg-light">
      <label class="flex items-start cursor-pointer">
        <input type="checkbox" class="hidden" checked>
        <span class="w-5 h-5 border border-primary bg-primary rounded flex items-center justify-center mr-2 mt-0.5">
          <i class="fa fa-check text-white text-xs"></i>
        </span>
        <span class="text-xs text-gray">
          我已阅读并同意
          <a href="#" class="text-primary">《服务协议》</a>
          和
          <a href="#" class="text-primary">《隐私政策》</a>
        </span>
      </label>
    </div>

    <!-- 提交按钮 -->
    <div class="fixed bottom-0 left-0 right-0 bg-light border-t border-gray-100 p-3 flex items-center">
      <div class="flex-1">
        <div class="flex items-baseline">
          <span class="text-xs text-gray">实付金额：</span>
          <span class="text-xl font-bold text-primary">¥1999</span>
        </div>
      </div>
      <button class="ml-3 bg-primary text-white py-3 px-6 rounded-full font-medium nav-action">
        立即报名
      </button>
    </div>
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";

export default {
  name: "CampRegisterPage",
  components: {
    CommonHeader
  },
}
</script>