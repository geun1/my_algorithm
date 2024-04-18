//문제: 4673
//0. 문제 이해 :
//1. 시간 복잡도 확인:
//2. 적용 알고리즘 확인:
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    let ans = "";
    function check(num) {
        let number = num;
        let result = 0;

        for (let i = 0; i < String(num).length; i++) {
            // number를 10으로 나눠가면서 각 자리수를 result에 합한다.
            result += number % 10;
            number = Math.floor(number / 10);
        }

        return num + result;
    }

    const range = 10000;

    let selfNumbers = Array(range + 1).fill(true);

    for (let i = 0; i <= range; i++) {
        selfNumbers[check(i)] = false;
    }

    for (let i = 0; i < range; i++) {
        if (selfNumbers[i]) {
            ans += i + "\n";
        }
    }
    console.log(ans.trim());
}
