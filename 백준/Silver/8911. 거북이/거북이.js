//문제: 8911
//0. 문제 이해 :
//1. 시간 복잡도 확인:
//2. 적용 알고리즘 확인:
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    input.shift();
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let x = 0;
        let y = 0;
        let dx = 0;
        let dy = 1;
        let minX = 0;
        let minY = 0;
        let maxX = 0;
        let maxY = 0;
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === "F") {
                x += dx;
                y += dy;
            } else if (input[i][j] === "B") {
                x -= dx;
                y -= dy;
            } else if (input[i][j] === "L") {
                let temp = dx;
                dx = -dy;
                dy = temp;
            } else if (input[i][j] === "R") {
                let temp = dx;
                dx = dy;
                dy = -temp;
            }
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }
        result.push(Math.abs(maxX - minX) * Math.abs(maxY - minY));
    }
    console.log(result.join("\n"));
}
