const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  const numArr = input[1].split(" ").map((e) => e * 1);
  const num = input[0] * 1;
  const dpArr = [];
  for (let i = 0; i < num; i++) {
    dpArr[i] = numArr[i];
    if (dpArr[i] < dpArr[i - 1] + numArr[i]) {
      dpArr[i] = dpArr[i - 1] + numArr[i];
    }
  }
  console.log(Math.max(...dpArr));
}
