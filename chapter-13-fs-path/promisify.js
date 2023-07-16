function transformToPromise(fn) {
  return function () {
    var args = arguments;

    return new Promise(function (resolve, reject) {
      try {
        var result = fn.apply(null, args);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };
}

// Example usage:
function add(a, b) {
  return a + b;
}

var addPromise = transformToPromise(add);
addPromise(2, 3)
  .then(function (result) {
    console.log(result); // Output: 5
  })
  .catch(function (error) {
    console.log(error);
  });
