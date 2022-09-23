const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  solution(input[i]);
}

function solution(input) {
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    if (stack.length === 0) stack.push(input[i]);
    else {
      stack[stack.length - 1] === input[i] ? stack.push(input[i]) : stack.pop();
    }
    if (stack[0] == ")") return console.log("NO");
  }
  //   console.log(stack);
  if (stack.length === 0) console.log("YES");
  else console.log("NO");
}
