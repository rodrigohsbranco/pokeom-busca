<template>
  <div class="my-5">
    <SearchPokemons />
  </div>
</template>

<script>
import SearchPokemons from '../components/SearchPokemons.vue';
export default {
  name: "Home",

  components: { SearchPokemons },
};
</script>