const unsortedArr = [11, 23, 5, 6, 12, 100, 1, 5];

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
insertionSort(unsortedArr);

// Q2. Merge sort - O(n logn)

// Q3. Bubble sort

// Q4. Heap sort

// Q5. Quick sort

// Q6. Selection sort

// Q7. Bucket sort

// Q6. Binary Search
