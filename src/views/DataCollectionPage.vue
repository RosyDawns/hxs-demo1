<template>
  <div class="page flex flex-col h-screen" id="page-data-collection">
    <CommonHeader :bg-color="'#ffffff'">
      <template #center>
        <h2 class="text-lg font-medium">个人信息收集清单</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-13 bg-gray-50 pb-4">
      <div class="px-4 py-4">
        <div class="text-xs text-gray-500 mb-4">
          根据《个人信息保护法》等相关法律法规，我们向您说明收集的个人信息类型及用途。
        </div>

        <div class="space-y-3">
          <div v-for="(item, index) in dataList" :key="index" 
               class="bg-white rounded-lg p-4 shadow-sm">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                   :class="item.iconBg">
                <i :class="item.icon" class="text-base" :style="{ color: item.iconColor }"></i>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-medium text-gray-900">{{ item.title }}</h3>
                  <span class="text-xs px-2 py-0.5 rounded" 
                        :class="item.required ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'">
                    {{ item.required ? '必需' : '可选' }}
                  </span>
                </div>
                <div class="text-xs text-gray-600 mb-2">
                  <span class="font-medium">收集内容：</span>{{ item.content }}
                </div>
                <div class="text-xs text-gray-600 mb-2">
                  <span class="font-medium">使用目的：</span>{{ item.purpose }}
                </div>
                <div class="text-xs text-gray-500">
                  <span class="font-medium">使用场景：</span>{{ item.scenario }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 p-4 bg-blue-50 rounded-lg">
          <div class="text-sm text-blue-900 mb-2">
            <i class="fa-solid fa-circle-info mr-1"></i>
            <span class="font-medium">权限说明</span>
          </div>
          <div class="text-xs text-blue-700 leading-relaxed">
            您可以在设备的设置中随时关闭相关权限。关闭后，我们将无法为您提供与该权限相关的服务，但不影响您使用其他功能。
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "DataCollectionPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      dataList: [
        {
          title: "账号信息",
          content: "手机号码、昵称、头像、性别、生日",
          purpose: "创建和管理您的账号",
          scenario: "注册、登录、个人资料展示",
          required: true,
          icon: "fa-solid fa-user",
          iconBg: "bg-blue-500/10",
          iconColor: "#3b82f6"
        },
        {
          title: "设备信息",
          content: "设备型号、操作系统版本、设备标识符",
          purpose: "保障服务稳定运行和安全",
          scenario: "应用启动、功能使用",
          required: true,
          icon: "fa-solid fa-mobile-screen",
          iconBg: "bg-green-500/10",
          iconColor: "#10b981"
        },
        {
          title: "位置信息",
          content: "GPS位置、IP地址",
          purpose: "提供本地化服务和内容推荐",
          scenario: "查找附近训练营、位置相关服务",
          required: false,
          icon: "fa-solid fa-location-dot",
          iconBg: "bg-red-500/10",
          iconColor: "#ef4444"
        },
        {
          title: "使用数据",
          content: "训练营参与记录、打卡数据、浏览历史",
          purpose: "提供个性化服务和分析优化",
          scenario: "数据分析、内容推荐",
          required: false,
          icon: "fa-solid fa-chart-line",
          iconBg: "bg-purple-500/10",
          iconColor: "#a855f7"
        },
        {
          title: "相机和相册",
          content: "照片、视频",
          purpose: "上传头像、分享内容",
          scenario: "个人资料编辑、发布动态",
          required: false,
          icon: "fa-solid fa-camera",
          iconBg: "bg-orange-500/10",
          iconColor: "#f97316"
        },
        {
          title: "通知权限",
          content: "推送通知",
          purpose: "及时接收重要消息和提醒",
          scenario: "训练营通知、系统消息",
          required: false,
          icon: "fa-solid fa-bell",
          iconBg: "bg-cyan-500/10",
          iconColor: "#06b6d4"
        },
      ],
    };
  },
};
</script>
