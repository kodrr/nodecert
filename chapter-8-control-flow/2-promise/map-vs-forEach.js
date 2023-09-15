let arr1 = [1, 2, 3];
let sum = 0;
let arr2 = [];
//forEach returns void, map and filter returns array
let arrforeach = arr1.forEach((el) => arr2.push(el));
let arrmap = arr1.map((el) => el * 2);
let red = arr1.reduce((x, y, z, arr) => x + y);

const assert = require("assert");
console.log(arr1);
console.log(sum);
console.log(arrforeach);
console.log(arrmap);
console.log(arr2);
console.log(red);
assert.equal(red, 6);
