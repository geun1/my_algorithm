//문제: 17362
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let a = +input[0] % 8;
  if (a === 1) {
    console.log(1);
  } else if (a === 2 || a === 0) {
    console.log(2);
  } else if (a === 3 || a === 7) {
    console.log(3);
  } else if (a === 4 || a === 6) {
    console.log(4);
  } else if (a === 5) {
    console.log(5);
  }
}
