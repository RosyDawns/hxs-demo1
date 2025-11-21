<template>
  <div class="page flex flex-col h-screen bg-[#F5F5F5]">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3 flex items-center justify-between"
      style="border-bottom: 1px solid #E8E8E8;"
    >
      <div class="flex items-center flex-1">
        <div class="mr-3" @click="goBack">
          <i class="fa-solid fa-chevron-left text-gray-700 text-base"></i>
        </div>
        <h1 class="text-[17px] font-semibold text-gray-900">商品创建</h1>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-1">
          <i class="fa-solid fa-star text-yellow-400 text-sm"></i>
          <span class="text-[14px] text-gray-700">4.9</span>
        </div>
        <button class="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
          <i class="fa-solid fa-ellipsis text-gray-600 text-sm"></i>
        </button>
      </div>
    </header>

    <!-- Tab导航 -->
    <div
      class="fixed top-12 left-0 right-0 bg-white z-40 overflow-x-auto"
      style="border-bottom: 1px solid #E8E8E8;"
    >
      <div class="flex min-w-max">
        <div
          v-for="tab in tabs"
          :key="tab.value"
          class="px-4 py-3 relative cursor-pointer transition-colors whitespace-nowrap"
          :class="activeTab === tab.value ? 'text-gray-900 font-medium' : 'text-gray-500'"
          @click="scrollToSection(tab.value)"
        >
          <span class="text-[14px]">{{ tab.label }}</span>
          <div
            v-if="activeTab === tab.value"
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-[2px] bg-[#FF6634] rounded-full"
          ></div>
        </div>
      </div>
    </div>

    <!-- 主内容区域 -->
    <main class="flex-1 overflow-y-auto pt-24 pb-24 bg-[#F5F5F5]" ref="mainContent">
      <div>
        <!-- 基础信息 -->
        <div id="section-basics" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">基础信息</h2>

          <!-- 服务品类 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[14px] text-gray-900">服务品类</span>
              <span class="text-[13px] text-gray-400">不可编辑</span>
            </div>
            <div class="text-[14px] text-gray-500">
              运动场馆 &gt; 健身房
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 商品类型 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[14px] text-gray-900">商品类型</span>
              <span class="text-[13px] text-gray-400">不可编辑</span>
            </div>
            <div class="text-[14px] text-gray-500">
              免费体验
            </div>
          </div>
        </div>

        <!-- 商家信息 -->
        <div id="section-merchant" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">商家信息</h2>

          <!-- 商家执照名称 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[14px] text-gray-900">商家执照名称</span>
              <span class="text-[13px] text-gray-400">不可编辑</span>
            </div>
            <div class="text-[14px] text-gray-500">
              上海大樟体育有限公司
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 收款方式 -->
          <div class="flex items-center justify-between py-3.5">
            <div class="flex items-center">
              <span class="text-[14px] text-gray-900">收款方式</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-gray-400">钱包收款</span>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 账号名称 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-1">账号名称</div>
            <div class="text-[14px] text-gray-500">
              大樟健身环球港店
            </div>
          </div>
        </div>

        <!-- 商品信息 -->
        <div id="section-product" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">商品信息</h2>

          <!-- 商品名称 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">商品名称</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">大樟健身房免费体验1次</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 商品售价 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">商品售价</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <textarea
              rows="4"
              placeholder="详情描述"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634] resize-none"
            ></textarea>
            <div class="text-right text-[13px] text-gray-400 mt-1">0/2000</div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 商品价格 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">商品价格</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-[#FF6634]">输入商品金额价</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
            <div class="text-[13px] text-gray-400 mt-2 leading-relaxed">
              用户需支持能量币数量为输入值+折扣<span class="text-[#FF6634]">处</span>
            </div>
            <div class="text-[13px] text-gray-400 leading-relaxed">
              用户使用能量团购时将收到费用
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 项目补充说明 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-2">项目补充说明</div>
            <textarea
              rows="4"
              placeholder="如有需注意请填写时请，不少于10字"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634] resize-none"
            ></textarea>
            <div class="text-right text-[13px] text-gray-400 mt-1">0/2000</div>
          </div>
        </div>

        <!-- 交易规则 -->
        <div id="section-trade" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">交易规则</h2>

          <!-- 顾客不可消费日期 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <span class="text-[14px] text-gray-900">顾客不可消费日期</span>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">所有日期均可用</span>
                <span class="text-[13px] text-[#FF6634]">编辑</span>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 每日消费时段 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">每日消费时段</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">全天可用</span>
                <span class="text-[13px] text-[#FF6634]">编辑</span>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 限购规则 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <span class="text-[14px] text-gray-900">限购规则</span>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">不限购</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 预约规则 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <span class="text-[14px] text-gray-900">预约规则</span>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">无需预约</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 券码类型 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">券码类型</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">唤醒券</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- 消费规则 -->
        <div id="section-consumption" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">消费规则</h2>

          <!-- 店内其他优惠 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">店内其他优惠</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">不与店内优惠同享</span>
                <span class="text-[13px] text-[#FF6634]">编辑</span>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 额外服务 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-3">额外服务</div>

            <!-- 保险费用 -->
            <div class="mb-3">
              <div class="text-[13px] text-gray-600 mb-2">保险费用</div>
              <div class="flex gap-3">
                <div class="flex items-center gap-2">
                  <input type="radio" name="insurance" id="user-pay" class="w-4 h-4 text-[#FF6634]" />
                  <label for="user-pay" class="text-[14px] text-gray-700">用户自费</label>
                </div>
                <div class="flex items-center gap-2">
                  <input type="radio" name="insurance" id="merchant-include" class="w-4 h-4 text-[#FF6634]" />
                  <label for="merchant-include" class="text-[14px] text-gray-700">商家包含</label>
                </div>
              </div>
            </div>

            <!-- 上门服务 -->
            <div>
              <div class="text-[13px] text-gray-600 mb-2">上门服务</div>
              <div class="flex gap-3">
                <div class="flex items-center gap-2">
                  <input type="radio" name="homeService" id="user-reimburse" class="w-4 h-4 text-[#FF6634]" />
                  <label for="user-reimburse" class="text-[14px] text-gray-700">用户报销</label>
                </div>
                <div class="flex items-center gap-2">
                  <input type="radio" name="homeService" id="merchant-cover" class="w-4 h-4 text-[#FF6634]" />
                  <label for="merchant-cover" class="text-[14px] text-gray-700">商家包含</label>
                </div>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 其他说明信息 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-2">其他说明信息</div>
            <div class="text-[13px] text-gray-500 leading-relaxed mb-3 p-3 bg-gray-50 rounded-lg">
              店铺需安全必须依据成员，无需在约诊预约后支持，不得转卖"高能"、"精轻"和"能量团委"等关键xxxx
            </div>
            <textarea
              rows="4"
              placeholder="请输入其他说明规则，规则时与其他商品信息相同将方法被拒提交，请勿按图原内容填写此处功"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634] resize-none"
            ></textarea>
            <div class="text-right text-[13px] text-gray-400 mt-1">0/500</div>
          </div>
        </div>

        <!-- 底部间距 -->
        <div class="mb-3"></div>
      </div>
    </main>

    <!-- 底部按钮 -->
    <footer class="fixed bottom-0 left-0 right-0 bg-transparent px-4 py-3 flex gap-3" style="box-shadow: 0 -2px 10px rgba(0,0,0,0.05);">
      <button class="flex-1 py-3 rounded-full border border-[#FF6634] text-[#FF6634] text-[15px] font-medium bg-white">
        预览
      </button>
      <button class="flex-1 py-3 rounded-full bg-[#FF6634] text-white text-[15px] font-medium">
        提交审核
      </button>
    </footer>

    <!-- 客服按钮 -->
    <div class="fixed bottom-[100px] left-6 z-40">
      <div class="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center cursor-pointer shadow-lg">
        <i class="fa-solid fa-headset text-[#FF6634] text-xl"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mainContent = ref(null)
const activeTab = ref('basics')

const tabs = [
  { value: 'basics', label: '基础信息' },
  { value: 'merchant', label: '商家信息' },
  { value: 'product', label: '商品信息' },
  { value: 'trade', label: '交易规则' },
  { value: 'consumption', label: '消费规则' }
]

const goBack = () => {
  router.back()
}

const scrollToSection = (section) => {
  const element = document.getElementById(`section-${section}`)
  if (element && mainContent.value) {
    const offset = element.offsetTop - 120
    mainContent.value.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  if (!mainContent.value) return
  
  const scrollTop = mainContent.value.scrollTop
  const sections = tabs.map(tab => {
    const element = document.getElementById(`section-${tab.value}`)
    if (element) {
      return {
        value: tab.value,
        top: element.offsetTop - 130
      }
    }
    return null
  }).filter(Boolean)

  for (let i = sections.length - 1; i >= 0; i--) {
    if (scrollTop >= sections[i].top) {
      activeTab.value = sections[i].value
      break
    }
  }
}

onMounted(() => {
  if (mainContent.value) {
    mainContent.value.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (mainContent.value) {
    mainContent.value.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
/* 隐藏滚动条 */
main::-webkit-scrollbar {
  display: none;
}

main {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Tab导航滚动条 */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
