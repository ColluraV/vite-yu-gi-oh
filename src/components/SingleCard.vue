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
    <img :src="OneCard.image" class="card-img-top" alt="..." />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ OneCard.name }}</h5>
      <p class="card-text">
        Stato: {{ OneCard.Type }} <br />
        Specie: {{ OneCard.race }}
      </p>
      <a :href="OneCard.url" class="btn btn-primary mt-auto">Dettagli</a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>