<template>
    <footer class="foot_items">
            <p><b>Impressum</b></p>
            <p>©Cedric Wünsch</p>
            <p><a href="https://github.com/cedric-star/Vue-Web-Tech">Documentation</a></p>
    </footer>
</template>
<script>
export default {
    name: "Footer"

}
</script>

<style>

body, html {
    margin: 0;
    padding: 0;

}

.foot_items {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: antiquewhite;
    text-align: center;


    border-radius: 2px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);    

}
</style>