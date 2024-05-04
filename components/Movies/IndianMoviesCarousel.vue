<template>
    <div >
<MoviesMovieCarousel :title="title" :movies="movies"></MoviesMovieCarousel>

    </div>
</template>

<script setup>
const title=ref('فیلم های هندی')
const movies = ref([
  {  rate:8.1 , dubbed: true,src: "/photos/IndianMovies/1.webp" },
  {  rate:7.2 , dubbed: true,src: "/photos/IndianMovies/2.webp" },
  {  rate:6.5 , dubbed: true,src: "/photos/IndianMovies/3.webp" },
  {  rate:8 , dubbed: true,src: "/photos/IndianMovies/4.webp" },
  {  rate:8.5 , dubbed: true,src: "/photos/IndianMovies/5.webp" },
  {  rate:6.7, dubbed: true,src: "/photos/IndianMovies/6.webp" },
  {  rate:8.9 , dubbed: true,src: "/photos/IndianMovies/7.webp" },
  {  rate:7.3 , dubbed: true,src: "/photos/IndianMovies/8.webp" },
  {  rate:7.6, dubbed: true,src: "/photos/IndianMovies/9.webp" },
  {  rate:8.6 , dubbed: true,src: "/photos/IndianMovies/10.webp" },
  {  rate:8.3 , dubbed: true,src: "/photos/IndianMovies/11.webp" },
  {  rate:8.5 , dubbed: true,src: "/photos/IndianMovies/12.webp" },
  {  rate:6.7, dubbed: true,src: "/photos/IndianMovies/13.webp" },
  {  rate:7.6, dubbed: true,src: "/photos/IndianMovies/14.webp" },
  {  rate:9.5 , dubbed: true,src: "/photos/IndianMovies/15.webp" },
  

])
</script>

