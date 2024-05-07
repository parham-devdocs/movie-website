<template>
    <div class=" flex w-3/4 mr-auto ml-auto mt-5 ">
    <div class="container w-full hidden sm:flex   items-center justify-end" >
<button v-for="(item, index) in items" @click="filter" :key="index" class=" rounded bg-black w-fit text-yellow-500 p-2 h-fit border-2 border-yellow-500">{{ item.title }}</button>

    </div>
    <div class=" flex sm:hidden w-2/3 ">

                <div class=" bg-black text-yellow-500 flex justify-center items-center h-8 w-8 border-2 border-yellow-500 rounded"><IconsCalenderIcon></IconsCalenderIcon></div>
                    <div class="bg-black text-yellow-500 flex justify-center items-center h-8 w-8 border-2 border-yellow-500 rounded"><IconsEyeIcon></IconsEyeIcon></div>
            <div class="bg-black text-yellow-500 flex justify-center items-center h-8 w-8 border-2 border-yellow-500 rounded"><IconsStarIcon></IconsStarIcon></div>
            <div class="bg-black text-yellow-500 flex justify-center items-center h-8 w-8 border-2 border-yellow-500 rounded"><IconsImdbIcon></IconsImdbIcon></div>
            <div class="bg-black text-yellow-500 flex justify-center items-center h-8 w-8 border-2 border-yellow-500 rounded"><IconsAlphabetIcon></IconsAlphabetIcon></div>
            <div class="bg-black text-yellow-500 flex justify-center items-center h-8 w-8 border-2 border-yellow-500 rounded"><IconsClockIcon></IconsClockIcon></div>
    


</div>
    <div class=" text-xs sm:text-sm sm:ml-4 sm:w-36 flex items-center border-2 rounded border-yellow-500  text-yellow-500" >
        <select class=" bg-black w-full h-full " placeholder="همه ژانر ها" @change="dosth" v-model="filter" >

            <option v-for="(item, index) in selection" :key="index"  :value="item.value"   >{{ item.lable }}</option>
            
        </select></div>
</div>

</template>

<script setup>
import { formatTimeAgo } from '@vueuse/core';
import dayjs from 'dayjs';
import { movies } from '~/store/movies';
import { showSignin } from '~/store/showSignin';
const movies_store=movies()
const movies_data=(null)
const items = ref([
    { title: 'جدید ترین ها' },
    { title: 'بیشترین نمایش ها' },
    { title: 'امتیاز کاربران'},
    { title: 'IMdbامتیاز'},
    { title: 'عنوان' },
    { title: 'سال ساخت' }])
const selection = ref([
    { lable: 'همه ژانر ها', value: 'all',id:1 },
    {lable:'فانتزی',value:'fantasy',id:2},
    {lable:'فیلم دوبله فارسی',value:'dubbed_movie' ,id:3},
    {lable:'سریال دوبله فارسی',value:'dubbed_series' ,id:4},
    {lable:'scifi & fantasy',value:'scifi_adventure' ,id:5},
    {lable:'Action& Adventure',value:'action_adventure',id:6},
    {lable:'Adventure',value:'adventure', id:7},
    {lable:'War',value:'war',id:8},
    {lable:'Horro',value:'horror' ,id:9}


])
const get_date_diff = (date) => {
const days= dayjs().diff(date,'days')
    return days
}

onMounted(() => {
    movies_data.value=movies_store.movies
    console.log(movies_data.value);
    
})

const filter=()=>{console.log('filter');}
const dosth = () => {
      
    movies().add_remaining_days()
    console.log(movies());

}
</script>

<style lang="scss" scoped>

</style>
















