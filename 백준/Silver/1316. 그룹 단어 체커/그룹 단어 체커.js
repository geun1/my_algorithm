//문제: 1316
//0. 문제 이해 :
//1. 시간 복잡도 확인:
//2. 적용 알고리즘 확인:
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    const caseCount = Number(input[0]);
    let countGroupWord = 0;

    for (let i = 1; i <= caseCount; i++) {
        const word = input[i];
        const letter = [];
        let isGroupWord = true;

        for (let j = 0; j < word.length; j++) {
            if (letter.indexOf(word[j]) === -1) {
                letter.push(word[j]);
            } else {
                if (letter.indexOf(word[j]) !== letter.length - 1) {
                    isGroupWord = false;
                    break;
                }
            }
        }

        if (isGroupWord) {
            countGroupWord += 1;
        }
    }

    console.log(countGroupWord);
}
