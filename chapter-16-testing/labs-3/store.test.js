"use strict";
// make Jest work with nodes setTimeout instead of overriding it
global.setTimeout = require("timers").setTimeout;
const store = require("./store");

test("Should throw if input is not buffer", async () => {
  await expect(store("string")).rejects.toStrictEqual(
    Error("input must be a buffer")
  );
});

test("should respond with data object", async () => {
  const data = await store(Buffer.from("some data"));
  expect(typeof data === "object").toBeTruthy();
  expect(data).toHaveProperty("id");
  expect(data.id).toHaveLength(4);
});
