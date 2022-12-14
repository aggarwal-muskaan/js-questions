// Q1. The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

const cumulative = [1, 3, 5, 7, 9];
let total = [];
let count = 0;
// const arr = cumulative.reduce((prev, curr, i) => {
//   total[i] = prev + curr;
//   return prev + curr;
// }, 0);

// console.log(total);
cumulative.forEach((num, index) => {
  count += num;
  total[index] = count;
});

console.log(total);

// Q2. Return its positive cumulative sum.

const initial = [1, -2, 3, 4, -6];
let newArr = [];
let index = -1;
const arr = initial.reduce((prev, curr) => {
  const sum = prev + curr;
  if (sum > 0) newArr[++index] = sum;
  return sum;
}, 0);

console.log(newArr);

// Q3. For an array of integers nums, an identical twin is defined as pair (i, j) where nums[i] is equal to nums[j] and i < j

const array = [1, 2, 2, 3, 2, 1];
let twinIndices = [];

for (let i = 0; i < array.length - 1; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j])
      twinIndices.push({ [i]: array[i], [j]: array[j] });
  }
}

console.log(twinIndices);

// Q4. Given an array of integers, find the elements which have an even number of digits.

const array1 = [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442];
array1.forEach((num) => {
  const lengthOfNum = num.toString().replace(".", "").length;
  /* Approach - 2 */
  //   let lengthOfNum = 0;
  //   while (num !== 0) {
  //     num = Math.floor(num / 10);
  //     ++lengthOfNum;
  //   }
  if (lengthOfNum % 2 == 0) console.log(lengthOfNum, num);
});

// Q5. Given two sorted arrays A and B, find the merged sorted array C by merging A and B.
const a1 = [1, 2, 3, 4, 4],
  a2 = [2, 4, 5, 5, 10];
// let a3 = a1.concat(a2).sort();

const mergeSortedArr = () => {
  let a3 = [],
    i = 0,
    j = 0,
    k = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] > a2[j]) a3[k++] = a2[j++];
    else a3[k++] = a1[i++];
  }

  while (i < a1.length) {
    a3[k++] = a1[i++];
  }

  while (j < a2.length) {
    a3[k++] = a2[j++];
  }
  return a3;
};
console.log(mergeSortedArr(a1, a2));

// Q6. Consider an array that is divided into two parts and both of the parts are sorted individually. Given the mentioned array and the end index of the first part, merge them to create a sorted array. Update the same array with the merged elements. You can use extra auxiliary space.
const halfSorted = [1, 3, 5, 7, 9, 11, 0, 4, 6, 8],
  secondSplitArr = a1.splice(6, a1.length);
console.log(mergeSortedArr(halfSorted, secondSplitArr));

// Q7. Given an array A, find the maximum number of consecutive 1s in the array.

const A = [1, 1, 3, 2, 3, 1, 1, 1];
let countConsecutive = 0,
  result = 0;
for (let i = 0; i < A.length; i++) {
  if (A[i] === A[i + 1]) {
    countConsecutive++;
    result = Math.max(result, countConsecutive);
  } else countConsecutive = 0;
}

console.log("consecutive nums - ", result + 1);

// Q8. Given an unsorted array, find if it can be reordered to form an arithmetic sequence.

const randomArr = [4, 1, 2];

for (let i = 1; i < randomArr.length; i++) {
  let j = i;

  while (randomArr[j - 1] > randomArr[j] && j >= 0) {
    [randomArr[j - 1], randomArr[j]] = [randomArr[j], randomArr[j - 1]];
    --j;
  }
}

let formsAP = true;
for (let i = 1; i < randomArr.length; i++) {
  if (randomArr[i] - randomArr[i - 1] !== randomArr[i + 1] - randomArr[i]) {
    formsAP = false;
    break;
  }
}

console.log(
  formsAP,
  formsAP
    ? `formsAP with difference - ${squareSorted[1] - squareSorted[0]}`
    : "no arithmetic progression"
);

// Q9. Largest Contiguous Sum: A subarray is a part of an array including one or more contiguous/adjacent elements.
const arr1 = [4, -6, 2, 5];

let subArr1 = arr1[0],
  max = 0;

for (let i = 0; i < arr1.length; i++) {
  let sum = 0;
  for (let j = i; j < arr1.length; j++) {
    sum += arr1[j];
    if (sum > max) {
      max = sum;
      subArr1 = arr1.slice(i, j + 1);
    }
  }
}
console.log(subArr1, max);

/** Approach -2 with O(n) */
function kadaneAlgo(array) {
  let maxSum = array[0],
    sum = 0,
    startIndex = 0,
    endIndex = 0,
    s = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (sum > maxSum) {
      maxSum = sum;
      startIndex = s;
      endIndex = i;
    }

    if (sum < 0) {
      sum = 0;
      s = i + 1;
    }
  }
  return { maxSum, startIndex, endIndex };
}

var a = [-4, -6, -2, -5];
const { maxSum, startIndex, endIndex } = kadaneAlgo(a);
console.log(`Max sum is ${maxSum} from index ${startIndex} to ${endIndex}`);

//  Q10. Given a number n, find the nth row of pascal???s triangle.

const pascalRow = 4; // n
let prev = 1;

console.log(prev);
for (let i = 1; i <= pascalRow; i++) {
  const curr = (prev * (pascalRow - i + 1)) / i;
  console.log(curr);
  prev = curr;
}

//  Q11. Sum of all elements up to Nth row in a Pascal triangle

let sumAll = 0;
for (let i = 0; i < pascalRow; i++) {
  sumAll += Math.pow(2, i);
}

console.log(sumAll);
