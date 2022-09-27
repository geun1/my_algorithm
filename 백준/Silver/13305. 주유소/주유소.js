const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  const city = +input[0];
  const city_interval = input[1].split(" ").map((v) => BigInt(v));
  const price = input[2].split(" ").map((v) => BigInt(v));

  let cur_price = price[0];
  let result = 0n;
  for (let i = 0; i < city - 1; i++) {
    result += cur_price * city_interval[i];
    if (cur_price > price[i + 1]) cur_price = price[i + 1];
  }

  console.log(String(result));
}
