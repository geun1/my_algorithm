//문제: 17264
//0. 문제 이해 :
//1. 시간 복잡도 확인:
//2. 적용 알고리즘 확인:
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    const [N, P] = input.shift().split(" ").map(Number);
    const [W, L, G] = input.shift().split(" ").map(Number);
    const players_info = {};
    for (let i = 0; i < P; i++) {
        const [k, v] = input[i].split(" ");
        players_info[k] = v;
    }
    let point = 0;
    answer = "";
    for (let i = P; i < N + P; i++) {
        if (players_info[input[i]] === "W") {
            point += W;
        } else {
            point -= L;
            if (point < 0) point = 0;
        }
        if (point >= G) {
            answer = "I AM NOT IRONMAN!!";
            console.log(answer);
            return;
        }
        // console.log(point);
    }
    if (answer === "") {
        answer = "I AM IRONMAN!!";
    }
    console.log(answer);
}
