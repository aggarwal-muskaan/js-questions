const testMap = [2, 4, 6, 7, 8];

const newPolyfillMap = testMap.map((el, index) => ({ key: el, index }));

Array.prototype.polyfillMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

const myMap = testMap.polyfillMap((el, index) => ({ key: el, index }));

console.table(
  "original array-",
  testMap,
  "using map() -",
  newPolyfillMap,
  "same alteration using map polyfill -",
  myMap
);
