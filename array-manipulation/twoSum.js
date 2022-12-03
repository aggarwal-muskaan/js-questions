// Q. Two sum - Given an array A and an integer target, find the indices of the two numbers in the array whose sum is equal to the given target.

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const diffIndex = array.indexOf(target - array[i]); // has value -1 if no element found
    if (diffIndex >= 0 && diffIndex !== i) {
      return [i, diffIndex];
    }
  }
  return []; // no solution found
}

const ans = twoSum([1, 5, 4, 8, 9], 13);
console.log(ans); // [1,3]

/** LINEAR APPROACH - 2 */
const twoSumUsingHash = (array, target) => {
  const hashtable = {};
  for (let i = 0; i < array.length; i++) {
    hashtable[array[i]] = i;
  }
  for (let j = 0; j < array.length; j++) {
    let complement = target - array[j];

    if (hashtable.hasOwnProperty(complement) && hashtable[complement] !== j) {
      return [hashtable[complement], j];
    }
  }
  return null;
};

const output = twoSumUsingHash([9, 9], 18);
console.log(output); // [1,0]
