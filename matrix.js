function diagonalDifference(matrix) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) {
        primaryDiagonal += matrix[i][j];
      }
      if (i + j == n - 1) {
        secondaryDiagonal += matrix[i][j];
      }
    }
  }
  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

let matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(diagonalDifference(matrix)); //output : 3
