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
import Recipe from "../components/Recipe.vue";
import { onMounted } from 'vue';
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
    loadDataFromServer() {
      fetch('http://localhost:8090/app/getdata', {
        method: 'POST',

        body: this.type,
      })
          .then(response => response.text())
          .then(data => {
            if (data === "wrong recipe type") {
              console.log('bad response from backend: ' + data);
            } else {
              this.output = JSON.parse(data);
              console.log('output: ', this.output);
              this.loadedData = true;
            }
          })
          .catch(error => {
            this.loadedData = false;
            console.error('Fehler beim Laden der Daten: ', error);
          });
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