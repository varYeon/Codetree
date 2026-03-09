// **

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const years = Number(input[0]);
const prices = input[1].split(' ').map(Number);

let buy = prices[0]; // min
let maxProfit = 0;

for (let i = 1; i < years; i++) {
    const profit = prices[i] - buy;

    if(prices[i] <= buy) buy = prices[i];
    if(profit >= maxProfit) maxProfit = profit;
}

console.log(maxProfit);
