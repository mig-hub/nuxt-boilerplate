export default {

  loading: false,

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  // Update title and meta description with default values
  head: {
    title: 'Nuxt Boilerplate',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { httpEquiv: "x-ua-compatible", content: "ie=edge" },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
  },

  // Style ressources are available everywhere.
  // The framework should not be changed.
  // Use the config.scss to set your variables and mixins.
  styleResources: {
    scss: [
      '~/assets/framework.scss',
      '~/assets/config.scss',
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/prevNextPageTransition',
    '~/assets/main',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/polyfills.js', mode: 'client' },
    // '~/plugins/contentful.js',
    // '~/plugins/prevNextPageTransition.js',
    '~/plugins/framework.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
  ],

  // Markdown
  markdownit: {
    breaks: true,
    runtime: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    // Uncomment and set these for Contentful
    // CTF_SPACE: '',
    // CTF_TOKEN: '',
  },

  googleAnalytics: {
    // Add ID to make it work
    // id: 'UA-XXX-X',
  },

}
