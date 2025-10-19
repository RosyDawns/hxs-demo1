<template>
  <div class="page flex flex-col h-screen" id="page-account-security">
    <CommonHeader :bg-color="'#ffffff'">
      <template #center>
        <h2 class="text-lg font-medium">账号与安全</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-13 bg-gradient-to-b from-gray-50 to-gray-100 pb-4">
      <!-- 账号信息 -->
      <div class="mx-4 mt-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div v-for="(item, index) in accountInfo" 
             :key="index"
             class="flex items-center justify-between px-4 py-4 cursor-pointer active:bg-gray-50 transition"
             :class="{ 'border-b border-gray-100': index !== accountInfo.length - 1 }"
             @click="handleItemClick(item)">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center"
                 :class="item.iconBg">
              <i :class="item.icon" class="text-base" :style="{ color: item.iconColor }"></i>
            </div>
            <span class="text-[15px] text-gray-900 font-medium">{{ item.label }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[13px] text-gray-500">{{ item.value }}</span>
            <i class="fa-solid fa-angle-right text-gray-400 text-sm"></i>
          </div>
        </div>
      </div>

      <!-- 安全设置 -->
      <div class="mx-4 mt-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div v-for="(item, index) in securitySettings" 
             :key="index"
             class="flex items-center justify-between px-4 py-4 cursor-pointer active:bg-gray-50 transition"
             :class="{ 'border-b border-gray-100': index !== securitySettings.length - 1 }"
             @click="handleItemClick(item)">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center"
                 :class="item.iconBg">
              <i :class="item.icon" class="text-base" :style="{ color: item.iconColor }"></i>
            </div>
            <div>
              <div class="text-[15px] text-gray-900 font-medium">{{ item.label }}</div>
              <div v-if="item.desc" class="text-[12px] text-gray-400 mt-0.5">{{ item.desc }}</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span v-if="item.status" class="px-2 py-0.5 text-[11px] rounded" 
                  :class="item.status === '已认证' ? 'bg-green-500/10 text-green-600' : 'bg-orange-500/10 text-orange-600'">
              {{ item.status }}
            </span>
            <i class="fa-solid fa-angle-right text-gray-400 text-sm"></i>
          </div>
        </div>
      </div>

      <!-- 其他 -->
      <div class="mx-4 mt-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div v-for="(item, index) in otherSettings" 
             :key="index"
             class="flex items-center justify-between px-4 py-4 cursor-pointer active:bg-gray-50 transition"
             :class="{ 'border-b border-gray-100': index !== otherSettings.length - 1 }"
             @click="handleItemClick(item)">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center"
                 :class="item.iconBg">
              <i :class="item.icon" class="text-base" :style="{ color: item.iconColor }"></i>
            </div>
            <span class="text-[15px] text-gray-900 font-medium">{{ item.label }}</span>
          </div>
          <i class="fa-solid fa-angle-right text-gray-400 text-sm"></i>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "AccountSecurityPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      accountInfo: [
        { 
          label: "手机号", 
          value: "138****8888", 
          icon: "fa-solid fa-mobile",
          iconBg: "bg-blue-500/10",
          iconColor: "#3b82f6"
        },
        { 
          label: "微信", 
          value: "已绑定", 
          icon: "fa-brands fa-weixin",
          iconBg: "bg-green-500/10",
          iconColor: "#10b981"
        },
      ],
      securitySettings: [
        { 
          label: "登录密码", 
          desc: "用于登录账号",
          icon: "fa-solid fa-key",
          iconBg: "bg-orange-500/10",
          iconColor: "#f97316"
        },
        { 
          label: "实名认证", 
          status: "已认证",
          icon: "fa-solid fa-id-card",
          iconBg: "bg-purple-500/10",
          iconColor: "#a855f7"
        },
        { 
          label: "设备管理", 
          desc: "管理登录设备",
          icon: "fa-solid fa-laptop",
          iconBg: "bg-cyan-500/10",
          iconColor: "#06b6d4"
        },
      ],
      otherSettings: [
        { 
          label: "注销账号",
          icon: "fa-solid fa-user-xmark",
          iconBg: "bg-red-500/10",
          iconColor: "#ef4444"
        },
      ],
    };
  },
  methods: {
    handleItemClick(item) {
      console.log("点击", item.label);
    },
  },
};
</script>
