//문제: 19698
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c, d] = input[0].split(" ").map(Number);
  let e = parseInt(b / d) * parseInt(c / d);
  a < e ? console.log(a) : console.log(e);
}
