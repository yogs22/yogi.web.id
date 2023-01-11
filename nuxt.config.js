export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Yogi Prasetyawan - Portfolio Page',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is Yogi Prasetyawan Portfolio Page, you can know more about me in this pages' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/bootstrap-utilities.min.css',
    '~/static/css/bootstrap-grid.min.css',
    '~/static/css/global.css',
    '~/static/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: 'plugins/owl.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
