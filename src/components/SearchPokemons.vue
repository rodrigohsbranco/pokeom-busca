<template>
  <div>
    <v-row class="mx-5">
      <v-col cols="11" class="d-flex">
        <v-text-field
          v-model="pokemon"
          clearable
          solo
          placeholder="Quem é esse Pokémon?"
          @keyup.enter="searchPokemon(pokemon)"
        ></v-text-field>
        <v-btn
          @click="searchPokemon(pokemon)"
          height="49"
          large
          class="mx-2"
          dark
          color="pink"
        >
          <v-icon large dark> mdi-magnify </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <CardPokemon />
  </div>
</template>

<script>
import CardPokemon from './CardPokemon.vue'
import { searchPokemons, setIdPokemons, setEvolutionChains, searchPokemonsEvolutionChains } from '@/api/pokeApi'
import { mapState } from 'vuex'

export default {
  components: { CardPokemon },

  computed: {
    ...mapState({
      pokemons: store => store.state.pokemons,
    })
  },
  data() {
    return {
      pokemon: "",
    }
  },
  methods: {
    async searchPokemon(pokemon) {
      await searchPokemons(pokemon)
      await setIdPokemons()
      await setEvolutionChains()
      await searchPokemonsEvolutionChains()
    }
  }
}
</script>