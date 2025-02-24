<template>
  <div class="container">
    <header class="head"><b><b>Home - Page</b></b></header>
    <display-text title="The Explanation" :text="explanationText"/>
    <p class="head"><b><b>Now some Recommendations</b></b></p>
    <div id="pictures" v-for="picture in picturePaths">
      <Recommendation  :file-name="picture.fileName" :text="picture.text"></Recommendation>
    </div>
  </div>
  <p id="addSmallP">all pictures are stock pictures, the recommendations are freely made up</p>

</template>

<script>

import DisplayText from "@/components/DisplayText.vue";
import Recommendation from "@/components/Recommendation.vue";

export default {
  components: {
    Recommendation,
    DisplayText
  },
  mounted: function() {
    let nameTitle = this.$route.params.name
    console.log(nameTitle);
  },
  data() {
    return {
      picturePaths: [
        {fileName:"chickencurry.jpg", text:'Wow the Chicken Curry is so amazing!'},
        {fileName:"tomatensauce.jpg",
        text:'Thanks for the wonderful recipe it´s soo delicious.'},
        {fileName:"schokomuffin.jpg",
        text: 'That chocolate muffin is buzzin!!!'}
      ],
      explanationText: 'How do I even use this website?<br>'+
          'By pressing the Navigation Button in the <br>'+
          'top left corner of every Page you can decide<br>'+
          'which Page you want to visit.<br>'+
          'You are currently reading the Home Page.<br>'+
          'Visiting th Start Page will welcome you.<br>'+
          'Visiting the Cooking Page will offer you <br>'+
          'a variety of cooking Recipes.<br>'+
          'Same for the baking Recipes.<br>'+
          'Both the baking and cooking Page will allow you<br>'+
          'to add your own recipe, delete any recipe or just<br>'+
          'reload after editing.',
    }
  }
}
</script>

<style scoped>
#addSmallP {
  bottom: 0;
  font-size: 11px;
}
.container {
    margin: 0;
    padding: 0;
    background-color: var(--background-orange);
    text-align: center;
}
.head {
  padding: 6px;
}
#pictures {
  display: flex;
}
</style>

