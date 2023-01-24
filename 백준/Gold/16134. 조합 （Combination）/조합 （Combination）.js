//문제: test
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [n, k] = input[0].split(" ").map(Number);
  function combinationCalculator(n, k) {
    let C = Array(n + 1);
    for (let i = 0; i <= n; i++) {
      C[i] = Array(k + 1).fill(0);
    }
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= Math.min(i, k); j++) {
        if (j === 0 || j === i) {
          C[i][j] = 1;
        } else {
          C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
        }
      }
    }
    return C[n][k];
  }

  console.log(combinationCalculator(n, k) % 1000000007);
}
