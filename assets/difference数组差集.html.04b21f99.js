import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.b0857ca0.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="difference" tabindex="-1"><a class="header-anchor" href="#difference" aria-hidden="true">#</a> <code>difference</code></h1><p>\u521B\u5EFA\u4E00\u4E2A\u5177\u6709\u552F\u4E00<code>array</code>\u503C\u7684\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u503C\u4E0D\u5305\u542B\u5728\u5176\u4ED6\u7ED9\u5B9A\u7684\u6570\u7EC4\u4E2D\u3002</p><p>\u5047\u8BBE\u6709 A \u548C B \u4E24\u4E2A\u6570\u7EC4\uFF0C\u8FD4\u56DE A \u6570\u7EC4\u4E2D\u7684\u96C6\u5408\u4E0D\u5305\u542B B \u6570\u7EC4\u4E2D\u7684\u96C6\u5408\u3002</p><p>\u8FD4\u56DE</p><p><strong>\u53C2\u6570</strong></p><ul><li><code>array1</code> \u8981\u68C0\u67E5\u7684\u6570\u7EC4</li><li><code>array2</code>\u8981\u6392\u9664\u7684\u6570\u7EC4</li></ul><p><strong>\u4F8B\u5B50</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">difference</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment">// =&gt; [ 6, 7 ]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">difference</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>\n  <span class="token keyword">let</span> arr <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> arr\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 10);
const _hoisted_11 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_11);
}
var difference_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "difference\u6570\u7EC4\u5DEE\u96C6.html.vue"]]);
export { difference_____html as default };
