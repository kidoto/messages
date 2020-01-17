import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import Eagle from 'eagle.js'
import "animate.css";

Vue.use(Eagle)
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "https://messages-benext.firebaseio.com",
  projectId: "messages-benext",
  storageBucket: "messages-benext.appspot.com",
  messagingSenderId: "",
  appId: ""
};


firebase.initializeApp(firebaseConfig)

new Vue({
  render: h => h(App),
}).$mount('#app')
