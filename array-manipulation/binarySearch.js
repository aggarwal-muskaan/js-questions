// Q1. Binary Search
const sortedArray = [2, 4, 5, 6, 6, 9, 13, 19];
const foundAtIndex = binarySearch(sortedArray, 9, 0, sortedArray.length - 1);

if (foundAtIndex !== -1)
  console.log(`Element found at position - ${foundAtIndex}`);
else console.log("Element not found!");

function binarySearch(arr, el, start, end) {
  if (end >= start) {
    const mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === el) return mid;
    else if (arr[mid] > el) return binarySearch(arr, el, start, mid - 1);
    else if (arr[mid] < el) return binarySearch(arr, el, mid + 1, end);
  }
  return -1;
}

function iterativeBinarySearch(arr, el) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === el) return mid;
    else if (arr[mid] > el) end = mid - 1;
    else if (arr[mid] < el) start = mid + 1;
  }
  return -1;
}

//  Q2. Find first and last position of an element in sorted array.

const element = 6;
// output should be -> first:3, last:5

const leftmost = firstOccurence(sortedArray, element);
leftmost === -1
  ? console.log("Not found")
  : console.log(`leftmost index - ${leftmost}`);
const rightmost = lastOccurence(sortedArray, element);
rightmost === -1
  ? console.log("Not found")
  : console.log(`rightmost index - ${rightmost}`);

if (leftmost !== -1 && rightmost !== -1)
  console.log(`Number of occurrences - ${rightmost - leftmost + 1}`);

function firstOccurence(arr, el) {
  let start = 0,
    end = arr.length - 1;
  let index = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === el) {
      index = mid;
      end = mid - 1;
    } else if (arr[mid] > el) end = mid - 1;
    else if (arr[mid] < el) start = mid + 1;
  }
  return index;
}

function lastOccurence(arr, el) {
  let start = 0,
    end = arr.length - 1;
  let index = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === el) {
      index = mid;
      start = mid + 1;
    } else if (arr[mid] > el) end = mid - 1;
    else if (arr[mid] < el) start = mid + 1;
  }
  return index;
}

// Q3. Find peak (i key) in mountain array
// array[i-1] < arr[i] > arr[i+1] => ascending order, peak, descending order
const mountainArray = [3, 7, 8, 9, 10, 11, 11, 11, 4, 2, 1, 0, -1];
// output = 11 = arr[5]

let start = 0,
  end = mountainArray.length - 1,
  mid = start + Math.floor((end - start) / 2);

while (start < end) {
  if (mountainArray[mid] < mountainArray[mid + 1]) start = mid + 1;
  else end = mid;

  mid = start + Math.floor((end - start) / 2);
}
console.log(`Peak is ${mountainArray[mid]} with index ${mid}`);

// Q4. Find pivot in rotated array
//  array[i-1]>=array[i]<=array[i+1]
const rotatedArray = [6, 7, 8, 9, 1, 2, 4]; // array[4] = pivot = 1

function findPivot(rotatedArray) {
  let start = 0,
    end = rotatedArray.length - 1,
    mid = start + Math.floor((end - start) / 2);

  while (start < end) {
    if (rotatedArray[mid] < rotatedArray[0]) start = mid + 1;
    else end = mid;

    mid = start + Math.floor((end - start) / 2);
  }
  //   here, start=end
  console.log(`Pivot is ${rotatedArray[mid]} with index ${mid}`);
}

findPivot(rotatedArray);

// Q5. Square root of an integer
const double = 36;
console.log(`Square root of ${double} is ${squareRoot(double)}`);
const integer1 = 231;
const tempSolution = squareRoot(integer1);
console.log(
  `Square root of ${integer1} is ${decimalPrecision(integer1, 2, tempSolution)}`
);

function squareRoot(element) {
  let start = 0,
    end = element / 2,
    ans = -1,
    mid = element / 4;

  while (start <= end) {
    if (mid * mid === element) return mid;
    else if (mid * mid > element) end = mid - 1;
    else {
      ans = mid;
      start = mid + 1;
    }

    mid = start + Math.floor((end - start) / 2);
  }

  return ans;
}

function decimalPrecision(element, precision, wholeNum) {
  let point = 1,
    solution = wholeNum;
  for (let i = 1; i <= precision; i++) {
    point = point / 10;
    for (let j = wholeNum; j * j <= element; j += point) {
      console.log(solution, j, 0.05 + 0.01);
      solution = j;
    }
  }
  return solution;
}
