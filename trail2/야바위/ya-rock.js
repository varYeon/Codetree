const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' ').map(Number));

let maxCnt = 0;
const cups = [0, 0, 0, 0];

for (let i = 1; i <= 3; i++) { // 조약돌 넣기
    cups[i] += 1;
    let cnt = 0;

    for (let j = 0; j < n; j++) {
        const [a, b, c] = commands[j]; 
        // a번과 b번을 교환 후 c번을 염

        const cupA = cups[a];
        cups[a] = cups[b];
        cups[b] = cupA;

        if (cups[c] === 1) cnt++;
    }

    maxCnt = Math.max(maxCnt, cnt);

    // 초기화
    for (let k = 1; k <= 3; k++) {
        cups[k] = 0;
    }
}

console.log(maxCnt);
