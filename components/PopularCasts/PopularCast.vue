<template>
  <div class="parent mt-6 bg-black relative " :style="{backgroundColor:background}">
    <div class=" flex items-center justify-between">
      <nuxt-link to="#"><IconsListIcon class=" text-yellow-500"></IconsListIcon></nuxt-link>
    <div class=" text-right pr-5 pb-5 text-yellow-500 font-bold">بازیگران معروف</div>
    </div>
    <div class="carousel overflow-x-hidden h-44 pt-2" @touchstart.prevent="down" @touchend.prevent="up" @mouseleave="up" :style="{userSelect:userSelect, scrollBehavior: scrollBehavior}" @mousedown.prevent="down"  @mouseup="up" @mousemove="move" ref="carousel">
     <div class="cards" >
      
<PopularCastsPopularCastCard class=" ml-8"  v-for="(item, index) in cast" :key="index" :src="item.src" :name="item.name"></PopularCastsPopularCastCard>
</div> 
<button @click="scrollLeft"  class="absolute prev text-yellow-500 text-3xl"><IconsPrevIcon></IconsPrevIcon></button>
<button @click="scrollRight" class="  absolute next text-yellow-500 text-3xl"><IconsNextIcon></IconsNextIcon></button>
    </div>
    
   
    </div>
    
</template>

<script setup>

import { ref } from "vue";
import { darkmode_lightmode_handler } from '~/store/mode';
const background=ref('white')

const colorMode = darkmode_lightmode_handler()

watch(colorMode, () => {
    background.value = colorMode.backgoundColor
    
})
const cast = ref([
  { name: 'Yoo-in-soo', src: "/photos/popularCast/1.jpg" },
  { name: 'Wi-ha-jun', src: "/photos/popularCast/2.jpg" },
  { name: 'Peter franzen', src: "/photos/popularCast/3.jpg" },
  { name: 'Joen bae-soo', src: "/photos/popularCast/4.jpg" },
  { name: 'Alex hogh anderson', src: "/photos/popularCast/5.jpg" },
  { name: 'Jordan patrick smith', src: "/photos/popularCast/6.jpg" },
  { name: 'Marco ils', src: "/photos/popularCast/7.jpg" },
  { name: 'Danila kozlovsky', src: "/photos/popularCast/8.jpg" },
  { name: 'Georgia hirst', src: "/photos/popularCast/9.jpg" },
  { name: 'Akio otsuka', src: "/photos/popularCast/10.jpg" },
  { name: 'Lee ki-woo', src: "/photos/popularCast/11.jpg" },
  { name: 'Lee yi-kyong', src: "/photos/popularCast/12.jpg" },
  { name: 'lee ki-young', src: "/photos/popularCast/13.jpg" },
  { name: 'kensho one', src: "/photos/popularCast/14.jpg" },
  { name: 'moon ga young', src: "/photos/popularCast/15.jpg" },
  { name: 'yoto  uemora', src: "/photos/popularCast/16.jpg" },
  { name: 'yang yang', src: "/photos/popularCast/17.jpg" },
  { name: 'carman lee', src: "/photos/popularCast/18.jpg" },
  { name: 'Zhao lusi', src: "/photos/popularCast/19.jpg" },
  { name: 'Xuan lu', src: "/photos/popularCast/20.jpg" },




])
  const dragStart=ref(false)
  const carousel=ref(null)
const products=ref(null)
const userSelect=ref('auto')
const scrollBehavior=ref('auto')
function down() {
  dragStart.value=true
  
}

function drop(e) {
  console.log(e);
  e.preventDefault()
}
function up() {
  dragStart.value=false
}
function move(event) {
if (dragStart.value) {
  event.movementX> 0 ? carousel.value.scrollLeft-=10 : carousel.value.scrollLeft+=10}
  userSelect.value='none'
}


  function scrollLeft() {
    carousel.value.scrollLeft-=200
    scrollBehavior.value='smooth'
  }
  function scrollRight() {
    carousel.value.scrollLeft+=200
    scrollBehavior.value='smooth'

  }
</script>

<style scoped>
.parent{
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}
.cards{
  width:max-content;

display: flex;
   justify-content:space-between;
   align-items: center;
   
}
.card{
  margin-left: 30px;
}


.carousel::-webkit-scrollbar {
    display: none;
}
.prev{
top: 40%;
left: 10px;
}
.next{
  top: 40%;
  right: 10px;
}
</style>