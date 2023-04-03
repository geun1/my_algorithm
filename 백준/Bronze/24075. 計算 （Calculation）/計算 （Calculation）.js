//문제: 24075
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(Number);
  if (b > 0) console.log(`${a + b}\n${a - b}`);
  else console.log(`${a - b}\n${a + b}`);
}
