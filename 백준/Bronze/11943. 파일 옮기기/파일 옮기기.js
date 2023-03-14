//문제: 11943
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(Number);
  const [c, d] = input[1].split(" ").map(Number);
  a + d < b + c ? console.log(a + d) : console.log(b + c);
}