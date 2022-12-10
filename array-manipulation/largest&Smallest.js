// Q1. Find duplicates in an integer array
const arrayWithDuplicates = [2, 5, 7, 2, 4, 5, 9, 7, 1, 5, 2];

function removeDuplicates(initialArr) {
  const object = initialArr.reduce((prev, curr) => {
    prev[curr] = prev[curr] ? ++prev[curr] : 1;

    return prev;
  }, {});

  for (const prop in object) {
    if (object[prop] > 1) console.log(prop, " : ", object[prop]);
  }
}

removeDuplicates(arrayWithDuplicates);

// Q2. How do you find the largest and smallest number in an unsorted integer array?

const numbers = [2, 4, 9, 2, 0, 16, 24];

const sorted = numbers.slice().sort(function (a, b) {
  return a - b;
});

let smallest = sorted[0],
  secondSmallest = sorted[1],
  secondLargest = sorted[sorted.length - 2],
  largest = sorted[sorted.length - 1];

console.log("Smallest: " + smallest);
console.log("Second Smallest: " + secondSmallest);
console.log("Second Largest: " + secondLargest);
console.log("Largest: " + largest);
