<template>
  <div class="container">
    <header><b>Welcome to the one and only Aroma Atlas</b></header>
    <img
        src="../assets/logo.png"
        alt="logo_picture"
        ref="logo"/>
    <div>
      <DisplayText :text="text" :title="title" />
      <p><b>Visit also:</b></p>
      <ul class="routerLinks">
        <li><RouterLink to="/home" class="routerLinkCl">Home Page</RouterLink></li>
        <li><RouterLink to="/cooking" class="routerLinkCl">Cooking Recipes</RouterLink></li>
        <li><RouterLink to="baking" class="routerLinkCl">Baking Recipes</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<script>

import DisplayText from "@/components/DisplayText.vue";

export default {
  components: {
    DisplayText
  },
  data() {
    return {
      title: "Where am I???",
      text: 'You just found the one and only<br>'+
      'website for finding, adding and also deleting<br>'+
      'the super unique and delitious recipes<br>'+
      'for your next cooking or baking experience!',
    }
  }
}
</script>

<style scoped>
.routerLinks {
  display: flex;
  flex-direction: column;
  list-style-type: none;
}
.container {
  text-align: center;
  padding-top: 50px;
}
li {
  padding: 10px;
}
header {
  font-size: large;
}
.routerLinkCl {
  color: black;
  text-decoration: none;
}
.routerLinkCl:hover {
  text-decoration: underline;
}
img {
  scale: 1.3;
  animation-name: getBigger;
  animation-duration: 3s;
}

@keyframes getBigger {
  0% {scale: 1;}
  100% {scale: 1.3;}
}
</style>