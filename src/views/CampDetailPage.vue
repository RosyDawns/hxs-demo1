<template>
  <div class="page" id="page-camp-detail">
    <!-- 顶部导航 -->
    <CommonHeader>
      <template #center>
        <h2 class="font-bold">训练营详情</h2>
      </template>
      <template #right>
        <div class="flex-1 flex justify-end">
          <button class="nav-action text-gray mr-3">
            <i class="fa fa-share-alt"></i>
          </button>
          <button class="nav-action text-gray">
            <i class="fa fa-heart-o"></i>
          </button>
        </div>
      </template>
    </CommonHeader>

    <!-- 训练营封面 -->
    <div class="relative">
      <img src="@images/img-23.jpg" alt="训练营封面" class="w-full h-64 object-cover">
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <h1 class="text-white font-bold text-xl">夏日减脂训练营</h1>
        <div class="flex items-center mt-1">
          <span class="text-white text-xs px-2 py-0.5 bg-primary/80 rounded-full">官方认证</span>
          <span class="text-white text-xs ml-2"><i class="fa fa-users mr-1"></i> 32人已报名</span>
        </div>
      </div>
    </div>

    <!-- 价格和报名信息 -->
    <div class="bg-light p-4">
      <div class="flex justify-between items-center">
        <div>
          <span class="text-xs text-gray line-through">¥2999</span>
          <span class="text-2xl font-bold text-primary ml-1">¥1999</span>
          <span class="text-xs text-primary ml-1">/人</span>
        </div>
        <button class="bg-primary text-white py-2 px-4 rounded-full text-sm font-medium nav-action" @click="$router.push('/camp-register')">
          立即报名
        </button>
      </div>
      
      <div class="flex flex-wrap gap-2 mt-3 text-sm">
        <div class="flex items-center text-gray">
          <i class="fa fa-calendar-o mr-1"></i>
          <span>2023-07-10 至 2023-07-20</span>
        </div>
        <div class="flex items-center text-gray">
          <i class="fa fa-clock-o mr-1"></i>
          <span>每天 19:00-21:00</span>
        </div>
        <div class="flex items-center text-gray">
          <i class="fa fa-map-marker mr-1"></i>
          <span>健体健身中心</span>
        </div>
      </div>
    </div>

    <!-- 训练营介绍 -->
    <div class="bg-light p-4 mt-3">
      <h3 class="font-medium mb-3">训练营介绍</h3>
      <div class="text-sm text-gray space-y-3">
        <p>
          夏日减脂训练营是为期10天的专业减脂课程，由资深健身教练团队全程指导，结合科学的训练方法和饮食建议，帮助你在短时间内达到理想的减脂效果。
        </p>
        <p>
          课程内容包括：高强度间歇训练、有氧运动、力量训练、拉伸放松、减脂饮食指导、健康生活方式讲座等。
        </p>
        <p>
          适合人群：希望在短时间内减脂塑形的健康成年人，有无健身经验均可。
        </p>
        <div class="grid grid-cols-2 gap-2 mt-2">
          <img src="@images/img-24.jpg" alt="训练营图片" class="w-full h-24 object-cover rounded">
          <img src="@images/img-25.jpg" alt="训练营图片" class="w-full h-24 object-cover rounded">
          <img src="@images/img-26.jpg" alt="训练营图片" class="w-full h-24 object-cover rounded">
          <img src="@images/img-27.jpg" alt="训练营图片" class="w-full h-24 object-cover rounded">
        </div>
      </div>
    </div>

    <!-- 课程安排 -->
    <div class="bg-light p-4 mt-3">
      <h3 class="font-medium mb-3">课程安排</h3>
      <div class="space-y-3">
        <div class="border-b border-gray-100 pb-3">
          <div class="flex justify-between items-center">
            <h4 class="font-medium">Day 1: 开营仪式 & 体能测试</h4>
            <span class="text-xs text-gray">19:00-21:00</span>
          </div>
          <p class="text-xs text-gray mt-1">教练团队介绍、训练营规则说明、学员破冰、基础体能测试、个人目标设定</p>
        </div>
        
        <div class="border-b border-gray-100 pb-3">
          <div class="flex justify-between items-center">
            <h4 class="font-medium">Day 2-4: 基础代谢提升</h4>
            <span class="text-xs text-gray">19:00-21:00</span>
          </div>
          <p class="text-xs text-gray mt-1">有氧训练、基础力量训练、核心稳定性训练、拉伸放松</p>
        </div>
        
        <div class="border-b border-gray-100 pb-3">
          <div class="flex justify-between items-center">
            <h4 class="font-medium">Day 5: 减脂饮食讲座</h4>
            <span class="text-xs text-gray">19:00-21:00</span>
          </div>
          <p class="text-xs text-gray mt-1">科学减脂饮食原则、如何计算每日热量摄入、健康食材选择、食谱制定</p>
        </div>
        
        <div class="border-b border-gray-100 pb-3">
          <div class="flex justify-between items-center">
            <h4 class="font-medium">Day 6-9: 进阶训练</h4>
            <span class="text-xs text-gray">19:00-21:00</span>
          </div>
          <p class="text-xs text-gray mt-1">高强度间歇训练、循环训练、功能性训练、肌肉耐力提升</p>
        </div>
        
        <div>
          <div class="flex justify-between items-center">
            <h4 class="font-medium">Day 10: 结营仪式 & 成果展示</h4>
            <span class="text-xs text-gray">19:00-21:00</span>
          </div>
          <p class="text-xs text-gray mt-1">最终体能测试、成果对比、优秀学员表彰、后续训练建议、合影留念</p>
        </div>
      </div>
    </div>

    <!-- 教练团队 -->
    <div class="bg-light p-4 mt-3">
      <h3 class="font-medium mb-3">教练团队</h3>
      <div class="space-y-3">
        <div class="flex items-center nav-action" @click="$router.push('/ouyang')">
          <img src="@images/img-7.jpg" alt="李教练" class="w-12 h-12 rounded-full mr-3">
          <div class="flex-1">
            <h4 class="font-medium">李教练</h4>
            <p class="text-xs text-gray mt-0.5">健身教练 | 10年经验 | 国家级健身指导员</p>
          </div>
          <i class="fa fa-angle-right text-gray"></i>
        </div>
        
        <div class="flex items-center nav-action" @click="$router.push('/ouyang')">
          <img src="@images/img-6.jpg" alt="张教练" class="w-12 h-12 rounded-full mr-3">
          <div class="flex-1">
            <h4 class="font-medium">张教练</h4>
            <p class="text-xs text-gray mt-0.5">营养顾问 | 5年经验 | 注册营养师</p>
          </div>
          <i class="fa fa-angle-right text-gray"></i>
        </div>
      </div>
    </div>

    <!-- 用户评价 -->
    <div class="bg-light p-4 mt-3">
      <div class="flex justify-between items-center mb-3">
        <h3 class="font-medium">学员评价</h3>
        <span class="text-xs text-gray">查看全部 >></span>
      </div>
      
      <div class="space-y-3">
        <div class="border-b border-gray-100 pb-3">
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
          <p class="text-sm text-gray mt-1">课程非常棒，教练很专业，10天减了5斤，效果明显，推荐给想要减脂的朋友！</p>
          <div class="flex space-x-1 mt-2">
            <img src="@images/img-28.jpg" alt="评价图片" class="w-16 h-16 object-cover rounded">
            <img src="@images/img-29.jpg" alt="评价图片" class="w-16 h-16 object-cover rounded">
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
          <p class="text-sm text-gray mt-1">教练很有耐心，课程安排合理，虽然很累但是很充实，收获满满。</p>
          <p class="text-xs text-gray mt-2">2023-06-10</p>
        </div>
      </div>
    </div>

    <!-- 底部报名按钮 -->
    <div class="fixed bottom-0 left-0 right-0 bg-light border-t border-gray-100 p-3">
      <button class="w-full bg-primary text-white py-3 rounded-full font-medium nav-action" @click="$router.push('/camp-register')">
        立即报名 - ¥1999
      </button>
    </div>
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";

export default {
  name: "CampDetailPage",
  components: {
    CommonHeader
  },
}
</script>