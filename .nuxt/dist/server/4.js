exports.ids = [4];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=251c7562&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-251c7562><div class=\"container\" data-v-251c7562><h1 class=\"logo-font\" data-v-251c7562>conduit</h1> <p data-v-251c7562>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-251c7562>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-251c7562>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-251c7562>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-251c7562>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-251c7562>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-251c7562>","</li>",[_c('nuxt-link',{staticClass:"nav-link disabled",class:{active: _vm.tab === 'your_feed'},attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'your_feed'
                  }
                }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-251c7562>","</li>",[_c('nuxt-link',{staticClass:"nav-link disabled",class:{active: _vm.tab === 'global_feed'},attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'global_feed'
                  }
                }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-251c7562>","</li>",[_c('nuxt-link',{staticClass:"nav-link disabled",class:{active: _vm.tab === 'tag'},attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: _vm.tag
                  }
                }}},[_vm._v("# "+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-251c7562>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-251c7562>","</div>",[_c('nuxt-link',{attrs:{"to":{
              name: 'profile', 
              params: {
                username: article.author.username
                }
              }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-251c7562>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                name: 'profile', 
                params: {
                  username: article.author.username
                  }
                }}},[_vm._v("\n              "+_vm._s(article.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\" data-v-251c7562>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisable))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: article.favorited}))+" data-v-251c7562><i class=\"ion-heart\" data-v-251c7562></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
            name: 'article', 
            params: {
              slug: article.slug
              }
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),(_vm.tag)?_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(item,index){return _c('li',{key:item + index,staticClass:"tag-default tag-pill tag-outline"},[_vm._v("\n                "+_vm._s(item)+"\n              ")])}),0):_vm._e()])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-251c7562>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-251c7562>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{active: item === _vm.page}))+" data-v-251c7562>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                  name: 'home',
                  query: {
                    page: item,
                    tag: _vm.$route.query.tag,
                    tab: _vm.tab
                  }
                }}},[_vm._v("\n                "+_vm._s(item)+"\n              ")])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-251c7562>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-251c7562>","</div>",[_vm._ssrNode("<p data-v-251c7562>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-251c7562>","</div>",_vm._l((_vm.tags),function(item){return _c('nuxt-link',{key:item,staticClass:"tag-pill tag-default",attrs:{"to":{
                name: 'home',
                query: {
                  tab: 'tag',
                  tag: item
                }
              }}},[_vm._v("\n              "+_vm._s(item)+"\n              ")])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=251c7562&scoped=true&

// EXTERNAL MODULE: ./api/articles.js
var api_articles = __webpack_require__(28);

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(27);

// CONCATENATED MODULE: ./api/tag.js
 // 获取文章标签列表

const getTags = () => {
  return Object(request["a" /* default */])({
    method: 'GET',
    url: '/api/tags'
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'HomeIndex',

  async asyncData({
    query
  }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 10;
    const tab = query.tab || 'global_feed';
    const tag = query.tag;
    const loadArticles = tab === 'global_feed' || tab === 'tag' ? api_articles["h" /* getArticles */] : api_articles["k" /* getYourFeedArticles */];
    const [articleRes, tagRes] = await Promise.all([// 获取公共文章列表
    loadArticles({
      limit,
      offset: (page - 1) * limit,
      tag
    }), // 获取标签列表
    getTags()]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      tags
    } = tagRes.data;
    articles.forEach(item => {
      item.favoriteDisable = false;
    });
    return {
      articles,
      // 文章列表
      articlesCount,
      // 文章总数
      tags,
      // 标签列表
      limit,
      // 每页大小
      page,
      // 页码
      tab,
      // 选项卡
      tag // 数据标签

    };
  },

  watchQuery: ['page', 'tag', 'tab'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },

  data() {
    return {};
  },

  watch: {},
  methods: {
    async onFavorite(article) {
      console.log(article);
      article.favoriteDisable = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api_articles["f" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 点赞
        await Object(api_articles["c" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisable = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "251c7562",
  "378e8450"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map