<template>
  <div class="page" id="page-matching">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.back()">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">匹配唤醒狮</h2>
    </header>

    <!-- 匹配进度指示器 -->
    <div class="bg-light p-3 mt-3">
      <div class="flex items-center justify-between">
        <div class="flex flex-col items-center">
          <div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium text-sm">1</div>
          <div class="text-xs text-primary mt-1 font-medium">填写需求</div>
        </div>
        <div class="flex-1 mx-2">
          <div class="h-1 bg-primary rounded-full"></div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-8 h-8 rounded-full bg-gray-200 text-gray flex items-center justify-center font-medium text-sm">2</div>
          <div class="text-xs text-gray mt-1">AI匹配</div>
        </div>
        <div class="flex-1 mx-2">
          <div class="h-1 bg-gray-200 rounded-full"></div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-8 h-8 rounded-full bg-gray-200 text-gray flex items-center justify-center font-medium text-sm">3</div>
          <div class="text-xs text-gray mt-1">查看结果</div>
        </div>
      </div>
    </div>

    <!-- 表单内容 -->
    <div class="bg-light p-3 mt-3">
      <h3 class="font-medium mb-3">您的兴趣领域</h3>
      <div class="grid grid-cols-3 gap-2">
        <button class="py-2 border border-gray-100 rounded-lg flex flex-col items-center justify-center nav-action">
          <i class="fa fa-bolt text-primary text-xl"></i>
          <span class="text-xs mt-1">健身</span>
        </button>
        <button class="py-2 border border-gray-100 rounded-lg flex flex-col items-center justify-center nav-action">
          <i class="fa fa-leaf text-primary text-xl"></i>
          <span class="text-xs mt-1">瑜伽</span>
        </button>
        <button class="py-2 border border-gray-100 rounded-lg flex flex-col items-center justify-center nav-action">
          <i class="fa fa-heartbeat text-primary text-xl"></i>
          <span class="text-xs mt-1">减肥</span>
        </button>
        <button class="py-2 border border-gray-100 rounded-lg flex flex-col items-center justify-center nav-action">
          <i class="fa fa-music text-primary text-xl"></i>
          <span class="text-xs mt-1">舞蹈</span>
        </button>
        <button class="py-2 border border-gray-100 rounded-lg flex flex-col items-center justify-center nav-action">
          <i class="fa fa-moon-o text-primary text-xl"></i>
          <span class="text-xs mt-1">冥想</span>
        </button>
        <button class="py-2 border border-gray-100 rounded-lg flex flex-col items-center justify-center nav-action">
          <i class="fa fa-plus text-gray text-xl"></i>
          <span class="text-xs mt-1 text-gray">更多</span>
        </button>
      </div>

      <h3 class="font-medium mt-5 mb-3">您的目标</h3>
      <div class="grid grid-cols-3 gap-2">
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray nav-action">增肌</button>
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray nav-action">减脂</button>
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray nav-action">塑形</button>
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray nav-action">提高耐力</button>
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray nav-action">改善体态</button>
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray nav-action">其他</button>
      </div>

      <h3 class="font-medium mt-5 mb-3">您的当前水平</h3>
      <div class="grid grid-cols-3 gap-2">
        <button class="py-2 border border-primary text-primary rounded-lg text-sm nav-action">新手</button>
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray nav-action">中级</button>
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray nav-action">高级</button>
      </div>

      <h3 class="font-medium mt-5 mb-3">您的预算</h3>
      <div class="grid grid-cols-3 gap-2">
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray nav-action">¥0-50/小时</button>
        <button class="py-2 border border-primary text-primary rounded-lg text-sm nav-action">¥50-100/小时</button>
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray nav-action">¥100以上/小时</button>
      </div>

      <h3 class="font-medium mt-5 mb-3">您的偏好</h3>
      <div class="flex space-x-3 mb-2">
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray flex-1 nav-action">男教练</button>
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray flex-1 nav-action">女教练</button>
        <button class="py-2 border border-primary text-primary rounded-lg text-sm flex-1 nav-action">不限</button>
      </div>
      
      <div class="flex space-x-3">
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray flex-1 nav-action">1-3年经验</button>
        <button class="py-2 border border-primary text-primary rounded-lg text-sm flex-1 nav-action">3-5年经验</button>
        <button class="py-2 border border-gray-100 rounded-lg text-sm text-gray flex-1 nav-action">5年以上经验</button>
      </div>
    </div>

    <!-- 个性化需求 -->
    <div class="bg-light p-3 mt-3">
      <h3 class="font-medium mb-3">个性化需求（选填）</h3>
      <textarea class="w-full h-24 p-3 border border-gray-100 rounded-lg text-sm resize-none" placeholder="请描述您的具体需求，帮助我们更精准地为您匹配唤醒狮..."></textarea>
    </div>

    <!-- 提交按钮 -->
    <div class="p-3 mt-3">
      <button class="w-full bg-primary text-white py-3 rounded-full font-medium nav-action" @click="$router.push('/ai-result')">
        开始AI匹配
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchingPage'
}
</script>