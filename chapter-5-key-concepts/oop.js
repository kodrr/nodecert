//inheritance - child class inherits properties and methods from paren class
//abstraction - Abstraction is a principle that says that a class should only represent information that is relevant to the problem's context. In plain English, only expose to the outside the properties and methods that you're going to use. If it's not needed, don't expose it.
//encapsulation - which methods and properties needs to be hidden
//polymorphism - many forms, child inherits method from parent but can return different bahavior from that of the parent, different face but same method for resusability flexibility

class Character {
  constructor(speed) {
    this.speed = speed;
  }
  move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
}

class Enemy extends Character {
  constructor(name, phrase, power, speed) {
    super(speed);
    this.name = name;
    this.phrase = phrase;
    this.power = power;
  }
  sayPhrase = () => console.log(this.phrase);
  attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
}

class Alien extends Enemy {
  constructor(name, phrase, power, speed) {
    super(name, phrase, power, speed);
    this.species = "alien";
  }
  fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
}

class Bug extends Enemy {
  constructor(name, phrase, power, speed) {
    super(name, phrase, power, speed);
    this.species = "bug";
  }
  hide = () => console.log("You can't catch me now!");
}

class Robot extends Enemy {
  constructor(name, phrase, power, speed) {
    super(name, phrase, power, speed);
    this.species = "robot";
  }
  transform = () => console.log("Optimus prime!");
}

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50);
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60);
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100);
const bug2 = new Bug("Erik", "I drink decaf!", 5, 120);
const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30);
const Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40);

//object composition - by using composition we can assign properties and methods to objects in a more flexible way than inheritance allows, so objects only get what they need and nothing else.

const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100);

const addFlyingAbility = (obj) => {
  obj.fly = () => console.log(`Now ${obj.name} can fly!`);
};

addFlyingAbility(bug1);
bug1.fly(); // output: "Now Buggy can fly!"
