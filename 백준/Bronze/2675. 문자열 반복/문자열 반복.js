const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    let result_2 = [];
    let data = input[i].split(" ");
    if (data.length === 2) {
      for (let k = 0; k < data[1].length; k++) {
        let result_1 = [];
        for (let j = 0; j < data[0]; j++) result_1.push(data[1][k]);
        result_2.push(result_1.join(""));
      }
      console.log(result_2.join(""));
    }
  }
}
