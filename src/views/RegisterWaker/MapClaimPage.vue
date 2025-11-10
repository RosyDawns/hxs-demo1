<template>
  <div class="w-full min-h-screen bg-[#fff] overflow-x-hidden">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center bg-white border-b border-gray-100">
      <button
        class="text-[#333] w-8 h-8 flex items-center justify-center nav-action"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left text-xs"></i>
      </button>
      <h1 class="text-lg font-bold text-[#333] ml-2">地图认领认证</h1>
    </header>

    <!-- 主要内容区域 -->
    <div class="pt-20 px-4 pb-20">
      <!-- 搜索框 -->
      <div class="w-full bg-white rounded-lg shadow-sm p-3 mb-4">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
            <i class="fa-solid fa-search text-gray-400 text-sm"></i>
          </div>
          <input 
            ref="searchInput"
            type="text" 
            v-model="searchKeyword" 
            class="flex-1 text-sm focus:outline-none" 
            placeholder="搜索店铺位置或地址"
            @focus="showSearchResults = false"
            @input="handleInputChange"
          />
          <button 
            class="bg-amber-500 text-white text-sm px-4 py-1.5 rounded-full" 
            @click="searchLocation"
          >
            搜索
          </button>
        </div>
      </div>
      
      <!-- 地图显示区域 -->
      <div id="mapContainer" class="w-full h-[300px] bg-gray-100 rounded-lg mb-6 relative overflow-hidden">
        <div class="map-loading absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <i class="fa-solid fa-map text-gray-400 text-3xl mb-2"></i>
            <p class="text-xs text-gray-500">地图加载中...</p>
          </div>
        </div>
        <!-- 当前位置显示 -->
        <div class="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3">
          <div class="flex items-center">
            <div class="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-2">
              <i class="fa-solid fa-location-dot text-amber-500 text-xs"></i>
            </div>
            <div class="text-xs text-gray-600 max-w-[180px] truncate">{{ currentLocation }}</div>
          </div>
        </div>
      </div>
      
      <!-- 搜索结果弹框 -->
      <div v-if="showSearchResults" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
        <div class="bg-white rounded-t-2xl w-full max-h-[70vh] overflow-y-auto">
          <div class="p-4 border-b border-gray-100">
            <h3 class="text-base font-medium">附近商店 ({{ nearbyStores.length }})</h3>
          </div>
          <div v-if="nearbyStores.length > 0" class="divide-y divide-gray-100">
            <div 
              v-for="store in nearbyStores" 
              :key="store.id"
              class="p-4 hover:bg-gray-50"
              @click="selectStore(store)"
            >
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-md bg-amber-50 flex items-center justify-center mr-3 flex-shrink-0">
                  <i class="fa-solid fa-store text-amber-500"></i>
                </div>
                <div class="flex-1">
                  <h4 class="text-sm font-medium text-gray-800">{{ store.name }}</h4>
                  <p class="text-xs text-gray-500 mt-1 line-clamp-2">{{ store.address }}</p>
                </div>
                <i class="fa-solid fa-chevron-right text-gray-300 ml-2"></i>
              </div>
            </div>
          </div>
          <div v-else class="p-6 text-center">
            <i class="fa-solid fa-store-slash text-gray-300 text-4xl mb-2"></i>
            <p class="text-xs text-gray-500">未找到附近的商店</p>
          </div>
          <div class="p-4 bg-gray-50">
            <button 
              class="w-full py-3 bg-amber-500 text-white rounded-lg text-sm font-medium"
              @click="showSearchResults = false"
            >
              取消
            </button>
          </div>
        </div>
      </div>

      <!-- 店铺信息表单 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div class="px-5 py-4">
          <h2 class="text-base font-medium text-[#333] mb-4">店铺基本信息</h2>
          
          <div class="space-y-4">
            <div>
              <label class="block text-xs text-gray-500 mb-1">店铺名称 <span class="text-red-500">*</span></label>
              <input 
                type="text" 
                v-model="storeInfo.name" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                :class="{ 'border-red-300': errors.name }"
                placeholder="请输入店铺名称"
              />
              <p v-if="errors.name" class="text-xs text-red-500 mt-1">{{ errors.name }}</p>
            </div>
            
            <div>
              <label class="block text-xs text-gray-500 mb-1">店铺地址 <span class="text-red-500">*</span></label>
              <input 
                type="text" 
                v-model="storeInfo.address" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                :class="{ 'border-red-300': errors.address }"
                placeholder="请输入详细地址"
              />
              <p v-if="errors.address" class="text-xs text-red-500 mt-1">{{ errors.address }}</p>
            </div>
            
            <div>
              <label class="block text-xs text-gray-500 mb-1">店铺类型 <span class="text-red-500">*</span></label>
              <select 
                v-model="storeInfo.type" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 appearance-none bg-white"
                :class="{ 'border-red-300': errors.type }"
              >
                <option value="">请选择店铺类型</option>
                <option value="gym">健身房</option>
                <option value="studio">工作室</option>
                <option value="club">俱乐部</option>
                <option value="center">运动中心</option>
                <option value="other">其他</option>
              </select>
              <p v-if="errors.type" class="text-xs text-red-500 mt-1">{{ errors.type }}</p>
            </div>
            
            <div>
              <label class="block text-xs text-gray-500 mb-1">联系电话 <span class="text-red-500">*</span></label>
              <input 
                type="tel" 
                v-model="storeInfo.phone" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                :class="{ 'border-red-300': errors.phone }"
                placeholder="请输入联系电话"
              />
              <p v-if="errors.phone" class="text-xs text-red-500 mt-1">{{ errors.phone }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 营业执照上传 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div class="px-5 py-4">
          <h2 class="text-base font-medium text-[#333] mb-3">营业执照上传 <span class="text-red-500">*</span></h2>
          <p class="text-xs text-gray-500 mb-4">请上传清晰的营业执照照片，确保信息完整可见</p>
          
          <div class="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
            <input 
              type="file" 
              ref="licenseInput" 
              accept="image/*" 
              class="hidden"
              @change="handleLicenseUpload"
            />
            <button 
              class="w-full py-3 border border-amber-500 text-amber-500 rounded-lg text-sm font-medium flex flex-col items-center justify-center"
              @click="$refs.licenseInput.click()"
            >
              <i class="fa-solid fa-cloud-arrow-up mb-2"></i>
              点击上传营业执照照片
            </button>
            <p class="text-xs text-gray-500 mt-3">支持 JPG、PNG 格式，大小不超过 5MB</p>
          </div>
          
          <!-- 预览区域 -->
          <div v-if="licensePreview" class="mt-4">
            <img :src="licensePreview" alt="营业执照预览" class="w-full h-40 object-contain border border-gray-100 rounded-lg">
            <button class="text-xs text-red-500 mt-2" @click="removeLicense">移除</button>
          </div>
          <p v-if="errors.license" class="text-xs text-red-500 mt-2">{{ errors.license }}</p>
        </div>
      </div>

      <!-- 隐私协议 -->
      <div class="flex items-start space-x-2 py-4">
        <div class="flex items-center h-5">
          <input 
            id="terms" 
            v-model="agreeTerms" 
            type="checkbox" 
            class="w-4 h-4 text-amber-500 focus:ring-amber-300 border-gray-300 rounded"
          />
        </div>
        <div class="text-xs text-gray-600">
          <label for="terms" class="font-medium">我已阅读并同意</label>
          <a href="/user-agreement" class="text-amber-500">《地图认领服务协议》</a>和
          <a href="/privacy-policy" class="text-amber-500">《隐私政策》</a>，承诺所提供的信息真实有效，如有虚假，愿承担相应法律责任。
        </div>
      </div>
      <p v-if="errors.agreeTerms" class="text-xs text-red-500 mb-4">{{ errors.agreeTerms }}</p>
      
      <!-- 提交按钮 -->
      <button 
        class="w-full py-3 bg-amber-500 text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:bg-amber-600 mb-4"
        :disabled="!agreeTerms"
        @click="submitMapClaim"
      >
        提交认证申请
      </button>
      <p class="text-xs text-center text-gray-500">提交后，平台将在 1-3 个工作日内完成审核</p>
    </div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';

export default {
  name: "MapClaimPage",
  data() {
    return {
      searchKeyword: '',
      licensePreview: null,
      storeInfo: {
        name: '',
        address: '',
        type: '',
        phone: ''
      },
      // 隐私协议同意状态
      agreeTerms: false,
      // 错误提示
      errors: {},
      map: null, // 保存地图实例
      marker: null, // 保存地图标记
      currentLocation: '正在获取您的位置...', // 当前位置
      nearbyStores: [], // 附近商店列表
      showSearchResults: false, // 是否显示搜索结果弹框
      AMap: null // 保存AMap对象
    }
  },
  methods: {
    // 初始化输入提示
    initAutocomplete() {
      if (!this.AMap || !this.$refs.searchInput) return;
      
      const autoComplete = new this.AMap.Autocomplete({
        input: this.$refs.searchInput, // 绑定到DOM元素
        datatype: 'all' // 返回所有类型的POI点
      });
      
      // 监听选择事件
      autoComplete.on('select', (e) => {
        console.log('选择了输入提示:', e.poi);
        this.searchKeyword = e.poi.name;
        // 自动搜索选中的位置
        this.searchLocation();
      });
    },
    
    // 处理输入变化
    handleInputChange() {
      // 输入变化时的处理逻辑
      console.log('输入变化:', this.searchKeyword);
    },
    
    // 处理营业执照上传
    handleLicenseUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // 简单的文件验证
        if (file.size > 5 * 1024 * 1024) {
          alert('文件大小不能超过 5MB');
          return;
        }
        
        // 创建预览
        const reader = new FileReader();
        reader.onload = (e) => {
          this.licensePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    // 移除营业执照
    removeLicense() {
      this.licensePreview = null;
      this.$refs.licenseInput.value = '';
    },
    // 验证表单
    validateForm() {
      let isValid = true;
      const errors = {};
      
      // 清空之前的错误
      this.errors = {};
      
      // 店铺信息验证
      if (!this.storeInfo.name) {
        errors.name = '请输入店铺名称';
        isValid = false;
      }
      
      if (!this.storeInfo.address) {
        errors.address = '请输入店铺地址';
        isValid = false;
      }
      
      if (!this.storeInfo.type) {
        errors.type = '请选择店铺类型';
        isValid = false;
      }
      
      if (!this.storeInfo.phone) {
        errors.phone = '请输入联系电话';
        isValid = false;
      } else if (!/^1[3-9]\d{9}$/.test(this.storeInfo.phone)) {
        errors.phone = '请输入正确的手机号';
        isValid = false;
      }
      
      // 营业执照验证
      if (!this.licensePreview) {
        errors.license = '请上传营业执照照片';
        isValid = false;
      }
      
      // 隐私协议验证
      if (!this.agreeTerms) {
        errors.agreeTerms = '请阅读并同意服务协议和隐私政策';
        isValid = false;
      }
      
      this.errors = errors;
      return isValid;
    },
    
    // 提交地图认领认证
    submitMapClaim() {
      // 表单验证
      if (!this.validateForm()) {
        // 显示错误提示
        if (Object.keys(this.errors).length > 0) {
          const firstError = Object.values(this.errors)[0];
          alert(firstError);
        }
        return;
      }
      
      // 这里应该是提交到后端的逻辑
      console.log('提交地图认领认证信息:', {
        ...this.storeInfo,
        hasLicense: !!this.licensePreview,
        agreeTerms: this.agreeTerms
      });
      
      // 跳转到提交成功页面
      this.$router.push('/register-waker/submit-success');
    },
    // 初始化高德地图
    async initMap() {
      console.log('开始初始化高德地图');
      
      try {
        // 使用@amap/amap-jsapi-loader加载地图
        this.AMap = await AMapLoader.load({
          key: '2fcb35f32792fae4ae606e91cab5c879',
          version: '1.4.15',
          plugins: ['AMap.Geocoder', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.MouseTool', 'AMap.CitySearch'],
          AMapUI: {
            version: '1.1',
            plugins: []
          },
          Loca: {
            version: '1.3.2'
          }
        });
        
        console.log('高德地图API加载成功');
        this.initAMapInstance();
      } catch (error) {
        console.error('高德地图API加载失败:', error);
        alert('地图加载失败，请稍后重试');
        // 移除加载中提示
        const loadingElement = document.querySelector('.map-loading');
        if (loadingElement) {
          loadingElement.style.display = 'none';
        }
      }
    },
    
    // 初始化地图实例
    initAMapInstance() {
      if (!this.AMap) {
        console.error('AMap 未定义');
        return;
      }
      
      try {
        // 创建地图实例
        this.map = new this.AMap.Map('mapContainer', {
          zoom: 15,
          center: [116.404, 39.915], // 默认北京坐标
          resizeEnable: true
        });
        
        // 添加地图控件 - 只添加必要的定位控件
        // this.map.addControl(new this.AMap.Scale()); // 移除可能有兼容性问题的控件
        
        // 添加定位插件 - 优化配置以确保精确定位到用户当前位置
        const geolocation = new this.AMap.Geolocation({
          enableHighAccuracy: true, // 提高精度要求，确保定位到当前精确位置
          timeout: 10000, // 设置合理的超时时间
          maximumAge: 0, // 不使用缓存定位结果，确保每次都是最新位置
          convert: true, // 自动偏移坐标
          showButton: true, // 显示定位按钮
          buttonPosition: 'LB',
          buttonOffset: new this.AMap.Pixel(10, 20),
          zoomToAccuracy: true,
          panToLocation: true,
          showCircle: true // 显示定位精度圈
        });
        
        this.map.addControl(geolocation);
        
        // 执行定位
        geolocation.getCurrentPosition((status, result) => {
          if (status === 'complete' && result.position) {
            const lnglat = result.position;
            this.map.setCenter(lnglat);
            this.map.setZoom(17); // 放大到更精确的级别
            this.createMarker(lnglat);
            this.geocodeAddress(lnglat, true); // 传入true表示是定位结果
            console.log('定位成功:', result);
            // 显示定位成功提示
            this.currentLocation = '当前位置获取成功';
          } else {
            console.error('定位失败:', result);
            // 显示定位失败提示
            this.currentLocation = '正在尝试获取位置...';
            // 使用IP定位作为降级方案
            this.useIPLocation();
          }
          
          // 移除加载中提示
          const loadingElement = document.querySelector('.map-loading');
          if (loadingElement) {
            loadingElement.style.display = 'none';
          }
        });
        
        // 监听定位失败事件
        geolocation.on('error', (e) => {
          console.error('定位出错:', e);
          this.currentLocation = '定位失败，正在尝试其他方式...';
          // 使用IP定位作为降级方案
          this.useIPLocation();
        });
        
        // 监听定位按钮点击事件，重新定位
        geolocation.on('complete', (result) => {
          if (result && result.position) {
            const lnglat = result.position;
            this.map.setCenter(lnglat);
            this.map.setZoom(17);
            this.createMarker(lnglat);
            this.geocodeAddress(lnglat, true);
            console.log('定位按钮点击成功定位:', result);
          }
        });
        
        // 点击地图显示附近商店
        this.map.on('click', (e) => {
          this.createMarker(e.lnglat);
          this.searchNearbyStores(e.lnglat);
        });
        
        console.log('地图初始化成功');
      } catch (error) {
        console.error('地图初始化失败:', error);
        // 移除加载中提示
        const loadingElement = document.querySelector('.map-loading');
        if (loadingElement) {
          loadingElement.style.display = 'none';
        }
      }
    },
    
    // 创建或更新地图标记
    createMarker(lnglat) {
      if (this.marker) {
        this.marker.setPosition(lnglat);
      } else {
        this.marker = new this.AMap.Marker({
          position: lnglat,
          map: this.map,
          draggable: true,
          icon: new this.AMap.Icon({
            size: new this.AMap.Size(36, 36),
            image: '//webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            imageSize: new this.AMap.Size(36, 36),
            imageOffset: new this.AMap.Pixel(-18, -36)
          })
        });
        
        // 标记拖拽结束后搜索附近商店
        this.marker.on('dragend', (e) => {
          this.searchNearbyStores(e.lnglat);
        });
      }
    },
    
    // 根据坐标获取地址信息
    geocodeAddress(lnglat, isLocation = false) {
      const geocoder = new this.AMap.Geocoder({
        radius: 1000,
        extensions: "all"
      });
      
      geocoder.getAddress(lnglat, (status, result) => {
        if (status === 'complete' && result.regeocode) {
          const address = result.regeocode.formattedAddress;
          if (isLocation) {
            this.currentLocation = address;
          } else {
            this.storeInfo.address = address;
          }
          console.log('获取地址成功:', address);
        } else {
          console.error('根据坐标获取地址失败');
        }
      });
    },
    
    // 搜索位置
    searchLocation() {
      if (!this.searchKeyword) {
        alert('请输入搜索关键词');
        return;
      }
      
      console.log('搜索关键词:', this.searchKeyword);
      
      // 注意：Autocomplete需要在用户输入时实时提供提示，这里直接使用PlaceSearch进行搜索
      // 对于实时输入提示功能，可以在input元素上添加input事件监听来实现
      
      const placeSearch = new this.AMap.PlaceSearch({
        map: null, // 不显示默认结果面板
        pageSize: 20,
        pageIndex: 1,
        autoFitView: true
      });
      
      // 使用高德地图的搜索API进行搜索
      placeSearch.search(this.searchKeyword, (status, result) => {
        console.log('搜索结果:', status, result);
        
        if (status === 'complete' && result.poiList && result.poiList.pois.length > 0) {
          // 转换为我们需要的格式
          this.nearbyStores = result.poiList.pois.map((poi, index) => ({
            id: index + 1,
            name: poi.name,
            address: poi.address || poi.name || '暂无详细地址',
            location: poi.location,
            type: poi.type || '其他'
          }));
          
          console.log('转换后的搜索结果:', this.nearbyStores);
          // 显示搜索结果弹框
          this.showSearchResults = true;
          
          // 移动地图到第一个结果位置
          const firstLocation = result.poiList.pois[0].location;
          this.map.setCenter(firstLocation);
          this.createMarker(firstLocation);
        } else {
          console.log('未找到相关位置');
          this.nearbyStores = [];
          this.showSearchResults = true;
        }
      });
    },
    
    // 使用IP定位作为降级方案
    useIPLocation() {
      console.log('使用IP定位作为降级方案');
      // 尝试获取城市信息
      const citySearch = new this.AMap.CitySearch();
      citySearch.getLocalCity((status, result) => {
        if (status === 'complete' && result && result.center) {
          // 使用城市中心作为默认位置
          const lnglat = result.center;
          this.map.setCenter(lnglat);
          this.map.setZoom(13); // 城市级别的合适缩放
          this.createMarker(lnglat);
          this.geocodeAddress(lnglat, true);
          this.currentLocation = `${result.city} - 城市中心位置`;
          console.log('IP定位成功，使用城市中心:', result.city, lnglat);
          // 提示用户当前使用的是城市定位
          setTimeout(() => {
            if (this.currentLocation.includes('城市中心位置')) {
              this.currentLocation += ' (点击定位按钮获取精确位置)';
            }
          }, 1000);
        } else {
          // 如果城市定位也失败，尝试浏览器定位API作为备选
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                // 浏览器定位成功
                const lnglat = [position.coords.longitude, position.coords.latitude];
                this.map.setCenter(lnglat);
                this.map.setZoom(17);
                this.createMarker(lnglat);
                this.geocodeAddress(lnglat, true);
                this.currentLocation = '浏览器定位成功';
                console.log('浏览器定位成功:', lnglat);
              },
              (error) => {
                // 所有定位方式都失败，使用全国中心位置（武汉）
                console.error('浏览器定位也失败:', error);
                const defaultLnglat = [114.30556, 30.592778];
                this.map.setCenter(defaultLnglat);
                this.map.setZoom(4); // 全国级别的缩放
                this.createMarker(defaultLnglat);
                this.geocodeAddress(defaultLnglat, true);
                this.currentLocation = '无法获取位置，请手动选择或搜索';
                console.log('所有定位都失败，使用默认位置');
              },
              {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
              }
            );
          } else {
            // 浏览器不支持定位
            const defaultLnglat = [114.30556, 30.592778];
            this.map.setCenter(defaultLnglat);
            this.map.setZoom(4);
            this.createMarker(defaultLnglat);
            this.geocodeAddress(defaultLnglat, true);
            this.currentLocation = '浏览器不支持定位，请手动选择或搜索';
          }
        }
      });
    },
    
    // 搜索附近商店和建筑
    searchNearbyStores(lnglat) {
      console.log('搜索附近位置:', lnglat);
      
      // 先获取地址信息
      this.geocodeAddress(lnglat);
      
      const placeSearch = new this.AMap.PlaceSearch({
        map: null,
        pageSize: 20,
        pageIndex: 1,
        radius: 1500, // 搜索半径调整为1500米
        type: '餐饮服务|购物服务|体育休闲服务|商务住宅|科教文化服务|公司企业|风景名胜|医疗保健服务' // 扩大搜索类型
      });
      
      // 搜索附近的所有POI点，使用空关键词获取更全面的结果
      placeSearch.searchNearBy('', lnglat, 1500, (status, result) => {
        console.log('附近搜索结果:', status, result);
        
        if (status === 'complete' && result.poiList && result.poiList.pois.length > 0) {
          // 转换为我们需要的格式
          this.nearbyStores = result.poiList.pois.map((poi, index) => ({
            id: index + 1,
            name: poi.name,
            address: poi.address || poi.name || '暂无详细地址',
            location: poi.location,
            type: poi.type || '其他'
          }));
          
          console.log('转换后的商店列表:', this.nearbyStores);
          // 显示搜索结果弹框
          this.showSearchResults = true;
        } else {
          console.log('未找到附近的地点');
          this.nearbyStores = [];
          this.showSearchResults = true;
        }
      });
    },
    
    // 选择商店
    selectStore(store) {
      // 更新表单信息
      this.storeInfo.name = store.name;
      this.storeInfo.address = store.address;
      
      // 移动标记到选择的位置
      this.createMarker(store.location);
      this.map.setCenter(store.location);
      
      // 关闭弹框
      this.showSearchResults = false;
      
      console.log('选择了商店:', store);
    }
  },
  mounted() {
      this.initMap();
    },
    // 监听地图初始化成功后再初始化Autocomplete
    watch: {
      AMap: {
        handler(newVal) {
          if (newVal) {
            // 地图API加载完成后初始化Autocomplete
            setTimeout(() => {
              this.initAutocomplete();
            }, 500);
          }
        },
        immediate: true
      }
    }
};
</script>

<style scoped>
/* 自定义样式 */
      .map-loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.9);
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 14px;
        z-index: 100;
      }
      
      .location-status {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.95);
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        color: #666;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        z-index: 99;
        max-width: 80%;
        text-align: center;
      }
      
      .map {
        width: 100%;
        height: 100%;
      }
</style>