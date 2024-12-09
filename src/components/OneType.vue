<template>
  <NavigationBar/>
  <CreateRecipe :type="type"/>
  <DeleteRecipe :type="type"/>
  <ShowAllRecipes :type="type"/>
  <Footer/>

</template>

<script>
import CreateRecipe from '../components/CreateRecipe.vue';
import NavigationBar from '../components/NavigationBar.vue';
import ShowAllRecipes from "../components/ShowAllRecipes.vue";
import Footer from '../components/Footer.vue';
import DeleteRecipe from "@/components/DeleteRecipe.vue";

export default {
  components: {
    DeleteRecipe,
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