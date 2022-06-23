import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.b0857ca0.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="treedata\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#treedata\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E" aria-hidden="true">#</a> <code>treeData</code>\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E</h1><p>\u8BE5\u51FD\u6570\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C \u6BCF\u9879<code>id</code>\u5BF9\u5E94\u5176\u7236\u7EA7\u6570\u636E<code>parent_id</code>\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6811\u7ED3\u6784\u6570\u7EC4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">treeData</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> id<span class="token punctuation">,</span> parent_id<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p><ul><li><code>array</code> \u8981\u751F\u6210\u6811\u7ED3\u6784\u7684\u6570\u7EC4</li><li><code>id</code> \u81EA\u5B9A\u4E49\u5C5E\u6027\u540D</li><li><code>parent_id</code> \u7236\u7EA7\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D</li></ul><p><strong>\u4F8B\u5B50</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> comments <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">parent_id</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">parent_id</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">parent_id</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">parent_id</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">parent_id</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n\n<span class="token function">treeData</span><span class="token punctuation">(</span>comments<span class="token punctuation">)</span>\n\n<span class="token comment">// =&gt; [ { id: 1, parent_id: null, children: [ [Object], [Object] ] } ]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token punctuation">,</span> id <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> link <span class="token operator">=</span> <span class="token string">&#39;parent_id&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">[</span>link<span class="token punctuation">]</span> <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>item<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token function">treeData</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> item<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 9);
const _hoisted_10 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_10);
}
var treeData________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html.vue"]]);
export { treeData________html as default };
