var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const import_meta = {};
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const pagesData$1 = {
  "v-8daa1a0e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./index.html.7831bcd4.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-c9afc8f6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c9afc8f6" */
    "./index.html.684ba0b8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-e355b60c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-e355b60c" */
    "./index.html.71c968ed.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-15534fdd": () => __vitePreload(() => import(
    /* webpackChunkName: "v-15534fdd" */
    "./index.html.183727f5.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-22991227": () => __vitePreload(() => import(
    /* webpackChunkName: "v-22991227" */
    "./about.html.9130b52e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-ff20590c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-ff20590c" */
    "./01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html.093be8dd.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-56ee61d4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-56ee61d4" */
    "./02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html.c240b23a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-58fa6412": () => __vitePreload(() => import(
    /* webpackChunkName: "v-58fa6412" */
    "./04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html.fddd4b7b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-32fefc11": () => __vitePreload(() => import(
    /* webpackChunkName: "v-32fefc11" */
    "./05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html.446981cd.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-dc317c26": () => __vitePreload(() => import(
    /* webpackChunkName: "v-dc317c26" */
    "./06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html.d657320e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-9bca98a2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-9bca98a2" */
    "./07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html.f03110a4.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-8b841460": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8b841460" */
    "./08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html.e021bbb6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-fffb8e28": () => __vitePreload(() => import(
    /* webpackChunkName: "v-fffb8e28" */
    "./index.html.3b9588b3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-97b2979a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-97b2979a" */
    "./index.html.5bd71197.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-75214906": () => __vitePreload(() => import(
    /* webpackChunkName: "v-75214906" */
    "./index.html.d8b6e055.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-fddb37fc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-fddb37fc" */
    "./chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html.0d89a8bf.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-25f11cb1": () => __vitePreload(() => import(
    /* webpackChunkName: "v-25f11cb1" */
    "./clone\u514B\u9686\u6570\u7EC4.html.b20947ff.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-8b67f006": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8b67f006" */
    "./compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html.7b907930.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-4932aafa": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4932aafa" */
    "./difference\u6570\u7EC4\u5DEE\u96C6.html.68a4480d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-88ad7930": () => __vitePreload(() => import(
    /* webpackChunkName: "v-88ad7930" */
    "./flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html.ea1df0d5.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-7c143142": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7c143142" */
    "./flatten\u6241\u5E73\u5316\u6570\u7EC4.html.c1f04666.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-0ba4ebd2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0ba4ebd2" */
    "./intersection\u6570\u7EC4\u4EA4\u96C6.html.135e5916.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-d03a9252": () => __vitePreload(() => import(
    /* webpackChunkName: "v-d03a9252" */
    "./isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html.52aa6807.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-0236c666": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0236c666" */
    "./isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html.09670069.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3757be0e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3757be0e" */
    "./max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.3089d1ae.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-62425f40": () => __vitePreload(() => import(
    /* webpackChunkName: "v-62425f40" */
    "./min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.51ee5590.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-c2c943f6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c2c943f6" */
    "./shuffle\u6253\u4E71\u6570\u7EC4.html.b74958cf.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-9dd956a8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-9dd956a8" */
    "./sortAsc\u6570\u7EC4\u5347\u5E8F.html.1899a9a7.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-f9f1525a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-f9f1525a" */
    "./sortDesc\u6570\u7EC4\u964D\u5E8F.html.c904564e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-a5a655f4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-a5a655f4" */
    "./takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html.38d81d5c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-669d4826": () => __vitePreload(() => import(
    /* webpackChunkName: "v-669d4826" */
    "./take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html.8b7a01d6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-61944058": () => __vitePreload(() => import(
    /* webpackChunkName: "v-61944058" */
    "./treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html.a1bddde4.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-283754ae": () => __vitePreload(() => import(
    /* webpackChunkName: "v-283754ae" */
    "./uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html.2de6fd94.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-35feaa32": () => __vitePreload(() => import(
    /* webpackChunkName: "v-35feaa32" */
    "./unique\u6570\u7EC4\u53BB\u91CD.html.a25ba0ca.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-dff60d86": () => __vitePreload(() => import(
    /* webpackChunkName: "v-dff60d86" */
    "./calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html.0b1ba36e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-97ceeb80": () => __vitePreload(() => import(
    /* webpackChunkName: "v-97ceeb80" */
    "./debounce\u51FD\u6570\u9632\u6296.html.779a9961.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-5150c06c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5150c06c" */
    "./throttle\u51FD\u6570\u8282\u6D41.html.e3c35a28.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3999ae18": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3999ae18" */
    "./typeFn\u7C7B\u578B\u5224\u65AD.html.00fa702d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-770db0d6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-770db0d6" */
    "./aboutEqual\u7EA6\u7B49\u4E8E.html.8b0eb4ff.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-47982a42": () => __vitePreload(() => import(
    /* webpackChunkName: "v-47982a42" */
    "./averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html.d16c0d66.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-4349dc68": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4349dc68" */
    "./average\u6C42\u5E73\u5747\u503C.html.14c598c2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-0a24fb2c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0a24fb2c" */
    "./getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html.bca5dec7.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-1cf95226": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1cf95226" */
    "./randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html.ac6057be.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-f61ebce8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-f61ebce8" */
    "./sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html.4e65ad7b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-0b42a652": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0b42a652" */
    "./padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html.554f2152.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3ddd3670": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3ddd3670" */
    "./padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html.7b6603b2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-073e1400": () => __vitePreload(() => import(
    /* webpackChunkName: "v-073e1400" */
    "./thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html.c9aec98d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3706649a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./404.html.265028f6.js"
  ), true ? [] : void 0).then(({ data }) => data)
};
function makeMap(str, expectsLowerCase) {
  const map2 = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map2[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map2[val.toLowerCase()] : (val) => !!map2[val];
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$1(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$1(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const toDisplayString = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject$1(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function warn$2(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn$2(`cannot run an inactive effect scope.`);
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this.active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else {
    warn$2(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type2, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    const eventInfo = { effect: activeEffect, target, type: type2, key };
    trackEffects(dep, eventInfo);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({ effect: activeEffect }, debuggerEventExtraInfo));
    }
  }
}
function trigger(target, type2, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type2 === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type2) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const eventInfo = { target, type: type2, key, newValue, oldValue, oldTarget };
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0], eventInfo);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects), eventInfo);
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.onTrigger) {
      effect.onTrigger(extend({ effect }, debuggerEventExtraInfo));
    }
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol));
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow && !isReadonly(value)) {
      if (!isShallow$1(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    {
      warn$2(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    {
      warn$2(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const shallowReadonlyHandlers = /* @__PURE__ */ extend({}, readonlyHandlers, {
  get: shallowReadonlyGet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type2) {
  return function(...args) {
    {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type2)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type2 === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type2 = toRawType(target);
    console.warn(`Reactive ${type2} contains both the raw and reactive versions of the same object${type2 === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow$1(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()), {
        target: ref2,
        type: "get",
        key: "value"
      });
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      });
    }
  }
}
function isRef(r2) {
  return !!(r2 && r2.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this.__v_isShallow ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this.__v_isShallow ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  if (!isProxy(object)) {
    console.warn(`toRefs() expects a reactive object but received a plain one.`);
  }
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
}
function toRef(object, key, defaultValue) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      console.warn("Write operation failed: computed value is readonly");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn$1(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
      msg + args.join(""),
      instance && instance.proxy,
      trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
      trace
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString$1(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type2, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type2);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type2, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type2, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type2);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type2, args));
  }
  return values;
}
function handleError(err, instance, type2, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings[type2];
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type2, contextVNode, throwInDev);
}
function logError(err, type2, contextVNode, throwInDev = true) {
  {
    const info = ErrorTypeStrings[type2];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue$1 = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id2) {
  let start = flushIndex + 1;
  let end = queue$1.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue$1[middle]);
    middleJobId < id2 ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if ((!queue$1.length || !queue$1.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    if (job.id == null) {
      queue$1.push(job);
    } else {
      queue$1.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue$1.indexOf(job);
  if (i > flushIndex) {
    queue$1.splice(i, 1);
  }
}
function queueCb(cb, activeQueue, pendingQueue, index2) {
  if (!isArray(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index2 + 1 : index2)) {
      pendingQueue.push(cb);
    }
  } else {
    pendingQueue.push(...cb);
  }
  queueFlush();
}
function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen2, parentJob = null) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
    pendingPreFlushCbs.length = 0;
    {
      seen2 = seen2 || /* @__PURE__ */ new Map();
    }
    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      if (checkRecursiveUpdates(seen2, activePreFlushCbs[preFlushIndex])) {
        continue;
      }
      activePreFlushCbs[preFlushIndex]();
    }
    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null;
    flushPreFlushCbs(seen2, parentJob);
  }
}
function flushPostFlushCbs(seen2) {
  flushPreFlushCbs();
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen2 = seen2 || /* @__PURE__ */ new Map();
    }
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen2, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen2) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen2 = seen2 || /* @__PURE__ */ new Map();
  }
  flushPreFlushCbs(seen2);
  queue$1.sort((a, b) => getId(a) - getId(b));
  const check = (job) => checkRecursiveUpdates(seen2, job);
  try {
    for (flushIndex = 0; flushIndex < queue$1.length; flushIndex++) {
      const job = queue$1[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue$1.length = 0;
    flushPostFlushCbs(seen2);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue$1.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen2);
    }
  }
}
function checkRecursiveUpdates(seen2, fn) {
  if (!seen2.has(fn)) {
    seen2.set(fn, 1);
  } else {
    const count = seen2.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      warn$1(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
      return true;
    } else {
      seen2.set(fn, count + 1);
    }
  }
}
let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Set();
{
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
const map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
  const id2 = instance.type.__hmrId;
  let record = map.get(id2);
  if (!record) {
    createRecord(id2, instance.type);
    record = map.get(id2);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id2, initialDef) {
  if (map.has(id2)) {
    return false;
  }
  map.set(id2, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id2, newRender) {
  const record = map.get(id2);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}
function reload(id2, newComp) {
  const record = map.get(id2);
  if (!record)
    return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (const instance of instances) {
    const oldComp = normalizeClassComponent(instance.type);
    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.add(oldComp);
    }
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      queueJob(instance.parent.update);
      if (instance.parent.type.__asyncLoader && instance.parent.ceReload) {
        instance.parent.ceReload(newComp.styles);
      }
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
  }
  queuePostFlushCb(() => {
    for (const instance of instances) {
      hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
    }
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id2, arg) => {
    try {
      return fn(id2, arg);
    } catch (e) {
      console.error(e);
      console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
    }
  };
}
let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit(event, ...args) {
  if (devtools) {
    devtools.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook(hook, target) {
  var _a2, _b;
  devtools = hook;
  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
    buffer = [];
  } else if (typeof window !== "undefined" && window.HTMLElement && !((_b = (_a2 = window.navigator) === null || _a2 === void 0 ? void 0 : _a2.userAgent) === null || _b === void 0 ? void 0 : _b.includes("jsdom"))) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook(newHook, target);
    });
    setTimeout(() => {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version2) {
  emit("app:init", app, version2, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
function devtoolsUnmountApp(app) {
  emit("app:unmount", app);
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added");
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated");
const devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook("component:removed");
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start");
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end");
function createDevtoolsPerformanceHook(hook) {
  return (component, type2, time) => {
    emit(hook, component.appContext.app, component.uid, component, type2, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit("component:emit", component.appContext.app, component, event, params);
}
function emit$1(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  {
    const { emitsOptions, propsOptions: [propsOptions] } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => a.trim());
    }
    if (number) {
      args = rawArgs.map(toNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$1(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    cache.set(comp, null);
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  cache.set(comp, normalized);
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id2) {
  currentScopeId = id2;
}
function popScopeId() {
  currentScopeId = null;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    const res = fn(...args);
    setCurrentRenderingInstance(prevInstance);
    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }
    {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
let accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (attrs === props) {
        markAttrsAccessed();
      }
      result = normalizeVNode(render2.length > 1 ? render2(props, true ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit: emit2
      } : { attrs, slots, emit: emit2 }) : render2(props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  let setRoot = void 0;
  if (result.patchFlag > 0 && result.patchFlag & 2048) {
    [root, setRoot] = getChildRoot(result);
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs);
      } else if (!accessedAttrs && root.type !== Comment) {
        const allAttrs = Object.keys(attrs);
        const eventAttrs = [];
        const extraAttrs = [];
        for (let i = 0, l = allAttrs.length; i < l; i++) {
          const key = allAttrs[i];
          if (isOn(key)) {
            if (!isModelListener(key)) {
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }
        if (extraAttrs.length) {
          warn$1(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
        }
        if (eventAttrs.length) {
          warn$1(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
        }
      }
    }
  }
  if (vnode.dirs) {
    if (!isElementRoot(root)) {
      warn$1(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
    }
    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    if (!isElementRoot(root)) {
      warn$1(`Component inside <Transition> renders non-element root node that cannot be animated.`);
    }
    root.transition = vnode.transition;
  }
  if (setRoot) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getChildRoot = (vnode) => {
  const rawChildren = vnode.children;
  const dynamicChildren = vnode.dynamicChildren;
  const childRoot = filterSingleRoot(rawChildren);
  if (!childRoot) {
    return [vnode, void 0];
  }
  const index2 = rawChildren.indexOf(childRoot);
  const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  const setRoot = (updatedRoot) => {
    rawChildren[index2] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
      }
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
const isElementRoot = (vnode) => {
  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if ((prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  }
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type2) => type2.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function provide(key, value) {
  if (!currentInstance) {
    {
      warn$1(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if (!isFunction(cb)) {
    warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  if (!cb) {
    if (immediate !== void 0) {
      warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    if (deep !== void 0) {
      warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
    }
  }
  const warnInvalidSource = (s) => {
    warn$1(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
  };
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow$1(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow$1(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else {
        warnInvalidSource(s);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    return NOOP;
  }
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    scheduler = () => queuePreFlushCb(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  return () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen2) {
  if (!isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value)) {
    return value;
  }
  seen2.add(value);
  if (isRef(value)) {
    traverse(value.value, seen2);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen2);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen2);
    });
  } else if (isPlainObject$1(value)) {
    for (const key in value) {
      traverse(value[key], seen2);
    }
  }
  return value;
}
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      let child = children[0];
      if (children.length > 1) {
        let hasFound = false;
        for (const c of children) {
          if (c.type !== Comment) {
            if (hasFound) {
              warn$1("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            child = c;
            hasFound = true;
          }
        }
      }
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
        warn$1(`invalid <transition> mode: ${mode}`);
      }
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            instance.update();
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray(hook)) {
      if (hook.every((hook2) => hook2.length <= 1))
        done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(true);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(true);
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay: delay2 = 200,
    timeout,
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve2, reject) => {
          const userRetry = () => resolve2(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (!comp) {
        warn$1(`Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`);
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      if (comp && !isObject(comp) && !isFunction(comp)) {
        throw new Error(`Invalid async component load result: ${comp}`);
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(err, instance, 13, !errorComponent);
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = ref(false);
      const error = ref();
      const delayed = ref(!!delay2);
      if (delay2) {
        setTimeout(() => {
          delayed.value = false;
        }, delay2);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(`Async component timed out after ${timeout}ms.`);
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          queueJob(instance.parent.update);
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, { vnode: { ref: ref2, props, children, shapeFlag }, parent }) {
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  return vnode;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type2, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type2, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type2, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type2, target, keepAliveRoot) {
  const injected = injectHook(type2, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type2], injected);
  }, target);
}
function injectHook(type2, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type2] || (target[type2] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type2, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    const apiName = toHandlerKey(ErrorTypeStrings[type2].replace(/ hook$/, ""));
    warn$1(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    warn$1(`withDirectives can only be used inside render functions.`);
    return vnode;
  }
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (isFunction(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }
    if (dir.deep) {
      traverse(value);
    }
    bindings.push({
      dir,
      instance,
      value,
      oldValue: void 0,
      arg,
      modifiers
    });
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveAsset(type2, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type2 === COMPONENTS) {
      const selfName = getComponentName(Component, false);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type2] || Component[type2], name) || resolve(instance.appContext[type2], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    if (warnMissing && !res) {
      const extra = type2 === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
      warn$1(`Failed to resolve ${type2.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else {
    warn$1(`resolve${capitalize(type2.slice(0, -1))} can only be used in render() or setup().`);
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index2) {
  let ret;
  const cached = cache && cache[index2];
  if (isArray(source) || isString$1(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source)) {
      warn$1(`The v-for range expect an integer value but got ${source}.`);
    }
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index2] = ret;
  }
  return ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot.length > 1) {
    warn$1(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
    slot = () => [];
  }
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
  $: (i) => i,
  $el: (i) => i.vnode.el,
  $data: (i) => i.data,
  $props: (i) => shallowReadonly(i.props),
  $attrs: (i) => shallowReadonly(i.attrs),
  $slots: (i) => shallowReadonly(i.slots),
  $refs: (i) => shallowReadonly(i.refs),
  $parent: (i) => getPublicInstance(i.parent),
  $root: (i) => getPublicInstance(i.root),
  $emit: (i) => i.emit,
  $options: (i) => resolveMergedOptions(i),
  $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
  $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
  $watch: (i) => instanceWatch.bind(i)
});
const isReservedPrefix = (key) => key === "_" || key === "$";
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type: type2, appContext } = instance;
    if (key === "__isVue") {
      return true;
    }
    if (setupState !== EMPTY_OBJ && setupState.__isScriptSetup && hasOwn(setupState, key)) {
      return setupState[key];
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
        markAttrsAccessed();
      }
      return publicGetter(instance);
    } else if ((cssModule = type2.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString$1(key) || key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
      } else if (instance === currentRenderingInstance) {
        warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      warn$1(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`, instance);
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const { ctx, propsOptions: [propsOptions] } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type2, key) => {
    if (cache[key]) {
      warn$1(`${type2} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type2;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = createDuplicateChecker();
  {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods", key);
        }
      } else {
        warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
      }
    }
  }
  if (dataOptions) {
    if (!isFunction(dataOptions)) {
      warn$1(`The data option must be a function. Plain object usage is no longer supported.`);
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise(data)) {
      warn$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
    }
    if (!isObject(data)) {
      warn$1(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get2 === NOOP) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
        warn$1(`Write operation failed: computed property "${key}" is readonly.`);
      };
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        {
          warn$1(`injected property "${key}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`);
        }
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
    {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook$1(hook, instance, type2) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type2);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$1(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    } else {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      } else {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else {
    warn$1(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base2 = instance.type;
  const { mixins, extends: extendsOptions } = base2;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base2);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base2;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions$1(resolved, base2, optionMergeStrategies);
  }
  cache.set(base2, resolved);
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      warn$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (!(instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    cache.set(comp, EMPTY_ARR);
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString$1(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  cache.set(comp, res);
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  } else {
    warn$1(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type2, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type2));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type2) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  for (const key in options) {
    let opt = options[key];
    if (opt == null)
      continue;
    validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
  }
}
function validateProp(name, value, prop, isAbsent) {
  const { type: type2, required, validator } = prop;
  if (required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  if (type2 != null && type2 !== true) {
    let isValid = false;
    const types = isArray(type2) ? type2 : [type2];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type2) {
  let valid;
  const expectedType = getType(type2);
  if (isSimpleType(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type2;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type2;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type2) {
  if (type2 === "String") {
    return `"${value}"`;
  } else if (type2 === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type2) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type2.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (currentInstance) {
      warn$1(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
    }
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      {
        warn$1(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
      }
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  if (!isKeepAlive(instance.vnode) && true) {
    warn$1(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
  }
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type2 = children._;
    if (type2) {
      instance.slots = toRaw(children);
      def(children, "_", type2);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type2 = children._;
    if (type2) {
      if (isHmrUpdating) {
        extend(slots, children);
      } else if (optimized && type2 === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type2 === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid = 0;
function createAppAPI(render, hydrate) {
  return function createApp(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      warn$1(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        {
          warn$1(`app.config cannot be replaced. Modify individual options instead.`);
        }
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) {
          warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else {
          warn$1(`A plugin must either be a function or an object with an "install" function.`);
        }
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else {
            warn$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
          }
        }
        return app;
      },
      component(name, component) {
        {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          if (rootContainer.__vue_app__) {
            warn$1(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
          }
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          {
            context.reload = () => {
              render(cloneVNode(vnode), rootContainer, isSVG);
            };
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        } else {
          warn$1(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container);
          {
            app._instance = null;
            devtoolsUnmountApp(app);
          }
          delete app._container.__vue_app__;
        } else {
          warn$1(`Cannot unmount an app that is not mounted.`);
        }
      },
      provide(key, value) {
        if (key in context.provides) {
          warn$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
        }
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach((r2, i) => setRef(r2, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  if (!owner) {
    warn$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
    return;
  }
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString$1(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString$1(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else {
          warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
        }
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else {
      warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
    }
  }
}
let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
const isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const { mt: mountComponent, p: patch, o: { patchProp: patchProp2, createText, nextSibling, parentNode, remove: remove2, insert, createComment } } = rendererInternals;
  const hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      warn$1(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
    if (hasMismatch && true) {
      console.error(`Hydration completed but contains mismatches.`);
    }
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    const { type: type2, ref: ref2, shapeFlag, patchFlag } = vnode;
    const domType = node.nodeType;
    vnode.el = node;
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type2) {
      case Text:
        if (domType !== 3) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
            warn$1(`Hydration text mismatch:
- Client: ${JSON.stringify(node.data)}
- Server: ${JSON.stringify(vnode.children)}`);
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (domType !== 1 && domType !== 3) {
          nextNode = onMismatch();
        } else {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent)
              vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return nextNode;
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }
        break;
      default:
        if (shapeFlag & 1) {
          if (domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
          nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
          if (nextNode && isComment(nextNode) && nextNode.data === "teleport end") {
            nextNode = nextSibling(nextNode);
          }
          if (isAsyncWrapper(vnode)) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
        } else {
          warn$1("Invalid HostVNode type:", type2, `(${typeof type2})`);
        }
    }
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type: type2, props, patchFlag, shapeFlag, dirs } = vnode;
    const forcePatchValue = type2 === "input" && dirs || type2 === "option";
    {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
          for (const key in props) {
            if (forcePatchValue && key.endsWith("value") || isOn(key) && !isReservedProp(key)) {
              patchProp2(el, key, null, props[key], false, void 0, parentComponent);
            }
          }
        } else if (props.onClick) {
          patchProp2(el, "onClick", null, props.onClick, false, void 0, parentComponent);
        }
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
      if (shapeFlag & 16 && !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
        let hasWarned = false;
        while (next) {
          hasMismatch = true;
          if (!hasWarned) {
            warn$1(`Hydration children mismatch in <${vnode.type}>: server rendered element contains more child nodes than client vdom.`);
            hasWarned = true;
          }
          const cur = next;
          next = next.nextSibling;
          remove2(cur);
        }
      } else if (shapeFlag & 8) {
        if (el.textContent !== vnode.children) {
          hasMismatch = true;
          warn$1(`Hydration text content mismatch in <${vnode.type}>:
- Client: ${el.textContent}
- Server: ${vnode.children}`);
          el.textContent = vnode.children;
        }
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l = children.length;
    let hasWarned = false;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;
        if (!hasWarned) {
          warn$1(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`);
          hasWarned = true;
        }
        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      hasMismatch = true;
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    hasMismatch = true;
    warn$1(`Hydration node mismatch:
- Client vnode:`, vnode.type, `
- Server rendered DOM:`, node, node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``);
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAsyncAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove2(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove2(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
    return next;
  };
  const locateClosingAsyncAnchor = (node) => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === "[")
          match++;
        if (node.data === "]") {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  return [hydrate, hydrateNode];
}
let supported$1;
let perf$1;
function startMeasure(instance, type2) {
  if (instance.appContext.config.performance && isSupported$1()) {
    perf$1.mark(`vue-${type2}-${instance.uid}`);
  }
  {
    devtoolsPerfStart(instance, type2, isSupported$1() ? perf$1.now() : Date.now());
  }
}
function endMeasure(instance, type2) {
  if (instance.appContext.config.performance && isSupported$1()) {
    const startTag = `vue-${type2}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf$1.mark(endTag);
    perf$1.measure(`<${formatComponentName(instance, instance.type)}> ${type2}`, startTag, endTag);
    perf$1.clearMarks(startTag);
    perf$1.clearMarks(endTag);
  }
  {
    devtoolsPerfEnd(instance, type2, isSupported$1() ? perf$1.now() : Date.now());
  }
}
function isSupported$1() {
  if (supported$1 !== void 0) {
    return supported$1;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported$1 = true;
    perf$1 = window.performance;
  } else {
    supported$1 = false;
  }
  return supported$1;
}
function initFeatureFlags() {
  const needWarn = [];
  if (needWarn.length) {
    const multi = needWarn.length > 1;
    console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = getGlobalThis();
  target.__VUE__ = true;
  {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type: type2, ref: ref2, shapeFlag } = n2;
    switch (type2) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else {
          patchStaticNode(n1, n2, container, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type2.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type2.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else {
          warn$1("Invalid VNode type:", type2, `(${typeof type2})`);
        }
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
  };
  const patchStaticNode = (n1, n2, container, isSVG) => {
    if (n2.children !== n1.children) {
      const anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type: type2, props, shapeFlag, transition, patchFlag, dirs } = vnode;
    {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type2 !== "foreignObject", slotScopeIds, optimized);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }
    {
      Object.defineProperty(el, "__vnode", {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, "__vueParentComponent", {
        value: parentComponent,
        enumerable: false
      });
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (isHmrUpdating) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
      if (parentComponent && parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (isHmrUpdating || patchFlag & 2048) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        } else if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (instance.type.__hmrId) {
      registerHMR(instance);
    }
    {
      pushWarningContext(initialVNode);
      startMeasure(instance, `mount`);
    }
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      {
        startMeasure(instance, `init`);
      }
      setupComponent(instance);
      {
        endMeasure(instance, `init`);
      }
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
    {
      popWarningContext();
      endMeasure(instance, `mount`);
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        {
          pushWarningContext(n2);
        }
        updateComponentPreRender(instance, n2, optimized);
        {
          popWarningContext();
        }
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            {
              startMeasure(instance, `render`);
            }
            instance.subTree = renderComponentRoot(instance);
            {
              endMeasure(instance, `render`);
            }
            {
              startMeasure(instance, `hydrate`);
            }
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
            {
              endMeasure(instance, `hydrate`);
            }
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(() => !instance.isUnmounted && hydrateSubTree());
          } else {
            hydrateSubTree();
          }
        } else {
          {
            startMeasure(instance, `render`);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          {
            endMeasure(instance, `render`);
          }
          {
            startMeasure(instance, `patch`);
          }
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          {
            endMeasure(instance, `patch`);
          }
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        {
          devtoolsComponentAdded(instance);
        }
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        {
          pushWarningContext(next || instance.vnode);
        }
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        {
          startMeasure(instance, `render`);
        }
        const nextTree = renderComponentRoot(instance);
        {
          endMeasure(instance, `render`);
        }
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        {
          startMeasure(instance, `patch`);
        }
        patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
        {
          endMeasure(instance, `patch`);
        }
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
        {
          devtoolsComponentUpdated(instance);
        }
        {
          popWarningContext();
        }
      }
    };
    const effect = instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(update), instance.scope);
    const update = instance.update = () => effect.run();
    update.id = instance.uid;
    toggleRecurse(instance, true);
    {
      effect.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
      effect.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
      update.ownerInstance = instance;
    }
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(void 0, instance.update);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if (keyToNewIndexMap.has(nextChild.key)) {
            warn$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type: type2, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type2.move(vnode, container, anchor, internals);
      return;
    }
    if (type2 === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type2 === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove3 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const { type: type2, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type2 !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type2 === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type: type2, el, anchor, transition } = vnode;
    if (type2 === Fragment) {
      if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
        vnode.children.forEach((child) => {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove2(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type2 === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    if (instance.type.__hmrId) {
      unregisterHMR(instance);
    }
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
    {
      devtoolsComponentRemoved(instance);
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
const isTeleport = (type2) => type2.__isTeleport;
const Fragment = Symbol("Fragment");
const Text = Symbol("Text");
const Comment = Symbol("Comment");
const Static = Symbol("Static");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type2, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type2, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type2, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type2, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
    return false;
  }
  return n1.type === n2.type && n1.key === n2.key;
}
const createVNodeWithArgsTransform = (...args) => {
  return _createVNode(...args);
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
  return ref2 != null ? isString$1(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type2, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type2 === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type: type2,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type2.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString$1(children) ? 8 : 16;
  }
  if (vnode.key !== vnode.key) {
    warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type2, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type2 || type2 === NULL_DYNAMIC_COMPONENT) {
    if (!type2) {
      warn$1(`Invalid vnode type when creating vnode: ${type2}.`);
    }
    type2 = Comment;
  }
  if (isVNode(type2)) {
    const cloned = cloneVNode(type2, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type2)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type2)) {
    type2 = type2.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString$1(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString$1(type2) ? 1 : isSuspense(type2) ? 128 : isTeleport(type2) ? 64 : isObject(type2) ? 4 : isFunction(type2) ? 2 : 0;
  if (shapeFlag & 4 && isProxy(type2)) {
    type2 = toRaw(type2);
    warn$1(`Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type2);
  }
  return createBaseVNode(type2, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if (isArray(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(Fragment, null, child.slice());
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type2 = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type2 = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type2 = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type2 = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type2 = 16;
      children = [createTextVNode(children)];
    } else {
      type2 = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type2;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type2 = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1++,
    vnode,
    type: type2,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type2, appContext),
    emitsOptions: normalizeEmitsOptions(type2, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type2.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, config) {
  const appIsNativeTag = config.isNativeTag || NO;
  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  var _a2;
  const Component = instance.type;
  {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      const names = Object.keys(Component.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      const names = Object.keys(Component.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly()) {
      warn$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [shallowReadonly(instance.props), setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
        if (!instance.suspense) {
          const name = (_a2 = Component.name) !== null && _a2 !== void 0 ? _a2 : "Anonymous";
          warn$1(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (isVNode(setupResult)) {
      warn$1(`setup() should not return VNodes directly - return a render function instead.`);
    }
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
  }
  finishComponentSetup(instance, isSSR);
}
let compile;
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template;
      if (template) {
        {
          startMeasure(instance, `compile`);
        }
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
        {
          endMeasure(instance, `compile`);
        }
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
  if (!Component.render && instance.render === NOOP && !isSSR) {
    if (Component.template) {
      warn$1(`Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
    } else {
      warn$1(`Component is missing template or render function.`);
    }
  }
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, {
    get(target, key) {
      markAttrsAccessed();
      track(instance, "get", "$attrs");
      return target[key];
    },
    set() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    },
    deleteProperty() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    if (instance.exposed) {
      warn$1(`expose() should be called only once per setup().`);
    }
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return Object.freeze({
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      get slots() {
        return shallowReadonly(instance.slots);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type2, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type2, null, [propsOrChildren]);
      }
      return createVNode(type2, propsOrChildren);
    } else {
      return createVNode(type2, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type2, propsOrChildren, children);
  }
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function initCustomFormatter() {
  if (typeof window === "undefined") {
    return;
  }
  const vueStyle = { style: "color:#3ba776" };
  const numberStyle = { style: "color:#0b1bc9" };
  const stringStyle = { style: "color:#b62e24" };
  const keywordStyle = { style: "color:#9d288c" };
  const formatter = {
    header(obj) {
      if (!isObject(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if (isRef(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, genRefFlag(obj)],
          "<",
          formatValue(obj.value),
          `>`
        ];
      } else if (isReactive(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
          "<",
          formatValue(obj),
          `>${isReadonly(obj) ? ` (readonly)` : ``}`
        ];
      } else if (isReadonly(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
          "<",
          formatValue(obj),
          ">"
        ];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return [
          "div",
          {},
          ...formatInstance(obj.$)
        ];
      }
    }
  };
  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
    }
    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
    }
    const computed2 = extractKeys(instance, "computed");
    if (computed2) {
      blocks.push(createInstanceBlock("computed", computed2));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push([
      "div",
      {},
      [
        "span",
        {
          style: keywordStyle.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: instance }]
    ]);
    return blocks;
  }
  function createInstanceBlock(type2, target) {
    target = extend({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        type2
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(target).map((key) => {
          return [
            "div",
            {},
            ["span", keywordStyle, key + ": "],
            formatValue(target[key], false)
          ];
        })
      ]
    ];
  }
  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if (isObject(v)) {
      return ["object", { object: asRaw ? toRaw(v) : v }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type2) {
    const Comp = instance.type;
    if (isFunction(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type2)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type2) {
    const opts = Comp[type2];
    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type2)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type2))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if (isShallow(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}
const version = "3.2.37";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector2) => doc.querySelector(selector2),
  setScopeId(el, id2) {
    el.setAttribute(id2, "");
  },
  cloneNode(el) {
    const cloned = el.cloneNode(true);
    if (`_value` in el) {
      cloned._value = el._value;
    }
    return cloned;
  },
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString$1(next);
  if (next && !isCssString) {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
    if (prev && !isString$1(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean2 = isSpecialBooleanAttr(key);
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean2 ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
    el._value = value;
    const newValue = value == null ? "" : value;
    if (el.value !== newValue || el.tagName === "OPTION") {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type2 = typeof el[key];
    if (type2 === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type2 === "string") {
      value = "";
      needRemove = true;
    } else if (type2 === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    {
      warn$1(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: value ${value} is invalid.`, e);
    }
  }
  needRemove && el.removeAttribute(key);
}
const [_getNow, skipTimestampCheck] = /* @__PURE__ */ (() => {
  let _getNow2 = Date.now;
  let skipTimestampCheck2 = false;
  if (typeof window !== "undefined") {
    if (Date.now() > document.createEvent("Event").timeStamp) {
      _getNow2 = performance.now.bind(performance);
    }
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck2 = !!(ffMatch && Number(ffMatch[1]) <= 53);
  }
  return [_getNow2, skipTimestampCheck2];
})();
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const reset = () => {
  cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  return [hyphenate(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    const timeStamp = e.timeStamp || _getNow();
    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
    }
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString$1(value)) {
    return false;
  }
  return key in el;
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
const callHook = (hook, args = []) => {
  if (isArray(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const { name = "v", type: type2, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type2, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type2, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  validateDuration(res);
  return res;
}
function validateDuration(val) {
  if (typeof val !== "number") {
    warn$1(`<transition> explicit duration is not a valid number - got ${JSON.stringify(val)}.`);
  } else if (isNaN(val)) {
    warn$1(`<transition> explicit duration is NaN - the duration expression might be incorrect.`);
  }
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id2 = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id2 === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type: type2, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type2) {
    return resolve2();
  }
  const endEvent = type2 + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(TRANSITION + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type2 = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type2 = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type2 = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type2 = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type2 ? type2 === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type2 === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
  return {
    type: type2,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const TransitionGroupImpl = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevChildren;
    let children;
    onUpdated(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach((c) => {
        const el = c.el;
        const style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";
        const cb = el._moveCb = (e) => {
          if (e && e.target !== el) {
            return;
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
    });
    return () => {
      const rawProps = toRaw(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || Fragment;
      prevChildren = children;
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.key != null) {
          setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
        } else {
          warn$1(`<TransitionGroup> children must be keyed.`);
        }
      }
      if (prevChildren) {
        for (let i = 0; i < prevChildren.length; i++) {
          const child = prevChildren[i];
          setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
          positionMap.set(child, child.el.getBoundingClientRect());
        }
      }
      return createVNode(tag, null, children);
    };
  }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
  const el = c.el;
  if (el._moveCb) {
    el._moveCb();
  }
  if (el._enterCb) {
    el._enterCb();
  }
}
function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s = c.el.style;
    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
    s.transitionDuration = "0s";
    return c;
  }
}
function hasCSSTransform(el, root, moveClass) {
  const clone = el.cloneNode();
  if (el._vtc) {
    el._vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
    });
  }
  moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  return (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
      return fn(event);
    }
  };
};
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
let enabledHydration = false;
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };
  return app;
};
function injectNativeTagCheck(app) {
  Object.defineProperty(app.config, "isNativeTag", {
    value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
    writable: false
  });
}
function injectCompilerOptionsCheck(app) {
  {
    const isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },
      set() {
        warn$1(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
      }
    });
    const compilerOptions = app.config.compilerOptions;
    const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
    Object.defineProperty(app.config, "compilerOptions", {
      get() {
        warn$1(msg);
        return compilerOptions;
      },
      set() {
        warn$1(msg);
      }
    });
  }
}
function normalizeContainer(container) {
  if (isString$1(container)) {
    const res = document.querySelector(container);
    if (!res) {
      warn$1(`Failed to mount app: mount target selector "${container}" returned null.`);
    }
    return res;
  }
  if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
    warn$1(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
  }
  return container;
}
function initDev() {
  {
    initCustomFormatter();
  }
}
{
  initDev();
}
const siteData$1 = JSON.parse('{"base":"/","lang":"zh-CN","title":"\u524D\u7AEF\u6709\u9053","description":"\u524D\u7AEF\u6709\u9053,\u6280\u672F\u535A\u5BA2,\u524D\u7AEF,\u524D\u7AEF\u5F00\u53D1,\u524D\u7AEF\u535A\u5BA2,\u524D\u7AEF\u6846\u67B6,web\u524D\u7AEF,\u524D\u7AEF\u9762\u8BD5,\u6280\u672F\u6587\u6863,\u5B66\u4E60,\u9762\u8BD5,JavaScript,js,es6,typeScript,ts,vue,python,css3,html5,node,git,github,markdown,vuepress,react","head":[["link",{"rel":"icon","href":"https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/favicon.ico"}],["meta",{"name":"viewport","content":"width=device-width,initial-scale=1,user-scalable=no"}],["meta",{"name":"keywords","content":"\u524D\u7AEF\u6709\u9053,\u6280\u672F\u535A\u5BA2,\u524D\u7AEF,\u524D\u7AEF\u5F00\u53D1,\u524D\u7AEF\u535A\u5BA2,\u524D\u7AEF\u6846\u67B6,web\u524D\u7AEF,\u524D\u7AEF\u9762\u8BD5,\u6280\u672F\u6587\u6863,\u5B66\u4E60,\u9762\u8BD5,JavaScript,js,es6,typeScript,ts,vue,python,css3,html5,node,git,github,markdown,vuepress,react"}]],"locales":{}}');
var resolveHeadIdentifier = ([
  tag,
  attrs,
  content
]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
var dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
var isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
var isLinkMailto = (link) => /^mailto:/.test(link);
var isLinkTel = (link) => /^tel:/.test(link);
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var removeEndingSlash = (str) => str.replace(/\/$/, "");
var removeLeadingSlash = (str) => str.replace(/^\//, "");
var resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const pagesComponents = {
  "v-8daa1a0e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./index.html.b6dd74d5.js"
  ), true ? [] : void 0)),
  "v-c9afc8f6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c9afc8f6" */
    "./index.html.0914bf01.js"
  ), true ? [] : void 0)),
  "v-e355b60c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-e355b60c" */
    "./index.html.ff4ff3b9.js"
  ), true ? [] : void 0)),
  "v-15534fdd": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-15534fdd" */
    "./index.html.491500ca.js"
  ), true ? [] : void 0)),
  "v-22991227": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-22991227" */
    "./about.html.c051a630.js"
  ), true ? [] : void 0)),
  "v-ff20590c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-ff20590c" */
    "./01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html.e03597a6.js"
  ), true ? [] : void 0)),
  "v-56ee61d4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-56ee61d4" */
    "./02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html.93a5f712.js"
  ), true ? [] : void 0)),
  "v-58fa6412": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-58fa6412" */
    "./04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html.1b3026fd.js"
  ), true ? [] : void 0)),
  "v-32fefc11": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-32fefc11" */
    "./05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html.f95da78c.js"
  ), true ? [] : void 0)),
  "v-dc317c26": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-dc317c26" */
    "./06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html.7753bc38.js"
  ), true ? [] : void 0)),
  "v-9bca98a2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-9bca98a2" */
    "./07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html.bb0f1d54.js"
  ), true ? [] : void 0)),
  "v-8b841460": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8b841460" */
    "./08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html.2367ba5e.js"
  ), true ? [] : void 0)),
  "v-fffb8e28": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-fffb8e28" */
    "./index.html.7bf58355.js"
  ), true ? [] : void 0)),
  "v-97b2979a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-97b2979a" */
    "./index.html.271e071a.js"
  ), true ? [] : void 0)),
  "v-75214906": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-75214906" */
    "./index.html.2d11bf71.js"
  ), true ? [] : void 0)),
  "v-fddb37fc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-fddb37fc" */
    "./chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html.f145f125.js"
  ), true ? [] : void 0)),
  "v-25f11cb1": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-25f11cb1" */
    "./clone\u514B\u9686\u6570\u7EC4.html.bf96eef1.js"
  ), true ? [] : void 0)),
  "v-8b67f006": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8b67f006" */
    "./compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html.897fde9d.js"
  ), true ? [] : void 0)),
  "v-4932aafa": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4932aafa" */
    "./difference\u6570\u7EC4\u5DEE\u96C6.html.04b21f99.js"
  ), true ? [] : void 0)),
  "v-88ad7930": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-88ad7930" */
    "./flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html.3d4ec763.js"
  ), true ? [] : void 0)),
  "v-7c143142": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7c143142" */
    "./flatten\u6241\u5E73\u5316\u6570\u7EC4.html.07b854ab.js"
  ), true ? [] : void 0)),
  "v-0ba4ebd2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0ba4ebd2" */
    "./intersection\u6570\u7EC4\u4EA4\u96C6.html.667e4690.js"
  ), true ? [] : void 0)),
  "v-d03a9252": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-d03a9252" */
    "./isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html.86120aea.js"
  ), true ? [] : void 0)),
  "v-0236c666": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0236c666" */
    "./isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html.43f603a6.js"
  ), true ? [] : void 0)),
  "v-3757be0e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3757be0e" */
    "./max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.e1a55b70.js"
  ), true ? [] : void 0)),
  "v-62425f40": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-62425f40" */
    "./min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html.a83c445b.js"
  ), true ? [] : void 0)),
  "v-c2c943f6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c2c943f6" */
    "./shuffle\u6253\u4E71\u6570\u7EC4.html.f8fbddce.js"
  ), true ? [] : void 0)),
  "v-9dd956a8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-9dd956a8" */
    "./sortAsc\u6570\u7EC4\u5347\u5E8F.html.ff122a50.js"
  ), true ? [] : void 0)),
  "v-f9f1525a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-f9f1525a" */
    "./sortDesc\u6570\u7EC4\u964D\u5E8F.html.bc8728ed.js"
  ), true ? [] : void 0)),
  "v-a5a655f4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-a5a655f4" */
    "./takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html.e248ee2a.js"
  ), true ? [] : void 0)),
  "v-669d4826": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-669d4826" */
    "./take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html.316d2f9b.js"
  ), true ? [] : void 0)),
  "v-61944058": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-61944058" */
    "./treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html.59a8e399.js"
  ), true ? [] : void 0)),
  "v-283754ae": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-283754ae" */
    "./uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html.f7e67a29.js"
  ), true ? [] : void 0)),
  "v-35feaa32": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-35feaa32" */
    "./unique\u6570\u7EC4\u53BB\u91CD.html.744c7f8b.js"
  ), true ? [] : void 0)),
  "v-dff60d86": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-dff60d86" */
    "./calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html.c032cad0.js"
  ), true ? [] : void 0)),
  "v-97ceeb80": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-97ceeb80" */
    "./debounce\u51FD\u6570\u9632\u6296.html.8061f91d.js"
  ), true ? [] : void 0)),
  "v-5150c06c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5150c06c" */
    "./throttle\u51FD\u6570\u8282\u6D41.html.d9fb48ad.js"
  ), true ? [] : void 0)),
  "v-3999ae18": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3999ae18" */
    "./typeFn\u7C7B\u578B\u5224\u65AD.html.5b435261.js"
  ), true ? [] : void 0)),
  "v-770db0d6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-770db0d6" */
    "./aboutEqual\u7EA6\u7B49\u4E8E.html.b7836c61.js"
  ), true ? [] : void 0)),
  "v-47982a42": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-47982a42" */
    "./averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html.323c56e9.js"
  ), true ? [] : void 0)),
  "v-4349dc68": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4349dc68" */
    "./average\u6C42\u5E73\u5747\u503C.html.93bf7006.js"
  ), true ? [] : void 0)),
  "v-0a24fb2c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0a24fb2c" */
    "./getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html.d12e382c.js"
  ), true ? [] : void 0)),
  "v-1cf95226": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1cf95226" */
    "./randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html.12e8dc93.js"
  ), true ? [] : void 0)),
  "v-f61ebce8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-f61ebce8" */
    "./sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html.4496cc20.js"
  ), true ? [] : void 0)),
  "v-0b42a652": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0b42a652" */
    "./padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html.abb1b946.js"
  ), true ? [] : void 0)),
  "v-3ddd3670": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3ddd3670" */
    "./padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html.fcd03527.js"
  ), true ? [] : void 0)),
  "v-073e1400": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-073e1400" */
    "./thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html.83f98f71.js"
  ), true ? [] : void 0)),
  "v-3706649a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./404.html.b9cc28f9.js"
  ), true ? [] : void 0))
};
const layoutComponents = {
  "404": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "layout-404" */
    "./404.f9ac5745.js"
  ), true ? [] : void 0)),
  "Layout": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "layout-Layout" */
    "./Layout.85bb9c18.js"
  ), true ? [] : void 0))
};
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
if (import_meta.webpackHot || false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data) => {
    pagesData.value[data.key] = () => Promise.resolve(data);
    if (data.key === pageData.value.key) {
      pageData.value = data;
    }
  };
}
var pageFrontmatterSymbol = Symbol("");
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol("");
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol("");
var pageLangSymbol = Symbol("");
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var routeLocaleSymbol = Symbol("");
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
if (import_meta.webpackHot || false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data) => {
    siteData.value = data;
  };
}
var siteLocaleDataSymbol = Symbol("");
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var updateHeadSymbol = Symbol("");
var resolvers = reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 != null ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString$1(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b;
      return isMounted.value ? (_b = (_a2 = ctx.slots).default) == null ? void 0 : _b.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData();
    const pageComponent = computed(() => pagesComponents[props.pageKey || page.value.key]);
    return () => pageComponent.value ? h(pageComponent.value) : h("div", "404 Not Found");
  }
});
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString$1(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || resolveComponent(layoutName, false);
    });
    return () => h(layoutComponent.value);
  }
});
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base2 = useSiteData().value.base;
  return `${base2}${removeLeadingSlash(url)}`;
};
var defineClientConfig = (clientConfig) => clientConfig;
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a2;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof global !== "undefined" && ((_a2 = global.perf_hooks) === null || _a2 === void 0 ? void 0 : _a2.performance)) {
    supported = true;
    perf = global.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id2 in plugin.settings) {
        const item = plugin.settings[id2];
        defaultSettings[id2] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve2) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: resolve2
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy)
      setupFn(proxy.proxiedTarget);
  }
}
/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const PolySymbol = (name) => hasSymbol ? Symbol("[vue-router]: " + name) : "[vue-router]: " + name;
const matchedRouteKey = /* @__PURE__ */ PolySymbol("router view location matched");
const viewDepthKey = /* @__PURE__ */ PolySymbol("router view depth");
const routerKey = /* @__PURE__ */ PolySymbol("router");
const routeLocationKey = /* @__PURE__ */ PolySymbol("route location");
const routerViewLocationKey = /* @__PURE__ */ PolySymbol("router view location");
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop$1 = () => {
};
function warn(msg) {
  const args = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const searchPos = location2.indexOf("?");
  const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base2) {
  if (!base2 || !pathname.toLowerCase().startsWith(base2.toLowerCase()))
    return pathname;
  return pathname.slice(base2.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!from.startsWith("/")) {
    warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
    return to;
  }
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (position === 1 || segment === ".")
      continue;
    if (segment === "..")
      position--;
    else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base2) {
  if (!base2) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base2 = baseEl && baseEl.getAttribute("href") || "/";
      base2 = base2.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base2 = "/";
    }
  }
  if (base2[0] !== "/" && base2[0] !== "#")
    base2 = "/" + base2;
  return removeTrailingSlash(base2);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base2, location2) {
  return base2.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset2) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset2.behavior,
    left: elRect.left - docRect.left - (offset2.left || 0),
    top: elRect.top - docRect.top - (offset2.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    if (typeof position.el === "string") {
      if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
        try {
          const foundEl = document.querySelector(position.el);
          if (isIdSelector && foundEl) {
            warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
            return;
          }
        } catch (err) {
          warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
          return;
        }
      }
    }
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base2, location2) {
  const { pathname, search: search2, hash } = location2;
  const hashPos = base2.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base2.slice(hashPos)) ? base2.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base2);
  return path + search2 + hash;
}
function useHistoryListeners(base2, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base2, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index2 = listeners.indexOf(callback);
      if (index2 > -1)
        listeners.splice(index2, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base2) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base2, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history2.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base2.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base2 : base2.slice(hashIndex)) + to : createBaseLocation() + base2 + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        warn("Error with push/replace State", err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign({}, historyState.value, history2.state, {
      forward: to,
      scroll: computeScrollPosition()
    });
    if (!history2.state) {
      warn(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`);
    }
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base2) {
  base2 = normalizeBase(base2);
  const historyNavigation = useHistoryStateNavigation(base2);
  const historyListeners = useHistoryListeners(base2, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    location: "",
    base: base2,
    go,
    createHref: createHref.bind(null, base2)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("navigation failure");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
const ErrorTypeMessages = {
  [1]({ location: location2, currentLocation }) {
    return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
  },
  [2]({ from, to }) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
  },
  [4]({ from, to }) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
  },
  [8]({ from, to }) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
  },
  [16]({ from, to }) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`;
  }
};
function createRouterError(type2, params) {
  {
    return assign(new Error(ErrorTypeMessages[type2](params)), {
      type: type2,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type2) {
  return error instanceof Error && NavigationFailureSymbol in error && (type2 == null || !!(error.type & type2));
}
const propertiesToLog = ["params", "query", "hash"];
function stringifyRoute(to) {
  if (typeof to === "string")
    return to;
  if ("path" in to)
    return to.path;
  const location2 = {};
  for (const key of propertiesToLog) {
    if (key in to)
      location2[key] = to[key];
  }
  return JSON.stringify(location2, null, 2);
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [90];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i = 1; i < match.length; i++) {
      const value = match[i] || "";
      const key = keys[i - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (Array.isArray(param) && !repeatable)
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          const text = Array.isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2 && segments.length > 1) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path;
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Route paths should start with a "/": "${path}" should be "/${path}".`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer2}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer2 = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer2)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer2
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer2}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer2,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer2 = "";
  }
  function addCharToBuffer() {
    buffer2 += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer2) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer2}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  {
    const existingKeys = /* @__PURE__ */ new Set();
    for (const key of parser.keys) {
      if (existingKeys.has(key.name))
        warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
      existingKeys.add(key.name);
    }
  }
  const matcher = assign(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      if (normalizedRecord.path === "*") {
        throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (parent && path[0] === "/")
        checkMissingParamsInAbsolutePath(matcher, parent);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
        {
          checkSameParams(originalRecord, matcher);
        }
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if ("children" in mainNormalizedRecord) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
      insertMatcher(matcher);
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$1;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index2 = matchers.indexOf(matcherRef);
      if (index2 > -1) {
        matchers.splice(index2, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i = 0;
    while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
      i++;
    matchers.splice(i, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      if (!path.startsWith("/")) {
        warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`);
      }
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || {} : { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function isSameParam(a, b) {
  return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
function checkSameParams(a, b) {
  for (const key of a.keys) {
    if (!key.optional && !b.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
  }
  for (const key of b.keys) {
    if (!key.optional && !a.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
  }
}
function checkMissingParamsInAbsolutePath(record, parent) {
  for (const key of parent.keys) {
    if (!record.keys.find(isSameParam.bind(null, key)))
      return warn(`Absolute path "${record.record.path}" should have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
  }
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
    warn(`Error decoding "${text}". Using original value`);
  }
  return "" + text;
}
function parseQuery(search2) {
  const query = {};
  if (search2 === "" || search2 === "?")
    return query;
  const hasLeadingIM = search2[0] === "?";
  const searchParams = (hasLeadingIM ? search2.slice(1) : search2).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search2 = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search2 += (search2.length ? "&" : "") + key;
      }
      continue;
    }
    const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search2 += (search2.length ? "&" : "") + key;
        if (value2 != null)
          search2 += "=" + value2;
      }
    });
  }
  return search2;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
function useCallbacks() {
  let handlers2 = [];
  function add2(handler) {
    handlers2.push(handler);
    return () => {
      const i = handlers2.indexOf(handler);
      if (i > -1)
        handlers2.splice(i, 1);
    };
  }
  function reset2() {
    handlers2 = [];
  }
  return {
    add: add2,
    list: () => handlers2,
    reset: reset2
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false)
        reject(createRouterError(4, {
          from,
          to
        }));
      else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
          enterCallbackArray.push(valid);
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, canOnlyBeCalledOnce(next, to, from));
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    if (guard.length > 2) {
      const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ""}:
${guard.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof guardReturn === "object" && "then" in guardReturn) {
        guardCall = guardCall.then((resolvedValue) => {
          if (!next._called) {
            warn(message);
            return Promise.reject(new Error("Invalid navigation guard"));
          }
          return resolvedValue;
        });
      } else if (guardReturn !== void 0) {
        if (!next._called) {
          warn(message);
          reject(new Error("Invalid navigation guard"));
          return;
        }
      }
    }
    guardCall.catch((err) => reject(err));
  });
}
function canOnlyBeCalledOnce(next, to, from) {
  let called = 0;
  return function() {
    if (called++ === 1)
      warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
    next._called = true;
    if (called === 1)
      next.apply(null, arguments);
  };
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      {
        if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
          warn(`Component "${name}" in record with path "${record.path}" is not a valid component. Received "${String(rawComponent)}".`);
          throw new Error("Invalid route component");
        } else if ("then" in rawComponent) {
          warn(`Component "${name}" in record with path "${record.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const promise2 = rawComponent;
          rawComponent = () => promise2;
        } else if (rawComponent.__asyncLoader && !rawComponent.__warnedDefineAsync) {
          rawComponent.__warnedDefineAsync = true;
          warn(`Component "${name}" in record with path "${record.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`);
        }
      }
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        if (!("catch" in componentPromise)) {
          warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
          componentPromise = Promise.resolve(componentPromise);
        }
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      return router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop$1);
    }
    return Promise.resolve();
  }
  if (isBrowser) {
    const instance = getCurrentInstance();
    if (instance) {
      const linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      };
      instance.__vrl_devtools = instance.__vrl_devtools || [];
      instance.__vrl_devtools.push(linkContextDevtools);
      watchEffect(() => {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, { flush: "post" });
    }
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    warnDeprecatedUsage();
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const depth = inject(viewDepthKey, 0);
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth]);
    provide(viewDepthKey, depth + 1);
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[props.name];
      const currentName = props.name;
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[props.name];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      if (isBrowser && component.ref) {
        const info = {
          depth,
          name: matchedRoute.name,
          path: matchedRoute.path,
          meta: matchedRoute.meta
        };
        const internalInstances = Array.isArray(component.ref) ? component.ref.map((r2) => r2.i) : [component.ref.i];
        internalInstances.forEach((instance) => {
          instance.__vrv_devtools = info;
        });
      }
      return normalizeSlot(slots.default, { Component: component, route }) || component;
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function warnDeprecatedUsage() {
  const instance = getCurrentInstance();
  const parentName = instance.parent && instance.parent.type.name;
  if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition"))) {
    const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
    warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${comp}>
    <component :is="Component" />
  </${comp}>
</router-view>`);
  }
}
function formatRouteLocation(routeLocation, tooltip) {
  const copy = assign({}, routeLocation, {
    matched: routeLocation.matched.map((matched) => omit(matched, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip,
      value: copy
    }
  };
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
let routerId = 0;
function addDevtools(app, router, matcher) {
  if (router.__hasDevtools)
    return;
  router.__hasDevtools = true;
  const id2 = routerId++;
  setupDevtoolsPlugin({
    id: "org.vuejs.router" + (id2 ? "." + id2 : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app
  }, (api) => {
    api.on.inspectComponent((payload, ctx) => {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: "Routing",
          key: "$route",
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, "Current Route")
        });
      }
    });
    api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
      if (componentInstance.__vrv_devtools) {
        const info = componentInstance.__vrv_devtools;
        node.tags.push({
          label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: PINK_500
        });
      }
      if (Array.isArray(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;
        componentInstance.__vrl_devtools.forEach((devtoolsData) => {
          let backgroundColor = ORANGE_400;
          let tooltip = "";
          if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = "This is exactly active";
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = "This link is active";
          }
          node.tags.push({
            label: devtoolsData.route.path,
            textColor: 0,
            tooltip,
            backgroundColor
          });
        });
      }
    });
    watch(router.currentRoute, () => {
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    const navigationsLayerId = "router:navigations:" + id2;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: `Router${id2 ? " " + id2 : ""} Navigations`,
      color: 4237508
    });
    router.onError((error, to) => {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "Error during Navigation",
          subtitle: to.fullPath,
          logType: "error",
          time: api.now(),
          data: { error },
          groupId: to.meta.__navigationId
        }
      });
    });
    let navigationId = 0;
    router.beforeEach((to, from) => {
      const data = {
        guard: formatDisplay("beforeEach"),
        from: formatRouteLocation(from, "Current Location during this navigation"),
        to: formatRouteLocation(to, "Target location")
      };
      Object.defineProperty(to.meta, "__navigationId", {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: api.now(),
          title: "Start of navigation",
          subtitle: to.fullPath,
          data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach((to, from, failure) => {
      const data = {
        guard: formatDisplay("afterEach")
      };
      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : "",
            tooltip: "Navigation Failure",
            value: failure
          }
        };
        data.status = formatDisplay("\u274C");
      } else {
        data.status = formatDisplay("\u2705");
      }
      data.from = formatRouteLocation(from, "Current Location during this navigation");
      data.to = formatRouteLocation(to, "Target location");
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "End of navigation",
          subtitle: to.fullPath,
          time: api.now(),
          data,
          logType: failure ? "warning" : "default",
          groupId: to.meta.__navigationId
        }
      });
    });
    const routerInspectorId = "router-inspector:" + id2;
    api.addInspector({
      id: routerInspectorId,
      label: "Routes" + (id2 ? " " + id2 : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function refreshRoutesView() {
      if (!activeRoutesPayload)
        return;
      const payload = activeRoutesPayload;
      let routes = matcher.getRoutes().filter((route) => !route.parent);
      routes.forEach(resetMatchStateOnRouteRecord);
      if (payload.filter) {
        routes = routes.filter((route) => isRouteMatching(route, payload.filter.toLowerCase()));
      }
      routes.forEach((route) => markRouteRecordActive(route, router.currentRoute.value));
      payload.rootNodes = routes.map(formatRouteRecordForInspector);
    }
    let activeRoutesPayload;
    api.on.getInspectorTree((payload) => {
      activeRoutesPayload = payload;
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        const routes = matcher.getRoutes();
        const route = routes.find((route2) => route2.record.__vd_id === payload.nodeId);
        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}
function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? "*" : "?";
  } else {
    return key.repeatable ? "+" : "";
  }
}
function formatRouteRecordMatcherForStateInspector(route) {
  const { record } = route;
  const fields = [
    { editable: false, key: "path", value: record.path }
  ];
  if (record.name != null) {
    fields.push({
      editable: false,
      key: "name",
      value: record.name
    });
  }
  fields.push({ editable: false, key: "regexp", value: route.re });
  if (route.keys.length) {
    fields.push({
      editable: false,
      key: "keys",
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map((key) => `${key.name}${modifierForKey(key)}`).join(" "),
          tooltip: "Param keys",
          value: route.keys
        }
      }
    });
  }
  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: "redirect",
      value: record.redirect
    });
  }
  if (route.alias.length) {
    fields.push({
      editable: false,
      key: "aliases",
      value: route.alias.map((alias) => alias.record.path)
    });
  }
  fields.push({
    key: "score",
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map((score) => score.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: route.score
      }
    }
  });
  return fields;
}
const PINK_500 = 15485081;
const BLUE_600 = 2450411;
const LIME_500 = 8702998;
const CYAN_400 = 2282478;
const ORANGE_400 = 16486972;
const DARK = 6710886;
function formatRouteRecordForInspector(route) {
  const tags = [];
  const { record } = route;
  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }
  if (record.aliasOf) {
    tags.push({
      label: "alias",
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }
  if (route.__vd_match) {
    tags.push({
      label: "matches",
      textColor: 0,
      backgroundColor: PINK_500
    });
  }
  if (route.__vd_exactActive) {
    tags.push({
      label: "exact",
      textColor: 0,
      backgroundColor: LIME_500
    });
  }
  if (route.__vd_active) {
    tags.push({
      label: "active",
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }
  if (record.redirect) {
    tags.push({
      label: "redirect: " + (typeof record.redirect === "string" ? record.redirect : "Object"),
      textColor: 16777215,
      backgroundColor: DARK
    });
  }
  let id2 = record.__vd_id;
  if (id2 == null) {
    id2 = String(routeRecordId++);
    record.__vd_id = id2;
  }
  return {
    id: id2,
    label: record.path,
    tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
}
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
  const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;
  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some((match) => isSameRouteRecord(match, route.record));
  }
  route.children.forEach((childRoute) => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
  const found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;
  if (!found || found.length < 3) {
    return false;
  }
  const nonEndingRE = new RegExp(found[1].replace(/\$$/, ""), found[2]);
  if (nonEndingRE.test(filter)) {
    route.children.forEach((child) => isRouteMatching(child, filter));
    if (route.record.path !== "/" || filter === "/") {
      route.__vd_match = route.re.test(filter);
      return true;
    }
    return false;
  }
  const path = route.record.path.toLowerCase();
  const decodedPath = decode(path);
  if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter)))
    return true;
  if (decodedPath.startsWith(filter) || path.startsWith(filter))
    return true;
  if (route.record.name && String(route.record.name).includes(filter))
    return true;
  return route.children.some((child) => isRouteMatching(child, filter));
}
function omit(obj, keys) {
  const ret = {};
  for (const key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
}
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  if (!routerHistory)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else {
      warn(`Cannot remove non-existent route "${String(name)}"`);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      {
        if (href2.startsWith("//"))
          warn(`Location "${rawLocation}" resolved to "${href2}". A resolved location cannot start with multiple slashes.`);
        else if (!matchedRoute2.matched.length) {
          warn(`No match found for location with path "${rawLocation}"`);
        }
      }
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      if ("params" in rawLocation && !("name" in rawLocation) && Object.keys(rawLocation.params).length) {
        warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
      }
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    if (hash && !hash.startsWith("#")) {
      warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
    }
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    {
      if (href.startsWith("//")) {
        warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
      } else if (!matchedRoute.matched.length) {
        warn(`No match found for location with path "${"path" in rawLocation ? rawLocation.path : rawLocation}"`);
      }
    }
    return assign({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      if (!("path" in newTargetLocation) && !("name" in newTargetLocation)) {
        warn(`Invalid redirect found:
${JSON.stringify(newTargetLocation, null, 2)}
 when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
        throw new Error("Invalid redirect");
      }
      return assign({
        query: to.query,
        hash: to.hash,
        params: to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
        state: data,
        force,
        replace: replace2
      }), redirectedFrom || targetLocation);
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(from, from, true, false);
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(failure2, 2)) {
          if (isSameRouteLocation(stringifyQuery$1, resolve2(failure2.to), toLocation) && redirectedFrom && (redirectedFrom._count = redirectedFrom._count ? redirectedFrom._count + 1 : 1) > 10) {
            warn(`Detected an infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`);
            return Promise.reject(new Error("Infinite redirect in navigation guard"));
          }
          return pushWithRedirect(assign(locationAsObject(failure2.to), {
            state: data,
            force,
            replace: replace2
          }), redirectedFrom || toLocation);
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (Array.isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list())
      guard(to, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop$1);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, 4 | 8)) {
          return error;
        }
        if (isNavigationFailure(error, 2)) {
          pushWithRedirect(error.to, toLocation).then((failure) => {
            if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$1);
          return Promise.reject();
        }
        if (info.delta)
          routerHistory.go(-info.delta, false);
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(toLocation, from, false);
        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$1);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      {
        warn("uncaught error during route navigation:");
      }
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router = {
    currentRoute,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app) {
      const router2 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
          warn("Unexpected error when starting the router:", err);
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app.provide(routerKey, router2);
      app.provide(routeLocationKey, reactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
      if (isBrowser) {
        addDevtools(app, router2, matcher);
      }
    }
  };
  return router;
}
function runGuardQueue(guards) {
  return guards.reduce((promise2, guard) => promise2.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
const useActiveHeaderLinks = ({ headerLinkSelector: headerLinkSelector2, headerAnchorSelector: headerAnchorSelector2, delay: delay2, offset: offset2 = 5 }) => {
  const router = useRouter();
  const page = usePageData();
  const setActiveRouteHash = () => {
    var _a2, _b, _c, _d;
    const scrollTop = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
    const isAtPageTop = Math.abs(scrollTop - 0) < offset2;
    if (isAtPageTop) {
      replaceWithoutScrollBehavior(router, {
        hash: "",
        force: true
      });
      return;
    }
    const scrollBottom = window.innerHeight + scrollTop;
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const isAtPageBottom = Math.abs(scrollHeight - scrollBottom) < offset2;
    const headerLinks = Array.from(document.querySelectorAll(headerLinkSelector2));
    const headerAnchors = Array.from(document.querySelectorAll(headerAnchorSelector2));
    const existedHeaderAnchors = headerAnchors.filter((anchor) => headerLinks.some((link) => link.hash === anchor.hash));
    for (let i = 0; i < existedHeaderAnchors.length; i++) {
      const anchor = existedHeaderAnchors[i];
      const nextAnchor = existedHeaderAnchors[i + 1];
      const hasPassedCurrentAnchor = scrollTop >= ((_b = (_a2 = anchor.parentElement) == null ? void 0 : _a2.offsetTop) != null ? _b : 0) - offset2;
      const hasNotPassedNextAnchor = !nextAnchor || scrollTop < ((_d = (_c = nextAnchor.parentElement) == null ? void 0 : _c.offsetTop) != null ? _d : 0) - offset2;
      const isActive = hasPassedCurrentAnchor && hasNotPassedNextAnchor;
      if (!isActive)
        continue;
      const routeHash = decodeURIComponent(router.currentRoute.value.hash);
      const anchorHash = decodeURIComponent(anchor.hash);
      if (routeHash === anchorHash)
        return;
      if (isAtPageBottom) {
        for (let j = i + 1; j < existedHeaderAnchors.length; j++) {
          if (routeHash === decodeURIComponent(existedHeaderAnchors[j].hash)) {
            return;
          }
        }
      }
      replaceWithoutScrollBehavior(router, {
        hash: anchorHash,
        force: true
      });
      return;
    }
  };
  const onScroll = r(setActiveRouteHash, delay2);
  onMounted(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
  });
  watch(() => page.value.path, onScroll);
};
const replaceWithoutScrollBehavior = async (router, ...args) => {
  const { scrollBehavior } = router.options;
  router.options.scrollBehavior = void 0;
  await router.replace(...args).finally(() => router.options.scrollBehavior = scrollBehavior);
};
const headerLinkSelector = "a.sidebar-item";
const headerAnchorSelector = ".header-anchor";
const delay$1 = 300;
const offset = 5;
var clientConfig0 = defineClientConfig({
  setup() {
    useActiveHeaderLinks({
      headerLinkSelector,
      headerAnchorSelector,
      delay: delay$1,
      offset
    });
  }
});
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$4 = /* @__PURE__ */ (() => ":root {\n  --back-to-top-z-index: 5;\n  --back-to-top-color: #3eaf7c;\n  --back-to-top-color-hover: #71cda3;\n}\n")();
var backToTop = /* @__PURE__ */ (() => ".back-to-top {\n  cursor: pointer;\n  position: fixed;\n  bottom: 2rem;\n  right: 2.5rem;\n  width: 2rem;\n  height: 1.2rem;\n  background-color: var(--back-to-top-color);\n  -webkit-mask: url('/assets/back-to-top.8efcbe56.svg') no-repeat;\n          mask: url('/assets/back-to-top.8efcbe56.svg') no-repeat;\n  z-index: var(--back-to-top-z-index);\n}\n\n.back-to-top:hover {\n  background-color: var(--back-to-top-color-hover);\n}\n\n@media (max-width: 959px) {\n  .back-to-top {\n    display: none;\n  }\n}\n\n.back-to-top-enter-active,\n.back-to-top-leave-active {\n  transition: opacity 0.3s;\n}\n\n.back-to-top-enter-from,\n.back-to-top-leave-to {\n  opacity: 0;\n}\n")();
const BackToTop = defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = ref(0);
    const show = computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => h(Transition, {
      name: "back-to-top"
    }, () => show.value ? backToTopEl : null);
  }
});
var clientConfig1 = defineClientConfig({
  rootComponents: [BackToTop]
});
var vars$3 = /* @__PURE__ */ (() => ":root {\n  --external-link-icon-color: #aaa;\n}\n")();
var externalLinkIcon = /* @__PURE__ */ (() => ".external-link-icon {\n  position: relative;\n  display: inline-block;\n  color: var(--external-link-icon-color);\n  vertical-align: middle;\n  top: -1px;\n}\n\n.external-link-icon-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n")();
const svg = h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => {
      var _a2;
      return (_a2 = props.locales[routeLocale.value]) != null ? _a2 : {
        openInNewWindow: "open in new window"
      };
    });
    return () => h("span", [
      svg,
      h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales$1 = { "/": { "openInNewWindow": "open in new window" } };
var clientConfig2 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h(ExternalLinkIcon, { locales: locales$1 }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n) => {
    const started = nprogress$1.isStarted();
    n = clamp(n, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n === 1 ? null : n;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css$1(bar, {
        transform: "translate3d(" + toBarPerc(n) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n === 1) {
        css$1(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css$1(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n = nprogress$1.status;
    if (!n) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
    }
    n = clamp(n + amount, 0, 0.994);
    return nprogress$1.set(n);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css$1(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n, min, max) => {
  if (n < min)
    return min;
  if (n > max)
    return max;
  return n;
};
const toBarPerc = (n) => (-1 + n) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css$1 = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i--) {
      vendorName = cssPrefixes[i] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
var vars$2 = /* @__PURE__ */ (() => ":root {\n  --nprogress-color: #29d;\n  --nprogress-z-index: 1031;\n}\n")();
var nprogress = /* @__PURE__ */ (() => "#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: var(--nprogress-color);\n  position: fixed;\n  z-index: var(--nprogress-z-index);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n}\n")();
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
var clientConfig3 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse(`{"navbar":[{"text":"\u5BFC\u822A\u9875","link":"/nav-page/","activeMatch":"^/nav-page/"},{"text":"\u6307\u5357","link":"/guide/","activeMatch":"^/guide/"},{"text":"\u997F\u4E86\u4E48\u7EC4\u4EF6\u5E93","link":"/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.md","activeMatch":"^/el-component/"},{"text":"\u5DE5\u5177\u51FD\u6570","link":"/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.md","activeMatch":"^/utils/"},{"text":"\u5F71\u89C6\u63A8\u8350","link":"/movies/","activeMatch":"^/movies/"},{"text":"Group","children":[{"text":"\u5206\u7C7B","link":"/categories/"},{"text":"\u6807\u7B7E","link":"/tags/"},{"text":"\u5F52\u6863","link":"/archives/"}]}],"sidebar":{"/el-component/":["01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.md","02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.md","04.Vue button\u7EC4\u4EF6\u5F00\u53D1.md","05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.md","06.Vue input\u7EC4\u4EF6\u5F00\u53D1.md","07.Vue message\u7EC4\u4EF6\u5F00\u53D1.md","08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.md"],"/utils/":[{"text":"Array","collapsible":true,"children":["/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.md","/utils/Array/clone\u514B\u9686\u6570\u7EC4.md","/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.md","/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.md","/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.md","/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.md","/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.md","/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.md","/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.md","/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md","/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md","/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.md","/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.md","/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.md","/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.md","/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.md","/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.md","/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.md","/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.md"]},{"text":"Function","collapsible":true,"children":["/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.md","/utils/Function/debounce\u51FD\u6570\u9632\u6296.md","/utils/Function/throttle\u51FD\u6570\u8282\u6D41.md","/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.md"]},{"text":"Number","collapsible":true,"children":["/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.md","/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.md","/utils/Number/average\u6C42\u5E73\u5747\u503C.md","/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.md","/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.md","/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.md"]},{"text":"String","collapsible":true,"children":["/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.md","/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.md","/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.md"]}]},"logo":"https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/favicon.ico","contributors":false,"docsDir":"docs","docsBranch":"master","docsRepo":"https://github.com/qqlcx5/vuepress-next","editLinkPattern":":repo/edit/:branch/:path","locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`);
const themeData = ref(themeData$1);
const useThemeData = () => themeData;
if (import_meta.webpackHot || false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data) => {
    themeData.value = data;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a2;
  return __spreadValues(__spreadValues({}, theme), (_a2 = theme.locales) == null ? void 0 : _a2[routeLocale]);
};
var clientConfig4 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
    {
      setupDevtoolsPlugin({
        app,
        id: "org.vuejs.vuepress.plugin-theme-data",
        label: "VuePress Theme Data Plugin",
        packageName: "@vuepress/plugin-theme-data",
        homepage: "https://v2.vuepress.vuejs.org",
        logo: "https://v2.vuepress.vuejs.org/images/hero.png",
        componentStateTypes: ["VuePress"]
      }, (api) => {
        api.on.inspectComponent((payload) => {
          payload.instanceData.state.push({
            type: "VuePress",
            key: "themeData",
            editable: false,
            value: themeData2.value
          }, {
            type: "VuePress",
            key: "themeLocaleData",
            editable: false,
            value: themeLocaleData.value
          });
        });
      });
    }
  }
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["badge", __props.type]),
        style: normalizeStyle({
          verticalAlign: __props.vertical
        })
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(__props.text), 1)
        ])
      ], 6);
    };
  }
});
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "Badge.vue"]]);
const CodeGroup = defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = ref(-1);
    const tabRefs = ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a2;
      const items = (((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return h("div", { class: "code-group" }, [
        h("div", { class: "code-group__nav" }, h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return h("li", { class: "code-group__li" }, h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const _hoisted_1 = ["aria-selected"];
const __default__ = defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["code-group-item", { "code-group-item__active": __props.active }]),
        "aria-selected": __props.active
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1);
    };
  }
}));
var CodeGroupItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "CodeGroupItem.vue"]]);
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
var _a;
const isClient = typeof window !== "undefined";
const isString = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}
function tryOnBeforeMount(fn, sync = true) {
  if (getCurrentInstance())
    onBeforeMount(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter = bypassFilter
  } = _a2, watchOptions = __objRest$5(_a2, [
    "eventFilter"
  ]);
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter: filter
  } = _a2, watchOptions = __objRest$1(_a2, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$1(__spreadValues$1({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}
function unrefElement(elRef) {
  const plain = unref(elRef);
  return plain != null && "$el" in plain ? plain.$el : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported3 = Boolean(window2 && "matchMedia" in window2);
  let mediaQuery;
  const matches = ref(false);
  const update = () => {
    if (!isSupported3)
      return;
    if (!mediaQuery)
      mediaQuery = window2.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnBeforeMount(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in mediaQuery)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
function useStorage(key, initialValue, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(initialValue);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = unref(initialValue);
  const type2 = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type2];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
  if (window2 && listenToStorageChanges)
    useEventListener(window2, "storage", update);
  update();
  return data;
  function write(v) {
    try {
      if (v == null)
        storage.removeItem(key);
      else
        storage.setItem(key, serializer.write(v));
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    } finally {
      resumeWatch();
    }
  }
  function update(event) {
    if (event && event.key !== key)
      return;
    data.value = read(event);
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = usePreferredDark();
  const darkStorage = useStorage("vuepress-color-scheme", themeLocale.value.colorMode);
  const isDarkMode = computed({
    get() {
      if (!themeLocale.value.colorModeSwitch) {
        return themeLocale.value.colorMode === "dark";
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window == null ? void 0 : window.document.querySelector("html");
    htmlEl == null ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  onMounted(() => {
    watch(isDarkMode, update, { immediate: true });
  });
  onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched == null ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString$1(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(encodeURI(item));
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve2) => promiseResolve = resolve2);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a2, _b, _c, _d;
  const sidebarConfig = (_b = (_a2 = frontmatter.sidebar) != null ? _a2 : themeLocale.sidebar) != null ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) != null ? _c : themeLocale.sidebarDepth) != null ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a2;
    let childItem;
    if (isString$1(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a2 = page.value.headers[0]) == null ? void 0 : _a2.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a2;
  const route = useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a2 = sidebarConfig[sidebarPath]) != null ? _a2 : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var index = /* @__PURE__ */ (() => ':root {\n  --c-brand: #3eaf7c;\n  --c-brand-light: #4abf8a;\n  --c-bg: #ffffff;\n  --c-bg-light: #f3f4f5;\n  --c-bg-lighter: #eeeeee;\n  --c-bg-navbar: var(--c-bg);\n  --c-bg-sidebar: var(--c-bg);\n  --c-bg-arrow: #cccccc;\n  --c-text: #2c3e50;\n  --c-text-accent: var(--c-brand);\n  --c-text-light: #3a5169;\n  --c-text-lighter: #4e6e8e;\n  --c-text-lightest: #6a8bad;\n  --c-text-quote: #999999;\n  --c-border: #eaecef;\n  --c-border-dark: #dfe2e5;\n  --c-tip: #42b983;\n  --c-tip-bg: var(--c-bg-light);\n  --c-tip-title: var(--c-text);\n  --c-tip-text: var(--c-text);\n  --c-tip-text-accent: var(--c-text-accent);\n  --c-warning: #e7c000;\n  --c-warning-bg: #fffae3;\n  --c-warning-title: #ad9000;\n  --c-warning-text: #746000;\n  --c-warning-text-accent: var(--c-text);\n  --c-danger: #cc0000;\n  --c-danger-bg: #ffe0e0;\n  --c-danger-title: #990000;\n  --c-danger-text: #660000;\n  --c-danger-text-accent: var(--c-text);\n  --c-details-bg: #eeeeee;\n  --c-badge-tip: var(--c-tip);\n  --c-badge-warning: var(--c-warning);\n  --c-badge-danger: var(--c-danger);\n  --t-color: 0.3s ease;\n  --t-transform: 0.3s ease;\n  --code-bg-color: #282c34;\n  --code-hl-bg-color: rgba(0, 0, 0, 0.66);\n  --code-ln-color: #9e9e9e;\n  --code-ln-wrapper-width: 3.5rem;\n  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\n    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  --font-family-code: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;\n  --navbar-height: 3.6rem;\n  --navbar-padding-v: 0.7rem;\n  --navbar-padding-h: 1.5rem;\n  --sidebar-width: 20rem;\n  --sidebar-width-mobile: calc(var(--sidebar-width) * 0.82);\n  --content-width: 740px;\n  --homepage-width: 960px;\n}\n\n.back-to-top {\n  --back-to-top-color: var(--c-brand);\n  --back-to-top-color-hover: var(--c-brand-light);\n}\n\n.DocSearch {\n  --docsearch-primary-color: var(--c-brand);\n  --docsearch-text-color: var(--c-text);\n  --docsearch-highlight-color: var(--c-brand);\n  --docsearch-muted-color: var(--c-text-quote);\n  --docsearch-container-background: rgba(9, 10, 17, 0.8);\n  --docsearch-modal-background: var(--c-bg-light);\n  --docsearch-searchbox-background: var(--c-bg-lighter);\n  --docsearch-searchbox-focus-background: var(--c-bg);\n  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--c-brand);\n  --docsearch-hit-color: var(--c-text-light);\n  --docsearch-hit-active-color: var(--c-bg);\n  --docsearch-hit-background: var(--c-bg);\n  --docsearch-hit-shadow: 0 1px 3px 0 var(--c-border-dark);\n  --docsearch-footer-background: var(--c-bg);\n}\n\n.external-link-icon {\n  --external-link-icon-color: var(--c-text-quote);\n}\n\n.medium-zoom-overlay {\n  --medium-zoom-bg-color: var(--c-bg);\n}\n\n#nprogress {\n  --nprogress-color: var(--c-brand);\n}\n\n.pwa-popup {\n  --pwa-popup-text-color: var(--c-text);\n  --pwa-popup-bg-color: var(--c-bg);\n  --pwa-popup-border-color: var(--c-brand);\n  --pwa-popup-shadow: 0 4px 16px var(--c-brand);\n  --pwa-popup-btn-text-color: var(--c-bg);\n  --pwa-popup-btn-bg-color: var(--c-brand);\n  --pwa-popup-btn-hover-bg-color: var(--c-brand-light);\n}\n\n.search-box {\n  --search-bg-color: var(--c-bg);\n  --search-accent-color: var(--c-brand);\n  --search-text-color: var(--c-text);\n  --search-border-color: var(--c-border);\n  --search-item-text-color: var(--c-text-lighter);\n  --search-item-focus-bg-color: var(--c-bg-light);\n}\n\nhtml.dark {\n  --c-brand: #3aa675;\n  --c-brand-light: #349469;\n  --c-bg: #22272e;\n  --c-bg-light: #2b313a;\n  --c-bg-lighter: #262c34;\n  --c-text: #adbac7;\n  --c-text-light: #96a7b7;\n  --c-text-lighter: #8b9eb0;\n  --c-text-lightest: #8094a8;\n  --c-border: #3e4c5a;\n  --c-border-dark: #34404c;\n  --c-tip: #318a62;\n  --c-warning: #ceab00;\n  --c-warning-bg: #7e755b;\n  --c-warning-title: #ceac03;\n  --c-warning-text: #362e00;\n  --c-danger: #940000;\n  --c-danger-bg: #806161;\n  --c-danger-title: #610000;\n  --c-danger-text: #3a0000;\n  --c-details-bg: #323843;\n  --code-hl-bg-color: #363b46;\n}\n\nhtml.dark .DocSearch {\n  --docsearch-logo-color: var(--c-text);\n  --docsearch-modal-shadow: inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309;\n  --docsearch-key-shadow: inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d,\n    0 2px 2px 0 rgba(3, 4, 9, 0.3);\n  --docsearch-key-gradient: linear-gradient(-225deg, #444950, #1c1e21);\n  --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5),\n    0 -4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: var(--c-bg);\n  transition: background-color var(--t-color);\n}\n\nhtml.dark {\n  color-scheme: dark;\n}\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  font-family: var(--font-family);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 1rem;\n  color: var(--c-text);\n}\n\na {\n  font-weight: 500;\n  color: var(--c-text-accent);\n  text-decoration: none;\n  overflow-wrap: break-word;\n}\n\np a code {\n  font-weight: 400;\n  color: var(--c-text-accent);\n}\n\nkbd {\n  font-family: var(--font-family-code);\n  color: var(--c-text);\n  background: var(--c-bg-lighter);\n  border: solid 0.15rem var(--c-border-dark);\n  border-bottom: solid 0.25rem var(--c-border-dark);\n  border-radius: 0.15rem;\n  padding: 0 0.15em;\n}\n\ncode {\n  font-family: var(--font-family-code);\n  color: var(--c-text-lighter);\n  padding: 0.25rem 0.5rem;\n  margin: 0;\n  font-size: 0.85em;\n  background-color: var(--c-bg-lighter);\n  border-radius: 3px;\n  overflow-wrap: break-word;\n  transition: background-color var(--t-color);\n}\n\nblockquote {\n  font-size: 1rem;\n  color: var(--c-text-quote);\n  border-left: 0.2rem solid var(--c-border-dark);\n  margin: 1rem 0;\n  padding: 0.25rem 0 0.25rem 1rem;\n}\n\nblockquote > p {\n  margin: 0;\n}\n\nul,\nol {\n  padding-left: 1.2em;\n}\n\nstrong {\n  font-weight: 600;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600;\n  line-height: 1.25;\n}\n\nh1:focus-visible,\nh2:focus-visible,\nh3:focus-visible,\nh4:focus-visible,\nh5:focus-visible,\nh6:focus-visible {\n  outline: none;\n}\n\nh1:hover .header-anchor,\nh2:hover .header-anchor,\nh3:hover .header-anchor,\nh4:hover .header-anchor,\nh5:hover .header-anchor,\nh6:hover .header-anchor {\n  opacity: 1;\n}\n\nh1 {\n  font-size: 2.2rem;\n}\n\nh2 {\n  font-size: 1.65rem;\n  padding-bottom: 0.3rem;\n  border-bottom: 1px solid var(--c-border);\n  transition: border-color var(--t-color);\n}\n\nh3 {\n  font-size: 1.35rem;\n}\n\nh4 {\n  font-size: 1.15rem;\n}\n\nh5 {\n  font-size: 1.05rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\na.header-anchor {\n  font-size: 0.85em;\n  float: left;\n  margin-left: -0.87em;\n  padding-right: 0.23em;\n  margin-top: 0.125em;\n  opacity: 0;\n}\n\na.header-anchor:hover {\n  text-decoration: none;\n}\n\na.header-anchor:focus-visible {\n  opacity: 1;\n}\n\np,\nul,\nol {\n  line-height: 1.7;\n}\n\nhr {\n  border: 0;\n  border-top: 1px solid var(--c-border);\n}\n\ntable {\n  border-collapse: collapse;\n  margin: 1rem 0;\n  display: block;\n  overflow-x: auto;\n  transition: border-color var(--t-color);\n}\n\ntr {\n  border-top: 1px solid var(--c-border-dark);\n  transition: border-color var(--t-color);\n}\n\ntr:nth-child(2n) {\n  background-color: var(--c-bg-light);\n  transition: background-color var(--t-color);\n}\n\nth,\ntd {\n  padding: 0.6em 1em;\n  border: 1px solid var(--c-border-dark);\n  transition: border-color var(--t-color);\n}\n\n.arrow {\n  display: inline-block;\n  width: 0;\n  height: 0;\n}\n\n.arrow.up {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 6px solid var(--c-bg-arrow);\n}\n\n.arrow.down {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 6px solid var(--c-bg-arrow);\n}\n\n.arrow.right {\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid transparent;\n  border-left: 6px solid var(--c-bg-arrow);\n}\n\n.arrow.left {\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid transparent;\n  border-right: 6px solid var(--c-bg-arrow);\n}\n\n.badge {\n  display: inline-block;\n  font-size: 14px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 3px;\n  padding: 0 6px;\n  color: var(--c-bg);\n  vertical-align: top;\n  transition: color var(--t-color), background-color var(--t-color);\n}\n\n.badge.tip {\n  background-color: var(--c-badge-tip);\n}\n\n.badge.warning {\n  background-color: var(--c-badge-warning);\n}\n\n.badge.danger {\n  background-color: var(--c-badge-danger);\n}\n\n.table-of-contents .badge {\n  vertical-align: middle;\n}\n\n.badge + .badge {\n  margin-left: 5px;\n}\n\n:root .medium-zoom-overlay {\n  --medium-zoom-bg-color: #000;\n  --medium-zoom-opacity: 0.8;\n}\n\ncode[class*=language-],\npre[class*=language-] {\n  color: #ccc;\n  background: none;\n  font-family: var(--font-family-code);\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\n/* Code blocks */\n\npre[class*=language-] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n}\n\n:not(pre) > code[class*=language-],\npre[class*=language-] {\n  background: #2d2d2d;\n}\n\n/* Inline code */\n\n:not(pre) > code[class*=language-] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #999;\n}\n\n.token.punctuation {\n  color: #ccc;\n}\n\n.token.tag,\n.token.attr-name,\n.token.namespace,\n.token.deleted {\n  color: #ec5975;\n}\n\n.token.function-name {\n  color: #6196cc;\n}\n\n.token.boolean,\n.token.number,\n.token.function {\n  color: #f08d49;\n}\n\n.token.property,\n.token.class-name,\n.token.constant,\n.token.symbol {\n  color: #f8c555;\n}\n\n.token.selector,\n.token.important,\n.token.atrule,\n.token.keyword,\n.token.builtin {\n  color: #cc99cd;\n}\n\n.token.string,\n.token.char,\n.token.attr-value,\n.token.regex,\n.token.variable {\n  color: #7ec699;\n}\n\n.token.operator,\n.token.entity,\n.token.url {\n  color: #67cdcc;\n}\n\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n\n.token.italic {\n  font-style: italic;\n}\n\n.token.entity {\n  cursor: help;\n}\n\n.token.inserted {\n  color: #3eaf7c;\n}\n\n.theme-default-content pre,\n.theme-default-content pre[class*=language-] {\n  line-height: 1.4;\n  padding: 1.3rem 1.5rem;\n  margin: 0.85rem 0;\n  border-radius: 6px;\n  overflow: auto;\n}\n\n.theme-default-content pre code,\n.theme-default-content pre[class*=language-] code {\n  color: #fff;\n  padding: 0;\n  background-color: transparent;\n  border-radius: 0;\n  overflow-wrap: unset;\n  -webkit-font-smoothing: auto;\n  -moz-osx-font-smoothing: auto;\n}\n\n.theme-default-content .line-number {\n  font-family: var(--font-family-code);\n}\n\ndiv[class*=language-] {\n  position: relative;\n  background-color: var(--code-bg-color);\n  border-radius: 6px;\n}\n\ndiv[class*=language-]::before {\n  position: absolute;\n  z-index: 3;\n  top: 0.8em;\n  right: 1em;\n  font-size: 0.75rem;\n  color: var(--code-ln-color);\n}\n\ndiv[class*=language-] pre,\ndiv[class*=language-] pre[class*=language-] {\n  background: transparent !important;\n  position: relative;\n  z-index: 1;\n}\n\ndiv[class*=language-] .highlight-lines {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding-top: 1.3rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  line-height: 1.4;\n}\n\ndiv[class*=language-] .highlight-lines .highlight-line {\n  background-color: var(--code-hl-bg-color);\n}\n\ndiv[class*=language-]:not(.line-numbers-mode) .line-numbers {\n  display: none;\n}\n\ndiv[class*=language-].line-numbers-mode .highlight-lines .highlight-line {\n  position: relative;\n}\n\ndiv[class*=language-].line-numbers-mode .highlight-lines .highlight-line::before {\n  content: " ";\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  display: block;\n  width: var(--code-ln-wrapper-width);\n  height: 100%;\n}\n\ndiv[class*=language-].line-numbers-mode pre {\n  margin-left: var(--code-ln-wrapper-width);\n  padding-left: 1rem;\n  vertical-align: middle;\n}\n\ndiv[class*=language-].line-numbers-mode .line-numbers {\n  position: absolute;\n  top: 0;\n  width: var(--code-ln-wrapper-width);\n  text-align: center;\n  color: var(--code-ln-color);\n  padding-top: 1.25rem;\n  line-height: 1.4;\n  counter-reset: line-number;\n}\n\ndiv[class*=language-].line-numbers-mode .line-numbers .line-number {\n  position: relative;\n  z-index: 3;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 1.4em;\n}\n\ndiv[class*=language-].line-numbers-mode .line-numbers .line-number::before {\n  counter-increment: line-number;\n  content: counter(line-number);\n  font-size: 0.85em;\n}\n\ndiv[class*=language-].line-numbers-mode::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: var(--code-ln-wrapper-width);\n  height: 100%;\n  border-radius: 6px 0 0 6px;\n  border-right: 1px solid var(--code-hl-bg-color);\n}\n\ndiv[class*=language-].ext-c:before {\n  content: "c";\n}\n\ndiv[class*=language-].ext-cpp:before {\n  content: "cpp";\n}\n\ndiv[class*=language-].ext-cs:before {\n  content: "cs";\n}\n\ndiv[class*=language-].ext-css:before {\n  content: "css";\n}\n\ndiv[class*=language-].ext-dart:before {\n  content: "dart";\n}\n\ndiv[class*=language-].ext-docker:before {\n  content: "docker";\n}\n\ndiv[class*=language-].ext-fs:before {\n  content: "fs";\n}\n\ndiv[class*=language-].ext-go:before {\n  content: "go";\n}\n\ndiv[class*=language-].ext-html:before {\n  content: "html";\n}\n\ndiv[class*=language-].ext-java:before {\n  content: "java";\n}\n\ndiv[class*=language-].ext-js:before {\n  content: "js";\n}\n\ndiv[class*=language-].ext-json:before {\n  content: "json";\n}\n\ndiv[class*=language-].ext-kt:before {\n  content: "kt";\n}\n\ndiv[class*=language-].ext-less:before {\n  content: "less";\n}\n\ndiv[class*=language-].ext-makefile:before {\n  content: "makefile";\n}\n\ndiv[class*=language-].ext-md:before {\n  content: "md";\n}\n\ndiv[class*=language-].ext-php:before {\n  content: "php";\n}\n\ndiv[class*=language-].ext-py:before {\n  content: "py";\n}\n\ndiv[class*=language-].ext-rb:before {\n  content: "rb";\n}\n\ndiv[class*=language-].ext-rs:before {\n  content: "rs";\n}\n\ndiv[class*=language-].ext-sass:before {\n  content: "sass";\n}\n\ndiv[class*=language-].ext-scss:before {\n  content: "scss";\n}\n\ndiv[class*=language-].ext-sh:before {\n  content: "sh";\n}\n\ndiv[class*=language-].ext-styl:before {\n  content: "styl";\n}\n\ndiv[class*=language-].ext-ts:before {\n  content: "ts";\n}\n\ndiv[class*=language-].ext-toml:before {\n  content: "toml";\n}\n\ndiv[class*=language-].ext-vue:before {\n  content: "vue";\n}\n\ndiv[class*=language-].ext-yml:before {\n  content: "yml";\n}\n\n@media (max-width: 419px) {\n  .theme-default-content div[class*=language-] {\n    margin: 0.85rem -1.5rem;\n    border-radius: 0;\n  }\n}\n\n:root .medium-zoom-overlay {\n  --medium-zoom-bg-color: #000;\n  --medium-zoom-opacity: 0.8;\n}\n\n/**\n * code-group\n */\n\n.code-group__nav {\n  margin-top: 0.85rem;\n  margin-bottom: calc(-1.7rem - 6px);\n  padding-bottom: calc(1.7rem - 6px);\n  padding-left: 10px;\n  padding-top: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  background-color: var(--code-bg-color);\n}\n\n.code-group__ul {\n  margin: auto 0;\n  padding-left: 0;\n  display: inline-flex;\n  list-style: none;\n}\n\n.code-group__nav-tab {\n  border: 0;\n  padding: 5px;\n  cursor: pointer;\n  background-color: transparent;\n  font-size: 0.85em;\n  line-height: 1.4;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n\n.code-group__nav-tab:focus {\n  outline: none;\n}\n\n.code-group__nav-tab:focus-visible {\n  outline: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.code-group__nav-tab-active {\n  border-bottom: var(--c-brand) 1px solid;\n}\n\n@media (max-width: 419px) {\n  .code-group__nav {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n    border-radius: 0;\n  }\n}\n\n/**\n * code-group-item\n */\n\n.code-group-item {\n  display: none;\n}\n\n.code-group-item__active {\n  display: block;\n}\n\n.code-group-item > pre {\n  background-color: orange;\n}\n\n.custom-container {\n  transition: color var(--t-color), border-color var(--t-color), background-color var(--t-color);\n}\n\n.custom-container .custom-container-title {\n  font-weight: 600;\n}\n\n.custom-container .custom-container-title:not(:only-child) {\n  margin-bottom: -0.4rem;\n}\n\n.custom-container.tip, .custom-container.warning, .custom-container.danger {\n  padding: 0.1rem 1.5rem;\n  border-left-width: 0.5rem;\n  border-left-style: solid;\n  margin: 1rem 0;\n}\n\n.custom-container.tip {\n  border-color: var(--c-tip);\n  background-color: var(--c-tip-bg);\n  color: var(--c-tip-text);\n}\n\n.custom-container.tip .custom-container-title {\n  color: var(--c-tip-title);\n}\n\n.custom-container.tip a {\n  color: var(--c-tip-text-accent);\n}\n\n.custom-container.warning {\n  border-color: var(--c-warning);\n  background-color: var(--c-warning-bg);\n  color: var(--c-warning-text);\n}\n\n.custom-container.warning .custom-container-title {\n  color: var(--c-warning-title);\n}\n\n.custom-container.warning a {\n  color: var(--c-warning-text-accent);\n}\n\n.custom-container.danger {\n  border-color: var(--c-danger);\n  background-color: var(--c-danger-bg);\n  color: var(--c-danger-text);\n}\n\n.custom-container.danger .custom-container-title {\n  color: var(--c-danger-title);\n}\n\n.custom-container.danger a {\n  color: var(--c-danger-text-accent);\n}\n\n.custom-container.details {\n  display: block;\n  position: relative;\n  border-radius: 2px;\n  margin: 1.6em 0;\n  padding: 1.6em;\n  background-color: var(--c-details-bg);\n}\n\n.custom-container.details h4 {\n  margin-top: 0;\n}\n\n.custom-container.details figure:last-child,\n.custom-container.details p:last-child {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.custom-container.details summary {\n  outline: none;\n  cursor: pointer;\n}\n\n:root .medium-zoom-overlay {\n  --medium-zoom-bg-color: #000;\n  --medium-zoom-opacity: 0.8;\n}\n\n.home {\n  padding: var(--navbar-height) 2rem 0;\n  max-width: var(--homepage-width);\n  margin: 0px auto;\n  display: block;\n}\n\n.home .hero {\n  text-align: center;\n}\n\n.home .hero img {\n  max-width: 100%;\n  max-height: 280px;\n  display: block;\n  margin: 3rem auto 1.5rem;\n}\n\n.home .hero h1 {\n  font-size: 3rem;\n}\n\n.home .hero h1,\n.home .hero .description,\n.home .hero .actions {\n  margin: 1.8rem auto;\n}\n\n.home .hero .actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n}\n\n.home .hero .description {\n  max-width: 35rem;\n  font-size: 1.6rem;\n  line-height: 1.3;\n  color: var(--c-text-lightest);\n}\n\n.home .hero .action-button {\n  display: inline-block;\n  font-size: 1.2rem;\n  padding: 0.8rem 1.6rem;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 4px;\n  transition: background-color var(--t-color);\n  box-sizing: border-box;\n}\n\n.home .hero .action-button.primary {\n  color: var(--c-bg);\n  background-color: var(--c-brand);\n  border-color: var(--c-brand);\n}\n\n.home .hero .action-button.primary:hover {\n  background-color: var(--c-brand-light);\n}\n\n.home .hero .action-button.secondary {\n  color: var(--c-brand);\n  background-color: var(--c-bg);\n  border-color: var(--c-brand);\n}\n\n.home .hero .action-button.secondary:hover {\n  color: var(--c-bg);\n  background-color: var(--c-brand-light);\n}\n\n.home .features {\n  border-top: 1px solid var(--c-border);\n  transition: border-color var(--t-color);\n  padding: 1.2rem 0;\n  margin-top: 2.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  align-content: stretch;\n  justify-content: space-between;\n}\n\n.home .feature {\n  flex-grow: 1;\n  flex-basis: 30%;\n  max-width: 30%;\n}\n\n.home .feature h2 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  border-bottom: none;\n  padding-bottom: 0;\n  color: var(--c-text-light);\n}\n\n.home .feature p {\n  color: var(--c-text-lighter);\n}\n\n.home .theme-default-content {\n  padding: 0;\n  margin: 0;\n}\n\n.home .footer {\n  padding: 2.5rem;\n  border-top: 1px solid var(--c-border);\n  text-align: center;\n  color: var(--c-text-lighter);\n  transition: border-color var(--t-color);\n}\n\n@media (max-width: 719px) {\n  .home .features {\n    flex-direction: column;\n  }\n\n  .home .feature {\n    max-width: 100%;\n    padding: 0 2.5rem;\n  }\n}\n\n@media (max-width: 419px) {\n  .home {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .home .hero img {\n    max-height: 210px;\n    margin: 2rem auto 1.2rem;\n  }\n\n  .home .hero h1 {\n    font-size: 2rem;\n  }\n\n  .home .hero h1,\n.home .hero .description,\n.home .hero .actions {\n    margin: 1.2rem auto;\n  }\n\n  .home .hero .description {\n    font-size: 1.2rem;\n  }\n\n  .home .hero .action-button {\n    font-size: 1rem;\n    padding: 0.6rem 1.2rem;\n  }\n\n  .home .feature h2 {\n    font-size: 1.25rem;\n  }\n}\n\n:root .medium-zoom-overlay {\n  --medium-zoom-bg-color: #000;\n  --medium-zoom-opacity: 0.8;\n}\n\n:root .medium-zoom-overlay {\n  --medium-zoom-bg-color: #000;\n  --medium-zoom-opacity: 0.8;\n}\n\n.page {\n  padding-top: var(--navbar-height);\n  padding-left: var(--sidebar-width);\n}\n\n.navbar {\n  position: fixed;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: var(--navbar-height);\n  box-sizing: border-box;\n  border-bottom: 1px solid var(--c-border);\n  background-color: var(--c-bg-navbar);\n  transition: background-color var(--t-color), border-color var(--t-color);\n}\n\n.sidebar {\n  font-size: 16px;\n  width: var(--sidebar-width);\n  position: fixed;\n  z-index: 10;\n  margin: 0;\n  top: var(--navbar-height);\n  left: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  border-right: 1px solid var(--c-border);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--c-brand) var(--c-border);\n  background-color: var(--c-bg-sidebar);\n  transition: transform var(--t-transform), background-color var(--t-color), border-color var(--t-color);\n}\n\n.sidebar::-webkit-scrollbar {\n  width: 7px;\n}\n\n.sidebar::-webkit-scrollbar-track {\n  background-color: var(--c-border);\n}\n\n.sidebar::-webkit-scrollbar-thumb {\n  background-color: var(--c-brand);\n}\n\n.sidebar-mask {\n  position: fixed;\n  z-index: 9;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: none;\n}\n\n.theme-container.sidebar-open .sidebar-mask {\n  display: block;\n}\n\n.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(1) {\n  transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);\n}\n\n.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(2) {\n  transform: scale3d(0, 1, 1);\n}\n\n.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(3) {\n  transform: rotate(-45deg) translate3d(6px, -6px, 0);\n}\n\n.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(1), .theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(3) {\n  transform-origin: center;\n}\n\n.theme-container.no-navbar .theme-default-content h1,\n.theme-container.no-navbar .theme-default-content h2,\n.theme-container.no-navbar .theme-default-content h3,\n.theme-container.no-navbar .theme-default-content h4,\n.theme-container.no-navbar .theme-default-content h5,\n.theme-container.no-navbar .theme-default-content h6 {\n  margin-top: 1.5rem;\n  padding-top: 0;\n}\n\n.theme-container.no-navbar .page {\n  padding-top: 0;\n}\n\n.theme-container.no-navbar .sidebar {\n  top: 0;\n}\n\n@media (min-width: 720px) {\n  .theme-container.no-sidebar .sidebar {\n    display: none;\n  }\n\n  .theme-container.no-sidebar .page {\n    padding-left: 0;\n  }\n}\n\n.theme-default-content a:hover {\n  text-decoration: underline;\n}\n\n.theme-default-content img {\n  max-width: 100%;\n}\n\n.theme-default-content h1,\n.theme-default-content h2,\n.theme-default-content h3,\n.theme-default-content h4,\n.theme-default-content h5,\n.theme-default-content h6 {\n  margin-top: calc(0.5rem - var(--navbar-height));\n  padding-top: calc(1rem + var(--navbar-height));\n  margin-bottom: 0;\n}\n\n.theme-default-content h1:first-child,\n.theme-default-content h2:first-child,\n.theme-default-content h3:first-child,\n.theme-default-content h4:first-child,\n.theme-default-content h5:first-child,\n.theme-default-content h6:first-child {\n  margin-bottom: 1rem;\n}\n\n.theme-default-content h1:first-child + p,\n.theme-default-content h1:first-child + pre,\n.theme-default-content h1:first-child + .custom-container,\n.theme-default-content h2:first-child + p,\n.theme-default-content h2:first-child + pre,\n.theme-default-content h2:first-child + .custom-container,\n.theme-default-content h3:first-child + p,\n.theme-default-content h3:first-child + pre,\n.theme-default-content h3:first-child + .custom-container,\n.theme-default-content h4:first-child + p,\n.theme-default-content h4:first-child + pre,\n.theme-default-content h4:first-child + .custom-container,\n.theme-default-content h5:first-child + p,\n.theme-default-content h5:first-child + pre,\n.theme-default-content h5:first-child + .custom-container,\n.theme-default-content h6:first-child + p,\n.theme-default-content h6:first-child + pre,\n.theme-default-content h6:first-child + .custom-container {\n  margin-top: 2rem;\n}\n\n@media (max-width: 959px) {\n  .sidebar {\n    font-size: 15px;\n    width: var(--sidebar-width-mobile);\n  }\n\n  .page {\n    padding-left: var(--sidebar-width-mobile);\n  }\n}\n\n@media (max-width: 719px) {\n  .sidebar {\n    top: 0;\n    padding-top: var(--navbar-height);\n    transform: translateX(-100%);\n  }\n\n  .page {\n    padding-left: 0;\n  }\n\n  .theme-container.sidebar-open .sidebar {\n    transform: translateX(0);\n  }\n\n  .theme-container.no-navbar .sidebar {\n    padding-top: 0;\n  }\n}\n\n@media (max-width: 419px) {\n  h1 {\n    font-size: 1.9rem;\n  }\n}\n\n:root .medium-zoom-overlay {\n  --medium-zoom-bg-color: #000;\n  --medium-zoom-opacity: 0.8;\n}\n\n.navbar {\n  --navbar-line-height: calc(\n    var(--navbar-height) - 2 * var(--navbar-padding-v)\n  );\n  padding: var(--navbar-padding-v) var(--navbar-padding-h);\n  line-height: var(--navbar-line-height);\n}\n\n.navbar .logo {\n  height: var(--navbar-line-height);\n  margin-right: var(--navbar-padding-v);\n  vertical-align: top;\n}\n\n.navbar .site-name {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: var(--c-text);\n  position: relative;\n}\n\n.navbar .navbar-items-wrapper {\n  display: flex;\n  position: absolute;\n  box-sizing: border-box;\n  top: var(--navbar-padding-v);\n  right: var(--navbar-padding-h);\n  height: var(--navbar-line-height);\n  padding-left: var(--navbar-padding-h);\n  white-space: nowrap;\n  font-size: 0.9rem;\n}\n\n.navbar .navbar-items-wrapper .search-box {\n  flex: 0 0 auto;\n  vertical-align: top;\n}\n\n@media (max-width: 719px) {\n  .navbar {\n    padding-left: 4rem;\n  }\n\n  .navbar .can-hide {\n    display: none;\n  }\n\n  .navbar .site-name {\n    width: calc(100vw - 9.4rem);\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n}\n\n/**\n * navbar-items\n */\n\n.navbar-items {\n  display: inline-block;\n}\n\n.navbar-items a {\n  display: inline-block;\n  line-height: 1.4rem;\n  color: inherit;\n}\n\n.navbar-items a:hover, .navbar-items a.router-link-active {\n  color: var(--c-text-accent);\n}\n\n.navbar-items .navbar-item {\n  position: relative;\n  display: inline-block;\n  margin-left: 1.5rem;\n  line-height: var(--navbar-line-height);\n}\n\n.navbar-items .navbar-item:first-child {\n  margin-left: 0;\n}\n\n@media (max-width: 719px) {\n  .navbar-items .navbar-item {\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 719px) {\n  .navbar-items a:hover, .navbar-items a.router-link-active {\n    color: var(--c-text);\n  }\n\n  .navbar-item > a:hover, .navbar-item > a.router-link-active {\n    margin-bottom: -2px;\n    border-bottom: 2px solid var(--c-text-accent);\n  }\n}\n\n/**\n * toggle sidebar button\n */\n\n.toggle-sidebar-button {\n  position: absolute;\n  top: 0.6rem;\n  left: 1rem;\n  display: none;\n  padding: 0.6rem;\n  cursor: pointer;\n}\n\n.toggle-sidebar-button .icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 1.25rem;\n  height: 1.25rem;\n  cursor: inherit;\n}\n\n.toggle-sidebar-button .icon span {\n  display: inline-block;\n  width: 100%;\n  height: 2px;\n  border-radius: 2px;\n  background-color: var(--c-text);\n  transition: transform var(--t-transform);\n}\n\n.toggle-sidebar-button .icon span:nth-child(2) {\n  margin: 6px 0;\n}\n\n@media screen and (max-width: 719px) {\n  .toggle-sidebar-button {\n    display: block;\n  }\n}\n\n/**\n * toggle color mode button\n */\n\n.toggle-color-mode-button {\n  display: flex;\n  margin: auto;\n  margin-left: 1rem;\n  border: 0;\n  background: none;\n  color: var(--c-text);\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.toggle-color-mode-button:hover {\n  opacity: 1;\n}\n\n.toggle-color-mode-button .icon {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n\n.DocSearch {\n  transition: background-color var(--t-color);\n}\n\n:root .medium-zoom-overlay {\n  --medium-zoom-bg-color: #000;\n  --medium-zoom-opacity: 0.8;\n}\n\n:root .medium-zoom-overlay {\n  --medium-zoom-bg-color: #000;\n  --medium-zoom-opacity: 0.8;\n}\n\n.navbar-dropdown-wrapper {\n  cursor: pointer;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown-title, .navbar-dropdown-wrapper .navbar-dropdown-title-mobile {\n  display: block;\n  font-size: 0.9rem;\n  font-family: inherit;\n  cursor: inherit;\n  padding: inherit;\n  line-height: 1.4rem;\n  background: transparent;\n  border: none;\n  font-weight: 500;\n  color: var(--c-text);\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown-title:hover, .navbar-dropdown-wrapper .navbar-dropdown-title-mobile:hover {\n  border-color: transparent;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown-title .arrow, .navbar-dropdown-wrapper .navbar-dropdown-title-mobile .arrow {\n  vertical-align: middle;\n  margin-top: -1px;\n  margin-left: 0.4rem;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown-title-mobile {\n  display: none;\n  font-weight: 600;\n  font-size: inherit;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown-title-mobile:hover {\n  color: var(--c-text-accent);\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item {\n  color: inherit;\n  line-height: 1.7rem;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle {\n  margin: 0.45rem 0 0;\n  border-top: 1px solid var(--c-border);\n  padding: 1rem 0 0.45rem 0;\n  font-size: 0.9rem;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle > span {\n  padding: 0 1.5rem 0 1.25rem;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle > a {\n  font-weight: inherit;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle > a.router-link-active::after {\n  display: none;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subitem-wrapper {\n  padding: 0;\n  list-style: none;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subitem-wrapper .navbar-dropdown-subitem {\n  font-size: 0.9em;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a {\n  display: block;\n  line-height: 1.7rem;\n  position: relative;\n  border-bottom: none;\n  font-weight: 400;\n  margin-bottom: 0;\n  padding: 0 1.5rem 0 1.25rem;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a:hover {\n  color: var(--c-text-accent);\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a.router-link-active {\n  color: var(--c-text-accent);\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a.router-link-active::after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-left: 5px solid var(--c-text-accent);\n  border-top: 3px solid transparent;\n  border-bottom: 3px solid transparent;\n  position: absolute;\n  top: calc(50% - 2px);\n  left: 9px;\n}\n\n.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item:first-child .navbar-dropdown-subtitle {\n  margin-top: 0;\n  padding-top: 0;\n  border-top: 0;\n}\n\n@media (max-width: 719px) {\n  .navbar-dropdown-wrapper.open .navbar-dropdown-title, .navbar-dropdown-wrapper.open .navbar-dropdown-title-mobile {\n    margin-bottom: 0.5rem;\n  }\n\n  .navbar-dropdown-wrapper .navbar-dropdown-title, .navbar-dropdown-wrapper .navbar-dropdown-title-mobile {\n    display: none;\n  }\n\n  .navbar-dropdown-wrapper .navbar-dropdown-title-mobile {\n    display: block;\n  }\n\n  .navbar-dropdown-wrapper .navbar-dropdown {\n    transition: height 0.1s ease-out;\n    overflow: hidden;\n  }\n\n  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle {\n    border-top: 0;\n    margin-top: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle, .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item > a {\n    font-size: 15px;\n    line-height: 2rem;\n  }\n\n  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subitem {\n    font-size: 14px;\n    padding-left: 1rem;\n  }\n}\n\n@media (min-width: 720px) {\n  .navbar-dropdown-wrapper {\n    height: 1.8rem;\n  }\n\n  .navbar-dropdown-wrapper:hover .navbar-dropdown, .navbar-dropdown-wrapper.open .navbar-dropdown {\n    display: block !important;\n  }\n\n  .navbar-dropdown-wrapper.open:blur {\n    display: none;\n  }\n\n  .navbar-dropdown-wrapper .navbar-dropdown {\n    display: none;\n    height: auto !important;\n    box-sizing: border-box;\n    max-height: calc(100vh - 2.7rem);\n    overflow-y: auto;\n    position: absolute;\n    top: 100%;\n    right: 0;\n    background-color: var(--c-bg-navbar);\n    padding: 0.6rem 0;\n    border: 1px solid var(--c-border);\n    border-bottom-color: var(--c-border-dark);\n    text-align: left;\n    border-radius: 0.25rem;\n    white-space: nowrap;\n    margin: 0;\n  }\n}\n\n:root .medium-zoom-overlay {\n  --medium-zoom-bg-color: #000;\n  --medium-zoom-opacity: 0.8;\n}\n\n:root .medium-zoom-overlay {\n  --medium-zoom-bg-color: #000;\n  --medium-zoom-opacity: 0.8;\n}\n\n.page {\n  padding-bottom: 2rem;\n  display: block;\n}\n\n.page .theme-default-content {\n  max-width: var(--content-width);\n  margin: 0 auto;\n  padding: 2rem 2.5rem;\n  padding-top: 0;\n}\n\n@media (max-width: 959px) {\n  .page .theme-default-content {\n    padding: 2rem;\n  }\n}\n\n@media (max-width: 419px) {\n  .page .theme-default-content {\n    padding: 1.5rem;\n  }\n}\n\n.page-meta {\n  max-width: var(--content-width);\n  margin: 0 auto;\n  padding: 2rem 2.5rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  overflow: auto;\n}\n\n@media (max-width: 959px) {\n  .page-meta {\n    padding: 2rem;\n  }\n}\n\n@media (max-width: 419px) {\n  .page-meta {\n    padding: 1.5rem;\n  }\n}\n\n.page-meta .meta-item {\n  cursor: default;\n  margin-top: 0.8rem;\n}\n\n.page-meta .meta-item .meta-item-label {\n  font-weight: 500;\n  color: var(--c-text-lighter);\n}\n\n.page-meta .meta-item .meta-item-info {\n  font-weight: 400;\n  color: var(--c-text-quote);\n}\n\n.page-meta .edit-link {\n  display: inline-block;\n  margin-right: 0.25rem;\n}\n\n.page-meta .last-updated {\n  float: right;\n}\n\n@media (max-width: 719px) {\n  .page-meta .last-updated {\n    font-size: 0.8em;\n    float: none;\n  }\n\n  .page-meta .contributors {\n    font-size: 0.8em;\n  }\n}\n\n.page-nav {\n  max-width: var(--content-width);\n  margin: 0 auto;\n  padding: 2rem 2.5rem;\n  padding-top: 1rem;\n  padding-bottom: 0;\n}\n\n@media (max-width: 959px) {\n  .page-nav {\n    padding: 2rem;\n  }\n}\n\n@media (max-width: 419px) {\n  .page-nav {\n    padding: 1.5rem;\n  }\n}\n\n.page-nav .inner {\n  min-height: 2rem;\n  margin-top: 0;\n  border-top: 1px solid var(--c-border);\n  transition: border-color var(--t-color);\n  padding-top: 1rem;\n  overflow: auto;\n}\n\n.page-nav .prev a:before {\n  content: "\u2190";\n}\n\n.page-nav .next {\n  float: right;\n}\n\n.page-nav .next a:after {\n  content: "\u2192";\n}\n\n:root .medium-zoom-overlay {\n  --medium-zoom-bg-color: #000;\n  --medium-zoom-opacity: 0.8;\n}\n\n:root .medium-zoom-overlay {\n  --medium-zoom-bg-color: #000;\n  --medium-zoom-opacity: 0.8;\n}\n\n.sidebar ul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n\n.sidebar a {\n  display: inline-block;\n}\n\n.sidebar .navbar-items {\n  display: none;\n  border-bottom: 1px solid var(--c-border);\n  transition: border-color var(--t-color);\n  padding: 0.5rem 0 0.75rem 0;\n}\n\n.sidebar .navbar-items a {\n  font-weight: 600;\n}\n\n.sidebar .navbar-items .navbar-item {\n  display: block;\n  line-height: 1.25rem;\n  font-size: 1.1em;\n  padding: 0.5rem 0 0.5rem 1.5rem;\n}\n\n.sidebar .sidebar-items {\n  padding: 1.5rem 0;\n}\n\n@media (max-width: 719px) {\n  .sidebar .navbar-items {\n    display: block;\n  }\n\n  .sidebar .navbar-items .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a.router-link-active::after {\n    top: calc(1rem - 2px);\n  }\n\n  .sidebar .sidebar-items {\n    padding: 1rem 0;\n  }\n}\n\n.sidebar-item {\n  cursor: default;\n  border-left: 0.25rem solid transparent;\n  color: var(--c-text);\n}\n\n.sidebar-item:focus-visible {\n  outline-width: 1px;\n  outline-offset: -1px;\n}\n\n.sidebar-item.active:not(p.sidebar-heading) {\n  font-weight: 600;\n  color: var(--c-text-accent);\n  border-left-color: var(--c-text-accent);\n}\n\n.sidebar-item.sidebar-heading {\n  transition: color 0.15s ease;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding: 0.35rem 1.5rem 0.35rem 1.25rem;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n}\n\n.sidebar-item.sidebar-heading.collapsible {\n  cursor: pointer;\n}\n\n.sidebar-item.sidebar-heading.collapsible + .sidebar-item-children {\n  transition: height 0.1s ease-out;\n  overflow: hidden;\n  margin-bottom: 0.75rem;\n}\n\n.sidebar-item.sidebar-heading .arrow {\n  position: relative;\n  top: -0.12em;\n  left: 0.5em;\n}\n\n.sidebar-item:not(.sidebar-heading) {\n  font-size: 1em;\n  font-weight: 400;\n  display: inline-block;\n  margin: 0;\n  padding: 0.35rem 1rem 0.35rem 2rem;\n  line-height: 1.4;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.sidebar-item:not(.sidebar-heading) + .sidebar-item-children {\n  padding-left: 1rem;\n  font-size: 0.95em;\n}\n\n.sidebar-item-children .sidebar-item-children .sidebar-item:not(.sidebar-heading) {\n  padding: 0.25rem 1rem 0.25rem 1.75rem;\n}\n\n.sidebar-item-children .sidebar-item-children .sidebar-item:not(.sidebar-heading).active {\n  font-weight: 500;\n  border-left-color: transparent;\n}\n\na.sidebar-heading + .sidebar-item-children .sidebar-item:not(.sidebar-heading).active {\n  border-left-color: transparent;\n}\n\na.sidebar-item {\n  cursor: pointer;\n}\n\na.sidebar-item:hover {\n  color: var(--c-text-accent);\n}\n\n.table-of-contents .badge {\n  vertical-align: middle;\n}\n\n/**\n * dropdown\n */\n\n.dropdown-enter-from,\n.dropdown-leave-to {\n  height: 0 !important;\n}\n\n/**\n * fade-slide-y\n */\n\n.fade-slide-y-enter-active {\n  transition: all 0.2s ease;\n}\n\n.fade-slide-y-leave-active {\n  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);\n}\n\n.fade-slide-y-enter-from,\n.fade-slide-y-leave-to {\n  transform: translateY(10px);\n  opacity: 0;\n}\n\nhtml::-webkit-scrollbar {\n  width: 7px;\n}\n\nhtml::-webkit-scrollbar-thumb {\n  border-radius: 12px;\n  background-color: #49b1f5;\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.4) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.4) 75%, transparent 75%, transparent);\n}\n\n.sidebar::-webkit-scrollbar-thumb {\n  border-radius: 12px;\n  background-color: #49b1f5 !important;\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.4) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.4) 75%, transparent 75%, transparent);\n}')();
var clientConfig5 = defineClientConfig({
  enhance({ app, router }) {
    app.component("Badge", Badge);
    app.component("CodeGroup", CodeGroup);
    app.component("CodeGroupItem", CodeGroupItem);
    app.component("AutoLinkExternalIcon", () => {
      const ExternalLinkIcon2 = app.component("ExternalLinkIcon");
      if (ExternalLinkIcon2) {
        return h(ExternalLinkIcon2);
      }
      return null;
    });
    app.component("NavbarSearch", () => {
      const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
      if (SearchComponent) {
        return h(SearchComponent);
      }
      return null;
    });
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
  },
  setup() {
    setupDarkMode();
    setupSidebarItems();
  }
});
function type(o) {
  const s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}
function getTimeNum(post) {
  let dateStr = post.frontmatter.date || post.lastUpdated || new Date();
  let date = new Date(dateStr);
  if (date == "Invalid Date" && dateStr) {
    date = new Date(dateStr.replace(/-/g, "/"));
  }
  return date.getTime();
}
function compareDate(a, b) {
  return getTimeNum(b) - getTimeNum(a);
}
function filterPosts(posts) {
  posts = posts.filter((item) => {
    const { frontmatter: { pageComponent, article, home } } = item;
    return !(pageComponent || article === false || home === true);
  });
  return posts;
}
function sortPosts(posts) {
  posts.sort((prev, next) => {
    const prevSticky = prev.frontmatter.sticky;
    const nextSticky = next.frontmatter.sticky;
    if (prevSticky && nextSticky) {
      return prevSticky == nextSticky ? compareDate(prev, next) : prevSticky - nextSticky;
    } else if (prevSticky && !nextSticky) {
      return -1;
    } else if (!prevSticky && nextSticky) {
      return 1;
    }
    return compareDate(prev, next);
  });
  return posts;
}
function sortPostsByDate(posts) {
  posts.sort((prev, next) => {
    return compareDate(prev, next);
  });
  return posts;
}
function groupPosts(posts) {
  const categoriesObj = {};
  const tagsObj = {};
  for (let i = 0, postsL = posts.length; i < postsL; i++) {
    const { frontmatter: { categories, tags } } = posts[i];
    if (type(categories) === "array") {
      categories.forEach((item) => {
        if (item) {
          if (!categoriesObj[item]) {
            categoriesObj[item] = [];
          }
          categoriesObj[item].push(posts[i]);
        }
      });
    }
    if (type(tags) === "array") {
      tags.forEach((item) => {
        if (item) {
          if (!tagsObj[item]) {
            tagsObj[item] = [];
          }
          tagsObj[item].push(posts[i]);
        }
      });
    }
  }
  return {
    categories: categoriesObj,
    tags: tagsObj
  };
}
function categoriesAndTags(groupPosts2) {
  const categoriesArr = [];
  const tagsArr = [];
  for (let key in groupPosts2.categories) {
    categoriesArr.push({
      key,
      length: groupPosts2.categories[key].length
    });
  }
  for (let key in groupPosts2.tags) {
    tagsArr.push({
      key,
      length: groupPosts2.tags[key].length
    });
  }
  return {
    categories: categoriesArr,
    tags: tagsArr
  };
}
var clientConfig6 = defineClientConfig({
  enhance({ app, router, siteData: siteData2 }) {
  },
  setup() {
    onMounted(() => {
    });
    const $filterPosts = computed(() => {
      return filterPosts([{ "title": "\u5173\u4E8E - \u6211", "frontmatter": { "title": "\u5173\u4E8E - \u6211", "date": "2022-04-16T17:52:59.000Z", "categories": ["about"], "tags": ["\u5173\u4E8E"] }, "relativePath": "/about/about.md" }, { "title": "\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6", "frontmatter": { "title": "\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6", "date": "2022-06-06T14:11:35.000Z", "categories": ["el-component"], "tags": [null] }, "relativePath": "/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.md" }, { "title": "Vue Toast\u7EC4\u4EF6\u5F00\u53D1", "frontmatter": { "title": "Vue Toast\u7EC4\u4EF6\u5F00\u53D1", "date": "2022-06-06T14:11:35.000Z", "categories": ["el-component"], "tags": [null] }, "relativePath": "/el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.md" }, { "title": "Vue button\u7EC4\u4EF6\u5F00\u53D1", "frontmatter": { "title": "Vue button\u7EC4\u4EF6\u5F00\u53D1", "date": "2022-06-06T14:11:35.000Z", "categories": ["el-component"], "tags": [null] }, "relativePath": "/el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.md" }, { "title": "Vue icon\u7EC4\u4EF6\u5F00\u53D1", "frontmatter": { "title": "Vue icon\u7EC4\u4EF6\u5F00\u53D1", "date": "2022-06-06T14:11:35.000Z", "categories": ["el-component"], "tags": [null] }, "relativePath": "/el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.md" }, { "title": "Vue input\u7EC4\u4EF6\u5F00\u53D1", "frontmatter": { "title": "Vue input\u7EC4\u4EF6\u5F00\u53D1", "date": "2022-06-06T14:11:35.000Z", "categories": ["el-component"], "tags": [null] }, "relativePath": "/el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.md" }, { "title": "Vue message\u7EC4\u4EF6\u5F00\u53D1", "frontmatter": { "title": "Vue message\u7EC4\u4EF6\u5F00\u53D1", "date": "2022-06-06T14:11:35.000Z", "categories": ["el-component"], "tags": [null] }, "relativePath": "/el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.md" }, { "title": "Vue Popover\u7EC4\u4EF6\u5F00\u53D1", "frontmatter": { "title": "Vue Popover\u7EC4\u4EF6\u5F00\u53D1", "date": "2022-06-06T14:11:35.000Z", "categories": ["el-component"], "tags": [null] }, "relativePath": "/el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.md" }, { "title": "\u6307\u5357", "frontmatter": { "title": "\u6307\u5357", "date": "2022-06-02T11:44:46.000Z", "permalink": "/guide/", "categories": ["guide"], "tags": ["\u6307\u5357"] }, "relativePath": "/guide/\u6307\u5357.md" }, { "title": "\u6CA1\u6709\u6807\u9898", "frontmatter": { "home": true, "pageClass": "custom-home-class" }, "relativePath": "/index.md" }, { "title": "\u5F71\u89C6\u7F51\u7AD9\u63A8\u8350", "frontmatter": { "title": "\u5F71\u89C6\u7F51\u7AD9\u63A8\u8350", "date": "2022-02-08T19:49:49.000Z", "permalink": "/movies/", "categories": ["nav"], "tags": ["\u5F71\u89C6"] }, "relativePath": "/nav/movies.md" }, { "title": "\u5BFC\u822A\u9875", "frontmatter": { "title": "\u5BFC\u822A\u9875", "date": "2022-05-09T02:03:48.000Z", "permalink": "/nav-page/", "categories": ["nav"], "tags": ["\u7F16\u7A0B\u5BFC\u822A"] }, "relativePath": "/nav/nav-page.md" }, { "title": "chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4", "frontmatter": { "title": "chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.md" }, { "title": "clone\u514B\u9686\u6570\u7EC4", "frontmatter": { "title": "clone\u514B\u9686\u6570\u7EC4", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/clone\u514B\u9686\u6570\u7EC4.md" }, { "title": "compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C", "frontmatter": { "title": "compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.md" }, { "title": "difference\u6570\u7EC4\u5DEE\u96C6", "frontmatter": { "title": "difference\u6570\u7EC4\u5DEE\u96C6", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.md" }, { "title": "flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4", "frontmatter": { "title": "flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.md" }, { "title": "flatten\u6241\u5E73\u5316\u6570\u7EC4", "frontmatter": { "title": "flatten\u6241\u5E73\u5316\u6570\u7EC4", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.md" }, { "title": "intersection\u6570\u7EC4\u4EA4\u96C6", "frontmatter": { "title": "intersection\u6570\u7EC4\u4EA4\u96C6", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.md" }, { "title": "isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49", "frontmatter": { "title": "isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.md" }, { "title": "isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49", "frontmatter": { "title": "isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.md" }, { "title": "max\u6570\u7EC4\u4E2D\u6700\u5927\u503C", "frontmatter": { "title": "max\u6570\u7EC4\u4E2D\u6700\u5927\u503C", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md" }, { "title": "min\u6570\u7EC4\u4E2D\u6700\u5927\u503C", "frontmatter": { "title": "min\u6570\u7EC4\u4E2D\u6700\u5927\u503C", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md" }, { "title": "shuffle\u6253\u4E71\u6570\u7EC4", "frontmatter": { "title": "shuffle\u6253\u4E71\u6570\u7EC4", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.md" }, { "title": "sortAsc\u6570\u7EC4\u5347\u5E8F", "frontmatter": { "title": "sortAsc\u6570\u7EC4\u5347\u5E8F", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.md" }, { "title": "sortDesc\u6570\u7EC4\u964D\u5E8F", "frontmatter": { "title": "sortDesc\u6570\u7EC4\u964D\u5E8F", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.md" }, { "title": "takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20", "frontmatter": { "title": "takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.md" }, { "title": "take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20", "frontmatter": { "title": "take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.md" }, { "title": "treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E", "frontmatter": { "title": "treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.md" }, { "title": "uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD", "frontmatter": { "title": "uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.md" }, { "title": "unique\u6570\u7EC4\u53BB\u91CD", "frontmatter": { "title": "unique\u6570\u7EC4\u53BB\u91CD", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Array"], "tags": [null] }, "relativePath": "/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.md" }, { "title": "calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97", "frontmatter": { "title": "calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Function"], "tags": [null] }, "relativePath": "/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.md" }, { "title": "debounce\u51FD\u6570\u9632\u6296", "frontmatter": { "title": "debounce\u51FD\u6570\u9632\u6296", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Function"], "tags": [null] }, "relativePath": "/utils/Function/debounce\u51FD\u6570\u9632\u6296.md" }, { "title": "throttle\u51FD\u6570\u8282\u6D41", "frontmatter": { "title": "throttle\u51FD\u6570\u8282\u6D41", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Function"], "tags": [null] }, "relativePath": "/utils/Function/throttle\u51FD\u6570\u8282\u6D41.md" }, { "title": "typeFn\u7C7B\u578B\u5224\u65AD", "frontmatter": { "title": "typeFn\u7C7B\u578B\u5224\u65AD", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Function"], "tags": [null] }, "relativePath": "/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.md" }, { "title": "aboutEqual\u7EA6\u7B49\u4E8E", "frontmatter": { "title": "aboutEqual\u7EA6\u7B49\u4E8E", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Number"], "tags": [null] }, "relativePath": "/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.md" }, { "title": "averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49", "frontmatter": { "title": "averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Number"], "tags": [null] }, "relativePath": "/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.md" }, { "title": "average\u6C42\u5E73\u5747\u503C", "frontmatter": { "title": "average\u6C42\u5E73\u5747\u503C", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Number"], "tags": [null] }, "relativePath": "/utils/Number/average\u6C42\u5E73\u5747\u503C.md" }, { "title": "getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB", "frontmatter": { "title": "getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Number"], "tags": [null] }, "relativePath": "/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.md" }, { "title": "randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570", "frontmatter": { "title": "randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Number"], "tags": [null] }, "relativePath": "/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.md" }, { "title": "sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C", "frontmatter": { "title": "sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "Number"], "tags": [null] }, "relativePath": "/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.md" }, { "title": "padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26", "frontmatter": { "title": "padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "String"], "tags": [null] }, "relativePath": "/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.md" }, { "title": "padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26", "frontmatter": { "title": "padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "String"], "tags": [null] }, "relativePath": "/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.md" }, { "title": "thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7", "frontmatter": { "title": "thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7", "date": "2022-06-15T17:20:46.000Z", "categories": ["utils", "String"], "tags": [null] }, "relativePath": "/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.md" }]);
    });
    const $sortPosts = computed(() => {
      return sortPosts($filterPosts.value);
    });
    const $sortPostsByDate = computed(() => {
      return sortPostsByDate($filterPosts.value);
    });
    const $groupPosts = computed(() => {
      return groupPosts($sortPostsByDate.value);
    });
    const $categoriesAndTags = computed(() => {
      return categoriesAndTags($groupPosts.value);
    });
    provide("$filterPosts", readonly($filterPosts));
    provide("$sortPosts", readonly($sortPosts));
    provide("$sortPostsByDate", readonly($sortPostsByDate));
    provide("$groupPosts", readonly($groupPosts));
    provide("$categoriesAndTags", readonly($categoriesAndTags));
  },
  rootComponents: []
});
const useGoogleAnalytics = (id2) => {
  if (window.dataLayer && window.gtag) {
    return;
  }
  const gtagScript = document.createElement("script");
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${id2}`;
  gtagScript.async = true;
  document.head.appendChild(gtagScript);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    dataLayer.push(arguments);
  };
  gtag("js", new Date());
  gtag("config", id2);
};
const id = "G-7Q9JVXXQBW";
var clientConfig7 = defineClientConfig({
  enhance() {
    useGoogleAnalytics(id);
  }
});
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var isSupported = function isSupported2(node) {
  return node.tagName === "IMG";
};
var isNodeList = function isNodeList2(selector2) {
  return NodeList.prototype.isPrototypeOf(selector2);
};
var isNode = function isNode2(selector2) {
  return selector2 && selector2.nodeType === 1;
};
var isSvg = function isSvg2(image) {
  var source = image.currentSrc || image.src;
  return source.substr(-4).toLowerCase() === ".svg";
};
var getImagesFromSelector = function getImagesFromSelector2(selector2) {
  try {
    if (Array.isArray(selector2)) {
      return selector2.filter(isSupported);
    }
    if (isNodeList(selector2)) {
      return [].slice.call(selector2).filter(isSupported);
    }
    if (isNode(selector2)) {
      return [selector2].filter(isSupported);
    }
    if (typeof selector2 === "string") {
      return [].slice.call(document.querySelectorAll(selector2)).filter(isSupported);
    }
    return [];
  } catch (err) {
    throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
  }
};
var createOverlay = function createOverlay2(background) {
  var overlay = document.createElement("div");
  overlay.classList.add("medium-zoom-overlay");
  overlay.style.background = background;
  return overlay;
};
var cloneTarget = function cloneTarget2(template) {
  var _template$getBounding = template.getBoundingClientRect(), top = _template$getBounding.top, left = _template$getBounding.left, width = _template$getBounding.width, height = _template$getBounding.height;
  var clone = template.cloneNode();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  clone.removeAttribute("id");
  clone.style.position = "absolute";
  clone.style.top = top + scrollTop + "px";
  clone.style.left = left + scrollLeft + "px";
  clone.style.width = width + "px";
  clone.style.height = height + "px";
  clone.style.transform = "";
  return clone;
};
var createCustomEvent = function createCustomEvent2(type2, params) {
  var eventParams = _extends({
    bubbles: false,
    cancelable: false,
    detail: void 0
  }, params);
  if (typeof window.CustomEvent === "function") {
    return new CustomEvent(type2, eventParams);
  }
  var customEvent = document.createEvent("CustomEvent");
  customEvent.initCustomEvent(type2, eventParams.bubbles, eventParams.cancelable, eventParams.detail);
  return customEvent;
};
var mediumZoom$1 = function mediumZoom(selector2) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var Promise2 = window.Promise || function Promise3(fn) {
    function noop2() {
    }
    fn(noop2, noop2);
  };
  var _handleClick = function _handleClick2(event) {
    var target = event.target;
    if (target === overlay) {
      close();
      return;
    }
    if (images.indexOf(target) === -1) {
      return;
    }
    toggle({ target });
  };
  var _handleScroll = function _handleScroll2() {
    if (isAnimating || !active.original) {
      return;
    }
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (Math.abs(scrollTop - currentScroll) > zoomOptions2.scrollOffset) {
      setTimeout(close, 150);
    }
  };
  var _handleKeyUp = function _handleKeyUp2(event) {
    var key = event.key || event.keyCode;
    if (key === "Escape" || key === "Esc" || key === 27) {
      close();
    }
  };
  var update = function update2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var newOptions = options2;
    if (options2.background) {
      overlay.style.background = options2.background;
    }
    if (options2.container && options2.container instanceof Object) {
      newOptions.container = _extends({}, zoomOptions2.container, options2.container);
    }
    if (options2.template) {
      var template = isNode(options2.template) ? options2.template : document.querySelector(options2.template);
      newOptions.template = template;
    }
    zoomOptions2 = _extends({}, zoomOptions2, newOptions);
    images.forEach(function(image) {
      image.dispatchEvent(createCustomEvent("medium-zoom:update", {
        detail: { zoom }
      }));
    });
    return zoom;
  };
  var clone = function clone2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return mediumZoom(_extends({}, zoomOptions2, options2));
  };
  var attach = function attach2() {
    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }
    var newImages = selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []);
    newImages.filter(function(newImage) {
      return images.indexOf(newImage) === -1;
    }).forEach(function(newImage) {
      images.push(newImage);
      newImage.classList.add("medium-zoom-image");
    });
    eventListeners.forEach(function(_ref) {
      var type2 = _ref.type, listener = _ref.listener, options2 = _ref.options;
      newImages.forEach(function(image) {
        image.addEventListener(type2, listener, options2);
      });
    });
    return zoom;
  };
  var detach = function detach2() {
    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      selectors[_key2] = arguments[_key2];
    }
    if (active.zoomed) {
      close();
    }
    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []) : images;
    imagesToDetach.forEach(function(image) {
      image.classList.remove("medium-zoom-image");
      image.dispatchEvent(createCustomEvent("medium-zoom:detach", {
        detail: { zoom }
      }));
    });
    images = images.filter(function(image) {
      return imagesToDetach.indexOf(image) === -1;
    });
    return zoom;
  };
  var on = function on2(type2, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.addEventListener("medium-zoom:" + type2, listener, options2);
    });
    eventListeners.push({ type: "medium-zoom:" + type2, listener, options: options2 });
    return zoom;
  };
  var off = function off2(type2, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.removeEventListener("medium-zoom:" + type2, listener, options2);
    });
    eventListeners = eventListeners.filter(function(eventListener) {
      return !(eventListener.type === "medium-zoom:" + type2 && eventListener.listener.toString() === listener.toString());
    });
    return zoom;
  };
  var open = function open2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref2.target;
    var _animate = function _animate2() {
      var container = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var viewportWidth = void 0;
      var viewportHeight = void 0;
      if (zoomOptions2.container) {
        if (zoomOptions2.container instanceof Object) {
          container = _extends({}, container, zoomOptions2.container);
          viewportWidth = container.width - container.left - container.right - zoomOptions2.margin * 2;
          viewportHeight = container.height - container.top - container.bottom - zoomOptions2.margin * 2;
        } else {
          var zoomContainer = isNode(zoomOptions2.container) ? zoomOptions2.container : document.querySelector(zoomOptions2.container);
          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(), _width = _zoomContainer$getBou.width, _height = _zoomContainer$getBou.height, _left = _zoomContainer$getBou.left, _top = _zoomContainer$getBou.top;
          container = _extends({}, container, {
            width: _width,
            height: _height,
            left: _left,
            top: _top
          });
        }
      }
      viewportWidth = viewportWidth || container.width - zoomOptions2.margin * 2;
      viewportHeight = viewportHeight || container.height - zoomOptions2.margin * 2;
      var zoomTarget = active.zoomedHd || active.original;
      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;
      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(), top = _zoomTarget$getBoundi.top, left = _zoomTarget$getBoundi.left, width = _zoomTarget$getBoundi.width, height = _zoomTarget$getBoundi.height;
      var scaleX = Math.min(naturalWidth, viewportWidth) / width;
      var scaleY = Math.min(naturalHeight, viewportHeight) / height;
      var scale = Math.min(scaleX, scaleY);
      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions2.margin + container.left) / scale;
      var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions2.margin + container.top) / scale;
      var transform = "scale(" + scale + ") translate3d(" + translateX + "px, " + translateY + "px, 0)";
      active.zoomed.style.transform = transform;
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = transform;
      }
    };
    return new Promise2(function(resolve2) {
      if (target && images.indexOf(target) === -1) {
        resolve2(zoom);
        return;
      }
      var _handleOpenEnd = function _handleOpenEnd2() {
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleOpenEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:opened", {
          detail: { zoom }
        }));
        resolve2(zoom);
      };
      if (active.zoomed) {
        resolve2(zoom);
        return;
      }
      if (target) {
        active.original = target;
      } else if (images.length > 0) {
        var _images = images;
        active.original = _images[0];
      } else {
        resolve2(zoom);
        return;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:open", {
        detail: { zoom }
      }));
      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      isAnimating = true;
      active.zoomed = cloneTarget(active.original);
      document.body.appendChild(overlay);
      if (zoomOptions2.template) {
        var template = isNode(zoomOptions2.template) ? zoomOptions2.template : document.querySelector(zoomOptions2.template);
        active.template = document.createElement("div");
        active.template.appendChild(template.content.cloneNode(true));
        document.body.appendChild(active.template);
      }
      document.body.appendChild(active.zoomed);
      window.requestAnimationFrame(function() {
        document.body.classList.add("medium-zoom--opened");
      });
      active.original.classList.add("medium-zoom-image--hidden");
      active.zoomed.classList.add("medium-zoom-image--opened");
      active.zoomed.addEventListener("click", close);
      active.zoomed.addEventListener("transitionend", _handleOpenEnd);
      if (active.original.getAttribute("data-zoom-src")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("srcset");
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.src = active.zoomed.getAttribute("data-zoom-src");
        active.zoomedHd.onerror = function() {
          clearInterval(getZoomTargetSize);
          console.warn("Unable to reach the zoom image target " + active.zoomedHd.src);
          active.zoomedHd = null;
          _animate();
        };
        var getZoomTargetSize = setInterval(function() {
          if (active.zoomedHd.complete) {
            clearInterval(getZoomTargetSize);
            active.zoomedHd.classList.add("medium-zoom-image--opened");
            active.zoomedHd.addEventListener("click", close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          }
        }, 10);
      } else if (active.original.hasAttribute("srcset")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        var loadEventListener = active.zoomedHd.addEventListener("load", function() {
          active.zoomedHd.removeEventListener("load", loadEventListener);
          active.zoomedHd.classList.add("medium-zoom-image--opened");
          active.zoomedHd.addEventListener("click", close);
          document.body.appendChild(active.zoomedHd);
          _animate();
        });
      } else {
        _animate();
      }
    });
  };
  var close = function close2() {
    return new Promise2(function(resolve2) {
      if (isAnimating || !active.original) {
        resolve2(zoom);
        return;
      }
      var _handleCloseEnd = function _handleCloseEnd2() {
        active.original.classList.remove("medium-zoom-image--hidden");
        document.body.removeChild(active.zoomed);
        if (active.zoomedHd) {
          document.body.removeChild(active.zoomedHd);
        }
        document.body.removeChild(overlay);
        active.zoomed.classList.remove("medium-zoom-image--opened");
        if (active.template) {
          document.body.removeChild(active.template);
        }
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleCloseEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:closed", {
          detail: { zoom }
        }));
        active.original = null;
        active.zoomed = null;
        active.zoomedHd = null;
        active.template = null;
        resolve2(zoom);
      };
      isAnimating = true;
      document.body.classList.remove("medium-zoom--opened");
      active.zoomed.style.transform = "";
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = "";
      }
      if (active.template) {
        active.template.style.transition = "opacity 150ms";
        active.template.style.opacity = 0;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:close", {
        detail: { zoom }
      }));
      active.zoomed.addEventListener("transitionend", _handleCloseEnd);
    });
  };
  var toggle = function toggle2() {
    var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref3.target;
    if (active.original) {
      return close();
    }
    return open({ target });
  };
  var getOptions = function getOptions2() {
    return zoomOptions2;
  };
  var getImages = function getImages2() {
    return images;
  };
  var getZoomedImage = function getZoomedImage2() {
    return active.original;
  };
  var images = [];
  var eventListeners = [];
  var isAnimating = false;
  var scrollTop = 0;
  var zoomOptions2 = options;
  var active = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null
  };
  if (Object.prototype.toString.call(selector2) === "[object Object]") {
    zoomOptions2 = selector2;
  } else if (selector2 || typeof selector2 === "string") {
    attach(selector2);
  }
  zoomOptions2 = _extends({
    margin: 0,
    background: "#fff",
    scrollOffset: 40,
    container: null,
    template: null
  }, zoomOptions2);
  var overlay = createOverlay(zoomOptions2.background);
  document.addEventListener("click", _handleClick);
  document.addEventListener("keyup", _handleKeyUp);
  document.addEventListener("scroll", _handleScroll);
  window.addEventListener("resize", close);
  var zoom = {
    open,
    close,
    toggle,
    update,
    clone,
    attach,
    detach,
    on,
    off,
    getOptions,
    getImages,
    getZoomedImage
  };
  return zoom;
};
function styleInject(css2, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css2 || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css2;
  } else {
    style.appendChild(document.createTextNode(css2));
  }
}
var css = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css);
var mediumZoom$2 = mediumZoom$1;
const mediumZoomSymbol = Symbol("mediumZoom");
var vars$1 = /* @__PURE__ */ (() => ":root {\n  --medium-zoom-z-index: 100;\n  --medium-zoom-bg-color: #ffffff;\n  --medium-zoom-opacity: 1;\n}\n")();
var mediumZoom2 = /* @__PURE__ */ (() => ".medium-zoom-overlay {\n  /* override element style set by medium-zoom script */\n  background-color: var(--medium-zoom-bg-color) !important;\n  z-index: var(--medium-zoom-z-index);\n}\n\n.medium-zoom-overlay ~ img {\n  z-index: calc(var(--medium-zoom-z-index) + 1);\n}\n\n.medium-zoom--opened .medium-zoom-overlay {\n  opacity: var(--medium-zoom-opacity);\n}\n")();
const selector = ":not(a) > img:not(.no-zoom)";
const zoomOptions = {};
const delay = 500;
var clientConfig8 = defineClientConfig({
  enhance({ app, router }) {
    const zoom = mediumZoom$2(zoomOptions);
    zoom.refresh = (sel = selector) => {
      zoom.detach();
      zoom.attach(sel);
    };
    app.provide(mediumZoomSymbol, zoom);
    router.afterEach(() => {
      setTimeout(() => zoom.refresh(), delay);
    });
  }
});
const isKeyMatched = (event, hotKeys2) => hotKeys2.some((item) => {
  if (isString$1(item)) {
    return item === event.key;
  }
  const { key, ctrl = false, shift = false, alt = false } = item;
  return key === event.key && ctrl === event.ctrlKey && shift === event.shiftKey && alt === event.altKey;
});
const nonASCIIRegExp = /[^\x00-\x7F]/;
const splitWords = (str) => str.split(/\s+/g).map((str2) => str2.trim()).filter((str2) => !!str2);
const escapeRegExp = (str) => str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
const isQueryMatched = (query, toMatch) => {
  const toMatchStr = toMatch.join(" ");
  const words = splitWords(query);
  if (nonASCIIRegExp.test(query)) {
    return words.some((word) => toMatchStr.toLowerCase().indexOf(word) > -1);
  }
  const hasTrailingSpace = query.endsWith(" ");
  const searchRegex = new RegExp(words.map((word, index2) => {
    if (words.length === index2 + 1 && !hasTrailingSpace) {
      return `(?=.*\\b${escapeRegExp(word)})`;
    }
    return `(?=.*\\b${escapeRegExp(word)}\\b)`;
  }).join("") + ".+", "gi");
  return searchRegex.test(toMatchStr);
};
const useHotKeys = ({ input, hotKeys: hotKeys2 }) => {
  if (hotKeys2.value.length === 0)
    return;
  const onKeydown = (event) => {
    if (!input.value)
      return;
    if (isKeyMatched(event, hotKeys2.value) && !input.value.contains(event.target)) {
      event.preventDefault();
      input.value.focus();
    }
  };
  onMounted(() => {
    document.addEventListener("keydown", onKeydown);
  });
  onBeforeUnmount(() => {
    document.removeEventListener("keydown", onKeydown);
  });
};
const searchIndex$1 = [
  {
    "title": "\u5F52\u6863",
    "headers": [],
    "path": "/archives/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u5206\u7C7B",
    "headers": [],
    "path": "/categories/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u6807\u7B7E",
    "headers": [],
    "path": "/tags/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u5173\u4E8E - \u6211",
    "headers": [
      {
        "level": 2,
        "title": "\u8BFB\u8005\u7684\u95EE\u9898\u4E0E\u56DE\u7B54",
        "slug": "\u8BFB\u8005\u7684\u95EE\u9898\u4E0E\u56DE\u7B54",
        "children": [
          {
            "level": 3,
            "title": "QA - \u505A\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877\u662F\u4EC0\u4E48",
            "slug": "qa-\u505A\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877\u662F\u4EC0\u4E48",
            "children": []
          },
          {
            "level": 3,
            "title": "QA - \u662F\u5426\u53EF\u4EE5\u6709\u673A\u4F1A\u5408\u4F5C",
            "slug": "qa-\u662F\u5426\u53EF\u4EE5\u6709\u673A\u4F1A\u5408\u4F5C",
            "children": []
          },
          {
            "level": 3,
            "title": "QA - \u662F\u5426\u53EF\u4EE5\u63D0\u4F9B\u6280\u672F\u652F\u6301",
            "slug": "qa-\u662F\u5426\u53EF\u4EE5\u63D0\u4F9B\u6280\u672F\u652F\u6301",
            "children": []
          },
          {
            "level": 3,
            "title": "QA - \u662F\u5426\u8003\u8651\u53D8\u73B0",
            "slug": "qa-\u662F\u5426\u8003\u8651\u53D8\u73B0",
            "children": []
          },
          {
            "level": 3,
            "title": "QA - \u7F51\u7AD9\u8FD0\u8425",
            "slug": "qa-\u7F51\u7AD9\u8FD0\u8425",
            "children": []
          },
          {
            "level": 3,
            "title": "\u6211\u7684\u4E09\u89C2",
            "slug": "\u6211\u7684\u4E09\u89C2",
            "children": []
          },
          {
            "level": 3,
            "title": "\u516C\u4F17\u53F7",
            "slug": "\u516C\u4F17\u53F7",
            "children": []
          },
          {
            "level": 3,
            "title": "\u66F4\u591A",
            "slug": "\u66F4\u591A",
            "children": []
          }
        ]
      }
    ],
    "path": "/about/about.html",
    "pathLocale": "/",
    "extraFields": [
      "\u5173\u4E8E"
    ]
  },
  {
    "title": "\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6",
    "headers": [
      {
        "level": 2,
        "title": "\u524D\u8A00",
        "slug": "\u524D\u8A00",
        "children": [
          {
            "level": 3,
            "title": "Form \u8868\u5355",
            "slug": "form-\u8868\u5355",
            "children": []
          },
          {
            "level": 3,
            "title": "\u7EC4\u4EF6",
            "slug": "\u7EC4\u4EF6",
            "children": []
          }
        ]
      }
    ],
    "path": "/el-component/01.%E6%89%8B%E5%86%99el-form%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "Vue Toast\u7EC4\u4EF6\u5F00\u53D1",
    "headers": [],
    "path": "/el-component/02.Vue%20Toast%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "Vue button\u7EC4\u4EF6\u5F00\u53D1",
    "headers": [],
    "path": "/el-component/04.Vue%20button%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "Vue icon\u7EC4\u4EF6\u5F00\u53D1",
    "headers": [],
    "path": "/el-component/05.Vue%20icon%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "Vue input\u7EC4\u4EF6\u5F00\u53D1",
    "headers": [],
    "path": "/el-component/06.Vue%20input%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "Vue message\u7EC4\u4EF6\u5F00\u53D1",
    "headers": [],
    "path": "/el-component/07.Vue%20message%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "Vue Popover\u7EC4\u4EF6\u5F00\u53D1",
    "headers": [],
    "path": "/el-component/08.Vue%20Popover%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "\u6307\u5357",
    "headers": [
      {
        "level": 2,
        "title": "\u2B07\uFE0F \u5B89\u88C5",
        "slug": "\u5B89\u88C5",
        "children": []
      },
      {
        "level": 2,
        "title": "\u{1F37B} \u4F7F\u7528",
        "slug": "\u4F7F\u7528",
        "children": []
      },
      {
        "level": 2,
        "title": "\u{1F4E6} API \u6587\u6863",
        "slug": "api-\u6587\u6863",
        "children": [
          {
            "level": 3,
            "title": "\u6570\u7EC4",
            "slug": "\u6570\u7EC4",
            "children": []
          },
          {
            "level": 3,
            "title": "\u51FD\u6570",
            "slug": "\u51FD\u6570",
            "children": []
          },
          {
            "level": 3,
            "title": "\u5B57\u7B26\u4E32",
            "slug": "\u5B57\u7B26\u4E32",
            "children": []
          },
          {
            "level": 3,
            "title": "\u6570\u5B57",
            "slug": "\u6570\u5B57",
            "children": []
          },
          {
            "level": 3,
            "title": "\u6D4F\u89C8\u5668",
            "slug": "\u6D4F\u89C8\u5668",
            "children": []
          },
          {
            "level": 3,
            "title": "\u73AF\u5883",
            "slug": "\u73AF\u5883",
            "children": []
          }
        ]
      }
    ],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": [
      "\u6307\u5357"
    ]
  },
  {
    "title": "\u5F71\u89C6\u7F51\u7AD9\u63A8\u8350",
    "headers": [
      {
        "level": 3,
        "title": "\u5F71\u89C6\u7F51\u7AD9",
        "slug": "\u5F71\u89C6\u7F51\u7AD9",
        "children": []
      },
      {
        "level": 2,
        "title": "\u7535\u5F71\u63A8\u8350",
        "slug": "\u7535\u5F71\u63A8\u8350",
        "children": []
      },
      {
        "level": 2,
        "title": "APP \u89C2\u770B",
        "slug": "app-\u89C2\u770B",
        "children": []
      },
      {
        "level": 2,
        "title": "BT \u4E0B\u8F7D",
        "slug": "bt-\u4E0B\u8F7D",
        "children": []
      },
      {
        "level": 2,
        "title": "\u5931\u6548\u7F51\u7AD9",
        "slug": "\u5931\u6548\u7F51\u7AD9",
        "children": []
      }
    ],
    "path": "/movies/",
    "pathLocale": "/",
    "extraFields": [
      "\u5F71\u89C6"
    ]
  },
  {
    "title": "\u5BFC\u822A\u9875",
    "headers": [
      {
        "level": 2,
        "title": "\u641C\u7D22\u5F15\u64CE",
        "slug": "\u641C\u7D22\u5F15\u64CE",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4EE3\u7801\u6258\u7BA1",
        "slug": "\u4EE3\u7801\u6258\u7BA1",
        "children": []
      },
      {
        "level": 2,
        "title": "\u524D\u7AEF\u5F00\u53D1",
        "slug": "\u524D\u7AEF\u5F00\u53D1",
        "children": []
      },
      {
        "level": 2,
        "title": "\u540E\u7AEF\u5F00\u53D1",
        "slug": "\u540E\u7AEF\u5F00\u53D1",
        "children": []
      },
      {
        "level": 2,
        "title": "\u6587\u6863\u5DE5\u5177",
        "slug": "\u6587\u6863\u5DE5\u5177",
        "children": []
      },
      {
        "level": 2,
        "title": "\u70ED\u95E8\u793E\u533A",
        "slug": "\u70ED\u95E8\u793E\u533A",
        "children": []
      },
      {
        "level": 2,
        "title": "\u5DE5\u5177\u5408\u96C6",
        "slug": "\u5DE5\u5177\u5408\u96C6",
        "children": []
      },
      {
        "level": 2,
        "title": "\u6587\u6863\u6559\u7A0B",
        "slug": "\u6587\u6863\u6559\u7A0B",
        "children": []
      },
      {
        "level": 2,
        "title": "\u52A8\u6001\u56FE\u8868",
        "slug": "\u52A8\u6001\u56FE\u8868",
        "children": []
      },
      {
        "level": 2,
        "title": "\u56FE\u7247\u56FE\u6807",
        "slug": "\u56FE\u7247\u56FE\u6807",
        "children": []
      },
      {
        "level": 2,
        "title": "CSS\u6837\u5F0F",
        "slug": "css\u6837\u5F0F",
        "children": []
      },
      {
        "level": 2,
        "title": "\u7F51\u7AD9\u5206\u6790",
        "slug": "\u7F51\u7AD9\u5206\u6790",
        "children": []
      },
      {
        "level": 2,
        "title": "\u5176\u5B83\u8D44\u6E90",
        "slug": "\u5176\u5B83\u8D44\u6E90",
        "children": []
      }
    ],
    "path": "/nav-page/",
    "pathLocale": "/",
    "extraFields": [
      "\u7F16\u7A0B\u5BFC\u822A"
    ]
  },
  {
    "title": "chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4",
    "headers": [],
    "path": "/utils/Array/chunk%E8%BD%AC%E6%8D%A2%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "clone\u514B\u9686\u6570\u7EC4",
    "headers": [],
    "path": "/utils/Array/clone%E5%85%8B%E9%9A%86%E6%95%B0%E7%BB%84.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C",
    "headers": [],
    "path": "/utils/Array/compact%E5%8E%BB%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%97%A0%E6%95%88%E5%80%BC.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "difference\u6570\u7EC4\u5DEE\u96C6",
    "headers": [],
    "path": "/utils/Array/difference%E6%95%B0%E7%BB%84%E5%B7%AE%E9%9B%86.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4",
    "headers": [],
    "path": "/utils/Array/flattenDeep%E6%8C%87%E5%AE%9A%E5%B1%82%E7%BA%A7%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "flatten\u6241\u5E73\u5316\u6570\u7EC4",
    "headers": [],
    "path": "/utils/Array/flatten%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "intersection\u6570\u7EC4\u4EA4\u96C6",
    "headers": [],
    "path": "/utils/Array/intersection%E6%95%B0%E7%BB%84%E4%BA%A4%E9%9B%86.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49",
    "headers": [],
    "path": "/utils/Array/isArrayEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49",
    "headers": [],
    "path": "/utils/Array/isEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E5%80%BC%E7%9B%B8%E7%AD%89.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "max\u6570\u7EC4\u4E2D\u6700\u5927\u503C",
    "headers": [],
    "path": "/utils/Array/max%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "min\u6570\u7EC4\u4E2D\u6700\u5927\u503C",
    "headers": [],
    "path": "/utils/Array/min%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "shuffle\u6253\u4E71\u6570\u7EC4",
    "headers": [],
    "path": "/utils/Array/shuffle%E6%89%93%E4%B9%B1%E6%95%B0%E7%BB%84.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "sortAsc\u6570\u7EC4\u5347\u5E8F",
    "headers": [],
    "path": "/utils/Array/sortAsc%E6%95%B0%E7%BB%84%E5%8D%87%E5%BA%8F.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "sortDesc\u6570\u7EC4\u964D\u5E8F",
    "headers": [],
    "path": "/utils/Array/sortDesc%E6%95%B0%E7%BB%84%E9%99%8D%E5%BA%8F.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20",
    "headers": [],
    "path": "/utils/Array/takeLast%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E6%9C%80%E5%90%8E%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20",
    "headers": [],
    "path": "/utils/Array/take%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E5%BC%80%E5%A7%8B%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E",
    "headers": [],
    "path": "/utils/Array/treeData%E7%94%9F%E6%88%90%E6%A0%91%E7%BB%93%E6%9E%84%E6%95%B0%E6%8D%AE.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",
    "headers": [],
    "path": "/utils/Array/uniqueBy%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%8E%BB%E9%87%8D.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "unique\u6570\u7EC4\u53BB\u91CD",
    "headers": [],
    "path": "/utils/Array/unique%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97",
    "headers": [],
    "path": "/utils/Function/calcFn%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E8%BF%90%E7%AE%97.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "debounce\u51FD\u6570\u9632\u6296",
    "headers": [],
    "path": "/utils/Function/debounce%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "throttle\u51FD\u6570\u8282\u6D41",
    "headers": [],
    "path": "/utils/Function/throttle%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "typeFn\u7C7B\u578B\u5224\u65AD",
    "headers": [],
    "path": "/utils/Function/typeFn%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "aboutEqual\u7EA6\u7B49\u4E8E",
    "headers": [],
    "path": "/utils/Number/aboutEqual%E7%BA%A6%E7%AD%89%E4%BA%8E.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49",
    "headers": [],
    "path": "/utils/Number/averageBy%E6%A3%80%E6%9F%A5%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "average\u6C42\u5E73\u5747\u503C",
    "headers": [],
    "path": "/utils/Number/average%E6%B1%82%E5%B9%B3%E5%9D%87%E5%80%BC.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB",
    "headers": [],
    "path": "/utils/Number/getLineSize%E8%AE%A1%E7%AE%97%E4%B8%A4%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E8%B7%9D%E7%A6%BB.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570",
    "headers": [],
    "path": "/utils/Number/randomNumber%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B4%E6%95%B0.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C",
    "headers": [],
    "path": "/utils/Number/sum%E6%95%B0%E7%BB%84%E4%B8%AD%E5%80%BC%E6%80%BB%E5%92%8C.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26",
    "headers": [],
    "path": "/utils/String/padEnd%E5%A1%AB%E5%85%85%E5%8F%B3%E4%BE%A7%E5%AD%97%E7%AC%A6.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26",
    "headers": [],
    "path": "/utils/String/padStart%E5%A1%AB%E5%85%85%E5%B7%A6%E4%BE%A7%E5%AD%97%E7%AC%A6.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7",
    "headers": [],
    "path": "/utils/String/thousands%E6%AF%8F%E9%9A%94%E4%B8%89%E4%BD%8D%E6%95%B0%E5%AD%97%E6%B7%BB%E5%8A%A0%E9%80%97%E5%8F%B7.html",
    "pathLocale": "/",
    "extraFields": [
      null
    ]
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
];
const searchIndex = ref(searchIndex$1);
const useSearchIndex = () => searchIndex;
if (import_meta.webpackHot || false) {
  __VUE_HMR_RUNTIME__.updateSearchIndex = (data) => {
    searchIndex.value = data;
  };
}
const useSearchSuggestions = ({ searchIndex: searchIndex2, routeLocale, query, maxSuggestions: maxSuggestions2 }) => {
  const localeSearchIndex = computed(() => searchIndex2.value.filter((item) => item.pathLocale === routeLocale.value));
  return computed(() => {
    const searchStr = query.value.trim().toLowerCase();
    if (!searchStr)
      return [];
    const suggestions = [];
    const matchPageHeader = (searchIndexItem, header) => {
      if (isQueryMatched(searchStr, [header.title])) {
        suggestions.push({
          link: `${searchIndexItem.path}#${header.slug}`,
          title: searchIndexItem.title,
          header: header.title
        });
      }
      for (const child of header.children) {
        if (suggestions.length >= maxSuggestions2.value) {
          return;
        }
        matchPageHeader(searchIndexItem, child);
      }
    };
    for (const searchIndexItem of localeSearchIndex.value) {
      if (suggestions.length >= maxSuggestions2.value) {
        break;
      }
      if (isQueryMatched(searchStr, [
        searchIndexItem.title,
        ...searchIndexItem.extraFields
      ])) {
        suggestions.push({
          link: searchIndexItem.path,
          title: searchIndexItem.title
        });
        continue;
      }
      for (const header of searchIndexItem.headers) {
        if (suggestions.length >= maxSuggestions2.value) {
          break;
        }
        matchPageHeader(searchIndexItem, header);
      }
    }
    return suggestions;
  });
};
const useSuggestionsFocus = (suggestions) => {
  const focusIndex = ref(0);
  const focusNext = () => {
    if (focusIndex.value < suggestions.value.length - 1) {
      focusIndex.value += 1;
    } else {
      focusIndex.value = 0;
    }
  };
  const focusPrev = () => {
    if (focusIndex.value > 0) {
      focusIndex.value -= 1;
    } else {
      focusIndex.value = suggestions.value.length - 1;
    }
  };
  return {
    focusIndex,
    focusNext,
    focusPrev
  };
};
const SearchBox = defineComponent({
  name: "SearchBox",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    },
    hotKeys: {
      type: Array,
      required: false,
      default: () => []
    },
    maxSuggestions: {
      type: Number,
      required: false,
      default: 5
    }
  },
  setup(props) {
    const { locales: locales2, hotKeys: hotKeys2, maxSuggestions: maxSuggestions2 } = toRefs(props);
    const router = useRouter();
    const routeLocale = useRouteLocale();
    const searchIndex2 = useSearchIndex();
    const input = ref(null);
    const isActive = ref(false);
    const query = ref("");
    const locale = computed(() => {
      var _a2;
      return (_a2 = locales2.value[routeLocale.value]) != null ? _a2 : {};
    });
    const suggestions = useSearchSuggestions({
      searchIndex: searchIndex2,
      routeLocale,
      query,
      maxSuggestions: maxSuggestions2
    });
    const { focusIndex, focusNext, focusPrev } = useSuggestionsFocus(suggestions);
    useHotKeys({ input, hotKeys: hotKeys2 });
    const showSuggestions = computed(() => isActive.value && !!suggestions.value.length);
    const onArrowUp = () => {
      if (!showSuggestions.value) {
        return;
      }
      focusPrev();
    };
    const onArrowDown = () => {
      if (!showSuggestions.value) {
        return;
      }
      focusNext();
    };
    const goTo = (index2) => {
      if (!showSuggestions.value) {
        return;
      }
      const suggestion = suggestions.value[index2];
      if (!suggestion) {
        return;
      }
      router.push(suggestion.link).then(() => {
        query.value = "";
        focusIndex.value = 0;
      });
    };
    return () => h("form", {
      class: "search-box",
      role: "search"
    }, [
      h("input", {
        ref: input,
        type: "search",
        placeholder: locale.value.placeholder,
        autocomplete: "off",
        spellcheck: false,
        value: query.value,
        onFocus: () => isActive.value = true,
        onBlur: () => isActive.value = false,
        onInput: (event) => query.value = event.target.value,
        onKeydown: (event) => {
          switch (event.key) {
            case "ArrowUp": {
              onArrowUp();
              break;
            }
            case "ArrowDown": {
              onArrowDown();
              break;
            }
            case "Enter": {
              event.preventDefault();
              goTo(focusIndex.value);
              break;
            }
          }
        }
      }),
      showSuggestions.value && h("ul", {
        class: "suggestions",
        onMouseleave: () => focusIndex.value = -1
      }, suggestions.value.map(({ link, title, header }, index2) => h("li", {
        class: [
          "suggestion",
          {
            focus: focusIndex.value === index2
          }
        ],
        onMouseenter: () => focusIndex.value = index2,
        onMousedown: () => goTo(index2)
      }, h("a", {
        href: link,
        onClick: (event) => event.preventDefault()
      }, [
        h("span", {
          class: "page-title"
        }, title),
        header && h("span", { class: "page-header" }, `> ${header}`)
      ]))))
    ]);
  }
});
var vars = /* @__PURE__ */ (() => ":root {\n  --search-bg-color: #ffffff;\n  --search-accent-color: #3eaf7c;\n  --search-text-color: #2c3e50;\n  --search-border-color: #eaecef;\n  --search-item-text-color: #5d81a5;\n  --search-item-focus-bg-color: #f3f4f5;\n  --search-input-width: 8rem;\n  --search-result-width: 20rem;\n}\n")();
var search = /* @__PURE__ */ (() => ".search-box {\n  display: inline-block;\n  position: relative;\n  margin-left: 1rem;\n}\n\n.search-box input {\n  cursor: text;\n  width: var(--search-input-width);\n  height: 2rem;\n  color: var(--search-text-color);\n  display: inline-block;\n  border: 1px solid var(--search-border-color);\n  border-radius: 2rem;\n  font-size: 0.9rem;\n  line-height: 2rem;\n  padding: 0 0.5rem 0 2rem;\n  outline: none;\n  transition: all ease 0.3s;\n  background: var(--search-bg-color) url('/assets/search.0782d0d1.svg') 0.6rem 0.5rem no-repeat;\n  background-size: 1rem;\n}\n\n.search-box input:focus {\n  cursor: auto;\n  border-color: var(--search-accent-color);\n}\n\n.search-box .suggestions {\n  background: var(--search-bg-color);\n  width: var(--search-result-width);\n  position: absolute;\n  top: 2rem;\n  right: 0;\n  border: 1px solid var(--search-border-color);\n  border-radius: 6px;\n  padding: 0.4rem;\n  list-style-type: none;\n}\n\n.search-box .suggestion {\n  line-height: 1.4;\n  padding: 0.4rem 0.6rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.search-box .suggestion.focus {\n  background-color: var(--search-item-focus-bg-color);\n}\n\n.search-box .suggestion.focus a {\n  color: var(--search-accent-color);\n}\n\n.search-box .suggestion a {\n  white-space: normal;\n  color: var(--search-item-text-color);\n}\n\n.search-box .suggestion .page-title {\n  font-weight: 600;\n}\n\n.search-box .suggestion .page-header {\n  font-size: 0.9em;\n  margin-left: 0.25em;\n}\n\n@media (max-width: 720px) {\n  .search-box input {\n    cursor: pointer;\n    width: 0;\n    border-color: transparent;\n    position: relative;\n  }\n\n  .search-box input:focus {\n    cursor: text;\n    left: 0;\n    width: 10rem;\n  }\n}\n\n@media (max-width: 420px) {\n  .search-box input:focus {\n    width: 8rem;\n  }\n\n  .search-box .suggestions {\n    width: calc(100vw - 4rem);\n    right: -0.5rem;\n  }\n}\n")();
const locales = {};
const hotKeys = ["s", "/"];
const maxSuggestions = 20;
var clientConfig9 = defineClientConfig({
  enhance({ app }) {
    app.component("SearchBox", (props) => h(SearchBox, __spreadValues({
      locales,
      hotKeys,
      maxSuggestions
    }, props)));
  }
});
var clientConfig10 = {
  enhance: ({ app }) => {
    app.component("Fantasy", defineAsyncComponent(() => __vitePreload(() => import("./Fantasy.e47b89c8.js"), true ? [] : void 0))), app.component("NavCard", defineAsyncComponent(() => __vitePreload(() => import("./NavCard.6b9aa3e7.js"), true ? [] : void 0)));
  }
};
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7,
  clientConfig8,
  clientConfig9,
  clientConfig10
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "title": "" }, ["/index.html", "/index.md"]],
  ["v-c9afc8f6", "/archives/", { "title": "\u5F52\u6863" }, ["/archives/index.html", "/@pages/archivesPage.html", "/@pages/archivesPage.md"]],
  ["v-e355b60c", "/categories/", { "title": "\u5206\u7C7B" }, ["/categories/index.html", "/@pages/categoriesPage.html", "/@pages/categoriesPage.md"]],
  ["v-15534fdd", "/tags/", { "title": "\u6807\u7B7E" }, ["/tags/index.html", "/@pages/tagsPage.html", "/@pages/tagsPage.md"]],
  ["v-22991227", "/about/about.html", { "title": "\u5173\u4E8E - \u6211" }, ["/about/about", "/about/about.md"]],
  ["v-ff20590c", "/el-component/01.%E6%89%8B%E5%86%99el-form%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6.html", { "title": "\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6" }, ["/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.html", "/el-component/01.%E6%89%8B%E5%86%99el-form%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6", "/el-component/01.\u624B\u5199el-form\u8868\u5355\u7EC4\u4EF6.md", "/el-component/01.%E6%89%8B%E5%86%99el-form%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6.md"]],
  ["v-56ee61d4", "/el-component/02.Vue%20Toast%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html", { "title": "Vue Toast\u7EC4\u4EF6\u5F00\u53D1" }, ["/el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.html", "/el-component/02.Vue%20Toast%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91", "/el-component/02.Vue Toast\u7EC4\u4EF6\u5F00\u53D1.md", "/el-component/02.Vue%20Toast%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.md"]],
  ["v-58fa6412", "/el-component/04.Vue%20button%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html", { "title": "Vue button\u7EC4\u4EF6\u5F00\u53D1" }, ["/el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.html", "/el-component/04.Vue%20button%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91", "/el-component/04.Vue button\u7EC4\u4EF6\u5F00\u53D1.md", "/el-component/04.Vue%20button%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.md"]],
  ["v-32fefc11", "/el-component/05.Vue%20icon%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html", { "title": "Vue icon\u7EC4\u4EF6\u5F00\u53D1" }, ["/el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.html", "/el-component/05.Vue%20icon%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91", "/el-component/05.Vue icon\u7EC4\u4EF6\u5F00\u53D1.md", "/el-component/05.Vue%20icon%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.md"]],
  ["v-dc317c26", "/el-component/06.Vue%20input%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html", { "title": "Vue input\u7EC4\u4EF6\u5F00\u53D1" }, ["/el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.html", "/el-component/06.Vue%20input%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91", "/el-component/06.Vue input\u7EC4\u4EF6\u5F00\u53D1.md", "/el-component/06.Vue%20input%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.md"]],
  ["v-9bca98a2", "/el-component/07.Vue%20message%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html", { "title": "Vue message\u7EC4\u4EF6\u5F00\u53D1" }, ["/el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.html", "/el-component/07.Vue%20message%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91", "/el-component/07.Vue message\u7EC4\u4EF6\u5F00\u53D1.md", "/el-component/07.Vue%20message%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.md"]],
  ["v-8b841460", "/el-component/08.Vue%20Popover%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.html", { "title": "Vue Popover\u7EC4\u4EF6\u5F00\u53D1" }, ["/el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.html", "/el-component/08.Vue%20Popover%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91", "/el-component/08.Vue Popover\u7EC4\u4EF6\u5F00\u53D1.md", "/el-component/08.Vue%20Popover%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91.md"]],
  ["v-fffb8e28", "/guide/", { "title": "\u6307\u5357" }, ["/guide/index.html", "/guide/\u6307\u5357.html", "/guide/%E6%8C%87%E5%8D%97.html", "/guide/\u6307\u5357.md", "/guide/%E6%8C%87%E5%8D%97.md"]],
  ["v-97b2979a", "/movies/", { "title": "\u5F71\u89C6\u7F51\u7AD9\u63A8\u8350" }, ["/movies/index.html", "/nav/movies.html", "/nav/movies.md"]],
  ["v-75214906", "/nav-page/", { "title": "\u5BFC\u822A\u9875" }, ["/nav-page/index.html", "/nav/nav-page.html", "/nav/nav-page.md"]],
  ["v-fddb37fc", "/utils/Array/chunk%E8%BD%AC%E6%8D%A2%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84.html", { "title": "chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4" }, ["/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.html", "/utils/Array/chunk%E8%BD%AC%E6%8D%A2%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84", "/utils/Array/chunk\u8F6C\u6362\u4E8C\u7EF4\u6570\u7EC4.md", "/utils/Array/chunk%E8%BD%AC%E6%8D%A2%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84.md"]],
  ["v-25f11cb1", "/utils/Array/clone%E5%85%8B%E9%9A%86%E6%95%B0%E7%BB%84.html", { "title": "clone\u514B\u9686\u6570\u7EC4" }, ["/utils/Array/clone\u514B\u9686\u6570\u7EC4.html", "/utils/Array/clone%E5%85%8B%E9%9A%86%E6%95%B0%E7%BB%84", "/utils/Array/clone\u514B\u9686\u6570\u7EC4.md", "/utils/Array/clone%E5%85%8B%E9%9A%86%E6%95%B0%E7%BB%84.md"]],
  ["v-8b67f006", "/utils/Array/compact%E5%8E%BB%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%97%A0%E6%95%88%E5%80%BC.html", { "title": "compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C" }, ["/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.html", "/utils/Array/compact%E5%8E%BB%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%97%A0%E6%95%88%E5%80%BC", "/utils/Array/compact\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u65E0\u6548\u503C.md", "/utils/Array/compact%E5%8E%BB%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%97%A0%E6%95%88%E5%80%BC.md"]],
  ["v-4932aafa", "/utils/Array/difference%E6%95%B0%E7%BB%84%E5%B7%AE%E9%9B%86.html", { "title": "difference\u6570\u7EC4\u5DEE\u96C6" }, ["/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.html", "/utils/Array/difference%E6%95%B0%E7%BB%84%E5%B7%AE%E9%9B%86", "/utils/Array/difference\u6570\u7EC4\u5DEE\u96C6.md", "/utils/Array/difference%E6%95%B0%E7%BB%84%E5%B7%AE%E9%9B%86.md"]],
  ["v-88ad7930", "/utils/Array/flattenDeep%E6%8C%87%E5%AE%9A%E5%B1%82%E7%BA%A7%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.html", { "title": "flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4" }, ["/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.html", "/utils/Array/flattenDeep%E6%8C%87%E5%AE%9A%E5%B1%82%E7%BA%A7%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84", "/utils/Array/flattenDeep\u6307\u5B9A\u5C42\u7EA7\u6241\u5E73\u5316\u6570\u7EC4.md", "/utils/Array/flattenDeep%E6%8C%87%E5%AE%9A%E5%B1%82%E7%BA%A7%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.md"]],
  ["v-7c143142", "/utils/Array/flatten%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.html", { "title": "flatten\u6241\u5E73\u5316\u6570\u7EC4" }, ["/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.html", "/utils/Array/flatten%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84", "/utils/Array/flatten\u6241\u5E73\u5316\u6570\u7EC4.md", "/utils/Array/flatten%E6%89%81%E5%B9%B3%E5%8C%96%E6%95%B0%E7%BB%84.md"]],
  ["v-0ba4ebd2", "/utils/Array/intersection%E6%95%B0%E7%BB%84%E4%BA%A4%E9%9B%86.html", { "title": "intersection\u6570\u7EC4\u4EA4\u96C6" }, ["/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.html", "/utils/Array/intersection%E6%95%B0%E7%BB%84%E4%BA%A4%E9%9B%86", "/utils/Array/intersection\u6570\u7EC4\u4EA4\u96C6.md", "/utils/Array/intersection%E6%95%B0%E7%BB%84%E4%BA%A4%E9%9B%86.md"]],
  ["v-d03a9252", "/utils/Array/isArrayEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.html", { "title": "isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49" }, ["/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.html", "/utils/Array/isArrayEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89", "/utils/Array/isArrayEqual\u68C0\u67E5\u4E24\u4E2A\u6570\u7EC4\u5404\u9879\u76F8\u7B49.md", "/utils/Array/isArrayEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.md"]],
  ["v-0236c666", "/utils/Array/isEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E5%80%BC%E7%9B%B8%E7%AD%89.html", { "title": "isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49" }, ["/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.html", "/utils/Array/isEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E5%80%BC%E7%9B%B8%E7%AD%89", "/utils/Array/isEqual\u68C0\u67E5\u4E24\u4E2A\u5BF9\u8C61\u5404\u9879\u503C\u76F8\u7B49.md", "/utils/Array/isEqual%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E5%80%BC%E7%9B%B8%E7%AD%89.md"]],
  ["v-3757be0e", "/utils/Array/max%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.html", { "title": "max\u6570\u7EC4\u4E2D\u6700\u5927\u503C" }, ["/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html", "/utils/Array/max%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC", "/utils/Array/max\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md", "/utils/Array/max%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.md"]],
  ["v-62425f40", "/utils/Array/min%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.html", { "title": "min\u6570\u7EC4\u4E2D\u6700\u5927\u503C" }, ["/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.html", "/utils/Array/min%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC", "/utils/Array/min\u6570\u7EC4\u4E2D\u6700\u5927\u503C.md", "/utils/Array/min%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%80%BC.md"]],
  ["v-c2c943f6", "/utils/Array/shuffle%E6%89%93%E4%B9%B1%E6%95%B0%E7%BB%84.html", { "title": "shuffle\u6253\u4E71\u6570\u7EC4" }, ["/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.html", "/utils/Array/shuffle%E6%89%93%E4%B9%B1%E6%95%B0%E7%BB%84", "/utils/Array/shuffle\u6253\u4E71\u6570\u7EC4.md", "/utils/Array/shuffle%E6%89%93%E4%B9%B1%E6%95%B0%E7%BB%84.md"]],
  ["v-9dd956a8", "/utils/Array/sortAsc%E6%95%B0%E7%BB%84%E5%8D%87%E5%BA%8F.html", { "title": "sortAsc\u6570\u7EC4\u5347\u5E8F" }, ["/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.html", "/utils/Array/sortAsc%E6%95%B0%E7%BB%84%E5%8D%87%E5%BA%8F", "/utils/Array/sortAsc\u6570\u7EC4\u5347\u5E8F.md", "/utils/Array/sortAsc%E6%95%B0%E7%BB%84%E5%8D%87%E5%BA%8F.md"]],
  ["v-f9f1525a", "/utils/Array/sortDesc%E6%95%B0%E7%BB%84%E9%99%8D%E5%BA%8F.html", { "title": "sortDesc\u6570\u7EC4\u964D\u5E8F" }, ["/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.html", "/utils/Array/sortDesc%E6%95%B0%E7%BB%84%E9%99%8D%E5%BA%8F", "/utils/Array/sortDesc\u6570\u7EC4\u964D\u5E8F.md", "/utils/Array/sortDesc%E6%95%B0%E7%BB%84%E9%99%8D%E5%BA%8F.md"]],
  ["v-a5a655f4", "/utils/Array/takeLast%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E6%9C%80%E5%90%8E%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.html", { "title": "takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20" }, ["/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.html", "/utils/Array/takeLast%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E6%9C%80%E5%90%8E%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0", "/utils/Array/takeLast\u622A\u53D6\u6570\u7EC4\u6700\u540E\u6307\u5B9A\u7684\u5143\u7D20.md", "/utils/Array/takeLast%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E6%9C%80%E5%90%8E%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.md"]],
  ["v-669d4826", "/utils/Array/take%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E5%BC%80%E5%A7%8B%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.html", { "title": "take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20" }, ["/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.html", "/utils/Array/take%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E5%BC%80%E5%A7%8B%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0", "/utils/Array/take\u622A\u53D6\u6570\u7EC4\u5F00\u59CB\u6307\u5B9A\u7684\u5143\u7D20.md", "/utils/Array/take%E6%88%AA%E5%8F%96%E6%95%B0%E7%BB%84%E5%BC%80%E5%A7%8B%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0.md"]],
  ["v-61944058", "/utils/Array/treeData%E7%94%9F%E6%88%90%E6%A0%91%E7%BB%93%E6%9E%84%E6%95%B0%E6%8D%AE.html", { "title": "treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E" }, ["/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.html", "/utils/Array/treeData%E7%94%9F%E6%88%90%E6%A0%91%E7%BB%93%E6%9E%84%E6%95%B0%E6%8D%AE", "/utils/Array/treeData\u751F\u6210\u6811\u7ED3\u6784\u6570\u636E.md", "/utils/Array/treeData%E7%94%9F%E6%88%90%E6%A0%91%E7%BB%93%E6%9E%84%E6%95%B0%E6%8D%AE.md"]],
  ["v-283754ae", "/utils/Array/uniqueBy%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%8E%BB%E9%87%8D.html", { "title": "uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD" }, ["/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.html", "/utils/Array/uniqueBy%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%8E%BB%E9%87%8D", "/utils/Array/uniqueBy\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD.md", "/utils/Array/uniqueBy%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%8E%BB%E9%87%8D.md"]],
  ["v-35feaa32", "/utils/Array/unique%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D.html", { "title": "unique\u6570\u7EC4\u53BB\u91CD" }, ["/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.html", "/utils/Array/unique%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D", "/utils/Array/unique\u6570\u7EC4\u53BB\u91CD.md", "/utils/Array/unique%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D.md"]],
  ["v-dff60d86", "/utils/Function/calcFn%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E8%BF%90%E7%AE%97.html", { "title": "calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97" }, ["/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.html", "/utils/Function/calcFn%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E8%BF%90%E7%AE%97", "/utils/Function/calcFn\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97.md", "/utils/Function/calcFn%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E8%BF%90%E7%AE%97.md"]],
  ["v-97ceeb80", "/utils/Function/debounce%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96.html", { "title": "debounce\u51FD\u6570\u9632\u6296" }, ["/utils/Function/debounce\u51FD\u6570\u9632\u6296.html", "/utils/Function/debounce%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96", "/utils/Function/debounce\u51FD\u6570\u9632\u6296.md", "/utils/Function/debounce%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96.md"]],
  ["v-5150c06c", "/utils/Function/throttle%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81.html", { "title": "throttle\u51FD\u6570\u8282\u6D41" }, ["/utils/Function/throttle\u51FD\u6570\u8282\u6D41.html", "/utils/Function/throttle%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81", "/utils/Function/throttle\u51FD\u6570\u8282\u6D41.md", "/utils/Function/throttle%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81.md"]],
  ["v-3999ae18", "/utils/Function/typeFn%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD.html", { "title": "typeFn\u7C7B\u578B\u5224\u65AD" }, ["/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.html", "/utils/Function/typeFn%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD", "/utils/Function/typeFn\u7C7B\u578B\u5224\u65AD.md", "/utils/Function/typeFn%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD.md"]],
  ["v-770db0d6", "/utils/Number/aboutEqual%E7%BA%A6%E7%AD%89%E4%BA%8E.html", { "title": "aboutEqual\u7EA6\u7B49\u4E8E" }, ["/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.html", "/utils/Number/aboutEqual%E7%BA%A6%E7%AD%89%E4%BA%8E", "/utils/Number/aboutEqual\u7EA6\u7B49\u4E8E.md", "/utils/Number/aboutEqual%E7%BA%A6%E7%AD%89%E4%BA%8E.md"]],
  ["v-47982a42", "/utils/Number/averageBy%E6%A3%80%E6%9F%A5%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.html", { "title": "averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49" }, ["/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.html", "/utils/Number/averageBy%E6%A3%80%E6%9F%A5%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89", "/utils/Number/averageBy\u68C0\u67E5\u6570\u7EC4\u5BF9\u8C61\u5404\u9879\u76F8\u7B49.md", "/utils/Number/averageBy%E6%A3%80%E6%9F%A5%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%90%84%E9%A1%B9%E7%9B%B8%E7%AD%89.md"]],
  ["v-4349dc68", "/utils/Number/average%E6%B1%82%E5%B9%B3%E5%9D%87%E5%80%BC.html", { "title": "average\u6C42\u5E73\u5747\u503C" }, ["/utils/Number/average\u6C42\u5E73\u5747\u503C.html", "/utils/Number/average%E6%B1%82%E5%B9%B3%E5%9D%87%E5%80%BC", "/utils/Number/average\u6C42\u5E73\u5747\u503C.md", "/utils/Number/average%E6%B1%82%E5%B9%B3%E5%9D%87%E5%80%BC.md"]],
  ["v-0a24fb2c", "/utils/Number/getLineSize%E8%AE%A1%E7%AE%97%E4%B8%A4%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E8%B7%9D%E7%A6%BB.html", { "title": "getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB" }, ["/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.html", "/utils/Number/getLineSize%E8%AE%A1%E7%AE%97%E4%B8%A4%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E8%B7%9D%E7%A6%BB", "/utils/Number/getLineSize\u8BA1\u7B97\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB.md", "/utils/Number/getLineSize%E8%AE%A1%E7%AE%97%E4%B8%A4%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E8%B7%9D%E7%A6%BB.md"]],
  ["v-1cf95226", "/utils/Number/randomNumber%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B4%E6%95%B0.html", { "title": "randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570" }, ["/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.html", "/utils/Number/randomNumber%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B4%E6%95%B0", "/utils/Number/randomNumber\u6307\u5B9A\u8303\u56F4\u7684\u968F\u673A\u6574\u6570.md", "/utils/Number/randomNumber%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B4%E6%95%B0.md"]],
  ["v-f61ebce8", "/utils/Number/sum%E6%95%B0%E7%BB%84%E4%B8%AD%E5%80%BC%E6%80%BB%E5%92%8C.html", { "title": "sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C" }, ["/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.html", "/utils/Number/sum%E6%95%B0%E7%BB%84%E4%B8%AD%E5%80%BC%E6%80%BB%E5%92%8C", "/utils/Number/sum\u6570\u7EC4\u4E2D\u503C\u603B\u548C.md", "/utils/Number/sum%E6%95%B0%E7%BB%84%E4%B8%AD%E5%80%BC%E6%80%BB%E5%92%8C.md"]],
  ["v-0b42a652", "/utils/String/padEnd%E5%A1%AB%E5%85%85%E5%8F%B3%E4%BE%A7%E5%AD%97%E7%AC%A6.html", { "title": "padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26" }, ["/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.html", "/utils/String/padEnd%E5%A1%AB%E5%85%85%E5%8F%B3%E4%BE%A7%E5%AD%97%E7%AC%A6", "/utils/String/padEnd\u586B\u5145\u53F3\u4FA7\u5B57\u7B26.md", "/utils/String/padEnd%E5%A1%AB%E5%85%85%E5%8F%B3%E4%BE%A7%E5%AD%97%E7%AC%A6.md"]],
  ["v-3ddd3670", "/utils/String/padStart%E5%A1%AB%E5%85%85%E5%B7%A6%E4%BE%A7%E5%AD%97%E7%AC%A6.html", { "title": "padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26" }, ["/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.html", "/utils/String/padStart%E5%A1%AB%E5%85%85%E5%B7%A6%E4%BE%A7%E5%AD%97%E7%AC%A6", "/utils/String/padStart\u586B\u5145\u5DE6\u4FA7\u5B57\u7B26.md", "/utils/String/padStart%E5%A1%AB%E5%85%85%E5%B7%A6%E4%BE%A7%E5%AD%97%E7%AC%A6.md"]],
  ["v-073e1400", "/utils/String/thousands%E6%AF%8F%E9%9A%94%E4%B8%89%E4%BD%8D%E6%95%B0%E5%AD%97%E6%B7%BB%E5%8A%A0%E9%80%97%E5%8F%B7.html", { "title": "thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7" }, ["/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.html", "/utils/String/thousands%E6%AF%8F%E9%9A%94%E4%B8%89%E4%BD%8D%E6%95%B0%E5%AD%97%E6%B7%BB%E5%8A%A0%E9%80%97%E5%8F%B7", "/utils/String/thousands\u6BCF\u9694\u4E09\u4F4D\u6570\u5B57\u6DFB\u52A0\u9017\u53F7.md", "/utils/String/thousands%E6%AF%8F%E9%9A%94%E4%B8%89%E4%BD%8D%E6%95%B0%E5%AD%97%E6%B7%BB%E5%8A%A0%E9%80%97%E5%8F%B7.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
var createRoutes = () => pagesRoutes.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
var historyCreator = createWebHistory;
var createVueRouter = () => {
  const router = createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION_NORMALIZED) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var COMPONENT_STATE_TYPE = "VuePress";
var setupDevtools = (app, globalComputed) => {
  setupDevtoolsPlugin({
    app,
    id: "org.vuejs.vuepress",
    label: "VuePress",
    packageName: "@vuepress/client",
    homepage: "https://v2.vuepress.vuejs.org",
    logo: "https://v2.vuepress.vuejs.org/images/hero.png",
    componentStateTypes: [COMPONENT_STATE_TYPE]
  }, (api) => {
    api.on.inspectComponent((payload) => {
      payload.instanceData.state.push(...Object.entries(globalComputed).map(([name, item]) => ({
        type: COMPONENT_STATE_TYPE,
        key: name,
        editable: false,
        value: item.value
      })));
    });
  });
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router) => {
  const routeLocale = computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const route = useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  const headTags = ref([]);
  const loadHead = () => {
    head.value.forEach((item) => {
      const tag = queryHeadTag(item);
      if (tag) {
        headTags.value.push(tag);
      }
    });
  };
  const updateHead = () => {
    document.documentElement.lang = lang.value;
    headTags.value.forEach((item) => {
      if (item.parentNode === document.head) {
        document.head.removeChild(item);
      }
    });
    headTags.value.splice(0, headTags.value.length);
    head.value.forEach((item) => {
      const tag = createHeadTag(item);
      if (tag !== null) {
        document.head.appendChild(tag);
        headTags.value.push(tag);
      }
    });
  };
  provide(updateHeadSymbol, updateHead);
  onMounted(() => {
    loadHead();
    updateHead();
    watch(() => route.path, () => updateHead());
  });
};
var queryHeadTag = ([
  tagName,
  attrs,
  content = ""
]) => {
  const attrsSelector = Object.entries(attrs).map(([key, value]) => {
    if (isString$1(value)) {
      return `[${key}="${value}"]`;
    }
    if (value === true) {
      return `[${key}]`;
    }
    return "";
  }).join("");
  const selector2 = `head > ${tagName}${attrsSelector}`;
  const tags = Array.from(document.querySelectorAll(selector2));
  const matchedTag = tags.find((item) => item.innerText === content);
  return matchedTag || null;
};
var createHeadTag = ([
  tagName,
  attrs,
  content
]) => {
  if (!isString$1(tagName)) {
    return null;
  }
  const tag = document.createElement(tagName);
  if (isPlainObject(attrs)) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (isString$1(value)) {
        tag.setAttribute(key, value);
      } else if (value === true) {
        tag.setAttribute(key, "");
      }
    });
  }
  if (isString$1(content)) {
    tag.appendChild(document.createTextNode(content));
  }
  return tag;
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h(RouterView),
        ...clientConfigs.flatMap(({ rootComponents = [] }) => rootComponents.map((component) => h(component)))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  const globalComputed = setupGlobalComputed(app, router);
  {
    setupDevtools(app, globalComputed);
  }
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
{
  createVueApp().then(({ app, router }) => {
    router.isReady().then(() => {
      app.mount("#app");
    });
  });
}
export { isPlainObject as $, createBlock as A, withDirectives as B, vShow as C, useSiteLocaleData as D, useDarkMode as E, Fragment as F, h as G, withBase as H, ClientOnly as I, toRefs as J, mergeProps as K, isLinkHttp as L, isLinkMailto as M, isLinkTel as N, useSiteData as O, Transition as P, removeLeadingSlash as Q, removeEndingSlash as R, useRouter as S, TransitionGroup as T, isString$1 as U, useNavLink as V, normalizeStyle as W, usePageData as X, usePageFrontmatter as Y, useSidebarItems as Z, _export_sfc as _, createStaticVNode as a, withKeys as a0, useScrollPromise as a1, createBaseVNode as b, createElementBlock as c, createVueApp, createVNode as d, createTextVNode as e, defineComponent as f, useThemeLocaleData as g, unref as h, popScopeId as i, ref as j, computed as k, onMounted as l, onUnmounted as m, renderSlot as n, openBlock as o, pushScopeId as p, inject as q, resolveComponent as r, useRoute as s, toDisplayString as t, useRouteLocale as u, watch as v, withCtx as w, renderList as x, normalizeClass as y, createCommentVNode as z };
