//문제: 2251
//0. 문제 이해 :
//1. 시간 복잡도 확인:
//2. 적용 알고리즘 확인:
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    const [A, B, C] = input[0].split(" ").map(Number);
    const visited = Array.from(Array(201), () =>
        Array.from(Array(201), () => Array(201).fill(false))
    );
    const result = [];
    const q = [[0, 0, C]];
    visited[0][0][0] = true;
    while (q.length) {
        const [a, b, c] = q.shift();
        if (!visited[a][b][c]) {
            visited[a][b][c] = true;
            if (a === 0) {
                result.push(c);
            }
            if (a + b > B) {
                if (!visited[a + b - B][B][c]) {
                    q.push([a + b - B, B, c]);
                }
            } else {
                if (!visited[0][a + b][c]) {
                    q.push([0, a + b, c]);
                }
            }
            if (a + c > C) {
                if (!visited[a + c - C][b][C]) {
                    q.push([a + c - C, b, C]);
                }
            } else {
                if (!visited[0][b][a + c]) {
                    q.push([0, b, a + c]);
                }
            }
            if (b + a > A) {
                if (!visited[A][b + a - A][c]) {
                    q.push([A, b + a - A, c]);
                }
            } else {
                if (!visited[b + a][0][c]) {
                    q.push([b + a, 0, c]);
                }
            }
            if (b + c > C) {
                if (!visited[a][b + c - C][C]) {
                    q.push([a, b + c - C, C]);
                }
            } else {
                if (!visited[a][0][b + c]) {
                    q.push([a, 0, b + c]);
                }
            }
            if (c + a > A) {
                if (!visited[A][b][c + a - A]) {
                    q.push([A, b, c + a - A]);
                }
            } else {
                if (!visited[c + a][b][0]) {
                    q.push([c + a, b, 0]);
                }
            }
            if (c + b > B) {
                if (!visited[a][B][c + b - B]) {
                    q.push([a, B, c + b - B]);
                }
            } else {
                if (!visited[a][c + b][0]) {
                    q.push([a, c + b, 0]);
                }
            }
        }
    }
    console.log(result.sort((a, b) => a - b).join(" "));
}
