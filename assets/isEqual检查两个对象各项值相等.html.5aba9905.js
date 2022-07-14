import{_ as n,o as s,c as a,a as p}from"./app.2a6f0ea5.js";const t={},o=p(`<h1 id="isequal\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49" tabindex="-1"><a class="header-anchor" href="#isequal\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49" aria-hidden="true">#</a> <code>isEqual</code>\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49</h1><p><strong>\u53C2\u6570</strong></p><ul><li><code>object</code>\u5F85\u68C0\u7D22\u7684\u5BF9\u8C61\u6216\u6570\u7EC4</li><li><code>object</code>\u5F85\u68C0\u7D22\u7684\u5BF9\u8C61\u6216\u6570\u7EC4</li></ul><p><strong>\u4F8B\u5B50</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; true</span>
<span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">isEqual</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj1<span class="token punctuation">,</span> obj2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> o1 <span class="token operator">=</span> obj1 <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>
  <span class="token keyword">let</span> o2 <span class="token operator">=</span> obj2 <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>
  <span class="token comment">// \u5224\u65AD\u662F\u4E0D\u662F\u5BF9\u8C61</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>o1 <span class="token operator">||</span> <span class="token operator">!</span>o2<span class="token punctuation">)</span> <span class="token keyword">return</span> obj1 <span class="token operator">===</span> obj2
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">!==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">let</span> isDif <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> o <span class="token keyword">in</span> obj1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> t1 <span class="token operator">=</span> obj1<span class="token punctuation">[</span>o<span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>
    <span class="token keyword">let</span> t2 <span class="token operator">=</span> obj2<span class="token punctuation">[</span>o<span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>t1 <span class="token operator">&amp;&amp;</span> t2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      isDif <span class="token operator">=</span> <span class="token function">isEqual</span><span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>o<span class="token punctuation">]</span><span class="token punctuation">,</span> obj2<span class="token punctuation">[</span>o<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>o<span class="token punctuation">]</span> <span class="token operator">!==</span> obj2<span class="token punctuation">[</span>o<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      isDif <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isDif<span class="token punctuation">)</span> <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> isDif
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),e=[o];function c(l,i){return s(),a("div",null,e)}var u=n(t,[["render",c],["__file","isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html.vue"]]);export{u as default};
