<template>
  <CreateRecipe :type="type"/>
  <DeleteRecipe :type="type"/>
  <ShowAllRecipes :type="type"/>

</template>

<script>
import CreateRecipe from '../components/CreateRecipe.vue';
import ShowAllRecipes from "../components/ShowAllRecipes.vue";
import DeleteRecipe from "../components/DeleteRecipe.vue";

export default {
  components: {
    DeleteRecipe,
    CreateRecipe,
    ShowAllRecipes,
  },
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>