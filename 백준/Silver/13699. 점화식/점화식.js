const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(input) {
  let dp = [1n, 1n];
  for (let i = 2; i <= Number(input); i++) {
    let sum = 0n;
    for (let j = 0; j < i; j++) {
      sum += BigInt(dp[j]) * BigInt(dp[i - j - 1]);
    }
    dp.push(sum);
  }
  console.log(dp[Number(input)].toString());
}
