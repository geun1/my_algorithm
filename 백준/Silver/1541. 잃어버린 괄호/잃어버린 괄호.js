const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(input) {
  let data = input.split("-");
  let result = 0;
  let data1 = data.map((v) => v.split("+").map((v) => +v));
  for (let i = 0; i < data1.length; i++) {
    data1[i] = data1[i].reduce((a, b) => a + b, 0);
  }
  data1.length > 1
    ? (result = data1.reduce((a, b) => a - b, data1[0] * 2))
    : (result = data1[0]);

  console.log(result);
}
