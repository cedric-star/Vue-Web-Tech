export class RecipeSorter {
    constructor() {
        this.sorted = [];
    }

    async sort(name, names) {
        console.log('--sorting--');

        try {
            for (let i = name.length; i > 1; i--) {

                let word = name.substring(0, i);
                console.log('testing word: '+word);

                for (let j=0; j<names.length; j++) {
                    if (names[j].name.toLowerCase().includes(word.toLowerCase())&& !this.sorted.includes(names[j])) {
                        console.log('found: '+names[j].name);
                        this.sorted.push(names[j]);

                    }
                }

            }
        } catch (error) {
            console.log('error: ',error);
        }
        return this.sorted;
        //this.printL(this.sort())
    }

}