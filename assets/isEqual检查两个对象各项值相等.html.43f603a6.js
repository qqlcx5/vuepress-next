import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.b0857ca0.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="isequal\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49" tabindex="-1"><a class="header-anchor" href="#isequal\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49" aria-hidden="true">#</a> <code>isEqual</code>\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49</h1><p><strong>\u53C2\u6570</strong></p><ul><li><code>object</code>\u5F85\u68C0\u7D22\u7684\u5BF9\u8C61\u6216\u6570\u7EC4</li><li><code>object</code>\u5F85\u68C0\u7D22\u7684\u5BF9\u8C61\u6216\u6570\u7EC4</li></ul><p><strong>\u4F8B\u5B50</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// =&gt; true</span>\n<span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// =&gt; false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">isEqual</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj1<span class="token punctuation">,</span> obj2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> o1 <span class="token operator">=</span> obj1 <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>\n  <span class="token keyword">let</span> o2 <span class="token operator">=</span> obj2 <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>\n  <span class="token comment">// \u5224\u65AD\u662F\u4E0D\u662F\u5BF9\u8C61</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>o1 <span class="token operator">||</span> <span class="token operator">!</span>o2<span class="token punctuation">)</span> <span class="token keyword">return</span> obj1 <span class="token operator">===</span> obj2\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">!==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>\n  <span class="token keyword">let</span> isDif <span class="token operator">=</span> <span class="token boolean">true</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> o <span class="token keyword">in</span> obj1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> t1 <span class="token operator">=</span> obj1<span class="token punctuation">[</span>o<span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>\n    <span class="token keyword">let</span> t2 <span class="token operator">=</span> obj2<span class="token punctuation">[</span>o<span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>t1 <span class="token operator">&amp;&amp;</span> t2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      isDif <span class="token operator">=</span> <span class="token function">isEqual</span><span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>o<span class="token punctuation">]</span><span class="token punctuation">,</span> obj2<span class="token punctuation">[</span>o<span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>o<span class="token punctuation">]</span> <span class="token operator">!==</span> obj2<span class="token punctuation">[</span>o<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      isDif <span class="token operator">=</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isDif<span class="token punctuation">)</span> <span class="token keyword">break</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> isDif\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 7);
const _hoisted_8 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_8);
}
var isEqual____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html.vue"]]);
export { isEqual____________html as default };
