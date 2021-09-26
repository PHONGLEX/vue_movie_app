import {ref} from '@vue/reactivity'

const movies = ref([])
const error  = ref(null)
const next = ref(null)
const prev = ref(null)

const fetchMovies = async (uri) => {
    error.value = null

    try {
        const res = await fetch(uri)
        if (!res.ok) {
            throw Error("Sorry could not fetch the movies ... Please try again later")
        }
        const data = await res.json()

        const results = []

        data.results.forEach(movie => {
            results.push(movie)
        })

        next.value = data.next
        prev.value = data.previous

        movies.value = results
    } catch (error) {
        console.log(error.message)
        error.value = error.message
    }
}

const getMovies = () => {
    return {movies, error, fetchMovies, next, prev}
}

export default getMovies;