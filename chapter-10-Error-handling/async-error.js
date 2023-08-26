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

//we can turnm this into async itself and have some other await in it and handel the rejections in try catch block
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

async function run() {
  try {
    const result = await doTask(3);
    console.log("result", result);
  } catch (err) {
    if (err instanceof TypeError) {
      console.error("wrong type");
    } else if (err instanceof RangeError) {
      console.error("out of range");
    } else if (err.code === "ERR_MUST_BE_EVEN") {
      console.error("cannot be odd");
    } else {
      console.error("Unknown error", err);
    }
  }
}

run();
