<template>
    <NavigationBar/>
    <header>Start</header>
    <div>
      <DisplayText :text="text" :title="title"/>
    </div>
    <Footer/>
</template>
<script>
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
        text: "hallo ich bin ein text"
      }
    }
}
</script>