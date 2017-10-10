import Vue from 'vue';
import Main from './app/Main.vue';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import VueAnalytics from 'vue-analytics';

import 'babel-polyfill';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.use(VueAnalytics, {
  id: 'UA-107837527-1'
});

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Main
      }
    }
  ]
});

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
