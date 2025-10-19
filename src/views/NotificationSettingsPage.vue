<template>
  <div class="page flex flex-col h-screen" id="page-notification">
    <CommonHeader :bg-color="'#ffffff'">
      <template #center>
        <h2 class="text-lg font-medium">消息通知设置</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-13 bg-gradient-to-b from-gray-50 to-gray-100 pb-4">
      <!-- 推送通知 -->
      <div class="mx-4 mt-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div v-for="(item, index) in pushSettings" 
             :key="index"
             class="flex items-center justify-between px-4 py-4"
             :class="{ 'border-b border-gray-100': index !== pushSettings.length - 1 }">
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
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="item.enabled" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>

      <!-- 消息类型 -->
      <div class="mx-4 mt-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div v-for="(item, index) in messageTypes" 
             :key="index"
             class="flex items-center justify-between px-4 py-4"
             :class="{ 'border-b border-gray-100': index !== messageTypes.length - 1 }">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center"
                 :class="item.iconBg">
              <i :class="item.icon" class="text-base" :style="{ color: item.iconColor }"></i>
            </div>
            <span class="text-[15px] text-gray-900 font-medium">{{ item.label }}</span>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="item.enabled" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "NotificationSettingsPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      pushSettings: [
        { 
          label: "接收推送通知", 
          desc: "允许应用发送通知",
          enabled: true,
          icon: "fa-solid fa-bell",
          iconBg: "bg-blue-500/10",
          iconColor: "#3b82f6"
        },
        { 
          label: "声音", 
          desc: "通知时播放声音",
          enabled: true,
          icon: "fa-solid fa-volume-high",
          iconBg: "bg-green-500/10",
          iconColor: "#10b981"
        },
        { 
          label: "震动", 
          desc: "通知时震动",
          enabled: false,
          icon: "fa-solid fa-mobile-screen",
          iconBg: "bg-orange-500/10",
          iconColor: "#f97316"
        },
      ],
      messageTypes: [
        { 
          label: "训练营消息", 
          enabled: true,
          icon: "fa-solid fa-dumbbell",
          iconBg: "bg-purple-500/10",
          iconColor: "#a855f7"
        },
        { 
          label: "系统通知", 
          enabled: true,
          icon: "fa-solid fa-circle-info",
          iconBg: "bg-cyan-500/10",
          iconColor: "#06b6d4"
        },
        { 
          label: "活动消息", 
          enabled: true,
          icon: "fa-solid fa-gift",
          iconBg: "bg-pink-500/10",
          iconColor: "#ec4899"
        },
        { 
          label: "优惠推送", 
          enabled: false,
          icon: "fa-solid fa-tag",
          iconBg: "bg-red-500/10",
          iconColor: "#ef4444"
        },
      ],
    };
  },
};
</script>
