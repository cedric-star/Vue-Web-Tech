<template>
  <footer class="foot_items">
    <p><RouterLink to="/imprint">Imprint</RouterLink></p>
    <p>©Cedric Wünsch</p>
    <p><a href="https://github.com/cedric-star/Vue-Web-Tech">Documentation</a></p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
body, html {
    margin: 0;
    padding: 0;
    color: var(--dark-font);
}
p {
  color: var(--dark-orange);
}
RouterLink, a{
  color: var(--dark-orange);
}
.foot_items {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--light-orange);
    text-align: center;
    border-radius: 2px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>