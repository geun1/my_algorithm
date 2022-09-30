const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim() * 1;

solution(input);

function solution(input) {
  let lst = [-1, -1, -1, 1, -1, 1, 2, -1, 2, 3, 2, 3, 4];
  if (input <= 12) {
    return console.log(lst[input]);
  }
  for (let i = 13; i <= input; i++) {
    lst[i - 3] < lst[i - 5]
      ? lst.push(lst[i - 3] + 1)
      : lst.push(lst[i - 5] + 1);
  }
  console.log(lst[input]);
}
