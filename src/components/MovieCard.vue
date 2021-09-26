<template>
    <div class="w-full">
        <div class="w-full rounded-t-md h-56">
            <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right hover:opacity-25">
                <span class="text-base tracking-wid font-bold border-b font-sans">
                    {{formatMovie.day}}
                </span>
                <span class="text-xs tracking-wide font-bold uppercase block font-sans">
                    {{formatMovie.month}}
                </span>
            </div>

            
        </div>
        <div class="py-8 px-4 bg-secondary_brown text-primary_pink rounded-b-md hover:opacity-25 group-hover:opacity-25 ">
                <span class="block text-lg font-bold tracking-wide">
                    {{movie.title}}
                </span>
                <span class="text-sm block w-full">
                    {{formatMovie.desc}}
                </span>
        </div>
    </div>
    <div class="absolute top-0 -left-full preview bg-gray-800 w-full h-full transition-all duration-300 
    flex flex-col justify-center items-center">
        <span class="text-3xl font-bold text-white tracking-wide leading-relax font-sans">
            {{movie.title}}
        </span>
        <div class="pt-8 text-center">
            <button @click="handleClick(movie.id)" class="text-center rounded-lg p-4 bg-white text-gray-700 text-lg">
                More detail
            </button>
        </div>
    </div>
</template>

<script>
import {computed} from '@vue/runtime-core'
import {useRouter} from 'vue-router'

export default {
    props: ['movie'],
    setup (props) {
        const formatMovie = computed(() => {
            const movie_date = new Date(props.movie.created)

            const day = movie_date.getDate()
            const month = movie_date.toLocaleString('default', {month: 'short'})

            const desc = props.movie.description.substring(0, 50)

            return {desc, month, day}
        })

        const router = useRouter()

        const handleClick = (id) => {
            router.push({name: 'Detail', params: {
                id: id
            }})
        }

        return {formatMovie, handleClick}
    }
}
</script>

<style>
    .group:hover .preview {
        left: 0%;
    }
</style>