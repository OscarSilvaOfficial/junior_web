export default {

  head: {
    title: 'Ajude um júnior',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Se você é junior, eu quero te ajudar.'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/img/junior-favicon.png'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      href: '/img/junior-icon-medium.png'
    }],
  },

  css: [
    '~/static/css/main.css'
  ],

  plugins: [],

  target: 'static',

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],

  pwa: {
    icon: [
      {
        src: '/img/junior-icon-medium.png',
        sizes: "192x192",
        type:"image/png"
      },
      {
        src: '/img/junior-icon.png',
        sizes: "512x512",
        type:"image/png"
      },
      {
        src: "/img/maskable_icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    manifest: {
      name: 'Help a Junior',
      short_name: 'HAJJ',
      background_color: "#e2e8f0",
      theme_color: '#e2e8f0',
      description: 'Como todo junior, é sempre difícil conseguir um primeiro emprego, mas vou estar com você nessa jornada',
      lang: 'pt-BR',
      display: "standalone",
      useWebmanifestExtension: true
    }
  },

  env: {
    authUser: process.env.JUNIOR_USER,
    authPass: process.env.JUNIOR_PASS,
    baseUrl: process.env.DEBUG == 'True' ? 'http://localhost:8000/' : 'https://junior-api.herokuapp.com/'
  },

  build: {},

  workbox: {
    runtimeCaching: [{
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: 'https://cdn.snipcart.com/.*',
        method: 'GET',
        strategyOptions: {
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
}
