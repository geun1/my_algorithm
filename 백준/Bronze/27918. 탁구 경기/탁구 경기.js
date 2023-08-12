//문제: 27918
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input.shift();
  let d = 0;
  let p = 0;
  answer = "";
  for (let i = 0; i < n; i++) {
    if (input[i] === "D") d++;
    else p++;
    if (d - p === 2 || p - d === 2) {
      answer = `${d}:${p}`;
      break;
    }
  }
  if (answer === "") console.log(`${d}:${p}`);
  else console.log(answer);
}
