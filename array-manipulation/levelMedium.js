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

console.table("Updated matrix : ", matrix);
