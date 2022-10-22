export default {
    getPokemons({ commit }, pokemons) {
        commit('GET_POKEMON', pokemons)
    },
    setIdPokemons({ commit }, idPokemon) {
        commit('SET_ID_POKEMON', idPokemon)
    },
    getEvolutionChains({ commit }, evolutionChains) {
        commit('GET_EVOLUTION_CHAINS', evolutionChains)
    },
    getIdEvolutionChains({ commit }, idEvolutionChains) {
        commit('GET_ID_EVOLUTION_CHAINS', idEvolutionChains)
    },
    getOriginalPokemons({ commit }, originalPokemons) {
        commit('GET_ORIGINAL_POKEMONS', originalPokemons)
    },
    getPokemonsEvolutions({ commit }, pokemonsEvolutionsChains) {
        commit('GET_POKEMON_EVOLUTIONS', pokemonsEvolutionsChains)
    }
}