const xe={},pc="modulepreload",Ht={},lc="/vuepress-next/",N=function(s,a){return!a||a.length===0?s():Promise.all(a.map(e=>{if(e=`${lc}${e}`,e in Ht)return;Ht[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":pc,t||(p.as="script",p.crossOrigin=""),p.href=e,document.head.appendChild(p),t)return new Promise((l,c)=>{p.addEventListener("load",l),p.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())},cc={"v-8daa1a0e":()=>N(()=>import("./index.html.7831bcd4.js"),[]).then(({data:n})=>n),"v-c9afc8f6":()=>N(()=>import("./index.html.47f82130.js"),[]).then(({data:n})=>n),"v-e355b60c":()=>N(()=>import("./index.html.71c968ed.js"),[]).then(({data:n})=>n),"v-15534fdd":()=>N(()=>import("./index.html.183727f5.js"),[]).then(({data:n})=>n),"v-22991227":()=>N(()=>import("./about.html.ef909134.js"),[]).then(({data:n})=>n),"v-ff20590c":()=>N(()=>import("./01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html.93814f9c.js"),[]).then(({data:n})=>n),"v-56ee61d4":()=>N(()=>import("./02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html.e7a10722.js"),[]).then(({data:n})=>n),"v-58fa6412":()=>N(()=>import("./04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html.454f5165.js"),[]).then(({data:n})=>n),"v-32fefc11":()=>N(()=>import("./05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html.bdc03860.js"),[]).then(({data:n})=>n),"v-dc317c26":()=>N(()=>import("./06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html.699331a9.js"),[]).then(({data:n})=>n),"v-9bca98a2":()=>N(()=>import("./07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html.c13d74ce.js"),[]).then(({data:n})=>n),"v-8b841460":()=>N(()=>import("./08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html.2c758243.js"),[]).then(({data:n})=>n),"v-fffb8e28":()=>N(()=>import("./index.html.91c3fbd6.js"),[]).then(({data:n})=>n),"v-97b2979a":()=>N(()=>import("./index.html.eff59d78.js"),[]).then(({data:n})=>n),"v-75214906":()=>N(()=>import("./index.html.d8b6e055.js"),[]).then(({data:n})=>n),"v-32534572":()=>N(()=>import("./index.html.88da8258.js"),[]).then(({data:n})=>n),"v-fddb37fc":()=>N(()=>import("./chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html.0d89a8bf.js"),[]).then(({data:n})=>n),"v-25f11cb1":()=>N(()=>import("./clone\u514B\u9686\u6570\u7EC4.html.b20947ff.js"),[]).then(({data:n})=>n),"v-8b67f006":()=>N(()=>import("./compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html.7b907930.js"),[]).then(({data:n})=>n),"v-4932aafa":()=>N(()=>import("./difference\u6570\u7EC4\u5DEE\u96C6.html.68a4480d.js"),[]).then(({data:n})=>n),"v-88ad7930":()=>N(()=>import("./flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html.ea1df0d5.js"),[]).then(({data:n})=>n),"v-7c143142":()=>N(()=>import("./flatten\u6241\u5E73\u5316\u6570\u7EC4.html.c1f04666.js"),[]).then(({data:n})=>n),"v-0ba4ebd2":()=>N(()=>import("./intersection\u6570\u7EC4\u4EA4\u96C6.html.135e5916.js"),[]).then(({data:n})=>n),"v-d03a9252":()=>N(()=>import("./isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html.52aa6807.js"),[]).then(({data:n})=>n),"v-0236c666":()=>N(()=>import("./isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html.09670069.js"),[]).then(({data:n})=>n),"v-3757be0e":()=>N(()=>import("./max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.3089d1ae.js"),[]).then(({data:n})=>n),"v-62425f40":()=>N(()=>import("./min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.51ee5590.js"),[]).then(({data:n})=>n),"v-c2c943f6":()=>N(()=>import("./shuffle\u6253\u4E71\u6570\u7EC4.html.b74958cf.js"),[]).then(({data:n})=>n),"v-9dd956a8":()=>N(()=>import("./sortAsc\u6570\u7EC4\u5347\u5E8F.html.1899a9a7.js"),[]).then(({data:n})=>n),"v-f9f1525a":()=>N(()=>import("./sortDesc\u6570\u7EC4\u964D\u5E8F.html.c904564e.js"),[]).then(({data:n})=>n),"v-a5a655f4":()=>N(()=>import("./takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html.38d81d5c.js"),[]).then(({data:n})=>n),"v-669d4826":()=>N(()=>import("./take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html.8b7a01d6.js"),[]).then(({data:n})=>n),"v-61944058":()=>N(()=>import("./treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html.a1bddde4.js"),[]).then(({data:n})=>n),"v-283754ae":()=>N(()=>import("./uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html.2de6fd94.js"),[]).then(({data:n})=>n),"v-35feaa32":()=>N(()=>import("./unique\u6570\u7EC4\u53BB\u91CD.html.a25ba0ca.js"),[]).then(({data:n})=>n),"v-dff60d86":()=>N(()=>import("./calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html.0b1ba36e.js"),[]).then(({data:n})=>n),"v-97ceeb80":()=>N(()=>import("./debounce\u51FD\u6570\u9632\u6296.html.779a9961.js"),[]).then(({data:n})=>n),"v-5150c06c":()=>N(()=>import("./throttle\u51FD\u6570\u8282\u6D41.html.e3c35a28.js"),[]).then(({data:n})=>n),"v-3999ae18":()=>N(()=>import("./typeFn\u7C7B\u578B\u5224\u65AD.html.00fa702d.js"),[]).then(({data:n})=>n),"v-770db0d6":()=>N(()=>import("./aboutEqual\u7EA6\u7B49\u4E8E.html.8b0eb4ff.js"),[]).then(({data:n})=>n),"v-47982a42":()=>N(()=>import("./averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html.d16c0d66.js"),[]).then(({data:n})=>n),"v-4349dc68":()=>N(()=>import("./average\u6C42\u5E73\u5747\u503C.html.14c598c2.js"),[]).then(({data:n})=>n),"v-0a24fb2c":()=>N(()=>import("./getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html.bca5dec7.js"),[]).then(({data:n})=>n),"v-1cf95226":()=>N(()=>import("./randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html.ac6057be.js"),[]).then(({data:n})=>n),"v-f61ebce8":()=>N(()=>import("./sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html.4e65ad7b.js"),[]).then(({data:n})=>n),"v-0b42a652":()=>N(()=>import("./padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html.554f2152.js"),[]).then(({data:n})=>n),"v-3ddd3670":()=>N(()=>import("./padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html.7b6603b2.js"),[]).then(({data:n})=>n),"v-073e1400":()=>N(()=>import("./thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html.c9aec98d.js"),[]).then(({data:n})=>n),"v-3706649a":()=>N(()=>import("./404.html.265028f6.js"),[]).then(({data:n})=>n)};function it(n,s){const a=Object.create(null),e=n.split(",");for(let t=0;t<e.length;t++)a[e[t]]=!0;return s?t=>!!a[t.toLowerCase()]:t=>!!a[t]}const rc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ic=it(rc);function ip(n){return!!n||n===""}function _s(n){if(sn(n)){const s={};for(let a=0;a<n.length;a++){const e=n[a],t=Bn(e)?mc(e):_s(e);if(t)for(const o in t)s[o]=t[o]}return s}else{if(Bn(n))return n;if(Sn(n))return n}}const uc=/;(?![^(]*\))/g,dc=/:(.+)/;function mc(n){const s={};return n.split(uc).forEach(a=>{if(a){const e=a.split(dc);e.length>1&&(s[e[0].trim()]=e[1].trim())}}),s}function qs(n){let s="";if(Bn(n))s=n;else if(sn(n))for(let a=0;a<n.length;a++){const e=qs(n[a]);e&&(s+=e+" ")}else if(Sn(n))for(const a in n)n[a]&&(s+=a+" ");return s.trim()}const Wa=n=>Bn(n)?n:n==null?"":sn(n)||Sn(n)&&(n.toString===kp||!on(n.toString))?JSON.stringify(n,up,2):String(n),up=(n,s)=>s&&s.__v_isRef?up(n,s.value):Xs(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((a,[e,t])=>(a[`${e} =>`]=t,a),{})}:dp(s)?{[`Set(${s.size})`]:[...s.values()]}:Sn(s)&&!sn(s)&&!vp(s)?String(s):s,En={},Gs=[],ss=()=>{},kc=()=>!1,vc=/^on[^a-z]/,Pa=n=>vc.test(n),ut=n=>n.startsWith("onUpdate:"),Pn=Object.assign,dt=(n,s)=>{const a=n.indexOf(s);a>-1&&n.splice(a,1)},hc=Object.prototype.hasOwnProperty,un=(n,s)=>hc.call(n,s),sn=Array.isArray,Xs=n=>ie(n)==="[object Map]",dp=n=>ie(n)==="[object Set]",on=n=>typeof n=="function",Bn=n=>typeof n=="string",mt=n=>typeof n=="symbol",Sn=n=>n!==null&&typeof n=="object",mp=n=>Sn(n)&&on(n.then)&&on(n.catch),kp=Object.prototype.toString,ie=n=>kp.call(n),gc=n=>ie(n).slice(8,-1),vp=n=>ie(n)==="[object Object]",kt=n=>Bn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ha=it(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ue=n=>{const s=Object.create(null);return a=>s[a]||(s[a]=n(a))},fc=/-(\w)/g,ps=ue(n=>n.replace(fc,(s,a)=>a?a.toUpperCase():"")),bc=/\B([A-Z])/g,Vs=ue(n=>n.replace(bc,"-$1").toLowerCase()),de=ue(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ce=ue(n=>n?`on${de(n)}`:""),wa=(n,s)=>!Object.is(n,s),Se=(n,s)=>{for(let a=0;a<n.length;a++)n[a](s)},Xa=(n,s,a)=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,value:a})},hp=n=>{const s=parseFloat(n);return isNaN(s)?n:s};let Kt;const yc=()=>Kt||(Kt=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let zn;class Ec{constructor(s=!1){this.active=!0,this.effects=[],this.cleanups=[],!s&&zn&&(this.parent=zn,this.index=(zn.scopes||(zn.scopes=[])).push(this)-1)}run(s){if(this.active){const a=zn;try{return zn=this,s()}finally{zn=a}}}on(){zn=this}off(){zn=this.parent}stop(s){if(this.active){let a,e;for(a=0,e=this.effects.length;a<e;a++)this.effects[a].stop();for(a=0,e=this.cleanups.length;a<e;a++)this.cleanups[a]();if(this.scopes)for(a=0,e=this.scopes.length;a<e;a++)this.scopes[a].stop(!0);if(this.parent&&!s){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function Bc(n,s=zn){s&&s.active&&s.effects.push(n)}function wc(){return zn}function Ac(n){zn&&zn.cleanups.push(n)}const vt=n=>{const s=new Set(n);return s.w=0,s.n=0,s},gp=n=>(n.w&js)>0,fp=n=>(n.n&js)>0,xc=({deps:n})=>{if(n.length)for(let s=0;s<n.length;s++)n[s].w|=js},Cc=n=>{const{deps:s}=n;if(s.length){let a=0;for(let e=0;e<s.length;e++){const t=s[e];gp(t)&&!fp(t)?t.delete(n):s[a++]=t,t.w&=~js,t.n&=~js}s.length=a}},Ke=new WeakMap;let ka=0,js=1;const Ue=30;let Gn;const Ms=Symbol(""),Ze=Symbol("");class ht{constructor(s,a=null,e){this.fn=s,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,Bc(this,e)}run(){if(!this.active)return this.fn();let s=Gn,a=Cs;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=Gn,Gn=this,Cs=!0,js=1<<++ka,ka<=Ue?xc(this):Ut(this),this.fn()}finally{ka<=Ue&&Cc(this),js=1<<--ka,Gn=this.parent,Cs=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Gn===this?this.deferStop=!0:this.active&&(Ut(this),this.onStop&&this.onStop(),this.active=!1)}}function Ut(n){const{deps:s}=n;if(s.length){for(let a=0;a<s.length;a++)s[a].delete(n);s.length=0}}let Cs=!0;const bp=[];function pa(){bp.push(Cs),Cs=!1}function la(){const n=bp.pop();Cs=n===void 0?!0:n}function Kn(n,s,a){if(Cs&&Gn){let e=Ke.get(n);e||Ke.set(n,e=new Map);let t=e.get(a);t||e.set(a,t=vt()),yp(t)}}function yp(n,s){let a=!1;ka<=Ue?fp(n)||(n.n|=js,a=!gp(n)):a=!n.has(Gn),a&&(n.add(Gn),Gn.deps.push(n))}function ks(n,s,a,e,t,o){const p=Ke.get(n);if(!p)return;let l=[];if(s==="clear")l=[...p.values()];else if(a==="length"&&sn(n))p.forEach((c,r)=>{(r==="length"||r>=e)&&l.push(c)});else switch(a!==void 0&&l.push(p.get(a)),s){case"add":sn(n)?kt(a)&&l.push(p.get("length")):(l.push(p.get(Ms)),Xs(n)&&l.push(p.get(Ze)));break;case"delete":sn(n)||(l.push(p.get(Ms)),Xs(n)&&l.push(p.get(Ze)));break;case"set":Xs(n)&&l.push(p.get(Ms));break}if(l.length===1)l[0]&&Ye(l[0]);else{const c=[];for(const r of l)r&&c.push(...r);Ye(vt(c))}}function Ye(n,s){const a=sn(n)?n:[...n];for(const e of a)e.computed&&Zt(e);for(const e of a)e.computed||Zt(e)}function Zt(n,s){(n!==Gn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Sc=it("__proto__,__v_isRef,__isVue"),Ep=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(mt)),_c=gt(),jc=gt(!1,!0),Fc=gt(!0),Yt=Nc();function Nc(){const n={};return["includes","indexOf","lastIndexOf"].forEach(s=>{n[s]=function(...a){const e=hn(this);for(let o=0,p=this.length;o<p;o++)Kn(e,"get",o+"");const t=e[s](...a);return t===-1||t===!1?e[s](...a.map(hn)):t}}),["push","pop","shift","unshift","splice"].forEach(s=>{n[s]=function(...a){pa();const e=hn(this)[s].apply(this,a);return la(),e}}),n}function gt(n=!1,s=!1){return function(e,t,o){if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return s;if(t==="__v_raw"&&o===(n?s?Zc:Cp:s?xp:Ap).get(e))return e;const p=sn(e);if(!n&&p&&un(Yt,t))return Reflect.get(Yt,t,o);const l=Reflect.get(e,t,o);return(mt(t)?Ep.has(t):Sc(t))||(n||Kn(e,"get",t),s)?l:Fn(l)?p&&kt(t)?l:l.value:Sn(l)?n?As(l):ca(l):l}}const Pc=Bp(),Dc=Bp(!0);function Bp(n=!1){return function(a,e,t,o){let p=a[e];if(Aa(p)&&Fn(p)&&!Fn(t))return!1;if(!n&&!Aa(t)&&(We(t)||(t=hn(t),p=hn(p)),!sn(a)&&Fn(p)&&!Fn(t)))return p.value=t,!0;const l=sn(a)&&kt(e)?Number(e)<a.length:un(a,e),c=Reflect.set(a,e,t,o);return a===hn(o)&&(l?wa(t,p)&&ks(a,"set",e,t):ks(a,"add",e,t)),c}}function Tc(n,s){const a=un(n,s);n[s];const e=Reflect.deleteProperty(n,s);return e&&a&&ks(n,"delete",s,void 0),e}function Ic(n,s){const a=Reflect.has(n,s);return(!mt(s)||!Ep.has(s))&&Kn(n,"has",s),a}function Lc(n){return Kn(n,"iterate",sn(n)?"length":Ms),Reflect.ownKeys(n)}const wp={get:_c,set:Pc,deleteProperty:Tc,has:Ic,ownKeys:Lc},Rc={get:Fc,set(n,s){return!0},deleteProperty(n,s){return!0}},$c=Pn({},wp,{get:jc,set:Dc}),ft=n=>n,me=n=>Reflect.getPrototypeOf(n);function Oa(n,s,a=!1,e=!1){n=n.__v_raw;const t=hn(n),o=hn(s);a||(s!==o&&Kn(t,"get",s),Kn(t,"get",o));const{has:p}=me(t),l=e?ft:a?Et:xa;if(p.call(t,s))return l(n.get(s));if(p.call(t,o))return l(n.get(o));n!==t&&n.get(s)}function Ma(n,s=!1){const a=this.__v_raw,e=hn(a),t=hn(n);return s||(n!==t&&Kn(e,"has",n),Kn(e,"has",t)),n===t?a.has(n):a.has(n)||a.has(t)}function za(n,s=!1){return n=n.__v_raw,!s&&Kn(hn(n),"iterate",Ms),Reflect.get(n,"size",n)}function Wt(n){n=hn(n);const s=hn(this);return me(s).has.call(s,n)||(s.add(n),ks(s,"add",n,n)),this}function Jt(n,s){s=hn(s);const a=hn(this),{has:e,get:t}=me(a);let o=e.call(a,n);o||(n=hn(n),o=e.call(a,n));const p=t.call(a,n);return a.set(n,s),o?wa(s,p)&&ks(a,"set",n,s):ks(a,"add",n,s),this}function Qt(n){const s=hn(this),{has:a,get:e}=me(s);let t=a.call(s,n);t||(n=hn(n),t=a.call(s,n)),e&&e.call(s,n);const o=s.delete(n);return t&&ks(s,"delete",n,void 0),o}function Gt(){const n=hn(this),s=n.size!==0,a=n.clear();return s&&ks(n,"clear",void 0,void 0),a}function qa(n,s){return function(e,t){const o=this,p=o.__v_raw,l=hn(p),c=s?ft:n?Et:xa;return!n&&Kn(l,"iterate",Ms),p.forEach((r,i)=>e.call(t,c(r),c(i),o))}}function Va(n,s,a){return function(...e){const t=this.__v_raw,o=hn(t),p=Xs(o),l=n==="entries"||n===Symbol.iterator&&p,c=n==="keys"&&p,r=t[n](...e),i=a?ft:s?Et:xa;return!s&&Kn(o,"iterate",c?Ze:Ms),{next(){const{value:d,done:k}=r.next();return k?{value:d,done:k}:{value:l?[i(d[0]),i(d[1])]:i(d),done:k}},[Symbol.iterator](){return this}}}}function hs(n){return function(...s){return n==="delete"?!1:this}}function Oc(){const n={get(o){return Oa(this,o)},get size(){return za(this)},has:Ma,add:Wt,set:Jt,delete:Qt,clear:Gt,forEach:qa(!1,!1)},s={get(o){return Oa(this,o,!1,!0)},get size(){return za(this)},has:Ma,add:Wt,set:Jt,delete:Qt,clear:Gt,forEach:qa(!1,!0)},a={get(o){return Oa(this,o,!0)},get size(){return za(this,!0)},has(o){return Ma.call(this,o,!0)},add:hs("add"),set:hs("set"),delete:hs("delete"),clear:hs("clear"),forEach:qa(!0,!1)},e={get(o){return Oa(this,o,!0,!0)},get size(){return za(this,!0)},has(o){return Ma.call(this,o,!0)},add:hs("add"),set:hs("set"),delete:hs("delete"),clear:hs("clear"),forEach:qa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Va(o,!1,!1),a[o]=Va(o,!0,!1),s[o]=Va(o,!1,!0),e[o]=Va(o,!0,!0)}),[n,a,s,e]}const[Mc,zc,qc,Vc]=Oc();function bt(n,s){const a=s?n?Vc:qc:n?zc:Mc;return(e,t,o)=>t==="__v_isReactive"?!n:t==="__v_isReadonly"?n:t==="__v_raw"?e:Reflect.get(un(a,t)&&t in e?a:e,t,o)}const Hc={get:bt(!1,!1)},Kc={get:bt(!1,!0)},Uc={get:bt(!0,!1)},Ap=new WeakMap,xp=new WeakMap,Cp=new WeakMap,Zc=new WeakMap;function Yc(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wc(n){return n.__v_skip||!Object.isExtensible(n)?0:Yc(gc(n))}function ca(n){return Aa(n)?n:yt(n,!1,wp,Hc,Ap)}function Jc(n){return yt(n,!1,$c,Kc,xp)}function As(n){return yt(n,!0,Rc,Uc,Cp)}function yt(n,s,a,e,t){if(!Sn(n)||n.__v_raw&&!(s&&n.__v_isReactive))return n;const o=t.get(n);if(o)return o;const p=Wc(n);if(p===0)return n;const l=new Proxy(n,p===2?e:a);return t.set(n,l),l}function na(n){return Aa(n)?na(n.__v_raw):!!(n&&n.__v_isReactive)}function Aa(n){return!!(n&&n.__v_isReadonly)}function We(n){return!!(n&&n.__v_isShallow)}function Sp(n){return na(n)||Aa(n)}function hn(n){const s=n&&n.__v_raw;return s?hn(s):n}function _p(n){return Xa(n,"__v_skip",!0),n}const xa=n=>Sn(n)?ca(n):n,Et=n=>Sn(n)?As(n):n;function jp(n){Cs&&Gn&&(n=hn(n),yp(n.dep||(n.dep=vt())))}function Fp(n,s){n=hn(n),n.dep&&Ye(n.dep)}function Fn(n){return!!(n&&n.__v_isRef===!0)}function rn(n){return Pp(n,!1)}function Np(n){return Pp(n,!0)}function Pp(n,s){return Fn(n)?n:new Qc(n,s)}class Qc{constructor(s,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?s:hn(s),this._value=a?s:xa(s)}get value(){return jp(this),this._value}set value(s){s=this.__v_isShallow?s:hn(s),wa(s,this._rawValue)&&(this._rawValue=s,this._value=this.__v_isShallow?s:xa(s),Fp(this))}}function as(n){return Fn(n)?n.value:n}const Gc={get:(n,s,a)=>as(Reflect.get(n,s,a)),set:(n,s,a,e)=>{const t=n[s];return Fn(t)&&!Fn(a)?(t.value=a,!0):Reflect.set(n,s,a,e)}};function Dp(n){return na(n)?n:new Proxy(n,Gc)}function Xc(n){const s=sn(n)?new Array(n.length):{};for(const a in n)s[a]=sr(n,a);return s}class nr{constructor(s,a,e){this._object=s,this._key=a,this._defaultValue=e,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}}function sr(n,s,a){const e=n[s];return Fn(e)?e:new nr(n,s,a)}class ar{constructor(s,a,e,t){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ht(s,()=>{this._dirty||(this._dirty=!0,Fp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!t,this.__v_isReadonly=e}get value(){const s=hn(this);return jp(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}function er(n,s,a=!1){let e,t;const o=on(n);return o?(e=n,t=ss):(e=n.get,t=n.set),new ar(e,t,o||!t,a)}function Ss(n,s,a,e){let t;try{t=e?n(...e):n()}catch(o){Da(o,s,a)}return t}function Wn(n,s,a,e){if(on(n)){const o=Ss(n,s,a,e);return o&&mp(o)&&o.catch(p=>{Da(p,s,a)}),o}const t=[];for(let o=0;o<n.length;o++)t.push(Wn(n[o],s,a,e));return t}function Da(n,s,a,e=!0){const t=s?s.vnode:null;if(s){let o=s.parent;const p=s.proxy,l=a;for(;o;){const r=o.ec;if(r){for(let i=0;i<r.length;i++)if(r[i](n,p,l)===!1)return}o=o.parent}const c=s.appContext.config.errorHandler;if(c){Ss(c,null,10,[n,p,l]);return}}tr(n,a,t,e)}function tr(n,s,a,e=!0){console.error(n)}let ne=!1,Je=!1;const qn=[];let is=0;const ga=[];let va=null,Ws=0;const fa=[];let ys=null,Js=0;const Tp=Promise.resolve();let Bt=null,Qe=null;function wt(n){const s=Bt||Tp;return n?s.then(this?n.bind(this):n):s}function or(n){let s=is+1,a=qn.length;for(;s<a;){const e=s+a>>>1;Ca(qn[e])<n?s=e+1:a=e}return s}function At(n){(!qn.length||!qn.includes(n,ne&&n.allowRecurse?is+1:is))&&n!==Qe&&(n.id==null?qn.push(n):qn.splice(or(n.id),0,n),Ip())}function Ip(){!ne&&!Je&&(Je=!0,Bt=Tp.then(Rp))}function pr(n){const s=qn.indexOf(n);s>is&&qn.splice(s,1)}function Lp(n,s,a,e){sn(n)?a.push(...n):(!s||!s.includes(n,n.allowRecurse?e+1:e))&&a.push(n),Ip()}function lr(n){Lp(n,va,ga,Ws)}function cr(n){Lp(n,ys,fa,Js)}function ke(n,s=null){if(ga.length){for(Qe=s,va=[...new Set(ga)],ga.length=0,Ws=0;Ws<va.length;Ws++)va[Ws]();va=null,Ws=0,Qe=null,ke(n,s)}}function se(n){if(ke(),fa.length){const s=[...new Set(fa)];if(fa.length=0,ys){ys.push(...s);return}for(ys=s,ys.sort((a,e)=>Ca(a)-Ca(e)),Js=0;Js<ys.length;Js++)ys[Js]();ys=null,Js=0}}const Ca=n=>n.id==null?1/0:n.id;function Rp(n){Je=!1,ne=!0,ke(n),qn.sort((a,e)=>Ca(a)-Ca(e));const s=ss;try{for(is=0;is<qn.length;is++){const a=qn[is];a&&a.active!==!1&&Ss(a,null,14)}}finally{is=0,qn.length=0,se(),ne=!1,Bt=null,(qn.length||ga.length||fa.length)&&Rp(n)}}function rr(n,s,...a){if(n.isUnmounted)return;const e=n.vnode.props||En;let t=a;const o=s.startsWith("update:"),p=o&&s.slice(7);if(p&&p in e){const i=`${p==="modelValue"?"model":p}Modifiers`,{number:d,trim:k}=e[i]||En;k&&(t=a.map(u=>u.trim())),d&&(t=a.map(hp))}let l,c=e[l=Ce(s)]||e[l=Ce(ps(s))];!c&&o&&(c=e[l=Ce(Vs(s))]),c&&Wn(c,n,6,t);const r=e[l+"Once"];if(r){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Wn(r,n,6,t)}}function $p(n,s,a=!1){const e=s.emitsCache,t=e.get(n);if(t!==void 0)return t;const o=n.emits;let p={},l=!1;if(!on(n)){const c=r=>{const i=$p(r,s,!0);i&&(l=!0,Pn(p,i))};!a&&s.mixins.length&&s.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!l?(e.set(n,null),null):(sn(o)?o.forEach(c=>p[c]=null):Pn(p,o),e.set(n,p),p)}function ve(n,s){return!n||!Pa(s)?!1:(s=s.slice(2).replace(/Once$/,""),un(n,s[0].toLowerCase()+s.slice(1))||un(n,Vs(s))||un(n,s))}let Tn=null,he=null;function ae(n){const s=Tn;return Tn=n,he=n&&n.type.__scopeId||null,s}function Hk(n){he=n}function Kk(){he=null}function ir(n,s=Tn,a){if(!s||n._n)return n;const e=(...t)=>{e._d&&ro(-1);const o=ae(s),p=n(...t);return ae(o),e._d&&ro(1),p};return e._n=!0,e._c=!0,e._d=!0,e}function _e(n){const{type:s,vnode:a,proxy:e,withProxy:t,props:o,propsOptions:[p],slots:l,attrs:c,emit:r,render:i,renderCache:d,data:k,setupState:u,ctx:b,inheritAttrs:B}=n;let A,h;const y=ae(n);try{if(a.shapeFlag&4){const D=t||e;A=Qn(i.call(D,D,d,o,u,k,b)),h=c}else{const D=s;A=Qn(D.length>1?D(o,{attrs:c,slots:l,emit:r}):D(o,null)),h=s.props?c:ur(c)}}catch(D){ya.length=0,Da(D,n,1),A=xn(Hn)}let x=A;if(h&&B!==!1){const D=Object.keys(h),{shapeFlag:q}=x;D.length&&q&7&&(p&&D.some(ut)&&(h=dr(h,p)),x=Fs(x,h))}return a.dirs&&(x=Fs(x),x.dirs=x.dirs?x.dirs.concat(a.dirs):a.dirs),a.transition&&(x.transition=a.transition),A=x,ae(y),A}const ur=n=>{let s;for(const a in n)(a==="class"||a==="style"||Pa(a))&&((s||(s={}))[a]=n[a]);return s},dr=(n,s)=>{const a={};for(const e in n)(!ut(e)||!(e.slice(9)in s))&&(a[e]=n[e]);return a};function mr(n,s,a){const{props:e,children:t,component:o}=n,{props:p,children:l,patchFlag:c}=s,r=o.emitsOptions;if(s.dirs||s.transition)return!0;if(a&&c>=0){if(c&1024)return!0;if(c&16)return e?Xt(e,p,r):!!p;if(c&8){const i=s.dynamicProps;for(let d=0;d<i.length;d++){const k=i[d];if(p[k]!==e[k]&&!ve(r,k))return!0}}}else return(t||l)&&(!l||!l.$stable)?!0:e===p?!1:e?p?Xt(e,p,r):!0:!!p;return!1}function Xt(n,s,a){const e=Object.keys(s);if(e.length!==Object.keys(n).length)return!0;for(let t=0;t<e.length;t++){const o=e[t];if(s[o]!==n[o]&&!ve(a,o))return!0}return!1}function kr({vnode:n,parent:s},a){for(;s&&s.subTree===n;)(n=s.vnode).el=a,s=s.parent}const vr=n=>n.__isSuspense;function Op(n,s){s&&s.pendingBranch?sn(n)?s.effects.push(...n):s.effects.push(n):cr(n)}function Yn(n,s){if(jn){let a=jn.provides;const e=jn.parent&&jn.parent.provides;e===a&&(a=jn.provides=Object.create(e)),a[n]=s}}function Nn(n,s,a=!1){const e=jn||Tn;if(e){const t=e.parent==null?e.vnode.appContext&&e.vnode.appContext.provides:e.parent.provides;if(t&&n in t)return t[n];if(arguments.length>1)return a&&on(s)?s.call(e.proxy):s}}const no={};function Vn(n,s,a){return Mp(n,s,a)}function Mp(n,s,{immediate:a,deep:e,flush:t,onTrack:o,onTrigger:p}=En){const l=jn;let c,r=!1,i=!1;if(Fn(n)?(c=()=>n.value,r=We(n)):na(n)?(c=()=>n,e=!0):sn(n)?(i=!0,r=n.some(h=>na(h)||We(h)),c=()=>n.map(h=>{if(Fn(h))return h.value;if(na(h))return Os(h);if(on(h))return Ss(h,l,2)})):on(n)?s?c=()=>Ss(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Wn(n,l,3,[k])}:c=ss,s&&e){const h=c;c=()=>Os(h())}let d,k=h=>{d=A.onStop=()=>{Ss(h,l,4)}};if(ea)return k=ss,s?a&&Wn(s,l,3,[c(),i?[]:void 0,k]):c(),ss;let u=i?[]:no;const b=()=>{if(!!A.active)if(s){const h=A.run();(e||r||(i?h.some((y,x)=>wa(y,u[x])):wa(h,u)))&&(d&&d(),Wn(s,l,3,[h,u===no?void 0:u,k]),u=h)}else A.run()};b.allowRecurse=!!s;let B;t==="sync"?B=b:t==="post"?B=()=>Rn(b,l&&l.suspense):B=()=>lr(b);const A=new ht(c,B);return s?a?b():u=A.run():t==="post"?Rn(A.run.bind(A),l&&l.suspense):A.run(),()=>{A.stop(),l&&l.scope&&dt(l.scope.effects,A)}}function hr(n,s,a){const e=this.proxy,t=Bn(n)?n.includes(".")?zp(e,n):()=>e[n]:n.bind(e,e);let o;on(s)?o=s:(o=s.handler,a=s);const p=jn;aa(this);const l=Mp(t,o.bind(e),a);return p?aa(p):zs(),l}function zp(n,s){const a=s.split(".");return()=>{let e=n;for(let t=0;t<a.length&&e;t++)e=e[a[t]];return e}}function Os(n,s){if(!Sn(n)||n.__v_skip||(s=s||new Set,s.has(n)))return n;if(s.add(n),Fn(n))Os(n.value,s);else if(sn(n))for(let a=0;a<n.length;a++)Os(n[a],s);else if(dp(n)||Xs(n))n.forEach(a=>{Os(a,s)});else if(vp(n))for(const a in n)Os(n[a],s);return n}function qp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return In(()=>{n.isMounted=!0}),Ia(()=>{n.isUnmounting=!0}),n}const Un=[Function,Array],gr={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Un,onEnter:Un,onAfterEnter:Un,onEnterCancelled:Un,onBeforeLeave:Un,onLeave:Un,onAfterLeave:Un,onLeaveCancelled:Un,onBeforeAppear:Un,onAppear:Un,onAfterAppear:Un,onAppearCancelled:Un},setup(n,{slots:s}){const a=Ft(),e=qp();let t;return()=>{const o=s.default&&xt(s.default(),!0);if(!o||!o.length)return;let p=o[0];if(o.length>1){for(const B of o)if(B.type!==Hn){p=B;break}}const l=hn(n),{mode:c}=l;if(e.isLeaving)return je(p);const r=so(p);if(!r)return je(p);const i=Sa(r,l,e,a);_a(r,i);const d=a.subTree,k=d&&so(d);let u=!1;const{getTransitionKey:b}=r.type;if(b){const B=b();t===void 0?t=B:B!==t&&(t=B,u=!0)}if(k&&k.type!==Hn&&(!Rs(r,k)||u)){const B=Sa(k,l,e,a);if(_a(k,B),c==="out-in")return e.isLeaving=!0,B.afterLeave=()=>{e.isLeaving=!1,a.update()},je(p);c==="in-out"&&r.type!==Hn&&(B.delayLeave=(A,h,y)=>{const x=Hp(e,k);x[String(k.key)]=k,A._leaveCb=()=>{h(),A._leaveCb=void 0,delete i.delayedLeave},i.delayedLeave=y})}return p}}},Vp=gr;function Hp(n,s){const{leavingVNodes:a}=n;let e=a.get(s.type);return e||(e=Object.create(null),a.set(s.type,e)),e}function Sa(n,s,a,e){const{appear:t,mode:o,persisted:p=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:r,onEnterCancelled:i,onBeforeLeave:d,onLeave:k,onAfterLeave:u,onLeaveCancelled:b,onBeforeAppear:B,onAppear:A,onAfterAppear:h,onAppearCancelled:y}=s,x=String(n.key),D=Hp(a,n),q=(g,J)=>{g&&Wn(g,e,9,J)},O=(g,J)=>{const Z=J[1];q(g,J),sn(g)?g.every(I=>I.length<=1)&&Z():g.length<=1&&Z()},_={mode:o,persisted:p,beforeEnter(g){let J=l;if(!a.isMounted)if(t)J=B||l;else return;g._leaveCb&&g._leaveCb(!0);const Z=D[x];Z&&Rs(n,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),q(J,[g])},enter(g){let J=c,Z=r,I=i;if(!a.isMounted)if(t)J=A||c,Z=h||r,I=y||i;else return;let f=!1;const E=g._enterCb=C=>{f||(f=!0,C?q(I,[g]):q(Z,[g]),_.delayedLeave&&_.delayedLeave(),g._enterCb=void 0)};J?O(J,[g,E]):E()},leave(g,J){const Z=String(n.key);if(g._enterCb&&g._enterCb(!0),a.isUnmounting)return J();q(d,[g]);let I=!1;const f=g._leaveCb=E=>{I||(I=!0,J(),E?q(b,[g]):q(u,[g]),g._leaveCb=void 0,D[Z]===n&&delete D[Z])};D[Z]=n,k?O(k,[g,f]):f()},clone(g){return Sa(g,s,a,e)}};return _}function je(n){if(Ta(n))return n=Fs(n),n.children=null,n}function so(n){return Ta(n)?n.children?n.children[0]:void 0:n}function _a(n,s){n.shapeFlag&6&&n.component?_a(n.component.subTree,s):n.shapeFlag&128?(n.ssContent.transition=s.clone(n.ssContent),n.ssFallback.transition=s.clone(n.ssFallback)):n.transition=s}function xt(n,s=!1,a){let e=[],t=0;for(let o=0;o<n.length;o++){let p=n[o];const l=a==null?p.key:String(a)+String(p.key!=null?p.key:o);p.type===Dn?(p.patchFlag&128&&t++,e=e.concat(xt(p.children,s,l))):(s||p.type!==Hn)&&e.push(l!=null?Fs(p,{key:l}):p)}if(t>1)for(let o=0;o<e.length;o++)e[o].patchFlag=-2;return e}function _n(n){return on(n)?{setup:n,name:n.name}:n}const sa=n=>!!n.type.__asyncLoader;function nn(n){on(n)&&(n={loader:n});const{loader:s,loadingComponent:a,errorComponent:e,delay:t=200,timeout:o,suspensible:p=!0,onError:l}=n;let c=null,r,i=0;const d=()=>(i++,c=null,k()),k=()=>{let u;return c||(u=c=s().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),l)return new Promise((B,A)=>{l(b,()=>B(d()),()=>A(b),i+1)});throw b}).then(b=>u!==c&&c?c:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),r=b,b)))};return _n({name:"AsyncComponentWrapper",__asyncLoader:k,get __asyncResolved(){return r},setup(){const u=jn;if(r)return()=>Fe(r,u);const b=y=>{c=null,Da(y,u,13,!e)};if(p&&u.suspense||ea)return k().then(y=>()=>Fe(y,u)).catch(y=>(b(y),()=>e?xn(e,{error:y}):null));const B=rn(!1),A=rn(),h=rn(!!t);return t&&setTimeout(()=>{h.value=!1},t),o!=null&&setTimeout(()=>{if(!B.value&&!A.value){const y=new Error(`Async component timed out after ${o}ms.`);b(y),A.value=y}},o),k().then(()=>{B.value=!0,u.parent&&Ta(u.parent.vnode)&&At(u.parent.update)}).catch(y=>{b(y),A.value=y}),()=>{if(B.value&&r)return Fe(r,u);if(A.value&&e)return xn(e,{error:A.value});if(a&&!h.value)return xn(a)}}})}function Fe(n,{vnode:{ref:s,props:a,children:e,shapeFlag:t},parent:o}){const p=xn(n,a,e);return p.ref=s,p}const Ta=n=>n.type.__isKeepAlive;function fr(n,s){Kp(n,"a",s)}function br(n,s){Kp(n,"da",s)}function Kp(n,s,a=jn){const e=n.__wdc||(n.__wdc=()=>{let t=a;for(;t;){if(t.isDeactivated)return;t=t.parent}return n()});if(ge(s,e,a),a){let t=a.parent;for(;t&&t.parent;)Ta(t.parent.vnode)&&yr(e,s,a,t),t=t.parent}}function yr(n,s,a,e){const t=ge(s,n,e,!0);Ct(()=>{dt(e[s],t)},a)}function ge(n,s,a=jn,e=!1){if(a){const t=a[n]||(a[n]=[]),o=s.__weh||(s.__weh=(...p)=>{if(a.isUnmounted)return;pa(),aa(a);const l=Wn(s,a,n,p);return zs(),la(),l});return e?t.unshift(o):t.push(o),o}}const vs=n=>(s,a=jn)=>(!ea||n==="sp")&&ge(n,s,a),Up=vs("bm"),In=vs("m"),Er=vs("bu"),Zp=vs("u"),Ia=vs("bum"),Ct=vs("um"),Br=vs("sp"),wr=vs("rtg"),Ar=vs("rtc");function xr(n,s=jn){ge("ec",n,s)}function Uk(n,s){const a=Tn;if(a===null)return n;const e=be(a)||a.proxy,t=n.dirs||(n.dirs=[]);for(let o=0;o<s.length;o++){let[p,l,c,r=En]=s[o];on(p)&&(p={mounted:p,updated:p}),p.deep&&Os(l),t.push({dir:p,instance:e,value:l,oldValue:void 0,arg:c,modifiers:r})}return n}function os(n,s,a,e){const t=n.dirs,o=s&&s.dirs;for(let p=0;p<t.length;p++){const l=t[p];o&&(l.oldValue=o[p].value);let c=l.dir[e];c&&(pa(),Wn(c,a,8,[n.el,l,n,s]),la())}}const Yp="components";function Cr(n,s){return _r(Yp,n,!0,s)||n}const Sr=Symbol();function _r(n,s,a=!0,e=!1){const t=Tn||jn;if(t){const o=t.type;if(n===Yp){const l=oi(o,!1);if(l&&(l===s||l===ps(s)||l===de(ps(s))))return o}const p=ao(t[n]||o[n],s)||ao(t.appContext[n],s);return!p&&e?o:p}}function ao(n,s){return n&&(n[s]||n[ps(s)]||n[de(ps(s))])}function jr(n,s,a,e){let t;const o=a&&a[e];if(sn(n)||Bn(n)){t=new Array(n.length);for(let p=0,l=n.length;p<l;p++)t[p]=s(n[p],p,void 0,o&&o[p])}else if(typeof n=="number"){t=new Array(n);for(let p=0;p<n;p++)t[p]=s(p+1,p,void 0,o&&o[p])}else if(Sn(n))if(n[Symbol.iterator])t=Array.from(n,(p,l)=>s(p,l,void 0,o&&o[l]));else{const p=Object.keys(n);t=new Array(p.length);for(let l=0,c=p.length;l<c;l++){const r=p[l];t[l]=s(n[r],r,l,o&&o[l])}}else t=[];return a&&(a[e]=t),t}function Wp(n,s,a={},e,t){if(Tn.isCE||Tn.parent&&sa(Tn.parent)&&Tn.parent.isCE)return xn("slot",s==="default"?null:{name:s},e&&e());let o=n[s];o&&o._c&&(o._d=!1),Xn();const p=o&&Jp(o(a)),l=ll(Dn,{key:a.key||`_${s}`},p||(e?e():[]),p&&n._===1?64:-2);return!t&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function Jp(n){return n.some(s=>pe(s)?!(s.type===Hn||s.type===Dn&&!Jp(s.children)):!0)?n:null}const Ge=n=>n?rl(n)?be(n)||n.proxy:Ge(n.parent):null,ee=Pn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ge(n.parent),$root:n=>Ge(n.root),$emit:n=>n.emit,$options:n=>Gp(n),$forceUpdate:n=>n.f||(n.f=()=>At(n.update)),$nextTick:n=>n.n||(n.n=wt.bind(n.proxy)),$watch:n=>hr.bind(n)}),Fr={get({_:n},s){const{ctx:a,setupState:e,data:t,props:o,accessCache:p,type:l,appContext:c}=n;let r;if(s[0]!=="$"){const u=p[s];if(u!==void 0)switch(u){case 1:return e[s];case 2:return t[s];case 4:return a[s];case 3:return o[s]}else{if(e!==En&&un(e,s))return p[s]=1,e[s];if(t!==En&&un(t,s))return p[s]=2,t[s];if((r=n.propsOptions[0])&&un(r,s))return p[s]=3,o[s];if(a!==En&&un(a,s))return p[s]=4,a[s];Xe&&(p[s]=0)}}const i=ee[s];let d,k;if(i)return s==="$attrs"&&Kn(n,"get",s),i(n);if((d=l.__cssModules)&&(d=d[s]))return d;if(a!==En&&un(a,s))return p[s]=4,a[s];if(k=c.config.globalProperties,un(k,s))return k[s]},set({_:n},s,a){const{data:e,setupState:t,ctx:o}=n;return t!==En&&un(t,s)?(t[s]=a,!0):e!==En&&un(e,s)?(e[s]=a,!0):un(n.props,s)||s[0]==="$"&&s.slice(1)in n?!1:(o[s]=a,!0)},has({_:{data:n,setupState:s,accessCache:a,ctx:e,appContext:t,propsOptions:o}},p){let l;return!!a[p]||n!==En&&un(n,p)||s!==En&&un(s,p)||(l=o[0])&&un(l,p)||un(e,p)||un(ee,p)||un(t.config.globalProperties,p)},defineProperty(n,s,a){return a.get!=null?n._.accessCache[s]=0:un(a,"value")&&this.set(n,s,a.value,null),Reflect.defineProperty(n,s,a)}};let Xe=!0;function Nr(n){const s=Gp(n),a=n.proxy,e=n.ctx;Xe=!1,s.beforeCreate&&eo(s.beforeCreate,n,"bc");const{data:t,computed:o,methods:p,watch:l,provide:c,inject:r,created:i,beforeMount:d,mounted:k,beforeUpdate:u,updated:b,activated:B,deactivated:A,beforeDestroy:h,beforeUnmount:y,destroyed:x,unmounted:D,render:q,renderTracked:O,renderTriggered:_,errorCaptured:g,serverPrefetch:J,expose:Z,inheritAttrs:I,components:f,directives:E,filters:C}=s;if(r&&Pr(r,e,null,n.appContext.config.unwrapInjectedRef),p)for(const M in p){const Y=p[M];on(Y)&&(e[M]=Y.bind(a))}if(t){const M=t.call(a,a);Sn(M)&&(n.data=ca(M))}if(Xe=!0,o)for(const M in o){const Y=o[M],pn=on(Y)?Y.bind(a,a):on(Y.get)?Y.get.bind(a,a):ss,cn=!on(Y)&&on(Y.set)?Y.set.bind(a):ss,gn=en({get:pn,set:cn});Object.defineProperty(e,M,{enumerable:!0,configurable:!0,get:()=>gn.value,set:Cn=>gn.value=Cn})}if(l)for(const M in l)Qp(l[M],e,a,M);if(c){const M=on(c)?c.call(a):c;Reflect.ownKeys(M).forEach(Y=>{Yn(Y,M[Y])})}i&&eo(i,n,"c");function j(M,Y){sn(Y)?Y.forEach(pn=>M(pn.bind(a))):Y&&M(Y.bind(a))}if(j(Up,d),j(In,k),j(Er,u),j(Zp,b),j(fr,B),j(br,A),j(xr,g),j(Ar,O),j(wr,_),j(Ia,y),j(Ct,D),j(Br,J),sn(Z))if(Z.length){const M=n.exposed||(n.exposed={});Z.forEach(Y=>{Object.defineProperty(M,Y,{get:()=>a[Y],set:pn=>a[Y]=pn})})}else n.exposed||(n.exposed={});q&&n.render===ss&&(n.render=q),I!=null&&(n.inheritAttrs=I),f&&(n.components=f),E&&(n.directives=E)}function Pr(n,s,a=ss,e=!1){sn(n)&&(n=nt(n));for(const t in n){const o=n[t];let p;Sn(o)?"default"in o?p=Nn(o.from||t,o.default,!0):p=Nn(o.from||t):p=Nn(o),Fn(p)&&e?Object.defineProperty(s,t,{enumerable:!0,configurable:!0,get:()=>p.value,set:l=>p.value=l}):s[t]=p}}function eo(n,s,a){Wn(sn(n)?n.map(e=>e.bind(s.proxy)):n.bind(s.proxy),s,a)}function Qp(n,s,a,e){const t=e.includes(".")?zp(a,e):()=>a[e];if(Bn(n)){const o=s[n];on(o)&&Vn(t,o)}else if(on(n))Vn(t,n.bind(a));else if(Sn(n))if(sn(n))n.forEach(o=>Qp(o,s,a,e));else{const o=on(n.handler)?n.handler.bind(a):s[n.handler];on(o)&&Vn(t,o,n)}}function Gp(n){const s=n.type,{mixins:a,extends:e}=s,{mixins:t,optionsCache:o,config:{optionMergeStrategies:p}}=n.appContext,l=o.get(s);let c;return l?c=l:!t.length&&!a&&!e?c=s:(c={},t.length&&t.forEach(r=>te(c,r,p,!0)),te(c,s,p)),o.set(s,c),c}function te(n,s,a,e=!1){const{mixins:t,extends:o}=s;o&&te(n,o,a,!0),t&&t.forEach(p=>te(n,p,a,!0));for(const p in s)if(!(e&&p==="expose")){const l=Dr[p]||a&&a[p];n[p]=l?l(n[p],s[p]):s[p]}return n}const Dr={data:to,props:Ts,emits:Ts,methods:Ts,computed:Ts,beforeCreate:Ln,created:Ln,beforeMount:Ln,mounted:Ln,beforeUpdate:Ln,updated:Ln,beforeDestroy:Ln,beforeUnmount:Ln,destroyed:Ln,unmounted:Ln,activated:Ln,deactivated:Ln,errorCaptured:Ln,serverPrefetch:Ln,components:Ts,directives:Ts,watch:Ir,provide:to,inject:Tr};function to(n,s){return s?n?function(){return Pn(on(n)?n.call(this,this):n,on(s)?s.call(this,this):s)}:s:n}function Tr(n,s){return Ts(nt(n),nt(s))}function nt(n){if(sn(n)){const s={};for(let a=0;a<n.length;a++)s[n[a]]=n[a];return s}return n}function Ln(n,s){return n?[...new Set([].concat(n,s))]:s}function Ts(n,s){return n?Pn(Pn(Object.create(null),n),s):s}function Ir(n,s){if(!n)return s;if(!s)return n;const a=Pn(Object.create(null),n);for(const e in s)a[e]=Ln(n[e],s[e]);return a}function Lr(n,s,a,e=!1){const t={},o={};Xa(o,fe,1),n.propsDefaults=Object.create(null),Xp(n,s,t,o);for(const p in n.propsOptions[0])p in t||(t[p]=void 0);a?n.props=e?t:Jc(t):n.type.props?n.props=t:n.props=o,n.attrs=o}function Rr(n,s,a,e){const{props:t,attrs:o,vnode:{patchFlag:p}}=n,l=hn(t),[c]=n.propsOptions;let r=!1;if((e||p>0)&&!(p&16)){if(p&8){const i=n.vnode.dynamicProps;for(let d=0;d<i.length;d++){let k=i[d];if(ve(n.emitsOptions,k))continue;const u=s[k];if(c)if(un(o,k))u!==o[k]&&(o[k]=u,r=!0);else{const b=ps(k);t[b]=st(c,l,b,u,n,!1)}else u!==o[k]&&(o[k]=u,r=!0)}}}else{Xp(n,s,t,o)&&(r=!0);let i;for(const d in l)(!s||!un(s,d)&&((i=Vs(d))===d||!un(s,i)))&&(c?a&&(a[d]!==void 0||a[i]!==void 0)&&(t[d]=st(c,l,d,void 0,n,!0)):delete t[d]);if(o!==l)for(const d in o)(!s||!un(s,d)&&!0)&&(delete o[d],r=!0)}r&&ks(n,"set","$attrs")}function Xp(n,s,a,e){const[t,o]=n.propsOptions;let p=!1,l;if(s)for(let c in s){if(ha(c))continue;const r=s[c];let i;t&&un(t,i=ps(c))?!o||!o.includes(i)?a[i]=r:(l||(l={}))[i]=r:ve(n.emitsOptions,c)||(!(c in e)||r!==e[c])&&(e[c]=r,p=!0)}if(o){const c=hn(a),r=l||En;for(let i=0;i<o.length;i++){const d=o[i];a[d]=st(t,c,d,r[d],n,!un(r,d))}}return p}function st(n,s,a,e,t,o){const p=n[a];if(p!=null){const l=un(p,"default");if(l&&e===void 0){const c=p.default;if(p.type!==Function&&on(c)){const{propsDefaults:r}=t;a in r?e=r[a]:(aa(t),e=r[a]=c.call(null,s),zs())}else e=c}p[0]&&(o&&!l?e=!1:p[1]&&(e===""||e===Vs(a))&&(e=!0))}return e}function nl(n,s,a=!1){const e=s.propsCache,t=e.get(n);if(t)return t;const o=n.props,p={},l=[];let c=!1;if(!on(n)){const i=d=>{c=!0;const[k,u]=nl(d,s,!0);Pn(p,k),u&&l.push(...u)};!a&&s.mixins.length&&s.mixins.forEach(i),n.extends&&i(n.extends),n.mixins&&n.mixins.forEach(i)}if(!o&&!c)return e.set(n,Gs),Gs;if(sn(o))for(let i=0;i<o.length;i++){const d=ps(o[i]);oo(d)&&(p[d]=En)}else if(o)for(const i in o){const d=ps(i);if(oo(d)){const k=o[i],u=p[d]=sn(k)||on(k)?{type:k}:k;if(u){const b=co(Boolean,u.type),B=co(String,u.type);u[0]=b>-1,u[1]=B<0||b<B,(b>-1||un(u,"default"))&&l.push(d)}}}const r=[p,l];return e.set(n,r),r}function oo(n){return n[0]!=="$"}function po(n){const s=n&&n.toString().match(/^\s*function (\w+)/);return s?s[1]:n===null?"null":""}function lo(n,s){return po(n)===po(s)}function co(n,s){return sn(s)?s.findIndex(a=>lo(a,n)):on(s)&&lo(s,n)?0:-1}const sl=n=>n[0]==="_"||n==="$stable",St=n=>sn(n)?n.map(Qn):[Qn(n)],$r=(n,s,a)=>{if(s._n)return s;const e=ir((...t)=>St(s(...t)),a);return e._c=!1,e},al=(n,s,a)=>{const e=n._ctx;for(const t in n){if(sl(t))continue;const o=n[t];if(on(o))s[t]=$r(t,o,e);else if(o!=null){const p=St(o);s[t]=()=>p}}},el=(n,s)=>{const a=St(s);n.slots.default=()=>a},Or=(n,s)=>{if(n.vnode.shapeFlag&32){const a=s._;a?(n.slots=hn(s),Xa(s,"_",a)):al(s,n.slots={})}else n.slots={},s&&el(n,s);Xa(n.slots,fe,1)},Mr=(n,s,a)=>{const{vnode:e,slots:t}=n;let o=!0,p=En;if(e.shapeFlag&32){const l=s._;l?a&&l===1?o=!1:(Pn(t,s),!a&&l===1&&delete t._):(o=!s.$stable,al(s,t)),p=s}else s&&(el(n,s),p={default:1});if(o)for(const l in t)!sl(l)&&!(l in p)&&delete t[l]};function tl(){return{app:null,config:{isNativeTag:kc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zr=0;function qr(n,s){return function(e,t=null){on(e)||(e=Object.assign({},e)),t!=null&&!Sn(t)&&(t=null);const o=tl(),p=new Set;let l=!1;const c=o.app={_uid:zr++,_component:e,_props:t,_container:null,_context:o,_instance:null,version:li,get config(){return o.config},set config(r){},use(r,...i){return p.has(r)||(r&&on(r.install)?(p.add(r),r.install(c,...i)):on(r)&&(p.add(r),r(c,...i))),c},mixin(r){return o.mixins.includes(r)||o.mixins.push(r),c},component(r,i){return i?(o.components[r]=i,c):o.components[r]},directive(r,i){return i?(o.directives[r]=i,c):o.directives[r]},mount(r,i,d){if(!l){const k=xn(e,t);return k.appContext=o,i&&s?s(k,r):n(k,r,d),l=!0,c._container=r,r.__vue_app__=c,be(k.component)||k.component.proxy}},unmount(){l&&(n(null,c._container),delete c._container.__vue_app__)},provide(r,i){return o.provides[r]=i,c}};return c}}function oe(n,s,a,e,t=!1){if(sn(n)){n.forEach((k,u)=>oe(k,s&&(sn(s)?s[u]:s),a,e,t));return}if(sa(e)&&!t)return;const o=e.shapeFlag&4?be(e.component)||e.component.proxy:e.el,p=t?null:o,{i:l,r:c}=n,r=s&&s.r,i=l.refs===En?l.refs={}:l.refs,d=l.setupState;if(r!=null&&r!==c&&(Bn(r)?(i[r]=null,un(d,r)&&(d[r]=null)):Fn(r)&&(r.value=null)),on(c))Ss(c,l,12,[p,i]);else{const k=Bn(c),u=Fn(c);if(k||u){const b=()=>{if(n.f){const B=k?i[c]:c.value;t?sn(B)&&dt(B,o):sn(B)?B.includes(o)||B.push(o):k?(i[c]=[o],un(d,c)&&(d[c]=i[c])):(c.value=[o],n.k&&(i[n.k]=c.value))}else k?(i[c]=p,un(d,c)&&(d[c]=p)):u&&(c.value=p,n.k&&(i[n.k]=p))};p?(b.id=-1,Rn(b,a)):b()}}}let gs=!1;const Ha=n=>/svg/.test(n.namespaceURI)&&n.tagName!=="foreignObject",Ka=n=>n.nodeType===8;function Vr(n){const{mt:s,p:a,o:{patchProp:e,createText:t,nextSibling:o,parentNode:p,remove:l,insert:c,createComment:r}}=n,i=(h,y)=>{if(!y.hasChildNodes()){a(null,h,y),se(),y._vnode=h;return}gs=!1,d(y.firstChild,h,null,null,null),se(),y._vnode=h,gs&&console.error("Hydration completed but contains mismatches.")},d=(h,y,x,D,q,O=!1)=>{const _=Ka(h)&&h.data==="[",g=()=>B(h,y,x,D,q,_),{type:J,ref:Z,shapeFlag:I,patchFlag:f}=y,E=h.nodeType;y.el=h,f===-2&&(O=!1,y.dynamicChildren=null);let C=null;switch(J){case ja:E!==3?y.children===""?(c(y.el=t(""),p(h),h),C=h):C=g():(h.data!==y.children&&(gs=!0,h.data=y.children),C=o(h));break;case Hn:E!==8||_?C=g():C=o(h);break;case ba:if(E!==1&&E!==3)C=g();else{C=h;const F=!y.children.length;for(let j=0;j<y.staticCount;j++)F&&(y.children+=C.nodeType===1?C.outerHTML:C.data),j===y.staticCount-1&&(y.anchor=C),C=o(C);return C}break;case Dn:_?C=b(h,y,x,D,q,O):C=g();break;default:if(I&1)E!==1||y.type.toLowerCase()!==h.tagName.toLowerCase()?C=g():C=k(h,y,x,D,q,O);else if(I&6){y.slotScopeIds=q;const F=p(h);if(s(y,F,null,x,D,Ha(F),O),C=_?A(h):o(h),C&&Ka(C)&&C.data==="teleport end"&&(C=o(C)),sa(y)){let j;_?(j=xn(Dn),j.anchor=C?C.previousSibling:F.lastChild):j=h.nodeType===3?_t(""):xn("div"),j.el=h,y.component.subTree=j}}else I&64?E!==8?C=g():C=y.type.hydrate(h,y,x,D,q,O,n,u):I&128&&(C=y.type.hydrate(h,y,x,D,Ha(p(h)),q,O,n,d))}return Z!=null&&oe(Z,null,D,y),C},k=(h,y,x,D,q,O)=>{O=O||!!y.dynamicChildren;const{type:_,props:g,patchFlag:J,shapeFlag:Z,dirs:I}=y,f=_==="input"&&I||_==="option";if(f||J!==-1){if(I&&os(y,null,x,"created"),g)if(f||!O||J&48)for(const C in g)(f&&C.endsWith("value")||Pa(C)&&!ha(C))&&e(h,C,null,g[C],!1,void 0,x);else g.onClick&&e(h,"onClick",null,g.onClick,!1,void 0,x);let E;if((E=g&&g.onVnodeBeforeMount)&&Zn(E,x,y),I&&os(y,null,x,"beforeMount"),((E=g&&g.onVnodeMounted)||I)&&Op(()=>{E&&Zn(E,x,y),I&&os(y,null,x,"mounted")},D),Z&16&&!(g&&(g.innerHTML||g.textContent))){let C=u(h.firstChild,y,h,x,D,q,O);for(;C;){gs=!0;const F=C;C=C.nextSibling,l(F)}}else Z&8&&h.textContent!==y.children&&(gs=!0,h.textContent=y.children)}return h.nextSibling},u=(h,y,x,D,q,O,_)=>{_=_||!!y.dynamicChildren;const g=y.children,J=g.length;for(let Z=0;Z<J;Z++){const I=_?g[Z]:g[Z]=Qn(g[Z]);if(h)h=d(h,I,D,q,O,_);else{if(I.type===ja&&!I.children)continue;gs=!0,a(null,I,x,null,D,q,Ha(x),O)}}return h},b=(h,y,x,D,q,O)=>{const{slotScopeIds:_}=y;_&&(q=q?q.concat(_):_);const g=p(h),J=u(o(h),y,g,x,D,q,O);return J&&Ka(J)&&J.data==="]"?o(y.anchor=J):(gs=!0,c(y.anchor=r("]"),g,J),J)},B=(h,y,x,D,q,O)=>{if(gs=!0,y.el=null,O){const J=A(h);for(;;){const Z=o(h);if(Z&&Z!==J)l(Z);else break}}const _=o(h),g=p(h);return l(h),a(null,y,g,_,x,D,Ha(g),q),_},A=h=>{let y=0;for(;h;)if(h=o(h),h&&Ka(h)&&(h.data==="["&&y++,h.data==="]")){if(y===0)return o(h);y--}return h};return[i,d]}const Rn=Op;function Hr(n){return Kr(n,Vr)}function Kr(n,s){const a=yc();a.__VUE__=!0;const{insert:e,remove:t,patchProp:o,createElement:p,createText:l,createComment:c,setText:r,setElementText:i,parentNode:d,nextSibling:k,setScopeId:u=ss,cloneNode:b,insertStaticContent:B}=n,A=(m,v,w,T=null,P=null,$=null,U=!1,z=null,V=!!v.dynamicChildren)=>{if(m===v)return;m&&!Rs(m,v)&&(T=K(m),An(m,P,$,!0),m=null),v.patchFlag===-2&&(V=!1,v.dynamicChildren=null);const{type:R,ref:G,shapeFlag:Q}=v;switch(R){case ja:h(m,v,w,T);break;case Hn:y(m,v,w,T);break;case ba:m==null&&x(v,w,T,U);break;case Dn:E(m,v,w,T,P,$,U,z,V);break;default:Q&1?O(m,v,w,T,P,$,U,z,V):Q&6?C(m,v,w,T,P,$,U,z,V):(Q&64||Q&128)&&R.process(m,v,w,T,P,$,U,z,V,mn)}G!=null&&P&&oe(G,m&&m.ref,$,v||m,!v)},h=(m,v,w,T)=>{if(m==null)e(v.el=l(v.children),w,T);else{const P=v.el=m.el;v.children!==m.children&&r(P,v.children)}},y=(m,v,w,T)=>{m==null?e(v.el=c(v.children||""),w,T):v.el=m.el},x=(m,v,w,T)=>{[m.el,m.anchor]=B(m.children,v,w,T,m.el,m.anchor)},D=({el:m,anchor:v},w,T)=>{let P;for(;m&&m!==v;)P=k(m),e(m,w,T),m=P;e(v,w,T)},q=({el:m,anchor:v})=>{let w;for(;m&&m!==v;)w=k(m),t(m),m=w;t(v)},O=(m,v,w,T,P,$,U,z,V)=>{U=U||v.type==="svg",m==null?_(v,w,T,P,$,U,z,V):Z(m,v,P,$,U,z,V)},_=(m,v,w,T,P,$,U,z)=>{let V,R;const{type:G,props:Q,shapeFlag:X,transition:an,patchFlag:kn,dirs:fn}=m;if(m.el&&b!==void 0&&kn===-1)V=m.el=b(m.el);else{if(V=m.el=p(m.type,$,Q&&Q.is,Q),X&8?i(V,m.children):X&16&&J(m.children,V,null,T,P,$&&G!=="foreignObject",U,z),fn&&os(m,null,T,"created"),Q){for(const wn in Q)wn!=="value"&&!ha(wn)&&o(V,wn,null,Q[wn],$,m.children,T,P,L);"value"in Q&&o(V,"value",null,Q.value),(R=Q.onVnodeBeforeMount)&&Zn(R,T,m)}g(V,m,m.scopeId,U,T)}fn&&os(m,null,T,"beforeMount");const bn=(!P||P&&!P.pendingBranch)&&an&&!an.persisted;bn&&an.beforeEnter(V),e(V,v,w),((R=Q&&Q.onVnodeMounted)||bn||fn)&&Rn(()=>{R&&Zn(R,T,m),bn&&an.enter(V),fn&&os(m,null,T,"mounted")},P)},g=(m,v,w,T,P)=>{if(w&&u(m,w),T)for(let $=0;$<T.length;$++)u(m,T[$]);if(P){let $=P.subTree;if(v===$){const U=P.vnode;g(m,U,U.scopeId,U.slotScopeIds,P.parent)}}},J=(m,v,w,T,P,$,U,z,V=0)=>{for(let R=V;R<m.length;R++){const G=m[R]=z?Bs(m[R]):Qn(m[R]);A(null,G,v,w,T,P,$,U,z)}},Z=(m,v,w,T,P,$,U)=>{const z=v.el=m.el;let{patchFlag:V,dynamicChildren:R,dirs:G}=v;V|=m.patchFlag&16;const Q=m.props||En,X=v.props||En;let an;w&&Ns(w,!1),(an=X.onVnodeBeforeUpdate)&&Zn(an,w,v,m),G&&os(v,m,w,"beforeUpdate"),w&&Ns(w,!0);const kn=P&&v.type!=="foreignObject";if(R?I(m.dynamicChildren,R,z,w,T,kn,$):U||pn(m,v,z,null,w,T,kn,$,!1),V>0){if(V&16)f(z,v,Q,X,w,T,P);else if(V&2&&Q.class!==X.class&&o(z,"class",null,X.class,P),V&4&&o(z,"style",Q.style,X.style,P),V&8){const fn=v.dynamicProps;for(let bn=0;bn<fn.length;bn++){const wn=fn[bn],Jn=Q[wn],Hs=X[wn];(Hs!==Jn||wn==="value")&&o(z,wn,Jn,Hs,P,m.children,w,T,L)}}V&1&&m.children!==v.children&&i(z,v.children)}else!U&&R==null&&f(z,v,Q,X,w,T,P);((an=X.onVnodeUpdated)||G)&&Rn(()=>{an&&Zn(an,w,v,m),G&&os(v,m,w,"updated")},T)},I=(m,v,w,T,P,$,U)=>{for(let z=0;z<v.length;z++){const V=m[z],R=v[z],G=V.el&&(V.type===Dn||!Rs(V,R)||V.shapeFlag&70)?d(V.el):w;A(V,R,G,null,T,P,$,U,!0)}},f=(m,v,w,T,P,$,U)=>{if(w!==T){for(const z in T){if(ha(z))continue;const V=T[z],R=w[z];V!==R&&z!=="value"&&o(m,z,R,V,U,v.children,P,$,L)}if(w!==En)for(const z in w)!ha(z)&&!(z in T)&&o(m,z,w[z],null,U,v.children,P,$,L);"value"in T&&o(m,"value",w.value,T.value)}},E=(m,v,w,T,P,$,U,z,V)=>{const R=v.el=m?m.el:l(""),G=v.anchor=m?m.anchor:l("");let{patchFlag:Q,dynamicChildren:X,slotScopeIds:an}=v;an&&(z=z?z.concat(an):an),m==null?(e(R,w,T),e(G,w,T),J(v.children,w,G,P,$,U,z,V)):Q>0&&Q&64&&X&&m.dynamicChildren?(I(m.dynamicChildren,X,w,P,$,U,z),(v.key!=null||P&&v===P.subTree)&&ol(m,v,!0)):pn(m,v,w,G,P,$,U,z,V)},C=(m,v,w,T,P,$,U,z,V)=>{v.slotScopeIds=z,m==null?v.shapeFlag&512?P.ctx.activate(v,w,T,U,V):F(v,w,T,P,$,U,V):j(m,v,V)},F=(m,v,w,T,P,$,U)=>{const z=m.component=ni(m,T,P);if(Ta(m)&&(z.ctx.renderer=mn),si(z),z.asyncDep){if(P&&P.registerDep(z,M),!m.el){const V=z.subTree=xn(Hn);y(null,V,v,w)}return}M(z,m,v,w,P,$,U)},j=(m,v,w)=>{const T=v.component=m.component;if(mr(m,v,w))if(T.asyncDep&&!T.asyncResolved){Y(T,v,w);return}else T.next=v,pr(T.update),T.update();else v.el=m.el,T.vnode=v},M=(m,v,w,T,P,$,U)=>{const z=()=>{if(m.isMounted){let{next:G,bu:Q,u:X,parent:an,vnode:kn}=m,fn=G,bn;Ns(m,!1),G?(G.el=kn.el,Y(m,G,U)):G=kn,Q&&Se(Q),(bn=G.props&&G.props.onVnodeBeforeUpdate)&&Zn(bn,an,G,kn),Ns(m,!0);const wn=_e(m),Jn=m.subTree;m.subTree=wn,A(Jn,wn,d(Jn.el),K(Jn),m,P,$),G.el=wn.el,fn===null&&kr(m,wn.el),X&&Rn(X,P),(bn=G.props&&G.props.onVnodeUpdated)&&Rn(()=>Zn(bn,an,G,kn),P)}else{let G;const{el:Q,props:X}=v,{bm:an,m:kn,parent:fn}=m,bn=sa(v);if(Ns(m,!1),an&&Se(an),!bn&&(G=X&&X.onVnodeBeforeMount)&&Zn(G,fn,v),Ns(m,!0),Q&&tn){const wn=()=>{m.subTree=_e(m),tn(Q,m.subTree,m,P,null)};bn?v.type.__asyncLoader().then(()=>!m.isUnmounted&&wn()):wn()}else{const wn=m.subTree=_e(m);A(null,wn,w,T,m,P,$),v.el=wn.el}if(kn&&Rn(kn,P),!bn&&(G=X&&X.onVnodeMounted)){const wn=v;Rn(()=>Zn(G,fn,wn),P)}(v.shapeFlag&256||fn&&sa(fn.vnode)&&fn.vnode.shapeFlag&256)&&m.a&&Rn(m.a,P),m.isMounted=!0,v=w=T=null}},V=m.effect=new ht(z,()=>At(R),m.scope),R=m.update=()=>V.run();R.id=m.uid,Ns(m,!0),R()},Y=(m,v,w)=>{v.component=m;const T=m.vnode.props;m.vnode=v,m.next=null,Rr(m,v.props,T,w),Mr(m,v.children,w),pa(),ke(void 0,m.update),la()},pn=(m,v,w,T,P,$,U,z,V=!1)=>{const R=m&&m.children,G=m?m.shapeFlag:0,Q=v.children,{patchFlag:X,shapeFlag:an}=v;if(X>0){if(X&128){gn(R,Q,w,T,P,$,U,z,V);return}else if(X&256){cn(R,Q,w,T,P,$,U,z,V);return}}an&8?(G&16&&L(R,P,$),Q!==R&&i(w,Q)):G&16?an&16?gn(R,Q,w,T,P,$,U,z,V):L(R,P,$,!0):(G&8&&i(w,""),an&16&&J(Q,w,T,P,$,U,z,V))},cn=(m,v,w,T,P,$,U,z,V)=>{m=m||Gs,v=v||Gs;const R=m.length,G=v.length,Q=Math.min(R,G);let X;for(X=0;X<Q;X++){const an=v[X]=V?Bs(v[X]):Qn(v[X]);A(m[X],an,w,null,P,$,U,z,V)}R>G?L(m,P,$,!0,!1,Q):J(v,w,T,P,$,U,z,V,Q)},gn=(m,v,w,T,P,$,U,z,V)=>{let R=0;const G=v.length;let Q=m.length-1,X=G-1;for(;R<=Q&&R<=X;){const an=m[R],kn=v[R]=V?Bs(v[R]):Qn(v[R]);if(Rs(an,kn))A(an,kn,w,null,P,$,U,z,V);else break;R++}for(;R<=Q&&R<=X;){const an=m[Q],kn=v[X]=V?Bs(v[X]):Qn(v[X]);if(Rs(an,kn))A(an,kn,w,null,P,$,U,z,V);else break;Q--,X--}if(R>Q){if(R<=X){const an=X+1,kn=an<G?v[an].el:T;for(;R<=X;)A(null,v[R]=V?Bs(v[R]):Qn(v[R]),w,kn,P,$,U,z,V),R++}}else if(R>X)for(;R<=Q;)An(m[R],P,$,!0),R++;else{const an=R,kn=R,fn=new Map;for(R=kn;R<=X;R++){const Mn=v[R]=V?Bs(v[R]):Qn(v[R]);Mn.key!=null&&fn.set(Mn.key,R)}let bn,wn=0;const Jn=X-kn+1;let Hs=!1,zt=0;const ra=new Array(Jn);for(R=0;R<Jn;R++)ra[R]=0;for(R=an;R<=Q;R++){const Mn=m[R];if(wn>=Jn){An(Mn,P,$,!0);continue}let ts;if(Mn.key!=null)ts=fn.get(Mn.key);else for(bn=kn;bn<=X;bn++)if(ra[bn-kn]===0&&Rs(Mn,v[bn])){ts=bn;break}ts===void 0?An(Mn,P,$,!0):(ra[ts-kn]=R+1,ts>=zt?zt=ts:Hs=!0,A(Mn,v[ts],w,null,P,$,U,z,V),wn++)}const qt=Hs?Ur(ra):Gs;for(bn=qt.length-1,R=Jn-1;R>=0;R--){const Mn=kn+R,ts=v[Mn],Vt=Mn+1<G?v[Mn+1].el:T;ra[R]===0?A(null,ts,w,Vt,P,$,U,z,V):Hs&&(bn<0||R!==qt[bn]?Cn(ts,w,Vt,2):bn--)}}},Cn=(m,v,w,T,P=null)=>{const{el:$,type:U,transition:z,children:V,shapeFlag:R}=m;if(R&6){Cn(m.component.subTree,v,w,T);return}if(R&128){m.suspense.move(v,w,T);return}if(R&64){U.move(m,v,w,mn);return}if(U===Dn){e($,v,w);for(let Q=0;Q<V.length;Q++)Cn(V[Q],v,w,T);e(m.anchor,v,w);return}if(U===ba){D(m,v,w);return}if(T!==2&&R&1&&z)if(T===0)z.beforeEnter($),e($,v,w),Rn(()=>z.enter($),P);else{const{leave:Q,delayLeave:X,afterLeave:an}=z,kn=()=>e($,v,w),fn=()=>{Q($,()=>{kn(),an&&an()})};X?X($,kn,fn):fn()}else e($,v,w)},An=(m,v,w,T=!1,P=!1)=>{const{type:$,props:U,ref:z,children:V,dynamicChildren:R,shapeFlag:G,patchFlag:Q,dirs:X}=m;if(z!=null&&oe(z,null,w,m,!0),G&256){v.ctx.deactivate(m);return}const an=G&1&&X,kn=!sa(m);let fn;if(kn&&(fn=U&&U.onVnodeBeforeUnmount)&&Zn(fn,v,m),G&6)W(m.component,w,T);else{if(G&128){m.suspense.unmount(w,T);return}an&&os(m,null,v,"beforeUnmount"),G&64?m.type.remove(m,v,w,P,mn,T):R&&($!==Dn||Q>0&&Q&64)?L(R,v,w,!1,!0):($===Dn&&Q&384||!P&&G&16)&&L(V,v,w),T&&On(m)}(kn&&(fn=U&&U.onVnodeUnmounted)||an)&&Rn(()=>{fn&&Zn(fn,v,m),an&&os(m,null,v,"unmounted")},w)},On=m=>{const{type:v,el:w,anchor:T,transition:P}=m;if(v===Dn){S(w,T);return}if(v===ba){q(m);return}const $=()=>{t(w),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(m.shapeFlag&1&&P&&!P.persisted){const{leave:U,delayLeave:z}=P,V=()=>U(w,$);z?z(m.el,$,V):V()}else $()},S=(m,v)=>{let w;for(;m!==v;)w=k(m),t(m),m=w;t(v)},W=(m,v,w)=>{const{bum:T,scope:P,update:$,subTree:U,um:z}=m;T&&Se(T),P.stop(),$&&($.active=!1,An(U,m,v,w)),z&&Rn(z,v),Rn(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},L=(m,v,w,T=!1,P=!1,$=0)=>{for(let U=$;U<m.length;U++)An(m[U],v,w,T,P)},K=m=>m.shapeFlag&6?K(m.component.subTree):m.shapeFlag&128?m.suspense.next():k(m.anchor||m.el),dn=(m,v,w)=>{m==null?v._vnode&&An(v._vnode,null,null,!0):A(v._vnode||null,m,v,null,null,null,w),se(),v._vnode=m},mn={p:A,um:An,m:Cn,r:On,mt:F,mc:J,pc:pn,pbc:I,n:K,o:n};let ln,tn;return s&&([ln,tn]=s(mn)),{render:dn,hydrate:ln,createApp:qr(dn,ln)}}function Ns({effect:n,update:s},a){n.allowRecurse=s.allowRecurse=a}function ol(n,s,a=!1){const e=n.children,t=s.children;if(sn(e)&&sn(t))for(let o=0;o<e.length;o++){const p=e[o];let l=t[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=t[o]=Bs(t[o]),l.el=p.el),a||ol(p,l))}}function Ur(n){const s=n.slice(),a=[0];let e,t,o,p,l;const c=n.length;for(e=0;e<c;e++){const r=n[e];if(r!==0){if(t=a[a.length-1],n[t]<r){s[e]=t,a.push(e);continue}for(o=0,p=a.length-1;o<p;)l=o+p>>1,n[a[l]]<r?o=l+1:p=l;r<n[a[o]]&&(o>0&&(s[e]=a[o-1]),a[o]=e)}}for(o=a.length,p=a[o-1];o-- >0;)a[o]=p,p=s[p];return a}const Zr=n=>n.__isTeleport,Dn=Symbol(void 0),ja=Symbol(void 0),Hn=Symbol(void 0),ba=Symbol(void 0),ya=[];let ns=null;function Xn(n=!1){ya.push(ns=n?null:[])}function Yr(){ya.pop(),ns=ya[ya.length-1]||null}let Fa=1;function ro(n){Fa+=n}function pl(n){return n.dynamicChildren=Fa>0?ns||Gs:null,Yr(),Fa>0&&ns&&ns.push(n),n}function us(n,s,a,e,t,o){return pl(rs(n,s,a,e,t,o,!0))}function ll(n,s,a,e,t){return pl(xn(n,s,a,e,t,!0))}function pe(n){return n?n.__v_isVNode===!0:!1}function Rs(n,s){return n.type===s.type&&n.key===s.key}const fe="__vInternal",cl=({key:n})=>n!=null?n:null,Ja=({ref:n,ref_key:s,ref_for:a})=>n!=null?Bn(n)||Fn(n)||on(n)?{i:Tn,r:n,k:s,f:!!a}:n:null;function rs(n,s=null,a=null,e=0,t=null,o=n===Dn?0:1,p=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:s,key:s&&cl(s),ref:s&&Ja(s),scopeId:he,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:e,dynamicProps:t,dynamicChildren:null,appContext:null};return l?(jt(c,a),o&128&&n.normalize(c)):a&&(c.shapeFlag|=Bn(a)?8:16),Fa>0&&!p&&ns&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&ns.push(c),c}const xn=Wr;function Wr(n,s=null,a=null,e=0,t=null,o=!1){if((!n||n===Sr)&&(n=Hn),pe(n)){const l=Fs(n,s,!0);return a&&jt(l,a),Fa>0&&!o&&ns&&(l.shapeFlag&6?ns[ns.indexOf(n)]=l:ns.push(l)),l.patchFlag|=-2,l}if(pi(n)&&(n=n.__vccOpts),s){s=Jr(s);let{class:l,style:c}=s;l&&!Bn(l)&&(s.class=qs(l)),Sn(c)&&(Sp(c)&&!sn(c)&&(c=Pn({},c)),s.style=_s(c))}const p=Bn(n)?1:vr(n)?128:Zr(n)?64:Sn(n)?4:on(n)?2:0;return rs(n,s,a,e,t,p,o,!0)}function Jr(n){return n?Sp(n)||fe in n?Pn({},n):n:null}function Fs(n,s,a=!1){const{props:e,ref:t,patchFlag:o,children:p}=n,l=s?Qr(e||{},s):e;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&cl(l),ref:s&&s.ref?a&&t?sn(t)?t.concat(Ja(s)):[t,Ja(s)]:Ja(s):t,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:p,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:s&&n.type!==Dn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fs(n.ssContent),ssFallback:n.ssFallback&&Fs(n.ssFallback),el:n.el,anchor:n.anchor}}function _t(n=" ",s=0){return xn(ja,null,n,s)}function Zk(n,s){const a=xn(ba,null,n);return a.staticCount=s,a}function io(n="",s=!1){return s?(Xn(),ll(Hn,null,n)):xn(Hn,null,n)}function Qn(n){return n==null||typeof n=="boolean"?xn(Hn):sn(n)?xn(Dn,null,n.slice()):typeof n=="object"?Bs(n):xn(ja,null,String(n))}function Bs(n){return n.el===null||n.memo?n:Fs(n)}function jt(n,s){let a=0;const{shapeFlag:e}=n;if(s==null)s=null;else if(sn(s))a=16;else if(typeof s=="object")if(e&65){const t=s.default;t&&(t._c&&(t._d=!1),jt(n,t()),t._c&&(t._d=!0));return}else{a=32;const t=s._;!t&&!(fe in s)?s._ctx=Tn:t===3&&Tn&&(Tn.slots._===1?s._=1:(s._=2,n.patchFlag|=1024))}else on(s)?(s={default:s,_ctx:Tn},a=32):(s=String(s),e&64?(a=16,s=[_t(s)]):a=8);n.children=s,n.shapeFlag|=a}function Qr(...n){const s={};for(let a=0;a<n.length;a++){const e=n[a];for(const t in e)if(t==="class")s.class!==e.class&&(s.class=qs([s.class,e.class]));else if(t==="style")s.style=_s([s.style,e.style]);else if(Pa(t)){const o=s[t],p=e[t];p&&o!==p&&!(sn(o)&&o.includes(p))&&(s[t]=o?[].concat(o,p):p)}else t!==""&&(s[t]=e[t])}return s}function Zn(n,s,a,e=null){Wn(n,s,7,[a,e])}const Gr=tl();let Xr=0;function ni(n,s,a){const e=n.type,t=(s?s.appContext:n.appContext)||Gr,o={uid:Xr++,vnode:n,type:e,parent:s,appContext:t,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ec(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(t.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nl(e,t),emitsOptions:$p(e,t),emit:null,emitted:null,propsDefaults:En,inheritAttrs:e.inheritAttrs,ctx:En,data:En,props:En,attrs:En,slots:En,refs:En,setupState:En,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=s?s.root:o,o.emit=rr.bind(null,o),n.ce&&n.ce(o),o}let jn=null;const Ft=()=>jn||Tn,aa=n=>{jn=n,n.scope.on()},zs=()=>{jn&&jn.scope.off(),jn=null};function rl(n){return n.vnode.shapeFlag&4}let ea=!1;function si(n,s=!1){ea=s;const{props:a,children:e}=n.vnode,t=rl(n);Lr(n,a,t,s),Or(n,e);const o=t?ai(n,s):void 0;return ea=!1,o}function ai(n,s){const a=n.type;n.accessCache=Object.create(null),n.proxy=_p(new Proxy(n.ctx,Fr));const{setup:e}=a;if(e){const t=n.setupContext=e.length>1?ti(n):null;aa(n),pa();const o=Ss(e,n,0,[n.props,t]);if(la(),zs(),mp(o)){if(o.then(zs,zs),s)return o.then(p=>{uo(n,p,s)}).catch(p=>{Da(p,n,0)});n.asyncDep=o}else uo(n,o,s)}else il(n,s)}function uo(n,s,a){on(s)?n.type.__ssrInlineRender?n.ssrRender=s:n.render=s:Sn(s)&&(n.setupState=Dp(s)),il(n,a)}let mo;function il(n,s,a){const e=n.type;if(!n.render){if(!s&&mo&&!e.render){const t=e.template;if(t){const{isCustomElement:o,compilerOptions:p}=n.appContext.config,{delimiters:l,compilerOptions:c}=e,r=Pn(Pn({isCustomElement:o,delimiters:l},p),c);e.render=mo(t,r)}}n.render=e.render||ss}aa(n),pa(),Nr(n),la(),zs()}function ei(n){return new Proxy(n.attrs,{get(s,a){return Kn(n,"get","$attrs"),s[a]}})}function ti(n){const s=e=>{n.exposed=e||{}};let a;return{get attrs(){return a||(a=ei(n))},slots:n.slots,emit:n.emit,expose:s}}function be(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Dp(_p(n.exposed)),{get(s,a){if(a in s)return s[a];if(a in ee)return ee[a](n)}}))}function oi(n,s=!0){return on(n)?n.displayName||n.name:n.name||s&&n.__name}function pi(n){return on(n)&&"__vccOpts"in n}const en=(n,s)=>er(n,s,ea);function H(n,s,a){const e=arguments.length;return e===2?Sn(s)&&!sn(s)?pe(s)?xn(n,null,[s]):xn(n,s):xn(n,null,s):(e>3?a=Array.prototype.slice.call(arguments,2):e===3&&pe(a)&&(a=[a]),xn(n,s,a))}const li="3.2.37",ci="http://www.w3.org/2000/svg",$s=typeof document!="undefined"?document:null,ko=$s&&$s.createElement("template"),ri={insert:(n,s,a)=>{s.insertBefore(n,a||null)},remove:n=>{const s=n.parentNode;s&&s.removeChild(n)},createElement:(n,s,a,e)=>{const t=s?$s.createElementNS(ci,n):$s.createElement(n,a?{is:a}:void 0);return n==="select"&&e&&e.multiple!=null&&t.setAttribute("multiple",e.multiple),t},createText:n=>$s.createTextNode(n),createComment:n=>$s.createComment(n),setText:(n,s)=>{n.nodeValue=s},setElementText:(n,s)=>{n.textContent=s},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>$s.querySelector(n),setScopeId(n,s){n.setAttribute(s,"")},cloneNode(n){const s=n.cloneNode(!0);return"_value"in n&&(s._value=n._value),s},insertStaticContent(n,s,a,e,t,o){const p=a?a.previousSibling:s.lastChild;if(t&&(t===o||t.nextSibling))for(;s.insertBefore(t.cloneNode(!0),a),!(t===o||!(t=t.nextSibling)););else{ko.innerHTML=e?`<svg>${n}</svg>`:n;const l=ko.content;if(e){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}s.insertBefore(l,a)}return[p?p.nextSibling:s.firstChild,a?a.previousSibling:s.lastChild]}};function ii(n,s,a){const e=n._vtc;e&&(s=(s?[s,...e]:[...e]).join(" ")),s==null?n.removeAttribute("class"):a?n.setAttribute("class",s):n.className=s}function ui(n,s,a){const e=n.style,t=Bn(a);if(a&&!t){for(const o in a)at(e,o,a[o]);if(s&&!Bn(s))for(const o in s)a[o]==null&&at(e,o,"")}else{const o=e.display;t?s!==a&&(e.cssText=a):s&&n.removeAttribute("style"),"_vod"in n&&(e.display=o)}}const vo=/\s*!important$/;function at(n,s,a){if(sn(a))a.forEach(e=>at(n,s,e));else if(a==null&&(a=""),s.startsWith("--"))n.setProperty(s,a);else{const e=di(n,s);vo.test(a)?n.setProperty(Vs(e),a.replace(vo,""),"important"):n[e]=a}}const ho=["Webkit","Moz","ms"],Ne={};function di(n,s){const a=Ne[s];if(a)return a;let e=ps(s);if(e!=="filter"&&e in n)return Ne[s]=e;e=de(e);for(let t=0;t<ho.length;t++){const o=ho[t]+e;if(o in n)return Ne[s]=o}return s}const go="http://www.w3.org/1999/xlink";function mi(n,s,a,e,t){if(e&&s.startsWith("xlink:"))a==null?n.removeAttributeNS(go,s.slice(6,s.length)):n.setAttributeNS(go,s,a);else{const o=ic(s);a==null||o&&!ip(a)?n.removeAttribute(s):n.setAttribute(s,o?"":a)}}function ki(n,s,a,e,t,o,p){if(s==="innerHTML"||s==="textContent"){e&&p(e,t,o),n[s]=a==null?"":a;return}if(s==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=a;const c=a==null?"":a;(n.value!==c||n.tagName==="OPTION")&&(n.value=c),a==null&&n.removeAttribute(s);return}let l=!1;if(a===""||a==null){const c=typeof n[s];c==="boolean"?a=ip(a):a==null&&c==="string"?(a="",l=!0):c==="number"&&(a=0,l=!0)}try{n[s]=a}catch{}l&&n.removeAttribute(s)}const[ul,vi]=(()=>{let n=Date.now,s=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const a=navigator.userAgent.match(/firefox\/(\d+)/i);s=!!(a&&Number(a[1])<=53)}return[n,s]})();let et=0;const hi=Promise.resolve(),gi=()=>{et=0},fi=()=>et||(hi.then(gi),et=ul());function bi(n,s,a,e){n.addEventListener(s,a,e)}function yi(n,s,a,e){n.removeEventListener(s,a,e)}function Ei(n,s,a,e,t=null){const o=n._vei||(n._vei={}),p=o[s];if(e&&p)p.value=e;else{const[l,c]=Bi(s);if(e){const r=o[s]=wi(e,t);bi(n,l,r,c)}else p&&(yi(n,l,p,c),o[s]=void 0)}}const fo=/(?:Once|Passive|Capture)$/;function Bi(n){let s;if(fo.test(n)){s={};let a;for(;a=n.match(fo);)n=n.slice(0,n.length-a[0].length),s[a[0].toLowerCase()]=!0}return[Vs(n.slice(2)),s]}function wi(n,s){const a=e=>{const t=e.timeStamp||ul();(vi||t>=a.attached-1)&&Wn(Ai(e,a.value),s,5,[e])};return a.value=n,a.attached=fi(),a}function Ai(n,s){if(sn(s)){const a=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{a.call(n),n._stopped=!0},s.map(e=>t=>!t._stopped&&e&&e(t))}else return s}const bo=/^on[a-z]/,xi=(n,s,a,e,t=!1,o,p,l,c)=>{s==="class"?ii(n,e,t):s==="style"?ui(n,a,e):Pa(s)?ut(s)||Ei(n,s,a,e,p):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):Ci(n,s,e,t))?ki(n,s,e,o,p,l,c):(s==="true-value"?n._trueValue=e:s==="false-value"&&(n._falseValue=e),mi(n,s,e,t))};function Ci(n,s,a,e){return e?!!(s==="innerHTML"||s==="textContent"||s in n&&bo.test(s)&&on(a)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&n.tagName==="INPUT"||s==="type"&&n.tagName==="TEXTAREA"||bo.test(s)&&Bn(a)?!1:s in n}const fs="transition",ia="animation",Nt=(n,{slots:s})=>H(Vp,ml(n),s);Nt.displayName="Transition";const dl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Si=Nt.props=Pn({},Vp.props,dl),Ps=(n,s=[])=>{sn(n)?n.forEach(a=>a(...s)):n&&n(...s)},yo=n=>n?sn(n)?n.some(s=>s.length>1):n.length>1:!1;function ml(n){const s={};for(const f in n)f in dl||(s[f]=n[f]);if(n.css===!1)return s;const{name:a="v",type:e,duration:t,enterFromClass:o=`${a}-enter-from`,enterActiveClass:p=`${a}-enter-active`,enterToClass:l=`${a}-enter-to`,appearFromClass:c=o,appearActiveClass:r=p,appearToClass:i=l,leaveFromClass:d=`${a}-leave-from`,leaveActiveClass:k=`${a}-leave-active`,leaveToClass:u=`${a}-leave-to`}=n,b=_i(t),B=b&&b[0],A=b&&b[1],{onBeforeEnter:h,onEnter:y,onEnterCancelled:x,onLeave:D,onLeaveCancelled:q,onBeforeAppear:O=h,onAppear:_=y,onAppearCancelled:g=x}=s,J=(f,E,C)=>{Es(f,E?i:l),Es(f,E?r:p),C&&C()},Z=(f,E)=>{f._isLeaving=!1,Es(f,d),Es(f,u),Es(f,k),E&&E()},I=f=>(E,C)=>{const F=f?_:y,j=()=>J(E,f,C);Ps(F,[E,j]),Eo(()=>{Es(E,f?c:o),ls(E,f?i:l),yo(F)||Bo(E,e,B,j)})};return Pn(s,{onBeforeEnter(f){Ps(h,[f]),ls(f,o),ls(f,p)},onBeforeAppear(f){Ps(O,[f]),ls(f,c),ls(f,r)},onEnter:I(!1),onAppear:I(!0),onLeave(f,E){f._isLeaving=!0;const C=()=>Z(f,E);ls(f,d),vl(),ls(f,k),Eo(()=>{!f._isLeaving||(Es(f,d),ls(f,u),yo(D)||Bo(f,e,A,C))}),Ps(D,[f,C])},onEnterCancelled(f){J(f,!1),Ps(x,[f])},onAppearCancelled(f){J(f,!0),Ps(g,[f])},onLeaveCancelled(f){Z(f),Ps(q,[f])}})}function _i(n){if(n==null)return null;if(Sn(n))return[Pe(n.enter),Pe(n.leave)];{const s=Pe(n);return[s,s]}}function Pe(n){return hp(n)}function ls(n,s){s.split(/\s+/).forEach(a=>a&&n.classList.add(a)),(n._vtc||(n._vtc=new Set)).add(s)}function Es(n,s){s.split(/\s+/).forEach(e=>e&&n.classList.remove(e));const{_vtc:a}=n;a&&(a.delete(s),a.size||(n._vtc=void 0))}function Eo(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let ji=0;function Bo(n,s,a,e){const t=n._endId=++ji,o=()=>{t===n._endId&&e()};if(a)return setTimeout(o,a);const{type:p,timeout:l,propCount:c}=kl(n,s);if(!p)return e();const r=p+"end";let i=0;const d=()=>{n.removeEventListener(r,k),o()},k=u=>{u.target===n&&++i>=c&&d()};setTimeout(()=>{i<c&&d()},l+1),n.addEventListener(r,k)}function kl(n,s){const a=window.getComputedStyle(n),e=b=>(a[b]||"").split(", "),t=e(fs+"Delay"),o=e(fs+"Duration"),p=wo(t,o),l=e(ia+"Delay"),c=e(ia+"Duration"),r=wo(l,c);let i=null,d=0,k=0;s===fs?p>0&&(i=fs,d=p,k=o.length):s===ia?r>0&&(i=ia,d=r,k=c.length):(d=Math.max(p,r),i=d>0?p>r?fs:ia:null,k=i?i===fs?o.length:c.length:0);const u=i===fs&&/\b(transform|all)(,|$)/.test(a[fs+"Property"]);return{type:i,timeout:d,propCount:k,hasTransform:u}}function wo(n,s){for(;n.length<s.length;)n=n.concat(n);return Math.max(...s.map((a,e)=>Ao(a)+Ao(n[e])))}function Ao(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function vl(){return document.body.offsetHeight}const hl=new WeakMap,gl=new WeakMap,Fi={name:"TransitionGroup",props:Pn({},Si,{tag:String,moveClass:String}),setup(n,{slots:s}){const a=Ft(),e=qp();let t,o;return Zp(()=>{if(!t.length)return;const p=n.moveClass||`${n.name||"v"}-move`;if(!Ti(t[0].el,a.vnode.el,p))return;t.forEach(Ni),t.forEach(Pi);const l=t.filter(Di);vl(),l.forEach(c=>{const r=c.el,i=r.style;ls(r,p),i.transform=i.webkitTransform=i.transitionDuration="";const d=r._moveCb=k=>{k&&k.target!==r||(!k||/transform$/.test(k.propertyName))&&(r.removeEventListener("transitionend",d),r._moveCb=null,Es(r,p))};r.addEventListener("transitionend",d)})}),()=>{const p=hn(n),l=ml(p);let c=p.tag||Dn;t=o,o=s.default?xt(s.default()):[];for(let r=0;r<o.length;r++){const i=o[r];i.key!=null&&_a(i,Sa(i,l,e,a))}if(t)for(let r=0;r<t.length;r++){const i=t[r];_a(i,Sa(i,l,e,a)),hl.set(i,i.el.getBoundingClientRect())}return xn(c,null,o)}}},Yk=Fi;function Ni(n){const s=n.el;s._moveCb&&s._moveCb(),s._enterCb&&s._enterCb()}function Pi(n){gl.set(n,n.el.getBoundingClientRect())}function Di(n){const s=hl.get(n),a=gl.get(n),e=s.left-a.left,t=s.top-a.top;if(e||t){const o=n.el.style;return o.transform=o.webkitTransform=`translate(${e}px,${t}px)`,o.transitionDuration="0s",n}}function Ti(n,s,a){const e=n.cloneNode();n._vtc&&n._vtc.forEach(p=>{p.split(/\s+/).forEach(l=>l&&e.classList.remove(l))}),a.split(/\s+/).forEach(p=>p&&e.classList.add(p)),e.style.display="none";const t=s.nodeType===1?s:s.parentNode;t.appendChild(e);const{hasTransform:o}=kl(e);return t.removeChild(e),o}const Ii={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Wk=(n,s)=>a=>{if(!("key"in a))return;const e=Vs(a.key);if(s.some(t=>t===e||Ii[t]===e))return n(a)},Jk={beforeMount(n,{value:s},{transition:a}){n._vod=n.style.display==="none"?"":n.style.display,a&&s?a.beforeEnter(n):ua(n,s)},mounted(n,{value:s},{transition:a}){a&&s&&a.enter(n)},updated(n,{value:s,oldValue:a},{transition:e}){!s!=!a&&(e?s?(e.beforeEnter(n),ua(n,!0),e.enter(n)):e.leave(n,()=>{ua(n,!1)}):ua(n,s))},beforeUnmount(n,{value:s}){ua(n,s)}};function ua(n,s){n.style.display=s?n._vod:"none"}const Li=Pn({patchProp:xi},ri);let De,xo=!1;function Ri(){return De=xo?De:Hr(Li),xo=!0,De}const $i=(...n)=>{const s=Ri().createApp(...n),{mount:a}=s;return s.mount=e=>{const t=Oi(e);if(t)return a(t,!0,t instanceof SVGElement)},s};function Oi(n){return Bn(n)?document.querySelector(n):n}const Mi=JSON.parse('{"base":"/vuepress-next/","lang":"zh-CN","title":"\u524D\u7AEF\u6709\u9053","description":"\u524D\u7AEF\u6709\u9053,\u6280\u672F\u535A\u5BA2,\u524D\u7AEF,\u524D\u7AEF\u5F00\u53D1,\u524D\u7AEF\u535A\u5BA2,\u524D\u7AEF\u6846\u67B6,web\u524D\u7AEF,\u524D\u7AEF\u9762\u8BD5,\u6280\u672F\u6587\u6863,\u5B66\u4E60,\u9762\u8BD5,JavaScript,js,es6,typeScript,ts,vue,python,css3,html5,node,git,github,markdown,vuepress,react","head":[["link",{"rel":"icon","href":"https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/favicon.ico"}],["meta",{"name":"viewport","content":"width=device-width,initial-scale=1,user-scalable=no"}],["meta",{"name":"keywords","content":"\u524D\u7AEF\u6709\u9053,\u6280\u672F\u535A\u5BA2,\u524D\u7AEF,\u524D\u7AEF\u5F00\u53D1,\u524D\u7AEF\u535A\u5BA2,\u524D\u7AEF\u6846\u67B6,web\u524D\u7AEF,\u524D\u7AEF\u9762\u8BD5,\u6280\u672F\u6587\u6863,\u5B66\u4E60,\u9762\u8BD5,JavaScript,js,es6,typeScript,ts,vue,python,css3,html5,node,git,github,markdown,vuepress,react"}]],"locales":{}}');var zi=([n,s,a])=>n==="meta"&&s.name?`${n}.${s.name}`:["title","base"].includes(n)?n:n==="template"&&s.id?`${n}.${s.id}`:JSON.stringify([n,s,a]),qi=n=>{const s=new Set,a=[];return n.forEach(e=>{const t=zi(e);s.has(t)||(s.add(t),a.push(e))}),a},Vi=n=>/^(https?:)?\/\//.test(n),Qk=n=>/^mailto:/.test(n),Gk=n=>/^tel:/.test(n),fl=n=>Object.prototype.toString.call(n)==="[object Object]",Hi=n=>n.replace(/\/$/,""),Ki=n=>n.replace(/^\//,""),bl=(n,s)=>{const a=Object.keys(n).sort((e,t)=>{const o=t.split("/").length-e.split("/").length;return o!==0?o:t.length-e.length});for(const e of a)if(s.startsWith(e))return e;return"/"};const yl={"v-8daa1a0e":nn(()=>N(()=>import("./index.html.353175d0.js"),[])),"v-c9afc8f6":nn(()=>N(()=>import("./index.html.668dc60b.js"),[])),"v-e355b60c":nn(()=>N(()=>import("./index.html.9323e7fd.js"),[])),"v-15534fdd":nn(()=>N(()=>import("./index.html.2ba554ad.js"),[])),"v-22991227":nn(()=>N(()=>import("./about.html.5bb9b6a6.js"),[])),"v-ff20590c":nn(()=>N(()=>import("./01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html.5b7e36ff.js"),[])),"v-56ee61d4":nn(()=>N(()=>import("./02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html.c7858432.js"),[])),"v-58fa6412":nn(()=>N(()=>import("./04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html.48ee64c8.js"),[])),"v-32fefc11":nn(()=>N(()=>import("./05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html.59999273.js"),[])),"v-dc317c26":nn(()=>N(()=>import("./06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html.8b573d35.js"),[])),"v-9bca98a2":nn(()=>N(()=>import("./07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html.f8852d8d.js"),[])),"v-8b841460":nn(()=>N(()=>import("./08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html.e051e231.js"),[])),"v-fffb8e28":nn(()=>N(()=>import("./index.html.3f6997e3.js"),[])),"v-97b2979a":nn(()=>N(()=>import("./index.html.f6f19107.js"),[])),"v-75214906":nn(()=>N(()=>import("./index.html.e08b8a41.js"),[])),"v-32534572":nn(()=>N(()=>import("./index.html.5e70a28a.js"),[])),"v-fddb37fc":nn(()=>N(()=>import("./chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html.9ad9d48d.js"),[])),"v-25f11cb1":nn(()=>N(()=>import("./clone\u514B\u9686\u6570\u7EC4.html.77c73f53.js"),[])),"v-8b67f006":nn(()=>N(()=>import("./compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html.99e78bde.js"),[])),"v-4932aafa":nn(()=>N(()=>import("./difference\u6570\u7EC4\u5DEE\u96C6.html.51172eb0.js"),[])),"v-88ad7930":nn(()=>N(()=>import("./flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html.d2ae8bbc.js"),[])),"v-7c143142":nn(()=>N(()=>import("./flatten\u6241\u5E73\u5316\u6570\u7EC4.html.d6685bc2.js"),[])),"v-0ba4ebd2":nn(()=>N(()=>import("./intersection\u6570\u7EC4\u4EA4\u96C6.html.420de28d.js"),[])),"v-d03a9252":nn(()=>N(()=>import("./isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html.b1d7fc37.js"),[])),"v-0236c666":nn(()=>N(()=>import("./isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html.5aba9905.js"),[])),"v-3757be0e":nn(()=>N(()=>import("./max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.6c017c5b.js"),[])),"v-62425f40":nn(()=>N(()=>import("./min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.02c1619f.js"),[])),"v-c2c943f6":nn(()=>N(()=>import("./shuffle\u6253\u4E71\u6570\u7EC4.html.3ef5dede.js"),[])),"v-9dd956a8":nn(()=>N(()=>import("./sortAsc\u6570\u7EC4\u5347\u5E8F.html.3bad938c.js"),[])),"v-f9f1525a":nn(()=>N(()=>import("./sortDesc\u6570\u7EC4\u964D\u5E8F.html.fbab6817.js"),[])),"v-a5a655f4":nn(()=>N(()=>import("./takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html.2a89a97d.js"),[])),"v-669d4826":nn(()=>N(()=>import("./take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html.7ed91d9b.js"),[])),"v-61944058":nn(()=>N(()=>import("./treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html.81619bea.js"),[])),"v-283754ae":nn(()=>N(()=>import("./uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html.a77b4260.js"),[])),"v-35feaa32":nn(()=>N(()=>import("./unique\u6570\u7EC4\u53BB\u91CD.html.b599b668.js"),[])),"v-dff60d86":nn(()=>N(()=>import("./calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html.b5b7b776.js"),[])),"v-97ceeb80":nn(()=>N(()=>import("./debounce\u51FD\u6570\u9632\u6296.html.4f0614e0.js"),[])),"v-5150c06c":nn(()=>N(()=>import("./throttle\u51FD\u6570\u8282\u6D41.html.bd480f69.js"),[])),"v-3999ae18":nn(()=>N(()=>import("./typeFn\u7C7B\u578B\u5224\u65AD.html.0af483d6.js"),[])),"v-770db0d6":nn(()=>N(()=>import("./aboutEqual\u7EA6\u7B49\u4E8E.html.86f306b4.js"),[])),"v-47982a42":nn(()=>N(()=>import("./averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html.615986a0.js"),[])),"v-4349dc68":nn(()=>N(()=>import("./average\u6C42\u5E73\u5747\u503C.html.ab8710cf.js"),[])),"v-0a24fb2c":nn(()=>N(()=>import("./getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html.6aa609c7.js"),[])),"v-1cf95226":nn(()=>N(()=>import("./randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html.88b619cc.js"),[])),"v-f61ebce8":nn(()=>N(()=>import("./sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html.82042513.js"),[])),"v-0b42a652":nn(()=>N(()=>import("./padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html.b14c3783.js"),[])),"v-3ddd3670":nn(()=>N(()=>import("./padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html.d2e53d96.js"),[])),"v-073e1400":nn(()=>N(()=>import("./thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html.2d20d171.js"),[])),"v-3706649a":nn(()=>N(()=>import("./404.html.7ec1535d.js"),[]))},Ui={404:nn(()=>N(()=>import("./404.b0b92ffb.js"),[])),Layout:nn(()=>N(()=>import("./Layout.91f70143.js"),["assets/Layout.91f70143.js","assets/_commonjsHelpers.b8add541.js"]))};var El=rn(cc),Bl=As({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),ds=rn(Bl),La=()=>ds;xe.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=n=>{El.value[n.key]=()=>Promise.resolve(n),n.key===ds.value.key&&(ds.value=n)});var wl=Symbol(""),ye=()=>{const n=Nn(wl);if(!n)throw new Error("usePageFrontmatter() is called without provider.");return n},Al=Symbol(""),Zi=()=>{const n=Nn(Al);if(!n)throw new Error("usePageHead() is called without provider.");return n},Yi=Symbol(""),xl=Symbol(""),Cl=()=>{const n=Nn(xl);if(!n)throw new Error("usePageLang() is called without provider.");return n},Pt=Symbol(""),Dt=()=>{const n=Nn(Pt);if(!n)throw new Error("useRouteLocale() is called without provider.");return n},xs=rn(Mi),Wi=()=>xs;xe.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=n=>{xs.value=n});var Sl=Symbol(""),Xk=()=>{const n=Nn(Sl);if(!n)throw new Error("useSiteLocaleData() is called without provider.");return n},Ji=Symbol(""),Is=ca({resolvePageData:async n=>{const s=El.value[n],a=await(s==null?void 0:s());return a!=null?a:Bl},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,s,a)=>{const e=Bn(s.description)?s.description:a.description,t=[...sn(s.head)?s.head:[],...a.head,["title",{},n],["meta",{name:"description",content:e}]];return qi(t)},resolvePageHeadTitle:(n,s)=>`${n.title?`${n.title} | `:""}${s.title}`,resolvePageLang:n=>n.lang||"en",resolveRouteLocale:(n,s)=>bl(n,s),resolveSiteLocaleData:(n,s)=>({...n,...n.locales[s]})}),Tt=_n({name:"ClientOnly",setup(n,s){const a=rn(!1);return In(()=>{a.value=!0}),()=>{var e,t;return a.value?(t=(e=s.slots).default)==null?void 0:t.call(e):null}}}),Qi=_n({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(n){const s=La(),a=en(()=>yl[n.pageKey||s.value.key]);return()=>a.value?H(a.value):H("div","404 Not Found")}}),Co=_n({name:"Vuepress",setup(){const n=La(),s=en(()=>{let a;if(n.value.path){const e=n.value.frontmatter.layout;Bn(e)?a=e:a="Layout"}else a="404";return Ui[a]||Cr(a,!1)});return()=>H(s.value)}}),Gi=n=>Vi(n)?n:`${Wi().value.base}${Ki(n)}`,$n=n=>n;function _l(n,s,a){var e,t,o;s===void 0&&(s=50),a===void 0&&(a={});var p=(e=a.isImmediate)!=null&&e,l=(t=a.callback)!=null&&t,c=a.maxWait,r=Date.now(),i=[];function d(){if(c!==void 0){var u=Date.now()-r;if(u+s>=c)return c-u}return s}var k=function(){var u=[].slice.call(arguments),b=this;return new Promise(function(B,A){var h=p&&o===void 0;if(o!==void 0&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,r=Date.now(),!p){var x=n.apply(b,u);l&&l(x),i.forEach(function(D){return(0,D.resolve)(x)}),i=[]}},d()),h){var y=n.apply(b,u);return l&&l(y),B(y)}i.push({resolve:B,reject:A})})};return k.cancel=function(u){o!==void 0&&clearTimeout(o),i.forEach(function(b){return(0,b.reject)(u)}),i=[]},k}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qs=typeof window!="undefined";function Xi(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const yn=Object.assign;function Te(n,s){const a={};for(const e in s){const t=s[e];a[e]=es(t)?t.map(n):n(t)}return a}const Ea=()=>{},es=Array.isArray,nu=/\/$/,su=n=>n.replace(nu,"");function Ie(n,s,a="/"){let e,t={},o="",p="";const l=s.indexOf("#");let c=s.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(e=s.slice(0,c),o=s.slice(c+1,l>-1?l:s.length),t=n(o)),l>-1&&(e=e||s.slice(0,l),p=s.slice(l,s.length)),e=ou(e!=null?e:s,a),{fullPath:e+(o&&"?")+o+p,path:e,query:t,hash:p}}function au(n,s){const a=s.query?n(s.query):"";return s.path+(a&&"?")+a+(s.hash||"")}function So(n,s){return!s||!n.toLowerCase().startsWith(s.toLowerCase())?n:n.slice(s.length)||"/"}function eu(n,s,a){const e=s.matched.length-1,t=a.matched.length-1;return e>-1&&e===t&&ta(s.matched[e],a.matched[t])&&jl(s.params,a.params)&&n(s.query)===n(a.query)&&s.hash===a.hash}function ta(n,s){return(n.aliasOf||n)===(s.aliasOf||s)}function jl(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(const a in n)if(!tu(n[a],s[a]))return!1;return!0}function tu(n,s){return es(n)?_o(n,s):es(s)?_o(s,n):n===s}function _o(n,s){return es(s)?n.length===s.length&&n.every((a,e)=>a===s[e]):n.length===1&&n[0]===s}function ou(n,s){if(n.startsWith("/"))return n;if(!n)return s;const a=s.split("/"),e=n.split("/");let t=a.length-1,o,p;for(o=0;o<e.length;o++)if(p=e[o],p!==".")if(p==="..")t>1&&t--;else break;return a.slice(0,t).join("/")+"/"+e.slice(o-(o===e.length?1:0)).join("/")}var Na;(function(n){n.pop="pop",n.push="push"})(Na||(Na={}));var Ba;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ba||(Ba={}));function pu(n){if(!n)if(Qs){const s=document.querySelector("base");n=s&&s.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),su(n)}const lu=/^[^#]+#/;function cu(n,s){return n.replace(lu,"#")+s}function ru(n,s){const a=document.documentElement.getBoundingClientRect(),e=n.getBoundingClientRect();return{behavior:s.behavior,left:e.left-a.left-(s.left||0),top:e.top-a.top-(s.top||0)}}const Ee=()=>({left:window.pageXOffset,top:window.pageYOffset});function iu(n){let s;if("el"in n){const a=n.el,e=typeof a=="string"&&a.startsWith("#"),t=typeof a=="string"?e?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!t)return;s=ru(t,n)}else s=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function jo(n,s){return(history.state?history.state.position-s:-1)+n}const tt=new Map;function uu(n,s){tt.set(n,s)}function du(n){const s=tt.get(n);return tt.delete(n),s}let mu=()=>location.protocol+"//"+location.host;function Fl(n,s){const{pathname:a,search:e,hash:t}=s,o=n.indexOf("#");if(o>-1){let l=t.includes(n.slice(o))?n.slice(o).length:1,c=t.slice(l);return c[0]!=="/"&&(c="/"+c),So(c,"")}return So(a,n)+e+t}function ku(n,s,a,e){let t=[],o=[],p=null;const l=({state:k})=>{const u=Fl(n,location),b=a.value,B=s.value;let A=0;if(k){if(a.value=u,s.value=k,p&&p===b){p=null;return}A=B?k.position-B.position:0}else e(u);t.forEach(h=>{h(a.value,b,{delta:A,type:Na.pop,direction:A?A>0?Ba.forward:Ba.back:Ba.unknown})})};function c(){p=a.value}function r(k){t.push(k);const u=()=>{const b=t.indexOf(k);b>-1&&t.splice(b,1)};return o.push(u),u}function i(){const{history:k}=window;!k.state||k.replaceState(yn({},k.state,{scroll:Ee()}),"")}function d(){for(const k of o)k();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",i)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",i),{pauseListeners:c,listen:r,destroy:d}}function Fo(n,s,a,e=!1,t=!1){return{back:n,current:s,forward:a,replaced:e,position:window.history.length,scroll:t?Ee():null}}function vu(n){const{history:s,location:a}=window,e={value:Fl(n,a)},t={value:s.state};t.value||o(e.value,{back:null,current:e.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function o(c,r,i){const d=n.indexOf("#"),k=d>-1?(a.host&&document.querySelector("base")?n:n.slice(d))+c:mu()+n+c;try{s[i?"replaceState":"pushState"](r,"",k),t.value=r}catch(u){console.error(u),a[i?"replace":"assign"](k)}}function p(c,r){const i=yn({},s.state,Fo(t.value.back,c,t.value.forward,!0),r,{position:t.value.position});o(c,i,!0),e.value=c}function l(c,r){const i=yn({},t.value,s.state,{forward:c,scroll:Ee()});o(i.current,i,!0);const d=yn({},Fo(e.value,c,null),{position:i.position+1},r);o(c,d,!1),e.value=c}return{location:e,state:t,push:l,replace:p}}function hu(n){n=pu(n);const s=vu(n),a=ku(n,s.state,s.location,s.replace);function e(o,p=!0){p||a.pauseListeners(),history.go(o)}const t=yn({location:"",base:n,go:e,createHref:cu.bind(null,n)},s,a);return Object.defineProperty(t,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(t,"state",{enumerable:!0,get:()=>s.state.value}),t}function gu(n){return typeof n=="string"||n&&typeof n=="object"}function Nl(n){return typeof n=="string"||typeof n=="symbol"}const cs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pl=Symbol("");var No;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(No||(No={}));function oa(n,s){return yn(new Error,{type:n,[Pl]:!0},s)}function bs(n,s){return n instanceof Error&&Pl in n&&(s==null||!!(n.type&s))}const Po="[^/]+?",fu={sensitive:!1,strict:!1,start:!0,end:!0},bu=/[.+*?^${}()[\]/\\]/g;function yu(n,s){const a=yn({},fu,s),e=[];let t=a.start?"^":"";const o=[];for(const r of n){const i=r.length?[]:[90];a.strict&&!r.length&&(t+="/");for(let d=0;d<r.length;d++){const k=r[d];let u=40+(a.sensitive?.25:0);if(k.type===0)d||(t+="/"),t+=k.value.replace(bu,"\\$&"),u+=40;else if(k.type===1){const{value:b,repeatable:B,optional:A,regexp:h}=k;o.push({name:b,repeatable:B,optional:A});const y=h||Po;if(y!==Po){u+=10;try{new RegExp(`(${y})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${b}" (${y}): `+D.message)}}let x=B?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;d||(x=A&&r.length<2?`(?:/${x})`:"/"+x),A&&(x+="?"),t+=x,u+=20,A&&(u+=-8),B&&(u+=-20),y===".*"&&(u+=-50)}i.push(u)}e.push(i)}if(a.strict&&a.end){const r=e.length-1;e[r][e[r].length-1]+=.7000000000000001}a.strict||(t+="/?"),a.end?t+="$":a.strict&&(t+="(?:/|$)");const p=new RegExp(t,a.sensitive?"":"i");function l(r){const i=r.match(p),d={};if(!i)return null;for(let k=1;k<i.length;k++){const u=i[k]||"",b=o[k-1];d[b.name]=u&&b.repeatable?u.split("/"):u}return d}function c(r){let i="",d=!1;for(const k of n){(!d||!i.endsWith("/"))&&(i+="/"),d=!1;for(const u of k)if(u.type===0)i+=u.value;else if(u.type===1){const{value:b,repeatable:B,optional:A}=u,h=b in r?r[b]:"";if(es(h)&&!B)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const y=es(h)?h.join("/"):h;if(!y)if(A)k.length<2&&n.length>1&&(i.endsWith("/")?i=i.slice(0,-1):d=!0);else throw new Error(`Missing required param "${b}"`);i+=y}}return i}return{re:p,score:e,keys:o,parse:l,stringify:c}}function Eu(n,s){let a=0;for(;a<n.length&&a<s.length;){const e=s[a]-n[a];if(e)return e;a++}return n.length<s.length?n.length===1&&n[0]===40+40?-1:1:n.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function Bu(n,s){let a=0;const e=n.score,t=s.score;for(;a<e.length&&a<t.length;){const o=Eu(e[a],t[a]);if(o)return o;a++}if(Math.abs(t.length-e.length)===1){if(Do(e))return 1;if(Do(t))return-1}return t.length-e.length}function Do(n){const s=n[n.length-1];return n.length>0&&s[s.length-1]<0}const wu={type:0,value:""},Au=/[a-zA-Z0-9_]/;function xu(n){if(!n)return[[]];if(n==="/")return[[wu]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function s(u){throw new Error(`ERR (${a})/"${r}": ${u}`)}let a=0,e=a;const t=[];let o;function p(){o&&t.push(o),o=[]}let l=0,c,r="",i="";function d(){!r||(a===0?o.push({type:0,value:r}):a===1||a===2||a===3?(o.length>1&&(c==="*"||c==="+")&&s(`A repeatable param (${r}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:r,regexp:i,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):s("Invalid state to consume buffer"),r="")}function k(){r+=c}for(;l<n.length;){if(c=n[l++],c==="\\"&&a!==2){e=a,a=4;continue}switch(a){case 0:c==="/"?(r&&d(),p()):c===":"?(d(),a=1):k();break;case 4:k(),a=e;break;case 1:c==="("?a=2:Au.test(c)?k():(d(),a=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?i[i.length-1]=="\\"?i=i.slice(0,-1)+c:a=3:i+=c;break;case 3:d(),a=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,i="";break;default:s("Unknown state");break}}return a===2&&s(`Unfinished custom RegExp for param "${r}"`),d(),p(),t}function Cu(n,s,a){const e=yu(xu(n.path),a),t=yn(e,{record:n,parent:s,children:[],alias:[]});return s&&!t.record.aliasOf==!s.record.aliasOf&&s.children.push(t),t}function Su(n,s){const a=[],e=new Map;s=Io({strict:!1,end:!0,sensitive:!1},s);function t(i){return e.get(i)}function o(i,d,k){const u=!k,b=ju(i);b.aliasOf=k&&k.record;const B=Io(s,i),A=[b];if("alias"in i){const x=typeof i.alias=="string"?[i.alias]:i.alias;for(const D of x)A.push(yn({},b,{components:k?k.record.components:b.components,path:D,aliasOf:k?k.record:b}))}let h,y;for(const x of A){const{path:D}=x;if(d&&D[0]!=="/"){const q=d.record.path,O=q[q.length-1]==="/"?"":"/";x.path=d.record.path+(D&&O+D)}if(h=Cu(x,d,B),k?k.alias.push(h):(y=y||h,y!==h&&y.alias.push(h),u&&i.name&&!To(h)&&p(i.name)),b.children){const q=b.children;for(let O=0;O<q.length;O++)o(q[O],h,k&&k.children[O])}k=k||h,c(h)}return y?()=>{p(y)}:Ea}function p(i){if(Nl(i)){const d=e.get(i);d&&(e.delete(i),a.splice(a.indexOf(d),1),d.children.forEach(p),d.alias.forEach(p))}else{const d=a.indexOf(i);d>-1&&(a.splice(d,1),i.record.name&&e.delete(i.record.name),i.children.forEach(p),i.alias.forEach(p))}}function l(){return a}function c(i){let d=0;for(;d<a.length&&Bu(i,a[d])>=0&&(i.record.path!==a[d].record.path||!Dl(i,a[d]));)d++;a.splice(d,0,i),i.record.name&&!To(i)&&e.set(i.record.name,i)}function r(i,d){let k,u={},b,B;if("name"in i&&i.name){if(k=e.get(i.name),!k)throw oa(1,{location:i});B=k.record.name,u=yn(_u(d.params,k.keys.filter(y=>!y.optional).map(y=>y.name)),i.params),b=k.stringify(u)}else if("path"in i)b=i.path,k=a.find(y=>y.re.test(b)),k&&(u=k.parse(b),B=k.record.name);else{if(k=d.name?e.get(d.name):a.find(y=>y.re.test(d.path)),!k)throw oa(1,{location:i,currentLocation:d});B=k.record.name,u=yn({},d.params,i.params),b=k.stringify(u)}const A=[];let h=k;for(;h;)A.unshift(h.record),h=h.parent;return{name:B,path:b,params:u,matched:A,meta:Nu(A)}}return n.forEach(i=>o(i)),{addRoute:o,resolve:r,removeRoute:p,getRoutes:l,getRecordMatcher:t}}function _u(n,s){const a={};for(const e of s)e in n&&(a[e]=n[e]);return a}function ju(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Fu(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Fu(n){const s={},a=n.props||!1;if("component"in n)s.default=a;else for(const e in n.components)s[e]=typeof a=="boolean"?a:a[e];return s}function To(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Nu(n){return n.reduce((s,a)=>yn(s,a.meta),{})}function Io(n,s){const a={};for(const e in n)a[e]=e in s?s[e]:n[e];return a}function Dl(n,s){return s.children.some(a=>a===n||Dl(n,a))}const Tl=/#/g,Pu=/&/g,Du=/\//g,Tu=/=/g,Iu=/\?/g,Il=/\+/g,Lu=/%5B/g,Ru=/%5D/g,Ll=/%5E/g,$u=/%60/g,Rl=/%7B/g,Ou=/%7C/g,$l=/%7D/g,Mu=/%20/g;function It(n){return encodeURI(""+n).replace(Ou,"|").replace(Lu,"[").replace(Ru,"]")}function zu(n){return It(n).replace(Rl,"{").replace($l,"}").replace(Ll,"^")}function ot(n){return It(n).replace(Il,"%2B").replace(Mu,"+").replace(Tl,"%23").replace(Pu,"%26").replace($u,"`").replace(Rl,"{").replace($l,"}").replace(Ll,"^")}function qu(n){return ot(n).replace(Tu,"%3D")}function Vu(n){return It(n).replace(Tl,"%23").replace(Iu,"%3F")}function Hu(n){return n==null?"":Vu(n).replace(Du,"%2F")}function le(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Ku(n){const s={};if(n===""||n==="?")return s;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let t=0;t<e.length;++t){const o=e[t].replace(Il," "),p=o.indexOf("="),l=le(p<0?o:o.slice(0,p)),c=p<0?null:le(o.slice(p+1));if(l in s){let r=s[l];es(r)||(r=s[l]=[r]),r.push(c)}else s[l]=c}return s}function Lo(n){let s="";for(let a in n){const e=n[a];if(a=qu(a),e==null){e!==void 0&&(s+=(s.length?"&":"")+a);continue}(es(e)?e.map(o=>o&&ot(o)):[e&&ot(e)]).forEach(o=>{o!==void 0&&(s+=(s.length?"&":"")+a,o!=null&&(s+="="+o))})}return s}function Uu(n){const s={};for(const a in n){const e=n[a];e!==void 0&&(s[a]=es(e)?e.map(t=>t==null?null:""+t):e==null?e:""+e)}return s}const Zu=Symbol(""),Ro=Symbol(""),Be=Symbol(""),Lt=Symbol(""),pt=Symbol("");function da(){let n=[];function s(e){return n.push(e),()=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)}}function a(){n=[]}return{add:s,list:()=>n,reset:a}}function ws(n,s,a,e,t){const o=e&&(e.enterCallbacks[t]=e.enterCallbacks[t]||[]);return()=>new Promise((p,l)=>{const c=d=>{d===!1?l(oa(4,{from:a,to:s})):d instanceof Error?l(d):gu(d)?l(oa(2,{from:s,to:d})):(o&&e.enterCallbacks[t]===o&&typeof d=="function"&&o.push(d),p())},r=n.call(e&&e.instances[t],s,a,c);let i=Promise.resolve(r);n.length<3&&(i=i.then(c)),i.catch(d=>l(d))})}function Le(n,s,a,e){const t=[];for(const o of n)for(const p in o.components){let l=o.components[p];if(!(s!=="beforeRouteEnter"&&!o.instances[p]))if(Yu(l)){const r=(l.__vccOpts||l)[s];r&&t.push(ws(r,a,e,o,p))}else{let c=l();t.push(()=>c.then(r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${o.path}"`));const i=Xi(r)?r.default:r;o.components[p]=i;const k=(i.__vccOpts||i)[s];return k&&ws(k,a,e,o,p)()}))}}return t}function Yu(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function $o(n){const s=Nn(Be),a=Nn(Lt),e=en(()=>s.resolve(as(n.to))),t=en(()=>{const{matched:c}=e.value,{length:r}=c,i=c[r-1],d=a.matched;if(!i||!d.length)return-1;const k=d.findIndex(ta.bind(null,i));if(k>-1)return k;const u=Oo(c[r-2]);return r>1&&Oo(i)===u&&d[d.length-1].path!==u?d.findIndex(ta.bind(null,c[r-2])):k}),o=en(()=>t.value>-1&&Gu(a.params,e.value.params)),p=en(()=>t.value>-1&&t.value===a.matched.length-1&&jl(a.params,e.value.params));function l(c={}){return Qu(c)?s[as(n.replace)?"replace":"push"](as(n.to)).catch(Ea):Promise.resolve()}return{route:e,href:en(()=>e.value.href),isActive:o,isExactActive:p,navigate:l}}const Wu=_n({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$o,setup(n,{slots:s}){const a=ca($o(n)),{options:e}=Nn(Be),t=en(()=>({[Mo(n.activeClass,e.linkActiveClass,"router-link-active")]:a.isActive,[Mo(n.exactActiveClass,e.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const o=s.default&&s.default(a);return n.custom?o:H("a",{"aria-current":a.isExactActive?n.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:t.value},o)}}}),Ju=Wu;function Qu(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const s=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return n.preventDefault&&n.preventDefault(),!0}}function Gu(n,s){for(const a in s){const e=s[a],t=n[a];if(typeof e=="string"){if(e!==t)return!1}else if(!es(t)||t.length!==e.length||e.some((o,p)=>o!==t[p]))return!1}return!0}function Oo(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Mo=(n,s,a)=>n!=null?n:s!=null?s:a,Xu=_n({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:s,slots:a}){const e=Nn(pt),t=en(()=>n.route||e.value),o=Nn(Ro,0),p=en(()=>{let r=as(o);const{matched:i}=t.value;let d;for(;(d=i[r])&&!d.components;)r++;return r}),l=en(()=>t.value.matched[p.value]);Yn(Ro,en(()=>p.value+1)),Yn(Zu,l),Yn(pt,t);const c=rn();return Vn(()=>[c.value,l.value,n.name],([r,i,d],[k,u,b])=>{i&&(i.instances[d]=r,u&&u!==i&&r&&r===k&&(i.leaveGuards.size||(i.leaveGuards=u.leaveGuards),i.updateGuards.size||(i.updateGuards=u.updateGuards))),r&&i&&(!u||!ta(i,u)||!k)&&(i.enterCallbacks[d]||[]).forEach(B=>B(r))},{flush:"post"}),()=>{const r=t.value,i=l.value,d=i&&i.components[n.name],k=n.name;if(!d)return zo(a.default,{Component:d,route:r});const u=i.props[n.name],b=u?u===!0?r.params:typeof u=="function"?u(r):u:null,A=H(d,yn({},b,s,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(i.instances[k]=null)},ref:c}));return zo(a.default,{Component:A,route:r})||A}}});function zo(n,s){if(!n)return null;const a=n(s);return a.length===1?a[0]:a}const Ol=Xu;function nd(n){const s=Su(n.routes,n),a=n.parseQuery||Ku,e=n.stringifyQuery||Lo,t=n.history,o=da(),p=da(),l=da(),c=Np(cs);let r=cs;Qs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const i=Te.bind(null,S=>""+S),d=Te.bind(null,Hu),k=Te.bind(null,le);function u(S,W){let L,K;return Nl(S)?(L=s.getRecordMatcher(S),K=W):K=S,s.addRoute(K,L)}function b(S){const W=s.getRecordMatcher(S);W&&s.removeRoute(W)}function B(){return s.getRoutes().map(S=>S.record)}function A(S){return!!s.getRecordMatcher(S)}function h(S,W){if(W=yn({},W||c.value),typeof S=="string"){const tn=Ie(a,S,W.path),m=s.resolve({path:tn.path},W),v=t.createHref(tn.fullPath);return yn(tn,m,{params:k(m.params),hash:le(tn.hash),redirectedFrom:void 0,href:v})}let L;if("path"in S)L=yn({},S,{path:Ie(a,S.path,W.path).path});else{const tn=yn({},S.params);for(const m in tn)tn[m]==null&&delete tn[m];L=yn({},S,{params:d(S.params)}),W.params=d(W.params)}const K=s.resolve(L,W),dn=S.hash||"";K.params=i(k(K.params));const mn=au(e,yn({},S,{hash:zu(dn),path:K.path})),ln=t.createHref(mn);return yn({fullPath:mn,hash:dn,query:e===Lo?Uu(S.query):S.query||{}},K,{redirectedFrom:void 0,href:ln})}function y(S){return typeof S=="string"?Ie(a,S,c.value.path):yn({},S)}function x(S,W){if(r!==S)return oa(8,{from:W,to:S})}function D(S){return _(S)}function q(S){return D(yn(y(S),{replace:!0}))}function O(S){const W=S.matched[S.matched.length-1];if(W&&W.redirect){const{redirect:L}=W;let K=typeof L=="function"?L(S):L;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=y(K):{path:K},K.params={}),yn({query:S.query,hash:S.hash,params:"path"in K?{}:S.params},K)}}function _(S,W){const L=r=h(S),K=c.value,dn=S.state,mn=S.force,ln=S.replace===!0,tn=O(L);if(tn)return _(yn(y(tn),{state:dn,force:mn,replace:ln}),W||L);const m=L;m.redirectedFrom=W;let v;return!mn&&eu(e,K,L)&&(v=oa(16,{to:m,from:K}),cn(K,K,!0,!1)),(v?Promise.resolve(v):J(m,K)).catch(w=>bs(w)?bs(w,2)?w:pn(w):M(w,m,K)).then(w=>{if(w){if(bs(w,2))return _(yn(y(w.to),{state:dn,force:mn,replace:ln}),W||m)}else w=I(m,K,!0,ln,dn);return Z(m,K,w),w})}function g(S,W){const L=x(S,W);return L?Promise.reject(L):Promise.resolve()}function J(S,W){let L;const[K,dn,mn]=sd(S,W);L=Le(K.reverse(),"beforeRouteLeave",S,W);for(const tn of K)tn.leaveGuards.forEach(m=>{L.push(ws(m,S,W))});const ln=g.bind(null,S,W);return L.push(ln),Ks(L).then(()=>{L=[];for(const tn of o.list())L.push(ws(tn,S,W));return L.push(ln),Ks(L)}).then(()=>{L=Le(dn,"beforeRouteUpdate",S,W);for(const tn of dn)tn.updateGuards.forEach(m=>{L.push(ws(m,S,W))});return L.push(ln),Ks(L)}).then(()=>{L=[];for(const tn of S.matched)if(tn.beforeEnter&&!W.matched.includes(tn))if(es(tn.beforeEnter))for(const m of tn.beforeEnter)L.push(ws(m,S,W));else L.push(ws(tn.beforeEnter,S,W));return L.push(ln),Ks(L)}).then(()=>(S.matched.forEach(tn=>tn.enterCallbacks={}),L=Le(mn,"beforeRouteEnter",S,W),L.push(ln),Ks(L))).then(()=>{L=[];for(const tn of p.list())L.push(ws(tn,S,W));return L.push(ln),Ks(L)}).catch(tn=>bs(tn,8)?tn:Promise.reject(tn))}function Z(S,W,L){for(const K of l.list())K(S,W,L)}function I(S,W,L,K,dn){const mn=x(S,W);if(mn)return mn;const ln=W===cs,tn=Qs?history.state:{};L&&(K||ln?t.replace(S.fullPath,yn({scroll:ln&&tn&&tn.scroll},dn)):t.push(S.fullPath,dn)),c.value=S,cn(S,W,L,ln),pn()}let f;function E(){f||(f=t.listen((S,W,L)=>{if(!On.listening)return;const K=h(S),dn=O(K);if(dn){_(yn(dn,{replace:!0}),K).catch(Ea);return}r=K;const mn=c.value;Qs&&uu(jo(mn.fullPath,L.delta),Ee()),J(K,mn).catch(ln=>bs(ln,12)?ln:bs(ln,2)?(_(ln.to,K).then(tn=>{bs(tn,20)&&!L.delta&&L.type===Na.pop&&t.go(-1,!1)}).catch(Ea),Promise.reject()):(L.delta&&t.go(-L.delta,!1),M(ln,K,mn))).then(ln=>{ln=ln||I(K,mn,!1),ln&&(L.delta?t.go(-L.delta,!1):L.type===Na.pop&&bs(ln,20)&&t.go(-1,!1)),Z(K,mn,ln)}).catch(Ea)}))}let C=da(),F=da(),j;function M(S,W,L){pn(S);const K=F.list();return K.length?K.forEach(dn=>dn(S,W,L)):console.error(S),Promise.reject(S)}function Y(){return j&&c.value!==cs?Promise.resolve():new Promise((S,W)=>{C.add([S,W])})}function pn(S){return j||(j=!S,E(),C.list().forEach(([W,L])=>S?L(S):W()),C.reset()),S}function cn(S,W,L,K){const{scrollBehavior:dn}=n;if(!Qs||!dn)return Promise.resolve();const mn=!L&&du(jo(S.fullPath,0))||(K||!L)&&history.state&&history.state.scroll||null;return wt().then(()=>dn(S,W,mn)).then(ln=>ln&&iu(ln)).catch(ln=>M(ln,S,W))}const gn=S=>t.go(S);let Cn;const An=new Set,On={currentRoute:c,listening:!0,addRoute:u,removeRoute:b,hasRoute:A,getRoutes:B,resolve:h,options:n,push:D,replace:q,go:gn,back:()=>gn(-1),forward:()=>gn(1),beforeEach:o.add,beforeResolve:p.add,afterEach:l.add,onError:F.add,isReady:Y,install(S){const W=this;S.component("RouterLink",Ju),S.component("RouterView",Ol),S.config.globalProperties.$router=W,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>as(c)}),Qs&&!Cn&&c.value===cs&&(Cn=!0,D(t.location).catch(dn=>{}));const L={};for(const dn in cs)L[dn]=en(()=>c.value[dn]);S.provide(Be,W),S.provide(Lt,ca(L)),S.provide(pt,c);const K=S.unmount;An.add(S),S.unmount=function(){An.delete(S),An.size<1&&(r=cs,f&&f(),f=null,c.value=cs,Cn=!1,j=!1),K()}}};return On}function Ks(n){return n.reduce((s,a)=>s.then(()=>a()),Promise.resolve())}function sd(n,s){const a=[],e=[],t=[],o=Math.max(s.matched.length,n.matched.length);for(let p=0;p<o;p++){const l=s.matched[p];l&&(n.matched.find(r=>ta(r,l))?e.push(l):a.push(l));const c=n.matched[p];c&&(s.matched.find(r=>ta(r,c))||t.push(c))}return[a,e,t]}function we(){return Nn(Be)}function Ra(){return Nn(Lt)}const ad=({headerLinkSelector:n,headerAnchorSelector:s,delay:a,offset:e=5})=>{const t=we(),o=La(),l=_l(()=>{var A,h,y,x;const c=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(c-0)<e){qo(t,{hash:"",force:!0});return}const i=window.innerHeight+c,d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),k=Math.abs(d-i)<e,u=Array.from(document.querySelectorAll(n)),B=Array.from(document.querySelectorAll(s)).filter(D=>u.some(q=>q.hash===D.hash));for(let D=0;D<B.length;D++){const q=B[D],O=B[D+1],_=c>=((h=(A=q.parentElement)==null?void 0:A.offsetTop)!=null?h:0)-e,g=!O||c<((x=(y=O.parentElement)==null?void 0:y.offsetTop)!=null?x:0)-e;if(!(_&&g))continue;const Z=decodeURIComponent(t.currentRoute.value.hash),I=decodeURIComponent(q.hash);if(Z===I)return;if(k){for(let f=D+1;f<B.length;f++)if(Z===decodeURIComponent(B[f].hash))return}qo(t,{hash:I,force:!0});return}},a);In(()=>{l(),window.addEventListener("scroll",l)}),Ia(()=>{window.removeEventListener("scroll",l)}),Vn(()=>o.value.path,l)},qo=async(n,...s)=>{const{scrollBehavior:a}=n.options;n.options.scrollBehavior=void 0,await n.replace(...s).finally(()=>n.options.scrollBehavior=a)},ed="a.sidebar-item",td=".header-anchor",od=300,pd=5;var ld=$n({setup(){ad({headerLinkSelector:ed,headerAnchorSelector:td,delay:od,offset:pd})}});const Vo=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,cd=()=>window.scrollTo({top:0,behavior:"smooth"});const rd=_n({name:"BackToTop",setup(){const n=rn(0),s=en(()=>n.value>300),a=_l(()=>{n.value=Vo()},100);In(()=>{n.value=Vo(),window.addEventListener("scroll",()=>a())});const e=H("div",{class:"back-to-top",onClick:cd});return()=>H(Nt,{name:"back-to-top"},()=>s.value?e:null)}});var id=$n({rootComponents:[rd]});const ud=H("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[H("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),H("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),dd=_n({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(n){const s=Dt(),a=en(()=>{var e;return(e=n.locales[s.value])!=null?e:{openInNewWindow:"open in new window"}});return()=>H("span",[ud,H("span",{class:"external-link-icon-sr-only"},a.value.openInNewWindow)])}}),md={"/":{openInNewWindow:"open in new window"}};var kd=$n({enhance({app:n}){n.component("ExternalLinkIcon",H(dd,{locales:md}))}});/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */var Ls=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},Ua=function(s){return s.tagName==="IMG"},vd=function(s){return NodeList.prototype.isPrototypeOf(s)},Qa=function(s){return s&&s.nodeType===1},Ho=function(s){var a=s.currentSrc||s.src;return a.substr(-4).toLowerCase()===".svg"},Ko=function(s){try{return Array.isArray(s)?s.filter(Ua):vd(s)?[].slice.call(s).filter(Ua):Qa(s)?[s].filter(Ua):typeof s=="string"?[].slice.call(document.querySelectorAll(s)).filter(Ua):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},hd=function(s){var a=document.createElement("div");return a.classList.add("medium-zoom-overlay"),a.style.background=s,a},gd=function(s){var a=s.getBoundingClientRect(),e=a.top,t=a.left,o=a.width,p=a.height,l=s.cloneNode(),c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,r=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return l.removeAttribute("id"),l.style.position="absolute",l.style.top=e+c+"px",l.style.left=t+r+"px",l.style.width=o+"px",l.style.height=p+"px",l.style.transform="",l},Us=function(s,a){var e=Ls({bubbles:!1,cancelable:!1,detail:void 0},a);if(typeof window.CustomEvent=="function")return new CustomEvent(s,e);var t=document.createEvent("CustomEvent");return t.initCustomEvent(s,e.bubbles,e.cancelable,e.detail),t},fd=function n(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=window.Promise||function(f){function E(){}f(E,E)},t=function(f){var E=f.target;if(E===J){b();return}x.indexOf(E)!==-1&&B({target:E})},o=function(){if(!(q||!g.original)){var f=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(O-f)>_.scrollOffset&&setTimeout(b,150)}},p=function(f){var E=f.key||f.keyCode;(E==="Escape"||E==="Esc"||E===27)&&b()},l=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=f;if(f.background&&(J.style.background=f.background),f.container&&f.container instanceof Object&&(E.container=Ls({},_.container,f.container)),f.template){var C=Qa(f.template)?f.template:document.querySelector(f.template);E.template=C}return _=Ls({},_,E),x.forEach(function(F){F.dispatchEvent(Us("medium-zoom:update",{detail:{zoom:Z}}))}),Z},c=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n(Ls({},_,f))},r=function(){for(var f=arguments.length,E=Array(f),C=0;C<f;C++)E[C]=arguments[C];var F=E.reduce(function(j,M){return[].concat(j,Ko(M))},[]);return F.filter(function(j){return x.indexOf(j)===-1}).forEach(function(j){x.push(j),j.classList.add("medium-zoom-image")}),D.forEach(function(j){var M=j.type,Y=j.listener,pn=j.options;F.forEach(function(cn){cn.addEventListener(M,Y,pn)})}),Z},i=function(){for(var f=arguments.length,E=Array(f),C=0;C<f;C++)E[C]=arguments[C];g.zoomed&&b();var F=E.length>0?E.reduce(function(j,M){return[].concat(j,Ko(M))},[]):x;return F.forEach(function(j){j.classList.remove("medium-zoom-image"),j.dispatchEvent(Us("medium-zoom:detach",{detail:{zoom:Z}}))}),x=x.filter(function(j){return F.indexOf(j)===-1}),Z},d=function(f,E){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return x.forEach(function(F){F.addEventListener("medium-zoom:"+f,E,C)}),D.push({type:"medium-zoom:"+f,listener:E,options:C}),Z},k=function(f,E){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return x.forEach(function(F){F.removeEventListener("medium-zoom:"+f,E,C)}),D=D.filter(function(F){return!(F.type==="medium-zoom:"+f&&F.listener.toString()===E.toString())}),Z},u=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=f.target,C=function(){var j={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},M=void 0,Y=void 0;if(_.container)if(_.container instanceof Object)j=Ls({},j,_.container),M=j.width-j.left-j.right-_.margin*2,Y=j.height-j.top-j.bottom-_.margin*2;else{var pn=Qa(_.container)?_.container:document.querySelector(_.container),cn=pn.getBoundingClientRect(),gn=cn.width,Cn=cn.height,An=cn.left,On=cn.top;j=Ls({},j,{width:gn,height:Cn,left:An,top:On})}M=M||j.width-_.margin*2,Y=Y||j.height-_.margin*2;var S=g.zoomedHd||g.original,W=Ho(S)?M:S.naturalWidth||M,L=Ho(S)?Y:S.naturalHeight||Y,K=S.getBoundingClientRect(),dn=K.top,mn=K.left,ln=K.width,tn=K.height,m=Math.min(W,M)/ln,v=Math.min(L,Y)/tn,w=Math.min(m,v),T=(-mn+(M-ln)/2+_.margin+j.left)/w,P=(-dn+(Y-tn)/2+_.margin+j.top)/w,$="scale("+w+") translate3d("+T+"px, "+P+"px, 0)";g.zoomed.style.transform=$,g.zoomedHd&&(g.zoomedHd.style.transform=$)};return new e(function(F){if(E&&x.indexOf(E)===-1){F(Z);return}var j=function gn(){q=!1,g.zoomed.removeEventListener("transitionend",gn),g.original.dispatchEvent(Us("medium-zoom:opened",{detail:{zoom:Z}})),F(Z)};if(g.zoomed){F(Z);return}if(E)g.original=E;else if(x.length>0){var M=x;g.original=M[0]}else{F(Z);return}if(g.original.dispatchEvent(Us("medium-zoom:open",{detail:{zoom:Z}})),O=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,q=!0,g.zoomed=gd(g.original),document.body.appendChild(J),_.template){var Y=Qa(_.template)?_.template:document.querySelector(_.template);g.template=document.createElement("div"),g.template.appendChild(Y.content.cloneNode(!0)),document.body.appendChild(g.template)}if(document.body.appendChild(g.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),g.original.classList.add("medium-zoom-image--hidden"),g.zoomed.classList.add("medium-zoom-image--opened"),g.zoomed.addEventListener("click",b),g.zoomed.addEventListener("transitionend",j),g.original.getAttribute("data-zoom-src")){g.zoomedHd=g.zoomed.cloneNode(),g.zoomedHd.removeAttribute("srcset"),g.zoomedHd.removeAttribute("sizes"),g.zoomedHd.src=g.zoomed.getAttribute("data-zoom-src"),g.zoomedHd.onerror=function(){clearInterval(pn),console.warn("Unable to reach the zoom image target "+g.zoomedHd.src),g.zoomedHd=null,C()};var pn=setInterval(function(){g.zoomedHd.complete&&(clearInterval(pn),g.zoomedHd.classList.add("medium-zoom-image--opened"),g.zoomedHd.addEventListener("click",b),document.body.appendChild(g.zoomedHd),C())},10)}else if(g.original.hasAttribute("srcset")){g.zoomedHd=g.zoomed.cloneNode(),g.zoomedHd.removeAttribute("sizes"),g.zoomedHd.removeAttribute("loading");var cn=g.zoomedHd.addEventListener("load",function(){g.zoomedHd.removeEventListener("load",cn),g.zoomedHd.classList.add("medium-zoom-image--opened"),g.zoomedHd.addEventListener("click",b),document.body.appendChild(g.zoomedHd),C()})}else C()})},b=function(){return new e(function(f){if(q||!g.original){f(Z);return}var E=function C(){g.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(g.zoomed),g.zoomedHd&&document.body.removeChild(g.zoomedHd),document.body.removeChild(J),g.zoomed.classList.remove("medium-zoom-image--opened"),g.template&&document.body.removeChild(g.template),q=!1,g.zoomed.removeEventListener("transitionend",C),g.original.dispatchEvent(Us("medium-zoom:closed",{detail:{zoom:Z}})),g.original=null,g.zoomed=null,g.zoomedHd=null,g.template=null,f(Z)};q=!0,document.body.classList.remove("medium-zoom--opened"),g.zoomed.style.transform="",g.zoomedHd&&(g.zoomedHd.style.transform=""),g.template&&(g.template.style.transition="opacity 150ms",g.template.style.opacity=0),g.original.dispatchEvent(Us("medium-zoom:close",{detail:{zoom:Z}})),g.zoomed.addEventListener("transitionend",E)})},B=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=f.target;return g.original?b():u({target:E})},A=function(){return _},h=function(){return x},y=function(){return g.original},x=[],D=[],q=!1,O=0,_=a,g={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(s)==="[object Object]"?_=s:(s||typeof s=="string")&&r(s),_=Ls({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},_);var J=hd(_.background);document.addEventListener("click",t),document.addEventListener("keyup",p),document.addEventListener("scroll",o),window.addEventListener("resize",b);var Z={open:u,close:b,toggle:B,update:l,clone:c,attach:r,detach:i,on:d,off:k,getOptions:A,getImages:h,getZoomedImage:y};return Z};function bd(n,s){s===void 0&&(s={});var a=s.insertAt;if(!(!n||typeof document=="undefined")){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",a==="top"&&e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}}var yd=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";bd(yd);var Ed=fd;const Bd=Symbol("mediumZoom");const wd=".theme-default-content > img, .theme-default-content :not(a) > img",Ad={},xd=300;var Cd=$n({enhance({app:n,router:s}){const a=Ed(Ad);a.refresh=(e=wd)=>{a.detach(),a.attach(e)},n.provide(Bd,a),s.afterEach(()=>{setTimeout(()=>a.refresh(),xd)})}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const vn={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:n=>{const s=vn.isStarted();n=Re(n,vn.settings.minimum,1),vn.status=n===1?null:n;const a=vn.render(!s),e=a.querySelector(vn.settings.barSelector),t=vn.settings.speed,o=vn.settings.easing;return a.offsetWidth,Sd(p=>{Za(e,{transform:"translate3d("+Uo(n)+"%,0,0)",transition:"all "+t+"ms "+o}),n===1?(Za(a,{transition:"none",opacity:"1"}),a.offsetWidth,setTimeout(function(){Za(a,{transition:"all "+t+"ms linear",opacity:"0"}),setTimeout(function(){vn.remove(),p()},t)},t)):setTimeout(()=>p(),t)}),vn},isStarted:()=>typeof vn.status=="number",start:()=>{vn.status||vn.set(0);const n=()=>{setTimeout(()=>{!vn.status||(vn.trickle(),n())},vn.settings.trickleSpeed)};return vn.settings.trickle&&n(),vn},done:n=>!n&&!vn.status?vn:vn.inc(.3+.5*Math.random()).set(1),inc:n=>{let s=vn.status;return s?(typeof n!="number"&&(n=(1-s)*Re(Math.random()*s,.1,.95)),s=Re(s+n,0,.994),vn.set(s)):vn.start()},trickle:()=>vn.inc(Math.random()*vn.settings.trickleRate),render:n=>{if(vn.isRendered())return document.getElementById("nprogress");Zo(document.documentElement,"nprogress-busy");const s=document.createElement("div");s.id="nprogress",s.innerHTML=vn.settings.template;const a=s.querySelector(vn.settings.barSelector),e=n?"-100":Uo(vn.status||0),t=document.querySelector(vn.settings.parent);return Za(a,{transition:"all 0 linear",transform:"translate3d("+e+"%,0,0)"}),t!==document.body&&Zo(t,"nprogress-custom-parent"),t==null||t.appendChild(s),s},remove:()=>{Yo(document.documentElement,"nprogress-busy"),Yo(document.querySelector(vn.settings.parent),"nprogress-custom-parent");const n=document.getElementById("nprogress");n&&_d(n)},isRendered:()=>!!document.getElementById("nprogress")},Re=(n,s,a)=>n<s?s:n>a?a:n,Uo=n=>(-1+n)*100,Sd=function(){const n=[];function s(){const a=n.shift();a&&a(s)}return function(a){n.push(a),n.length===1&&s()}}(),Za=function(){const n=["Webkit","O","Moz","ms"],s={};function a(p){return p.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(l,c){return c.toUpperCase()})}function e(p){const l=document.body.style;if(p in l)return p;let c=n.length;const r=p.charAt(0).toUpperCase()+p.slice(1);let i;for(;c--;)if(i=n[c]+r,i in l)return i;return p}function t(p){return p=a(p),s[p]||(s[p]=e(p))}function o(p,l,c){l=t(l),p.style[l]=c}return function(p,l){for(const c in l){const r=l[c];r!==void 0&&Object.prototype.hasOwnProperty.call(l,c)&&o(p,c,r)}}}(),Ml=(n,s)=>(typeof n=="string"?n:Rt(n)).indexOf(" "+s+" ")>=0,Zo=(n,s)=>{const a=Rt(n),e=a+s;Ml(a,s)||(n.className=e.substring(1))},Yo=(n,s)=>{const a=Rt(n);if(!Ml(n,s))return;const e=a.replace(" "+s+" "," ");n.className=e.substring(1,e.length-1)},Rt=n=>(" "+(n.className||"")+" ").replace(/\s+/gi," "),_d=n=>{n&&n.parentNode&&n.parentNode.removeChild(n)};const jd=()=>{In(()=>{const n=we(),s=new Set;s.add(n.currentRoute.value.path),n.beforeEach(a=>{s.has(a.path)||vn.start()}),n.afterEach(a=>{s.add(a.path),vn.done()})})};var Fd=$n({setup(){jd()}});const Nd=JSON.parse(`{"navbar":[{"text":"\u5BFC\u822A\u9875","link":"/nav-page/","activeMatch":"^/nav-page/"},{"text":"\u6307\u5357","link":"/guide/","activeMatch":"^/guide/"},{"text":"\u997F\u4E86\u4E48\u7EC4\u4EF6\u5E93","link":"/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.md","activeMatch":"^/el-component/"},{"text":"\u5DE5\u5177\u51FD\u6570","link":"/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.md","activeMatch":"^/utils/"},{"text":"\u5F71\u89C6\u63A8\u8350","link":"/movies/","activeMatch":"^/movies/"},{"text":"\u6D4B\u8BD5\u7528\u4F8B","link":"/test-demo/tabs","activeMatch":"^/test/"},{"text":"\u7D22\u5F15","children":[{"text":"\u5206\u7C7B\u6807\u9898","children":[{"text":"\u5206\u7C7B","link":"/categories/","activeMatch":"/categories/"}]},{"text":"\u6807\u7B7E\u6807\u9898","children":[{"text":"\u6807\u7B7E","link":"/tags/","activeMatch":"/tags/"}]},{"text":"\u65F6\u95F4\u7EBF\u6807\u9898","children":[{"text":"\u65F6\u95F4\u7EBF","link":"/archives/","activeMatch":"/archives/"}]}]}],"sidebar":{"/el-component/":["01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.md","02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.md","04.Vue button\u7EC4\u4EF6\u5F00\u53D1.md","05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.md","06.Vue input\u7EC4\u4EF6\u5F00\u53D1.md","07.Vue message\u7EC4\u4EF6\u5F00\u53D1.md","08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.md"],"/utils/":[{"text":"Array","collapsible":true,"children":["/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.md","/utils/Array/clone\u514B\u9686\u6570\u7EC4.md","/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.md","/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.md","/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.md","/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.md","/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.md","/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.md","/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.md","/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md","/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md","/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.md","/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.md","/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.md","/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.md","/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.md","/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.md","/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.md","/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.md"]},{"text":"Function","collapsible":true,"children":["/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.md","/utils/Function/debounce\u51FD\u6570\u9632\u6296.md","/utils/Function/throttle\u51FD\u6570\u8282\u6D41.md","/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.md"]},{"text":"Number","collapsible":true,"children":["/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.md","/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.md","/utils/Number/average\u6C42\u5E73\u5747\u503C.md","/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.md","/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.md","/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.md"]},{"text":"String","collapsible":true,"children":["/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.md","/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.md","/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.md"]}]},"logo":"https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/favicon.ico","contributors":false,"docsDir":"docs","docsBranch":"master","docsRepo":"https://github.com/qqlcx5/vuepress-next","editLinkPattern":":repo/edit/:branch/:path","category":true,"tag":true,"archive":true,"authorInfo":{"name":"\u661F\u91CE","avatar":"https://avatars0.githubusercontent.com/u/888","link":"https://feyoudao.cn"},"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`),zl=rn(Nd),Pd=()=>zl;xe.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=n=>{zl.value=n});const ql=Symbol(""),Dd=()=>{const n=Nn(ql);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},Td=(n,s)=>{var a;return{...n,...(a=n.locales)==null?void 0:a[s]}};var Id=$n({enhance({app:n}){const s=Pd(),a=n._context.provides[Pt],e=en(()=>Td(s.value,a.value));n.provide(ql,e),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return s.value}},$themeLocale:{get(){return e.value}}})}}),Ae=(n,s)=>{const a=n.__vccOpts||n;for(const[e,t]of s)a[e]=t;return a};const Ld=_n({__name:"Badge",props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup(n){return(s,a)=>(Xn(),us("span",{class:qs(["badge",n.type]),style:_s({verticalAlign:n.vertical})},[Wp(s.$slots,"default",{},()=>[_t(Wa(n.text),1)])],6))}});var Rd=Ae(Ld,[["__file","Badge.vue"]]);const $d=_n({name:"CodeGroup",setup(n,{slots:s}){const a=rn(-1),e=rn([]),t=(l=a.value)=>{l<e.value.length-1?a.value=l+1:a.value=0,e.value[a.value].focus()},o=(l=a.value)=>{l>0?a.value=l-1:a.value=e.value.length-1,e.value[a.value].focus()},p=(l,c)=>{l.key===" "||l.key==="Enter"?(l.preventDefault(),a.value=c):l.key==="ArrowRight"?(l.preventDefault(),t(c)):l.key==="ArrowLeft"&&(l.preventDefault(),o(c))};return()=>{var c;const l=(((c=s.default)==null?void 0:c.call(s))||[]).filter(r=>r.type.name==="CodeGroupItem").map(r=>(r.props===null&&(r.props={}),r));return l.length===0?null:(a.value<0||a.value>l.length-1?(a.value=l.findIndex(r=>r.props.active===""||r.props.active===!0),a.value===-1&&(a.value=0)):l.forEach((r,i)=>{r.props.active=i===a.value}),H("div",{class:"code-group"},[H("div",{class:"code-group__nav"},H("ul",{class:"code-group__ul"},l.map((r,i)=>{const d=i===a.value;return H("li",{class:"code-group__li"},H("button",{ref:k=>{k&&(e.value[i]=k)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":d},ariaPressed:d,ariaExpanded:d,onClick:()=>a.value=i,onKeydown:k=>p(k,i)},r.props.title))}))),l]))}}}),Od=["aria-selected"],Md=_n({name:"CodeGroupItem"}),zd=_n({...Md,props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(n){return(s,a)=>(Xn(),us("div",{class:qs(["code-group-item",{"code-group-item__active":n.active}]),"aria-selected":n.active},[Wp(s.$slots,"default")],10,Od))}});var qd=Ae(zd,[["__file","CodeGroupItem.vue"]]),Wo;const $a=typeof window!="undefined",Vd=n=>typeof n=="string",$e=()=>{};$a&&((Wo=window==null?void 0:window.navigator)==null?void 0:Wo.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Hd(n,s){function a(...e){n(()=>s.apply(this,e),{fn:s,thisArg:this,args:e})}return a}const Vl=n=>n();function Kd(n=Vl){const s=rn(!0);function a(){s.value=!1}function e(){s.value=!0}return{isActive:s,pause:a,resume:e,eventFilter:(...o)=>{s.value&&n(...o)}}}function $t(n){return wc()?(Ac(n),!0):!1}function Ud(n,s=!0){Ft()?Up(n):s?n():wt(n)}function nv(n=!1,s={}){const{truthyValue:a=!0,falsyValue:e=!1}=s,t=Fn(n),o=rn(n);function p(l){return arguments.length?(o.value=l,o.value):(o.value=o.value===as(a)?as(e):as(a),o.value)}return t?p:[o,p]}var Jo=Object.getOwnPropertySymbols,Zd=Object.prototype.hasOwnProperty,Yd=Object.prototype.propertyIsEnumerable,Wd=(n,s)=>{var a={};for(var e in n)Zd.call(n,e)&&s.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&Jo)for(var e of Jo(n))s.indexOf(e)<0&&Yd.call(n,e)&&(a[e]=n[e]);return a};function Jd(n,s,a={}){const e=a,{eventFilter:t=Vl}=e,o=Wd(e,["eventFilter"]);return Vn(n,Hd(t,s),o)}var Qd=Object.defineProperty,Gd=Object.defineProperties,Xd=Object.getOwnPropertyDescriptors,ce=Object.getOwnPropertySymbols,Hl=Object.prototype.hasOwnProperty,Kl=Object.prototype.propertyIsEnumerable,Qo=(n,s,a)=>s in n?Qd(n,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[s]=a,nm=(n,s)=>{for(var a in s||(s={}))Hl.call(s,a)&&Qo(n,a,s[a]);if(ce)for(var a of ce(s))Kl.call(s,a)&&Qo(n,a,s[a]);return n},sm=(n,s)=>Gd(n,Xd(s)),am=(n,s)=>{var a={};for(var e in n)Hl.call(n,e)&&s.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&ce)for(var e of ce(n))s.indexOf(e)<0&&Kl.call(n,e)&&(a[e]=n[e]);return a};function em(n,s,a={}){const e=a,{eventFilter:t}=e,o=am(e,["eventFilter"]),{eventFilter:p,pause:l,resume:c,isActive:r}=Kd(t);return{stop:Jd(n,s,sm(nm({},o),{eventFilter:p})),pause:l,resume:c,isActive:r}}function Ul(n){var s;const a=as(n);return(s=a==null?void 0:a.$el)!=null?s:a}const re=$a?window:void 0,tm=$a?window.document:void 0;$a&&window.navigator;$a&&window.location;function Zl(...n){let s,a,e,t;if(Vd(n[0])?([a,e,t]=n,s=re):[s,a,e,t]=n,!s)return $e;let o=$e;const p=Vn(()=>Ul(s),c=>{o(),c&&(c.addEventListener(a,e,t),o=()=>{c.removeEventListener(a,e,t),o=$e})},{immediate:!0,flush:"post"}),l=()=>{p(),o()};return $t(l),l}function om(n,s={}){const{window:a=re}=s,e=Boolean(a&&"matchMedia"in a&&typeof a.matchMedia=="function");let t;const o=rn(!1),p=()=>{!e||(t||(t=a.matchMedia(n)),o.value=t.matches)};return Ud(()=>{p(),t&&("addEventListener"in t?t.addEventListener("change",p):t.addListener(p),$t(()=>{"removeEventListener"in t?t.removeEventListener("change",p):t.removeListener(p)}))}),o}const lt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ct="__vueuse_ssr_handlers__";lt[ct]=lt[ct]||{};const pm=lt[ct];function lm(n,s){return pm[n]||s}function cm(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"||Array.isArray(n)?"object":Number.isNaN(n)?"any":"number"}const rm={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}};function Ot(n,s,a,e={}){var t;const{flush:o="pre",deep:p=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,shallow:r,window:i=re,eventFilter:d,onError:k=O=>{console.error(O)}}=e,u=(r?Np:rn)(s);if(!a)try{a=lm("getDefaultStorage",()=>{var O;return(O=re)==null?void 0:O.localStorage})()}catch(O){k(O)}if(!a)return u;const b=as(s),B=cm(b),A=(t=e.serializer)!=null?t:rm[B],{pause:h,resume:y}=em(u,()=>x(u.value),{flush:o,deep:p,eventFilter:d});return i&&l&&Zl(i,"storage",q),q(),u;function x(O){try{O==null?a.removeItem(n):a.setItem(n,A.write(O))}catch(_){k(_)}}function D(O){if(!(O&&O.key!==n)){h();try{const _=O?O.newValue:a.getItem(n);return _==null?(c&&b!==null&&a.setItem(n,A.write(b)),b):typeof _!="string"?_:A.read(_)}catch(_){k(_)}finally{y()}}}function q(O){O&&O.key!==n||(u.value=D(O))}}function im(n){return om("(prefers-color-scheme: dark)",n)}const Go=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function um(n,s={}){const{document:a=tm,autoExit:e=!1}=s,t=n||(a==null?void 0:a.querySelector("html")),o=rn(!1);let p=!1,l=Go[0];if(!a)p=!1;else for(const B of Go)if(B[1]in a){l=B,p=!0;break}const[c,r,i,,d]=l;async function k(){!p||(a!=null&&a[i]&&await a[r](),o.value=!1)}async function u(){if(!p)return;await k();const B=Ul(t);B&&(await B[c](),o.value=!0)}async function b(){o.value?await k():await u()}return a&&Zl(a,d,()=>{o.value=!!(a!=null&&a[i])},!1),e&&$t(k),{isSupported:p,isFullscreen:o,enter:u,exit:k,toggle:b}}var Xo;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Xo||(Xo={}));const Yl=Symbol(""),sv=()=>{const n=Nn(Yl);if(!n)throw new Error("useDarkMode() is called without provider.");return n},dm=()=>{const n=Gl(),s=im(),a=Ot("vuepress-color-scheme",n.value.colorMode),e=en({get(){return n.value.colorModeSwitch?a.value==="auto"?s.value:a.value==="dark":n.value.colorMode==="dark"},set(t){t===s.value?a.value="auto":a.value=t?"dark":"light"}});Yn(Yl,e),mm(e)},mm=n=>{const s=(a=n.value)=>{const e=window==null?void 0:window.document.querySelector("html");e==null||e.classList.toggle("dark",a)};In(()=>{Vn(n,s,{immediate:!0})}),Ct(()=>s())},Wl=(...n)=>{const a=we().resolve(...n),e=a.matched[a.matched.length-1];if(!(e!=null&&e.redirect))return a;const{redirect:t}=e,o=on(t)?t(a):t,p=Bn(o)?{path:o}:o;return Wl({hash:a.hash,query:a.query,params:a.params,...p})},km=n=>{const s=Wl(encodeURI(n));return{text:s.meta.title||n,link:s.name==="404"?n:s.fullPath}};let Oe=null,ma=null;const vm={wait:()=>Oe,pending:()=>{Oe=new Promise(n=>ma=n)},resolve:()=>{ma==null||ma(),Oe=null,ma=null}},hm=()=>vm,Jl=Symbol("sidebarItems"),av=()=>{const n=Nn(Jl);if(!n)throw new Error("useSidebarItems() is called without provider.");return n},gm=()=>{const n=Gl(),s=ye(),a=en(()=>fm(s.value,n.value));Yn(Jl,a)},fm=(n,s)=>{var t,o,p,l;const a=(o=(t=n.sidebar)!=null?t:s.sidebar)!=null?o:"auto",e=(l=(p=n.sidebarDepth)!=null?p:s.sidebarDepth)!=null?l:2;return n.home||a===!1?[]:a==="auto"?ym(e):sn(a)?Ql(a,e):fl(a)?Em(a,e):[]},bm=(n,s)=>({text:n.title,link:`#${n.slug}`,children:Mt(n.children,s)}),Mt=(n,s)=>s>0?n.map(a=>bm(a,s-1)):[],ym=n=>{const s=La();return[{text:s.value.title,children:Mt(s.value.headers,n)}]},Ql=(n,s)=>{const a=Ra(),e=La(),t=o=>{var l;let p;if(Bn(o)?p=km(o):p=o,p.children)return{...p,children:p.children.map(c=>t(c))};if(p.link===a.path){const c=((l=e.value.headers[0])==null?void 0:l.level)===1?e.value.headers[0].children:e.value.headers;return{...p,children:Mt(c,s)}}return p};return n.map(o=>t(o))},Em=(n,s)=>{var o;const a=Ra(),e=bl(n,a.path),t=(o=n[e])!=null?o:[];return Ql(t,s)},Gl=()=>Dd();var Bm=$n({enhance({app:n,router:s}){n.component("Badge",Rd),n.component("CodeGroup",$d),n.component("CodeGroupItem",qd),n.component("AutoLinkExternalIcon",()=>{const e=n.component("ExternalLinkIcon");return e?H(e):null}),n.component("NavbarSearch",()=>{const e=n.component("Docsearch")||n.component("SearchBox");return e?H(e):null});const a=s.options.scrollBehavior;s.options.scrollBehavior=async(...e)=>(await hm().wait(),a(...e))},setup(){dm(),gm()}});function np(n){return Object.prototype.toString.call(n).match(/\[object (.*?)\]/)[1].toLowerCase()}function sp(n){let s=n.frontmatter.date||n.lastUpdated||new Date,a=new Date(s);return a=="Invalid Date"&&s&&(a=new Date(s.replace(/-/g,"/"))),a.getTime()}function rt(n,s){return sp(s)-sp(n)}function wm(n){return n=n.filter(s=>Boolean(s.filePathRelative)&&!s.frontmatter.home&&s.frontmatter.article!==!1),n}function Am(n){return n.sort((s,a)=>{const e=s.frontmatter.sticky,t=a.frontmatter.sticky;return e&&t?e==t?rt(s,a):e-t:e&&!t?-1:!e&&t?1:rt(s,a)}),n}function xm(n){return n.sort((s,a)=>rt(s,a)),n}function Cm(n){const s={},a={};for(let e=0,t=n.length;e<t;e++){const{frontmatter:{categories:o,tags:p}}=n[e];np(o)==="array"&&o.forEach(l=>{l&&(s[l]||(s[l]=[]),s[l].push(n[e]))}),np(p)==="array"&&p.forEach(l=>{l&&(a[l]||(a[l]=[]),a[l].push(n[e]))})}return{categories:s,tags:a}}function Sm(n){const s=[],a=[];for(let e in n.categories)s.push({key:e,length:n.categories[e].length});for(let e in n.tags)a.push({key:e,length:n.tags[e].length});return{categories:s,tags:a}}const _m=_n({name:"AIcon",props:{name:{type:String,default:""},color:{type:[String,Boolean],default:"inherit"},useSvg:{type:[String,Boolean],default:!1},size:{type:[Number,String],default:20},rotate:{type:[String,Boolean],default:!1},spin:{type:Boolean,default:!1},spinSpeed:{type:[Number,String],default:1.5}},emits:["click"],setup(n,{emit:s}){const a=l=>{s("click",l,!1)},e=en(()=>String(n.rotate)!=="false"&&n.rotate),t=en(()=>String(n.useSvg)!=="false");function o(l){return parseInt(l)===l?l+="px":l}const p=en(()=>{const l=o(n.size),c={fontSize:l,width:l,height:l};return String(n.color)!=="false"&&(c.color=n.color),e.value&&(c.transform=isNaN(n.rotate)?`rotate(${n.rotate})`:`rotate(${n.rotate}deg)`),n.spin&&(c.animation=`a-spin ${n.spinSpeed}s linear infinite`),c});return{useSvg_:t,iconStyle_:p,handleClick:a}}}),jm=["xlink:href"];function Fm(n,s,a,e,t,o){return n.useSvg_?(Xn(),us("svg",{key:0,class:"acme-colour","aria-hidden":"true",style:_s([n.iconStyle_])},[rs("use",{"xlink:href":`#${n.name}`},null,8,jm)],4)):(Xn(),us("i",{key:1,class:qs(["a-icon acme",[n.name]]),style:_s([n.iconStyle_])},null,6))}var Nm=Ae(_m,[["render",Fm],["__file","a-icon.vue"]]);const Pm={props:{cardData:{type:Array,default:[]},cardListSize:{type:Number,default:3},carTitleColor:{type:String,default:"#000"},carHoverColor:{type:String,default:"#000"}},setup(n){In(()=>{s()});function s(){if(!document.querySelector(".card")){const e=n.carHoverColor;let t=document.createElement("style");t.className="card",t.innerHTML=`.card-nav-content:hover{color: ${e}}`,document.head.appendChild(t)}}return{random:(e=0,t=10)=>Math.floor(Math.random()*(t-e+1))+e}}},Dm={key:0,style:{"text-align":"center","font-weight":"900"}},Tm={class:"kbt-row"},Im=["href"],Lm={class:"card-nav-title"},Rm=["src"],$m=["title"];function Om(n,s,a,e,t,o){return Xn(),us("div",null,[a.cardData[0].title!=null?(Xn(),us("div",Dm,Wa(a.cardData[0].title),1)):io("",!0),rs("div",Tm,[(Xn(!0),us(Dn,null,jr(a.cardData,(p,l)=>(Xn(),us("div",{class:"card-nav-box",style:_s(a.cardListSize==4?"width: 25%;":a.cardListSize==2?"width: 50%;":"width: 33.333%;"),key:l},[rs("a",{href:p.cardSrc,target:"_blank"},[rs("div",{class:qs(["card-nav-item",[`effect-border-${e.random(1,5)}`]])},[rs("div",Lm,[p.cardImgSrc&&p.cardImgSrc!=""?(Xn(),us("img",{key:0,src:p.cardImgSrc,alt:"\u6B63\u5728\u52A0\u8F7D ...",class:"card-nav-img no-zoom"},null,8,Rm)):io("",!0),rs("p",{class:"card-nav-name",style:_s("color:"+a.carTitleColor)},Wa(p.cardName),5)]),rs("div",{title:p.cardContent,class:"card-nav-content"},Wa(p.cardContent),9,$m)],2)],8,Im)],4))),128))])])}var Mm=Ae(Pm,[["render",Om],["__scopeId","data-v-6447dacc"],["__file","NavCard.vue"]]);const zm=[{data:{key:"v-8daa1a0e",path:"/",title:"",lang:"zh-CN",frontmatter:{home:!0,pageClass:"custom-home-class"},excerpt:"",headers:[],git:{updatedTime:165551691e4},filePathRelative:"index.md"},key:"v-8daa1a0e",path:"/",title:"",lang:"zh-CN",frontmatter:{home:!0,pageClass:"custom-home-class"},excerpt:"",headers:[],content:`---
home: true
pageClass: custom-home-class
---
`,contentRendered:"",date:"0000-00-00",deps:[],links:[],pathInferred:"/",pathLocale:"/",permalink:null,routeMeta:{title:""},sfcBlocks:[],slug:"index",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/index.md",filePathRelative:"index.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/index.html.vue",componentFilePathRelative:"pages/index.html.vue",componentFileChunkName:"v-8daa1a0e",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/index.html.js",dataFilePathRelative:"pages/index.html.js",dataFileChunkName:"v-8daa1a0e",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/index.html",htmlFilePathRelative:"index.html"},{data:{key:"v-c9afc8f6",path:"/archives/",title:"\u65F6\u95F4\u7EBF",lang:"zh-CN",frontmatter:{archivesPage:!0,title:"\u65F6\u95F4\u7EBF",permalink:"/archives/",article:!1},excerpt:"",headers:[],git:{updatedTime:1657640714e3},filePathRelative:"@pages/archivesPage.md"},key:"v-c9afc8f6",path:"/archives/",title:"\u65F6\u95F4\u7EBF",lang:"zh-CN",frontmatter:{archivesPage:!0,title:"\u65F6\u95F4\u7EBF",permalink:"/archives/",article:!1},excerpt:"",headers:[],content:`---
archivesPage: true
title: \u65F6\u95F4\u7EBF
permalink: /archives/
article: false
---`,contentRendered:"",date:"0000-00-00",deps:[],links:[],pathInferred:"/@pages/archivesPage.html",pathLocale:"/",permalink:"/archives/",routeMeta:{title:"\u65F6\u95F4\u7EBF"},sfcBlocks:[],slug:"archivesPage",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/@pages/archivesPage.md",filePathRelative:"@pages/archivesPage.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/archives/index.html.vue",componentFilePathRelative:"pages/archives/index.html.vue",componentFileChunkName:"v-c9afc8f6",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/archives/index.html.js",dataFilePathRelative:"pages/archives/index.html.js",dataFileChunkName:"v-c9afc8f6",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/archives/index.html",htmlFilePathRelative:"archives/index.html"},{data:{key:"v-e355b60c",path:"/categories/",title:"\u5206\u7C7B",lang:"zh-CN",frontmatter:{categoriesPage:!0,title:"\u5206\u7C7B",permalink:"/categories/",article:!1},excerpt:"",headers:[],git:{updatedTime:1655656135e3},filePathRelative:"@pages/categoriesPage.md"},key:"v-e355b60c",path:"/categories/",title:"\u5206\u7C7B",lang:"zh-CN",frontmatter:{categoriesPage:!0,title:"\u5206\u7C7B",permalink:"/categories/",article:!1},excerpt:"",headers:[],content:`---
categoriesPage: true
title: \u5206\u7C7B
permalink: /categories/
article: false
---`,contentRendered:"",date:"0000-00-00",deps:[],links:[],pathInferred:"/@pages/categoriesPage.html",pathLocale:"/",permalink:"/categories/",routeMeta:{title:"\u5206\u7C7B"},sfcBlocks:[],slug:"categoriesPage",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/@pages/categoriesPage.md",filePathRelative:"@pages/categoriesPage.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/categories/index.html.vue",componentFilePathRelative:"pages/categories/index.html.vue",componentFileChunkName:"v-e355b60c",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/categories/index.html.js",dataFilePathRelative:"pages/categories/index.html.js",dataFileChunkName:"v-e355b60c",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/categories/index.html",htmlFilePathRelative:"categories/index.html"},{data:{key:"v-15534fdd",path:"/tags/",title:"\u6807\u7B7E",lang:"zh-CN",frontmatter:{tagsPage:!0,title:"\u6807\u7B7E",permalink:"/tags/",article:!1},excerpt:"",headers:[],git:{updatedTime:1655656135e3},filePathRelative:"@pages/tagsPage.md"},key:"v-15534fdd",path:"/tags/",title:"\u6807\u7B7E",lang:"zh-CN",frontmatter:{tagsPage:!0,title:"\u6807\u7B7E",permalink:"/tags/",article:!1},excerpt:"",headers:[],content:`---
tagsPage: true
title: \u6807\u7B7E
permalink: /tags/
article: false
---`,contentRendered:"",date:"0000-00-00",deps:[],links:[],pathInferred:"/@pages/tagsPage.html",pathLocale:"/",permalink:"/tags/",routeMeta:{title:"\u6807\u7B7E"},sfcBlocks:[],slug:"tagsPage",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/@pages/tagsPage.md",filePathRelative:"@pages/tagsPage.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/tags/index.html.vue",componentFilePathRelative:"pages/tags/index.html.vue",componentFileChunkName:"v-15534fdd",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/tags/index.html.js",dataFilePathRelative:"pages/tags/index.html.js",dataFileChunkName:"v-15534fdd",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/tags/index.html",htmlFilePathRelative:"tags/index.html"},{data:{key:"v-22991227",path:"/about/about.html",title:"\u5173\u4E8E - \u6211",lang:"zh-CN",frontmatter:{title:"\u5173\u4E8E - \u6211",date:"2021-05-16T17:52:59.000Z",categories:["about"],tags:["\u5173\u4E8E"]},excerpt:"",headers:[{level:2,title:"\u8BFB\u8005\u7684\u95EE\u9898\u4E0E\u56DE\u7B54",slug:"\u8BFB\u8005\u7684\u95EE\u9898\u4E0E\u56DE\u7B54",children:[{level:3,title:"QA - \u505A\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877\u662F\u4EC0\u4E48",slug:"qa-\u505A\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877\u662F\u4EC0\u4E48",children:[]},{level:3,title:"QA - \u662F\u5426\u53EF\u4EE5\u6709\u673A\u4F1A\u5408\u4F5C",slug:"qa-\u662F\u5426\u53EF\u4EE5\u6709\u673A\u4F1A\u5408\u4F5C",children:[]},{level:3,title:"QA - \u662F\u5426\u53EF\u4EE5\u63D0\u4F9B\u6280\u672F\u652F\u6301",slug:"qa-\u662F\u5426\u53EF\u4EE5\u63D0\u4F9B\u6280\u672F\u652F\u6301",children:[]},{level:3,title:"QA - \u662F\u5426\u8003\u8651\u53D8\u73B0",slug:"qa-\u662F\u5426\u8003\u8651\u53D8\u73B0",children:[]},{level:3,title:"QA - \u7F51\u7AD9\u8FD0\u8425",slug:"qa-\u7F51\u7AD9\u8FD0\u8425",children:[]},{level:3,title:"\u6211\u7684\u4E09\u89C2",slug:"\u6211\u7684\u4E09\u89C2",children:[]},{level:3,title:"\u516C\u4F17\u53F7",slug:"\u516C\u4F17\u53F7",children:[]},{level:3,title:"\u66F4\u591A",slug:"\u66F4\u591A",children:[]}]}],git:{updatedTime:1656434853e3},filePathRelative:"about/about.md"},key:"v-22991227",path:"/about/about.html",title:"\u5173\u4E8E - \u6211",lang:"zh-CN",frontmatter:{title:"\u5173\u4E8E - \u6211",date:"2021-05-16T17:52:59.000Z",categories:["about"],tags:["\u5173\u4E8E"]},excerpt:"",headers:[{level:2,title:"\u8BFB\u8005\u7684\u95EE\u9898\u4E0E\u56DE\u7B54",slug:"\u8BFB\u8005\u7684\u95EE\u9898\u4E0E\u56DE\u7B54",children:[{level:3,title:"QA - \u505A\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877\u662F\u4EC0\u4E48",slug:"qa-\u505A\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877\u662F\u4EC0\u4E48",children:[]},{level:3,title:"QA - \u662F\u5426\u53EF\u4EE5\u6709\u673A\u4F1A\u5408\u4F5C",slug:"qa-\u662F\u5426\u53EF\u4EE5\u6709\u673A\u4F1A\u5408\u4F5C",children:[]},{level:3,title:"QA - \u662F\u5426\u53EF\u4EE5\u63D0\u4F9B\u6280\u672F\u652F\u6301",slug:"qa-\u662F\u5426\u53EF\u4EE5\u63D0\u4F9B\u6280\u672F\u652F\u6301",children:[]},{level:3,title:"QA - \u662F\u5426\u8003\u8651\u53D8\u73B0",slug:"qa-\u662F\u5426\u8003\u8651\u53D8\u73B0",children:[]},{level:3,title:"QA - \u7F51\u7AD9\u8FD0\u8425",slug:"qa-\u7F51\u7AD9\u8FD0\u8425",children:[]},{level:3,title:"\u6211\u7684\u4E09\u89C2",slug:"\u6211\u7684\u4E09\u89C2",children:[]},{level:3,title:"\u516C\u4F17\u53F7",slug:"\u516C\u4F17\u53F7",children:[]},{level:3,title:"\u66F4\u591A",slug:"\u66F4\u591A",children:[]}]}],content:`---
title: \u5173\u4E8E - \u6211
date: 2021-05-16 17:52:59
categories:
  - about
tags: 
  - \u5173\u4E8E
---

# \u5173\u4E8E - \u6211

\u5C0F\u83DC\u9E21\u4E00\u679A\u3002

## \u8BFB\u8005\u7684\u95EE\u9898\u4E0E\u56DE\u7B54

### QA - \u505A\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877\u662F\u4EC0\u4E48

\u5174\u8DA3\u4F7F\u7136\uFF0C\u5C06\u5B66\u5230\u7684\u4E1C\u897F\u90FD\u8BB0\u5F55\u4E0B\u6765\u3002

- \u77E5\u8BC6\u788E\u7247\u5316\uFF0C\u5BF9\u77E5\u8BC6\u6CA1\u6709\u5F62\u6210\u4F53\u7CFB\u3002
- \u5728\u7126\u8651\u4E2D\u5FC3\u6001\u7126\u707C\u5B66\u4E60\u4E2D\u8270\u96BE\u524D\u884C\u3002

### QA - \u662F\u5426\u53EF\u4EE5\u6709\u673A\u4F1A\u5408\u4F5C

\u5F53\u7136\u53EF\u4EE5\uFF0C\u4F60\u53EF\u4EE5\u5728\u672C\u9875\u627E\u5230\u6211\u3002

### QA - \u662F\u5426\u53EF\u4EE5\u63D0\u4F9B\u6280\u672F\u652F\u6301

\u5F53\u7136\u53EF\u4EE5\uFF0C\u5982\u679C\u6211\u521A\u597D\u4E0D\u5FD9\u7684\u8BDD\uFF0C\u5F88\u613F\u610F\u4E92\u76F8\u4EA4\u6D41\u4E00\u4E0B\u3002

### QA - \u662F\u5426\u8003\u8651\u53D8\u73B0

\u6682\u4E0D\u4F1A\u8003\u8651\u5C06\u7F51\u7AD9\u53CA\u5185\u5BB9\u4F5C\u4E3A\u5546\u4E1A\u7528\u9014\uFF0C\u540E\u671F\u4E5F\u5C3D\u53EF\u80FD\u4E0D\u52A0\u5165\u5E7F\u544A\u3002

### QA - \u7F51\u7AD9\u8FD0\u8425

\u514D\u8D39\u670D\u52A1\u5668\u50A8\u5B58\`GitHub Pages\`\uFF0C\u7F13\u5B58\`Cloudflare\`\uFF0C\u56FE\u7247\u4F7F\u7528\`OSS\`\u786E\u4FDD\u8D44\u6E90\u4E0D\u4E22\u5931\uFF0C\u57DF\u540D\u7EED\u8D39 10 \u5E74\u4EE5\u7EF4\u6301\u7F51\u7AD9\u957F\u671F\u5B58\u5728\u3002

### \u6211\u7684\u4E09\u89C2

\u6211\u662F\u6027\u683C\u5185\u5411\uFF0C\u559C\u6B22\u72EC\u5904\uFF0C\u61D2\u60F0\u7684\u4EBA\uFF0C\u7A7A\u95F2\u4E4B\u4F59\u559C\u6B22\u7F16\u7A0B\u7684\u4EBA\uFF0C\u559C\u6B22\u5B66\u4E60\u65B0\u6280\u672F\uFF0C\u559C\u6B22\u5206\u4EAB\u77E5\u8BC6\uFF0C\u559C\u6B22\u5206\u4EAB\u751F\u6D3B\u3002

<img src="https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/me-life.png" width="300" alt="me-life" />

### \u516C\u4F17\u53F7

<br />
<img class="no-zoom" src="https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/frontend.png" width = "600" alt="frontend" />

### \u66F4\u591A

> \u52A0\u5165\u5B66\u4E60\u4EA4\u6D41\u7FA4\u3002

\u4E00\u8D77\u5B66\u4E60\u548C\u6280\u672F\u4EA4\u6D41\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u6211\u5FAE\u4FE1\uFF0C\u6211\u4F1A\u5C06\u4F60\u62C9\u8FDB\u524D\u7AEF\u6709\u9053\u4EA4\u6D41\u7FA4\u3002\u5408\u4F5C\u610F\u5411\uFF0C\u8BF7\u8868\u660E\u6765\u610F\u3002

<img class="no-zoom" src="https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/wechat.jpeg" width = "230" alt="wechat" />
`,contentRendered:`<h1 id="\u5173\u4E8E-\u6211" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-\u6211" aria-hidden="true">#</a> \u5173\u4E8E - \u6211</h1>
<p>\u5C0F\u83DC\u9E21\u4E00\u679A\u3002</p>
<h2 id="\u8BFB\u8005\u7684\u95EE\u9898\u4E0E\u56DE\u7B54" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u8005\u7684\u95EE\u9898\u4E0E\u56DE\u7B54" aria-hidden="true">#</a> \u8BFB\u8005\u7684\u95EE\u9898\u4E0E\u56DE\u7B54</h2>
<h3 id="qa-\u505A\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#qa-\u505A\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877\u662F\u4EC0\u4E48" aria-hidden="true">#</a> QA - \u505A\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877\u662F\u4EC0\u4E48</h3>
<p>\u5174\u8DA3\u4F7F\u7136\uFF0C\u5C06\u5B66\u5230\u7684\u4E1C\u897F\u90FD\u8BB0\u5F55\u4E0B\u6765\u3002</p>
<ul>
<li>\u77E5\u8BC6\u788E\u7247\u5316\uFF0C\u5BF9\u77E5\u8BC6\u6CA1\u6709\u5F62\u6210\u4F53\u7CFB\u3002</li>
<li>\u5728\u7126\u8651\u4E2D\u5FC3\u6001\u7126\u707C\u5B66\u4E60\u4E2D\u8270\u96BE\u524D\u884C\u3002</li>
</ul>
<h3 id="qa-\u662F\u5426\u53EF\u4EE5\u6709\u673A\u4F1A\u5408\u4F5C" tabindex="-1"><a class="header-anchor" href="#qa-\u662F\u5426\u53EF\u4EE5\u6709\u673A\u4F1A\u5408\u4F5C" aria-hidden="true">#</a> QA - \u662F\u5426\u53EF\u4EE5\u6709\u673A\u4F1A\u5408\u4F5C</h3>
<p>\u5F53\u7136\u53EF\u4EE5\uFF0C\u4F60\u53EF\u4EE5\u5728\u672C\u9875\u627E\u5230\u6211\u3002</p>
<h3 id="qa-\u662F\u5426\u53EF\u4EE5\u63D0\u4F9B\u6280\u672F\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#qa-\u662F\u5426\u53EF\u4EE5\u63D0\u4F9B\u6280\u672F\u652F\u6301" aria-hidden="true">#</a> QA - \u662F\u5426\u53EF\u4EE5\u63D0\u4F9B\u6280\u672F\u652F\u6301</h3>
<p>\u5F53\u7136\u53EF\u4EE5\uFF0C\u5982\u679C\u6211\u521A\u597D\u4E0D\u5FD9\u7684\u8BDD\uFF0C\u5F88\u613F\u610F\u4E92\u76F8\u4EA4\u6D41\u4E00\u4E0B\u3002</p>
<h3 id="qa-\u662F\u5426\u8003\u8651\u53D8\u73B0" tabindex="-1"><a class="header-anchor" href="#qa-\u662F\u5426\u8003\u8651\u53D8\u73B0" aria-hidden="true">#</a> QA - \u662F\u5426\u8003\u8651\u53D8\u73B0</h3>
<p>\u6682\u4E0D\u4F1A\u8003\u8651\u5C06\u7F51\u7AD9\u53CA\u5185\u5BB9\u4F5C\u4E3A\u5546\u4E1A\u7528\u9014\uFF0C\u540E\u671F\u4E5F\u5C3D\u53EF\u80FD\u4E0D\u52A0\u5165\u5E7F\u544A\u3002</p>
<h3 id="qa-\u7F51\u7AD9\u8FD0\u8425" tabindex="-1"><a class="header-anchor" href="#qa-\u7F51\u7AD9\u8FD0\u8425" aria-hidden="true">#</a> QA - \u7F51\u7AD9\u8FD0\u8425</h3>
<p>\u514D\u8D39\u670D\u52A1\u5668\u50A8\u5B58<code v-pre>GitHub Pages</code>\uFF0C\u7F13\u5B58<code v-pre>Cloudflare</code>\uFF0C\u56FE\u7247\u4F7F\u7528<code v-pre>OSS</code>\u786E\u4FDD\u8D44\u6E90\u4E0D\u4E22\u5931\uFF0C\u57DF\u540D\u7EED\u8D39 10 \u5E74\u4EE5\u7EF4\u6301\u7F51\u7AD9\u957F\u671F\u5B58\u5728\u3002</p>
<h3 id="\u6211\u7684\u4E09\u89C2" tabindex="-1"><a class="header-anchor" href="#\u6211\u7684\u4E09\u89C2" aria-hidden="true">#</a> \u6211\u7684\u4E09\u89C2</h3>
<p>\u6211\u662F\u6027\u683C\u5185\u5411\uFF0C\u559C\u6B22\u72EC\u5904\uFF0C\u61D2\u60F0\u7684\u4EBA\uFF0C\u7A7A\u95F2\u4E4B\u4F59\u559C\u6B22\u7F16\u7A0B\u7684\u4EBA\uFF0C\u559C\u6B22\u5B66\u4E60\u65B0\u6280\u672F\uFF0C\u559C\u6B22\u5206\u4EAB\u77E5\u8BC6\uFF0C\u559C\u6B22\u5206\u4EAB\u751F\u6D3B\u3002</p>
<img src="https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/me-life.png" width="300" alt="me-life" />
<h3 id="\u516C\u4F17\u53F7" tabindex="-1"><a class="header-anchor" href="#\u516C\u4F17\u53F7" aria-hidden="true">#</a> \u516C\u4F17\u53F7</h3>
<br />
<img class="no-zoom" src="https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/frontend.png" width = "600" alt="frontend" />
<h3 id="\u66F4\u591A" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A" aria-hidden="true">#</a> \u66F4\u591A</h3>
<blockquote>
<p>\u52A0\u5165\u5B66\u4E60\u4EA4\u6D41\u7FA4\u3002</p>
</blockquote>
<p>\u4E00\u8D77\u5B66\u4E60\u548C\u6280\u672F\u4EA4\u6D41\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u6211\u5FAE\u4FE1\uFF0C\u6211\u4F1A\u5C06\u4F60\u62C9\u8FDB\u524D\u7AEF\u6709\u9053\u4EA4\u6D41\u7FA4\u3002\u5408\u4F5C\u610F\u5411\uFF0C\u8BF7\u8868\u660E\u6765\u610F\u3002</p>
<img class="no-zoom" src="https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/wechat.jpeg" width = "230" alt="wechat" />
`,date:"2021-05-16",deps:[],links:[],pathInferred:"/about/about.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5173\u4E8E - \u6211"},sfcBlocks:[],slug:"about",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/about/about.md",filePathRelative:"about/about.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/about/about.html.vue",componentFilePathRelative:"pages/about/about.html.vue",componentFileChunkName:"v-22991227",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/about/about.html.js",dataFilePathRelative:"pages/about/about.html.js",dataFileChunkName:"v-22991227",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/about/about.html",htmlFilePathRelative:"about/about.html"},{data:{key:"v-ff20590c",path:"/el-component/01.%E6%89%8B%E5%86%99el-form%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6.html",title:"\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6",lang:"zh-CN",frontmatter:{title:"\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6",date:"2019-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[{level:2,title:"\u524D\u8A00",slug:"\u524D\u8A00",children:[{level:3,title:"Form \u8868\u5355",slug:"form-\u8868\u5355",children:[]},{level:3,title:"\u7EC4\u4EF6",slug:"\u7EC4\u4EF6",children:[]}]}],git:{updatedTime:1656434853e3},filePathRelative:"el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.md"},key:"v-ff20590c",path:"/el-component/01.%E6%89%8B%E5%86%99el-form%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6.html",title:"\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6",lang:"zh-CN",frontmatter:{title:"\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6",date:"2019-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[{level:2,title:"\u524D\u8A00",slug:"\u524D\u8A00",children:[{level:3,title:"Form \u8868\u5355",slug:"form-\u8868\u5355",children:[]},{level:3,title:"\u7EC4\u4EF6",slug:"\u7EC4\u4EF6",children:[]}]}],content:`---
title: \u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6
date: 2019-06-06 14:11:35
categories: 
  - el-component
tags: 
  - 
---
# el-form\u8868\u5355\u7EC4\u4EF6

## \u524D\u8A00

\u60F3\u5230\u5F53\u521D\u5BF9\`el-form\`\u8868\u5355\u5982\u4F55\u5B9E\u73B0\u6709\u4E00\u4E9B\u56F0\u60D1\uFF0C\u6700\u8FD1\u770B\u7740\u6E90\u7801\u91CD\u73B0\`el-form\`\u7EC4\u4EF6\uFF0C\u5BF9\u8868\u5355\u5B9E\u73B0\u6709\u65B0\u7684\u8BA4\u8BC6\u3002

### Form \u8868\u5355

\u4E0B\u9762\u662F\u4E00\u4EFD\`el-form\`\u793A\u4F8B\u4EE3\u7801

\`\`\`vue
<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <el-form-item label="\u540D\u5B57" prop="pass">
      <el-input type="password" v-model="ruleForm.pass"></el-input>
    </el-form-item>
    <el-form-item label="\u5E74\u9F84" prop="age">
      <el-input v-model.number="ruleForm.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">\u63D0\u4EA4</el-button>
      <el-button @click="resetForm('ruleForm')">\u91CD\u7F6E</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [{ required: true, message: '\u8BF7\u8F93\u5165\u540D\u5B57', trigger: 'blur' }],
        age: [{ required: true, message: '\u8BF7\u8F93\u5165\u5E74\u9F84', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
<\/script>
\`\`\`

\u9996\u5148\u8981\u6E05\u695A\u4E00\u4E0B\u7EC4\u4EF6\u7684\u4F7F\u7528\u65B9\u5F0F

1. \`el-form\`\u63A5\u6536\`model\`\u548C\`rule\`\u4E24\u4E2A prop
   1. \`model\`\u8868\u793A\u8868\u5355\u7ED1\u5B9A\u7684\u6570\u636E\u5BF9\u8C61
   2. \`rule\`\u8868\u793A\u9A8C\u8BC1\u89C4\u5219\u7B56\u7565\uFF0C\u8868\u5355\u9A8C\u8BC1
2. \`el-form-item\`\u63A5\u6536\u7684\`prop\`\u5C5E\u6027\uFF0C\u5BF9\u5E94\`form\`\u7EC4\u4EF6\u7684\`model\`\u6570\u636E\u4E2D\u67D0\u4E2A key \u503C\uFF0C\u5982\u679C rule \u521A\u597D\u6709 key\uFF0C\u7ED9\u5B9A\u7684\u6761\u4EF6\u4E0B\u53BB\u5982\u5931\u53BB\u7126\u70B9\u9A8C\u8BC1\u89C4\u5219\u5339\u4E0D\u5339\u914D\u3002

\u6700\u7EC8\u5F97\u5230\u7C7B\u4F3C\u8FD9\u6837\u4EE3\u7801\u7ED3\u6784

\`\`\`vue
<template>
  <div>
    <form @submit.prevent>
      <div>
        \u59D3\u540D
        <input v-model="form.name" />
      </div>
      <div>
        \u5E74\u9F84
        <input v-model="form.age" />
      </div>
      <div>
        <button @click="submit">\u63D0\u4EA4</button>
      </div>
    </form>
  </div>
</template>
\`\`\`

### \u7EC4\u4EF6

\u7EC4\u4EF6\u4E2D\u5D4C\u5957\u7EC4\u4EF6\uFF0C\u4E3B\u8981\u662F\u901A\u8FC7\`slot\`\u63D2\u69FD\uFF0C\u53EF\u4EE5\u5C06\u7EC4\u4EF6\u62FC\u63A5\u6210\u4E0A\u9762\u4EE3\u7801\u7ED3\u6784\u3002\u4EE3\u7801\u5982\u4E0B

**el-form**

\`\`\`js
<template>
    <form>
        <slot></slot>
    </form>
</template>
<script>
export default {
    name:'elForm'
}
<\/script>
\`\`\`

**el-form-item**

\`\`\`vue
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'elFormItem'
}
<\/script>
\`\`\`

**el-input**

\`\`\`vue
<template>
  <input type="text" />
</template>
<script>
export default {
  name: 'elInput'
}
<\/script>
\`\`\`

\u63A5\u4E0B\u6765\u5C31\u8981\u8003\u8651\u5230\u7EC4\u4EF6\u4E2D\u7684\u901A\u8BAF\u3002
\u7531\u4E8E\u7EC4\u4EF6\u4E2D\u6709\u53EF\u80FD\u5D4C\u5957\u5F88\u591A\u7684\u7EC4\u4EF6\uFF0C\u5982\u679C\u5355\u7EAF\u901A\u8FC7\`$parent\`\u548C\`$children\`\u67E5\u627E\u51FA\u6765\u7684\u7236\u7EA7\u7EC4\u4EF6\uFF0C\u4E0D\u4E00\u5B9A\u662F\`el-form\`\u7EC4\u4EF6\u3002

\u4E24\u4E2A\u95EE\u9898\uFF1A

- \`el-form-item\`\u7EC4\u4EF6\u5982\u4F55\u5F97\u5230\`el-form\`\u7684\u6570\u636E
- \`el-form\`\u7EC4\u4EF6\u5982\u4F55\u548C\`el-form-item\`\u8FDB\u884C\u4EA4\u4E92

\u89E3\u51B3\u7B2C\u4E00\u95EE\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7\`provide\`\u4E0E\`inject\`\u5B9E\u73B0\u3002
\u89E3\u51B3\u7B2C\u4E8C\u95EE\u9898\uFF0C\u5C31\u8981\u8BB2\u5230\`dispatch\`\u6D3E\u53D1\u548C\`broadcast\`\u5E7F\u64AD

#### provide \u4E0E inject

\u901A\u8FC7\`provide\`\u5C06\u5F53\u524D\u8868\u5355\u5B9E\u4F8B\u4F20\u9012\u5230\u6240\u6709\u540E\u4EE3\u7EC4\u4EF6\u4E2D\uFF0C\u540E\u4EE3\u901A\u8FC7\`inject\`\u63A5\u53D7\u4F20\u9012\u7684\u503C\u3002

**el-form**

\`\`\`vue
<template>
  <form><slot></slot></form>
</template>
<script>
export default {
  name: 'elForm',
  provide() {
    return {
      elForm: this
    }
  },
  props: {
    model: {
      type: Object,
      default: () => ({})
    },
    rules: Object
  }
}
<\/script>
\`\`\`

**el-form-item**

\`\`\`js
<template>
    <div><slot></slot></div>
</template>
<script>
export default {
    name:'elFormItem',
    inject:['elForm'],
    props:{
        label:{
            type:String,
            default:''
        },
        prop:String
    },
    mounted(){
       console.log(this.elForm)
    }
}
<\/script>
\`\`\`

\`provide\`\u4E2D\`this\`\u6307\`el-form\`\u7EC4\u4EF6\uFF0C
\`this.elForm\`\u5C31\u80FD\u5F97\u5230\`el-form\`\u7EC4\u4EF6\u4E2D\u7684\u6570\u636E\u548C\u65B9\u6CD5\u3002

#### dispatch \u548C broadcast \u5E7F\u64AD

\`$dispatch\`\u4E0E\`$broadcast\`\u662F\u4E00\u79CD\u6709\u5386\u53F2\u7684\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u662F Vue1.0 \u63D0\u4F9B\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u5728 Vue2.0 \u4E2D\u5E9F\u5F03\u4E86\u3002

\`$dispatch\`: \`$dispatch\`\u4F1A\u5411\u4E0A\u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u540C\u65F6\u4F20\u9012\u8981\u89E6\u53D1\u7684\u7956\u5148\u7EC4\u4EF6\u7684\u540D\u79F0\u4E0E\u53C2\u6570\uFF0C\u5F53\u4E8B\u4EF6\u5411\u4E0A\u4F20\u9012\u5230\u5BF9\u5E94\u7684\u7EC4\u4EF6\u4E0A\u65F6\u4F1A\u89E6\u53D1\u7EC4\u4EF6\u4E0A\u7684\u4E8B\u4EF6\u4FA6\u542C\u5668\uFF0C\u540C\u65F6\u4F20\u64AD\u4F1A\u505C\u6B62\u3002

\`$broadcast\`: \`$broadcast\`\u4F1A\u5411\u6240\u6709\u7684\u540E\u4EE3\u7EC4\u4EF6\u4F20\u64AD\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u540C\u65F6\u4F20\u9012\u8981\u89E6\u53D1\u7684\u540E\u4EE3\u7EC4\u4EF6\u7684\u540D\u79F0\u4E0E\u53C2\u6570\uFF0C\u5F53\u4E8B\u4EF6\u4F20\u9012\u5230\u5BF9\u5E94\u7684\u540E\u4EE3\u7EC4\u4EF6\u65F6\uFF0C\u4F1A\u89E6\u53D1\u7EC4\u4EF6\u4E0A\u7684\u4E8B\u4EF6\u4FA6\u542C\u5668\uFF0C\u540C\u65F6\u4F20\u64AD\u4F1A\u505C\u6B62\uFF08\u56E0\u4E3A\u5411\u4E0B\u4F20\u9012\u662F\u6811\u5F62\u7684\uFF0C\u6240\u4EE5\u53EA\u4F1A\u505C\u6B62\u5176\u4E2D\u4E00\u4E2A\u53F6\u5B50\u5206\u652F\u7684\u4F20\u9012\uFF09

**$dispatch**

\`\`\`js
/**
 * \u6D3E\u53D1 (\u5411\u4E0A\u67E5\u627E) (\u4E00\u4E2A)
 * @param componentName // \u9700\u8981\u627E\u7684\u7EC4\u4EF6\u7684\u540D\u79F0
 * @param eventName // \u4E8B\u4EF6\u540D\u79F0
 * @param params // \u9700\u8981\u4F20\u9012\u7684\u53C2\u6570
 */
    dispatch(componentName, eventName, params) {
        let parent = this.$parent || this.$root;//$parent \u627E\u5230\u6700\u8FD1\u7684\u7236\u8282\u70B9 $root \u6839\u8282\u70B9
        let name = parent.$options.name; // \u83B7\u53D6\u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B\u7684name
        // \u5982\u679C\u5F53\u524D\u6709\u8282\u70B9 && \u5F53\u524D\u6CA1\u540D\u79F0 \u4E14 \u5F53\u524D\u540D\u79F0\u7B49\u4E8E\u9700\u8981\u4F20\u8FDB\u6765\u7684\u540D\u79F0\u7684\u65F6\u5019\u5C31\u53BB\u67E5\u627E\u5F53\u524D\u7684\u8282\u70B9
        // \u5FAA\u73AF\u51FA\u5F53\u524D\u540D\u79F0\u7684\u4E00\u6837\u7684\u7EC4\u4EF6\u5B9E\u4F8B
        while (parent && (!name||name!==componentName)) {
            parent = parent.$parent;
            if (parent) {
                name = parent.$options.name;
            }
        }
        // \u6709\u8282\u70B9\u8868\u793A\u5F53\u524D\u627E\u5230\u4E86name\u4E00\u6837\u7684\u5B9E\u4F8B
        if (parent) {
            parent.$emit.apply(parent,[eventName].concat(params))
        }
    },
\`\`\`

**$broadcast**

\`\`\`js
/**
 * \u6D3E\u53D1 (\u5411\u4E0A\u67E5\u627E) (\u4E00\u4E2A)
 * @param componentName // \u9700\u8981\u627E\u7684\u7EC4\u4EF6\u7684\u540D\u79F0
 * @param eventName // \u4E8B\u4EF6\u540D\u79F0
 * @param params // \u9700\u8981\u4F20\u9012\u7684\u53C2\u6570
 */
broadcast(componentName, eventName, params) {
// \u5FAA\u73AF\u5B50\u8282\u70B9\u627E\u5230\u540D\u79F0\u4E00\u6837\u7684\u5B50\u8282\u70B9 \u5426\u5219 \u9012\u5F52 \u5F53\u524D\u5B50\u8282\u70B9
this.$children.map(child=>{
    if (componentName===child.$options.name) {
        child.$emit.apply(child,[eventName].concat(params))
    }else {
        broadcast.apply(child,[componentName,eventName].concat(params))
    }
})
\`\`\`

**\u9A8C\u8BC1\u8868\u5355**

\`async-validator\`\u662F\u4E00\u4E2A\u8868\u5355\u7684\u5F02\u6B65\u9A8C\u8BC1\u7684\u7B2C\u4E09\u65B9\u5E93\uFF0C\u4E5F\u662F\`element-ui\` \u4E2D\u7684\`form\`\u7EC4\u4EF6\u6240\u4F7F\u7528\u7684\u9A8C\u8BC1\u65B9\u5F0F\u3002

**el-form-item**

\`\`\`vue
<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    {{ errorMessage }}
  </div>
</template>
<script>
import Schema from 'async-validator'
export default {
  name: 'elFormItem',
  inject: ['elForm'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: String
  },
  data() {
    return { errorMessage: '' }
  },
  mounted() {
    this.$on('validate', () => {
      if (this.prop) {
        let rule = this.elForm.rules[this.prop]
        let newValue = this.elForm.model[this.prop]

        let descriptor = {
          [this.prop]: rule
        }
        let schema = new Schema(descriptor)

        return schema.validate({ [this.prop]: newValue }, (err, res) => {
          if (err) {
            this.errorMessage = err[0].message
          } else {
            this.errorMessage = ''
          }
        })
      }
    })
  }
}
<\/script>
\`\`\`
`,contentRendered:`<h1 id="el-form\u8868\u5355\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#el-form\u8868\u5355\u7EC4\u4EF6" aria-hidden="true">#</a> el-form\u8868\u5355\u7EC4\u4EF6</h1>
<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2>
<p>\u60F3\u5230\u5F53\u521D\u5BF9<code v-pre>el-form</code>\u8868\u5355\u5982\u4F55\u5B9E\u73B0\u6709\u4E00\u4E9B\u56F0\u60D1\uFF0C\u6700\u8FD1\u770B\u7740\u6E90\u7801\u91CD\u73B0<code v-pre>el-form</code>\u7EC4\u4EF6\uFF0C\u5BF9\u8868\u5355\u5B9E\u73B0\u6709\u65B0\u7684\u8BA4\u8BC6\u3002</p>
<h3 id="form-\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#form-\u8868\u5355" aria-hidden="true">#</a> Form \u8868\u5355</h3>
<p>\u4E0B\u9762\u662F\u4E00\u4EFD<code v-pre>el-form</code>\u793A\u4F8B\u4EE3\u7801</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form</span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm<span class="token punctuation">"</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rules<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\u540D\u5B57<span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.pass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\u5E74\u9F84<span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model.number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.age<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submitForm(<span class="token punctuation">'</span>ruleForm<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u63D0\u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resetForm(<span class="token punctuation">'</span>ruleForm<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u91CD\u7F6E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">ruleForm</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">pass</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">checkPass</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">''</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">pass</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'\u8BF7\u8F93\u5165\u540D\u5B57'</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'blur'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'\u8BF7\u8F93\u5165\u5E74\u9F84'</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'blur'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">submitForm</span><span class="token punctuation">(</span><span class="token parameter">formName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span>formName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token parameter">valid</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'submit!'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'error submit!!'</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">resetForm</span><span class="token punctuation">(</span><span class="token parameter">formName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span>formName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9996\u5148\u8981\u6E05\u695A\u4E00\u4E0B\u7EC4\u4EF6\u7684\u4F7F\u7528\u65B9\u5F0F</p>
<ol>
<li><code v-pre>el-form</code>\u63A5\u6536<code v-pre>model</code>\u548C<code v-pre>rule</code>\u4E24\u4E2A prop
<ol>
<li><code v-pre>model</code>\u8868\u793A\u8868\u5355\u7ED1\u5B9A\u7684\u6570\u636E\u5BF9\u8C61</li>
<li><code v-pre>rule</code>\u8868\u793A\u9A8C\u8BC1\u89C4\u5219\u7B56\u7565\uFF0C\u8868\u5355\u9A8C\u8BC1</li>
</ol>
</li>
<li><code v-pre>el-form-item</code>\u63A5\u6536\u7684<code v-pre>prop</code>\u5C5E\u6027\uFF0C\u5BF9\u5E94<code v-pre>form</code>\u7EC4\u4EF6\u7684<code v-pre>model</code>\u6570\u636E\u4E2D\u67D0\u4E2A key \u503C\uFF0C\u5982\u679C rule \u521A\u597D\u6709 key\uFF0C\u7ED9\u5B9A\u7684\u6761\u4EF6\u4E0B\u53BB\u5982\u5931\u53BB\u7126\u70B9\u9A8C\u8BC1\u89C4\u5219\u5339\u4E0D\u5339\u914D\u3002</li>
</ol>
<p>\u6700\u7EC8\u5F97\u5230\u7C7B\u4F3C\u8FD9\u6837\u4EE3\u7801\u7ED3\u6784</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">@submit.prevent</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        \u59D3\u540D
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        \u5E74\u9F84
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.age<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u63D0\u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h3>
<p>\u7EC4\u4EF6\u4E2D\u5D4C\u5957\u7EC4\u4EF6\uFF0C\u4E3B\u8981\u662F\u901A\u8FC7<code v-pre>slot</code>\u63D2\u69FD\uFF0C\u53EF\u4EE5\u5C06\u7EC4\u4EF6\u62FC\u63A5\u6210\u4E0A\u9762\u4EE3\u7801\u7ED3\u6784\u3002\u4EE3\u7801\u5982\u4E0B</p>
<p><strong>el-form</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>form<span class="token operator">></span>
        <span class="token operator">&lt;</span>slot<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'elForm'</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>el-form-item</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'elFormItem'</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>el-input</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'elInput'</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u5C31\u8981\u8003\u8651\u5230\u7EC4\u4EF6\u4E2D\u7684\u901A\u8BAF\u3002
\u7531\u4E8E\u7EC4\u4EF6\u4E2D\u6709\u53EF\u80FD\u5D4C\u5957\u5F88\u591A\u7684\u7EC4\u4EF6\uFF0C\u5982\u679C\u5355\u7EAF\u901A\u8FC7<code v-pre>$parent</code>\u548C<code v-pre>$children</code>\u67E5\u627E\u51FA\u6765\u7684\u7236\u7EA7\u7EC4\u4EF6\uFF0C\u4E0D\u4E00\u5B9A\u662F<code v-pre>el-form</code>\u7EC4\u4EF6\u3002</p>
<p>\u4E24\u4E2A\u95EE\u9898\uFF1A</p>
<ul>
<li><code v-pre>el-form-item</code>\u7EC4\u4EF6\u5982\u4F55\u5F97\u5230<code v-pre>el-form</code>\u7684\u6570\u636E</li>
<li><code v-pre>el-form</code>\u7EC4\u4EF6\u5982\u4F55\u548C<code v-pre>el-form-item</code>\u8FDB\u884C\u4EA4\u4E92</li>
</ul>
<p>\u89E3\u51B3\u7B2C\u4E00\u95EE\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7<code v-pre>provide</code>\u4E0E<code v-pre>inject</code>\u5B9E\u73B0\u3002
\u89E3\u51B3\u7B2C\u4E8C\u95EE\u9898\uFF0C\u5C31\u8981\u8BB2\u5230<code v-pre>dispatch</code>\u6D3E\u53D1\u548C<code v-pre>broadcast</code>\u5E7F\u64AD</p>
<h4 id="provide-\u4E0E-inject" tabindex="-1"><a class="header-anchor" href="#provide-\u4E0E-inject" aria-hidden="true">#</a> provide \u4E0E inject</h4>
<p>\u901A\u8FC7<code v-pre>provide</code>\u5C06\u5F53\u524D\u8868\u5355\u5B9E\u4F8B\u4F20\u9012\u5230\u6240\u6709\u540E\u4EE3\u7EC4\u4EF6\u4E2D\uFF0C\u540E\u4EE3\u901A\u8FC7<code v-pre>inject</code>\u63A5\u53D7\u4F20\u9012\u7684\u503C\u3002</p>
<p><strong>el-form</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'elForm'</span><span class="token punctuation">,</span>
  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">elForm</span><span class="token operator">:</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> Object
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>el-form-item</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">&lt;</span>slot<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'elFormItem'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'elForm'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">''</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">prop</span><span class="token operator">:</span>String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>elForm<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>provide</code>\u4E2D<code v-pre>this</code>\u6307<code v-pre>el-form</code>\u7EC4\u4EF6\uFF0C
<code v-pre>this.elForm</code>\u5C31\u80FD\u5F97\u5230<code v-pre>el-form</code>\u7EC4\u4EF6\u4E2D\u7684\u6570\u636E\u548C\u65B9\u6CD5\u3002</p>
<h4 id="dispatch-\u548C-broadcast-\u5E7F\u64AD" tabindex="-1"><a class="header-anchor" href="#dispatch-\u548C-broadcast-\u5E7F\u64AD" aria-hidden="true">#</a> dispatch \u548C broadcast \u5E7F\u64AD</h4>
<p><code v-pre>$dispatch</code>\u4E0E<code v-pre>$broadcast</code>\u662F\u4E00\u79CD\u6709\u5386\u53F2\u7684\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u662F Vue1.0 \u63D0\u4F9B\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u5728 Vue2.0 \u4E2D\u5E9F\u5F03\u4E86\u3002</p>
<p><code v-pre>$dispatch</code>: <code v-pre>$dispatch</code>\u4F1A\u5411\u4E0A\u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u540C\u65F6\u4F20\u9012\u8981\u89E6\u53D1\u7684\u7956\u5148\u7EC4\u4EF6\u7684\u540D\u79F0\u4E0E\u53C2\u6570\uFF0C\u5F53\u4E8B\u4EF6\u5411\u4E0A\u4F20\u9012\u5230\u5BF9\u5E94\u7684\u7EC4\u4EF6\u4E0A\u65F6\u4F1A\u89E6\u53D1\u7EC4\u4EF6\u4E0A\u7684\u4E8B\u4EF6\u4FA6\u542C\u5668\uFF0C\u540C\u65F6\u4F20\u64AD\u4F1A\u505C\u6B62\u3002</p>
<p><code v-pre>$broadcast</code>: <code v-pre>$broadcast</code>\u4F1A\u5411\u6240\u6709\u7684\u540E\u4EE3\u7EC4\u4EF6\u4F20\u64AD\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u540C\u65F6\u4F20\u9012\u8981\u89E6\u53D1\u7684\u540E\u4EE3\u7EC4\u4EF6\u7684\u540D\u79F0\u4E0E\u53C2\u6570\uFF0C\u5F53\u4E8B\u4EF6\u4F20\u9012\u5230\u5BF9\u5E94\u7684\u540E\u4EE3\u7EC4\u4EF6\u65F6\uFF0C\u4F1A\u89E6\u53D1\u7EC4\u4EF6\u4E0A\u7684\u4E8B\u4EF6\u4FA6\u542C\u5668\uFF0C\u540C\u65F6\u4F20\u64AD\u4F1A\u505C\u6B62\uFF08\u56E0\u4E3A\u5411\u4E0B\u4F20\u9012\u662F\u6811\u5F62\u7684\uFF0C\u6240\u4EE5\u53EA\u4F1A\u505C\u6B62\u5176\u4E2D\u4E00\u4E2A\u53F6\u5B50\u5206\u652F\u7684\u4F20\u9012\uFF09</p>
<p><strong>$dispatch</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u6D3E\u53D1 (\u5411\u4E0A\u67E5\u627E) (\u4E00\u4E2A)
 * <span class="token keyword">@param</span> <span class="token parameter">componentName</span> // \u9700\u8981\u627E\u7684\u7EC4\u4EF6\u7684\u540D\u79F0
 * <span class="token keyword">@param</span> <span class="token parameter">eventName</span> // \u4E8B\u4EF6\u540D\u79F0
 * <span class="token keyword">@param</span> <span class="token parameter">params</span> // \u9700\u8981\u4F20\u9012\u7684\u53C2\u6570
 */</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token parameter">componentName<span class="token punctuation">,</span> eventName<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> parent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$parent <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">;</span><span class="token comment">//$parent \u627E\u5230\u6700\u8FD1\u7684\u7236\u8282\u70B9 $root \u6839\u8282\u70B9</span>
        <span class="token keyword">let</span> name <span class="token operator">=</span> parent<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B\u7684name</span>
        <span class="token comment">// \u5982\u679C\u5F53\u524D\u6709\u8282\u70B9 &amp;&amp; \u5F53\u524D\u6CA1\u540D\u79F0 \u4E14 \u5F53\u524D\u540D\u79F0\u7B49\u4E8E\u9700\u8981\u4F20\u8FDB\u6765\u7684\u540D\u79F0\u7684\u65F6\u5019\u5C31\u53BB\u67E5\u627E\u5F53\u524D\u7684\u8282\u70B9</span>
        <span class="token comment">// \u5FAA\u73AF\u51FA\u5F53\u524D\u540D\u79F0\u7684\u4E00\u6837\u7684\u7EC4\u4EF6\u5B9E\u4F8B</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>parent <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>name<span class="token operator">||</span>name<span class="token operator">!==</span>componentName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>$parent<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                name <span class="token operator">=</span> parent<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u6709\u8282\u70B9\u8868\u793A\u5F53\u524D\u627E\u5230\u4E86name\u4E00\u6837\u7684\u5B9E\u4F8B</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            parent<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span><span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>$broadcast</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u6D3E\u53D1 (\u5411\u4E0A\u67E5\u627E) (\u4E00\u4E2A)
 * <span class="token keyword">@param</span> <span class="token parameter">componentName</span> // \u9700\u8981\u627E\u7684\u7EC4\u4EF6\u7684\u540D\u79F0
 * <span class="token keyword">@param</span> <span class="token parameter">eventName</span> // \u4E8B\u4EF6\u540D\u79F0
 * <span class="token keyword">@param</span> <span class="token parameter">params</span> // \u9700\u8981\u4F20\u9012\u7684\u53C2\u6570
 */</span>
<span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token parameter">componentName<span class="token punctuation">,</span> eventName<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// \u5FAA\u73AF\u5B50\u8282\u70B9\u627E\u5230\u540D\u79F0\u4E00\u6837\u7684\u5B50\u8282\u70B9 \u5426\u5219 \u9012\u5F52 \u5F53\u524D\u5B50\u8282\u70B9</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>componentName<span class="token operator">===</span>child<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        child<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span><span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">broadcast</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span><span class="token punctuation">[</span>componentName<span class="token punctuation">,</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u9A8C\u8BC1\u8868\u5355</strong></p>
<p><code v-pre>async-validator</code>\u662F\u4E00\u4E2A\u8868\u5355\u7684\u5F02\u6B65\u9A8C\u8BC1\u7684\u7B2C\u4E09\u65B9\u5E93\uFF0C\u4E5F\u662F<code v-pre>element-ui</code> \u4E2D\u7684<code v-pre>form</code>\u7EC4\u4EF6\u6240\u4F7F\u7528\u7684\u9A8C\u8BC1\u65B9\u5F0F\u3002</p>
<p><strong>el-form-item</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ label }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    {{ errorMessage }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Schema <span class="token keyword">from</span> <span class="token string">'async-validator'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'elFormItem'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'elForm'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">errorMessage</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'validate'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> rule <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>elForm<span class="token punctuation">.</span>rules<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>prop<span class="token punctuation">]</span>
        <span class="token keyword">let</span> newValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>elForm<span class="token punctuation">.</span>model<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>prop<span class="token punctuation">]</span>

        <span class="token keyword">let</span> descriptor <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>prop<span class="token punctuation">]</span><span class="token operator">:</span> rule
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> schema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span>descriptor<span class="token punctuation">)</span>

        <span class="token keyword">return</span> schema<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>prop<span class="token punctuation">]</span><span class="token operator">:</span> newValue <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>errorMessage <span class="token operator">=</span> err<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>message
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>errorMessage <span class="token operator">=</span> <span class="token string">''</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2019-06-06",deps:[],links:[],pathInferred:"/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6"},sfcBlocks:[],slug:"01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.md",filePathRelative:"el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html.vue",componentFilePathRelative:"pages/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html.vue",componentFileChunkName:"v-ff20590c",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html.js",dataFilePathRelative:"pages/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html.js",dataFileChunkName:"v-ff20590c",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html",htmlFilePathRelative:"el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html"},{data:{key:"v-56ee61d4",path:"/el-component/02.Vue%20Toast%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"Vue Toast\u7EC4\u4EF6\u5F00\u53D1",lang:"zh-CN",frontmatter:{title:"Vue Toast\u7EC4\u4EF6\u5F00\u53D1",date:"2019-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1656434853e3},filePathRelative:"el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.md"},key:"v-56ee61d4",path:"/el-component/02.Vue%20Toast%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"Vue Toast\u7EC4\u4EF6\u5F00\u53D1",lang:"zh-CN",frontmatter:{title:"Vue Toast\u7EC4\u4EF6\u5F00\u53D1",date:"2019-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[],content:`---
title: Vue Toast\u7EC4\u4EF6\u5F00\u53D1
date: 2019-06-06 14:11:35
categories: 
  - el-component
tags: 
  - 
---
# Vue Toast\u7EC4\u4EF6\u5F00\u53D1

\`\`\`js
import vue from 'vue'
// \u8FD9\u91CC\u5C31\u662F\u6211\u4EEC\u521A\u521A\u521B\u5EFA\u7684\u90A3\u4E2A\u9759\u6001\u7EC4\u4EF6
import toastComponent from './Toast.vue'
// \u8FD4\u56DE\u4E00\u4E2A \u6269\u5C55\u5B9E\u4F8B\u6784\u9020\u5668, \u5173\u4E8E vue.extend \u6709\u4E0D\u61C2\u7684\u540C\u5B66,\u53EF\u4EE5\u53BB\u67E5\u770B\u4EE5\u4E0B\u5B98\u65B9\u6587\u6863 https://cn.vuejs.org/v2/api/#Vue-extend
const ToastConstructor = vue.extend(toastComponent)
// \u5B9A\u4E49\u5F39\u51FA\u7EC4\u4EF6\u7684\u51FD\u6570 \u63A5\u65362\u4E2A\u53C2\u6570, \u8981\u663E\u793A\u7684\u6587\u672C \u548C \u663E\u793A\u65F6\u95F4
function showToast(text, duration = 2000) {
  // \u5B9E\u4F8B\u5316\u4E00\u4E2A toast.vue
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text: text,
        showWrap: true,
        showContent: true
      }
    }
  })
  // \u628A \u5B9E\u4F8B\u5316\u7684 toast.vue \u6DFB\u52A0\u5230 body \u91CC
  document.body.appendChild(toastDom.$el)
  // \u63D0\u524D 250ms \u6267\u884C\u6DE1\u51FA\u52A8\u753B(\u56E0\u4E3A\u6211\u4EEC\u518Dcss\u91CC\u9762\u8BBE\u7F6E\u7684\u9690\u85CF\u52A8\u753B\u6301\u7EED\u662F250ms)
  setTimeout(() => {
    toastDom.showContent = false
  }, duration - 250)
  // \u8FC7\u4E86 duration \u65F6\u95F4\u540E\u9690\u85CF\u6574\u4E2A\u7EC4\u4EF6
  setTimeout(() => {
    toastDom.showWrap = false
  }, duration)
}
// \u6CE8\u518C\u4E3A\u5168\u5C40\u7EC4\u4EF6\u7684\u51FD\u6570
function registryToast() {
  // \u5C06\u7EC4\u4EF6\u6CE8\u518C\u5230 vue \u7684 \u539F\u578B\u94FE\u91CC\u53BB,
  // \u8FD9\u6837\u5C31\u53EF\u4EE5\u5728\u6240\u6709 vue \u7684\u5B9E\u4F8B\u91CC\u9762\u4F7F\u7528 this.$toast()
  vue.prototype.$toast = showToast
}
export { showToast, registryToast }
\`\`\`

\`\`\`vue
<template>
  <div class="wrap" v-if="showWrap" :class="showContent ? 'fadein' : 'fadeout'">
    {{ text }}
  </div>
</template>
<style scoped>
.wrap {
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  max-width: 400px;
  padding: 20px;
  transform: translate(-50%, -50%);
  color: #fff;
}
.fadein {
  animation: animate_in 0.25s;
}
.fadeout {
  animation: animate_out 0.25s;
  opacity: 0;
}
@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
\`\`\`
`,contentRendered:`<h1 id="vue-toast\u7EC4\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#vue-toast\u7EC4\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> Vue Toast\u7EC4\u4EF6\u5F00\u53D1</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token comment">// \u8FD9\u91CC\u5C31\u662F\u6211\u4EEC\u521A\u521A\u521B\u5EFA\u7684\u90A3\u4E2A\u9759\u6001\u7EC4\u4EF6</span>
<span class="token keyword">import</span> toastComponent <span class="token keyword">from</span> <span class="token string">'./Toast.vue'</span>
<span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A \u6269\u5C55\u5B9E\u4F8B\u6784\u9020\u5668, \u5173\u4E8E vue.extend \u6709\u4E0D\u61C2\u7684\u540C\u5B66,\u53EF\u4EE5\u53BB\u67E5\u770B\u4EE5\u4E0B\u5B98\u65B9\u6587\u6863 https://cn.vuejs.org/v2/api/#Vue-extend</span>
<span class="token keyword">const</span> ToastConstructor <span class="token operator">=</span> vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>toastComponent<span class="token punctuation">)</span>
<span class="token comment">// \u5B9A\u4E49\u5F39\u51FA\u7EC4\u4EF6\u7684\u51FD\u6570 \u63A5\u65362\u4E2A\u53C2\u6570, \u8981\u663E\u793A\u7684\u6587\u672C \u548C \u663E\u793A\u65F6\u95F4</span>
<span class="token keyword">function</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> duration <span class="token operator">=</span> <span class="token number">2000</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B9E\u4F8B\u5316\u4E00\u4E2A toast.vue</span>
  <span class="token keyword">const</span> toastDom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ToastConstructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    toastDom<span class="token punctuation">.</span>showContent <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> duration <span class="token operator">-</span> <span class="token number">250</span><span class="token punctuation">)</span>
  <span class="token comment">// \u8FC7\u4E86 duration \u65F6\u95F4\u540E\u9690\u85CF\u6574\u4E2A\u7EC4\u4EF6</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showWrap<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showContent ? <span class="token punctuation">'</span>fadein<span class="token punctuation">'</span> : <span class="token punctuation">'</span>fadeout<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    {{ text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2019-06-06",deps:[],links:[],pathInferred:"/el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html",pathLocale:"/",permalink:null,routeMeta:{title:"Vue Toast\u7EC4\u4EF6\u5F00\u53D1"},sfcBlocks:[],slug:"02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.md",filePathRelative:"el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html.vue",componentFilePathRelative:"pages/el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html.vue",componentFileChunkName:"v-56ee61d4",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html.js",dataFilePathRelative:"pages/el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html.js",dataFileChunkName:"v-56ee61d4",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html",htmlFilePathRelative:"el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html"},{data:{key:"v-58fa6412",path:"/el-component/04.Vue%20button%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"Vue button\u7EC4\u4EF6\u5F00\u53D1",lang:"zh-CN",frontmatter:{title:"Vue button\u7EC4\u4EF6\u5F00\u53D1",date:"2019-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1656434853e3},filePathRelative:"el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.md"},key:"v-58fa6412",path:"/el-component/04.Vue%20button%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"Vue button\u7EC4\u4EF6\u5F00\u53D1",lang:"zh-CN",frontmatter:{title:"Vue button\u7EC4\u4EF6\u5F00\u53D1",date:"2019-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[],content:`---
title: Vue button\u7EC4\u4EF6\u5F00\u53D1
date: 2019-06-06 14:11:35
categories: 
  - el-component
tags: 
  - 
---
# Vue button\u7EC4\u4EF6\u5F00\u53D1

\`\`\`vue
<template>
  <button class="lcx-button" :class="btnClass">
    <lcx-icon :icon="icon" v-if="icon" />
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'lcx-button',
  props: {
    type: {
      type: String,
      default: '',
      validator(type) {
        if (type && !['primary', 'success', 'info', 'danger', 'warning'].includes(type)) {
          // eslint-disable-next-line no-console
          console.error('type\u7C7B\u578B\u5FC5\u987B\u4E3A\u5176\u4E2D\u4E00\u79CD' + ['primary', 'success', 'info', 'danger', 'warning'].join('\u3001'))
          return false
        }
        return true
      }
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    btnClass() {
      let classes = []
      if (this.type) {
        classes.push(\`lcx-button-\${this.type}\`)
      }
      return classes
    }
  }
}
<\/script>
<style lang="scss" scoped>
@import '@/assets/css/_var.scss';
.lcx-button {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background-color: #fff;
  &:hover {
    color: $primary;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:focus,
  &:active {
    color: $primary;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
    outline: none;
  }
  ::v-deep .icon {
    margin-right: 5px;
    color: #fff;
  }

  @each $type, $color in (primary: $primary, success: $success, info: $info, danger: $danger, warning: $warning) {
    &-#{$type} {
      color: #fff;
      background-color: $color;
    }
  }
  @each $type, $color in (primary: $primary-background-hover, success: $success-background-hover, info: $info-background-hover, danger: $danger-background-hover, warning: $warning-background-hover) {
    &-#{$type}:hover {
      color: #fff;
      background-color: $color;
      border-color: $color;
    }
  }

  @each $type, $color in (primary: $primary-background-active, success: $success-background-active, info: $info-background-active, danger: $danger-background-active, warning: $warning-background-active) {
    &-#{$type}:active,
    &-#{$type}:focus {
      color: #fff;
      background-color: $color;
      border-color: $color;
    }
  }
}
</style>
\`\`\`
`,contentRendered:`<h1 id="vue-button\u7EC4\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#vue-button\u7EC4\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> Vue button\u7EC4\u4EF6\u5F00\u53D1</h1>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lcx-button<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btnClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lcx-icon</span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'lcx-button'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">[</span><span class="token string">'primary'</span><span class="token punctuation">,</span> <span class="token string">'success'</span><span class="token punctuation">,</span> <span class="token string">'info'</span><span class="token punctuation">,</span> <span class="token string">'danger'</span><span class="token punctuation">,</span> <span class="token string">'warning'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// eslint-disable-next-line no-console</span>
          console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'type\u7C7B\u578B\u5FC5\u987B\u4E3A\u5176\u4E2D\u4E00\u79CD'</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token string">'primary'</span><span class="token punctuation">,</span> <span class="token string">'success'</span><span class="token punctuation">,</span> <span class="token string">'info'</span><span class="token punctuation">,</span> <span class="token string">'danger'</span><span class="token punctuation">,</span> <span class="token string">'warning'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'\u3001'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">btnClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> classes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        classes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">lcx-button-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> classes
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'@/assets/css/_var.scss'</span><span class="token punctuation">;</span></span>
<span class="token selector">.lcx-button</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #606266<span class="token punctuation">;</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px 20px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #dcdfe6<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $primary<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #c6e2ff<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ecf5ff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;:focus,
  &amp;:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $primary<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #c6e2ff<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ecf5ff<span class="token punctuation">;</span>
    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">::v-deep .icon</span> <span class="token punctuation">{</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token atrule"><span class="token rule">@each</span> $type<span class="token punctuation">,</span> $color in <span class="token punctuation">(</span><span class="token property">primary</span><span class="token punctuation">:</span> $primary<span class="token punctuation">,</span> <span class="token property">success</span><span class="token punctuation">:</span> $success<span class="token punctuation">,</span> <span class="token property">info</span><span class="token punctuation">:</span> $info<span class="token punctuation">,</span> <span class="token property">danger</span><span class="token punctuation">:</span> $danger<span class="token punctuation">,</span> <span class="token property">warning</span><span class="token punctuation">:</span> $warning<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;-#</span><span class="token punctuation">{</span>$type<span class="token punctuation">}</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@each</span> $type<span class="token punctuation">,</span> $color in <span class="token punctuation">(</span><span class="token property">primary</span><span class="token punctuation">:</span> $primary-background-hover<span class="token punctuation">,</span> <span class="token property">success</span><span class="token punctuation">:</span> $success-background-hover<span class="token punctuation">,</span> <span class="token property">info</span><span class="token punctuation">:</span> $info-background-hover<span class="token punctuation">,</span> <span class="token property">danger</span><span class="token punctuation">:</span> $danger-background-hover<span class="token punctuation">,</span> <span class="token property">warning</span><span class="token punctuation">:</span> $warning-background-hover<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;-#</span><span class="token punctuation">{</span>$type<span class="token punctuation">}</span><span class="token selector">:hover</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
      <span class="token property">border-color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token atrule"><span class="token rule">@each</span> $type<span class="token punctuation">,</span> $color in <span class="token punctuation">(</span><span class="token property">primary</span><span class="token punctuation">:</span> $primary-background-active<span class="token punctuation">,</span> <span class="token property">success</span><span class="token punctuation">:</span> $success-background-active<span class="token punctuation">,</span> <span class="token property">info</span><span class="token punctuation">:</span> $info-background-active<span class="token punctuation">,</span> <span class="token property">danger</span><span class="token punctuation">:</span> $danger-background-active<span class="token punctuation">,</span> <span class="token property">warning</span><span class="token punctuation">:</span> $warning-background-active<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;-#</span><span class="token punctuation">{</span>$type<span class="token punctuation">}</span><span class="token selector">:active,
    &amp;-#</span><span class="token punctuation">{</span>$type<span class="token punctuation">}</span><span class="token selector">:focus</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
      <span class="token property">border-color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2019-06-06",deps:[],links:[],pathInferred:"/el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html",pathLocale:"/",permalink:null,routeMeta:{title:"Vue button\u7EC4\u4EF6\u5F00\u53D1"},sfcBlocks:[],slug:"04.Vue button\u7EC4\u4EF6\u5F00\u53D1",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.md",filePathRelative:"el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html.vue",componentFilePathRelative:"pages/el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html.vue",componentFileChunkName:"v-58fa6412",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html.js",dataFilePathRelative:"pages/el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html.js",dataFileChunkName:"v-58fa6412",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html",htmlFilePathRelative:"el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html"},{data:{key:"v-32fefc11",path:"/el-component/05.Vue%20icon%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"Vue icon\u7EC4\u4EF6\u5F00\u53D1",lang:"zh-CN",frontmatter:{title:"Vue icon\u7EC4\u4EF6\u5F00\u53D1",date:"2018-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1656434853e3},filePathRelative:"el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.md"},key:"v-32fefc11",path:"/el-component/05.Vue%20icon%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"Vue icon\u7EC4\u4EF6\u5F00\u53D1",lang:"zh-CN",frontmatter:{title:"Vue icon\u7EC4\u4EF6\u5F00\u53D1",date:"2018-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[],content:`---
title: Vue icon\u7EC4\u4EF6\u5F00\u53D1
date: 2018-06-06 14:11:35
categories: 
  - el-component
tags: 
  - 
---

# Vue icon\u7EC4\u4EF6\u5F00\u53D1

\`\`\`vue
<template>
  <svg class="icon" aria-hidden="true" :class="svgClass">
    <use :xlink:href="\`#\${icon}\`"></use>
  </svg>
</template>
<script>
export default {
  name: 'lcxIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    svgClass: {
      type: String
    }
  }
}
<\/script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: #999;
}
</style>
\`\`\`
`,contentRendered:`<h1 id="vue-icon\u7EC4\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#vue-icon\u7EC4\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> Vue icon\u7EC4\u4EF6\u5F00\u53D1</h1>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svgClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">:xlink:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\`#\${icon}\`<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'lcxIcon'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">svgClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.icon</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> -0.15em<span class="token punctuation">;</span>
  <span class="token property">fill</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2018-06-06",deps:[],links:[],pathInferred:"/el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html",pathLocale:"/",permalink:null,routeMeta:{title:"Vue icon\u7EC4\u4EF6\u5F00\u53D1"},sfcBlocks:[],slug:"05.Vue icon\u7EC4\u4EF6\u5F00\u53D1",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.md",filePathRelative:"el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html.vue",componentFilePathRelative:"pages/el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html.vue",componentFileChunkName:"v-32fefc11",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html.js",dataFilePathRelative:"pages/el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html.js",dataFileChunkName:"v-32fefc11",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html",htmlFilePathRelative:"el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html"},{data:{key:"v-dc317c26",path:"/el-component/06.Vue%20input%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"Vue input\u7EC4\u4EF6\u5F00\u53D1",lang:"zh-CN",frontmatter:{title:"Vue input\u7EC4\u4EF6\u5F00\u53D1",date:"2018-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1656434853e3},filePathRelative:"el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.md"},key:"v-dc317c26",path:"/el-component/06.Vue%20input%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"Vue input\u7EC4\u4EF6\u5F00\u53D1",lang:"zh-CN",frontmatter:{title:"Vue input\u7EC4\u4EF6\u5F00\u53D1",date:"2018-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[],content:`---
title: Vue input\u7EC4\u4EF6\u5F00\u53D1
date: 2018-06-06 14:11:35
categories: 
  - el-component
tags: 
  - 
---
# Vue input\u7EC4\u4EF6\u5F00\u53D1

\`\`\`vue
<template>
  <div class="lcx-input" :class="inputClass">
    <!-- <slot name='prefix' /> -->
    <input
      :type="showPassword ? (passwordVisible ?type : 'password' ) : type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      class="lcx-input__inner"
      ref="input"
    />
    <!-- <slot name='suffix' /> -->
    <!-- native \u7ED9\u539F\u751F\u7ED1\u5B9A\u4E8B\u4EF6 \u4E0D\u52A0\u7ED9\u7EC4\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6 -->
    <!-- <div
      class="clearable"
      v-if="clearable"
      @click="$emit('input', '')"
      @mousedown.prevent
    >
      X
    </div> -->
    <lcx-icon class="clearable" icon="icon-guanbi" v-if="clearable" @click.native="$emit('input', '')" @mousedown.native.prevent />
    <lcx-icon class="showPassword" icon="icon-icon-test" v-if="showPassword" @click.native="changeStatus" />
  </div>
</template>

<script>
export default {
  name: 'lcx-input',
  props: {
    value: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: '\u8BF7\u8F93\u5165\u5185\u5BB9',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inputClass() {
      const classes = [];
      if (this.clearable || this.showPassword) {
        classes.push(\`lcx-input--suffix\`);
      }
      // if (this.clearable || this.showPassword) {
      //   classes.push(\`lcx-input--prefix\`);
      // }
      return classes;
    },
  },
  data() {
    return {
      passwordVisible: false,
    };
  },
  methods:{
    changeStatus(){
       this.passwordVisible = !this.passwordVisible
       this.$nextTick(()=>{
        this.$refs.input.focus()
       })
    }
  }
};
<\/script>
<style lang="scss" scoped>
.lcx-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 180px;
  &.lcx-input--prefix{
    .lcx-input__inner {
      padding: 0 30px 0 15px;
    }
  }
  &.lcx-input--suffix{
    .lcx-input__inner {
      padding: 0 30px 0 15px;
    }
  }
  &.lcx-input--prefix.lcx-input--suffix{
    .lcx-input__inner {
      padding: 0 30px;
    }
  }
  .lcx-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    // line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &[disabled] {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .clearable {
    position: absolute;
    right: 14.5px;
    top: 15px;
    font-size: 12px;
    cursor: pointer;
  }
  .showPassword {
    position: absolute;
    right: 10px;
    top: 12px;
    font-size: 16px;
    cursor: pointer;
  }
}
</style>

\`\`\`
`,contentRendered:`<h1 id="vue-input\u7EC4\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#vue-input\u7EC4\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> Vue input\u7EC4\u4EF6\u5F00\u53D1</h1>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lcx-input<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- &lt;slot name='prefix' /> --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showPassword ? (passwordVisible ?type : <span class="token punctuation">'</span>password<span class="token punctuation">'</span> ) : type<span class="token punctuation">"</span></span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>
      <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder<span class="token punctuation">"</span></span>
      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span>
      <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit(<span class="token punctuation">'</span>input<span class="token punctuation">'</span>, $event.target.value)<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lcx-input__inner<span class="token punctuation">"</span></span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!-- &lt;slot name='suffix' /> --></span>
    <span class="token comment">&lt;!-- native \u7ED9\u539F\u751F\u7ED1\u5B9A\u4E8B\u4EF6 \u4E0D\u52A0\u7ED9\u7EC4\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6 --></span>
    <span class="token comment">&lt;!-- &lt;div
      class="clearable"
      v-if="clearable"
      @click="$emit('input', '')"
      @mousedown.prevent
    >
      X
    &lt;/div> --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lcx-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clearable<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon-guanbi<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clearable<span class="token punctuation">"</span></span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit(<span class="token punctuation">'</span>input<span class="token punctuation">'</span>, <span class="token punctuation">'</span><span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">@mousedown.native.prevent</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lcx-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showPassword<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon-icon-test<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showPassword<span class="token punctuation">"</span></span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeStatus<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'lcx-input'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'\u8BF7\u8F93\u5165\u5185\u5BB9'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clearable</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showPassword</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">inputClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> classes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>clearable <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>showPassword<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        classes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">lcx-input--suffix</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// if (this.clearable || this.showPassword) {</span>
      <span class="token comment">//   classes.push(\`lcx-input--prefix\`);</span>
      <span class="token comment">// }</span>
      <span class="token keyword">return</span> classes<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">passwordVisible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">changeStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>passwordVisible <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>passwordVisible
       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.lcx-input</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
  <span class="token selector">&amp;.lcx-input--prefix</span><span class="token punctuation">{</span>
    <span class="token selector">.lcx-input__inner</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0 30px 0 15px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;.lcx-input--suffix</span><span class="token punctuation">{</span>
    <span class="token selector">.lcx-input__inner</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0 30px 0 15px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;.lcx-input--prefix.lcx-input--suffix</span><span class="token punctuation">{</span>
    <span class="token selector">.lcx-input__inner</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0 30px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.lcx-input__inner</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #dcdfe6<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #606266<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
    // <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 15px<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> border-color 0.2s <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.645<span class="token punctuation">,</span> 0.045<span class="token punctuation">,</span> 0.355<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token selector">&amp;[disabled]</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #f5f7fa<span class="token punctuation">;</span>
      <span class="token property">border-color</span><span class="token punctuation">:</span> #e4e7ed<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #c0c4cc<span class="token punctuation">;</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> not-allowed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.clearable</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 14.5px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.showPassword</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2018-06-06",deps:[],links:[],pathInferred:"/el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html",pathLocale:"/",permalink:null,routeMeta:{title:"Vue input\u7EC4\u4EF6\u5F00\u53D1"},sfcBlocks:[],slug:"06.Vue input\u7EC4\u4EF6\u5F00\u53D1",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.md",filePathRelative:"el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html.vue",componentFilePathRelative:"pages/el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html.vue",componentFileChunkName:"v-dc317c26",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html.js",dataFilePathRelative:"pages/el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html.js",dataFileChunkName:"v-dc317c26",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html",htmlFilePathRelative:"el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html"},{data:{key:"v-9bca98a2",path:"/el-component/07.Vue%20message%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"Vue message\u7EC4\u4EF6\u5F00\u53D1",lang:"zh-CN",frontmatter:{title:"Vue message\u7EC4\u4EF6\u5F00\u53D1",date:"2017-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1656434853e3},filePathRelative:"el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.md"},key:"v-9bca98a2",path:"/el-component/07.Vue%20message%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"Vue message\u7EC4\u4EF6\u5F00\u53D1",lang:"zh-CN",frontmatter:{title:"Vue message\u7EC4\u4EF6\u5F00\u53D1",date:"2017-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[],content:`---
title: Vue message\u7EC4\u4EF6\u5F00\u53D1
date: 2017-06-06 14:11:35
categories: 
  - el-component
tags: 
  - 
---

# Vue message\u7EC4\u4EF6\u5F00\u53D1

\`\`\`js
import Vue from 'vue';
import messageComp from './message.vue';
let MessageConstructor = Vue.extend(messageComp);
const Message = options => {
  let instance = new MessageConstructor({
    data: options
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
};
['success', 'error', 'warning'].forEach(type => {
  Message[type] = function(options) {
    options.type = type;
    return Message(options);
  };
});
export { Message };

\`\`\`

\`\`\`vue
<template>
  <transition name="fade">
    <div v-if="visible">hello {{ message }} {{ type }}</div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      message: '',
      type: true,
      visible: false,
      duration: 3000
    };
  },
  mounted() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        this.visible = false;
        this.$destroy(); // \u9500\u6BC1\u5B9E\u4F8B
        this.$el.parentNode.removeChild(this.$el); // \u9500\u6BC1\u7EC4\u4EF6
      }, this.duration);
    }
  }
};
<\/script>
<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s linear;
}
</style>

\`\`\`
`,contentRendered:`<h1 id="vue-message\u7EC4\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#vue-message\u7EC4\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> Vue message\u7EC4\u4EF6\u5F00\u53D1</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> messageComp <span class="token keyword">from</span> <span class="token string">'./message.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> MessageConstructor <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>messageComp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">Message</span> <span class="token operator">=</span> <span class="token parameter">options</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageConstructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> options
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  instance<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
  instance<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token string">'success'</span><span class="token punctuation">,</span> <span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token string">'warning'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">type</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  Message<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options<span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">Message</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hello {{ message }} {{ type }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">3000</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>duration <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9500\u6BC1\u5B9E\u4F8B</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9500\u6BC1\u7EC4\u4EF6</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.fade-enter,
.fade-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fade-enter-active,
.fade-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 1s linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2017-06-06",deps:[],links:[],pathInferred:"/el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html",pathLocale:"/",permalink:null,routeMeta:{title:"Vue message\u7EC4\u4EF6\u5F00\u53D1"},sfcBlocks:[],slug:"07.Vue message\u7EC4\u4EF6\u5F00\u53D1",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.md",filePathRelative:"el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html.vue",componentFilePathRelative:"pages/el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html.vue",componentFileChunkName:"v-9bca98a2",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html.js",dataFilePathRelative:"pages/el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html.js",dataFileChunkName:"v-9bca98a2",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html",htmlFilePathRelative:"el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html"},{data:{key:"v-8b841460",path:"/el-component/08.Vue%20Popover%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"Vue Popover\u7EC4\u4EF6\u5F00\u53D1",lang:"zh-CN",frontmatter:{title:"Vue Popover\u7EC4\u4EF6\u5F00\u53D1",date:"2017-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1656434853e3},filePathRelative:"el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.md"},key:"v-8b841460",path:"/el-component/08.Vue%20Popover%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"Vue Popover\u7EC4\u4EF6\u5F00\u53D1",lang:"zh-CN",frontmatter:{title:"Vue Popover\u7EC4\u4EF6\u5F00\u53D1",date:"2017-06-06T14:11:35.000Z",categories:["el-component"],tags:[null]},excerpt:"",headers:[],content:`---
title: Vue Popover\u7EC4\u4EF6\u5F00\u53D1
date: 2017-06-06 14:11:35
categories:
    - el-component
tags:
    -
---

# Vue Popover \u7EC4\u4EF6\u5F00\u53D1

\`\`\`vue
<template>
    <div class="lcx-popover">
        <div class="lcx-popover-content" :class="\`content-\${placement}\`" v-if="visible" ref="content" @click.stop>
            <h3>{{ title }}</h3>
            {{ content }}
            <i class="arrow"></i>
        </div>
        <slot name="reference"></slot>
    </div>
</template>
<script>
const on = (element, event, handle) => {
    element.addEventListener(event, handle, false)
}
const off = (element, event, handle) => {
    element.removeEventListener(event, handle, false)
}
export default {
    name: 'lcx-popover',
    data() {
        return {
            visible: false
        }
    },
    watch: {
        visible(val) {
            if (val) {
                this.$nextTick(() => {
                    let content = this.$refs.content
                    document.body.appendChild(content)
                    if (this.trigger === 'hover') {
                        on(content, 'mouseenter', this.handleMouseEnter)
                        on(content, 'mouseleave', this.handleMouseLeave)
                    }
                })
            }
        }
    },
    props: {
        title: {
            type: String
        },
        trigger: {
            type: String
        },
        width: {
            type: String
        },
        content: {
            type: String
        },
        placement: {
            type: String,
            validator(type) {
                if (!['top', 'left', 'right', 'botton'].includes(type)) {
                    throw new Error('\u5C5E\u6027\u5FC5\u987B\u662F' + ['top', 'left', 'right', 'botton'].join('\u3001'))
                }
                return true
            }
        }
    },
    methods: {
        handleToggle() {
            this.visible = !this.visible
        },
        handleDocumentToggle(e) {
            if (this.$el.contains(e.target)) return
            this.visible = false
        },
        handleMouseEnter() {
            clearTimeout(this.timer)
            this.visible = true
        },
        handleMouseLeave() {
            this.timer = setTimeout(() => {
                this.visible = false
            }, 200)
        }
    },
    mounted() {
        let reference = this.$slots.reference
        if (reference) {
            this.reference = reference[0].elm
        }
        if (this.trigger === 'hover') {
            on(this.$el, 'mouseenter', this.handleMouseEnter)
            on(this.$el, 'mouseleave', this.handleMouseLeave)
        } else if (this.trigger === 'click') {
            on(this.reference, 'click', this.handleToggle)
            on(document, 'click', this.handleDocumentToggle)
        }
    },
    beforeDestroy() {
        off(this.$el, 'mouseenter', this.handleMouseEnter)
        off(this.$el, 'mouseleave', this.handleMouseLeave)
        off(this.reference, 'click', this.handleToggle)
        off(document, 'click', this.handleDocumentToggle)
    }
}
<\/script>
<style lang="scss" scoped>
.lcx-popover {
    display: inline-block;
    position: relative;
    &-content {
        position: absolute;
        top: 100px;
        left: 30px;
        padding: 15px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }
}
.arrow {
    &::before {
        position: absolute;
        display: block;
        content: '';
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-bottom-color: #fff;
        filter: drop-shadow(0 -2px 1px #eee);
    }
    // &::after {
    //   border-bottom-color: #fff;
    //   transform: translateY(1px);
    //   filter: drop-shadow(0 -2px 1px #ccc);
    // }
}
.content-top {
    .arrow {
        &::before {
            top: -19px;
            left: 50%;
            margin-left: -10px;
        }
    }
}
.content-bottom {
    .arrow {
        &::before {
            bottom: -19px;
            left: 50%;
            margin-left: -10px;
            transform: rotate(-180deg);
        }
    }
}
.content-left {
    .arrow {
        &::before {
            top: 50%;
            left: -19px;
            margin-top: -10px;
            transform: rotate(-90deg);
        }
    }
}
.content-right {
    .arrow {
        &::before {
            top: 50%;
            right: -19px;
            margin-top: -10px;
            transform: rotate(90deg);
        }
    }
}
</style>
\`\`\`
`,contentRendered:`<h1 id="vue-popover-\u7EC4\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#vue-popover-\u7EC4\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> Vue Popover \u7EC4\u4EF6\u5F00\u53D1</h1>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lcx-popover<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lcx-popover-content<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\`content-\${placement}\`<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token attr-name">@click.stop</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
            {{ content }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reference<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token function-variable function">on</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> event<span class="token punctuation">,</span> handle</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> handle<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">off</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> event<span class="token punctuation">,</span> handle</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> handle<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'lcx-popover'</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">visible</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>content
                    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>trigger <span class="token operator">===</span> <span class="token string">'hover'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">on</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">'mouseenter'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleMouseEnter<span class="token punctuation">)</span>
                        <span class="token function">on</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">'mouseleave'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleMouseLeave<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> String
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> String
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> String
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> String
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">placement</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
            <span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token string">'top'</span><span class="token punctuation">,</span> <span class="token string">'left'</span><span class="token punctuation">,</span> <span class="token string">'right'</span><span class="token punctuation">,</span> <span class="token string">'botton'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'\u5C5E\u6027\u5FC5\u987B\u662F'</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token string">'top'</span><span class="token punctuation">,</span> <span class="token string">'left'</span><span class="token punctuation">,</span> <span class="token string">'right'</span><span class="token punctuation">,</span> <span class="token string">'botton'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'\u3001'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleToggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>visible
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">handleDocumentToggle</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">handleMouseEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">handleMouseLeave</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> reference <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>reference
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>reference <span class="token operator">=</span> reference<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>elm
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>trigger <span class="token operator">===</span> <span class="token string">'hover'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">on</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">,</span> <span class="token string">'mouseenter'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleMouseEnter<span class="token punctuation">)</span>
            <span class="token function">on</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">,</span> <span class="token string">'mouseleave'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleMouseLeave<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>trigger <span class="token operator">===</span> <span class="token string">'click'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">on</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reference<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleToggle<span class="token punctuation">)</span>
            <span class="token function">on</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleDocumentToggle<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">off</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">,</span> <span class="token string">'mouseenter'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleMouseEnter<span class="token punctuation">)</span>
        <span class="token function">off</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">,</span> <span class="token string">'mouseleave'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleMouseLeave<span class="token punctuation">)</span>
        <span class="token function">off</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reference<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleToggle<span class="token punctuation">)</span>
        <span class="token function">off</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleDocumentToggle<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.lcx-popover</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token selector">&amp;-content</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
        <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 12px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.arrow</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 10px solid transparent<span class="token punctuation">;</span>
        <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0 -2px 1px #eee<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">// &amp;::after</span> <span class="token punctuation">{</span>
    //   <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    //   <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    //   <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0 -2px 1px #ccc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    // <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.content-top</span> <span class="token punctuation">{</span>
    <span class="token selector">.arrow</span> <span class="token punctuation">{</span>
        <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
            <span class="token property">top</span><span class="token punctuation">:</span> -19px<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">margin-left</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.content-bottom</span> <span class="token punctuation">{</span>
    <span class="token selector">.arrow</span> <span class="token punctuation">{</span>
        <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
            <span class="token property">bottom</span><span class="token punctuation">:</span> -19px<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">margin-left</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.content-left</span> <span class="token punctuation">{</span>
    <span class="token selector">.arrow</span> <span class="token punctuation">{</span>
        <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> -19px<span class="token punctuation">;</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.content-right</span> <span class="token punctuation">{</span>
    <span class="token selector">.arrow</span> <span class="token punctuation">{</span>
        <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">right</span><span class="token punctuation">:</span> -19px<span class="token punctuation">;</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2017-06-06",deps:[],links:[],pathInferred:"/el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html",pathLocale:"/",permalink:null,routeMeta:{title:"Vue Popover\u7EC4\u4EF6\u5F00\u53D1"},sfcBlocks:[],slug:"08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.md",filePathRelative:"el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html.vue",componentFilePathRelative:"pages/el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html.vue",componentFileChunkName:"v-8b841460",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html.js",dataFilePathRelative:"pages/el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html.js",dataFileChunkName:"v-8b841460",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html",htmlFilePathRelative:"el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html"},{data:{key:"v-fffb8e28",path:"/guide/",title:"\u5DE5\u5177\u5E93\u6307\u5357",lang:"zh-CN",frontmatter:{title:"\u5DE5\u5177\u5E93\u6307\u5357",date:"2022-06-02T11:44:46.000Z",permalink:"/guide/",categories:[null],tags:[null]},excerpt:"",headers:[{level:2,title:"\u2B07\uFE0F \u5B89\u88C5",slug:"\u5B89\u88C5",children:[]},{level:2,title:"\u{1F37B} \u4F7F\u7528",slug:"\u4F7F\u7528",children:[]},{level:2,title:"\u{1F4E6} API \u6587\u6863",slug:"api-\u6587\u6863",children:[{level:3,title:"\u6570\u7EC4",slug:"\u6570\u7EC4",children:[]},{level:3,title:"\u51FD\u6570",slug:"\u51FD\u6570",children:[]},{level:3,title:"\u5B57\u7B26\u4E32",slug:"\u5B57\u7B26\u4E32",children:[]},{level:3,title:"\u6570\u5B57",slug:"\u6570\u5B57",children:[]},{level:3,title:"\u6D4F\u89C8\u5668",slug:"\u6D4F\u89C8\u5668",children:[]},{level:3,title:"\u73AF\u5883",slug:"\u73AF\u5883",children:[]}]}],git:{updatedTime:1656928937e3},filePathRelative:"guide/\u5DE5\u5177\u5E93\u6307\u5357.md"},key:"v-fffb8e28",path:"/guide/",title:"\u5DE5\u5177\u5E93\u6307\u5357",lang:"zh-CN",frontmatter:{title:"\u5DE5\u5177\u5E93\u6307\u5357",date:"2022-06-02T11:44:46.000Z",permalink:"/guide/",categories:[null],tags:[null]},excerpt:"",headers:[{level:2,title:"\u2B07\uFE0F \u5B89\u88C5",slug:"\u5B89\u88C5",children:[]},{level:2,title:"\u{1F37B} \u4F7F\u7528",slug:"\u4F7F\u7528",children:[]},{level:2,title:"\u{1F4E6} API \u6587\u6863",slug:"api-\u6587\u6863",children:[{level:3,title:"\u6570\u7EC4",slug:"\u6570\u7EC4",children:[]},{level:3,title:"\u51FD\u6570",slug:"\u51FD\u6570",children:[]},{level:3,title:"\u5B57\u7B26\u4E32",slug:"\u5B57\u7B26\u4E32",children:[]},{level:3,title:"\u6570\u5B57",slug:"\u6570\u5B57",children:[]},{level:3,title:"\u6D4F\u89C8\u5668",slug:"\u6D4F\u89C8\u5668",children:[]},{level:3,title:"\u73AF\u5883",slug:"\u73AF\u5883",children:[]}]}],content:"---\ntitle: \u5DE5\u5177\u5E93\u6307\u5357\ndate: 2022-06-02 11:44:46\npermalink: /guide/\ncategories:\n    -\ntags:\n    -\n---\n\n# Javascript \u524D\u7AEF\u9AD8\u6548\u5F00\u53D1\u5DE5\u5177\u5E93\n\n[![npm](https://img.shields.io/npm/v/nutils-js.svg)](https://www.npmjs.com/package/nutils-js)\n[![LICENSE MIT](https://img.shields.io/npm/l/nutils-js.svg)](https://www.npmjs.com/package/nutils-js)\n\n![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_1355.jpg)\n![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-O453M2Liufs-unsplash_qqt53u/luca-bravo-O453M2Liufs-unsplash_qqt53u_c_scale,w_2500.jpg)\n![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-VowIFDxogG4-unsplash_ibrktu/luca-bravo-VowIFDxogG4-unsplash_ibrktu_c_scale,w_2500.jpg)\n![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih_c_scale,w_2500.jpg)\n\n:rocket: `nutils-js` \u662F\u4E00\u5957\u5728\u5F00\u53D1\u4E2D\u5B9E\u8DF5\u79EF\u7D2F\u8D77\u6765\u7684\u5B9E\u7528 JavaScript \u5DE5\u5177\u5E93\u3002\u5176\u6B21\u4E3A\u5B66\u4E60\u800C\u751F\uFF0C\u5728\u5F53\u4ECA\u6709\u5F88\u591A\u7C7B\u4F3C\u5E93\uFF0C\u57FA\u672C\u6559\u6211\u4EEC\u5982\u4F55\u53BB\u4F7F\u7528\u5B83\uFF0C\u4F5C\u4E3A\u5DE5\u5177\u6211\u89C9\u5F97\u6700\u6700\u8981\u4E00\u70B9\u662F\u7406\u89E3\u5DE5\u5177\u7684\u7CBE\u9AD3\uFF0C\u5B83\u662F\u5982\u4F55\u53BB\u5B9E\u73B0\u7684\u3002\n\n\u4F5C\u4E3A Web \u5F00\u53D1\u4EBA\u5458\uFF0C\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\u96BE\u514D\u9047\u5230`Array` `Object` `String` `Number`\u7B49\u6570\u636E\u5904\u7406\uFF0C\u6216\u8005\u662F`\u9632\u6296\u8282\u6D41\u51FD\u6570`\u7B49\u6027\u80FD\u4F18\u5316\u4EA6\u6216\u8005`URL\u53C2\u6570\u5904\u7406` `\u7C7B\u578B\u5224\u65AD`\u7B49\u7B49\u8FD9\u4E9B\u90FD\u662F\u4F7F\u7528\u7387\u8F83\u9AD8\u7684 JavaScript \u6A21\u5757\uFF0C\u907F\u514D\u5728\u4E0D\u540C\u9879\u76EE\u4E2D\u590D\u5236\u7C98\u8D34\u7684\u9EBB\u70E6\uFF0C\u53D1\u5E03\u5728 npm \u4E0A\uFF0C\u5982\u679C\u4F60\u6709\u597D\u7684\u5EFA\u8BAE\u6216\u8005\u60F3\u4E3A\u672C\u9879\u76EE\u8D21\u732E\u4E00\u4EFD\u529B\u7684\u8BDD\uFF0C\u6B22\u8FCE\u4E3A\u672C\u9879\u76EE\u63D0\u4EA4 pr\uFF0C\u4E00\u8D77\u63A2\u8BA8\u548C\u4EA4\u6D41\u5B66\u4E60\u3002\n\n## :arrow_down: \u5B89\u88C5\n\n```bash\nnpm i --save nutils-js\n```\n\n## :beers: \u4F7F\u7528\n\n```js\nconst nutils = require('nutils-js')\nnutils.chunk([1, 2, 3], 2)\n```\n\n## :package: API \u6587\u6863\n\n### \u6570\u7EC4\n\n- [`chunk`\u4E8C\u7EF4\u6570\u7EC4\u8F6C\u6362](/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4)\n- [`flatten`\u6241\u5E73\u5316\u6570\u7EC4](/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4)\n- [`flattenDeep`\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4](/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4)\n- [`isArrayEqual`\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49](/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49)\n- [`difference`\u5177\u6709\u552F\u4E00`array`\u503C\u7684\u6570\u7EC4](/utils/Array/diffArray\u552F\u4E00\u503C\u6570\u7EC4)\n- [`intersection`\u5177\u6709\u5171\u540C`array`\u503C\u7684\u6570\u7EC4](/utils/Array/intersection\u5171\u6709\u503C\u6570\u7EC4)\n- [`unique`\u6570\u7EC4\u53BB\u91CD](/utils/Array/unique\u6570\u7EC4\u53BB\u91CD)\n- [`uniqueBy`\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD](/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD)\n- [`treeData`\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E](/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E)\n- [`sortAsc`\u6570\u7EC4\u5347\u5E8F](/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F)\n- [`sortDesc`\u6570\u7EC4\u964D\u5E8F](/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F)\n- [`shuffle`\u6253\u4E71\u6570\u7EC4](/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4)\n- [`take`\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20](/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20)\n- [`takeLast`\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20](/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20)\n- [`clone`\u514B\u9686\u6570\u7EC4](/utils/Array/clone\u514B\u9686\u6570\u7EC4)\n- [`max`\u6570\u7EC4\u4E2D\u6700\u5927\u503C](/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C)\n- [`min`\u6570\u7EC4\u4E2D\u6700\u5927\u503C](/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C)\n- [`compact`\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C](/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C)\n\n### \u51FD\u6570\n\n- [`debounce`\u51FD\u6570\u9632\u6296](###`debounce`\u51FD\u6570\u9632\u6296)\n- [`throttle`\u51FD\u6570\u8282\u6D41](###`throttle`\u51FD\u6570\u8282\u6D41)\n- [`typeFn`\u7C7B\u578B\u5224\u65AD](###`typeFn`\u7C7B\u578B\u5224\u65AD)\n- [`calcFn` \u52A0\u51CF\u4E58\u9664\u8FD0\u7B97](###`calcFn`\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97)\n\n### \u5B57\u7B26\u4E32\n\n- [`isNil`\u503C\u662F\u5426\u662F`null`\u6216`undefined`](###`isNil`\u503C\u662F\u5426\u662F`null`\u6216`undefined`)\n- [`padStart`\u906E\u4F4F\u5B57\u7B26\u4E32](###`padStart`\u906E\u4F4F\u5B57\u7B26\u4E32)\n- [`thousands`\u6570\u5B57\u6BCF\u9694\u4E09\u4F4D\u6570\u52A0\u5206\u53F7](###`thousands`\u6570\u5B57\u6BCF\u9694\u4E09\u4F4D\u6570\u52A0\u5206\u53F7)\n\n### \u6570\u5B57\n\n- [`randomNumber`\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570](###`randomNumber`\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570)\n- [`average`\u6C42\u5E73\u5747\u503C](###`average`\u6C42\u5E73\u5747\u503C)\n- [`averageBy`\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49](###`averageBy`\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49)\n- [`aboutEqual`\u4E24\u4E2A\u503C\u662F\u5426\u7EA6\u7B49\u4E8E](###`aboutEqual`\u4E24\u4E2A\u503C\u662F\u5426\u7EA6\u7B49\u4E8E)\n- [`getLineSize`\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB](###`getLineSize`\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB)\n- [`accum`\u6570\u7EC4\u4E2D\u503C\u603B\u548C](###`accum`\u6570\u7EC4\u4E2D\u503C\u603B\u548C)\n\n### \u6D4F\u89C8\u5668\n\n- [`copyText`H5 \u590D\u5236\u6587\u672C](###`copyText`H5\u590D\u5236\u6587\u672C)\n- [`getCurrentURL`\u83B7\u53D6\u5F53\u524D\u7684 URL \u5730\u5740](###`getCurrentURL`\u83B7\u53D6\u5F53\u524D\u7684URL\u5730\u5740)\n- [`scrollToTop`\u8FD4\u56DE\u9876\u90E8](###`scrollToTop`\u8FD4\u56DE\u9876\u90E8)\n- [`smoothScroll`\u5E73\u6ED1\u6EDA\u52A8\u9875\u9762](###`smoothScroll`\u5E73\u6ED1\u6EDA\u52A8\u9875\u9762)\n- [`isCurrentPage`\u662F\u5426\u662F\u5F53\u524D\u9875\u9762](###`isCurrentPage`\u662F\u5426\u662F\u5F53\u524D\u9875\u9762)\n\n### \u73AF\u5883\n\n- [`isBrowser`\u662F\u5426\u662F\u6D4F\u89C8\u5668](###`isBrowser`\u662F\u5426\u662F\u6D4F\u89C8\u5668)\n- [`isWechatBrowser`\u5224\u65AD\u5FAE\u4FE1\u6D4F\u89C8\u5668\u8FD8\u662F\u666E\u901A h5](###`isWechatBrowser`\u5224\u65AD\u5FAE\u4FE1\u6D4F\u89C8\u5668\u8FD8\u662F\u666E\u901Ah5)\n- [`isMobile`\u5224\u65AD\u662F\u5426\u662F\u79FB\u52A8\u7AEF](###`isMobile`\u5224\u65AD\u662F\u5426\u662F\u79FB\u52A8\u7AEF)\n",contentRendered:`<h1 id="javascript-\u524D\u7AEF\u9AD8\u6548\u5F00\u53D1\u5DE5\u5177\u5E93" tabindex="-1"><a class="header-anchor" href="#javascript-\u524D\u7AEF\u9AD8\u6548\u5F00\u53D1\u5DE5\u5177\u5E93" aria-hidden="true">#</a> Javascript \u524D\u7AEF\u9AD8\u6548\u5F00\u53D1\u5DE5\u5177\u5E93</h1>
<p><a href="https://www.npmjs.com/package/nutils-js" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/nutils-js.svg" alt="npm"><ExternalLinkIcon/></a>
<a href="https://www.npmjs.com/package/nutils-js" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/l/nutils-js.svg" alt="LICENSE MIT"><ExternalLinkIcon/></a></p>
<p><img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_1355.jpg" alt="">
<img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-O453M2Liufs-unsplash_qqt53u/luca-bravo-O453M2Liufs-unsplash_qqt53u_c_scale,w_2500.jpg" alt="">
<img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-VowIFDxogG4-unsplash_ibrktu/luca-bravo-VowIFDxogG4-unsplash_ibrktu_c_scale,w_2500.jpg" alt="">
<img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih_c_scale,w_2500.jpg" alt=""></p>
<p>\u{1F680} <code v-pre>nutils-js</code> \u662F\u4E00\u5957\u5728\u5F00\u53D1\u4E2D\u5B9E\u8DF5\u79EF\u7D2F\u8D77\u6765\u7684\u5B9E\u7528 JavaScript \u5DE5\u5177\u5E93\u3002\u5176\u6B21\u4E3A\u5B66\u4E60\u800C\u751F\uFF0C\u5728\u5F53\u4ECA\u6709\u5F88\u591A\u7C7B\u4F3C\u5E93\uFF0C\u57FA\u672C\u6559\u6211\u4EEC\u5982\u4F55\u53BB\u4F7F\u7528\u5B83\uFF0C\u4F5C\u4E3A\u5DE5\u5177\u6211\u89C9\u5F97\u6700\u6700\u8981\u4E00\u70B9\u662F\u7406\u89E3\u5DE5\u5177\u7684\u7CBE\u9AD3\uFF0C\u5B83\u662F\u5982\u4F55\u53BB\u5B9E\u73B0\u7684\u3002</p>
<p>\u4F5C\u4E3A Web \u5F00\u53D1\u4EBA\u5458\uFF0C\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\u96BE\u514D\u9047\u5230<code v-pre>Array</code> <code v-pre>Object</code> <code v-pre>String</code> <code v-pre>Number</code>\u7B49\u6570\u636E\u5904\u7406\uFF0C\u6216\u8005\u662F<code v-pre>\u9632\u6296\u8282\u6D41\u51FD\u6570</code>\u7B49\u6027\u80FD\u4F18\u5316\u4EA6\u6216\u8005<code v-pre>URL\u53C2\u6570\u5904\u7406</code> <code v-pre>\u7C7B\u578B\u5224\u65AD</code>\u7B49\u7B49\u8FD9\u4E9B\u90FD\u662F\u4F7F\u7528\u7387\u8F83\u9AD8\u7684 JavaScript \u6A21\u5757\uFF0C\u907F\u514D\u5728\u4E0D\u540C\u9879\u76EE\u4E2D\u590D\u5236\u7C98\u8D34\u7684\u9EBB\u70E6\uFF0C\u53D1\u5E03\u5728 npm \u4E0A\uFF0C\u5982\u679C\u4F60\u6709\u597D\u7684\u5EFA\u8BAE\u6216\u8005\u60F3\u4E3A\u672C\u9879\u76EE\u8D21\u732E\u4E00\u4EFD\u529B\u7684\u8BDD\uFF0C\u6B22\u8FCE\u4E3A\u672C\u9879\u76EE\u63D0\u4EA4 pr\uFF0C\u4E00\u8D77\u63A2\u8BA8\u548C\u4EA4\u6D41\u5B66\u4E60\u3002</p>
<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u2B07\uFE0F \u5B89\u88C5</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i --save nutils-js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u{1F37B} \u4F7F\u7528</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> nutils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'nutils-js'</span><span class="token punctuation">)</span>
nutils<span class="token punctuation">.</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#api-\u6587\u6863" aria-hidden="true">#</a> \u{1F4E6} API \u6587\u6863</h2>
<h3 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h3>
<ul>
<li><a href="/utils/Array/chunk%E8%BD%AC%E6%8D%A2%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84" target="_blank" rel="noopener noreferrer"><code v-pre>chunk</code>\u4E8C\u7EF4\u6570\u7EC4\u8F6C\u6362<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/flatten%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84" target="_blank" rel="noopener noreferrer"><code v-pre>flatten</code>\u6241\u5E73\u5316\u6570\u7EC4<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/flattenDeep%E6%8C%87%E5%AE%9A%E5%B1%82%E7%BA%A7%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84" target="_blank" rel="noopener noreferrer"><code v-pre>flattenDeep</code>\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/isArrayEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89" target="_blank" rel="noopener noreferrer"><code v-pre>isArrayEqual</code>\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/diffArray%E5%94%AF%E4%B8%80%E5%80%BC%E6%95%B0%E7%BB%84" target="_blank" rel="noopener noreferrer"><code v-pre>difference</code>\u5177\u6709\u552F\u4E00<code v-pre>array</code>\u503C\u7684\u6570\u7EC4<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/intersection%E5%85%B1%E6%9C%89%E5%80%BC%E6%95%B0%E7%BB%84" target="_blank" rel="noopener noreferrer"><code v-pre>intersection</code>\u5177\u6709\u5171\u540C<code v-pre>array</code>\u503C\u7684\u6570\u7EC4<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/unique%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D" target="_blank" rel="noopener noreferrer"><code v-pre>unique</code>\u6570\u7EC4\u53BB\u91CD<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/uniqueBy%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%8E%BB%E9%87%8D" target="_blank" rel="noopener noreferrer"><code v-pre>uniqueBy</code>\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/treeData%E7%94%9F%E6%88%90%E6%A0%91%E7%BB%93%E6%9E%84%E6%95%B0%E6%8D%AE" target="_blank" rel="noopener noreferrer"><code v-pre>treeData</code>\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/sortAsc%E6%95%B0%E7%BB%84%E5%8D%87%E5%BA%8F" target="_blank" rel="noopener noreferrer"><code v-pre>sortAsc</code>\u6570\u7EC4\u5347\u5E8F<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/sortDesc%E6%95%B0%E7%BB%84%E9%99%8D%E5%BA%8F" target="_blank" rel="noopener noreferrer"><code v-pre>sortDesc</code>\u6570\u7EC4\u964D\u5E8F<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/shuffle%E6%89%93%E4%B9%B1%E6%95%B0%E7%BB%84" target="_blank" rel="noopener noreferrer"><code v-pre>shuffle</code>\u6253\u4E71\u6570\u7EC4<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/take%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E5%BC%80%E5%A7%8B%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0" target="_blank" rel="noopener noreferrer"><code v-pre>take</code>\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/takeLast%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E6%9C%80%E5%90%8E%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0" target="_blank" rel="noopener noreferrer"><code v-pre>takeLast</code>\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/clone%E5%85%8B%E9%9A%86%E6%95%B0%E7%BB%84" target="_blank" rel="noopener noreferrer"><code v-pre>clone</code>\u514B\u9686\u6570\u7EC4<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/max%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC" target="_blank" rel="noopener noreferrer"><code v-pre>max</code>\u6570\u7EC4\u4E2D\u6700\u5927\u503C<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/min%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC" target="_blank" rel="noopener noreferrer"><code v-pre>min</code>\u6570\u7EC4\u4E2D\u6700\u5927\u503C<ExternalLinkIcon/></a></li>
<li><a href="/utils/Array/compact%E5%8E%BB%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%97%A0%E6%95%88%E5%80%BC" target="_blank" rel="noopener noreferrer"><code v-pre>compact</code>\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C<ExternalLinkIcon/></a></li>
</ul>
<h3 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h3>
<ul>
<li><a href="###%60debounce%60%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96"><code v-pre>debounce</code>\u51FD\u6570\u9632\u6296</a></li>
<li><a href="###%60throttle%60%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81"><code v-pre>throttle</code>\u51FD\u6570\u8282\u6D41</a></li>
<li><a href="###%60typeFn%60%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD"><code v-pre>typeFn</code>\u7C7B\u578B\u5224\u65AD</a></li>
<li><a href="###%60calcFn%60%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E8%BF%90%E7%AE%97"><code v-pre>calcFn</code> \u52A0\u51CF\u4E58\u9664\u8FD0\u7B97</a></li>
</ul>
<h3 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h3>
<ul>
<li><a href="###%60isNil%60%E5%80%BC%E6%98%AF%E5%90%A6%E6%98%AF%60null%60%E6%88%96%60undefined%60"><code v-pre>isNil</code>\u503C\u662F\u5426\u662F<code v-pre>null</code>\u6216<code v-pre>undefined</code></a></li>
<li><a href="###%60padStart%60%E9%81%AE%E4%BD%8F%E5%AD%97%E7%AC%A6%E4%B8%B2"><code v-pre>padStart</code>\u906E\u4F4F\u5B57\u7B26\u4E32</a></li>
<li><a href="###%60thousands%60%E6%95%B0%E5%AD%97%E6%AF%8F%E9%9A%94%E4%B8%89%E4%BD%8D%E6%95%B0%E5%8A%A0%E5%88%86%E5%8F%B7"><code v-pre>thousands</code>\u6570\u5B57\u6BCF\u9694\u4E09\u4F4D\u6570\u52A0\u5206\u53F7</a></li>
</ul>
<h3 id="\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57" aria-hidden="true">#</a> \u6570\u5B57</h3>
<ul>
<li><a href="###%60randomNumber%60%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B4%E6%95%B0"><code v-pre>randomNumber</code>\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570</a></li>
<li><a href="###%60average%60%E6%B1%82%E5%B9%B3%E5%9D%87%E5%80%BC"><code v-pre>average</code>\u6C42\u5E73\u5747\u503C</a></li>
<li><a href="###%60averageBy%60%E6%A3%80%E6%9F%A5%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89"><code v-pre>averageBy</code>\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49</a></li>
<li><a href="###%60aboutEqual%60%E4%B8%A4%E4%B8%AA%E5%80%BC%E6%98%AF%E5%90%A6%E7%BA%A6%E7%AD%89%E4%BA%8E"><code v-pre>aboutEqual</code>\u4E24\u4E2A\u503C\u662F\u5426\u7EA6\u7B49\u4E8E</a></li>
<li><a href="###%60getLineSize%60%E8%AE%A1%E7%AE%97%E4%B8%A4%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E8%B7%9D%E7%A6%BB"><code v-pre>getLineSize</code>\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB</a></li>
<li><a href="###%60accum%60%E6%95%B0%E7%BB%84%E4%B8%AD%E5%80%BC%E6%80%BB%E5%92%8C"><code v-pre>accum</code>\u6570\u7EC4\u4E2D\u503C\u603B\u548C</a></li>
</ul>
<h3 id="\u6D4F\u89C8\u5668" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668" aria-hidden="true">#</a> \u6D4F\u89C8\u5668</h3>
<ul>
<li><a href="###%60copyText%60H5%E5%A4%8D%E5%88%B6%E6%96%87%E6%9C%AC"><code v-pre>copyText</code>H5 \u590D\u5236\u6587\u672C</a></li>
<li><a href="###%60getCurrentURL%60%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E7%9A%84URL%E5%9C%B0%E5%9D%80"><code v-pre>getCurrentURL</code>\u83B7\u53D6\u5F53\u524D\u7684 URL \u5730\u5740</a></li>
<li><a href="###%60scrollToTop%60%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8"><code v-pre>scrollToTop</code>\u8FD4\u56DE\u9876\u90E8</a></li>
<li><a href="###%60smoothScroll%60%E5%B9%B3%E6%BB%91%E6%BB%9A%E5%8A%A8%E9%A1%B5%E9%9D%A2"><code v-pre>smoothScroll</code>\u5E73\u6ED1\u6EDA\u52A8\u9875\u9762</a></li>
<li><a href="###%60isCurrentPage%60%E6%98%AF%E5%90%A6%E6%98%AF%E5%BD%93%E5%89%8D%E9%A1%B5%E9%9D%A2"><code v-pre>isCurrentPage</code>\u662F\u5426\u662F\u5F53\u524D\u9875\u9762</a></li>
</ul>
<h3 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h3>
<ul>
<li><a href="###%60isBrowser%60%E6%98%AF%E5%90%A6%E6%98%AF%E6%B5%8F%E8%A7%88%E5%99%A8"><code v-pre>isBrowser</code>\u662F\u5426\u662F\u6D4F\u89C8\u5668</a></li>
<li><a href="###%60isWechatBrowser%60%E5%88%A4%E6%96%AD%E5%BE%AE%E4%BF%A1%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%98%E6%98%AF%E6%99%AE%E9%80%9Ah5"><code v-pre>isWechatBrowser</code>\u5224\u65AD\u5FAE\u4FE1\u6D4F\u89C8\u5668\u8FD8\u662F\u666E\u901A h5</a></li>
<li><a href="###%60isMobile%60%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E6%98%AF%E7%A7%BB%E5%8A%A8%E7%AB%AF"><code v-pre>isMobile</code>\u5224\u65AD\u662F\u5426\u662F\u79FB\u52A8\u7AEF</a></li>
</ul>
`,date:"2022-06-02",deps:[],links:[],pathInferred:"/guide/\u5DE5\u5177\u5E93\u6307\u5357.html",pathLocale:"/",permalink:"/guide/",routeMeta:{title:"\u5DE5\u5177\u5E93\u6307\u5357"},sfcBlocks:[],slug:"\u5DE5\u5177\u5E93\u6307\u5357",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/guide/\u5DE5\u5177\u5E93\u6307\u5357.md",filePathRelative:"guide/\u5DE5\u5177\u5E93\u6307\u5357.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/guide/index.html.vue",componentFilePathRelative:"pages/guide/index.html.vue",componentFileChunkName:"v-fffb8e28",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/guide/index.html.js",dataFilePathRelative:"pages/guide/index.html.js",dataFileChunkName:"v-fffb8e28",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/guide/index.html",htmlFilePathRelative:"guide/index.html"},{data:{key:"v-97b2979a",path:"/movies/",title:"\u5F71\u89C6\u7F51\u7AD9\u63A8\u8350",lang:"zh-CN",frontmatter:{title:"\u5F71\u89C6\u7F51\u7AD9\u63A8\u8350",date:"2022-02-08T19:49:49.000Z",permalink:"/movies/",categories:["nav"],tags:["\u5F71\u89C6"],author:[{name:"\u5E03\u5170\u7279\xB7\u65AF\u514B\u6797",avatar:"https://avatars0.githubusercontent.com/u/888",link:"https://feyoudao.cn"}]},excerpt:"",headers:[{level:3,title:"\u5F71\u89C6\u7F51\u7AD9",slug:"\u5F71\u89C6\u7F51\u7AD9",children:[]},{level:2,title:"\u7535\u5F71\u63A8\u8350",slug:"\u7535\u5F71\u63A8\u8350",children:[]},{level:2,title:"APP \u89C2\u770B",slug:"app-\u89C2\u770B",children:[]},{level:2,title:"BT \u4E0B\u8F7D",slug:"bt-\u4E0B\u8F7D",children:[]},{level:2,title:"\u5931\u6548\u7F51\u7AD9",slug:"\u5931\u6548\u7F51\u7AD9",children:[]}],git:{updatedTime:1656752286e3},filePathRelative:"nav/movies.md"},key:"v-97b2979a",path:"/movies/",title:"\u5F71\u89C6\u7F51\u7AD9\u63A8\u8350",lang:"zh-CN",frontmatter:{title:"\u5F71\u89C6\u7F51\u7AD9\u63A8\u8350",date:"2022-02-08T19:49:49.000Z",permalink:"/movies/",categories:["nav"],tags:["\u5F71\u89C6"],author:[{name:"\u5E03\u5170\u7279\xB7\u65AF\u514B\u6797",avatar:"https://avatars0.githubusercontent.com/u/888",link:"https://feyoudao.cn"}]},excerpt:"",headers:[{level:3,title:"\u5F71\u89C6\u7F51\u7AD9",slug:"\u5F71\u89C6\u7F51\u7AD9",children:[]},{level:2,title:"\u7535\u5F71\u63A8\u8350",slug:"\u7535\u5F71\u63A8\u8350",children:[]},{level:2,title:"APP \u89C2\u770B",slug:"app-\u89C2\u770B",children:[]},{level:2,title:"BT \u4E0B\u8F7D",slug:"bt-\u4E0B\u8F7D",children:[]},{level:2,title:"\u5931\u6548\u7F51\u7AD9",slug:"\u5931\u6548\u7F51\u7AD9",children:[]}],content:`---
title: \u5F71\u89C6\u7F51\u7AD9\u63A8\u8350
date: 2022-02-08 19:49:49
permalink: /movies/
categories: 
  - nav
tags: 
  - \u5F71\u89C6
author: 
  - name: \u5E03\u5170\u7279\xB7\u65AF\u514B\u6797
    avatar: https://avatars0.githubusercontent.com/u/888
    link: https://feyoudao.cn
---

\u6536\u96C6\u4E00\u4E9B\u514D\u8D39\u7684\u5F71\u89C6\u7F51\u7AD9\uFF0C\u5982\u679C\u4F60\u6709\u66F4\u597D\u7684\u7F51\u7AD9\u63A8\u8350\uFF0C\u53EF\u4EE5\u5728\u8BC4\u8BBA\u7559\u8A00\u3002

### \u5F71\u89C6\u7F51\u7AD9

<ClientOnly>
    <NavCard :cardData="cardData" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## \u7535\u5F71\u63A8\u8350

- [\u8C46\u74E3\u7535\u5F71](https://movie.douban.com/)

## APP \u89C2\u770B

- [https://www.wanmeikk.me/](https://www.wanmeikk.me/)

## BT \u4E0B\u8F7D

- [\u6BD4\u7279\u5927\u96C4 https://www.btdx8.com/](https://www.btdx8.com/)

## \u5931\u6548\u7F51\u7AD9

- [http://www.haitum.com/](http://www.haitum.com/)
- [https://www.nfmovies.com/](https://www.nfmovies.com/)
- [https://www.zhenbuka.com/](https://www.zhenbuka.com/)
- [https://nfstar.net](https://nfstar.net)
- [https://kanju.me/](https://kanju.me/)
- [https://www.k1080.net/](https://www.k1080.net/)
- [https://www.subaibai.com/](https://www.subaibai.com/)
- [https://www.nicemov.com/](https://www.nicemov.com/)
- [https://www.hktvyb.com/](https://www.hktvyb.com/)
- [https://www.yunbtv.com/](https://www.yunbtv.com/)
- [\u86CB\u86CB\u8D5E\u5F71\u9662 https://www.dandanzan.com/](https://www.dandanzan.com/)
- [\u7247\u5E93 2 https://www.piaku.cc/](https://www.piaku.cc/)
- [\u963F\u623F\u5F71\u89C6 https://bwl87.com/](https://bwl87.com/)

<script>
export default {
    data() {
    return {
      cardData: [
        {
          id: '0',
          cardSrc: "https://www.cupfox.com/",
          cardImgSrc: "https://feyoudao.oss-cn-hongkong.aliyuncs.com/logo/logo201.png",
          cardName: "\u8336\u676F\u72D0 Cupfox",
          cardContent: "\u8336\u676F\u72D0\u662F\u4E2D\u56FD\u6700\u5927\u7684\u5F71\u89C6\u8D44\u6E90\u805A\u5408\u641C\u7D22\u5F15\u64CE\uFF0C\u5B9E\u65F6\u805A\u5408\u5168\u7F51\u4F18\u8D28\u5F71\u89C6\u8D44\u6E90\uFF0C\u540C\u65F6\u652F\u6301\u5728\u7EBF\u3001\u4E0B\u8F7D\u548C\u5B57\u5E55\u3002\u7535\u5F71\u3001\u7535\u89C6\u5267\u3001\u52A8\u6F2B\u3001\u7EFC\u827A\u5E94\u6709\u5C3D\u6709\u3002",
        },
        {
          cardSrc: "https://www.nfyingshi.com/",
          cardImgSrc: "https://www.nfyingshi.com/wp-content/uploads/2021/06/d0488313833371.jpg",
          cardName: "\u5948\u83F2\u5F71\u89C6 ",
          cardContent:"\u4E13\u4E3A\u4E2D\u56FD\u7528\u6237\u63D0\u4F9B\u5948\u98DE\u4E2D\u6587\u7535\u5F71\u7684\u7F51\u7AD9",
        },
        {
          cardSrc: "http://dianying.im/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/imdianying/im@2021032601/statics/images/index-logo.png",
          cardName: "\u7535\u5F71\u5148\u751F",
          cardContent:"\u7535\u5F71\u5148\u751F\u805A\u5408\u5168\u7F51\u5F71\u7247\uFF0C\u4F60\u60F3\u770B\u7684\u5168\u90FD\u6709\uFF01",
        },
        {
          cardSrc: "https://www.btbdys.com/",
          cardImgSrc: "https://www.btbdys.com/images/logo1.svg",
          cardName: "\u54D4\u5600\u5F71\u89C6",
          cardContent:"\u8D85\u6E05\u539F\u753B\u514D\u8D39\u5728\u7EBF\u89C2\u770B!",
        },
        {
          cardSrc: "https://www.btnull.re/",
          cardImgSrc: "https://feyoudao.oss-cn-hongkong.aliyuncs.com/logo/logo88.png",
          cardName: "BTNull - \u65E0\u540D\u5C0F\u7AD9",
          cardContent:"\u89C2\u5F71\u5C0F\u7AD9",
        },
        {
          cardSrc: "https://www.duboku.tv/",
          cardImgSrc: "https://www.duboku.tv/template/mytheme/statics/img/logo.png",
          cardName: "\u72EC\u64AD\u5E93",
          cardContent:"\u7535\u5F71,\u7535\u89C6\u5267,\u52A8\u6F2B,\u89C6\u9891\u7F51\u7AD9,\u9AD8\u6E05\u89C6\u9891\u5728\u7EBF\u770B",
        },
        {
          cardSrc: "https://www.pkmp4.com/",
          cardImgSrc: "https://www.pkmp4.com/template/pianku/image/logo.png",
          cardName: "\u7247\u5E93",
          cardContent:"\u6BCF\u65E5\u6536\u96C6\u5168\u7F51\u6700\u65B0\u7684\u7535\u5F71\u3001\u5267\u96C6\u3001\u52A8\u6F2B\u9AD8\u6E05\u8D44\u6E90\u4F9B\u7F51\u53CB\u514D\u8D39\u4E0B\u8F7D\uFF01",
        },
        {
          cardSrc: "https://ddrk.me/",
          cardImgSrc: "https://feyoudao.oss-cn-hongkong.aliyuncs.com/logo/logo73.png",
          cardName: "\u4F4E\u7AEF\u5F71\u89C6",
          cardContent:"\u8D85\u6E05\u5728\u7EBF\u89C6\u9891",
        },
        {
          cardSrc: "https://pfys.me/",
          cardImgSrc: "http://image.planet.youku.com/img/100/13/62238/i_1490875862238_33021d4017faee16c0a03fa611a9dcac_b_w402h102_face_w402h102_x0y0w0h0c0.png",
          cardName: "\u6CE1\u996D\u5F71\u89C6",
          cardContent:"\u6BCF\u5929\u4E3A\u5E7F\u5927\u7528\u6237\u66F4\u65B0\u6700\u65B0\u7684\u7535\u5F71\u3001\u7535\u89C6\u5267\u3001\u52A8\u6F2B\u7B49\u5F71\u89C6\u8D44\u6E90",
        },
        {
          cardSrc: "https://dsxys.com/",
          cardImgSrc: "https://ae01.alicdn.com/kf/U6e42273cc75f48b3bffbc37817f80cf48.jpg",
          cardName: "\u5927\u5E08\u5144\u5F71\u89C6",
          cardContent:"\u514D\u8D39\u5168\u7403\u5F71\u89C6\u8D44\u6E90\u5728\u7EBF\u89C2\u770B\u7684\u5E73\u53F0",
        },
        {
          cardSrc: "https://www.libvio.com/",
          //   cardImgSrc: "https://ur-withzz-prod-1254078007.image.myqcloud.com/richText/b832-2022050111/TG@fanjuzy_1651417421456143700.png",
          cardName: "LIBVIO",
          cardContent:"\u805A\u5408\u89C2\u5F71\u5C0F\u7AD9",
        },

        {
          cardSrc: "https://www.zxzjtv.com/",
          cardImgSrc: "https://zxzjbackup.oss-cn-shenzhen.aliyuncs.com/logo_min.png",
          //   cardName: "\u5728\u7EBF\u4E4B\u5BB6",
          cardContent:"\u5728\u7EBF\u7F8E\u5267\u5929\u5802,\u5728\u7EBF\u65E5\u5267\u63A8\u8350,\u5728\u7EBF\u97E9\u5267",
        },
        {
          cardSrc: "https://www.hntwqc.net/",
          cardImgSrc: "https://feyoudao.oss-cn-hongkong.aliyuncs.com/logo/logo29.jpg",
          cardName: "\u609F\u7A7A\u7F8E\u5267",
          cardContent:"\u5206\u4EAB\u7F8E\u5267",
        },
        {
          cardSrc: "https://www.novipnoad.com/",
          cardName: "NOVIPNOAD",
          cardContent:"\u4E3A\u7528\u6237\u63D0\u4F9B\u53CA\u65F6\u7684\u6D77\u5916\u70ED\u95E8\u5267\u96C6\u5728\u7EBF\u89C2\u770B\uFF0C\u53CB\u597D\u65E0\u5E7F\u544A\uFF0C\u81F4\u529B\u4E8E\u6700\u8F7B\u677E\u7684\u8FFD\u5267\u4F53\u9A8C\u3002",
        },
        {
          cardSrc: "https://www.dixidixi.com/",
          //   cardImgSrc: "https://www.dixidixi.com/static/logo.png",
          cardName: "\u5600\u563B\u5600\u563B",
          cardContent:"\u63D0\u4F9B\u6700\u5168\u7684\u6700\u65B0\u7535\u89C6\u5267\uFF0C2019\u6700\u65B0\u7535\u5F71\uFF0C\u97E9\u56FD\u7535\u89C6\u5267\u3001\u9999\u6E2Ftvb\u7535\u89C6\u5267\u3001\u65E5\u672C\u52A8\u6F2B\u3001\u65E5\u5267\u3001\u7F8E\u5267\u3001\u7EFC\u827A\u7684\u5728\u7EBF\u89C2\u770B\u548C\u5267\u96C6\u4EA4\u6D41\u573A\u6240\uFF01",
        },
        {
          cardSrc: "https://dilidili.online/",
          cardImgSrc: "https://dilidili.online/static/img/logo.png",
          cardName: "\u5600\u54E9\u5600\u54E9",
          cardContent:"\u7B5B\u9009\u7ECF\u5178\u4F5C\u54C1\u5E76\u5C06\u65B0\u4F5C\u7ECF\u5178\u8F6E\u756A\u63A8\u8350",
        },
      ]
    }
  }
}
<\/script>>
`,contentRendered:`<p>\u6536\u96C6\u4E00\u4E9B\u514D\u8D39\u7684\u5F71\u89C6\u7F51\u7AD9\uFF0C\u5982\u679C\u4F60\u6709\u66F4\u597D\u7684\u7F51\u7AD9\u63A8\u8350\uFF0C\u53EF\u4EE5\u5728\u8BC4\u8BBA\u7559\u8A00\u3002</p>
<h3 id="\u5F71\u89C6\u7F51\u7AD9" tabindex="-1"><a class="header-anchor" href="#\u5F71\u89C6\u7F51\u7AD9" aria-hidden="true">#</a> \u5F71\u89C6\u7F51\u7AD9</h3>
<ClientOnly>
    <NavCard :cardData="cardData" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="\u7535\u5F71\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u7535\u5F71\u63A8\u8350" aria-hidden="true">#</a> \u7535\u5F71\u63A8\u8350</h2>
<ul>
<li><a href="https://movie.douban.com/" target="_blank" rel="noopener noreferrer">\u8C46\u74E3\u7535\u5F71<ExternalLinkIcon/></a></li>
</ul>
<h2 id="app-\u89C2\u770B" tabindex="-1"><a class="header-anchor" href="#app-\u89C2\u770B" aria-hidden="true">#</a> APP \u89C2\u770B</h2>
<ul>
<li><a href="https://www.wanmeikk.me/" target="_blank" rel="noopener noreferrer">https://www.wanmeikk.me/<ExternalLinkIcon/></a></li>
</ul>
<h2 id="bt-\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#bt-\u4E0B\u8F7D" aria-hidden="true">#</a> BT \u4E0B\u8F7D</h2>
<ul>
<li><a href="https://www.btdx8.com/" target="_blank" rel="noopener noreferrer">\u6BD4\u7279\u5927\u96C4 https://www.btdx8.com/<ExternalLinkIcon/></a></li>
</ul>
<h2 id="\u5931\u6548\u7F51\u7AD9" tabindex="-1"><a class="header-anchor" href="#\u5931\u6548\u7F51\u7AD9" aria-hidden="true">#</a> \u5931\u6548\u7F51\u7AD9</h2>
<ul>
<li><a href="http://www.haitum.com/" target="_blank" rel="noopener noreferrer">http://www.haitum.com/<ExternalLinkIcon/></a></li>
<li><a href="https://www.nfmovies.com/" target="_blank" rel="noopener noreferrer">https://www.nfmovies.com/<ExternalLinkIcon/></a></li>
<li><a href="https://www.zhenbuka.com/" target="_blank" rel="noopener noreferrer">https://www.zhenbuka.com/<ExternalLinkIcon/></a></li>
<li><a href="https://nfstar.net" target="_blank" rel="noopener noreferrer">https://nfstar.net<ExternalLinkIcon/></a></li>
<li><a href="https://kanju.me/" target="_blank" rel="noopener noreferrer">https://kanju.me/<ExternalLinkIcon/></a></li>
<li><a href="https://www.k1080.net/" target="_blank" rel="noopener noreferrer">https://www.k1080.net/<ExternalLinkIcon/></a></li>
<li><a href="https://www.subaibai.com/" target="_blank" rel="noopener noreferrer">https://www.subaibai.com/<ExternalLinkIcon/></a></li>
<li><a href="https://www.nicemov.com/" target="_blank" rel="noopener noreferrer">https://www.nicemov.com/<ExternalLinkIcon/></a></li>
<li><a href="https://www.hktvyb.com/" target="_blank" rel="noopener noreferrer">https://www.hktvyb.com/<ExternalLinkIcon/></a></li>
<li><a href="https://www.yunbtv.com/" target="_blank" rel="noopener noreferrer">https://www.yunbtv.com/<ExternalLinkIcon/></a></li>
<li><a href="https://www.dandanzan.com/" target="_blank" rel="noopener noreferrer">\u86CB\u86CB\u8D5E\u5F71\u9662 https://www.dandanzan.com/<ExternalLinkIcon/></a></li>
<li><a href="https://www.piaku.cc/" target="_blank" rel="noopener noreferrer">\u7247\u5E93 2 https://www.piaku.cc/<ExternalLinkIcon/></a></li>
<li><a href="https://bwl87.com/" target="_blank" rel="noopener noreferrer">\u963F\u623F\u5F71\u89C6 https://bwl87.com/<ExternalLinkIcon/></a></li>
</ul>
`,date:"2022-02-08",deps:[],links:[],pathInferred:"/nav/movies.html",pathLocale:"/",permalink:"/movies/",routeMeta:{title:"\u5F71\u89C6\u7F51\u7AD9\u63A8\u8350"},sfcBlocks:[`<script>
export default {
    data() {
    return {
      cardData: [
        {
          id: '0',
          cardSrc: "https://www.cupfox.com/",
          cardImgSrc: "https://feyoudao.oss-cn-hongkong.aliyuncs.com/logo/logo201.png",
          cardName: "\u8336\u676F\u72D0 Cupfox",
          cardContent: "\u8336\u676F\u72D0\u662F\u4E2D\u56FD\u6700\u5927\u7684\u5F71\u89C6\u8D44\u6E90\u805A\u5408\u641C\u7D22\u5F15\u64CE\uFF0C\u5B9E\u65F6\u805A\u5408\u5168\u7F51\u4F18\u8D28\u5F71\u89C6\u8D44\u6E90\uFF0C\u540C\u65F6\u652F\u6301\u5728\u7EBF\u3001\u4E0B\u8F7D\u548C\u5B57\u5E55\u3002\u7535\u5F71\u3001\u7535\u89C6\u5267\u3001\u52A8\u6F2B\u3001\u7EFC\u827A\u5E94\u6709\u5C3D\u6709\u3002",
        },
        {
          cardSrc: "https://www.nfyingshi.com/",
          cardImgSrc: "https://www.nfyingshi.com/wp-content/uploads/2021/06/d0488313833371.jpg",
          cardName: "\u5948\u83F2\u5F71\u89C6 ",
          cardContent:"\u4E13\u4E3A\u4E2D\u56FD\u7528\u6237\u63D0\u4F9B\u5948\u98DE\u4E2D\u6587\u7535\u5F71\u7684\u7F51\u7AD9",
        },
        {
          cardSrc: "http://dianying.im/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/imdianying/im@2021032601/statics/images/index-logo.png",
          cardName: "\u7535\u5F71\u5148\u751F",
          cardContent:"\u7535\u5F71\u5148\u751F\u805A\u5408\u5168\u7F51\u5F71\u7247\uFF0C\u4F60\u60F3\u770B\u7684\u5168\u90FD\u6709\uFF01",
        },
        {
          cardSrc: "https://www.btbdys.com/",
          cardImgSrc: "https://www.btbdys.com/images/logo1.svg",
          cardName: "\u54D4\u5600\u5F71\u89C6",
          cardContent:"\u8D85\u6E05\u539F\u753B\u514D\u8D39\u5728\u7EBF\u89C2\u770B!",
        },
        {
          cardSrc: "https://www.btnull.re/",
          cardImgSrc: "https://feyoudao.oss-cn-hongkong.aliyuncs.com/logo/logo88.png",
          cardName: "BTNull - \u65E0\u540D\u5C0F\u7AD9",
          cardContent:"\u89C2\u5F71\u5C0F\u7AD9",
        },
        {
          cardSrc: "https://www.duboku.tv/",
          cardImgSrc: "https://www.duboku.tv/template/mytheme/statics/img/logo.png",
          cardName: "\u72EC\u64AD\u5E93",
          cardContent:"\u7535\u5F71,\u7535\u89C6\u5267,\u52A8\u6F2B,\u89C6\u9891\u7F51\u7AD9,\u9AD8\u6E05\u89C6\u9891\u5728\u7EBF\u770B",
        },
        {
          cardSrc: "https://www.pkmp4.com/",
          cardImgSrc: "https://www.pkmp4.com/template/pianku/image/logo.png",
          cardName: "\u7247\u5E93",
          cardContent:"\u6BCF\u65E5\u6536\u96C6\u5168\u7F51\u6700\u65B0\u7684\u7535\u5F71\u3001\u5267\u96C6\u3001\u52A8\u6F2B\u9AD8\u6E05\u8D44\u6E90\u4F9B\u7F51\u53CB\u514D\u8D39\u4E0B\u8F7D\uFF01",
        },
        {
          cardSrc: "https://ddrk.me/",
          cardImgSrc: "https://feyoudao.oss-cn-hongkong.aliyuncs.com/logo/logo73.png",
          cardName: "\u4F4E\u7AEF\u5F71\u89C6",
          cardContent:"\u8D85\u6E05\u5728\u7EBF\u89C6\u9891",
        },
        {
          cardSrc: "https://pfys.me/",
          cardImgSrc: "http://image.planet.youku.com/img/100/13/62238/i_1490875862238_33021d4017faee16c0a03fa611a9dcac_b_w402h102_face_w402h102_x0y0w0h0c0.png",
          cardName: "\u6CE1\u996D\u5F71\u89C6",
          cardContent:"\u6BCF\u5929\u4E3A\u5E7F\u5927\u7528\u6237\u66F4\u65B0\u6700\u65B0\u7684\u7535\u5F71\u3001\u7535\u89C6\u5267\u3001\u52A8\u6F2B\u7B49\u5F71\u89C6\u8D44\u6E90",
        },
        {
          cardSrc: "https://dsxys.com/",
          cardImgSrc: "https://ae01.alicdn.com/kf/U6e42273cc75f48b3bffbc37817f80cf48.jpg",
          cardName: "\u5927\u5E08\u5144\u5F71\u89C6",
          cardContent:"\u514D\u8D39\u5168\u7403\u5F71\u89C6\u8D44\u6E90\u5728\u7EBF\u89C2\u770B\u7684\u5E73\u53F0",
        },
        {
          cardSrc: "https://www.libvio.com/",
          //   cardImgSrc: "https://ur-withzz-prod-1254078007.image.myqcloud.com/richText/b832-2022050111/TG@fanjuzy_1651417421456143700.png",
          cardName: "LIBVIO",
          cardContent:"\u805A\u5408\u89C2\u5F71\u5C0F\u7AD9",
        },

        {
          cardSrc: "https://www.zxzjtv.com/",
          cardImgSrc: "https://zxzjbackup.oss-cn-shenzhen.aliyuncs.com/logo_min.png",
          //   cardName: "\u5728\u7EBF\u4E4B\u5BB6",
          cardContent:"\u5728\u7EBF\u7F8E\u5267\u5929\u5802,\u5728\u7EBF\u65E5\u5267\u63A8\u8350,\u5728\u7EBF\u97E9\u5267",
        },
        {
          cardSrc: "https://www.hntwqc.net/",
          cardImgSrc: "https://feyoudao.oss-cn-hongkong.aliyuncs.com/logo/logo29.jpg",
          cardName: "\u609F\u7A7A\u7F8E\u5267",
          cardContent:"\u5206\u4EAB\u7F8E\u5267",
        },
        {
          cardSrc: "https://www.novipnoad.com/",
          cardName: "NOVIPNOAD",
          cardContent:"\u4E3A\u7528\u6237\u63D0\u4F9B\u53CA\u65F6\u7684\u6D77\u5916\u70ED\u95E8\u5267\u96C6\u5728\u7EBF\u89C2\u770B\uFF0C\u53CB\u597D\u65E0\u5E7F\u544A\uFF0C\u81F4\u529B\u4E8E\u6700\u8F7B\u677E\u7684\u8FFD\u5267\u4F53\u9A8C\u3002",
        },
        {
          cardSrc: "https://www.dixidixi.com/",
          //   cardImgSrc: "https://www.dixidixi.com/static/logo.png",
          cardName: "\u5600\u563B\u5600\u563B",
          cardContent:"\u63D0\u4F9B\u6700\u5168\u7684\u6700\u65B0\u7535\u89C6\u5267\uFF0C2019\u6700\u65B0\u7535\u5F71\uFF0C\u97E9\u56FD\u7535\u89C6\u5267\u3001\u9999\u6E2Ftvb\u7535\u89C6\u5267\u3001\u65E5\u672C\u52A8\u6F2B\u3001\u65E5\u5267\u3001\u7F8E\u5267\u3001\u7EFC\u827A\u7684\u5728\u7EBF\u89C2\u770B\u548C\u5267\u96C6\u4EA4\u6D41\u573A\u6240\uFF01",
        },
        {
          cardSrc: "https://dilidili.online/",
          cardImgSrc: "https://dilidili.online/static/img/logo.png",
          cardName: "\u5600\u54E9\u5600\u54E9",
          cardContent:"\u7B5B\u9009\u7ECF\u5178\u4F5C\u54C1\u5E76\u5C06\u65B0\u4F5C\u7ECF\u5178\u8F6E\u756A\u63A8\u8350",
        },
      ]
    }
  }
}
<\/script>>
`],slug:"movies",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/nav/movies.md",filePathRelative:"nav/movies.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/movies/index.html.vue",componentFilePathRelative:"pages/movies/index.html.vue",componentFileChunkName:"v-97b2979a",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/movies/index.html.js",dataFilePathRelative:"pages/movies/index.html.js",dataFileChunkName:"v-97b2979a",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/movies/index.html",htmlFilePathRelative:"movies/index.html"},{data:{key:"v-75214906",path:"/nav-page/",title:"\u5BFC\u822A\u9875",lang:"zh-CN",frontmatter:{title:"\u5BFC\u822A\u9875",date:"2022-05-09T02:03:48.000Z",permalink:"/nav-page/",categories:["nav"],tags:["\u7F16\u7A0B\u5BFC\u822A"]},excerpt:"",headers:[{level:2,title:"\u641C\u7D22\u5F15\u64CE",slug:"\u641C\u7D22\u5F15\u64CE",children:[]},{level:2,title:"\u4EE3\u7801\u6258\u7BA1",slug:"\u4EE3\u7801\u6258\u7BA1",children:[]},{level:2,title:"\u524D\u7AEF\u5F00\u53D1",slug:"\u524D\u7AEF\u5F00\u53D1",children:[]},{level:2,title:"\u540E\u7AEF\u5F00\u53D1",slug:"\u540E\u7AEF\u5F00\u53D1",children:[]},{level:2,title:"\u6587\u6863\u5DE5\u5177",slug:"\u6587\u6863\u5DE5\u5177",children:[]},{level:2,title:"\u70ED\u95E8\u793E\u533A",slug:"\u70ED\u95E8\u793E\u533A",children:[]},{level:2,title:"\u5DE5\u5177\u5408\u96C6",slug:"\u5DE5\u5177\u5408\u96C6",children:[]},{level:2,title:"\u6587\u6863\u6559\u7A0B",slug:"\u6587\u6863\u6559\u7A0B",children:[]},{level:2,title:"\u52A8\u6001\u56FE\u8868",slug:"\u52A8\u6001\u56FE\u8868",children:[]},{level:2,title:"\u56FE\u7247\u56FE\u6807",slug:"\u56FE\u7247\u56FE\u6807",children:[]},{level:2,title:"CSS\u6837\u5F0F",slug:"css\u6837\u5F0F",children:[]},{level:2,title:"\u7F51\u7AD9\u5206\u6790",slug:"\u7F51\u7AD9\u5206\u6790",children:[]},{level:2,title:"\u5176\u5B83\u8D44\u6E90",slug:"\u5176\u5B83\u8D44\u6E90",children:[]}],git:{updatedTime:1655874866e3},filePathRelative:"nav/nav-page.md"},key:"v-75214906",path:"/nav-page/",title:"\u5BFC\u822A\u9875",lang:"zh-CN",frontmatter:{title:"\u5BFC\u822A\u9875",date:"2022-05-09T02:03:48.000Z",permalink:"/nav-page/",categories:["nav"],tags:["\u7F16\u7A0B\u5BFC\u822A"]},excerpt:"",headers:[{level:2,title:"\u641C\u7D22\u5F15\u64CE",slug:"\u641C\u7D22\u5F15\u64CE",children:[]},{level:2,title:"\u4EE3\u7801\u6258\u7BA1",slug:"\u4EE3\u7801\u6258\u7BA1",children:[]},{level:2,title:"\u524D\u7AEF\u5F00\u53D1",slug:"\u524D\u7AEF\u5F00\u53D1",children:[]},{level:2,title:"\u540E\u7AEF\u5F00\u53D1",slug:"\u540E\u7AEF\u5F00\u53D1",children:[]},{level:2,title:"\u6587\u6863\u5DE5\u5177",slug:"\u6587\u6863\u5DE5\u5177",children:[]},{level:2,title:"\u70ED\u95E8\u793E\u533A",slug:"\u70ED\u95E8\u793E\u533A",children:[]},{level:2,title:"\u5DE5\u5177\u5408\u96C6",slug:"\u5DE5\u5177\u5408\u96C6",children:[]},{level:2,title:"\u6587\u6863\u6559\u7A0B",slug:"\u6587\u6863\u6559\u7A0B",children:[]},{level:2,title:"\u52A8\u6001\u56FE\u8868",slug:"\u52A8\u6001\u56FE\u8868",children:[]},{level:2,title:"\u56FE\u7247\u56FE\u6807",slug:"\u56FE\u7247\u56FE\u6807",children:[]},{level:2,title:"CSS\u6837\u5F0F",slug:"css\u6837\u5F0F",children:[]},{level:2,title:"\u7F51\u7AD9\u5206\u6790",slug:"\u7F51\u7AD9\u5206\u6790",children:[]},{level:2,title:"\u5176\u5B83\u8D44\u6E90",slug:"\u5176\u5B83\u8D44\u6E90",children:[]}],content:`---
title: \u5BFC\u822A\u9875
date: 2022-05-09 02:03:48
permalink: /nav-page/
categories: 
  - nav
tags: 
  - \u7F16\u7A0B\u5BFC\u822A
---


## \u641C\u7D22\u5F15\u64CE

<ClientOnly>
  <NavCard :cardData="cardData0" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## \u4EE3\u7801\u6258\u7BA1

<ClientOnly>
  <NavCard :cardData="cardData1" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## \u524D\u7AEF\u5F00\u53D1

<ClientOnly>
  <NavCard :cardData="cardData7_1" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

<ClientOnly>
  <NavCard :cardData="cardData7_2" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

<ClientOnly>
  <NavCard :cardData="cardData7_3" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

<ClientOnly>
  <NavCard :cardData="cardData7_4" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

<ClientOnly>
  <NavCard :cardData="cardData7_99" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## \u540E\u7AEF\u5F00\u53D1

<ClientOnly>
  <NavCard :cardData="cardData6" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## \u6587\u6863\u5DE5\u5177

<ClientOnly>
  <NavCard :cardData="cardData5" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## \u70ED\u95E8\u793E\u533A

<ClientOnly>
  <NavCard :cardData="cardData2" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## \u5DE5\u5177\u5408\u96C6

<ClientOnly>
  <NavCard :cardData="cardData3" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## \u6587\u6863\u6559\u7A0B

<ClientOnly>
  <NavCard :cardData="cardData4" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## \u52A8\u6001\u56FE\u8868

<ClientOnly>
  <NavCard :cardData="cardData8" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## \u56FE\u7247\u56FE\u6807

<ClientOnly>
  <NavCard :cardData="cardData9" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## CSS\u6837\u5F0F

<ClientOnly>
  <NavCard :cardData="cardData10" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## \u7F51\u7AD9\u5206\u6790

<ClientOnly>
  <NavCard :cardData="cardData11" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

## \u5176\u5B83\u8D44\u6E90

<ClientOnly>
  <NavCard :cardData="cardData99" :cardListSize=4 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>

<script>
export default {
    data() {
    return {
      // \u641C\u7D22\u5F15\u64CE
      cardData0: [
        {
          id: '0',
          cardSrc: "http://www.baidu.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104224044.png",
          cardName: "\u767E\u5EA6",
          cardContent:
            "\u767E\u5EA6\u2014\u2014\u5168\u7403\u6700\u5927\u7684\u4E2D\u6587\u641C\u7D22\u5F15\u64CE\u53CA\u6700\u5927\u7684\u4E2D\u6587\u7F51\u7AD9\uFF0C\u5168\u7403\u9886\u5148\u7684\u4EBA\u5DE5\u667A\u80FD\u516C\u53F8",
        },
        {
          cardSrc: "http://www.google.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104225539.png",
          cardName: "Google",
          cardContent:
            "\u5168\u7403\u6700\u5927\u7684\u641C\u7D22\u5F15\u64CE\u516C\u53F8",
        },
        {
          cardSrc: "https://www.bing.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104224430.png",
          cardName: "Bing",
          cardContent:
            "\u5FAE\u8F6F\u516C\u53F8\u63A8\u51FA\u7684\u7528\u4EE5\u53D6\u4EE3Live Search\u7684\u641C\u7D22\u5F15\u64CE",
        },
      ],
      // \u4EE3\u7801\u6258\u7BA1
      cardData1: [
        {
          id: '1',
          cardSrc: "https://github.com/",
          cardImgSrc: "https://img0.baidu.com/it/u=2382900870,3325593570&fm=26&fmt=auto",
          cardName: "Github",
          cardContent:
            "GitHub\u662F\u4E00\u4E2A\u9762\u5411\u5F00\u6E90\u53CA\u79C1\u6709\u8F6F\u4EF6\u9879\u76EE\u7684\u6258\u7BA1\u5E73\u53F0",
        },
        {
          cardSrc: "https://gitee.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104231432.png",
          cardName: "Gitee",
          cardContent:
            "\u5F00\u6E90\u4E2D\u56FD\u65D7\u4E0B\u7684\u4EE3\u7801\u6258\u7BA1\u5E73\u53F0\uFF1A\u7801\u4E91",
        },
        {
          cardSrc: "https://vercel.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105210701.png",
          cardName: "Vercel",
          cardContent:
            "Vercel \u662F\u524D\u7AEF\u6846\u67B6\u548C\u9759\u6001\u7AD9\u70B9\u7684\u5E73\u53F0\uFF0C\u65E8\u5728\u4E0E\u60A8\u7684\u65E0\u5934\u5185\u5BB9\u3001\u5546\u4E1A\u6216\u6570\u636E\u5E93\u96C6\u6210",
        },
        {
          cardSrc: "https://coding.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104231517.png",
          cardName: "Coding",
          cardContent:
            "\u4E00\u7AD9\u5F0F DevOps\uFF0C\u63D0\u5347\u7814\u53D1\u6548\u80FD",
        },
      ],
      // \u70ED\u95E8\u793E\u533A
      cardData2: [
        {
          id: '2',
          cardSrc: "http://www.csdn.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104232713.png",
          cardName: "CDSN",
          cardContent:
            "\u4E2D\u56FD\u4E13\u4E1AIT\u793E\u533ACSDN",
        },
        {
          cardSrc: "http://www.cnblogs.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104232039.png",
          cardName: "\u535A\u5BA2\u56ED",
          cardContent:
            "\u5F00\u53D1\u8005\u7684\u7F51\u4E0A\u5BB6\u56ED",
        },
        {
          cardSrc: "https://www.oschina.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104232755.png",
          cardName: "OSChina",
          cardContent:
            "\u4E2D\u56FD\u6700\u5927\u7684\u5F00\u6E90\u6280\u672F\u793E\u533A",
        },
        {
          cardSrc: "https://segmentfault.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105210328.png",
          cardName: "\u996D\u5426",
          cardContent:
            "\u4E2D\u56FD\u9886\u5148\u7684\u5F00\u53D1\u8005\u6280\u672F\u793E\u533A",
        },
        {
          cardSrc: "https://juejin.im/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104233516.svg",
          cardName: "\u6398\u91D1",
          cardContent:
            "\u6398\u91D1\u662F\u4E00\u4E2A\u5E2E\u52A9\u5F00\u53D1\u8005\u6210\u957F\u7684\u793E\u533A\uFF0C\u662F\u4E00\u4E2A\u9762\u5411\u4E92\u8054\u7F51\u6280\u672F\u4EBA\u7684\u5185\u5BB9\u5206\u4EAB\u5E73\u53F0",
        },
        {
          cardSrc: "https://www.linuxidc.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104233249.png",
          cardName: "Linux\u516C\u793E",
          cardContent:
            "Linux\u7CFB\u7EDF\u95E8\u6237\u7F51\u7AD9",
        },
        {
          cardSrc: "https://www.ibm.com/developerworks/cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104233311.png",
          cardName: "IBM \u5F00\u53D1\u8005",
          cardContent:
            "IBM\u5F00\u53D1\u8005\u793E\u533A",
        },
        {
          cardSrc: "https://www.jianshu.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111001422.png",
          cardName: "\u7B80\u4E66",
          cardContent:
            "\u7B80\u4E66\u662F\u4E00\u4E2A\u4F18\u8D28\u7684\u521B\u4F5C\u793E\u533A,\u5728\u8FD9\u91CC,\u4F60\u53EF\u4EE5\u4EFB\u6027\u5730\u521B\u4F5C,\u4E00\u7BC7\u77ED\u6587\u3001\u4E00\u5F20\u7167\u7247\u3001\u4E00\u9996\u8BD7\u3001\u4E00\u5E45\u753B\u2026\u2026\u6211\u4EEC\u76F8\u4FE1,\u6BCF\u4E2A\u4EBA\u90FD\u662F\u751F\u6D3B\u4E2D\u7684\u827A\u672F\u5BB6,\u6709\u7740\u65E0\u7A77\u7684\u521B\u9020\u529B",
        },
        {
          cardSrc: "https://stackoverflow.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111001325.png",
          cardName: "stack overflow",
          cardContent:
            "Stack Overflow\u662F\u6700\u5927\u3001\u6700\u503C\u5F97\u4FE1\u8D56\u7684\u5728\u7EBF\u793E\u533A\uFF0C\u4F9B\u5F00\u53D1\u4EBA\u5458\u5B66\u4E60\u3001\u5206\u4EAB\u7F16\u7A0B\u77E5\u8BC6\u548C\u5EFA\u7ACB\u804C\u4E1A\u751F\u6DAF",
        },
        {
          cardSrc: "https://maliquankai.com/designnav/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111001711.png",
          cardName: "\u7801\u529B\u5168\u5F00\u8D44\u6E90\u5E93",
          cardContent:
            "\u5F88\u5168\u5F88\u5F3A\u5927\uFF0C\u72EC\u7ACB\u5F00\u53D1\u8005/\u8BBE\u8BA1\u5E72\u8D27/\u4F18\u8D28\u5229\u5668/\u5DE5\u5177\u8D44\u6E90",
        },
        {
          cardSrc: "https://www.infoq.cn/topic/Front-end",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111001811.png",
          cardName: "InfoQ",
          cardContent:
            "\u5728\u65B0\u9648\u4EE3\u8C22\u65FA\u76DB\u7684\u524D\u7AEF\u9886\u57DF\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u628A\u63E1\u524D\u7AEF\u672A\u6765\u7684\u65B9\u5411\uFF0C\u5173\u6CE8\u79D1\u6280\u4F01\u4E1A\u7684\u524D\u7AEF\u5B9E\u8DF5\uFF0C\u5728\u8FD9\u91CC\u770B\u5230\u524D\u7AEF\u7684\u8FDC\u7AEF",
        },
      ],
      // \u5DE5\u5177\u5408\u96C6
      cardData3: [
        {
          id: '3',
          cardSrc: "https://c.runoob.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234003.png",
          cardName: "\u83DC\u9E1F\u5DE5\u5177",
          cardContent:
            "\u83DC\u9E1F\u6559\u7A0B\u63D0\u4F9B\u7684\u5DE5\u5177\u96C6",
        },
        {
          cardSrc: "https://tool.oschina.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104232755.png",
          cardName: "\u5DE5\u5177",
          cardContent:
            "\u5F00\u6E90\u4E2D\u56FD\u5728\u7EBF\u5DE5\u5177",
        },
        {
          cardSrc: "https://tool.lu//",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234610.png",
          cardName: "Tool\u5DE5\u5177\u7BB1",
          cardContent:
            "\u7A0B\u5E8F\u5458\u7684\u5DE5\u5177\u7BB1",
        },
        {
          cardSrc: "http://tools.jb51.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234502.png",
          cardName: "\u811A\u672C\u4E4B\u5BB6",
          cardContent:
            "\u811A\u672C\u4E4B\u5BB6\u65D7\u4E0B\u7684\u5DE5\u5177\u7BB1",
        },
        {
          cardSrc: "https://123.w3cschool.cn/webtools/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234731.png",
          cardName: "W3Cschool",
          cardContent:
            "W3Cschool\u65D7\u4E0B\u7684\u5DE5\u5177\u7BB1",
        },
        {
          cardSrc: "https://gitee.com/explore/all/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104231432.png",
          cardName: "Gitee\u5F00\u6E90",
          cardContent:
            "Gitee \u5F00\u6E90\u9879\u76EE\u63A8\u8350\u5217\u8868",
        },
        {
          cardSrc: "https://cloudconvert.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234641.png",
          cardName: "\u4E91\u8F6C\u6362",
          cardContent:
            "\u5728\u7EBF\u8F6C\u5316\u538B\u7F29\u5305\u3001\u5B57\u4F53\u3001\u56FE\u7247\u3001\u89C6\u9891\u3001\u7535\u5B50\u4E66",
        },
      ],
      // \u6587\u6863\u6559\u7A0B
      cardData4: [
        {
          id: '4',
          cardSrc: "https://www.runoob.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234903.png",
          cardName: "\u83DC\u9E1F\u6559\u7A0B",
          cardContent:
            "\u83DC\u9E1F\u6559\u7A0B\u96C6\u5408",
        },
        {
          cardSrc: "https://www.w3cschool.cn/tutorial/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234912.png",
          cardName: "w3cschool",
          cardContent:
            "w3cschool\u4E3B\u8981\u4E3A\u521D\u5B66\u8005\u6280\u672F\u7684\u4EBA\u5458\u63D0\u4F9B\u5728\u7EBF\u5B66\u4E60\u6559\u7A0B\u548C\u65E5\u5E38\u6280\u672F\u8D44\u6599\u67E5\u8BE2\u670D\u52A1",
        },
        {
          cardSrc: "https://www.w3school.com.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234958.png",
          cardName: "w3cschool",
          cardContent:
            "W3School \u662F\u56E0\u7279\u7F51\u4E0A\u6700\u5927\u7684 WEB \u5F00\u53D1\u8005\u8D44\u6E90\uFF0C\u5176\u4E2D\u5305\u62EC\u5168\u9762\u7684\u6559\u7A0B\u3001\u5B8C\u5584\u7684\u53C2\u8003\u624B\u518C\u4EE5\u53CA\u5E9E\u5927\u7684\u4EE3\u7801\u5E93",
        },
        {
          cardSrc: "https://developer.mozilla.org/zh-CN/docs/Learn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104235346.png",
          cardName: "MDN",
          cardContent:
            "\u6E90\u4E8E\u5F00\u53D1\u8005\uFF0C\u670D\u52A1\u5F00\u53D1\u8005",
        },
        {
          cardSrc: "https://www.javatpoint.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104235316.png",
          cardName: "JavaPoint",
          cardContent:
            "The Best Portal to Learn Technologies",
        },
      ],
      // \u6587\u6863\u5DE5\u5177
      cardData5: [
        {
          id: '5',
          cardSrc: "https://vuepress.vuejs.org/zh/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000146.png",
          cardName: "VuePress",
          cardContent:
            "Vue \u9A71\u52A8\u7684\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668\uFF0C\u672C\u9879\u76EE\u5C31\u662F\u4F7F\u7528VuePress\u5F00\u53D1\u7684",
        },
        {
          cardSrc: "https://doc.xugaoyi.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200409124835.png",
          cardName: "vuepress-theme-vdoing",
          cardContent:
            "\u{1F680}\u4E00\u6B3E\u7B80\u6D01\u9AD8\u6548\u7684 VuePress \u77E5\u8BC6\u7BA1\u7406&\u535A\u5BA2 \u4E3B\u9898",
        },
        {
          cardSrc: "https://hexo.io/zh-cn/",
          cardImgSrc: "https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg",
          cardName: "Hexo",
          cardContent:
            "\u5FEB\u901F\u3001\u7B80\u6D01\u4E14\u9AD8\u6548\u7684\u535A\u5BA2\u6846\u67B6",
        },
        {
          cardSrc: "https://www.yuque.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105213419.png",
          cardName: "\u8BED\u96C0",
          cardContent:
            "\u65B0\u4E00\u4EE3\u4E91\u7AEF\u77E5\u8BC6\u5E93\uFF0C\u4E2A\u4EBA\u7B14\u8BB0\u4E0E\u77E5\u8BC6\u521B\u4F5C\uFF0C\u56E2\u961F\u534F\u540C\u4E0E\u77E5\u8BC6\u6C89\u6DC0",
        },
        {
          cardSrc: "https://www.gitbook.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000040.png",
          cardName: "Gitbook",
          cardContent:
            "\u4E00\u4E2A\u5148\u8FDB\u53EF\u5B9A\u5236\u7684\u6587\u6863\u683C\u5F0F\u5DE5\u5177",
        },
        {
          cardSrc: "https://docsify.js.org/#/zh-cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000115.png",
          cardName: "Docsify",
          cardContent:
            "\u4E00\u4E2A\u795E\u5947\u7684\u6587\u6863\u7F51\u7AD9\u751F\u6210\u5DE5\u5177",
        },
      ],
      // \u540E\u7AEF\u5F00\u53D1
      cardData6: [
        {
          id: '6',
          cardSrc: "https://spring.io/projects/spring-boot/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000450.png",
          cardName: "Spring",
          cardContent:
            "Spring\u6846\u67B6\u662F\u4E00\u4E2A\u5F00\u653E\u6E90\u4EE3\u7801\u7684J2EE\u5E94\u7528\u7A0B\u5E8F\u6846\u67B6",
        },
        {
          cardSrc: "https://mybatis.org/mybatis-3/zh/index.html",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000812.png",
          cardName: "MyBatis",
          cardContent:
            "MyBatis \u662F\u4E00\u6B3E\u4F18\u79C0\u7684\u6301\u4E45\u5C42\u6846\u67B6\uFF0C\u5B83\u652F\u6301\u5B9A\u5236\u5316 SQL\u3001\u5B58\u50A8\u8FC7\u7A0B\u4EE5\u53CA\u9AD8\u7EA7\u6620\u5C04",
        },
        {
          cardSrc: "https://mybatis.plus/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000613.png",
          cardName: "MyBatis Plus",
          cardContent:
            "MyBatis \u7684\u589E\u5F3A\u5DE5\u5177\uFF0C\u5728 MyBatis \u7684\u57FA\u7840\u4E0A\u53EA\u505A\u589E\u5F3A\u4E0D\u505A\u6539\u53D8\uFF0C\u4E3A\u7B80\u5316\u5F00\u53D1\u3001\u63D0\u9AD8\u6548\u7387\u800C\u751F",
        },
        {
          cardSrc: "https://mvnrepository.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000653.png",
          cardName: "Maven",
          cardContent:
            "Maven \u4ED3\u5E93\u68C0\u7D22\uFF0C\u975E\u5E38\u5E38\u7528",
        },
        {
          cardSrc: "https://docs.gradle.org/current/userguide/userguide.html",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000729.png",
          cardName: "Gradle",
          cardContent:
            "\u57FA\u4E8EApache Ant\u548CApache Maven\u6982\u5FF5\u7684\u9879\u76EE\u81EA\u52A8\u5316\u6784\u5EFA\u5F00\u6E90\u5DE5\u5177",
        },
      ],
      // \u524D\u7AEF\u5F00\u53D1
      // Vue UI
      cardData7_1: [
        {
          id: '7_1',
          title: 'Vue & UI',
          cardSrc: "https://cn.vuejs.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001047.png",
          cardName: "Vue",
          cardContent:
            "\u6E10\u8FDB\u5F0F JavaScript \u6846\u67B6",
        },
        {
          cardSrc: "https://element.eleme.cn/#/zh-CN/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001602.png",
          cardName: "Element-UI",
          cardContent:
            "Element\uFF0C\u4E00\u5957\u4E3A\u5F00\u53D1\u8005\u3001\u8BBE\u8BA1\u5E08\u548C\u4EA7\u54C1\u7ECF\u7406\u51C6\u5907\u7684\u57FA\u4E8E Vue \u7684\u684C\u9762\u7AEF\u7EC4\u4EF6\u5E93",
        },
        {
          cardSrc: "https://next.antdv.com/docs/vue/introduce-cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105223748.svg",
          cardName: "Ant Design Vue",
          cardContent:
            "Vue UI \u4E4B Ant Design Vue\uFF0C\u8682\u8681\u91D1\u670D\u7684 Vue \u6846\u67B6",
        },
        {
          cardSrc: "https://www.iviewui.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001656.png",
          cardName: "View UI",
          cardContent:
            "View UI \u662F\u4E00\u5957\u57FA\u4E8E Vue.js \u7684\u9AD8\u8D28\u91CFUI \u7EC4\u4EF6\u5E93",
        },
        {
          cardSrc: "https://youzan.github.io/vant/#/zh-CN/",
          cardImgSrc: "https://img01.yzcdn.cn/vant/logo.png",
          cardName: "Vant",
          cardContent:
            "\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93",
        },
      ],
      // React UI
      cardData7_2: [
        {
          id: '7_2',
          title: 'React & UI',
          cardSrc: "https://react.docschina.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001206.png",
          cardName: "React",
          cardContent:
            "\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 JavaScript \u5E93",
        },
        {
          cardSrc: "https://ant.design/index-cn",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105223748.svg",
          cardName: "Ant Design",
          cardContent:
            "React \u5F00\u7BB1\u5373\u7528\u7684\u4E2D\u53F0\u524D\u7AEF/\u8BBE\u8BA1\u89E3\u51B3\u65B9\u6848",
        },
        {
          cardSrc: "https://react-bootstrap.github.io/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105224229.png",
          cardName: "Ant Design Vue",
          cardContent:
            "\u6700\u6D41\u884C\u7684\u524D\u7AEF\u6846\u67B6 bootstrap\uFF0C\u4E3A React \u9002\u914D",
        },
        {
          cardSrc: "https://mui.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105224500.png",
          cardName: "MATERIAL-UI",
          cardContent:
            "View UI \u662F\u4E00\u5957\u57FA\u4E8E Vue.js \u7684\u9AD8\u8D28\u91CFUI \u7EC4\u4EF6\u5E93",
        },
        {
          cardSrc: "https://youzan.github.io/vant/#/zh-CN/",
          cardImgSrc: "https://img01.yzcdn.cn/vant/logo.png",
          cardName: "Vant",
          cardContent:
            "\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93",
        },
      ],
      // React UI
      cardData7_3: [
        {
          id: '7_3',
          title: '\u6548\u679C\u7EC4\u4EF6',
          cardSrc: "https://animate.style/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105233408.png",
          cardName: "Animate.css",
          cardContent:
            "\u52A8\u753B\u5E93",
        },
        {
          cardSrc: "https://www.swiper.com.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105233615.png",
          cardName: "Swiper",
          cardContent:
            "\u8F6E\u64AD\u7EC4\u4EF6",
        },
        {
          cardSrc: "http://www.mescroll.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105233730.png",
          cardName: "mescroll",
          cardContent:
            "\u4E0B\u62C9\u5237\u65B0\u548C\u4E0A\u62C9\u52A0\u8F7D\u6846\u67B6-\u57FA\u4E8E\u539F\u751FJS",
        },
      ],
      // \u5DE5\u5177\u7C7B
      cardData7_4: [
        {
          id: '7_4',
          title: '\u5DE5\u5177\u7C7B',
          cardSrc: "https://www.lodashjs.com/",
          cardImgSrc: "https://www.lodashjs.com/img/lodash.png",
          cardName: "Lodash",
          cardContent:
            "Lodash \u662F\u4E00\u4E2A\u4E00\u81F4\u6027\u3001\u6A21\u5757\u5316\u3001\u9AD8\u6027\u80FD\u7684 JavaScript \u5B9E\u7528\u5DE5\u5177\u5E93",
        },
        {
          cardSrc: "https://dayjs.fenxianglu.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220110235754.png",
          cardName: "Day.js",
          cardContent:
            "Day.js\u662F\u4E00\u4E2A\u6781\u7B80\u7684JavaScript\u5E93\uFF0C\u53EF\u4EE5\u4E3A\u73B0\u4EE3\u6D4F\u89C8\u5668\u89E3\u6790\u3001\u9A8C\u8BC1\u3001\u64CD\u4F5C\u548C\u663E\u793A\u65E5\u671F\u548C\u65F6\u95F4",
        },
        {
          cardSrc: "https://github.com/hustcc/timeago.js",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111000119.png",
          cardName: "Timeago.js",
          cardContent:
            "\u76F8\u5BF9\u65F6\u95F4\uFF0C\u5982N\u5C0F\u65F6\u524D",
        },
        {
          cardSrc: "https://echarts.apache.org/zh/index.html",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/logo.png?_v_=20200710_1",
          cardName: "Apache ECharts",
          cardContent:
            "\u4E00\u4E2A\u57FA\u4E8E JavaScript \u7684\u5F00\u6E90\u53EF\u89C6\u5316\u56FE\u8868\u5E93",
        },
        {
          cardSrc: "https://pandao.github.io/editor.md/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111000050.png",
          cardName: "Meditor.md",
          cardContent:
            "\u5F00\u6E90\u5728\u7EBF Markdown \u7F16\u8F91\u5668",
        },
        {
          cardSrc: "https://github.com/validatorjs/validator.js",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111000249.png",
          cardName: "validator.js",
          cardContent:
            "\u8868\u5355\u9A8C\u8BC1\u5E93",
        },
      ],
      // \u5176\u4ED6
      cardData7_99: [
        {
          id: '7_99',
          title: '\u5176\u4ED6',
          cardSrc: "https://www.bootcss.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000409.png",
          cardName: "BootStrap",
          cardContent:
            "\u7B80\u6D01\u3001\u76F4\u89C2\u3001\u5F3A\u608D\u7684\u524D\u7AEF\u5F00\u53D1\u6846\u67B6\uFF0C\u8BA9web\u5F00\u53D1\u66F4\u8FC5\u901F\u3001\u7B80\u5355",
        },
        {
          cardSrc: "https://www.npmjs.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001006.png",
          cardName: "NPM",
          cardContent:
            "NodeJS \u5305\u7BA1\u7406\u6587\u6863",
        },
        {
          cardSrc: "https://www.angularjs.net.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001414.png",
          cardName: "AngularJS",
          cardContent:
            "AngularJS\u662F\u4E00\u6B3E\u4F18\u79C0\u7684\u524D\u7AEFJS\u6846\u67B6",
        },
        {
          cardSrc: "https://electronjs.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001728.png",
          cardName: "Electron",
          cardContent:
            "Electron \u662F\u4E00\u4E2A\u8D4B\u529B\u524D\u7AEF\u8FDB\u884C\u8DE8\u5E73\u53F0\u5F00\u53D1\u7684\u6846\u67B6,\u8BA9\u5F00\u53D1\u4EBA\u5458\u4F7F\u7528 JavaScript\uFF0CHTML \u548C CSS \u7B49\u524D\u7AEF\u6280\u672F\u6784\u5EFA\u8DE8\u5E73\u53F0\u7684\u684C\u9762\u5E94\u7528",
        },
        {
          cardSrc: "https://caniuse.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001759.png",
          cardName: "can i use",
          cardContent:
            "\u524D\u7AEF\u5E38\u7528\u7F51\u7AD9\u4E86,\u67E5\u770B\u4E0D\u540C\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u517C\u5BB9\u6027",
        },
      ],
      // \u52A8\u6001\u56FE\u8868
      cardData8: [
        {
          id: '8',
          cardSrc: "https://www.echartsjs.com/examples/zh/index.html",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014053.png",
          cardName: "Echarts",
          cardContent:
            "\u767E\u5EA6\u5F00\u53D1\u7684\u53EF\u5B9A\u5236\u7684\u6570\u636E\u53EF\u89C6\u5316\u56FE\u8868\uFF0C\u5DF2\u7ECF\u6350\u7ED9Apache",
        },
        {
          cardSrc: "https://antv.vision/zh",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014146.png",
          cardName: "AntV",
          cardContent:
            "\u8682\u8681\u91D1\u670D\u5168\u65B0\u4E00\u4EE3\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u63D0\u4F9B\u4E00\u5957\u7B80\u5355\u65B9\u4FBF\u3001\u4E13\u4E1A\u53EF\u9760\u3001\u65E0\u9650\u53EF\u80FD\u7684\u6570\u636E\u53EF\u89C6\u5316\u6700\u4F73\u5B9E\u8DF5",
        },
        {
          cardSrc: "https://d3js.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014223.png",
          cardName: "D3",
          cardContent:
            "\u7528\u52A8\u6001\u56FE\u5F62\u663E\u793A\u6570\u636E\u7684JavaScript\u5E93",
        },
        {
          cardSrc: "https://threejs.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014307.png",
          cardName: "ThreeJs",
          cardContent:
            "\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u4E2D\u76843D \u5F15\u64CE",
        },
        {
          cardSrc: "https://www.highcharts.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014337.png",
          cardName: "HighCharts",
          cardContent:
            "\u517C\u5BB9 IE6+\u3001\u652F\u6301\u79FB\u52A8\u7AEF\u3001\u56FE\u8868\u7C7B\u578B\u4E30\u5BCC\u7684HTML5\u4EA4\u4E92\u6027\u56FE\u8868\u5E93",
        },
        {
          cardSrc: "https://www.chartjs.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014412.png",
          cardName: "ChartJs",
          cardContent:
            "\u57FA\u4E8E HTML5 \u7684 JavaScript \u56FE\u8868\u5E93",
        },
        {
          cardSrc: "http://www.flotcharts.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014448.png",
          cardName: "FlotCharts",
          cardContent:
            "\u57FA\u4E8EjQuery\u7684Charts\uFF0CGrafana\u5C31\u662F\u7528\u7684\u5B83",
        },
      ],
      // \u56FE\u7247\u56FE\u6807
      cardData9: [
        {
          id: '9',
          cardSrc: "http://fontawesome.dashgame.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014740.png",
          cardName: "fonta Wesome",
          cardContent:
            "\u5B8C\u7F8E\u7684\u56FE\u6807\u5B57\u4F53\u5E93",
        },
        {
          cardSrc: "https://squoosh.app/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014911.png",
          cardName: "Squoosh",
          cardContent:
            "\u8C37\u6B4C\u51FA\u54C1\u5728\u7EBF\u514D\u8D39\u56FE\u7247\u538B\u7F29\u5DE5\u5177\u795E\u5668",
        },
        {
          cardSrc: "http://zhitu.isux.us/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014955.png",
          cardName: "\u667A\u56FE",
          cardContent:
            "\u817E\u8BAF\u51FA\u54C1\uFF0C\u5728\u7EBF\u56FE\u7247\u538B\u7F29\uFF0C\u652F\u6301\u8F6C\u6210 webP \u5904\u7406\u9759\u6001\u56FE\u7247\u65F6\u5019\u5F88\u597D\u7528",
        },
        {
          cardSrc: "https://www.picdiet.com/zh-cn",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015040.png",
          cardName: "Picdiet",
          cardContent:
            "Picdiet\u662F\u4E00\u6B3E\u5728\u7EBF\u6279\u91CF\u538B\u7F29\u56FE\u7247\u795E\u5668\uFF0C\u5B83\u4E0D\u9700\u8981\u540E\u7AEF\u670D\u52A1\u5668\u6216\u8005API\u7684\u652F\u6301\uFF0C\u4EC5\u901A\u8FC7\u4F60\u7684\u6D4F\u89C8\u5668\u6765\u538B\u7F29\u56FE\u7247\u5927\u5C0F\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u538B\u7F29\u56FE\u7247\u6781\u5FEB\u5E76\u4E14\u4E0D\u4F1A\u5BFC\u81F4\u9690\u79C1\u6216\u654F\u611F\u56FE\u7247\u6CC4\u6F0F",
        },
        {
          cardSrc: "http://www.aigei.com/bgremover/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015116.png",
          cardName: "Bgremover",
          cardContent:
            "\u5728\u7EBF\u56FE\u7247\u53BB\u5E95\u5DE5\u5177",
        },
        {
          cardSrc: "https://www.photopea.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015154.png",
          cardName: "Photopea",
          cardContent:
            "\u7F51\u9875\u7248\u672C Photoshop\uFF0C\u975E\u5E38\u5F3A\u5927",
        },
        {
          cardSrc: "https://www.iconfont.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015248.png",
          cardName: "Iconfont",
          cardContent:
            "\u963F\u91CC\u5988\u5988MUX\u503E\u529B\u6253\u9020\u7684\u77E2\u91CF\u56FE\u6807\u7BA1\u7406\u3001\u4EA4\u6D41\u5E73\u53F0\u3002\u8BBE\u8BA1\u5E08\u5C06\u56FE\u6807\u4E0A\u4F20\u5230Iconfont\u5E73\u53F0\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0B\u8F7D\u591A\u79CD\u683C\u5F0F\u7684icon\uFF0C\u5E73\u53F0\u4E5F\u53EF\u5C06\u56FE\u6807\u8F6C\u6362\u4E3A\u5B57\u4F53\uFF0C\u4FBF\u4E8E\u524D\u7AEF\u5DE5\u7A0B\u5E08\u81EA\u7531\u8C03\u6574\u4E0E\u8C03\u7528",
        },
        {
          cardSrc: "http://cssicon.space/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015322.png",
          cardName: "Css Icon",
          cardContent:
            "\u6240\u6709\u7684 icon \u90FD\u662F\u7EAF css \u753B\u7684 \u7F3A\u70B9\uFF1Aicon \u4E0D\u591F\u591A",
        },
      ],
      // CSS\u6837\u5F0F
      cardData10: [
        {
          id: '10',
          cardSrc: "http://sass.bootcss.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015622.png",
          cardName: "SAAS",
          cardContent:
            "Sass \u662F\u6210\u719F\u3001\u7A33\u5B9A\u3001\u5F3A\u5927\u7684 CSS \u6269\u5C55\u8BED\u8A00",
        },
        {
          cardSrc: "https://stylus.bootcss.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015650.png",
          cardName: "Stylus",
          cardContent:
            "\u5BCC\u4E8E\u8868\u73B0\u529B\u3001\u52A8\u6001\u7684\u3001\u5065\u58EE\u7684 CSS",
        },
        {
          cardSrc: "https://less.bootcss.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015753.png",
          cardName: "Less",
          cardContent:
            "\u7ED9 CSS \u52A0\u70B9\u6599",
        },
        {
          cardSrc: "http://apps.eky.hk/css-triangle-generator/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015906.png",
          cardName: "CSS riangle",
          cardContent:
            "\u5E2E\u4F60\u5FEB\u901F\u7528 css \u505A\u51FA\u4E09\u89D2\u5F62",
        },
        {
          cardSrc: "http://www.cssarrowplease.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015951.png",
          cardName: "CSS Arrow",
          cardContent:
            "\u5E2E\u4F60\u505A\u5BF9\u8BDD\u6846\u4E09\u89D2\u7684",
        },
        {
          cardSrc: "hhttps://bennettfeely.com/image-effects/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020027.png",
          cardName: "CSS Effects",
          cardContent:
            "\u56FE\u7247CSS\u6837\u5F0F\u63A7\u5236",
        },
        {
          cardSrc: "https://app.zeplin.io/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "zeplin",
          cardContent:
            "\u524D\u7AEF\u548C\u8BBE\u8BA1\u5E08\u795E\u5668\uFF0C\u6709\u6807\u6CE8\u3001Style Guide\u3001\u7248\u672C\u7BA1\u7406\u3001\u7B80\u5355\u7684\u56E2\u961F\u534F\u4F5C\uFF0C\u91CD\u70B9\u662F\u524D\u7AEF\u4E0D\u7528\u5199css \u4E86\uFF0C\u590D\u5236\u5C31\u53EF\u4EE5\u4E86",
        },
        {
          cardSrc: "hhttp://bennettfeely.com/clippy/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "clippy",
          cardContent:
            "\u5728\u7EBF\u5E2E\u4F60\u4F7F\u7528 css clip-path \u505A\u51FA\u5404\u79CD\u5F62\u72B6\u7684\u56FE\u5F62",
        },
      ],
      // \u7F51\u7AD9\u5206\u6790
      cardData11: [
        {
          id: '11',
          cardSrc: "https://tongji.baidu.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104224044.png",
          cardName: "\u767E\u5EA6\u7EDF\u8BA1",
          cardContent:
            "\u57FA\u4E8E\u767E\u5EA6\u5927\u6570\u636E\u80FD\u529B,\u5B9E\u73B0\u5168\u57DF\u6570\u636E\u81EA\u52A8\u5316\u91C7\u96C6\u3001\u878D\u5408\u591A\u79CD\u6A21\u578B\u7B97\u6CD5,\u8D4B\u80FD\u4F01\u4E1A\u6DF1\u5165\u5206\u6790\u6D1E\u5BDF\u7528\u6237\u884C\u4E3A,\u4EE5\u9A71\u52A8\u7528\u6237\u8FD0\u8425\u7B56\u7565\u4F18\u5316\u3001\u4EA7\u54C1\u7528\u6237\u4F53\u9A8C\u63D0\u5347\u53CA\u5168\u6E20\u9053\u5F52\u56E0\u6700\u5927\u5316\u8F6C\u5316\u6548\u679C",
        },
        {
          cardSrc: "https://ziyuan.baidu.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104224044.png",
          cardName: "\u767E\u5EA6\u8D44\u6E90",
          cardContent:
            "\u767E\u5EA6\u641C\u7D22\u9762\u5411\u5408\u4F5C\u4F19\u4F34\u7684\u5B98\u65B9\u5E73\u53F0\uFF0C\u4E3A\u5F00\u53D1\u8005\u3001\u5185\u5BB9\u521B\u4F5C\u8005\u3001\u7AD9\u70B9\u7BA1\u7406\u8005\u7B49\u4F19\u4F34\uFF0C\u63D0\u4F9B\u4F18\u5316\u5DE5\u5177\u3001\u6570\u636E\u3001\u8BFE\u7A0B\u3001Q&A\u7B49\u670D\u52A1\uFF0C\u52A9\u529B\u8D44\u6E90\u8FDB\u5165\u641C\u7D22\uFF0C\u540C\u65F6\u63D0\u4F9B\u641C\u7D22\u9879\u76EE\u5408\u4F5C\u673A\u4F1A\uFF0C\u8BA9\u4F18\u8D28\u8D44\u6E90\u8131\u9896\u800C\u51FA",
        },
        {
          cardSrc: "https://developers.google.cn/analytics/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105214915.svg",
          cardName: "\u8C37\u6B4C\u5206\u6790",
          cardContent:
            "\u6536\u96C6\u3001\u914D\u7F6E\u5E76\u5206\u6790\u60A8\u7684\u6570\u636E,\u52A9\u529B\u60A8\u8986\u76D6\u6700\u7406\u60F3\u7684\u53D7\u4F17\u7FA4\u4F53",
        },
        {
          cardSrc: "https://www.aicesu.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105214633.png",
          cardName: "\u7231\u6D4B\u901F",
          cardContent:
            "\u8C37\u6B4C\u7F51\u7AD9\u6D4B\u901F PageSpeed Insights - Google\u7F51\u9875\u6027\u80FD\u4F18\u5316\u6D4B\u8BD5\uFF0C\u5168\u9762\u5206\u6790\u63D0\u5347\u7F51\u9875\u52A0\u8F7D\u901F\u5EA6\u4E0E\u7F51\u7AD9\u6D4B\u8BD5\u8BC4\u5206",
        },
        {
          cardSrc: "https://www.boce.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105215329.svg",
          cardName: "BOCE",
          cardContent:
            "\u62E8\u6D4B-\u514D\u8D39\u7684\u57DF\u540D\u68C0\u6D4B\u5DE5\u5177\u7F51-\u7F51\u7AD9\u6D4B\u901F-ping\u68C0\u6D4B-\u57DF\u540D\u6C61\u67D3-\u57DF\u540D\u88AB\u5899-dns\u67E5\u8BE2-IPv6\u7F51\u7AD9\u6D4B\u8BD5-\u8DEF\u7531\u8DDF\u8E2A\u67E5\u8BE2-\u52AB\u6301\u68C0\u6D4B",
        },
      ],
      // \u5176\u5B83\u8D44\u6E90
      cardData99: [
        {
          id: '99',
          cardSrc: "https://astexplorer.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "astexplorer",
          cardContent: "\u4E00\u4E2A\u5728\u7EBF ast \u751F\u6210\u5668",
        },
        {
          cardSrc: "https://30secondsofcode.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "30 seconds of code",
          cardContent:
            "\u6536\u96C6\u4E86\u8BB8\u591A\u6709\u7528\u7684\u4EE3\u7801\u5C0F\u7247\u6BB5",
        },
        {
          cardSrc: "https://jex.im/regulex/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "jex",
          cardContent:
            "\u6B63\u5219\u53EF\u89C6\u5316\u7F51\u7AD9\uFF0C\u914D\u5408\u4E0A\u9762\u7684 Regular Expressions\uFF0C\u5199\u6B63\u5219\u65B9\u4FBF\u5F88\u591A",
        },
        {
          cardSrc: "https://jsfiddle.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "jsfiddle",
          cardContent:
            "\u5728\u7EBF\u8FD0\u884C\u4EE3\u7801\u7F51\u7AD9 \u5F88\u4E0D\u9519\uFF0C\u53EF\u60DC\u8981\u7FFB\u5899",
        },
        {
          cardSrc: "https://codepan.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "codepan",
          cardContent:
            "\u5728\u7EBF\u8FD0\u884C\u4EE3\u7801\u7F51\u7AD9 \u4E0D\u7528\u7FFB\u5899\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u90E8\u7F72",
        },
        {
          cardSrc: "https://fiddle.md/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "fiddle.md",
          cardContent:
            "\u4E00\u4E2A\u65B9\u4FBF\u7684\u5728\u7EBF\u5171\u4EAB markdown \u5728\u7EBF\u7B14\u8BD5\u9898\u4E00\u822C\u90FD\u7528\u8FD9\u4E2A",
        },
        {
          cardSrc: "https://www.jsdelivr.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "jsdelivr",
          cardContent:
            "cdn \u670D\u52A1",
        },
        {
          cardSrc: "https://unpkg.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "unpkg",
          cardContent:
            "\u5E38\u7528\u7684 cdn \u670D\u52A1",
        },
        {
          cardSrc: "https://coderpad.io/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "coderpad",
          cardContent:
            "\u8FDC\u7A0B\u9762\u8BD5\u7684\u795E\u5668\uFF0C\u53EF\u4EE5\u8BA9\u9762\u8BD5\u8005\u8FDC\u7A0B\u5199\u4EE3\u7801 \u4E0D\u8FC7\u9700\u8981\u7FFB\u5899",
        },
        {
          cardSrc: "http://www.icode.live/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "icode",
          cardContent:
            "\u6709\u8D5E\u56E2\u961F\u51FA\u54C1\u7684 coderpad \u53EF\u4EE5\u4E92\u8865\uFF0C\u5B83\u4E0D\u9700\u8981\u7FFB\u5899",
        },
        {
          cardSrc: "https://www.codeadvice.io/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "codeadvice",
          cardContent:
            "\u53C8\u4E00\u4E2A\u8BA9\u9762\u8BD5\u8005\u8FDC\u7A0B\u5199\u4EE3\u7801\u7684\u7F51\u5740",
        },
        {
          cardSrc: "https://snipper.io/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "snipper",
          cardContent:
            "\u4E00\u4E2A\u4EE3\u7801\u534F\u540C\u7684\u7F51\u7AD9\u3002\u4F60\u65B0\u5EFA\u4E00\u4E2A\u4EE3\u7801\u7247\u6BB5\uFF0C\u7136\u540E\u628A\u7F51\u5740\u5206\u4EAB\u7ED9\u5176\u4ED6\u4EBA\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u4ED6\u4EEC\u7684\u5B9E\u65F6\u7F16\u8F91",
        },
        {
          cardSrc: "https://codesandbox.io/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "codesandbox",
          cardContent:
            "\u4E00\u4E2A\u53EF\u4EE5\u5728\u7EBF\u7F16\u8F91\u4E14\u63D0\u4F9B\u5728\u7EBF demo \u7684\u7F51\u7AD9 \u652F\u6301 vue react angular \u591A\u79CD\u6846\u67B6 \u795E\u5668",
        },
        {
          cardSrc: "https://tympanus.net/codrops/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "codrops",
          cardContent:
            "\u4E0A\u9762\u7684\u4EA4\u4E92\u90FD\u975E\u5E38\u9177\u70AB",
        },
        {
          cardSrc: "https://bestofjs.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "bestofjs",
          cardContent:
            "\u67E5\u770B\u4E00\u4E2A\u9879\u76EE\u589E\u957F\u7ECF\u5386\uFF0CStar \u6570\u53D8\u5316\u7684\u7F51\u7AD9\uFF0C\u8F85\u52A9\u4F60\u5224\u65AD\u8FD9\u4E2A\u5E93\u7684\u8D28\u91CF ",
        },

      ],
    };
  },
}
<\/script>>
`,contentRendered:`<h2 id="\u641C\u7D22\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22\u5F15\u64CE" aria-hidden="true">#</a> \u641C\u7D22\u5F15\u64CE</h2>
<ClientOnly>
  <NavCard :cardData="cardData0" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="\u4EE3\u7801\u6258\u7BA1" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u6258\u7BA1" aria-hidden="true">#</a> \u4EE3\u7801\u6258\u7BA1</h2>
<ClientOnly>
  <NavCard :cardData="cardData1" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="\u524D\u7AEF\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5F00\u53D1" aria-hidden="true">#</a> \u524D\u7AEF\u5F00\u53D1</h2>
<ClientOnly>
  <NavCard :cardData="cardData7_1" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<ClientOnly>
  <NavCard :cardData="cardData7_2" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<ClientOnly>
  <NavCard :cardData="cardData7_3" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<ClientOnly>
  <NavCard :cardData="cardData7_4" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<ClientOnly>
  <NavCard :cardData="cardData7_99" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="\u540E\u7AEF\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u540E\u7AEF\u5F00\u53D1" aria-hidden="true">#</a> \u540E\u7AEF\u5F00\u53D1</h2>
<ClientOnly>
  <NavCard :cardData="cardData6" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="\u6587\u6863\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u5DE5\u5177" aria-hidden="true">#</a> \u6587\u6863\u5DE5\u5177</h2>
<ClientOnly>
  <NavCard :cardData="cardData5" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="\u70ED\u95E8\u793E\u533A" tabindex="-1"><a class="header-anchor" href="#\u70ED\u95E8\u793E\u533A" aria-hidden="true">#</a> \u70ED\u95E8\u793E\u533A</h2>
<ClientOnly>
  <NavCard :cardData="cardData2" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="\u5DE5\u5177\u5408\u96C6" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177\u5408\u96C6" aria-hidden="true">#</a> \u5DE5\u5177\u5408\u96C6</h2>
<ClientOnly>
  <NavCard :cardData="cardData3" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="\u6587\u6863\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u6559\u7A0B" aria-hidden="true">#</a> \u6587\u6863\u6559\u7A0B</h2>
<ClientOnly>
  <NavCard :cardData="cardData4" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="\u52A8\u6001\u56FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u56FE\u8868" aria-hidden="true">#</a> \u52A8\u6001\u56FE\u8868</h2>
<ClientOnly>
  <NavCard :cardData="cardData8" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="\u56FE\u7247\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u56FE\u6807" aria-hidden="true">#</a> \u56FE\u7247\u56FE\u6807</h2>
<ClientOnly>
  <NavCard :cardData="cardData9" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="css\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#css\u6837\u5F0F" aria-hidden="true">#</a> CSS\u6837\u5F0F</h2>
<ClientOnly>
  <NavCard :cardData="cardData10" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="\u7F51\u7AD9\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7AD9\u5206\u6790" aria-hidden="true">#</a> \u7F51\u7AD9\u5206\u6790</h2>
<ClientOnly>
  <NavCard :cardData="cardData11" :cardListSize=3 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
<h2 id="\u5176\u5B83\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83\u8D44\u6E90" aria-hidden="true">#</a> \u5176\u5B83\u8D44\u6E90</h2>
<ClientOnly>
  <NavCard :cardData="cardData99" :cardListSize=4 carTitlColor="#000" carHoverColor="#000" />
</ClientOnly>
`,date:"2022-05-09",deps:[],links:[],pathInferred:"/nav/nav-page.html",pathLocale:"/",permalink:"/nav-page/",routeMeta:{title:"\u5BFC\u822A\u9875"},sfcBlocks:[`<script>
export default {
    data() {
    return {
      // \u641C\u7D22\u5F15\u64CE
      cardData0: [
        {
          id: '0',
          cardSrc: "http://www.baidu.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104224044.png",
          cardName: "\u767E\u5EA6",
          cardContent:
            "\u767E\u5EA6\u2014\u2014\u5168\u7403\u6700\u5927\u7684\u4E2D\u6587\u641C\u7D22\u5F15\u64CE\u53CA\u6700\u5927\u7684\u4E2D\u6587\u7F51\u7AD9\uFF0C\u5168\u7403\u9886\u5148\u7684\u4EBA\u5DE5\u667A\u80FD\u516C\u53F8",
        },
        {
          cardSrc: "http://www.google.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104225539.png",
          cardName: "Google",
          cardContent:
            "\u5168\u7403\u6700\u5927\u7684\u641C\u7D22\u5F15\u64CE\u516C\u53F8",
        },
        {
          cardSrc: "https://www.bing.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104224430.png",
          cardName: "Bing",
          cardContent:
            "\u5FAE\u8F6F\u516C\u53F8\u63A8\u51FA\u7684\u7528\u4EE5\u53D6\u4EE3Live Search\u7684\u641C\u7D22\u5F15\u64CE",
        },
      ],
      // \u4EE3\u7801\u6258\u7BA1
      cardData1: [
        {
          id: '1',
          cardSrc: "https://github.com/",
          cardImgSrc: "https://img0.baidu.com/it/u=2382900870,3325593570&fm=26&fmt=auto",
          cardName: "Github",
          cardContent:
            "GitHub\u662F\u4E00\u4E2A\u9762\u5411\u5F00\u6E90\u53CA\u79C1\u6709\u8F6F\u4EF6\u9879\u76EE\u7684\u6258\u7BA1\u5E73\u53F0",
        },
        {
          cardSrc: "https://gitee.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104231432.png",
          cardName: "Gitee",
          cardContent:
            "\u5F00\u6E90\u4E2D\u56FD\u65D7\u4E0B\u7684\u4EE3\u7801\u6258\u7BA1\u5E73\u53F0\uFF1A\u7801\u4E91",
        },
        {
          cardSrc: "https://vercel.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105210701.png",
          cardName: "Vercel",
          cardContent:
            "Vercel \u662F\u524D\u7AEF\u6846\u67B6\u548C\u9759\u6001\u7AD9\u70B9\u7684\u5E73\u53F0\uFF0C\u65E8\u5728\u4E0E\u60A8\u7684\u65E0\u5934\u5185\u5BB9\u3001\u5546\u4E1A\u6216\u6570\u636E\u5E93\u96C6\u6210",
        },
        {
          cardSrc: "https://coding.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104231517.png",
          cardName: "Coding",
          cardContent:
            "\u4E00\u7AD9\u5F0F DevOps\uFF0C\u63D0\u5347\u7814\u53D1\u6548\u80FD",
        },
      ],
      // \u70ED\u95E8\u793E\u533A
      cardData2: [
        {
          id: '2',
          cardSrc: "http://www.csdn.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104232713.png",
          cardName: "CDSN",
          cardContent:
            "\u4E2D\u56FD\u4E13\u4E1AIT\u793E\u533ACSDN",
        },
        {
          cardSrc: "http://www.cnblogs.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104232039.png",
          cardName: "\u535A\u5BA2\u56ED",
          cardContent:
            "\u5F00\u53D1\u8005\u7684\u7F51\u4E0A\u5BB6\u56ED",
        },
        {
          cardSrc: "https://www.oschina.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104232755.png",
          cardName: "OSChina",
          cardContent:
            "\u4E2D\u56FD\u6700\u5927\u7684\u5F00\u6E90\u6280\u672F\u793E\u533A",
        },
        {
          cardSrc: "https://segmentfault.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105210328.png",
          cardName: "\u996D\u5426",
          cardContent:
            "\u4E2D\u56FD\u9886\u5148\u7684\u5F00\u53D1\u8005\u6280\u672F\u793E\u533A",
        },
        {
          cardSrc: "https://juejin.im/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104233516.svg",
          cardName: "\u6398\u91D1",
          cardContent:
            "\u6398\u91D1\u662F\u4E00\u4E2A\u5E2E\u52A9\u5F00\u53D1\u8005\u6210\u957F\u7684\u793E\u533A\uFF0C\u662F\u4E00\u4E2A\u9762\u5411\u4E92\u8054\u7F51\u6280\u672F\u4EBA\u7684\u5185\u5BB9\u5206\u4EAB\u5E73\u53F0",
        },
        {
          cardSrc: "https://www.linuxidc.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104233249.png",
          cardName: "Linux\u516C\u793E",
          cardContent:
            "Linux\u7CFB\u7EDF\u95E8\u6237\u7F51\u7AD9",
        },
        {
          cardSrc: "https://www.ibm.com/developerworks/cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104233311.png",
          cardName: "IBM \u5F00\u53D1\u8005",
          cardContent:
            "IBM\u5F00\u53D1\u8005\u793E\u533A",
        },
        {
          cardSrc: "https://www.jianshu.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111001422.png",
          cardName: "\u7B80\u4E66",
          cardContent:
            "\u7B80\u4E66\u662F\u4E00\u4E2A\u4F18\u8D28\u7684\u521B\u4F5C\u793E\u533A,\u5728\u8FD9\u91CC,\u4F60\u53EF\u4EE5\u4EFB\u6027\u5730\u521B\u4F5C,\u4E00\u7BC7\u77ED\u6587\u3001\u4E00\u5F20\u7167\u7247\u3001\u4E00\u9996\u8BD7\u3001\u4E00\u5E45\u753B\u2026\u2026\u6211\u4EEC\u76F8\u4FE1,\u6BCF\u4E2A\u4EBA\u90FD\u662F\u751F\u6D3B\u4E2D\u7684\u827A\u672F\u5BB6,\u6709\u7740\u65E0\u7A77\u7684\u521B\u9020\u529B",
        },
        {
          cardSrc: "https://stackoverflow.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111001325.png",
          cardName: "stack overflow",
          cardContent:
            "Stack Overflow\u662F\u6700\u5927\u3001\u6700\u503C\u5F97\u4FE1\u8D56\u7684\u5728\u7EBF\u793E\u533A\uFF0C\u4F9B\u5F00\u53D1\u4EBA\u5458\u5B66\u4E60\u3001\u5206\u4EAB\u7F16\u7A0B\u77E5\u8BC6\u548C\u5EFA\u7ACB\u804C\u4E1A\u751F\u6DAF",
        },
        {
          cardSrc: "https://maliquankai.com/designnav/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111001711.png",
          cardName: "\u7801\u529B\u5168\u5F00\u8D44\u6E90\u5E93",
          cardContent:
            "\u5F88\u5168\u5F88\u5F3A\u5927\uFF0C\u72EC\u7ACB\u5F00\u53D1\u8005/\u8BBE\u8BA1\u5E72\u8D27/\u4F18\u8D28\u5229\u5668/\u5DE5\u5177\u8D44\u6E90",
        },
        {
          cardSrc: "https://www.infoq.cn/topic/Front-end",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111001811.png",
          cardName: "InfoQ",
          cardContent:
            "\u5728\u65B0\u9648\u4EE3\u8C22\u65FA\u76DB\u7684\u524D\u7AEF\u9886\u57DF\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u628A\u63E1\u524D\u7AEF\u672A\u6765\u7684\u65B9\u5411\uFF0C\u5173\u6CE8\u79D1\u6280\u4F01\u4E1A\u7684\u524D\u7AEF\u5B9E\u8DF5\uFF0C\u5728\u8FD9\u91CC\u770B\u5230\u524D\u7AEF\u7684\u8FDC\u7AEF",
        },
      ],
      // \u5DE5\u5177\u5408\u96C6
      cardData3: [
        {
          id: '3',
          cardSrc: "https://c.runoob.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234003.png",
          cardName: "\u83DC\u9E1F\u5DE5\u5177",
          cardContent:
            "\u83DC\u9E1F\u6559\u7A0B\u63D0\u4F9B\u7684\u5DE5\u5177\u96C6",
        },
        {
          cardSrc: "https://tool.oschina.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104232755.png",
          cardName: "\u5DE5\u5177",
          cardContent:
            "\u5F00\u6E90\u4E2D\u56FD\u5728\u7EBF\u5DE5\u5177",
        },
        {
          cardSrc: "https://tool.lu//",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234610.png",
          cardName: "Tool\u5DE5\u5177\u7BB1",
          cardContent:
            "\u7A0B\u5E8F\u5458\u7684\u5DE5\u5177\u7BB1",
        },
        {
          cardSrc: "http://tools.jb51.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234502.png",
          cardName: "\u811A\u672C\u4E4B\u5BB6",
          cardContent:
            "\u811A\u672C\u4E4B\u5BB6\u65D7\u4E0B\u7684\u5DE5\u5177\u7BB1",
        },
        {
          cardSrc: "https://123.w3cschool.cn/webtools/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234731.png",
          cardName: "W3Cschool",
          cardContent:
            "W3Cschool\u65D7\u4E0B\u7684\u5DE5\u5177\u7BB1",
        },
        {
          cardSrc: "https://gitee.com/explore/all/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104231432.png",
          cardName: "Gitee\u5F00\u6E90",
          cardContent:
            "Gitee \u5F00\u6E90\u9879\u76EE\u63A8\u8350\u5217\u8868",
        },
        {
          cardSrc: "https://cloudconvert.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234641.png",
          cardName: "\u4E91\u8F6C\u6362",
          cardContent:
            "\u5728\u7EBF\u8F6C\u5316\u538B\u7F29\u5305\u3001\u5B57\u4F53\u3001\u56FE\u7247\u3001\u89C6\u9891\u3001\u7535\u5B50\u4E66",
        },
      ],
      // \u6587\u6863\u6559\u7A0B
      cardData4: [
        {
          id: '4',
          cardSrc: "https://www.runoob.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234903.png",
          cardName: "\u83DC\u9E1F\u6559\u7A0B",
          cardContent:
            "\u83DC\u9E1F\u6559\u7A0B\u96C6\u5408",
        },
        {
          cardSrc: "https://www.w3cschool.cn/tutorial/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234912.png",
          cardName: "w3cschool",
          cardContent:
            "w3cschool\u4E3B\u8981\u4E3A\u521D\u5B66\u8005\u6280\u672F\u7684\u4EBA\u5458\u63D0\u4F9B\u5728\u7EBF\u5B66\u4E60\u6559\u7A0B\u548C\u65E5\u5E38\u6280\u672F\u8D44\u6599\u67E5\u8BE2\u670D\u52A1",
        },
        {
          cardSrc: "https://www.w3school.com.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104234958.png",
          cardName: "w3cschool",
          cardContent:
            "W3School \u662F\u56E0\u7279\u7F51\u4E0A\u6700\u5927\u7684 WEB \u5F00\u53D1\u8005\u8D44\u6E90\uFF0C\u5176\u4E2D\u5305\u62EC\u5168\u9762\u7684\u6559\u7A0B\u3001\u5B8C\u5584\u7684\u53C2\u8003\u624B\u518C\u4EE5\u53CA\u5E9E\u5927\u7684\u4EE3\u7801\u5E93",
        },
        {
          cardSrc: "https://developer.mozilla.org/zh-CN/docs/Learn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104235346.png",
          cardName: "MDN",
          cardContent:
            "\u6E90\u4E8E\u5F00\u53D1\u8005\uFF0C\u670D\u52A1\u5F00\u53D1\u8005",
        },
        {
          cardSrc: "https://www.javatpoint.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104235316.png",
          cardName: "JavaPoint",
          cardContent:
            "The Best Portal to Learn Technologies",
        },
      ],
      // \u6587\u6863\u5DE5\u5177
      cardData5: [
        {
          id: '5',
          cardSrc: "https://vuepress.vuejs.org/zh/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000146.png",
          cardName: "VuePress",
          cardContent:
            "Vue \u9A71\u52A8\u7684\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668\uFF0C\u672C\u9879\u76EE\u5C31\u662F\u4F7F\u7528VuePress\u5F00\u53D1\u7684",
        },
        {
          cardSrc: "https://doc.xugaoyi.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200409124835.png",
          cardName: "vuepress-theme-vdoing",
          cardContent:
            "\u{1F680}\u4E00\u6B3E\u7B80\u6D01\u9AD8\u6548\u7684 VuePress \u77E5\u8BC6\u7BA1\u7406&\u535A\u5BA2 \u4E3B\u9898",
        },
        {
          cardSrc: "https://hexo.io/zh-cn/",
          cardImgSrc: "https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg",
          cardName: "Hexo",
          cardContent:
            "\u5FEB\u901F\u3001\u7B80\u6D01\u4E14\u9AD8\u6548\u7684\u535A\u5BA2\u6846\u67B6",
        },
        {
          cardSrc: "https://www.yuque.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105213419.png",
          cardName: "\u8BED\u96C0",
          cardContent:
            "\u65B0\u4E00\u4EE3\u4E91\u7AEF\u77E5\u8BC6\u5E93\uFF0C\u4E2A\u4EBA\u7B14\u8BB0\u4E0E\u77E5\u8BC6\u521B\u4F5C\uFF0C\u56E2\u961F\u534F\u540C\u4E0E\u77E5\u8BC6\u6C89\u6DC0",
        },
        {
          cardSrc: "https://www.gitbook.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000040.png",
          cardName: "Gitbook",
          cardContent:
            "\u4E00\u4E2A\u5148\u8FDB\u53EF\u5B9A\u5236\u7684\u6587\u6863\u683C\u5F0F\u5DE5\u5177",
        },
        {
          cardSrc: "https://docsify.js.org/#/zh-cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000115.png",
          cardName: "Docsify",
          cardContent:
            "\u4E00\u4E2A\u795E\u5947\u7684\u6587\u6863\u7F51\u7AD9\u751F\u6210\u5DE5\u5177",
        },
      ],
      // \u540E\u7AEF\u5F00\u53D1
      cardData6: [
        {
          id: '6',
          cardSrc: "https://spring.io/projects/spring-boot/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000450.png",
          cardName: "Spring",
          cardContent:
            "Spring\u6846\u67B6\u662F\u4E00\u4E2A\u5F00\u653E\u6E90\u4EE3\u7801\u7684J2EE\u5E94\u7528\u7A0B\u5E8F\u6846\u67B6",
        },
        {
          cardSrc: "https://mybatis.org/mybatis-3/zh/index.html",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000812.png",
          cardName: "MyBatis",
          cardContent:
            "MyBatis \u662F\u4E00\u6B3E\u4F18\u79C0\u7684\u6301\u4E45\u5C42\u6846\u67B6\uFF0C\u5B83\u652F\u6301\u5B9A\u5236\u5316 SQL\u3001\u5B58\u50A8\u8FC7\u7A0B\u4EE5\u53CA\u9AD8\u7EA7\u6620\u5C04",
        },
        {
          cardSrc: "https://mybatis.plus/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000613.png",
          cardName: "MyBatis Plus",
          cardContent:
            "MyBatis \u7684\u589E\u5F3A\u5DE5\u5177\uFF0C\u5728 MyBatis \u7684\u57FA\u7840\u4E0A\u53EA\u505A\u589E\u5F3A\u4E0D\u505A\u6539\u53D8\uFF0C\u4E3A\u7B80\u5316\u5F00\u53D1\u3001\u63D0\u9AD8\u6548\u7387\u800C\u751F",
        },
        {
          cardSrc: "https://mvnrepository.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000653.png",
          cardName: "Maven",
          cardContent:
            "Maven \u4ED3\u5E93\u68C0\u7D22\uFF0C\u975E\u5E38\u5E38\u7528",
        },
        {
          cardSrc: "https://docs.gradle.org/current/userguide/userguide.html",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000729.png",
          cardName: "Gradle",
          cardContent:
            "\u57FA\u4E8EApache Ant\u548CApache Maven\u6982\u5FF5\u7684\u9879\u76EE\u81EA\u52A8\u5316\u6784\u5EFA\u5F00\u6E90\u5DE5\u5177",
        },
      ],
      // \u524D\u7AEF\u5F00\u53D1
      // Vue UI
      cardData7_1: [
        {
          id: '7_1',
          title: 'Vue & UI',
          cardSrc: "https://cn.vuejs.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001047.png",
          cardName: "Vue",
          cardContent:
            "\u6E10\u8FDB\u5F0F JavaScript \u6846\u67B6",
        },
        {
          cardSrc: "https://element.eleme.cn/#/zh-CN/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001602.png",
          cardName: "Element-UI",
          cardContent:
            "Element\uFF0C\u4E00\u5957\u4E3A\u5F00\u53D1\u8005\u3001\u8BBE\u8BA1\u5E08\u548C\u4EA7\u54C1\u7ECF\u7406\u51C6\u5907\u7684\u57FA\u4E8E Vue \u7684\u684C\u9762\u7AEF\u7EC4\u4EF6\u5E93",
        },
        {
          cardSrc: "https://next.antdv.com/docs/vue/introduce-cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105223748.svg",
          cardName: "Ant Design Vue",
          cardContent:
            "Vue UI \u4E4B Ant Design Vue\uFF0C\u8682\u8681\u91D1\u670D\u7684 Vue \u6846\u67B6",
        },
        {
          cardSrc: "https://www.iviewui.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001656.png",
          cardName: "View UI",
          cardContent:
            "View UI \u662F\u4E00\u5957\u57FA\u4E8E Vue.js \u7684\u9AD8\u8D28\u91CFUI \u7EC4\u4EF6\u5E93",
        },
        {
          cardSrc: "https://youzan.github.io/vant/#/zh-CN/",
          cardImgSrc: "https://img01.yzcdn.cn/vant/logo.png",
          cardName: "Vant",
          cardContent:
            "\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93",
        },
      ],
      // React UI
      cardData7_2: [
        {
          id: '7_2',
          title: 'React & UI',
          cardSrc: "https://react.docschina.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001206.png",
          cardName: "React",
          cardContent:
            "\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 JavaScript \u5E93",
        },
        {
          cardSrc: "https://ant.design/index-cn",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105223748.svg",
          cardName: "Ant Design",
          cardContent:
            "React \u5F00\u7BB1\u5373\u7528\u7684\u4E2D\u53F0\u524D\u7AEF/\u8BBE\u8BA1\u89E3\u51B3\u65B9\u6848",
        },
        {
          cardSrc: "https://react-bootstrap.github.io/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105224229.png",
          cardName: "Ant Design Vue",
          cardContent:
            "\u6700\u6D41\u884C\u7684\u524D\u7AEF\u6846\u67B6 bootstrap\uFF0C\u4E3A React \u9002\u914D",
        },
        {
          cardSrc: "https://mui.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105224500.png",
          cardName: "MATERIAL-UI",
          cardContent:
            "View UI \u662F\u4E00\u5957\u57FA\u4E8E Vue.js \u7684\u9AD8\u8D28\u91CFUI \u7EC4\u4EF6\u5E93",
        },
        {
          cardSrc: "https://youzan.github.io/vant/#/zh-CN/",
          cardImgSrc: "https://img01.yzcdn.cn/vant/logo.png",
          cardName: "Vant",
          cardContent:
            "\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93",
        },
      ],
      // React UI
      cardData7_3: [
        {
          id: '7_3',
          title: '\u6548\u679C\u7EC4\u4EF6',
          cardSrc: "https://animate.style/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105233408.png",
          cardName: "Animate.css",
          cardContent:
            "\u52A8\u753B\u5E93",
        },
        {
          cardSrc: "https://www.swiper.com.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105233615.png",
          cardName: "Swiper",
          cardContent:
            "\u8F6E\u64AD\u7EC4\u4EF6",
        },
        {
          cardSrc: "http://www.mescroll.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105233730.png",
          cardName: "mescroll",
          cardContent:
            "\u4E0B\u62C9\u5237\u65B0\u548C\u4E0A\u62C9\u52A0\u8F7D\u6846\u67B6-\u57FA\u4E8E\u539F\u751FJS",
        },
      ],
      // \u5DE5\u5177\u7C7B
      cardData7_4: [
        {
          id: '7_4',
          title: '\u5DE5\u5177\u7C7B',
          cardSrc: "https://www.lodashjs.com/",
          cardImgSrc: "https://www.lodashjs.com/img/lodash.png",
          cardName: "Lodash",
          cardContent:
            "Lodash \u662F\u4E00\u4E2A\u4E00\u81F4\u6027\u3001\u6A21\u5757\u5316\u3001\u9AD8\u6027\u80FD\u7684 JavaScript \u5B9E\u7528\u5DE5\u5177\u5E93",
        },
        {
          cardSrc: "https://dayjs.fenxianglu.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220110235754.png",
          cardName: "Day.js",
          cardContent:
            "Day.js\u662F\u4E00\u4E2A\u6781\u7B80\u7684JavaScript\u5E93\uFF0C\u53EF\u4EE5\u4E3A\u73B0\u4EE3\u6D4F\u89C8\u5668\u89E3\u6790\u3001\u9A8C\u8BC1\u3001\u64CD\u4F5C\u548C\u663E\u793A\u65E5\u671F\u548C\u65F6\u95F4",
        },
        {
          cardSrc: "https://github.com/hustcc/timeago.js",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111000119.png",
          cardName: "Timeago.js",
          cardContent:
            "\u76F8\u5BF9\u65F6\u95F4\uFF0C\u5982N\u5C0F\u65F6\u524D",
        },
        {
          cardSrc: "https://echarts.apache.org/zh/index.html",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/logo.png?_v_=20200710_1",
          cardName: "Apache ECharts",
          cardContent:
            "\u4E00\u4E2A\u57FA\u4E8E JavaScript \u7684\u5F00\u6E90\u53EF\u89C6\u5316\u56FE\u8868\u5E93",
        },
        {
          cardSrc: "https://pandao.github.io/editor.md/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111000050.png",
          cardName: "Meditor.md",
          cardContent:
            "\u5F00\u6E90\u5728\u7EBF Markdown \u7F16\u8F91\u5668",
        },
        {
          cardSrc: "https://github.com/validatorjs/validator.js",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220111000249.png",
          cardName: "validator.js",
          cardContent:
            "\u8868\u5355\u9A8C\u8BC1\u5E93",
        },
      ],
      // \u5176\u4ED6
      cardData7_99: [
        {
          id: '7_99',
          title: '\u5176\u4ED6',
          cardSrc: "https://www.bootcss.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105000409.png",
          cardName: "BootStrap",
          cardContent:
            "\u7B80\u6D01\u3001\u76F4\u89C2\u3001\u5F3A\u608D\u7684\u524D\u7AEF\u5F00\u53D1\u6846\u67B6\uFF0C\u8BA9web\u5F00\u53D1\u66F4\u8FC5\u901F\u3001\u7B80\u5355",
        },
        {
          cardSrc: "https://www.npmjs.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001006.png",
          cardName: "NPM",
          cardContent:
            "NodeJS \u5305\u7BA1\u7406\u6587\u6863",
        },
        {
          cardSrc: "https://www.angularjs.net.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001414.png",
          cardName: "AngularJS",
          cardContent:
            "AngularJS\u662F\u4E00\u6B3E\u4F18\u79C0\u7684\u524D\u7AEFJS\u6846\u67B6",
        },
        {
          cardSrc: "https://electronjs.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001728.png",
          cardName: "Electron",
          cardContent:
            "Electron \u662F\u4E00\u4E2A\u8D4B\u529B\u524D\u7AEF\u8FDB\u884C\u8DE8\u5E73\u53F0\u5F00\u53D1\u7684\u6846\u67B6,\u8BA9\u5F00\u53D1\u4EBA\u5458\u4F7F\u7528 JavaScript\uFF0CHTML \u548C CSS \u7B49\u524D\u7AEF\u6280\u672F\u6784\u5EFA\u8DE8\u5E73\u53F0\u7684\u684C\u9762\u5E94\u7528",
        },
        {
          cardSrc: "https://caniuse.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105001759.png",
          cardName: "can i use",
          cardContent:
            "\u524D\u7AEF\u5E38\u7528\u7F51\u7AD9\u4E86,\u67E5\u770B\u4E0D\u540C\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u517C\u5BB9\u6027",
        },
      ],
      // \u52A8\u6001\u56FE\u8868
      cardData8: [
        {
          id: '8',
          cardSrc: "https://www.echartsjs.com/examples/zh/index.html",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014053.png",
          cardName: "Echarts",
          cardContent:
            "\u767E\u5EA6\u5F00\u53D1\u7684\u53EF\u5B9A\u5236\u7684\u6570\u636E\u53EF\u89C6\u5316\u56FE\u8868\uFF0C\u5DF2\u7ECF\u6350\u7ED9Apache",
        },
        {
          cardSrc: "https://antv.vision/zh",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014146.png",
          cardName: "AntV",
          cardContent:
            "\u8682\u8681\u91D1\u670D\u5168\u65B0\u4E00\u4EE3\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u63D0\u4F9B\u4E00\u5957\u7B80\u5355\u65B9\u4FBF\u3001\u4E13\u4E1A\u53EF\u9760\u3001\u65E0\u9650\u53EF\u80FD\u7684\u6570\u636E\u53EF\u89C6\u5316\u6700\u4F73\u5B9E\u8DF5",
        },
        {
          cardSrc: "https://d3js.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014223.png",
          cardName: "D3",
          cardContent:
            "\u7528\u52A8\u6001\u56FE\u5F62\u663E\u793A\u6570\u636E\u7684JavaScript\u5E93",
        },
        {
          cardSrc: "https://threejs.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014307.png",
          cardName: "ThreeJs",
          cardContent:
            "\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u4E2D\u76843D \u5F15\u64CE",
        },
        {
          cardSrc: "https://www.highcharts.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014337.png",
          cardName: "HighCharts",
          cardContent:
            "\u517C\u5BB9 IE6+\u3001\u652F\u6301\u79FB\u52A8\u7AEF\u3001\u56FE\u8868\u7C7B\u578B\u4E30\u5BCC\u7684HTML5\u4EA4\u4E92\u6027\u56FE\u8868\u5E93",
        },
        {
          cardSrc: "https://www.chartjs.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014412.png",
          cardName: "ChartJs",
          cardContent:
            "\u57FA\u4E8E HTML5 \u7684 JavaScript \u56FE\u8868\u5E93",
        },
        {
          cardSrc: "http://www.flotcharts.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014448.png",
          cardName: "FlotCharts",
          cardContent:
            "\u57FA\u4E8EjQuery\u7684Charts\uFF0CGrafana\u5C31\u662F\u7528\u7684\u5B83",
        },
      ],
      // \u56FE\u7247\u56FE\u6807
      cardData9: [
        {
          id: '9',
          cardSrc: "http://fontawesome.dashgame.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014740.png",
          cardName: "fonta Wesome",
          cardContent:
            "\u5B8C\u7F8E\u7684\u56FE\u6807\u5B57\u4F53\u5E93",
        },
        {
          cardSrc: "https://squoosh.app/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014911.png",
          cardName: "Squoosh",
          cardContent:
            "\u8C37\u6B4C\u51FA\u54C1\u5728\u7EBF\u514D\u8D39\u56FE\u7247\u538B\u7F29\u5DE5\u5177\u795E\u5668",
        },
        {
          cardSrc: "http://zhitu.isux.us/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105014955.png",
          cardName: "\u667A\u56FE",
          cardContent:
            "\u817E\u8BAF\u51FA\u54C1\uFF0C\u5728\u7EBF\u56FE\u7247\u538B\u7F29\uFF0C\u652F\u6301\u8F6C\u6210 webP \u5904\u7406\u9759\u6001\u56FE\u7247\u65F6\u5019\u5F88\u597D\u7528",
        },
        {
          cardSrc: "https://www.picdiet.com/zh-cn",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015040.png",
          cardName: "Picdiet",
          cardContent:
            "Picdiet\u662F\u4E00\u6B3E\u5728\u7EBF\u6279\u91CF\u538B\u7F29\u56FE\u7247\u795E\u5668\uFF0C\u5B83\u4E0D\u9700\u8981\u540E\u7AEF\u670D\u52A1\u5668\u6216\u8005API\u7684\u652F\u6301\uFF0C\u4EC5\u901A\u8FC7\u4F60\u7684\u6D4F\u89C8\u5668\u6765\u538B\u7F29\u56FE\u7247\u5927\u5C0F\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u538B\u7F29\u56FE\u7247\u6781\u5FEB\u5E76\u4E14\u4E0D\u4F1A\u5BFC\u81F4\u9690\u79C1\u6216\u654F\u611F\u56FE\u7247\u6CC4\u6F0F",
        },
        {
          cardSrc: "http://www.aigei.com/bgremover/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015116.png",
          cardName: "Bgremover",
          cardContent:
            "\u5728\u7EBF\u56FE\u7247\u53BB\u5E95\u5DE5\u5177",
        },
        {
          cardSrc: "https://www.photopea.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015154.png",
          cardName: "Photopea",
          cardContent:
            "\u7F51\u9875\u7248\u672C Photoshop\uFF0C\u975E\u5E38\u5F3A\u5927",
        },
        {
          cardSrc: "https://www.iconfont.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015248.png",
          cardName: "Iconfont",
          cardContent:
            "\u963F\u91CC\u5988\u5988MUX\u503E\u529B\u6253\u9020\u7684\u77E2\u91CF\u56FE\u6807\u7BA1\u7406\u3001\u4EA4\u6D41\u5E73\u53F0\u3002\u8BBE\u8BA1\u5E08\u5C06\u56FE\u6807\u4E0A\u4F20\u5230Iconfont\u5E73\u53F0\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0B\u8F7D\u591A\u79CD\u683C\u5F0F\u7684icon\uFF0C\u5E73\u53F0\u4E5F\u53EF\u5C06\u56FE\u6807\u8F6C\u6362\u4E3A\u5B57\u4F53\uFF0C\u4FBF\u4E8E\u524D\u7AEF\u5DE5\u7A0B\u5E08\u81EA\u7531\u8C03\u6574\u4E0E\u8C03\u7528",
        },
        {
          cardSrc: "http://cssicon.space/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015322.png",
          cardName: "Css Icon",
          cardContent:
            "\u6240\u6709\u7684 icon \u90FD\u662F\u7EAF css \u753B\u7684 \u7F3A\u70B9\uFF1Aicon \u4E0D\u591F\u591A",
        },
      ],
      // CSS\u6837\u5F0F
      cardData10: [
        {
          id: '10',
          cardSrc: "http://sass.bootcss.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015622.png",
          cardName: "SAAS",
          cardContent:
            "Sass \u662F\u6210\u719F\u3001\u7A33\u5B9A\u3001\u5F3A\u5927\u7684 CSS \u6269\u5C55\u8BED\u8A00",
        },
        {
          cardSrc: "https://stylus.bootcss.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015650.png",
          cardName: "Stylus",
          cardContent:
            "\u5BCC\u4E8E\u8868\u73B0\u529B\u3001\u52A8\u6001\u7684\u3001\u5065\u58EE\u7684 CSS",
        },
        {
          cardSrc: "https://less.bootcss.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015753.png",
          cardName: "Less",
          cardContent:
            "\u7ED9 CSS \u52A0\u70B9\u6599",
        },
        {
          cardSrc: "http://apps.eky.hk/css-triangle-generator/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015906.png",
          cardName: "CSS riangle",
          cardContent:
            "\u5E2E\u4F60\u5FEB\u901F\u7528 css \u505A\u51FA\u4E09\u89D2\u5F62",
        },
        {
          cardSrc: "http://www.cssarrowplease.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105015951.png",
          cardName: "CSS Arrow",
          cardContent:
            "\u5E2E\u4F60\u505A\u5BF9\u8BDD\u6846\u4E09\u89D2\u7684",
        },
        {
          cardSrc: "hhttps://bennettfeely.com/image-effects/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020027.png",
          cardName: "CSS Effects",
          cardContent:
            "\u56FE\u7247CSS\u6837\u5F0F\u63A7\u5236",
        },
        {
          cardSrc: "https://app.zeplin.io/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "zeplin",
          cardContent:
            "\u524D\u7AEF\u548C\u8BBE\u8BA1\u5E08\u795E\u5668\uFF0C\u6709\u6807\u6CE8\u3001Style Guide\u3001\u7248\u672C\u7BA1\u7406\u3001\u7B80\u5355\u7684\u56E2\u961F\u534F\u4F5C\uFF0C\u91CD\u70B9\u662F\u524D\u7AEF\u4E0D\u7528\u5199css \u4E86\uFF0C\u590D\u5236\u5C31\u53EF\u4EE5\u4E86",
        },
        {
          cardSrc: "hhttp://bennettfeely.com/clippy/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "clippy",
          cardContent:
            "\u5728\u7EBF\u5E2E\u4F60\u4F7F\u7528 css clip-path \u505A\u51FA\u5404\u79CD\u5F62\u72B6\u7684\u56FE\u5F62",
        },
      ],
      // \u7F51\u7AD9\u5206\u6790
      cardData11: [
        {
          id: '11',
          cardSrc: "https://tongji.baidu.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104224044.png",
          cardName: "\u767E\u5EA6\u7EDF\u8BA1",
          cardContent:
            "\u57FA\u4E8E\u767E\u5EA6\u5927\u6570\u636E\u80FD\u529B,\u5B9E\u73B0\u5168\u57DF\u6570\u636E\u81EA\u52A8\u5316\u91C7\u96C6\u3001\u878D\u5408\u591A\u79CD\u6A21\u578B\u7B97\u6CD5,\u8D4B\u80FD\u4F01\u4E1A\u6DF1\u5165\u5206\u6790\u6D1E\u5BDF\u7528\u6237\u884C\u4E3A,\u4EE5\u9A71\u52A8\u7528\u6237\u8FD0\u8425\u7B56\u7565\u4F18\u5316\u3001\u4EA7\u54C1\u7528\u6237\u4F53\u9A8C\u63D0\u5347\u53CA\u5168\u6E20\u9053\u5F52\u56E0\u6700\u5927\u5316\u8F6C\u5316\u6548\u679C",
        },
        {
          cardSrc: "https://ziyuan.baidu.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220104224044.png",
          cardName: "\u767E\u5EA6\u8D44\u6E90",
          cardContent:
            "\u767E\u5EA6\u641C\u7D22\u9762\u5411\u5408\u4F5C\u4F19\u4F34\u7684\u5B98\u65B9\u5E73\u53F0\uFF0C\u4E3A\u5F00\u53D1\u8005\u3001\u5185\u5BB9\u521B\u4F5C\u8005\u3001\u7AD9\u70B9\u7BA1\u7406\u8005\u7B49\u4F19\u4F34\uFF0C\u63D0\u4F9B\u4F18\u5316\u5DE5\u5177\u3001\u6570\u636E\u3001\u8BFE\u7A0B\u3001Q&A\u7B49\u670D\u52A1\uFF0C\u52A9\u529B\u8D44\u6E90\u8FDB\u5165\u641C\u7D22\uFF0C\u540C\u65F6\u63D0\u4F9B\u641C\u7D22\u9879\u76EE\u5408\u4F5C\u673A\u4F1A\uFF0C\u8BA9\u4F18\u8D28\u8D44\u6E90\u8131\u9896\u800C\u51FA",
        },
        {
          cardSrc: "https://developers.google.cn/analytics/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105214915.svg",
          cardName: "\u8C37\u6B4C\u5206\u6790",
          cardContent:
            "\u6536\u96C6\u3001\u914D\u7F6E\u5E76\u5206\u6790\u60A8\u7684\u6570\u636E,\u52A9\u529B\u60A8\u8986\u76D6\u6700\u7406\u60F3\u7684\u53D7\u4F17\u7FA4\u4F53",
        },
        {
          cardSrc: "https://www.aicesu.cn/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105214633.png",
          cardName: "\u7231\u6D4B\u901F",
          cardContent:
            "\u8C37\u6B4C\u7F51\u7AD9\u6D4B\u901F PageSpeed Insights - Google\u7F51\u9875\u6027\u80FD\u4F18\u5316\u6D4B\u8BD5\uFF0C\u5168\u9762\u5206\u6790\u63D0\u5347\u7F51\u9875\u52A0\u8F7D\u901F\u5EA6\u4E0E\u7F51\u7AD9\u6D4B\u8BD5\u8BC4\u5206",
        },
        {
          cardSrc: "https://www.boce.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105215329.svg",
          cardName: "BOCE",
          cardContent:
            "\u62E8\u6D4B-\u514D\u8D39\u7684\u57DF\u540D\u68C0\u6D4B\u5DE5\u5177\u7F51-\u7F51\u7AD9\u6D4B\u901F-ping\u68C0\u6D4B-\u57DF\u540D\u6C61\u67D3-\u57DF\u540D\u88AB\u5899-dns\u67E5\u8BE2-IPv6\u7F51\u7AD9\u6D4B\u8BD5-\u8DEF\u7531\u8DDF\u8E2A\u67E5\u8BE2-\u52AB\u6301\u68C0\u6D4B",
        },
      ],
      // \u5176\u5B83\u8D44\u6E90
      cardData99: [
        {
          id: '99',
          cardSrc: "https://astexplorer.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "astexplorer",
          cardContent: "\u4E00\u4E2A\u5728\u7EBF ast \u751F\u6210\u5668",
        },
        {
          cardSrc: "https://30secondsofcode.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "30 seconds of code",
          cardContent:
            "\u6536\u96C6\u4E86\u8BB8\u591A\u6709\u7528\u7684\u4EE3\u7801\u5C0F\u7247\u6BB5",
        },
        {
          cardSrc: "https://jex.im/regulex/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "jex",
          cardContent:
            "\u6B63\u5219\u53EF\u89C6\u5316\u7F51\u7AD9\uFF0C\u914D\u5408\u4E0A\u9762\u7684 Regular Expressions\uFF0C\u5199\u6B63\u5219\u65B9\u4FBF\u5F88\u591A",
        },
        {
          cardSrc: "https://jsfiddle.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "jsfiddle",
          cardContent:
            "\u5728\u7EBF\u8FD0\u884C\u4EE3\u7801\u7F51\u7AD9 \u5F88\u4E0D\u9519\uFF0C\u53EF\u60DC\u8981\u7FFB\u5899",
        },
        {
          cardSrc: "https://codepan.net/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "codepan",
          cardContent:
            "\u5728\u7EBF\u8FD0\u884C\u4EE3\u7801\u7F51\u7AD9 \u4E0D\u7528\u7FFB\u5899\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u90E8\u7F72",
        },
        {
          cardSrc: "https://fiddle.md/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "fiddle.md",
          cardContent:
            "\u4E00\u4E2A\u65B9\u4FBF\u7684\u5728\u7EBF\u5171\u4EAB markdown \u5728\u7EBF\u7B14\u8BD5\u9898\u4E00\u822C\u90FD\u7528\u8FD9\u4E2A",
        },
        {
          cardSrc: "https://www.jsdelivr.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "jsdelivr",
          cardContent:
            "cdn \u670D\u52A1",
        },
        {
          cardSrc: "https://unpkg.com/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "unpkg",
          cardContent:
            "\u5E38\u7528\u7684 cdn \u670D\u52A1",
        },
        {
          cardSrc: "https://coderpad.io/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "coderpad",
          cardContent:
            "\u8FDC\u7A0B\u9762\u8BD5\u7684\u795E\u5668\uFF0C\u53EF\u4EE5\u8BA9\u9762\u8BD5\u8005\u8FDC\u7A0B\u5199\u4EE3\u7801 \u4E0D\u8FC7\u9700\u8981\u7FFB\u5899",
        },
        {
          cardSrc: "http://www.icode.live/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "icode",
          cardContent:
            "\u6709\u8D5E\u56E2\u961F\u51FA\u54C1\u7684 coderpad \u53EF\u4EE5\u4E92\u8865\uFF0C\u5B83\u4E0D\u9700\u8981\u7FFB\u5899",
        },
        {
          cardSrc: "https://www.codeadvice.io/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "codeadvice",
          cardContent:
            "\u53C8\u4E00\u4E2A\u8BA9\u9762\u8BD5\u8005\u8FDC\u7A0B\u5199\u4EE3\u7801\u7684\u7F51\u5740",
        },
        {
          cardSrc: "https://snipper.io/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "snipper",
          cardContent:
            "\u4E00\u4E2A\u4EE3\u7801\u534F\u540C\u7684\u7F51\u7AD9\u3002\u4F60\u65B0\u5EFA\u4E00\u4E2A\u4EE3\u7801\u7247\u6BB5\uFF0C\u7136\u540E\u628A\u7F51\u5740\u5206\u4EAB\u7ED9\u5176\u4ED6\u4EBA\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u4ED6\u4EEC\u7684\u5B9E\u65F6\u7F16\u8F91",
        },
        {
          cardSrc: "https://codesandbox.io/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "codesandbox",
          cardContent:
            "\u4E00\u4E2A\u53EF\u4EE5\u5728\u7EBF\u7F16\u8F91\u4E14\u63D0\u4F9B\u5728\u7EBF demo \u7684\u7F51\u7AD9 \u652F\u6301 vue react angular \u591A\u79CD\u6846\u67B6 \u795E\u5668",
        },
        {
          cardSrc: "https://tympanus.net/codrops/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "codrops",
          cardContent:
            "\u4E0A\u9762\u7684\u4EA4\u4E92\u90FD\u975E\u5E38\u9177\u70AB",
        },
        {
          cardSrc: "https://bestofjs.org/",
          cardImgSrc: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/tools/20220105020107.png",
          cardName: "bestofjs",
          cardContent:
            "\u67E5\u770B\u4E00\u4E2A\u9879\u76EE\u589E\u957F\u7ECF\u5386\uFF0CStar \u6570\u53D8\u5316\u7684\u7F51\u7AD9\uFF0C\u8F85\u52A9\u4F60\u5224\u65AD\u8FD9\u4E2A\u5E93\u7684\u8D28\u91CF ",
        },

      ],
    };
  },
}
<\/script>>
`],slug:"nav-page",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/nav/nav-page.md",filePathRelative:"nav/nav-page.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/nav-page/index.html.vue",componentFilePathRelative:"pages/nav-page/index.html.vue",componentFileChunkName:"v-75214906",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/nav-page/index.html.js",dataFilePathRelative:"pages/nav-page/index.html.js",dataFileChunkName:"v-75214906",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/nav-page/index.html",htmlFilePathRelative:"nav-page/index.html"},{data:{key:"v-32534572",path:"/test-demo/tabs/",title:"\u9009\u9879\u5361",lang:"zh-CN",frontmatter:{title:"\u9009\u9879\u5361",date:"2022-07-03T00:19:42.000Z",permalink:"/test-demo/tabs",categories:["test-demo"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1656928937e3},filePathRelative:"test-demo/tabs.md"},key:"v-32534572",path:"/test-demo/tabs/",title:"\u9009\u9879\u5361",lang:"zh-CN",frontmatter:{title:"\u9009\u9879\u5361",date:"2022-07-03T00:19:42.000Z",permalink:"/test-demo/tabs",categories:["test-demo"],tags:[null]},excerpt:"",headers:[],content:`---
title: \u9009\u9879\u5361
date: 2022-07-03 00:19:42
permalink: /test-demo/tabs
categories:
  - test-demo
tags:
  - 
---
# \u9009\u9879\u5361

::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

\u5B89\u88C5 VuePress Theme Hope:

::: code-tabs#shell

@tab pnpm

\`\`\`bash
pnpm add -D vuepress-theme-hope@next
\`\`\`

@tab yarn

\`\`\`bash
yarn add -D vuepress-theme-hope@next
\`\`\`

@tab:active npm

\`\`\`bash
npm i -D vuepress-theme-hope@next
\`\`\`

:::

\u5B89\u88C5 VuePress Plugin Markdown Enhance:

::: code-tabs#shell

@tab pnpm

\`\`\`bash
pnpm add -D vuepress-plugin-md-enhance@next
\`\`\`

@tab yarn

\`\`\`bash
yarn add -D vuepress-plugin-md-enhance@next
\`\`\`

@tab:active npm

\`\`\`bash
npm i -D vuepress-plugin-md-enhance@next
\`\`\`

:::

::: vue-demo \u4E00\u4E2A\u4F7F\u7528\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u89E3\u6790\u8BED\u8A00 Demo

\`\`\`md
# \u6807\u9898

\u5341\u5206\u5F3A\u5927
\`\`\`

\`\`\`ts
const message: string = "VuePress Theme Hope";

document.querySelector("h1").innerHTML = message;
\`\`\`

\`\`\`scss
h1 {
  font-style: italic;

  + p {
    color: red;
  }
}
\`\`\`

:::
`,contentRendered:`<h1 id="\u9009\u9879\u5361" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879\u5361" aria-hidden="true">#</a> \u9009\u9879\u5361</h1>
<Tabs :data='[{"title":"apple"},{"title":"banana"},{"title":"orange"}]' tab-id="fruit">
<template #tab0="{ title, value, isActive }">
<p>Apple</p>
</template>
<template #tab1="{ title, value, isActive }">
<p>Banana</p>
</template>
<template #tab2="{ title, value, isActive }">
<p>Orange</p>
</template>
</Tabs>
<p>\u5B89\u88C5 VuePress Theme Hope:</p>
<CodeTabs :data='[{"title":"pnpm"},{"title":"yarn"},{"title":"npm"}]' :active="2" tab-id="shell">

<template #tab0="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-theme-hope@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-theme-hope@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D vuepress-theme-hope@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>\u5B89\u88C5 VuePress Plugin Markdown Enhance:</p>
<CodeTabs :data='[{"title":"pnpm"},{"title":"yarn"},{"title":"npm"}]' :active="2" tab-id="shell">

<template #tab0="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-plugin-md-enhance@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-plugin-md-enhance@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D vuepress-plugin-md-enhance@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>

<CodeDemo id="code-demo-918560ec" type="vue" title="%E4%B8%80%E4%B8%AA%E4%BD%BF%E7%94%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8D%E6%94%AF%E6%8C%81%E8%A7%A3%E6%9E%90%E8%AF%AD%E8%A8%80%20Demo" code="%7B%22md%22%3A%22%23%20%E6%A0%87%E9%A2%98%5Cn%5Cn%E5%8D%81%E5%88%86%E5%BC%BA%E5%A4%A7%5Cn%22%2C%22ts%22%3A%22const%20message%3A%20string%20%3D%20%5C%22VuePress%20Theme%20Hope%5C%22%3B%5Cn%5Cndocument.querySelector(%5C%22h1%5C%22).innerHTML%20%3D%20message%3B%5Cn%22%2C%22scss%22%3A%22h1%20%7B%5Cn%20%20font-style%3A%20italic%3B%5Cn%5Cn%20%20%2B%20p%20%7B%5Cn%20%20%20%20color%3A%20red%3B%5Cn%20%20%7D%5Cn%7D%5Cn%22%7D">
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> \u6807\u9898</span>

\u5341\u5206\u5F3A\u5927
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"VuePress Theme Hope"</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> message<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">h1 </span><span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>

  <span class="token selector">+ p </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>`,date:"2022-07-03",deps:[],links:[],pathInferred:"/test-demo/tabs.html",pathLocale:"/",permalink:"/test-demo/tabs",routeMeta:{title:"\u9009\u9879\u5361"},sfcBlocks:[],slug:"tabs",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/test-demo/tabs.md",filePathRelative:"test-demo/tabs.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/test-demo/tabs/index.html.vue",componentFilePathRelative:"pages/test-demo/tabs/index.html.vue",componentFileChunkName:"v-32534572",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/test-demo/tabs/index.html.js",dataFilePathRelative:"pages/test-demo/tabs/index.html.js",dataFileChunkName:"v-32534572",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/test-demo/tabs/index.html",htmlFilePathRelative:"test-demo/tabs/index.html"},{data:{key:"v-fddb37fc",path:"/utils/Array/chunk%E8%BD%AC%E6%8D%A2%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84.html",title:"chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4",lang:"zh-CN",frontmatter:{title:"chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.md"},key:"v-fddb37fc",path:"/utils/Array/chunk%E8%BD%AC%E6%8D%A2%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84.html",title:"chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4",lang:"zh-CN",frontmatter:{title:"chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`chunk\`\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4

\u5C06\u6570\u7EC4\uFF08array\uFF09\u62C6\u5206\u6210\u591A\u4E2A\u5B50\u6570\u7EC4\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u5B50\u6570\u7EC4\u7EC4\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002

**\u53C2\u6570**

- \`array\`

- \`count = 8\`\u5B50\u6570\u7EC4\u9700\u8981\u7684\u957F\u5EA6

**\u4F8B\u5B50**

\`\`\`js
chunk([1, 2, 3, 4, 5, 6, 7], 2)
=> [[1, 2], [3, 4], [5, 6], [7]]

chunk(['a', 'b', 'c', 'd'], 3)
=> [['a', 'b', 'c'], ['d']]
\`\`\`

**\u6E90\u7801**

\`\`\`js
function chunk(array, count = 8) {
    let pages = []
    array.forEach((item, index) => {
        const page = Math.floor(index / count)
        if (!pages[page]) pages[page] = []
        pages[page].push(item)
    })
    return pages
}
\`\`\`
`,contentRendered:`<h1 id="chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> <code v-pre>chunk</code>\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4</h1>
<p>\u5C06\u6570\u7EC4\uFF08array\uFF09\u62C6\u5206\u6210\u591A\u4E2A\u5B50\u6570\u7EC4\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u5B50\u6570\u7EC4\u7EC4\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002</p>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li>
<p><code v-pre>array</code></p>
</li>
<li>
<p><code v-pre>count = 8</code>\u5B50\u6570\u7EC4\u9700\u8981\u7684\u957F\u5EA6</p>
</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span></span><span class="token punctuation">)</span>
<span class="token operator">=></span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token function">chunk</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token operator">=></span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'d'</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">chunk</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">8</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> pages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    array<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> page <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>index <span class="token operator">/</span> count<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pages<span class="token punctuation">[</span>page<span class="token punctuation">]</span><span class="token punctuation">)</span> pages<span class="token punctuation">[</span>page<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        pages<span class="token punctuation">[</span>page<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> pages
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html",pathLocale:"/",permalink:null,routeMeta:{title:"chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4"},sfcBlocks:[],slug:"chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.md",filePathRelative:"utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html.vue",componentFilePathRelative:"pages/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html.vue",componentFileChunkName:"v-fddb37fc",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html.js",dataFilePathRelative:"pages/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html.js",dataFileChunkName:"v-fddb37fc",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html",htmlFilePathRelative:"utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html"},{data:{key:"v-25f11cb1",path:"/utils/Array/clone%E5%85%8B%E9%9A%86%E6%95%B0%E7%BB%84.html",title:"clone\u514B\u9686\u6570\u7EC4",lang:"zh-CN",frontmatter:{title:"clone\u514B\u9686\u6570\u7EC4",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/clone\u514B\u9686\u6570\u7EC4.md"},key:"v-25f11cb1",path:"/utils/Array/clone%E5%85%8B%E9%9A%86%E6%95%B0%E7%BB%84.html",title:"clone\u514B\u9686\u6570\u7EC4",lang:"zh-CN",frontmatter:{title:"clone\u514B\u9686\u6570\u7EC4",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: clone\u514B\u9686\u6570\u7EC4
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`clone\`\u514B\u9686\u6570\u7EC4

\u6D45\u62F7\u8D1D\u4E00\u4EFD\u6570\u7EC4\u526F\u672C

**\u53C2\u6570**

- \`array\`\u8981\u590D\u5236\u7684\u6570\u7EC4

**\u4F8B\u5B50**

\`\`\`js
clone([1, 24])
// => [1, 24]
\`\`\`

**\u6E90\u7801**

\`\`\`js
// ES6 ...
const clone = arr => [...arr]

// ES6 Array.from
const clone = arr => Array.from(arr)

// concat()
const clone = arr => [].concat(arr)

// map()
const clone = arr => arr.map(x => x)

clone([1, 24]) // [1, 24]
\`\`\`
`,contentRendered:`<h1 id="clone\u514B\u9686\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#clone\u514B\u9686\u6570\u7EC4" aria-hidden="true">#</a> <code v-pre>clone</code>\u514B\u9686\u6570\u7EC4</h1>
<p>\u6D45\u62F7\u8D1D\u4E00\u4EFD\u6570\u7EC4\u526F\u672C</p>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code>\u8981\u590D\u5236\u7684\u6570\u7EC4</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => [1, 24]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ES6 ...</span>
<span class="token keyword">const</span> <span class="token function-variable function">clone</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span>

<span class="token comment">// ES6 Array.from</span>
<span class="token keyword">const</span> <span class="token function-variable function">clone</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

<span class="token comment">// concat()</span>
<span class="token keyword">const</span> <span class="token function-variable function">clone</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

<span class="token comment">// map()</span>
<span class="token keyword">const</span> <span class="token function-variable function">clone</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x<span class="token punctuation">)</span>

<span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [1, 24]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/clone\u514B\u9686\u6570\u7EC4.html",pathLocale:"/",permalink:null,routeMeta:{title:"clone\u514B\u9686\u6570\u7EC4"},sfcBlocks:[],slug:"clone\u514B\u9686\u6570\u7EC4",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/clone\u514B\u9686\u6570\u7EC4.md",filePathRelative:"utils/Array/clone\u514B\u9686\u6570\u7EC4.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/clone\u514B\u9686\u6570\u7EC4.html.vue",componentFilePathRelative:"pages/utils/Array/clone\u514B\u9686\u6570\u7EC4.html.vue",componentFileChunkName:"v-25f11cb1",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/clone\u514B\u9686\u6570\u7EC4.html.js",dataFilePathRelative:"pages/utils/Array/clone\u514B\u9686\u6570\u7EC4.html.js",dataFileChunkName:"v-25f11cb1",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/clone\u514B\u9686\u6570\u7EC4.html",htmlFilePathRelative:"utils/Array/clone\u514B\u9686\u6570\u7EC4.html"},{data:{key:"v-8b67f006",path:"/utils/Array/compact%E5%8E%BB%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%97%A0%E6%95%88%E5%80%BC.html",title:"compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C",lang:"zh-CN",frontmatter:{title:"compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.md"},key:"v-8b67f006",path:"/utils/Array/compact%E5%8E%BB%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%97%A0%E6%95%88%E5%80%BC.html",title:"compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C",lang:"zh-CN",frontmatter:{title:"compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`compact\`\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C

\u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u5305\u542B\u539F\u6570\u7EC4\u4E2D\u6240\u6709\u7684\u975E\u5047\u503C\u5143\u7D20\u3002\u4F8B\u5982\`false\`, \`null\`,\`0\`, \`""\`, \`undefined\`, \u548C \`NaN\` \u90FD\u662F\u88AB\u8BA4\u4E3A\u662F\u201C\u5047\u503C\u201D\u3002

**\u53C2\u6570**

- \`array\` \u5F85\u5904\u7406\u7684\u6570\u7EC4

**\u8FD4\u56DE\u503C**

(Array): \u8FD4\u56DE\u8FC7\u6EE4\u6389\u5047\u503C\u7684\u65B0\u6570\u7EC4\u3002

**\u4F8B\u5B50**

\`\`\`js
min([0, 1, false, 2, '', 3])
// => [1, 2, 3]
\`\`\`

**\u6E90\u7801**

\`\`\`js
const compact = arr => arr.filter(Boolean)
\`\`\`
`,contentRendered:`<h1 id="compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C" tabindex="-1"><a class="header-anchor" href="#compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C" aria-hidden="true">#</a> <code v-pre>compact</code>\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C</h1>
<p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u5305\u542B\u539F\u6570\u7EC4\u4E2D\u6240\u6709\u7684\u975E\u5047\u503C\u5143\u7D20\u3002\u4F8B\u5982<code v-pre>false</code>, <code v-pre>null</code>,<code v-pre>0</code>, <code v-pre>&quot;&quot;</code>, <code v-pre>undefined</code>, \u548C <code v-pre>NaN</code> \u90FD\u662F\u88AB\u8BA4\u4E3A\u662F\u201C\u5047\u503C\u201D\u3002</p>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code> \u5F85\u5904\u7406\u7684\u6570\u7EC4</li>
</ul>
<p><strong>\u8FD4\u56DE\u503C</strong></p>
<p>(Array): \u8FD4\u56DE\u8FC7\u6EE4\u6389\u5047\u503C\u7684\u65B0\u6570\u7EC4\u3002</p>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => [1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">compact</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html",pathLocale:"/",permalink:null,routeMeta:{title:"compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C"},sfcBlocks:[],slug:"compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.md",filePathRelative:"utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html.vue",componentFilePathRelative:"pages/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html.vue",componentFileChunkName:"v-8b67f006",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html.js",dataFilePathRelative:"pages/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html.js",dataFileChunkName:"v-8b67f006",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html",htmlFilePathRelative:"utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html"},{data:{key:"v-4932aafa",path:"/utils/Array/difference%E6%95%B0%E7%BB%84%E5%B7%AE%E9%9B%86.html",title:"difference\u6570\u7EC4\u5DEE\u96C6",lang:"zh-CN",frontmatter:{title:"difference\u6570\u7EC4\u5DEE\u96C6",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.md"},key:"v-4932aafa",path:"/utils/Array/difference%E6%95%B0%E7%BB%84%E5%B7%AE%E9%9B%86.html",title:"difference\u6570\u7EC4\u5DEE\u96C6",lang:"zh-CN",frontmatter:{title:"difference\u6570\u7EC4\u5DEE\u96C6",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: difference\u6570\u7EC4\u5DEE\u96C6
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`difference\`

\u521B\u5EFA\u4E00\u4E2A\u5177\u6709\u552F\u4E00\`array\`\u503C\u7684\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u503C\u4E0D\u5305\u542B\u5728\u5176\u4ED6\u7ED9\u5B9A\u7684\u6570\u7EC4\u4E2D\u3002

\u5047\u8BBE\u6709 A \u548C B \u4E24\u4E2A\u6570\u7EC4\uFF0C\u8FD4\u56DE A \u6570\u7EC4\u4E2D\u7684\u96C6\u5408\u4E0D\u5305\u542B B \u6570\u7EC4\u4E2D\u7684\u96C6\u5408\u3002

\u8FD4\u56DE

**\u53C2\u6570**

- \`array1\` \u8981\u68C0\u67E5\u7684\u6570\u7EC4
- \`array2\`\u8981\u6392\u9664\u7684\u6570\u7EC4

**\u4F8B\u5B50**

\`\`\`js
difference([1, 2, 6, 7], [1, 2, 9, 5])
// => [ 6, 7 ]
\`\`\`

**\u6E90\u7801**

\`\`\`js
const difference = (a, b) => {
  const s = new Set(b)
  let arr = a.filter(x => !s.has(x))
  return arr
}
\`\`\`
`,contentRendered:`<h1 id="difference" tabindex="-1"><a class="header-anchor" href="#difference" aria-hidden="true">#</a> <code v-pre>difference</code></h1>
<p>\u521B\u5EFA\u4E00\u4E2A\u5177\u6709\u552F\u4E00<code v-pre>array</code>\u503C\u7684\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u503C\u4E0D\u5305\u542B\u5728\u5176\u4ED6\u7ED9\u5B9A\u7684\u6570\u7EC4\u4E2D\u3002</p>
<p>\u5047\u8BBE\u6709 A \u548C B \u4E24\u4E2A\u6570\u7EC4\uFF0C\u8FD4\u56DE A \u6570\u7EC4\u4E2D\u7684\u96C6\u5408\u4E0D\u5305\u542B B \u6570\u7EC4\u4E2D\u7684\u96C6\u5408\u3002</p>
<p>\u8FD4\u56DE</p>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array1</code> \u8981\u68C0\u67E5\u7684\u6570\u7EC4</li>
<li><code v-pre>array2</code>\u8981\u6392\u9664\u7684\u6570\u7EC4</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">difference</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => [ 6, 7 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">difference</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> <span class="token operator">!</span>s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.html",pathLocale:"/",permalink:null,routeMeta:{title:"difference\u6570\u7EC4\u5DEE\u96C6"},sfcBlocks:[],slug:"difference\u6570\u7EC4\u5DEE\u96C6",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.md",filePathRelative:"utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.html.vue",componentFilePathRelative:"pages/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.html.vue",componentFileChunkName:"v-4932aafa",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.html.js",dataFilePathRelative:"pages/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.html.js",dataFileChunkName:"v-4932aafa",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.html",htmlFilePathRelative:"utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.html"},{data:{key:"v-88ad7930",path:"/utils/Array/flattenDeep%E6%8C%87%E5%AE%9A%E5%B1%82%E7%BA%A7%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.html",title:"flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4",lang:"zh-CN",frontmatter:{title:"flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.md"},key:"v-88ad7930",path:"/utils/Array/flattenDeep%E6%8C%87%E5%AE%9A%E5%B1%82%E7%BA%A7%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.html",title:"flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4",lang:"zh-CN",frontmatter:{title:"flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`flattenDeep\`\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4

\u5C06\u591A\u5C42\u5D4C\u5957\u6570\u7EC4\uFF08array\uFF09\u62C6\u5206\u6210\u6307\u5B9A\u5C42\u7EA7\u6570\u7EC4.

**\u53C2\u6570**

- \`array\`\u591A\u5C42\u5D4C\u5957\u6570\u7EC4 \`depth = 1\` \u51CF\u5C11\u7684\u5D4C\u5957\u5C42\u7EA7\u6570

**\u4F8B\u5B50**

\`\`\`js
flattenDeep([1, [2, [3, [4]], 5]], 1)
// => [1, 2, [3, [4]], 5]
\`\`\`

**\u6E90\u7801**

\`\`\`js
const flattenDeep = (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), [])

// ES6\u65B9\u6CD5 \`flat(depth)\`
// [1, [2, [3, [4]], 5]].flat(1)
// => [1, 2, [3, [4]], 5]
\`\`\`
`,contentRendered:`<h1 id="flattendeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#flattendeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4" aria-hidden="true">#</a> <code v-pre>flattenDeep</code>\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4</h1>
<p>\u5C06\u591A\u5C42\u5D4C\u5957\u6570\u7EC4\uFF08array\uFF09\u62C6\u5206\u6210\u6307\u5B9A\u5C42\u7EA7\u6570\u7EC4.</p>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code>\u591A\u5C42\u5D4C\u5957\u6570\u7EC4 <code v-pre>depth = 1</code> \u51CF\u5C11\u7684\u5D4C\u5957\u5C42\u7EA7\u6570</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">flattenDeep</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// => [1, 2, [3, [4]], 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">flattenDeep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> depth <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token operator">=></span> a<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>depth <span class="token operator">></span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">flatten</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> depth <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> v<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// ES6\u65B9\u6CD5 \`flat(depth)\`</span>
<span class="token comment">// [1, [2, [3, [4]], 5]].flat(1)</span>
<span class="token comment">// => [1, 2, [3, [4]], 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html",pathLocale:"/",permalink:null,routeMeta:{title:"flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4"},sfcBlocks:[],slug:"flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.md",filePathRelative:"utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html.vue",componentFilePathRelative:"pages/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html.vue",componentFileChunkName:"v-88ad7930",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html.js",dataFilePathRelative:"pages/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html.js",dataFileChunkName:"v-88ad7930",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html",htmlFilePathRelative:"utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html"},{data:{key:"v-7c143142",path:"/utils/Array/flatten%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.html",title:"flatten\u6241\u5E73\u5316\u6570\u7EC4",lang:"zh-CN",frontmatter:{title:"flatten\u6241\u5E73\u5316\u6570\u7EC4",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.md"},key:"v-7c143142",path:"/utils/Array/flatten%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.html",title:"flatten\u6241\u5E73\u5316\u6570\u7EC4",lang:"zh-CN",frontmatter:{title:"flatten\u6241\u5E73\u5316\u6570\u7EC4",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: flatten\u6241\u5E73\u5316\u6570\u7EC4
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`flatten\`\u6241\u5E73\u5316\u6570\u7EC4

\u5C06\u591A\u5C42\u5D4C\u5957\u6570\u7EC4\uFF08array\uFF09\u62C6\u5206\u6210\u4E00\u4E2A\u6570\u7EC4\u3002

**\u53C2\u6570**

- \`array\`\u591A\u5C42\u5D4C\u5957\u6570\u7EC4

**\u4F8B\u5B50**

\`\`\`js
flatten([1, [2], [3], [4, 5]])

=> [1, 2, 3, 4, 5]
\`\`\`

**\u6E90\u7801**

\`\`\`js
// \u6241\u5E73\u5316  Map \u65B9\u6CD5
const flatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? flatten(v) : v)))

// \u6241\u5E73\u5316  reduce \u65B9\u6CD5
// const flatten = arr => arr.reduce((a, c) => a.concat(Array.isArray(c) ? flatten(c) : c), [])
\`\`\`
`,contentRendered:`<h1 id="flatten\u6241\u5E73\u5316\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#flatten\u6241\u5E73\u5316\u6570\u7EC4" aria-hidden="true">#</a> <code v-pre>flatten</code>\u6241\u5E73\u5316\u6570\u7EC4</h1>
<p>\u5C06\u591A\u5C42\u5D4C\u5957\u6570\u7EC4\uFF08array\uFF09\u62C6\u5206\u6210\u4E00\u4E2A\u6570\u7EC4\u3002</p>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code>\u591A\u5C42\u5D4C\u5957\u6570\u7EC4</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">flatten</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span>

<span class="token operator">=></span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u6241\u5E73\u5316  Map \u65B9\u6CD5</span>
<span class="token keyword">const</span> <span class="token function-variable function">flatten</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">flatten</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">:</span> v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u6241\u5E73\u5316  reduce \u65B9\u6CD5</span>
<span class="token comment">// const flatten = arr => arr.reduce((a, c) => a.concat(Array.isArray(c) ? flatten(c) : c), [])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.html",pathLocale:"/",permalink:null,routeMeta:{title:"flatten\u6241\u5E73\u5316\u6570\u7EC4"},sfcBlocks:[],slug:"flatten\u6241\u5E73\u5316\u6570\u7EC4",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.md",filePathRelative:"utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.html.vue",componentFilePathRelative:"pages/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.html.vue",componentFileChunkName:"v-7c143142",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.html.js",dataFilePathRelative:"pages/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.html.js",dataFileChunkName:"v-7c143142",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.html",htmlFilePathRelative:"utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.html"},{data:{key:"v-0ba4ebd2",path:"/utils/Array/intersection%E6%95%B0%E7%BB%84%E4%BA%A4%E9%9B%86.html",title:"intersection\u6570\u7EC4\u4EA4\u96C6",lang:"zh-CN",frontmatter:{title:"intersection\u6570\u7EC4\u4EA4\u96C6",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.md"},key:"v-0ba4ebd2",path:"/utils/Array/intersection%E6%95%B0%E7%BB%84%E4%BA%A4%E9%9B%86.html",title:"intersection\u6570\u7EC4\u4EA4\u96C6",lang:"zh-CN",frontmatter:{title:"intersection\u6570\u7EC4\u4EA4\u96C6",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: intersection\u6570\u7EC4\u4EA4\u96C6
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`intersection\`\u6570\u7EC4\u96C6\u5408

\u521B\u5EFA\u4E00\u4E2A\u5171\u6709\u7684\`array\`\u503C\u7684\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u503C\u5305\u542B\u5728\u5176\u4ED6\u7ED9\u5B9A\u7684\u6570\u7EC4\u4E2D\u3002

**\u53C2\u6570**

-   \`array\` \u8981\u68C0\u67E5\u7684\u6570\u7EC4
-   \`array2\`\u8981\u5305\u542B\u7684\u6570\u7EC4

**\u4F8B\u5B50**

\`\`\`js
intersection([1, 2, 6, 7], [1, 2, 9, 5])
// => [ 1, 2 ]
\`\`\`

**\u6E90\u7801**

\`\`\`js
const intersection = (a, b) => {
    const s = new Set(b)
    return a.filter(x => s.has(x))
}
// ES6 includes
const intersection = (arr, values) => arr.filter(v => values.includes(v))
\`\`\``,contentRendered:`<h1 id="intersection\u6570\u7EC4\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#intersection\u6570\u7EC4\u96C6\u5408" aria-hidden="true">#</a> <code v-pre>intersection</code>\u6570\u7EC4\u96C6\u5408</h1>
<p>\u521B\u5EFA\u4E00\u4E2A\u5171\u6709\u7684<code v-pre>array</code>\u503C\u7684\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u503C\u5305\u542B\u5728\u5176\u4ED6\u7ED9\u5B9A\u7684\u6570\u7EC4\u4E2D\u3002</p>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code> \u8981\u68C0\u67E5\u7684\u6570\u7EC4</li>
<li><code v-pre>array2</code>\u8981\u5305\u542B\u7684\u6570\u7EC4</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">intersection</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => [ 1, 2 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">intersection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// ES6 includes</span>
<span class="token keyword">const</span> <span class="token function-variable function">intersection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> values</span><span class="token punctuation">)</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> values<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.html",pathLocale:"/",permalink:null,routeMeta:{title:"intersection\u6570\u7EC4\u4EA4\u96C6"},sfcBlocks:[],slug:"intersection\u6570\u7EC4\u4EA4\u96C6",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.md",filePathRelative:"utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.html.vue",componentFilePathRelative:"pages/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.html.vue",componentFileChunkName:"v-0ba4ebd2",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.html.js",dataFilePathRelative:"pages/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.html.js",dataFileChunkName:"v-0ba4ebd2",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.html",htmlFilePathRelative:"utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.html"},{data:{key:"v-d03a9252",path:"/utils/Array/isArrayEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.html",title:"isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49",lang:"zh-CN",frontmatter:{title:"isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.md"},key:"v-d03a9252",path:"/utils/Array/isArrayEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.html",title:"isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49",lang:"zh-CN",frontmatter:{title:"isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`isArrayEqual\`\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49

\u6BD4\u8F83\u4E24\u4E2A\u6570\u7EC4\u5185\u7684\u5404\u9879\u503C\u662F\u5426\u76F8\u7B49\uFF0C\u8FD4\u56DE\u4E00\u4E2A\`Boolean\`\u503C

**\u53C2\u6570**

- \`array\` \u8981\u68C0\u67E5\u7684\u6570\u7EC4
- \`array\` \u8981\u68C0\u67E5\u7684\u6570\u7EC4

**\u4F8B\u5B50**

\`\`\`js
isArrayEqual([6, 5, 2, 4, 1, 3], [1, 2, 3, 4, 5, 6])
// => true

isArrayEqual([6, 5, 2, 7, 1, 3], [1, 2, 3, 4, 5, 6])
// => false
\`\`\`

**\u6E90\u7801**

\`\`\`js
const isArrayEqual = (a, b, has = true) => {
  if (a.length !== b.length) return (has = false)
  const s = new Set(b)
  if (a.find(x => !s.has(x))) return (has = false)
  return has
}
\`\`\`
`,contentRendered:`<h1 id="isarrayequal\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49" tabindex="-1"><a class="header-anchor" href="#isarrayequal\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49" aria-hidden="true">#</a> <code v-pre>isArrayEqual</code>\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49</h1>
<p>\u6BD4\u8F83\u4E24\u4E2A\u6570\u7EC4\u5185\u7684\u5404\u9879\u503C\u662F\u5426\u76F8\u7B49\uFF0C\u8FD4\u56DE\u4E00\u4E2A<code v-pre>Boolean</code>\u503C</p>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code> \u8981\u68C0\u67E5\u7684\u6570\u7EC4</li>
<li><code v-pre>array</code> \u8981\u68C0\u67E5\u7684\u6570\u7EC4</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">isArrayEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => true</span>

<span class="token function">isArrayEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isArrayEqual</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> has <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>length <span class="token operator">!==</span> b<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">(</span>has <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> <span class="token operator">!</span>s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">(</span>has <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> has
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html",pathLocale:"/",permalink:null,routeMeta:{title:"isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49"},sfcBlocks:[],slug:"isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.md",filePathRelative:"utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html.vue",componentFilePathRelative:"pages/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html.vue",componentFileChunkName:"v-d03a9252",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html.js",dataFilePathRelative:"pages/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html.js",dataFileChunkName:"v-d03a9252",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html",htmlFilePathRelative:"utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html"},{data:{key:"v-0236c666",path:"/utils/Array/isEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E5%80%BC%E7%9B%B8%E7%AD%89.html",title:"isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49",lang:"zh-CN",frontmatter:{title:"isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.md"},key:"v-0236c666",path:"/utils/Array/isEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E5%80%BC%E7%9B%B8%E7%AD%89.html",title:"isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49",lang:"zh-CN",frontmatter:{title:"isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`isEqual\`\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49

**\u53C2\u6570**

- \`object\`\u5F85\u68C0\u7D22\u7684\u5BF9\u8C61\u6216\u6570\u7EC4
- \`object\`\u5F85\u68C0\u7D22\u7684\u5BF9\u8C61\u6216\u6570\u7EC4

**\u4F8B\u5B50**

\`\`\`js
isEqual({ a: 2, b: 4 }, { b: 4, a: 2 })
// => true
isEqual({ a: 2, b: 4, c: 6 }, { b: 4, a: 2 })
// => false
\`\`\`

**\u6E90\u7801**

\`\`\`js
isEqual = (obj1, obj2) => {
  let o1 = obj1 instanceof Object
  let o2 = obj2 instanceof Object
  // \u5224\u65AD\u662F\u4E0D\u662F\u5BF9\u8C61
  if (!o1 || !o2) return obj1 === obj2
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  let isDif = true
  for (let o in obj1) {
    let t1 = obj1[o] instanceof Object
    let t2 = obj2[o] instanceof Object
    if (t1 && t2) {
      isDif = isEqual(obj1[o], obj2[o])
    } else if (obj1[o] !== obj2[o]) {
      isDif = false
    }
    if (!isDif) break
  }
  return isDif
}
\`\`\`
`,contentRendered:`<h1 id="isequal\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49" tabindex="-1"><a class="header-anchor" href="#isequal\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49" aria-hidden="true">#</a> <code v-pre>isEqual</code>\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49</h1>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>object</code>\u5F85\u68C0\u7D22\u7684\u5BF9\u8C61\u6216\u6570\u7EC4</li>
<li><code v-pre>object</code>\u5F85\u68C0\u7D22\u7684\u5BF9\u8C61\u6216\u6570\u7EC4</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// => true</span>
<span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// => false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function-variable function">isEqual</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj1<span class="token punctuation">,</span> obj2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html",pathLocale:"/",permalink:null,routeMeta:{title:"isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49"},sfcBlocks:[],slug:"isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.md",filePathRelative:"utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html.vue",componentFilePathRelative:"pages/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html.vue",componentFileChunkName:"v-0236c666",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html.js",dataFilePathRelative:"pages/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html.js",dataFileChunkName:"v-0236c666",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html",htmlFilePathRelative:"utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html"},{data:{key:"v-3757be0e",path:"/utils/Array/max%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.html",title:"max\u6570\u7EC4\u4E2D\u6700\u5927\u503C",lang:"zh-CN",frontmatter:{title:"max\u6570\u7EC4\u4E2D\u6700\u5927\u503C",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md"},key:"v-3757be0e",path:"/utils/Array/max%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.html",title:"max\u6570\u7EC4\u4E2D\u6700\u5927\u503C",lang:"zh-CN",frontmatter:{title:"max\u6570\u7EC4\u4E2D\u6700\u5927\u503C",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: max\u6570\u7EC4\u4E2D\u6700\u5927\u503C
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`max\`\u6570\u7EC4\u4E2D\u6700\u5927\u503C

\u8FC7\u6EE4\u539F\u6570\u7EC4\u4E2D\u6240\u6709\u7684\u975E\u5047\u503C\u5143\u7D20\uFF0C\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7684\u6700\u5927\u503C

\`\`\`js
max(array)
\`\`\`

**\u53C2\u6570**

-   \`array\`\u5F85\u5904\u7406\u7684\u6570\u7EC4

**\u4F8B\u5B50**

\`\`\`js
max([0, -1, -2, -3, false])
// => 0
\`\`\`

**\u6E90\u7801**

\`\`\`js
const max = arr => Math.max(...arr.filter(v => Boolean(v) || v === 0))
\`\`\``,contentRendered:`<h1 id="max\u6570\u7EC4\u4E2D\u6700\u5927\u503C" tabindex="-1"><a class="header-anchor" href="#max\u6570\u7EC4\u4E2D\u6700\u5927\u503C" aria-hidden="true">#</a> <code v-pre>max</code>\u6570\u7EC4\u4E2D\u6700\u5927\u503C</h1>
<p>\u8FC7\u6EE4\u539F\u6570\u7EC4\u4E2D\u6240\u6709\u7684\u975E\u5047\u503C\u5143\u7D20\uFF0C\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7684\u6700\u5927\u503C</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">max</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code>\u5F85\u5904\u7406\u7684\u6570\u7EC4</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">max</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> <span class="token function">Boolean</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">||</span> v <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html",pathLocale:"/",permalink:null,routeMeta:{title:"max\u6570\u7EC4\u4E2D\u6700\u5927\u503C"},sfcBlocks:[],slug:"max\u6570\u7EC4\u4E2D\u6700\u5927\u503C",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md",filePathRelative:"utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.vue",componentFilePathRelative:"pages/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.vue",componentFileChunkName:"v-3757be0e",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.js",dataFilePathRelative:"pages/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.js",dataFileChunkName:"v-3757be0e",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html",htmlFilePathRelative:"utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html"},{data:{key:"v-62425f40",path:"/utils/Array/min%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.html",title:"min\u6570\u7EC4\u4E2D\u6700\u5927\u503C",lang:"zh-CN",frontmatter:{title:"min\u6570\u7EC4\u4E2D\u6700\u5927\u503C",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md"},key:"v-62425f40",path:"/utils/Array/min%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.html",title:"min\u6570\u7EC4\u4E2D\u6700\u5927\u503C",lang:"zh-CN",frontmatter:{title:"min\u6570\u7EC4\u4E2D\u6700\u5927\u503C",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: min\u6570\u7EC4\u4E2D\u6700\u5927\u503C
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`min\`\u6570\u7EC4\u4E2D\u6700\u5C0F\u503C

\u8FC7\u6EE4\u539F\u6570\u7EC4\u4E2D\u6240\u6709\u7684\u975E\u5047\u503C\u5143\u7D20\uFF0C\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7684\u6700\u5C0F\u503C

\`\`\`js
min(array)
\`\`\`

**\u53C2\u6570**

-   \`array\`\u5F85\u5904\u7406\u7684\u6570\u7EC4

**\u4F8B\u5B50**

\`\`\`js
min([0, -1, -2, -3, false])
// => -3
\`\`\`

**\u6E90\u7801**

\`\`\`js
const min = arr => Math.min(...arr.filter(v => Boolean(v) || v === 0))
\`\`\``,contentRendered:`<h1 id="min\u6570\u7EC4\u4E2D\u6700\u5C0F\u503C" tabindex="-1"><a class="header-anchor" href="#min\u6570\u7EC4\u4E2D\u6700\u5C0F\u503C" aria-hidden="true">#</a> <code v-pre>min</code>\u6570\u7EC4\u4E2D\u6700\u5C0F\u503C</h1>
<p>\u8FC7\u6EE4\u539F\u6570\u7EC4\u4E2D\u6240\u6709\u7684\u975E\u5047\u503C\u5143\u7D20\uFF0C\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7684\u6700\u5C0F\u503C</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">min</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code>\u5F85\u5904\u7406\u7684\u6570\u7EC4</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => -3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">min</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> <span class="token function">Boolean</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">||</span> v <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html",pathLocale:"/",permalink:null,routeMeta:{title:"min\u6570\u7EC4\u4E2D\u6700\u5927\u503C"},sfcBlocks:[],slug:"min\u6570\u7EC4\u4E2D\u6700\u5927\u503C",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md",filePathRelative:"utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.vue",componentFilePathRelative:"pages/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.vue",componentFileChunkName:"v-62425f40",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.js",dataFilePathRelative:"pages/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.js",dataFileChunkName:"v-62425f40",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html",htmlFilePathRelative:"utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html"},{data:{key:"v-c2c943f6",path:"/utils/Array/shuffle%E6%89%93%E4%B9%B1%E6%95%B0%E7%BB%84.html",title:"shuffle\u6253\u4E71\u6570\u7EC4",lang:"zh-CN",frontmatter:{title:"shuffle\u6253\u4E71\u6570\u7EC4",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.md"},key:"v-c2c943f6",path:"/utils/Array/shuffle%E6%89%93%E4%B9%B1%E6%95%B0%E7%BB%84.html",title:"shuffle\u6253\u4E71\u6570\u7EC4",lang:"zh-CN",frontmatter:{title:"shuffle\u6253\u4E71\u6570\u7EC4",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: shuffle\u6253\u4E71\u6570\u7EC4
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`shuffle\`\u6253\u4E71\u6570\u7EC4

\u521B\u5EFA\u4E00\u4E2A\u6253\u4E71\u7684\u6570\u7EC4\uFF0C\u4F7F\u7528\`Fisher-Yates\`\u7B97\u6CD5\u6253\u4E71\u6570\u7EC4\u7684\u5143\u7D20

\`\`\`js
shuffle(array)
\`\`\`

**\u53C2\u6570**

-   \`array\` \u8981\u6253\u4E71\u7684\u6570\u7EC4

**\u4F8B\u5B50**

\`\`\`js
shuffle([2, 3, 1])
// => [3, 1, 2]
\`\`\`

**\u6E90\u7801**

\`\`\`js
const shuffle = ([...arr]) => {
    let m = arr.length
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]]
    }
    return arr
}
\`\`\``,contentRendered:`<h1 id="shuffle\u6253\u4E71\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#shuffle\u6253\u4E71\u6570\u7EC4" aria-hidden="true">#</a> <code v-pre>shuffle</code>\u6253\u4E71\u6570\u7EC4</h1>
<p>\u521B\u5EFA\u4E00\u4E2A\u6253\u4E71\u7684\u6570\u7EC4\uFF0C\u4F7F\u7528<code v-pre>Fisher-Yates</code>\u7B97\u6CD5\u6253\u4E71\u6570\u7EC4\u7684\u5143\u7D20</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">shuffle</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code> \u8981\u6253\u4E71\u7684\u6570\u7EC4</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">shuffle</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => [3, 1, 2]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">shuffle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> m <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">while</span> <span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> m<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.html",pathLocale:"/",permalink:null,routeMeta:{title:"shuffle\u6253\u4E71\u6570\u7EC4"},sfcBlocks:[],slug:"shuffle\u6253\u4E71\u6570\u7EC4",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.md",filePathRelative:"utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.html.vue",componentFilePathRelative:"pages/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.html.vue",componentFileChunkName:"v-c2c943f6",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.html.js",dataFilePathRelative:"pages/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.html.js",dataFileChunkName:"v-c2c943f6",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.html",htmlFilePathRelative:"utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.html"},{data:{key:"v-9dd956a8",path:"/utils/Array/sortAsc%E6%95%B0%E7%BB%84%E5%8D%87%E5%BA%8F.html",title:"sortAsc\u6570\u7EC4\u5347\u5E8F",lang:"zh-CN",frontmatter:{title:"sortAsc\u6570\u7EC4\u5347\u5E8F",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.md"},key:"v-9dd956a8",path:"/utils/Array/sortAsc%E6%95%B0%E7%BB%84%E5%8D%87%E5%BA%8F.html",title:"sortAsc\u6570\u7EC4\u5347\u5E8F",lang:"zh-CN",frontmatter:{title:"sortAsc\u6570\u7EC4\u5347\u5E8F",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: sortAsc\u6570\u7EC4\u5347\u5E8F
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`sortAsc\`\u6570\u7EC4\u5347\u5E8F

\u8FD4\u56DE\u5347\u5E8F\u540E\u7684\u65B0\u6570\u7EC4

> sort()\u65B9\u6CD5\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\uFF0C\u9ED8\u8BA4\u6309 unicode \u7801\u987A\u5E8F\u6392\u5217

\`\`\`js
sortAsc(array)
\`\`\`

**\u53C2\u6570**

- \`array\` \u8981\u68C0\u67E5\u7684\u6392\u5E8F\u6570\u7EC4

**\u4F8B\u5B50**

\`\`\`js
sortAsc([3, 2, 3, 4, 1])
// => [ 1, 2, 3, 3, 4 ]
\`\`\`

**\u6E90\u7801**

\`\`\`js
// \u901A\u8FC7ES6 ...\u5C55\u5F00\u8FD0\u7B97\u7B26\u6D45\u62F7\u8D1D\u4E00\u4EFD\u65B0\u6570\u7EC4
const sortAsc = arr => [...arr].sort((a, b) => a - b)
\`\`\`
`,contentRendered:`<h1 id="sortasc\u6570\u7EC4\u5347\u5E8F" tabindex="-1"><a class="header-anchor" href="#sortasc\u6570\u7EC4\u5347\u5E8F" aria-hidden="true">#</a> <code v-pre>sortAsc</code>\u6570\u7EC4\u5347\u5E8F</h1>
<p>\u8FD4\u56DE\u5347\u5E8F\u540E\u7684\u65B0\u6570\u7EC4</p>
<blockquote>
<p>sort()\u65B9\u6CD5\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\uFF0C\u9ED8\u8BA4\u6309 unicode \u7801\u987A\u5E8F\u6392\u5217</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">sortAsc</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code> \u8981\u68C0\u67E5\u7684\u6392\u5E8F\u6570\u7EC4</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">sortAsc</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => [ 1, 2, 3, 3, 4 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u901A\u8FC7ES6 ...\u5C55\u5F00\u8FD0\u7B97\u7B26\u6D45\u62F7\u8D1D\u4E00\u4EFD\u65B0\u6570\u7EC4</span>
<span class="token keyword">const</span> <span class="token function-variable function">sortAsc</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.html",pathLocale:"/",permalink:null,routeMeta:{title:"sortAsc\u6570\u7EC4\u5347\u5E8F"},sfcBlocks:[],slug:"sortAsc\u6570\u7EC4\u5347\u5E8F",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.md",filePathRelative:"utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.html.vue",componentFilePathRelative:"pages/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.html.vue",componentFileChunkName:"v-9dd956a8",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.html.js",dataFilePathRelative:"pages/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.html.js",dataFileChunkName:"v-9dd956a8",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.html",htmlFilePathRelative:"utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.html"},{data:{key:"v-f9f1525a",path:"/utils/Array/sortDesc%E6%95%B0%E7%BB%84%E9%99%8D%E5%BA%8F.html",title:"sortDesc\u6570\u7EC4\u964D\u5E8F",lang:"zh-CN",frontmatter:{title:"sortDesc\u6570\u7EC4\u964D\u5E8F",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.md"},key:"v-f9f1525a",path:"/utils/Array/sortDesc%E6%95%B0%E7%BB%84%E9%99%8D%E5%BA%8F.html",title:"sortDesc\u6570\u7EC4\u964D\u5E8F",lang:"zh-CN",frontmatter:{title:"sortDesc\u6570\u7EC4\u964D\u5E8F",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: sortDesc\u6570\u7EC4\u964D\u5E8F
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`sortDesc\`\u6570\u7EC4\u964D\u5E8F

\u8FD4\u56DE\u964D\u5E8F\u540E\u7684\u65B0\u6570\u7EC4


**\u53C2\u6570**

-   \`array\` \u8981\u68C0\u67E5\u7684\u6392\u5E8F\u6570\u7EC4

**\u4F8B\u5B50**

\`\`\`js
sortDesc([3, 2, 3, 4, 1])
// => [ 1, 2, 3, 3, 4 ]
\`\`\`

**\u6E90\u7801**

\`\`\`js
const sortDesc = arr => [...arr].sort((a, b) => b - a)
\`\`\``,contentRendered:`<h1 id="sortdesc\u6570\u7EC4\u964D\u5E8F" tabindex="-1"><a class="header-anchor" href="#sortdesc\u6570\u7EC4\u964D\u5E8F" aria-hidden="true">#</a> <code v-pre>sortDesc</code>\u6570\u7EC4\u964D\u5E8F</h1>
<p>\u8FD4\u56DE\u964D\u5E8F\u540E\u7684\u65B0\u6570\u7EC4</p>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code> \u8981\u68C0\u67E5\u7684\u6392\u5E8F\u6570\u7EC4</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">sortDesc</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => [ 1, 2, 3, 3, 4 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">sortDesc</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> b <span class="token operator">-</span> a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.html",pathLocale:"/",permalink:null,routeMeta:{title:"sortDesc\u6570\u7EC4\u964D\u5E8F"},sfcBlocks:[],slug:"sortDesc\u6570\u7EC4\u964D\u5E8F",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.md",filePathRelative:"utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.html.vue",componentFilePathRelative:"pages/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.html.vue",componentFileChunkName:"v-f9f1525a",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.html.js",dataFilePathRelative:"pages/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.html.js",dataFileChunkName:"v-f9f1525a",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.html",htmlFilePathRelative:"utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.html"},{data:{key:"v-a5a655f4",path:"/utils/Array/takeLast%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E6%9C%80%E5%90%8E%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.html",title:"takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20",lang:"zh-CN",frontmatter:{title:"takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.md"},key:"v-a5a655f4",path:"/utils/Array/takeLast%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E6%9C%80%E5%90%8E%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.html",title:"takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20",lang:"zh-CN",frontmatter:{title:"takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`takeLast\`\u622A\u53D6\u6570\u7EC4\u672B\u5C3E\u5143\u7D20

\u4ECE array \u6570\u7EC4\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\u63D0\u53D6 n \u4E2A\u5143\u7D20

\`\`\`js
takeLast(array, n)
\`\`\`

**\u53C2\u6570**

-   \`array\`\u8981\u68C0\u7D22\u7684\u6570\u7EC4\u3002
-   \`n=\`\u8981\u63D0\u53D6\u7684\u5143\u7D20\`n\`\u4E2A\u6570\u3002

**\u4F8B\u5B50**

\`\`\`js
take([2, 3, 1], 2)
// => [3, 1]
\`\`\`

**\u6E90\u7801**

\`\`\`js
const takeLast = (arr, n = 1) => arr.slice(0, -n)
\`\`\`
`,contentRendered:`<h1 id="takelast\u622A\u53D6\u6570\u7EC4\u672B\u5C3E\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#takelast\u622A\u53D6\u6570\u7EC4\u672B\u5C3E\u5143\u7D20" aria-hidden="true">#</a> <code v-pre>takeLast</code>\u622A\u53D6\u6570\u7EC4\u672B\u5C3E\u5143\u7D20</h1>
<p>\u4ECE array \u6570\u7EC4\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\u63D0\u53D6 n \u4E2A\u5143\u7D20</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">takeLast</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code>\u8981\u68C0\u7D22\u7684\u6570\u7EC4\u3002</li>
<li><code v-pre>n=</code>\u8981\u63D0\u53D6\u7684\u5143\u7D20<code v-pre>n</code>\u4E2A\u6570\u3002</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// => [3, 1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">takeLast</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span>n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html",pathLocale:"/",permalink:null,routeMeta:{title:"takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20"},sfcBlocks:[],slug:"takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.md",filePathRelative:"utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html.vue",componentFilePathRelative:"pages/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html.vue",componentFileChunkName:"v-a5a655f4",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html.js",dataFilePathRelative:"pages/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html.js",dataFileChunkName:"v-a5a655f4",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html",htmlFilePathRelative:"utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html"},{data:{key:"v-669d4826",path:"/utils/Array/take%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E5%BC%80%E5%A7%8B%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.html",title:"take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20",lang:"zh-CN",frontmatter:{title:"take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.md"},key:"v-669d4826",path:"/utils/Array/take%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E5%BC%80%E5%A7%8B%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.html",title:"take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20",lang:"zh-CN",frontmatter:{title:"take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`take\`\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20

\u4ECE array \u6570\u7EC4\u7684\u6700\u5F00\u59CB\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\u63D0\u53D6 n \u4E2A\u5143\u7D20

\`\`\`js
take(array, n)
\`\`\`

**\u53C2\u6570**

-   \`array\`\u8981\u68C0\u7D22\u7684\u6570\u7EC4\u3002
-   \`n=1\`\u8981\u63D0\u53D6\u7684\u5143\u7D20\`n\`\u4E2A\u6570\u3002

**\u4F8B\u5B50**

\`\`\`js
take([2, 3, 1], 2)
// => [2, 3]
\`\`\`

**\u6E90\u7801**

\`\`\`js
const take = (arr, n = 1) => arr.slice(0, n)
\`\`\`
`,contentRendered:`<h1 id="take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20" aria-hidden="true">#</a> <code v-pre>take</code>\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20</h1>
<p>\u4ECE array \u6570\u7EC4\u7684\u6700\u5F00\u59CB\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\u63D0\u53D6 n \u4E2A\u5143\u7D20</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">take</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code>\u8981\u68C0\u7D22\u7684\u6570\u7EC4\u3002</li>
<li><code v-pre>n=1</code>\u8981\u63D0\u53D6\u7684\u5143\u7D20<code v-pre>n</code>\u4E2A\u6570\u3002</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// => [2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">take</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html",pathLocale:"/",permalink:null,routeMeta:{title:"take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20"},sfcBlocks:[],slug:"take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.md",filePathRelative:"utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html.vue",componentFilePathRelative:"pages/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html.vue",componentFileChunkName:"v-669d4826",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html.js",dataFilePathRelative:"pages/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html.js",dataFileChunkName:"v-669d4826",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html",htmlFilePathRelative:"utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html"},{data:{key:"v-61944058",path:"/utils/Array/treeData%E7%94%9F%E6%88%90%E6%A0%91%E7%BB%93%E6%9E%84%E6%95%B0%E6%8D%AE.html",title:"treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E",lang:"zh-CN",frontmatter:{title:"treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.md"},key:"v-61944058",path:"/utils/Array/treeData%E7%94%9F%E6%88%90%E6%A0%91%E7%BB%93%E6%9E%84%E6%95%B0%E6%8D%AE.html",title:"treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E",lang:"zh-CN",frontmatter:{title:"treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`treeData\`\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E

\u8BE5\u51FD\u6570\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C \u6BCF\u9879\`id\`\u5BF9\u5E94\u5176\u7236\u7EA7\u6570\u636E\`parent_id\`\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6811\u7ED3\u6784\u6570\u7EC4

\`\`\`js
treeData(array, id, parent_id)
\`\`\`

**\u53C2\u6570**

- \`array\` \u8981\u751F\u6210\u6811\u7ED3\u6784\u7684\u6570\u7EC4
- \`id\` \u81EA\u5B9A\u4E49\u5C5E\u6027\u540D
- \`parent_id\` \u7236\u7EA7\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D

**\u4F8B\u5B50**

\`\`\`js
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 },
]

treeData(comments)

// => [ { id: 1, parent_id: null, children: [ [Object], [Object] ] } ]
\`\`\`

**\u6E90\u7801**

\`\`\`js
const treeData = (arr, id = null, link = 'parent_id') => arr.filter(item => item[link] === id).map(item => ({ ...item, children: treeData(arr, item.id) }))
\`\`\`
`,contentRendered:`<h1 id="treedata\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#treedata\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E" aria-hidden="true">#</a> <code v-pre>treeData</code>\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E</h1>
<p>\u8BE5\u51FD\u6570\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C \u6BCF\u9879<code v-pre>id</code>\u5BF9\u5E94\u5176\u7236\u7EA7\u6570\u636E<code v-pre>parent_id</code>\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6811\u7ED3\u6784\u6570\u7EC4</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">treeData</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> id<span class="token punctuation">,</span> parent_id<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code> \u8981\u751F\u6210\u6811\u7ED3\u6784\u7684\u6570\u7EC4</li>
<li><code v-pre>id</code> \u81EA\u5B9A\u4E49\u5C5E\u6027\u540D</li>
<li><code v-pre>parent_id</code> \u7236\u7EA7\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> comments <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">parent_id</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">parent_id</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">parent_id</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">parent_id</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">parent_id</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token function">treeData</span><span class="token punctuation">(</span>comments<span class="token punctuation">)</span>

<span class="token comment">// => [ { id: 1, parent_id: null, children: [ [Object], [Object] ] } ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token punctuation">,</span> id <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> link <span class="token operator">=</span> <span class="token string">'parent_id'</span><span class="token punctuation">)</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">[</span>link<span class="token punctuation">]</span> <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>item<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token function">treeData</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> item<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html",pathLocale:"/",permalink:null,routeMeta:{title:"treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E"},sfcBlocks:[],slug:"treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.md",filePathRelative:"utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html.vue",componentFilePathRelative:"pages/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html.vue",componentFileChunkName:"v-61944058",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html.js",dataFilePathRelative:"pages/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html.js",dataFileChunkName:"v-61944058",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html",htmlFilePathRelative:"utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html"},{data:{key:"v-283754ae",path:"/utils/Array/uniqueBy%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%8E%BB%E9%87%8D.html",title:"uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.md"},key:"v-283754ae",path:"/utils/Array/uniqueBy%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%8E%BB%E9%87%8D.html",title:"uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`uniqueBy\`\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD

\u521B\u5EFA\u4E00\u4E2A\u53BB\u91CD\u540E\u7684 array \u6570\u7EC4\u5BF9\u8C61\u526F\u672C

\`\`\`js
uniqueBy(array)
\`\`\`

**\u53C2\u6570**

-   \`array\` \u8981\u53BB\u91CD\u7684\u6570\u7EC4
-   \`key\` \u8981\u53BB\u91CD\u7684\u5BF9\u8C61\u5C5E\u6027\u503C

**\u4F8B\u5B50**

\`\`\`js
const responseList = [
    { id: 1, a: 1 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
]

uniqueBy(responseList, 'id')

// => [ { id: 1, a: 1 }, { id: 2, a: 2 }, { id: 3, a: 3 } ]
\`\`\`

**\u6E90\u7801**

\`\`\`js
const uniqueBy = (arr, key) => {
    return arr.reduce((acc, cur) => {
        const ids = acc.map(item => item[key])
        return ids.includes(cur[key]) ? acc : [...acc, cur]
    }, [])
}
\`\`\``,contentRendered:`<h1 id="uniqueby\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#uniqueby\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD" aria-hidden="true">#</a> <code v-pre>uniqueBy</code>\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD</h1>
<p>\u521B\u5EFA\u4E00\u4E2A\u53BB\u91CD\u540E\u7684 array \u6570\u7EC4\u5BF9\u8C61\u526F\u672C</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">uniqueBy</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code> \u8981\u53BB\u91CD\u7684\u6570\u7EC4</li>
<li><code v-pre>key</code> \u8981\u53BB\u91CD\u7684\u5BF9\u8C61\u5C5E\u6027\u503C</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> responseList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token function">uniqueBy</span><span class="token punctuation">(</span>responseList<span class="token punctuation">,</span> <span class="token string">'id'</span><span class="token punctuation">)</span>

<span class="token comment">// => [ { id: 1, a: 1 }, { id: 2, a: 2 }, { id: 3, a: 3 } ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">uniqueBy</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> ids <span class="token operator">=</span> acc<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> ids<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>cur<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> acc <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>acc<span class="token punctuation">,</span> cur<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html",pathLocale:"/",permalink:null,routeMeta:{title:"uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD"},sfcBlocks:[],slug:"uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.md",filePathRelative:"utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html.vue",componentFilePathRelative:"pages/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html.vue",componentFileChunkName:"v-283754ae",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html.js",dataFilePathRelative:"pages/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html.js",dataFileChunkName:"v-283754ae",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html",htmlFilePathRelative:"utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html"},{data:{key:"v-35feaa32",path:"/utils/Array/unique%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D.html",title:"unique\u6570\u7EC4\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"unique\u6570\u7EC4\u53BB\u91CD",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Array/unique\u6570\u7EC4\u53BB\u91CD.md"},key:"v-35feaa32",path:"/utils/Array/unique%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D.html",title:"unique\u6570\u7EC4\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"unique\u6570\u7EC4\u53BB\u91CD",date:"2022-06-15T17:20:46.000Z",categories:["utils","Array"],tags:[null]},excerpt:"",headers:[],content:`---
title: unique\u6570\u7EC4\u53BB\u91CD
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - 
---
# \`unique\`\u6570\u7EC4\u53BB\u91CD

\u521B\u5EFA\u4E00\u4E2A\u53BB\u91CD\u540E\u7684 array \u6570\u7EC4\u526F\u672C

**\u53C2\u6570**

- \`array\` \u8981\u53BB\u91CD\u7684\u6570\u7EC4

**\u4F8B\u5B50**

\`\`\`js
unique([1, 2, 2, 3, 4, 4, 5])
// => [ 1, 2, 3, 4, 5 ]
\`\`\`

**\u6E90\u7801**

\`\`\`js
const unique = (...arr) => [...new Set(arr)]

const unique = (...arr) => Array.from(new Set(arr))
\`\`\`
`,contentRendered:`<h1 id="unique\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#unique\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> <code v-pre>unique</code>\u6570\u7EC4\u53BB\u91CD</h1>
<p>\u521B\u5EFA\u4E00\u4E2A\u53BB\u91CD\u540E\u7684 array \u6570\u7EC4\u526F\u672C</p>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code> \u8981\u53BB\u91CD\u7684\u6570\u7EC4</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => [ 1, 2, 3, 4, 5 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">unique</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token function-variable function">unique</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.html",pathLocale:"/",permalink:null,routeMeta:{title:"unique\u6570\u7EC4\u53BB\u91CD"},sfcBlocks:[],slug:"unique\u6570\u7EC4\u53BB\u91CD",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.md",filePathRelative:"utils/Array/unique\u6570\u7EC4\u53BB\u91CD.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.html.vue",componentFilePathRelative:"pages/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.html.vue",componentFileChunkName:"v-35feaa32",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.html.js",dataFilePathRelative:"pages/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.html.js",dataFileChunkName:"v-35feaa32",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.html",htmlFilePathRelative:"utils/Array/unique\u6570\u7EC4\u53BB\u91CD.html"},{data:{key:"v-dff60d86",path:"/utils/Function/calcFn%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E8%BF%90%E7%AE%97.html",title:"calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97",lang:"zh-CN",frontmatter:{title:"calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97",date:"2022-06-15T17:20:46.000Z",categories:["utils","Function"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.md"},key:"v-dff60d86",path:"/utils/Function/calcFn%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E8%BF%90%E7%AE%97.html",title:"calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97",lang:"zh-CN",frontmatter:{title:"calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97",date:"2022-06-15T17:20:46.000Z",categories:["utils","Function"],tags:[null]},excerpt:"",headers:[],content:`---
title: calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Function
tags: 
  - 
---
# \`calcFn\`\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97

\u56E0\u4E3A JavaScript \u9075\u5FAA IEEE 754 \u6570\u5B66\u6807\u51C6\uFF0C\u4F7F\u7528 64 \u4F4D\u6D6E\u70B9\u6570\u8FDB\u884C\u8FD0\u7B97\u3002\u5728\u8FDB\u884C\u5341\u8FDB\u5236\u8FD0\u7B97\u65F6\u4F1A\u5BFC\u81F4\u7CBE\u5EA6\u4E22\u5931\u3002

\`\`\`js
calcFn.add(value1, value2, value3)
\`\`\`

**\u53C2\u6570**

-   \`add\`\u3001\`sub\`\u3001\`mul\`\u3001\`div\`\u8FD0\u7B97\u7B26
-   \`value\`\u8981\u8BA1\u7B97\u7684\u503C

**\u4F8B\u5B50**

\`\`\`js
\u89E3\u51B3 0.1+0.2 !== 0.3 \u95EE\u9898
//\u52A0\u6CD5
calcFn.add(0.1, 0.2) // 0.3

//\u51CF\u6CD5
calcFn.sub(0.1, 0.2) // 0.1

//\u4E58\u6CD5
calcFn.mul(0.2, 0.3) // 0.06

// \u4E58\u6CD5
calcFn.add(0.1, 0.2) // 0.5
\`\`\`

**\u6E90\u7801**

\`\`\`js
const calcFn = {
  add() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accAdd(total, num);
      });\b
  },
  sub() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accAdd(total, -num);
      });
  },
  mul() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accMul(total, num);
      });
  },
  div() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accDiv(total, num);
      });
  }
}

function accAdd(arg1, arg2) {
  let r1, r2, m;
  try {
      r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
      r1 = 0;
  }
  try {
      r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
      r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}

function accMul(arg1, arg2) {
  let m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
  try {
      m += s1.split(".")[1].length;
  } catch (e) {}
  try {
      m += s2.split(".")[1].length;
  } catch (e) {}
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

function accDiv(arg1, arg2) {
  let t1 = 0,
      t2 = 0,
      r1, r2;
  try {
      t1 = arg1.toString().split(".")[1].length;
  } catch (e) {}
  try {
      t2 = arg2.toString().split(".")[1].length;
  } catch (e) {}
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}
\`\`\``,contentRendered:`<h1 id="calcfn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#calcfn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97" aria-hidden="true">#</a> <code v-pre>calcFn</code>\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97</h1>
<p>\u56E0\u4E3A JavaScript \u9075\u5FAA IEEE 754 \u6570\u5B66\u6807\u51C6\uFF0C\u4F7F\u7528 64 \u4F4D\u6D6E\u70B9\u6570\u8FDB\u884C\u8FD0\u7B97\u3002\u5728\u8FDB\u884C\u5341\u8FDB\u5236\u8FD0\u7B97\u65F6\u4F1A\u5BFC\u81F4\u7CBE\u5EA6\u4E22\u5931\u3002</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>calcFn<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span> value3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>add</code>\u3001<code v-pre>sub</code>\u3001<code v-pre>mul</code>\u3001<code v-pre>div</code>\u8FD0\u7B97\u7B26</li>
<li><code v-pre>value</code>\u8981\u8BA1\u7B97\u7684\u503C</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>\u89E3\u51B3 <span class="token number">0.1</span><span class="token operator">+</span><span class="token number">0.2</span> <span class="token operator">!==</span> <span class="token number">0.3</span> \u95EE\u9898
<span class="token comment">//\u52A0\u6CD5</span>
calcFn<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span> <span class="token comment">// 0.3</span>

<span class="token comment">//\u51CF\u6CD5</span>
calcFn<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span> <span class="token comment">// 0.1</span>

<span class="token comment">//\u4E58\u6CD5</span>
calcFn<span class="token punctuation">.</span><span class="token function">mul</span><span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">)</span> <span class="token comment">// 0.06</span>

<span class="token comment">// \u4E58\u6CD5</span>
calcFn<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span> <span class="token comment">// 0.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> calcFn <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> arg <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> arg<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">accAdd</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\b
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> arg <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> arg<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">accAdd</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> <span class="token operator">-</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mul</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> arg <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> arg<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">accMul</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> arg <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> arg<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">accDiv</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">accAdd</span><span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> r1<span class="token punctuation">,</span> r2<span class="token punctuation">,</span> m<span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
      r1 <span class="token operator">=</span> arg1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      r1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
      r2 <span class="token operator">=</span> arg2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      r2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  m <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>r1<span class="token punctuation">,</span> r2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>arg1 <span class="token operator">*</span> m <span class="token operator">+</span> arg2 <span class="token operator">*</span> m<span class="token punctuation">)</span> <span class="token operator">/</span> m<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">accMul</span><span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
      s1 <span class="token operator">=</span> arg1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      s2 <span class="token operator">=</span> arg2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
      m <span class="token operator">+=</span> s1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
      m <span class="token operator">+=</span> s2<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">Number</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">accDiv</span><span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> t1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
      t2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
      r1<span class="token punctuation">,</span> r2<span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
      t1 <span class="token operator">=</span> arg1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
      t2 <span class="token operator">=</span> arg2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  r1 <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>arg1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  r2 <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>arg2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>r1 <span class="token operator">/</span> r2<span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> t2 <span class="token operator">-</span> t1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html",pathLocale:"/",permalink:null,routeMeta:{title:"calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97"},sfcBlocks:[],slug:"calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.md",filePathRelative:"utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html.vue",componentFilePathRelative:"pages/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html.vue",componentFileChunkName:"v-dff60d86",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html.js",dataFilePathRelative:"pages/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html.js",dataFileChunkName:"v-dff60d86",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html",htmlFilePathRelative:"utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html"},{data:{key:"v-97ceeb80",path:"/utils/Function/debounce%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96.html",title:"debounce\u51FD\u6570\u9632\u6296",lang:"zh-CN",frontmatter:{title:"debounce\u51FD\u6570\u9632\u6296",date:"2022-06-15T17:20:46.000Z",categories:["utils","Function"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Function/debounce\u51FD\u6570\u9632\u6296.md"},key:"v-97ceeb80",path:"/utils/Function/debounce%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96.html",title:"debounce\u51FD\u6570\u9632\u6296",lang:"zh-CN",frontmatter:{title:"debounce\u51FD\u6570\u9632\u6296",date:"2022-06-15T17:20:46.000Z",categories:["utils","Function"],tags:[null]},excerpt:"",headers:[],content:`---
title: debounce\u51FD\u6570\u9632\u6296
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Function
tags: 
  - 
---
# \`debounce\`\u51FD\u6570\u9632\u6296

\u5728\u4E8B\u4EF6\u88AB\u89E6\u53D1 n \u79D2\u540E\u518D\u6267\u884C\u56DE\u8C03\uFF0C\u5982\u679C\u5728\u8FD9 n \u79D2\u5185\u53C8\u88AB\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6\u3002

\`\`\`js
debounce(fn, wait)
\`\`\`

**\u53C2\u6570**

-   \`fn\` \u8981\u9632\u6296\u52A8\u7684\u51FD\u6570
-   \`wait=500\`\u9700\u8981\u5EF6\u8FDF\u7684\u6BEB\u79D2\u6570

**\u4F8B\u5B50**

\`\`\`
debounce(()=> { console.log('debounce') }, 1000)
// => 1\u79D2\u540E\u6253\u5370'debounce'
\`\`\`

**\u6E90\u7801**

\`\`\`js
/** *
 * \u9632\u6296
 * @parmas fn \u56DE\u8C03\u51FD\u6570
 * @parmas time \u89C4\u5B9A\u65F6\u95F4
 */
const debounce = (function () {
    let timer = {}
    return function (func, wait = 500) {
        let context = this // \u6CE8\u610F this \u6307\u5411
        let args = arguments // arguments\u4E2D\u5B58\u7740e
        let name = arguments[0].name || 'arrow' //\u7BAD\u5934\u51FD\u6570
        if (timer[name]) clearTimeout(timer[name])
        timer[name] = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
})()
\`\`\``,contentRendered:`<h1 id="debounce\u51FD\u6570\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#debounce\u51FD\u6570\u9632\u6296" aria-hidden="true">#</a> <code v-pre>debounce</code>\u51FD\u6570\u9632\u6296</h1>
<p>\u5728\u4E8B\u4EF6\u88AB\u89E6\u53D1 n \u79D2\u540E\u518D\u6267\u884C\u56DE\u8C03\uFF0C\u5982\u679C\u5728\u8FD9 n \u79D2\u5185\u53C8\u88AB\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6\u3002</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">debounce</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>fn</code> \u8981\u9632\u6296\u52A8\u7684\u51FD\u6570</li>
<li><code v-pre>wait=500</code>\u9700\u8981\u5EF6\u8FDF\u7684\u6BEB\u79D2\u6570</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>debounce(()=> { console.log('debounce') }, 1000)
// => 1\u79D2\u540E\u6253\u5370'debounce'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** *
 * \u9632\u6296
 * <span class="token keyword">@parmas</span> fn \u56DE\u8C03\u51FD\u6570
 * <span class="token keyword">@parmas</span> time \u89C4\u5B9A\u65F6\u95F4
 */</span>
<span class="token keyword">const</span> debounce <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">// \u6CE8\u610F this \u6307\u5411</span>
        <span class="token keyword">let</span> args <span class="token operator">=</span> arguments <span class="token comment">// arguments\u4E2D\u5B58\u7740e</span>
        <span class="token keyword">let</span> name <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">'arrow'</span> <span class="token comment">//\u7BAD\u5934\u51FD\u6570</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span>
        timer<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Function/debounce\u51FD\u6570\u9632\u6296.html",pathLocale:"/",permalink:null,routeMeta:{title:"debounce\u51FD\u6570\u9632\u6296"},sfcBlocks:[],slug:"debounce\u51FD\u6570\u9632\u6296",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Function/debounce\u51FD\u6570\u9632\u6296.md",filePathRelative:"utils/Function/debounce\u51FD\u6570\u9632\u6296.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Function/debounce\u51FD\u6570\u9632\u6296.html.vue",componentFilePathRelative:"pages/utils/Function/debounce\u51FD\u6570\u9632\u6296.html.vue",componentFileChunkName:"v-97ceeb80",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Function/debounce\u51FD\u6570\u9632\u6296.html.js",dataFilePathRelative:"pages/utils/Function/debounce\u51FD\u6570\u9632\u6296.html.js",dataFileChunkName:"v-97ceeb80",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Function/debounce\u51FD\u6570\u9632\u6296.html",htmlFilePathRelative:"utils/Function/debounce\u51FD\u6570\u9632\u6296.html"},{data:{key:"v-5150c06c",path:"/utils/Function/throttle%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81.html",title:"throttle\u51FD\u6570\u8282\u6D41",lang:"zh-CN",frontmatter:{title:"throttle\u51FD\u6570\u8282\u6D41",date:"2022-06-15T17:20:46.000Z",categories:["utils","Function"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Function/throttle\u51FD\u6570\u8282\u6D41.md"},key:"v-5150c06c",path:"/utils/Function/throttle%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81.html",title:"throttle\u51FD\u6570\u8282\u6D41",lang:"zh-CN",frontmatter:{title:"throttle\u51FD\u6570\u8282\u6D41",date:"2022-06-15T17:20:46.000Z",categories:["utils","Function"],tags:[null]},excerpt:"",headers:[],content:`---
title: throttle\u51FD\u6570\u8282\u6D41
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Function
tags: 
  - 
---
# \`throttle\`\u51FD\u6570\u8282\u6D41

\u89C4\u5B9A\u4E00\u4E2A\u5355\u4F4D\u65F6\u95F4\uFF0C\u5728\u8FD9\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\uFF0C\u53EA\u80FD\u6709\u4E00\u6B21\u89E6\u53D1\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u6267\u884C\uFF0C\u5982\u679C\u5728\u540C\u4E00\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\u67D0\u4E8B\u4EF6\u88AB\u89E6\u53D1\u591A\u6B21\uFF0C\u53EA\u6709\u4E00\u6B21\u80FD\u751F\u6548\u3002

\`\`\`js
throttle(fn, wait)
\`\`\`

**\u53C2\u6570**

-   \`fn\` \u8981\u8282\u6D41\u7684\u51FD\u6570
-   \`wait=500\`\u9700\u8981\u5EF6\u8FDF\u7684\u6BEB\u79D2\u6570

**\u4F8B\u5B50**

\`\`\`js
throttle(() => {
    console.log('throttle')
}, 1000)
// 1\u79D2\u591A\u6B21\u89E6\u53D1\u6253\u5370\u4E00\u6B21\`throttle\`
\`\`\`

**\u6E90\u7801**

\`\`\`js
/** *
 * \u8282\u6D41(\u89C4\u5B9A\u7684\u65F6\u95F4\u624D\u89E6\u53D1)
 * @parmas fn \u7ED3\u675F\u5B8C\u8FD0\u884C\u7684\u56DE\u8C03
 * @parmas delay \u89C4\u5B9A\u65F6\u95F4
 */
export const throttle = (function () {
    let timeout = null
    return function (func, wait) {
        let context = this
        let args = arguments
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                func.apply(context, args)
            }, wait)
        }
    }
})()

throttle(fn, 300)
\`\`\``,contentRendered:`<h1 id="throttle\u51FD\u6570\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#throttle\u51FD\u6570\u8282\u6D41" aria-hidden="true">#</a> <code v-pre>throttle</code>\u51FD\u6570\u8282\u6D41</h1>
<p>\u89C4\u5B9A\u4E00\u4E2A\u5355\u4F4D\u65F6\u95F4\uFF0C\u5728\u8FD9\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\uFF0C\u53EA\u80FD\u6709\u4E00\u6B21\u89E6\u53D1\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u6267\u884C\uFF0C\u5982\u679C\u5728\u540C\u4E00\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\u67D0\u4E8B\u4EF6\u88AB\u89E6\u53D1\u591A\u6B21\uFF0C\u53EA\u6709\u4E00\u6B21\u80FD\u751F\u6548\u3002</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">throttle</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>fn</code> \u8981\u8282\u6D41\u7684\u51FD\u6570</li>
<li><code v-pre>wait=500</code>\u9700\u8981\u5EF6\u8FDF\u7684\u6BEB\u79D2\u6570</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'throttle'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token comment">// 1\u79D2\u591A\u6B21\u89E6\u53D1\u6253\u5370\u4E00\u6B21\`throttle\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** *
 * \u8282\u6D41(\u89C4\u5B9A\u7684\u65F6\u95F4\u624D\u89E6\u53D1)
 * <span class="token keyword">@parmas</span> fn \u7ED3\u675F\u5B8C\u8FD0\u884C\u7684\u56DE\u8C03
 * <span class="token keyword">@parmas</span> delay \u89C4\u5B9A\u65F6\u95F4
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> throttle <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timeout <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">let</span> args <span class="token operator">=</span> arguments
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                timeout <span class="token operator">=</span> <span class="token keyword">null</span>
                <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">throttle</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Function/throttle\u51FD\u6570\u8282\u6D41.html",pathLocale:"/",permalink:null,routeMeta:{title:"throttle\u51FD\u6570\u8282\u6D41"},sfcBlocks:[],slug:"throttle\u51FD\u6570\u8282\u6D41",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Function/throttle\u51FD\u6570\u8282\u6D41.md",filePathRelative:"utils/Function/throttle\u51FD\u6570\u8282\u6D41.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Function/throttle\u51FD\u6570\u8282\u6D41.html.vue",componentFilePathRelative:"pages/utils/Function/throttle\u51FD\u6570\u8282\u6D41.html.vue",componentFileChunkName:"v-5150c06c",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Function/throttle\u51FD\u6570\u8282\u6D41.html.js",dataFilePathRelative:"pages/utils/Function/throttle\u51FD\u6570\u8282\u6D41.html.js",dataFileChunkName:"v-5150c06c",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Function/throttle\u51FD\u6570\u8282\u6D41.html",htmlFilePathRelative:"utils/Function/throttle\u51FD\u6570\u8282\u6D41.html"},{data:{key:"v-3999ae18",path:"/utils/Function/typeFn%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD.html",title:"typeFn\u7C7B\u578B\u5224\u65AD",lang:"zh-CN",frontmatter:{title:"typeFn\u7C7B\u578B\u5224\u65AD",date:"2022-06-15T17:20:46.000Z",categories:["utils","Function"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.md"},key:"v-3999ae18",path:"/utils/Function/typeFn%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD.html",title:"typeFn\u7C7B\u578B\u5224\u65AD",lang:"zh-CN",frontmatter:{title:"typeFn\u7C7B\u578B\u5224\u65AD",date:"2022-06-15T17:20:46.000Z",categories:["utils","Function"],tags:[null]},excerpt:"",headers:[],content:`---
title: typeFn\u7C7B\u578B\u5224\u65AD
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Function
tags: 
  - 
---
# \`typeFn\`\u7C7B\u578B\u5224\u65AD

\u5224\u65AD\u662F\u5426\u662F \`Array\` \`Object\` \`String\` \`Number\`\u7C7B\u578B

\`\`\`js
typeFn.type(value)
\`\`\`

**\u53C2\u6570**

-   \`type\` \u6570\u636E\u7C7B\u578B
-   \`value\`\u8981\u68C0\u9A8C\u7684\u503C

**\u4F8B\u5B50**

\`\`\`js
typeFn.String('1')
typeFn.Number(1)
typeFn.Boolean(false)
typeFn.Null(null)
typeFn.Array([1, 2])
typeFn.Object({ a: 1 })
typeFn.Function(() => {})

// => true
\`\`\`

**\u6E90\u7801**

\`\`\`js
let typeFn = {}
const curring = (fn, arr = []) => {
    let len = fn.length
    return (...args) => {
        arr = arr.concat(args)
        if (arr.length < len) {
            return curring(fn, arr)
        }
        return fn(...arr)
    }
}

function isType(type, content) {
    return Object.prototype.toString.call(content) === \`[object \${type}]\`
}
;['String', 'Number', 'Boolean', 'Null', 'Array', 'Object', 'Function'].forEach(type => {
    typeFn[type] = curring(isType)(type)
})
\`\`\`
`,contentRendered:`<h1 id="typefn\u7C7B\u578B\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#typefn\u7C7B\u578B\u5224\u65AD" aria-hidden="true">#</a> <code v-pre>typeFn</code>\u7C7B\u578B\u5224\u65AD</h1>
<p>\u5224\u65AD\u662F\u5426\u662F <code v-pre>Array</code> <code v-pre>Object</code> <code v-pre>String</code> <code v-pre>Number</code>\u7C7B\u578B</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>typeFn<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>type</code> \u6570\u636E\u7C7B\u578B</li>
<li><code v-pre>value</code>\u8981\u68C0\u9A8C\u7684\u503C</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>typeFn<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
typeFn<span class="token punctuation">.</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
typeFn<span class="token punctuation">.</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
typeFn<span class="token punctuation">.</span><span class="token function">Null</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
typeFn<span class="token punctuation">.</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
typeFn<span class="token punctuation">.</span><span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
typeFn<span class="token punctuation">.</span><span class="token function">Function</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// => true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> typeFn <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">curring</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> fn<span class="token punctuation">.</span>length
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">curring</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isType</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[object </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token string">'Number'</span><span class="token punctuation">,</span> <span class="token string">'Boolean'</span><span class="token punctuation">,</span> <span class="token string">'Null'</span><span class="token punctuation">,</span> <span class="token string">'Array'</span><span class="token punctuation">,</span> <span class="token string">'Object'</span><span class="token punctuation">,</span> <span class="token string">'Function'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">type</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    typeFn<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">curring</span><span class="token punctuation">(</span>isType<span class="token punctuation">)</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.html",pathLocale:"/",permalink:null,routeMeta:{title:"typeFn\u7C7B\u578B\u5224\u65AD"},sfcBlocks:[],slug:"typeFn\u7C7B\u578B\u5224\u65AD",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.md",filePathRelative:"utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.html.vue",componentFilePathRelative:"pages/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.html.vue",componentFileChunkName:"v-3999ae18",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.html.js",dataFilePathRelative:"pages/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.html.js",dataFileChunkName:"v-3999ae18",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.html",htmlFilePathRelative:"utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.html"},{data:{key:"v-770db0d6",path:"/utils/Number/aboutEqual%E7%BA%A6%E7%AD%89%E4%BA%8E.html",title:"aboutEqual\u7EA6\u7B49\u4E8E",lang:"zh-CN",frontmatter:{title:"aboutEqual\u7EA6\u7B49\u4E8E",date:"2022-06-15T17:20:46.000Z",categories:["utils","Number"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.md"},key:"v-770db0d6",path:"/utils/Number/aboutEqual%E7%BA%A6%E7%AD%89%E4%BA%8E.html",title:"aboutEqual\u7EA6\u7B49\u4E8E",lang:"zh-CN",frontmatter:{title:"aboutEqual\u7EA6\u7B49\u4E8E",date:"2022-06-15T17:20:46.000Z",categories:["utils","Number"],tags:[null]},excerpt:"",headers:[],content:`---
title: aboutEqual\u7EA6\u7B49\u4E8E
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Number
tags: 
  - 
---
# \`aboutEqual\`\u4E24\u4E2A\u503C\u662F\u5426\u7EA6\u7B49\u4E8E

\u4F20\u5165\u4E24\u4E2A\u6570\u5B57\u662F\u5426\u5927\u81F4\u76F8\u7B49\uFF0C\u8BEF\u5DEE\u5728\u53EF\u63A5\u53D7\u8303\u56F4\u5185

\`\`\`js
aboutEqual(n1, n2, epsilon)
\`\`\`

**\u53C2\u6570**

- \`n1 n2\` \u8981\u6BD4\u8F83\u7684\u6570\u5B57
- \`epsilon\` \u8BEF\u5DEE\u53EF\u63A5\u53D7\u8303\u56F4\u5185

**\u4F8B\u5B50**

\`\`\`js
aboutEqual(25, 2, 0.06)
// => true
\`\`\`

**\u6E90\u7801**

\`\`\`js
const aboutEqual = (n1, n2, epsilon = 0.001) => Math.abs(n1 - n2) < epsilon
\`\`\`
`,contentRendered:`<h1 id="aboutequal\u4E24\u4E2A\u503C\u662F\u5426\u7EA6\u7B49\u4E8E" tabindex="-1"><a class="header-anchor" href="#aboutequal\u4E24\u4E2A\u503C\u662F\u5426\u7EA6\u7B49\u4E8E" aria-hidden="true">#</a> <code v-pre>aboutEqual</code>\u4E24\u4E2A\u503C\u662F\u5426\u7EA6\u7B49\u4E8E</h1>
<p>\u4F20\u5165\u4E24\u4E2A\u6570\u5B57\u662F\u5426\u5927\u81F4\u76F8\u7B49\uFF0C\u8BEF\u5DEE\u5728\u53EF\u63A5\u53D7\u8303\u56F4\u5185</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">aboutEqual</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> epsilon<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>n1 n2</code> \u8981\u6BD4\u8F83\u7684\u6570\u5B57</li>
<li><code v-pre>epsilon</code> \u8BEF\u5DEE\u53EF\u63A5\u53D7\u8303\u56F4\u5185</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">aboutEqual</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0.06</span><span class="token punctuation">)</span>
<span class="token comment">// => true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">aboutEqual</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> epsilon <span class="token operator">=</span> <span class="token number">0.001</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>n1 <span class="token operator">-</span> n2<span class="token punctuation">)</span> <span class="token operator">&lt;</span> epsilon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.html",pathLocale:"/",permalink:null,routeMeta:{title:"aboutEqual\u7EA6\u7B49\u4E8E"},sfcBlocks:[],slug:"aboutEqual\u7EA6\u7B49\u4E8E",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.md",filePathRelative:"utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.html.vue",componentFilePathRelative:"pages/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.html.vue",componentFileChunkName:"v-770db0d6",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.html.js",dataFilePathRelative:"pages/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.html.js",dataFileChunkName:"v-770db0d6",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.html",htmlFilePathRelative:"utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.html"},{data:{key:"v-47982a42",path:"/utils/Number/averageBy%E6%A3%80%E6%9F%A5%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.html",title:"averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49",lang:"zh-CN",frontmatter:{title:"averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49",date:"2022-06-15T17:20:46.000Z",categories:["utils","Number"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.md"},key:"v-47982a42",path:"/utils/Number/averageBy%E6%A3%80%E6%9F%A5%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.html",title:"averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49",lang:"zh-CN",frontmatter:{title:"averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49",date:"2022-06-15T17:20:46.000Z",categories:["utils","Number"],tags:[null]},excerpt:"",headers:[],content:`---
title: averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Number
tags: 
  - 
---
# \`averageBy\`\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49

\`\`\`
averageBy(array, fn)
\`\`\`

**\u53C2\u6570**

-   \`array\` \u8981\u8FED\u4EE3\u7684\u6570\u7EC4
-   \`fn\` \u8FED\u4EE3\u51FD\u6570

**\u4F8B\u5B50**

\`\`\`js
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n)
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')
// => 5
\`\`\`

**\u6E90\u7801**

\`\`\`js
const averageBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length
\`\`\``,contentRendered:`<h1 id="averageby\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49" tabindex="-1"><a class="header-anchor" href="#averageby\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49" aria-hidden="true">#</a> <code v-pre>averageBy</code>\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>averageBy(array, fn)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>array</code> \u8981\u8FED\u4EE3\u7684\u6570\u7EC4</li>
<li><code v-pre>fn</code> \u8FED\u4EE3\u51FD\u6570</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">averageBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token parameter">o</span> <span class="token operator">=></span> o<span class="token punctuation">.</span>n<span class="token punctuation">)</span>
<span class="token function">averageBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'n'</span><span class="token punctuation">)</span>
<span class="token comment">// => 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">averageBy</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> fn <span class="token operator">===</span> <span class="token string">'function'</span> <span class="token operator">?</span> <span class="token function-variable function">fn</span> <span class="token operator">:</span> <span class="token parameter">val</span> <span class="token operator">=></span> val<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=></span> acc <span class="token operator">+</span> val<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">/</span> arr<span class="token punctuation">.</span>length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html",pathLocale:"/",permalink:null,routeMeta:{title:"averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49"},sfcBlocks:[],slug:"averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.md",filePathRelative:"utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html.vue",componentFilePathRelative:"pages/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html.vue",componentFileChunkName:"v-47982a42",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html.js",dataFilePathRelative:"pages/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html.js",dataFileChunkName:"v-47982a42",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html",htmlFilePathRelative:"utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html"},{data:{key:"v-4349dc68",path:"/utils/Number/average%E6%B1%82%E5%B9%B3%E5%9D%87%E5%80%BC.html",title:"average\u6C42\u5E73\u5747\u503C",lang:"zh-CN",frontmatter:{title:"average\u6C42\u5E73\u5747\u503C",date:"2022-06-15T17:20:46.000Z",categories:["utils","Number"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Number/average\u6C42\u5E73\u5747\u503C.md"},key:"v-4349dc68",path:"/utils/Number/average%E6%B1%82%E5%B9%B3%E5%9D%87%E5%80%BC.html",title:"average\u6C42\u5E73\u5747\u503C",lang:"zh-CN",frontmatter:{title:"average\u6C42\u5E73\u5747\u503C",date:"2022-06-15T17:20:46.000Z",categories:["utils","Number"],tags:[null]},excerpt:"",headers:[],content:`---
title: average\u6C42\u5E73\u5747\u503C
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Number
tags: 
  - 
---
# \`average\`\u6C42\u5E73\u5747\u503C

\`\`\`js
average(value1, value2, value3)
\`\`\`

**\u53C2\u6570**

-   \`value\` \u6570\u5B57

**\u4F8B\u5B50**

\`\`\`js
average(...[1, 2, 3])
average(1, 2, 3)
// => 2
\`\`\`

**\u6E90\u7801**

\`\`\`js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length
\`\`\``,contentRendered:`<h1 id="average\u6C42\u5E73\u5747\u503C" tabindex="-1"><a class="header-anchor" href="#average\u6C42\u5E73\u5747\u503C" aria-hidden="true">#</a> <code v-pre>average</code>\u6C42\u5E73\u5747\u503C</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">average</span><span class="token punctuation">(</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span> value3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>value</code> \u6570\u5B57</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">average</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">average</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// => 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">average</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>nums</span><span class="token punctuation">)</span> <span class="token operator">=></span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=></span> acc <span class="token operator">+</span> val<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">/</span> nums<span class="token punctuation">.</span>length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Number/average\u6C42\u5E73\u5747\u503C.html",pathLocale:"/",permalink:null,routeMeta:{title:"average\u6C42\u5E73\u5747\u503C"},sfcBlocks:[],slug:"average\u6C42\u5E73\u5747\u503C",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Number/average\u6C42\u5E73\u5747\u503C.md",filePathRelative:"utils/Number/average\u6C42\u5E73\u5747\u503C.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Number/average\u6C42\u5E73\u5747\u503C.html.vue",componentFilePathRelative:"pages/utils/Number/average\u6C42\u5E73\u5747\u503C.html.vue",componentFileChunkName:"v-4349dc68",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Number/average\u6C42\u5E73\u5747\u503C.html.js",dataFilePathRelative:"pages/utils/Number/average\u6C42\u5E73\u5747\u503C.html.js",dataFileChunkName:"v-4349dc68",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Number/average\u6C42\u5E73\u5747\u503C.html",htmlFilePathRelative:"utils/Number/average\u6C42\u5E73\u5747\u503C.html"},{data:{key:"v-0a24fb2c",path:"/utils/Number/getLineSize%E8%AE%A1%E7%AE%97%E4%B8%A4%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E8%B7%9D%E7%A6%BB.html",title:"getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB",lang:"zh-CN",frontmatter:{title:"getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB",date:"2022-06-15T17:20:46.000Z",categories:["utils","Number"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.md"},key:"v-0a24fb2c",path:"/utils/Number/getLineSize%E8%AE%A1%E7%AE%97%E4%B8%A4%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E8%B7%9D%E7%A6%BB.html",title:"getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB",lang:"zh-CN",frontmatter:{title:"getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB",date:"2022-06-15T17:20:46.000Z",categories:["utils","Number"],tags:[null]},excerpt:"",headers:[],content:`---
title: getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Number
tags: 
  - 
---
# \`getLineSize\`\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB

\u52FE\u80A1\u5B9A\u7406\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB

\`\`\`js
getLineSize = (x1, y1, x2, y2)
\`\`\`

**\u53C2\u6570**

-   \`x1 y1 x2 y2\`\u5750\u6807\u70B9

**\u4F8B\u5B50**

\`\`\`js
getLineSize(0, 0, 3, 4)
// => 5
\`\`\`

**\u6E90\u7801**

\`\`\`js
const getLineSize = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
\`\`\``,contentRendered:`<h1 id="getlinesize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB" tabindex="-1"><a class="header-anchor" href="#getlinesize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB" aria-hidden="true">#</a> <code v-pre>getLineSize</code>\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB</h1>
<p>\u52FE\u80A1\u5B9A\u7406\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>getLineSize <span class="token operator">=</span> <span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>x1 y1 x2 y2</code>\u5750\u6807\u70B9</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getLineSize</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment">// => 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getLineSize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2</span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">hypot</span><span class="token punctuation">(</span>x2 <span class="token operator">-</span> x1<span class="token punctuation">,</span> y2 <span class="token operator">-</span> y1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html",pathLocale:"/",permalink:null,routeMeta:{title:"getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB"},sfcBlocks:[],slug:"getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.md",filePathRelative:"utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html.vue",componentFilePathRelative:"pages/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html.vue",componentFileChunkName:"v-0a24fb2c",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html.js",dataFilePathRelative:"pages/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html.js",dataFileChunkName:"v-0a24fb2c",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html",htmlFilePathRelative:"utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html"},{data:{key:"v-1cf95226",path:"/utils/Number/randomNumber%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B4%E6%95%B0.html",title:"randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570",lang:"zh-CN",frontmatter:{title:"randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570",date:"2022-06-15T17:20:46.000Z",categories:["utils","Number"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.md"},key:"v-1cf95226",path:"/utils/Number/randomNumber%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B4%E6%95%B0.html",title:"randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570",lang:"zh-CN",frontmatter:{title:"randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570",date:"2022-06-15T17:20:46.000Z",categories:["utils","Number"],tags:[null]},excerpt:"",headers:[],content:`---
title: randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Number
tags: 
  - 
---
# \`randomNumber\`\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570

\`\`\`js
randomNumber(min, max)
\`\`\`

**\u53C2\u6570**

-   \`min\` \u6307\u5B9A\u8303\u56F4\u6700\u5C0F\u503C
-   \`max\` \u6307\u5B9A\u8303\u56F4\u6700\u5927\u503C

**\u4F8B\u5B50**

\`\`\`js
randomNumber(0, 10)
// => 7
// => 2
\`\`\`

**\u6E90\u7801**

\`\`\`js
const randomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min
\`\`\``,contentRendered:`<h1 id="randomnumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570" tabindex="-1"><a class="header-anchor" href="#randomnumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570" aria-hidden="true">#</a> <code v-pre>randomNumber</code>\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">randomNumber</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> max<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>min</code> \u6307\u5B9A\u8303\u56F4\u6700\u5C0F\u503C</li>
<li><code v-pre>max</code> \u6307\u5B9A\u8303\u56F4\u6700\u5927\u503C</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">randomNumber</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// => 7</span>
<span class="token comment">// => 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">randomNumber</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">min <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">10</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> min
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html",pathLocale:"/",permalink:null,routeMeta:{title:"randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570"},sfcBlocks:[],slug:"randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.md",filePathRelative:"utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html.vue",componentFilePathRelative:"pages/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html.vue",componentFileChunkName:"v-1cf95226",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html.js",dataFilePathRelative:"pages/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html.js",dataFileChunkName:"v-1cf95226",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html",htmlFilePathRelative:"utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html"},{data:{key:"v-f61ebce8",path:"/utils/Number/sum%E6%95%B0%E7%BB%84%E4%B8%AD%E5%80%BC%E6%80%BB%E5%92%8C.html",title:"sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C",lang:"zh-CN",frontmatter:{title:"sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C",date:"2022-06-15T17:20:46.000Z",categories:["utils","Number"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.md"},key:"v-f61ebce8",path:"/utils/Number/sum%E6%95%B0%E7%BB%84%E4%B8%AD%E5%80%BC%E6%80%BB%E5%92%8C.html",title:"sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C",lang:"zh-CN",frontmatter:{title:"sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C",date:"2022-06-15T17:20:46.000Z",categories:["utils","Number"],tags:[null]},excerpt:"",headers:[],content:`---
title: sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Number
tags: 
  - 
---
# \`accum\`\u6570\u7EC4\u4E2D\u503C\u603B\u548C

\`\`\`js
accum(value1, value2, value3)
\`\`\`

**\u53C2\u6570**

-   \`value1 value2 value3\`\u8981\u8FED\u4EE3\u7684\u6570\u5B57

**\u4F8B\u5B50**

\`\`\`js
accum(1, 2, 3, 4)
accum(...[1, 2, 3, 4])
// => 10
\`\`\`

**\u6E90\u7801**

\`\`\`js
const accum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0)
\`\`\``,contentRendered:`<h1 id="accum\u6570\u7EC4\u4E2D\u503C\u603B\u548C" tabindex="-1"><a class="header-anchor" href="#accum\u6570\u7EC4\u4E2D\u503C\u603B\u548C" aria-hidden="true">#</a> <code v-pre>accum</code>\u6570\u7EC4\u4E2D\u503C\u603B\u548C</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">accum</span><span class="token punctuation">(</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span> value3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code v-pre>value1 value2 value3</code>\u8981\u8FED\u4EE3\u7684\u6570\u5B57</li>
</ul>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">accum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token function">accum</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// => 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">accum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=></span> acc <span class="token operator">+</span> val<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html",pathLocale:"/",permalink:null,routeMeta:{title:"sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C"},sfcBlocks:[],slug:"sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.md",filePathRelative:"utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html.vue",componentFilePathRelative:"pages/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html.vue",componentFileChunkName:"v-f61ebce8",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html.js",dataFilePathRelative:"pages/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html.js",dataFileChunkName:"v-f61ebce8",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html",htmlFilePathRelative:"utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html"},{data:{key:"v-0b42a652",path:"/utils/String/padEnd%E5%A1%AB%E5%85%85%E5%8F%B3%E4%BE%A7%E5%AD%97%E7%AC%A6.html",title:"padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26",lang:"zh-CN",frontmatter:{title:"padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26",date:"2022-06-15T17:20:46.000Z",categories:["utils","String"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.md"},key:"v-0b42a652",path:"/utils/String/padEnd%E5%A1%AB%E5%85%85%E5%8F%B3%E4%BE%A7%E5%AD%97%E7%AC%A6.html",title:"padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26",lang:"zh-CN",frontmatter:{title:"padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26",date:"2022-06-15T17:20:46.000Z",categories:["utils","String"],tags:[null]},excerpt:"",headers:[],content:`---
title: padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26
date: 2022-06-15 17:20:46
categories: 
  - utils
  - String
tags: 
  - 
---
# padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26

\u5982\u679Cstring\u5B57\u7B26\u4E32\u957F\u5EA6\u5C0F\u4E8E length \u5219\u5728\u53F3\u4FA7\u586B\u5145\u5B57\u7B26\u3002 \u5982\u679C\u8D85\u51FAlength\u957F\u5EA6\u5219\u622A\u65AD\u8D85\u51FA\u7684\u90E8\u5206\u3002

\`\`\`js
padEnd(str, n = 0, maskChar = " ")
\`\`\`

**\u53C2\u6570**

1. \`[str='']\`: \u8981\u586B\u5145\u7684\u5B57\u7B26\u4E32\u3002
2. \`[n=0]\`: \u586B\u5145\u7684\u957F\u5EA6\u3002
3. \`[maskChar=' ']\`: \u586B\u5145\u5B57\u7B26\u3002

**\u8FD4\u56DE**
\u8FD4\u56DE\u586B\u5145\u540E\u7684\u5B57\u7B26\u4E32\u3002

**\u4F8B\u5B50**

\`\`\`js
padEnd('abc', 6);
// => 'abc   '
 
padEnd('abc', 6, '*');
// => 'abc***'
 
padEnd('abc', 3);
// => 'abc'
\`\`\`

**\u6E90\u7801**

\`\`\`js
const padEnd = (str, n = 0, maskChar = " ") => String(str).slice(0, n).padEnd(n, maskChar)
\`\`\`
`,contentRendered:`<h1 id="padend\u586B\u5145\u53F3\u4FA7\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#padend\u586B\u5145\u53F3\u4FA7\u5B57\u7B26" aria-hidden="true">#</a> padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26</h1>
<p>\u5982\u679Cstring\u5B57\u7B26\u4E32\u957F\u5EA6\u5C0F\u4E8E length \u5219\u5728\u53F3\u4FA7\u586B\u5145\u5B57\u7B26\u3002 \u5982\u679C\u8D85\u51FAlength\u957F\u5EA6\u5219\u622A\u65AD\u8D85\u51FA\u7684\u90E8\u5206\u3002</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">padEnd</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> maskChar <span class="token operator">=</span> <span class="token string">" "</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ol>
<li><code v-pre>[str='']</code>: \u8981\u586B\u5145\u7684\u5B57\u7B26\u4E32\u3002</li>
<li><code v-pre>[n=0]</code>: \u586B\u5145\u7684\u957F\u5EA6\u3002</li>
<li><code v-pre>[maskChar=' ']</code>: \u586B\u5145\u5B57\u7B26\u3002</li>
</ol>
<p><strong>\u8FD4\u56DE</strong>
\u8FD4\u56DE\u586B\u5145\u540E\u7684\u5B57\u7B26\u4E32\u3002</p>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => 'abc   '</span>
 
<span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => 'abc***'</span>
 
<span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => 'abc'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> padEnd <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> maskChar <span class="token operator">=</span> <span class="token string">" "</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">String</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> maskChar<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html",pathLocale:"/",permalink:null,routeMeta:{title:"padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26"},sfcBlocks:[],slug:"padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.md",filePathRelative:"utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html.vue",componentFilePathRelative:"pages/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html.vue",componentFileChunkName:"v-0b42a652",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html.js",dataFilePathRelative:"pages/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html.js",dataFileChunkName:"v-0b42a652",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html",htmlFilePathRelative:"utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html"},{data:{key:"v-3ddd3670",path:"/utils/String/padStart%E5%A1%AB%E5%85%85%E5%B7%A6%E4%BE%A7%E5%AD%97%E7%AC%A6.html",title:"padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26",lang:"zh-CN",frontmatter:{title:"padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26",date:"2022-06-15T17:20:46.000Z",categories:["utils","String"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.md"},key:"v-3ddd3670",path:"/utils/String/padStart%E5%A1%AB%E5%85%85%E5%B7%A6%E4%BE%A7%E5%AD%97%E7%AC%A6.html",title:"padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26",lang:"zh-CN",frontmatter:{title:"padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26",date:"2022-06-15T17:20:46.000Z",categories:["utils","String"],tags:[null]},excerpt:"",headers:[],content:`---
title: padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26
date: 2022-06-15 17:20:46
categories: 
  - utils
  - String
tags: 
  - 
---
# padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26

\u5982\u679C\`string\`\u5B57\u7B26\u4E32\u957F\u5EA6\u5C0F\u4E8E \`length\` \u5219\u5728\u5DE6\u4FA7\u586B\u5145\u5B57\u7B26\u3002 \u5982\u679C\u8D85\u51FA\`length\`\u957F\u5EA6\u5219\u622A\u65AD\u8D85\u51FA\u7684\u90E8\u5206\u3002

\`\`\`js
padStart(str, n = 0, maskChar = " ")
\`\`\`

**\u53C2\u6570**
1. \`[str='']\`: \u8981\u586B\u5145\u7684\u5B57\u7B26\u4E32\u3002
2. \`[n=0]\`: \u586B\u5145\u7684\u957F\u5EA6\u3002
3. \`[maskChar=' ']\`: \u586B\u5145\u5B57\u7B26\u3002

**\u8FD4\u56DE**
\u8FD4\u56DE\u586B\u5145\u540E\u7684\u5B57\u7B26\u4E32\u3002

**\u4F8B\u5B50**

\`\`\`js
padStart('abc', 6);
// => '   abc'
 
padStart('abc', 6, '*');
// => '***abc'
 
padStart('abc', 3);
// => 'abc'
\`\`\`

**\u6E90\u7801**

\`\`\`js
const padStart = (str, n = 0, maskChar = ' ') => String(str).slice(0, n).padStart(n, maskChar)
\`\`\``,contentRendered:`<h1 id="padstart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#padstart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26" aria-hidden="true">#</a> padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26</h1>
<p>\u5982\u679C<code v-pre>string</code>\u5B57\u7B26\u4E32\u957F\u5EA6\u5C0F\u4E8E <code v-pre>length</code> \u5219\u5728\u5DE6\u4FA7\u586B\u5145\u5B57\u7B26\u3002 \u5982\u679C\u8D85\u51FA<code v-pre>length</code>\u957F\u5EA6\u5219\u622A\u65AD\u8D85\u51FA\u7684\u90E8\u5206\u3002</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">padStart</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> maskChar <span class="token operator">=</span> <span class="token string">" "</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53C2\u6570</strong></p>
<ol>
<li><code v-pre>[str='']</code>: \u8981\u586B\u5145\u7684\u5B57\u7B26\u4E32\u3002</li>
<li><code v-pre>[n=0]</code>: \u586B\u5145\u7684\u957F\u5EA6\u3002</li>
<li><code v-pre>[maskChar=' ']</code>: \u586B\u5145\u5B57\u7B26\u3002</li>
</ol>
<p><strong>\u8FD4\u56DE</strong>
\u8FD4\u56DE\u586B\u5145\u540E\u7684\u5B57\u7B26\u4E32\u3002</p>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => '   abc'</span>
 
<span class="token function">padStart</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => '***abc'</span>
 
<span class="token function">padStart</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => 'abc'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> padStart <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> maskChar <span class="token operator">=</span> <span class="token string">' '</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">String</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> maskChar<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html",pathLocale:"/",permalink:null,routeMeta:{title:"padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26"},sfcBlocks:[],slug:"padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.md",filePathRelative:"utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html.vue",componentFilePathRelative:"pages/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html.vue",componentFileChunkName:"v-3ddd3670",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html.js",dataFilePathRelative:"pages/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html.js",dataFileChunkName:"v-3ddd3670",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html",htmlFilePathRelative:"utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html"},{data:{key:"v-073e1400",path:"/utils/String/thousands%E6%AF%8F%E9%9A%94%E4%B8%89%E4%BD%8D%E6%95%B0%E5%AD%97%E6%B7%BB%E5%8A%A0%E9%80%97%E5%8F%B7.html",title:"thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7",lang:"zh-CN",frontmatter:{title:"thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7",date:"2022-06-15T17:20:46.000Z",categories:["utils","String"],tags:[null]},excerpt:"",headers:[],git:{updatedTime:1655436485e3},filePathRelative:"utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.md"},key:"v-073e1400",path:"/utils/String/thousands%E6%AF%8F%E9%9A%94%E4%B8%89%E4%BD%8D%E6%95%B0%E5%AD%97%E6%B7%BB%E5%8A%A0%E9%80%97%E5%8F%B7.html",title:"thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7",lang:"zh-CN",frontmatter:{title:"thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7",date:"2022-06-15T17:20:46.000Z",categories:["utils","String"],tags:[null]},excerpt:"",headers:[],content:`---
title: thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7
date: 2022-06-15 17:20:46
categories: 
  - utils
  - String
tags: 
  - 
---
# \`thousands\`\u6570\u5B57\u6BCF\u9694\u4E09\u4F4D\u6570\u52A0\u5206\u53F7

\`\`\`js
thousands(number, chars=',')
\`\`\`

**\u8FD4\u56DE**
\u8FD4\u56DE\u586B\u5145\u540E\u7684\u5B57\u7B26\u4E32\u3002

**\u53C2\u6570**

1. \`number\` \u6570\u5B57\u6216\u8005\u6D6E\u70B9\u6570
2. \`chars\` \u586B\u5145\u5B57\u7B26

**\u4F8B\u5B50**

\`\`\`js
thousands(12255552323)
// => 12,255,552,323

thousands(12255552323, '\u3001')
// => 12\u3001255\u3001552\u3001323
\`\`\`

**\u6E90\u7801**

\`\`\`js
const thousands = (num, chars=',') => String(num).replace(String(num).indexOf('.') > -1 ? /(\\d)(?=(\\d{3})+\\.)/g : /(\\d)(?=(\\d{3})+$)/g, \`$1\${chars}\`)
\`\`\``,contentRendered:`<h1 id="thousands\u6570\u5B57\u6BCF\u9694\u4E09\u4F4D\u6570\u52A0\u5206\u53F7" tabindex="-1"><a class="header-anchor" href="#thousands\u6570\u5B57\u6BCF\u9694\u4E09\u4F4D\u6570\u52A0\u5206\u53F7" aria-hidden="true">#</a> <code v-pre>thousands</code>\u6570\u5B57\u6BCF\u9694\u4E09\u4F4D\u6570\u52A0\u5206\u53F7</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">thousands</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span> chars<span class="token operator">=</span><span class="token string">','</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u8FD4\u56DE</strong>
\u8FD4\u56DE\u586B\u5145\u540E\u7684\u5B57\u7B26\u4E32\u3002</p>
<p><strong>\u53C2\u6570</strong></p>
<ol>
<li><code v-pre>number</code> \u6570\u5B57\u6216\u8005\u6D6E\u70B9\u6570</li>
<li><code v-pre>chars</code> \u586B\u5145\u5B57\u7B26</li>
</ol>
<p><strong>\u4F8B\u5B50</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">thousands</span><span class="token punctuation">(</span><span class="token number">12255552323</span><span class="token punctuation">)</span>
<span class="token comment">// => 12,255,552,323</span>

<span class="token function">thousands</span><span class="token punctuation">(</span><span class="token number">12255552323</span><span class="token punctuation">,</span> <span class="token string">'\u3001'</span><span class="token punctuation">)</span>
<span class="token comment">// => 12\u3001255\u3001552\u3001323</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> thousands <span class="token operator">=</span> <span class="token punctuation">(</span>num<span class="token punctuation">,</span> chars<span class="token operator">=</span><span class="token string">','</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">String</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)(?=(\\d{3})+\\.)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span> <span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)(?=(\\d{3})+$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$1</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chars<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,date:"2022-06-15",deps:[],links:[],pathInferred:"/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html",pathLocale:"/",permalink:null,routeMeta:{title:"thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7"},sfcBlocks:[],slug:"thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7",filePath:"/home/runner/work/vuepress-next/vuepress-next/docs/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.md",filePathRelative:"utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.md",componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html.vue",componentFilePathRelative:"pages/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html.vue",componentFileChunkName:"v-073e1400",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html.js",dataFilePathRelative:"pages/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html.js",dataFileChunkName:"v-073e1400",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html",htmlFilePathRelative:"utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html"},{data:{key:"v-3706649a",path:"/404.html",title:"",lang:"zh-CN",frontmatter:{layout:"404"},excerpt:"",headers:[],git:{},filePathRelative:null},key:"v-3706649a",path:"/404.html",title:"",lang:"zh-CN",frontmatter:{layout:"404"},excerpt:"",headers:[],content:"",contentRendered:"",date:"0000-00-00",deps:[],links:[],pathInferred:null,pathLocale:"/",permalink:null,routeMeta:{title:""},sfcBlocks:[],slug:"",filePath:null,filePathRelative:null,componentFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/404.html.vue",componentFilePathRelative:"pages/404.html.vue",componentFileChunkName:"v-3706649a",dataFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/.temp/pages/404.html.js",dataFilePathRelative:"pages/404.html.js",dataFileChunkName:"v-3706649a",htmlFilePath:"/home/runner/work/vuepress-next/vuepress-next/docs/.vuepress/dist/404.html",htmlFilePathRelative:"404.html"}];var qm=$n({enhance({app:n,router:s,siteData:a}){n.component("AIcon",Nm),n.component("NavCard",Mm)},extendsPage:n=>{},setup(){In(()=>{});const n=en(()=>wm(zm)),s=en(()=>Am(n.value)),a=en(()=>xm(n.value)),e=en(()=>Cm(a.value)),t=en(()=>Sm(e.value));Yn("$filterPosts",As(n)),Yn("$sortPosts",As(s)),Yn("$sortPostsByDate",As(a)),Yn("$groupPosts",As(e)),Yn("$categoriesAndTags",As(t))}});const Vm=n=>{if(window.dataLayer&&window.gtag)return;const s=document.createElement("script");s.src=`https://www.googletagmanager.com/gtag/js?id=${n}`,s.async=!0,document.head.appendChild(s),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config",n)},Hm="G-7Q9JVXXQBW";var Km=$n({enhance(){Vm(Hm)}});const Um=(n,s)=>s.some(a=>{if(Bn(a))return a===n.key;const{key:e,ctrl:t=!1,shift:o=!1,alt:p=!1}=a;return e===n.key&&t===n.ctrlKey&&o===n.shiftKey&&p===n.altKey}),Zm=/[^\x00-\x7F]/,Ym=n=>n.split(/\s+/g).map(s=>s.trim()).filter(s=>!!s),ap=n=>n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),ep=(n,s)=>{const a=s.join(" "),e=Ym(n);if(Zm.test(n))return e.some(p=>a.toLowerCase().indexOf(p)>-1);const t=n.endsWith(" ");return new RegExp(e.map((p,l)=>e.length===l+1&&!t?`(?=.*\\b${ap(p)})`:`(?=.*\\b${ap(p)}\\b)`).join("")+".+","gi").test(a)},Wm=({input:n,hotKeys:s})=>{if(s.value.length===0)return;const a=e=>{!n.value||Um(e,s.value)&&!n.value.contains(e.target)&&(e.preventDefault(),n.value.focus())};In(()=>{document.addEventListener("keydown",a)}),Ia(()=>{document.removeEventListener("keydown",a)})},Jm=[{title:"\u65F6\u95F4\u7EBF",headers:[],path:"/archives/",pathLocale:"/",extraFields:[]},{title:"\u5206\u7C7B",headers:[],path:"/categories/",pathLocale:"/",extraFields:[]},{title:"\u6807\u7B7E",headers:[],path:"/tags/",pathLocale:"/",extraFields:[]},{title:"\u5173\u4E8E - \u6211",headers:[{level:2,title:"\u8BFB\u8005\u7684\u95EE\u9898\u4E0E\u56DE\u7B54",slug:"\u8BFB\u8005\u7684\u95EE\u9898\u4E0E\u56DE\u7B54",children:[{level:3,title:"QA - \u505A\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877\u662F\u4EC0\u4E48",slug:"qa-\u505A\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877\u662F\u4EC0\u4E48",children:[]},{level:3,title:"QA - \u662F\u5426\u53EF\u4EE5\u6709\u673A\u4F1A\u5408\u4F5C",slug:"qa-\u662F\u5426\u53EF\u4EE5\u6709\u673A\u4F1A\u5408\u4F5C",children:[]},{level:3,title:"QA - \u662F\u5426\u53EF\u4EE5\u63D0\u4F9B\u6280\u672F\u652F\u6301",slug:"qa-\u662F\u5426\u53EF\u4EE5\u63D0\u4F9B\u6280\u672F\u652F\u6301",children:[]},{level:3,title:"QA - \u662F\u5426\u8003\u8651\u53D8\u73B0",slug:"qa-\u662F\u5426\u8003\u8651\u53D8\u73B0",children:[]},{level:3,title:"QA - \u7F51\u7AD9\u8FD0\u8425",slug:"qa-\u7F51\u7AD9\u8FD0\u8425",children:[]},{level:3,title:"\u6211\u7684\u4E09\u89C2",slug:"\u6211\u7684\u4E09\u89C2",children:[]},{level:3,title:"\u516C\u4F17\u53F7",slug:"\u516C\u4F17\u53F7",children:[]},{level:3,title:"\u66F4\u591A",slug:"\u66F4\u591A",children:[]}]}],path:"/about/about.html",pathLocale:"/",extraFields:["\u5173\u4E8E"]},{title:"\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6",headers:[{level:2,title:"\u524D\u8A00",slug:"\u524D\u8A00",children:[{level:3,title:"Form \u8868\u5355",slug:"form-\u8868\u5355",children:[]},{level:3,title:"\u7EC4\u4EF6",slug:"\u7EC4\u4EF6",children:[]}]}],path:"/el-component/01.%E6%89%8B%E5%86%99el-form%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6.html",pathLocale:"/",extraFields:[null]},{title:"Vue Toast\u7EC4\u4EF6\u5F00\u53D1",headers:[],path:"/el-component/02.Vue%20Toast%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",pathLocale:"/",extraFields:[null]},{title:"Vue button\u7EC4\u4EF6\u5F00\u53D1",headers:[],path:"/el-component/04.Vue%20button%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",pathLocale:"/",extraFields:[null]},{title:"Vue icon\u7EC4\u4EF6\u5F00\u53D1",headers:[],path:"/el-component/05.Vue%20icon%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",pathLocale:"/",extraFields:[null]},{title:"Vue input\u7EC4\u4EF6\u5F00\u53D1",headers:[],path:"/el-component/06.Vue%20input%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",pathLocale:"/",extraFields:[null]},{title:"Vue message\u7EC4\u4EF6\u5F00\u53D1",headers:[],path:"/el-component/07.Vue%20message%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",pathLocale:"/",extraFields:[null]},{title:"Vue Popover\u7EC4\u4EF6\u5F00\u53D1",headers:[],path:"/el-component/08.Vue%20Popover%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",pathLocale:"/",extraFields:[null]},{title:"\u5DE5\u5177\u5E93\u6307\u5357",headers:[{level:2,title:"\u2B07\uFE0F \u5B89\u88C5",slug:"\u5B89\u88C5",children:[]},{level:2,title:"\u{1F37B} \u4F7F\u7528",slug:"\u4F7F\u7528",children:[]},{level:2,title:"\u{1F4E6} API \u6587\u6863",slug:"api-\u6587\u6863",children:[{level:3,title:"\u6570\u7EC4",slug:"\u6570\u7EC4",children:[]},{level:3,title:"\u51FD\u6570",slug:"\u51FD\u6570",children:[]},{level:3,title:"\u5B57\u7B26\u4E32",slug:"\u5B57\u7B26\u4E32",children:[]},{level:3,title:"\u6570\u5B57",slug:"\u6570\u5B57",children:[]},{level:3,title:"\u6D4F\u89C8\u5668",slug:"\u6D4F\u89C8\u5668",children:[]},{level:3,title:"\u73AF\u5883",slug:"\u73AF\u5883",children:[]}]}],path:"/guide/",pathLocale:"/",extraFields:[null]},{title:"\u5F71\u89C6\u7F51\u7AD9\u63A8\u8350",headers:[{level:3,title:"\u5F71\u89C6\u7F51\u7AD9",slug:"\u5F71\u89C6\u7F51\u7AD9",children:[]},{level:2,title:"\u7535\u5F71\u63A8\u8350",slug:"\u7535\u5F71\u63A8\u8350",children:[]},{level:2,title:"APP \u89C2\u770B",slug:"app-\u89C2\u770B",children:[]},{level:2,title:"BT \u4E0B\u8F7D",slug:"bt-\u4E0B\u8F7D",children:[]},{level:2,title:"\u5931\u6548\u7F51\u7AD9",slug:"\u5931\u6548\u7F51\u7AD9",children:[]}],path:"/movies/",pathLocale:"/",extraFields:["\u5F71\u89C6"]},{title:"\u5BFC\u822A\u9875",headers:[{level:2,title:"\u641C\u7D22\u5F15\u64CE",slug:"\u641C\u7D22\u5F15\u64CE",children:[]},{level:2,title:"\u4EE3\u7801\u6258\u7BA1",slug:"\u4EE3\u7801\u6258\u7BA1",children:[]},{level:2,title:"\u524D\u7AEF\u5F00\u53D1",slug:"\u524D\u7AEF\u5F00\u53D1",children:[]},{level:2,title:"\u540E\u7AEF\u5F00\u53D1",slug:"\u540E\u7AEF\u5F00\u53D1",children:[]},{level:2,title:"\u6587\u6863\u5DE5\u5177",slug:"\u6587\u6863\u5DE5\u5177",children:[]},{level:2,title:"\u70ED\u95E8\u793E\u533A",slug:"\u70ED\u95E8\u793E\u533A",children:[]},{level:2,title:"\u5DE5\u5177\u5408\u96C6",slug:"\u5DE5\u5177\u5408\u96C6",children:[]},{level:2,title:"\u6587\u6863\u6559\u7A0B",slug:"\u6587\u6863\u6559\u7A0B",children:[]},{level:2,title:"\u52A8\u6001\u56FE\u8868",slug:"\u52A8\u6001\u56FE\u8868",children:[]},{level:2,title:"\u56FE\u7247\u56FE\u6807",slug:"\u56FE\u7247\u56FE\u6807",children:[]},{level:2,title:"CSS\u6837\u5F0F",slug:"css\u6837\u5F0F",children:[]},{level:2,title:"\u7F51\u7AD9\u5206\u6790",slug:"\u7F51\u7AD9\u5206\u6790",children:[]},{level:2,title:"\u5176\u5B83\u8D44\u6E90",slug:"\u5176\u5B83\u8D44\u6E90",children:[]}],path:"/nav-page/",pathLocale:"/",extraFields:["\u7F16\u7A0B\u5BFC\u822A"]},{title:"\u9009\u9879\u5361",headers:[],path:"/test-demo/tabs/",pathLocale:"/",extraFields:[null]},{title:"chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4",headers:[],path:"/utils/Array/chunk%E8%BD%AC%E6%8D%A2%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84.html",pathLocale:"/",extraFields:[null]},{title:"clone\u514B\u9686\u6570\u7EC4",headers:[],path:"/utils/Array/clone%E5%85%8B%E9%9A%86%E6%95%B0%E7%BB%84.html",pathLocale:"/",extraFields:[null]},{title:"compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C",headers:[],path:"/utils/Array/compact%E5%8E%BB%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%97%A0%E6%95%88%E5%80%BC.html",pathLocale:"/",extraFields:[null]},{title:"difference\u6570\u7EC4\u5DEE\u96C6",headers:[],path:"/utils/Array/difference%E6%95%B0%E7%BB%84%E5%B7%AE%E9%9B%86.html",pathLocale:"/",extraFields:[null]},{title:"flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4",headers:[],path:"/utils/Array/flattenDeep%E6%8C%87%E5%AE%9A%E5%B1%82%E7%BA%A7%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.html",pathLocale:"/",extraFields:[null]},{title:"flatten\u6241\u5E73\u5316\u6570\u7EC4",headers:[],path:"/utils/Array/flatten%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.html",pathLocale:"/",extraFields:[null]},{title:"intersection\u6570\u7EC4\u4EA4\u96C6",headers:[],path:"/utils/Array/intersection%E6%95%B0%E7%BB%84%E4%BA%A4%E9%9B%86.html",pathLocale:"/",extraFields:[null]},{title:"isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49",headers:[],path:"/utils/Array/isArrayEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.html",pathLocale:"/",extraFields:[null]},{title:"isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49",headers:[],path:"/utils/Array/isEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E5%80%BC%E7%9B%B8%E7%AD%89.html",pathLocale:"/",extraFields:[null]},{title:"max\u6570\u7EC4\u4E2D\u6700\u5927\u503C",headers:[],path:"/utils/Array/max%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.html",pathLocale:"/",extraFields:[null]},{title:"min\u6570\u7EC4\u4E2D\u6700\u5927\u503C",headers:[],path:"/utils/Array/min%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.html",pathLocale:"/",extraFields:[null]},{title:"shuffle\u6253\u4E71\u6570\u7EC4",headers:[],path:"/utils/Array/shuffle%E6%89%93%E4%B9%B1%E6%95%B0%E7%BB%84.html",pathLocale:"/",extraFields:[null]},{title:"sortAsc\u6570\u7EC4\u5347\u5E8F",headers:[],path:"/utils/Array/sortAsc%E6%95%B0%E7%BB%84%E5%8D%87%E5%BA%8F.html",pathLocale:"/",extraFields:[null]},{title:"sortDesc\u6570\u7EC4\u964D\u5E8F",headers:[],path:"/utils/Array/sortDesc%E6%95%B0%E7%BB%84%E9%99%8D%E5%BA%8F.html",pathLocale:"/",extraFields:[null]},{title:"takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20",headers:[],path:"/utils/Array/takeLast%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E6%9C%80%E5%90%8E%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.html",pathLocale:"/",extraFields:[null]},{title:"take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20",headers:[],path:"/utils/Array/take%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E5%BC%80%E5%A7%8B%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.html",pathLocale:"/",extraFields:[null]},{title:"treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E",headers:[],path:"/utils/Array/treeData%E7%94%9F%E6%88%90%E6%A0%91%E7%BB%93%E6%9E%84%E6%95%B0%E6%8D%AE.html",pathLocale:"/",extraFields:[null]},{title:"uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",headers:[],path:"/utils/Array/uniqueBy%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%8E%BB%E9%87%8D.html",pathLocale:"/",extraFields:[null]},{title:"unique\u6570\u7EC4\u53BB\u91CD",headers:[],path:"/utils/Array/unique%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D.html",pathLocale:"/",extraFields:[null]},{title:"calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97",headers:[],path:"/utils/Function/calcFn%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E8%BF%90%E7%AE%97.html",pathLocale:"/",extraFields:[null]},{title:"debounce\u51FD\u6570\u9632\u6296",headers:[],path:"/utils/Function/debounce%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96.html",pathLocale:"/",extraFields:[null]},{title:"throttle\u51FD\u6570\u8282\u6D41",headers:[],path:"/utils/Function/throttle%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81.html",pathLocale:"/",extraFields:[null]},{title:"typeFn\u7C7B\u578B\u5224\u65AD",headers:[],path:"/utils/Function/typeFn%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD.html",pathLocale:"/",extraFields:[null]},{title:"aboutEqual\u7EA6\u7B49\u4E8E",headers:[],path:"/utils/Number/aboutEqual%E7%BA%A6%E7%AD%89%E4%BA%8E.html",pathLocale:"/",extraFields:[null]},{title:"averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49",headers:[],path:"/utils/Number/averageBy%E6%A3%80%E6%9F%A5%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.html",pathLocale:"/",extraFields:[null]},{title:"average\u6C42\u5E73\u5747\u503C",headers:[],path:"/utils/Number/average%E6%B1%82%E5%B9%B3%E5%9D%87%E5%80%BC.html",pathLocale:"/",extraFields:[null]},{title:"getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB",headers:[],path:"/utils/Number/getLineSize%E8%AE%A1%E7%AE%97%E4%B8%A4%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E8%B7%9D%E7%A6%BB.html",pathLocale:"/",extraFields:[null]},{title:"randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570",headers:[],path:"/utils/Number/randomNumber%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B4%E6%95%B0.html",pathLocale:"/",extraFields:[null]},{title:"sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C",headers:[],path:"/utils/Number/sum%E6%95%B0%E7%BB%84%E4%B8%AD%E5%80%BC%E6%80%BB%E5%92%8C.html",pathLocale:"/",extraFields:[null]},{title:"padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26",headers:[],path:"/utils/String/padEnd%E5%A1%AB%E5%85%85%E5%8F%B3%E4%BE%A7%E5%AD%97%E7%AC%A6.html",pathLocale:"/",extraFields:[null]},{title:"padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26",headers:[],path:"/utils/String/padStart%E5%A1%AB%E5%85%85%E5%B7%A6%E4%BE%A7%E5%AD%97%E7%AC%A6.html",pathLocale:"/",extraFields:[null]},{title:"thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7",headers:[],path:"/utils/String/thousands%E6%AF%8F%E9%9A%94%E4%B8%89%E4%BD%8D%E6%95%B0%E5%AD%97%E6%B7%BB%E5%8A%A0%E9%80%97%E5%8F%B7.html",pathLocale:"/",extraFields:[null]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]}],Xl=rn(Jm),Qm=()=>Xl;xe.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=n=>{Xl.value=n});const Gm=({searchIndex:n,routeLocale:s,query:a,maxSuggestions:e})=>{const t=en(()=>n.value.filter(o=>o.pathLocale===s.value));return en(()=>{const o=a.value.trim().toLowerCase();if(!o)return[];const p=[],l=(c,r)=>{ep(o,[r.title])&&p.push({link:`${c.path}#${r.slug}`,title:c.title,header:r.title});for(const i of r.children){if(p.length>=e.value)return;l(c,i)}};for(const c of t.value){if(p.length>=e.value)break;if(ep(o,[c.title,...c.extraFields])){p.push({link:c.path,title:c.title});continue}for(const r of c.headers){if(p.length>=e.value)break;l(c,r)}}return p})},Xm=n=>{const s=rn(0);return{focusIndex:s,focusNext:()=>{s.value<n.value.length-1?s.value+=1:s.value=0},focusPrev:()=>{s.value>0?s.value-=1:s.value=n.value.length-1}}},nk=_n({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(n){const{locales:s,hotKeys:a,maxSuggestions:e}=Xc(n),t=we(),o=Dt(),p=Qm(),l=rn(null),c=rn(!1),r=rn(""),i=en(()=>{var x;return(x=s.value[o.value])!=null?x:{}}),d=Gm({searchIndex:p,routeLocale:o,query:r,maxSuggestions:e}),{focusIndex:k,focusNext:u,focusPrev:b}=Xm(d);Wm({input:l,hotKeys:a});const B=en(()=>c.value&&!!d.value.length),A=()=>{!B.value||b()},h=()=>{!B.value||u()},y=x=>{if(!B.value)return;const D=d.value[x];!D||t.push(D.link).then(()=>{r.value="",k.value=0})};return()=>H("form",{class:"search-box",role:"search"},[H("input",{ref:l,type:"search",placeholder:i.value.placeholder,autocomplete:"off",spellcheck:!1,value:r.value,onFocus:()=>c.value=!0,onBlur:()=>c.value=!1,onInput:x=>r.value=x.target.value,onKeydown:x=>{switch(x.key){case"ArrowUp":{A();break}case"ArrowDown":{h();break}case"Enter":{x.preventDefault(),y(k.value);break}}}}),B.value&&H("ul",{class:"suggestions",onMouseleave:()=>k.value=-1},d.value.map(({link:x,title:D,header:q},O)=>H("li",{class:["suggestion",{focus:k.value===O}],onMouseenter:()=>k.value=O,onMousedown:()=>y(O)},H("a",{href:x,onClick:_=>_.preventDefault()},[H("span",{class:"page-title"},D),q&&H("span",{class:"page-header"},`> ${q}`)]))))])}});const sk={},ak=["s","/"],ek=20;var tk=$n({enhance({app:n}){n.component("SearchBox",s=>H(nk,{locales:sk,hotKeys:ak,maxSuggestions:ek,...s}))}});var ok={};const Ga={provider:"Twikoo",envId:"https://twikoo-qqlcx5.vercel.app/"},tp=Boolean(Ga.envId);var pk=_n({name:"TwikooComment",setup(){const n=ye(),s=Cl();let a;const e=en(()=>{if(!tp)return!1;const t=Ga.comment!==!1,o=n.value.comment;return Boolean(o)||t!==!1&&o!==!1});return In(()=>{tp&&(()=>{const t=a=new Date().getTime();Promise.all([N(()=>import("./twikoo.all.min.ed0d969b.js").then(function(o){return o.t}),["assets/twikoo.all.min.ed0d969b.js","assets/_commonjsHelpers.b8add541.js"]),new Promise(o=>{setTimeout(o,Ga.delay)})]).then(([{init:o}])=>{t===a&&o({lang:s.value==="zh-CN"?"zh-CN":"en",...Ga,el:"#twikoo-comment"})})})()}),()=>H("div",{class:"twikoo-wrapper",style:{display:e.value?"block":"none"}},H("div",{id:"twikoo-comment"}))}});const lk={provider:"Twikoo",envId:"https://twikoo-qqlcx5.vercel.app/"};var ck=$n({enhance:({app:n})=>{const s=_n({name:"CommentService",props:{darkmode:Boolean},setup(a){const e=ye(),t=en(()=>e.value.comment||lk!==!1&&e.value.comment!==!1);return()=>H(pk,{darkmode:a.darkmode,style:{display:t.value?"block":"none"}})}});n.component("CommentService",s)}});const nc=({name:n="",color:s="currentColor"},{slots:a})=>{var e;return H("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${n}-icon`],viewBox:"0 0 1024 1024",fill:s,"aria-label":`${n} icon`},(e=a.default)==null?void 0:e.call(a))};nc.displayName="IconBase";const sc=n=>{const s=Dt();return en(()=>n[s.value])};class rk{constructor(){const s="message-container",a=document.getElementById(s);a?this.containerElement=a:(this.containerElement=document.createElement("div"),this.containerElement.id=s,document.body.appendChild(this.containerElement))}pop(s,a=2e3){const e=document.createElement("div");e.className="message move-in",e.innerHTML=s,this.containerElement.appendChild(e),a>0&&setTimeout(()=>{this.close(e)},a)}close(s){s.className=s.className.replace("move-in",""),s.className+="move-out",s.addEventListener("animationend",()=>{s.remove()})}}var Me,ms=function(){var n=1e3,s=6e4,a=36e5,e="millisecond",t="second",o="minute",p="hour",l="day",c="week",r="month",i="quarter",d="year",k="date",u="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(I,f,E){var C=String(I);return!C||C.length>=f?I:""+Array(f+1-C.length).join(E)+I},y={s:h,z:function(I){var f=-I.utcOffset(),E=Math.abs(f),C=Math.floor(E/60),F=E%60;return(f<=0?"+":"-")+h(C,2,"0")+":"+h(F,2,"0")},m:function I(f,E){if(f.date()<E.date())return-I(E,f);var C=12*(E.year()-f.year())+(E.month()-f.month()),F=f.clone().add(C,r),j=E-F<0,M=f.clone().add(C+(j?-1:1),r);return+(-(C+(E-F)/(j?F-M:M-F))||0)},a:function(I){return I<0?Math.ceil(I)||0:Math.floor(I)},p:function(I){return{M:r,y:d,w:c,d:l,D:k,h:p,m:o,s:t,ms:e,Q:i}[I]||String(I||"").toLowerCase().replace(/s$/,"")},u:function(I){return I===void 0}},x="en",D={};D[x]=A;var q=function(I){return I instanceof J},O=function I(f,E,C){var F;if(!f)return x;if(typeof f=="string"){var j=f.toLowerCase();D[j]&&(F=j),E&&(D[j]=E,F=j);var M=f.split("-");if(!F&&M.length>1)return I(M[0])}else{var Y=f.name;D[Y]=f,F=Y}return!C&&F&&(x=F),F||!C&&x},_=function(I,f){if(q(I))return I.clone();var E=typeof f=="object"?f:{};return E.date=I,E.args=arguments,new J(E)},g=y;g.l=O,g.i=q,g.w=function(I,f){return _(I,{locale:f.$L,utc:f.$u,x:f.$x,$offset:f.$offset})};var J=function(){function I(E){this.$L=O(E.locale,null,!0),this.parse(E)}var f=I.prototype;return f.parse=function(E){this.$d=function(C){var F=C.date,j=C.utc;if(F===null)return new Date(NaN);if(g.u(F))return new Date;if(F instanceof Date)return new Date(F);if(typeof F=="string"&&!/Z$/i.test(F)){var M=F.match(b);if(M){var Y=M[2]-1||0,pn=(M[7]||"0").substring(0,3);return j?new Date(Date.UTC(M[1],Y,M[3]||1,M[4]||0,M[5]||0,M[6]||0,pn)):new Date(M[1],Y,M[3]||1,M[4]||0,M[5]||0,M[6]||0,pn)}}return new Date(F)}(E),this.$x=E.x||{},this.init()},f.init=function(){var E=this.$d;this.$y=E.getFullYear(),this.$M=E.getMonth(),this.$D=E.getDate(),this.$W=E.getDay(),this.$H=E.getHours(),this.$m=E.getMinutes(),this.$s=E.getSeconds(),this.$ms=E.getMilliseconds()},f.$utils=function(){return g},f.isValid=function(){return this.$d.toString()!==u},f.isSame=function(E,C){var F=_(E);return this.startOf(C)<=F&&F<=this.endOf(C)},f.isAfter=function(E,C){return _(E)<this.startOf(C)},f.isBefore=function(E,C){return this.endOf(C)<_(E)},f.$g=function(E,C,F){return g.u(E)?this[C]:this.set(F,E)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(E,C){var F=this,j=!!g.u(C)||C,M=g.p(E),Y=function(W,L){var K=g.w(F.$u?Date.UTC(F.$y,L,W):new Date(F.$y,L,W),F);return j?K:K.endOf(l)},pn=function(W,L){return g.w(F.toDate()[W].apply(F.toDate("s"),(j?[0,0,0,0]:[23,59,59,999]).slice(L)),F)},cn=this.$W,gn=this.$M,Cn=this.$D,An="set"+(this.$u?"UTC":"");switch(M){case d:return j?Y(1,0):Y(31,11);case r:return j?Y(1,gn):Y(0,gn+1);case c:var On=this.$locale().weekStart||0,S=(cn<On?cn+7:cn)-On;return Y(j?Cn-S:Cn+(6-S),gn);case l:case k:return pn(An+"Hours",0);case p:return pn(An+"Minutes",1);case o:return pn(An+"Seconds",2);case t:return pn(An+"Milliseconds",3);default:return this.clone()}},f.endOf=function(E){return this.startOf(E,!1)},f.$set=function(E,C){var F,j=g.p(E),M="set"+(this.$u?"UTC":""),Y=(F={},F[l]=M+"Date",F[k]=M+"Date",F[r]=M+"Month",F[d]=M+"FullYear",F[p]=M+"Hours",F[o]=M+"Minutes",F[t]=M+"Seconds",F[e]=M+"Milliseconds",F)[j],pn=j===l?this.$D+(C-this.$W):C;if(j===r||j===d){var cn=this.clone().set(k,1);cn.$d[Y](pn),cn.init(),this.$d=cn.set(k,Math.min(this.$D,cn.daysInMonth())).$d}else Y&&this.$d[Y](pn);return this.init(),this},f.set=function(E,C){return this.clone().$set(E,C)},f.get=function(E){return this[g.p(E)]()},f.add=function(E,C){var F,j=this;E=Number(E);var M=g.p(C),Y=function(gn){var Cn=_(j);return g.w(Cn.date(Cn.date()+Math.round(gn*E)),j)};if(M===r)return this.set(r,this.$M+E);if(M===d)return this.set(d,this.$y+E);if(M===l)return Y(1);if(M===c)return Y(7);var pn=(F={},F[o]=s,F[p]=a,F[t]=n,F)[M]||1,cn=this.$d.getTime()+E*pn;return g.w(cn,this)},f.subtract=function(E,C){return this.add(-1*E,C)},f.format=function(E){var C=this,F=this.$locale();if(!this.isValid())return F.invalidDate||u;var j=E||"YYYY-MM-DDTHH:mm:ssZ",M=g.z(this),Y=this.$H,pn=this.$m,cn=this.$M,gn=F.weekdays,Cn=F.months,An=function(L,K,dn,mn){return L&&(L[K]||L(C,j))||dn[K].slice(0,mn)},On=function(L){return g.s(Y%12||12,L,"0")},S=F.meridiem||function(L,K,dn){var mn=L<12?"AM":"PM";return dn?mn.toLowerCase():mn},W={YY:String(this.$y).slice(-2),YYYY:this.$y,M:cn+1,MM:g.s(cn+1,2,"0"),MMM:An(F.monthsShort,cn,Cn,3),MMMM:An(Cn,cn),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:An(F.weekdaysMin,this.$W,gn,2),ddd:An(F.weekdaysShort,this.$W,gn,3),dddd:gn[this.$W],H:String(Y),HH:g.s(Y,2,"0"),h:On(1),hh:On(2),a:S(Y,pn,!0),A:S(Y,pn,!1),m:String(pn),mm:g.s(pn,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:M};return j.replace(B,function(L,K){return K||W[L]||M.replace(":","")})},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(E,C,F){var j,M=g.p(C),Y=_(E),pn=(Y.utcOffset()-this.utcOffset())*s,cn=this-Y,gn=g.m(this,Y);return gn=(j={},j[d]=gn/12,j[r]=gn,j[i]=gn/3,j[c]=(cn-pn)/6048e5,j[l]=(cn-pn)/864e5,j[p]=cn/a,j[o]=cn/s,j[t]=cn/n,j)[M]||cn,F?gn:g.a(gn)},f.daysInMonth=function(){return this.endOf(r).$D},f.$locale=function(){return D[this.$L]},f.locale=function(E,C){if(!E)return this.$L;var F=this.clone(),j=O(E,C,!0);return j&&(F.$L=j),F},f.clone=function(){return g.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},I}(),Z=J.prototype;return _.prototype=Z,[["$ms",e],["$s",t],["$m",o],["$H",p],["$W",l],["$M",r],["$y",d],["$D",k]].forEach(function(I){Z[I[1]]=function(f){return this.$g(f,I[0],I[1])}}),_.extend=function(I,f){return I.$i||(I(f,J,_),I.$i=!0),_},_.locale=O,_.isDayjs=q,_.unix=function(I){return _(1e3*I)},_.en=D[x],_.Ls=D,_.p={},_}(),ik=(Me={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},function(n,s,a){var e=s.prototype,t=e.format;a.en.formats=Me,e.format=function(o){o===void 0&&(o="YYYY-MM-DDTHH:mm:ssZ");var p=this.$locale().formats,l=function(c,r){return c.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(i,d,k){var u=k&&k.toUpperCase();return d||r[k]||Me[k]||r[u].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(b,B,A){return B||A.slice(1)})})}(o,p===void 0?{}:p);return t.call(this,l)}}),ac=function(n,s,a){var e=s.prototype,t=function(r){var i,d=r.date,k=r.utc,u={};if(!((i=d)instanceof Date)&&!(i instanceof Array)&&i instanceof Object){if(!Object.keys(d).length)return new Date;var b=k?a.utc():a();Object.keys(d).forEach(function(O){var _,g;u[_=O,g=e.$utils().p(_),g==="date"?"day":g]=d[O]});var B=u.day||(u.year||u.month>=0?1:b.date()),A=u.year||b.year(),h=u.month>=0?u.month:u.year||u.day?0:b.month(),y=u.hour||0,x=u.minute||0,D=u.second||0,q=u.millisecond||0;return k?new Date(Date.UTC(A,h,B,y,x,D,q)):new Date(A,h,B,y,x,D,q)}return d},o=e.parse;e.parse=function(r){r.date=t.bind(this)(r),o.bind(this)(r)};var p=e.set,l=e.add,c=function(r,i,d,k){if(k===void 0&&(k=1),i instanceof Object){var u=Object.keys(i),b=this;return u.forEach(function(B){b=r.bind(b)(i[B]*k,B)}),b}return r.bind(this)(i*k,d)};e.set=function(r,i){return i=i===void 0?r:i,c.bind(this)(function(d,k){return p.bind(this)(k,d)},i,r)},e.add=function(r,i){return c.bind(this)(l,r,i)},e.subtract=function(r,i){return c.bind(this)(l,r,i,-1)}},ec=function(){var n={year:0,month:1,day:2,hour:3,minute:4,second:5},s={};return function(a,e,t){var o,p=function(i,d,k){k===void 0&&(k={});var u=new Date(i),b=function(B,A){A===void 0&&(A={});var h=A.timeZoneName||"short",y=B+"|"+h,x=s[y];return x||(x=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:B,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:h}),s[y]=x),x}(d,k);return b.formatToParts(u)},l=function(i,d){for(var k=p(i,d),u=[],b=0;b<k.length;b+=1){var B=k[b],A=B.type,h=B.value,y=n[A];y>=0&&(u[y]=parseInt(h,10))}var x=u[3],D=x===24?0:x,q=u[0]+"-"+u[1]+"-"+u[2]+" "+D+":"+u[4]+":"+u[5]+":000",O=+i;return(t.utc(q).valueOf()-(O-=O%1e3))/6e4},c=e.prototype;c.tz=function(i,d){i===void 0&&(i=o);var k=this.utcOffset(),u=this.toDate(),b=u.toLocaleString("en-US",{timeZone:i}),B=Math.round((u-new Date(b))/1e3/60),A=t(b).$set("millisecond",this.$ms).utcOffset(15*-Math.round(u.getTimezoneOffset()/15)-B,!0);if(d){var h=A.utcOffset();A=A.add(k-h,"minute")}return A.$x.$timezone=i,A},c.offsetName=function(i){var d=this.$x.$timezone||t.tz.guess(),k=p(this.valueOf(),d,{timeZoneName:i}).find(function(u){return u.type.toLowerCase()==="timezonename"});return k&&k.value};var r=c.startOf;c.startOf=function(i,d){if(!this.$x||!this.$x.$timezone)return r.call(this,i,d);var k=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return r.call(k,i,d).tz(this.$x.$timezone,!0)},t.tz=function(i,d,k){var u=k&&d,b=k||d||o,B=l(+t(),b);if(typeof i!="string")return t(i).tz(b);var A=function(D,q,O){var _=D-60*q*1e3,g=l(_,O);if(q===g)return[_,q];var J=l(_-=60*(g-q)*1e3,O);return g===J?[_,g]:[D-60*Math.min(g,J)*1e3,Math.max(g,J)]}(t.utc(i,u).valueOf(),B,b),h=A[0],y=A[1],x=t(h).utcOffset(y);return x.$x.$timezone=b,x},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(i){o=i}}}(),tc=function(){var n="minute",s=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(e,t,o){var p=t.prototype;o.utc=function(u){return new t({date:u,utc:!0,args:arguments})},p.utc=function(u){var b=o(this.toDate(),{locale:this.$L,utc:!0});return u?b.add(this.utcOffset(),n):b},p.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var l=p.parse;p.parse=function(u){u.utc&&(this.$u=!0),this.$utils().u(u.$offset)||(this.$offset=u.$offset),l.call(this,u)};var c=p.init;p.init=function(){if(this.$u){var u=this.$d;this.$y=u.getUTCFullYear(),this.$M=u.getUTCMonth(),this.$D=u.getUTCDate(),this.$W=u.getUTCDay(),this.$H=u.getUTCHours(),this.$m=u.getUTCMinutes(),this.$s=u.getUTCSeconds(),this.$ms=u.getUTCMilliseconds()}else c.call(this)};var r=p.utcOffset;p.utcOffset=function(u,b){var B=this.$utils().u;if(B(u))return this.$u?0:B(this.$offset)?r.call(this):this.$offset;if(typeof u=="string"&&(u=function(x){x===void 0&&(x="");var D=x.match(s);if(!D)return null;var q=(""+D[0]).match(a)||["-",0,0],O=q[0],_=60*+q[1]+ +q[2];return _===0?0:O==="+"?_:-_}(u),u===null))return this;var A=Math.abs(u)<=16?60*u:u,h=this;if(b)return h.$offset=A,h.$u=u===0,h;if(u!==0){var y=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(h=this.local().add(A+y,n)).$offset=A,h.$x.$localOffset=y}else h=this.utc();return h};var i=p.format;p.format=function(u){var b=u||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return i.call(this,b)},p.valueOf=function(){var u=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*u},p.isUTC=function(){return!!this.$u},p.toISOString=function(){return this.toDate().toISOString()},p.toString=function(){return this.toDate().toUTCString()};var d=p.toDate;p.toDate=function(u){return u==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var k=p.diff;p.diff=function(u,b,B){if(u&&this.$u===u.$u)return k.call(this,u,b,B);var A=this.local(),h=o(u).local();return k.call(A,h,b,B)}}}();ms.extend(ik),ms.extend(ac),ms.extend(tc),ms.extend(ec);const uk={name:"zh-cn",weekdays:"\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),weekdaysShort:"\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"),weekdaysMin:"\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),months:"\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),ordinal:(n,s)=>s==="W"?`${n}\u5468`:`${n}\u65E5`,weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5E74M\u6708D\u65E5",LLL:"YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",LLLL:"YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5E74M\u6708D\u65E5",lll:"YYYY\u5E74M\u6708D\u65E5 HH:mm",llll:"YYYY\u5E74M\u6708D\u65E5dddd HH:mm"},relativeTime:{future:"%s\u5185",past:"%s\u524D",s:"\u51E0\u79D2",m:"1 \u5206\u949F",mm:"%d \u5206\u949F",h:"1 \u5C0F\u65F6",hh:"%d \u5C0F\u65F6",d:"1 \u5929",dd:"%d \u5929",M:"1 \u4E2A\u6708",MM:"%d \u4E2A\u6708",y:"1 \u5E74",yy:"%d \u5E74"},meridiem:(n,s)=>{const a=100*n+s;return a<600?"\u51CC\u6668":a<900?"\u65E9\u4E0A":a<1100?"\u4E0A\u5348":a<1300?"\u4E2D\u5348":a<1800?"\u4E0B\u5348":"\u665A\u4E0A"}},dk={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")};ms.locale("zh",uk),ms.locale("en",dk),ms.extend(ac),ms.extend(tc),ms.extend(ec);const Ds={showInMobile:!1},op=()=>!!navigator&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(navigator.userAgent),mk=()=>{const n=Ra(),s=sc({"/":{copy:"\u590D\u5236\u6210\u529F",hint:"\u590D\u5236\u4EE3\u7801"}});let a;const e=o=>{if(!o.hasAttribute("copy-code-registerd")){const p=document.createElement("button");Ds.pure?(p.className="copy-code-pure-button",p.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon-copy-code"><path d="M704 896v80c0 26.51-21.49 48-48 48H112c-26.51 0-48-21.49-48-48V240c0-26.51 21.49-48 48-48h144v592c0 61.758 50.242 112 112 112h336zm0-688V0H368c-26.51 0-48 21.49-48 48v736c0 26.51 21.49 48 48 48h544c26.51 0 48-21.49 48-48V256H752c-26.4 0-48-21.6-48-48zm241.942-62.058L814.058 14.058A48 48 0 0 0 780.118 0H768v192h192v-12.118a48 48 0 0 0-14.058-33.94z"/></svg>'):(p.className="copy-code-button",p.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="icon-copy-code"><path fill="currentColor" d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 00-6-6H102a6 6 0 00-6 6v20a6 6 0 006 6h180a6 6 0 006-6z" /></svg>'),p.addEventListener("click",()=>{(l=>{const c=document.getSelection(),r=!!(c&&c.rangeCount>0)&&c.getRangeAt(0),i=document.createElement("textarea");i.value=l,i.setAttribute("readonly",""),i.style.position="absolute",i.style.top="-9999px",document.body.appendChild(i),i.select(),document.execCommand("copy"),Ds.pure||a.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg><span>${s.value.copy} \u{1F389}</span>`,Ds.duration),document.body.removeChild(i),r&&c&&(c.removeAllRanges(),c.addRange(r))})(o.innerText)}),p.setAttribute("aria-label",s.value.hint),p.setAttribute("data-balloon-pos","left"),o.parentElement&&o.parentElement.insertBefore(p,o),o.setAttribute("copy-code-registerd","")}},t=()=>{const o=Ds.selector||'.theme-default-content div[class*="language-"] pre';setTimeout(()=>{typeof o=="string"?document.querySelectorAll(o).forEach(e):Array.isArray(o)&&o.forEach(p=>{document.querySelectorAll(p).forEach(e)})},Ds.delay||500)};In(()=>{a=new rk,op()&&!Ds.showInMobile||t()}),Vn(()=>n.path,()=>{op()&&!Ds.showInMobile||t()})};var kk=$n({setup:()=>{mk()}});const vk=".theme-default-content :not(a) > img",hk={"/":{closeTitle:"\u5173\u95ED",downloadTitle:"\u4E0B\u8F7D\u56FE\u7247",fullscreenTitle:"\u5207\u6362\u5168\u5C4F",zoomTitle:"\u7F29\u653E",arrowPrevTitle:"\u4E0A\u4E00\u4E2A (\u5DE6\u7BAD\u5934)",arrowNextTitle:"\u4E0B\u4E00\u4E2A (\u53F3\u7BAD\u5934)"}},gk=500,fk={},pp=n=>({src:n.src,width:n.naturalWidth,height:n.naturalHeight,alt:n.alt}),bk=()=>{const{isSupported:n,toggle:s}=um(),a=sc(hk),e=Ra(),t=()=>{Promise.all([N(()=>import("./photoswipe.esm.092fbc15.js"),[]),new Promise(o=>setTimeout(o,gk)).then(()=>(o=>{const p=Array.from(document.querySelectorAll(o));return Promise.all(p.map(l=>new Promise((c,r)=>{l.complete?c(pp(l)):(l.onload=()=>c(pp(l)),l.onerror=i=>r(i))}))).then(l=>({elements:p,infos:l}))})(vk))]).then(([o,p])=>{p.elements.forEach((l,c)=>{l.addEventListener("click",()=>{const r=new o.default({dataSource:p.infos,...a.value,...fk,index:c});r.on("uiRegister",()=>{n&&r.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{s()}}),r.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(i,d)=>{i.setAttribute("download",""),i.setAttribute("target","_blank"),i.setAttribute("rel","noopener"),d.on("change",()=>{i.href=d.currSlide.data.src})}})}),r.init()})})})};Vn(()=>e.path,()=>t()),In(()=>t())};var yk=$n({setup:()=>{bk()}});const ze={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},lp={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},qe=n=>({...ze,...n,jsLib:Array.from(new Set([...ze.jsLib||[],...n.jsLib||[]])),cssLib:Array.from(new Set([...ze.cssLib||[],...n.cssLib||[]]))}),Zs=(n,s)=>{if(n[s]!==void 0)return n[s];const a=new Promise(e=>{var o;const t=document.createElement("script");t.src=s,(o=document.querySelector("body"))==null||o.appendChild(t),t.onload=()=>{e()}});return n[s]=a,a},Ek=(n,s)=>{if(s.css&&Array.from(n.childNodes).every(a=>a.nodeName!=="STYLE")){const a=((e,t,o)=>{const p=document.createElement(e);return t&&Object.keys(t).forEach(l=>{if(l.indexOf("data"))p[l]=t[l];else{const c=l.replace("data","");p.dataset[c]=t[l]}}),o&&o.forEach(l=>{p.appendChild(l)}),p})("style",{innerHTML:s.css});n.appendChild(a)}},oc=n=>n.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),cp=n=>`<div id="app">
${oc(n)}
</div>`,Bk=n=>`${n.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,wk=n=>n.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),rp=n=>`(function(exports){var module={};module.exports=exports;${n};return module.exports.__esModule?module.exports.default:module.exports;})({})`,Ys={};var Ak=_n({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},setup(n,{slots:s}){const a=rn(!1),e=rn(null),t=rn(null),o=rn("0"),p=rn(!1),l=en(()=>JSON.parse(decodeURIComponent(n.config||"{}"))),c=en(()=>(u=>{const b=Object.keys(u),B={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(A=>{const h=b.filter(y=>lp[A].types.includes(y));if(h.length){const y=h[0];B[A]=[u[y].replace(/^\n|\n$/g,""),lp[A].map[y]||y]}}),B.isLegal=!(B.html.length&&B.html[1]!=="none"||B.js.length&&B.js[1]!=="none"||B.css.length&&B.css[1]!=="none"),B})(JSON.parse(decodeURIComponent(n.code||"{}")))),r=en(()=>n.type==="react"?((u,b)=>{const B=qe(b);return{...B,html:cp(""),js:Bk(u.js[0]||""),css:u.css[0]||(u.js[0]?u.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:u.isLegal,jsLib:[B.react,B.reactDOM,...B.jsLib],jsx:!0,getScript:()=>{var h,y;const A=((y=(h=window.Babel)==null?void 0:h.transform(u.js[0]||"",{presets:["es2015","react"]}))==null?void 0:y.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${rp(A)}))`}}})(c.value,l.value):n.type==="vue"?((u,b)=>{const B=qe(b),A=u.html[0]||"",h=/<template>([\s\S]+)<\/template>/u.exec(A),y=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(A),x=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(A),D=h?h[1].replace(/^\n|\n$/g,""):"",[q="",O=""]=y?[y[4].replace(/^\n|\n$/g,""),y[3]]:[],[_="",g=""]=x?[x[4].replace(/^\n|\n$/g,""),x[3]]:[],J=O===""&&(g===""||g==="css");return{...B,html:cp(D),js:wk(q),css:_,isLegal:J,jsLib:[B.vue,...B.jsLib],getScript:()=>{var I,f;const Z=b.useBabel?((f=(I=window.Babel)==null?void 0:I.transform(q,{presets:["es2015"]}))==null?void 0:f.code)||"":q.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${rp(Z)};appOptions.template=\`${D.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}})(c.value,l.value):((u,b)=>{const B=qe(b),A=u.js[0]||"";return{...B,html:oc(u.html[0]||""),js:A,css:u.css[0]||"",isLegal:u.isLegal,getScript:()=>{var h;return B.useBabel?((h=window.Babel.transform(A,{presets:["es2015"]}))==null?void 0:h.code)||"":A}}})(c.value,l.value)),i=en(()=>r.value.isLegal),d=(u=!1)=>{const b=e.value.attachShadow({mode:"open"}),B=document.createElement("div");B.classList.add("code-demo-app"),b.appendChild(B),i.value?(u&&(B.innerHTML=r.value.html),Ek(b,r.value),((A,h,y)=>{const x=y.getScript();if(x&&Array.from(h.childNodes).every(D=>D.nodeName!=="SCRIPT")){const D=document.createElement("script");D.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${A} .code-demo-container').shadowRoot;
${x}}`)),h.appendChild(D)}})(n.id,b,r.value),o.value="0"):o.value="auto",p.value=!0},k=()=>{switch(n.type){case"react":return(u=>Promise.all([Zs(Ys,u.babel),Zs(Ys,u.react),Zs(Ys,u.reactDOM)]))(r.value).then(()=>d());case"vue":return(u=>{const b=[Zs(Ys,u.vue)];return u.useBabel&&b.push(Zs(Ys,u.babel)),Promise.all(b)})(r.value).then(()=>d());default:return(u=>u.useBabel?Zs(Ys,u.babel):Promise.resolve())(r.value).then(()=>d(!0))}};return In(()=>{setTimeout(()=>{k()},500)}),()=>{var u;return H("div",{class:"code-demo-wrapper",id:n.id},[p.value?null:H("div",{class:["loading"],innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/></circle></svg>'}),H("div",{class:"code-demo-header"},[r.value.isLegal?H("button",{class:["toggle-button",a.value?"down":"right"],onClick:()=>{o.value=a.value?"0":`${t.value.clientHeight+13.8}px`,a.value=!a.value}}):null,n.title?H("span",{class:"title"},decodeURIComponent(n.title)):null,r.value.isLegal&&r.value.jsfiddle!==!1?H("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[H("input",{type:"hidden",name:"html",value:r.value.html}),H("input",{type:"hidden",name:"js",value:r.value.js}),H("input",{type:"hidden",name:"css",value:r.value.css}),H("input",{type:"hidden",name:"wrap",value:"1"}),H("input",{type:"hidden",name:"panel_js",value:"3"}),H("input",{type:"hidden",name:"resources",value:[...r.value.cssLib,...r.value.jsLib].join(",")}),H("button",{type:"submit",class:"jsfiddle-button",innerHTML:'<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="228.516" height="200"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,r.value.isLegal&&r.value.codepen===!1?null:H("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[H("input",{type:"hidden",name:"data",value:JSON.stringify({html:r.value.html,js:r.value.js,css:r.value.css,js_external:r.value.jsLib.join(";"),css_external:r.value.cssLib.join(";"),layout:r.value.codepenLayout,html_pre_processor:c.value?c.value.html[1]:"none",js_pre_processor:c.value?c.value.js[1]:r.value.jsx?"babel":"none",css_pre_processor:c.value?c.value.css[1]:"none",editors:r.value.codepenEditors})}),H("button",{type:"submit",innerHTML:'<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})])]),H("div",{ref:e,class:"code-demo-container",style:{display:i.value&&p.value?"block":"none"}}),H("div",{class:"code-demo-code-wrapper",style:{height:o.value}},H("div",{ref:t,class:"code-demo-codes"},(u=s.default)==null?void 0:u.call(s)))])}}});const Ya=Ot("VUEPRESS_CODE_TAB_STORE",{});var xk=_n({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:{type:String,default:""}},setup(n,{slots:s}){const a=rn((()=>{if(n.tabId){const o=n.data.findIndex(({title:p,value:l=p})=>Ya.value[n.tabId]===l);if(o!==-1)return o}return n.active})()),e=rn([]),t=(o,p)=>{if(o.key===" "||o.key==="Enter"?(o.preventDefault(),a.value=p):o.key==="ArrowRight"?(o.preventDefault(),((l=a.value)=>{a.value=l<e.value.length-1?l+1:0,e.value[a.value].focus()})()):o.key==="ArrowLeft"&&(o.preventDefault(),((l=a.value)=>{a.value=l>0?l-1:e.value.length-1,e.value[a.value].focus()})()),n.tabId){const{title:l,value:c=l}=n.data[a.value];Ya.value[n.tabId]=c}};return Vn(()=>Ya.value[n.tabId],(o,p)=>{if(n.tabId&&o!==p){const l=n.data.findIndex(({title:c,value:r=c})=>r===o);l!==-1&&(a.value=l)}}),()=>H(Tt,()=>n.data.length?H("div",{class:"code-tabs"},[H("div",{class:"code-tabs-nav"},n.data.map(({title:o},p)=>{const l=p===a.value;return H("button",{ref:c=>{c&&(e.value[p]=c)},class:["code-tabs-nav-tab",{active:l}],"aria-pressed":l,"aria-expanded":l,onClick:()=>{a.value=p,(()=>{if(n.tabId){const{title:c,value:r=c}=n.data[a.value];Ya.value[n.tabId]=r}})()},onKeydown:c=>t(c,p)},o)})),n.data.map(({title:o,value:p=o},l)=>{var r;const c=l===a.value;return H("div",{class:["code-tab",{active:c}],"aria-selected":c},(r=s[`tab${l}`])==null?void 0:r.call(s,{title:o,value:p,isActive:c}))})]):null)}});const Ck=()=>N(()=>import("./markdown.esm.832a189d.js"),[]),Sk=()=>N(()=>import("./reveal.esm.b96f05d8.js"),[]),_k=()=>[Sk(),Ck()];const jk=()=>H(nc,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(n=>H("circle",{cx:50,cy:50,r:0,fill:"none",stroke:"currentColor",strokeWidth:"2"},[H("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:n}),H("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:n})])));var Fk=_n({name:"Presentation",props:{id:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(n){const s=ye(),a=rn(""),e=rn(!1),t=rn(),o=rn();let p;return In(()=>{var l;if(o.value){a.value=decodeURIComponent(((l=t.value)==null?void 0:l.dataset.code)||""),o.value.setAttribute("id",n.id),o.value.setAttribute("data-theme",n.theme);const c=[new Promise(r=>setTimeout(r,500)),..._k()];Promise.all(c).then(([,r,...i])=>{p=new r.default(o.value,{plugins:i.map(d=>d.default)}),p.initialize({backgroundTransition:"slide",hash:s.value.layout==="Slide",mouseWheel:s.value.layout==="Slide",transition:"slide",slideNumber:!0,...s.value.reveal||{},embedded:s.value.layout!=="Slide"}).then(()=>{e.value=!1,p.configure({backgroundTransition:"slide"})})})}}),Ia(()=>{p==null||p.destroy()}),()=>H("div",{ref:t,class:{"md-enhance-presentation":!0,loading:e.value}},[e.value?H(jk):null,H("div",{ref:o,class:["reveal","reveal-viewport"]},H("div",{class:"slides",style:{display:e.value?"none":"block"},innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${a.value}<\/script></section>`}))])}});const Ve=Ot("VUEPRESS_TAB_STORE",{});var Nk=_n({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:{type:String,default:""}},setup(n,{slots:s}){const a=rn((()=>{if(n.tabId){const p=n.data.findIndex(({title:l,value:c=l})=>Ve.value[n.tabId]===c);if(p!==-1)return p}return n.active})()),e=rn([]),t=()=>{if(n.tabId){const{title:p,value:l=p}=n.data[a.value];Ve.value[n.tabId]=l}},o=(p,l)=>{p.key===" "||p.key==="Enter"?(p.preventDefault(),a.value=l):p.key==="ArrowRight"?(p.preventDefault(),((c=a.value)=>{a.value=c<e.value.length-1?c+1:0,e.value[a.value].focus()})()):p.key==="ArrowLeft"&&(p.preventDefault(),((c=a.value)=>{a.value=c>0?c-1:e.value.length-1,e.value[a.value].focus()})()),t()};return Vn(()=>Ve.value[n.tabId],(p,l)=>{if(n.tabId&&p!==l){const c=n.data.findIndex(({title:r,value:i=r})=>i===p);c!==-1&&(a.value=c)}}),()=>H(Tt,()=>H("div",{class:"tab-list"},[H("div",{class:"tab-list-nav"},n.data.map(({title:p},l)=>{const c=l===a.value;return H("button",{ref:r=>{r&&(e.value[l]=r)},class:["tab-list-nav-item",{active:c}],"aria-pressed":c,"aria-expanded":c,onClick:()=>{a.value=l,t()},onKeydown:r=>o(r,l)},p)})),n.data.map(({title:p,value:l=p},c)=>{var i;const r=c===a.value;return H("div",{class:["tab-item",{active:r}],"aria-selected":r},(i=s[`tab${c}`])==null?void 0:i.call(s,{title:p,value:l,isActive:r}))})]))}}),Pk=$n({enhance:({app:n})=>{n.component("CodeDemo",Ak),n.component("CodeTabs",xk),n.component("Presentation",Fk),n.component("Tabs",Nk)}});const He=[ld,id,kd,Cd,Fd,Id,Bm,qm,Km,tk,ok,ck,kk,yk,Pk],Dk=[["v-8daa1a0e","/",{title:""},["/index.html","/index.md"]],["v-c9afc8f6","/archives/",{title:"\u65F6\u95F4\u7EBF"},["/archives/index.html","/@pages/archivesPage.html","/@pages/archivesPage.md"]],["v-e355b60c","/categories/",{title:"\u5206\u7C7B"},["/categories/index.html","/@pages/categoriesPage.html","/@pages/categoriesPage.md"]],["v-15534fdd","/tags/",{title:"\u6807\u7B7E"},["/tags/index.html","/@pages/tagsPage.html","/@pages/tagsPage.md"]],["v-22991227","/about/about.html",{title:"\u5173\u4E8E - \u6211"},["/about/about","/about/about.md"]],["v-ff20590c","/el-component/01.%E6%89%8B%E5%86%99el-form%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6.html",{title:"\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6"},["/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html","/el-component/01.%E6%89%8B%E5%86%99el-form%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6","/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.md","/el-component/01.%E6%89%8B%E5%86%99el-form%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6.md"]],["v-56ee61d4","/el-component/02.Vue%20Toast%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",{title:"Vue Toast\u7EC4\u4EF6\u5F00\u53D1"},["/el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html","/el-component/02.Vue%20Toast%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91","/el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.md","/el-component/02.Vue%20Toast%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.md"]],["v-58fa6412","/el-component/04.Vue%20button%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",{title:"Vue button\u7EC4\u4EF6\u5F00\u53D1"},["/el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html","/el-component/04.Vue%20button%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91","/el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.md","/el-component/04.Vue%20button%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.md"]],["v-32fefc11","/el-component/05.Vue%20icon%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",{title:"Vue icon\u7EC4\u4EF6\u5F00\u53D1"},["/el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html","/el-component/05.Vue%20icon%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91","/el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.md","/el-component/05.Vue%20icon%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.md"]],["v-dc317c26","/el-component/06.Vue%20input%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",{title:"Vue input\u7EC4\u4EF6\u5F00\u53D1"},["/el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html","/el-component/06.Vue%20input%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91","/el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.md","/el-component/06.Vue%20input%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.md"]],["v-9bca98a2","/el-component/07.Vue%20message%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",{title:"Vue message\u7EC4\u4EF6\u5F00\u53D1"},["/el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html","/el-component/07.Vue%20message%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91","/el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.md","/el-component/07.Vue%20message%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.md"]],["v-8b841460","/el-component/08.Vue%20Popover%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",{title:"Vue Popover\u7EC4\u4EF6\u5F00\u53D1"},["/el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html","/el-component/08.Vue%20Popover%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91","/el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.md","/el-component/08.Vue%20Popover%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.md"]],["v-fffb8e28","/guide/",{title:"\u5DE5\u5177\u5E93\u6307\u5357"},["/guide/index.html","/guide/\u5DE5\u5177\u5E93\u6307\u5357.html","/guide/%E5%B7%A5%E5%85%B7%E5%BA%93%E6%8C%87%E5%8D%97.html","/guide/\u5DE5\u5177\u5E93\u6307\u5357.md","/guide/%E5%B7%A5%E5%85%B7%E5%BA%93%E6%8C%87%E5%8D%97.md"]],["v-97b2979a","/movies/",{title:"\u5F71\u89C6\u7F51\u7AD9\u63A8\u8350"},["/movies/index.html","/nav/movies.html","/nav/movies.md"]],["v-75214906","/nav-page/",{title:"\u5BFC\u822A\u9875"},["/nav-page/index.html","/nav/nav-page.html","/nav/nav-page.md"]],["v-32534572","/test-demo/tabs/",{title:"\u9009\u9879\u5361"},["/test-demo/tabs/index.html","/test-demo/tabs.html","/test-demo/tabs.md"]],["v-fddb37fc","/utils/Array/chunk%E8%BD%AC%E6%8D%A2%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84.html",{title:"chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4"},["/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html","/utils/Array/chunk%E8%BD%AC%E6%8D%A2%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84","/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.md","/utils/Array/chunk%E8%BD%AC%E6%8D%A2%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84.md"]],["v-25f11cb1","/utils/Array/clone%E5%85%8B%E9%9A%86%E6%95%B0%E7%BB%84.html",{title:"clone\u514B\u9686\u6570\u7EC4"},["/utils/Array/clone\u514B\u9686\u6570\u7EC4.html","/utils/Array/clone%E5%85%8B%E9%9A%86%E6%95%B0%E7%BB%84","/utils/Array/clone\u514B\u9686\u6570\u7EC4.md","/utils/Array/clone%E5%85%8B%E9%9A%86%E6%95%B0%E7%BB%84.md"]],["v-8b67f006","/utils/Array/compact%E5%8E%BB%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%97%A0%E6%95%88%E5%80%BC.html",{title:"compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C"},["/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html","/utils/Array/compact%E5%8E%BB%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%97%A0%E6%95%88%E5%80%BC","/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.md","/utils/Array/compact%E5%8E%BB%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%97%A0%E6%95%88%E5%80%BC.md"]],["v-4932aafa","/utils/Array/difference%E6%95%B0%E7%BB%84%E5%B7%AE%E9%9B%86.html",{title:"difference\u6570\u7EC4\u5DEE\u96C6"},["/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.html","/utils/Array/difference%E6%95%B0%E7%BB%84%E5%B7%AE%E9%9B%86","/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.md","/utils/Array/difference%E6%95%B0%E7%BB%84%E5%B7%AE%E9%9B%86.md"]],["v-88ad7930","/utils/Array/flattenDeep%E6%8C%87%E5%AE%9A%E5%B1%82%E7%BA%A7%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.html",{title:"flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4"},["/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html","/utils/Array/flattenDeep%E6%8C%87%E5%AE%9A%E5%B1%82%E7%BA%A7%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84","/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.md","/utils/Array/flattenDeep%E6%8C%87%E5%AE%9A%E5%B1%82%E7%BA%A7%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.md"]],["v-7c143142","/utils/Array/flatten%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.html",{title:"flatten\u6241\u5E73\u5316\u6570\u7EC4"},["/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.html","/utils/Array/flatten%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84","/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.md","/utils/Array/flatten%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.md"]],["v-0ba4ebd2","/utils/Array/intersection%E6%95%B0%E7%BB%84%E4%BA%A4%E9%9B%86.html",{title:"intersection\u6570\u7EC4\u4EA4\u96C6"},["/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.html","/utils/Array/intersection%E6%95%B0%E7%BB%84%E4%BA%A4%E9%9B%86","/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.md","/utils/Array/intersection%E6%95%B0%E7%BB%84%E4%BA%A4%E9%9B%86.md"]],["v-d03a9252","/utils/Array/isArrayEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.html",{title:"isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49"},["/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html","/utils/Array/isArrayEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89","/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.md","/utils/Array/isArrayEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.md"]],["v-0236c666","/utils/Array/isEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E5%80%BC%E7%9B%B8%E7%AD%89.html",{title:"isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49"},["/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html","/utils/Array/isEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E5%80%BC%E7%9B%B8%E7%AD%89","/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.md","/utils/Array/isEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E5%80%BC%E7%9B%B8%E7%AD%89.md"]],["v-3757be0e","/utils/Array/max%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.html",{title:"max\u6570\u7EC4\u4E2D\u6700\u5927\u503C"},["/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html","/utils/Array/max%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC","/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md","/utils/Array/max%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.md"]],["v-62425f40","/utils/Array/min%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.html",{title:"min\u6570\u7EC4\u4E2D\u6700\u5927\u503C"},["/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html","/utils/Array/min%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC","/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md","/utils/Array/min%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.md"]],["v-c2c943f6","/utils/Array/shuffle%E6%89%93%E4%B9%B1%E6%95%B0%E7%BB%84.html",{title:"shuffle\u6253\u4E71\u6570\u7EC4"},["/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.html","/utils/Array/shuffle%E6%89%93%E4%B9%B1%E6%95%B0%E7%BB%84","/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.md","/utils/Array/shuffle%E6%89%93%E4%B9%B1%E6%95%B0%E7%BB%84.md"]],["v-9dd956a8","/utils/Array/sortAsc%E6%95%B0%E7%BB%84%E5%8D%87%E5%BA%8F.html",{title:"sortAsc\u6570\u7EC4\u5347\u5E8F"},["/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.html","/utils/Array/sortAsc%E6%95%B0%E7%BB%84%E5%8D%87%E5%BA%8F","/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.md","/utils/Array/sortAsc%E6%95%B0%E7%BB%84%E5%8D%87%E5%BA%8F.md"]],["v-f9f1525a","/utils/Array/sortDesc%E6%95%B0%E7%BB%84%E9%99%8D%E5%BA%8F.html",{title:"sortDesc\u6570\u7EC4\u964D\u5E8F"},["/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.html","/utils/Array/sortDesc%E6%95%B0%E7%BB%84%E9%99%8D%E5%BA%8F","/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.md","/utils/Array/sortDesc%E6%95%B0%E7%BB%84%E9%99%8D%E5%BA%8F.md"]],["v-a5a655f4","/utils/Array/takeLast%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E6%9C%80%E5%90%8E%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.html",{title:"takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20"},["/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html","/utils/Array/takeLast%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E6%9C%80%E5%90%8E%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0","/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.md","/utils/Array/takeLast%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E6%9C%80%E5%90%8E%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.md"]],["v-669d4826","/utils/Array/take%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E5%BC%80%E5%A7%8B%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.html",{title:"take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20"},["/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html","/utils/Array/take%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E5%BC%80%E5%A7%8B%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0","/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.md","/utils/Array/take%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E5%BC%80%E5%A7%8B%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.md"]],["v-61944058","/utils/Array/treeData%E7%94%9F%E6%88%90%E6%A0%91%E7%BB%93%E6%9E%84%E6%95%B0%E6%8D%AE.html",{title:"treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E"},["/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html","/utils/Array/treeData%E7%94%9F%E6%88%90%E6%A0%91%E7%BB%93%E6%9E%84%E6%95%B0%E6%8D%AE","/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.md","/utils/Array/treeData%E7%94%9F%E6%88%90%E6%A0%91%E7%BB%93%E6%9E%84%E6%95%B0%E6%8D%AE.md"]],["v-283754ae","/utils/Array/uniqueBy%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%8E%BB%E9%87%8D.html",{title:"uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD"},["/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html","/utils/Array/uniqueBy%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%8E%BB%E9%87%8D","/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.md","/utils/Array/uniqueBy%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%8E%BB%E9%87%8D.md"]],["v-35feaa32","/utils/Array/unique%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D.html",{title:"unique\u6570\u7EC4\u53BB\u91CD"},["/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.html","/utils/Array/unique%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D","/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.md","/utils/Array/unique%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D.md"]],["v-dff60d86","/utils/Function/calcFn%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E8%BF%90%E7%AE%97.html",{title:"calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97"},["/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html","/utils/Function/calcFn%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E8%BF%90%E7%AE%97","/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.md","/utils/Function/calcFn%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E8%BF%90%E7%AE%97.md"]],["v-97ceeb80","/utils/Function/debounce%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96.html",{title:"debounce\u51FD\u6570\u9632\u6296"},["/utils/Function/debounce\u51FD\u6570\u9632\u6296.html","/utils/Function/debounce%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96","/utils/Function/debounce\u51FD\u6570\u9632\u6296.md","/utils/Function/debounce%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96.md"]],["v-5150c06c","/utils/Function/throttle%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81.html",{title:"throttle\u51FD\u6570\u8282\u6D41"},["/utils/Function/throttle\u51FD\u6570\u8282\u6D41.html","/utils/Function/throttle%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81","/utils/Function/throttle\u51FD\u6570\u8282\u6D41.md","/utils/Function/throttle%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81.md"]],["v-3999ae18","/utils/Function/typeFn%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD.html",{title:"typeFn\u7C7B\u578B\u5224\u65AD"},["/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.html","/utils/Function/typeFn%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD","/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.md","/utils/Function/typeFn%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD.md"]],["v-770db0d6","/utils/Number/aboutEqual%E7%BA%A6%E7%AD%89%E4%BA%8E.html",{title:"aboutEqual\u7EA6\u7B49\u4E8E"},["/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.html","/utils/Number/aboutEqual%E7%BA%A6%E7%AD%89%E4%BA%8E","/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.md","/utils/Number/aboutEqual%E7%BA%A6%E7%AD%89%E4%BA%8E.md"]],["v-47982a42","/utils/Number/averageBy%E6%A3%80%E6%9F%A5%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.html",{title:"averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49"},["/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html","/utils/Number/averageBy%E6%A3%80%E6%9F%A5%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89","/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.md","/utils/Number/averageBy%E6%A3%80%E6%9F%A5%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.md"]],["v-4349dc68","/utils/Number/average%E6%B1%82%E5%B9%B3%E5%9D%87%E5%80%BC.html",{title:"average\u6C42\u5E73\u5747\u503C"},["/utils/Number/average\u6C42\u5E73\u5747\u503C.html","/utils/Number/average%E6%B1%82%E5%B9%B3%E5%9D%87%E5%80%BC","/utils/Number/average\u6C42\u5E73\u5747\u503C.md","/utils/Number/average%E6%B1%82%E5%B9%B3%E5%9D%87%E5%80%BC.md"]],["v-0a24fb2c","/utils/Number/getLineSize%E8%AE%A1%E7%AE%97%E4%B8%A4%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E8%B7%9D%E7%A6%BB.html",{title:"getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB"},["/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html","/utils/Number/getLineSize%E8%AE%A1%E7%AE%97%E4%B8%A4%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E8%B7%9D%E7%A6%BB","/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.md","/utils/Number/getLineSize%E8%AE%A1%E7%AE%97%E4%B8%A4%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E8%B7%9D%E7%A6%BB.md"]],["v-1cf95226","/utils/Number/randomNumber%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B4%E6%95%B0.html",{title:"randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570"},["/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html","/utils/Number/randomNumber%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B4%E6%95%B0","/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.md","/utils/Number/randomNumber%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B4%E6%95%B0.md"]],["v-f61ebce8","/utils/Number/sum%E6%95%B0%E7%BB%84%E4%B8%AD%E5%80%BC%E6%80%BB%E5%92%8C.html",{title:"sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C"},["/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html","/utils/Number/sum%E6%95%B0%E7%BB%84%E4%B8%AD%E5%80%BC%E6%80%BB%E5%92%8C","/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.md","/utils/Number/sum%E6%95%B0%E7%BB%84%E4%B8%AD%E5%80%BC%E6%80%BB%E5%92%8C.md"]],["v-0b42a652","/utils/String/padEnd%E5%A1%AB%E5%85%85%E5%8F%B3%E4%BE%A7%E5%AD%97%E7%AC%A6.html",{title:"padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26"},["/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html","/utils/String/padEnd%E5%A1%AB%E5%85%85%E5%8F%B3%E4%BE%A7%E5%AD%97%E7%AC%A6","/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.md","/utils/String/padEnd%E5%A1%AB%E5%85%85%E5%8F%B3%E4%BE%A7%E5%AD%97%E7%AC%A6.md"]],["v-3ddd3670","/utils/String/padStart%E5%A1%AB%E5%85%85%E5%B7%A6%E4%BE%A7%E5%AD%97%E7%AC%A6.html",{title:"padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26"},["/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html","/utils/String/padStart%E5%A1%AB%E5%85%85%E5%B7%A6%E4%BE%A7%E5%AD%97%E7%AC%A6","/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.md","/utils/String/padStart%E5%A1%AB%E5%85%85%E5%B7%A6%E4%BE%A7%E5%AD%97%E7%AC%A6.md"]],["v-073e1400","/utils/String/thousands%E6%AF%8F%E9%9A%94%E4%B8%89%E4%BD%8D%E6%95%B0%E5%AD%97%E6%B7%BB%E5%8A%A0%E9%80%97%E5%8F%B7.html",{title:"thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7"},["/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html","/utils/String/thousands%E6%AF%8F%E9%9A%94%E4%B8%89%E4%BD%8D%E6%95%B0%E5%AD%97%E6%B7%BB%E5%8A%A0%E9%80%97%E5%8F%B7","/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.md","/utils/String/thousands%E6%AF%8F%E9%9A%94%E4%B8%89%E4%BD%8D%E6%95%B0%E5%AD%97%E6%B7%BB%E5%8A%A0%E9%80%97%E5%8F%B7.md"]],["v-3706649a","/404.html",{title:""},["/404"]]];var Tk=()=>Dk.reduce((n,[s,a,e,t])=>(n.push({name:s,path:a,component:Co,meta:e},...t.map(o=>({path:o,redirect:a}))),n),[{name:"404",path:"/:catchAll(.*)",component:Co}]),Ik=hu,Lk=()=>{const n=nd({history:Ik(Hi(xs.value.base)),routes:Tk(),scrollBehavior:(s,a,e)=>e||(s.hash?{el:s.hash}:{top:0})});return n.beforeResolve(async(s,a)=>{var e;(s.path!==a.path||a===cs)&&([ds.value]=await Promise.all([Is.resolvePageData(s.name),(e=yl[s.name])==null?void 0:e.__asyncLoader()]))}),n},Rk=n=>{n.component("ClientOnly",Tt),n.component("Content",Qi)},$k=(n,s)=>{const a=en(()=>Is.resolveRouteLocale(xs.value.locales,s.currentRoute.value.path)),e=en(()=>Is.resolveSiteLocaleData(xs.value,a.value)),t=en(()=>Is.resolvePageFrontmatter(ds.value)),o=en(()=>Is.resolvePageHeadTitle(ds.value,e.value)),p=en(()=>Is.resolvePageHead(o.value,t.value,e.value)),l=en(()=>Is.resolvePageLang(ds.value));return n.provide(Pt,a),n.provide(Sl,e),n.provide(wl,t),n.provide(Yi,o),n.provide(Al,p),n.provide(xl,l),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>t.value},$head:{get:()=>p.value},$headTitle:{get:()=>o.value},$lang:{get:()=>l.value},$page:{get:()=>ds.value},$routeLocale:{get:()=>a.value},$site:{get:()=>xs.value},$siteLocale:{get:()=>e.value},$withBase:{get:()=>Gi}}),{pageData:ds,pageFrontmatter:t,pageHead:p,pageHeadTitle:o,pageLang:l,routeLocale:a,siteData:xs,siteLocaleData:e}},Ok=()=>{const n=Ra(),s=Zi(),a=Cl(),e=rn([]),t=()=>{s.value.forEach(p=>{const l=Mk(p);l&&e.value.push(l)})},o=()=>{document.documentElement.lang=a.value,e.value.forEach(p=>{p.parentNode===document.head&&document.head.removeChild(p)}),e.value.splice(0,e.value.length),s.value.forEach(p=>{const l=zk(p);l!==null&&(document.head.appendChild(l),e.value.push(l))})};Yn(Ji,o),In(()=>{t(),o(),Vn(()=>n.path,()=>o())})},Mk=([n,s,a=""])=>{const e=Object.entries(s).map(([l,c])=>Bn(c)?`[${l}="${c}"]`:c===!0?`[${l}]`:"").join(""),t=`head > ${n}${e}`;return Array.from(document.querySelectorAll(t)).find(l=>l.innerText===a)||null},zk=([n,s,a])=>{if(!Bn(n))return null;const e=document.createElement(n);return fl(s)&&Object.entries(s).forEach(([t,o])=>{Bn(o)?e.setAttribute(t,o):o===!0&&e.setAttribute(t,"")}),Bn(a)&&e.appendChild(document.createTextNode(a)),e},qk=$i,Vk=async()=>{var a;const n=qk({name:"VuepressApp",setup(){var e;Ok();for(const t of He)(e=t.setup)==null||e.call(t);return()=>[H(Ol),...He.flatMap(({rootComponents:t=[]})=>t.map(o=>H(o)))]}}),s=Lk();Rk(n),$k(n,s);for(const e of He)await((a=e.enhance)==null?void 0:a.call(e,{app:n,router:s,siteData:xs}));return n.use(s),{app:n,router:s}};Vk().then(({app:n,router:s})=>{s.isReady().then(()=>{n.mount("#app")})});export{H as $,qs as A,io as B,ll as C,Uk as D,Jk as E,Dn as F,_s as G,ca as H,np as I,Xc as J,Qr as K,Vi as L,Qk as M,Gk as N,Wi as O,Ki as P,Hi as Q,La as R,ye as S,Yk as T,av as U,Bn as V,km as W,fl as X,Xk as Y,sv as Z,Ae as _,Zk as a,Gi as a0,Tt as a1,Nt as a2,nv as a3,wt as a4,Ia as a5,Wk as a6,hm as a7,rs as b,us as c,Vk as createVueApp,xn as d,_t as e,_n as f,Gl as g,as as h,Kk as i,rn as j,en as k,In as l,Ct as m,Wp as n,Xn as o,Hk as p,Nn as q,Cr as r,Pd as s,Wa as t,Dt as u,Ra as v,ir as w,we as x,Vn as y,jr as z};
