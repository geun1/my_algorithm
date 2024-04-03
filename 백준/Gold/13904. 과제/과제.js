//문제: 13904
//0. 문제 이해 : n -> 줄 수, d -> 과제 마감일, w -> 점수, 하루에 과제 한개 ㄱㄴ
//1. 시간 복잡도 확인: 1초 -> 1억
//2. 적용 알고리즘 확인: 정렬 후 그리디
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    let n = parseInt(input[0]);
    let arr = [];
    let max = 0;

    for (let i = 1; i <= n; i++) {
        let [d, w] = input[i].split(" ").map(Number);
        arr.push([d, w]);
        max = Math.max(max, d);
    }
    arr.sort((a, b) => b[1] - a[1]);
    let result = 0;
    let visited = new Array(max + 1).fill(false);
    for (let i = 0; i < n; i++) {
        let [d, w] = arr[i];
        for (let j = d; j >= 1; j--) {
            // console.log(visited, result);
            if (!visited[j]) {
                visited[j] = true;
                result += w;
                break;
            }
        }
    }
    console.log(result);
}
