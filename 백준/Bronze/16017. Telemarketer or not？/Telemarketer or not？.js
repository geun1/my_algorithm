//문제: 16017
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c, d] = [+input[0], +input[1], +input[2], +input[3]];
  if ((a === 9 || a === 8) && (d === 9 || d === 8) && b === c)
    console.log("ignore");
  else console.log("answer");
}
