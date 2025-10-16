<template>
  <div class="page flex flex-col h-screen bg-gray-50" id="page-waker-alliance">
    <CommonHeader>
      <template #center>
        <h2 class="text-base font-bold text-black">唤醒联盟</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-12 pb-4">
      <!-- Banner -->
      <div class="relative mx-4 mt-4 rounded-2xl overflow-hidden">
        <img src="https://picsum.photos/id/1015/800/400" alt="联盟banner" class="w-full h-40 object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 text-white">
          <h3 class="text-xl font-bold">加入唤醒联盟</h3>
          <p class="text-sm opacity-90 mt-1">与优秀的唤醒师一起成长</p>
        </div>
      </div>

      <!-- 联盟介绍 -->
      <div class="bg-white mx-4 mt-4 rounded-2xl p-4">
        <h4 class="text-sm font-bold mb-3">什么是唤醒联盟</h4>
        <p class="text-sm text-gray-600 leading-relaxed">
          唤醒联盟是由平台优秀唤醒师组成的精英组织，联盟成员将获得更多的平台资源支持、专业培训机会以及优先推荐权。通过联盟，你可以与更多志同道合的伙伴交流学习，共同成长。
        </p>
      </div>

      <!-- 联盟权益 -->
      <div class="bg-white mx-4 mt-4 rounded-2xl p-4">
        <h4 class="text-sm font-bold mb-3">联盟权益</h4>
        <div class="grid grid-cols-2 gap-3">
          <div class="bg-orange-50 rounded-lg p-3 text-center">
            <i class="fa-solid fa-star text-2xl text-orange-500 mb-2"></i>
            <p class="text-xs font-medium">优先推荐</p>
          </div>
          <div class="bg-orange-50 rounded-lg p-3 text-center">
            <i class="fa-solid fa-graduation-cap text-2xl text-orange-500 mb-2"></i>
            <p class="text-xs font-medium">专业培训</p>
          </div>
          <div class="bg-orange-50 rounded-lg p-3 text-center">
            <i class="fa-solid fa-users text-2xl text-orange-500 mb-2"></i>
            <p class="text-xs font-medium">资源共享</p>
          </div>
          <div class="bg-orange-50 rounded-lg p-3 text-center">
            <i class="fa-solid fa-trophy text-2xl text-orange-500 mb-2"></i>
            <p class="text-xs font-medium">专属奖励</p>
          </div>
        </div>
      </div>

      <!-- 联盟成员 -->
      <div class="bg-white mx-4 mt-4 rounded-2xl p-4">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-bold">优秀成员</h4>
          <button class="text-xs text-orange-500 nav-action">查看全部 <i class="fa-solid fa-angle-right ml-1"></i></button>
        </div>
        <div class="space-y-3">
          <div v-for="member in members" :key="member.id" class="flex items-center nav-action">
            <img :src="member.avatar" alt="" class="w-12 h-12 rounded-full object-cover">
            <div class="ml-3 flex-1">
              <p class="text-sm font-medium">{{ member.name }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ member.skill }}</p>
            </div>
            <div class="text-right">
              <p class="text-xs text-orange-500 font-bold">⭐{{ member.rating }}</p>
              <p class="text-xs text-gray-400 mt-1">{{ member.students }}学员</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 加入联盟按钮 -->
      <div class="px-4 mt-6 mb-4">
        <button class="w-full bg-orange-500 text-white py-3 rounded-full font-medium nav-action shadow-lg" @click="handleJoin">
          申请加入
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "WakerAlliancePage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      members: [
        { id: 1, name: "李教练", skill: "游泳教练", rating: 4.9, students: 1200, avatar: "https://picsum.photos/id/1005/100/100" },
        { id: 2, name: "王老师", skill: "瑜伽导师", rating: 4.8, students: 980, avatar: "https://picsum.photos/id/1027/100/100" },
        { id: 3, name: "张教练", skill: "健身教练", rating: 4.9, students: 1500, avatar: "https://picsum.photos/id/1011/100/100" },
      ],
    };
  },
  methods: {
    handleJoin() {
      alert("申请加入联盟功能开发中");
    },
  },
};
</script>
