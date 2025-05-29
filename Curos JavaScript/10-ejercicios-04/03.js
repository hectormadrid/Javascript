function callback(fn, ...rest) {
  fn(...rest);
}

/* function log(...args) {
  console.log(args);
}

 */


callback((...args) => {
console.log(args);
}, 1 ,2 ,3 ,4)