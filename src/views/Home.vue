<template>
    <header>Home-Page</header>
</template>
<script>
import NavigationBar from '../components/NavigationBar.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        NavigationBar,
        Footer
    },
    mounted: function() {
      let nameTitle = this.$route.params.name
      console.log(nameTitle);
    }
}
</script>
<style scoped>
body, html {
    margin: 0;
    padding: 0;
    background-color: coral;
}


</style>

