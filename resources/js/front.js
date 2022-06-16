 window.Vue = require('vue');
 import App from './components/App.vue';
 import Vue from 'vue';
import router from './routes';
 const root = new Vue({
     el: '#root',
     router,
     render: h => h(App)
 });
