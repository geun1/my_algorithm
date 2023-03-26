//문제: 18398
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input.shift();
  for (let i = 0; i < n; i++) {
    let a = +input.shift();
    for (let j = 0; j < a; j++) {
      const arr = input.shift().split(" ").map(Number);
      console.log(`${arr[0] + arr[1]} ${arr[0] * arr[1]}`);
    }
  }
}
