<template>
    <div class="pt-5">
        <div v-for="p in data" :key="p.id">
            <p > {{ p.title }}</p>
          
            
            
        </div>
    <p>ll</p>
    </div>
</template>

<script setup>
const {data} = await useFetch("https://fakestoreapi.com/products")
console.log(data.value,"fetchProducts")

</script>

<style lang="scss" scoped>

</style>