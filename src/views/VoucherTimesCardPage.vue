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
            <input
              type="text"
              placeholder="请输入"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634]"
            />
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 售价 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">售价</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-[#FF6634]">请输入</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
            <div class="text-[13px] text-[#FF6634] mt-1">
              售价字段必填
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 次卡类型 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">次卡类型</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">体验卡</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 次卡头图 -->
          <div class="py-3.5">
            <div class="flex items-center mb-3">
              <span class="text-[14px] text-gray-900">次卡头图</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div
              class="w-[100px] h-[100px] bg-[#F5F5F5] rounded-lg flex flex-col items-center justify-center cursor-pointer border border-dashed border-gray-300"
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
            <div class="text-[13px] text-gray-400 mb-3">
              辅助图上传1-4张，每张图片不得超过5M
            </div>
            <div
              class="w-[100px] h-[100px] bg-[#F5F5F5] rounded-lg flex flex-col items-center justify-center cursor-pointer border border-dashed border-gray-300"
            >
              <i class="fa-solid fa-plus text-gray-400 text-xl mb-1"></i>
              <span class="text-[12px] text-gray-400">添加图片</span>
            </div>
          </div>
        </div>

        <!-- 服务范围 -->
        <div id="section-service" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">服务范围</h2>

          <!-- 商家服务项目选项 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">商家服务项目选项</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">健身房</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 门店范围 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-3">门店范围</div>
            <div class="flex gap-3">
              <div class="flex items-center gap-2">
                <input type="radio" name="storeScope" id="all-stores" checked class="w-4 h-4 text-[#FF6634]" />
                <label for="all-stores" class="text-[14px] text-gray-700">通用</label>
              </div>
              <div class="flex items-center gap-2">
                <input type="radio" name="storeScope" id="single-store" class="w-4 h-4 text-[#FF6634]" />
                <label for="single-store" class="text-[14px] text-gray-700">单店使用</label>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 适用门店 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">适用门店</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- 售卖信息 -->
        <div id="section-sales" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">售卖信息</h2>

          <!-- 库存数量 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">库存数量</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <input
              type="number"
              value="0"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634]"
            />
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 商品售卖日期 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">商品售卖日期</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="text-[14px] text-gray-700 mb-1">限时售卖</div>
            <div class="text-[13px] text-gray-400 leading-relaxed">
              <div>·2025/11/03 23:18~2026/10/28 23:18</div>
              <div>·到期后自动延期30天</div>
            </div>
          </div>
        </div>

        <!-- 交易规则 -->
        <div id="section-trade" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">交易规则</h2>

          <!-- 顾客可消费日期 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">顾客可消费日期</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="text-[14px] text-gray-500">
              自购买次日起360天，购买当天默认可用
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

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
                <span class="text-[14px] text-gray-400">不限制</span>
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

          <!-- 项目消耗 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">项目消耗</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <input
                type="number"
                placeholder=""
                class="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634]"
              />
              <span class="text-[14px] text-gray-700">次</span>
            </div>
            <div class="text-[13px] text-[#FF6634]">输入人数</div>
          </div>

          <!-- 添加按钮 -->
          <div class="py-2">
            <div
              class="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer"
            >
              <i class="fa-solid fa-plus text-gray-500 text-sm"></i>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 辅助说明 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-2">辅助说明</div>
            <textarea
              rows="3"
              placeholder="请输入"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634] resize-none"
            ></textarea>
          </div>
        </div>

        <!-- 核销规则 -->
        <div id="section-verification" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">核销规则</h2>

          <!-- 可核销门店 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">可核销门店</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">门店1</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 使用方式 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">使用方式</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
            </div>
            <div class="flex gap-3">
              <div class="flex items-center gap-2">
                <input type="radio" name="usageType" id="by-count" checked class="w-4 h-4 text-[#FF6634]" />
                <label for="by-count" class="text-[14px] text-gray-700">按次消费</label>
              </div>
              <div class="flex items-center gap-2">
                <input type="radio" name="usageType" id="by-duration" class="w-4 h-4 text-[#FF6634]" />
                <label for="by-duration" class="text-[14px] text-gray-700">时长消费</label>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 跨天是否记录 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">跨天是否记录</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[13px] text-gray-500">开启</span>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF6634]"></div>
                </label>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 每人最多使用人数 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">每人最多使用人数</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="number"
                value="1"
                class="w-20 px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634]"
              />
              <span class="text-[14px] text-gray-700">次/每天</span>
            </div>
          </div>
        </div>

        <!-- 其他规则 -->
        <div id="section-other" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">其他规则</h2>

          <!-- 保险费用 -->
          <div class="py-3.5">
            <div class="flex items-center mb-3">
              <span class="text-[14px] text-gray-900">保险费用</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex gap-3">
              <div class="flex items-center gap-2">
                <input type="radio" name="insurance" id="user-pay" checked class="w-4 h-4 text-[#FF6634]" />
                <label for="user-pay" class="text-[14px] text-gray-700">用户自费</label>
              </div>
              <div class="flex items-center gap-2">
                <input type="radio" name="insurance" id="merchant-pay" class="w-4 h-4 text-[#FF6634]" />
                <label for="merchant-pay" class="text-[14px] text-gray-700">商家包含</label>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 上门服务 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-3">上门服务</div>
            <div class="flex gap-3">
              <div class="flex items-center gap-2">
                <input type="radio" name="homeService" id="user-reimburse" class="w-4 h-4 text-[#FF6634]" />
                <label for="user-reimburse" class="text-[14px] text-gray-700">用户报销</label>
              </div>
              <div class="flex items-center gap-2">
                <input type="radio" name="homeService" id="merchant-include" class="w-4 h-4 text-[#FF6634]" />
                <label for="merchant-include" class="text-[14px] text-gray-700">商家包含</label>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 使用人数限制 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-3">
              <span class="text-[14px] text-gray-900">使用人数限制</span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF6634]"></div>
              </label>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 每张团购券最多可使用人数 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">每张团购券最多可使用人数</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <input
                type="number"
                placeholder=""
                class="w-24 px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634]"
              />
              <span class="text-[14px] text-gray-700">人</span>
            </div>
            <div class="text-[13px] text-[#FF6634]">输入人数</div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 其他说明信息 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-2">其他说明信息</div>
            <textarea
              rows="4"
              placeholder=""
              class="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634] resize-none"
            ></textarea>
            <div class="text-right text-[13px] text-gray-400 mt-1">0/500</div>
          </div>
        </div>

        <!-- 共同使用须知 -->
        <div id="section-usage-notice" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-3">共同使用须知</h2>
          
          <div class="text-[13px] text-gray-600 leading-relaxed space-y-2">
            <div class="flex">
              <span class="mr-2">·</span>
              <span>使用时间：购买后立即生效，有效期内可使用</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>预约时间：随时可约</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>本单需按照使用日期提前预约，如有疑问请联系商家</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>本单请在过期日前使用，过期后自动失效，不支持退款</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>退改说明：使用前可退。如需退款，请拨打客服电话</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>温馨提示：请务必在使用前预约，请勿无故爽约或取消订单</span>
            </div>
          </div>
        </div>

        <!-- 其他须知 -->
        <div id="section-other-notice" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-[15px] font-semibold text-gray-900">其他须知</h2>
            <span class="text-[13px] text-gray-400">5+5%</span>
          </div>
          
          <div class="text-[13px] text-gray-600 leading-relaxed space-y-2">
            <div class="flex">
              <span class="mr-2">·</span>
              <span>本次卡为电子凭证，购买成功后，将收到短信通知</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>无需预约，消费时出示手机上的团购券二维码给店员扫描即可</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>本单不与店内其他优惠同享</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>特殊日期(法定节假日/店家公告日期)使用，请提前与店家沟通</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>本商品不支持部分退款</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>每张团购券最多1人使用，超出收费标准：超出部分按门店实际价格收费</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>商家提供免费WiFi、停车位</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>如有其他消费争议，请根据店内告示与商家协商，或致电客服</span>
            </div>
          </div>
        </div>

        <!-- 退款规则 -->
        <div id="section-refund" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3 mb-3">
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-[15px] font-semibold text-gray-900">退款规则</h2>
            <span class="text-[13px] text-gray-400">30%</span>
          </div>
          
          <div class="text-[13px] text-gray-600 leading-relaxed space-y-2">
            <div class="flex">
              <span class="mr-2">·</span>
              <span>未使用的团购券，可在有效期内申请退款</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>退款金额为实际支付金额</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>退款将在7个工作日内退回原支付账户</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>已部分核销的团购券，不支持退款</span>
            </div>
            <div class="flex">
              <span class="mr-2">·</span>
              <span>如有退款问题，请联系客服400-000-0000</span>
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
  { value: 'service', label: '服务范围' },
  { value: 'sales', label: '售卖信息' },
  { value: 'trade', label: '交易规则' },
  { value: 'consumption', label: '消费规则' },
  { value: 'verification', label: '核销规则' },
  { value: 'other', label: '其他规则' }
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
