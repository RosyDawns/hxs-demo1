<template>
  <div class="page flex flex-col h-screen bg-white" id="page-publish-activity">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-white px-4 py-3 flex items-center justify-between">
      <button class="text-dark" @click="$router.back()">
        <i class="fa-solid fa-angle-left text-xl"></i>
      </button>
      <div class="flex items-center space-x-3">
        <span class="flex items-center text-sm">
          <i class="fa-solid fa-star text-warning mr-1"></i>
          <span class="font-bold">4.9</span>
        </span>
        <button class="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <i class="fa-solid fa-circle text-white text-xs"></i>
        </button>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="flex-1 overflow-y-auto px-5 pt-5">
      <!-- 图片上传区域 -->
      <div class="flex items-start space-x-2.5 mb-5">
        <!-- 已上传图片 -->
        <div v-if="uploadedImages.length > 0" class="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
          <img 
            :src="uploadedImages[0]" 
            alt="上传的图片" 
            class="w-full h-full object-cover"
          >
          <button 
            class="absolute top-1 right-1 w-5 h-5 bg-black bg-opacity-60 rounded-full flex items-center justify-center text-white"
            @click="removeImage(0)"
          >
            <i class="fa-solid fa-xmark text-xs"></i>
          </button>
        </div>
        
        <!-- 添加图片按钮 -->
        <button 
          class="w-24 h-24 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-300 flex-shrink-0"
          @click="handleAddImage"
        >
          <i class="fa-solid fa-plus text-3xl font-light"></i>
        </button>
      </div>

      <!-- 标题输入 -->
      <div class="mb-4">
        <input 
          v-model="title"
          type="text" 
          placeholder="添加标题"
          class="w-full text-base text-gray-400 border-none outline-none p-0 placeholder-gray-300"
        >
      </div>

      <!-- 话题标签 -->
      <div class="mb-6">
        <span class="text-primary text-base font-normal"># 周末健身指南</span>
      </div>

      <!-- 推荐话题标签 -->
      <div class="flex flex-wrap gap-2.5 mb-8">
        <button 
          v-for="tag in recommendTags" 
          :key="tag"
          class="px-4 py-2 bg-gray-50 text-gray-500 rounded-full text-sm font-normal"
          @click="selectTag(tag)"
        >
          # {{ tag }}
        </button>
      </div>

      <!-- 功能按钮 -->
      <div class="flex items-center space-x-12 mb-8">
        <button 
          class="flex items-center space-x-2 text-dark text-base"
          @click="handleAddTopic"
        >
          <span class="text-xl font-bold">#</span>
          <span class="font-normal">话题</span>
        </button>
        <button 
          class="flex items-center space-x-2 text-dark text-base"
          @click="handleMentionUser"
        >
          <span class="text-xl font-normal">@</span>
          <span class="font-normal">用户</span>
        </button>
      </div>

      <!-- 位置选择 -->
      <button 
        class="w-full flex items-center justify-between py-4 border-b border-gray-100"
        @click="handleSelectLocation"
      >
        <div class="flex items-center text-dark">
          <i class="fa-solid fa-location-dot text-base mr-3 text-gray-600"></i>
          <span class="text-base font-normal">合生新天地</span>
        </div>
        <i class="fa-solid fa-angle-right text-gray-300 text-sm"></i>
      </button>

      <!-- 可见性设置 -->
      <button 
        class="w-full flex items-center justify-between py-4"
        @click="handleVisibility"
      >
        <div class="flex items-center text-dark">
          <i class="fa-solid fa-lock text-base mr-3 text-gray-600"></i>
          <span class="text-base font-normal">公开可见</span>
        </div>
        <i class="fa-solid fa-angle-right text-gray-300 text-sm"></i>
      </button>
    </main>

    <!-- 底部发布按钮 -->
    <footer class="px-5 pb-8 pt-3 bg-white border-t border-gray-50">
      <div class="flex items-center gap-3">
        <div class="flex flex-col items-center">
          <button 
            class="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full mb-1"
            @click="saveDraft"
          >
            <i class="fa-regular fa-envelope text-gray-400 text-lg"></i>
          </button>
          <span class="text-xs text-gray-400">存草稿</span>
        </div>
        <button 
          class="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3.5 rounded-full text-base font-medium shadow-md"
          @click="publishActivity"
        >
          发布动态
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PublishActivityPage',
  data() {
    return {
      uploadedImages: [],
      title: '',
      selectedTopics: ['周末健身指南'],
      recommendTags: ['周末健身指南', '上海健身教练', '周末健身搭子'],
      location: '合生新天地',
      visibility: 'public'
    }
  },
  methods: {
    handleAddImage() {
      console.log('添加图片')
      // TODO: 打开图片选择器
      // 模拟添加图片
      const demoImage = '/src/assets/images/img-11.jpg'
      this.uploadedImages.push(demoImage)
    },
    removeImage(index) {
      this.uploadedImages.splice(index, 1)
    },
    selectTag(tag) {
      console.log('选择话题标签:', tag)
      if (!this.selectedTopics.includes(tag)) {
        this.selectedTopics.push(tag)
      }
    },
    handleAddTopic() {
      console.log('添加话题')
      // TODO: 打开话题选择页面
      // this.$router.push('/topic/select')
    },
    handleMentionUser() {
      console.log('提及用户')
      // TODO: 打开用户选择页面
      // this.$router.push('/user/mention')
    },
    handleSelectLocation() {
      console.log('选择位置')
      // TODO: 打开位置选择页面
      // this.$router.push('/location/select')
    },
    handleVisibility() {
      console.log('设置可见性')
      // TODO: 打开可见性设置弹窗
    },
    saveDraft() {
      console.log('保存草稿')
      // TODO: 保存草稿到本地或服务器
      this.$router.back()
    },
    publishActivity() {
      if (this.uploadedImages.length === 0) {
        console.log('请至少上传一张图片')
        return
      }
      
      console.log('发布动态', {
        images: this.uploadedImages,
        title: this.title,
        topics: this.selectedTopics,
        location: this.location,
        visibility: this.visibility
      })
      
      // TODO: 调用API发布动态
      // 发布成功后返回
      this.$router.back()
    }
  }
}
</script>

<style scoped>
input::placeholder {
  color: #D1D5DB;
}
</style>
