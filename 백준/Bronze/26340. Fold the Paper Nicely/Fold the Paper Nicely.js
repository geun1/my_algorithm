//문제: 26340
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let k = input.shift();
  input.forEach((e, idx) => {
    console.log(`Data set: ${e}`);
    let [a, b, c] = e.split(" ").map(Number);
    for (let i = 0; i < c; i++) {
      if (a > b) a = parseInt(a / 2);
      else b = parseInt(b / 2);
    }
    if (a > b) console.log(`${a} ${b}`);
    else console.log(`${b} ${a}`);
    if (!(idx === k - 1)) console.log("");
  });
}