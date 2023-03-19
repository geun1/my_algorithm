//문제: 16486
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = [input[0], input[1]].map(Number);
  console.log(a * 2 + 2 * b * 3.141592);
}
