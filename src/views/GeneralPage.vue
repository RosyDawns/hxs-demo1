<template>
  <div class="page flex flex-col h-screen" id="page-general">
    <CommonHeader :bg-color="'#ffffff'">
      <template #center>
        <h2 class="text-lg font-medium">通用</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-13 bg-gradient-to-b from-gray-50 to-gray-100 pb-4">
      <div class="mx-4 mt-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div v-for="(item, index) in generalSettings" 
             :key="index"
             class="flex items-center justify-between px-4 py-4 cursor-pointer active:bg-gray-50 transition"
             :class="{ 'border-b border-gray-100': index !== generalSettings.length - 1 }"
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

      <!-- 缓存清理 -->
      <div class="mx-4 mt-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="flex items-center justify-between px-4 py-4 cursor-pointer active:bg-gray-50 transition"
             @click="clearCache">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center bg-red-500/10">
              <i class="fa-solid fa-trash-can text-base" style="color: #ef4444"></i>
            </div>
            <span class="text-[15px] text-gray-900 font-medium">清除缓存</span>
          </div>
          <span class="text-[13px] text-gray-500">128.5 MB</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "GeneralPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      generalSettings: [
        { 
          label: "语言", 
          value: "简体中文",
          icon: "fa-solid fa-language",
          iconBg: "bg-blue-500/10",
          iconColor: "#3b82f6"
        },
        { 
          label: "字体大小", 
          value: "标准",
          icon: "fa-solid fa-text-height",
          iconBg: "bg-green-500/10",
          iconColor: "#10b981"
        },
        { 
          label: "深色模式", 
          value: "跟随系统",
          icon: "fa-solid fa-moon",
          iconBg: "bg-purple-500/10",
          iconColor: "#a855f7"
        },
      ],
    };
  },
  methods: {
    handleItemClick(item) {
      console.log("点击", item.label);
    },
    clearCache() {
      if (confirm("确定要清除缓存吗？")) {
        console.log("清除缓存");
      }
    },
  },
};
</script>
