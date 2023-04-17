//문제: 27962
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let egnaro = input[1].split("").reverse().join("");
  let answer = "";
  for (let i = 0; i <= +input[0]; i++) {
    let check = 0;
    let temp = input[1].slice(0, i);
    let pmet = egnaro.slice(0, i).split("").reverse().join("");
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === pmet[j]) {
        check++;
      }
    }
    if (check === temp.length - 1) {
      answer = "YES";
    }
  }
  if (answer === "YES") console.log(answer);
  else console.log("NO");
}