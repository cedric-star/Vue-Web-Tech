<template>
  <div class="container">
    <img :src="getImagePath" alt="img">
    <div class="recommendation">
      <b>{{fileName.replace('.jpg','')}}</b>
      <DisplayText class="textField" :title="`User${genRanNum}`" :text="text"/>
    </div>
  </div>
</template>

<script>
import DisplayText from "../components/DisplayText.vue";

export default {
  components: {DisplayText},
  props: {
    fileName: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
  },
  computed: {
    getImagePath() {
      return require(`../assets/recipe-pictures/${this.fileName}`);
    },
    genRanNum() {
      return Math.floor(1000 + Math.random() * 9000).toString();
    }
  }
}
</script>

<style scoped>
.container{
  margin:0;
  padding:0;
  display:inline-grid;
  grid-template-columns:1fr 1fr;
}
img {
  scale: 0.8;
  transform: translateX(-80px);
  left: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
}
.textField {
  margin-top: 10px;
  margin-right: 50px;
}
.recommendation {
  padding-top: 100px;
  text-align: start;
}
</style>