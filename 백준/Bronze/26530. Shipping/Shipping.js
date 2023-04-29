//문제: 26530
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input.shift();
  for (let i = 0; i < n; i++) {
    let k = +input.shift();
    let answer = 0;
    for (let j = 0; j < k; j++) {
      const [a, b, c] = input.shift().split(" ");
      answer += b * c;
    }
    console.log(`$${answer.toFixed(2)}`);
  }
}
