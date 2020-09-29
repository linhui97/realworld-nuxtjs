exports.ids = [6];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
// 基于 axios 封住的请求模块

/* harmony default export */ __webpack_exports__["a"] = (_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"]);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateUser; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
 // 用户登录

const login = data => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 用户注册

const register = data => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'POST',
    url: '/api/users',
    data
  });
}; // 获取当前用户

const getUser = () => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'GET',
    url: '/api/user'
  });
}; // 更新用户

const updateUser = data => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'PUT',
    url: '/api/user',
    data
  });
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=38756a86&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\" data-v-38756a86><div class=\"row\" data-v-38756a86><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-38756a86><h1 class=\"text-xs-center\" data-v-38756a86>Your Settings</h1> <form data-v-38756a86><fieldset data-v-38756a86><fieldset class=\"form-group\" data-v-38756a86><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.userInfo.image)))+" class=\"form-control\" data-v-38756a86></fieldset> <fieldset class=\"form-group\" data-v-38756a86><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.userInfo.username)))+" class=\"form-control form-control-lg\" data-v-38756a86></fieldset> <fieldset class=\"form-group\" data-v-38756a86><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\" data-v-38756a86>"+_vm._ssrEscape(_vm._s(_vm.userInfo.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-38756a86><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.userInfo.email)))+" class=\"form-control form-control-lg\" data-v-38756a86></fieldset> <fieldset class=\"form-group\" data-v-38756a86><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.userInfo.password)))+" class=\"form-control form-control-lg\" data-v-38756a86></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-38756a86>Update Settings</button></fieldset></form> <hr data-v-38756a86> <button class=\"btn btn-outline-danger\" data-v-38756a86>Or click here to logout.</button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=38756a86&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./api/user.js
var api_user = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  middleware: "authenticated",
  name: "SettingsIndex",

  data() {
    return {
      userInfo: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },
  watch: {},

  mounted() {
    this.getUser();
  },

  methods: {
    async getUser() {
      const {
        data
      } = await Object(api_user["a" /* getUser */])();
      this.userInfo = data.user;
      this.userInfo.password = this.user.password;
    },

    logout() {
      Cookie.remove("user");
      this.$store.commit("setUser", null);
      this.$router.push("/");
    },

    async updateUser() {
      const {
        data
      } = await Object(api_user["d" /* updateUser */])({
        user: {
          bio: this.user.bio,
          email: this.user.email,
          image: this.user.image,
          password: this.user.password,
          username: this.user.username
        }
      });
      let user = data.user;
      user.password = this.user.password; // 保存用户登录状态

      this.$store.commit('setUser', user); // 为了防止刷新页面数据丢失，数据持久化

      Cookie.set('user', user);
      this.$router.push({
        name: 'profile',
        params: {
          username: user.username
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38756a86",
  "8cb39ac8"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map