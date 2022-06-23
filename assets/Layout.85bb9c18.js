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
import { _ as _export_sfc, j as ref, k as computed, l as onMounted, m as onUnmounted, o as openBlock, c as createElementBlock, r as resolveComponent, d as createVNode, b as createBaseVNode, n as renderSlot, q as inject, s as useRoute, v as watch, w as withCtx, F as Fragment, x as renderList, y as normalizeClass, e as createTextVNode, t as toDisplayString, z as createCommentVNode, A as createBlock, T as TransitionGroup, B as withDirectives, C as vShow, f as defineComponent, u as useRouteLocale, D as useSiteLocaleData, g as useThemeLocaleData, E as useDarkMode, h as unref, G as h, H as withBase, I as ClientOnly, J as toRefs, K as mergeProps, L as isLinkHttp, M as isLinkMailto, N as isLinkTel, O as useSiteData, P as Transition, Q as removeLeadingSlash, R as removeEndingSlash, S as useRouter, U as isString, V as useNavLink, a as createStaticVNode, W as normalizeStyle, X as usePageData, Y as usePageFrontmatter, Z as useSidebarItems, $ as isPlainObject, a0 as withKeys, a1 as useScrollPromise } from "./app.b0857ca0.js";
const _sfc_main$n = {
  name: "bubblesEffect",
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    selectRef: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    let canvasRef = ref(null);
    let frameTimer = ref(null);
    let width, height, canvas, ctx, bubbles2 = [];
    let opts = computed(() => {
      return Object.assign({}, {
        densety: 0.08
      }, props.options);
    });
    onMounted(() => {
      handleInitCanvas();
    });
    function handleInitCanvas() {
      canvas = canvasRef.value;
      resizeRef();
      ctx = canvas.getContext("2d");
      var num = width * opts.value.densety;
      for (let x = 0; x < num; x++) {
        var c = new Bubble();
        bubbles2.push(c);
      }
      animate();
    }
    function animate() {
      cancelAnimationFrame(frameTimer);
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < bubbles2.length; i++) {
        bubbles2[i].draw();
      }
      frameTimer = requestAnimationFrame(animate);
    }
    window.addEventListener("resize", () => {
      resizeRef();
    });
    function resizeRef() {
      var _a, _b;
      const target = props.selectRef && document.querySelector(props.selectRef);
      width = (_a = target == null ? void 0 : target.offsetWidth) != null ? _a : window.innerWidth || 0;
      height = (_b = target == null ? void 0 : target.offsetHeight) != null ? _b : window.innerHeight || 0;
      canvas.width = width;
      canvas.height = height;
    }
    function Bubble() {
      var _this = this;
      _this.pos = {};
      init();
      function init() {
        _this.pos.x = Math.random() * width;
        _this.pos.y = height + Math.random() * 100;
        _this.alpha = 0.1 + Math.random() * 0.3;
        _this.alpha_change = 2e-4 + Math.random() * 5e-4;
        _this.scale = 0.2 + Math.random() * 0.8;
        _this.scale_change = Math.random() * 1e-3;
        _this.speed = 0.1 + Math.random() * 0.5;
      }
      this.draw = function() {
        if (_this.alpha <= 0) {
          init();
        }
        _this.pos.y -= _this.speed;
        _this.alpha -= _this.alpha_change;
        _this.scale += _this.scale_change;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = "rgba(245,245,245," + _this.alpha + ")";
        ctx.fill();
      };
    }
    onUnmounted(() => {
      cancelAnimationFrame(frameTimer);
    });
    return { canvasRef };
  }
};
const _hoisted_1$j = {
  ref: "canvasRef",
  style: { "position": "absolute", "top": "0", "left": "0" }
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("canvas", _hoisted_1$j, null, 512);
}
var bubbles = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$8], ["__file", "bubbles.vue"]]);
var Home_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fantasy {\n  position: fixed;\n  top: 0;\n  height: 100vh;\n  width: 100%;\n  z-index: -1;\n}\n.hidden {\n  display: none;\n}\n#display {\n  margin: auto;\n}\n.custom-home-class {\n  margin-top: 0 !important;\n  background-attachment: fixed !important;\n}\n.custom-home-class .navbar {\n  transition: transform 0.3s;\n  background-color: transparent;\n  -webkit-backdrop-filter: saturate(230%) blur(20px);\n          backdrop-filter: saturate(230%) blur(20px);\n  background-color: rgba(255, 255, 255, 0.23);\n  border-bottom: 1px solid transparent;\n  transition: background-color 0.5s cubic-bezie(0.28, 0.11, 0.32, 1);\n  transition-property: background-color, backdrop-filter, -webkit-backdrop-filter;\n  color: var(--c-text);\n}\n.custom-home-class .navbar-items a:hover {\n  color: var(--c-text-accent);\n  transform: scale(1.1);\n}")();
const _sfc_main$m = {
  components: { bubbles },
  setup() {
    onMounted(() => {
      handleInit();
    });
    function handleInit() {
      var cvs = document.getElementById("cvs");
      if (!cvs) {
        return;
      }
      var ctx = cvs.getContext("2d");
      var display = document.getElementById("display");
      var displayCtx = display.getContext("2d");
      var screenImage = document.getElementById("screenImage");
      var screenImageCtx = screenImage.getContext("2d");
      var rili = document.getElementById("rili");
      var riliCtx = rili.getContext("2d");
      function drawRili() {
        riliCtx.clearRect(0, 0, 600, 600);
        var date = new Date();
        var year = date.getYear();
        var mouth = date.getMonth();
        var today = date.getDate();
        var week = date.getDay();
        var cardSize = 40;
        var array_three = [4, 6, 9, 11];
        var array_threeone = [1, 3, 5, 7, 8, 10, 12];
        var array_week = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];
        var firstDraw;
        var wIdx = (today - 1) % 7;
        if (week >= wIdx) {
          firstDraw = week - wIdx;
        } else {
          firstDraw = week - wIdx + 7;
        }
        var dayIndex = 1;
        var countDay = 30;
        if (array_three.indexOf(mouth + 1) > -1) {
          countDay = 30;
        } else if (array_threeone.indexOf(mouth + 1) > -1) {
          countDay = 31;
        } else {
          if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
            countDay = 29;
          else
            countDay = 28;
        }
        var row = 6;
        function drawTodaybg(i3, j2) {
          riliCtx.save();
          riliCtx.beginPath();
          riliCtx.strokeStyle = "#900";
          riliCtx.arc(45 + i3 * cardSize * 1.7 + cardSize / 1.18, 50 + j2 * cardSize + cardSize / 2, cardSize / 2 - 10, -Math.PI, Math.PI * 1);
          riliCtx.stroke();
          riliCtx.closePath();
          riliCtx.beginPath();
          riliCtx.arc(45 + i3 * cardSize * 1.7 + cardSize / 1.18, 50 + j2 * cardSize + cardSize / 2, cardSize / 2 - 9, -Math.PI, Math.PI * 0.9);
          riliCtx.stroke();
          riliCtx.closePath();
          riliCtx.beginPath();
          riliCtx.arc(45 + i3 * cardSize * 1.7 + cardSize / 1.18, 50 + j2 * cardSize + cardSize / 2, cardSize / 2 - 8, -Math.PI, Math.PI * 0.8);
          riliCtx.stroke();
          riliCtx.closePath();
          riliCtx.beginPath();
          riliCtx.arc(45 + i3 * cardSize * 1.7 + cardSize / 1.18, 50 + j2 * cardSize + cardSize / 2, cardSize / 2 - 7, -Math.PI, Math.PI * 0.7);
          riliCtx.stroke();
          riliCtx.closePath();
          riliCtx.beginPath();
          riliCtx.arc(45 + i3 * cardSize * 1.7 + cardSize / 1.18, 50 + j2 * cardSize + cardSize / 2, cardSize / 2 - 6, -Math.PI, Math.PI * 0.6);
          riliCtx.stroke();
          riliCtx.closePath();
          riliCtx.restore();
        }
        var isNum = /^\d+(\d+)?$/;
        function drawDate(txt, i3, j2) {
          riliCtx.textAlign = "center";
          riliCtx.fillStyle = "rgb(69,68,84)";
          riliCtx.font = cardSize / 1.5 + "px Impact";
          var yOffest = 3;
          if ((j2 == 0 || j2 == 6) && isNum.test(txt)) {
            riliCtx.fillStyle = "#900";
          }
          riliCtx.fillText(txt.toString(), 45 + j2 * cardSize * 1.7 + cardSize / 1.18, 50 + i3 * cardSize + cardSize / 3 * 2 + yOffest);
          if (txt == today) {
            drawTodaybg(j2, i3);
          }
        }
        riliCtx.fillStyle = "rgb(69,68,84)";
        riliCtx.font = "900 26pt SimHei";
        riliCtx.textAlign = "center";
        var monthCN = [
          "\u4E00",
          "\u4E8C",
          "\u4E09",
          "\u56DB",
          "\u4E94",
          "\u516D",
          "\u4E03",
          "\u516B",
          "\u4E5D",
          "\u5341",
          "\u5341\u4E00",
          "\u5341\u4E8C"
        ];
        {
          riliCtx.scale(1.1, 1);
          riliCtx.fillText(monthCN[mouth] + "\u6708", 260, 32);
          riliCtx.resetTransform();
          riliCtx.font = "20pt SimHei";
          riliCtx.textAlign = "end";
          riliCtx.fillText(today + "\u65E5", 520, 38);
        }
        for (var i2 = 0; i2 < row; i2++) {
          for (var j = 0; j < 7; j++) {
            riliCtx.strokeRect(45 + j * cardSize * 1.7, 50 + i2 * cardSize, cardSize * 1.7, cardSize);
          }
        }
        dayIndex = 1;
        for (var i2 = 0; i2 < row; i2++) {
          for (var j = 0; j < 7; j++) {
            if (i2 == 0) {
              drawDate(array_week[j], i2, j);
              continue;
            }
            if (i2 == 1 && j < firstDraw) {
              continue;
            }
            if (dayIndex > countDay) {
              break;
            }
            drawDate(dayIndex++, i2, j);
          }
        }
      }
      setInterval(drawRili, 36e5);
      drawRili();
      var screenMask = new Image();
      screenMask.src = "/fantasy/Screenmask.png";
      var screen = new Image();
      screen.src = "/fantasy/screen.png";
      var iv = setInterval(() => {
        if (screen.complete && screenMask.complete) {
          screenImageCtx.drawImage(screen, -300, -50, 1280, 720);
          screenImageCtx.globalCompositeOperation = "destination-atop";
          screenImageCtx.drawImage(screenMask, 0, 0);
          screenImageCtx.globalCompositeOperation = "source-over";
          clearInterval(iv);
        }
      }, 14);
      window.onresize = function() {
        display.width = window.innerWidth;
        if (window.innerWidth / window.innerHeight > 1.8333333333333) {
          display.height = window.innerWidth / 1980 * 1080;
        } else {
          display.height = window.innerHeight;
        }
      };
      window.onresize();
      var bg = new Image();
      bg.src = "/fantasy/bg.png";
      var mask = new Image();
      mask.src = "/fantasy/mask.png";
      var light = new Image();
      light.src = "/fantasy/light.png";
      var caidai = new Image();
      caidai.src = "/fantasy/caidai.png";
      var two = new Image();
      two.src = "/fantasy/22.png";
      var screenLight = new Image();
      screenLight.src = "/fantasy/screenLight.png";
      var phoneLight = new Image();
      phoneLight.src = "/fantasy/phoneLight.png";
      var phoneText = JSON.parse('[{"time":0,"text":"\u51CC\u6668\u5566!"},{"time":6,"text":"\u65E9\u4E0A\u597D!"},{"time":8,"text":"\u4E0A\u5348\u597D!"},{"time":11,"text":"\u4F60\u5403\u4E86\u5417"},{"time":13,"text":"\u4E0B\u5348\u597D\u9E2D!"},{"time":16,"text":"\u508D\u665A\u54AF!"},{"time":19,"text":"\u665A\u5B89!"}]');
      var data = new Array(128);
      var animData = new Array(128);
      for (var i = 0; i < 128; i++) {
        data[i] = animData[i] = 0;
      }
      var peakValue = 1;
      if (window.wallpaperRegisterAudioListener) {
        window.wallpaperRegisterAudioListener(function(audioData) {
          var max2 = 0;
          for (var i2 = 0; i2 < 128; i2++) {
            if (audioData[i2] > max2)
              max2 = audioData[i2];
          }
          peakValue = peakValue * 0.99 + max2 * 0.01;
          for (i2 = 0; i2 < 64; i2++) {
            data[63 - i2] = audioData[i2] / peakValue;
          }
          for (i2 = 0; i2 < 64; i2++) {
            data[127 - i2] = audioData[127 - i2];
          }
        });
      } else {
        var iva;
        let audio = document.getElementsByClassName("aplayer-button")[0];
        if (audio) {
          audio.onclick = () => {
            let play = document.getElementsByClassName("aplayer-play")[0];
            if (play) {
              iva = setInterval(() => {
                for (i2 = 0; i2 < 64; i2++) {
                  peakValue = peakValue * 0.99 + 1 * 0.01;
                  data[63 - i2] = Math.random() * 0.4 / peakValue * Math.random();
                }
                for (i2 = 0; i2 < 64; i2++) {
                  data[127 - i2] = Math.random() * 0.2 * Math.random();
                }
              }, 130);
            } else {
              clearInterval(iva);
              for (var i2 = 0; i2 < 128; i2++) {
                data[i2] = animData[i2] = 0;
              }
            }
          };
        }
      }
      function min(a, b) {
        return a > b ? b : a;
      }
      function max(a, b) {
        return a > b ? a : b;
      }
      var targetColor = { r: 80, g: 120, b: 169 };
      var currentColor = { r: 80, g: 120, b: 169 };
      var lightColor = { r: 0, g: 34, b: 77, a: 0 };
      function colorToRgb(color) {
        return "rgb(" + color.r.toString() + "," + color.g.toString() + "," + color.b.toString() + ")";
      }
      function colorToRgba(colorWithA) {
        return "rgba(" + colorWithA.r.toString() + "," + colorWithA.g.toString() + "," + colorWithA.b.toString() + "," + colorWithA.a.toString() + ")";
      }
      var night = false;
      function render() {
        for (var i2 = 0; i2 < 128; i2++) {
          animData[i2] += (data[i2] - animData[i2]) * 0.3;
          animData[i2] = min(animData[i2], 1);
        }
        currentColor.r += (targetColor.r - currentColor.r) * 0.01;
        currentColor.r = min(currentColor.r, 255);
        currentColor.r = max(currentColor.r, 0);
        currentColor.g += (targetColor.g - currentColor.g) * 0.01;
        currentColor.g = min(currentColor.g, 255);
        currentColor.g = max(currentColor.g, 0);
        currentColor.b += (targetColor.b - currentColor.b) * 0.01;
        currentColor.b = min(currentColor.b, 255);
        currentColor.b = max(currentColor.b, 0);
        ctx.clearRect(0, 0, 1980, 1080);
        ctx.drawImage(bg, 0, 0);
        ctx.drawImage(mask, 954, 99);
        ctx.fillStyle = "#97adbb";
        ctx.font = "32pt Impact";
        ctx.transform(1, 2.05 * (Math.PI / 180), 0, 1, 0, 0);
        var time = new Date();
        ctx.fillText((time.getHours() < 10 ? "0" : "") + time.getHours().toString() + ":" + (time.getMinutes() < 10 ? "0" : "") + time.getMinutes() + ":" + (time.getSeconds() < 10 ? "0" : "") + time.getSeconds().toString(), 725, 318);
        ctx.resetTransform();
        ctx.transform(0.9645, 0, 0 * (Math.PI / 180), 0.96, 967, 100);
        ctx.rotate(6 * (Math.PI / 180));
        {
          ctx.drawImage(rili, 0, 0);
          ctx.resetTransform();
          ctx.transform(0.9645, 0, 9 * (Math.PI / 180), 1, 825, 160);
          ctx.rotate(7 * (Math.PI / 180));
        }
        targetColor = { r: 80, g: 120, b: 169 };
        if (night) {
          targetColor = { r: 255, g: 75, b: 80 };
        }
        {
          ctx.fillStyle = "rgba(0,0,0,0.5)";
          ctx.fillRect(-10, 320, 650, 2);
        }
        ctx.fillStyle = colorToRgb(currentColor);
        var i2;
        {
          for (var i2 = 32; i2 < 95; i2++)
            ctx.fillRect(10 * (i2 - 32), 20 + (300 - 300 * animData[i2]), 4, 300 * animData[i2]);
        }
        ctx.resetTransform();
        ctx.globalCompositeOperation = "overlay";
        ctx.drawImage(light, 971, 197);
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(caidai, 949, 25);
        ctx.drawImage(two, 1319, 345);
        if (night && lightColor.a < 0.7) {
          lightColor.a += 5e-3;
          lightColor.a = min(lightColor.a, 0.7);
        } else if (!night) {
          lightColor.a -= 5e-3;
          lightColor.a = max(lightColor.a, 0);
        }
        if (lightColor.a > 0) {
          ctx.globalCompositeOperation = "hard-light";
          ctx.fillStyle = colorToRgba(lightColor);
          ctx.fillRect(0, 0, 1980, 1080);
          ctx.globalCompositeOperation = "source-over";
          ctx.globalAlpha = lightColor.a / 0.7;
          ctx.drawImage(phoneLight, 860, 437);
          ctx.globalAlpha = 1;
        }
        ctx.drawImage(screenImage, 0, 0);
        if (lightColor.a > 0) {
          ctx.globalAlpha = lightColor.a / 0.7;
          ctx.drawImage(screenLight, 0, 0);
          ctx.globalAlpha = 1;
        }
        night = true;
        var greeting = "\u51CC\u6668\u5566!";
        phoneText.forEach((v) => {
          if (time.getHours() >= v.time) {
            greeting = v.text;
          }
        });
        if (time.getHours() >= 6 && time.getHours() <= 18) {
          night = false;
        }
        night = night;
        ctx.fillStyle = "#000";
        ctx.font = "31.02pt SimHei";
        ctx.transform(1.0911, -35 * (Math.PI / 180), 0, 0.5868, 1132.94, 564.07);
        ctx.rotate(56.5 * (Math.PI / 180));
        ctx.textAlign = "center";
        ctx.fillStyle = "#fff";
        ctx.fillText(greeting, 135, 100);
        ctx.textAlign = "start";
        ctx.resetTransform();
        displayCtx.drawImage(cvs, 0, 0, display.width, display.height);
        window.requestAnimationFrame(render);
      }
      window.requestAnimationFrame(render);
    }
  }
};
const _hoisted_1$i = { class: "fantasy" };
const _hoisted_2$a = /* @__PURE__ */ createBaseVNode("canvas", {
  id: "cvs",
  class: "hidden",
  width: "1980",
  height: "1080"
}, null, -1);
const _hoisted_3$9 = /* @__PURE__ */ createBaseVNode("canvas", {
  id: "screenImage",
  class: "hidden",
  width: "234",
  height: "357"
}, null, -1);
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode("canvas", {
  id: "rili",
  class: "hidden",
  width: "600",
  height: "600"
}, null, -1);
const _hoisted_5$4 = /* @__PURE__ */ createBaseVNode("canvas", { id: "display" }, null, -1);
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bubbles = resolveComponent("bubbles");
  return openBlock(), createElementBlock("div", _hoisted_1$i, [
    _hoisted_2$a,
    _hoisted_3$9,
    _hoisted_4$5,
    _hoisted_5$4,
    createVNode(_component_bubbles)
  ]);
}
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$7], ["__file", "Home.vue"]]);
var MainLayout_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".main-wrapper {\n  padding-top: var(--navbar-height);\n  margin: 0 auto;\n  max-width: 1100px;\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n}\n.main-wrapper .main-left {\n  flex: 1;\n}\n.main-wrapper .main-left .theme-vdoing-content.card-box {\n  padding: 1rem 1.5rem;\n  margin-bottom: 0.9rem;\n}\n.main-wrapper .main-left .home-content {\n  padding: 1rem 1.5rem 0;\n}\n.main-wrapper .main-right > * {\n  width: 245px;\n  box-sizing: border-box;\n}\n@media (max-width: 900px) {\n.main-wrapper .main-right > * {\n    width: 235px;\n}\n}\n.main-wrapper .main-right .card-box {\n  margin: 0 0 0.9rem 0.9rem;\n  padding-top: 0.95rem;\n  padding-bottom: 0.95rem;\n}\n@media (max-width: 719px) {\n.main-wrapper {\n    margin: 0.9rem 0;\n    padding: 0;\n    display: block;\n}\n.main-wrapper .main-left {\n    width: 100%;\n}\n.main-wrapper .main-left .post-list {\n    margin-bottom: 3rem;\n}\n.main-wrapper .main-left .post-list .post {\n    border-radius: 0;\n}\n.main-wrapper .main-left .pagination {\n    margin-bottom: 3rem;\n}\n.main-wrapper .main-right .blogger-wrapper {\n    display: none;\n}\n.main-wrapper .main-right .card-box {\n    margin: 0 0 0.9rem 0;\n    border-radius: 0;\n    width: 100%;\n}\n}")();
const _sfc_main$l = {};
const _hoisted_1$h = { class: "main-wrapper" };
const _hoisted_2$9 = { class: "main-left" };
const _hoisted_3$8 = { class: "main-right" };
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("main", _hoisted_1$h, [
    createBaseVNode("div", _hoisted_2$9, [
      renderSlot(_ctx.$slots, "mainLeft")
    ]),
    createBaseVNode("div", _hoisted_3$8, [
      renderSlot(_ctx.$slots, "mainRight")
    ])
  ]);
}
var MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$6], ["__file", "MainLayout.vue"]]);
var PostList_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => '.post-list {\n  margin-bottom: 4rem;\n}\n.post-list .post {\n  position: relative;\n  padding: 1rem 1.5rem;\n  margin-bottom: 0.9rem;\n  transition: all 0.3s;\n}\n.post-list .post.post-leave-active {\n  display: none;\n}\n.post-list .post.post-enter {\n  opacity: 0;\n  transform: translateX(-20px);\n}\n.post-list .post::before {\n  position: absolute;\n  top: -1px;\n  right: 0;\n  font-size: 2.5rem;\n  color: #ff5722;\n  opacity: 0.85;\n}\n.post-list .post .title-wrapper a {\n  color: var(--textColor);\n}\n.post-list .post .title-wrapper a:hover {\n  color: #11a8cd;\n}\n.post-list .post .title-wrapper h2 {\n  margin: 0.5rem 0;\n  font-size: 1.4rem;\n  border: none;\n}\n.post-list .post .title-wrapper h2 .title-tag {\n  height: 1.2rem;\n  line-height: 1.2rem;\n  border: 1px solid #ff5722;\n  color: #ff5722;\n  font-size: 0.8rem;\n  padding: 0 0.35rem;\n  border-radius: 0.2rem;\n  margin-left: 0rem;\n  transform: translate(0, -0.15rem);\n  display: inline-block;\n}\n.post-list .post .title-wrapper h2 a {\n  display: block;\n}\n@media (max-width: 719px) {\n.post-list .post .title-wrapper h2 a {\n    font-weight: 400;\n}\n}\n.post-list .post .title-wrapper .article-info > a,\n.post-list .post .title-wrapper .article-info > span {\n  opacity: 0.7;\n  font-size: 0.8rem;\n  margin-right: 1rem;\n  cursor: pointer;\n}\n.post-list .post .title-wrapper .article-info > a::before,\n.post-list .post .title-wrapper .article-info > span::before {\n  margin-right: 0.3rem;\n}\n.post-list .post .title-wrapper .article-info > a a,\n.post-list .post .title-wrapper .article-info > span a {\n  margin: 0;\n}\n.post-list .post .title-wrapper .article-info > a a:not(:first-child)::before,\n.post-list .post .title-wrapper .article-info > span a:not(:first-child)::before {\n  content: "/";\n}\n.post-list .post .title-wrapper .article-info .tags a:not(:first-child)::before {\n  content: "\u3001";\n}\n.post-list .post .excerpt-wrapper {\n  border-top: 1px solid var(--borderColor);\n  margin: 0.5rem 0;\n  overflow: hidden;\n}\n.post-list .post .excerpt-wrapper .excerpt {\n  margin-bottom: 0.3rem;\n  font-size: 0.92rem;\n}\n.post-list .post .excerpt-wrapper .excerpt h1,\n.post-list .post .excerpt-wrapper .excerpt h2,\n.post-list .post .excerpt-wrapper .excerpt h3 {\n  display: none;\n}\n.post-list .post .excerpt-wrapper .excerpt img {\n  max-height: 280px;\n  max-width: 100% !important;\n  margin: 0 auto;\n}\n.post-list .post .excerpt-wrapper .readmore {\n  float: right;\n  margin-right: 1rem;\n  line-height: 1rem;\n}\n.post-list .post .excerpt-wrapper .readmore::before {\n  float: right;\n  font-size: 0.8rem;\n  margin: 0.1rem 0 0 0.2rem;\n}')();
const _sfc_main$k = {
  props: {
    category: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: ""
    },
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 10
    }
  },
  setup(props, { emit }) {
    let sortPosts = ref([]);
    let postListOffsetTop = ref(0);
    const $groupPosts = inject("$groupPosts").value;
    const $sortPosts = inject("$sortPosts").value;
    const $route = useRoute();
    onMounted(() => {
      handleSetPosts();
    });
    watch(() => props.currentPage, (currentPage) => {
      if ($route.query.p != currentPage) {
        $route.push({ query: __spreadProps(__spreadValues({}, $route.query), { p: currentPage }) });
      }
      setTimeout(() => {
        window.scrollTo({ top: postListOffsetTop });
      }, 0);
      handleSetPosts();
    });
    watch([() => props.category, () => props.tag], ([category, tag], [prevCategory, prevTag]) => {
      console.log("new----", category, tag, "old", prevCategory, prevTag);
      handleSetPosts();
    });
    function handleSetPosts() {
      const currentPage = props.currentPage;
      const perPage = props.perPage;
      console.log();
      let type = props.category || props.tag;
      let posts = type ? $groupPosts.categories[type] : $sortPosts;
      sortPosts.value = posts.slice((currentPage - 1) * perPage, currentPage * perPage);
      console.log(sortPosts, "sortPosts");
    }
    return { sortPosts };
  }
};
const _hoisted_1$g = {
  class: "post-list",
  ref: "postList"
};
const _hoisted_2$8 = { class: "title-wrapper" };
const _hoisted_3$7 = {
  key: 0,
  class: "title-tag"
};
const _hoisted_4$4 = { class: "article-info" };
const _hoisted_5$3 = ["href"];
const _hoisted_6$3 = {
  key: 1,
  title: "\u4F5C\u8005",
  class: "iconfont icon-touxiang"
};
const _hoisted_7$3 = {
  key: 2,
  title: "\u521B\u5EFA\u65F6\u95F4",
  class: "iconfont icon-riqi"
};
const _hoisted_8$3 = {
  key: 3,
  title: "\u5206\u7C7B",
  class: "iconfont icon-wenjian"
};
const _hoisted_9$2 = {
  key: 4,
  title: "\u6807\u7B7E",
  class: "iconfont icon-biaoqian tags"
};
const _hoisted_10$1 = {
  key: 0,
  class: "excerpt-wrapper"
};
const _hoisted_11 = ["innerHTML"];
const _hoisted_12$1 = /* @__PURE__ */ createTextVNode("\u9605\u8BFB\u5168\u6587");
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1$g, [
    createVNode(TransitionGroup, {
      name: "post",
      tag: "div"
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.sortPosts, (item) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["post card-box", item.frontmatter.sticky && "iconfont icon-zhiding"]),
            key: item.key
          }, [
            createBaseVNode("div", _hoisted_2$8, [
              createBaseVNode("h2", null, [
                createVNode(_component_router_link, {
                  to: item.path
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.title) + " ", 1),
                    item.frontmatter.titleTag ? (openBlock(), createElementBlock("span", _hoisted_3$7, toDisplayString(item.frontmatter.titleTag), 1)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              createBaseVNode("div", _hoisted_4$4, [
                item.author && item.author.href ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  title: "\u4F5C\u8005",
                  class: "iconfont icon-touxiang",
                  target: "_blank",
                  href: item.author.href
                }, toDisplayString(item.author.name ? item.author.name : item.author), 9, _hoisted_5$3)) : item.author ? (openBlock(), createElementBlock("span", _hoisted_6$3, toDisplayString(item.author.name ? item.author.name : item.author), 1)) : createCommentVNode("", true),
                item.frontmatter.date ? (openBlock(), createElementBlock("span", _hoisted_7$3, toDisplayString(item.frontmatter.date.split(" ")[0]), 1)) : createCommentVNode("", true),
                _ctx.$themeConfig.category !== false && item.frontmatter.categories ? (openBlock(), createElementBlock("span", _hoisted_8$3, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.frontmatter.categories, (c, index) => {
                    return openBlock(), createBlock(_component_router_link, {
                      to: `/categories/?category=${encodeURIComponent(c)}`,
                      key: index
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(c), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 128))
                ])) : createCommentVNode("", true),
                _ctx.$themeConfig.tag !== false && item.frontmatter.tags && item.frontmatter.tags[0] ? (openBlock(), createElementBlock("span", _hoisted_9$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.frontmatter.tags, (t, index) => {
                    return openBlock(), createBlock(_component_router_link, {
                      to: `/tags/?tag=${encodeURIComponent(t)}`,
                      key: index
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(t), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ]),
            item.excerpt ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
              createBaseVNode("div", {
                class: "excerpt",
                innerHTML: item.excerpt
              }, null, 8, _hoisted_11),
              createVNode(_component_router_link, {
                to: item.path,
                class: "readmore iconfont icon-jiantou-you"
              }, {
                default: withCtx(() => [
                  _hoisted_12$1
                ]),
                _: 2
              }, 1032, ["to"])
            ])) : createCommentVNode("", true)
          ], 2);
        }), 128))
      ]),
      _: 1
    })
  ], 512);
}
var PostList = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$5], ["__file", "PostList.vue"]]);
var Pagination_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "")();
const _sfc_main$j = {
  props: {
    total: {
      type: Number,
      default: 10
    },
    perPage: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.total / this.perPage);
    }
  },
  methods: {
    threeNum() {
      let num = 3;
      const currentPage = this.currentPage;
      const pages = this.pages;
      if (currentPage < 3) {
        num = 3;
      } else if (currentPage > pages - 3) {
        num = pages - 2;
      } else {
        num = currentPage;
      }
      return num;
    },
    goPrex() {
      let currentPage = this.currentPage;
      if (currentPage > 1) {
        this.handleEmit(--currentPage);
      }
    },
    goNext() {
      let currentPage = this.currentPage;
      if (currentPage < this.pages) {
        this.handleEmit(++currentPage);
      }
    },
    goIndex(i) {
      if (i !== this.currentPage) {
        this.handleEmit(i);
      }
    },
    handleEmit(i) {
      this.$emit("getCurrentPage", i);
    }
  }
};
const _hoisted_1$f = { class: "pagination" };
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E0A\u4E00\u9875", -1);
const _hoisted_3$6 = [
  _hoisted_2$7
];
const _hoisted_4$3 = {
  key: 0,
  class: "pagination-list"
};
const _hoisted_5$2 = ["onClick"];
const _hoisted_6$2 = {
  key: 1,
  class: "pagination-list"
};
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E0B\u4E00\u9875", -1);
const _hoisted_8$2 = [
  _hoisted_7$2
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
    createBaseVNode("span", {
      class: normalizeClass(["card-box prev iconfont icon-jiantou-zuo", { disabled: $props.currentPage === 1 }]),
      onClick: _cache[0] || (_cache[0] = ($event) => $options.goPrex())
    }, _hoisted_3$6, 2),
    $options.pages <= 5 ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.pages, (item) => {
        return openBlock(), createElementBlock("span", {
          class: normalizeClass(["card-box", { active: $props.currentPage === item }]),
          key: item,
          onClick: ($event) => $options.goIndex(item)
        }, toDisplayString(item), 11, _hoisted_5$2);
      }), 128))
    ])) : (openBlock(), createElementBlock("div", _hoisted_6$2, [
      createBaseVNode("span", {
        class: normalizeClass(["card-box", { active: $props.currentPage === 1 }]),
        onClick: _cache[1] || (_cache[1] = ($event) => $options.goIndex(1))
      }, "1", 2),
      withDirectives(createBaseVNode("span", {
        class: "ellipsis ell-two",
        onClick: _cache[2] || (_cache[2] = ($event) => $options.goIndex($props.currentPage - 2)),
        title: "\u4E0A\u4E24\u9875"
      }, null, 512), [
        [vShow, $props.currentPage > 3]
      ]),
      withDirectives(createBaseVNode("span", {
        class: normalizeClass(["card-box", { active: $props.currentPage === 2 }]),
        onClick: _cache[3] || (_cache[3] = ($event) => $options.goIndex(2))
      }, "2", 2), [
        [vShow, $props.currentPage <= 3]
      ]),
      createBaseVNode("span", {
        class: normalizeClass(["card-box", { active: $props.currentPage >= 3 && $props.currentPage <= $options.pages - 2 }]),
        onClick: _cache[4] || (_cache[4] = ($event) => $options.goIndex($options.threeNum()))
      }, toDisplayString($options.threeNum()), 3),
      withDirectives(createBaseVNode("span", {
        class: "ellipsis ell-four",
        onClick: _cache[5] || (_cache[5] = ($event) => $options.goIndex($props.currentPage + 2)),
        title: "\u4E0B\u4E24\u9875"
      }, null, 512), [
        [vShow, $props.currentPage < $options.pages - 2]
      ]),
      withDirectives(createBaseVNode("span", {
        class: normalizeClass(["card-box", { active: $props.currentPage === $options.pages - 1 }]),
        onClick: _cache[6] || (_cache[6] = ($event) => $options.goIndex($options.pages - 1))
      }, toDisplayString($options.pages - 1), 3), [
        [vShow, $props.currentPage >= $options.pages - 2]
      ]),
      createBaseVNode("span", {
        class: normalizeClass(["card-box", { active: $props.currentPage === $options.pages }]),
        onClick: _cache[7] || (_cache[7] = ($event) => $options.goIndex($options.pages))
      }, toDisplayString($options.pages), 3)
    ])),
    createBaseVNode("span", {
      class: normalizeClass(["card-box next iconfont icon-jiantou-you", { disabled: $props.currentPage === $options.pages }]),
      onClick: _cache[8] || (_cache[8] = ($event) => $options.goNext())
    }, _hoisted_8$2, 2)
  ]);
}
var Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$4], ["__file", "Pagination.vue"]]);
var CategoriesBar_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "")();
const _sfc_main$i = {
  props: {
    category: {
      type: String,
      default: ""
    },
    categoriesData: {
      type: Array,
      default: []
    },
    length: {
      type: [String, Number],
      default: "all"
    }
  },
  computed: {
    categories() {
      if (this.length === "all") {
        return this.categoriesData;
      } else {
        return this.categoriesData.slice(0, this.length);
      }
    }
  }
};
const _hoisted_1$e = { class: "categories-wrapper card-box" };
const _hoisted_2$6 = { class: "categories" };
const _hoisted_3$5 = /* @__PURE__ */ createTextVNode("\u66F4\u591A ...");
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1$e, [
    createVNode(_component_router_link, {
      to: "/categories/",
      class: "title iconfont icon-wenjianjia",
      title: "\u5168\u90E8\u5206\u7C7B"
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.length === "all" ? "\u5168\u90E8\u5206\u7C7B" : "\u6587\u7AE0\u5206\u7C7B"), 1)
      ]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_2$6, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.categories, (item, index) => {
        return openBlock(), createBlock(_component_router_link, {
          to: `/categories/?category=${encodeURIComponent(item.key)}`,
          key: index,
          class: normalizeClass({ active: item.key === $props.category })
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(item.key) + " ", 1),
            createBaseVNode("span", null, toDisplayString(item.length), 1)
          ]),
          _: 2
        }, 1032, ["to", "class"]);
      }), 128)),
      $props.length !== "all" && $props.length < $props.categoriesData.length ? (openBlock(), createBlock(_component_router_link, {
        key: 0,
        to: "/categories/",
        class: "more"
      }, {
        default: withCtx(() => [
          _hoisted_3$5
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ])
  ]);
}
var CategoriesBar = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$3], ["__file", "CategoriesBar.vue"]]);
var CategoriesPage_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".custom-page {\n  padding-top: var(--navbar-height);\n}\n.categories-page .categories-wrapper {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 4.5rem;\n  max-height: calc(100vh - 10rem);\n  min-height: 4.2rem;\n}\n@media (max-width: 719px) {\n.categories-page .categories-wrapper {\n    display: none;\n}\n}\n.categories-page .categories-wrapper .categories {\n  padding-right: 0.5rem;\n  max-height: calc(100vh - 14rem);\n  min-height: 2.2rem;\n  overflow-y: auto;\n  transition: all 0.2s;\n  position: relative;\n}\n.categories-page .categories-wrapper .categories::-webkit-scrollbar-track-piece {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.categories-page .categories-wrapper .categories::-webkit-scrollbar-thumb:vertical {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.categories-page .categories-wrapper .categories:hover::-webkit-scrollbar-track-piece {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.categories-page .categories-wrapper .categories:hover::-webkit-scrollbar-thumb:vertical {\n  background-color: rgba(0, 0, 0, 0.25);\n}\n.categories-page .main-left .categories-wrapper {\n  position: relative;\n  top: 0;\n  padding: 0.9rem 1.5rem;\n  margin-bottom: 0.9rem;\n  max-height: 15rem;\n  border-radius: 0;\n  display: none;\n}\n@media (max-width: 719px) {\n.categories-page .main-left .categories-wrapper {\n    display: block;\n}\n}\n.categories-page .main-left .categories-wrapper .categories {\n  max-height: 12.3rem;\n}")();
const _sfc_main$h = {
  components: { MainLayout, PostList, Pagination, CategoriesBar },
  setup() {
    const $groupPosts = inject("$groupPosts").value;
    const $sortPosts = inject("$sortPosts").value;
    const $categoriesAndTags = inject("$categoriesAndTags").value;
    const $route = useRoute();
    let category = ref(null);
    let total = ref(0);
    let perPage = ref(10);
    let currentPage = ref(1);
    onMounted(() => {
      let { category: category2 = "", p = 1 } = $route.query;
      refreshTotal(category2, p);
      const cateEl = document.querySelector(".categories");
      if (cateEl) {
        setTimeout(() => {
          const activeEl = cateEl.querySelector(".active");
          const topVal = activeEl ? activeEl.offsetTop : 0;
          cateEl.scrollTo({ top: topVal, behavior: "smooth" });
        }, 300);
      }
    });
    watch(() => $route.query.category, (queryCategory, prevCategory) => {
      refreshTotal(queryCategory, 1);
    });
    function refreshTotal(queryCategory, p = 1) {
      category.value = queryCategory ? decodeURIComponent(queryCategory) : "";
      total.value = category.value ? $groupPosts.categories[category.value].length : $sortPosts.length;
      currentPage.value = Number(p);
    }
    return {
      $groupPosts,
      $sortPosts,
      $categoriesAndTags,
      category,
      total,
      perPage,
      currentPage
    };
  }
};
const _hoisted_1$d = { class: "custom-page categories-page" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CategoriesBar = resolveComponent("CategoriesBar");
  const _component_PostList = resolveComponent("PostList");
  const _component_MainLayout = resolveComponent("MainLayout");
  return openBlock(), createElementBlock("div", _hoisted_1$d, [
    createVNode(_component_MainLayout, null, {
      mainLeft: withCtx(() => [
        createVNode(_component_CategoriesBar, {
          categoriesData: $setup.$categoriesAndTags.categories,
          category: $setup.category
        }, null, 8, ["categoriesData", "category"]),
        createVNode(_component_PostList, {
          currentPage: $setup.currentPage,
          perPage: $setup.perPage,
          category: $setup.category
        }, null, 8, ["currentPage", "perPage", "category"])
      ]),
      mainRight: withCtx(() => {
        var _a, _b;
        return [
          ((_a = $setup.$categoriesAndTags) == null ? void 0 : _a.categories.length) ? (openBlock(), createBlock(_component_CategoriesBar, {
            key: 0,
            categoriesData: (_b = $setup.$categoriesAndTags) == null ? void 0 : _b.categories,
            category: $setup.category
          }, null, 8, ["categoriesData", "category"])) : createCommentVNode("", true)
        ];
      }),
      _: 1
    })
  ]);
}
var CategoriesPage = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$2], ["__file", "CategoriesPage.vue"]]);
const _sfc_main$g = {
  setup() {
  }
};
const _hoisted_1$c = { class: "page" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", _hoisted_1$c, " TagsPage ");
}
var TagsPage = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$1], ["__file", "TagsPage.vue"]]);
const _sfc_main$f = {
  setup() {
  }
};
const _hoisted_1$b = { class: "page" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", _hoisted_1$b, " ArchivesPage ");
}
var ArchivesPage = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render], ["__file", "ArchivesPage.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "NavbarBrand",
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = computed(() => siteLocale.value.title);
    const navbarBrandLogo = computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createBlock(_component_RouterLink, { to: unref(navbarBrandLink) }, {
        default: withCtx(() => [
          createVNode(NavbarBrandLogo),
          unref(navbarBrandTitle) ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["site-name", { "can-hide": unref(navbarBrandLogo) }])
          }, toDisplayString(unref(navbarBrandTitle)), 3)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
});
var NavbarBrand = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "NavbarBrand.vue"]]);
const _hoisted_1$a = ["href", "rel", "target", "aria-label"];
const __default__ = defineComponent({
  inheritAttrs: false
});
const _sfc_main$d = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __name: "AutoLink",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const site = useSiteData();
    const { item } = toRefs(props);
    const hasHttpProtocol = computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_AutoLinkExternalIcon = resolveComponent("AutoLinkExternalIcon");
      return unref(isRouterLink) ? (openBlock(), createBlock(_component_RouterLink, mergeProps({
        key: 0,
        class: { "router-link-active": unref(isActive) },
        to: unref(item).link,
        "aria-label": unref(linkAriaLabel)
      }, _ctx.$attrs), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "before"),
          createTextVNode(" " + toDisplayString(unref(item).text) + " ", 1),
          renderSlot(_ctx.$slots, "after")
        ]),
        _: 3
      }, 16, ["class", "to", "aria-label"])) : (openBlock(), createElementBlock("a", mergeProps({
        key: 1,
        class: "external-link",
        href: unref(item).link,
        rel: unref(linkRel),
        target: unref(linkTarget),
        "aria-label": unref(linkAriaLabel)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "before"),
        createTextVNode(" " + toDisplayString(unref(item).text) + " ", 1),
        unref(isBlankTarget) ? (openBlock(), createBlock(_component_AutoLinkExternalIcon, { key: 0 })) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "after")
      ], 16, _hoisted_1$a));
    };
  }
}));
var AutoLink = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "AutoLink.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "DropdownTransition",
  setup(__props) {
    const setHeight = (items) => {
      items.style.height = items.scrollHeight + "px";
    };
    const unsetHeight = (items) => {
      items.style.height = "";
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "dropdown",
        onEnter: setHeight,
        onAfterEnter: unsetHeight,
        onBeforeLeave: setHeight
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      });
    };
  }
});
var DropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "DropdownTransition.vue"]]);
const _hoisted_1$9 = ["aria-label"];
const _hoisted_2$5 = { class: "title" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("span", { class: "arrow down" }, null, -1);
const _hoisted_4$2 = ["aria-label"];
const _hoisted_5$1 = { class: "title" };
const _hoisted_6$1 = { class: "navbar-dropdown" };
const _hoisted_7$1 = { class: "navbar-dropdown-subtitle" };
const _hoisted_8$1 = { key: 1 };
const _hoisted_9$1 = { class: "navbar-dropdown-subitem-wrapper" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "NavbarDropdown",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = toRefs(props);
    const dropdownAriaLabel = computed(() => item.value.ariaLabel || item.value.text);
    const open = ref(false);
    const route = useRoute();
    watch(() => route.path, () => {
      open.value = false;
    });
    const handleDropdown = (e) => {
      const isTriggerByTab = e.detail === 0;
      if (isTriggerByTab) {
        open.value = !open.value;
      } else {
        open.value = false;
      }
    };
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["navbar-dropdown-wrapper", { open: open.value }])
      }, [
        createBaseVNode("button", {
          class: "navbar-dropdown-title",
          type: "button",
          "aria-label": unref(dropdownAriaLabel),
          onClick: handleDropdown
        }, [
          createBaseVNode("span", _hoisted_2$5, toDisplayString(unref(item).text), 1),
          _hoisted_3$4
        ], 8, _hoisted_1$9),
        createBaseVNode("button", {
          class: "navbar-dropdown-title-mobile",
          type: "button",
          "aria-label": unref(dropdownAriaLabel),
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          createBaseVNode("span", _hoisted_5$1, toDisplayString(unref(item).text), 1),
          createBaseVNode("span", {
            class: normalizeClass(["arrow", open.value ? "down" : "right"])
          }, null, 2)
        ], 8, _hoisted_4$2),
        createVNode(DropdownTransition, null, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_6$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(item).children, (child) => {
                return openBlock(), createElementBlock("li", {
                  key: child.text,
                  class: "navbar-dropdown-item"
                }, [
                  child.children ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("h4", _hoisted_7$1, [
                      child.link ? (openBlock(), createBlock(AutoLink, {
                        key: 0,
                        item: child,
                        onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && child.children.length === 0 && (open.value = false)
                      }, null, 8, ["item", "onFocusout"])) : (openBlock(), createElementBlock("span", _hoisted_8$1, toDisplayString(child.text), 1))
                    ]),
                    createBaseVNode("ul", _hoisted_9$1, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(child.children, (grandchild) => {
                        return openBlock(), createElementBlock("li", {
                          key: grandchild.link,
                          class: "navbar-dropdown-subitem"
                        }, [
                          createVNode(AutoLink, {
                            item: grandchild,
                            onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, unref(item).children) && (open.value = false)
                          }, null, 8, ["item", "onFocusout"])
                        ]);
                      }), 128))
                    ])
                  ], 64)) : (openBlock(), createBlock(AutoLink, {
                    key: 1,
                    item: child,
                    onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && (open.value = false)
                  }, null, 8, ["item", "onFocusout"]))
                ]);
              }), 128))
            ], 512), [
              [vShow, open.value]
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
var NavbarDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "NavbarDropdown.vue"]]);
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _hoisted_1$8 = {
  key: 0,
  class: "navbar-items"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "NavbarItems",
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = computed(() => themeLocale.value.repo);
      const repoType = computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _cache) => {
      return unref(navbarLinks).length ? (openBlock(), createElementBlock("nav", _hoisted_1$8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navbarLinks), (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.text,
            class: "navbar-item"
          }, [
            item.children ? (openBlock(), createBlock(NavbarDropdown, {
              key: 0,
              item
            }, null, 8, ["item"])) : (openBlock(), createBlock(AutoLink, {
              key: 1,
              item
            }, null, 8, ["item"]))
          ]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var NavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "NavbarItems.vue"]]);
