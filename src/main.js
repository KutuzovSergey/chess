import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueSocketIO from 'vue-socket.io'
import 'jquery/dist/jquery.min'

// Vue.use(new VueSocketIO({
//     debug: false,
//     connection: 'http://metinseylan.com:1992',
//     vuex: {
//         store,
//         actionPrefix: 'SOCKET_',
//         mutationPrefix: 'SOCKET_'
//     },
//     options: { path: "/my-app/" } //Optional options
// }))

createApp(App).use(store).use(router).mount('#app')
