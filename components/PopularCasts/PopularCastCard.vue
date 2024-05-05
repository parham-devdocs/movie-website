<template>
    <a href="#" >
    <div class=" flex w-auto h-full flex-col items-center   " :style="{backgroundColor:background}" >
    <img :src="props.src" class=" w-32 h-32 rounded-full" draggable="false">
    <h2 class=" text-white mt-1" :style="{color:color}">{{ name }}</h2>
    </div>
    </a>

</template>

<script setup>
import  { darkmode_lightmode_handler } from '~/store/mode';
const background=ref('white')
const color=ref('black')
const colorMode = darkmode_lightmode_handler()

watch(colorMode, () => {
    background.value = colorMode.backgoundColor
    color.value = colorMode.font.b_color
    
})
const props = defineProps({
    name: String,
    src:String
})
</script>

<style  scoped>

</style>