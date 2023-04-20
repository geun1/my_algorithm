//문제: 25932
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  let answer = "";
  input.forEach((e) => {
    answer += e;
    if (e.split(" ").includes("17") && e.split(" ").includes("18"))
      answer += "\nboth\n\n";
    else if (e.split(" ").includes("17")) answer += "\nzack\n\n";
    else if (e.split(" ").includes("18")) answer += "\nmack\n\n";
    else answer += "\nnone\n\n";
  });
  console.log(answer.trim());
}
