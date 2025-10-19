// nuxt.config.js
export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css', // Tailwind (optional)
    '@/assets/css/global.css',   // Your global CSS
  ],
  modules: ['@nuxtjs/tailwindcss'], // If using Tailwind
});
