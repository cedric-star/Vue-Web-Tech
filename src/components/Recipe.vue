<template>
  <h4 v-if="name.length>0">{{ name }}</h4>
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

<style>
.attributes {
    margin: 0;
}
</style>