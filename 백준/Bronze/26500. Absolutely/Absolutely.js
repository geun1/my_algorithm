//문제: 26500
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  input.forEach((e) => {
    const [a, b] = e.split(" ").map(Number);
    console.log(Math.abs(a - b).toFixed(1));
  });
}
