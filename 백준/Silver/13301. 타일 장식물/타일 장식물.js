//문제: 13301
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  // 1 -> 1 1  4
  // 2 -> 1 2  6
  // 3 -> 3 2  10
  // 4 -> 3 5  16
  // 5 -> 8 5  26
  // 6 -> 8 13 42
  let n = BigInt(input[0]);

  const dp = [4n, 6n];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp[n - 1n].toString());
}