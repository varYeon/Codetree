const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const years = Number(input[0]);
const prices = input[1].split(' ').map(Number);

let buy = prices[0]; // min
let buyIndex = 0;
let sell = 0; // max

let result = 0;

for (let i = 1; i < years; i++) {
    if (prices[i] <= buy) {
        buy = prices[i];
        buyIndex = i;
    }
}

if (buyIndex = years - 1) result = -1;
else {
    for (let i = buyIndex; i < years; i++) {
        sell = buy;
        if (buyIndex)
            if (prices[i] >= sell) {
                sell = prices[i];
            }
    }
    if (sell === buy) result = -1;
    else result = sell - buy;
}

console.log(result);
