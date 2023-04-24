//문제: 18310
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const n = +input[0];
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  n % 2 === 1 ? console.log(arr[parseInt(n / 2)]) : console.log(arr[n / 2 - 1]);
}
