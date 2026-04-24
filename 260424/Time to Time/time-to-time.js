const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);

let hour = a, mins = b;
let elapsed_time = 0;

while (true) {
    if (hour === c && mins === d) {
        break;
    }

    elapsed_time += 1;
    mins += 1;

    if (mins === 60) {
        hour += 1;
        mins = 0;
    }
}

console.log(elapsed_time);
