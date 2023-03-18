//문제: 15873
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[0].split("");
  let a, b;
  if (arr.length === 2) console.log(+arr[0] + +arr[1]);
  else if (arr.length === 3) {
    if (arr[1] === "0") {
      console.log(10 + arr[2] * 1);
    } else if (arr[2] === "0") {
      console.log(arr[0] * 1 + 10);
    }
  } else console.log(20);
}
