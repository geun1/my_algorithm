//문제: 20215
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [w, h] = input[0].split(" ").map(Number);
  console.log(w + h - Math.sqrt(w * w + h * h));
}
