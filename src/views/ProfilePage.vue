<template>
  <div class="page flex flex-col h-screen" id="page-profile">
    <CommonHeader :bg-color="'#ffffff'">
      <template #center>
        <h2 class="text-lg font-medium">个人资料</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-13 bg-gradient-to-b from-gray-50 to-gray-100 pb-4">
      <!-- 头像 -->
      <div class="mx-4 mt-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="flex items-center justify-between px-4 py-4 cursor-pointer active:bg-gray-50 transition"
             @click="handleAvatarClick">
          <span class="text-[15px] text-gray-900 font-medium">头像</span>
          <div class="flex items-center gap-3">
            <img src="https://picsum.photos/id/20/80/80" 
                 class="w-14 h-14 rounded-full object-cover" 
                 alt="头像">
            <i class="fa-solid fa-angle-right text-gray-400 text-sm"></i>
          </div>
        </div>
      </div>

      <!-- 基本信息 -->
      <div class="mx-4 mt-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div v-for="(item, index) in basicInfo" 
             :key="index"
             class="flex items-center justify-between px-4 py-4 cursor-pointer active:bg-gray-50 transition"
             :class="{ 'border-b border-gray-100': index !== basicInfo.length - 1 }"
             @click="handleItemClick(item)">
          <span class="text-[15px] text-gray-900 font-medium">{{ item.label }}</span>
          <div class="flex items-center gap-2">
            <span class="text-[14px] text-gray-500">{{ item.value }}</span>
            <i class="fa-solid fa-angle-right text-gray-400 text-sm"></i>
          </div>
        </div>
      </div>

      <!-- 附加信息 -->
      <div class="mx-4 mt-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div v-for="(item, index) in extraInfo" 
             :key="index"
             class="flex items-center justify-between px-4 py-4 cursor-pointer active:bg-gray-50 transition"
             :class="{ 'border-b border-gray-100': index !== extraInfo.length - 1 }"
             @click="handleItemClick(item)">
          <span class="text-[15px] text-gray-900 font-medium">{{ item.label }}</span>
          <div class="flex items-center gap-2">
            <span class="text-[14px] text-gray-500">{{ item.value }}</span>
            <i class="fa-solid fa-angle-right text-gray-400 text-sm"></i>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "ProfilePage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      basicInfo: [
        { label: "昵称", value: "唤醒狮用户", key: "nickname" },
        { label: "唤醒狮号", value: "hxs_2024001", key: "userId" },
        { label: "性别", value: "男", key: "gender" },
        { label: "生日", value: "1990-01-01", key: "birthday" },
      ],
      extraInfo: [
        { label: "地区", value: "北京", key: "region" },
        { label: "个性签名", value: "发现最好的自己", key: "signature" },
      ],
    };
  },
  methods: {
    handleAvatarClick() {
      // 头像点击事件
      console.log("点击头像");
    },
    handleItemClick(item) {
      // 信息项点击事件
      console.log("点击", item.label);
    },
  },
};
</script>
