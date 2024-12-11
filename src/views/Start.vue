<template>
  <div class="container">
    <NavigationBar />
    <header><b>Start</b></header>
    <img
        src="../assets/logo.png"
        alt="logo_picture"
        :class="{'scroll-animation': isScrolled}"
        ref="logo"
    />
    <div>
      <DisplayText :text="text" :title="title" />
    </div>
    <Footer />
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
.container {
  text-align: center;
}

img {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.load-animation {
  animation: zoomIn 1s;
}

.scroll-animation {
  transform: scale(0.9);
  opacity: 0.8;
}

@keyframes zoomIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

</style>