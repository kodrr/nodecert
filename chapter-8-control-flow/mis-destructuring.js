let name = {
  first: "Nelson",
  middle: "Obama",
  last: "Mandela",
};

let name2 = { ...name, first: "Donald" };

console.log(name2);

let names = ["Pedro", "Juan", "Celia"];

let newNames = names.map((name) => "Moses");
console.log(newNames);
