//문제: 13136
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [r, c, n] = input[0].split(" ").map(Number);
  let r_n,
    c_n = 0;
  r % n === 0 ? (r_n = r / n) : (r_n = parseInt(r / n) + 1);
  c % n === 0 ? (c_n = c / n) : (c_n = parseInt(c / n) + 1);
  console.log(r_n * c_n);
}
