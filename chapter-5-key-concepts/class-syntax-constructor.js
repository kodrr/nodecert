class Wolf {
    constructor(name){
        this.name = name
    }

}

class Dog extends Wolf {
    //super will access the Wolf constructor and will serve as the same input for clas Dog
    //super will make Dog constructor same as Wolf constructor
    constructor(name) {
        super(`${name} the dog`)
    }
    woof(){console.log(this.name+': woof')}
}

const rufus = new Dog('Rufus')
rufus.woof();
