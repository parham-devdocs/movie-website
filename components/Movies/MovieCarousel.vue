<template>
  <div class="parent mt-6 bg-black relative">
    <div class=" flex justify-between items-center">
          <nuxt-link to="#"><IconsListIcon class=" text-yellow-500"></IconsListIcon></nuxt-link>
    <div class=" text-right pr-5 pb-5 text-yellow-500 font-bold">{{ title  }}</div>
    </div>
    <div class="carousel overflow-x-hidden h-80 pt-2" @touchstart.prevent="down" @touchend.prevent="up"  @mouseleave="up" :style="{userSelect:userSelect, scrollBehavior: scrollBehavior}" @mousedown.prevent="down"  @mouseup.prevent="up" @mousemove.prevent="move" ref="carousel">
     <div class="cards" >

      <a href="#" v-for="(movie, index) in movies" :key="index" class=" ml-7 h-72 w-56 " >
    <div class=" flex w-auto h-full flex-col items-center bg-black relative " >
    <img :src="movie.src"  draggable="false" class=" h-full w-full">
    <div class="movie-card-detail flex bg-white rounded-l-lg w-20 absolute">
      <div v-if="movie.dubbed" class=" w-12 text-center"><h4>دوبله</h4></div>
      <div v-else><h4 class="">زبان اصلی</h4></div>
      <div class=" bg-yellow-500 rounded-l-lg w-9 text-center"><h4 class=" text-white">{{ movie.rate }}</h4></div>

    </div>

    </div>
    </a>


</div> 
<button @click="scrollLeft"  class="absolute prev text-yellow-500 text-3xl"><IconsPrevIcon></IconsPrevIcon></button>
<button @click="scrollRight" class="  absolute next text-yellow-500 text-3xl"><IconsNextIcon></IconsNextIcon></button>
    </div>
    
   
    </div>
    
</template>

<script setup>

  import {ref } from "vue";
const props= defineProps({
  movies: Array,
  title:String
})
  const dragStart=ref(false)
  const carousel=ref(null)
const products=ref(null)
const userSelect=ref('auto')
const scrollBehavior=ref('auto')
function down() {
  console.log('down');
  dragStart.value=true
  
}
function up() {
  console.log('up');
  dragStart.value=false
}
function move(event) {
  console.log('move');
  if (dragStart.value) {
  console.log('move while dragging');
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
display: flex;
width: max-content;
  align-items: center;
   
}
.card{
  margin-left: 30px;
}


.carousel::-webkit-scrollbar {
    display: none;
}
.prev{
top: 50%;
left: 10px;
}
.next{
  top: 50%;
  right: 10px;
}
.movie-card-detail{
  top: 8%;
  right: 0%;
}
</style>

