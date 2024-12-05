
<template>
    <div class="all">
        <p><b>Create Recipe</b></p>
        <input placeholder="Recipe Name" type="text" name="name" id="name" v-model="this.name">
        <input placeholder="Ingredients" type="text" name="text" id="text" v-model="this.text">
        <Recipe :name="`${name}`" :text="`${text}`"></Recipe>

        <button @click="this.loaddata()">Create</button>
    </div>
</template>
  
  <script>
  import Recipe from '../components/Recipe.vue';
  
  export default {
    components: {
      Recipe
    },
    data() {
      return {
        name: "",
        text: ""
      };
    },
    methods: {
        loaddata() {
        console.log('fetching...');
        const datensatz = {
            name: this.name,
            text: this.text
        };
        fetch('http://localhost:8080/app/adddata', {
            method: 'POST',
            headers: {
                'Conten-Type': 'application/json'
            },
        body: JSON.stringify(datensatz)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Backendresponse not ok'+response.statusText);
            }
            return response.json();
        })
        .then(responseData => {
            console.log(responseData);
        })
        .catch(error => {
            console.error('Error loading JSON data:', error);
        });
        }
    }
    
  }
  </script>

<style scoped>
.all {
    padding: 10px;
    margin: 10px;
    padding-top: 0;
    border: 1px solid black;
    border-radius: 4px;
}
input {
    border: none;
    background-color: antiquewhite;
    border: 1px solid black;
    margin: 4px;
    border-radius: 2px;
}
button {
    background-color: rgb(186, 72, 30);
    color: antiquewhite;
    border: solid rgb(186, 72, 30);
    border-radius: 2px;
    padding: 2px;
    margin: 2px;
    cursor: pointer;
}
button:hover {
    background-color: rgb(103, 38, 14);
    border-color: rgb(103, 38, 14);
}
</style>