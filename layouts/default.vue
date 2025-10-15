<template>
  <div class="flex flex-col min-h-screen">
    <!-- Shared header -->
    <header class="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-4 shadow-md z-50">
      <Navbar />
    </header>

    <!-- Page content -->
    <main class="flex-1 pt-20 p-6 bg-gray-50 dark:bg-gray-900">
      <slot />
    </main>

    <!-- Shared footer -->
    <footer class="bg-gray-900 text-white text-center p-3 mt-auto">
      <p>© 2025 My Nuxt App</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed
</script>
