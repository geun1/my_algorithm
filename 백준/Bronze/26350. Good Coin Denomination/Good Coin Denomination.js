//문제: 26350
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = input.shift();
  input.forEach((e, idx2) => {
    const arr = e.split(" ").map(Number);
    arr.shift();
    let answer = 1;
    arr.forEach((e, idx) => {
      if (arr.length - 1 > idx) {
        if (!(arr[idx] * 2 <= arr[idx + 1])) answer *= 0;
      }
    });
    if (answer)
      console.log(`Denominations: ${arr.join(" ")}\nGood coin denominations!`);
    else
      console.log(`Denominations: ${arr.join(" ")}\nBad coin denominations!`);
    if (!(n - 1 === idx2)) console.log("");
  });
}
