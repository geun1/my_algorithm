const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  let numArr1 = input[0].split("");
  let numArr2 = input[1].split("");
  for (let k = 0; k < 14; k++) {
    let newArr1 = [];
    let newArr2 = [];
    for (let i = 0; i < numArr1.length; i++) {
      const num1 = numArr1[i] * 1 + numArr2[i] * 1;
      num1 >= 10 ? newArr1.push(num1 - 10 + "") : newArr1.push(num1 + "");
    }
    for (let j = 0; j < numArr2.length; j++) {
      const num2 = numArr2[j] * 1 + numArr1[j + 1] * 1;
      num2 >= 10 ? newArr2.push(num2 - 10 + "") : newArr2.push(num2 + "");
    }
    numArr1 = newArr1;
    numArr2 = newArr2;
  }
  console.log(numArr1[0] + "" + numArr2[0] + "");
}
