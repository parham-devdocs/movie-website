<template>
    <div >
<MoviesMovieCarousel :title="title" :movies="movies"></MoviesMovieCarousel>

    </div>
</template>

<script setup>
const title=ref('جدید ترین ها')
const movies = ref([
  {  rate:5.4 , dubbed: true,src: "/photos/newestMovies/1.webp" },
  {  rate:6.2 , dubbed: true,src: "/photos/newestMovies/2.webp" },
  {  rate:6.5 , dubbed: true,src: "/photos/newestMovies/3.webp" },
  {  rate:8.6 , dubbed: true,src: "/photos/newestMovies/4.webp" },
  {  rate:5.5 , dubbed: true,src: "/photos/newestMovies/5.webp" },
  {  rate:6.9, dubbed: true,src: "/photos/newestMovies/6.webp" },
  {  rate:8.2 , dubbed: true,src: "/photos/newestMovies/7.webp" },
  {  rate:5.3 , dubbed: true,src: "/photos/newestMovies/8.webp" },
  {  rate:7.8, dubbed: true,src: "/photos/newestMovies/9.webp" },
  {  rate:8.6 , dubbed: true,src: "/photos/newestMovies/10.webp" },
  {  rate:8.3 , dubbed: true,src: "/photos/newestMovies/11.webp" },
  {  rate:8.5 , dubbed: true,src: "/photos/newestMovies/12.webp" },
  {  rate:6.7, dubbed: true,src: "/photos/newestMovies/13.webp" },
  {  rate:7.6, dubbed: true,src: "/photos/newestMovies/14.webp" },
  {  rate:9.5 , dubbed: true,src: "/photos/newestMovies/15.webp" },
  
])
</script>

