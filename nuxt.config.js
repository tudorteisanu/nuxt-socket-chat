export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-chat',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-socket-io.client.ts', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components

  components: [
    { path: '~/components/base', level: 0, extensions: ['vue'] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind/tailwind.css',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    'nuxt-socket-io'
  ],

  io: {
    sockets: [ // Required
      { // At least one entry is required
        name: 'home',
        url: 'http://localhost:4000',
        default: true,
        vuex: {
            mutations: [],
            actions: [],
            emitBacks: []
        },
        namespaces: { /* see section below */ }
      },
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['lodash-es'],
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nesting': {},
      },
    },
    standalone: true,
    optimization: {
      minimize: process.env.NODE_ENV === 'production',
    },
    babel: {
      compact: true,
    },
  },
}
