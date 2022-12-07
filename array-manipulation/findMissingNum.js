const arr1 = [1, 3, 5, 6, 2, 7];

function getMissingNum(array, N) {
  const arraySum = Math.floor((N * (N + 1)) / 2);
  let currSum = 0;

  for (const el of array) {
    currSum += el;
  }

  return arraySum - currSum;
}

const hashingMissing = (array) => {
  const lengthOfArray = array.length;
  let hashTemp = new Array(lengthOfArray + 1).fill(false);

  for (let i = 0; i < lengthOfArray; i++) hashTemp[array[i] - 1] = true;

  for (let i = 0; i < lengthOfArray + 1; i++) {
    if (!hashTemp[i]) console.log(i + 1);
  }
};

const missingNum = getMissingNum(arr1, arr1.length + 1);
console.log("Missing num is : ", missingNum);

// Approach - 2
hashingMissing(arr1);
