import { _ as _export_sfc, f as defineComponent, u as useRouteLocale, g as useThemeLocaleData, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, h as unref, p as pushScopeId, i as popScopeId, e as createTextVNode, t as toDisplayString } from "./app.b0857ca0.js";
var _404_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '.pkfrom-container[data-v-df6e7248] {\n  min-height: 100vh;\n  width: 100%;\n  background-color: #eaff6f;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.page-info[data-v-df6e7248] {\n  margin-top: -12vh;\n  font-family: "Raleway", Helvetica, Arial, sans-serif;\n  font-weight: 300;\n  text-align: center;\n}\n.page-info .desc[data-v-df6e7248] {\n  line-height: 1.6rem;\n  color: #1b334d;\n  margin: 1rem 0;\n}\n.btn[data-v-df6e7248] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #ffffff;\n  border: 0px solid;\n  border-bottom: 2px solid;\n  border-color: #ec9228;\n  padding: 10px 41px;\n  border-radius: 5px;\n  background: none;\n  text-transform: uppercase;\n  display: inline-block;\n  background-color: #ffad32;\n  transition: all 0.5s ease-in-out;\n  text-decoration: none;\n  cursor: pointer;\n}\n.btn[data-v-df6e7248]:hover {\n  background: #ec9228;\n  color: #ffffff;\n  text-decoration: none;\n}')();
const _withScopeId = (n) => (pushScopeId("data-v-df6e7248"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "theme-container pkfrom-container" };
const _hoisted_2 = { class: "theme-default-content" };
const _hoisted_3 = { class: "page-info" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: "https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/404-light.gif",
  alt: "404 error"
}, null, -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "desc" }, [
  /* @__PURE__ */ createTextVNode("The page you are looking for was moved, removed,"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" renamed or might never existed.")
], -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "404",
  setup(__props) {
    var _a, _b;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const homeLink = (_a = themeLocale.value.home) != null ? _a : routeLocale.value;
    const homeText = (_b = themeLocale.value.backToHome) != null ? _b : "Back to home";
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            _hoisted_5,
            createVNode(_component_RouterLink, {
              class: "btn",
              to: unref(homeLink)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(homeText)), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ])
      ]);
    };
  }
});
var _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-df6e7248"], ["__file", "404.vue"]]);
export { _404 as default };
