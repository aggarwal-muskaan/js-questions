//  Q. Inversion Count
/* The inversion count of an array denotes how far is the array from being sorted.

If the array is sorted, inversion count is 0. If the array is sorted in reverse order, the inversion count is maximum.

More formally, the inversion count of an array A is the number of pairs (i, j) such A[i] < A[j] and i > j.

Example
Lets take the following array:
8, 4, 1, 2

This array has an inversion count of 5.
(8, 4), (8, 1), (8, 2), (4, 1), (4, 2)

Given an array A, calculate the inversion count of the array.
 */

function mergeSortedArr(arr, start, mid, end) {
  const arr1 = arr.slice(start, mid + 1);
  const arr2 = arr.slice(mid + 1, end + 1);

  let swap = 0;
  let i = 0,
    j = 0,
    k = start;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      arr[k++] = arr2[j++];
      swap += mid + 1 - (start + i);
    } else arr[k++] = arr1[i++];
  }

  while (i < arr1.length) {
    arr[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    arr[k++] = arr2[j++];
  }

  return swap;
}

function mergeSort(arr, start, end) {
  let count = 0;
  if (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    count += mergeSort(arr, start, mid);
    count += mergeSort(arr, mid + 1, end);

    count += mergeSortedArr(arr, start, mid, end);
  }
  return count;
}

const arr = [8, 4, 1, 2]; // O(n log n)
console.log(mergeSort(arr, 0, arr.length - 1));

/**
 * Can be done with O(n^2)
 */
