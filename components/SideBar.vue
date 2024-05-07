<template>
    <div class="sideBar  flex flex-col justify-between  w-full rounded-sm " :style="{background:background}">
<div class="">
   <div @click="changeMode" class=" icon-container mt-4 mb-4 flex justify-center items-center rounded-full" >
     <IconsSunIcon class="  text-black bg-white rounded-full  p-2" v-if="light"></IconsSunIcon>
     <IconsMoonIcon class=" text-white bg-blue-950 rounded-full p-2 " v-else></IconsMoonIcon>
    </div>
    <ul  class="  float-right pr-7 text-right leading-7 text-gray-400 " >
       <NuxtLink  active-class="nuxt-link-active" to="/eshterak" class=" w-64 h-10 bg-yellow-500 text-white rounded-l-3xl select-none flex justify-center items-center" > <li class="">خرید اشتراک</li><IconsStarIcon class=" ml-1"></IconsStarIcon></NuxtLink>
       <NuxtLink exact-active-class="nuxt-link-active" active-class="nuxt-link-active" to="/" class=" flex justify-end items-center"> <li>صفحه اصلی</li><IconsHomeIcon class=" ml-1"></IconsHomeIcon></NuxtLink>
        <NuxtLink active-class="nuxt-link-active" to="/movies" class=" flex justify-end items-center"><li>فیلم ها</li><IconsMovieIcon class=" ml-3"></IconsMovieIcon></NuxtLink>
        <NuxtLink active-class="nuxt-link-active" to="/serials" class="flex justify-end items-center"><li>سریال ها</li><IconsTvIcon class=" ml-3"></IconsTvIcon></NuxtLink>
       <NuxtLink active-class="nuxt-link-active" to="/chanels" class=" flex justify-end items-center"><li>کانال ها</li><IconsFluentIcon class=" ml-3"></IconsFluentIcon></NuxtLink>
       <NuxtLink  active-class="nuxt-link-active"  to="/my_list" class=" flex justify-end items-center" ><li>لیست من</li><IconsFolderIcon class=" ml-3"></IconsFolderIcon></NuxtLink>

    </ul>
    
</div>







<div>
      <ul  class="  float-right pr-7 text-right leading-7 text-gray-600 " >
       <NuxtLink   to="/tamas_ba_ma" class=" flex justify-end  items-center"><li class="  select-none">تماس با ما</li><IconsEnvelopeIcon class=" ml-3"></IconsEnvelopeIcon></NuxtLink>
       <NuxtLink   to="/poshtibani" class=" flex justify-end items-center"> <li>پرسش و پاسخ پشتیبانی</li><IconsQuestionMarkIcon class=" ml-3"></IconsQuestionMarkIcon></NuxtLink>
        <NuxtLink  to="/hefze_harim_khosousi" class=" flex justify-end items-center"><li>سیاست حفظ حریم خصوص</li><IconsKeyIcon class=" ml-3"></IconsKeyIcon></NuxtLink>
        <NuxtLink  to="/bazpardakht" class=" flex justify-end items-center"><li>سیاست بازپرداخت</li><IconsDollarSignIcon class=" ml-3"></IconsDollarSignIcon></NuxtLink>
      

    </ul>
</div>
    </div>
</template>

<script setup>

import { ref } from "vue";
import { darkmode_lightmode_handler } from "~/store/mode";
const light=ref(true)
const index=ref(null)
const changeBg=ref(false)
const colorMode = darkmode_lightmode_handler()


function changeMode() {
    if (darkmode_lightmode_handler().backgoundColor == 'white') {
        light.value=true
        darkmode_lightmode_handler().backgoundColor = 'black'
        darkmode_lightmode_handler().font.b_color='white'
        return
    }

   darkmode_lightmode_handler().font.b_color='black'
        darkmode_lightmode_handler().backgoundColor = 'white'
        light.value=false
        
    }
    
    
 

</script>

<style  scoped>

.nuxt-link-active {
    color: yellow;
    
    
}
.sideBar{
    height:90vh;
    
}
</style>
