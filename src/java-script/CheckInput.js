
export class CheckInput {
    constructor() {
        this.regexName = /^[a-zA-Z]*$/;
        this.regesxText = /^[\s\S]{1,800}$/
    }

    checkName(name) {
        return this.regexName.test(name);
    }
    checkText(text) {
        return this.regesxText.test(text);
    }
}