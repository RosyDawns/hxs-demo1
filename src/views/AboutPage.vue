<template>
  <div class="page flex flex-col h-screen" id="page-about">
    <CommonHeader :bg-color="'#ffffff'">
      <template #center>
        <h2 class="text-lg font-medium">关于我们</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-13 bg-gradient-to-b from-gray-50 to-gray-100 pb-4">
      <!-- 应用信息 -->
      <div class="flex flex-col items-center py-8">
        <img src="https://picsum.photos/id/20/120/120" class="w-20 h-20 rounded-2xl shadow-lg mb-4" alt="Logo">
        <h1 class="text-xl font-bold text-gray-900">唤醒兽</h1>
        <p class="text-sm text-gray-500 mt-1">发现最好的自己</p>
        <div class="mt-4 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
          版本 1.0.0
        </div>
      </div>

      <!-- 应用介绍 -->
      <div class="mx-4 mb-4 bg-white rounded-xl shadow-sm p-4">
        <h3 class="text-sm font-medium text-gray-700 mb-2">关于唤醒兽</h3>
        <p class="text-xs text-gray-500 leading-relaxed">
          唤醒兽是一款专注于个人成长和健康管理的应用，帮助用户养成良好习惯，提升生活品质。通过科学的训练计划和社区互动，让每个人都能发现并成就最好的自己。
        </p>
      </div>

      <!-- 功能介绍 -->
      <div class="mx-4 mb-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div v-for="(item, index) in features" 
             :key="index"
             class="flex items-center gap-3 px-4 py-3"
             :class="{ 'border-b border-gray-100': index !== features.length - 1 }">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center"
               :class="item.iconBg">
            <i :class="item.icon" class="text-lg" :style="{ color: item.iconColor }"></i>
          </div>
          <div class="flex-1">
            <div class="text-sm font-medium text-gray-900">{{ item.title }}</div>
            <div class="text-xs text-gray-500 mt-0.5">{{ item.desc }}</div>
          </div>
        </div>
      </div>

      <!-- 联系信息 -->
      <div class="mx-4 mb-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div v-for="(item, index) in contacts" 
             :key="index"
             class="flex items-center justify-between px-4 py-3"
             :class="{ 'border-b border-gray-100': index !== contacts.length - 1 }">
          <span class="text-sm text-gray-700">{{ item.label }}</span>
          <span class="text-sm text-gray-900 font-medium">{{ item.value }}</span>
        </div>
      </div>

      <!-- 法律信息 -->
      <div class="mx-4 mb-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div v-for="(item, index) in legalInfo" 
             :key="index"
             class="flex items-center justify-between px-4 py-3 cursor-pointer active:bg-gray-50 transition"
             :class="{ 'border-b border-gray-100': index !== legalInfo.length - 1 }"
             @click="handleLegalClick(item)">
          <span class="text-sm text-gray-700">{{ item.label }}</span>
          <i class="fa-solid fa-angle-right text-gray-400 text-sm"></i>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="text-center text-xs text-gray-400 pb-6">
        <p>© 2024 唤醒兽科技有限公司</p>
        <p class="mt-1">All Rights Reserved</p>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "AboutPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      features: [
        {
          title: "训练营",
          desc: "专业的训练计划，科学的成长路径",
          icon: "fa-solid fa-dumbbell",
          iconBg: "bg-blue-500/10",
          iconColor: "#3b82f6"
        },
        {
          title: "健康打卡",
          desc: "记录每日健康数据，养成好习惯",
          icon: "fa-solid fa-heart-pulse",
          iconBg: "bg-red-500/10",
          iconColor: "#ef4444"
        },
        {
          title: "社区交流",
          desc: "与志同道合的伙伴一起进步",
          icon: "fa-solid fa-users",
          iconBg: "bg-green-500/10",
          iconColor: "#10b981"
        },
      ],
      contacts: [
        { label: "客服电话", value: "400-888-8888" },
        { label: "客服邮箱", value: "support@huanxingshi.com" },
        { label: "官方网站", value: "www.huanxingshi.com" },
      ],
      legalInfo: [
        { label: "用户协议", route: "/user-agreement" },
        { label: "隐私政策", route: "/privacy-policy" },
        { label: "个人信息收集清单", route: "/data-collection" },
      ],
    };
  },
  methods: {
    handleLegalClick(item) {
      if (item.route) {
        this.$router.push(item.route);
      }
    },
  },
};
</script>
