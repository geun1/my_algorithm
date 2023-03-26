//문제: 18198
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[0].split("");
  let a = 0;
  let b = 0;
  arr.forEach((e, idx) => {
    if (e === "A") {
      a += +arr[idx + 1];
    }
    if (e === "B") {
      b += +arr[idx + 1];
    }
  });
  a > b ? console.log("A") : console.log("B");
}
