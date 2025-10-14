<template>
  <div class="camp-detail-page">
    <!-- 头部导航 -->
    <header class="header">
      <div class="nav-bar">
        <button class="back-btn" @click="goBack">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="#333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <h1 class="title">免费体验活动详情</h1>
      </div>
      <div class="subtitle">青少年学习沟通如拉在家里户提供的人</div>
    </header>

    <!-- 主图和基础信息 -->
    <div class="main-content">
      <div class="hero-image">
        <img src="@images/img_41.jpg" alt="游泳活动" class="camp-image" />
      </div>

      <div class="camp-info">
        <h2 class="camp-title">蛙泳/自由泳(体验课)</h2>

        <!-- 价格信息 -->
        <div class="price-section">
          <div class="price-info">
            <span class="current-price">¥0</span>
            <span class="original-price">¥280</span>
          </div>
          <div class="status-info">
            <span class="quota">🗺️ 50个中奖名额</span>
          </div>
        </div>

        <!-- 统计信息 -->
        <div class="stats-info">
          <span class="stat-item">14671人已报名</span>
          <span class="stat-item">33936人感兴趣</span>
        </div>
      </div>

      <!-- 教练信息 -->
      <div class="coach-section">
        <h3 class="section-title">适用教练师</h3>
        <div class="coach-card">
          <img src="@images/img-13.jpg" alt="李老师" class="coach-avatar" />
          <div class="coach-info">
            <div class="flex items-center">
              <div class="coach-name">李老师</div>
              <div class="coach-tags ml-2">
                <span class="tag">体育课</span>
                <span class="tag">游泳教学</span>
              </div>
            </div>
            <div class="coach-rating">
              <div class="stars">
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star">★</span>
              </div>
            </div>
            <div class="coach-details">
              <span class="location"
                >📍1km 市区附近有限公司办事处安顺市1号001</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 智慧家长新答 -->
      <div class="smart-parent-section">
        <h3 class="section-title">智慧家长新答</h3>
        <div class="parent-cards">
          <div class="parent-card">
            <img src="@images/img-36.jpg" alt="体验课" class="parent-image" />
            <p class="parent-text">体验课</p>
          </div>
          <div class="parent-card">
            <img src="@images/img-36.jpg" alt="游泳课" class="parent-image" />
            <p class="parent-text">游泳课、200元</p>
          </div>
          <div class="parent-card">
            <img src="@images/img-36.jpg" alt="暑假" class="parent-image" />
            <p class="parent-text">100天了暑假</p>
          </div>
        </div>
      </div>

      <!-- 标签栏 -->
      <div class="tabs-section" :class="{ sticky: isSticky }">
        <div class="tabs">
          <button
            class="tab"
            :class="{ active: activeTab === '活动流程' }"
            @click="scrollToSection('活动流程')"
          >
            活动流程
          </button>
          <button
            class="tab"
            :class="{ active: activeTab === '活动内容' }"
            @click="scrollToSection('活动内容')"
          >
            活动内容
          </button>
          <button
            class="tab"
            :class="{ active: activeTab === '活动规则' }"
            @click="scrollToSection('活动规则')"
          >
            活动规则
          </button>
        </div>
      </div>

      <!-- 活动流程 -->
      <div class="tab-content mb-3">
        <img src="@images/hd-steps-bannaer.png" class="block" />
      </div>

      <!-- 活动内容 -->
      <div class="tab-content">
        <div class="content-section">
          <h3 class="content-title">活动内容</h3>

          <div class="activity-content">
            <div class="content-item">
              <div class="label">课程内容：</div>
              <div class="value">蛙泳/自由泳体验</div>
            </div>

            <div class="content-item">
              <div class="label">容纳人数：</div>
              <div class="value">1人</div>
            </div>

            <div class="content-item">
              <div class="label">容纳时间：</div>
              <div class="value">40分钟</div>
            </div>

            <div class="content-item">
              <div class="label">容纳体验次数：</div>
              <div class="value">仅限单次体验完毕</div>
            </div>

            <div class="content-item">
              <div class="label">适用年龄：</div>
              <div class="value">不限，小朋</div>
            </div>

            <div class="content-item">
              <div class="label">特色：</div>
              <div class="value">小班</div>
            </div>
          </div>

          <div class="notice">
            <div class="notice-icon">⚠️</div>
            <div class="notice-text">
              免费体验只限对年龄以上内容，除外的课程清询消客服小对者安排适表。
            </div>
          </div>
        </div>
      </div>

      <!-- 活动规则 -->
      <div class="tab-content">
        <div class="content-section">
          <h3 class="content-title">活动规则</h3>

          <!-- 体验时间 -->
          <div class="rule-section">
            <h4 class="rule-title">体验时间</h4>
            <div class="rule-content">
              <div class="rule-item">
                <span class="rule-label">体验日期：</span>
                <span class="rule-text">2025年10月11日 - 2025年11月30日</span>
              </div>
              <div class="rule-item">
                <span class="rule-label">使用时间：</span>
                <span class="rule-text">同网站正式上线后开始</span>
              </div>
            </div>
            <div class="rule-notice">
              <span class="notice-dot">•</span>
              <span class="notice-content"
                >阀在体验都体验过程中个，进入体验个为不在可获得其可以等各方进参。</span
              >
            </div>
          </div>

          <!-- 预约规则 -->
          <div class="rule-section">
            <h4 class="rule-title">预约规则</h4>
            <div class="rule-notice">
              <span class="notice-dot">•</span>
              <span class="notice-content"
                >请在约定第一次时间前联系客服，若未能在约定时间内进行课程的体验，课程此次体验服务体验。</span
              >
            </div>
            <div class="rule-notice">
              <span class="notice-dot">•</span>
              <span class="notice-content"
                >单次体验的课程网（中意合法联系关系大此重的，时未能保障的客服联系。</span
              >
            </div>
          </div>

          <!-- 限告须知 -->
          <div class="rule-section">
            <h4 class="rule-title">限告须知</h4>
            <div class="rule-notice">
              <span class="notice-dot">•</span>
              <span class="notice-content"
                >免费体验课程不位于回家服务地点。</span
              >
            </div>
            <div class="rule-notice">
              <span class="notice-dot">•</span>
              <span class="notice-content"
                >不得利用体验的机会进行其他商业活动，一经发现即可取消本次体验机会。</span
              >
            </div>
          </div>

          <!-- 评价须知 -->
          <div class="rule-section">
            <h4 class="rule-title">评价须知</h4>
            <div class="rule-description">
              1月一多在体验课程七天内一一评价，建记不能在一10字以内，超过天未能评价，系统内部不能定学家长7日内评价被视为默认好评，建记系统将在传统中的运转中自动反馈清选择“满意”。
            </div>
            <div class="rule-notice">
              <span class="notice-dot">•</span>
              <span class="notice-content"
                >请在公开评价时，深入情况在评价体验中检始理以协助教育机构完善高质量教学服务。教育机构将总数认真对待家长反馈的教学。无先机教育机构并相应提升。第二，如果对教学服务的精税的课程校长的评价不理起子。参与办教育机构将适定数画科领造简。教育机构将在教育学院中保证另一对美好的体验。第三，一在一一在一域内进行学习。</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部操作按钮 -->
    <div class="bottom-actions">
      <div class="countdown-section">
        <div class="countdown-label">距报名截至时间：</div>
        <div class="countdown-timer">{{ countdownText }}</div>
      </div>
      <button class="action-btn primary" @click="joinActivity">我要报名</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CampDetailPage",
  data() {
    return {
      activeTab: "活动流程",
      isSticky: false,
      stickyOffset: 0,
      countdownText: "",
      countdownTimer: null,
      endTime: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000 + 22 * 60 * 60 * 1000 + 1 * 60 * 1000 + 21 * 1000), // 10天22小时01分21秒后
    };
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener("scroll", this.handleScroll);
    // 计算标签栏应该在何时变为固定定位
    this.setStickyOffset();
    // 启动倒计时
    this.startCountdown();
  },
  beforeUnmount() {
    // 移除滚动事件监听，防止内存泄漏
    window.removeEventListener("scroll", this.handleScroll);
    // 清除倒计时定时器
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
    }
  },
  methods: {
    setStickyOffset() {
      // 获取标签栏元素
      const tabsElement = document.querySelector(".tabs-section");
      if (tabsElement) {
        // 计算标签栏相对于视口顶部的距离
        this.stickyOffset =
          tabsElement.getBoundingClientRect().top + window.pageYOffset;
      }
    },
    handleScroll() {
      // 获取当前滚动距离
      const scrollY = window.pageYOffset;
      // 判断是否超过阈值，如果超过则固定标签栏
      this.isSticky = scrollY > this.stickyOffset - 100; // 提前100px固定，提供更好的用户体验
    },
    goBack() {
      this.$router.go(-1);
    },
    addToFavorites() {
      // 收藏逻辑
      console.log("添加到收藏");
    },
    joinActivity() {
      // 报名逻辑
      console.log("立即报名");
    },
    scrollToSection(section) {
      // 更新当前激活的标签
      this.activeTab = section;

      // 获取对应内容区域的DOM元素
      const tabContents = document.querySelectorAll(".tab-content");
      let targetElement = null;

      // 根据标签内容查找对应的内容区域
      if (section === "活动流程") {
        targetElement = tabContents[0]; // 第一个tab-content是活动流程
      } else if (section === "活动内容") {
        targetElement = tabContents[1]; // 第二个tab-content是活动内容
      } else if (section === "活动规则") {
        targetElement = tabContents[2]; // 第三个tab-content是活动规则
      }

      // 实现平滑滚动到对应区域
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    },
    startCountdown() {
      // 立即更新一次
      this.updateCountdown();
      // 每秒更新
      this.countdownTimer = setInterval(() => {
        this.updateCountdown();
      }, 1000);
    },
    updateCountdown() {
      const now = new Date().getTime();
      const distance = this.endTime - now;

      if (distance < 0) {
        this.countdownText = "已结束";
        if (this.countdownTimer) {
          clearInterval(this.countdownTimer);
        }
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.countdownText = `${days}天${hours.toString().padStart(2, '0')}小时${minutes.toString().padStart(2, '0')}分${seconds.toString().padStart(2, '0')}秒`;
    },
  },
};
</script>

