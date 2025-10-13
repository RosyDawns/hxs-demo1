<template>
  <div class="camp-detail-page">
    <!-- 头部导航 -->
    <header class="header">
      <div class="nav-bar">
        <button class="back-btn" @click="goBack">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <h1 class="title">免费体验活动详情</h1>
      </div>
      <div class="subtitle">
        青少年学习沟通如拉在家里户提供的人
      </div>
    </header>

    <!-- 主图和基础信息 -->
    <div class="main-content">
      <div class="hero-image">
        <img src="@images/img_41.jpg" alt="游泳活动" class="camp-image">
      </div>

      <div class="camp-info">
        <h2 class="camp-title">蛙泳/自由泳(体验课)</h2>
        <div class="camp-meta">
          <div class="rating">
            <span class="rating-icon">🏆</span>
            <span class="rating-text">0分</span>
          </div>
          <div class="participants">
            <span class="participant-count">0个上课名额</span>
          </div>
        </div>
        <div class="capacity-info">
          <span class="capacity">1对7人上课模式</span>
          <span class="group-size">成班30人满课堂</span>
        </div>
      </div>

      <!-- 教练信息 -->
      <div class="coach-section">
        <h3 class="section-title">适用教练师</h3>
        <div class="coach-card">
          <img src="@images/img-13.jpg" alt="李老师" class="coach-avatar">
          <div class="coach-info">
            <div class="coach-name">李老师</div>
            <div class="coach-tags">
              <span class="tag">体育课</span>
              <span class="tag">游泳教学</span>
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
              <span class="location">📍1km 市区附近有限公司办事处安顺市1号001</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 智慧家长新答 -->
      <div class="smart-parent-section">
        <h3 class="section-title">智慧家长新答</h3>
        <div class="parent-cards">
          <div class="parent-card">
            <img src="@images/img-36.jpg" alt="体验课" class="parent-image">
            <p class="parent-text">体验课</p>
          </div>
          <div class="parent-card">
            <img src="@images/img-36.jpg" alt="游泳课" class="parent-image">
            <p class="parent-text">游泳课、200元</p>
          </div>
          <div class="parent-card">
            <img src="@images/img-36.jpg" alt="暑假" class="parent-image">
            <p class="parent-text">100天了暑假</p>
          </div>
        </div>
      </div>

      <!-- 标签栏 -->
      <div class="tabs-section">
        <div class="tabs">
          <button 
            class="tab" 
            :class="{ active: activeTab === '活动流程' }"
            @click="activeTab = '活动流程'"
          >
            活动流程
          </button>
          <button 
            class="tab" 
            :class="{ active: activeTab === '活动内容' }"
            @click="activeTab = '活动内容'"
          >
            活动内容
          </button>
          <button 
            class="tab" 
            :class="{ active: activeTab === '活动规则' }"
            @click="activeTab = '活动规则'"
          >
            活动规则
          </button>
        </div>
      </div>

      <!-- 活动流程 -->
      <div class="tab-content" v-show="activeTab === '活动流程'">
        <div class="content-section">
          <div class="flow-header">
            <h3 class="content-title">活动流程</h3>
            <span class="detail-link">详情即时 ></span>
          </div>
          
          <div class="flow-steps">
            <div class="flow-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <div class="step-title">免费报名</div>
              </div>
            </div>
            
            <div class="flow-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <div class="step-title">中奖公布</div>
              </div>
            </div>
            
            <div class="flow-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <div class="step-title">确前预约</div>
              </div>
            </div>
            
            <div class="flow-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <div class="step-title">体验服务</div>
              </div>
            </div>
            
            <div class="flow-step">
              <div class="step-number">5</div>
              <div class="step-content">
                <div class="step-title">课程评价</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 活动内容 -->
      <div class="tab-content" v-show="activeTab === '活动内容'">
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
      <div class="tab-content" v-show="activeTab === '活动规则'">
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
              <span class="notice-content">阀在体验都体验过程中个，进入体验个为不在可获得其可以等各方进参。</span>
            </div>
          </div>

          <!-- 预约规则 -->
          <div class="rule-section">
            <h4 class="rule-title">预约规则</h4>
            <div class="rule-notice">
              <span class="notice-dot">•</span>
              <span class="notice-content">请在约定第一次时间前联系客服，若未能在约定时间内进行课程的体验，课程此次体验服务体验。</span>
            </div>
            <div class="rule-notice">
              <span class="notice-dot">•</span>
              <span class="notice-content">单次体验的课程网（中意合法联系关系大此重的，时未能保障的客服联系。</span>
            </div>
          </div>

          <!-- 限告须知 -->
          <div class="rule-section">
            <h4 class="rule-title">限告须知</h4>
            <div class="rule-notice">
              <span class="notice-dot">•</span>
              <span class="notice-content">免费体验课程不位于回家服务地点。</span>
            </div>
            <div class="rule-notice">
              <span class="notice-dot">•</span>
              <span class="notice-content">不得利用体验的机会进行其他商业活动，一经发现即可取消本次体验机会。</span>
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
              <span class="notice-content">请在公开评价时，深入情况在评价体验中检始理以协助教育机构完善高质量教学服务。教育机构将总数认真对待家长反馈的教学。无先机教育机构并相应提升。第二，如果对教学服务的精税的课程校长的评价不理起子。参与办教育机构将适定数画科领造简。教育机构将在教育学院中保证另一对美好的体验。第三，一在一一在一域内进行学习。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 底部操作按钮 -->
    <div class="bottom-actions">
      <button class="action-btn secondary" @click="addToFavorites">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="currentColor"/>
        </svg>
        收藏关注
      </button>
      <button class="action-btn primary" @click="joinActivity">
        立即报名
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CampDetailPage',
  data() {
    return {
      activeTab: '活动流程'
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    addToFavorites() {
      // 收藏逻辑
      console.log('添加到收藏')
    },
    joinActivity() {
      // 报名逻辑
      console.log('立即报名')
    }
  }
}
</script>

