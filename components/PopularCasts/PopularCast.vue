<template>
  <div class="parent mt-6 bg-black relative ">
    <div class=" text-right pr-5 pb-5 text-yellow-500 font-bold">بازیگران معروف</div>
    <div class="carousel overflow-x-hidden h-44 pt-2    " @mouseleave="up" :style="{userSelect:userSelect, scrollBehavior: scrollBehavior}" @mousedown="down"  @mouseup="up" @mousemove="move" ref="carousel">
     <div class="cards     " >
      
<PopularCastsPopularCastCard v-for="(item, index) in cast" :key="index" :src="item.src" :name="item.name"></PopularCastsPopularCastCard>
</div> 
<button @click="scrollLeft"  class="absolute prev text-yellow-500 text-3xl"><IconsPrevIcon></IconsPrevIcon></button>
<button @click="scrollRight" class="  absolute next text-yellow-500 text-3xl"><IconsNextIcon></IconsNextIcon></button>
    </div>
    
   
    </div>
    
</template>

<script setup>

  import {ref } from "vue";
const cast = ref([
  { name: 'Yoo-in-soo', src: "../../public/photos/popularCast/1.jpg" },
  { name: 'Wi-ha-jun', src: "../../public/photos/popularCast/2.jpg" },
  { name: 'Peter franzen', src: "../../public/photos/popularCast/3.jpg" },
  { name: 'Joen bae-soo', src: "../../public/photos/popularCast/4.jpg" },
  { name: 'Alex hogh anderson', src: "../../public/photos/popularCast/5.jpg" },
  { name: 'Jordan patrick smith', src: "../../public/photos/popularCast/6.jpg" },
  { name: 'Marco ils', src: "../../public/photos/popularCast/7.jpg" },
  { name: 'Danila kozlovsky', src: "../../public/photos/popularCast/8.jpg" },
  { name: 'Georgia hirst', src: "../../public/photos/popularCast/9.jpg" },
  { name: 'Akio otsuka', src: "../../public/photos/popularCast/10.jpg" },
  { name: 'Lee ki-woo', src: "../../public/photos/popularCast/11.jpg" },
  { name: 'Lee yi-kyong', src: "../../public/photos/popularCast/12.jpg" },
  { name: 'lee ki-young', src: "../../public/photos/popularCast/13.jpg" },
  { name: 'kensho one', src: "../../public/photos/popularCast/14.jpg" },
  { name: 'moon ga young', src: "../../public/photos/popularCast/15.jpg" },
  { name: 'yoto  uemora', src: "../../public/photos/popularCast/16.jpg" },
  { name: 'yang yang', src: "../../public/photos/popularCast/17.jpg" },
  { name: 'carman lee', src: "../../public/photos/popularCast/18.jpg" },
  { name: 'Zhao lusi', src: "../../public/photos/popularCast/19.jpg" },
  { name: 'Xuan lu', src: "../../public/photos/popularCast/20.jpg" },




])
  const dragStart=ref(false)
  const carousel=ref(null)
const products=ref(null)
const userSelect=ref('auto')
const scrollBehavior=ref('auto')
function down() {
  dragStart.value=true
  
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
.cards{
  width: 5000px;

display: flex;
   justify-content: space-evenly;
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