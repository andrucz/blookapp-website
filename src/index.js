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

const messages = {
  en: {
    comingSoon: 'Coming soon',
    slogan: 'Connecting readers.',
    donateSellSwapFeatureTitle: 'Donate, sell or swap your books',
    donateSellSwapFeatureDescription: 'With the help of features like barcode scanner, easily insert your books into the application so interested readers can find them.',
    findBooksFeatureTitle: 'Find the books you love',
    findBooksFeatureDescription: 'With Blook search features, it\'s easy to find cool books next to you. Filter results based on genre, title, author, price and distance.',
    footerMessage: '♥ from the Blook team'
  },
  pt: {
    comingSoon: 'Em breve',
    slogan: 'Conectando leitores.',
    donateSellSwapFeatureTitle: 'Doe, venda ou troque seus livros',
    donateSellSwapFeatureDescription: 'Com ajuda de recursos como leitor de código de barras ISBN, insira facilmente os seus livros no aplicativo para que leitores interessados encontre-os.',
    findBooksFeatureTitle: 'Encontre os livros que você ama',
    findBooksFeatureDescription: 'Com os recursos de pesquisa do Blook, é fácil encontrar livros legais perto de você. Filtre os resultados por gênero, título, autor, preço e distância.',
    footerMessage: '♥ da equipe Blook'
  }
};

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

export default new Vue({
  el: '#root',
  router,
  i18n,
  render: h => h('router-view')
});
