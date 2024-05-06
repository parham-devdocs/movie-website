<template>
    
    <div>
<PopularCastsPopularCast></PopularCastsPopularCast>
<MoviesBestMoviesCarousels></MoviesBestMoviesCarousels>
<MoviesHorrorMoviesCarousel></MoviesHorrorMoviesCarousel>
<MoviesNewestMoviesCarousel></MoviesNewestMoviesCarousel>
<MoviesIndianMoviesCarousel></MoviesIndianMoviesCarousel>
<MoviesSerialsCarousel></MoviesSerialsCarousel>
    </div>
    
</template>

<script setup>
import { onMounted } from 'vue'
import  { showSignin } from '~/store/showSignin';

const hide=showSignin()

onMounted(() => {
    hide.hideSignin=true
}),








useHead(
    {
        title:'خانه'
    }
)
</script>

<style scoped>

</style>