const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);

const bigOne = Number.MAX_SAFE_INTEGER;
let divideMin = bigOne;

let totalSum = 0;
for (let a = 0; a < 5; a++) {
    totalSum += abilities[a];
}

function getDiff(i, j, k, l) {
    const sum1 = abilities[i] + abilities[j];
    const sum2 = abilities[k] + abilities[l];
    const sum3 = totalSum - sum1 - sum2;

    if (sum1 === sum2 || sum2 === sum3 || sum1 === sum3) return bigOne;
    else {
        const max = Math.max(sum1, sum2, sum3);
        const min = Math.min(sum1, sum2, sum3);

        return max - min;
    }
}

for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
        for (let k = 0; k < 5; k++) {
            if (k === i || k === j) continue;
            for (let l = k + 1; l < 5; l++) {
                if (l === i || l === j) continue;
                divideMin = Math.min(divideMin, getDiff(i, j, k, l));
            }
        }
    }
}

if (divideMin === bigOne) divideMin = -1;

console.log(divideMin);
