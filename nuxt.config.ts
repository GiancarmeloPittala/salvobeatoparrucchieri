// https://nuxt.com/docs/api/configuration/nuxt-config
const DEFAULT_NUXT_PUBLIC_SITE_URL = process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost'
export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      siteUrl: DEFAULT_NUXT_PUBLIC_SITE_URL,
    }
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/salvobeatoparrucchieri/' : '',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Salvo Beato Moda & Stile - Parrucchiere a Paternò',
      
      meta: [
        { name:"X-UA-Compatible", content:"IE=edge" },
        { name:"keywords", content:"restaurant, motta, pub motta, beatone" },
        { name:"subject", content:"Salvo Beato Moda & Stile - Parrucchiere a Paternò" },
        { name:"copyright",content:"Salvo Beato Moda & Stile" },
        { name:"robots", content:"index,follow"  },
        { name:"topic", content:"" },
        { name:"author", content:"giancarmelo, giancarmelo@gmail.com" },
        { name:"designer", content:"giancarmelo, giancarmelo@gmail.com" },
        { name:"copyright", content:"BeAtOne" },
        { name:"url", content:`${DEFAULT_NUXT_PUBLIC_SITE_URL}/` },
        { name:"category", content:"food" },
        { name:"coverage", content:"Worldwide" },
        { name:"distribution", content:"Global" },

        { name:'description', content: 'Salvo Beato Moda & Stile, tex mex' },
        { name:"og:title", content:"Salvo Beato Moda & Stile - Parrucchiere a Paternò" },
        { name:"og:type", content:"website" },
        { name:"og:url", content:`${DEFAULT_NUXT_PUBLIC_SITE_URL}/` },
        { name:"og:image", content:`${DEFAULT_NUXT_PUBLIC_SITE_URL}/images/logo-bianco-261w.webp` },
        { property: "og:image:type", content:"image/jpg" },
        { property: "og:image:width", content:"260" },
        { property: "og:image:height", content:"287" },
        { name:"og:site_name", content:"Salvo Beato Moda & Stile - Parrucchiere a Paternò" },
        { name:"og:description", content:"Salvo Beato Moda & Stile, tex mex"},
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: "180x180", href: '/images/icon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/images/icon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/images/icon/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ]
    },
  },

  css: [
    `~/assets/css/base.css`
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-icon',
    //https://unhead-schema-org.harlanzw.com/guide/getting-started/how-it-works#runtime-inferences
    'nuxt-schema-org',
    'nuxt-simple-robots',
    //https://github.com/harlan-zw/nuxt-simple-sitemap
    'nuxt-simple-sitemap',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        name: 'English',
        icon: 'twemoji:flag-for-flag-united-states'
      },
      {
        code: 'it',
        iso: 'it-IT',
        file: 'it-IT.json',
        name: 'Italiano',
        icon: 'openmoji:flag-italy'
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang',
    vueI18n: {
      fallbackLocale: 'en',
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },
  
  schemaOrg: {
    host: DEFAULT_NUXT_PUBLIC_SITE_URL,
  },

  hooks: {
    'sitemap:generate': (ctx: any) => {
      // add custom URLs
      ctx.urls.push({
        url: '/my-custom-url',
        changefreq: 'daily',
        priority: 0.3
      })
    }
  },

})
