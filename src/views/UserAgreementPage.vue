<template>
  <div class="w-full min-h-screen bg-gray-50">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center bg-white border-b border-gray-200">
      <button
        class="text-gray-700 w-8 h-8 flex items-center justify-center"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left text-sm"></i>
      </button>
      <h1 class="text-lg font-bold text-gray-800 flex-1 text-center">用户服务协议</h1>
      <div class="w-8"></div> <!-- 占位，保持标题居中 -->
    </header>

    <!-- 主要内容区域 -->
    <main class="pt-20 pb-10 px-5">
      <div class="bg-white rounded-xl shadow-sm p-5">
        <!-- 协议标题 -->
        <div class="text-center mb-6">
          <h2 class="text-xl font-bold text-gray-900">《用户服务协议》</h2>
          <p class="text-xs text-gray-500 mt-2">版本号：V1.0.0 | 更新日期：2024年1月1日</p>
        </div>

        <!-- 协议内容 -->
        <div class="text-sm text-gray-700 space-y-5 leading-relaxed">
          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">1. 协议概述</h3>
            <p>欢迎您使用唤醒师平台（以下简称"本平台"）提供的各项服务。本协议是您与本平台之间的服务条款，具有法律效力。请您仔细阅读并充分理解本协议各条款，特别是免除或者限制责任的条款、争议解决和法律适用条款。</p>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">2. 用户注册与账号管理</h3>
            <p>2.1 您在使用本平台服务时，需要按照要求提供真实、准确、完整的个人资料，并保持资料的及时更新。</p>
            <p>2.2 您应当妥善保管账号和密码，对使用您账号进行的所有活动负全部责任。</p>
            <p>2.3 如发现账号被他人非法使用，您应当立即通知本平台。</p>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">3. 服务内容</h3>
            <p>3.1 本平台提供生活服务、技能分享、社交匹配等多种服务。</p>
            <p>3.2 本平台有权根据实际情况调整服务内容，暂停或终止部分服务。</p>
            <p>3.3 用户在使用本平台服务时，应当遵守相关法律法规和本平台的规则。</p>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">4. 用户行为规范</h3>
            <p>4.1 用户不得利用本平台从事以下活动：</p>
            <ul class="list-disc list-inside space-y-1 ml-2">
              <li>违反国家法律法规的行为</li>
              <li>发布、传播违法违规信息</li>
              <li>侵犯他人知识产权、隐私权等合法权益</li>
              <li>干扰平台正常运营的行为</li>
              <li>其他违反公序良俗的行为</li>
            </ul>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">5. 知识产权保护</h3>
            <p>5.1 本平台及其关联公司拥有本平台所有内容的知识产权。</p>
            <p>5.2 未经授权，用户不得复制、修改、传播本平台的任何内容。</p>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">6. 免责声明</h3>
            <p>6.1 本平台不对用户因使用本平台服务而产生的任何损失承担责任。</p>
            <p>6.2 因不可抗力或第三方原因导致服务中断的，本平台不承担责任。</p>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">7. 协议变更与终止</h3>
            <p>7.1 本平台有权随时更新本协议，更新后的协议将在平台公布。</p>
            <p>7.2 如用户继续使用本平台服务，视为接受变更后的协议。</p>
            <p>7.3 用户可随时停止使用本平台服务。</p>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">8. 争议解决</h3>
            <p>8.1 本协议的订立、执行、解释及争议的解决均适用中华人民共和国法律。</p>
            <p>8.2 如发生争议，双方应友好协商解决；协商不成的，任何一方均有权向本平台所在地有管辖权的人民法院提起诉讼。</p>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">9. 其他条款</h3>
            <p>9.1 本协议构成双方对本协议之约定事项及其他有关事宜的完整协议，除本协议规定的之外，未赋予本协议各方其他权利。</p>
            <p>9.2 如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。</p>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "UserAgreementPage"
};
</script>

<style scoped>
/* 自定义样式 */
</style>