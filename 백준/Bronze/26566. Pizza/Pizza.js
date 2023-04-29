//문제: 26566
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let t = input[0];
  for (let i = 1; i <= +t; i++) {
    const [a, b] = input[i * 2 - 1].split(" ").map(Number);
    const [c, d] = input[i * 2].split(" ").map(Number);
    if (a / b < (Math.PI * c * c) / d) console.log("Whole pizza");
    else console.log("Slice of pizza");
  }
}
