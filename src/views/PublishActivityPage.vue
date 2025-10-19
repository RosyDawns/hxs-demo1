<template>
  <div class="page flex flex-col h-screen bg-white" id="page-publish-activity">
    <!-- 顶部导航 -->
    <header
      class="sticky top-0 z-50 bg-white px-4 py-3 flex items-center justify-between"
    >
      <button class="text-dark" @click="$router.back()">
        <i class="fa-solid fa-angle-left text-xl"></i>
      </button>
    </header>

    <!-- 主要内容区 -->
    <main class="flex-1 overflow-y-auto pt-5">
      <div class="px-3 border-b border-gray-100">
        <!-- 图片上传区域 -->
        <div class="flex items-start flex-wrap gap-3 mb-5">
          <!-- 已上传图片 -->
          <div
            v-for="(image, index) in uploadedImages"
            :key="index"
            class="relative w-[100px] h-[100px] rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0"
          >
            <img
              :src="image"
              alt="上传的图片"
              class="w-full h-full object-cover"
            />
            <button
              class="absolute top-1.5 right-1.5 w-5 h-5 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white"
              @click="removeImage(index)"
            >
              <i class="fa-solid fa-xmark text-xs"></i>
            </button>
          </div>

          <!-- 添加图片按钮 -->
          <button
            v-if="uploadedImages.length < 9"
            class="w-[100px] h-[100px] rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-300 flex-shrink-0"
            @click="handleAddImage"
          >
            <i class="fa-solid fa-plus text-4xl font-light"></i>
          </button>
        </div>

        <!-- 标题输入 -->
        <div class="mb-5">
          <input
            v-model="title"
            type="text"
            placeholder="添加标题"
            class="w-full text-[15px] text-gray-800 border-none outline-none p-0 placeholder-gray-300"
          />
        </div>

        <!-- 文本编辑（支持 @用户 / #话题） -->
        <div class="mb-2">
          <div
            class="textarea w-full min-h-[150px] text-[13px] text-gray-800 leading-6 outline-none"
            contenteditable="true"
            ref="editor"
            @input="onEditorInput"
            @keyup="onEditorKeyup"
            @keydown="onEditorKeydown"
            @click="onEditorKeyup"
            :placeholder="editorPlaceholder"
          ></div>
        </div>

        <!-- 已选择话题（解析自内容） -->
        <div v-if="parsedTopics.length" class="flex flex-wrap gap-1 mb-4">
          <span
            v-for="tag in parsedTopics"
            :key="tag"
            class="px-3.5 py-1.5 bg-orange-50 text-orange-600 rounded-full text-[11px]"
          >
            # {{ tag }}
          </span>
        </div>

        <!-- 推荐话题标签 -->
        <div class="flex flex-wrap gap-1 mb-3">
          <button
            v-for="tag in recommendTags"
            :key="tag"
            class="px-3.5 py-2 bg-gray-50 text-gray-500 rounded-full text-[11px] font-normal"
            @click="quickInsertTopic(tag)"
          >
            # {{ tag }}
          </button>
        </div>

        <!-- 功能按钮 -->
        <div class="flex items-center gap-2 mb-6 text-[13px]">
          <button
            class="flex items-center gap-1.5 text-gray-800 px-4 py-1 bg-gray-100 rounded-full"
            @click="triggerInsert('#')"
          >
            <span>#</span>
            <span class="font-normal">话题</span>
          </button>
          <button
            class="flex items-center gap-1.5 text-gray-800 px-4 py-1 bg-gray-100 rounded-full"
            @click="triggerInsert('@')"
          >
            <span>@</span>
            <span class="font-normal">用户</span>
          </button>
        </div>

        <!-- 建议下拉 -->
        <div v-if="suggest.visible" class="relative">
          <div
            class="absolute z-50 mt-1 w-full max-w-[320px] rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden"
          >
            <div class="max-h-56 overflow-auto">
              <button
                v-for="(item, idx) in suggest.filtered"
                :key="item.key + idx"
                class="w-full text-left px-3 py-2 hover:bg-gray-50 text-[14px]"
                @click="applySuggestion(item)"
              >
                <span v-if="suggest.type === 'user'">@ {{ item.label }}</span>
                <span v-else># {{ item.label }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="px-3">
        <!-- 位置选择 -->
        <button
          class="w-full flex items-center justify-between py-4"
          @click="handleSelectLocation"
        >
          <div class="flex items-center text-gray-800">
            <i
              class="fa-solid fa-location-dot text-[15px] mr-3 text-gray-500"
            ></i>
            <span class="text-[15px] font-normal">{{ location }}</span>
          </div>
          <i class="fa-solid fa-angle-right text-gray-300 text-xs"></i>
        </button>
        <!-- 可见性设置 -->
        <button
          class="w-full flex items-center justify-between py-4"
          @click="handleVisibility"
        >
          <div class="flex items-center text-gray-800">
            <i class="fa-solid fa-lock-open text-[15px] mr-3 text-gray-500"></i>
            <span class="text-[15px] font-normal">公开可见</span>
          </div>
          <i class="fa-solid fa-angle-right text-gray-300 text-xs"></i>
        </button>
      </div>
    </main>

    <!-- 底部发布按钮 -->
    <footer class="px-5 pb-6 pt-4 bg-white">
      <div class="flex items-end gap-5">
        <button class="flex flex-col items-center gap-1" @click="saveDraft">
          <div
            class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full"
          >
            <i class="fa-solid fa-message text-gray-500 text-xs"></i>
          </div>
          <span class="text-[10px] text-gray-500">存草稿</span>
        </button>
        <button
          class="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3.5 rounded-full text-[15px] font-medium shadow-sm"
          @click="publishActivity"
        >
          发布动态
        </button>
      </div>
    </footer>

    <!-- 话题选择弹窗 -->
    <transition name="modal-fade">
      <div
        v-if="topicModal.visible"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 px-5"
        @click.self="topicModal.visible = false"
      >
        <transition name="modal-scale">
          <div
            v-if="topicModal.visible"
            class="w-full max-w-md bg-white rounded-3xl shadow-2xl max-h-[75vh] flex flex-col"
          >
            <div class="px-6 py-5 border-b border-gray-100">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-[19px] font-semibold text-gray-900 mb-1">
                    选择话题
                  </h3>
                  <p class="text-[13px] text-gray-500">选择感兴趣的话题标签</p>
                </div>
                <button
                  @click="topicModal.visible = false"
                  class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <i class="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>
            </div>

            <div class="flex-1 overflow-y-auto px-6 py-4">
              <button
                v-for="topic in topics"
                :key="topic.key"
                class="w-full text-left px-4 py-3.5 rounded-xl hover:bg-orange-50 text-[15px] mb-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3 border border-transparent hover:border-orange-200"
                @click="selectFromModal(topic, 'topic')"
              >
                <span class="text-orange-500 text-lg">#</span>
                <span class="text-gray-800">{{ topic.label }}</span>
              </button>
            </div>
          </div>
        </transition>
      </div>
    </transition>

    <!-- 用户选择弹窗 -->
    <transition name="modal-fade">
      <div
        v-if="userModal.visible"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 px-5"
        @click.self="userModal.visible = false"
      >
        <transition name="modal-scale">
          <div
            v-if="userModal.visible"
            class="w-full max-w-md bg-white rounded-3xl shadow-2xl max-h-[75vh] flex flex-col"
          >
            <div class="px-6 py-5 border-b border-gray-100">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-[19px] font-semibold text-gray-900 mb-1">
                    选择用户
                  </h3>
                  <p class="text-[13px] text-gray-500">@提及你想分享的好友</p>
                </div>
                <button
                  @click="userModal.visible = false"
                  class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <i class="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>
            </div>

            <div class="flex-1 overflow-y-auto px-6 py-4">
              <button
                v-for="user in users"
                :key="user.key"
                class="w-full text-left px-4 py-3.5 rounded-xl hover:bg-blue-50 text-[15px] mb-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3 border border-transparent hover:border-blue-200"
                @click="selectFromModal(user, 'user')"
              >
                <div
                  class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm"
                >
                  {{ user.label.charAt(0) }}
                </div>
                <span class="text-gray-800">{{ user.label }}</span>
              </button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import demoImage from "@/assets/images/img-11.jpg";
