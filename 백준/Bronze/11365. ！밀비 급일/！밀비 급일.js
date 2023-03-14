//문제: 11365
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    if (e === "END") return;
    let answer = "";
    const arr = e.split("");
    for (let i = arr.length - 1; i >= 0; i--) {
      answer += arr[i];
    }
    console.log(answer);
  });
}
