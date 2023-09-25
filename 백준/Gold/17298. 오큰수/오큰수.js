//문제: Doit012
//0. 문제 이해 :
//1. 시간 복잡도 확인:
//2. 적용 알고리즘 확인:
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    let n = +input.shift();
    const arr = input[0].split(" ").map(Number);
    const idx_stack = [];
    const result_arr = Array.from({ length: n }, () => -1);
    arr.forEach((e, idx) => {
        if (!idx_stack.length || arr[idx_stack[idx_stack.length - 1]] >= e)
            idx_stack.push(idx);
        else {
            while (arr[idx_stack[idx_stack.length - 1]] < e) {
                result_arr[idx_stack.pop()] = e;
            }
            idx_stack.push(idx);
        }
    });
    console.log(result_arr.join(" "));
}
