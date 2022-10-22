<template>
  <div class="my-5 mx-5">
    <v-row class="">
      <v-col class="d-flex flex-wrap">
        <v-card
          elevation="9"
          class="mx-4 px-2"
          max-width="230"
          max-height="400"
        >
          <v-card-title>{{ pokemons.name }}</v-card-title>
          <v-img
            max-width="200"
            :src="pokemons.sprites.other.home.front_default"
          ></v-img>
          <v-card-actions>
            <v-row>
              <v-col cols="12" sm="12">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="text-capitalize"
                      color="light-blue darken-3"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="dialog = true"
                      width="100%"
                    >
                      Detalhes
                    </v-btn>
                  </template>
                  <v-card class="pa-5">
                    <v-card-text>
                      <v-img
                        :src="
                          pokemons.sprites.versions['generation-v'][
                            'black-white'
                          ].animated.front_default
                        "
                        max-width="200"
                        class="cardPokemon__img"
                      ></v-img>
                      <v-row>
                        <v-col cols="12">
                          <v-card
                            color="blue darken-1"
                            class="mt-5"
                            v-for="stat in pokemons.stats"
                            :key="stat.name"
                          >
                            <v-card-text class="d-flex"
                              ><p class="mb-0 cardPokemon__font">
                                {{ stat.stat.name }}
                              </p>
                              <v-spacer></v-spacer>
                              <p class="mb-0 cardPokemon__font">
                                {{ stat.base_stat }}
                              </p></v-card-text
                            >
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false">
                        Fechar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>

        <v-card
          elevation="9"
          class="mx-4 px-2"
          max-width="230"
          max-height="400"
          v-for="evolution in pokemonsEvolutionsChains"
          :key="evolution.name"
        >
          <v-card-title>{{ evolution.name }}</v-card-title>
          <v-img
            max-width="200"
            :src="evolution.sprites.other.home.front_default"
          ></v-img>
          <v-card-actions>
            <v-row>
              <v-col cols="12" sm="12">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="text-capitalize"
                      color="light-blue darken-3"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="dialog = true"
                      width="100%"
                    >
                      Detalhes
                    </v-btn>
                  </template>
                  <v-card class="pa-5">
                    <v-card-text>
                      <v-img
                        :src="
                          pokemons.sprites.versions['generation-v'][
                            'black-white'
                          ].animated.front_default
                        "
                        max-width="200"
                        class="cardPokemon__img"
                      ></v-img>
                      <v-row>
                        <v-col cols="12">
                          <v-card
                            color="blue darken-1"
                            class="mt-5"
                            v-for="stat in pokemons.stats"
                            :key="stat.name"
                          >
                            <v-card-text class="d-flex"
                              ><p class="mb-0 cardPokemon__font">
                                {{ stat.stat.name }}
                              </p>
                              <v-spacer></v-spacer>
                              <p class="mb-0 cardPokemon__font">
                                {{ stat.base_stat }}
                              </p></v-card-text
                            >
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false">
                        Fechar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      pokemons: (state) => state.store.pokemons,
      pokemonsEvolutionsChains: (state) => state.store.pokemonsEvolutionsChains,
    }),
  },

  data() {
    return {
      dialog: false,
    };
  },
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
