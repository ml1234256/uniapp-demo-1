"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
    wx.login({
      success: (res) => {
        console.log(res.code);
        common_vendor.rn.callFunction({
          name: "login",
          data: {
            code: res.code
          },
          success: (res2) => {
            console.log(res2);
          }
        });
      }
    });
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/ZAO/Desktop/uni-app-demo-1/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
