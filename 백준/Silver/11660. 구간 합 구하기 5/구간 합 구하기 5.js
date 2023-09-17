//문제: Doit_004
//0. 문제 이해 : NxN matrix에서 (x1,y1) ~ (x2,y2)의 구간 합 구하기 를 M번 수행
//1. 시간 복잡도 확인: 1초 => 1억 연산 M은 최대 10만 (회당 1000의 연산) N은 최대 1024 => 누적합을 이용한 구간합 사용
//2. 적용 알고리즘 확인: 구간합 알고리즘
//3. 맞는 자료구조 확인: 배열
const { SlowBuffer } = require("buffer");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    const [N, M] = input.shift().split(" ").map(Number);
    let answer = "";
    const arr = [];
    input.splice(0, N).forEach((e) => {
        arr.push(e.split(" ").map(Number));
    }); // NxN 배열 추출

    const cum_sum_arr = Array.from(Array(N), () => new Array(N));
    // 누적합 배열 생성

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i === 0) {
                if (j === 0) cum_sum_arr[i][j] = arr[i][j];
                else {
                    cum_sum_arr[i][j] = cum_sum_arr[i][j - 1] + arr[i][j];
                }
            } else if (j === 0) {
                cum_sum_arr[i][j] = cum_sum_arr[i - 1][j] + arr[i][j];
            } else {
                cum_sum_arr[i][j] =
                    cum_sum_arr[i - 1][j] +
                    cum_sum_arr[i][j - 1] -
                    cum_sum_arr[i - 1][j - 1] +
                    arr[i][j];
            }
        }
    } // 누적합 배열 초기화

    input.forEach((e) => {
        let result = 0;
        const [x1, y1, x2, y2] = e.split(" ").map(Number);
        // console.log(x1, y1, x2, y2);
        if (x1 === 1 && y1 === 1) {
            result = cum_sum_arr[x2 - 1][y2 - 1];
        } else if (y1 === 1) {
            result = cum_sum_arr[x2 - 1][y2 - 1] - cum_sum_arr[x1 - 2][y2 - 1];
        } else if (x1 === 1) {
            result = cum_sum_arr[x2 - 1][y2 - 1] - cum_sum_arr[x2 - 1][y1 - 2];
        } else {
            result =
                cum_sum_arr[x2 - 1][y2 - 1] -
                cum_sum_arr[x2 - 1][y1 - 2] -
                cum_sum_arr[x1 - 2][y2 - 1] +
                cum_sum_arr[x1 - 2][y1 - 2];
        }
        answer += result + "\n";
    });
    console.log(answer.trim());
    // console.table(arr);
    // console.table(cum_sum_arr);
}
