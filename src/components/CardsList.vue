<script>

import SingleCard from './SingleCard.vue';
import { store, cardPicker, logInfo } from "../store"

export default {
  components: {
    SingleCard
  },

  data() {
    return {
      store
    };
  },

  mounted() {
    cardPicker(store.selectedArchetype);

  },
  methods: {
    nextPage() {
      cardPicker(store.pagesInfo.next_page)
    },
    prevPage() {
      cardPicker(store.pagesInfo.previous_page)
    },
    logInfo,

  }

}




</script>

<template>
  <div class="py-4">
    <div class="row row-cols-2 row-cols-lg-4 g-4">
      <div class="col" v-for="carta in store.cards" :key="carta.id">
        <SingleCard :OneCard="carta" />
      </div>
    </div>

    <!-- <div class="text-center pt-5">
      <button class="btn btn-outline-primary" @click="fetchNextPage">
        Carica altro
      </button>
    </div>-->

  </div>
  <div  class="py-4 bg-dark">

    <button v-if="store.CurrentPage > 1" type="button"
      @click="[logInfo(store.pagesInfo.previous_page), store.CurrentPage--]"
      class="btn btn-outline-warning">Previous</button>

    <span v-if="store.CurrentPage > 1" class="text-white mx-3">{{ store.CurrentPage }} - {{ store.pagesInfo.pages_remaining }}</span>
    
    <button v-if="store.CurrentPage < store.pagesInfo.pages_remaining" type="button"
      @click="[logInfo(store.pagesInfo.next_page,), store.CurrentPage++]" class="btn btn-outline-warning">Next</button>

  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
</style>
 