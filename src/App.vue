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

  <main>
    <div class="container">
      <h1>Elenco Carte</h1>
      
      <CardsList/>
    </div>
  </main>

  <TheFooter></TheFooter>
</template>

<style lang="scss">

</style>