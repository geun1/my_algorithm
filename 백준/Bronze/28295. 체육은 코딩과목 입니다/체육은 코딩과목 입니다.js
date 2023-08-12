//문제: 28295
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = ["N", "E", "S", "W"];
  let now = 400;
  input.forEach((e) => {
    if (e === "1") now += 1;
    if (e === "2") now -= 2;
    if (e === "3") now -= 1;
  });
  console.log(arr[now % 4]);
}
