//문제: 15128
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c, d] = input[0].split(" ").map(Number);
  let num = (a * c) / (b * d * 2);
  if (num == parseInt(num)) console.log(1);
  else console.log(0);
}
