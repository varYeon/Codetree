const fs = require("fs");
let numbers = fs.readFileSync(0).toString().trim().split(" ");

for (let i = 1; i <= 6; i++) {
    let count = 0;
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] == i) count++;
    }
    console.log(`${i} - ${count}`);
}
