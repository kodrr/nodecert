const assert = require("assert");
// const add = require("./get-add-from-somewhere.js");
// assert.equal(add(2, 2), 4);

// const expect = require("expect");
// const add = require("./get-add-from-somewhere.js");
// expect(add(2, 2)).toStrictEqual(4);

// const obj = {
//   id: "1",
//   name: { first: "David", second: "Clements" },
// };

// //coercive in id property
// assert.deepEqual(obj, {
//   id: 1,
//   name: { first: "David", second: "Clements" },
// });

const obj = {
  id: 1,
  name: { first: "David", second: "Clements" },
};
// this will fail because id is a string instead of a number
assert.strict.deepEqual(obj, {
  id: "1",
  name: { first: "David", second: "Clements" },
});

const add = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw Error("inputs must be numbers");
  }
  return a + b;
};
//throws
assert.throws(() => add("5", "5"), Error("inputs must be numbers"));
assert.doesNotThrow(() => add(5, 5));
assert.equal(add(5, 5), 10);
