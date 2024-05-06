<template>
   <div class="wrapper"></div>
    <div class=" relative ">
    <div  >
<Navbar class="" ></Navbar>
<!-- <div class=" bg-red-700 w-full h-20"></div> -->
    </div>

    <div class=" main grid grid-cols-10 " :style="{backgroundColor:background}"  >
        <div class="  col-span-8  " :style="{backgroundColor:background}">
             <slot/>
            <SignInTab class=" sigInTab " v-if="signin_value"></SignInTab>
            </div>

        <div class=" sidebar col-span-2   fixed">
            <SideBar></SideBar>

        </div>

    </div>
    </div>
   
</template>

<script setup>
import { ref } from 'vue'
import { darkmode_lightmode_handler } from '~/store/mode';
import {showSignin} from '~/store/showSignin'
const background = ref('white')
const signIn_store = showSignin()
const signin_value=ref(false)
const colorMode = darkmode_lightmode_handler()

watch(signIn_store, () => {
    if (signIn_store.hideSignin) {
        document.querySelector('.wrapper').classList.remove('hideBg')
                        console.log('removed');

    } else {
                document.querySelector('.wrapper').classList.add('hideBg')

    }
})

watch(signIn_store, () => {
    console.log(signIn_store.showSignIn);
    if (signIn_store.showSignIn===true) {
        signin_value.value = true;
        // document.querySelector('.wrapper').classList.add('hideBg')
        
    
    }
    else {
        signin_value.value = false
        console.log('no ');
                // document.querySelector('.wrapper').classList.remove('hideBg')

    }
})
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
.sigInTab {
    position: absolute;
    top: 200px;
    right: 37%;
        animation: signin-appear 2s linear 0s 1  forwards;
        animation-timing-function: ease-out;

}

@keyframes signin-appear {
    from{top: -10%}
    to{top: 10%;}
}
.hideBg{
    
    animation-name: changeOpacity;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    z-index: 20;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0, 0, 0);
    position: absolute;
}
@keyframes changeOpacity {
    from{opacity: 0;}
    to{ opacity: 0.5;}
}

@media only screen and (max-width: 1220px) {
  .main{
    display: block;
  }
  .sidebar{
    display: none;
  }

}

</style>