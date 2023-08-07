//문제: 1309
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = [3n, 7n, 17n];
  let n = +input[0];
  for (let i = 3; i < n; i++) {
    arr.push((arr[i - 2] + arr[i - 1] * 2n) % 9901n);
  }
  console.log(arr[n - 1].toString());
}
