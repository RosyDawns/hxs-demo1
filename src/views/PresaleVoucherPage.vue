<template>
  <div class="page flex flex-col h-screen bg-[#F5F5F5]">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3 flex items-center justify-between"
      style="border-bottom: 1px solid #e8e8e8"
    >
      <div class="flex items-center flex-1">
        <div class="mr-3" @click="goBack">
          <i class="fa-solid fa-chevron-left text-gray-700 text-base"></i>
        </div>
        <h1 class="text-[17px] font-semibold text-gray-900">服务创建</h1>
      </div>
    </header>

    <!-- Tab导航 -->
    <div
      class="fixed top-12 left-0 right-0 bg-white z-40 overflow-x-auto"
      style="border-bottom: 1px solid #e8e8e8"
    >
      <div class="flex justify-between px-3">
        <div
          v-for="tab in tabs"
          :key="tab.value"
          class="py-3 relative cursor-pointer transition-colors whitespace-nowrap"
          :class="
            activeTab === tab.value
              ? 'text-gray-900 font-medium'
              : 'text-gray-500'
          "
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
    <main
      class="flex-1 overflow-y-auto pt-24 pb-24 bg-[#F5F5F5]"
      ref="mainContent"
    >
      <div>
        <!-- 基础信息 -->
        <div
          id="section-basics"
          class="bg-white mt-3 mx-4 rounded-xl px-4 py-3"
        >
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">基础信息</h2>

          <!-- 服务品类 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[14px] text-gray-900">服务品类</span>
              <span class="text-[13px] text-gray-400">不可编辑</span>
            </div>
            <div class="text-[14px] text-gray-500">运动场馆 &gt; 健身房</div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 商品类型 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[14px] text-gray-900">商品类型</span>
              <span class="text-[13px] text-gray-400">不可编辑</span>
            </div>
            <div class="text-[14px] text-gray-500">预售券</div>
          </div>
        </div>

        <!-- 商家信息 -->
        <div
          id="section-merchant"
          class="bg-white mt-3 mx-4 rounded-xl px-4 py-3"
        >
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">商家信息</h2>

          <!-- 商家执照名称 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[14px] text-gray-900">商家执照名称</span>
              <span class="text-[13px] text-gray-400">不可编辑</span>
            </div>
            <div class="text-[14px] text-gray-500">上海大樟体育有限公司</div>
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
            <div class="text-[14px] text-gray-500">大樟健身环球港店</div>
          </div>
        </div>

        <!-- 商品信息 -->
        <div
          id="section-product"
          class="bg-white mt-3 mx-4 rounded-xl px-4 py-3"
        >
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">商品信息</h2>

          <!-- 商品名称 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">商品名称</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="text"
                value="20251230新品预售"
                class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634]"
              />
              <span class="text-[13px] text-gray-400">12/20</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 预售券使用时间 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">预售券使用时间</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center justify-between px-3 py-2.5 border border-gray-200 rounded-lg">
              <span class="text-[14px] text-gray-400">请选择</span>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 服务方式 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-2">服务方式</div>
            <div class="flex gap-6">
              <div class="flex items-center gap-2">
                <input type="radio" name="serviceMode" id="inStore" class="w-4 h-4 text-[#FF6634]" />
                <label for="inStore" class="text-[14px] text-gray-700">到店</label>
              </div>
              <div class="flex items-center gap-2">
                <input type="radio" name="serviceMode" id="homeService" class="w-4 h-4 text-[#FF6634]" />
                <label for="homeService" class="text-[14px] text-gray-700">上门</label>
              </div>
              <div class="flex items-center gap-2">
                <input type="radio" name="serviceMode" id="onlineService" class="w-4 h-4 text-[#FF6634]" />
                <label for="onlineService" class="text-[14px] text-gray-700">线上</label>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 售价 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">售价</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="flex items-center justify-between px-3 py-2.5 border border-gray-200 rounded-lg">
              <span class="text-[14px] text-[#FF6634]">请输入</span>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
            <div class="text-[13px] text-[#FF6634] mt-1">售价字段必填</div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 全民星推官佣金 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">全民星推官佣金</span>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="text"
                placeholder="输入比例"
                class="px-3 py-2.5 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634] w-40"
              />
              <span class="text-[14px] text-gray-700">%</span>
              <span class="text-[13px] text-gray-500">分销给佣金，鼓励利益倾斜</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 能量币可抵扣额度 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">能量币可抵扣额度</span>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="text"
                placeholder="输入金额"
                class="px-3 py-2.5 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634] w-40"
              />
              <span class="text-[14px] text-gray-700">元</span>
              <span class="text-[13px] text-gray-500">让更多用户欣赏到Col</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 头图 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">头图</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="text-[13px] text-gray-500 mb-2">
              头图建议选用高清优质原图提升客流 <span class="text-[#FF6634]">查看示例</span>
            </div>
            <div class="text-[13px] text-gray-500 mb-3">
              图片比例建议3:4
            </div>
            <div class="w-full aspect-[3/4] border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50 cursor-pointer">
              <i class="fa-solid fa-plus text-gray-400 text-xl mb-1"></i>
              <span class="text-[14px] text-gray-500">添加图片</span>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 辅助图 -->
          <div class="py-3.5">
            <div class="flex items-center mb-2">
              <span class="text-[14px] text-gray-900">辅助图</span>
              <span class="text-red-500 ml-0.5 text-[14px]">*</span>
            </div>
            <div class="text-[13px] text-gray-500 mb-3">
              辅助图上传1-4张,每张图片不得超过5M <span class="text-[#FF6634]">查看示例</span>
            </div>
            <div class="w-full border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 cursor-pointer">
              <div class="flex items-center justify-center">
                <i class="fa-solid fa-plus text-gray-400 text-xl mr-2"></i>
                <span class="text-[14px] text-gray-500">添加图片</span>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 项目补充说明 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-2">项目补充说明</div>
            <textarea
              rows="4"
              placeholder="如有备注信息请说明,不少于10字"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:border-[#FF6634] resize-none"
            ></textarea>
            <div class="text-right text-[13px] text-gray-400 mt-1">0/2000</div>
          </div>
        </div>

        <!-- 售卖信息 -->
        <div id="section-sales" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">售卖信息</h2>

          <!-- 库存数量 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">库存数量</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">0</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 商品售卖日期 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">商品售卖日期</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-gray-400">限时售卖</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
            <div class="text-[13px] text-gray-400 mt-2 leading-relaxed">
              <div>· 2025/11/03 23:18~2026/10/28 23:18</div>
              <div>· 到期后自动延期30天</div>
            </div>
          </div>
        </div>

        <!-- 交易规则 -->
        <div id="section-trade" class="bg-white mt-3 mx-4 rounded-xl px-4 py-3">
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">交易规则</h2>

          <!-- 顾客可消费日期 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">顾客可消费日期</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            </div>
            <div class="text-[13px] text-gray-400 mt-2">
              自购买次日起360天,购买当天默认可用
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
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
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
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
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
        <div
          id="section-consumption"
          class="bg-white mt-3 mx-4 rounded-xl px-4 py-3"
        >
          <h2 class="text-[15px] font-semibold text-gray-900 mb-2">消费规则</h2>

          <!-- 店内其他优惠 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900">店内其他优惠</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-[#FF6634]">编辑</span>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
            <div class="text-[13px] text-gray-400 mt-2">
              不与店内优惠同享
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 额外消费 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-3">额外消费</div>

            <!-- 保险费用 -->
            <div class="mb-3">
              <div class="text-[13px] text-gray-600 mb-2">保险费用</div>
              <div class="flex gap-3">
                <div class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="insurance"
                    id="user-pay"
                    class="w-4 h-4 text-[#FF6634]"
                  />
                  <label for="user-pay" class="text-[14px] text-gray-700"
                    >用户自费</label
                  >
                </div>
                <div class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="insurance"
                    id="merchant-include"
                    class="w-4 h-4 text-[#FF6634]"
                  />
                  <label
                    for="merchant-include"
                    class="text-[14px] text-gray-700"
                    >商家包含</label
                  >
                </div>
              </div>
            </div>

            <!-- 上门服务 -->
            <div>
              <div class="text-[13px] text-gray-600 mb-2">上门服务</div>
              <div class="flex gap-3">
                <div class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="homeService"
                    id="user-reimburse"
                    class="w-4 h-4 text-[#FF6634]"
                  />
                  <label for="user-reimburse" class="text-[14px] text-gray-700"
                    >用户报销</label
                  >
                </div>
                <div class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="homeService"
                    id="merchant-cover"
                    class="w-4 h-4 text-[#FF6634]"
                  />
                  <label for="merchant-cover" class="text-[14px] text-gray-700"
                    >商家包含</label
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 使用张数限制 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-3">
              <span class="text-[14px] text-gray-900">使用张数限制</span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked class="sr-only peer" />
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF6634]"
                ></div>
              </label>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 单次消费最多使用张数 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900"
                  >单次消费最多使用张数</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-[#FF6634]">请输入</span>
                <span class="text-[14px] text-gray-700">张</span>
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
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF6634]"
                ></div>
              </label>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 每张团购券最多可使用人数 -->
          <div class="py-3.5">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <span class="text-[14px] text-gray-900"
                  >每张团购券最多可使用人数</span>
                <span class="text-red-500 ml-0.5 text-[14px]">*</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[14px] text-[#FF6634]">请输入</span>
                <span class="text-[14px] text-gray-700">人</span>
              </div>
            </div>
          </div>

          <!-- 分隔线 -->
          <div class="border-t border-gray-100"></div>

          <!-- 其他说明信息 -->
          <div class="py-3.5">
            <div class="text-[14px] text-gray-900 mb-2">其他说明信息</div>
            <div
              class="text-[13px] text-gray-500 leading-relaxed mb-3 p-3 bg-gray-50 rounded-lg"
            >
              若需填写多项可直接换行,无需在内容前标注序号。不得存在"美团"、"点评"、"最终解释权"等字样xxx
            </div>
            <textarea
              rows="4"
              placeholder="请输入其他规则限制,规则需与其他商品信息前后一致,多条规则请用回车换行区分"
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
    <footer
      class="fixed bottom-0 left-0 right-0 bg-transparent px-4 py-3 flex gap-3"
      style="box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05)"
    >
      <button
        class="flex-1 py-3 rounded-full border border-[#FF6634] text-[#FF6634] text-[15px] font-medium bg-white"
      >
        预览
      </button>
      <button
        class="flex-1 py-3 rounded-full bg-[#FF6634] text-white text-[15px] font-medium"
      >
        提交审核
      </button>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const mainContent = ref(null);
const activeTab = ref("basics");

const tabs = [
  { value: "basics", label: "基础信息" },
  { value: "merchant", label: "商家信息" },
  { value: "product", label: "商品信息" },
  { value: "sales", label: "售卖信息" },
  { value: "trade", label: "交易规则" },
];

const goBack = () => {
  router.back();
};

const scrollToSection = (section) => {
  const element = document.getElementById(`section-${section}`);
  if (element && mainContent.value) {
    const offset = element.offsetTop - 120;
    mainContent.value.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
};

const handleScroll = () => {
  if (!mainContent.value) return;

  const scrollTop = mainContent.value.scrollTop;
  const sections = tabs
    .map((tab) => {
      const element = document.getElementById(`section-${tab.value}`);
      if (element) {
        return {
          value: tab.value,
          top: element.offsetTop - 130,
        };
      }
      return null;
    })
    .filter(Boolean);

  for (let i = sections.length - 1; i >= 0; i--) {
    if (scrollTop >= sections[i].top) {
      activeTab.value = sections[i].value;
      break;
    }
  }
};

onMounted(() => {
  if (mainContent.value) {
    mainContent.value.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (mainContent.value) {
    mainContent.value.removeEventListener("scroll", handleScroll);
  }
});
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
