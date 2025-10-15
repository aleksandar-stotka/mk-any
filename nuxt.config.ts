/** @type {import('tailwindcss').Config} */
export default {
  css: ['@/assets/css/tailwind.css'],

  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],

  theme: {
    extend: {},
  },

  plugins: [],
  modules: ['@nuxtjs/tailwindcss'],
};