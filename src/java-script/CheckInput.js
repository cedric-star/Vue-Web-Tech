
export class CheckInput {
    constructor() {
        this.regexName = /^[a-zA-Z]*$/;
        this.regesxText = /^[\s\S]{0,800}$/
    }

    checkName(name) {
        return this.regexName.test(name);
    }

    checkAllAttributes(attributes) {
        attributes.forEach(attribute => {
           console.log(attribute.value)
        });
        return "x";
    }

}