//문제: 25704
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  let p = +input[1];
  const arr = [];
  const arr2 = [];
  if (n >= 5) arr.push(1);
  if (n >= 10) arr.push(2);
  if (n >= 15) arr.push(3);
  if (n >= 20) arr.push(4);
  if (arr.includes(1)) arr2.push(p - 500);
  if (arr.includes(2)) arr2.push(p * 0.9);
  if (arr.includes(3)) arr2.push(p - 2000);
  if (arr.includes(4)) arr2.push(p * 0.75);
  if (n < 5) return console.log(p);
  Math.min(...arr2) < 0 ? console.log(0) : console.log(Math.min(...arr2));
}