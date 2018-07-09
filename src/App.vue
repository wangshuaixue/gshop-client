<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>

  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {

    mounted(){
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getShops')
    },

    components: {
      FooterGuide
    }

  }
</script>

<style>

</style>