export default {
  name: "PublishActivityPage",
  data() {
    return {
      uploadedImages: ["https://picsum.photos/id/201/400/400"],
      title: "",
      recommendTags: ["周末健身指南", "上海健身教练", "周末健身搭子"],
      // 编辑器
      editorPlaceholder: "这一刻的想法… 支持 @用户 / #话题",
      users: [
        { key: "u1", label: "小王" },
        { key: "u2", label: "张三" },
        { key: "u3", label: "教练Mike" },
        { key: "u4", label: "跑步搭子" },
      ],
      topics: [
        { key: "t1", label: "周末健身指南" },
        { key: "t2", label: "力量训练" },
        { key: "t3", label: "减脂打卡" },
        { key: "t4", label: "营养饮食" },
      ],
      suggest: {
        visible: false,
        type: null, // 'user' | 'topic'
        query: "",
        filtered: [],
      },
      topicModal: {
        visible: false,
      },
      userModal: {
        visible: false,
      },
      location: "合生新天地",
      visibility: "public",
    };
  },
  computed: {
    parsedText() {
      return this.getEditorPlainText();
    },
    parsedTopics() {
      const el = this.$refs.editor;
      if (!el) return [];
      const spans = el.querySelectorAll('span[data-type="topic"]');
      const set = new Set();
      spans.forEach((span) => {
        const label = span.dataset.label;
        if (label) set.add(label);
      });
      return Array.from(set);
    },
    parsedMentions() {
      const el = this.$refs.editor;
      if (!el) return [];
      const spans = el.querySelectorAll('span[data-type="user"]');
      const set = new Set();
      spans.forEach((span) => {
        const label = span.dataset.label;
        if (label) set.add(label);
      });
      return Array.from(set);
    },
  },
  methods: {
    // ========== 编辑器基础 ==========
    getEditorPlainText() {
      const el = this.$refs.editor;
      if (!el) return "";
      return el.innerText.replace(/\u200B/g, "").trim();
    },
    insertAtCaret(text) {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;
      const range = sel.getRangeAt(0);
      range.deleteContents();
      const node = document.createTextNode(text);
      range.insertNode(node);
      range.setStartAfter(node);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    },
    insertStyledTag(label, type) {
      // type: 'user' | 'topic'
      this.$refs.editor.focus();
      let sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) {
        const range = document.createRange();
        range.selectNodeContents(this.$refs.editor);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
      }
      const range = sel.getRangeAt(0);
      range.deleteContents();

      const span = document.createElement("span");
      span.contentEditable = "false";
      span.style.display = "inline-block";
      // span.style.padding = "2px";
      span.style.margin = "0 1px 0 0";
      // span.style.borderRadius = "4px";
      span.style.fontSize = "12px";

      if (type === "user") {
        span.style.color = "#3b82f6";
        // span.style.backgroundColor = '#dbeafe';
        span.textContent = "@" + label;
        span.dataset.type = "user";
      } else {
        span.style.color = "#f97316";
        // span.style.backgroundColor = '#ffedd5';
        span.textContent = "#" + label;
        span.dataset.type = "topic";
      }
      span.dataset.label = label;

      range.insertNode(span);

      const space = document.createTextNode(" ");
      range.setStartAfter(span);
      range.insertNode(space);
      range.setStartAfter(space);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    },
    triggerInsert(sym) {
      if (sym === "#") {
        this.topicModal.visible = true;
      } else if (sym === "@") {
        this.userModal.visible = true;
      }
    },

    // ========== 输入与建议 ==========
    onEditorInput() {
      this.updateSuggestByCaret();
    },
    onEditorKeyup(e) {
      // 输入后更新建议
      this.updateSuggestByCaret();
    },
    onEditorKeydown(e) {
      if (!this.suggest.visible) return;
      if (e.key === "Escape") {
        this.suggest.visible = false;
      }
    },
    updateSuggestByCaret() {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) {
        this.suggest.visible = false;
        return;
      }
      const range = sel.getRangeAt(0);
      const pre = range.startContainer;
      if (!pre || pre.nodeType !== Node.TEXT_NODE) {
        this.suggest.visible = false;
        return;
      }
      const text = pre.textContent || "";
      const pos = range.startOffset;
      const left = text.slice(0, pos);
      const m = left.match(/(^|\s)([@#])([^@#\s]*)$/);
      if (!m) {
        this.suggest.visible = false;
        return;
      }
      const trigger = m[2];
      const query = m[3] || "";
      this.suggest.type = trigger === "@" ? "user" : "topic";
      this.suggest.query = query;
      const source = this.suggest.type === "user" ? this.users : this.topics;
      const q = query.toLowerCase();
      this.suggest.filtered = source.filter((i) =>
        i.label.toLowerCase().includes(q)
      );
      this.suggest.visible = this.suggest.filtered.length > 0;
    },
    applySuggestion(item) {
      // 先删除已输入的 @ 或 # 及查询字符
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0) {
        const range = sel.getRangeAt(0);
        const pre = range.startContainer;
        if (pre && pre.nodeType === Node.TEXT_NODE) {
          const text = pre.textContent || "";
          const pos = range.startOffset;
          const left = text.slice(0, pos);
          const m = left.match(/(^|\s)([@#])([^@#\s]*)$/);
          if (m) {
            const start = left.lastIndexOf(m[2]);
            pre.textContent = text.slice(0, start) + text.slice(pos);
            range.setStart(pre, start);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }
        }
      }
      const type = this.suggest.type === "user" ? "user" : "topic";
      this.insertStyledTag(item.label, type);
      this.suggest.visible = false;
    },

    // ========== 快捷插入话题 ==========
    quickInsertTopic(tag) {
      this.$refs.editor.focus();
      this.insertStyledTag(tag, "topic");
      this.suggest.visible = false;
    },

    // ========== 弹窗选择 ==========
    selectFromModal(item, type) {
      this.insertStyledTag(item.label, type);
      this.topicModal.visible = false;
      this.userModal.visible = false;
      this.$refs.editor.focus();
    },

    // ========== 其他交互 ==========
    handleAddImage() {
      console.log("添加图片");
      // const demoImage = demoImage;
      this.uploadedImages.push(demoImage);
    },
    removeImage(index) {
      this.uploadedImages.splice(index, 1);
    },
    handleSelectLocation() {
      console.log("选择位置");
    },
    handleVisibility() {
      console.log("设置可见性");
    },
    saveDraft() {
      console.log("保存草稿");
      this.$router.back();
    },
    publishActivity() {
      if (this.uploadedImages.length === 0) {
        console.log("请至少上传一张图片");
        return;
      }
      const content = this.parsedText;
      const mentions = this.parsedMentions;
      const topics = this.parsedTopics;
      console.log("发布动态", {
        images: this.uploadedImages,
        title: this.title,
        content,
        mentions,
        topics,
        location: this.location,
        visibility: this.visibility,
      });
      this.$router.back();
    },
  },
};
</script>

<style scoped>
input::placeholder {
  color: #d1d5db;
}

/***** contenteditable 占位符 *****/
.textarea:empty:before {
  content: attr(placeholder);
  color: #d1d5db;
}

/***** 弹窗动画 *****/
/* 遮罩淡入淡出 */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* 弹窗缩放+淡入 */
.modal-scale-enter-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-scale-leave-active {
  transition: all 0.2s ease-in;
}
.modal-scale-enter-from {
  opacity: 0;
  transform: scale(0.85);
}
.modal-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
