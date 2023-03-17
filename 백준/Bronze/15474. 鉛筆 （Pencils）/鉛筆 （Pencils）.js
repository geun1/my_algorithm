//문제: 15474
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [n, a, b, c, d] = input[0].split(" ").map(Number);
  console.log(Math.min(Math.ceil(n / a) * b, Math.ceil(n / c) * d));
}
