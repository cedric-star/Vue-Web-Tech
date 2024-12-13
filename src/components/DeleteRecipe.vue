<template>
  <button @click="this.toggleContent()">Delete Recipe</button>
  <div class="all" id="all" v-if="showField===true">
    <h3>Delete existing {{typeChoosen}} Recipe</h3>
    <input placeholder="Recipe Name" type="text" name="name" id="name" v-model="this.name">
    <select name="type" id="type" v-model="this.typeChoosen">
      <option v-for="type in this.types">{{ type }}</option>
    </select>
    <p id="responseText">{{ message }}</p>


    <button @click="this.deleteData()">Delete</button>

  </div>
</template>

<script>

import {BackendConnector} from "@/java-script/BackendConnector";

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
      const regex =  /^[a-zA-Z]*$/;
      return regex.test(this.name);
    }
  },
  methods: {
    toggleContent() {this.showField = !this.showField;},
    checkAttributes() {
      if (!this.checkName) {
        this.message = 'can´t send data:\n';
        this.message+='change Name field\n';
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
input, select {
  background-color: antiquewhite;
  border: 1px solid black;
  margin: 2px;
  padding: 2px;
  border-radius: 2px;
  width:200px;
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