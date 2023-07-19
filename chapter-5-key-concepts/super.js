//Calling the parent class constructor: When creating a subclass,
//you can use super() in the constructor of the subclass to call the constructor of the parent class.
//This ensures that the initialization code defined in the parent class constructor is executed before the subclass constructor.
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Call the parent class constructor
    this.age = age;
  }
}

const child = new Child("John", 10);
console.log(child.name); // Output: John
console.log(child.age); // Output: 10

//Accessing parent class methods:
//The super keyword can also be used to access and call methods defined in the parent class.
//This is useful when you want to override a method in the subclass but still need to use the parent class implementation.
class Parent {
  sayHello() {
    console.log("Hello from Parent!");
  }
}

class Child extends Parent {
  sayHello() {
    super.sayHello(); // Call the parent class method
    console.log("Hello from Child!");
  }
}

const child = new Child();
child.sayHello();
