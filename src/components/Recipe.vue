<template>
    <ul class="attributes">
      <li><p>Name: {{ name }}</p></li>
      <li><p>Ingredients: {{ ingredients }}</p></li>
      <li><p>Process: {{ process }}</p></li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
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