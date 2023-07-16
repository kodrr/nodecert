const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 1 rejected');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 800);
});

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log('At least one promise fulfilled:', result);
  })
  .catch((error) => {
    console.log('All promises rejected:', error);
  });


  

