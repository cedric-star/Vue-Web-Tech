<template>
  <button @click="this.toggleContent()">Create Recipe</button>
  <div class="all" id="all" v-if="showField">
    <h3>Create your {{typeChoosen}} Recipe</h3>

    <input placeholder="Recipe Name" type="text" name="name" id="name" v-model="this.name">
    <select name="type" id="type" v-model="this.typeChoosen">
      <option v-for="type in this.types">{{ type }}</option>
    </select>
    <textarea placeholder="Ingredients" name="ingredients" id="ingredients" v-model="this.ingredients"></textarea>
    <textarea placeholder="Process" name="process" id="process" v-model="this.process"></textarea>
    <input placeholder="Additives" type="text" name="additives" id="additives" v-model="this.additives">

    <p id="responseText">{{ message }}</p>
    <Recipe :type="`${typeChoosen}`"
            :name="`${name}`"
            :ingredients="`${ingredients}`"
            :process="`${process}`"
            :additives="`${additives}`"></Recipe>

    <button @click="this.sendData()">Create</button>
  </div>
</template>
  
<script>
  import Recipe from '@/components/Recipe.vue';
  import {BackendConnector} from "@/java-script/BackendConnector";
  import {CheckInput} from "@/java-script/CheckInput";

  let checker = new CheckInput();
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
        typeChoosen: this.type,
        name: "",
        ingredients: "",
        process: "",
        additives: "",
        message: "...",
        showField: false,
        types: ["cooking", "baking"]
      };
    },
    computed: {
      checkName() {
        return checker.checkName(this.name);
      },
      checkIngredients() {
        return checker.checkText(this.ingredients);
      },
      checkProcess() {
        return checker.checkText(this.process);
      },
      checkAdditives() {
        return checker.checkText(this.additives);
      }
    },
    methods: {
      toggleContent() {this.showField = !this.showField;},
      checkAttributes() {
        if (!this.checkName || !this.checkIngredients || !this.checkProcess || !this.checkAdditives) {
          this.message = 'can´t send data:\n';
          if (!this.checkName) this.message+='change Name field\n';
          if (!this.checkIngredients) this.message+=' change Ingredients field\n';
          if (!this.checkProcess) this.message+=' change Process field\n';
          if (!this.checkAdditives) this.message+=' change Additives field\n';
          return false;
        }
        return true;
      },
      resetFields() {
        this.name = "";
        this.ingredients = "";
        this.process = "";
        this.additives = "";
        this.showField = true;
      },
      async sendData() {
        const data = {
          type: this.typeChoosen,
          name: this.name,
          ingredients: this.ingredients,
          process: this.process,
          additives: this.additives};

        if (!this.checkAttributes()) return;
        let bc = new BackendConnector();

        const msg = await bc.sendRecipe(data)
        if (msg === 'successfully added recipe') this.resetFields();
        this.message = msg;

      },
    }
  }
</script>

<style scoped>
#responseText {
  font-size: smaller;
  color: var(--dark-orange);
  width: fit-content;
  background-color: var(--light-orange);
  border: 1px solid var(--dark-font);
  border-radius: 2px;
}
.all {
    padding: 10px;
    margin: 10px;
    padding-top: 0;
    border: 1px solid var(--dark-font);
    border-radius: 4px;
    display: grid;
}
input, textarea, select {
    background-color: var(--light-orange);
    border: 1px solid var(--dark-font);
    color: var(--dark-font);
    margin: 2px;
    padding: 2px;
    border-radius: 2px;
    width:200px;
    max-width: 400px;
    min-width: 50px;
}
button {
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