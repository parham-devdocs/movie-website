<template>
    <div>
        <MoviesHeaderFilter></MoviesHeaderFilter>
    </div>
</template>

<script setup>
import { showSignin } from '~/store/showSignin';


onMounted(() => {
    showSignin().hideSignin=true
})
</script>

<style lang="scss" scoped>

</style>