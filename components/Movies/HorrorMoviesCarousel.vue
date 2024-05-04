<template>
    <div >
<MoviesMovieCarousel :title="title" :movies="movies"></MoviesMovieCarousel>

    </div>
</template>

<script setup>
const title=ref('ترسناک ')
const movies = ref([
  {  rate:9.1 , dubbed: true,src: "/photos/HorrorMovies/1.webp" },
  {  rate:6.2 , dubbed: true,src: "photos/HorrorMovies/2.webp" },
  {  rate:6.5 , dubbed: true,src: "photos/HorrorMovies/3.webp" },
  {  rate:7 , dubbed: true,src: "photos/HorrorMovies/4.webp" },
  {  rate:6.5 , dubbed: true,src: "photos/HorrorMovies/5.webp" },
  {  rate:8.7, dubbed: true,src: "photos/HorrorMovies/6.webp" },
  {  rate:8.4 , dubbed: true,src: "photos/HorrorMovies/7.webp" },
  {  rate:7.2 , dubbed: true,src: "photos/HorrorMovies/8.webp" },
  {  rate:6.6, dubbed: true,src: "photos/HorrorMovies/9.webp" },
  {  rate:5.6 , dubbed: true,src: "photos/HorrorMovies/10.webp" },
  {  rate:9.3 , dubbed: true,src: "photos/HorrorMovies/11.webp" },
  {  rate:6.5 , dubbed: true,src: "photos/HorrorMovies/12.webp" },
  {  rate:5.7, dubbed: true,src: "photos/HorrorMovies/13.webp" },
  {  rate:7.6, dubbed: true,src: "photos/HorrorMovies/14.webp" },
  {  rate:9.5 , dubbed: true,src: "photos/HorrorMovies/15.webp" },
  




])
</script>

