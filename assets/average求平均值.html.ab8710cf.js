import{_ as n,o as a,c as s,a as e}from"./app.2a6f0ea5.js";const t={},p=e(`<h1 id="average\u6C42\u5E73\u5747\u503C" tabindex="-1"><a class="header-anchor" href="#average\u6C42\u5E73\u5747\u503C" aria-hidden="true">#</a> <code>average</code>\u6C42\u5E73\u5747\u503C</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">average</span><span class="token punctuation">(</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span> value3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p><ul><li><code>value</code> \u6570\u5B57</li></ul><p><strong>\u4F8B\u5B50</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">average</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">average</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">average</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>nums</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> val<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">/</span> nums<span class="token punctuation">.</span>length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),c=[p];function o(l,u){return a(),s("div",null,c)}var r=n(t,[["render",o],["__file","average\u6C42\u5E73\u5747\u503C.html.vue"]]);export{r as default};
