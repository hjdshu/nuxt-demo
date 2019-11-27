module.exports = {
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'product_pro',
        path: '/product_pro/:id',
        component: resolve(__dirname, 'pages_extend/product_pro.vue')
      })
    }
  },
}