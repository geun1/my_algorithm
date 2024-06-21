//문제: 1235
//0. 문제 이해 :
//1. 시간 복잡도 확인:
//2. 적용 알고리즘 확인:
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    const num = input.shift();
    anwer = 0;
    for (let i = 1; i <= input[0].length; i++) {
        if (new Set(input.map((str) => str.slice(-i))).size === input.length) {
            anwer = i;
            break;
        }
    }
    console.log(anwer);
}
