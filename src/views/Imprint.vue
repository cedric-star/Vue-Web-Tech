<template>
  <div class="all">
    <DisplayText title="Imprint" :text="this.text"></DisplayText>
  </div>
  <p id="addSmallP">the imprint is freely made up</p>
</template>

<script>
import DisplayText from "@/components/DisplayText.vue";

export default {
  components: {DisplayText},
  data() {
    return {
      text: '<ul>' +
          '<li>Aroma Atlas</li>' +
          '<li>Hochschule Harz</li>' +
          '<li>38855 Wernigerode</li>' +
          '<li>aroma.atlas@web.de</li>' +
          '</ul>'
    }
  }
}
</script>

<style scoped>
p {
  color: var(--dark-orange);
}
html, body {
  align-content: center;
}
.all {
  padding-top: 6px;
}
#addSmallP {
  margin-top: 50vh;
  margin-left: 2px;
  bottom: 0;
  font-size: 11px;
  top: 100%
}
</style>