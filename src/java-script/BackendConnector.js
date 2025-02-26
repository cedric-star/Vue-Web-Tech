

export class BackendConnector {
    constructor() {
        this.urlSendRecipe = 'http://localhost:8090/app/adddata';
        this.urlDeleteRecipe = 'http://localhost:8090/app/deletedata';
        this.urlGetRecipes = 'http://localhost:8090/app/getdata';
    }

    async sendRecipe(RecipeJson) {
       return await this.sendData(JSON.stringify(RecipeJson), this.urlSendRecipe);
    }
    async deleteRecipe(name, type) {
        return await this.sendData((name+';'+type), this.urlDeleteRecipe);
    }
    async getRecipes(type) {
        return await this.sendData(type, this.urlGetRecipes);
    }

    async sendData(content, url) {
        console.log('sending: '+JSON.stringify(content));

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: content
        });
        if (!response.ok) {return 'response not ok'};
        const message = await response.text();
        console.log('received');
        return message;
    }
}