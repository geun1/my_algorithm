//문제: 26731
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = 0;
  for (let i = 0; i < 26; i++) {
    n += i + 65;
  }
  input[0].split("").forEach((e) => {
    n -= e.charCodeAt(0);
  });
  console.log(String.fromCharCode(n));
}
