const testfilter = [2, 4, 6, 7, 8];

const newpolyFilter = testfilter.filter((el, index) => el % 2 === 0);

Array.prototype.polyFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) arr.push(this[i]);
  }
  return arr;
};

const myfilter = testfilter.polyFilter((el, index) => el % 2 === 0);

console.table(
  "original array-",
  testfilter,
  "using filter() -",
  newpolyFilter,
  "same alteration using filter polyfill -",
  myfilter
);
