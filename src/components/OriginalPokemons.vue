<template>
    <v-row class="mt-3">
      <v-col class="d-flex flex-wrap">
        <v-card
          elevation="9"
          class="mx-4 my-2 px-2"
          max-width="230"
          max-height="400"
          v-for="pokemon in originalPokemons" :key="pokemon.name"
        >
          
          <v-img
            max-width="200"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${getIdPokemons(pokemon)}.png`"
          ></v-img>
          <p class="text-center">{{ pokemon.name }}</p>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import { mapState } from "vuex";
import { showOriginalPokemons } from '@/api/pokeApi'

export default {
  computed: {
    ...mapState({
      originalPokemons: (state) => state.store.originalPokemons,
    }),
  },

  data() {
    return {
      dialog: false,
    }
  },

  methods: {
    getIdPokemons(pokemon) {
      return pokemon.url.split('/')[6]
    }
  },

  mounted() {
    showOriginalPokemons()
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap");


.cardPokemon__font {
  color: #fff;
}

.cardPokemon__img {
  margin-left: 7.5rem;
}
</style>
