<template>
  <div class="w-full min-h-screen bg-[#fff] overflow-x-hidden">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 z-50 px-2 py-3 flex items-center">
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
        src="@images/img-4.jpg"
        alt="海滩日落"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute top-1/2 -translate-y-4/9 inset-0 p-6 flex items-center justify-start"
      >
        <div>
          <p
            class="text-3xl mb-1 text-shadow-2xs text-white font-bold font-italic"
          >
            成为唤醒师
          </p>
          <p
            class="pl-2 text-sm border border-solid rounded-full flex items-center text-white font-bold font-italic"
            @click="
              $router.push({ path: '/teacher-list', query: { top: 'city' } })
            "
          >
            让你的热爱被看见，被兑现
            <span class="bg-amber-50 text-amber-700 rounded-full px-2 ml-2"
              >GO></span
            >
          </p>
        </div>
        <button
          class="mt-4 absolute right-5 top-1/2 -translate-y-1/2 bg-[#FF6B00] text-white text-xs font-medium px-4 py-1.5 border boreder-white rounded-full shadow-lg nav-action"
        >
          立即注册
        </button>
      </div>
    </div>

    <dix class="px-4 relative z-100 flex">
      <div class="w-full rounded-xl -mt-14 overflow-hidden">
        <!-- 唤醒师模式选择 -->
        <div class="px-5 py-3 bg-white">
          <h2 class="text-base font-bold mb-3 text-[#333]">
            选择你的唤醒师模式
          </h2>
          <ul class="space-y-2">
            <li class="text-xs text-[#333] leading-5">
              · 成为生活主理人：给你的品牌和门店去宣传变现
            </li>
            <li class="text-xs text-[#333] leading-5">
              · 成为技能唤醒师：给你的生活技能去宣传变现
            </li>
            <li class="text-xs text-[#333] leading-5">
              · 成为搭子唤醒师：给你的热爱寻找志同道合的人
            </li>
          </ul>
        </div>

        <!-- 服务方式 -->
        <div class="px-5 py-3 bg-white">
          <h2 class="text-base font-bold mb-3 text-[#333]">
            灵活选择你的服务方式
          </h2>
          <div class="flex flex-wrap gap-4">
            <div class="text-xs text-[#333]">· 到店服务</div>
            <div class="text-xs text-[#333]">· 上门服务</div>
            <div class="text-xs text-[#333]">· 线上服务</div>
          </div>
        </div>

        <!-- 唤醒师权益 -->
        <div class="px-5 py-3 bg-white">
          <h2 class="text-base font-bold mb-3 text-[#333333]">
            唤醒师都有哪些权益
          </h2>
          <div class="space-y-4">
            <div class="flex items-center mb-2">
              <div
                class="w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center text-white text-xs font-bold mr-3"
              >
                1
              </div>
              <h3 class="font-bold text-[#333333]">100%自主定价权</h3>
            </div>
            <p class="text-xs text-[#666666] ml-8 leading-5">
              你的价值你定义！自由定价，设置体验价/尊享价，收益由你掌控。
            </p>

            <div class="flex items-center mb-2">
              <div
                class="w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center text-white text-xs font-bold mr-3"
              >
                2
              </div>
              <h3 class="font-bold text-[#333333]">一键开启分销</h3>
            </div>
            <p class="text-xs text-[#666666] ml-8 leading-5">
              上架服务至「唤醒联盟」，让全城用户成为你的分销合伙人
            </p>

            <div class="flex items-center mb-2">
              <div
                class="w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center text-white text-xs font-bold mr-3"
              >
                3
              </div>
              <h3 class="font-bold text-[#333333]">平台精准流量扶持</h3>
            </div>
            <p class="text-xs text-[#666666] ml-8 leading-5">
              唤醒师频道曝光 + AI大狮兄智能匹配需求，帮你快速接单！
            </p>

            <div class="flex items-center mb-2">
              <div
                class="w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center text-white text-xs font-bold mr-3"
              >
                4
              </div>
              <h3 class="font-bold text-[#333333]">打造个人品牌</h3>
            </div>
            <p class="text-xs text-[#666666] ml-8 leading-5">
              从「被看见」到「被认可」，助你成为你所在行业的「城市大师」！
            </p>

            <div class="flex items-center mb-2">
              <div
                class="w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center text-white text-xs font-bold mr-3"
              >
                5
              </div>
              <h3 class="font-bold text-[#333333]">收益保障</h3>
            </div>
            <p class="text-xs text-[#666666] ml-8 leading-5">
              平台担保交易，收益及时到账，安心服务专注变现。
            </p>
          </div>
        </div>

        <!-- 入驻条件 -->
        <div class="px-5 py-3 bg-white">
          <h2 class="text-base font-bold mb-3 text-[#333333]">
            入驻条件（满足即可申请）
          </h2>
          <div class="grid grid-cols-2 gap-2">
            <div class="flex items-center text-xs text-[#333]">
              <span>· 年满18周岁</span>
            </div>
            <div class="flex items-center text-xs text-[#333]">
              <span>· 提供真实身份证明</span>
            </div>
            <div class="flex items-center text-xs text-[#333]">
              <span>· 拥有专业技能或特长</span>
            </div>
            <div class="flex items-center text-xs text-[#333]">
              <span>· 具备良好服务与沟通能力</span>
            </div>
          </div>
        </div>

        <!-- 申请流程 -->
        <div class="px-5 py-3 bg-white">
          <h2 class="text-base font-bold mb-3 text-[#333333]">
            申请仅需3步，极速开通！
          </h2>
          <div class="space-y-5">
            <div class="flex">
              <div class="relative">
                <div
                  class="w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center text-white font-bold z-10"
                >
                  1
                </div>
                <div
                  class="absolute top-5 left-1/2 w-0.5 h-[50px] bg-[#FFB07B] -translate-x-1/2"
                ></div>
              </div>
              <div class="ml-5">
                <h3 class="font-bold text-[#333333] mb-1">填写申请</h3>
                <p class="text-xs text-[#666666] leading-5">提交信息与技能</p>
              </div>
            </div>

            <div class="flex">
              <div class="relative">
                <div
                  class="w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center text-white font-bold z-10"
                >
                  2
                </div>
                <div
                  class="absolute top-5 left-1/2 w-0.5 h-[50px] bg-[#FFB07B] -translate-x-1/2"
                ></div>
              </div>
              <div class="ml-5">
                <h3 class="font-bold text-[#333333] mb-1">平台审核</h3>
                <p class="text-xs text-[#666666] leading-5">3个工作日内完成</p>
              </div>
            </div>

            <div class="flex">
              <div>
                <div
                  class="w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center text-white font-bold"
                >
                  3
                </div>
              </div>
              <div class="ml-5">
                <h3 class="font-bold text-[#333333] mb-1">开通接单</h3>
                <p class="text-xs text-[#666666] leading-5">
                  发布服务，开始赚钱！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dix>
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
