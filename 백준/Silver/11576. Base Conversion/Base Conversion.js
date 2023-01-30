const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

solution(input);

function solution(input) {
  const [a_base, b_base] = input.shift().split(" ").map(Number);
  const digit = +input.shift();
  let a = input[0].split(" ").map(Number);
  let a_10 = 0;
  for (let i = digit - 1; i >= 0; i--) {
    a_10 += a[i] * Math.pow(a_base, digit - i - 1);
  }
  const result = [];
  while (a_10 >= b_base) {
    result.unshift(a_10 % b_base);
    a_10 = Math.floor(a_10 / b_base);
  }
  result.unshift(a_10);
  console.log(result.join(" "));
}