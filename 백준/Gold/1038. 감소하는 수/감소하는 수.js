//문제: 1038
//0. 문제 이해 :
//1. 시간 복잡도 확인:
//2. 적용 알고리즘 확인:
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function checkNaeRueGaNunSu(num) {
    let numStr = num.toString();
    for (let i = 0; i < numStr.length - 1; i++) {
        if (numStr[i] <= numStr[i + 1]) {
            return false;
        }
    }
    return true;
}
function solution(input) {
    const N = +input[0];

    const combination = (n) => {
        const result = [];
        const dfs = (start = 0, arr = []) => {
            if (arr.length === n) {
                result.push(arr.sort((a, b) => b - a).join(""));
                return;
            }
            for (let i = start; i < 10; i++) {
                dfs(i + 1, [...arr, i]);
            }
        };
        dfs();
        return result;
    };
    answer_list = [];
    for (let i = 1; i <= 10; i++) {
        answer_list = answer_list.concat(combination(i));
    }
    answer_list.sort((a, b) => a - b);
    // console.log(combination(3));
    // console.log(answer_list);
    N > 1022 ? console.log(-1) : console.log(answer_list[N]);
}
