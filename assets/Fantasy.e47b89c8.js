import { _ as _export_sfc, l as onMounted, o as openBlock, c as createElementBlock, b as createBaseVNode } from "./app.b0857ca0.js";
var Fantasy_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fantasy {\n  position: fixed;\n  top: 0;\n  height: 100vh;\n  width: 100%;\n  z-index: -1;\n}\n.hidden {\n  display: none;\n}\n#display {\n  margin: auto;\n}\n.custom-home-class {\n  margin-top: 0 !important;\n  background-attachment: fixed !important;\n}\n.custom-home-class .home {\n  padding: 0;\n  max-width: none;\n}\n.custom-home-class .hero {\n  margin-top: 38vh;\n  height: 0;\n  color: var(--c-bg);\n}\n.custom-home-class .home .hero .description {\n  color: var(--c-bg);\n}\n.custom-home-class .navbar {\n  transition: transform 0.3s;\n  background-color: transparent;\n  -webkit-backdrop-filter: saturate(200%) blur(20px);\n          backdrop-filter: saturate(200%) blur(20px);\n  border-bottom: 1px solid transparent;\n  color: var(--c-text);\n}\n.custom-home-class .navbar-items a:hover {\n  color: var(--c-text-accent);\n}\n.custom-home-class .navbar .icon {\n  color: var(--c-text-accent);\n}")();
const _sfc_main = {
  setup() {
    onMounted(() => {
      mountedElement();
      init();
    });
    function mountedElement() {
      let fantasy = document.getElementsByClassName("fantasy")[0];
      document.getElementsByClassName("home")[0].appendChild(fantasy);
    }
    function init() {
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
const _hoisted_1 = { class: "fantasy" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("canvas", {
  id: "cvs",
  class: "hidden",
  width: "1980",
  height: "1080"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("canvas", {
  id: "screenImage",
  class: "hidden",
  width: "234",
  height: "357"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("canvas", {
  id: "rili",
  class: "hidden",
  width: "600",
  height: "600"
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("canvas", { id: "display" }, null, -1);
const _hoisted_6 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4,
  _hoisted_5
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_6);
}
var Fantasy = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Fantasy.vue"]]);
export { Fantasy as default };
