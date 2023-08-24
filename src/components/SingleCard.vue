<script>
export default {
  props: {
    OneCard: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card h-100">
    <img :src="OneCard.card_images[0].image_url" class="card-img-top" alt="..." />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ OneCard.name }}</h5>
      <p class="card-text">
        Stato: {{ OneCard.type }} <br />
        Specie: {{ OneCard.race }}
      </p>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;



</style>