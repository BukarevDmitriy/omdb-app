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
    }
  }
</script>

<style lang="scss">
  img {
    width: 100%;
  }
</style>
