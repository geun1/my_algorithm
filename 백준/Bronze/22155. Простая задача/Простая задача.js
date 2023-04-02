//문제: 22155
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = input.shift();
  for (let i = 0; i < n; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    if ((a <= 1 && b <= 2) || (a <= 2 && b <= 1)) console.log("Yes");
    else console.log("No");
  }
}
