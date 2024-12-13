<template>
  <button @click="this.toggleContent()">Delete Recipe</button>
  <div class="all" id="all" v-if="showField===true">
    <h3>Delete existing Recipe</h3>
    <input placeholder="Recipe Name" type="text" name="name" id="name" v-model="this.name">
    <select name="type" id="type" v-model="this.type">
      <option v-for="type in this.types">{{ type }}</option>
    </select>
    <p id="responseText">{{ message }}</p>


    <button @click="this.deletedata()">Delete</button>

  </div>
</template>

<script>

export default {
  props: {
  },
  data() {
    return {
      name: "",
      type: "",
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
    resetField() {
      this.name = "";
      this.showField = true;
    },
    deletedata() {
      if (!this.checkAttributes()) return;
      console.log('fetching...');

      fetch('http://localhost:8090/app/deletedata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: this.name+';'+this.type
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('response not ok');
            }
            return response.text();
          })
          .then(message => {
            this.message = message;
            console.log('response message: ', this.message);
            return message;
          })
          .then(message => {
            if (message === 'successfully deleted recipe') this.resetField();
          });
    }
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