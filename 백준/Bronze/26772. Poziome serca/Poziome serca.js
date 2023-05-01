//문제: 26772
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const answer = [
    " @@@   @@@  ",
    "@   @ @   @ ",
    "@    @    @ ",
    "@         @ ",
    " @       @  ",
    "  @     @   ",
    "   @   @    ",
    "    @ @     ",
    "     @      ",
  ];
  let n = +input[0];
  answer.forEach((e) => {
    let line = "";
    for (let i = 0; i < n; i++) {
      line += e;
    }
    console.log(line);
  });
}
