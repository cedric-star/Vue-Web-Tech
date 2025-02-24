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
  <b><p class="txt">{{ title }}</p></b>
  <p class="txt" v-html="text"></p>
</template>

<style>
p {
  color: var(--dark-orange)}

</style>
