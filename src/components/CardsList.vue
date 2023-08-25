<script>

    import SingleCard from './SingleCard.vue';
    import { store, cardPicker} from "../store"

    export default{
        components:{
            SingleCard
        },
    
        data(){
            return{
                store
            };
        },
    
        mounted(){
            cardPicker(store.selectedArchetype);
        }

    }




</script>

<template>

<div class="py-4">
    <div class="row row-cols-2 row-cols-lg-4 g-4">
      <div
        class="col"
        v-for="carta in store.cards"
        :key="carta.id"
      >
        <SingleCard :OneCard="carta" />
      </div>
    </div>

   <!-- <div class="text-center pt-5">
      <button class="btn btn-outline-primary" @click="fetchNextPage">
        Carica altro
      </button>
    </div>-->
</div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

</style>
 