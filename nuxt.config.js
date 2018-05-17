const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'issue-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      {src: './_nuxt/pspdfkit.wasm', type: 'application/wasm'},
      {src: './_nuxt/pspdfkit.js'},
      {src: './_nuxt/pspdfkit.wasm.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.plugins.push(
        new CopyWebpackPlugin([
          { from: path.join(__dirname + '/node_modules/pspdfkit/dist/pspdfkit.wasm'),  to: path.join(__dirname + '/.nuxt/dist')},
          { from: path.join(__dirname + '/node_modules/pspdfkit/dist/pspdfkit.js'),  to: path.join(__dirname + '/.nuxt/dist')},
          { from: path.join(__dirname + '/node_modules/pspdfkit/dist/pspdfkit.wasm.js'),  to: path.join(__dirname + '/.nuxt/dist')},
          { from: path.join(__dirname + '/node_modules/pspdfkit/dist/pspdfkit.css'),  to: path.join(__dirname + '/.nuxt/dist')}
        ])
      )

      config.resolve.extensions.push('.wasm', '.mjs')
    }
  }
}