const _hoisted_1$7 = ["title"];
const _hoisted_2$4 = {
  class: "icon",
  focusable: "false",
  viewBox: "0 0 32 32"
};
const _hoisted_3$3 = /* @__PURE__ */ createStaticVNode('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>', 9);
const _hoisted_12 = [
  _hoisted_3$3
];
const _hoisted_13 = {
  class: "icon",
  focusable: "false",
  viewBox: "0 0 32 32"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",
  fill: "currentColor"
}, null, -1);
const _hoisted_15 = [
  _hoisted_14
];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ToggleColorModeButton",
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const toggleColorMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "toggle-color-mode-button",
        title: unref(themeLocale).toggleColorMode,
        onClick: toggleColorMode
      }, [
        withDirectives((openBlock(), createElementBlock("svg", _hoisted_2$4, _hoisted_12, 512)), [
          [vShow, !unref(isDarkMode)]
        ]),
        withDirectives((openBlock(), createElementBlock("svg", _hoisted_13, _hoisted_15, 512)), [
          [vShow, unref(isDarkMode)]
        ])
      ], 8, _hoisted_1$7);
    };
  }
});
var ToggleColorModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "ToggleColorModeButton.vue"]]);
const _hoisted_1$6 = ["title"];
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createBaseVNode("span")
], -1);
const _hoisted_3$2 = [
  _hoisted_2$3
];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ToggleSidebarButton",
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "toggle-sidebar-button",
        title: unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle"))
      }, _hoisted_3$2, 8, _hoisted_1$6);
    };
  }
});
var ToggleSidebarButton = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "ToggleSidebarButton.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = ref(null);
    const navbarBrand = ref(null);
    const linksWrapperMaxWidth = ref(0);
    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _cache) => {
      const _component_NavbarSearch = resolveComponent("NavbarSearch");
      return openBlock(), createElementBlock("header", {
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, [
        createVNode(ToggleSidebarButton, {
          onToggle: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-sidebar"))
        }),
        createBaseVNode("span", {
          ref_key: "navbarBrand",
          ref: navbarBrand
        }, [
          createVNode(NavbarBrand)
        ], 512),
        createBaseVNode("div", {
          class: "navbar-items-wrapper",
          style: normalizeStyle(unref(linksWrapperStyle))
        }, [
          renderSlot(_ctx.$slots, "before"),
          createVNode(NavbarItems, { class: "can-hide" }),
          renderSlot(_ctx.$slots, "after"),
          unref(themeLocale).colorModeSwitch ? (openBlock(), createBlock(ToggleColorModeButton, { key: 0 })) : createCommentVNode("", true),
          createVNode(_component_NavbarSearch)
        ], 4)
      ], 512);
    };
  }
});
var Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "Navbar.vue"]]);
const _hoisted_1$5 = { class: "page-meta" };
const _hoisted_2$2 = {
  key: 0,
  class: "meta-item edit-link"
};
const _hoisted_3$1 = {
  key: 1,
  class: "meta-item last-updated"
};
const _hoisted_4$1 = { class: "meta-item-label" };
const _hoisted_5 = { class: "meta-item-info" };
const _hoisted_6 = {
  key: 2,
  class: "meta-item contributors"
};
const _hoisted_7 = { class: "meta-item-label" };
const _hoisted_8 = { class: "meta-item-info" };
const _hoisted_9 = ["title"];
const _hoisted_10 = /* @__PURE__ */ createTextVNode(", ");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PageMeta",
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("footer", _hoisted_1$5, [
        unref(editNavLink) ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          createVNode(AutoLink, {
            class: "meta-item-label",
            item: unref(editNavLink)
          }, null, 8, ["item"])
        ])) : createCommentVNode("", true),
        unref(lastUpdated) ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          createBaseVNode("span", _hoisted_4$1, toDisplayString(unref(themeLocale).lastUpdatedText) + ": ", 1),
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_5, toDisplayString(unref(lastUpdated)), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        unref(contributors) && unref(contributors).length ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("span", _hoisted_7, toDisplayString(unref(themeLocale).contributorsText) + ": ", 1),
          createBaseVNode("span", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(contributors), (contributor, index) => {
              return openBlock(), createElementBlock(Fragment, { key: index }, [
                createBaseVNode("span", {
                  class: "contributor",
                  title: `email: ${contributor.email}`
                }, toDisplayString(contributor.name), 9, _hoisted_9),
                index !== unref(contributors).length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  _hoisted_10
                ], 64)) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var PageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "PageMeta.vue"]]);
