<template>
  <div>
    <!-- Shared header -->
      <Navbar />
   

    <!-- Page content -->
    <main >
      <slot />
    </main>

    <!-- Shared footer -->
    <footer >
      <p>© 2025 My Nuxt App</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed
</script>
