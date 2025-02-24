<template>
  <header class="navigator" >
    <div v-if="showField">
      <ul class="nav_ul" id="nav_ul">
        <li><router-link to="/home" class="nav_list">Home</router-link></li>
        <li><router-link to="/start" class="nav_list">Start</router-link></li>
        <li><router-link to="/cooking" class="nav_list">Cooking</router-link></li>
        <li><router-link to="/baking" class="nav_list">Baking</router-link></li>
        <li><router-link to="/imprint" class="nav_list">Imprint</router-link></li>
      </ul>
    </div>
    <div class="rollout">
      <button @click="this.toggleContent()">Navigation</button>

      <input type="checkbox" v-model="isDarkMode"><nobr></nobr>
      <p>{{ this.theme }}</p><nobr></nobr>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavigationBar',
  methods: {
    toggleContent() {this.showField = !this.showField},
  },
  data() {
    return {
      showField: false,
      theme: 'light',
      isDarkMode: localStorage.getItem('theme') === 'dark'
    }
  },
  watch: {
    isDarkMode: {
      handler(val) {
        const theme = val ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      },
      immediate: true,
    }
  }
}
</script>

<style scoped>
.nav_list {
  font-size: medium;
  color: var(--strong-orange);
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
  margin: 0;
  background-color: var(--light-orange);
  left: 0;
  right: 0;
  top: 0;
  padding: 8px;
  border-radius: 2px;
}
button {
  background-color: var(--strong-orange);
  color: var(--light-orange);
  border: solid var(--strong-orange);
  border-radius: 2px;
  padding: 2px;
  margin: 2px;
  cursor: pointer;
}
input {
  background-color: var(--strong-orange);
}
button:hover {
  background-color: var(--dark-orange);
  border-color: var(--dark-orange);
}
</style>