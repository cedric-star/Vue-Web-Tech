<template>
  <NavigationBar/>
  <CreateRecipe :type="type"/>
  <ShowAllRecipes :type="type"/>
  <Footer/>

</template>

<script>
import CreateRecipe from '../components/CreateRecipe.vue';
import NavigationBar from '../components/NavigationBar.vue';
import ShowAllRecipes from "../components/ShowAllRecipes.vue";
import Footer from '../components/Footer.vue';

export default {
  components: {
    NavigationBar,
    CreateRecipe,
    ShowAllRecipes,
    Footer
  },
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>