<template>
  <div class="bg-primary_brown min-h-screen font-primary_famil pt-28">
    <nav class="w-full z-50 fixed top-0 left-0 bg-primary_gold py-4 px-10 flex justify-between items-center">
      <h2 class="font-secondary text-xl font-semibold text-gray-100">
        <router-link to='/'>
          <span class="text-primary_green">DjangoVue</span> Movie

        </router-link>
      </h2>
      <h2 class="font-secondary text-xl font-semibold text-gray-100">
        <router-link :to="{name: 'Add'}">
          Add Movie 
        </router-link>
      </h2>
    </nav>
    <router-view/>

  </div>
</template>

<style>

</style>
