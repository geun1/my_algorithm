//문제: 21665
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const orginal = [];
  let answer = 0;
  const [a, b] = input.shift().split(" ").map(Number);
  for (let i = 0; i < a; i++) {
    orginal.push(input.shift().split(""));
  }
  input.shift();
  //   console.log(orginal);
  for (let i = 0; i < a; i++) {
    input
      .shift()
      .split("")
      .forEach((e, idx) => {
        if (e === "B" && orginal[i][idx] === "B") answer++;
        else if (e === "W" && orginal[i][idx] === "W") answer++;
      });
  }
  console.log(answer);
}
