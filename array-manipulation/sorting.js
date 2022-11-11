const unsortedArr = [11, 23, 5, 6, 12, 100, 1, 5];

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/**
 Various JavaScript engines implement different sort algorithms: 
 V8: Quicksort or Insertion Sort (for smaller arrays) 
 Firefox: Merge sort
 */

// Q1. Insertion sort - O(n^2)
const insertionSort = (unsortedArr) => {
  for (let i = 1; i < unsortedArr.length; i++) {
    let j = i;

    while (unsortedArr[j - 1] > unsortedArr[j] && j >= 0) {
      /* SWAP */
      //   let k;
      //   k = unsortedArr[j - 1];
      //   unsortedArr[j - 1] = unsortedArr[j];
      //   unsortedArr[j] = k;
      [unsortedArr[j - 1], unsortedArr[j]] = [
        unsortedArr[j],
        unsortedArr[j - 1],
      ];
      --j;
    }
  }
  console.log(unsortedArr);
};
const sortUsingInsertion = unsortedArr;
insertionSort(sortUsingInsertion);

// Q2. Merge sort - O(n logn)

function solve(arr, start, mid, end) {
  const arr1 = arr.slice(start, mid + 1);
  const arr2 = arr.slice(mid + 1, end + 1);
  // console.log(arr1, arr2);
  let i = 0,
    j = 0,
    k = start;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) arr[k++] = arr1[i++];
    else arr[k++] = arr2[j++];
  }

  while (i < arr1.length) {
    arr[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    arr[k++] = arr2[j++];
  }
}

function mergeSort(arr, start, end) {
  if (start >= end) return; // base case

  const mid = start + Math.floor((end - start) / 2);

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);

  solve(arr, start, mid, end);
}

const sortUsingMergeAlgo = unsortedArr;
mergeSort(sortUsingMergeAlgo, 0, sortUsingMergeAlgo.length - 1);
console.log(sortUsingMergeAlgo);

// Q3. Bubble sort

// Q4. Heap sort

// Q5. Quick sort

const partition = (arr, start, end) => {
  let count = 0;
  let pivot = arr[start];

  for (let i = start; i <= end; i++) {
    if (arr[i] < pivot) count++;
  }
  const pivotIndex = start + count;
  swap(arr, start, pivotIndex);

  let i = start,
    j = end;
  while (i < pivotIndex && j > pivotIndex) {
    while (arr[i] <= pivot) i++;
    while (arr[j] > pivot) j--;

    if (i < pivotIndex && j > pivotIndex) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return pivotIndex;
};

const quickSort = (arr, start, end) => {
  const partition = partition(arr, start, end);

  quickSort(arr, start, partition);
  quickSort(arr, partition + 1, end);
};

const sortUsingQuickAlgo = unsortedArr;
quickSort(sortUsingQuickAlgo, 0, sortUsingQuickAlgo.length - 1);
console.log(sortUsingQuickAlgo);

// Q6. Selection sort

const arr = [6, -90, 87, 0, -1, 5, 0, 0, 0, 34, 90, -1, 20];

for (let i = 0; i < arr.length - 1; i++) {
  let min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) min = j;
  }
  swap(arr, min, i);
}

console.log(arr);

// Variation - Stable Selection Sort

const arr1 = [4, 6, 3, 4, 3, 1];

for (let i = 0; i < arr1.length - 1; i++) {
  let min = i;
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[j] < arr1[min]) min = j;
  }

  let minValue = arr1[min];
  while (min > i) {
    arr1[min] = arr1[min - 1];
    min--;
  }
  arr1[i] = minValue;
}

console.log(arr1);

// Q7. Bucket sort

// Q6. Binary Search
