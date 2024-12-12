<template>
    <header class="navigator" >
        
        <div v-if="showField==true">
            <ul class="nav_ul" id="nav_ul">
                <li><router-link to="/home" class="nav_list">Home</router-link></li>
                <li><router-link to="/start" class="nav_list">Start</router-link></li>
                <li><router-link to="/cooking" class="nav_list">Cooking</router-link></li>
                <li><router-link to="/baking" class="nav_list">Baking</router-link></li>
            </ul>
        </div>
        <div class="rollout">
            <button @click="this.toggleContent()">Navigation</button>
        </div>

    </header>
</template>
<script>
export default {
    name: 'NavigationBar',
    methods: {
        toggleContent() {this.showField = !this.showField}
    },
    data() {
      return {
        showField: false
      }
    }
}
</script>
<style scoped>
.nav_list {
    font-size: medium;
    color: rgb(186, 72, 30);
    text-decoration: none;


}
.nav_list:hover {
    text-decoration: underline;
}
ul {
  text-align: left;
  list-style-type: none;
}
body, html {
    margin: 0;
    padding: 0;

    top: 0;
}
.navigator {
    padding: 0;
    margin: 0;
    background-color: antiquewhite;
    left: 0;
    right: 0;
    top: 0;
    padding: 8px;
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