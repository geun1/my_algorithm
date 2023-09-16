//문제: Doit_003
//0. 문제 이해 : M번 동안 둘째 줄에 나온 수 열의 구간 합을 구해라
//1. 시간 복잡도 확인: 1초 => 1억 연산 M 최대 10만, N 최대 10만 -> 브루트포스(O(N^2))로 풀면 최대 200억
//2. 적용 알고리즘 확인: 구간합 알고리즘 => 누적합 구하고 구간 합 공식 적용
//3. 맞는 자료구조 확인: 배열
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const arr = input[1].split(" ").map(Number); // 수 배열
    const cum_sum_arr = [];
    arr.reduce((acc, curr) => {
        cum_sum_arr.push(acc + curr);
        return acc + curr;
    }, 0); // 누적합 구하기 S[i] = S[i-1] + A[i]
    // for (let i = 1; i < N; i++) {
    //     cum_sum_arr.push(cum_sum_arr[i - 1] + arr[i]);
    // } // 누적합 구하기 S[i] = S[i-1] + A[i]
    // console.log(cum_sum_arr);
    let i = 0;
    let j = 0;
    let answer = "";
    for (let idx = 2; idx < M + 2; idx++) {
        [i, j] = input[idx].split(" ").map(Number); //각 i,j
        // 구간합 공식 : i~j 합 -> S[j-1] - S[i-2];
        i === 1 //i가 1일경우 바로 S[j-1]출력
            ? (answer += cum_sum_arr[j - 1])
            : (answer += cum_sum_arr[j - 1] - cum_sum_arr[i - 2]);
        answer += "\n";
    }
    console.log(answer.trim());
}
