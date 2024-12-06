<template>
    <NavigationBar/>
    <CreateRecipe type="baking"/>
    <ShowAllRecipies/>
    <Footer/>
</template>
<script>
import ShowAllRecipies from "../components/ShowAllRecipies.vue";
import NavigationBar from '../components/NavigationBar.vue';
import Footer from '../components/Footer.vue';
import CreateRecipe from '../components/CreateRecipe.vue';

export default {
    components: {
      ShowAllRecipies,
        NavigationBar,
        CreateRecipe,
        Footer
    }
}
</script>