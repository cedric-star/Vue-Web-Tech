<template >
  <h2>
    Visit all the {{ type }} recipes!
  </h2>
  <button @click="this.loadDataFromServer()">reload Recipes</button>
  <nobr>-</nobr>
  <input v-model="this.searchFor" placeholder="recipe name" @change="this.sortRecipes()">
  <button @click="this.sortRecipes()">search</button>
  <div v-if="loadedData&&output.length===0">
    <p>no recipes found</p>
    <p v-if="inputMsg.length>0">Error: {{ inputMsg }}</p>
  </div>
  <div v-if="loadedData" v-for="item in output">
    <Recipe :process="item.process"
            :ingredients="item.ingredients"
            :name="item.name"
            :type="item.type"
            :additives="item.additives"/>
  </div>

  <div v-else>
    <p>Loading {{type}} recepies</p>
    <img v-if="type==='baking'" :src="getBakingPath" alt="img">
    <img v-if="type==='cooking'" :src="getCookingPath" alt="img">

  </div>
</template>

<script>
import Recipe from "@/components/Recipe.vue";
import {BackendConnector} from "@/java-script/BackendConnector";
import {RecipeSorter} from "@/java-script/RecipeSorter";
import {CheckInput} from "@/java-script/CheckInput";

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
      loadedData: false,
      searchFor: "",
      inputMsg: '',
    }
  },
  methods: {
    async loadDataFromServer() {
      this.loadedData = false;
      let bc = new BackendConnector();
      const recipes = await bc.getRecipes(this.type);
      this.output = await JSON.parse(recipes);
      setTimeout(() => {this.loadedData = true}, 2500);
    },
    async checkInput() {
      let str = this.searchFor;
      let checker = new CheckInput();
      if (!checker.checkName(str)||str.length<2)
        {this.inputMsg = 'input allowed: only characters, "-" and " "'}
      else {
        this.inputMsg = '';
        return true;
      }
      return false;
    },
    async sortRecipes() {
      await this.checkInput();

      await this.loadDataFromServer();
      this.loadedData = false;

      let sorter = new RecipeSorter();
      this.output = await sorter.sort(this.searchFor, this.output);

      setTimeout(()=>{this.loadedData = true}, 1500);
    },
  },
  mounted() {
    this.loadDataFromServer();
  },
  computed: {
    getCookingPath() {
      return require(`@/assets/Pizzaspin.png`);
    },
    getBakingPath() {
      return require(`@/assets/Kuchenspin.png`);
    },
  }
}
</script>

<style scoped>
h2, p, nobr {
  padding: 5px;
  color: var(--dark-orange);
}
img {
  align-self: center;
  animation: spin 2.5s linear infinite;

}
@keyframes spin {
  from {
    transform: translate(0px, 0px) rotate(0deg);
  }
  50% {
    transform: translate(915px, 0px) rotate(-360deg);
  }
  to {
    transform: translate(1830px, 0px) rotate(-720deg);
  }
}
button, input {
  background-color: var(--strong-orange);
  color: var(--light-orange);
  border: solid var(--strong-orange);
  border-radius: 2px;
  padding: 2px;
  margin: 2px;
  cursor: pointer;
  width: max-content;
  text-align: center;
}
button:hover {
  background-color: var(--dark-orange);
  border-color: var(--dark-orange);
}
</style>