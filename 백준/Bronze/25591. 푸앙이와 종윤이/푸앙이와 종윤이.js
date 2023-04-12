//문제: 25591
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [first, second] = input[0].split(" ").map(Number);
  let a = 100 - first;
  let b = 100 - second;
  let c = 100 - (a + b);
  let d = a * b;
  let answer = c;
  let answer2 = d;
  let q = parseInt(d / 100);
  let r = d % 100;
  if (d > 99) {
    answer = c + q;
    answer2 = r;
  }
  console.log(a, b, c, d, q, r);
  console.log(answer, answer2);
}
