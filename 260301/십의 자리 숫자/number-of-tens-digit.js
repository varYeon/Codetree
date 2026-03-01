const fs = require("fs");
let numbers = fs.readFileSync(0).toString().trim().split(" ");

for (let i = 1; i <= 9; i++) {
    let count = 0;
    for (let j = 0; j < numbers.length; j++) {
        const ten = Math.floor(numbers[j] / 10);
        if (ten == i) count++;
    }
    console.log(`${i} - ${count}`);
}
