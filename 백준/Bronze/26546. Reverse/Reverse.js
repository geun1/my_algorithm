//문제: 26546
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  input.forEach((e) => {
    const [str, a, b] = e.split(" ");
    str.slice(+a, +b);
    console.log(str.slice(0, +a) + str.slice(+b, str.length));
  });
}
