<template>
    <div class="wrapper z-30">
    <div class="signup-container  sm:w-96 w-4/5 mr-auto ml-auto bg-slate-950   mb-7 p-2 rounded ">
        <div>
            <img src="/assets/photos/logo.png" class=" w-3/5 mr-auto ml-auto">
        </div>
        <div class=" flex justify-between items-center ">
            <div class=" text-white flex justify-center items-center  w-full mb-6 p-2  " ><h3>ایجاد حساب کاربری</h3><IconsAddUser class=" ml-2"></IconsAddUser></div>

        </div>
        <div class=" w-4/5 ml-auto mr-auto flex items-center sm:block justify-between  ">
            <button class=" h-8 rounded w-full  bg-blue-800 text-white flex justify-center items-center mt-2"><h3>فیس بوک</h3><IconsFaceBookIcon class=" ml-1"></IconsFaceBookIcon></button>
            <button class=" h-8 rounded w-full ml-1 bg-red-700 text-white flex justify-center items-center mt-2" ><h3  >گوگل</h3> <IconsGoogleIcon class=" ml-1"></IconsGoogleIcon></button>
        </div>
        <div class=" flex items-center justify-center">
            <div class=" line bg-white w-20 h-1 rounded "></div>
            <div class=" text-white ml-5">یا</div>
            <div class="line bg-white w-20 h-1 ml-5 rounded"></div>
        </div>
        <div class="h-auto w-4/5 mr-auto ml-auto   ">
            <input  type="text" class=" w-full block rounded text-right h-9 pr-4  text-white outline-none border-blue-900 bg-slate-950 border-2" placeholder="ایمیل">
            <input  type="text" class=" w-full block rounded text-right h-9 pr-4 mt-2 text-white outline-none border-blue-900 bg-slate-950 border-2" placeholder="نام و نام خانوادگی" >
            <input  type="text" class=" w-full block rounded text-right h-9 pr-4 mt-2 text-white outline-none border-blue-900 bg-slate-950 border-2" placeholder="کلمه عبور" >
            <input  type="text" class=" w-full block rounded text-right h-9 pr-4 mt-2 text-white outline-none border-blue-900 bg-slate-950 border-2" placeholder="تکرار کلمه عبور" >

        </div>
        <div class=" flex w-4/5 h-auto ml-auto mr-auto justify-end items-center mt-5 mb-5">
            <div class=" text-white"><label for="save" class=" font-light">موافقم با حفظ حریم خصوصی</label> <input value="saveUser" type="checkbox" name="save" ></div>
        </div>
        <div class=" w-4/5 mr-auto ml-auto h-auto mt-2">
            <button class=" h-9 text-yellow-500 flex justify-center items-center w-full border-2 rounded border-yellow-500"><h3>ورود</h3><IconsEnterIcon class=" ml-1 mt-2"></IconsEnterIcon></button>
        </div>
        
        <div class=" flex justify-end mt-2">
            <nuxtLink to="/login" class=" text-yellow-500 cursor-pointer">ورود</NuxtLink>
            <h3 class=" text-blue-900 text-right mb-5">قبلا ثبت نام کرده اید؟</h3>
        </div>
    </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'signin-signup'
})
</script>

<style  scoped>
.signup-container{
    height:fit-content;
    animation-name: appear;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    
}
@keyframes appear {
    
    from{opacity: 0;}
    to{opacity: 1;}
}
</style>