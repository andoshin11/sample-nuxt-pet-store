const pkg = require('./package')

module.exports = {
  mode: 'universal',
  srcDir: 'app',

  env: {
    NODE_ENV: process.env.NODE_ENV,
    FLAG_AGREED: process.env.FLAG_AGREED
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: pkg.description }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   *  https://ja.nuxtjs.org/api/configuration-loading/
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/injector'],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    useForkTsChecker: true,
    hardSource: process.env.NODE_ENV === 'local',
    /*
     ** You can extend webpack config here
     */
    babel: {
      presets: [['@nuxt/babel-preset-app', { targets: { ie: 11 } }]],
      plugins: ['@babel/plugin-transform-runtime']
    }
  }
}
