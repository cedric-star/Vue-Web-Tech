<template>
  <h2>
    Visit all the {{ type }} recipes!
  </h2>
  <Recipe process="prozess" ingredients="ingr" name="name" type="baking"/>
</template>

<script lang="ts">
import Recipe from "@/components/Recipe.vue";
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  components: {
    Recipe
  },
  mounted: {
    loadDataFromServer() {
      fetch();
    }
  }
}
</script>

<style scoped>

</style>