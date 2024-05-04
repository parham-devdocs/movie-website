<template>
    <div >
<MoviesMovieCarousel :title="title" :movies="movies"></MoviesMovieCarousel>

    </div>
</template>

<script setup>
const title=ref('محبوب ترین ها')
const movies = ref([
  {  rate:8.1 , dubbed: true,src: "/photos/bestmovies/others/1.webp" },
  {  rate:7.2 , dubbed: true,src: "/photos/bestmovies/others/2.webp" },
  {  rate:6.5 , dubbed: true,src: "/photos/bestmovies/others/3.webp" },
  {  rate:8 , dubbed: true,src: "/photos/bestmovies/others/4.webp" },
  {  rate:8.5 , dubbed: true,src: "/photos/bestmovies/others/5.webp" },
  {  rate:6.7, dubbed: true,src: "/photos/bestmovies/others/6.webp" },
  {  rate:8.9 , dubbed: true,src: "/photos/bestmovies/others/7.webp" },
  {  rate:7.3 , dubbed: true,src: "/photos/bestmovies/others/8.webp" },
  {  rate:7.6, dubbed: true,src: "/photos/bestmovies/others/9.webp" },
  {  rate:8.6 , dubbed: true,src: "/photos/bestmovies/others/10.webp" },
  {  rate:8.3 , dubbed: true,src: "/photos/bestmovies/others/11.webp" },
  {  rate:8.5 , dubbed: true,src: "/photos/bestmovies/others/12.webp" },
  {  rate:6.7, dubbed: true,src: "/photos/bestmovies/others/13.webp" },
  {  rate:7.6, dubbed: true,src: "/photos/bestmovies/others/14.webp" },
  {  rate:9.5 , dubbed: true,src: "/photos/bestmovies/others/15.webp" },
  {  rate:5.4 , dubbed: true,src: "/photos/bestmovies/others/16.webp" },
  {  rate:8 , dubbed: true,src: "/photos/bestmovies/others/17.webp" },
  {  rate:5.8 , dubbed: true,src: "/photos/bestmovies/others/18.webp" },
  {  rate:6.7, dubbed: true,src: "/photos/bestmovies/others/19.webp" },
  { rate: 8.3, dubbed: true, src: "/photos/bestmovies/others/20.webp" },
  {  rate:8.2 , dubbed: true,src: "/photos/bestmovies/others/21.webp" },
  {  rate:8.5 , dubbed: true,src: "/photos/bestmovies/others/22.webp" },
  {  rate:6.2 , dubbed: true,src: "/photos/bestmovies/others/23.webp" },
  {  rate:8.2 , dubbed: true,src: "/photos/bestmovies/others/24.webp" },
  {  rate:8.2 , dubbed: true,src: "/photos/bestmovies/others/25.webp" },
  {  rate:8.2 , dubbed: true,src: "/photos/bestmovies/others/26.webp" },
  {  rate:8.1 , dubbed: true,src: "/photos/bestmovies/others/27.webp" },
  {  rate:8.5 , dubbed: true,src: "/photos/bestmovies/others/28.webp" },
  {  rate:8.7 , dubbed: true,src: "/photos/bestmovies/others/29.webp" },
  {  rate:6.5 , dubbed: true,src: "/photos/bestmovies/others/30.webp" },







])
</script>

