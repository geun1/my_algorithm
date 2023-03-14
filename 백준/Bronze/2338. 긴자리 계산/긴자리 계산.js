//문제: 2338
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let a = BigInt(input[0]);
  let b = BigInt(input[1]);
  console.log(
    `${(a + b).toString()}\n${(a - b).toString()}\n${(a * b).toString()}`
  );
}