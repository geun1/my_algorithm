//문제: 26736
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let a = 0;
  let b = 0;

  input[0].split("").forEach((e) => {
    if (e === "A") a++;
    if (e === "B") b++;
  });
  console.log(`${a} : ${b}`);
}
