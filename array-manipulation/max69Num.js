/** Q. You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.
 */

const givenNum = 96996;

const array = givenNum.toString().split("");

for (let i = 0; i < array.length; i++) {
  if (array[i] === "6") {
    array[i] = array[i].replace("6", "9");
    break;
  }
}
const maxNum = parseInt(array.join(""), 10);
console.log(maxNum);
