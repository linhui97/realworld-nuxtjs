exports.ids = [1];
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=50ae7f52&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-50ae7f52>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-50ae7f52>","</div>",[_vm._ssrNode("<h1 data-v-50ae7f52>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-50ae7f52>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-50ae7f52><div class=\"col-md-12\" data-v-50ae7f52>"+(_vm._s(_vm.article.body))+"</div></div> <ul class=\"tag-list\" data-v-50ae7f52>"+(_vm._ssrList((_vm.article.tagList),function(item,index){return ("<li class=\"tag-default tag-pill tag-outline\" data-v-50ae7f52>"+_vm._ssrEscape("\n        "+_vm._s(item)+"\n      ")+"</li>")}))+"</ul> <hr data-v-50ae7f52> "),_vm._ssrNode("<div class=\"article-actions\" data-v-50ae7f52>","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-50ae7f52>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-50ae7f52>","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=50ae7f52&scoped=true&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(28);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=abb13b8a&scoped=true&
var article_metavue_type_template_id_abb13b8a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile', 
      params: {
        username: _vm.article.author.username
      }
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-abb13b8a>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
          name: 'profile', 
          params: {
            username: _vm.article.author.username
          }
        }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-abb13b8a>"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt)))+"</span>")],2),_vm._ssrNode(" "),(_vm.article.author.username === _vm.user.username)?_vm._ssrNode("<span data-v-abb13b8a>","</span>",[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{
        name: 'editor', 
        query: {
          slug: _vm.article.slug
        }
      }}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n    ")]),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"btn btn-outline-danger btn-sm\" data-v-abb13b8a><i class=\"ion-trash-a\" data-v-abb13b8a></i> Delete Article\n    </button>")],2):_vm._ssrNode(("<span data-v-abb13b8a><button"+(_vm._ssrAttr("disabled",_vm.article.author.followingDisable))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active: _vm.article.author.following}))+" data-v-abb13b8a><i class=\"ion-plus-round\" data-v-abb13b8a></i>"+_vm._ssrEscape("\n       \n      "+_vm._s(_vm.article.author.following ? 'Unfollow' : 'Follow')+" "+_vm._s(_vm.article.author.username)+"\n    ")+"</button>\n      \n    <button"+(_vm._ssrAttr("disabled",_vm.article.favoriteDisable))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active: _vm.article.favorited}))+" data-v-abb13b8a><i class=\"ion-heart\" data-v-abb13b8a></i>"+_vm._ssrEscape("\n       \n      "+_vm._s(_vm.article.favorited ? 'Unfavorite' : 'Favorite')+" Article\n      ")+"<span class=\"counter\" data-v-abb13b8a>"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button></span>"))],2)}
var article_metavue_type_template_id_abb13b8a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=abb13b8a&scoped=true&

// EXTERNAL MODULE: ./api/profile.js
var profile = __webpack_require__(30);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: "description",
        name: "description",
        content: this.article.description
      }]
    };
  },

  data() {
    return {
      loading: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  watch: {},
  methods: {
    // 点赞
    async onFavorite(article) {
      console.log(article);
      article.favoriteDisable = true;

      if (article.favorited) {
        // 取消点赞
        await Object(articles["f" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 点赞
        await Object(articles["c" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisable = false;
    },

    // 关注用户
    async onFollow(article) {
      console.log(article.author);
      article.author.followingDisable = true;

      if (article.author.following) {
        // 取消关注用户
        await Object(profile["c" /* unfollowUser */])(article.author.username);
        article.author.following = false;
      } else {
        // 关注用户
        await Object(profile["a" /* followUser */])(article.author.username);
        article.author.following = true;
      }

      article.author.followingDisable = false;
    },

    // 删除文章
    async deleteArticles() {
      if (!this.loading) {
        this.loading = true;
        await Object(articles["d" /* deleteArticles */])(this.article.slug);
        this.loading = false;
        this.$router.push({
          name: 'profile',
          params: {
            username: this.user.username
          }
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_abb13b8a_scoped_true_render,
  article_metavue_type_template_id_abb13b8a_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "abb13b8a",
  "c860dc2e"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=77f05c35&scoped=true&
var article_commentsvue_type_template_id_77f05c35_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\" data-v-77f05c35><div class=\"card-block\" data-v-77f05c35><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-77f05c35>"+_vm._ssrEscape(_vm._s(_vm.commentBody))+"</textarea></div> <div class=\"card-footer\" data-v-77f05c35><img"+(_vm._ssrAttr("src",_vm.article.author.image))+" class=\"comment-author-img\" data-v-77f05c35> <button"+(_vm._ssrAttr("disabled",_vm.isDisplay))+" class=\"btn btn-sm btn-primary\" data-v-77f05c35>Post Comment</button></div></form> "),_vm._l((_vm.comments),function(comment,index){return _vm._ssrNode("<div class=\"card\" data-v-77f05c35>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-77f05c35><p class=\"card-text\" data-v-77f05c35>"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-77f05c35>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile', 
            params: {
              username: comment.author.username
            }
        }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode(" \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile', 
            params: {
              username: comment.author.username
            }
        }}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\" data-v-77f05c35>"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt)))+"</span> "+((comment.author.username === _vm.user.username)?("<span class=\"mod-options\" data-v-77f05c35><i class=\"ion-trash-a\" data-v-77f05c35></i></span>"):"<!---->"))],2)],2)})],2)}
var article_commentsvue_type_template_id_77f05c35_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=77f05c35&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comments: [],
      // 评论列表
      comment: {},
      // 添加的评论
      commentBody: "",
      // 添加的评论内容
      isDisplay: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  watch: {},

  mounted() {
    this.getComments();
  },

  methods: {
    async getComments() {
      const {
        data
      } = await Object(articles["j" /* getComments */])(this.article.slug);
      this.comments = data.comments;
    },

    // 添加评论
    async addComment() {
      let d = {
        slug: this.article.slug,
        data: {
          comment: {
            body: this.commentBody
          }
        }
      };

      if (!this.isDisplay) {
        this.isDisplay = true;
        const {
          data
        } = await Object(articles["b" /* addComment */])(d);
        this.comment = data.comment;
        this.comments.unshift(this.comment);
        this.commentBody = null;
        this.isDisplay = false;
      }
    },

    // 删除自己写的评论
    async deleteComment(comment, index) {
      let d = {
        slug: this.article.slug,
        id: comment.id
      };
      await Object(articles["e" /* deleteComment */])(d);
      this.comments.splice(index, 1);
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_77f05c35_scoped_true_render,
  article_commentsvue_type_template_id_77f05c35_scoped_true_staticRenderFns,
  false,
  article_comments_injectStyles,
  "77f05c35",
  "d20bf750"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'ArticleIndex',

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(articles["g" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    article.author.followingDisable = false;
    article.favoriteDisable = false;
    return {
      article
    };
  },

  components: {
    ArticleMeta: article_meta,
    ArticleComments: article_comments
  },

  data() {
    return {};
  },

  computed: {},
  watch: {},
  methods: {}
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "50ae7f52",
  "4051460e"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map