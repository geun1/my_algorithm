//문제: 13496
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = input.shift();
  let answer = "";
  for (let i = 0; i < n; i++) {
    const [a, b, c] = input.shift().split(" ").map(Number);
    let result = 0;
    let can_go = b * c;
    for (let j = 0; j < a; j++) {
      if (+input[j].split(" ")[0] <= can_go) {
        result += +input[j].split(" ")[1];
      }
    }
    input.splice(0, a);
    answer += `Data Set ${i + 1}:\n${result}\n\n`;
  }
  console.log(answer.trim());
}
