<template>
    <div class="wrapper z-30  ">
    <div class="signin-container sm:w-96 w-4/5 mr-auto ml-auto bg-black  mb-7 p-2">
        <div class=" flex justify-between items-center ">
            <div class=" text-white flex justify-center items-center  w-full " ><h3>به حساب خود وارد شوید</h3><IconsLockIcon></IconsLockIcon></div>
            <button @click="close_signin" class="close_signin flex justify-center items-center rounded w-10 h-10 bg-yellow-500 hover:animate-pulse " ><IconsCloseIcon class=" text-white " ></IconsCloseIcon></button>

        </div>
        <div class=" text-sm w-4/5 sm:text-lg ml-auto mr-auto flex items-center sm:block justify-between  ">
            <button class=" h-8 rounded w-full  bg-blue-800 text-white flex justify-center items-center mt-2"><h3 >فیس بوک</h3><IconsFaceBookIcon class=" ml-1"></IconsFaceBookIcon></button>
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
        <div class=" flex sm:w-4/5 h-auto ml-auto mr-auto justify-between items-center mt-3">
            <div class=""><button class=" text-black font-light bg-yellow-500 border-2 border-yellow-500 rounded pl-2 pr-2 pt-1 pb-1 hover:bg-white hover:animate-bounce text-xs sm:text-sm ">فراموشی رمز عبور</button></div>
            <div class=" text-white"><label for="save"  class=" font-light text-sm">مرا به خاطر بسپار</label> <input value="saveUser" type="checkbox" name="save" ></div>
        </div>
        <div class=" flex justify-end mt-2">
            <NuxtLink to="/register" class=" text-yellow-500">ثبت نام</NuxtLink>
            <h3 class=" text-blue-900 text-right">قبلا ثبت نام نکرده اید؟</h3>
        </div>
    </div>
    </div>
</template>

<script setup>
import { showSignin } from "~/store/showSignin";
const signIn_store = showSignin()
const animated=ref(null)
function close_signin() {
    signIn_store.hideSignin = true
    animated.value = 'fade'
    document.querySelector('.signin-container').classList.toggle('fade')
     setTimeout(() => {
            signIn_store.showSignIn = false

     }, 2000);
}

</script>

<style  scoped>
.fade{
    animation: signin-fade 1s linear 0s 1 forwards ;
}
@keyframes signin-fade {
    from{opacity: 1;}
    to{opacity:0; }
}
/* @media only screen and (max-width: ;) {
    
} */
.wrapper{
    width: 100%;
    height: 100vh;
    


}
</style>