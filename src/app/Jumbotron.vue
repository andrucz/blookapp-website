<template>
  <b-jumbotron>
    <template slot="header">
      <b-img src="../images/blook-logo.png" fluid />
    </template>
    <template slot="lead">
      {{ $t("slogan") }}
    </template>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Jumbotron'
};
</script>
