//문제: 15059
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const a = input[0].split(" ").map(Number);
  const b = input[1].split(" ").map(Number);
  let result = 0;
  if (a[0] < b[0]) {
    result += b[0] - a[0];
  }
  if (a[1] < b[1]) {
    result += b[1] - a[1];
  }
  if (a[2] < b[2]) {
    result += b[2] - a[2];
  }
  console.log(result);
}
