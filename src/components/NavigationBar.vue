<template>
    <header class="navigator">
        
        <div>
            <ul class="nav_ul" id="nav_ul">
                <tr><router-link to="/home"class="nav_list">Home</router-link></tr>
                <tr><router-link to="/start"class="nav_list">Start</router-link></tr>
                <tr><router-link to="/cooking"class="nav_list">Cooking</router-link></tr>
                <tr><router-link to="/backing"class="nav_list">Backing</router-link></tr>
            </ul>
        </div>
        <div class="rollout">
            <button @click="this.toggleContent()">Navigation</button>
        </div>

    </header>
</template>
<script>
export default {
    name: 'NavigationBar',
    methods: {
        toggleContent() {
            var element = document.getElementById("nav_ul");
            element.style.display = (element.style.display === "none") ? "block" : "none";
        }
    }
}
</script>
<style scoped>
.nav_list {
    font-size: medium;
    color: rgb(186, 72, 30);
    text-decoration: none;


}
.nav_list:hover {
    text-decoration: underline;
}
body, html {
    margin: 0;
    padding: 0;

}
.navigator {
    padding: 0;
    margin: 0;
    background-color: antiquewhite;
    left: 0;
    right: 0;
    top: 0;
    padding: 8px;
    border-radius: 2px;
}
button {
    background-color: rgb(186, 72, 30);
    color: antiquewhite;
    border: solid rgb(186, 72, 30);
    border-radius: 2px;
    padding: 2px;
    margin: 2px;
    cursor: pointer;
}
button:hover {
    background-color: rgb(103, 38, 14);
    border-color: rgb(103, 38, 14);
}
</style>