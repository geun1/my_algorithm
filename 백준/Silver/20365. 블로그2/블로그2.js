const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  n = +input[0];
  let resultB = 0;
  let resultR = 0;
  for (let i = 0; i < input[1].length; i++) {
    if (input[1][i] === "B") {
      resultB++;
      while (input[1][i] === "B") i++;
    }
  }
  for (let j = 0; j < input[1].length; j++) {
    if (input[1][j] === "R") {
      resultR++;
      while (input[1][j] === "R") j++;
    }
  }
  console.log(resultB < resultR ? resultB + 1 : resultR + 1);
}