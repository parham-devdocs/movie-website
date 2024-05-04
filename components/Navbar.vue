<template>
    <div class="container flex justify-between bg-black p-2 ">
        <div class=" flex nav-left-end ">
            <div class="signin-singup w-32 flex justify-between ">
            <button class=" bg-black border-yellow-500 rounded text-yellow-500 border-2 w-14 h-9 font-normal">ورود</button>
            <button class=" bg-black text-white font-normal w-14 h-9 ">ثبت نام</button>
            </div>
            <div class=" flex h-9  w-96 bg-black border-2 border-yellow-500 rounded">
                <button class=" bg-black text-white h-8 rounded pl-2 pr-2 search-btn border-r-2 border-yellow-500">جستجو</button>
                <div class=" mt-auto mb-auto flex">
                    <input type="text"
                     placeholder="فیلم ها , نمایش نامه های تلویزیونی " 
                     class=" w-72 outline-none
                      bg-black text-white text-right pl-2">
                   <IconsSearchIcons class=" search-icon text-white mt-1 ml-1"></IconsSearchIcons>

                </div>
            </div>
        </div>
        <div class=" flex h-9 w-64 justify-between items-center">
            <div class=" text-white font-bold text-xl">{{ metaHeader }}</div>
            <div><img src="../assets/photos/logo.png" class=" w-32 " alt=""></div>
        </div>
    </div>

</template>

<script setup>
import { useTitle} from '@vueuse/core'
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
</style>