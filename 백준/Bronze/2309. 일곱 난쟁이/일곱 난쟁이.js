//문제: 2309
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let sum = 0;
  input.forEach((e) => {
    sum += +e;
  });
  let ii = 0;
  let jj = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
      if (sum - input[i] - input[j] === 100) {
        ii = +input[i];
        jj = +input[j];
      }
    }
  }
  input
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((e) => {
      if (e != ii && e != jj) console.log(e);
    });
}
