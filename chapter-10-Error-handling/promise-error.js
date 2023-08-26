class OddError extends Error {
  constructor(varname = "") {
    super(varname + " must be even");
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
  return new Promise((resolve, reject) => {
    if (typeof amount !== "number") {
      reject(
        codify(
          new TypeError("amount must be a number"),
          "ERR_AMOUNT_MUST_BE_NUMBER"
        )
      );
    }
    if (amount <= 0) {
      reject(
        codify(
          new RangeError("amount must be greater than zero"),
          "ERR_AMOUNT_MUST_EXCEED_ZERO"
        )
      );
    }
    if (amount % 2) {
      reject(codify(new OddError("amount"), "ERR_MUST_BE_EVEN"));
    }
    resolve(amount / 2);
  });
}

doTask(4)
  .then((data) => {
    //console.log('result', data)
    throw Error("spanner in the works");
  })
  .catch((err) => {
    if (err.code === "ERR_AMOUNT_MUST_BE_NUMBER") {
      console.error("wrong type");
    } else if (err.code === "ERR_AMOUNT_MUST_EXCEED_ZERO") {
      console.error("out of range");
    } else if (err.code === "ERR_MUST_BE_EVEN") {
      console.error("cannot be odd");
    } else {
      console.error("Unknown error", err);
    }
  });
