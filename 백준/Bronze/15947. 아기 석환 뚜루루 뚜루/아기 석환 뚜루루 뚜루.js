//문제: 15947
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const music = [
    "baby",
    "sukhwan",
    "tururu",
    "turu",
    "very",
    "cute",
    "tururu",
    "turu",
    "in",
    "bed",
    "tururu",
    "turu",
    "baby",
    "sukhwan",
  ];
  let n = +input[0];
  let a = parseInt(n / 14);
  let b = (n - 1) % 14;
  let answer = music[b];
  if ((b === 2 || b === 6 || b === 10) & (a < 3)) {
    for (let i = 0; i < a; i++) {
      answer += "ru";
    }
  } else if (b === 2 || b === 6 || b === 10) {
    answer = "tu+ru*";
    answer += a + 2;
  } else if ((b === 3 || b === 7 || b === 11) & (a < 4)) {
    for (let i = 0; i < a; i++) {
      answer += "ru";
    }
  } else if (b === 3 || b === 7 || b === 11) {
    answer = "tu+ru*";
    answer += a + 1;
  }

  console.log(answer);
}
