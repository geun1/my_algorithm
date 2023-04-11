//문제: 24860
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  console.log(
    (input[0].split(" ").map(Number)[0] * input[0].split(" ").map(Number)[1] +
      input[1].split(" ").map(Number)[0] * input[1].split(" ").map(Number)[1]) *
      input[2].split(" ").map(Number)[0] *
      input[2].split(" ").map(Number)[1] *
      input[2].split(" ").map(Number)[2]
  );
}
