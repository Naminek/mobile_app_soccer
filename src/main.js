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
  apiKey: "AIzaSyDQajpmDhRL1tlvTg_MmLPNIhRFUUIkmMk",
  authDomain: "mychatdatabase-b5b11.firebaseapp.com",
  databaseURL: "https://mychatdatabase-b5b11.firebaseio.com",
  projectId: "mychatdatabase-b5b11",
  storageBucket: "mychatdatabase-b5b11.appspot.com",
  messagingSenderId: "672059654067"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
