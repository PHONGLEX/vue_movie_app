<template>
  <section class="md:w-11/12 lg:w-4/6 mx-auto pb-10">
    <SearchForm @SearchOccur="handleSearch"/>

    <div class="mt-6">
      <h2 class="text-gray-50 text-2xl font-semibold mb-5 md:ml-0">
        <span v-if="!search">Movies: </span>
        <span v-else>Search Results: </span>
      </h2>

      <div>
        <MovieList :movies="movies" />
      </div>
      <div class="flex justify-center items-center my-5" v-if="next || prev">
        <button v-if="prev" @click="handleClick('prev')" class="text-center rounded-lg p-4 mr-2 bg-white font-bold text-lg">
          &lt;Prev
        </button>
        <button v-if="next" @click="handleClick('next')" class="text-center rounded-lg p-4 mr-2 bg-white font-bold text-lg">
          Next&gt;
        </button>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import SearchForm from '@/components/SearchForm.vue'
import MovieList from '@/components/MovieList.vue'
import getMovies from '@/composible/getMovies'
import {ref, watchEffect} from 'vue'

export default {
  name: 'Home',
  components: {
    SearchForm,
    MovieList
  },
  setup() {
    const uri = ref('http://localhost:8000/api/all_movies/')
    const search = ref(false)

    const handleSearch = (search_value) => {
      if (search_value.length) {
        const new_uri = `http://localhost:8000/api/all_movies/?title=${search_value}`
        uri.value = new_uri
        search.value = true
      } else {
        const new_uri = 'http://localhost:8000/api/all_movies/'
        uri.value = new_uri
        search.value = false
      }
      
    }

    const {movies, error, fetchMovies, next, prev} = getMovies()

    watchEffect(async() => {
      await fetchMovies(uri.value)
      console.log(movies.value)
    })

    const handleClick = (type) => {
      if (type === 'prev') {
        uri.value = prev.value
      } else {
        uri.value = next.value
      }
    }

    return {handleSearch, movies, handleClick, next, prev, search}
  }
}
</script>
