<template>
  <div id="app">
    <!-- Utiliza el componente Navbar y controla su visibilidad -->
    <Navbar v-if="$route.name !== 'NotFound'" />

    <!-- Contenido principal de la aplicación -->
    <router-view></router-view>

    <!-- Utiliza el componente Footer y controla su visibilidad -->
    <Footer v-if="$route.name !== 'NotFound'" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>


<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5d5d5d;
  //margin-top: 60px;
  padding-top: 70px;

}

</style>
