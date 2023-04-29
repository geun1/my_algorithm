//문제: 26592
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  input.forEach((e) => {
    const [a, b] = e.split(" ").map(Number);
    console.log(
      `The height of the triangle is ${((a * 2) / b).toFixed(2)} units`
    );
  });
}
