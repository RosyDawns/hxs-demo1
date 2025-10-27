<template>
  <div class="w-full min-h-screen bg-[#F8F8F8] overflow-x-hidden">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-[#EEEEEE] px-4 py-3 flex items-center"
    >
      <button
        class="text-[#333333] w-8 h-8 flex items-center justify-center nav-action"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left text-base"></i>
      </button>
      <div class="flex-1 text-center">
        <h1 class="text-base font-bold text-[#333333]">注册唤醒师</h1>
      </div>
      <div class="flex items-center">
        <i class="fa-solid fa-star text-[#FFC107] mr-1"></i>
        <span class="text-sm text-[#666666]">4.9</span>
        <i
          class="fa-solid fa-ellipsis-vertical ml-3 text-sm text-[#666666]"
        ></i>
      </div>
    </header>

    <main class="pt-14">
      <!-- 背景图和标题区域 -->
      <div class="relative w-full h-[240px]">
        <img
          src="https://picsum.photos/800/600"
          alt="海滩日落"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6"
        >
          <h1 class="text-white text-[24px] font-bold mb-2">成为唤醒师</h1>
          <p class="text-white/90 text-sm flex items-center">
            让你的热爱被看见，被兑现
            <i class="fa-solid fa-arrow-right text-xs ml-1"></i>
          </p>
          <button
            class="mt-5 bg-[#FF6B00] text-white text-sm font-medium px-6 py-2.5 rounded-full w-full shadow-lg nav-action"
            @click="handleRegister"
          >
            立即注册
          </button>
        </div>
      </div>

      <!-- 唤醒师模式选择 -->
      <div class="px-5 py-6 bg-white">
        <h2 class="text-lg font-bold mb-5 text-[#333333]">
          选择你的唤醒师模式
        </h2>
        <ul class="space-y-4">
          <li class="text-sm text-[#666666] leading-5">
            · 成为生活主理人：给你的品牌和门店去宣传变现
          </li>
          <li class="text-sm text-[#666666] leading-5">
            · 成为技能唤醒师：给你的生活技能去宣传变现
          </li>
          <li class="text-sm text-[#666666] leading-5">
            · 成为搭子唤醒师：给你的热爱寻找志同道合的人
          </li>
        </ul>
      </div>

      <!-- 服务方式 -->
      <div class="px-5 py-6 bg-white">
        <h2 class="text-lg font-bold mb-5 text-[#333333]">
          灵活选择你的服务方式
        </h2>
        <div class="flex flex-wrap gap-3">
          <div
            class="bg-[#F8F8F8] px-5 py-2.5 rounded-full text-sm text-[#666666] border border-[#EEEEEE]"
          >
            到店服务
          </div>
          <div
            class="bg-[#F8F8F8] px-5 py-2.5 rounded-full text-sm text-[#666666] border border-[#EEEEEE]"
          >
            上门服务
          </div>
          <div
            class="bg-[#F8F8F8] px-5 py-2.5 rounded-full text-sm text-[#666666] border border-[#EEEEEE]"
          >
            线上服务
          </div>
        </div>
      </div>

      <!-- 唤醒师权益 -->
      <div class="px-5 py-6 bg-white">
        <h2 class="text-lg font-bold mb-5 text-[#333333]">
          唤醒师都有哪些权益
        </h2>

        <div class="space-y-4">
          <div class="bg-[#FFF8F3] rounded-xl p-4">
            <div class="flex items-center mb-2">
              <div
                class="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center text-white text-xs font-bold mr-3"
              >
                1
              </div>
              <h3 class="font-bold text-[#333333]">100%自主定价权</h3>
            </div>
            <p class="text-sm text-[#666666] ml-10 leading-5">
              你的价值你定义！自由定价，设置体验价/尊享价，收益由你掌控。
            </p>
          </div>

          <div class="bg-[#FFF8F3] rounded-xl p-4">
            <div class="flex items-center mb-2">
              <div
                class="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center text-white text-xs font-bold mr-3"
              >
                2
              </div>
              <h3 class="font-bold text-[#333333]">一键开启分销</h3>
            </div>
            <p class="text-sm text-[#666666] ml-10 leading-5">
              上架服务至「唤醒联盟」，让全城用户成为你的分销合伙人
            </p>
          </div>

          <div class="bg-[#FFF8F3] rounded-xl p-4">
            <div class="flex items-center mb-2">
              <div
                class="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center text-white text-xs font-bold mr-3"
              >
                3
              </div>
              <h3 class="font-bold text-[#333333]">平台精准流量扶持</h3>
            </div>
            <p class="text-sm text-[#666666] ml-10 leading-5">
              唤醒师频道曝光 + AI大狮兄智能匹配需求，帮你快速接单！
            </p>
          </div>

          <div class="bg-[#FFF8F3] rounded-xl p-4">
            <div class="flex items-center mb-2">
              <div
                class="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center text-white text-xs font-bold mr-3"
              >
                4
              </div>
              <h3 class="font-bold text-[#333333]">打造个人品牌</h3>
            </div>
            <p class="text-sm text-[#666666] ml-10 leading-5">
              从「被看见」到「被认可」，助你成为你所在行业的「城市大师」！
            </p>
          </div>

          <div class="bg-[#FFF8F3] rounded-xl p-4">
            <div class="flex items-center mb-2">
              <div
                class="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center text-white text-xs font-bold mr-3"
              >
                5
              </div>
              <h3 class="font-bold text-[#333333]">收益保障</h3>
            </div>
            <p class="text-sm text-[#666666] ml-10 leading-5">
              平台担保交易，收益及时到账，安心服务专注变现。
            </p>
          </div>
        </div>
      </div>

      <!-- 入驻条件 -->
      <div class="px-5 py-6 bg-white">
        <h2 class="text-lg font-bold mb-5 text-[#333333]">
          入驻条件（满足即可申请）
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center text-sm text-[#666666]">
            <i class="fa-solid fa-check text-[#4CAF50] mr-2 text-base"></i>
            <span>年满18周岁</span>
          </div>
          <div class="flex items-center text-sm text-[#666666]">
            <i class="fa-solid fa-check text-[#4CAF50] mr-2 text-base"></i>
            <span>提供真实身份证明</span>
          </div>
          <div class="flex items-center text-sm text-[#666666]">
            <i class="fa-solid fa-check text-[#4CAF50] mr-2 text-base"></i>
            <span>拥有专业技能或特长</span>
          </div>
          <div class="flex items-center text-sm text-[#666666]">
            <i class="fa-solid fa-check text-[#4CAF50] mr-2 text-base"></i>
            <span>具备良好服务与沟通能力</span>
          </div>
        </div>
      </div>

      <!-- 申请流程 -->
      <div class="px-5 py-6 bg-white">
        <h2 class="text-lg font-bold mb-5 text-[#333333]">
          申请仅需3步，极速开通！
        </h2>
        <div class="space-y-5">
          <div class="flex">
            <div class="relative">
              <div
                class="w-9 h-9 rounded-full bg-[#FF6B00] flex items-center justify-center text-white font-bold z-10"
              >
                1
              </div>
              <div
                class="absolute top-9 left-1/2 w-0.5 h-[50px] bg-[#FFB07B] -translate-x-1/2"
              ></div>
            </div>
            <div class="ml-5">
              <h3 class="font-bold text-[#333333] mb-1">填写申请</h3>
              <p class="text-sm text-[#666666] leading-5">提交信息与技能</p>
            </div>
          </div>

          <div class="flex">
            <div class="relative">
              <div
                class="w-9 h-9 rounded-full bg-[#FF6B00] flex items-center justify-center text-white font-bold z-10"
              >
                2
              </div>
              <div
                class="absolute top-9 left-1/2 w-0.5 h-[50px] bg-[#FFB07B] -translate-x-1/2"
              ></div>
            </div>
            <div class="ml-5">
              <h3 class="font-bold text-[#333333] mb-1">平台审核</h3>
              <p class="text-sm text-[#666666] leading-5">3个工作日内完成</p>
            </div>
          </div>

          <div class="flex">
            <div>
              <div
                class="w-9 h-9 rounded-full bg-[#FF6B00] flex items-center justify-center text-white font-bold"
              >
                3
              </div>
            </div>
            <div class="ml-5">
              <h3 class="font-bold text-[#333333] mb-1">开通接单</h3>
              <p class="text-sm text-[#666666] leading-5">
                发布服务，开始赚钱！
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "RegisterWakerPage",
  methods: {
    // 处理注册按钮点击
    handleRegister() {
      // 这里可以添加注册逻辑
      alert("注册功能开发中");
    },
  },
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
