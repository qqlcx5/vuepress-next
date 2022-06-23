import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.b0857ca0.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> <code>chunk</code>\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4</h1><p>\u5C06\u6570\u7EC4\uFF08array\uFF09\u62C6\u5206\u6210\u591A\u4E2A\u5B50\u6570\u7EC4\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u5B50\u6570\u7EC4\u7EC4\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002</p><p><strong>\u53C2\u6570</strong></p><ul><li><p><code>array</code></p></li><li><p><code>count = 8</code>\u5B50\u6570\u7EC4\u9700\u8981\u7684\u957F\u5EA6</p></li></ul><p><strong>\u4F8B\u5B50</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span></span><span class="token punctuation">)</span>\n<span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n\n<span class="token function">chunk</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>\n<span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">chunk</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">8</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> pages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    array<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> page <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>index <span class="token operator">/</span> count<span class="token punctuation">)</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pages<span class="token punctuation">[</span>page<span class="token punctuation">]</span><span class="token punctuation">)</span> pages<span class="token punctuation">[</span>page<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n        pages<span class="token punctuation">[</span>page<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> pages\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
var chunk_______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html.vue"]]);
export { chunk_______html as default };
