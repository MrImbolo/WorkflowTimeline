<template>
  <v-app>
    <!-- <span class="bg"></span> -->
    <InnerApp></InnerApp>
  </v-app>
</template>

<script>
import InnerApp from "./views/InnerApp.vue"

export default {
  components: {
    InnerApp,
  },
  data() {
    return {
      AC: this.$store.state.AC,
    }
  }
}
</script>
<style lang="scss">
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('https://villarojales.com/wp-content/uploads/2017/09/Roadway-1280x720.jpg');
    background-size: cover;
    z-index: -1;
    filter: blur(4px);
  }
  .bg-transparent {
    opacity: 0.9;

    &-1 {
      opacity: 0.1;
    }
    &-3 {
      opacity: 0.3;
    }
    &-5 {
      opacity: 0.5;
    }
    &-7 {
      opacity: 0.7;
    }

    & * {
      opacity: inital;
    }
  }
</style>