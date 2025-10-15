<template>
  <div>
    <!-- Navbar -->
    <nav class="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl font-bold tracking-wide hover:text-gray-200 transition">
          NuxtDojo
        </NuxtLink>

        <!-- Desktop Links -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink
            v-for="link in links"
            :key="link.name"
            :to="link.to"
            class="hover:text-gray-200 font-medium transition"
            :class="{ 'text-gray-300 border-b-2 border-white pb-1': $route.path === link.to }"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- Mobile Hamburger -->
        <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
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
      <div
        v-if="isOpen"
        class="md:hidden bg-gradient-to-r from-indigo-700 to-purple-800 px-6 py-4 space-y-4 transition-all duration-300"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.name"
          :to="link.to"
          class="block text-white hover:text-gray-200 font-medium transition"
          @click="isOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </nav>

    <!-- Page Content -->
    <main class="min-h-screen">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Contact', to: '/contact' },
]
</script>
