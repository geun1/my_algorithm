//문제: 11948
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c, d] = [input[0], input[1], input[2], input[3]]
    .map(Number)
    .sort((a, b) => b - a);
  const [e, f] = [input[4], input[5]].map(Number).sort((a, b) => b - a);
  console.log(a + b + c + e);
}
