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
    </header>

    <!-- Tab导航 -->
    <div
      class="fixed top-12 left-0 right-0 bg-white z-40 flex"
      style="border-bottom: 1px solid #E8E8E8;"
    >
      <div
        v-for="tab in tabs"
        :key="tab.value"
        class="flex-1 text-center py-3 relative cursor-pointer transition-colors"
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
              次卡
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
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">商品名称</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="text-[13px] text-gray-400 mb-2">名称需与内容保持一致，不能包含除字母和数字外的特殊符号，建议包含适用场景及用餐人数</div>
            <input
              type="text"
              value="健身次卡"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634]"
            />
          </div>

          

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 次卡封面图 -->
          <div class="py-3.5">
            <div class="flex items-center mb-1">
              <span class="text-[14px] text-gray-900">次卡封面图</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="text-[13px] text-gray-400 mb-3">封面图建议选用高清优质图提升客流 <span class="text-[#FF6634]">查看示例</span></div>
            <div class="text-[13px] text-gray-400 mb-3">图片比例建议3:4</div>
            <div
              class="w-[120px] h-[160px] bg-[#F5F5F5] rounded-lg flex flex-col items-center justify-center cursor-pointer border border-dashed border-gray-300"
            >
              <i class="fa-solid fa-plus text-gray-400 text-xl mb-1"></i>
              <span class="text-[12px] text-gray-400">添加图片</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 辅助图 -->
          <div class="py-3.5">
            <div class="flex items-center mb-1">
              <span class="text-[14px] text-gray-900">辅助图</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="text-[13px] text-gray-400 mb-3">辅助图上传1-4张，每张图片不得超过5M <span class="text-[#FF6634]">查看示例</span></div>
            <div
              class="w-[100px] h-[100px] bg-[#F5F5F5] rounded-lg flex flex-col items-center justify-center cursor-pointer border border-dashed border-gray-300"
            >
              <i class="fa-solid fa-plus text-gray-400 text-xl mb-1"></i>
              <span class="text-[12px] text-gray-400">添加图片</span>
            </div>
          </div>
        </div>

        <!-- 售卖信息 -->
        <div id="section-sales" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">售卖信息</h2>

          <!-- 可用次数 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">可用次数</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center justify-end">
              <button class="w-8 h-8 border border-gray-200 rounded-l-lg flex items-center justify-center text-gray-500">-</button>
              <input type="number" value="2" class="w-12 h-8 border-t border-b border-gray-200 text-center text-[14px] focus:outline-none" readonly />
              <button class="w-8 h-8 border border-gray-200 rounded-r-lg flex items-center justify-center text-gray-500">+</button>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 单次价格 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">单次价格</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center justify-end">
              <input type="text" placeholder="请输入单次原价" class="border border-gray-200 rounded-lg px-3 py-2 text-right text-[14px] focus:outline-none focus:border-[#FF6634] w-32" />
              <span class="ml-2 text-[14px] text-gray-700">¥</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 次卡原价 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[14px] text-gray-900">次卡原价</span>
              <span class="text-[12px] text-gray-400">不可编辑</span>
            </div>
            <div class="flex items-center justify-end">
              <span class="text-[14px] text-gray-400">自动计算</span>
              <span class="ml-2 text-[14px] text-gray-700">¥</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 顾客实际需支付 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">顾客实际需支付</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center justify-end">
              <input type="text" placeholder="请输入" class="border border-gray-200 rounded-lg px-3 py-2 text-right text-[14px] text-[#FF6634] focus:outline-none focus:border-[#FF6634] w-32" />
              <span class="ml-2 text-[14px] text-gray-700">¥</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 全民星推官佣金 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">全民星推官佣金</span>
            </div>
            <div class="flex items-center justify-end">
              <input type="text" placeholder="输入比例" class="border border-gray-200 rounded-lg px-3 py-2 text-right text-[14px] text-[#FF6634] focus:outline-none focus:border-[#FF6634] w-32" />
              <span class="ml-2 text-[14px] text-gray-700">%</span>
              <span class="ml-4 text-[12px] text-gray-400">分销金额，核销利器</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 能量币可抵扣额度 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">能量币可抵扣额度</span>
            </div>
            <div class="flex items-center justify-end">
              <input type="text" placeholder="输入金额" class="border border-gray-200 rounded-lg px-3 py-2 text-right text-[14px] text-[#FF6634] focus:outline-none focus:border-[#FF6634] w-32" />
              <span class="ml-2 text-[14px] text-gray-700">元</span>
              <span class="ml-4 text-[12px] text-gray-400">让更多用户帮你打Call</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 库存数量 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">库存数量</span>
            </div>
            <div class="flex items-center justify-end mb-3">
              <label class="flex items-center mr-6">
                <input type="radio" name="stock" checked class="w-4 h-4 text-[#FF6634]" />
                <span class="ml-2 text-[14px] text-gray-700">限制库存</span>
              </label>
              <label class="flex items-center">
                <input type="radio" name="stock" class="w-4 h-4 text-[#FF6634]" />
                <span class="ml-2 text-[14px] text-gray-700">不限库存</span>
              </label>
            </div>
            <div class="flex items-center justify-end">
              <input type="number" value="500" class="border border-gray-200 rounded-lg px-3 py-2 text-right text-[14px] focus:outline-none focus:border-[#FF6634] w-32" />
              <span class="ml-2 text-[14px] text-gray-700">份</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 商品售卖日期 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">商品售卖日期</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center justify-end mb-3">
              <label class="flex items-center mr-6">
                <input type="radio" name="salesDate" checked class="w-4 h-4 text-[#FF6634]" />
                <span class="ml-2 text-[14px] text-gray-700">限制售卖</span>
              </label>
              <label class="flex items-center">
                <input type="radio" name="salesDate" class="w-4 h-4 text-[#FF6634]" />
                <span class="ml-2 text-[14px] text-gray-700">不限时间</span>
              </label>
            </div>
            <div>
              <input type="text" placeholder="限制售卖日期" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-[14px] bg-gray-50 focus:outline-none" readonly />
            </div>
          </div>
        </div>

        <!-- 交易规则 -->
        <div id="section-trade" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">交易规则</h2>

          <!-- 顾客可消费日期 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">顾客可消费日期</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
            <div class="bg-gray-50 rounded-lg px-3 py-2 text-[14px] text-gray-500">
              自购买次日起360天，购买当天默认可用
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 顾客不可消费日期 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[14px] text-gray-900">顾客不可消费日期</span>
              <div class="flex items-center gap-2">
                <span class="text-[13px] text-[#FF6634]">编辑</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg px-3 py-2 text-[14px] text-gray-500">
              所有日期均可用
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 每日消费时段 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">每日消费时段</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[13px] text-[#FF6634]">编辑</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg px-3 py-2 text-[14px] text-gray-500">
              全天可用
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 限购规则 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <span class="text-[14px] text-gray-900">限购规则</span>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-500">不限制</span>
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
                <span class="text-[14px] text-gray-500">无需预约</span>
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
                <span class="text-[14px] text-gray-500">唤醒券</span>
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
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">店内其他优惠</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-500">不与店内优惠同享</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 额外消费 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <span class="text-[14px] text-gray-900">额外消费</span>
              <div class="flex items-center gap-2">
                <span class="text-[13px] text-[#FF6634]">编辑</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 使用次数限制 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[14px] text-gray-900">使用次数限制</span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF6634]"></div>
              </label>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-gray-900">单次消费最多使用张数</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              <span class="text-[14px] text-gray-500">请输入</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 使用人数限制 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[14px] text-gray-900">使用人数限制</span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF6634]"></div>
              </label>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-gray-900">每张团购券最多可使用人数</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              <span class="text-[14px] text-gray-500">请输入</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 其他说明信息 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-2">其他说明信息</div>
            <div class="bg-gray-50 rounded-lg px-3 py-2 text-[13px] text-gray-500 mb-2">
              若需填写多项可直接换行，无需在内容前标注序号。不得存在"美团"、"点评"、"最终解释权"等字样xxx
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-gray-500">请输入其他规则限制，规则需与其他商品信息前后一致，多条规则请用回车换行区分</span>
            </div>
          </div>
        </div>

        <!-- 其他使用规则 -->
        <div id="section-other" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-[15px] font-semibold text-gray-900">其他使用规则</h2>
            <div class="flex items-center gap-2">
              <span class="text-[13px] text-[#FF6634]">编辑</span>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg px-3 py-2">
            <ul class="text-[14px] text-gray-700 space-y-1">
              <li class="flex gap-2">
                <span class="text-gray-500">·</span>
                <span>无需预约</span>
              </li>
              <li class="flex gap-2">
                <span class="text-gray-500">·</span>
                <span>不与店内优惠同享</span>
              </li>
              <li class="flex gap-2">
                <span class="text-gray-500">·</span>
                <span>无需预约</span>
              </li>
              <li class="flex gap-2">
                <span class="text-gray-500">·</span>
                <span>不与他人共用</span>
              </li>
              <li class="flex gap-2">
                <span class="text-gray-500">·</span>
                <span>每天到店不可使用多次</span>
              </li>
              <li class="flex gap-2">
                <span class="text-gray-500">·</span>
                <span>无其他说明信息</span>
              </li>
            </ul>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100 my-3"></div>

          <!-- 结算规则 -->
          <div class="py-2">
            <div class="flex items-center justify-between mb-2">
              <h2 class="text-[15px] font-semibold text-gray-900">结算规则</h2>
              <span class="text-[12px] text-gray-400">不可编辑</span>
            </div>
            
            <div class="bg-gray-50 rounded-lg px-3 py-2">
              <ul class="text-[14px] text-gray-700 space-y-1">
                <li class="flex gap-2">
                  <span class="text-gray-500">·</span>
                  <span>按照用户使用次数结算</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100 my-3"></div>

          <!-- 退款规则 -->
          <div class="py-2">
            <div class="flex items-center justify-between mb-2">
              <h2 class="text-[15px] font-semibold text-gray-900">退款规则</h2>
              <span class="text-[12px] text-gray-400">不可编辑</span>
            </div>
            
            <div class="bg-gray-50 rounded-lg px-3 py-2">
              <ul class="text-[14px] text-gray-700 space-y-1">
                <li class="flex gap-2">
                  <span class="text-gray-500">·</span>
                  <span>支持随时退，过期自动退</span>
                </li>
                <li class="flex gap-2">
                  <span class="text-gray-500">·</span>
                  <span>整单退款：全部未使用，可随时退还全部实付金额</span>
                </li>
                <li class="flex gap-2">
                  <span class="text-gray-500">·</span>
                  <span>剩余次数退款：发生核销后，剩余所有未核销次数须一起退款</span>
                </li>
                <li class="flex gap-2">
                  <span class="text-gray-500">·</span>
                  <span>退款价格计算：可退金额=实付金额-购买时的单次平均价*已使用次数</span>
                </li>
                <li class="flex gap-2 pl-6">
                  <span></span>
                  <span class="text-[14px] text-gray-700">例如：3次卡实付¥300，购买时单次平均价为¥300/3次=¥100，使用2次后可退金额=¥300-¥100*2=¥100</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部按钮 -->
    <footer class="fixed bottom-0 left-0 right-0 bg-transparent px-4 py-3 flex gap-3" style="box-shadow: 0 -2px 10px rgba(0,0,0,0.05);">
      <button class="flex-1 py-3 rounded-full border border-[#FF6634] text-[#FF6634] text-[15px] font-medium bg-white">
        预览
      </button>
      <button class="flex-1 py-3 rounded-full bg-[#FF6634] text-white text-[15px] font-medium">
        继续发布
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
  { value: 'sales', label: '售卖信息' },
  { value: 'trade', label: '交易规则' },
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
</style>
