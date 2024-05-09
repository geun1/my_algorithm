//문제: 2578
//0. 문제 이해 :
//1. 시간 복잡도 확인:
//2. 적용 알고리즘 확인:
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    const inputs = input.map((nums) =>
        nums.split(" ").map((num) => Number(num))
    );
    const bingo = inputs.slice(0, 5);
    const target = inputs.slice(5, 10);
    const n = 5;

    let x = [0, 0, 0, 0, 0];
    let y = [0, 0, 0, 0, 0];
    let xy = [0, 0];

    console.log(sol());

    /**
     * 1) 빙고를 그린다
     * 2) 숫자를 부르면서 빙고를 지운다.
     * 3) 숫자 부를때마다 빙고가 몇갠지 확인한다.
     * 4) 빙고가 3개가 되면 끝낸다.
     */

    //* 로직함수
    function sol() {
        let count = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                del(target[i][j]);
                count++;
                if (checkBingo()) {
                    return count;
                }
            }
        }
    }

    function checkBingo() {
        let bingoCount = 0;
        for (let i = 0; i < n; i++) {
            if (x[i] === -5) {
                bingoCount++;
                if (bingoCount >= 3) {
                    return true;
                }
            }
            if (y[i] === -5) {
                bingoCount++;
                if (bingoCount >= 3) {
                    return true;
                }
            }
        }
        for (let i = 0; i < 2; i++) {
            if (xy[i] <= -5) {
                bingoCount++;
                if (bingoCount >= 3) {
                    return true;
                }
            }
        }
    }

    function del(delNum) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (bingo[i][j] === delNum) {
                    bingo[i][j] = -1;
                    x[i] += -1;
                    y[j] += -1;
                    checkXY(i, j);
                    return;
                }
            }
        }
    }
    function checkXY(i, j) {
        for (let a = 0; a < n; a++) {
            if (i === a && j === a) {
                xy[0] += -1;
            }
        }
        for (let b = 0; b < n; b++) {
            if (i === b && j === 4 - b) {
                xy[1] += -1;
            }
        }
    }
}
