//문제: 25191
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let c = +input[0];
  const [a, b] = input[1].split(" ").map(Number);
  let num = parseInt(a / 2) + b;
  c > num ? console.log(num) : console.log(c);
}