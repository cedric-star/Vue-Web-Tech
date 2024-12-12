<template>
  <div class="container">

    <header><b>Welcome to the one and only Aroma Atlas</b></header>
    <img
        src="../assets/logo.png"
        alt="logo_picture"
        ref="logo"
    />
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
import { ref, onMounted, onUnmounted } from 'vue';
import NavigationBar from '../components/NavigationBar.vue';
import Footer from '../components/Footer.vue';
import DisplayText from "@/components/DisplayText.vue";

export default {
  components: {
    DisplayText,
    NavigationBar,
    Footer
  },
  data() {
    return {
      title: "Start Text",
      text: "hallo ich bin ein text",
      isScrolled: false
    }
  },
  setup() {
    const logo = ref(null);

    const handleScroll = () => {
      if (window.scrollY > 50) { // Threshold zum Aktivieren der Scroll-Animation
        logo.value.classList.add('scroll-animation');
      } else {
        logo.value.classList.remove('scroll-animation');
      }
    };

    onMounted(() => {
      // Initiale Animation beim Laden der Seite
      logo.value.classList.add('load-animation');
      setTimeout(() => {
        logo.value.classList.remove('load-animation');
      }, 1000);

      // Scroll Event Listener hinzufügen
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      // Event Listener entfernen, wenn die Komponente zerstört wird
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      logo
    };
  },
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