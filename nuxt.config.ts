import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module'
],
  css: ['~/assets/css/main.css'],
  vite:{
    plugins: [
      tailwindcss()
    ]
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Hypic Store',
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: 'description', content: 'Stay tuned For More Updates.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Stay tuned For More Updates.' },
        { property: 'og:description', content: 'Stay tuned For More Updates.' },
        { property: 'og:image', content: 'https://res-console.cloudinary.com/dbhvkbjuc/media_explorer_thumbnails/35c5a401d77539053381330acf31f850/detailed' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Stay tuned For More Updates.' },
        { name: 'twitter:image', content: 'https://res-console.cloudinary.com/dbhvkbjuc/media_explorer_thumbnails/35c5a401d77539053381330acf31f850/detailed' },
        { name: 'twitter:description', content: 'Stay tuned For More Updates.' },
        { name: 'keywords', content: "clothing brand in myanmar, hypic store, hypic, myanmar clothing brand, hypic myanmar" }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://res-console.cloudinary.com/dbhvkbjuc/media_explorer_thumbnails/35c5a401d77539053381330acf31f850/detailed' },
      ],
    }
  }
})
