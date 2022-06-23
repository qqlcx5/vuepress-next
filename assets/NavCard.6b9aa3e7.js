var __defProp = Object.defineProperty;
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
import { _ as _export_sfc, l as onMounted, o as openBlock, c as createElementBlock, t as toDisplayString, z as createCommentVNode, b as createBaseVNode, F as Fragment, x as renderList, W as normalizeStyle } from "./app.b0857ca0.js";
var NavCard_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".kbt-row[data-v-5dd93793] {\n  margin: 0.7rem 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.card-nav-box[data-v-5dd93793] {\n  padding: 0 10px 0 10px;\n  box-sizing: border-box;\n}\n.card-nav-box a[data-v-5dd93793]:hover {\n  text-decoration: none !important;\n}\n.card-nav-item[data-v-5dd93793] {\n  min-height: 76px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 10px;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);\n  transition: all 0.4s;\n}\n.card-nav-item[data-v-5dd93793]:hover {\n  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.7);\n  transform: translateY(-3px) scale(1.01, 1.01);\n}\n.card-nav-title[data-v-5dd93793] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 15px;\n  margin: 5px 0;\n  height: 40px;\n  line-height: 40px;\n  white-space: nowrap;\n}\n.card-nav-img[data-v-5dd93793] {\n  height: 38px;\n}\n.card-nav-name[data-v-5dd93793] {\n  height: 40px;\n  float: right;\n  font-size: 15px;\n  margin: 0 0;\n  line-height: 40px;\n  white-space: nowrap;\n}\n.card-nav-content[data-v-5dd93793] {\n  margin-top: 10px;\n  font-size: 13px;\n  color: #999;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  height: 37px;\n  margin-bottom: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n")();
const _sfc_main = {
  props: {
    cardData: {
      type: Array,
      default: []
    },
    cardListSize: {
      type: Number,
      default: 3
    },
    carTitleColor: {
      type: String,
      default: "#000"
    },
    carHoverColor: {
      type: String,
      default: "#000"
    }
  },
  setup(props) {
    onMounted(() => {
      cardHoverColor();
    });
    function cardHoverColor() {
      if (!document.querySelector(".card")) {
        const carHoverColor = props.carHoverColor;
        let style = document.createElement("style");
        style.className = "card";
        style.innerHTML = `.card-nav-content:hover{color: ${carHoverColor}}`;
        document.head.appendChild(style);
      }
    }
    return __spreadValues({}, props);
  }
};
const _hoisted_1 = {
  key: 0,
  style: { "text-align": "center", "font-weight": "900" }
};
const _hoisted_2 = { class: "kbt-row" };
const _hoisted_3 = ["href"];
const _hoisted_4 = { class: "card-nav-item" };
const _hoisted_5 = { class: "card-nav-title" };
const _hoisted_6 = ["src"];
const _hoisted_7 = ["title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    $props.cardData[0].title != void 0 ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString($props.cardData[0].title), 1)) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.cardData, (item, index) => {
        return openBlock(), createElementBlock("div", {
          class: "card-nav-box",
          style: normalizeStyle($props.cardListSize == 4 ? "width: 25%;" : $props.cardListSize == 2 ? "width: 50%;" : "width: 33.333%;"),
          key: index
        }, [
          createBaseVNode("a", {
            href: item.cardSrc,
            target: "_blank"
          }, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                item.cardImgSrc && item.cardImgSrc != "" ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: item.cardImgSrc,
                  alt: "\u6B63\u5728\u52A0\u8F7D ...",
                  class: "card-nav-img no-zoom"
                }, null, 8, _hoisted_6)) : createCommentVNode("", true),
                createBaseVNode("p", {
                  class: "card-nav-name",
                  style: normalizeStyle("color:" + $props.carTitleColor)
                }, toDisplayString(item.cardName), 5)
              ]),
              createBaseVNode("div", {
                title: item.cardContent,
                class: "card-nav-content"
              }, toDisplayString(item.cardContent), 9, _hoisted_7)
            ])
          ], 8, _hoisted_3)
        ], 4);
      }), 128))
    ])
  ]);
}
var NavCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5dd93793"], ["__file", "NavCard.vue"]]);
export { NavCard as default };
