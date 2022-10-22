export default {
    GET_POKEMON(state, payload) {
        state.pokemons = payload
    },
    GET_POKEMON_EVOLUTIONS(state, payload) {
        state.pokemonsEvolutionsChains = payload
    },
    SET_ID_POKEMON(state,payload) {
        state.idPokemon = payload
    },
    GET_EVOLUTION_CHAINS(state, payload) {
        state.evolutionChains = payload
    },
    GET_ID_EVOLUTION_CHAINS(state, payload) {
        state.idEvolutionChains = payload
    },
    GET_ORIGINAL_POKEMONS(state, payload) {
        state.originalPokemons = payload
    },
}