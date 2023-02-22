//문제: 1330
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(Number);
  if (a === b) console.log("==");
  else {
    a > b ? console.log(">") : console.log("<");
  }
}
