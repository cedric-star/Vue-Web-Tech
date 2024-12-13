<template >
  <h2>
    Visit all the {{ type }} recipes!
  </h2>
  <button @click="this.loadDataFromServer()">reload Recipes</button>
  <div v-if="loadedData" v-for="item in output">
    <Recipe :process="item.process"
            :ingredients="item.ingredients"
            :name="item.name"
            :type="item.type"
            :additives="item.additives"/>
  </div>
</template>

<script>
import Recipe from "@/components/Recipe.vue";
import {BackendConnector} from "@/java-script/BackendConnector";
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  components: {
    Recipe
  },
  data() {
    return {
      output: [],
      loadedData: false
    }
  },
  methods: {
    async loadDataFromServer() {
      let bc = new BackendConnector();
      const recipes = await bc.getRecipes(this.type);
      this.loadedData = true;
      this.output = await JSON.parse(recipes);
    }
  },
  mounted() {
    this.loadDataFromServer();
  }

}
</script>

<style scoped>
button {
  background-color: rgb(186, 72, 30);
  color: antiquewhite;
  border: solid rgb(186, 72, 30);
  border-radius: 2px;
  padding: 2px;
  margin: 2px;
  cursor: pointer;
  width: max-content;
  text-align: center;
}
button:hover {
  background-color: rgb(103, 38, 14);
  border-color: rgb(103, 38, 14);
}
</style>