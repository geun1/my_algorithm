//문제: 13623
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c] = input[0].split(" ").map(Number);
  if (a === b && b === c) console.log("*");
  else if (a === b) console.log("C");
  else if (a === c) console.log("B");
  else if (c === b) console.log("A");
}
