<template>
  <v-app>
    <Header />
    <v-main class="app_background">
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: { Header },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap");

* {
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.app_background {
  background-image: url(./assets/background.png);
  background-repeat: repeat;
  background-size: 100%;
}
</style>