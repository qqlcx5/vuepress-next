import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.b0857ca0.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="vue-input\u7EC4\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#vue-input\u7EC4\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> Vue input\u7EC4\u4EF6\u5F00\u53D1</h1><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lcx-input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputClass<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- &lt;slot name=&#39;prefix&#39; /&gt; --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n      <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showPassword ? (passwordVisible ?type : <span class="token punctuation">&#39;</span>password<span class="token punctuation">&#39;</span> ) : type<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>placeholder<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disabled<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$emit(<span class="token punctuation">&#39;</span>input<span class="token punctuation">&#39;</span>, $event.target.value)<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lcx-input__inner<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n    <span class="token comment">&lt;!-- &lt;slot name=&#39;suffix&#39; /&gt; --&gt;</span>\n    <span class="token comment">&lt;!-- native \u7ED9\u539F\u751F\u7ED1\u5B9A\u4E8B\u4EF6 \u4E0D\u52A0\u7ED9\u7EC4\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6 --&gt;</span>\n    <span class="token comment">&lt;!-- &lt;div\n      class=&quot;clearable&quot;\n      v-if=&quot;clearable&quot;\n      @click=&quot;$emit(&#39;input&#39;, &#39;&#39;)&quot;\n      @mousedown.prevent\n    &gt;\n      X\n    &lt;/div&gt; --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lcx-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clearable<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-guanbi<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clearable<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$emit(<span class="token punctuation">&#39;</span>input<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@mousedown.native.prevent</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lcx-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showPassword<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-icon-test<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showPassword<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeStatus<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lcx-input&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u5185\u5BB9&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">clearable</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">showPassword</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">inputClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> classes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>clearable <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>showPassword<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        classes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">lcx-input--suffix</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token comment">// if (this.clearable || this.showPassword) {</span>\n      <span class="token comment">//   classes.push(`lcx-input--prefix`);</span>\n      <span class="token comment">// }</span>\n      <span class="token keyword">return</span> classes<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">passwordVisible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>\n    <span class="token function">changeStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n       <span class="token keyword">this</span><span class="token punctuation">.</span>passwordVisible <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>passwordVisible\n       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n       <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.lcx-input</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>\n  <span class="token selector">&amp;.lcx-input--prefix</span><span class="token punctuation">{</span>\n    <span class="token selector">.lcx-input__inner</span> <span class="token punctuation">{</span>\n      <span class="token property">padding</span><span class="token punctuation">:</span> 0 30px 0 15px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">&amp;.lcx-input--suffix</span><span class="token punctuation">{</span>\n    <span class="token selector">.lcx-input__inner</span> <span class="token punctuation">{</span>\n      <span class="token property">padding</span><span class="token punctuation">:</span> 0 30px 0 15px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">&amp;.lcx-input--prefix.lcx-input--suffix</span><span class="token punctuation">{</span>\n    <span class="token selector">.lcx-input__inner</span> <span class="token punctuation">{</span>\n      <span class="token property">padding</span><span class="token punctuation">:</span> 0 30px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">.lcx-input__inner</span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #dcdfe6<span class="token punctuation">;</span>\n    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> #606266<span class="token punctuation">;</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n    // <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0 15px<span class="token punctuation">;</span>\n    <span class="token property">transition</span><span class="token punctuation">:</span> border-color 0.2s <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.645<span class="token punctuation">,</span> 0.045<span class="token punctuation">,</span> 0.355<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token selector">&amp;[disabled]</span> <span class="token punctuation">{</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> #f5f7fa<span class="token punctuation">;</span>\n      <span class="token property">border-color</span><span class="token punctuation">:</span> #e4e7ed<span class="token punctuation">;</span>\n      <span class="token property">color</span><span class="token punctuation">:</span> #c0c4cc<span class="token punctuation">;</span>\n      <span class="token property">cursor</span><span class="token punctuation">:</span> not-allowed<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">.clearable</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">right</span><span class="token punctuation">:</span> 14.5px<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">.showPassword</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 2);
const _hoisted_3 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_3);
}
var _06_Vue_input_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html.vue"]]);
export { _06_Vue_input_____html as default };
