<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import CardsList from './components/CardsList.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    CardsList
  }
}
</script>

<template>
  <TheHeader></TheHeader>

  <main class="">
    <div class="container text-center">
      <h1>Elenco Carte</h1>
      
      <CardsList/>
    </div>
  </main>

  <TheFooter></TheFooter>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

</style>