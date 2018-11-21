import Vue from 'vue'
// import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import VueMq from 'vue-mq'
import BootstrapVue from 'bootstrap-vue'
import firebase from"firebase/app"

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(VueMq, {
//   breakpoints: {
//     sm: 450,
//     md: 1250,
//     lg: Infinity,
//   }
// })

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDd-HziuGsi_k3V7qEbbo9DknaxQcfVsG8",
  authDomain: "mychat-d459c.firebaseapp.com",
  databaseURL: "https://mychat-d459c.firebaseio.com",
  projectId: "mychat-d459c",
  storageBucket: "mychat-d459c.appspot.com",
  messagingSenderId: "847284807546"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
