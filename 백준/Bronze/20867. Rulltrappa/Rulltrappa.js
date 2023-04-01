//문제: 20867
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [M, S, G] = input[0].split(" ").map(Number);
  const [A, B] = input[1].split(" ").map(Number);
  const [L, R] = input[2].split(" ").map(Number);
  // M S G -> 계단 수 , 1초당 에스컬레이터 올라가는 계단수, 걸어올라가는 1초당 계단수
  // A, B -> 1/A, 1/B 만큼 기다려야함
  // L, R -> 왼쪽 수, 오른쪽 수
  let left = L / A;
  let right = R / B;

  M % G ? (left += M / G + 1) : (left += M / G);
  M % S ? (right += M / S + 1) : (right += M / S);

  left < right ? console.log("friskus") : console.log("latmask");
}
