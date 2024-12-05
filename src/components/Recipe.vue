<template>
    <div>
      <p>{{ name }}</p>
      <p>{{ text }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      text: {
        type: Number,
        required: true
      }
    }
  }
  </script>