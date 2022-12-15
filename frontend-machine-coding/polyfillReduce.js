const testReduce = [2, 4, 6, 7, 8];

const newPolyfillReduce = testReduce.reduce((prev, curr) => {
  return prev + curr;
}, 0);

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callbackFn.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

const myReduce = testReduce.myReduce((prev, curr) => {
  return prev + curr;
}, 0);

console.table(
  "original array-",
  testReduce,
  "using reduce() -",
  newPolyfillReduce,
  "same alteration using reduce polyfill -",
  myReduce
);
