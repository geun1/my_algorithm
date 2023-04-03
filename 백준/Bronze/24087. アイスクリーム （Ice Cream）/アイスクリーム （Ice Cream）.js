//문제: 24087
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [s, a, b] = [input[0], input[1], input[2]].map(Number);
  if (s <= a) console.log(250);
  else console.log(Math.ceil((s - a) / b) * 100 + 250);
}
