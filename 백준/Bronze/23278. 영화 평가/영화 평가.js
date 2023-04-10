//문제: 23278
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [n, l, s] = input[0].split(" ").map(Number);
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  arr.splice(0, l);
  const arr2 = arr.sort((a, b) => b - a);
  arr2.splice(0, s);
  console.log(arr2.reduce((acc, now) => acc + now, 0) / (n - l - s));
}
