<template>
  <div id="app">
    <router-view id="view"></router-view>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'


export default {
  name: 'App',
  computed: mapGetters({
    products: 'newsList'
  }),
  created() {
      console.log(this.products);
  },
  mounted () {
      this.$store.dispatch('getChannels')
    }
}
</script>

<style scoped>

</style>
