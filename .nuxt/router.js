import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f8146be0 = () => interopDefault(import('..\\pages\\product.vue' /* webpackChunkName: "pages_product" */))
const _10942a37 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages_products__id" */))
const _23ad6ab3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _2c42c7b3 = () => interopDefault(import('..\\pages_extend\\product_pro.vue' /* webpackChunkName: "" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/product",
    component: _f8146be0,
    name: "product"
  }, {
    path: "/products/:id?",
    component: _10942a37,
    name: "products-id"
  }, {
    path: "/",
    component: _23ad6ab3,
    name: "index"
  }, {
    path: "/product_pro/:id",
    component: _2c42c7b3,
    name: "product_pro"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
