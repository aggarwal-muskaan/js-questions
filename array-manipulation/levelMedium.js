// Q1. Row Column Zero : Given a matrix, if any of the cells in the matrix is 0, set all the elements in its row and column to 0.

const matrix = Array(3)
  .fill()
  .map(() => Array(3).fill(1));
matrix[0][1] = 0;
matrix[1][2] = 0;
console.table("original matrix : ", matrix.length, matrix, matrix[0].length);

const rows = new Set();
const column = new Set();

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[i][j] === 0) {
      rows.add(i);
      column.add(j);
    }
  }
}
// taken example for 3x3 matrix

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    if (rows.has(i) || column.has(j)) {
      matrix[i][j] = 0;
    }
  }
}

//  Q2. Matrix Rotation : Given a matrix, rotate the matrix 90 degrees clockwise.

const matrix = [
  [1, 2, 7],
  [3, 4, 8],
  [5, 6, 9],
];
console.table("original matrix : ", matrix.length, matrix, matrix[0].length);

// transpose of original matrix
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < i; j++) {
    [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  }
}

// clockwise - rotate row
for (let i = 0; i < matrix.length; i++) {
  let k = matrix[0].length - 1;
  for (let j = 0; j < k; j++) {
    [matrix[i][j], matrix[i][k]] = [matrix[i][k], matrix[i][j]];
    k--;
  }
}

// ! anticlockwise - rotate column
// for (let i = 0; i < matrix.length; i++) {
//   let k = matrix[0].length - 1;
//   for (let j = 0; j < k; j++) {
//     [matrix[j][i], matrix[k][i]] = [matrix[k][i], matrix[j][i]];
//     k--;
//   }
// }

// Q3. Primes upto N

// Q4. Number of occurrence of each character in an array

const randomArray = ["a", "p", "p", "r", "o", "a", "c", "h"];

const occurrence = randomArray.reduce((prev, curr) => {
  prev[curr] = prev[curr] ? ++prev[curr] : 1;
  return prev;
}, {});
// output: {a: 2, p: 2, r: 1, o: 1, c: 1, h: 1 }
console.log(occurrence);

// Q5. Two sum - Given an array A and an integer target, find the indices of the two numbers in the array whose sum is equal to the given target.

// Q6. Kth Largest Element

// Q7. Find the angle between hour hand and minute hand of a clock
// Input : 8:15, output:157.5
// Input : 12:30, output:165

const givenTime = angleClock(8, 15);
function angleClock(hours, minutes) {
  const minAngle = 6 * minutes;
  const hourAngle = 30 * hours + 0.5 * minutes;

  const angle = Math.abs(hourAngle - minAngle);
  return Math.min(angle, 360 - angle);
}

console.log(`Minimum angle between hour & minute hand is : ${givenTime}`);
