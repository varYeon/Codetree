const fs = require("fs");
let numbers = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for (let i = 10; i >= 1; i--) {
    let count = 0;
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] === 0) break;

        const ten = Math.floor(numbers[j] / 10);
        if (ten === i) count++;
    }
    console.log(`${i*10} - ${count}`)
}