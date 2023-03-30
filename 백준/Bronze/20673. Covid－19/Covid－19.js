//문제: 20673
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = [input[0], input[1]].map(Number);
  if (b > 30) console.log("Red");
  else if (a <= 50 && b <= 10) console.log("White");
  else console.log("Yellow");
}