<style scoped>
.camp-detail-page {
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica,
    Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
}

/* 头部样式 */
.header {
  background-color: white;
  padding-top: env(safe-area-inset-top, 44px);
  border-bottom: 1px solid #f0f0f0;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px 8px 16px;
  height: 44px;
}

.back-btn {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
}

.title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
  flex: 1;
  text-align: center;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.view-count {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #666;
}

.more-btn {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
}

.subtitle {
  padding: 0 0 12px 16px;
  font-size: 13px;
  color: orange;
  text-align: center;
  background: white;
}

/* 主要内容区域 */
.main-content {
  padding: 0 0 50px;
  background: #f5f5f5;
}

.hero-image {
  overflow: hidden;
}

.camp-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* 活动信息 */
.camp-info {
  background: white;
  padding: 20px 20px 10px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.camp-title {
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0 0 16px 0;
  line-height: 1.4;
}

/* 价格区域 */
.price-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.price-info {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.current-price {
  font-size: 24px;
  font-weight: 700;
  color: #ff6b35;
}

.original-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.status-info {
  font-size: 12px;
  color: #666;
}

.quota {
  background: #fff3cd;
  padding: 4px 8px;
  border-radius: 4px;
  color: #856404;
}

/* 统计信息 */
.stats-info {
  display: flex;
  gap: 16px;
  padding: 8px 0;
  border-top: 1px solid #f5f5f5;
}

.stat-item {
  font-size: 12px;
  color: #666;
}

.camp-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.rating-icon {
  font-size: 14px;
}

.rating-text {
  font-size: 12px;
  color: #666;
}

/* 教练部分 */
.coach-section {
  background: white;
  padding: 20px;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 0 0 14px 0;
}

.coach-card {
  display: flex;
  gap: 12px;
}

.coach-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.coach-info {
  flex: 1;
}

.coach-name {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.coach-tags {
  display: flex;
  gap: 6px;
  margin-bottom: 6px;
}

.tag {
  background: #fff3e0;
  color: #f57c00;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 500;
}

.coach-rating {
  margin-bottom: 6px;
}

.stars {
  display: flex;
  gap: 1px;
}

.star {
  color: #e0e0e0;
  font-size: 12px;
}

.star.filled {
  color: #ffc107;
}

.coach-details {
  font-size: 10px;
  color: #999;
  line-height: 1.4;
  margin-top: 4px;
}

.location {
  display: flex;
  align-items: flex-start;
  gap: 4px;
}

/* 智慧家长新答 */
.smart-parent-section {
  background: white;
  padding: 20px;
  margin-bottom: 12px;
}

.parent-cards {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
}

.parent-card {
  flex-shrink: 0;
  text-align: center;
  min-width: 90px;
}

.parent-image {
  width: 90px;
  height: 70px;
  border-radius: 6px;
  object-fit: cover;
  margin-bottom: 6px;
}

.parent-text {
  font-size: 11px;
  color: #666;
  margin: 0;
  line-height: 1.3;
}

/* 标签栏样式 */
.tabs-section {
  background: white;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 10;
}

/* 固定在顶部的样式 */
.tabs-section.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding-top: env(safe-area-inset-top, 0);
}

.tabs {
  display: flex;
  border-bottom: 1px solid #f0f0f0;
}

.tab {
  flex: 1;
  background: none;
  border: none;
  padding: 14px;
  font-size: 15px;
  color: #666;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;
  font-weight: 500;
}

.tab.active {
  color: #333;
  font-weight: 600;
}

.tab.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 2px;
  background: #ff6b35;
  border-radius: 1px;
}

/* 标签内容样式 */
.tab-content {
  background: white;
}

.content-section {
  padding: 20px;
  margin-bottom: 12px;
}

.flow-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.content-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.detail-link {
  font-size: 14px;
  color: #007aff;
  cursor: pointer;
}

/* 流程步骤样式 */
.flow-steps {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.flow-step {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
}

.flow-step:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 15px;
  top: 32px;
  width: 2px;
  height: 16px;
  background: #e0e0e0;
}

.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f0f0f0;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

/* 活动内容样式 */
.activity-content {
  margin-bottom: 20px;
}

.content-item {
  display: flex;
  margin-bottom: 12px;
  align-items: flex-start;
}

.content-item .label {
  font-size: 14px;
  color: #666;
  min-width: 100px;
  flex-shrink: 0;
}

.content-item .value {
  font-size: 14px;
  color: #333;
  flex: 1;
}

.notice {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 12px;
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  border-radius: 4px;
  margin-top: 20px;
}

.notice-icon {
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}

.notice-text {
  font-size: 14px;
  color: #856404;
  line-height: 1.5;
}

/* 活动规则样式 */
.rule-section {
  margin-bottom: 24px;
}

.rule-section:last-child {
  margin-bottom: 0;
}

.rule-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
}

