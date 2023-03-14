//문제: 11945
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [n, m] = input.shift().split(" ").map(Number);
  input.forEach((e) => {
    let line = "";
    const arr = e.split("");
    for (let i = arr.length - 1; i >= 0; i--) {
      line += arr[i];
    }
    console.log(line);
  });
}
