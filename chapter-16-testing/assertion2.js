const assert = require("assert");
// const pseudoReq = (url, cb) => {
//   setTimeout(() => {
//     if (url === "http://error.com") cb(Error("network error"));
//     else cb(null, Buffer.from("some data"));
//   }, 300);
// };
// pseudoReq("http://example.com", (err, data) => {
//   assert.ifError(err);
// });
// pseudoReq("http://error.com", (err, data) => {
//   assert.deepStrictEqual(err, Error("network error"));
// });

const { promisify } = require("util");
const timeout = promisify(setTimeout);
const pseudoReq = async (url) => {
  await timeout(300);
  if (url === "http://error.com") throw Error("network error");
  return Buffer.from("some data");
};
assert.doesNotReject(pseudoReq("http://example.com"));
assert.rejects(pseudoReq("http://error.com"), Error("network error"));
