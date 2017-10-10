import Vue from 'vue';
import Main from './app/Main.vue';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import VueI18n from 'vue-i18n';
import VueAnalytics from 'vue-analytics';

import 'babel-polyfill';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueI18n);

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

Vue.use(VueAnalytics, {
  id: 'UA-107837527-1',
  router
});

const browserLanguagePropertyKeys = ['language', 'browserLanguage', 'userLanguage', 'systemLanguage'];
const browserLanguage = browserLanguagePropertyKeys
  .map(key => window.navigator[key])
  .filter(value => typeof value === 'string')
  .map(value => value.substr(0, 2))[0];

const i18n = new VueI18n({
  locale: browserLanguage,
  fallbackLocale: 'en',
  messages: {
    en: require('./i18n/en.json'),
    pt: require('./i18n/pt.json')
  }
});

export default new Vue({
  el: '#root',
  router,
  i18n,
  render: h => h('router-view')
});
