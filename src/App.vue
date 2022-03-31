<template>
  <HederComponent/>
  <router-view/>
  <FuterComponent/>
  <SignInComponent v-if="this.signIn"/>
  <LogInComponent v-if="this.logIn"/>
</template>

<script>
import HederComponent from './components/HederComponent.vue'
import FuterComponent from './components/FuterComponent.vue'
import LogInComponent from './components/PopupWindows/LogInComponent.vue'
import SignInComponent from './components/PopupWindows/SignInComponent.vue'

export default {
  name: 'App',
  components: {
    HederComponent,
    FuterComponent,
    SignInComponent,
    LogInComponent
  },
  data(){
    return{
    }
  },
  methods: {},
  computed: {
    signIn: function(){
      return this.$store.getters.SIGN_IN_VIEWINGT_WINDOW
    },
    logIn: function(){
      return this.$store.getters.LOG_IN_VIEWINGT_WINDOW
    }
  },
  watch: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
