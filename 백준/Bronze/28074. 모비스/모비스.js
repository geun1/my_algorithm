//문제: 28074
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let answer = 1;
  const arr = input[0].split("");
  if (!arr.includes("M")) answer *= 0;
  if (!arr.includes("O")) answer *= 0;
  if (!arr.includes("B")) answer *= 0;
  if (!arr.includes("I")) answer *= 0;
  if (!arr.includes("S")) answer *= 0;
  if (answer) console.log("YES");
  else console.log("NO");
}
