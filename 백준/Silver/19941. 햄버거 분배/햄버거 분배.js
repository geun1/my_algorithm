const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, P] = input[0].split(' ').map(Number);
const seats = input[1].split('');

function distributeHamburgers(N, P, seats) {
    let count = 0;
    for (let i = 0; i < N; i++) {
        if (seats[i] === 'H') {
            for (let j = Math.max(i - P, 0); j <= i + P && j < N; j++) {
                if (seats[j] === 'P') {
                    seats[j] = '.';
                    count++;
                    break;
                }
            }
        }
    }
    return count;
}

console.log(distributeHamburgers(N, P, seats));
