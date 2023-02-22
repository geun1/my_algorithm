//문제: 1000
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  console.log(input[0].split(" ")[0] * 1 / input[0].split(" ")[1] * 1);
}
