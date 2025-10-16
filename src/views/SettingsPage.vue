<template>
  <div class="page flex flex-col h-screen bg-gray-50" id="page-settings">
    <CommonHeader>
      <template #center>
        <h2 class="text-base font-bold text-black">设置</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-12 pb-4">
      <!-- 账户设置 -->
      <div class="bg-white mt-2">
        <div class="px-4 py-2 border-b border-gray-100">
          <h3 class="text-sm font-bold text-gray-500">账户设置</h3>
        </div>
        <div class="flex items-center justify-between p-4 border-b border-gray-100 nav-action">
          <div class="flex items-center">
            <i class="fa-solid fa-user text-gray-600 w-5"></i>
            <span class="ml-3 text-sm">修改个人资料</span>
          </div>
          <i class="fa-solid fa-angle-right text-gray-400"></i>
        </div>
        <div class="flex items-center justify-between p-4 border-b border-gray-100 nav-action">
          <div class="flex items-center">
            <i class="fa-solid fa-lock text-gray-600 w-5"></i>
            <span class="ml-3 text-sm">修改密码</span>
          </div>
          <i class="fa-solid fa-angle-right text-gray-400"></i>
        </div>
        <div class="flex items-center justify-between p-4 nav-action">
          <div class="flex items-center">
            <i class="fa-solid fa-shield-halved text-gray-600 w-5"></i>
            <span class="ml-3 text-sm">隐私设置</span>
          </div>
          <i class="fa-solid fa-angle-right text-gray-400"></i>
        </div>
      </div>

      <!-- 通知设置 -->
      <div class="bg-white mt-2">
        <div class="px-4 py-2 border-b border-gray-100">
          <h3 class="text-sm font-bold text-gray-500">通知设置</h3>
        </div>
        <div class="flex items-center justify-between p-4 border-b border-gray-100">
          <div class="flex items-center">
            <i class="fa-solid fa-bell text-gray-600 w-5"></i>
            <span class="ml-3 text-sm">消息通知</span>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="notificationEnabled" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
          </label>
        </div>
      </div>

      <!-- 其他设置 -->
      <div class="bg-white mt-2">
        <div class="px-4 py-2 border-b border-gray-100">
          <h3 class="text-sm font-bold text-gray-500">其他</h3>
        </div>
        <div class="flex items-center justify-between p-4 border-b border-gray-100 nav-action">
          <div class="flex items-center">
            <i class="fa-solid fa-language text-gray-600 w-5"></i>
            <span class="ml-3 text-sm">语言设置</span>
          </div>
          <div class="flex items-center">
            <span class="text-sm text-gray-400 mr-2">简体中文</span>
            <i class="fa-solid fa-angle-right text-gray-400"></i>
          </div>
        </div>
        <div class="flex items-center justify-between p-4 border-b border-gray-100 nav-action">
          <div class="flex items-center">
            <i class="fa-solid fa-trash text-gray-600 w-5"></i>
            <span class="ml-3 text-sm">清除缓存</span>
          </div>
          <div class="flex items-center">
            <span class="text-sm text-gray-400 mr-2">128MB</span>
            <i class="fa-solid fa-angle-right text-gray-400"></i>
          </div>
        </div>
        <div class="flex items-center justify-between p-4 nav-action" @click="$router.push('/about')">
          <div class="flex items-center">
            <i class="fa-solid fa-circle-info text-gray-600 w-5"></i>
            <span class="ml-3 text-sm">关于我们</span>
          </div>
          <i class="fa-solid fa-angle-right text-gray-400"></i>
        </div>
      </div>

      <!-- 退出登录按钮 -->
      <div class="px-4 mt-6">
        <button class="w-full bg-white text-red-500 py-3 rounded-lg font-medium nav-action" @click="handleLogout">
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
      notificationEnabled: true,
    };
  },
  methods: {
    handleLogout() {
      if (confirm("确定要退出登录吗？")) {
        this.$router.push("/signin");
      }
    },
  },
};
</script>
