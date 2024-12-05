<template>
    
    <NavigationBar/>
    <CreateRecipe type="backing"/>
    <Footer/>
</template>
<script>
import NavigationBar from '../components/NavigationBar.vue';
import Footer from '../components/Footer.vue';
import CreateRecipe from '../components/CreateRecipe.vue';

export default {
    components: {
        NavigationBar,
        CreateRecipe,
        Footer
    }
}
</script>