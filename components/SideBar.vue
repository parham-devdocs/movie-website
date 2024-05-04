<template>
    <div class=" bg-black h-full w-full mt-10 ">
<div>
   <div @click="changeMode" class=" icon-container h-12 w-12 bg-gray-400 m-auto flex justify-center items-center rounded-full">
     <IconsSunIcon class="  text-black"></IconsSunIcon>
    </div>
    <ul class=" text-gray-400 float-right pr-7 text-right leading-10 w-full " >
       <NuxtLink  active-class="nuxt-link-active" to="/eshterak"> <li class=" pr-10 ">خرید اشتراک</li></NuxtLink>
       <NuxtLink exact-active-class="nuxt-link-active" active-class="nuxt-link-active" to="/"> <li>صفحه اصلی</li></NuxtLink>
        <NuxtLink active-class="nuxt-link-active" to="/movies"><li>فیلم ها</li></NuxtLink>
        <NuxtLink active-class="nuxt-link-active" to="/serials"><li>سریال ها</li></NuxtLink>
       <NuxtLink active-class="nuxt-link-active" to="/chanels"><li>کانال ها</li></NuxtLink>
       <NuxtLink  active-class="nuxt-link-active"  to="/my_list" ><li>لیست من</li></NuxtLink>

    </ul>
</div>







<div></div>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
function changeMode() {
    console.log(colorMode.value);
    colorMode.preference()
 }

</script>

<style  scoped>

.nuxt-link-active {
    color: yellow;
    
    
}
</style>
