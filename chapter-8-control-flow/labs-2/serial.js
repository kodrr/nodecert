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

const aPromisified = promisify(opA);
const bPromisified = promisify(opB);
const cPromisified = promisify(opC);

aPromisified()
  .then((a) => {
    print(a);
    return bPromisified();
  })
  .then((b) => {
    print(b);
    return cPromisified();
  })
  .then((c) => {
    print(c);
  });
