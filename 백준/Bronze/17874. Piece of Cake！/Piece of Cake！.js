//문제: 17874
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let [a, b, c] = input[0].split(" ").map(Number);
  if (b < a / 2) b = a - b;
  if (c < a / 2) c = a - c;
  console.log(b * c * 4);
}
