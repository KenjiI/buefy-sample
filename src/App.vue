<template>
  <div id="app" v-if="this.$store.state.authorization">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
  <div v-else>
    <login />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Login from './views/Login.vue';

export default Vue.extend({
  components: { Login },
});
</script>

<style lang="scss">

</style>
