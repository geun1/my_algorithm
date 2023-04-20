//문제: 25703
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  let answer = "int a;\nint *ptr = &a;\n";
  if (n >= 2) answer += "int **ptr2 = &ptr;\n";
  for (let i = 3; i <= n; i++) {
    let star = "";
    for (let j = 0; j < i; j++) {
      star += "*";
    }
    answer += `int ${star}ptr${i} = &ptr${i - 1};\n`;
  }
  console.log(answer.trim());
}