const _hoisted_1$4 = {
  key: 0,
  class: "page-nav"
};
const _hoisted_2$1 = { class: "inner" };
const _hoisted_3 = {
  key: 0,
  class: "prev"
};
const _hoisted_4 = {
  key: 1,
  class: "next"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PageNav",
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index !== -1) {
        const targetItem = sidebarItems2[index + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = useRoute();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _cache) => {
      return unref(prevNavLink) || unref(nextNavLink) ? (openBlock(), createElementBlock("nav", _hoisted_1$4, [
        createBaseVNode("p", _hoisted_2$1, [
          unref(prevNavLink) ? (openBlock(), createElementBlock("span", _hoisted_3, [
            createVNode(AutoLink, { item: unref(prevNavLink) }, null, 8, ["item"])
          ])) : createCommentVNode("", true),
          unref(nextNavLink) ? (openBlock(), createElementBlock("span", _hoisted_4, [
            createVNode(AutoLink, { item: unref(nextNavLink) }, null, 8, ["item"])
          ])) : createCommentVNode("", true)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
var PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "PageNav.vue"]]);
const _hoisted_1$3 = { class: "page" };
const _hoisted_2 = { class: "theme-default-content" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Page",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("main", _hoisted_1$3, [
        renderSlot(_ctx.$slots, "top"),
        createBaseVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "content-top"),
          createVNode(_component_Content),
          renderSlot(_ctx.$slots, "content-bottom")
        ]),
        createVNode(PageMeta),
        createVNode(PageNav),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
var Page = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "Page.vue"]]);
const _hoisted_1$2 = { class: "sidebar-item-children" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const isActive = computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = ref(true);
    const onClick = ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_SidebarItem = resolveComponent("SidebarItem", true);
      return openBlock(), createElementBlock("li", null, [
        unref(item).link ? (openBlock(), createBlock(AutoLink, {
          key: 0,
          class: normalizeClass(unref(itemClass)),
          item: unref(item)
        }, null, 8, ["class", "item"])) : (openBlock(), createElementBlock("p", {
          key: 1,
          tabindex: "0",
          class: normalizeClass(unref(itemClass)),
          onClick: _cache[0] || (_cache[0] = (...args) => onClick.value && onClick.value(...args)),
          onKeydown: _cache[1] || (_cache[1] = withKeys((...args) => onClick.value && onClick.value(...args), ["enter"]))
        }, [
          createTextVNode(toDisplayString(unref(item).text) + " ", 1),
          unref(item).collapsible ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["arrow", isOpen.value ? "down" : "right"])
          }, null, 2)) : createCommentVNode("", true)
        ], 34)),
        ((_a = unref(item).children) == null ? void 0 : _a.length) ? (openBlock(), createBlock(DropdownTransition, { key: 2 }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_1$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(item).children, (child) => {
                return openBlock(), createBlock(_component_SidebarItem, {
                  key: `${unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: unref(depth) + 1
                }, null, 8, ["item", "depth"]);
              }), 128))
            ], 512), [
              [vShow, isOpen.value]
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
var SidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "SidebarItem.vue"]]);
const _hoisted_1$1 = {
  key: 0,
  class: "sidebar-items"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItems",
  setup(__props) {
    const route = useRoute();
    const sidebarItems = useSidebarItems();
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        const sidebar = document.querySelector(".sidebar");
        if (!sidebar)
          return;
        const activeSidebarItem = document.querySelector(`.sidebar a.sidebar-item[href="${route.path}${hash}"]`);
        if (!activeSidebarItem)
          return;
        const { top: sidebarTop, height: sidebarHeight } = sidebar.getBoundingClientRect();
        const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
        if (activeSidebarItemTop < sidebarTop) {
          activeSidebarItem.scrollIntoView(true);
        } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
          activeSidebarItem.scrollIntoView(false);
        }
      });
    });
    return (_ctx, _cache) => {
      return unref(sidebarItems).length ? (openBlock(), createElementBlock("ul", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebarItems), (item) => {
          return openBlock(), createBlock(SidebarItem, {
            key: item.link || item.text,
            item
          }, null, 8, ["item"]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var SidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "SidebarItems.vue"]]);
const _hoisted_1 = { class: "sidebar" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1, [
        createVNode(NavbarItems),
        renderSlot(_ctx.$slots, "top"),
        createVNode(SidebarItems),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
var Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "Sidebar.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
          toggleSidebar(true);
        } else {
          toggleSidebar(false);
        }
      }
    };
    const containerClass = computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    onMounted(() => {
      const router = useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    onUnmounted(() => {
      unregisterRouterHook();
    });
    const scrollPromise = useScrollPromise();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["theme-container theme-acme-container", unref(containerClass)]),
        onTouchstart: onTouchStart,
        onTouchend: onTouchEnd
      }, [
        renderSlot(_ctx.$slots, "navbar", {}, () => [
          unref(shouldShowNavbar) ? (openBlock(), createBlock(Navbar, {
            key: 0,
            onToggleSidebar: toggleSidebar
          }, {
            before: withCtx(() => [
              renderSlot(_ctx.$slots, "navbar-before")
            ]),
            after: withCtx(() => [
              renderSlot(_ctx.$slots, "navbar-after")
            ]),
            _: 3
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", {
          class: "sidebar-mask",
          onClick: _cache[0] || (_cache[0] = ($event) => toggleSidebar(false))
        }),
        renderSlot(_ctx.$slots, "sidebar", {}, () => [
          createVNode(Sidebar, null, {
            top: withCtx(() => [
              renderSlot(_ctx.$slots, "sidebar-top")
            ]),
            bottom: withCtx(() => [
              renderSlot(_ctx.$slots, "sidebar-bottom")
            ]),
            _: 3
          })
        ]),
        renderSlot(_ctx.$slots, "page", {}, () => [
          unref(frontmatter).home ? (openBlock(), createBlock(Home, { key: 0 })) : unref(frontmatter).categoriesPage ? (openBlock(), createBlock(CategoriesPage, { key: 1 })) : unref(frontmatter).tagsPage ? (openBlock(), createBlock(TagsPage, { key: 2 })) : unref(frontmatter).archivesPage ? (openBlock(), createBlock(ArchivesPage, { key: 3 })) : (openBlock(), createBlock(Transition, {
            key: 4,
            name: "fade-slide-y",
            mode: "out-in",
            onBeforeEnter: unref(onBeforeEnter),
            onBeforeLeave: unref(onBeforeLeave)
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(Page, {
                key: unref(page).path
              }, {
                top: withCtx(() => [
                  renderSlot(_ctx.$slots, "page-top")
                ]),
                "content-top": withCtx(() => [
                  renderSlot(_ctx.$slots, "page-content-top")
                ]),
                "content-bottom": withCtx(() => [
                  renderSlot(_ctx.$slots, "page-content-bottom")
                ]),
                bottom: withCtx(() => [
                  renderSlot(_ctx.$slots, "page-bottom")
                ]),
                _: 3
              }))
            ]),
            _: 3
          }, 8, ["onBeforeEnter", "onBeforeLeave"]))
        ])
      ], 34);
    };
  }
});
var Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Layout.vue"]]);
export { Layout as default };
