//문제: 2576
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = [];
  let n = 0;
  input.forEach((e) => {
    if (+e % 2 === 1) {
      arr.push(+e);
      n += +e;
    }
  });
  !arr.length ? console.log(-1) : console.log(n + "\n" + Math.min(...arr));
}
