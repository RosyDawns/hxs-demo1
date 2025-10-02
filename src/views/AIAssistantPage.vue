<template>
  <div class="page" id="page-ai-assistant">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.push('/')">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <div class="flex items-center">
        <i class="fa fa-robot text-primary text-xl mr-2"></i>
        <h2 class="font-bold">AI管家·大狮兄</h2>
      </div>
    </header>

    <!-- AI形象与介绍 -->
    <div class="flex flex-col items-center p-4 mt-2">
      <div class="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
        <i class="fa fa-robot text-primary text-4xl"></i>
      </div>
      <p class="font-medium mt-3">你好！我是大狮兄，你的智能服务助手</p>
      <p class="text-xs text-gray text-center mt-1">说出你的需求，我会为你匹配最合适的唤醒师～</p>
    </div>

    <!-- 示例需求 -->
    <div class="p-4 mt-2">
      <h3 class="font-bold text-sm mb-2">常见需求示例</h3>
      <div class="grid grid-cols-2 gap-2">
        <button class="bg-light rounded-lg card-shadow p-2 text-xs text-center nav-action"
          @click="$router.push('/ai-result')">
          周六下午找附近羽毛球陪练
        </button>
        <button class="bg-light rounded-lg card-shadow p-2 text-xs text-center nav-action"
          @click="$router.push('/ai-result')">
          想加入体重管理唤醒营
        </button>
        <button class="bg-light rounded-lg card-shadow p-2 text-xs text-center nav-action"
          @click="$router.push('/ai-result')">
          找瑜伽老师学习基础动作
        </button>
        <button class="bg-light rounded-lg card-shadow p-2 text-xs text-center nav-action"
          @click="$router.push('/ai-result')">
          推荐附近的健身唤醒师
        </button>
      </div>
    </div>

    <!-- 历史对话 -->
    <div class="p-4 mt-2">
      <h3 class="font-bold text-sm mb-2">历史对话</h3>
      <div class="space-y-3">
        <div class="flex items-start">
          <div class="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <i class="fa fa-user text-primary text-xs"></i>
          </div>
          <div class="ml-2 bg-light rounded-lg rounded-tl-none p-2 text-xs max-w-[80%]">
            有没有适合初学者的羽毛球教练？
          </div>
        </div>
        <div class="flex items-start justify-end">
          <div class="mr-2 bg-primary text-white rounded-lg rounded-tr-none p-2 text-xs max-w-[80%]">
            为你推荐李教练和赵教练，都擅长初学者教学，需要为你展示他们的详细信息吗？
          </div>
          <div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <i class="fa fa-robot text-white text-xs"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- 推荐唤醒师列表 -->
    <div class="p-3 mt-1 mb-16">
      <!-- 列表项1 -->
      <div class="flex bg-light rounded-lg card-shadow p-3 mb-3 nav-action" @click="$router.push('/ouyang')">
        <img src="@images/img-20.jpg" alt="唤醒师头像" class="nav-action w-16 h-16 rounded-full mr-3">
        <div class="flex-1">
          <div class="flex justify-between items-start">
            <h3 class="font-medium">李教练（羽毛球）1</h3>
            <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded">冠军大神</span>
          </div>
          <p class="text-xs text-gray mt-1">国家二级运动员 | 10年教学经验</p>
          <div class="flex items-center mt-1">
            <div class="flex space-x-0.5 text-warning text-xs">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <span class="text-xs text-gray ml-1">98%好评</span>
          </div>
          <div class="flex items-center mt-2">
            <span class="text-primary font-medium">¥80</span>
            <span class="text-xs text-gray ml-1">/小时</span>
            <button class="ml-auto bg-primary/10 text-primary text-xs py-1 px-2 rounded" @click.stop="$router.push('/ouyang')">
              立即预约
            </button>
          </div>
        </div>
      </div>
      <!-- 列表项2 -->
      <div class="flex bg-light rounded-lg card-shadow p-3 mb-3 nav-action" @click="$router.push('/ouyang')">
        <img src="@images/img-21.jpg" alt="唤醒师头像" class="nav-action w-16 h-16 rounded-full mr-3">
        <div class="flex-1">
          <div class="flex justify-between items-start">
            <h3 class="font-medium">张老师（瑜伽）</h3>
            <span class="text-xs bg-warning/10 text-warning px-2 py-0.5 rounded">人气大神</span>
          </div>
          <p class="text-xs text-gray mt-1">高级瑜伽导师 | 5年教学经验</p>
          <div class="flex items-center mt-1">
            <div class="flex space-x-0.5 text-warning text-xs">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
            <span class="text-xs text-gray ml-1">96%好评</span>
          </div>
          <div class="flex items-center mt-2">
            <span class="text-primary font-medium">¥60</span>
            <span class="text-xs text-gray ml-1">/小时</span>
            <button class="ml-auto bg-primary/10 text-primary text-xs py-1 px-2 rounded" @click.stop="$router.push('/ouyang')">
              立即预约
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 语音输入区 -->
    <div class="fixed bottom-20 left-0 right-0 p-4">
      <div class="flex items-center bg-light rounded-full card-shadow p-3">
        <button class="text-primary mr-3">
          <i class="fa fa-microphone text-xl"></i>
        </button>
        <input type="text" placeholder="输入你的需求（例如：找羽毛球陪练）" class="bg-transparent w-full focus:outline-none text-sm">
        <button class="text-primary ml-3 nav-action" @click="$router.push('/ai-result')">
          <i class="fa fa-paper-plane text-xl"></i>
        </button>
      </div>
    </div>

    <FooterNav activePage="ai" />
  </div>
</template>

<script>
import FooterNav from '../components/FooterNav.vue'

export default {
  name: 'AIAssistantPage',
  components: {
    FooterNav
  }
}
</script>