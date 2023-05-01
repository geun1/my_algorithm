//문제: 26768
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let answer = "";
  input[0].split("").forEach((e) => {
    if (e === "a") answer += 4;
    else if (e === "e") answer += 3;
    else if (e === "i") answer += 1;
    else if (e === "o") answer += 0;
    else if (e === "s") answer += 5;
    else answer += e;
  });

  console.log(answer);
}