.rule-content {
  margin-bottom: 12px;
}

.rule-item {
  display: flex;
  margin-bottom: 8px;
  align-items: flex-start;
}

.rule-label {
  font-size: 14px;
  color: #666;
  min-width: 80px;
  flex-shrink: 0;
}

.rule-text {
  font-size: 14px;
  color: #333;
  flex: 1;
}

.rule-notice {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 8px;
}

.notice-dot {
  color: #666;
  font-size: 14px;
  flex-shrink: 0;
  margin-top: 2px;
}

.notice-content {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  flex: 1;
}

.rule-description {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
}

/* 底部操作按钮 */
.bottom-actions {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid #f0f0f0;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.06);
  padding-bottom: calc(10px + env(safe-area-inset-bottom));
}

.countdown-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.countdown-label {
  font-size: 13px;
  color: #666;
  font-weight: 400;
}

.countdown-timer {
  font-size: 14px;
  color: #333;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.action-btn {
  height: 48px;
  border: none;
  border-radius: 24px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  flex: 0 0 auto;
  min-width: 140px;
  padding: 0 32px;
}

.action-btn.primary {
  background: linear-gradient(90deg, #FFA726 0%, #FFB74D 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(255, 167, 38, 0.3);
}

.action-btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 167, 38, 0.4);
}
</style>
