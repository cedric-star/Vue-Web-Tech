<template>
    <button @click="this.toggleContent()">Create Recipe</button>
    <div class="all" id="all">
        <input placeholder="Recipe Name" type="text" name="name" id="name" v-model="this.name">
        <input placeholder="Ingredients" type="text" name="ingredients" id="ingredients" v-model="this.ingredients">
        <input placeholder="Process" type="text" name="process" id="process" v-model="this.process">
        <p id="responseText">{{ message }}</p>
        <Recipe :type="`${type}`" :name="`${name}`" :ingredients="`${ingredients}`" :process="`${process}`"></Recipe>

        <button @click="this.senddata()">Create</button>

    </div>
</template>
  
<script>
  import Recipe from '../components/Recipe.vue';

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
        name: "",
        ingredients: "",
        process: "",
        message: "..."
      };
    },
    methods: {
        toggleContent() {
            var element = document.getElementById("all");
            element.style.display = (element.style.display === "none") ? "block" : "none";
        },
        senddata() {
          console.log('fetching...');
          const data = {
              type: this.type,
              name: this.name,
              ingredients: this.ingredients,
              process: this.process

          };
          fetch('http://localhost:8080/app/adddata', {
              method: 'POST',
              headers: {
                  'Conten-Type': 'application/json'
              },
          body: JSON.stringify(data)
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
input {
    border: none;
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