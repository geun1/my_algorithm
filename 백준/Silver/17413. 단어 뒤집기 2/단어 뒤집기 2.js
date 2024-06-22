//문제: 17413
//0. 문제 이해 :
//1. 시간 복잡도 확인:
//2. 적용 알고리즘 확인:
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    const str = input[0];
    const { enclosedSubstrings, nonEnclosedSubstrings } =
        extractSubstrings(str);
    const reversedNonEnclosedSubstrings = nonEnclosedSubstrings.map(
        (substring) =>
            substring
                .split("")
                .reverse()
                .join("")
                .split(" ")
                .reverse()
                .join(" ")
    );
    // reversedNonEnclosedSubstrings.reverse();
    // console.log(enclosedSubstrings, nonEnclosedSubstrings);
    let result = "";
    for (
        let i = 0;
        i < Math.max(enclosedSubstrings.length, nonEnclosedSubstrings.length);
        i++
    ) {
        reversedNonEnclosedSubstrings[i]
            ? (result += reversedNonEnclosedSubstrings[i])
            : "";
        enclosedSubstrings[i] ? (result += enclosedSubstrings[i]) : "";
    }
    console.log(result);
}

function extractSubstrings(str) {
    const regex = /<[^>]+>/g;
    const enclosedSubstrings = str.match(regex) || [];
    const nonEnclosedSubstrings = str.split(regex);
    // .filter((substring) => substring !== "");
    return {
        enclosedSubstrings,
        nonEnclosedSubstrings,
    };
}
