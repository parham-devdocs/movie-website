<template>
    <div class=" flex w-auto h-full flex-col items-center bg-black  ">
    <img src="../../public/photos/popularCast/1.jpg" class=" w-32 h-32 rounded-full">
    <h2 class=" text-white mt-1">{{ name }}</h2>
    </div>
</template>

<script setup>

const props = defineProps({
    name: String,
    src:String
})
</script>

<style  scoped>

</style>