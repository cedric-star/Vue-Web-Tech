<template>
  <NavigationBar/>
  <div id="app">
    <div id="content">
      <router-view/>
    </div>
    <Footer id="foot"/>
  </div>
</template>

<style>
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: coral;
    font-family: sans-serif;
    scrollbar-width: thin;
}
#content {
  padding-bottom: 50px;/*place for footer*/
}

</style>
<script setup>
import Footer from "./components/Footer.vue";
import NavigationBar from "./components/NavigationBar.vue";
</script>