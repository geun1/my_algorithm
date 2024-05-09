class MinHeap {
    constructor() {
        this.heap = [null];
    }
    heap_push(value) {
        // 아래에서 위로
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        while (parentIndex !== 0 && this.heap[parentIndex] > value) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[currentIndex];
            this.heap[currentIndex] = temp;
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    heap_pop() {
        if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우
        // 위에서 아래로
        let returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while (
            this.heap[currentIndex] > this.heap[leftIndex] ||
            this.heap[currentIndex] > this.heap[rightIndex]
        ) {
            const temp = this.heap[currentIndex];
            if (this.heap[leftIndex] > this.heap[rightIndex]) {
                this.heap[currentIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = temp;
                currentIndex = rightIndex;
            } else {
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex * 2;
            rightIndex = leftIndex + 1;
        }
        return returnValue;
    }
    heap_return() {
        return this.heap;
    }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    const minHeap = new MinHeap();
    // let n = input.shift();
    // let answer = "";
    // input.forEach((e) => {
    //     if (e === "0") {
    //         if (minHeap.heap.length === 1) {
    //             answer += "0\n";
    //         } else {
    //             answer += minHeap.heap_pop() ?? 0;
    //             answer += "\n";
    //         }
    //     } else {
    //         minHeap.heap_push(+e);
    //     }
    // });
    // console.log(answer.trim());
    const [n, m] = input[0].split(" ").map(Number);
    const arr = input[1].split(" ").map(Number);
    let result = BigInt(arr.reduce((acc, cur) => acc + cur, 0));
    arr.forEach((e) => {
        minHeap.heap_push(BigInt(e));
    });
    for (let i = 0; i < m; i++) {
        let a = minHeap.heap_pop();
        let b = minHeap.heap_pop();
        // console.log(a, b);
        result += a;
        result += b;
        minHeap.heap_push(a + b);
        minHeap.heap_push(a + b);
    }
    console.log(result.toString());
}