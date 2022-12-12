// Q. Given a list of strings A,
// find the longest common prefix among all the strings.

const arrayOfStrings = ["abc", "abef", "abccc", "abftg"];

function bruteForce(stringList) {
  const firstEl = stringList[0];
  let commonPrefix = "";

  for (let i = firstEl.length; i >= 0; i--) {
    let newCommon = firstEl.substring(0, i);
    let isPrefixFound = true;

    for (let j = 1; j < stringList.length; j++) {
      const prefix = stringList[j].substring(0, i);
      if (newCommon !== prefix) {
        isPrefixFound = false;
        break;
      }
    }

    if (isPrefixFound) {
      commonPrefix = newCommon;
      break;
    }
  }
  console.log(commonPrefix);
}
bruteForce(arrayOfStrings);

/*
 *      Approach - 2
 * O(MAX * n * log n ), n= array length, MAX= max num char in a string
 *
 *   sort the array of strings
 *   find the minimum length from first and last string
 *   find the common prefix between the first and last string
 */

function linearApproach(stringList) {
  if (!stringList.length) {
    console.log("");
    return;
  } else if (stringList.length === 1) {
    console.log(stringList[0]);
    return;
  }

  const sortedStrings = stringList.sort(); // sorts array in alphabetical order
  const lastIndex = stringList.length - 1;
  const minLength = Math.min(
    sortedStrings[0].length,
    sortedStrings[lastIndex].length
  );
  let i = 0,
    commonPrefix = "";

  while (i < minLength && sortedStrings[0][i] === sortedStrings[lastIndex][i]) {
    i++;
    commonPrefix = sortedStrings[0].substring(0, i);
  }
  console.log(commonPrefix);
}

linearApproach(arrayOfStrings);
