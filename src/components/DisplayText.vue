<script>

export default {
  props: {
    text: {
      type: String,
          required: true
    },
    title: {
      type: String,
      required: true
    },
  },
}
</script>

<template>
  <p><b>{{ title }}</b></p>
  <p v-html="text"></p>
</template>
