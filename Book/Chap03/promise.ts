/*
Promise è un modo per fare chiamate asyncrone
*/
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 5000);
  });

myPromise
.then(value => console.log(value))
.catch(err => console.log(err));

