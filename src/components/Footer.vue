<template>
    <footer>
        <div class="foot_items">
            <p><b>Impressum</b></p>
            <p>©Cedric Wünsch</p>
            <p><button @click="downloadFile">Documentation</button></p>
        </div>
        
        
    </footer>
</template>
<script>
export default {
    name: "Footer",
    methods: {
        downloadFile() {
            const link = document.createElement('a');
            link.href = "./logo.png"; // Ersetze durch den Pfad zu deiner Datei
            link.download = "logo.png"; // Ersetze durch den gewünschten Dateinamen
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
</script>

<style>
#grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Change 3 to the number of columns you want */
    gap: 10px; /* Space between grid items */
    padding: 10px; /* Padding around the grid */
}

#grid img {
    width: 100%; /* Makes the images responsive */
    height: auto; /* Maintains aspect ratio */
}

body, html {
    margin: 0;
    padding: 0;

}
footer {
    display: flex;
    flex-direction: column;
    min-height: 16px;
}
.foot_items {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: antiquewhite;
    text-align: center;

    padding: 0;
    margin: 0;
    padding: 8px;
    border-radius: 2px;
}
</style>