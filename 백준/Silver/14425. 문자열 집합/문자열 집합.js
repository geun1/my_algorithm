//문제: 14425
//0. 문제 이해 :
//1. 시간 복잡도 확인: 2초 -> 2억연산 n,m <= 1만,
//2. 적용 알고리즘 확인:
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    // const [n, m] = input.shift().split(" ").map(Number);
    // object_n = {};
    // arr_m = input.slice(n, n + m);
    // let ans = 0;
    // for (let i = 0; i < n; i++) {
    //     object_n[input[i]] = 1;
    // }
    // for (let i = 0; i < m; i++) {
    //     if (object_n[arr_m[i]]) {
    //         ans++;
    //     }
    // }
    // console.log(ans);
    const [n, m] = input.shift().split(" ").map(Number);
    const set = new Set(input.splice(0, n));

    let ans = 0;
    for (let i = 0; i < m; i++) {
        if (set.has(input[i])) ans++;
    }
    // input.forEach((e) => {
    //     if (set.has(e)) ans++;
    // });
    console.log(ans);
}