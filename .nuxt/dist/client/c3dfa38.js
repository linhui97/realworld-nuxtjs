(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(t,e,r){"use strict";var n=r(61);e.a=n.b},182:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"l",(function(){return o})),r.d(e,"d",(function(){return l})),r.d(e,"i",(function(){return m})),r.d(e,"h",(function(){return d})),r.d(e,"k",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"f",(function(){return h})),r.d(e,"g",(function(){return O})),r.d(e,"j",(function(){return j})),r.d(e,"b",(function(){return w})),r.d(e,"e",(function(){return _}));var n=r(181),c=function(data){return Object(n.a)({method:"POST",url:"/api/articles",data:data})},o=function(t){var e=t.slug,data=t.data;return Object(n.a)({method:"PUT",url:"/api/articles/".concat(e),data:data})},l=function(t){return Object(n.a)({method:"DELETE",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.a)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.a)({method:"GET",url:"/api/articles",params:t})},f=function(t){return Object(n.a)({method:"GET",url:"/api/articles/feed",params:t})},v=function(t){return Object(n.a)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},h=function(t){return Object(n.a)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},O=function(t){return Object(n.a)({method:"GET",url:"/api/articles/".concat(t)})},j=function(t){return Object(n.a)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},w=function(t){var e=t.slug,data=t.data;return Object(n.a)({method:"POST",url:"/api/articles/".concat(e,"/comments"),data:data})},_=function(t){var e=t.slug,r=t.id;return Object(n.a)({method:"DELETE",url:"/api/articles/".concat(e,"/comments/").concat(r)})}},190:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return l}));var n=r(181),c=function(t){return Object(n.a)({method:"GET",url:"/api/profiles/".concat(t)})},o=function(t){return Object(n.a)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},l=function(t){return Object(n.a)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})}},258:function(t,e,r){"use strict";r.r(e);r(29);var n=r(3),c=r(182),o=r(202),l=r.n(o),m=(r(77),r(30),r(31),r(13),r(60),r(43)),d=r(190),f=r(32);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={name:"ArticleMeta",props:{article:{type:Object,required:!0}},head:function(){return{title:"".concat(this.article.title," - RealWorld"),meta:[{hid:"description",name:"description",content:this.article.description}]}},data:function(){return{loading:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)(["user"])),watch:{},methods:{onFavorite:function(article){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(article),article.favoriteDisable=!0,!article.favorited){t.next=9;break}return t.next=5,Object(c.f)(article.slug);case 5:article.favorited=!1,article.favoritesCount+=-1,t.next=13;break;case 9:return t.next=11,Object(c.c)(article.slug);case 11:article.favorited=!0,article.favoritesCount+=1;case 13:article.favoriteDisable=!1;case 14:case"end":return t.stop()}}),t)})))()},onFollow:function(article){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(article.author),article.author.followingDisable=!0,!article.author.following){t.next=8;break}return t.next=5,Object(d.c)(article.author.username);case 5:article.author.following=!1,t.next=11;break;case 8:return t.next=10,Object(d.a)(article.author.username);case 10:article.author.following=!0;case 11:article.author.followingDisable=!1;case 12:case"end":return t.stop()}}),t)})))()},deleteArticles:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading){e.next=6;break}return t.loading=!0,e.next=4,Object(c.d)(t.article.slug);case 4:t.loading=!1,t.$router.push({name:"profile",params:{username:t.user.username}});case 6:case"end":return e.stop()}}),e)})))()}}},O=r(20),j=Object(O.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt)))])],1),t._v(" "),t.article.author.username===t.user.username?r("span",[r("nuxt-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:{name:"editor",query:{slug:t.article.slug}}}},[r("i",{staticClass:"ion-edit"}),t._v(" Edit Article\n    ")]),t._v(" "),r("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{disabled:t.loading},on:{click:t.deleteArticles}},[r("i",{staticClass:"ion-trash-a"}),t._v(" Delete Article\n    ")])],1):r("span",[r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following},attrs:{disabled:t.article.author.followingDisable},on:{click:function(e){return t.onFollow(t.article)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n       \n      "+t._s(t.article.author.following?"Unfollow":"Follow")+" "+t._s(t.article.author.username)+"\n    ")]),t._v("\n      \n    "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},attrs:{disabled:t.article.favoriteDisable},on:{click:function(e){return t.onFavorite(t.article)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n       \n      "+t._s(t.article.favorited?"Unfavorite":"Favorite")+" Article\n      "),r("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])])],1)}),[],!1,null,"abb13b8a",null).exports;function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _={name:"ArticleComments",props:{article:{type:Object,required:!0}},data:function(){return{comments:[],comment:{},commentBody:"",isDisplay:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)(["user"])),watch:{},mounted:function(){this.getComments()},methods:{getComments:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.j)(t.article.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments;case 5:case"end":return e.stop()}}),e)})))()},addComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={slug:t.article.slug,data:{comment:{body:t.commentBody}}},t.isDisplay){e.next=11;break}return t.isDisplay=!0,e.next=5,Object(c.b)(r);case 5:n=e.sent,data=n.data,t.comment=data.comment,t.comments.unshift(t.comment),t.commentBody=null,t.isDisplay=!1;case 11:case"end":return e.stop()}}),e)})))()},deleteComment:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={slug:r.article.slug,id:t.id},n.next=3,Object(c.e)(o);case 3:r.comments.splice(e,1);case 4:case"end":return n.stop()}}),n)})))()}}},C={name:"ArticleIndex",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(c.g)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,o=new l.a,article.body=o.render(article.body),article.author.followingDisable=!1,article.favoriteDisable=!1,e.abrupt("return",{article:article});case 11:case"end":return e.stop()}}),e)})))()},components:{ArticleMeta:j,ArticleComments:Object(O.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{staticClass:"card comment-form"},[r("div",{staticClass:"card-block"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentBody,expression:"commentBody"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.commentBody},on:{input:function(e){e.target.composing||(t.commentBody=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:t.article.author.image}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary",attrs:{disabled:t.isDisplay},on:{click:t.addComment}},[t._v("Post Comment")])])]),t._v(" "),t._l(t.comments,(function(e,n){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v(" \n      "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v(t._s(e.author.username))]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.createdAt)))]),t._v(" "),e.author.username===t.user.username?r("span",{staticClass:"mod-options"},[r("i",{staticClass:"ion-trash-a",on:{click:function(r){return t.deleteComment(e,n)}}})]):t._e()],1)])}))],2)}),[],!1,null,"77f05c35",null).exports},data:function(){return{}},computed:{},watch:{},methods:{}},y=Object(O.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("article-meta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("ul",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e,n){return r("li",{key:e+n,staticClass:"tag-default tag-pill tag-outline"},[t._v("\n        "+t._s(e)+"\n      ")])})),0),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("article-meta",{attrs:{article:t.article}})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("article-comments",{attrs:{article:t.article}})],1)])])])}),[],!1,null,"50ae7f52",null);e.default=y.exports}}]);