//문제: 15700
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(BigInt);

  a % 2n === 1n && b % 2n === 1n
    ? console.log(((a * b - 1n) / 2n).toString())
    : console.log(((a * b) / 2n).toString());
}
