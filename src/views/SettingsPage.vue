<template>
  <div class="page flex flex-col h-screen bg-gray-50" id="page-settings">
    <CommonHeader :bg-color="'#ffffff'" :arrow-color="'#333333'">
      <template #center>
        <h2 class="text-lg font-medium text-black">设置</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-13 bg-[#f5f5f5]">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="flex items-center justify-between px-4 py-3.5 active:bg-gray-50 cursor-pointer bg-white"
        :class="{
          'border-b border-gray-100': index !== menuItems.length - 1,
          'mt-2': item.margin,
        }"
        @click="handleMenuClick(item)"
      >
        <span class="text-[15px] text-gray-900">{{ item.label }}</span>
        <div class="flex items-center">
          <span v-if="item.value" class="text-[14px] text-gray-400 mr-2">{{
            item.value
          }}</span>
          <i class="fa-solid fa-angle-right text-gray-400 text-xs"></i>
        </div>
      </div>
      <div class="mt-2">
        <button
          class="w-full bg-white text-center py-3.5 text-[15px] font-normal text-gray-900 active:bg-gray-50"
          @click="handleLogout"
        >
          退出登录
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "SettingsPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      menuItems: [
        { label: "个人资料", route: "/profile", margin: true },
        { label: "账号与安全", route: "/account-security" },
        {
          label: "消息通知设置",
          route: "/notification-settings",
          margin: true,
        },
        { label: "隐私管理", route: "/privacy" },
        { label: "通用", route: "/general" },
        { label: "隐私政策", route: "/privacy-policy", margin: true },
        { label: "个人信息收集清单", route: "/data-collection" },
        { label: "第三方信息数据共享", route: "/data-sharing" },
        { label: "意见反馈", route: "/feedback" },
        { label: "关于我们", route: "/about" },
        { label: "热线电话", value: "10000100", route: "/hotline" },
      ],
    };
  },
  methods: {
    handleMenuClick(item) {
      if (item.route) {
        this.$router.push(item.route);
      }
    },
    handleLogout() {
      if (confirm("确定要退出登录吗？")) {
        this.$router.push("/signin");
      }
    },
  },
};
</script>
