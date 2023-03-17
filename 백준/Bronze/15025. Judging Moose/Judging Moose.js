//문제: 15025
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (a === b) {
    if (a === 0) console.log("Not a moose");
    else console.log(`Even ${a * 2}`);
  } else console.log(`Odd ${b * 2}`);
}
