<template>
  <div id="root">
    <main>
      <b-container>
        <div class="corner-ribbon top-right sticky blue shadow">Coming soon</div>

        <jumbotron-component></jumbotron-component>
        <features-component></features-component>
        <footer-component></footer-component>
      </b-container>
    </main>
  </div>
</template>

<script>
import Jumbotron from './Jumbotron.vue';
import Features from './Features.vue';
import Footer from './Footer.vue';


export default {
  name: 'Main',
  components: {
    'jumbotron-component': Jumbotron,
    'features-component': Features,
    'footer-component': Footer
  }
};
</script>
