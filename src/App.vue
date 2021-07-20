<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <modal-root />
  </div>
</template>

<script>
import Navbar from './components/navbar';
import ModalRoot from './modules/modals/components/modal-root.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    ModalRoot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #454545;
}
body {
  margin: 0;
}
</style>
