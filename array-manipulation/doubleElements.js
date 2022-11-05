// Q. How would you double elements of an array
// without creating additional variables using reduce?

// Example: [2,5,7,8] => [4,10,14,16]

const initialArray = [2, 5, 7, 8, 12];

// APPROACH -1 : concat returns a new array while push() returns updated array length
const doubleElements = initialArray.reduce(
  (prev, curr) => prev.concat(curr * 2),
  []
);
console.log("using concat", doubleElements);

// APPROACH -2 : using spread operator
const doubled = initialArray.reduce((prev, curr) => [...prev, curr * 2], []);

console.log("double the elements in an array using spread operator", doubled);

// APPROACH -3 : same array manipulated when passed as accumulator
initialArray.reduce((prev, curr, index) => {
  prev[index] = curr * 2;
  return prev;
}, initialArray);
console.log("initialArray", initialArray);

// APPROACH -4 : same array manipulated & return nothing - not using accumulator
const thirdApp = [2, 5, 7, 8, 12];

thirdApp.reduce((prev, curr, index) => {
  thirdApp[index] = curr * 2;
}, null);
console.log("thirdApproach", thirdApp);
