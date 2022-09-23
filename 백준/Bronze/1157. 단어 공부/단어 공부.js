const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().toUpperCase().split("");
solution(input);

function solution(str) {
  let dic = {};
  str.map((item) => (item in dic ? (dic[item] += 1) : (dic[item] = 1)));
  let result = "";
  let count = 0;
  for (char in dic) {
    if (dic[char] > count) {
      count = dic[char];
      result = char;
    } else if (dic[char] === count) result = "?";
  }
  console.log(result);
}
