// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
   modules: [
    // ...
     '@pinia/nuxt',
     '@vueuse/nuxt',
     '@pinia-plugin-persistedstate/nuxt',
     '@pinia/nuxt',
      'dayjs-nuxt'


    

    
  ], postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
