//문제: 9613
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
  }
  let n = input.shift() * 1;
  input.forEach((e) => {
    let result = 0;
    const split_e = e.split(" ").map(Number);
    let num = split_e.shift();
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        if (j > i) result += gcd(split_e[i], split_e[j]);
      }
    }
    console.log(result);
  });
}
