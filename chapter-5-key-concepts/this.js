// this refers to the object on which the function was called, not the object
//which the function was assigned to:
// const obj = {id: 1, fn: function(){console.log('this is the id ' + this.id)}}
// const obj2 = {id:2, fn: obj.fn}
// obj2.fn() //2

//walang 'this' and 'prototype' ang arrow function

//Global scope: When a function is called in the global scope (outside of any object or class),
//this refers to the global object. In a web browser, the global object is usually window, while in Node.js, it is global
const Obj = {
  id: 1,
  getSomething: function () {
    console.log(this.id);
  },
};

const obj1 = { fn: Obj.getSomething };
obj1.fn();

function myFunction() {
  console.log(this); // Output: [object Window] (in a browser)
}

myFunction();

//Object method: When a function is invoked as a method of an object,
//this refers to the object itself.
//The this value is dynamically set to the object on which the method is called.

const myObject = {
  name: "John",
  sayHello: function () {
    console.log("Hello, " + this.name + "!");
  },
};

myObject.sayHello(); // Output: Hello, John!

//Constructor function: When a function is used as a constructor to create
//new objects using the new keyword, this refers to the newly created object.
function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name); // Output: John

//Event handlers: When a function is used as an event handler,
//such as in response to a button click, this typically refers to the element that triggered the event.
const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log("Button clicked:", this);
});
