<template>
  <nav class="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="text-2xl font-bold hover:text-gray-200 transition">
        VueDojo
      </router-link>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-10">
        <router-link
          v-for="link in links"
          :key="link.name"
          :to="link.to"
          class="hover:text-gray-200 font-medium transition px-3 py-2 rounded-md"
          :class="{ 'bg-white/20': $route.path === link.to }"
        >
          {{ link.name }}
        </router-link>
      </div>

      <!-- Mobile Hamburger -->
      <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-md hover:bg-white/20 transition">
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden px-6 py-4 space-y-3 bg-gradient-to-r from-indigo-700 to-purple-800">
      <router-link
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        class="block px-3 py-2 rounded-md hover:bg-white/20 transition"
        @click="isOpen = false"
      >
        {{ link.name }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { links } from '~/links/link';

const isOpen = ref(false)


</script>
