//import Vue from 'vue'
//import App from './App.vue'
const Vue = require('vue');
const App = require('./App.vue');

const myVue = new Vue({
  el: '#app',
  render: h => h(App)
});