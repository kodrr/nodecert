class OddError extends Error {
  constructor(varName = "") {
    //error message = varName + ' must be even'
    super(varName + " must be even");
  }
  get name() {
    return "OddError";
  }
}

function codify(error, code) {
  error.code = code;
  return error;
}

function doTask(amount) {
  if (typeof amount !== "number")
    throw codify(
      new TypeError("amount must be a number"),
      "ERR_AMOUNT_MUST_BE_NUMBER"
    );
  if (amount <= 0)
    throw codify(
      new RangeError("amount must be greater than zero"),
      "ERR_AMOUNT_MUST_EXCEED_ZERO"
    );
  if (amount % 2) throw codify(new OddError("amount"), "ERR_MUST_BE_EVEN");
  return amount / 2;
}

try {
  const result = doTask(3);
  //result() //this will throw a TypeError
  console.log("result", result);
} catch (err) {
  console.log(err);
  if (err.code === "ERR_AMOUNT_MUST_BE_NUMBER") {
    console.error("wrong type");
  } else if (err.code === "ERR_AMOUNT_MUST_EXCEED_ZERO") {
    console.error("out of range");
  } else if (err.code === "ERR_MUST_BE_EVEN") {
    console.log("this is the name of error Object", err.name);
    console.error("cannot be odd");
  } else {
    console.error("Unknown error", err);
  }
}
