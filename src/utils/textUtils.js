/**
 * 文本处理工具函数
 */

/**
 * 清理 Markdown 标记，用于 TTS
 * @param {string} text - 包含 Markdown 的文本
 * @returns {string} - 清理后的纯文本
 */
export function cleanMarkdownForTTS(text) {
  if (!text) return ''

  let cleaned = text

  // 移除代码块
  cleaned = cleaned.replace(/```[\s\S]*?```/g, '')
  cleaned = cleaned.replace(/`[^`]+`/g, '')

  // 移除链接，保留文本
  cleaned = cleaned.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

  // 移除图片
  cleaned = cleaned.replace(/!\[([^\]]*)\]\([^)]+\)/g, '')

  // 移除标题标记
  cleaned = cleaned.replace(/^#{1,6}\s+/gm, '')

  // 移除粗体和斜体标记
  cleaned = cleaned.replace(/\*\*([^*]+)\*\*/g, '$1')
  cleaned = cleaned.replace(/\*([^*]+)\*/g, '$1')
  cleaned = cleaned.replace(/__([^_]+)__/g, '$1')
  cleaned = cleaned.replace(/_([^_]+)_/g, '$1')

  // 移除删除线
  cleaned = cleaned.replace(/~~([^~]+)~~/g, '$1')

  // 移除列表标记
  cleaned = cleaned.replace(/^\s*[-*+]\s+/gm, '')
  cleaned = cleaned.replace(/^\s*\d+\.\s+/gm, '')

  // 移除引用标记
  cleaned = cleaned.replace(/^\s*>\s+/gm, '')

  // 移除水平线
  cleaned = cleaned.replace(/^[-*_]{3,}$/gm, '')

  // 移除 HTML 标签
  cleaned = cleaned.replace(/<[^>]+>/g, '')

  // 移除多余的空行
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n')

  // 移除特殊符号（保留基本标点）
  // 保留：。，、；：？！""''（）【】《》
  cleaned = cleaned.replace(/[#*_~`\[\]<>|\\]/g, '')

  return cleaned.trim()
}

/**
 * 将 Markdown 转换为 HTML（用于显示）
 * @param {string} markdown - Markdown 文本
 * @returns {string} - HTML 文本
 */
export function markdownToHtml(markdown) {
  if (!markdown) return ''

  let html = markdown

  // 代码块
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre><code class="language-${lang || 'text'}">${escapeHtml(code.trim())}</code></pre>`
  })

  // 行内代码
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>')

  // 标题
  html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>')

  // 粗体
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>')

  // 斜体
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  html = html.replace(/_([^_]+)_/g, '<em>$1</em>')

  // 删除线
  html = html.replace(/~~([^~]+)~~/g, '<del>$1</del>')

  // 链接
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')

  // 无序列表
  html = html.replace(/^\s*[-*+]\s+(.*)$/gm, '<li>$1</li>')
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')

  // 有序列表
  html = html.replace(/^\s*\d+\.\s+(.*)$/gm, '<li>$1</li>')

  // 引用
  html = html.replace(/^\s*>\s+(.*)$/gm, '<blockquote>$1</blockquote>')

  // 水平线
  html = html.replace(/^[-*_]{3,}$/gm, '<hr>')

  // 换行
  html = html.replace(/\n/g, '<br>')

  return html
}

/**
 * 转义 HTML 特殊字符
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, m => map[m])
}
