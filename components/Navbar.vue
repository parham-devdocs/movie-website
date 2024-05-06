<template>
    <div class="wrapper"></div>
   
<div class="   flex  bg-black p2 h-16 items-center justify-between  ">

<div class=" sm:hidden w-28 flex justify-evenly">
   <button @click="show_signin" class="btnIcon bg-black text-yellow-500 w-fit h-fit p-1 rounded flex justify-center items-center border-2 border-yellow-500"> 
     <IconsUserIcon ></IconsUserIcon>
    </button>
   <button class="btnIcon bg-black text-yellow-500 w-fit h-fit p-1 rounded flex justify-center items-center border-2 border-yellow-500 "> 
   <IconsSearchIcons  ></IconsSearchIcons>

</button> 
</div>
<div class=" hidden sm:flex  w-28  justify-evenly">
   <button class="btnIcon bg-black text-yellow-500 w-fit h-fit p-1 rounded flex justify-center items-center border-2 border-yellow-500"> ثبت نام</button>
   <button class="btnIcon bg-black text-yellow-500 w-fit h-fit p-1 rounded flex justify-center items-center border-2 border-yellow-500 " @click="show_signin">ورود</button> 
</div>
 <div class=" hidden sm:flex h-9  w-96 bg-black border-2 border-yellow-500 rounded">
                <button class="btnIcon bg-black text-white h-8 rounded pl-2 pr-2 search-btn border-r-2 border-yellow-500">جستجو</button>
                <div class=" mt-auto mb-auto flex">
                    <input type="text"
                     placeholder="فیلم ها , نمایش نامه های تلویزیونی " 
                     class=" w-72 outline-none
                      bg-black text-white text-right pl-2">
                   <IconsSearchIcons class=" search-icon text-white mt-1 ml-1"></IconsSearchIcons>

                </div>
            </div>
    <div class=" hidden sm:flex text-white font-bold text-xl">{{ metaHeader }}</div>

<div class=" w-44 flex justify-evenly items-center mr-3">
    <img src="./logo.png" class=" w-32">
   <button class="btnIcon bg-black text-yellow-500 w-10 h-10 rounded flex justify-center items-center border-2 border-yellow-500 "> <IconsMenuIcon ></IconsMenuIcon></button>
</div>
</div>
</template>

<script setup>

const background = ref('black')
import { ref } from 'vue'
import { useTitle } from '@vueuse/core'
import { darkmode_lightmode_handler } from '~/store/mode';
import { showSignin } from "~/store/showSignin";
const signIn_store = showSignin()
watch(darkmode_lightmode_handler(), () => {
    background.value = darkmode_lightmode_handler().backgoundColor
    console.log(background.value);
})

function show_signin() {
    signIn_store.showSignIn = true
    signIn_store.hideSignin=false

}
const metaHeader=useTitle()
</script>

<style scoped>
.nav-left-end{
    width: 50%;
    justify-content: space-between;

}
.container{
    width: 100%;
}
.btnIcon:hover{
    animation-name: btnHover;
    animation-duration: 0.5s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;

}
@keyframes btnHover{
    from{ background-color: black; color: rgb(254, 215, 75);}
    to{background-color: rgb(241, 202, 59); color: black;}
}
</style>