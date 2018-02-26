<template>
  <article class="home-wrapper">
    <Topbar></Topbar>
  </article>
  
</template>
<script>
  import Topbar from './topbar.vue'
  export default {
    components: {
      Topbar
    }
  }
</script>
<style scoped>
.home-wrapper {
    overflow-y: scroll;
}

</style>
