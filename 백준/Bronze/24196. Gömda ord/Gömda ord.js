//문제: 24196
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let result = "";
  const arr = input[0].split("");
  let i = 0;
  //   console.log(arr);
  while (1) {
    if (i > arr.length - 1) {
      break;
    }
    result += arr[i];
    i += arr[i].charCodeAt(0) - 64;
  }
  console.log(result);
}
