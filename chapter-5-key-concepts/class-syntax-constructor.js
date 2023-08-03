//class is syntactic sugar that actually creates function
//if you notice it's like an object and the constructor is the method
//'this' inside the constructor is referring to its global scope or the Wolf object
class Wolf {
  constructor(name) {
    this.name = name;
  }
}
// The extends keyword makes prototypal inheritance a lot simpler. In the example code, class Dog
// extends Wolf will ensure that the prototype of Dog.prototype will be Wolf.prototype
class Dog extends Wolf {
  //super will access the Wolf constructor and will serve as the same input for clas Dog
  //super will make Dog constructor same as Wolf constructor
  constructor(name) {
    super(`${name} the dog`);
  }
  woof() {
    console.log(this.name + ": woof");
  }
}

const rufus = new Dog("Rufus");
rufus.woof();
