//문제: 25858
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input.shift().split(" ").map(Number);
  let total = input.reduce((a, b) => +a + +b, 0);
  input.forEach((e) => {
    console.log((e * b) / total);
  });

}
