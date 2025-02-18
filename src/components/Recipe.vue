<template>
  <div class="recipe">
    <h4 v-if="name.length>0">Name: {{ name }}</h4>
    <h4 v-else>Recipe unnamed</h4>
    <ul class="attributes">
      <li v-if="ingredients.length>0"><p>Ingredients: {{ ingredients }}</p></li>
      <li v-if="process.length>0"><p>Process: {{ process }}</p></li>
      <li v-if="additives.length>0"><p>Additives: {{ additives }}</p></li>
    </ul>
  </div>
</template>
  
<script>
  export default {
    props: {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      ingredients: {
        type: String,
        required: true
      },
      process: {
        type: String,
        required: true
      },
      additives: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
.recipe {
  padding: 4px;
  margin: 4px;
  border: 1px solid black;
  border-radius: 4px;
}
h4 {
  padding: 0;
  margin: 0;
}
.attributes {
    margin: 0;
}
</style>