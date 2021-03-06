export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      title: 'as-spa-v2',
      htmlAttrs: {
        lang: 'vi',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: this.$app.findConfig('app_logo_url'),
        },
      ],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/dayjs',
    '~/plugins/string',
    '~/plugins/notification.client',
    '~/plugins/copy.client',
    '~/plugins/check-type',
    '~/plugins/number',
    '~/plugins/file.client',
    '~/plugins/vuelidate',
    '~/plugins/axios',
    '~/plugins/laravel-sanctum',
    '~/plugins/app',
    '~/plugins/auth',
    '~/plugins/vue-fb-customer-chat.client'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-tailvue', { toast: true }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    app: {
      baseURL: process.env.APP_BASE_URL,
    },
    axios: {
      baseURL: process.env.PUBLIC_BASE_API_URL,
      credentials: true,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.PRIVATE_BASE_API_URL,
      credentials: true,
    },
  },
}
