<template>
    <div>
        <div v-for="p in data">
            <p>{{ p.name }}</p>
          
            
            
        </div>
    
    </div>
</template>

<script setup>
const {data} = await useFetch("https://fakestoreapi.com/products")
console.log(data,"fetchProducts")

</script>

<style lang="scss" scoped>

</style>