//문제: 26057
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);
function solution(input) {
    const L = +input[0];
    const T = +input[1];
    console.log(2*T-L)
}