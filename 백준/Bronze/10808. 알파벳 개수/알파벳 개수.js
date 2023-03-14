//문제: 10808
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let answer_arr = [];
  for (let i = 0; i < 26; i++) {
    answer_arr.push(0);
  }
  input[0].split("").forEach((e) => {
    answer_arr[e.charCodeAt(0) - 97]++;
  });
  console.log(answer_arr.join(" "));
}
