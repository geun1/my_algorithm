const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
solution(input);

function solution(input) {
  result = [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1,
  ];
  for (let i = 0; i < input.length; i++) {
    if (result[input.charCodeAt([i]) - 97] === -1)
      result[input.charCodeAt([i]) - 97] = i;
  }
  console.log(result.join(" "));
}