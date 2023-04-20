//문제: 25628
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(Number);
  parseInt(a / 2) < b ? console.log(parseInt(a / 2)) : console.log(b);
}
