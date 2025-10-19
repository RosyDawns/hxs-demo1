<template>
  <div class="page flex flex-col h-screen" id="page-feedback">
    <CommonHeader :bg-color="'#ffffff'">
      <template #center>
        <h2 class="text-lg font-medium">意见反馈</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-13 bg-gradient-to-b from-gray-50 to-gray-100 pb-4">
      <div class="mx-4 mt-4">
        <!-- 反馈类型 -->
        <div class="bg-white rounded-xl shadow-sm p-4 mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-3">反馈类型</label>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="type in feedbackTypes" 
              :key="type"
              class="px-4 py-2 rounded-lg text-sm transition"
              :class="selectedType === type ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              @click="selectedType = type">
              {{ type }}
            </button>
          </div>
        </div>

        <!-- 反馈内容 -->
        <div class="bg-white rounded-xl shadow-sm p-4 mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-3">反馈内容</label>
          <textarea 
            v-model="content"
            class="w-full h-32 px-3 py-2 border border-gray-200 rounded-lg text-sm resize-none outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="请详细描述您的问题或建议...">
          </textarea>
          <div class="text-xs text-gray-400 mt-2">{{ content.length }}/500</div>
        </div>

        <!-- 图片上传 -->
        <div class="bg-white rounded-xl shadow-sm p-4 mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-3">图片（选填，最多3张）</label>
          <div class="grid grid-cols-3 gap-3">
            <div v-for="i in 3" :key="i" 
                 class="aspect-square rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center cursor-pointer hover:border-primary transition">
              <i class="fa-solid fa-plus text-gray-400 text-xl"></i>
            </div>
          </div>
        </div>

        <!-- 联系方式 -->
        <div class="bg-white rounded-xl shadow-sm p-4 mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-3">联系方式（选填）</label>
          <input 
            v-model="contact"
            type="text"
            class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="手机号或邮箱，以便我们联系您">
        </div>

        <!-- 提交按钮 -->
        <button 
          class="w-full bg-primary text-white py-3 rounded-xl font-medium shadow-sm active:scale-[0.99] transition"
          @click="submitFeedback">
          提交反馈
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "FeedbackPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      feedbackTypes: ["功能建议", "问题反馈", "体验优化", "其他"],
      selectedType: "功能建议",
      content: "",
      contact: "",
    };
  },
  methods: {
    submitFeedback() {
      if (!this.content.trim()) {
        alert("请输入反馈内容");
        return;
      }
      console.log("提交反馈", {
        type: this.selectedType,
        content: this.content,
        contact: this.contact,
      });
      alert("感谢您的反馈！");
      this.$router.back();
    },
  },
};
</script>
