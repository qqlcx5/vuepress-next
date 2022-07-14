import{_ as n,o as a,c as s,a as t}from"./app.2a6f0ea5.js";const p={},e=t(`<h1 id="flattendeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#flattendeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4" aria-hidden="true">#</a> <code>flattenDeep</code>\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4</h1><p>\u5C06\u591A\u5C42\u5D4C\u5957\u6570\u7EC4\uFF08array\uFF09\u62C6\u5206\u6210\u6307\u5B9A\u5C42\u7EA7\u6570\u7EC4.</p><p><strong>\u53C2\u6570</strong></p><ul><li><code>array</code>\u591A\u5C42\u5D4C\u5957\u6570\u7EC4 <code>depth = 1</code> \u51CF\u5C11\u7684\u5D4C\u5957\u5C42\u7EA7\u6570</li></ul><p><strong>\u4F8B\u5B50</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">flattenDeep</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; [1, 2, [3, [4]], 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">flattenDeep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> depth <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>depth <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">flatten</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> depth <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> v<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// ES6\u65B9\u6CD5 \`flat(depth)\`</span>
<span class="token comment">// [1, [2, [3, [4]], 5]].flat(1)</span>
<span class="token comment">// =&gt; [1, 2, [3, [4]], 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,u){return a(),s("div",null,o)}var r=n(p,[["render",c],["__file","flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html.vue"]]);export{r as default};
