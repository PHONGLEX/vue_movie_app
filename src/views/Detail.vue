<template>
    <h2 class="text-center font-semibold text-primary_pink text-5xl">
        {{movie.title}}
    </h2>
    <div class="flex flex-col md:flex-row h-full mx-10 pb-20">
        <div class="w-10/12 md:w-5/12 mx-auto flex justify-center items-center">
            <div class="w-82 h-74 bg-primary_pink rounded-lg overflow-hidden">
                <img :src="movie.poster" class="w-full h-full" alt="movie poster" >
            </div>
        </div>
        <div class="w-full md:w-8/12 ml-3 mx-auto text-primary_pink text-lg font-semibold">
            <h2>
                Description:
            </h2>
            <p class="font-normal">
                {{movie.description}}
            </p>
            <h2>
                Release date: {{movie.created}}
            </h2>
            <h2>
                Rating: {{movie.rated}}
            </h2>
            <h2>
                Genre: {{movie.genre?.name}}
            </h2>
            <h2>
                Duration: {{movie.duration}}
            </h2>
            <h2>
                Director: {{movie.director}}
            </h2>
            <h2>
                Actors
            </h2>
            <p class="font-normal">
                {{movie.actors}}
            </p>
            <h2>
                Language: {{movie.language}}
            </h2>
        </div>
    </div>
</template>

<script>
import getSingleMovie from '@/composible/getSingleMovie'
import {watchEffect} from 'vue'

export default {
    props: ['id'],
    setup (props) {
        const {error, movie, fetchMovie} = getSingleMovie()
        watchEffect(async () => {
            await fetchMovie(props.id)
        })
        return {error, movie}
    }
}
</script>

<style lang="scss" scoped>

</style>