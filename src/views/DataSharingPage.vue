<template>
  <div class="page flex flex-col h-screen" id="page-data-sharing">
    <CommonHeader :bg-color="'#ffffff'">
      <template #center>
        <h2 class="text-lg font-medium">第三方信息共享</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-13 bg-gray-50 pb-4">
      <div class="px-4 py-4">
        <div class="text-xs text-gray-500 mb-4">
          为了向您提供更好的服务，我们会与以下第三方服务商共享必要的信息。我们会严格限制共享的信息类型和范围，并要求第三方按照本政策及相关法律法规处理个人信息。
        </div>

        <div class="space-y-3">
          <div v-for="(item, index) in thirdPartyList" :key="index" 
               class="bg-white rounded-lg p-4 shadow-sm">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                   :class="item.iconBg">
                <i :class="item.icon" class="text-base" :style="{ color: item.iconColor }"></i>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-medium text-gray-900 mb-2">{{ item.name }}</h3>
                <div class="text-xs text-gray-600 mb-2">
                  <span class="font-medium">商品类型：</span>{{ item.type }}
                </div>
                <div class="text-xs text-gray-600 mb-2">
                  <span class="font-medium">共享信息：</span>{{ item.data }}
                </div>
                <div class="text-xs text-gray-600 mb-2">
                  <span class="font-medium">使用目的：</span>{{ item.purpose }}
                </div>
                <div v-if="item.policy" class="text-xs text-primary cursor-pointer hover:underline"
                     @click="openPolicy(item.policy)">
                  <i class="fa-solid fa-external-link mr-1"></i>查看隐私政策
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 space-y-3">
          <div class="p-4 bg-orange-50 rounded-lg">
            <div class="text-sm text-orange-900 mb-2">
              <i class="fa-solid fa-shield-halved mr-1"></i>
              <span class="font-medium">安全承诺</span>
            </div>
            <div class="text-xs text-orange-700 leading-relaxed">
              我们会与第三方服务商签署严格的数据保护协议，要求他们按照本隐私政策及相关法律法规处理个人信息，采取安全措施保护您的信息安全。
            </div>
          </div>

          <div class="p-4 bg-blue-50 rounded-lg">
            <div class="text-sm text-blue-900 mb-2">
              <i class="fa-solid fa-circle-info mr-1"></i>
              <span class="font-medium">您的权利</span>
            </div>
            <div class="text-xs text-blue-700 leading-relaxed">
              如您不同意我们向第三方共享您的信息，您可以通过客服联系我们。但这可能影响您使用相关功能或服务。
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "DataSharingPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      thirdPartyList: [
        {
          name: "微信开放平台",
          type: "社交登录、分享",
          data: "昵称、头像、OpenID",
          purpose: "提供微信登录和分享功能",
          policy: "https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy",
          icon: "fa-brands fa-weixin",
          iconBg: "bg-green-500/10",
          iconColor: "#10b981"
        },
        {
          name: "支付宝",
          type: "支付服务",
          data: "订单信息、支付金额",
          purpose: "提供安全的支付服务",
          policy: "https://opendocs.alipay.com/open/01g6qm",
          icon: "fa-brands fa-alipay",
          iconBg: "bg-blue-500/10",
          iconColor: "#3b82f6"
        },
        {
          name: "阿里云",
          type: "云存储、CDN",
          data: "图片、视频等多媒体内容",
          purpose: "存储和分发用户上传的内容",
          policy: "https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud202107161629.html",
          icon: "fa-solid fa-cloud",
          iconBg: "bg-orange-500/10",
          iconColor: "#f97316"
        },
        {
          name: "高德地图",
          type: "地图定位",
          data: "位置信息",
          purpose: "提供位置相关服务",
          policy: "https://lbs.amap.com/pages/privacy/",
          icon: "fa-solid fa-map-location-dot",
          iconBg: "bg-red-500/10",
          iconColor: "#ef4444"
        },
        {
          name: "友盟统计",
          type: "数据统计分析",
          data: "设备信息、使用行为",
          purpose: "分析应用使用情况，优化产品体验",
          policy: "https://www.umeng.com/page/policy",
          icon: "fa-solid fa-chart-pie",
          iconBg: "bg-purple-500/10",
          iconColor: "#a855f7"
        },
        {
          name: "极光推送",
          type: "消息推送",
          data: "设备标识符",
          purpose: "向您发送通知消息",
          policy: "https://www.jiguang.cn/license/privacy",
          icon: "fa-solid fa-bell",
          iconBg: "bg-cyan-500/10",
          iconColor: "#06b6d4"
        },
      ],
    };
  },
  methods: {
    openPolicy(url) {
      if (url) {
        window.open(url, '_blank');
      }
    },
  },
};
</script>
