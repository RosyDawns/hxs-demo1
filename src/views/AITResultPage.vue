<template>
  <div class="page" id="page-ai-result">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.back()">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">AI匹配结果</h2>
    </header>

    <!-- 匹配进度指示器 -->
    <div class="bg-light p-3 mt-3">
      <div class="flex items-center justify-between">
        <div class="flex flex-col items-center">
          <div class="w-8 h-8 rounded-full bg-gray-200 text-gray flex items-center justify-center font-medium text-sm">1</div>
          <div class="text-xs text-gray mt-1">填写需求</div>
        </div>
        <div class="flex-1 mx-2">
          <div class="h-1 bg-primary rounded-full"></div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium text-sm">2</div>
          <div class="text-xs text-primary mt-1 font-medium">AI匹配</div>
        </div>
        <div class="flex-1 mx-2">
          <div class="h-1 bg-primary rounded-full"></div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium text-sm">3</div>
          <div class="text-xs text-primary mt-1 font-medium">查看结果</div>
        </div>
      </div>
    </div>

    <!-- 匹配结果 -->
    <div class="bg-light p-3 mt-3">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-medium">为您推荐的唤醒狮</h3>
        <span class="text-xs text-gray">共找到 5 位匹配的唤醒狮</span>
      </div>

      <!-- 推荐理由 -->
      <div class="p-3 bg-primary/5 rounded-lg mb-4">
        <div class="flex items-start">
          <i class="fa fa-lightbulb-o text-primary mt-0.5 mr-2"></i>
          <p class="text-xs text-gray flex-1">
            根据您的需求（羽毛球新手，希望提升基础技术，预算50-100元/小时，偏好有3-5年经验的教练），我们为您推荐了以下唤醒狮。这些唤醒狮在新手教学方面有丰富经验，评分高，口碑好。
          </p>
        </div>
      </div>

      <!-- 唤醒狮列表 -->
      <div class="space-y-3">
        <!-- 唤醒狮1 -->
        <div class="border border-gray-100 rounded-lg overflow-hidden nav-action" @click="$router.push('/ouyang')">
          <div class="p-3">
            <div class="flex items-center">
              <img src="@images/img-11.jpg" alt="李教练头像" class="w-16 h-16 rounded-full mr-3">
              <div class="flex-1">
                <div class="flex items-center">
                  <h3 class="font-medium">李教练（羽毛球）</h3>
                  <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded ml-2">专业认证</span>
                </div>
                <p class="text-xs text-gray mt-1">高级羽毛球教练 | 10年教学经验</p>
                <div class="flex items-center mt-1">
                  <div class="flex space-x-0.5 text-warning text-xs">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                  </div>
                  <span class="text-xs text-gray ml-1">96%好评</span>
                  <span class="text-xs text-gray ml-2">1.2km</span>
                </div>
              </div>
              <div class="text-right">
                <span class="text-sm font-medium text-primary">¥80<span class="text-xs font-normal">/小时</span></span>
              </div>
            </div>
            
            <!-- 匹配度 -->
            <div class="mt-3">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs text-gray">匹配度</span>
                <span class="text-xs text-primary font-medium">98%</span>
              </div>
              <div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-primary rounded-full" style="width: 98%"></div>
              </div>
            </div>
            
            <!-- 推荐原因 -->
            <div class="mt-2">
              <div class="flex flex-wrap gap-1">
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">新手教学专家</span>
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">基础技术培训</span>
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">好评率高</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 唤醒狮2 -->
        <div class="border border-gray-100 rounded-lg overflow-hidden nav-action" @click="$router.push('/ouyang')">
          <div class="p-3">
            <div class="flex items-center">
              <img src="@images/img-9.jpg" alt="陈教练头像" class="w-16 h-16 rounded-full mr-3">
              <div class="flex-1">
                <div class="flex items-center">
                  <h3 class="font-medium">陈教练（羽毛球）</h3>
                  <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded ml-2">专业认证</span>
                </div>
                <p class="text-xs text-gray mt-1">中级羽毛球教练 | 5年教学经验</p>
                <div class="flex items-center mt-1">
                  <div class="flex space-x-0.5 text-warning text-xs">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                  </div>
                  <span class="text-xs text-gray ml-1">92%好评</span>
                  <span class="text-xs text-gray ml-2">2.5km</span>
                </div>
              </div>
              <div class="text-right">
                <span class="text-sm font-medium text-primary">¥60<span class="text-xs font-normal">/小时</span></span>
              </div>
            </div>
            
            <!-- 匹配度 -->
            <div class="mt-3">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs text-gray">匹配度</span>
                <span class="text-xs text-primary font-medium">95%</span>
              </div>
              <div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-primary rounded-full" style="width: 95%"></div>
              </div>
            </div>
            
            <!-- 推荐原因 -->
            <div class="mt-2">
              <div class="flex flex-wrap gap-1">
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">价格实惠</span>
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">耐心细致</span>
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">3-5年经验</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 唤醒狮3 -->
        <div class="border border-gray-100 rounded-lg overflow-hidden nav-action" @click="$router.push('/ouyang')">
          <div class="p-3">
            <div class="flex items-center">
              <img src="@images/img-10.jpg" alt="刘教练头像" class="w-16 h-16 rounded-full mr-3">
              <div class="flex-1">
                <div class="flex items-center">
                  <h3 class="font-medium">刘教练（羽毛球）</h3>
                  <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded ml-2">专业认证</span>
                </div>
                <p class="text-xs text-gray mt-1">高级羽毛球教练 | 8年教学经验</p>
                <div class="flex items-center mt-1">
                  <div class="flex space-x-0.5 text-warning text-xs">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                  </div>
                  <span class="text-xs text-gray ml-1">90%好评</span>
                  <span class="text-xs text-gray ml-2">3.8km</span>
                </div>
              </div>
              <div class="text-right">
                <span class="text-sm font-medium text-primary">¥100<span class="text-xs font-normal">/小时</span></span>
              </div>
            </div>
            
            <!-- 匹配度 -->
            <div class="mt-3">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs text-gray">匹配度</span>
                <span class="text-xs text-primary font-medium">92%</span>
              </div>
              <div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-primary rounded-full" style="width: 92%"></div>
              </div>
            </div>
            
            <!-- 推荐原因 -->
            <div class="mt-2">
              <div class="flex flex-wrap gap-1">
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">专业技术强</span>
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">比赛经验丰富</span>
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">教学系统</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 其他选项 -->
    <div class="bg-light p-3 mt-3">
      <div class="flex space-x-3">
        <button class="flex-1 py-2 bg-light border border-primary text-primary rounded-lg text-sm font-medium nav-action" @click="$router.push('/matching')">
          重新匹配
        </button>
        <button class="flex-1 py-2 bg-primary text-white rounded-lg text-sm font-medium nav-action">
          查看更多
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AITResultPage'
}
</script>