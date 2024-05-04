<template>
    <div >
<Navbar ></Navbar>
    </div>
    <div class="grid grid-cols-10" >
        <div class=" col-span-8 "> <slot/> </div>

        <div class=" sidebar col-span-2 ">
            <SideBar></SideBar>

        </div>

    </div>
    
   
</template>

<script setup>

</script>

<style  scoped>

</style>