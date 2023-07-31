//문제: 2562
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let max = 0;
  let n = 0;
  input.map(Number).forEach((e, idx) => {
    if (max < e) {
      max = e;
      n = idx;
    }
  });
  console.log(max + "\n" + (n + 1));
}
