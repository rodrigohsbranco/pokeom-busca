import store from '@/store';
import axios from 'axios';

const axiosConfig = {
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 30000,
};
const Api = axios.create(axiosConfig);

export async function searchPokemons(pokemon) {
    await Api.get(`/pokemon/${pokemon.toLowerCase()}`)
        .then(res => {
            console.log('POKEMON', res.data)
            store.dispatch('getPokemons', res.data)
            store.dispatch('setIdPokemons', res.data.id)
        })

}

export async function setIdPokemons() {
    const idPokemon = store.state.store.idPokemon
    if (idPokemon != 0) {
        await Api.get(`/pokemon-species/${idPokemon}/`)
            .then(res => {
                let dataEvolutionChain = res.data.evolution_chain.url.split('/')[6]
                store.dispatch('getEvolutionChains', dataEvolutionChain)
            })
    }
}

export async function setEvolutionChains() {
    const idEvolutionChains = store.state.store.evolutionChains
    const idPokemon = store.state.store.idPokemon
    if (idEvolutionChains != 0) {
        await Api.get(`/evolution-chain/${idEvolutionChains}/`)
            .then(res => {
                let idEvolutions = res.data.chain.evolves_to

                idEvolutions.forEach(e => {
                    let idEvolutionChains = []
                    let idSpecies = e.species.url.split('/')[6]
                    if (idPokemon != idSpecies) {
                        idEvolutionChains.push(idSpecies)
                    }
                    let idEvolves = e.evolves_to[0].species.url.split('/')[6]
                    idEvolutionChains.push(idEvolves)
                    store.dispatch('getIdEvolutionChains', idEvolutionChains)
                })
            })
    } else {
        console.log('valor id pokemon', idEvolutionChains)
    }
}

export async function searchPokemonsEvolutionChains() {
    let idEvolutions = store.state.store.idEvolutionChains
    let evolutionsChains = []
    idEvolutions.forEach(async e => {
        await Api.get(`/pokemon/${e}`)
            .then(res => {
                evolutionsChains.push(res.data)
            })

    })
    store.dispatch('getPokemonsEvolutions', evolutionsChains)

}

export async function showOriginalPokemons() {
    await Api.get('/pokemon/?limit=151')
        .then(res => {
            store.dispatch('getOriginalPokemons', res.data.results)
        })
}