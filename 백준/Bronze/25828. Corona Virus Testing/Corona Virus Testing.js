//문제: 25828
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c] = input[0].split(" ").map(Number);
  let num = a * b;
  let num2 = a + b * c;
  if (num === num2) return console.log(0);
  num > num2 ? console.log(2) : console.log(1);
}
