import {ref} from 'vue'

const movie = ref(null)
const error = ref(null)

const fetchMovie = async (id) => {
    error.value = null
    try {
        const res = await fetch(`http://localhost:8000/api/movie/${id}/`)

        if (!res.ok) {
            throw Error('Sorry could not fetch the movie ... Try refreshing the page')
        }

        const data = await res.json()

        movie.value = data
    } catch (err) {
        error.value = err.message
    }
}

const getSingleMovie = () => {
    return {movie,error,fetchMovie}
}

export default getSingleMovie