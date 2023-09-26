//실버5 K번째 수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
 
//str->num 타입 변환
 
const K = input[0].split(" ").map(Number)[1] - 1; //K번째 수 뽑고 index를 맞추기 위해 -1
const A = input[1].split(" ").map(Number).sort((a, b) => a - b); //숫자 배열 오름차순
console.log(A[K]);