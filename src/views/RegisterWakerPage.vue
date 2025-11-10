<template>
  <div class="w-full min-h-screen bg-[#fff] overflow-x-hidden">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 z-50 px-2 py-3 flex items-center bg-transparent">
      <button
        class="text-white w-8 h-8 flex items-center justify-center nav-action"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left text-xs"></i>
      </button>
    </header>

    <!-- 背景图和标题区域 -->
    <div class="relative w-full h-[240px]">
      <img
        src="../assets/images/img-4.jpg"
        alt="海滩日落"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      <div
        class="absolute top-1/2 left-0 -translate-y-1/2 inset-0 p-6 flex flex-col items-start justify-center"
      >
        <h1 class="text-3xl mb-3 text-white font-bold font-italic">
          免费注册唤醒师
        </h1>
        <p class="text-sm text-white mb-2">
          打造数字名片·唤醒更多热爱 <span class="text-amber-300">60+</span>
        </p>
        <button
          class="bg-amber-500 text-white text-sm font-medium px-5 py-2 rounded-full shadow-lg"
          @click="handleRegister"
        >
          立即注册
        </button>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="px-4 -mt-10 relative z-10">
      <div class="bg-white rounded-xl overflow-hidden shadow-lg">
        <!-- 唤醒师身份选择 -->
        <div class="px-5 py-5 bg-white border-b border-gray-100">
          <h2 class="text-lg font-bold mb-4 text-[#333]">
            选择你的唤醒师身份
          </h2>
          <div class="grid grid-cols-3 gap-3 mb-4">
            <button 
              class="py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300"
              :class="selectedRole === 'life' ? 'bg-amber-50 text-amber-600 border-2 border-amber-500' : 'bg-gray-50 text-gray-600 border border-gray-200'"
              @click="selectedRole = 'life'"
            >
              生活主理人
            </button>
            <button 
              class="py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300"
              :class="selectedRole === 'skill' ? 'bg-amber-50 text-amber-600 border-2 border-amber-500' : 'bg-gray-50 text-gray-600 border border-gray-200'"
              @click="selectedRole = 'skill'"
            >
              技能唤醒师
            </button>
            <button 
              class="py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300"
              :class="selectedRole === 'partner' ? 'bg-amber-50 text-amber-600 border-2 border-amber-500' : 'bg-gray-50 text-gray-600 border border-gray-200'"
              @click="selectedRole = 'partner'"
            >
              搭子唤醒师
            </button>
          </div>
        </div>

        <!-- 唤醒师身份详情 -->
        <div class="px-5 py-4 bg-white border-b border-gray-100">
          <h2 class="text-base font-bold mb-3 text-[#333]">
            唤醒师身份详情
          </h2>
          <ul class="space-y-3">
            <li class="text-xs text-[#333] leading-5">
              · <span class="font-medium">生活主理人</span> - 我代表一个品牌、场馆或机构、俱乐部（拥有营业执照，提供专业服务）
            </li>
            <li class="text-xs text-[#333] leading-5">
              · <span class="font-medium">技能唤醒师</span> - 我是有证件的运动健康专业人士（持权威证书，提供教学指导和专业服务）
            </li>
            <li class="text-xs text-[#333] leading-5">
              · <span class="font-medium">搭子唤醒师</span> - 我是热爱生活的搭子或是活动组织者（没有证件，但擅长组织和陪伴/陪练）
            </li>
          </ul>
        </div>

        <!-- 唤醒师权益 -->
        <div class="px-5 py-4 bg-white border-b border-gray-100">
          <h2 class="text-base font-bold mb-3 text-[#333]">
            唤醒师都有哪些权益
          </h2>
          <div class="space-y-3">
            <div class="flex">
              <div class="text-amber-500 mr-2 mt-0.5">
                <i class="fa-solid fa-circle-check"></i>
              </div>
              <div>
                <h3 class="text-sm font-medium text-[#333]">开启唤醒师IP</h3>
                <p class="text-xs text-gray-500">打造数字名片，AI动态简历，帮你成为行业大师！</p>
              </div>
            </div>
            <div class="flex">
              <div class="text-amber-500 mr-2 mt-0.5">
                <i class="fa-solid fa-circle-check"></i>
              </div>
              <div>
                <h3 class="text-sm font-medium text-[#333]">100%自主定价权</h3>
                <p class="text-xs text-gray-500">你的价值你定义！自由定价，设置体验价/尊享价，收益由你掌控。</p>
              </div>
            </div>
            <div class="flex">
              <div class="text-amber-500 mr-2 mt-0.5">
                <i class="fa-solid fa-circle-check"></i>
              </div>
              <div>
                <h3 class="text-sm font-medium text-[#333]">平台精准流量扶持</h3>
                <p class="text-xs text-gray-500">运动健康赛道垂直营销+AI大狮兄智能匹配需求，帮你快速变现！</p>
              </div>
            </div>
            <div class="flex">
              <div class="text-amber-500 mr-2 mt-0.5">
                <i class="fa-solid fa-circle-check"></i>
              </div>
              <div>
                <h3 class="text-sm font-medium text-[#333]">一键开启分销</h3>
                <p class="text-xs text-gray-500">上架服务至「唤醒联盟」，让全城域推官成为你的分销合伙人</p>
              </div>
            </div>
            <div class="flex">
              <div class="text-amber-500 mr-2 mt-0.5">
                <i class="fa-solid fa-circle-check"></i>
              </div>
              <div>
                <h3 class="text-sm font-medium text-[#333]">收益保障</h3>
                <p class="text-xs text-gray-500">平台担保交易，收益及时到账，安心服务专注变现。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 入驻条件 -->
        <div class="px-5 py-4 bg-white border-b border-gray-100">
          <h2 class="text-base font-bold mb-3 text-[#333]">
            入驻条件（满足即可申请）
          </h2>
          <div class="grid grid-cols-2 gap-x-4 gap-y-2">
            <div class="flex items-center text-xs text-[#333]">
              · 年满18周岁
            </div>
            <div class="flex items-center text-xs text-[#333]">
              · 提供真实身份证明
            </div>
            <div class="flex items-center text-xs text-[#333]">
              · 拥有专业技能或特长
            </div>
            <div class="flex items-center text-xs text-[#333]">
              · 具备良好服务与沟通能力
            </div>
          </div>
        </div>

        <!-- 申请流程 -->
        <div class="px-5 py-4 bg-white">
          <h2 class="text-base font-bold mb-3 text-[#333]">
            申请仅需3步，极速开通！
          </h2>
          <div class="space-y-4">
            <div class="flex">
              <div class="relative">
                <div class="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div class="absolute top-5 left-1/2 w-0.5 h-8 bg-amber-200 -translate-x-1/2"></div>
              </div>
              <div class="ml-4">
                <h3 class="text-sm font-medium text-[#333]">填写申请</h3>
                <p class="text-xs text-gray-500">提交信息与技能</p>
              </div>
            </div>
            <div class="flex">
              <div class="relative">
                <div class="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div class="absolute top-5 left-1/2 w-0.5 h-8 bg-amber-200 -translate-x-1/2"></div>
              </div>
              <div class="ml-4">
                <h3 class="text-sm font-medium text-[#333]">平台审核</h3>
                <p class="text-xs text-gray-500">3个工作日内完成</p>
              </div>
            </div>
            <div class="flex">
              <div>
                <div class="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-sm font-medium text-[#333]">开通接单</h3>
                <p class="text-xs text-gray-500">发布服务，开始赚钱！</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 立即注册按钮 -->
      <div class="mt-6 mb-8">
        <button 
          class="w-full py-3 bg-amber-500 text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:bg-amber-600"
          @click="handleRegister"
        >
          立即注册
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterWakerPage",
  data() {
    return {
      selectedRole: 'life' // 默认选择生活主理人
    }
  },
  methods: {
    // 滚动到内容区域
    // scrollToContent() {
    //   const contentElement = document.querySelector('.px-4.-mt-10');
    //   if (contentElement) {
    //     contentElement.scrollIntoView({ behavior: 'smooth' });
    //   }
    // },
    // 处理注册按钮点击
    handleRegister() {
      // 根据选择的角色跳转到不同的注册页面
      if (this.selectedRole === 'life') {
        // 生活主理人，跳转到认证选择页面
        this.$router.push('/register-waker/authenticate');
      } else if (this.selectedRole === 'skill') {
        // 技能唤醒师
        this.$router.push('/register-waker/skill');
      } else if (this.selectedRole === 'partner') {
        // 搭子唤醒师
        this.$router.push('/register-waker/partner');
      }
    }
  }
};
</script>

<style scoped>
/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}
</style>
