<template>
    <div >
<MoviesMovieCarousel  :title="title" :movies="movies"></MoviesMovieCarousel>

    </div>
</template>

<script setup>
const title=ref(' سریال ها ')
const movies = ref([
  {  rate:8.3 , dubbed: true,src: "/photos/serials/1.webp" },
  {  rate:7.2 , dubbed: true,src: "photos/serials/2.webp" },
  {  rate:5.5 , dubbed: true,src: "photos/serials/3.webp" },
  {  rate:9 , dubbed: true,src: "photos/serials/4.webp" },
  {  rate:7.5 , dubbed: true,src: "photos/serials/5.webp" },
  {  rate:6.7, dubbed: true,src: "photos/serials/6.webp" },
  {  rate:5.4 , dubbed: true,src: "photos/serials/7.webp" },
  {  rate:9.2 , dubbed: true,src: "photos/serials/8.webp" },
  {  rate:7.6, dubbed: true,src: "photos/serials/9.webp" },
  {  rate:5.5 , dubbed: true,src: "photos/serials/10.webp" },
  
])
</script>

