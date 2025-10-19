<template>
  <div class="page flex flex-col h-screen" id="page-privacy-policy">
    <CommonHeader :bg-color="'#ffffff'">
      <template #center>
        <h2 class="text-lg font-medium">隐私政策</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-13 bg-white pb-4">
      <div class="px-4 py-4">
        <div class="mb-4">
          <div class="text-xs text-gray-500 mb-4">更新日期：2024年1月1日</div>
          <div class="text-xs text-gray-500 mb-4">生效日期：2024年1月1日</div>
        </div>

        <div class="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">引言</h3>
            <p>
              唤醒狮（以下简称"我们"）非常重视用户的隐私和个人信息保护。本隐私政策旨在向您说明我们如何收集、使用、存储、共享和保护您的个人信息，以及您享有的相关权利。
            </p>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">1. 我们收集的信息</h3>
            <p class="mb-2">我们可能收集以下类型的信息：</p>
            <ul class="list-disc list-inside space-y-1 ml-2">
              <li>账号信息：手机号码、昵称、头像等</li>
              <li>使用信息：训练营参与记录、打卡数据等</li>
              <li>设备信息：设备型号、操作系统版本等</li>
              <li>位置信息：用于提供本地化服务</li>
            </ul>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">2. 信息的使用</h3>
            <p class="mb-2">我们收集的信息将用于：</p>
            <ul class="list-disc list-inside space-y-1 ml-2">
              <li>提供和改进我们的服务</li>
              <li>个性化用户体验</li>
              <li>发送通知和更新</li>
              <li>分析和优化应用性能</li>
              <li>保障账号和服务安全</li>
            </ul>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">3. 信息的存储</h3>
            <p>
              我们采用业界标准的安全措施来保护您的个人信息，包括加密存储、访问控制等技术手段。您的信息将存储在中国境内的服务器上。
            </p>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">4. 信息的共享</h3>
            <p class="mb-2">除以下情况外，我们不会与第三方共享您的个人信息：</p>
            <ul class="list-disc list-inside space-y-1 ml-2">
              <li>获得您的明确同意</li>
              <li>根据法律法规要求</li>
              <li>与授权合作伙伴共享（详见第三方信息共享清单）</li>
            </ul>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">5. 您的权利</h3>
            <p class="mb-2">您对个人信息享有以下权利：</p>
            <ul class="list-disc list-inside space-y-1 ml-2">
              <li>访问和查询您的个人信息</li>
              <li>更正不准确的信息</li>
              <li>删除您的个人信息</li>
              <li>撤回授权同意</li>
              <li>注销账号</li>
            </ul>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">6. 未成年人保护</h3>
            <p>
              我们重视未成年人的个人信息保护。如您为未成年人，请在监护人的陪同下阅读本政策，并在监护人同意后使用我们的服务。
            </p>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">7. 政策更新</h3>
            <p>
              我们可能会不时更新本隐私政策。重大变更时，我们会通过应用内通知等方式告知您。
            </p>
          </section>

          <section>
            <h3 class="font-bold text-base text-gray-900 mb-3">8. 联系我们</h3>
            <p>
              如您对本隐私政策有任何疑问、意见或建议，可通过以下方式联系我们：<br>
              客服电话：400-888-8888<br>
              客服邮箱：privacy@huanxingshi.com
            </p>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "PrivacyPolicyPage",
  components: {
    CommonHeader,
  },
};
</script>
