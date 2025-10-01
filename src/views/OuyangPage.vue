<template>
  <div class="page" id="page-ouyang">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.back()">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">唤醒师详情</h2>
      <div class="flex-1 flex justify-end">
        <button class="nav-action text-gray mr-3">
          <i class="fa fa-share-alt"></i>
        </button>
        <button class="nav-action text-gray">
          <i class="fa fa-heart-o"></i>
        </button>
      </div>
    </header>

    <!-- 唤醒师基本信息 -->
    <div class="bg-light p-3">
      <div class="flex items-center">
        <img src="/img-20.jpg" alt="李教练头像" class="w-20 h-20 rounded-full mr-3">
        <div class="flex-1">
          <div class="flex items-center">
            <h3 class="font-bold text-lg">李教练（羽毛球）</h3>
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
      </div>
      
      <!-- 标签 -->
      <div class="flex flex-wrap gap-1 mt-3">
        <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">一对一</span>
        <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">小班课</span>
        <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">基础教学</span>
        <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">进阶提升</span>
        <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">青少年培训</span>
      </div>
    </div>

    <!-- 标签页导航 -->
    <div class="bg-light border-t border-b border-gray-100">
      <div class="flex">
        <button class="flex-1 py-3 text-primary font-medium border-b-2 border-primary" @click="activeTab = 'services'">教学服务</button>
        <button class="flex-1 py-3 text-gray" @click="activeTab = 'intro'">教练介绍</button>
        <button class="flex-1 py-3 text-gray" @click="activeTab = 'reviews'">学员评价</button>
        <button class="flex-1 py-3 text-gray" @click="activeTab = 'schedule'">排班日历</button>
      </div>
    </div>

    <!-- 教学服务内容区 -->
    <div v-if="activeTab === 'services'" class="mt-3 bg-light p-3">
      <h3 class="font-medium mb-3">教学服务</h3>
      <div class="space-y-3">
        <div class="border border-gray-100 rounded-lg p-3">
          <div class="flex justify-between items-start">
            <h4 class="font-medium">羽毛球一对一私教</h4>
            <span class="text-primary font-bold">¥80<span class="text-xs font-normal">/小时</span></span>
          </div>
          <p class="text-xs text-gray mt-1">个性化教学方案，针对性技术指导，快速提升球技</p>
          <div class="flex justify-between items-center mt-3">
            <div class="flex items-center">
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">30分钟起约</span>
              <span class="text-xs text-gray ml-2">已服务256人</span>
            </div>
            <button class="bg-primary text-white text-xs py-1 px-3 rounded-full" @click="$router.push('/booking')">
              立即预约
            </button>
          </div>
        </div>
        
        <div class="border border-gray-100 rounded-lg p-3">
          <div class="flex justify-between items-start">
            <h4 class="font-medium">羽毛球小班课</h4>
            <span class="text-primary font-bold">¥50<span class="text-xs font-normal">/小时/人</span></span>
          </div>
          <p class="text-xs text-gray mt-1">3-5人小班制，互动教学，团队协作，提升球技</p>
          <div class="flex justify-between items-center mt-3">
            <div class="flex items-center">
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">30分钟起约</span>
              <span class="text-xs text-gray ml-2">已服务128人</span>
            </div>
            <button class="bg-primary text-white text-xs py-1 px-3 rounded-full" @click="$router.push('/booking')">
              立即预约
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 教练介绍内容区 -->
    <div v-if="activeTab === 'intro'" class="mt-3 bg-light p-3">
      <h3 class="font-medium mb-3">教练介绍</h3>
      <p class="text-sm text-gray">
        李教练拥有10年羽毛球教学经验，曾是省队专业运动员，获得多项省级比赛冠军。专注于青少年和成人羽毛球培训，教学方法科学有效，注重基础技术训练和实战技巧提升。已培养出多名优秀羽毛球选手，深受学员和家长好评。
      </p>
      <div class="grid grid-cols-3 gap-2 mt-3">
        <img src="/img-1.jpg" alt="教练照片" class="w-full h-24 object-cover rounded">
        <img src="/img-2.jpg" alt="教练照片" class="w-full h-24 object-cover rounded">
        <img src="/img-3.jpg" alt="教练照片" class="w-full h-24 object-cover rounded">
      </div>
    </div>

    <!-- 学员评价内容区 -->
    <div v-if="activeTab === 'reviews'" class="mt-3 bg-light p-3">
      <div class="flex justify-between items-center mb-3">
        <h3 class="font-medium">学员评价</h3>
        <span class="text-xs text-gray">查看全部 &gt;&gt;</span>
      </div>
      
      <div class="space-y-3">
        <div>
          <div class="flex items-center">
            <img src="https://picsum.photos/id/64/40/40" alt="学员头像" class="w-8 h-8 rounded-full mr-2">
            <h4 class="text-sm font-medium">张先生</h4>
            <div class="flex space-x-0.5 text-warning text-xs ml-2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
          <p class="text-sm text-gray mt-1">李教练教学很有耐心，方法也很科学，我的球技在短时间内有了明显提升，非常感谢！</p>
          <div class="flex space-x-1 mt-2">
            <img src="/img-4.jpg" alt="评价图片" class="w-16 h-16 object-cover rounded">
            <img src="/img-5.jpg" alt="评价图片" class="w-16 h-16 object-cover rounded">
          </div>
          <p class="text-xs text-gray mt-2">2023-06-15</p>
        </div>
        
        <div>
          <div class="flex items-center">
            <img src="https://picsum.photos/id/65/40/40" alt="学员头像" class="w-8 h-8 rounded-full mr-2">
            <h4 class="text-sm font-medium">王女士</h4>
            <div class="flex space-x-0.5 text-warning text-xs ml-2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
          </div>
          <p class="text-sm text-gray mt-1">教练很专业，对孩子很有耐心，孩子很喜欢上他的课，进步也很明显。</p>
          <p class="text-xs text-gray mt-2">2023-06-10</p>
        </div>
      </div>
    </div>

    <!-- 排班日历内容区 -->
    <div v-if="activeTab === 'schedule'" class="mt-3 bg-light p-3">
      <h3 class="font-medium mb-3">选择日期</h3>
      <div class="flex overflow-x-auto scrollbar-hide pb-2">
        <div class="text-center flex-shrink-0 w-14">
          <p class="text-xs text-gray">周三</p>
          <p class="text-sm font-medium mt-1">3/13</p>
          <div class="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-1 text-xs">
            日
          </div>
        </div>
        <div class="text-center flex-shrink-0 w-14">
          <p class="text-xs text-gray">周四</p>
          <p class="text-sm font-medium mt-1">3/14</p>
          <div class="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-1 text-xs">
            一
          </div>
        </div>
        <div class="text-center flex-shrink-0 w-14">
          <p class="text-xs text-gray">周五</p>
          <p class="text-sm font-medium mt-1">3/15</p>
          <div class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center mx-auto mt-1 text-xs">
            二
          </div>
        </div>
        <div class="text-center flex-shrink-0 w-14">
          <p class="text-xs text-gray">周六</p>
          <p class="text-sm font-medium mt-1">3/16</p>
          <div class="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-1 text-xs">
            三
          </div>
        </div>
        <div class="text-center flex-shrink-0 w-14">
          <p class="text-xs text-gray">周日</p>
          <p class="text-sm font-medium mt-1">3/17</p>
          <div class="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-1 text-xs">
            四
          </div>
        </div>
        <div class="text-center flex-shrink-0 w-14">
          <p class="text-xs text-gray">周一</p>
          <p class="text-sm font-medium mt-1">3/18</p>
          <div class="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-1 text-xs">
            五
          </div>
        </div>
        <div class="text-center flex-shrink-0 w-14">
          <p class="text-xs text-gray">周二</p>
          <p class="text-sm font-medium mt-1">3/19</p>
          <div class="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-1 text-xs">
            六
          </div>
        </div>
      </div>

      <!-- 选择时间 -->
      <div class="mt-4">
        <h3 class="font-bold text-sm mb-2">选择时间</h3>
        <div class="grid grid-cols-4 gap-2">
          <button class="bg-light border border-gray-200 rounded-lg py-2 text-sm">09:00</button>
          <button class="bg-light border border-gray-200 rounded-lg py-2 text-sm">10:00</button>
          <button class="bg-light border border-gray-200 rounded-lg py-2 text-sm">11:00</button>
          <button class="bg-light border border-gray-200 rounded-lg py-2 text-sm">14:00</button>
          <button class="bg-primary text-white rounded-lg py-2 text-sm">15:00</button>
          <button class="bg-light border border-gray-200 rounded-lg py-2 text-sm">16:00</button>
          <button class="bg-light border border-gray-200 rounded-lg py-2 text-sm">17:00</button>
          <button class="bg-light border border-gray-200 rounded-lg py-2 text-sm">18:00</button>
        </div>
      </div>
    </div>

    <!-- 联系教练 -->
    <div class="fixed bottom-0 left-0 right-0 bg-light border-t border-gray-100 p-3 flex items-center">
      <button class="flex-1 mr-2 bg-light border border-primary text-primary py-2 rounded-full text-sm font-medium nav-action">
        <i class="fa fa-commenting-o mr-1"></i> 在线咨询
      </button>
      <button class="flex-1 bg-primary text-white py-2 rounded-full text-sm font-medium nav-action">
        <i class="fa fa-phone mr-1"></i> 电话预约
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OuyangPage',
  data() {
    return {
      activeTab: 'services'
    }
  }
}
</script>