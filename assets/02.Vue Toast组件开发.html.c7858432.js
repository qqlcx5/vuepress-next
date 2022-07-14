import{_ as n,o as s,c as a,a as t}from"./app.2a6f0ea5.js";const p={},e=t(`<h1 id="vue-toast\u7EC4\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#vue-toast\u7EC4\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> Vue Toast\u7EC4\u4EF6\u5F00\u53D1</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// \u8FD9\u91CC\u5C31\u662F\u6211\u4EEC\u521A\u521A\u521B\u5EFA\u7684\u90A3\u4E2A\u9759\u6001\u7EC4\u4EF6</span>
<span class="token keyword">import</span> toastComponent <span class="token keyword">from</span> <span class="token string">&#39;./Toast.vue&#39;</span>
<span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A \u6269\u5C55\u5B9E\u4F8B\u6784\u9020\u5668, \u5173\u4E8E vue.extend \u6709\u4E0D\u61C2\u7684\u540C\u5B66,\u53EF\u4EE5\u53BB\u67E5\u770B\u4EE5\u4E0B\u5B98\u65B9\u6587\u6863 https://cn.vuejs.org/v2/api/#Vue-extend</span>
<span class="token keyword">const</span> ToastConstructor <span class="token operator">=</span> vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>toastComponent<span class="token punctuation">)</span>
<span class="token comment">// \u5B9A\u4E49\u5F39\u51FA\u7EC4\u4EF6\u7684\u51FD\u6570 \u63A5\u65362\u4E2A\u53C2\u6570, \u8981\u663E\u793A\u7684\u6587\u672C \u548C \u663E\u793A\u65F6\u95F4</span>
<span class="token keyword">function</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> duration <span class="token operator">=</span> <span class="token number">2000</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B9E\u4F8B\u5316\u4E00\u4E2A toast.vue</span>
  <span class="token keyword">const</span> toastDom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ToastConstructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> text<span class="token punctuation">,</span>
        <span class="token literal-property property">showWrap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showContent</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// \u628A \u5B9E\u4F8B\u5316\u7684 toast.vue \u6DFB\u52A0\u5230 body \u91CC</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>toastDom<span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
  <span class="token comment">// \u63D0\u524D 250ms \u6267\u884C\u6DE1\u51FA\u52A8\u753B(\u56E0\u4E3A\u6211\u4EEC\u518Dcss\u91CC\u9762\u8BBE\u7F6E\u7684\u9690\u85CF\u52A8\u753B\u6301\u7EED\u662F250ms)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    toastDom<span class="token punctuation">.</span>showContent <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> duration <span class="token operator">-</span> <span class="token number">250</span><span class="token punctuation">)</span>
  <span class="token comment">// \u8FC7\u4E86 duration \u65F6\u95F4\u540E\u9690\u85CF\u6574\u4E2A\u7EC4\u4EF6</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    toastDom<span class="token punctuation">.</span>showWrap <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> duration<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6CE8\u518C\u4E3A\u5168\u5C40\u7EC4\u4EF6\u7684\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">registryToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5C06\u7EC4\u4EF6\u6CE8\u518C\u5230 vue \u7684 \u539F\u578B\u94FE\u91CC\u53BB,</span>
  <span class="token comment">// \u8FD9\u6837\u5C31\u53EF\u4EE5\u5728\u6240\u6709 vue \u7684\u5B9E\u4F8B\u91CC\u9762\u4F7F\u7528 this.$toast()</span>
  vue<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$toast <span class="token operator">=</span> showToast
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> showToast<span class="token punctuation">,</span> registryToast <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showWrap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showContent ? <span class="token punctuation">&#39;</span>fadein<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span>fadeout<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fadein</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> animate_in 0.25s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fadeout</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> animate_out 0.25s<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> animate_in</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> animate_out</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html.vue"]]);export{r as default};
