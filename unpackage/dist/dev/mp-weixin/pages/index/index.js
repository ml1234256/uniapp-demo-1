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
          success: async (res2) => {
            const openid = res2.result.data.openid;
            const db = common_vendor.rn.database();
            let dbRes = await db.collection("users").where({ openid }).get();
            if (dbRes.result.data.length > 0) {
              console.log({ dbRes });
              return dbRes.result.data[0];
            } else {
              const now2 = Date.now();
              dbRes = await db.collection("users").add({
                openid,
                createtime: now2
              });
            }
            return {
              _id: dbRes.id,
              openid,
              createtime: now
            };
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
