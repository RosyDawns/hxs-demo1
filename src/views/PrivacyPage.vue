<template>
  <div class="page flex flex-col h-screen" id="page-privacy">
    <CommonHeader :bg-color="'#ffffff'">
      <template #center>
        <h2 class="text-lg font-medium">隐私管理</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-13 bg-gradient-to-b from-gray-50 to-gray-100 pb-4">
      <div class="mx-4 mt-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div v-for="(item, index) in privacySettings" 
             :key="index"
             class="flex items-center justify-between px-4 py-4"
             :class="{ 'border-b border-gray-100': index !== privacySettings.length - 1 }">
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
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "PrivacyPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      privacySettings: [
        { 
          label: "允许他人查看我的资料", 
          desc: "开启后他人可以查看你的个人资料",
          enabled: true,
          icon: "fa-solid fa-eye",
          iconBg: "bg-blue-500/10",
          iconColor: "#3b82f6"
        },
        { 
          label: "允许陌生人添加好友", 
          desc: "开启后陌生人可以添加你为好友",
          enabled: false,
          icon: "fa-solid fa-user-plus",
          iconBg: "bg-green-500/10",
          iconColor: "#10b981"
        },
        { 
          label: "显示在线状态", 
          desc: "开启后他人可以看到你的在线状态",
          enabled: true,
          icon: "fa-solid fa-signal",
          iconBg: "bg-orange-500/10",
          iconColor: "#f97316"
        },
        { 
          label: "个性化推荐", 
          desc: "根据你的使用习惯推荐内容",
          enabled: true,
          icon: "fa-solid fa-wand-magic-sparkles",
          iconBg: "bg-purple-500/10",
          iconColor: "#a855f7"
        },
      ],
    };
  },
};
</script>
