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
              {{ categoryName }}
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
              代金券
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

          <!-- 代金券面值 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">代金券面值</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">请设置金额</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
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

          <!-- 代金券名称 -->
          <div class="py-3.5">
            <div class="flex items-center mb-1">
              <span class="text-[14px] text-gray-900">代金券名称</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="text-[13px] text-gray-400 leading-relaxed mb-2">
              商品名称需与商品内容保持一致，不得含有错别字及特殊符号
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[14px] text-gray-400">按面值金额自动生成</span>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 代金券头图 -->
          <div class="py-3.5">
            <div class="flex items-center mb-3">
              <span class="text-[14px] text-gray-900">代金券头图</span>
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

        <!-- 售卖信息 -->
        <div id="section-sales" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">售卖信息</h2>

          <!-- 库存数量 -->
          <div class="flex items-center justify-between py-3.5">
            <div class="flex items-center">
              <span class="text-[14px] text-gray-900">库存数量</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-gray-400">0</span>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 商品售卖日期 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">商品售卖日期</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">限时售卖</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
            <div class="text-[13px] text-gray-400">
              ·2025/11/03 23:18~2026/10/28 23:18
            </div>
            <div class="text-[13px] text-gray-400 mt-0.5">
              ·到期后自动延期30天
            </div>
          </div>
        </div>

        <!-- 交易规则 -->
        <div id="section-trade" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">交易规则</h2>

          <!-- 顾客可消费日期 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">顾客可消费日期</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
            <div class="text-[13px] text-gray-400">
              自购买次日起360天，购买当天默认可用
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 顾客不可消费日期 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[14px] text-gray-900">顾客不可消费日期</span>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">编辑</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
            <div class="text-[13px] text-gray-400">
              所有日期均可用
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 每日消费时段 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">每日消费时段</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">编辑</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
            <div class="text-[13px] text-gray-400">
              全天可用
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 限购规则 -->
          <div class="flex items-center justify-between py-3.5">
            <span class="text-[14px] text-gray-900">限购规则</span>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-gray-400">不限制</span>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 预约规则 -->
          <div class="flex items-center justify-between py-3.5">
            <span class="text-[14px] text-gray-900">预约规则</span>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-gray-400">无需预约</span>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 券码类型 -->
          <div class="flex items-center justify-between py-3.5">
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

        <!-- 消费规则 -->
        <div class="bg-white mt-3 mx-4 mb-3 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">消费规则</h2>

          <!-- 店内其他优惠 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">店内其他优惠</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">编辑</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
            <div class="text-[13px] text-gray-400">
              不与店内优惠同享
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 额外消费 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-3">额外消费</div>
            
            <!-- 保险费用 -->
            <div class="mb-4">
              <div class="text-[13px] text-gray-600 mb-2">保险费用</div>
              <div class="flex gap-6">
                <label class="flex items-center gap-2">
                  <input type="radio" name="insurance" value="user" class="w-4 h-4 text-[#FF6634]" />
                  <span class="text-[14px] text-gray-700">用户自费</span>
                </label>
                <label class="flex items-center gap-2">
                  <input type="radio" name="insurance" value="merchant" class="w-4 h-4 text-[#FF6634]" />
                  <span class="text-[14px] text-gray-700">商家包含</span>
                </label>
              </div>
            </div>
            
            <!-- 上门服务 -->
            <div>
              <div class="text-[13px] text-gray-600 mb-2">上门服务</div>
              <div class="flex gap-6">
                <label class="flex items-center gap-2">
                  <input type="radio" name="service" value="user" class="w-4 h-4 text-[#FF6634]" />
                  <span class="text-[14px] text-gray-700">用户报销</span>
                </label>
                <label class="flex items-center gap-2">
                  <input type="radio" name="service" value="merchant" class="w-4 h-4 text-[#FF6634]" />
                  <span class="text-[14px] text-gray-700">商家包含</span>
                </label>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 使用张数限制 -->
          <div class="flex items-center justify-between py-3.5">
            <span class="text-[14px] text-gray-900">使用张数限制</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked />
              <div
                class="w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#FF6634]"
              ></div>
            </label>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 单次消费最多使用张数 -->
          <div class="flex items-center justify-between py-3.5">
            <div class="flex items-center">
              <span class="text-[14px] text-gray-900">单次消费最多使用张数</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-[#FF6634]">请输入</span>
              <span class="text-[14px] text-gray-400">张</span>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 使用人数限制 -->
          <div class="flex items-center justify-between py-3.5">
            <span class="text-[14px] text-gray-900">使用人数限制</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked />
              <div
                class="w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#FF6634]"
              ></div>
            </label>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 每张团购券最多可使用人数 -->
          <div class="flex items-center justify-between py-3.5">
            <div class="flex items-center">
              <span class="text-[14px] text-gray-900">每张团购券最多可使用人数</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-[#FF6634]">请输入</span>
              <span class="text-[14px] text-gray-400">人</span>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 其他说明信息 -->
          <div class="py-3.5">
          <div class="text-[14px] font-medium text-gray-900 mb-2">其他说明信息</div>
          <div class="text-[13px] text-gray-400 leading-relaxed mb-3">
            若需填写多项可直接换行，无需在内容前标注序号。不得存在"美团"、"点评"、"最终解释权"等字样xxx
          </div>
          <textarea
            placeholder="请输入其他规则限制，规则需与其他商品信息前后一致，多条规则请用回车换行区分"
            class="w-full h-24 border border-gray-200 rounded-lg px-3 py-2 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#FF6634] resize-none"
          ></textarea>
          <div class="text-right text-[13px] text-gray-400 mt-2">
            0/500
          </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 使用张数限制 -->
          <div class="flex items-center justify-between py-3.5">
            <span class="text-[14px] text-gray-900">使用张数限制</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked />
              <div
                class="w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#FF6634]"
              ></div>
            </label>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 单次消费最多使用张数 -->
          <div class="flex items-center justify-between py-3.5">
            <div class="flex items-center">
              <span class="text-[14px] text-gray-900">单次消费最多使用张数</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-[#FF6634]">请输入</span>
              <span class="text-[14px] text-gray-400">张</span>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 使用人数限制 -->
          <div class="flex items-center justify-between py-3.5">
            <span class="text-[14px] text-gray-900">使用人数限制</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked />
              <div
                class="w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#FF6634]"
              ></div>
            </label>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 每张团购券最多可使用人数 -->
          <div class="flex items-center justify-between py-3.5">
            <div class="flex items-center">
              <span class="text-[14px] text-gray-900">每张团购券最多可使用人数</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-[#FF6634]">请输入</span>
              <span class="text-[14px] text-gray-400">人</span>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 其他说明信息 -->
          <div class="py-3.5">
          <div class="text-[14px] font-medium text-gray-900 mb-2">其他说明信息</div>
          <div class="text-[13px] text-gray-400 leading-relaxed mb-3">
            若需填写多项可接行，无需在内容前添加序号，不得存在“美团”、“点评”、“最终解释权”等字符xxx
          </div>
          <textarea
            placeholder="请输入其他规则限制，规则需与其他商品信息前后一致，多条规则请用回车换行区分"
            class="w-full h-24 border border-gray-200 rounded-lg px-3 py-2 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#FF6634] resize-none"
          ></textarea>
          <div class="text-right text-[13px] text-gray-400 mt-2">
            0/500
          </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部按钮 -->
    <footer
      class="fixed bottom-0 left-0 right-0 bg-transparent px-6 pb-6 pt-3 flex gap-3"
    >
      <button
        class="flex-1 bg-white text-gray-700 rounded-full py-3.5 text-[16px] font-medium shadow-lg border border-gray-200 active:bg-gray-50"
      >
        预览
      </button>
      <button
        class="flex-1 bg-[#FF6634] text-white rounded-full py-3.5 text-[16px] font-medium shadow-lg active:bg-[#FF5520]"
      >
        提交审核
      </button>
    </footer>

    <!-- 客服悬浮按钮 -->
    <div class="fixed bottom-[100px] left-6 z-40">
      <button
        class="w-[52px] h-[52px] rounded-full bg-[#FF6634] flex flex-col items-center justify-center shadow-xl active:bg-[#FF5520]"
      >
        <i class="fa-solid fa-headset text-white text-[16px]"></i>
        <span class="text-white text-[11px] mt-0.5 font-medium">客服</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VoucherCreatePage",
  data() {
    return {
      categoryName: "运动场馆·健身房",
      activeTab: "basics",
      tabs: [
        { value: "basics", label: "基础信息" },
        { value: "merchant", label: "商家信息" },
        { value: "product", label: "商品信息" },
        { value: "sales", label: "售卖信息" },
        { value: "trade", label: "交易规则" },
      ],
    };
  },
  mounted() {
    // 从路由参数获取品类名称
    if (this.$route.query.category) {
      this.categoryName = this.$route.query.category;
    }
    
    // 添加滚动监听
    this.$nextTick(() => {
      if (this.$refs.mainContent) {
        this.$refs.mainContent.addEventListener('scroll', this.handleScroll);
      }
    });
  },
  beforeDestroy() {
    // 移除滚动监听
    if (this.$refs.mainContent) {
      this.$refs.mainContent.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    scrollToSection(sectionValue) {
      // 设置当前活跃tab
      this.activeTab = sectionValue;
      
      // 滚动到对应区域
      const sectionId = `section-${sectionValue}`;
      const element = document.getElementById(sectionId);
      
      if (element && this.$refs.mainContent) {
        // 计算需要滚动的位置，考虑固定tab栏高度
        const mainContent = this.$refs.mainContent;
        const elementTop = element.offsetTop;
        const offset = 110; // 顶部导航 + tab的总高度
        
        mainContent.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth'
        });
      }
    },
    handleScroll() {
      // 根据滚动位置自动更新activeTab
      const mainContent = this.$refs.mainContent;
      if (!mainContent) return;
      
      const scrollTop = mainContent.scrollTop;
      const offset = 150; // 阈值
      
      // 遍历所有tab，找到当前滚动位置对应的区域
      for (let i = this.tabs.length - 1; i >= 0; i--) {
        const tab = this.tabs[i];
        const element = document.getElementById(`section-${tab.value}`);
        
        if (element && element.offsetTop - offset <= scrollTop) {
          this.activeTab = tab.value;
          break;
        }
      }
    },
  },
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}

/* 隐藏滚动条 */
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

.overflow-y-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
