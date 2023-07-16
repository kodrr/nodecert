"use strict";
const { promisify } = require("util");

const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const opA = (cb) => {
  setTimeout(() => {
    cb(null, "A");
  }, 500);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, "B");
  }, 250);
};

const opC = (cb) => {
  setTimeout(() => {
    cb(null, "C");
  }, 125);
};

const promiseA = promisify(opA);
const promiseB = promisify(opB);
const promiseC = promisify(opC);
promiseA()
  .then((a) => {
    print(a);
    return promiseB();
  })
  .then((b) => {
    print(b);
    return promiseC();
  })
  .then((c) => {
    print(c);
  })
  .catch((err) => console.error(err));
