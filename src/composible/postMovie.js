import {ref} from 'vue'

const error = ref(null)

const postData = async (form) => {
    error.value = null

    const fd = new FormData()

    fd.append('title', form.title)
    fd.append('description', form.description)
    fd.append('created', form.created)
    fd.append('rated', form.rated)
    fd.append('duration', form.duration)
    fd.append('genre', form.genre)
    fd.append('actors', form.actors)
    fd.append('country', form.country)
    fd.append('type', form.type)
    fd.append('director', form.director)
    fd.append('language', form.language)
    fd.append('poster', form.poster)

    const res = await fetch('http://localhost:8000/api/add_movie/', {
        method: 'post',
        body: fd
    })

    if (!res.ok) {
        throw Error("Sorry, there was an error ... please tour and try again")
    }
}

const postMovie = async (form) => {
    try {
        await postData(form)
    } catch (err) {
        error.value = err.message
    }

    return {error}
}

export default postMovie