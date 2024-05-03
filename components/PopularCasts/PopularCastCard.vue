<template>
    <a href="#" >
    <div class=" flex w-auto h-full flex-col items-center bg-black  " >
    <img :src="props.src" class=" w-32 h-32 rounded-full" draggable="false">
    <h2 class=" text-white mt-1">{{ name }}</h2>
    </div>
    </a>

</template>

<script setup>

const props = defineProps({
    name: String,
    src:String
})
</script>

<style  scoped>

</style>