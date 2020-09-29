exports.ids = [2];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unfollowUser; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
 // 获取用户信息

const getProfile = username => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
}; // 关注用户

const followUser = username => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
}; // 取关用户

const unfollowUser = username => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=29382e62&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-29382e62>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-29382e62>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-29382e62>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-29382e62>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\" data-v-29382e62> <h4 data-v-29382e62>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p data-v-29382e62>"+_vm._ssrEscape("\n            "+_vm._s(_vm.profile.bio)+"\n          ")+"</p> "),(_vm.profile.username === _vm.user.username)?_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":{ path: '/settings' }}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Edit Profile Settings\n          ")]):_c('button',{staticClass:"btn btn-sm btn-outline-secondary action-btn",class:{active: _vm.profile.following},attrs:{"disabled":_vm.profile.followingDisable},on:{"click":function($event){return _vm.onFollow(_vm.profile)}}},[_c('i',{staticClass:"ion-plus-round"}),_vm._v("\n             \n            "+_vm._s(_vm.profile.following ? 'Unfollow' : 'Follow')+" "+_vm._s(_vm.profile.username)+" \n          ")])],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-29382e62>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-29382e62>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-29382e62>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-29382e62>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-29382e62>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-29382e62>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'my_articles'},attrs:{"exact":"","to":{
                  name: 'profile',
                  params: {
                    username: _vm.$route.params.username
                  },
                  query: {
                    tab: 'my_articles'
                  }
                }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-29382e62>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'favorited_articles'},attrs:{"exact":"","to":{
                  name: 'profile',
                  params: {
                    username: _vm.$route.params.username
                  },
                  query: {
                    tab: 'favorited_articles'
                  }
                }}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),(_vm.articles.length > 0)?[_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-29382e62>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-29382e62>","</div>",[_c('nuxt-link',{attrs:{"to":{
                name: 'profile', 
                params: {
                  username: article.author.username
                  }
                }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-29382e62>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                  name: 'profile', 
                  params: {
                    username: article.author.username
                    }
                  }}},[_vm._v("\n                "+_vm._s(article.author.username)+"\n                ")]),_vm._ssrNode(" <span class=\"date\" data-v-29382e62>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisable))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: article.favorited}))+" data-v-29382e62><i class=\"ion-heart\" data-v-29382e62></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n              ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article', 
              params: {
                slug: article.slug
                }
              }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(item,index){return _c('li',{key:item + index,staticClass:"tag-default tag-pill tag-outline"},[_vm._v("\n                  "+_vm._s(item)+"\n                ")])}),0)])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-29382e62>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-29382e62>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{active: item === _vm.page}))+" data-v-29382e62>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                    name: 'home',
                    query: {
                      page: item,
                      tag: _vm.$route.query.tag,
                      tab: _vm.tab
                    }
                  }}},[_vm._v("\n                  "+_vm._s(item)+"\n                ")])],1)}),0)])]:_vm._ssrNode("<div class=\"article-preview\" data-v-29382e62>No articles are here... yet.</div>")],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=29382e62&scoped=true&

// EXTERNAL MODULE: ./api/articles.js
var api_articles = __webpack_require__(28);

// EXTERNAL MODULE: ./api/profile.js
var api_profile = __webpack_require__(30);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'ProfileIndex',

  async asyncData({
    query,
    params
  }) {
    console.log(query, params);
    const page = Number.parseInt(query.page || 1);
    const limit = 10;
    const tab = query.tab || 'my_articles';
    const req = {
      limit,
      offset: (page - 1) * limit
    };

    if (tab === 'my_articles') {
      req.author = params.username;
    } else {
      req.favorited = params.username;
    }

    const [articleRes, profileRes] = await Promise.all([// 获取文章列表
    Object(api_articles["h" /* getArticles */])(req), // 获取标签列表
    Object(api_profile["b" /* getProfile */])(params.username)]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      profile
    } = profileRes.data;
    articles.forEach(item => {
      item.favoriteDisable = false;
    });
    profile.followingDisable = false;
    return {
      profile,
      articles,
      // 文章列表
      articlesCount,
      // 文章总数
      limit,
      // 每页大小
      page,
      // 页码
      tab // 选项卡

    };
  },

  watchQuery: ['page', 'tab'],

  data() {
    return {};
  },

  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

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
    },

    async onFollow(profile) {
      console.log(profile);
      profile.followingDisable = true;

      if (profile.following) {
        // 取消关注用户
        await Object(api_profile["c" /* unfollowUser */])(profile.username);
        profile.following = false;
      } else {
        // 关注用户
        await Object(api_profile["a" /* followUser */])(profile.username);
        profile.following = true;
      }

      profile.followingDisable = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "29382e62",
  "6c09d428"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map