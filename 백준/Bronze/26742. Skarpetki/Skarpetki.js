//문제: 26742
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let a = 0;
  let b = 0;

  input[0].split("").forEach((e) => {
    if (e === "C") a++;
    if (e === "B") b++;
  });
  console.log(parseInt(a / 2) + parseInt(b / 2));
}
