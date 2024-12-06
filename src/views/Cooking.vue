<template>
    <NavigationBar/>
    <CreateRecipe type="cooking"/>
    <ShowAllRecipies/>
    <Footer/>
    
</template>
  
  <script>
    import CreateRecipe from '../components/CreateRecipe.vue';
    import NavigationBar from '../components/NavigationBar.vue';
    import ShowAllRecipies from "../components/ShowAllRecipies.vue";
    import Footer from '../components/Footer.vue';

export default {
    components: {
        NavigationBar,
        CreateRecipe,
        ShowAllRecipies,
        Footer
    },
    }
  </script>