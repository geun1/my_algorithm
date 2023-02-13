//문제: 2193
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = BigInt(input[0]);

  fibo_arr = [0n, 1n, 1n];
  for (let i = 3n; i <= n; i++) {
    fibo_arr[i] = fibo_arr[i - 1n] + fibo_arr[i - 2n];
  }
  console.log(fibo_arr[n].toString());
}
