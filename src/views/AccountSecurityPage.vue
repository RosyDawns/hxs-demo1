<template>
  <div class="page flex flex-col h-screen bg-[#f7f7f7]">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 h-12 bg-white flex items-center px-3 z-50"
    >
      <button
        @click="$router.back()"
        class="w-10 h-10 flex items-center justify-center -ml-2 relative z-1"
      >
        <i class="fa-solid fa-chevron-left text-gray-900 text-[18px]"></i>
      </button>
      <h1
        class="flex-1 text-center text-[17px] font-medium text-gray-900 -ml-10"
      >
        账号与安全
      </h1>
    </header>

    <!-- 主内容区 -->
    <main class="flex-1 overflow-y-auto pt-12 pb-16 bg-[#f7f7f7]">
      <div class="bg-white mt-2.5">
        <div
          class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer border-b border-[#f0f0f0]"
          @click="handleItemClick('phone')"
        >
          <span class="text-[15px] text-gray-900 font-normal">手机号</span>
          <div class="flex items-center gap-2">
            <span class="text-[14px] text-[#c7c7c7]">+86 181****3973</span>
            <i class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"></i>
          </div>
        </div>
        <div
          class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer"
          @click="handleItemClick('password')"
        >
          <span class="text-[15px] text-gray-900 font-normal">登录密码</span>
          <div class="flex items-center gap-2">
            <span class="text-[14px] text-[#c7c7c7]">未设置</span>
            <i class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"></i>
          </div>
        </div>
      </div>

      <div class="bg-white mt-2.5">
        <div
          class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer"
          @click="handleItemClick('third-party')"
        >
          <span class="text-[15px] text-gray-900 font-normal"
            >第三方账号绑定</span
          >
          <div class="flex items-center gap-2">
            <span class="text-[14px] text-[#c7c7c7]">未绑定</span>
            <i class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"></i>
          </div>
        </div>
      </div>

      <div class="bg-white mt-2.5">
        <div
          class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer border-b border-[#f0f0f0]"
          @click="handleItemClick('real-name')"
        >
          <span class="text-[15px] text-gray-900 font-normal">实名认证</span>
          <div class="flex items-center gap-2">
            <span class="text-[14px] text-[#c7c7c7]">未认证</span>
            <i class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"></i>
          </div>
        </div>
        <div
          class="px-4 py-3 active:bg-gray-50 transition cursor-pointer border-b border-[#f0f0f0]"
          @click="handleItemClick('official')"
        >
          <div class="flex items-center justify-between">
            <span class="text-[15px] text-gray-900 font-normal">官方认证</span>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-[#c7c7c7]">未认证</span>
              <i
                class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"
              ></i>
            </div>
          </div>
          <div class="text-[12px] text-[#c7c7c7] mt-1">
            个人职业资质、机构、企业认证
          </div>
        </div>
        <div
          class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer"
          @click="handleItemClick('video')"
        >
          <span class="text-[15px] text-gray-900 font-normal">视频认证</span>
          <div class="flex items-center gap-2">
            <span class="text-[14px] text-[#c7c7c7]">未认证</span>
            <i class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"></i>
          </div>
        </div>
      </div>

      <div class="bg-white mt-2.5">
        <div
          class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer border-b border-[#f0f0f0]"
        >
          <span class="text-[15px] text-gray-900 font-normal">
            记住登录信息
          </span>
          <label class="relative inline-block w-[50px] h-[30px]">
            <input
              type="checkbox"
              v-model="rememberLogin"
              class="sr-only peer"
            />
            <div
              class="w-full h-full bg-[#e5e5e5] rounded-full peer-checked:bg-[#FF3B30] transition-colors duration-200 cursor-pointer border-b border-[#f0f0f0]"
            >
              <div
                class="absolute top-[2px] left-[2px] w-[26px] h-[26px] bg-white rounded-full shadow-md transition-transform duration-200 peer-checked:translate-x-[20px]"
              ></div>
            </div>
          </label>
        </div>
        <div
          class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer border-b border-[#f0f0f0]"
          @click="handleItemClick('device')"
        >
          <span class="text-[15px] text-gray-900 font-normal">
            登录设备管理
          </span>
          <i class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"></i>
        </div>
        <div
          class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer"
          @click="handleItemClick('auth')"
        >
          <span class="text-[15px] text-gray-900 font-normal">
            账号授权管理
          </span>
          <i class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"></i>
        </div>
      </div>

      <div class="bg-white mt-2.5">
        <div
          class="px-4 py-3 active:bg-gray-50 transition cursor-pointer"
          @click="handleItemClick('recovery')"
        >
          <div class="flex items-center justify-between">
            <span class="text-[15px] text-gray-900 font-normal">账号找回</span>
            <i class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"></i>
          </div>
          <div class="text-[12px] text-[#c7c7c7] mt-1">
            无法登录其他账号，通过该方式找回并登录
          </div>
        </div>
      </div>

      <div class="bg-white mt-2.5">
        <div
          class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer"
          @click="handleItemClick('delete')"
        >
          <span class="text-[15px] text-gray-900 font-normal">注销账号</span>
          <i class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"></i>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "AccountSecurityPage",
  components: {},
  data() {
    return {
      rememberLogin: true,
    };
  },
  methods: {
    handleItemClick(key) {
      console.log("点击", key);
    },
  },
};
</script>
