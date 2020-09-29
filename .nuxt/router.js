import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _69c57375 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _1f39f82c = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _1c35c1be = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _8219ca84 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _9e9f64a4 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _5df699b8 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _b48543ea = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _69c57375,
    children: [{
      path: "",
      component: _1f39f82c,
      name: "home"
    }, {
      path: "/login",
      component: _1c35c1be,
      name: "login"
    }, {
      path: "/register",
      component: _1c35c1be,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _8219ca84,
      name: "profile"
    }, {
      path: "/settings",
      component: _9e9f64a4,
      name: "settings"
    }, {
      path: "/editor",
      component: _5df699b8,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _b48543ea,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
