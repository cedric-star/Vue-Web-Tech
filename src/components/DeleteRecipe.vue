<template>
  <button @click="this.toggleContent()">Delete Recipe</button>
  <div class="all" id="all" v-if="showField===true">
    <h3>Delete existing {{typeChoosen}} Recipe</h3>
    <input placeholder="Recipe Name" type="text" name="name" id="name" v-model="this.name">
    <select name="type" id="type" v-model="this.typeChoosen">
      <option v-for="type in this.types">{{ type }}</option>
    </select>
    <p id="responseText" v-html="this.message"></p>

    <button @click="this.deleteData()">Delete</button>
  </div>
</template>

<script>
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
  data() {
    return {
      name: "",
      typeChoosen: this.type,
      message: "...",
      showField: false,
      types: ["cooking", "baking"]

    };
  },
  computed: {
    checkName() {
      return checker.checkName(this.name);
    }
  },
  methods: {
    toggleContent() {this.showField = !this.showField;},
    checkAttributes() {
      if (!this.checkName) {
        this.message = 'can´t send data:<br>\n';
        this.message+='change Name field, only characters and "-" and " ", max.  50 characters<br>\n';
        return false;
      }
      return true;
    },
    resetFields() {
      this.name = "";
      this.showField = true;
    },
    async deleteData() {
      if (!this.checkAttributes()) return;
      let bc = new BackendConnector();
      const msg = await bc.deleteRecipe(this.name, this.typeChoosen);
      if (msg === 'successfully deleted recipe') this.resetFields();
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
  border: 4px solid var(--light-orange);
  border-radius: 2px;
}
h3 {
  color: var(--dark-orange);
}
.all {
  padding: 10px;
  margin: 10px;
  padding-top: 0;
  border: 1px solid var(--dark-font);
  border-radius: 4px;
  display: grid;
}
input, select {
  color: var(--dark-font);
  background-color: var(--light-orange);
  border: 1px solid var(--dark-font);
  margin: 2px;
  padding: 2px;
  border-radius: 2px;
  width:200px;
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