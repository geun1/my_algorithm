//문제: 18698
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  input.forEach((e) => {
    if (e.indexOf("D") === -1) console.log(e.length);
    else console.log(e.indexOf("D"));
  });
}
