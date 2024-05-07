<template>
    <div class="wrapper z-30">
    <div class="signin-container sm:w-96 w-4/5 mr-auto ml-auto bg-black  mb-7 p-2  rounded ">
        <div class=" flex justify-between items-center pt-8 ">
            <div class=" text-white flex justify-center items-center  w-full mb-4 " ><h3>به حساب خود وارد شوید</h3><IconsLockIcon></IconsLockIcon></div>


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
            <input type="text" class=" w-full block rounded text-right h-9 pr-4  text-white outline-none border-blue-900 bg-slate-950 border-2" placeholder="ایمیل">
            <input type="text" class=" w-full block rounded text-right h-9 pr-4 mt-2 text-white outline-none border-blue-900 bg-slate-950 border-2" placeholder="کلمه عبور" >
        </div>
        <div class=" w-4/5 mr-auto ml-auto h-auto mt-2">
            <button class=" h-9 text-yellow-500 flex justify-center items-center w-full border-l-2 border-r-2 border-b-2 rounded border-yellow-500"><h3>ورود</h3><IconsEnterIcon class=" ml-1 mt-2"></IconsEnterIcon></button>
        </div>
        <div class=" flex w-4/5 h-auto ml-auto mr-auto justify-between items-center mt-3">
            <div class=""><button class=" text-black font-light bg-yellow-500 border-2 border-yellow-500 rounded pl-2 pr-2 pt-1 pb-1 hover:bg-white hover:animate-bounce ">فراموشی رمز عبور</button></div>
            <div class=" text-white"><label for="save" class=" font-light">مرا به خاطر بسپار</label> <input value="saveUser" type="checkbox" name="save" ></div>
        </div>
        <div class=" flex justify-end mt-2">
            <NuxtLink to="/register" class=" text-yellow-500">ثبت نام</NuxtLink>
            <h3 class=" text-blue-900 text-right">قبلا ثبت نام نکرده اید؟</h3>
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
.signin-container{
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