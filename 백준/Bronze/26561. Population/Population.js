//문제: 26561
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  input.forEach((e) => {
    let [a, b] = e.split(" ").map(Number);
    a -= parseInt(b / 7);
    a += parseInt(b / 4);
    console.log(a);
  });
}
