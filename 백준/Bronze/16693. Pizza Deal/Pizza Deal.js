//문제: 16693
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(Number);
  const [c, d] = input[1].split(" ").map(Number);
  (c * c * Math.PI) / d > a / b
    ? console.log("Whole pizza")
    : console.log("Slice of pizza");
}
