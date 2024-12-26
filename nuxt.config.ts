// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'arco-design-nuxt-module',
  ],

  arco: {
    importPrefix: 'A',
    hookPrefix: 'Arco',
    locales: ['getLocale'],
    localePrefix: 'Arco',
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-12-26',
})
