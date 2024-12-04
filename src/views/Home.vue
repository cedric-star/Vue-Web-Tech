<template>
    <NavigationBar/>
    home
    <Footer/>
</template>
<script>
import NavigationBar from '../components/NavigationBar.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        NavigationBar,
        Footer
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

