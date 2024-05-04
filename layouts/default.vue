<template>
    <div class="">
<Navbar ></Navbar>
    </div>
    <div class="grid grid-cols-10 overflow-x-hidden" >
        <div class=" col-span-9"> <slot/> </div>

        <div class=" sidebar ">slkcslcmsdlkmsd</div>

    </div>
    
   
</template>

<script setup>

</script>

<style  scoped>
.sidebar{
    width: 100%;
    height: 100vh;
    background-color: white;
}
</style>