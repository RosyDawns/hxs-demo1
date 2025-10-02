<template>
  <div class="page" id="page-chat">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.back()">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <div class="flex items-center">
        <img :src="avatarUrl" :alt="chatUsername" class="w-8 h-8 rounded-full">
        <h2 class="font-medium ml-2">{{ chatUsername }}</h2>
      </div>
      <div class="flex-1 flex justify-end">
        <button class="nav-action text-gray mr-3">
          <i class="fa fa-phone"></i>
        </button>
        <!-- <button class="nav-action text-gray">
          <i class="fa fa-video-camera"></i>
        </button> -->
      </div>
    </header>

    <!-- 聊天内容区 -->
    <div class="p-3 space-y-4 overflow-y-auto flex-1" id="chat-messages">
      <!-- 系统消息 -->
      <div class="flex justify-center">
        <div class="bg-gray-100 text-xs text-gray px-3 py-1 rounded-full">
          今天 14:30
        </div>
      </div>

      <!-- 对方消息 -->
      <div class="flex items-start">
        <img :src="avatarUrl" :alt="chatUsername" class="w-8 h-8 rounded-full flex-shrink-0">
        <div class="ml-2 max-w-[70%]">
          <div class="bg-gray-100 rounded-lg rounded-tl-none p-2 text-sm">
            你好，我看到你对我的课程感兴趣，有什么想了解的吗？
          </div>
          <div class="text-xs text-gray mt-1">14:30</div>
        </div>
      </div>

      <!-- 对方消息 -->
      <div class="flex items-start">
        <img :src="avatarUrl" :alt="chatUsername" class="w-8 h-8 rounded-full flex-shrink-0">
        <div class="ml-2 max-w-[70%]">
          <div class="bg-gray-100 rounded-lg rounded-tl-none p-2 text-sm">
            我们的课程都是小班教学，注重个性化指导
          </div>
          <div class="text-xs text-gray mt-1">14:31</div>
        </div>
      </div>

      <!-- 对方消息 -->
      <div class="flex items-start">
        <img :src="avatarUrl" :alt="chatUsername" class="w-8 h-8 rounded-full flex-shrink-0">
        <div class="ml-2 max-w-[70%]">
          <div class="bg-gray-100 rounded-lg rounded-tl-none p-2 text-sm">
            可以根据你的时间和需求来安排课程
          </div>
          <div class="text-xs text-gray mt-1">14:32</div>
        </div>
      </div>

      <!-- 我的消息 -->
      <div class="flex items-start justify-end">
        <div class="mr-2 max-w-[70%] text-right">
          <div class="bg-primary text-white rounded-lg rounded-tr-none p-2 text-sm">
            你好，我想了解一下课程的具体内容和价格
          </div>
          <div class="text-xs text-gray mt-1">14:33</div>
        </div>
        <img :src="myAvatar" alt="我的头像" class="w-8 h-8 rounded-full flex-shrink-0">
      </div>
    </div>

    <!-- 底部输入区 -->
    <div class="bg-light border-t border-gray-100 p-3">
      <!-- <div class="flex items-center mb-2">
        <button class="nav-action text-gray mr-2">
          <i class="fa fa-smile-o"></i>
        </button>
        <button class="nav-action text-gray mr-2">
          <i class="fa fa-paperclip"></i>
        </button>
        <button class="nav-action text-gray mr-2">
          <i class="fa fa-picture-o"></i>
        </button>
        <div class="flex-1"></div>
      </div> -->
      <div class="flex items-center">
        <input type="text" v-model="messageText" placeholder="输入消息..." 
               class="flex-1 bg-white border border-gray-200 rounded-full py-2 px-4 text-sm focus:outline-none focus:border-primary">
        <button class="ml-2 bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center">
          <i class="fa fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
// 导入所需的图片
import img37 from '@/assets/images/img-37.jpg'
import img20 from '@/assets/images/img-20.jpg'
import img21 from '@/assets/images/img-21.jpg'
import img22 from '@/assets/images/img-22.jpg'
import img12 from '@/assets/images/img-12.jpg'

export default {
  name: 'ChatPage',
  setup() {
    // 获取聊天对象信息
    const chatUsername = ref('')
    const avatarUrl = ref(img37) // 默认头像
    const messageText = ref('')
    const myAvatar = ref(img12) // 我的头像
    
    onMounted(() => {
      // 从localStorage获取聊天对象信息
      const username = localStorage.getItem('chatUsername')
      if (username) {
        chatUsername.value = username
        
        // 根据用户名设置对应的头像
        if (username.includes('李教练')) {
          avatarUrl.value = img20
        } else if (username.includes('张老师')) {
          avatarUrl.value = img21
        } else if (username.includes('王教练')) {
          avatarUrl.value = img22
        } else if (username.includes('系统')) {
          avatarUrl.value = img37
        }
      } else {
        chatUsername.value = '聊天'
      }
    })
    
    return {
      chatUsername,
      avatarUrl,
      myAvatar,
      messageText
    }
  }
}
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#chat-messages {
  flex: 1;
}
</style>