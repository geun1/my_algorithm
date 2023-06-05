//문제: 11057
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  const matrix = Array.from({ length: n + 1 }, () => new Array(10).fill(0n));
  matrix[0] = [1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n];
  for (let i = 0; i < n; i++) {
    matrix[i][0] = 1n;
  }
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < 10; j++) {
      let sum = 0n;
      for (let k = 0; k <= j; k++) {
        sum += matrix[i - 1][k];
      }
      matrix[i][j] = sum;
    }
  }
  console.log((matrix[n][9] % 10007n).toString());
}
