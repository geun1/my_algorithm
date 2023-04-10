//문제: 8595
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let str = "";
  let answer = 0;
  input[1].split("").forEach((e) => {
    if (
      (e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122) ||
      (e.charCodeAt(0) >= 65 && e.charCodeAt(0) <= 90)
    )
      str += " ";
    else str += e;
  });

  const arr3 = str.split(" ").map(Number);
  arr3.forEach((e) => {
    if (e !== 0) answer += e;
  });
  console.log(answer);
}
