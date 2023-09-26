//문제: Doit020
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
    const arr = input.map(Number);
    const mergeSort = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }

        // 배열 절반
        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        // 나뉜 배열을 재귀적으로 정렬
        const leftSorted = mergeSort(left);
        const rightSorted = mergeSort(right);

        // 정렬된 두 배열을 병합
        return merge(leftSorted, rightSorted);
    };

    const merge = (left, right) => {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        // 왼쪽과 오른쪽 배열을 비교하여 작은 값을 결과 배열에 추가
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        // 남은 요소들을 결과 배열에 추가
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    };

    const sortedArr = mergeSort(arr);
    console.log(sortedArr.join("\n"));
}