<style scoped>
.camp-detail-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 头部样式 */
.header {
  background-color: white;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
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
  padding: 0 16px;
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-top: 8px;
}

/* 主要内容区域 */
.main-content {
  padding: 16px 16px 80px 16px;
}

.hero-image {
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}

.camp-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* 活动信息 */
.camp-info {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
}

.camp-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
}

.camp-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.rating-icon {
  font-size: 16px;
}

.rating-text {
  font-size: 14px;
  color: #666;
}

.participants {
  font-size: 14px;
  color: #666;
}

.capacity-info {
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #666;
}

/* 教练部分 */
.coach-section {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
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
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.coach-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
}

.tag {
  background: #f0f0f0;
  color: #666;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
}

.coach-rating {
  margin-bottom: 4px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #ddd;
  font-size: 14px;
}

.star.filled {
  color: #ffa500;
}

.coach-details {
  font-size: 12px;
  color: #666;
  line-height: 1.4;
}

.location {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* 智慧家长新答 */
.smart-parent-section {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
}

.parent-cards {
  display: flex;
  gap: 12px;
  overflow-x: auto;
}

.parent-card {
  flex-shrink: 0;
  text-align: center;
}

.parent-image {
  width: 100px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 8px;
}

.parent-text {
  font-size: 12px;
  color: #666;
  margin: 0;
}

/* 标签栏样式 */
.tabs-section {
  background: white;
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #f0f0f0;
}

.tab {
  flex: 1;
  background: none;
  border: none;
  padding: 16px;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;
}

.tab.active {
  color: #333;
  font-weight: 600;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 3px;
  background: #007AFF;
  border-radius: 2px;
}

/* 标签内容样式 */
.tab-content {
  background: white;
  border-radius: 12px;
  margin-bottom: 16px;
}

.content-section {
  padding: 16px;
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
  color: #007AFF;
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
  content: '';
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
  padding: 12px 16px;
  display: flex;
  gap: 12px;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

.action-btn {
  flex: 1;
  height: 44px;
  border: none;
  border-radius: 22px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;
}

.action-btn.secondary {
  background: #f5f5f5;
  color: #666;
  flex: 0 0 120px;
}

.action-btn.secondary:hover {
  background: #e8e8e8;
}

.action-btn.primary {
  background: #007AFF;
  color: white;
}

.action-btn.primary:hover {
  background: #0056cc;
}

</style>
