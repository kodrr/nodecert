const uppercase = require("./uppercase.js");

test("Throw when input is not string", async () => {
  expect(() => uppercase(5)).toThrowError(Error("input must be a string"));
  expect(() => uppercase({})).toThrowError(Error("input must be a string"));
  expect(() => uppercase(undefined)).toThrowError(
    Error("input must be a string")
  );
  expect(() => uppercase(false)).toThrowError(Error("input must be a string"));
});

test("Should return uppercase of the string input", async () => {
  expect(uppercase("test")).toStrictEqual("TEST");
  expect(uppercase("TEST")).toStrictEqual("TEST");
});
