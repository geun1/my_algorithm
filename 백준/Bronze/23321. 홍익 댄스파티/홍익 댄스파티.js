//문제: 23321
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let check = "";
  const arr = input[2].split("");
  for (let i = 0; i < input[2].length; i++) {
    if (arr[i] === "m") check += "d";
    else if (arr[i] === "l") check += "j";
    else if (arr[i] === "o") check += "c";
  }
  const check_arr = check.split("");
  let answer1 = "";
  let answer2 = "";
  let answer3 = "";
  let answer4 = "";
  let answer5 = "";
  for (let i = 0; i < check_arr.length; i++) {
    if (check_arr[i] === "d") {
      answer1 += "o";
      answer2 += "w";
      answer3 += "l";
      answer4 += "n";
      answer5 += ".";
    } else if (check_arr[i] === "j") {
      answer1 += ".";
      answer2 += "o";
      answer3 += "m";
      answer4 += "l";
      answer5 += "n";
    } else if (check_arr[i] === "c") {
      answer1 += ".";
      answer2 += ".";
      answer3 += "o";
      answer4 += "L";
      answer5 += "n";
    }
  }
  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
  console.log(answer4);
  console.log(answer5);
}
