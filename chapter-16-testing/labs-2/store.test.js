const store = require("./store");

test("Should throw if input is not buffer", (done) => {
  store("string", (err) => {
    expect(err).toStrictEqual(Error("input must be a buffer"));
    done();
  });
});

test("Should respond with data object", (done) => {
  store(Buffer.from("some data"), (err, data) => {
    expect(err == null).toBe(true);
    expect(typeof data === "object").toBeTruthy();
    expect(data).toHaveProperty("id");
    expect(data.id).toHaveLength(4);
    done();
  });
});
