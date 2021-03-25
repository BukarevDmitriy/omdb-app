<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from './components/Header';

  export default {
    components: {
      AppHeader,
    },
    watch: {
      $route(to, from) {
        if (to.fullPath !== from.fullPath) {
          ym(56191582, 'hit', to.fullPath);
        }
      },
    },
  }
</script>

<style lang="scss">
  img {
    width: 100%;
  }
</style>
