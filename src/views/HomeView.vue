<template>
  <div class="home">
    <BannerComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerComponent from "../components/Home/BannerComponent"

export default {
  name: 'HomeView',
  components: {
    BannerComponent
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/fonts_rubik.scss';
@import '@/scss/_mixins.scss';
@import '@/scss/variables.scss';
</style>
