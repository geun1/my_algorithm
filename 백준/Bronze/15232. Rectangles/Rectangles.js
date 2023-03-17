//문제: 15232
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  for (let i = 0; i < +input[0]; i++) {
    let line = "";
    for (let j = 0; j < input[1]; j++) {
      line += "*";
    }
    console.log(line);
  }
}
