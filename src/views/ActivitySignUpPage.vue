<template>
  <div class="page pb-32" id="activity-signup-page">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3 flex items-center justify-between border-b border-gray-100">
      <button class="w-8 h-8 flex items-center justify-center" @click="goBack">
        <i class="fa fa-chevron-left text-xl text-gray-700"></i>
      </button>
      <div class="flex-1 text-center">
        <h1 class="text-lg font-medium text-gray-900">活动报名</h1>
      </div>
    </header>

    <!-- 页面内容 -->
    <div class="pt-16 bg-gray-50 min-h-screen">
      <!-- 取消报名时间提示 -->
      <div class="bg-white px-4 py-3 text-center">
        <p class="text-sm text-gray-500">2025.11.02 07:00 前可取消报名</p>
      </div>

      <!-- 活动信息卡片 -->
      <div class="bg-white mt-2 mx-4 rounded-lg p-3 flex items-start space-x-3">
        <img 
          src="/src/assets/vue.svg" 
          class="w-32 h-24 rounded-lg object-cover flex-shrink-0" 
          alt="活动图片" 
        />
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between mb-2">
            <div class="flex items-center space-x-2 flex-1">
              <span class="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded">跑步</span>
              <h3 class="text-sm font-medium text-gray-900 line-clamp-1 flex-1">上海出发，11.2周日天...</h3>
            </div>
            <span class="text-red-500 font-bold text-sm ml-2 flex-shrink-0">AA制</span>
          </div>
          <div class="text-xs text-gray-600 mb-1">11.02周日07:00-20:30</div>
          <div class="text-xs text-gray-600">宜山路(地铁站)</div>
        </div>
      </div>

      <!-- 费用说明 -->
      <div class="bg-white mt-2 mx-4 rounded-lg p-4">
        <div class="flex items-center mb-2">
          <span class="text-sm text-gray-900">本活动为线下AA收费，预估活动费用</span>
          <span class="text-red-500 font-bold text-base ml-1">¥199</span>
        </div>
        <p class="text-xs text-gray-500">活动结束后按实际费用线下结算</p>
      </div>

      <!-- 报名人信息表单 -->
      <div class="bg-white mt-4 mx-4 rounded-lg p-4">
        <div class="flex items-center mb-4">
          <h2 class="text-base font-medium text-gray-900">报名人信息</h2>
          <span class="text-red-500 ml-1">*</span>
        </div>

        <div class="space-y-4">
          <!-- 真实姓名 -->
          <div class="flex items-center border-b border-gray-200 pb-3">
            <label class="text-sm text-gray-900 w-20 flex-shrink-0">真实姓名</label>
            <input 
              v-model="formData.realName"
              type="text" 
              placeholder="输入真实姓名" 
              class="flex-1 text-sm text-gray-900 outline-none placeholder-gray-400"
            />
          </div>

          <!-- 身份证号 -->
          <div class="flex items-center border-b border-gray-200 pb-3">
            <label class="text-sm text-gray-900 w-20 flex-shrink-0">身份证号</label>
            <input 
              v-model="formData.idCard"
              type="text" 
              placeholder="输入身份证号" 
              class="flex-1 text-sm text-gray-900 outline-none placeholder-gray-400"
            />
          </div>

          <!-- 手机号码 -->
          <div class="flex items-center pb-3">
            <label class="text-sm text-gray-900 w-20 flex-shrink-0">手机号码</label>
            <input 
              v-model="formData.phone"
              type="tel" 
              placeholder="输入手机号，便于组织者联系" 
              class="flex-1 text-sm text-gray-900 outline-none placeholder-gray-400"
            />
          </div>
        </div>

        <!-- 提交须知 -->
        <div class="mt-4 pt-4 border-t border-gray-100">
          <p class="text-xs text-gray-500 leading-relaxed">提交报名即视为同意活动报名须知</p>
        </div>
      </div>
    </div>

    <!-- 底部操作栏 -->
    <footer class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
      <div class="flex items-center mb-3">
        <label class="flex items-center flex-1 cursor-pointer">
          <div 
            class="w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0"
            :class="agreeJoinGroup ? 'bg-red-500' : 'bg-gray-300'"
            @click="agreeJoinGroup = !agreeJoinGroup"
          >
            <i v-if="agreeJoinGroup" class="fa fa-check text-white text-xs"></i>
          </div>
          <span class="text-sm text-gray-700">加入活动群聊，及时获取活动信息</span>
        </label>
      </div>
      <button 
        class="w-full bg-orange-500 text-white font-medium py-3 rounded-full text-center text-base"
        @click="handleSubmit"
      >
        提交报名
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ActivitySignUpPage",
  data() {
    return {
      activityId: null,
      formData: {
        realName: "",
        idCard: "",
        phone: ""
      },
      agreeJoinGroup: true
    };
  },
  mounted() {
    this.activityId = this.$route.params.id;
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    handleSubmit() {
      // 表单验证
      if (!this.formData.realName) {
        alert("请输入真实姓名");
        return;
      }
      if (!this.formData.idCard) {
        alert("请输入身份证号");
        return;
      }
      if (!this.formData.phone) {
        alert("请输入手机号码");
        return;
      }
      
      console.log("提交报名:", {
        activityId: this.activityId,
        ...this.formData,
        joinGroup: this.agreeJoinGroup
      });
      
      // 这里添加实际的提交逻辑
      alert("报名成功！");
    }
  }
};
</script>

<style scoped>
.page {
  background-color: #f5f5f5;
  min-height: 100vh;
}

input::placeholder {
  color: #9ca3af;
}
</style>
