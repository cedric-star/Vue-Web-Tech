<template>
  <h4 v-if="name.length>0">Name: {{ name }}</h4>
  <h4 v-else>Recipe unnamed</h4>
  <ul class="attributes">
      <li v-if="ingredients.length>0"><p>Ingredients: {{ ingredients }}</p></li>
      <li v-if="process.length>0"><p>Process: {{ process }}</p></li>
    </ul>
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
      }
    }
  }
  </script>

<style scoped>
h4 {
  padding: 0;
  margin: 0;
}
.attributes {
    margin: 0;
}
</style>