export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Republik',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap',
        // href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap',
        // href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/animate',
    '~/assets/css/bootstrap.min',
    '~/assets/css/boxicons.min',
    '~/assets/css/flaticon',
    '~/assets/css/meanmenu',
    '~/assets/css/style',
    '~/assets/css/responsive'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/bootstrap-vue', ssr: false},
    {src: '~/plugins/vue-carousel', ssr: false},
    {src: '~/plugins/vue-backtotop', ssr: false},
    {src: '~/plugins/vue-cool-lightbox', ssr: false},
  ],

  // Globally configure <nuxt-link> default active class.
  router: {
    linkActiveClass: 'active'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://strapi.nuxtjs.org/setup
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    runtime: true, // Support `$md()`
  },
  strapi: {
    url: 'http://47.241.111.147:1337',
    // url: 'http://localhost:1338',
    entities: [
      {name: 'sitelogo', type: 'single'},
      {name: 'bannerdefaulthomepage', type: 'single'},
      {name: 'featurecards', type: 'collection'},
      {name: 'partners', type: 'collection'},
      {name: 'securitycards', type: 'collection'},
      {name: 'approach', type: 'single'},
      {name: 'electronic', type: 'single'},
      {name: 'completecards', type: 'collection'},
      {name: 'clientwraps', type: 'collection'},
      {name: 'cybersecurity', type: 'single'},
      {name: 'blogcards', type: 'collection'},
      {name: 'footer', type: 'single'},
      {name: 'pricings', type: 'collection'},
      {name: 'pricingstwos', type: 'collection'},
      {name: 'testimonialspages', type: 'collection'},
      {name: 'teampages', type: 'collection'},
      {name: 'faqpage', type: 'single'},
      {name: 'termsofconditions', type: 'single'},
      {name: 'privacypolicy', type: 'single'},
      {name: 'solutioncards', type: 'collection'},
      {name: 'servicesdetails', type: 'collection'},
      {name: 'blogdetails', type: 'collection'},
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders:  {
      vue: {
        prettify: false
      }
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
}
