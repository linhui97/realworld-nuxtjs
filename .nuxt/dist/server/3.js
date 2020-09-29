exports.ids = [3];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
// 基于 axios 封住的请求模块

/* harmony default export */ __webpack_exports__["a"] = (_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"]);

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updateArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getArticlesBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteComment; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
 // 添加文章

const addArticles = data => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
}; // 修改文章

const updateArticles = ({
  slug,
  data
}) => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  });
}; // 删除文章

const deleteArticles = slug => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
}; // 获取单篇文章

const getArticlesBySlug = slug => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取公共文章列表

const getArticles = params => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取用户关注的文章列表

const getYourFeedArticles = params => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
}; // 点赞

const addFavorite = slug => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 添加文章评论

const addComment = ({
  slug,
  data
}) => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  });
}; // 删除自己的评论

const deleteComment = ({
  slug,
  id
}) => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  });
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=6d480528&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\" data-v-6d480528><div class=\"row\" data-v-6d480528><div class=\"col-md-10 offset-md-1 col-xs-12\" data-v-6d480528><form data-v-6d480528><fieldset data-v-6d480528><fieldset class=\"form-group\" data-v-6d480528><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\" data-v-6d480528></fieldset> <fieldset class=\"form-group\" data-v-6d480528><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\" data-v-6d480528></fieldset> <fieldset class=\"form-group\" data-v-6d480528><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\" data-v-6d480528>"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-6d480528><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.tag)))+" class=\"form-control\" data-v-6d480528> "+((_vm.article.tagList.length > 0)?("<div class=\"tag-list\" data-v-6d480528>"+(_vm._ssrList((_vm.article.tagList),function(item,index){return ("<span class=\"tag-default tag-pill\" data-v-6d480528><i class=\"ion-close-round\" data-v-6d480528></i>"+_vm._ssrEscape("\n                  "+_vm._s(item)+"\n                ")+"</span>")}))+"</div>"):"<!---->")+"</fieldset> <button"+(_vm._ssrAttr("disabled",_vm.loading))+" type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\" data-v-6d480528>Publish Article</button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=6d480528&scoped=true&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  middleware: "authenticated",
  name: "EditorIndex",

  data() {
    return {
      tag: "",
      article: {
        title: "",
        // 标题
        description: "",
        body: "",
        tagList: []
      },
      loading: false,
      slug: ''
    };
  },

  computed: {},
  watch: {},

  mounted() {
    if (this.$route.query.slug) {
      this.slug = this.$route.query.slug;
      this.initData();
    }
  },

  methods: {
    async initData() {
      const {
        data
      } = await Object(articles["i" /* getArticlesBySlug */])(this.slug);
      this.article = data.article;
    },

    onEnter() {
      this.article.tagList.push(this.tag);
      this.tag = null;
    },

    deleteTag(index) {
      this.article.tagList.splice(index, 1);
    },

    async addArticles() {
      let article = {};

      if (!this.loading) {
        this.loading = true;
        const {
          data
        } = this.slug ? await Object(articles["l" /* updateArticles */])({
          slug: this.slug,
          data: {
            article: {
              title: this.article.title,
              description: this.article.description,
              body: this.article.body,
              tagList: this.article.tagList
            }
          }
        }) : await Object(articles["a" /* addArticles */])({
          article: this.article
        });
        article = data.article;
        this.loading = false;
        this.$router.push({
          name: 'article',
          params: {
            slug: article.slug
          }
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d480528",
  "133e3226"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map