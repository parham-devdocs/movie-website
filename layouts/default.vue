<template>
    <div  >
<Navbar ></Navbar>
    </div>
    <div class="grid grid-cols-10 bg-black relative" :style="{backgroundColor:background}"  >
        <div class=" col-span-8 " :style="{backgroundColor:background}"> <slot/> </div>

        <div class=" sidebar col-span-2 fixed">
            <SideBar></SideBar>

        </div>

    </div>
    
   
</template>

<script setup>
import  { darkmode_lightmode_handler } from '~/store/mode';
const background=ref('white')

const colorMode = darkmode_lightmode_handler()

watch(colorMode, () => {
    background.value = colorMode.backgoundColor
    
})
</script>

<style  scoped>
body{
    background-color: black;
    
}
.sidebar{
    right: 0%;
}
</style>