<template>
    <button @click="this.toggleContent()">Create Recipe</button>
    <div class="all" id="all" v-if="showField==true">
        <h3>Create you´r {{typeChoosen}} Recipe</h3>

        <input placeholder="Recipe Name" type="text" name="name" id="name" v-model="this.name">
      <select name="type" id="type" v-model="this.typeChoosen">
        <option v-for="type in this.types">{{ type }}</option>
      </select>
      <textarea placeholder="Ingredients" name="ingredients" id="ingredients" v-model="this.ingredients"></textarea>
        <textarea placeholder="Process" type="text" name="process" id="process" v-model="this.process"></textarea>
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
  import Recipe from '../components/Recipe.vue';
  import {BackendConnector} from "../java-script/BackendConnector";
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
        const regex =  /^[a-zA-Z]*$/;
        return regex.test(this.name);
      },
      checkIngredients() {
        const regex =  /^[\s\S]{0,800}$/;
        return regex.test(this.ingredients);
      },
      checkProcess() {
        const regex =  /^[\s\S]{0,800}$/;
        return regex.test(this.process);
      },
      checkAdditives() {
        const regex =  /^[\s\S]{0,800}$/;
        return regex.test(this.process);
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
          /*let checker = new CheckInput();
          const attributes = [{name: this.name},
            {ingredients: this.ingredients},
            {process: this.process},
            {additives: this.additives}];
          if (!(checker.checkAllAttributes(attributes)==="")) return;*/
          if (!this.checkAttributes()) return;
          let bc = new BackendConnector();
          const data = {
            type: this.typeChoosen,
            name: this.name,
            ingredients: this.ingredients,
            process: this.process,
            additives: this.additives};

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
  color: rgb(80, 28, 12);
  width: fit-content;
  background-color: #ffb599;
  border: 4px solid #ffb599;
  border-radius: 2px;
}
.all {
    padding: 10px;
    margin: 10px;
    padding-top: 0;
    border: 1px solid black;
    border-radius: 4px;
    display: grid;
}
input, textarea, select {
    border: none;
    background-color: antiquewhite;
    border: 1px solid black;
    margin: 2px;
    padding: 2px;
    border-radius: 2px;
    width:200px;
    max-width: 400px;
    min-width: 50px;
}
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