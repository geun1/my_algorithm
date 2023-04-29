//문제: 26332
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  input.forEach((e) => {
    console.log(e);
    const [a, b] = e.split(" ").map(Number);
    let answer = 0;
    if (a > 1) console.log((a - 1) * (b - 2) + b);
    else console.log(b);
  });
}
