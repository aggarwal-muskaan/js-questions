const testMap = [2, 4, 6, 7, 8];

const newPolyfillReduce = testMap.map((el, index) => ({ key: el, index }));

Array.prototype.polyfillReduce = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

const myMap = testMap.polyfillReduce((el, index) => ({ key: el, index }));

console.table(
  "original array-",
  testMap,
  "using reduce() -",
  newPolyfillReduce,
  "same alteration using reduce polyfill -",
  myMap
);
