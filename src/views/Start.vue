<template>
  <div class="container">
    <h3>Welcome to the one and only Aroma Atlas</h3>
    <img
        src="../assets/logo.png"
        alt="logo_picture"
        ref="logo"/>
    <div>
      <DisplayText :text="text" :title="title" />
      <p><b>Visit also:</b></p>
      <div class="routerLinks">
        <div><RouterLink to="/home" class="routerLinkCl">Home Page</RouterLink></div>
        <div><RouterLink to="/cooking" class="routerLinkCl">Cooking Recipes</RouterLink></div>
        <div><RouterLink to="/baking" class="routerLinkCl">Baking Recipes</RouterLink></div>
      </div>
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
  margin-bottom: 10px;
}
.container {
  text-align: center;
  padding-top: 50px;
}
.routerLinkCl {
  padding: 10px;
}
h3 {
  font-size: large;
  color: var(--dark-orange);
}
.routerLinkCl {
  color: var(--dark-orange);
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