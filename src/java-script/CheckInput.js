
export class CheckInput {
    constructor() {
        this.regexName = /^[a-zA-ZäöüÄÖÜß\-\s]{1,50}$/;
        this.regesxText = /^.{1,800}$/
    }

    checkName(name) {
        return this.regexName.test(name);
    }
    checkText(text) {
        return this.regesxText.test(text);
    }
}