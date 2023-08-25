<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import CardsList from './components/CardsList.vue';
import FilteredArchetype from './components/FilteredArchetype.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    CardsList,
    FilteredArchetype,
  }
}
</script>

<template>
  <TheHeader></TheHeader>

  <main class="">
    <div class="container text-center">
      <h1>Elenco Carte</h1>
      <FilteredArchetype/>
      <CardsList/>
    </div>
  </main>

  <TheFooter></TheFooter>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

</style>